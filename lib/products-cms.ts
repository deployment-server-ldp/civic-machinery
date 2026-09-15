/**
 * Client-side CMS helpers for the /admin "Machines" tab.
 *
 * Unlike blog posts (one Markdown file per post), CMS-added machines live in
 * a single JSON array at content/products-cms.json, committed to GitHub with
 * the owner's personal access token exactly like blog posts are. GitHub
 * Actions then rebuilds the site and deploys it to Hostinger — the JSON file
 * is a plain module import in lib/products.ts, so every machine added here
 * flows into the same `products` array every page/sitemap/category listing
 * already reads, with no other file needing to change.
 */

import type { Product, CategorySlug } from "./products";
import { products } from "./products";
import { fileToBase64, getFile, putFile, slugify, utf8ToBase64 } from "./cms";

export const PRODUCTS_CMS_PATH = "content/products-cms.json";

/** The five existing destinations a new machine can be filed under. */
export interface CategoryOption {
  key: string;
  label: string;
  category: CategorySlug;
  subcategory?: string;
}

export const CATEGORY_OPTIONS: CategoryOption[] = [
  { key: "packing", label: "Cigarette Packing Machines", category: "packing-machines" },
  { key: "wrapping", label: "Cigarette Box Wrapping Machines", category: "wrapping-machines" },
  {
    key: "making",
    label: "Cigarette Manufacturing Machines",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
  },
  {
    key: "filter",
    label: "Cigarette Filter Making Machines",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
  },
  {
    key: "cutter",
    label: "Tobacco Cutter, Feeder & Reclaimer Machines",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
  },
];

export const CONDITIONS: Product["condition"][] = ["New", "Used", "New / Reconditioned"];

/** Everything the Machines form collects, before it's shaped into a Product. */
export interface MachineFields {
  slug: string;
  name: string;
  categoryOptionKey: string;
  brand: string;
  condition: Product["condition"];
  tagline: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** One paragraph per array entry. */
  intro: string[];
  /** Repeatable label/value rows, rendered as the spec table. */
  specs: { label: string; value: string }[];
  applications: string[];
  image: string;
}

export const emptyMachine = (): MachineFields => ({
  slug: "",
  name: "",
  categoryOptionKey: CATEGORY_OPTIONS[0].key,
  brand: "",
  condition: "New",
  tagline: "",
  h1: "",
  metaTitle: "",
  metaDescription: "",
  keywords: [],
  intro: [""],
  specs: [{ label: "", value: "" }],
  applications: [],
  image: "",
});

/** All slugs currently in use (hardcoded catalogue + CMS machines), for uniqueness checks. */
export function existingSlugs(excludeSlug?: string): Set<string> {
  return new Set(products.filter((p) => p.slug !== excludeSlug).map((p) => p.slug));
}

/** Turn a name into a unique, URL-safe slug, appending -2/-3/… on collision. */
export function uniqueSlug(name: string, taken: Set<string>): string {
  const base = slugify(name) || "machine";
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(`${base}-${n}`)) n++;
  return `${base}-${n}`;
}

const option = (key: string): CategoryOption =>
  CATEGORY_OPTIONS.find((o) => o.key === key) ?? CATEGORY_OPTIONS[0];

/** Build the Product object that gets written into content/products-cms.json. */
export function buildProduct(f: MachineFields): Product {
  const opt = option(f.categoryOptionKey);
  const intro = f.intro.map((p) => p.trim()).filter(Boolean);
  const specs = f.specs
    .map((s) => ({ label: s.label.trim(), value: s.value.trim() }))
    .filter((s) => s.label && s.value);
  const applications = f.applications.map((a) => a.trim()).filter(Boolean);

  return {
    slug: f.slug,
    name: f.name.trim(),
    category: opt.category,
    subcategory: opt.subcategory,
    brand: f.brand.trim() || undefined,
    condition: f.condition,
    tagline: f.tagline.trim(),
    h1: f.h1.trim() || undefined,
    metaTitle: f.metaTitle.trim() || undefined,
    metaDescription: f.metaDescription.trim(),
    keywords: f.keywords.map((k) => k.trim()).filter(Boolean),
    intro: intro.length ? intro : [f.tagline.trim()],
    features: [],
    specs: [],
    applications: applications.length ? applications : undefined,
    image: f.image || undefined,
    featureTable: specs.length ? specs : undefined,
  };
}

/** Read content/products-cms.json (creates-on-write if it doesn't exist yet). */
export async function loadCmsProducts(
  token: string,
): Promise<{ items: Product[]; sha?: string }> {
  const got = await getFile(token, PRODUCTS_CMS_PATH);
  if (!got) return { items: [] };
  try {
    const items = JSON.parse(got.text) as Product[];
    return { items: Array.isArray(items) ? items : [], sha: got.sha };
  } catch {
    return { items: [], sha: got.sha };
  }
}

/** Write the full machines array back as one commit. */
export async function saveCmsProducts(token: string, items: Product[]): Promise<void> {
  const json = JSON.stringify(items, null, 2) + "\n";
  await putFile(
    token,
    PRODUCTS_CMS_PATH,
    utf8ToBase64(json),
    `CMS: update machines (${items.length} total)`,
  );
}

/** Upload a machine's photo, returning the public path to store on the record. */
export async function uploadMachineImage(
  token: string,
  slug: string,
  file: File,
): Promise<string> {
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const path = `public/images/machines/${slug}.${ext}`;
  const base64 = await fileToBase64(file);
  await putFile(token, path, base64, `CMS: image for ${slug}`);
  return `/images/machines/${slug}.${ext}`;
}

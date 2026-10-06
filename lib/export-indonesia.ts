import { getExportMachineSections } from "@/lib/export-machine-sections";
import { productHref, type Product } from "@/lib/products";

/**
 * Machine speed/format table for the Indonesia export page (section E of the
 * brief). Every value is read from the product's own featureTable/specs row
 * in lib/products.ts — never hand-typed — so the table stays in sync with
 * the product pages automatically. A product with no speed-like row shows
 * "On request" rather than a guessed number.
 */

export interface MachineSpeedRow {
  product: Product;
  href: string;
  /** Short category label, e.g. "Cigarette Maker". */
  type: string;
  speed: string;
  /** Circumference / rod length / size info, or "—" when not applicable. */
  formats: string;
}

const TYPE_LABELS: Record<string, string> = {
  making: "Cigarette Maker",
  packing: "Packing Machine",
  filter: "Filter Maker",
  wrapping: "Wrapping Machine",
  cutter: "Tobacco Processing",
};

function rows(product: Product) {
  return product.featureTable?.length ? product.featureTable : product.specs;
}

/** First row whose label matches any of the given patterns, in order. */
function findRow(product: Product, patterns: RegExp[]): string | null {
  const r = rows(product);
  for (const re of patterns) {
    const match = r.find((row) => re.test(row.label));
    if (match) return match.value;
  }
  return null;
}

function buildSpeed(product: Product): string {
  // Prefer a primary "overall output" row over a narrower internal-stage
  // speed (e.g. "Production Capacity" over "Rod Speed Range").
  return (
    findRow(product, [/^machine speed$/i, /^production capacity$/i, /^capacity$/i, /^speed$/i]) ??
    findRow(product, [/speed/i, /capacity/i]) ??
    "On request"
  );
}

function buildFormats(product: Product): string {
  const parts: string[] = [];
  const circumference = findRow(product, [/circumference/i]);
  if (circumference) parts.push(`${circumference} circumference`);
  const diameter = findRow(product, [/rod diameter/i]);
  if (diameter) parts.push(`${diameter} diameter`);
  const rodLength = findRow(product, [/rod length/i, /filter length/i]);
  if (rodLength) parts.push(`${rodLength} rod`);
  const sizes = findRow(product, [/cigarette sizes/i, /setup size/i]);
  if (sizes) parts.push(sizes);

  if (parts.length) return parts.join(" · ");

  // No dimensional data on file (e.g. soft-pack "Type" row embeds the pack
  // size, support equipment has none at all) — fall back to a Type row that
  // mentions a size, otherwise mark it not applicable.
  const type = findRow(product, [/^type$/i]);
  if (type && /mm/i.test(type)) return type;
  return "—";
}

export function getIndonesiaMachineSpeedRows(): MachineSpeedRow[] {
  return getExportMachineSections().flatMap((section) =>
    section.products.map((product) => ({
      product,
      href: productHref(product),
      type: TYPE_LABELS[section.key] ?? section.heading,
      speed: buildSpeed(product),
      formats: buildFormats(product),
    })),
  );
}

/**
 * The circumference/rod-length range makers handle, read from the first
 * cigarette-making product that has both rows (every maker in the current
 * catalogue shares the same two ranges, so any one of them is representative
 * — this stays correct automatically if that ever changes).
 */
export function getMakerFormatRange(): { circumference: string; rodLength: string } | null {
  const makers = getExportMachineSections().find((s) => s.key === "making")?.products ?? [];
  for (const product of makers) {
    const circumference = findRow(product, [/circumference/i]);
    const rodLength = findRow(product, [/rod length/i]);
    if (circumference && rodLength) return { circumference, rodLength };
  }
  return null;
}

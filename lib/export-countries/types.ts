import type { Faq } from "@/lib/products";

export type ExportRegion =
  | "Asia"
  | "Middle East"
  | "Europe"
  | "North America"
  | "Other Regions";

/**
 * One country's full export landing page content. The `/export-to/[country]`
 * route is a single shared template — every field here maps to one section
 * of that template, so adding a country is adding one object to the right
 * region file, never a new component or route.
 */
export interface ExportCountry {
  /** Display name, e.g. "Saudi Arabia". */
  name: string;
  /** Lowercase, hyphenated URL slug, e.g. "saudi-arabia". */
  slug: string;
  region: ExportRegion;

  /** <title> tag content (without the site name suffix). */
  metaTitle: string;
  /** Meta description, ~150-160 chars. */
  metaDescription: string;

  /** Hero paragraph directly under the H1. Must not claim local presence. */
  heroIntro: string;

  /** "Cigarette Machinery Suppliers in [Country]" — market/context overview. */
  overview: string[];
  /** "Guide to Sourcing Tobacco Machinery in [Country]" */
  sourcingGuide: string[];
  /** "What to Look for in a Tobacco Machinery Supplier for [Country]" */
  supplierSelection: string[];
  /** "Why Choose Civic Tobacco Machinery for [Country]" — short bullet points. */
  whyChooseUs: string[];
  /** "Machinery for Different Production Requirements in [Country]" */
  productionScale: string[];
  /** "Used & Reconditioned Machinery for [Country]" */
  usedReconditioned: string[];
  /** "Complete Tobacco Machinery Solutions for [Country]" */
  completeSolutions: string[];
  /** "Exporting Machinery from Pakistan to [Country]" */
  exportShipping: string[];
  /** "Technical Support & Spare Parts for [Country]" */
  technicalSupport: string[];

  faqs: Faq[];
}

import type { Faq } from "@/lib/products";

export type ExportRegion =
  | "Asia"
  | "Middle East"
  | "Europe"
  | "North America"
  | "Other Regions";

/** One labeled card — a titled point rendered in a grid instead of a plain paragraph. */
export interface SectionCard {
  title: string;
  text: string;
}

/** One label/value row in the "quick facts" sidebar panel (duty %, port, transit time, etc.). */
export interface QuickFact {
  label: string;
  value: string;
}

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

  /**
   * Optional "What We Export to [Country]" service-card grid, shown right
   * after the hero, before "Our Machines". Omit to skip the section.
   */
  machineryCategories?: SectionCard[];
  /**
   * Optional at-a-glance sidebar (customs duty, VAT, port, transit time…)
   * shown beside the overview. Omit to let the overview run full width.
   */
  quickFacts?: QuickFact[];

  /** "Cigarette Machinery Suppliers in [Country]" — market/context overview. */
  overview: string[];
  /** "Guide to Sourcing Tobacco Machinery in [Country]" */
  sourcingGuide: string[];
  /** "What to Look for in a Tobacco Machinery Supplier for [Country]" */
  supplierSelection: string[];
  /** Card-grid version of supplierSelection. Takes priority when present. */
  supplierSelectionPoints?: SectionCard[];
  /** "Why Choose Civic Tobacco Machinery for [Country]" — short bullet points. */
  whyChooseUs: string[];
  /** Card-grid version of whyChooseUs. Takes priority when present. */
  whyChooseUsPoints?: SectionCard[];
  /** "Machinery for Different Production Requirements in [Country]" */
  productionScale: string[];
  /** Card-grid version of productionScale (e.g. small/medium/large tiers). */
  productionScalePoints?: SectionCard[];
  /** "Used & Reconditioned Machinery for [Country]" */
  usedReconditioned: string[];
  /** Optional stat pulled out into a callout beside the usedReconditioned text. */
  usedReconditionedStat?: { value: string; label: string };
  /** "Complete Tobacco Machinery Solutions for [Country]" */
  completeSolutions: string[];
  /** Card-grid version of completeSolutions. Takes priority when present. */
  completeSolutionsPoints?: SectionCard[];
  /** "Exporting Machinery from Pakistan to [Country]" */
  exportShipping: string[];
  /** Card-grid version of exportShipping. Takes priority when present. */
  exportShippingPoints?: SectionCard[];
  /** "Technical Support & Spare Parts for [Country]" */
  technicalSupport: string[];
  /** Card-grid version of technicalSupport. Takes priority when present. */
  technicalSupportPoints?: SectionCard[];

  faqs: Faq[];
}

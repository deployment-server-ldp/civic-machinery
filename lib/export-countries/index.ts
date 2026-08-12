import type { ExportCountry, ExportRegion } from "./types";
import { asiaCountries } from "./asia";
import { middleEastCountries } from "./middle-east";
import { europeCountries } from "./europe";
import { northAmericaCountries } from "./north-america";
import { otherRegionCountries } from "./other-regions";

export type { ExportCountry, ExportRegion } from "./types";

/**
 * Every export market, in one place. Add a new country by adding one object
 * to the relevant region file (asia.ts, middle-east.ts, europe.ts,
 * north-america.ts or other-regions.ts) — the hub page, the country route,
 * metadata and the sitemap all pick it up automatically.
 */
export const exportCountries: ExportCountry[] = [
  ...asiaCountries,
  ...middleEastCountries,
  ...europeCountries,
  ...northAmericaCountries,
  ...otherRegionCountries,
];

/** Display order for the region tabs on /export-to/. */
export const exportRegionOrder: ExportRegion[] = [
  "Asia",
  "Middle East",
  "Europe",
  "North America",
  "Other Regions",
];

export const getExportCountry = (slug: string): ExportCountry | undefined =>
  exportCountries.find((c) => c.slug === slug);

/** Countries for a region, sorted alphabetically by display name. */
export const getCountriesByRegion = (region: ExportRegion): ExportCountry[] =>
  exportCountries
    .filter((c) => c.region === region)
    .sort((a, b) => a.name.localeCompare(b.name));

/** Minimal, hub-page-safe projection — no long-form content ships to the client. */
export interface ExportCountrySummary {
  name: string;
  slug: string;
  region: ExportRegion;
}

export const exportCountrySummaries: ExportCountrySummary[] = exportCountries.map((c) => ({
  name: c.name,
  slug: c.slug,
  region: c.region,
}));

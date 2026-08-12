import {
  getProductsByCategory,
  getProductsBySubcategory,
  type Product,
} from "@/lib/products";

/**
 * The five machinery categories shown on every /export-to/[country] page, in
 * display order. Each `products()` call reads straight from the existing
 * catalogue in lib/products.ts — the export pages never duplicate machine
 * data, images or specs.
 */
export interface MachineSection {
  key: string;
  /** Heading without the country suffix, e.g. "Cigarette Making Machines". */
  heading: string;
  products: Product[];
}

export function getExportMachineSections(): MachineSection[] {
  return [
    {
      key: "making",
      heading: "Cigarette Making Machines",
      products: getProductsBySubcategory("cigarette-making-machines"),
    },
    {
      key: "packing",
      heading: "Cigarette Packing Machines",
      products: getProductsByCategory("packing-machines"),
    },
    {
      key: "filter",
      heading: "Cigarette Filter Making Machines",
      products: getProductsBySubcategory("cigarette-filter-making-machines"),
    },
    {
      key: "wrapping",
      heading: "Cigarette Wrapping Machines",
      products: getProductsByCategory("wrapping-machines"),
    },
    {
      key: "cutter",
      heading: "Tobacco Cutter, Feeder & Reclaimer Machines",
      products: getProductsBySubcategory("tobacco-machinery"),
    },
  ];
}

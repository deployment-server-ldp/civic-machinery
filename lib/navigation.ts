import {
  categories,
  getProductsByCategory,
  getSubcategoriesFor,
  getProductsBySubcategory,
  productHref,
  categoryHref,
  subcategoryHref,
} from "./products";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  headingHref?: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  /** Simple flyout (single column). */
  children?: NavLink[];
  /** Mega menu (multiple columns). */
  columns?: NavColumn[];
}

const cat = (slug: string) => categories.find((c) => c.slug === slug)!;

const packingCat = cat("packing-machines");
const wrappingCat = cat("wrapping-machines");
const manufacturingCat = cat("manufacturing-machines");
const usedCat = cat("used-machinery");

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: packingCat.navLabel,
    href: categoryHref(packingCat),
    children: [
      { label: "Cigarette Packing Machines", href: categoryHref(packingCat) },
      ...getProductsByCategory("packing-machines").map((p) => ({
        label: p.name.replace(" Cigarette Packing Machine", "").replace(" Soft Pack Machine", " (Soft Pack)"),
        href: productHref(p),
      })),
    ],
  },
  {
    label: wrappingCat.navLabel,
    href: categoryHref(wrappingCat),
    children: [
      { label: "Cigarette Wrapping Machines", href: categoryHref(wrappingCat) },
      ...getProductsByCategory("wrapping-machines").map((p) => ({
        label: p.name.replace(" — Box Packing Machine", ""),
        href: productHref(p),
      })),
    ],
  },
  {
    label: manufacturingCat.navLabel,
    href: categoryHref(manufacturingCat),
    columns: getSubcategoriesFor("manufacturing-machines").map((sub) => ({
      heading: sub.navLabel,
      headingHref: subcategoryHref(sub),
      links: getProductsBySubcategory(sub.slug).map((p) => ({
        label: p.name
          .replace("Hauni ", "")
          .replace(" Filter Maker", "")
          .replace(" (Filter Configuration)", " (Filter)"),
        href: productHref(p),
      })),
    })),
  },
  {
    label: usedCat.navLabel,
    href: categoryHref(usedCat),
    children: getProductsByCategory("used-machinery").map((p) => ({
      label: p.name.replace("Used Cigarette ", "Used ").replace("Used ", "Used "),
      href: productHref(p),
    })),
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

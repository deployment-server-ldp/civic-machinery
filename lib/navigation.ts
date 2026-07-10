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
  /** Render as a bold, underlined heading (the category landing link). */
  heading?: boolean;
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

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    // Top-level items are dropdown triggers only (no own page, use "#").
    label: "Packing Machines",
    href: "#",
    children: [
      { label: "Cigarette Packing Machines", href: categoryHref(packingCat), heading: true },
      ...getProductsByCategory("packing-machines").map((p) => ({
        label: p.name.replace(" Cigarette Packing Machine", "").replace(" Soft Pack Machine", " (Soft Pack)"),
        href: productHref(p),
      })),
    ],
  },
  {
    label: "Wrapping Machines",
    href: "#",
    children: [
      { label: "Cigarette Wrapping Machines", href: categoryHref(wrappingCat), heading: true },
      ...getProductsByCategory("wrapping-machines").map((p) => ({
        label: p.name.replace(", Box Packing Machine", ""),
        href: productHref(p),
      })),
    ],
  },
  {
    label: "Manufacturing Machines",
    href: "#",
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
    // We don't keep a separate used inventory, so these point to the
    // relevant machine sections (our stock is largely reconditioned anyway).
    label: "Used Machinery",
    href: "#",
    children: [
      { label: "Used Manufacturing Machines", href: "/manufacturing-machines" },
      { label: "Used Cigarette Filter Machinery", href: "/cigarette-filter-making-machines" },
      { label: "Used Packing Machines", href: "/cigarette-packing-machines" },
      { label: "Used Wrapping Machines", href: "/cigarette-box-wrapping-machines" },
      { label: "Used Tobacco Machinery", href: "/tobacco-machinery" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

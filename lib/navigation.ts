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

/**
 * Top navigation. Category items are dropdown triggers only (href "#");
 * their machines link straight to the product pages. Blog lives in the footer.
 */
export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Cigarette Making",
    href: "#",
    children: [
      { label: "Mark 8 Post 64", href: "/cigarette-making-machines/mark-8-post-64" },
      { label: "Mark 8D Max 15", href: "/cigarette-making-machines/mark-8d-max-15" },
      { label: "Mark 9.5 with Lenze Servo Drives", href: "/cigarette-making-machines/mark-9-5-lenze-servo-drives" },
      { label: "Mark 9.5 with Max S & Tray Filler", href: "/cigarette-making-machines/mark-9-5-max-s-tray-filler" },
      { label: "MK-9 with Max S", href: "/cigarette-making-machines/mark-9-max-s" },
      { label: "Protos 70", href: "/cigarette-making-machines/protos-70" },
      { label: "Protos 80 ER", href: "/cigarette-making-machines/protos-80-er" },
    ],
  },
  {
    label: "Cigarette Packing",
    href: "#",
    children: [
      { label: "HLP-180", href: "/cigarette-packing-machines/hlp-180" },
      { label: "HLP-200", href: "/cigarette-packing-machines/hlp-200" },
      { label: "HLP-225", href: "/cigarette-packing-machines/hlp-225" },
      { label: "SASIB 3000 (Soft Pack)", href: "/cigarette-packing-machines/ssasib-3000" },
      { label: "SASIB 5000 (Soft Pack)", href: "/cigarette-packing-machines/ssasib-5000" },
    ],
  },
  {
    label: "Filter Machines",
    href: "#",
    children: [
      { label: "KDF-1", href: "/cigarette-filter-making-machines/kdf-1" },
      { label: "KDF-2", href: "/cigarette-filter-making-machines/kdf-2" },
      { label: "PM-5", href: "/cigarette-filter-making-machines/molins-pm-5" },
      { label: "Hollow Tube Maker", href: "/cigarette-filter-making-machines/hollow-tube-maker" },
    ],
  },
  {
    label: "Wrappers & Boxers",
    href: "#",
    children: [
      { label: "Regular Wrapper CP1", href: "/cigarette-box-wrapping-machines/regular-wrapper-cp1" },
      { label: "Naked Over Wrapper", href: "/cigarette-box-wrapping-machines/naked-over-wrapper" },
      { label: "Molins Boxer", href: "/cigarette-box-wrapping-machines/molins-boxer" },
      { label: "SASIB Boxer", href: "/cigarette-box-wrapping-machines/sasib-boxer" },
    ],
  },
  {
    label: "Cutter/Feeder/Reclaimer",
    href: "#",
    children: [
      { label: "Tobacco Feeder", href: "/tobacco-machinery/tobacco-feeder" },
      { label: "Cigarette Reclaimer", href: "/tobacco-machinery/cigarette-reclaimer" },
      { label: "Tobacco Cutter KT-400", href: "/tobacco-machinery/tobacco-cutters" },
      { label: "Tobacco Stem Flattener", href: "/tobacco-machinery/tobacco-stem-flattener" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

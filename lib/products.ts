/**
 * Product catalogue, the single source of truth for machines.
 *
 * Every category and product page, the mega menu, breadcrumbs, the sitemap
 * and the JSON-LD Product schema all read from the data below. Add a machine
 * here and it appears everywhere automatically.
 */

export type CategorySlug =
  | "packing-machines"
  | "wrapping-machines"
  | "manufacturing-machines";

export interface Category {
  slug: CategorySlug;
  /** Nav label used in the menu. */
  navLabel: string;
  /** SEO H1 / page title target. */
  title: string;
  /** Short meta description for the category landing page. */
  description: string;
  /** Intro paragraphs shown on the category page. */
  intro: string[];
  keywords: string[];
  /** Manufacturing Machines uses sub-categories (the mega menu). */
  hasSubcategories?: boolean;
}

export interface Subcategory {
  slug: string;
  category: CategorySlug;
  navLabel: string;
  title: string;
  description: string;
  intro: string[];
  keywords: string[];
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  /** Only set for machines that live under a Manufacturing sub-category. */
  subcategory?: string;
  brand?: string;
  condition: "New" | "Used" | "New / Reconditioned";
  /** One-line summary used on cards and as a fallback meta description. */
  tagline: string;
  /** Custom H1 for the product page (defaults to `name`). */
  h1?: string;
  /** Custom <title> for the product page (defaults to `name`). Keep < 60 chars. */
  metaTitle?: string;
  /** Full meta description. */
  metaDescription: string;
  keywords: string[];
  /** Body paragraphs. Written to read like a person wrote them. */
  intro: string[];
  features: string[];
  specs: { label: string; value: string }[];
  applications?: string[];
  /** Path to the main product photo. Falls back to a placeholder when unset. */
  image?: string;
  /**
   * When set, the "Key features" section renders as a spec-style table and the
   * separate "Specifications" section is hidden.
   */
  featureTable?: { label: string; value: string }[];
}

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export const categories: Category[] = [
  {
    slug: "packing-machines",
    navLabel: "Packing Machines",
    title: "Cigarette Packing Machines in Pakistan",
    description:
      "Cigarette packing machines in Pakistan, HLP and SASIB hard and soft pack lines from 180 to 225 packs per minute. Supplied, installed and supported by Civic Tobacco Machinery.",
    intro: [
      "A packing line is where your product finally takes shape, so it has to be steady, clean and easy to run shift after shift. At Civic Tobacco Machinery we supply cigarette packing machines in Pakistan that are chosen for exactly that, dependable output and packs that look the same every single time.",
      "Our range covers hard pack and soft pack formats, from 180 up to 225 packs per minute, with both new and carefully reconditioned options. Whether you are setting up a fresh line or adding capacity to an existing one, we help you match the right machine to your volume, your budget and the brands you produce.",
    ],
    keywords: [
      "Cigarette Packing Machines in Pakistan",
      "cigarette packing machine Pakistan",
      "hard pack machine",
      "soft pack machine",
    ],
  },
  {
    slug: "wrapping-machines",
    navLabel: "Wrapping Machines",
    title: "Cigarette Wrapping Machines in Pakistan",
    description:
      "Cigarette wrapping machines in Pakistan, overwrappers, boxers and cellophane wrapping machines that seal your packs cleanly. Sales, spares and service from Civic Tobacco Machinery.",
    intro: [
      "The wrapper is the last thing your customer sees before they open the pack, which is why a clean, tight seal matters so much. Civic Tobacco Machinery supplies cigarette wrapping machines in Pakistan that give you a neat film finish, a straight tear tape and packs that stay fresh on the shelf.",
      "From single-pack overwrappers to box wrapping and carton boxers, we cover the full range. Every machine we sell is checked, set up and handed over ready to run, with spares and service you can call on when you need them.",
    ],
    keywords: [
      "Cigarette Wrapping Machines Pakistan",
      "cigarette overwrapper Pakistan",
      "cellophane wrapping machine",
      "box packing machine",
    ],
  },
  {
    slug: "manufacturing-machines",
    navLabel: "Manufacturing Machines",
    title: "Cigarette Manufacturing Machines in Pakistan",
    description:
      "Cigarette manufacturing machines in Pakistan, Molins making machines, filter makers and tobacco machinery. New and reconditioned lines from Civic Tobacco Machinery.",
    intro: [
      "Making a good cigarette starts long before the pack. It starts with a maker that lays down an even rod, a filter line that cuts clean, and tobacco machinery that keeps the whole floor fed. Civic Tobacco Machinery supplies cigarette manufacturing machines in Pakistan across all three areas.",
      "We handle Molins making machines, KDF and PM filter makers, and the feeders, cutters and reclaimers that support them. Tell us the brands you run and the output you need, and we will help you build a line that holds its speed and quality day after day.",
    ],
    keywords: [
      "Cigarette Manufacturing Machines in Pakistan",
      "Tobacco Manufacturing Machines in Pakistan",
      "cigarette making machine Pakistan",
      "Molins machines",
    ],
    hasSubcategories: true,
  },
];

/* ------------------------------------------------------------------ */
/* Sub-categories (Manufacturing Machines mega menu)                   */
/* ------------------------------------------------------------------ */

export const subcategories: Subcategory[] = [
  {
    slug: "cigarette-making-machines",
    category: "manufacturing-machines",
    navLabel: "Cigarette Making Machines",
    title: "Cigarette Making Machines in Pakistan",
    description:
      "Cigarette making machines in Pakistan, Molins Mark 8 and Mark 9 makers and Protos lines. High-speed rod makers supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The maker is the heart of any cigarette factory. It takes cut tobacco and paper and turns them into a finished rod, thousands of times a minute, without a break in quality. Civic Tobacco Machinery supplies cigarette making machines in Pakistan that are built to hold that pace.",
      "Our line-up runs from the trusted Molins Mark 8 series through the faster Mark 9 makers and the Protos family. Each one can be matched with a suitable filter maker so the two run in step and give you a smooth, balanced line.",
    ],
    keywords: [
      "cigarette making machine Pakistan",
      "Molins Mark 8",
      "Molins Mark 9",
      "Protos maker",
    ],
  },
  {
    slug: "cigarette-filter-making-machines",
    category: "manufacturing-machines",
    navLabel: "Cigarette Filter Making Machines",
    title: "Cigarette Filter Making Machines in Pakistan",
    description:
      "Cigarette filter making machines in Pakistan, Molins KDF, Molins PM and hollow tube makers. Filter rod lines supplied and supported by Civic Tobacco Machinery.",
    intro: [
      "A good filter does more than finish the cigarette, it controls draw, firmness and the whole feel of the smoke. Civic Tobacco Machinery supplies cigarette filter making machines in Pakistan that turn out consistent rods your maker can rely on.",
      "We stock Molins KDF and Molins PM filter makers along with hollow tube machines for speciality formats. Whatever filter length or type you produce, we will help you pick a line that matches the speed of your makers.",
    ],
    keywords: [
      "cigarette filter making machine Pakistan",
      "Molins KDF",
      "Molins PM filter maker",
      "filter rod machine",
    ],
  },
  {
    slug: "tobacco-machinery",
    category: "manufacturing-machines",
    navLabel: "Tobacco Machinery",
    title: "Tobacco Machinery in Pakistan",
    description:
      "Tobacco machinery in Pakistan, feeders, cutters, reclaimers and stem flatteners that keep your primary and secondary floors running. Supplied by Civic Tobacco Machinery.",
    intro: [
      "Behind every maker and packer there is a set of quieter machines doing the heavy lifting, feeding tobacco, cutting it, saving what would otherwise be lost. Civic Tobacco Machinery supplies tobacco machinery in Pakistan that keeps this side of the floor moving.",
      "Feeders, cutters, reclaimers and stem flatteners all work together to hold a steady supply to your line and cut down on waste. We help you fit the right units around the makers and packers you already run.",
    ],
    keywords: [
      "Tobacco Machinery in Pakistan",
      "Tobacco Packing Machines in Pakistan",
      "tobacco feeder",
      "tobacco cutter Pakistan",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

const packing: Product[] = [
  {
    slug: "hlp-180",
    name: "HLP-180 Cigarette Packing Machine",
    category: "packing-machines",
    brand: "GDX / HLP",
    condition: "New / Reconditioned",
    tagline: "Hard pack line running a steady 180 packs per minute.",
    metaDescription:
      "HLP-180 cigarette packing machine in Pakistan, 180 packs per minute hard pack line for hinge-lid packs. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "HLP-180 packing machine",
      "cigarette packing machine 180 ppm",
      "hard pack machine Pakistan",
    ],
    intro: [
      "The HLP-180 is a favourite for factories that want reliable hard pack output without pushing into the very top speeds. At 180 packs a minute it gives you room to grow while staying easy to run and easy to maintain.",
      "It handles the full hinge-lid pack cycle, collating cigarettes, folding the inner frame, forming the box and applying the tear tape, in one continuous flow. The result is a firm, square pack that looks the same from the first shift to the last.",
    ],
    features: [
      "Steady 180 hinge-lid packs per minute",
      "Handles standard king-size and 100mm formats",
      "Gentle cigarette handling to protect the rod",
      "Clear fault display for quick operator response",
      "Simple change-over between compatible pack sizes",
    ],
    specs: [
      { label: "Output", value: "180 packs / minute" },
      { label: "Pack type", value: "Hinge-lid (hard pack)" },
      { label: "Cigarettes per pack", value: "20 (7-7-6 or 6-7-7)" },
      { label: "Formats", value: "King size, 100mm" },
      { label: "Condition", value: "New or fully reconditioned" },
    ],
    applications: [
      "Small to mid-size hard pack production",
      "Second line for growing factories",
    ],
  },
  {
    slug: "hlp-200",
    name: "HLP-200 Cigarette Packing Machine",
    category: "packing-machines",
    brand: "GDX / HLP",
    condition: "New / Reconditioned",
    tagline: "Hard pack line at 200 packs per minute for higher volumes.",
    metaDescription:
      "HLP-200 cigarette packing machine in Pakistan, 200 packs per minute hinge-lid hard pack line. Sales, spares and service from Civic Tobacco Machinery.",
    keywords: [
      "HLP-200 packing machine",
      "cigarette packing machine 200 ppm",
      "hard pack machine Pakistan",
    ],
    intro: [
      "When 180 packs a minute is no longer enough, the HLP-200 steps up the pace without changing the way your operators work. It is the natural upgrade for factories that have outgrown their first hard pack line but want to keep everything familiar.",
      "The machine keeps the same clean pack finish at the higher speed, with balanced motion that reduces jams and keeps cigarettes intact. It pairs neatly with an overwrapper to complete the line.",
    ],
    features: [
      "200 hinge-lid packs per minute",
      "Balanced drive for fewer stoppages at speed",
      "Consistent, square pack finish",
      "Works in line with standard overwrappers",
      "Easy access for cleaning and adjustment",
    ],
    specs: [
      { label: "Output", value: "200 packs / minute" },
      { label: "Pack type", value: "Hinge-lid (hard pack)" },
      { label: "Cigarettes per pack", value: "20" },
      { label: "Formats", value: "King size, 100mm" },
      { label: "Condition", value: "New or fully reconditioned" },
    ],
    applications: ["Mid-volume hard pack production", "Line capacity upgrade"],
  },
  {
    slug: "hlp-225",
    name: "HLP-225 Cigarette Packing Machine",
    category: "packing-machines",
    brand: "GDX / HLP",
    condition: "New / Reconditioned",
    tagline: "High-speed hard pack line at 225 packs per minute.",
    metaDescription:
      "HLP-225 cigarette packing machine in Pakistan, high-speed 225 packs per minute hard pack line. Supplied and supported by Civic Tobacco Machinery.",
    keywords: [
      "HLP-225 packing machine",
      "high speed cigarette packing machine",
      "hard pack machine Pakistan",
    ],
    intro: [
      "The HLP-225 is built for factories that run hard packs at scale. At 225 packs a minute it is one of the quicker machines in the HLP family, and it holds that speed while keeping the pack finish tight and even.",
      "Everything about it is set up for long runs, smooth cigarette transfer, quick fault recovery and easy access for the daily checks that keep a busy line healthy.",
    ],
    features: [
      "High output of 225 packs per minute",
      "Built for long, continuous production runs",
      "Firm, uniform hinge-lid packs at full speed",
      "Fast fault recovery to protect uptime",
      "Ready to run with wrapping and boxing lines",
    ],
    specs: [
      { label: "Output", value: "225 packs / minute" },
      { label: "Pack type", value: "Hinge-lid (hard pack)" },
      { label: "Cigarettes per pack", value: "20" },
      { label: "Formats", value: "King size, 100mm" },
      { label: "Condition", value: "New or fully reconditioned" },
    ],
    applications: ["High-volume hard pack production", "Main factory line"],
  },
  {
    slug: "ssasib-5000",
    name: "SASIB 5000 Soft Pack Machine",
    category: "packing-machines",
    brand: "SASIB",
    condition: "New / Reconditioned",
    tagline: "Proven SASIB soft pack line for classic soft cup packs.",
    metaDescription:
      "SASIB 5000 soft pack cigarette machine in Pakistan, reliable soft cup packing line. Reconditioned units and spares from Civic Tobacco Machinery.",
    keywords: [
      "SASIB 5000 soft pack machine",
      "soft pack cigarette machine Pakistan",
      "SASIB packing machine",
    ],
    intro: [
      "Soft packs are still a big part of the market, especially for value brands, and the SASIB 5000 is one of the most trusted machines for making them. It forms the classic soft cup pack with the folded inner foil and the printed outer, cleanly and repeatably.",
      "It is a machine that factories keep for years because it is simple to understand and forgiving to run. We supply reconditioned units that have been stripped, checked and set back to proper working order.",
    ],
    features: [
      "Classic soft cup pack format",
      "Foil inner and printed outer in one flow",
      "Robust, well-understood design",
      "Widely available spare parts",
      "Straightforward for operators to learn",
    ],
    specs: [
      { label: "Pack type", value: "Soft cup pack" },
      { label: "Cigarettes per pack", value: "20" },
      { label: "Inner", value: "Aluminium foil / paper" },
      { label: "Formats", value: "King size" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Soft pack value brands", "Steady mid-volume production"],
  },
  {
    slug: "ssasib-3000",
    name: "SASIB 3000 Soft Pack Machine",
    category: "packing-machines",
    brand: "SASIB",
    condition: "New / Reconditioned",
    tagline: "Compact SASIB soft pack line for smaller runs.",
    metaDescription:
      "SASIB 3000 soft pack cigarette machine in Pakistan, compact soft pack line for smaller production. Reconditioned and serviced by Civic Tobacco Machinery.",
    keywords: [
      "SASIB 3000 soft pack machine",
      "soft pack cigarette machine",
      "SASIB packing machine Pakistan",
    ],
    intro: [
      "The SASIB 3000 is the smaller cousin of the 5000, aimed at factories with lighter soft pack volumes or a need for a dependable second line. It makes the same tidy soft cup pack at a pace that suits shorter runs.",
      "Its compact footprint makes it easy to place, and its simple mechanics mean your team can keep it running with basic maintenance. We hand it over serviced and ready.",
    ],
    features: [
      "Compact soft pack line",
      "Same clean soft cup finish as larger SASIB units",
      "Small footprint, easy to place",
      "Low, predictable maintenance",
      "Good fit as a second or backup line",
    ],
    specs: [
      { label: "Pack type", value: "Soft cup pack" },
      { label: "Cigarettes per pack", value: "20" },
      { label: "Inner", value: "Aluminium foil / paper" },
      { label: "Formats", value: "King size" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Smaller soft pack runs", "Backup / second line"],
  },
];

const wrapping: Product[] = [
  {
    slug: "regular-wrapper-cp1",
    name: "Regular Wrapper CP1",
    category: "wrapping-machines",
    brand: "GDX / CP",
    condition: "New / Reconditioned",
    tagline: "Single-pack overwrapper with a clean film seal and tear tape.",
    metaDescription:
      "Regular Wrapper CP1 in Pakistan, single-pack cellophane overwrapper with tear tape. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "Regular Wrapper CP1",
      "cigarette overwrapper Pakistan",
      "cellophane wrapping machine",
    ],
    intro: [
      "The CP1 overwrapper puts the finishing film on each pack, the clear cellophane with the little red tear tape that keeps the cigarettes fresh and the pack looking new. It is the standard partner for a hard pack line.",
      "It folds and heat-seals the film neatly around the pack and lays the tear tape straight every time, so packs come off the line looking sharp and shelf-ready.",
    ],
    features: [
      "Clean single-pack film wrap",
      "Straight, reliable tear tape application",
      "Heat-sealed folds that hold",
      "Runs in line with HLP and SASIB packers",
      "Adjustable for common pack sizes",
    ],
    specs: [
      { label: "Function", value: "Single-pack overwrap" },
      { label: "Film", value: "Cellophane / BOPP" },
      { label: "Tear tape", value: "Yes" },
      { label: "In line with", value: "Hard and soft pack machines" },
      { label: "Condition", value: "New or reconditioned" },
    ],
    applications: ["Pack overwrapping", "Freshness sealing"],
  },
  {
    slug: "naked-over-wrapper",
    name: "Naked Over Wrapper",
    category: "wrapping-machines",
    brand: "Generic",
    condition: "New / Reconditioned",
    tagline: "Overwrapper for a crisp film finish without a printed outer.",
    metaDescription:
      "Naked Over Wrapper in Pakistan, cigarette pack overwrapping for a clean film finish. Sales and service from Civic Tobacco Machinery.",
    keywords: [
      "naked over wrapper",
      "cigarette pack wrapping machine",
      "overwrapper Pakistan",
    ],
    intro: [
      "The naked over wrapper gives packs a tight, clear film finish where the printed box itself is the outer surface. It is a clean, simple way to seal and protect the pack while showing off the artwork underneath.",
      "It suits both hard and soft packs and slots easily into an existing line, adding that final layer of protection and shelf appeal.",
    ],
    features: [
      "Crisp, clear film over the printed pack",
      "Works with hard and soft formats",
      "Tight seal for freshness and protection",
      "Easy to add to an existing line",
      "Simple, low-maintenance operation",
    ],
    specs: [
      { label: "Function", value: "Pack overwrap" },
      { label: "Film", value: "Cellophane / BOPP" },
      { label: "Formats", value: "Hard and soft packs" },
      { label: "Condition", value: "New or reconditioned" },
    ],
    applications: ["Pack sealing", "Shelf protection"],
  },
  {
    slug: "molins-boxer",
    name: "Molins Boxer, Box Packing Machine",
    category: "wrapping-machines",
    brand: "Molins",
    condition: "New / Reconditioned",
    tagline: "Groups wrapped packs into cartons ready for the case.",
    metaDescription:
      "Molins Boxer box packing machine in Pakistan, collates cigarette packs into cartons. Reconditioned units and spares from Civic Tobacco Machinery.",
    keywords: [
      "Molins Boxer",
      "box packing machine Pakistan",
      "cigarette carton machine",
    ],
    intro: [
      "Once packs are wrapped, they need to go into cartons, and the Molins boxer does exactly that. It collects the finished packs, groups them and forms the carton around them, ready for the outer case.",
      "It is a solid, well-proven machine that keeps the end of your line moving so packs do not pile up after wrapping. We supply it reconditioned and set to run.",
    ],
    features: [
      "Automatic carton (box) forming",
      "Collates wrapped packs into 10-pack cartons",
      "Keeps the line flowing after wrapping",
      "Proven Molins reliability",
      "Reconditioned and tested before delivery",
    ],
    specs: [
      { label: "Function", value: "Carton / box packing" },
      { label: "Carton size", value: "10 packs (standard)" },
      { label: "Feed", value: "From overwrapper" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Carton packing", "End-of-line collation"],
  },
  {
    slug: "sasib-boxer",
    name: "SASIB Boxer, Box Packing Machine",
    category: "wrapping-machines",
    brand: "SASIB",
    condition: "New / Reconditioned",
    tagline: "SASIB carton boxer for tidy 10-pack cartons.",
    metaDescription:
      "SASIB Boxer box packing machine in Pakistan, forms cigarette cartons from wrapped packs. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "SASIB Boxer",
      "box packing machine",
      "cigarette carton machine Pakistan",
    ],
    intro: [
      "The SASIB boxer does the same important job at the end of the line, turning loose wrapped packs into neat cartons. It groups the packs and forms the box around them so your cartons come out square and consistent.",
      "It is a natural match for a SASIB packing and wrapping line, and it pairs just as well with other brands. Supplied reconditioned and ready for the floor.",
    ],
    features: [
      "Forms tidy 10-pack cartons",
      "Consistent, square carton finish",
      "Pairs well with SASIB and other lines",
      "Reliable, well-supported design",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Function", value: "Carton / box packing" },
      { label: "Carton size", value: "10 packs (standard)" },
      { label: "Feed", value: "From overwrapper" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Carton packing", "End-of-line collation"],
  },
];

const making: Product[] = [
  {
    slug: "mark-8-post-64",
    name: "Molins Mark 8 Post 64",
    h1: "Mark 8 Post 64 – Cigarette Manufacturing Machine in Pakistan",
    metaTitle: "MK 8 | Mark 8 Post 64 Cigarette Manufacturing Machine",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "The dependable workhorse maker that factories still rely on.",
    metaDescription:
      "Molins Mark 8 Post 64 cigarette making machine in Pakistan, reliable rod maker for steady production. Reconditioned and supported by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 8", "Mark 8 Post 64", "cigarette making machine Pakistan"],
    image: "/images/machines/mark-8-post-64.webp",
    intro: [
      "The Molins Mark 8 Post 64 is a proven, high-output cigarette maker built for both quality and flexibility. It runs at a steady 1,800 to 2,000 cigarettes per minute and carries a double colour printer, so you can print the paper exactly the way your brand needs without slowing the line down.",
      "It handles a wide spread of formats, cigarette circumferences from 17mm up to 28.3mm and combined filter-and-tobacco rod lengths from 65mm to 110mm, which covers everything from standard 84mm and 100mm right through to slims, super slims and nano. A Max Multiroll filter attachment keeps the filters going on cleanly at full speed.",
      "At around 3,500kg it is a heavy, solid machine made to hold its pace through long production runs. That combination of speed, format flexibility and reliability makes the Mark 8 Post 64 a smart pick for factories that want strong output from a single maker.",
    ],
    features: [
      "Proven, long-life Molins design",
      "Even rod and clean cut",
      "Parts and know-how widely available",
      "Easy for technicians to maintain",
      "Great value as a reconditioned unit",
    ],
    featureTable: [
      { label: "Machine Speed", value: "1,800 – 2,000 cigarettes per minute" },
      { label: "Cigarette Maker", value: "Molins MK-8 'Post 64' with double colour printer" },
      { label: "Cigarette Circumference", value: "17mm – 28.3mm" },
      { label: "Filter + Tobacco Rod Length", value: "65mm – 110mm" },
      { label: "Filter Attachment", value: "Molins Max Multiroll" },
      { label: "Default Setup Size", value: "Standard 84mm / 100mm / slims / super slims / nano" },
      { label: "Weight", value: "3,500 kg (approx.)" },
    ],
    specs: [
      { label: "Type", value: "Cigarette maker (rod maker)" },
      { label: "Brand", value: "Molins" },
      { label: "Version", value: "Post 64" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Entry maker line", "Reliable backup maker"],
  },
  {
    slug: "mark-8d-max-15",
    name: "Molins Mark 8D MAX 15",
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D with Max 15 | Civic Tobacco Machinery",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "Upgraded Mark 8 with the MAX control for smoother running.",
    metaDescription:
      "Molins Mark 8D MAX 15 cigarette maker in Pakistan, upgraded Mark 8 with MAX control. Reconditioned and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 8D", "Mark 8D MAX", "cigarette maker Pakistan"],
    intro: [
      "The Mark 8D MAX 15 takes the trusted Mark 8 platform and adds the MAX control system, which gives operators better feedback and steadier running. You keep the reliability of the original with a more modern feel at the panel.",
      "It is a good step up for factories that like the Mark 8 but want tighter control over rod weight and fewer surprises during a shift.",
    ],
    features: [
      "Reliable Mark 8 base with MAX control",
      "Better rod weight control",
      "Clearer operator feedback",
      "Steady, predictable running",
      "Reconditioned to working order",
    ],
    specs: [
      { label: "Type", value: "Cigarette maker" },
      { label: "Brand", value: "Molins" },
      { label: "Control", value: "MAX 15" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Upgraded maker line", "Tighter rod control"],
  },
  {
    slug: "mark-9-max-s",
    name: "Molins Mark 9 MAX S",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "Faster Mark 9 maker for higher-volume production.",
    metaDescription:
      "Molins Mark 9 MAX S cigarette making machine in Pakistan, higher-speed maker with MAX S control. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 9", "Mark 9 MAX S", "high speed cigarette maker"],
    intro: [
      "The Mark 9 is the faster generation that followed the Mark 8, and the MAX S version brings improved controls to match the higher speed. For factories that need more output from a single maker, this is a strong choice.",
      "It holds a consistent rod at pace and works well paired with a KDF filter maker to keep the whole line balanced.",
    ],
    features: [
      "Higher output than the Mark 8 series",
      "MAX S control for steady high-speed running",
      "Consistent rod at pace",
      "Pairs neatly with KDF filter makers",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "High-speed cigarette maker" },
      { label: "Brand", value: "Molins" },
      { label: "Control", value: "MAX S" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Higher-volume production", "Main maker line"],
  },
  {
    slug: "mark-9-5-lenze-servo-drives",
    name: "Molins Mark 9.5 with Lenze Servo Drives",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "Mark 9.5 upgraded with Lenze servo drives for precision.",
    metaDescription:
      "Molins Mark 9.5 with Lenze servo drives in Pakistan, precise, modern maker upgrade. Reconditioned and supported by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 9.5", "Lenze servo drives", "cigarette maker Pakistan"],
    intro: [
      "This Mark 9.5 has been fitted with Lenze servo drives, which brings modern, precise motion control to a proven maker. Servo drives mean smoother acceleration, better accuracy and easier fine-tuning during a run.",
      "It is a good pick for factories that want the reliability of the Molins platform with an updated drive system that is easier to service and source parts for.",
    ],
    features: [
      "Modern Lenze servo drive system",
      "Smoother, more precise motion",
      "Easier fine-tuning on the run",
      "Well-supported drive components",
      "Reconditioned to working order",
    ],
    specs: [
      { label: "Type", value: "Cigarette maker" },
      { label: "Brand", value: "Molins" },
      { label: "Drives", value: "Lenze servo" },
      { label: "Condition", value: "Reconditioned / upgraded" },
    ],
    applications: ["Precision production", "Modernised maker line"],
  },
  {
    slug: "mark-9-5-max-s",
    name: "Molins Mark 9.5 MAX S",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "High-speed Mark 9.5 maker with MAX S control.",
    metaDescription:
      "Molins Mark 9.5 MAX S cigarette maker in Pakistan, high-speed rod maker with MAX S control. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 9.5 MAX S", "high speed cigarette maker", "Molins maker Pakistan"],
    intro: [
      "The Mark 9.5 MAX S sits near the top of the Mark series for speed and control. It is built for factories that push high volumes and need a maker that holds its quality even when it is running flat out.",
      "With the MAX S control system it gives operators clear information and fine control over the rod, so you keep waste down while the numbers stay up.",
    ],
    features: [
      "High-speed rod production",
      "MAX S control for accuracy at speed",
      "Low waste with tight rod control",
      "Built for demanding, continuous runs",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "High-speed cigarette maker" },
      { label: "Brand", value: "Molins" },
      { label: "Control", value: "MAX S" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["High-volume production", "Main maker line"],
  },
  {
    slug: "protos-70",
    name: "Molins Protos 70",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins / Protos",
    condition: "Used",
    tagline: "Protos-series maker known for smooth, quality output.",
    metaDescription:
      "Molins Protos 70 cigarette making machine in Pakistan, smooth, high-quality rod maker. Reconditioned and supported by Civic Tobacco Machinery.",
    keywords: ["Protos 70", "Molins Protos maker", "cigarette making machine Pakistan"],
    intro: [
      "The Protos family is known for smooth running and a high-quality rod, and the Protos 70 is a popular choice for factories that care about consistency. It brings a more modern design than the Mark series while keeping the same dependable feel.",
      "It works well as a main maker and pairs cleanly with matching filter and packing equipment for a balanced line.",
    ],
    features: [
      "Smooth, modern Protos design",
      "High rod quality and consistency",
      "Good speed for a single maker",
      "Pairs well across the line",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Cigarette maker" },
      { label: "Brand", value: "Molins Protos" },
      { label: "Series", value: "Protos 70" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Quality-focused production", "Main maker line"],
  },
  {
    slug: "protos-80-er",
    name: "Molins Protos 80 ER",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins / Protos",
    condition: "Used",
    tagline: "Higher-capacity Protos maker for serious output.",
    metaDescription:
      "Molins Protos 80 ER cigarette making machine in Pakistan, high-capacity maker for large runs. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Protos 80 ER", "Molins Protos 80", "high speed cigarette maker Pakistan"],
    intro: [
      "The Protos 80 ER steps up the capacity for factories running large volumes. It keeps the smooth Protos character but at a higher output, making it a strong central maker for a busy floor.",
      "It is a machine built to run long and run clean, and it fits neatly into a line with high-speed filter makers and packers.",
    ],
    features: [
      "High-capacity Protos maker",
      "Smooth running at higher output",
      "Consistent rod quality",
      "Built for large, continuous runs",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "High-speed cigarette maker" },
      { label: "Brand", value: "Molins Protos" },
      { label: "Series", value: "Protos 80 ER" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["High-volume production", "Central maker line"],
  },
];

const filter: Product[] = [
  {
    slug: "hauni-kdf-1",
    name: "Molins KDF-1 Filter Maker",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "The classic KDF filter rod maker, simple and reliable.",
    metaDescription:
      "Molins KDF-1 filter making machine in Pakistan, reliable filter rod maker. Reconditioned and supported by Civic Tobacco Machinery.",
    keywords: ["Molins KDF-1", "filter making machine Pakistan", "KDF filter maker"],
    intro: [
      "The KDF-1 is the machine that made Molins the name in filter making. It takes filter tow, forms it into a rod and cuts it to length, cleanly and repeatably. Simple, tough and easy to keep running.",
      "It is a great match for a Mark 8 maker and a good starting point for any factory setting up its own filter production.",
    ],
    features: [
      "Classic, reliable KDF design",
      "Even filter rod formation",
      "Clean, accurate cutting",
      "Pairs well with Mark 8 makers",
      "Parts and support widely available",
    ],
    specs: [
      { label: "Type", value: "Filter rod maker" },
      { label: "Brand", value: "Molins" },
      { label: "Series", value: "KDF-1" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Entry filter production", "Match for Mark 8 makers"],
  },
  {
    slug: "hauni-kdf-2",
    name: "Molins KDF-2 Filter Maker",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "Faster KDF filter maker to match higher-speed lines.",
    metaDescription:
      "Molins KDF-2 filter making machine in Pakistan, higher-speed filter rod maker. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins KDF-2", "filter making machine", "KDF filter maker Pakistan"],
    intro: [
      "The KDF-2 builds on the original with more speed and refinement, so it can keep pace with faster makers like the Mark 9. If your production has grown, this is the filter maker that keeps the line balanced.",
      "It holds a consistent rod firmness and length at the higher pace, which matters for a steady draw in the finished cigarette.",
    ],
    features: [
      "Higher-speed filter production",
      "Consistent firmness and length",
      "Keeps pace with Mark 9 makers",
      "Reliable KDF platform",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Filter rod maker" },
      { label: "Brand", value: "Molins" },
      { label: "Series", value: "KDF-2" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Higher-volume filter production", "Match for Mark 9 makers"],
  },
  {
    slug: "molins-pm-5",
    name: "Molins PM-5 Filter Maker",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "Molins filter maker, a solid alternative to KDF lines.",
    metaDescription:
      "Molins PM-5 filter making machine in Pakistan, dependable filter rod maker. Reconditioned and supported by Civic Tobacco Machinery.",
    keywords: ["Molins PM-5", "filter making machine Pakistan", "Molins filter maker"],
    intro: [
      "The Molins PM-5 is a well-respected filter maker and a natural choice for factories that run Molins equipment elsewhere on the floor. It produces a firm, even filter rod and stands up to long production runs.",
      "It gives you a dependable second option alongside the Molins KDF machines, with its own loyal following among technicians.",
    ],
    features: [
      "Dependable Molins filter maker",
      "Firm, even filter rod",
      "Good fit with Molins lines",
      "Built for long runs",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Filter rod maker" },
      { label: "Brand", value: "Molins" },
      { label: "Series", value: "PM-5" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Filter production", "Molins-based lines"],
  },
  {
    slug: "hollow-tube-maker",
    name: "Hollow Tube Maker",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Generic",
    condition: "Used",
    tagline: "Makes hollow acetate tubes for speciality filters.",
    metaDescription:
      "Hollow tube maker in Pakistan, machine for hollow acetate filter tubes and speciality filters. Supplied by Civic Tobacco Machinery.",
    keywords: ["hollow tube maker", "hollow acetate tube machine", "speciality filter machine"],
    intro: [
      "For speciality and recessed filters you need hollow tubes, and this machine makes them. It forms a hollow acetate tube to a set diameter and length, ready to be used in multi-segment or recessed filter designs.",
      "It is the machine to have when you want to offer something beyond a standard mono filter and stand out on the shelf.",
    ],
    features: [
      "Forms hollow acetate tubes",
      "Set diameter and length control",
      "Supports recessed and multi-segment filters",
      "Adds speciality options to your range",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Hollow tube / speciality filter maker" },
      { label: "Material", value: "Acetate tow" },
      { label: "Output", value: "Hollow filter tubes" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Speciality filters", "Recessed and multi-segment designs"],
  },
  {
    slug: "protos-70-filter",
    name: "Protos 70 (Filter Configuration)",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Molins / Protos",
    condition: "Used",
    tagline: "Protos 70 set up to run in a filter-making line.",
    metaDescription:
      "Protos 70 filter configuration in Pakistan, Protos line set up for filter production. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Protos 70 filter", "Protos filter line", "filter making machine Pakistan"],
    intro: [
      "This Protos 70 is configured for the filter side of the line, bringing the smooth, modern Protos character to filter rod production. It is a strong option for factories standardising on Protos equipment.",
      "Set up and matched correctly, it keeps your filter output in step with a fast maker for a balanced, tidy line.",
    ],
    features: [
      "Protos platform in filter configuration",
      "Smooth, modern running",
      "Consistent filter rod",
      "Standardise on one equipment family",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Filter line (Protos)" },
      { label: "Brand", value: "Molins Protos" },
      { label: "Series", value: "Protos 70" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Filter production", "Protos-standardised lines"],
  },
  {
    slug: "protos-80-er-filter",
    name: "Protos 80 ER (Filter Configuration)",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Molins / Protos",
    condition: "Used",
    tagline: "High-capacity Protos 80 ER configured for filters.",
    metaDescription:
      "Protos 80 ER filter configuration in Pakistan, high-capacity Protos filter line. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Protos 80 ER filter", "high capacity filter maker", "Protos filter Pakistan"],
    intro: [
      "The Protos 80 ER in a filter configuration brings high capacity to the filter side of your line. It is the match for a high-speed maker where you need filter output to keep up without becoming the bottleneck.",
      "Built for large runs, it keeps a firm, even rod at pace so the finished cigarette draws exactly as intended.",
    ],
    features: [
      "High-capacity Protos filter line",
      "Keeps pace with high-speed makers",
      "Firm, even filter rod at speed",
      "Built for large runs",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "High-capacity filter line" },
      { label: "Brand", value: "Molins Protos" },
      { label: "Series", value: "Protos 80 ER" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["High-volume filter production", "High-speed lines"],
  },
];

const tobacco: Product[] = [
  {
    slug: "tobacco-feeder",
    name: "Tobacco Feeder",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Generic",
    condition: "Used",
    tagline: "Keeps a steady, even flow of tobacco to your makers.",
    metaDescription:
      "Tobacco feeder in Pakistan, feeds a steady flow of cut tobacco to cigarette makers. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["tobacco feeder", "cigarette maker feeder", "tobacco machinery Pakistan"],
    intro: [
      "A maker is only as steady as the tobacco coming into it. The tobacco feeder holds an even, controlled flow of cut tobacco to the maker so the rod stays consistent and the machine does not starve or flood.",
      "It is one of those quiet machines that makes everything downstream run better, and it is essential for a smooth primary-to-secondary handover.",
    ],
    features: [
      "Even, controlled tobacco flow",
      "Prevents starving and flooding at the maker",
      "Supports consistent rod weight",
      "Reliable, simple operation",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Tobacco feeder" },
      { label: "Feeds", value: "Cigarette makers" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Maker feeding", "Steady rod production"],
  },
  {
    slug: "cigarette-reclaimer",
    name: "Cigarette Reclaimer",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Generic",
    condition: "Used",
    tagline: "Recovers good tobacco from reject cigarettes to cut waste.",
    metaDescription:
      "Cigarette reclaimer in Pakistan, recovers tobacco from reject cigarettes to reduce waste. Supplied by Civic Tobacco Machinery.",
    keywords: ["cigarette reclaimer", "tobacco reclaimer", "tobacco recovery machine"],
    intro: [
      "Every line produces some rejects, and throwing that tobacco away is money lost. The cigarette reclaimer opens up reject cigarettes and separates the good tobacco from the paper so it can go back into production.",
      "Over a month it adds up to a real saving, which is why factories that watch their costs keep a reclaimer running.",
    ],
    features: [
      "Recovers usable tobacco from rejects",
      "Separates tobacco from paper cleanly",
      "Cuts material waste and cost",
      "Pays for itself over time",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Cigarette / tobacco reclaimer" },
      { label: "Function", value: "Tobacco recovery from rejects" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Waste reduction", "Tobacco recovery"],
  },
  {
    slug: "used-packing-machines",
    name: "Used Packing Machines",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Various",
    condition: "Used",
    tagline: "A rotating stock of reconditioned packing machines.",
    metaDescription:
      "Used packing machines in Pakistan, reconditioned hard and soft pack lines in stock. Inspected and serviced by Civic Tobacco Machinery.",
    keywords: ["used packing machines Pakistan", "second hand cigarette packer", "used HLP SASIB"],
    intro: [
      "We keep a rotating stock of used packing machines that have been inspected and serviced, so if you need to add packing capacity quickly there is often something ready to go.",
      "Stock changes regularly, so get in touch with the format and speed you are after and we will tell you what is available right now.",
    ],
    features: [
      "Reconditioned hard and soft pack machines",
      "Inspected and serviced before sale",
      "Ready to add capacity quickly",
      "Honest condition reports",
      "Stock changes regularly",
    ],
    specs: [
      { label: "Type", value: "Used packing machines" },
      { label: "Formats", value: "Hard and soft pack" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Quick capacity add", "Budget-conscious buyers"],
  },
  {
    slug: "tobacco-cutters",
    name: "Tobacco Cutters",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Generic",
    condition: "Used",
    tagline: "Cut tobacco leaf to the right width for a good rod.",
    metaDescription:
      "Tobacco cutters in Pakistan, cutting machines for tobacco leaf and lamina. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["tobacco cutter Pakistan", "tobacco cutting machine", "cut rag machine"],
    intro: [
      "Cut width has a big effect on how a cigarette burns and how the rod holds together, so the cutter matters more than people think. Our tobacco cutters slice leaf and lamina to a set, even width ready for the maker.",
      "A well-set cutter means less dust, a better fill and a more consistent cigarette at the end of the line.",
    ],
    features: [
      "Even, adjustable cut width",
      "Better fill and burn in the finished rod",
      "Handles leaf and lamina",
      "Reduces fines and dust",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Tobacco cutter" },
      { label: "Function", value: "Cut leaf / lamina to width" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Primary processing", "Cut rag preparation"],
  },
  {
    slug: "tobacco-stem-flattener",
    name: "Tobacco Stem Flattener",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Generic",
    condition: "Used",
    tagline: "Flattens stems so more of the leaf can be used.",
    metaDescription:
      "Tobacco stem flattener in Pakistan, flattens tobacco stems for better yield. Supplied by Civic Tobacco Machinery.",
    keywords: ["tobacco stem flattener", "stem roller", "tobacco machinery Pakistan"],
    intro: [
      "Stems are part of the leaf, and treating them well means better yield and less waste. The stem flattener rolls and flattens tobacco stems so they can be cut and blended in rather than thrown out.",
      "It is a practical piece of primary equipment for factories that want to get the most out of every bale.",
    ],
    features: [
      "Flattens stems for cutting and blending",
      "Improves overall leaf yield",
      "Reduces waste from the primary",
      "Simple, robust operation",
      "Reconditioned and tested",
    ],
    specs: [
      { label: "Type", value: "Stem flattener / roller" },
      { label: "Function", value: "Flatten tobacco stems" },
      { label: "Condition", value: "Reconditioned" },
    ],
    applications: ["Primary processing", "Yield improvement"],
  },
];


export const products: Product[] = [
  ...packing,
  ...wrapping,
  ...making,
  ...filter,
  ...tobacco,
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getSubcategory = (slug: string) =>
  subcategories.find((s) => s.slug === slug);

export const getSubcategoriesFor = (category: CategorySlug) =>
  subcategories.filter((s) => s.category === category);

export const getProductsByCategory = (category: CategorySlug) =>
  products.filter((p) => p.category === category && !p.subcategory);

export const getProductsBySubcategory = (subcategory: string) =>
  products.filter((p) => p.subcategory === subcategory);

export const getProduct = (category: string, slug: string, subcategory?: string) =>
  products.find(
    (p) =>
      p.category === category &&
      p.slug === slug &&
      (subcategory ? p.subcategory === subcategory : !p.subcategory)
  );

/* ------------------------------------------------------------------ */
/* Canonical URL paths                                                 */
/*                                                                     */
/* Clean, keyword-first URLs. Category/sub-category landing pages and  */
/* product pages live at these paths; the folder structure under app/  */
/* mirrors them, and next.config redirects the old paths here.         */
/* ------------------------------------------------------------------ */

export const categoryPaths: Record<CategorySlug, string> = {
  "packing-machines": "/cigarette-packing-machines",
  "wrapping-machines": "/cigarette-box-wrapping-machines",
  "manufacturing-machines": "/manufacturing-machines",
};

// Manufacturing sub-categories are flattened to the site root.
export const subcategoryPaths: Record<string, string> = {
  "cigarette-making-machines": "/cigarette-making-machines",
  "cigarette-filter-making-machines": "/cigarette-filter-making-machines",
  "tobacco-machinery": "/tobacco-machinery",
};

export const categoryHref = (c: Category) => categoryPaths[c.slug];

export const subcategoryHref = (s: Subcategory) => subcategoryPaths[s.slug];

/** Build the canonical path for a product. */
export const productHref = (p: Product): string => {
  if (p.subcategory) return `${subcategoryPaths[p.subcategory]}/${p.slug}`;
  return `${categoryPaths[p.category]}/${p.slug}`;
};

/** Breadcrumb trail for a product page (Home → … → Product). */
export const productCrumbs = (p: Product): { name: string; path: string }[] => {
  const cat = getCategory(p.category)!;
  const trail = [
    { name: "Home", path: "/" },
    { name: cat.navLabel, path: categoryHref(cat) },
  ];
  if (p.subcategory) {
    const sub = getSubcategory(p.subcategory)!;
    trail.push({ name: sub.navLabel, path: subcategoryHref(sub) });
  }
  trail.push({ name: p.name, path: productHref(p) });
  return trail;
};

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
    h1: "HLP-180 Cigarette Packing Machine",
    metaTitle: "HLP-180 Cigarette Packing Machine, 180 Packs/Min",
    category: "packing-machines",
    brand: "GDX / HLP",
    condition: "New / Reconditioned",
    tagline: "High-speed hard pack line running 180 packs per minute.",
    metaDescription:
      "HLP-180 cigarette packing machine in Pakistan, 180 packs per minute across King to Nano formats with PLC control. Supplied by Civic Tobacco Machinery.",
    keywords: [
      "HLP-180 packing machine",
      "HLP 180 packer",
      "cigarette packing machine 180 packs per minute Pakistan",
    ],
    image: "/images/machines/hlp-180.webp",
    intro: [
      "The HLP-180 is a powerful, next-generation machine built for high-speed cigarette packing. Known for consistent performance and reliable output, the HLP-180 packer suits manufacturers who want to streamline their packing process without giving up quality or precision.",
      "At an output of 180 packs a minute, it runs efficient, steady packing cycles with its single plunger mechanism, holding perfect alignment, wrapping and sealing on every pack. That lets factories in Pakistan meet high-volume demand while keeping the finish clean and repeatable.",
      "It is designed to handle a wide range of cigarette sizes, including King Size, Demi, Slims, Super Slims and Nano. That versatility means you can serve different consumer preferences across local and export markets, from traditional formats through to niche products, all on the same machine.",
      "A PLC control system keeps operation accurate and fully automated, so every pack comes out uniform, well wrapped and retail-ready. The user-friendly interface gives operators full control over speed, error detection and production monitoring, which cuts downtime and lifts overall efficiency.",
      "What really sets the HLP-180 apart is its flexibility in pack shapes. It supports round corner, bevel edge, D-type and square pack formats, so brands can differentiate their packaging, stand out on the shelf and keep up with changing market trends. Built for non-stop, large-scale production, it is a strong choice whether you are expanding a line or upgrading older equipment.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Speed", value: "180 packs per minute" },
      { label: "Type", value: "Single plunger" },
      { label: "Cigarette Sizes", value: "King Size / Demi / Slims / Super Slims / Nano" },
      { label: "Electrical System", value: "PLC control system" },
      { label: "Packet Set-up Available", value: "Round corner / Bevel edge / D-type / Square" },
    ],
    specs: [],
    applications: [
      "High-volume hard pack production",
      "Local and export markets",
    ],
  },
  {
    slug: "hlp-200",
    name: "HLP-200 Cigarette Packing Machine",
    h1: "HLP-200 Cigarette Packing Machine",
    metaTitle: "HLP-200 Cigarette Packing Machine, 200 Packs/Min",
    category: "packing-machines",
    brand: "GDX / HLP",
    condition: "New / Reconditioned",
    tagline: "Double plunger hard pack line running 200 packs per minute.",
    metaDescription:
      "HLP-200 cigarette packing machine in Pakistan, 200 packs per minute double plunger line across King to Nano formats. Supplied by Civic Tobacco Machinery.",
    keywords: [
      "HLP-200 packing machine",
      "HLP 200 double plunger packer",
      "cigarette packing machine 200 packs per minute Pakistan",
    ],
    image: "/images/machines/hlp-200.webp",
    intro: [
      "The HLP-200 is a double plunger hopper packing machine built for small to medium and high-volume production. It is a popular choice with manufacturers in Pakistan because it makes careful use of material and helps keep running costs down while still holding a fast, steady pace.",
      "Running at 200 packs a minute with a maximum throughput of around 12,000 cigarettes, it sits at the core of the packing line as the first critical unit, forming and finishing the pack before it moves on to wrapping and boxing. It supports all common cigarette pack formats, so it slots into most production setups with ease.",
      "The machine handles a wide range of cigarette sizes, including King Size, Demi, Slims, Super Slims and Nano, and its double plunger system keeps the packing cycle efficient and the finish consistent. A PLC control system keeps operation accurate and fully automated, giving operators clear control over speed, error detection and monitoring.",
      "For pack presentation it offers round corner, bevel edge, D-type and square formats, so brands can shape their packaging to stand out on the shelf. Running on a 220V/380V supply and built for dependable, continuous output, the HLP-200 is a solid core unit for any integrated packing line.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Speed", value: "200 packs per minute" },
      { label: "Maximum Capacity", value: "12,000 cigarettes" },
      { label: "Type", value: "Double plunger" },
      { label: "Cigarette Sizes", value: "King Size / Demi / Slims / Super Slims / Nano" },
      { label: "Electrical System", value: "PLC control system" },
      { label: "Packet Set-up Available", value: "Round corner / Bevel edge / D-type / Square" },
      { label: "Voltage", value: "220V / 380V" },
    ],
    specs: [],
    applications: ["High-volume hard pack production", "Core of an integrated packing line"],
  },
  {
    slug: "hlp-225",
    name: "HLP-225 Cigarette Packing Machine",
    h1: "HLP-225 Cigarette Packing Machine",
    metaTitle: "HLP-225 Cigarette Packing Machine, 225 Packs/Min",
    category: "packing-machines",
    brand: "GDX / HLP",
    condition: "New / Reconditioned",
    tagline: "High-speed double plunger hard pack line at 225 packs per minute.",
    metaDescription:
      "HLP-225 cigarette packing machine in Pakistan, high-speed 225 packs per minute double plunger line with PLC control. Supplied by Civic Tobacco Machinery.",
    keywords: [
      "HLP-225 packing machine",
      "HLP 225 double plunger packer",
      "high speed cigarette packing machine Pakistan",
    ],
    image: "/images/machines/hlp-225.webp",
    intro: [
      "The HLP-225 packing line is a real step forward in cigarette packing. Running at 225 packs a minute, this double plunger machine delivers high efficiency and throughput for factories that need to pack at scale.",
      "It is engineered to handle a wide range of cigarette sizes, including King, Demi, Slims, Super Slims and Nano, so manufacturers in Pakistan get the flexibility to meet different market demands on a single machine.",
      "A modern PLC control system improves accuracy and automates the packing process, cutting manual intervention and reducing errors. The HLP-225 also supports multiple pack formats, including round corner, bevel edge, D-type and square, which lets brands tailor their packaging to different consumer preferences and requirements.",
      "Built for large-scale production, the HLP-225 pairs advanced features with a robust build for reliable, consistent performance. Its ability to pack at high speed without giving up quality makes it a valuable asset for any operation looking to scale up output and stay competitive.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Speed", value: "225 packs per minute" },
      { label: "Type", value: "Double plunger" },
      { label: "Cigarette Sizes", value: "King Size / Demi / Slims / Super Slims / Nano" },
      { label: "Electrical System", value: "PLC control system" },
      { label: "Packet Set-up Available", value: "Round corner / Bevel edge / D-type / Square" },
    ],
    specs: [],
    applications: ["High-volume hard pack production", "Large-scale packing lines"],
  },
  {
    slug: "ssasib-5000",
    name: "SASIB 5000 Soft Pack Machine",
    h1: "SASIB 5000 Soft Pack Machine",
    metaTitle: "SASIB 5000 Soft Pack Cigarette Machine",
    category: "packing-machines",
    brand: "SASIB",
    condition: "New / Reconditioned",
    tagline: "SASIB soft packer for 100mm packs with squared corners.",
    metaDescription:
      "SASIB 5000 soft pack cigarette machine in Pakistan, 100mm soft packs with alufoil and label wrapping. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "SASIB 5000 soft pack machine",
      "SASIB 5000 soft packer",
      "soft pack cigarette machine Pakistan",
    ],
    image: "/images/machines/ssasib-5000.webp",
    intro: [
      "The SASIB 5000 is a versatile machine built for producing soft packs of 100mm cigarettes. Using alufoil and label wrapping performed around an arbour, it delivers perfect, consistent packs with neatly squared corners.",
      "That wrapping method does more than look good, it protects the cigarettes and keeps each pack intact, while also lifting the visual appeal of the finished product. For manufacturers in Pakistan who want a premium soft pack finish, it is a reliable, high-quality choice.",
      "Well proven and straightforward to run, the SASIB 5000 is supplied checked and set up ready for the floor, so you can add dependable soft pack capacity with confidence.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Model", value: "5000" },
      { label: "Type", value: "Soft packer (100mm hard packer)" },
      { label: "Wrapping Method", value: "Alufoil and label wrapping performed around an arbour" },
      { label: "Pack Quality", value: "Soft packs with squared corners, perfect and constant product quality" },
    ],
    specs: [],
    applications: ["Soft pack production", "100mm formats"],
  },
  {
    slug: "ssasib-3000",
    name: "SASIB 3000 Soft Pack Machine",
    h1: "SASIB 3000 Soft Pack Machine",
    metaTitle: "SASIB 3000 Soft Pack Cigarette Machine",
    category: "packing-machines",
    brand: "SASIB",
    condition: "New / Reconditioned",
    tagline: "SASIB soft packer for 84mm and 100mm packs with squared corners.",
    metaDescription:
      "SASIB 3000 soft pack cigarette machine in Pakistan, handles 84mm and 100mm packs with alufoil and label wrapping. Supplied by Civic Tobacco Machinery.",
    keywords: [
      "SASIB 3000 soft pack machine",
      "SASIB 3000 soft packer",
      "soft pack cigarette machine Pakistan",
    ],
    image: "/images/machines/ssasib-3000.webp",
    intro: [
      "The SASIB 3000 adds extra versatility to the SASIB soft pack line with its ability to handle both 84mm and 100mm cigarette packs. Using alufoil and label wrapping performed around an arbor, it keeps the hallmark SASIB finish, perfect, consistent packs with neatly squared corners.",
      "That dual-size capability makes the SASIB 3000 a valuable asset for manufacturers in Pakistan who need flexibility in their production while keeping every pack to a high standard of presentation and protection.",
      "Its control systems make adjustments and maintenance straightforward, which helps reduce downtime and keep overall productivity high. Supplied checked and set up ready to run, it is a dependable soft pack line for factories that want both quality and format flexibility.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Model", value: "3000" },
      { label: "Type", value: "Soft packer (84mm & 100mm)" },
      { label: "Wrapping Method", value: "Alufoil and label wrapping performed around an arbor" },
      { label: "Pack Quality", value: "Soft packs with squared corners, perfect and constant product quality" },
    ],
    specs: [],
    applications: ["Soft pack production", "84mm and 100mm formats"],
  },
];

const wrapping: Product[] = [
  {
    slug: "regular-wrapper-cp1",
    name: "Regular Wrapper CP1",
    h1: "Regular Wrapper CP1",
    metaTitle: "CP-1 Cigarette Pack Wrapping Machine, 250 PPM",
    category: "wrapping-machines",
    brand: "GDX / CP",
    condition: "New / Reconditioned",
    tagline: "High-speed cigarette pack overwrapper running up to 250 packs per minute.",
    metaDescription:
      "CP-1 cigarette pack wrapping machine in Pakistan, up to 250 packs per minute overwrapper. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "Regular Wrapper CP1",
      "CP-1 cigarette pack wrapping machine",
      "cigarette overwrapper Pakistan",
    ],
    image: "/images/machines/regular-wrapper-cp1.webp",
    intro: [
      "The CP-1 is a high-performance cigarette pack wrapping machine built to handle serious production demands with ease. At a wrapping speed of up to 250 packs a minute, it lifts the efficiency and throughput of the packing line for factories in Pakistan.",
      "It runs on a modest power requirement of 6 KVA and an air pressure need of 0.05 m³/min, so it delivers strong performance while staying energy efficient. The CP-1 is engineered for precise, consistent wrapping that reduces material waste and keeps every pack to a tight quality standard.",
      "Its robust construction and reliable operation make it a dependable asset for high-volume lines, keeping the process smooth and the output clean. It also integrates neatly into existing lines, which makes it a practical, valuable addition for any facility looking to lift productivity without losing quality.",
    ],
    features: [],
    featureTable: [
      { label: "Speed", value: "Up to 250 PPM" },
      { label: "Power Requirement", value: "6 KVA" },
      { label: "Air Pressure", value: "0.05 m³ / min" },
    ],
    specs: [],
    applications: ["Pack overwrapping", "High-volume packing lines"],
  },
  {
    slug: "naked-over-wrapper",
    name: "Naked Over Wrapper",
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, Cigarette Outer Pack Wrapper",
    category: "wrapping-machines",
    brand: "Generic",
    condition: "New / Reconditioned",
    tagline: "Outer pack overwrapper at 25 outer packs per minute.",
    metaDescription:
      "Naked Over Wrapper in Pakistan, cigarette outer pack overwrapper at 25 outer packs per minute. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "naked over wrapper",
      "cigarette outer pack overwrapper",
      "overwrapper Pakistan",
    ],
    image: "/images/machines/naked-over-wrapper.webp",
    intro: [
      "The Naked Over Wrapper is a well-engineered machine for wrapping cigarette outer packs with precision and speed. It wraps 25 outer packs a minute, which keeps a high level of efficiency on the line for factories in Pakistan.",
      "It runs on an energy need of 6 KVA and an air pressure of 0.05 m³/min, giving dependable working performance without heavy power draw. Robust and efficient, it is a sound addition to a cigarette production line, lifting packaging quality at the final stage.",
    ],
    features: [],
    featureTable: [
      { label: "Speed", value: "25 cigarette outer packs per minute" },
      { label: "Power Requirement", value: "6 KVA" },
      { label: "Air Pressure", value: "0.05 m³ / min" },
    ],
    specs: [],
    applications: ["Outer pack overwrapping", "End-of-line sealing"],
  },
  {
    slug: "molins-boxer",
    name: "Molins Boxer, Box Packing Machine",
    h1: "Molins Boxer, Box Packing Machine",
    metaTitle: "Molins Boxer, Cigarette Box Packing Machine",
    category: "wrapping-machines",
    brand: "Molins",
    condition: "New / Reconditioned",
    tagline: "Cigarette box packing machine running up to 20 boxes per minute.",
    metaDescription:
      "Molins Boxer box packing machine in Pakistan, up to 20 boxes per minute for cigarette cartons. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "Molins Boxer",
      "cigarette box packing machine Pakistan",
      "cigarette carton machine",
    ],
    image: "/images/machines/molins-boxer.webp",
    intro: [
      "The Molins Boxer is a dependable cigarette box packing machine known for efficient running and solid throughput. At a packing speed of up to 20 boxes a minute, it lifts the productivity of cigarette packaging lines in Pakistan.",
      "It works on an air pressure of 0.05 m³/min, balancing energy use with steady operation. Engineered for reliability, the Molins Boxer keeps packing consistent and precise, which reduces downtime and holds product quality high.",
      "That makes it a critical part of any production setup focused on efficiency and steady output, taking wrapped packs and forming them into tidy cartons at the end of the line.",
    ],
    features: [],
    featureTable: [
      { label: "Speed", value: "Up to 20 bpm" },
      { label: "Air Pressure", value: "0.05 m³ / min" },
    ],
    specs: [],
    applications: ["Carton / box packing", "End-of-line collation"],
  },
  {
    slug: "sasib-boxer",
    name: "SASIB Boxer, Box Packing Machine",
    h1: "SASIB Boxer, Box Packing Machine",
    metaTitle: "SASIB Boxer, Cigarette Box Packing Machine",
    category: "wrapping-machines",
    brand: "SASIB",
    condition: "New / Reconditioned",
    tagline: "Cigarette box packing machine running up to 25 boxes per minute.",
    metaDescription:
      "SASIB Boxer box packing machine in Pakistan, up to 25 boxes per minute for cigarette cartons. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: [
      "SASIB Boxer",
      "cigarette box packing machine Pakistan",
      "cigarette carton machine",
    ],
    image: "/images/machines/sasib-boxer.webp",
    intro: [
      "The SASIB Boxer is an advanced cigarette box packing machine known for its speed and efficiency. Capable of packing up to 25 boxes a minute, it gives a real boost to the throughput of a cigarette manufacturing line in Pakistan.",
      "It runs on a power requirement of 6 KVA, combining power with performance, and an air pressure need of 0.1 m³/min, keeping a balance between energy use and operational efficiency.",
      "Designed for highly accurate, consistent packing, the SASIB Boxer minimises downtime and streamlines the process, which makes it a valuable asset for high-volume environments where speed and precision matter for productivity and product quality.",
    ],
    features: [],
    featureTable: [
      { label: "Speed", value: "Up to 25 bpm" },
      { label: "Power Requirement", value: "6 KVA" },
      { label: "Air Pressure", value: "0.1 m³ / min" },
    ],
    specs: [],
    applications: ["Carton / box packing", "High-volume packing lines"],
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
      { label: "Filter Attachment", value: "Max Multiroll" },
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
    metaTitle: "MK 8D | Molins Mark 8D with MAX-15 Cigarette Maker",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "High-speed Mark 8D maker with the MAX-15 control system.",
    metaDescription:
      "Molins Mark 8D with MAX-15 cigarette making machine in Pakistan, 3,000 per minute across King to Nano formats. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 8D", "Mark 8D MAX-15", "MK8 cigarette making machine Pakistan"],
    image: "/images/machines/mark-8d-max-15.webp",
    intro: [
      "The Molins Mark 8D with MAX-15 is a strong, flexible cigarette making machine built for the demands of a modern tobacco factory. It belongs to the well-known Mark 8 maker family and gives Pakistani manufacturers a dependable way to grow output without giving up on quality.",
      "It runs at up to 3,000 cigarettes a minute, so it holds its pace comfortably on a busy production line. Just as important, it handles a wide spread of formats. Whether you make King size, Demi, Slims, Super Slims or Nano, the same machine can produce them all, which makes it a practical choice for a factory serving several segments at once.",
      "The maker accepts cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you keep full control over sizing and stay consistent from one run to the next.",
      "The setup pairs the MK-8D cigarette maker with the MAX-15 and its 1117 infeed unit. Together they carry the process cleanly from tobacco feeding through to the finished rod, keeping the line steady, cutting down on stoppages and holding quality across the shift. At a total draw of 17KW it balances real production speed with sensible running costs.",
      "For all that it does, the machine stays compact. At around 5,000kg it is solid and hard-wearing, yet it drops into an existing floor without major rebuilding, and its build stands up to long, continuous production. Day to day it turns out even cigarettes with little waste and modest maintenance, which is exactly what a factory needs when it is trying to run lean and still meet demand across different formats.",
      "In short, the Mark 8D with MAX-15 earns its place through proven reliability, flexible format support from slims to nano, high-speed output that stays accurate, energy-efficient running and easy fitment into an automated line. Whether you are replacing older equipment or adding capacity, it is a future-ready maker that puts classic engineering to work for modern production.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Speed", value: "3,000 cigarettes per minute" },
      { label: "Cigarette Sizes", value: "King / Demi / Slims / Super Slims / Nano" },
      { label: "Cigarette Circumference", value: "17mm – 28.3mm" },
      { label: "Filter + Tobacco Rod Length", value: "65mm – 110mm" },
      { label: "Machine Unit", value: "MK-8D Cigarette Maker, MAX-15 with 1117 infeed unit" },
      { label: "Total Power", value: "17 KW" },
      { label: "Total Weight", value: "5,000 kg" },
    ],
    specs: [],
    applications: ["High-volume production", "Multi-format factories"],
  },
  {
    slug: "mark-9-5-lenze-servo-drives",
    name: "Molins Mark 9.5 with Lenze Servo Drives",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "High-speed Mark 9.5 maker line with Lenze servo drives.",
    metaDescription:
      "Molins Mark 9.5 with Lenze servo drives in Pakistan, up to 3,500 per minute with Siemens PLC and microwave weight control. Supplied by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 9.5", "Lenze servo drives", "cigarette maker Pakistan"],
    image: "/images/machines/mark-9-5-lenze-servo-drives.webp",
    intro: [
      "The Molins Mark 9.5 with Lenze servo drives is built for manufacturers who want serious output without losing flexibility. It produces up to 3,500 cigarettes a minute on regular diameters and 3,200 a minute on slim and super slim formats, so one line can cover a broad product range at real production speed.",
      "It works across cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, which gives you the room to switch formats and still hold a consistent rod from run to run.",
      "The line brings together three units, the MK-9.5 cigarette maker, the MAX-S filter assembler and the HCF80 automatic tray filler, drawing 35KW, 20KW and 15KW in turn. Together they take the process from making through to filled trays with very little manual handling in between.",
      "Control and accuracy sit at the centre of this machine. A Siemens PLC runs the sequence smoothly, a microwave system keeps tight control over rod weight, and the Lenze servo drives deliver the precise, steady motion that keeps quality high even at full speed.",
      "At a total weight of around 8,600kg it is a heavy, solid line made for large-scale manufacturing. For a factory that needs dependable high-volume output with modern controls and easy servicing, the Mark 9.5 with Lenze servo drives is a strong, future-ready choice.",
    ],
    features: [],
    featureTable: [
      { label: "Production Capacity", value: "3,500 cpm (regular dia.), 3,200 cpm (slim & super slim)" },
      { label: "Cigarette Circumference", value: "17mm – 28.3mm" },
      { label: "Filter + Tobacco Rod Length", value: "65mm – 110mm" },
      { label: "PLC Control System", value: "Siemens PLC" },
      { label: "Weight Control", value: "Microwave system" },
      { label: "Servo System", value: "Lenze" },
      { label: "Machine Unit", value: "MK-9.5 Cigarette Maker, MAX-S Filter Assembler, HCF80 Auto Tray Filler" },
      { label: "Power", value: "MK-9.5 / 35 KW, MAX-S / 20 KW, HCF80 / 15 KW" },
      { label: "Total Weight", value: "8,600 kg" },
    ],
    specs: [],
    applications: ["High-volume production", "Multi-format factories"],
  },
  {
    slug: "mark-9-5-max-s-tray-filler",
    name: "Molins Mark-9.5 with Max S & Tray Filler",
    h1: "Molins Mark-9.5 with Max S & Tray Filler",
    metaTitle: "Molins Mark-9.5 with Max S & Tray Filler",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "High-speed Mark-9.5 maker with Max S and mass flow tray filler.",
    metaDescription:
      "Molins Mark-9.5 with Max S and tray filler in Pakistan, 4,500 to 5,000 cigarettes per minute. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins Mark 9.5 Max S", "Mark 9.5 tray filler", "high speed cigarette maker Pakistan"],
    image: "/images/machines/mark-9-5-max-s-tray-filler.webp",
    intro: [
      "The Molins Mark-9.5 with Max S and tray filler is a premium choice for manufacturers that need high-speed output, tidy filter integration and dependable production capability in one line. Engineered for volume, it runs a remarkable 4,500 to 5,000 cigarettes a minute, which puts it among the most efficient systems available for large-scale factories in Pakistan.",
      "At the centre of the setup is the MK-9.5 cigarette maker, an evolution of the proven Mark 9 series that holds strong output while keeping precision and consistency high. It supports cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you can move between King size, Slims, Demi and other formats without losing rod quality.",
      "The maker is paired with the Max-S filter assembler, which attaches the filter to the tobacco rod accurately and repeatably. Working through a mass flow tray filler, it lifts throughput while keeping material waste and misalignment low, so filter integrity stays consistent across every production cycle.",
      "A default setup size of 84mm keeps the machine in step with globally accepted cigarette dimensions, which makes it a practical fit for both local supply and export production. Whether you run your own brand or fulfil large contracts, it moves smoothly between batches and adapts easily to changing orders.",
      "At roughly 7,800kg it is a heavy, stable line built for continuous operation and long service life. For a factory looking to scale up while protecting quality and keeping downtime low, the Mark-9.5 with Max S and tray filler brings together the speed, flexibility and reliability the floor needs, from proven making and precise filter attachment to a streamlined mass flow feed and a durable, heavy-duty frame.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Speed", value: "4,500 – 5,000 cigarettes per minute" },
      { label: "Cigarette Maker", value: "MK-9.5 tobacco cigarette making machine" },
      { label: "Cigarette Circumference", value: "17mm – 28.3mm" },
      { label: "Filter + Tobacco Rod Length", value: "65mm – 110mm" },
      { label: "Filter Attachment", value: "Max-S filter assembler with mass flow tray filler" },
      { label: "Default Setup Size", value: "Standard 84mm" },
      { label: "Weight", value: "7,800 kg (approx.)" },
    ],
    specs: [],
    applications: ["High-volume production", "Export-ready manufacturing"],
  },
  {
    slug: "mark-9-max-s",
    name: "Molins MK-9 with Max S",
    h1: "Molins MK-9 with Max S",
    metaTitle: "Molins MK-9 with Max S",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "High-speed MK-9 maker with Max S and mass flow tray filler.",
    metaDescription:
      "Molins MK-9 with Max S in Pakistan, 4,500 to 5,000 cigarettes per minute with mass flow tray filler. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins MK-9 Max S", "Mark 9 cigarette maker", "high speed cigarette maker Pakistan"],
    image: "/images/machines/mark-9-max-s.webp",
    intro: [
      "The Molins MK-9 with Max S is another high-efficiency cigarette maker built for serious production, running between 4,500 and 5,000 cigarettes a minute. It is a dependable choice for factories in Pakistan that want strong, steady output from a single line.",
      "The MK-9 cigarette maker at its core keeps production precise and consistent shift after shift. It works across cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you get real flexibility to move between formats without losing rod quality.",
      "It is fitted with the Max-S filter assembler and a mass flow tray filler, which make the filter attachment step faster and more reliable while keeping waste and misalignment low. A default setup size of 84mm keeps it in line with widely accepted cigarette dimensions, so it slots into most production plans with ease.",
      "At around 7,800kg the MK-9 is a heavy, stable machine made for continuous running and long service life. For a factory scaling up large-scale production while protecting quality, it is a solid, reliable addition to the floor.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Speed", value: "4,500 – 5,000 cigarettes per minute" },
      { label: "Cigarette Maker", value: "MK-9 tobacco cigarette making machine" },
      { label: "Cigarette Circumference", value: "17mm – 28.3mm" },
      { label: "Filter + Tobacco Rod Length", value: "65mm – 110mm" },
      { label: "Filter Attachment", value: "Max-S filter assembler with mass flow tray filler" },
      { label: "Default Setup Size", value: "Standard 84mm" },
      { label: "Weight", value: "7,800 kg (approx.)" },
    ],
    specs: [],
    applications: ["High-volume production", "Main maker line"],
  },
  {
    slug: "protos-70",
    name: "Protos 70",
    h1: "Protos 70",
    metaTitle: "Hauni Protos 70 Cigarette Making Machine",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Hauni",
    condition: "Used",
    tagline: "High-speed Protos 70 maker line up to 7,000 cigarettes a minute.",
    metaDescription:
      "Hauni Protos 70 cigarette making machine in Pakistan, up to 7,000 per minute with Siemens or Beckhoff IPC control. Supplied by Civic Tobacco Machinery.",
    keywords: ["Hauni Protos 70", "Protos 70 cigarette maker", "high speed cigarette making machine Pakistan"],
    image: "/images/machines/protos-70.webp",
    intro: [
      "The Hauni Protos 70 is an advanced cigarette making machine built to meet the highest standards of production efficiency and precision. It runs an impressive 7,000 cigarettes a minute on regular diameters and 6,000 a minute on slim and super slim formats, which gives factories in Pakistan real speed and flexibility from a single line.",
      "It handles cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you can move across formats and still hold a consistent rod from run to run.",
      "A Siemens IPC or Beckhoff IPC control system keeps the sequence automated, smooth and reliable, while a microwave weight control system holds every cigarette to a precise weight for steady product consistency. The line brings together the S7000 cigarette rod maker, the M8000 filter tip attachment and the F80 automatic tray filler, each handling its own stage of the process cleanly.",
      "With power of 50KW for the S7000, 20KW for the M8000 and 15KW for the F80, the Protos 70 is a powerful, capable line. At a total weight of around 10,800kg it is heavy and stable, built for continuous running and long service life, which makes it an ideal choice for large-scale cigarette production.",
    ],
    features: [],
    featureTable: [
      { label: "Production Capacity", value: "7,000 cpm (regular dia.), 6,000 cpm (slim & super slim)" },
      { label: "Cigarette Circumference", value: "17mm – 28.3mm" },
      { label: "Filter + Tobacco Rod Length", value: "65mm – 110mm" },
      { label: "PLC Control System", value: "Siemens IPC or Beckhoff IPC" },
      { label: "Weight Control", value: "Microwave system" },
      { label: "Machine Unit", value: "S7000 cigarette rod maker, M8000 filter tip attachment, F80 auto tray filler" },
      { label: "Power", value: "S7000 / 50 KW, M8000 / 20 KW, F80 / 15 KW" },
      { label: "Total Weight", value: "10,800 kg" },
    ],
    specs: [],
    applications: ["High-volume production", "Large-scale manufacturing"],
  },
  {
    slug: "protos-80-er",
    name: "Protos 80 ER",
    h1: "Protos 80 ER",
    metaTitle: "Hauni Protos 80 ER Cigarette Making Machine",
    category: "manufacturing-machines",
    subcategory: "cigarette-making-machines",
    brand: "Hauni",
    condition: "Used",
    tagline: "High-speed Protos 80 ER maker line up to 8,000 cigarettes a minute.",
    metaDescription:
      "Hauni Protos 80 ER cigarette making machine in Pakistan, up to 8,000 per minute with Siemens or Beckhoff IPC control. Supplied by Civic Tobacco Machinery.",
    keywords: ["Hauni Protos 80 ER", "Protos 80 cigarette maker", "high speed cigarette making machine Pakistan"],
    image: "/images/machines/protos-80-er.webp",
    intro: [
      "The Protos 80 ER is a high-performance cigarette making machine engineered for manufacturers who want maximum efficiency, precision and output. Built by Hauni, the Protos 80 series is known for its reliability and advanced automation, and whether you produce regular or slim cigarettes it delivers strong consistency and productivity, which makes it a trusted choice for high-volume lines in Pakistan.",
      "Capacity is where this machine really stands out. It produces up to 8,000 cigarettes a minute on regular diameters and 7,000 a minute on slim and super slim formats. It accepts cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so it stays flexible across cigarette types and market demands. From king size to slim to niche formats, the Protos 80 ER adapts to how you produce.",
      "For precision and uptime it runs a high-level PLC control system on either a Siemens IPC or a Beckhoff IPC, keeping the whole cycle smooth and automated. Real-time monitoring and quick system response cut down on human error and keep the line running, while a built-in microwave weight control system holds a consistent cigarette weight on every unit for tight quality control.",
      "The line is made up of three powerful units working together, the S7000 cigarette rod maker at 50KW, the M8000 filter tip attachment at 20KW and the F80 automatic tray filler at 15KW. Known for reliability and used in cigarette factories worldwide, the Protos 80 combines efficient energy use, low wastage and precise engineering to keep running costs down while product standards stay high. At a total weight of around 10,800kg it is a heavy, stable line built for continuous, large-scale production.",
    ],
    features: [],
    featureTable: [
      { label: "Production Capacity", value: "8,000 cpm (regular dia.), 7,000 cpm (slim & super slim)" },
      { label: "Cigarette Circumference", value: "17mm – 28.3mm" },
      { label: "Filter + Tobacco Rod Length", value: "65mm – 110mm" },
      { label: "PLC Control System", value: "Siemens IPC or Beckhoff IPC" },
      { label: "Weight Control", value: "Microwave system" },
      { label: "Machine Unit", value: "S7000 cigarette rod maker, M8000 filter tip attachment, F80 auto tray filler" },
      { label: "Power", value: "S7000 / 50 KW, M8000 / 20 KW, F80 / 15 KW" },
      { label: "Total Weight", value: "10,800 kg" },
    ],
    specs: [],
    applications: ["High-volume production", "Large-scale manufacturing"],
  },
];

const filter: Product[] = [
  {
    slug: "kdf-1",
    name: "Hauni KDF-1 Cigarette Filter Manufacturing Machine",
    h1: "Hauni KDF-1 Cigarette Filter Manufacturing Machine",
    metaTitle: "Hauni KDF-1 Filter Making Machine",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Hauni",
    condition: "Used",
    tagline: "Hauni KDF-1 filter making line with laser circumference control.",
    metaDescription:
      "Hauni KDF-1 filter making machine in Pakistan, 120mm filters with Siemens/Beckhoff PLC and laser circumference control. Supplied by Civic Tobacco Machinery.",
    keywords: ["Hauni KDF-1", "KDF-1 filter making line", "filter maker Pakistan"],
    image: "/images/machines/kdf-1.webp",
    intro: [
      "The Hauni KDF-1 is a trusted, powerful filter making line with a strong reputation for performance, precision and durability in cigarette manufacturing. Built for the demands of high-volume production, the KDF-1 suits manufacturers in Pakistan who put consistency, speed and quality first.",
      "Made for high-output running, it offers a robust production capacity for 120mm filters, which works well for both standard and customised cigarette formats. It supports filter circumferences from 16.8mm to 28.1mm and filter lengths from 64mm to 150mm, so you can produce a wide range of filter sizes and types without constant machine changes. From King Size filters to Slims and specialised designs, the KDF-1 handles them all efficiently.",
      "It runs on an advanced PLC control system available in Siemens or Beckhoff configurations, giving intuitive control, real-time diagnostics and reliable automation that holds filter quality steady through the whole run. Lenze or Beckhoff servo systems add to the stability and keep motion smooth and accurate.",
      "A standout feature is the laser-based circumference control system, which measures each filter's circumference with high precision, cutting deviation and keeping every batch uniform. That level of accuracy matters for holding brand quality standards on premium products.",
      "For all its output, the KDF-1 keeps a balanced energy profile at a total of 40KW, which makes it efficient to run over the long term. Its sturdy, well-engineered build gives long service life, and its modular design and compatibility with different cigarette types make it a strong fit for both smaller and large-scale filter production, whether you are expanding capacity or upgrading older machinery.",
    ],
    features: [],
    featureTable: [
      { label: "Model", value: "KDF-1 filter making line" },
      { label: "Production Capacity", value: "120mm filters" },
      { label: "Filter Circumference", value: "16.8 – 28.1 mm" },
      { label: "Filter Length", value: "64mm – 150mm" },
      { label: "PLC Control System", value: "Siemens or Beckhoff" },
      { label: "Servo System", value: "Lenze or Beckhoff" },
      { label: "Circumference Control", value: "Laser system" },
      { label: "Power", value: "KDF-1 / 40 KW" },
    ],
    specs: [],
    applications: ["High-volume filter production", "Standard and specialised filters"],
  },
  {
    slug: "kdf-2",
    name: "Hauni KDF-2 Cigarette Filter Manufacturing Machine",
    h1: "Hauni KDF-2 Cigarette Filter Manufacturing Machine",
    metaTitle: "Hauni KDF-2 High-Speed Filter Making Machine",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Hauni",
    condition: "Used",
    tagline: "High-speed Hauni KDF-2 filter line at 400 metres per minute.",
    metaDescription:
      "Hauni KDF-2 filter making machine in Pakistan, 400 metres per minute of acetate tow with Siemens/Beckhoff PLC. Supplied by Civic Tobacco Machinery.",
    keywords: ["Hauni KDF-2", "KDF-2 filter making line", "high speed filter maker Pakistan"],
    image: "/images/machines/kdf-2.webp",
    intro: [
      "The Hauni KDF-2 is a world-class filter making machine built for high-efficiency, high-output cigarette filter production. Known for its engineering quality and advanced automation, the KDF-2 is a trusted choice for large-scale manufacturers in Pakistan who need both precision and productivity.",
      "It runs at an impressive pace, processing 400 metres of acetate tow a minute, which makes it well suited to the demands of modern production lines. That speed is matched by real versatility: it supports filter circumferences from 16.8mm to 28.1mm and filter lengths from 64mm to 150mm, so it covers everything from standard King Size filters to more specialised formats with consistency, quality and minimal downtime.",
      "What sets the KDF-2 apart is its automation. A PLC control system, available in Siemens or Beckhoff configurations, gives full control and real-time monitoring, while a high-performance Lenze or Beckhoff servo system keeps movements accurate and operation dependable. That reduces the margin of error and keeps filter quality uniform, so the machine integrates smoothly as a reliable backbone for continuous, large-scale manufacturing.",
      "Built for durability, the KDF-2 pairs with a tow opener and the HCF80 automatic tray filler to streamline the workflow and cut manual handling. It draws 40KW for the main KDF-2 unit and 15KW for the HCF80 filler, combining energy efficiency with strong performance.",
      "Even with all that capability, the KDF-2 keeps a manageable footprint at around 6,500kg, and its solid construction gives long-term durability under demanding production schedules. Whether you are setting up a new facility or upgrading existing machinery, it is a smart investment that fits neatly into modern production systems while delivering excellent filter quality.",
    ],
    features: [],
    featureTable: [
      { label: "Model", value: "KDF-2 filter making line" },
      { label: "Production Capacity", value: "400 metres / min for acetate tow" },
      { label: "Filter Circumference", value: "16.8 – 28.1 mm" },
      { label: "Filter Length", value: "64mm – 150mm" },
      { label: "PLC Control System", value: "Siemens or Beckhoff" },
      { label: "Servo System", value: "Lenze or Beckhoff" },
      { label: "Machine Unit", value: "KDF-2 filter maker with tow opener, HCF80 auto tray filler" },
      { label: "Power", value: "KDF-2 / 40 KW, HCF80 / 15 KW" },
      { label: "Total Weight", value: "6,500 kg" },
    ],
    specs: [],
    applications: ["High-volume filter production", "Large-scale manufacturing"],
  },
  {
    slug: "molins-pm-5",
    name: "Molins PM-5 Filter Maker",
    h1: "Molins PM-5 Filter Maker",
    metaTitle: "Molins PM-5 Cigarette Filter Making Machine",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Molins",
    condition: "Used",
    tagline: "High-capacity Molins filter maker at 4,000 filters per minute.",
    metaDescription:
      "Molins PM-5 filter making machine in Pakistan, high-capacity maker at 4,000 filters per minute. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Molins PM-5", "PM-5 filter maker", "filter making machine Pakistan"],
    image: "/images/machines/molins-pm-5.webp",
    intro: [
      "The Molins PM-5 is a high-capacity cigarette filter maker built for the demands of large-scale production. With a capacity of 4,000 filters a minute, it is a strong example of efficiency and precision in filter manufacturing, and a dependable fit for busy factories in Pakistan.",
      "It offers useful flexibility on filter sizing, with a filter rod diameter of 7.5 to 7.8mm and filter rod lengths from 108 to 126mm, so it can accommodate different filter specifications without difficulty.",
      "At around 2,000kg the PM-5 has a sturdy build that gives durability and stable running over long periods. Made by Molins, a well-known name in the industry, it combines proven engineering with high-speed output, which makes it an essential asset for manufacturers who want quality filters while maximising throughput.",
    ],
    features: [],
    featureTable: [
      { label: "Capacity", value: "4,000 filters per minute" },
      { label: "Filter Rod Diameter", value: "7.5 – 7.8 mm" },
      { label: "Filter Rod Length", value: "108 – 126 mm" },
      { label: "Weight", value: "2,000 kg" },
      { label: "Manufacturer", value: "Molins" },
    ],
    specs: [],
    applications: ["High-volume filter production", "Molins-based lines"],
  },
  {
    slug: "hollow-tube-maker",
    name: "Hollow Tube Maker",
    h1: "Hollow Tube Maker",
    metaTitle: "Hollow Tube Maker, Cigarette Filter Machine",
    category: "manufacturing-machines",
    subcategory: "cigarette-filter-making-machines",
    brand: "Generic",
    condition: "Used",
    tagline: "High-speed hollow tube maker at 2,100 cigarettes per minute.",
    metaDescription:
      "Hollow tube maker in Pakistan, 2,100 per minute with plug assembler for speciality filter tubes. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["hollow tube maker", "hollow tube filter machine", "speciality filter machine Pakistan"],
    image: "/images/machines/hollow-tube-maker.webp",
    intro: [
      "The Hollow Tube Maker stands out for its production capacity and high-speed running. Capable of producing 2,100 cigarettes a minute, it delivers strong efficiency and consistent output. A rod speed range of 140 to 175 metres a minute, together with a cut-off speed of up to 2,500 rods a minute, underlines how well it suits high-volume production for factories in Pakistan.",
      "At 3,050kg the maker has a robust build for durability and long-term reliability. The plug assembler adds a further 1,800kg and works in step with the maker for precise, efficient tube production. Total power draw is 14kW, split between 6.5kW for the maker and 7.5kW for the plug assembler, which strikes a good balance between performance and energy use.",
      "Designed for large-scale manufacturing, the Hollow Tube Maker uses up-to-date technology to turn out high-quality tubes. Its high-speed capability and solid engineering make it a valuable asset for producers that need to meet strong demand while holding excellent production standards.",
    ],
    features: [],
    featureTable: [
      { label: "Model", value: "Hollow Tube Maker" },
      { label: "Production Capacity", value: "2,100 cigarettes / minute" },
      { label: "Rod Speed Range", value: "140 – 175 metres per minute" },
      { label: "Cut-off Speed", value: "Up to 2,500 rods per minute" },
      { label: "Maker Weight", value: "3,050 kg" },
      { label: "Plug Assembler Weight", value: "1,800 kg" },
      { label: "Total Power", value: "14 kW (6.5 kW maker + 7.5 kW plug assembler)" },
    ],
    specs: [],
    applications: ["High-volume filter production", "Speciality filter tubes"],
  },
];

const tobacco: Product[] = [
  {
    slug: "tobacco-feeder",
    name: "Tobacco Feeder",
    h1: "Tobacco Feeder",
    metaTitle: "Tobacco Feeder for Cigarette Making Machines",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Generic",
    condition: "Used",
    tagline: "Feeds a steady, even flow of tobacco to Mark 8 and Mark 9 makers.",
    metaDescription:
      "Tobacco feeder in Pakistan, steady, even tobacco flow for Mark 8 and Mark 9 cigarette makers. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["tobacco feeder", "cigarette maker feeder", "tobacco machinery Pakistan"],
    image: "/images/machines/tobacco-feeder.webp",
    intro: [
      "The tobacco feeder is a crucial input machine for a cigarette factory. It feeds tobacco continuously and evenly into the making machines, layering it neatly so it is prepared exactly right for production.",
      "It is compatible with Mark 8 and Mark 9 machines, so it slots into an existing setup with ease. Its adjustable volume settings let you control the tobacco flow precisely, which lifts production efficiency, and its automation cuts manual handling, streamlines operation and keeps productivity high.",
    ],
    features: [],
    featureTable: [
      { label: "Function", value: "Provides a steady tobacco flow" },
      { label: "Preparation", value: "Evenly spreads and layers tobacco" },
      { label: "Integration", value: "Compatible with Mark 8 & Mark 9 machines" },
      { label: "Control", value: "Adjustable volume settings" },
      { label: "Automation", value: "Reduces manual handling" },
    ],
    specs: [],
    applications: ["Maker feeding", "Steady rod production"],
  },
  {
    slug: "cigarette-reclaimer",
    name: "Cigarette Reclaimer",
    h1: "Cigarette Reclaimer",
    metaTitle: "Cigarette Reclaimer, Tobacco Recovery Machine",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Generic",
    condition: "Used",
    tagline: "Recovers tobacco from waste at 120 kg/hour with 99.8% efficiency.",
    metaDescription:
      "Cigarette reclaimer in Pakistan, recovers tobacco from manufacturing waste at 120 kg/hour with 99.8% efficiency. Supplied by Civic Tobacco Machinery.",
    keywords: ["cigarette reclaimer", "tobacco recovery machine", "tobacco reclaimer Pakistan"],
    image: "/images/machines/cigarette-reclaimer.webp",
    intro: [
      "The Cigarette Reclaimer is an excellent tobacco recovery machine for cigarette manufacturing waste. It separates reusable tobacco from waste materials with very small losses, so the tobacco you would otherwise throw away goes back into production.",
      "At maximum capacity it reclaims 120 kg an hour and works at an impressive 99.8% efficiency, giving you the highest possible utilisation. With a 90% recovery rate, it delivers a real advantage in reducing waste and lifting overall production efficiency.",
      "It is user-friendly and easy to install into your production line, which makes it a practical, cost-saving addition for factories in Pakistan that want to get the most out of every batch.",
    ],
    features: [],
    featureTable: [
      { label: "Function", value: "Recovers tobacco from waste" },
      { label: "Separation", value: "Efficiently separates tobacco from waste" },
      { label: "Capacity", value: "Reclaims 120 kg / hour" },
      { label: "Efficiency", value: "99.8%" },
      { label: "Recovery Rate", value: "90%" },
      { label: "Operation", value: "Simple" },
    ],
    specs: [],
    applications: ["Waste reduction", "Tobacco recovery"],
  },
  {
    slug: "tobacco-cutters",
    name: "Hauni Tobacco Cutter KT-400",
    h1: "Hauni Tobacco Cutter KT-400",
    metaTitle: "Hauni Tobacco Cutter KT-400",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Hauni",
    condition: "Used",
    tagline: "Hauni KT-400 tobacco cutter with five knives and PLC cut-size control.",
    metaDescription:
      "Hauni Tobacco Cutter KT-400 in Pakistan, five-knife cutter with PLC-regulated cut size. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["Hauni Tobacco Cutter KT-400", "Hauni KT-400", "tobacco cutter Pakistan"],
    image: "/images/machines/tobacco-cutters.webp",
    intro: [
      "The Hauni Tobacco Cutter KT-400 is a precision-engineered machine that plays a crucial role in keeping cut quality consistent in tobacco processing. It carries five knives, which deliver uniform cuts and improve the overall quality of the tobacco blend, and pneumatic cylinders operate the jaw for smooth, efficient cutting with less downtime and maintenance.",
      "The KT-400 also runs an advanced PLC drive system on a brass bend slat, which regulates the cut size precisely. That keeps every batch uniform and lets you tailor the cut size to specific requirements, adding real versatility. With its precision and reliability, the KT-400 is an important asset for any tobacco production facility in Pakistan aiming for top quality and efficiency.",
    ],
    features: [],
    featureTable: [
      { label: "Machine Model", value: "KT-400 Hauni Tobacco Cutter" },
      { label: "Number of Knives", value: "5" },
      { label: "Cylinders", value: "Pneumatic cylinders for jaw operation" },
      { label: "Drive", value: "PLC drive on brass bend slat for regulating the cut size" },
    ],
    specs: [],
    applications: ["Primary processing", "Cut rag preparation"],
  },
  {
    slug: "tobacco-stem-flattener",
    name: "Tobacco Stem Flattener",
    h1: "Tobacco Stem Flattener",
    metaTitle: "Tobacco Stem Flattener, Primary Processing Machine",
    category: "manufacturing-machines",
    subcategory: "tobacco-machinery",
    brand: "Generic",
    condition: "Used",
    tagline: "Flattens tobacco stems for uniform blending and less leaf waste.",
    metaDescription:
      "Tobacco stem flattener in Pakistan, flattens stems for uniform blending and reduced leaf waste. Supplied and serviced by Civic Tobacco Machinery.",
    keywords: ["tobacco stem flattener", "stem roller", "tobacco machinery Pakistan"],
    image: "/images/machines/tobacco-stem-flattener.webp",
    intro: [
      "The Tobacco Stem Flattener plays a key role in optimising the tobacco processing workflow. By flattening tobacco stems, it prepares them for uniform blending with the leaves, which improves processing ease and reduces the chance of inconsistencies in the final product.",
      "By flattening stems efficiently, it also minimises leaf waste, making the whole process more economical and sustainable. The result is a consistent, high-quality product that meets strict industry standards, which makes the stem flattener a valuable asset for any tobacco processing operation in Pakistan.",
    ],
    features: [],
    featureTable: [
      { label: "Function", value: "Flattens tobacco stems" },
      { label: "Outcome", value: "Uniform blending with leaves" },
      { label: "Benefit", value: "Improves processing ease" },
      { label: "Utilisation", value: "Reduces leaf waste" },
      { label: "Consistency", value: "Ensures a uniform product" },
    ],
    specs: [],
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
  "manufacturing-machines": "/cigarette-manufacturing-machines",
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

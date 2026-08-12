/**
 * Content dictionaries. One entry per locale, holding every translatable
 * string used by the localized ("/[locale]") page tree and the shared chrome
 * (header, footer, CTA band, product cards…).
 *
 * The `en` dictionary mirrors the existing hard-coded English copy exactly, so
 * the English site renders identically whether a component reads a literal or
 * this dictionary. Each new language = one more entry here (reviewed by a
 * native speaker) — no new page files.
 */

import type { LocaleCode } from "./i18n";
import { defaultLocale } from "./i18n";

export interface Faq {
  question: string;
  answer: string;
}

export interface CategoryContent {
  eyebrow: string;
  /** Visible <h1>. */
  title: string;
  /** SEO meta description. */
  description: string;
  intro: string[];
  faqs?: Faq[];
}

export interface Dictionary {
  /* -------------------------------- chrome ------------------------------- */
  nav: {
    about: string;
    making: string;
    packing: string;
    filter: string;
    wrappers: string;
    cutter: string;
    contact: string;
  };
  header: { tagline: string; call: string; whatsapp: string; region: string };
  megaMenu: { prompt: string; viewAll: string };
  productCard: { viewDetails: string };
  breadcrumbHome: string;
  faqHeading: string;
  emptyNote: string;
  cta: {
    title: string;
    text: string;
    whatsapp: string;
    enquiry: string;
  };
  footer: {
    blurb: string;
    machines: string;
    manufacturing: string;
    reachUs: string;
    ourBlog: string;
    hours: string;
    rights: string;
    links: { home: string; about: string; blog: string; contact: string };
    /** Machine/subcategory link labels keyed by canonical English href. */
    labels: Record<string, string>;
  };
  switcher: { label: string };

  /* --------------------------------- home -------------------------------- */
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: { h1: string; lead: string; getQuote: string; whatsapp: string };
    browseHeading: string;
    browse: { packing: string; wrapping: string; making: string; used: string };
    viewRange: string;
    about: {
      eyebrow: string;
      h2: string;
      lead: string;
      p1: string;
      p2: string;
      bullets: string[];
      more: string;
    };
    featured: { eyebrow: string; h2: string; viewAll: string };
    why: {
      eyebrow: string;
      h2: string;
      reasons: { title: string; text: string }[];
    };
    ranges: { making: string; packing: string; filter: string; wrapping: string };
    carousel: {
      eyebrow: string;
      heading: string;
      viewAllPrefix: string;
      viewAllSuffix: string;
    };
    gallery: { eyebrow: string; heading: string; text: string };
    local: {
      eyebrow: string;
      h2: string;
      text: string;
      bullets: string[];
      visitHeading: string;
      directions: string;
    };
    faqHeading: { eyebrow: string; h2: string };
    faqs: Faq[];
  };

  /* --------------------------------- about ------------------------------- */
  about: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; intro: string };
    whoHeading: string;
    who: string[];
    howHeading: string;
    how: string[];
    brandsHeading: string;
    brands: string;
    glance: {
      heading: string;
      basedIn: string;
      basedInValue: string;
      supply: string;
      supplyValue: string;
      serve: string;
      serveValue: string;
      call: string;
      talk: string;
    };
    valuesEyebrow: string;
    valuesHeading: string;
    values: { title: string; text: string }[];
    ctaTitle: string;
    ctaText: string;
  };

  /* -------------------------------- contact ------------------------------ */
  contact: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; intro: string };
    directHeading: string;
    directText: string;
    rows: {
      visit: string;
      call: string;
      whatsapp: string;
      whatsappValue: string;
      email: string;
      hours: string;
      hoursValue: string;
      hoursClosed: string;
    };
    openInMaps: string;
    formHeading: string;
    formIntro: string;
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailOptional: string;
      emailPlaceholder: string;
      interest: string;
      interestPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      errorText: string;
      errorWhatsApp: string;
      footnote: string;
      footnoteChat: string;
    };
  };

  /* ------------------------------ categories ----------------------------- */
  /** Keyed by canonical English path. */
  categories: Record<string, CategoryContent>;

  /** The "Cigarette Making Machines" section shown on the manufacturing page. */
  manufacturingSection: { title: string; intro: string; seeAll: string };

  /** Chrome strings for the blog index + post pages. */
  blog: {
    eyebrow: string;
    indexTitle: string;
    indexIntro: string;
    metaTitle: string;
    metaDescription: string;
    readArticle: string;
    minRead: string;
    tags: string;
    backToAll: string;
    keepReading: string;
    dateLocale: string;
  };

  /** Chrome strings for the product detail page. */
  product: {
    keyFeatures: string;
    specifications: string;
    description: string;
    bestSuitedFor: string;
    call: string;
    interested: string;
    askAbout: string;
    enquiryText: string;
    related: string;
    thumbs: { front: string; detail: string; operation: string };
    waMessage: (name: string) => string;
  };
}

/* ---------------------------------------------------------------------------
 * English — mirrors the existing hard-coded copy.
 * ------------------------------------------------------------------------- */

const en: Dictionary = {
  nav: {
    about: "About",
    making: "Cigarette Making",
    packing: "Cigarette Packing",
    filter: "Filter Machines",
    wrappers: "Wrappers & Boxers",
    cutter: "Cutter/Feeder/Reclaimer",
    contact: "Contact Us",
  },
  header: {
    tagline: "Cigarette & Tobacco Machinery Manufacturers in Pakistan",
    call: "Call",
    whatsapp: "WhatsApp",
    region: "Pakistan",
  },
  megaMenu: {
    prompt: "Looking for a specific machine or a full line?",
    viewAll: "View all manufacturing machines →",
  },
  productCard: { viewDetails: "View details" },
  breadcrumbHome: "Home",
  faqHeading: "Frequently asked questions",
  emptyNote:
    "Machines in this range are added regularly. Contact us for current stock.",
  cta: {
    title: "Not sure which machine you need?",
    text: "Tell us your format, target output and budget. We will recommend the right machine, new or reconditioned, and help you get it running.",
    whatsapp: "WhatsApp",
    enquiry: "Send an Enquiry",
  },
  footer: {
    blurb:
      "Suppliers of new and used cigarette manufacturing, packing and wrapping machines in Pakistan, with installation, spares and service you can rely on.",
    machines: "Machines",
    manufacturing: "Manufacturing",
    reachUs: "Reach Us",
    ourBlog: "Our Blog",
    hours: "Mon–Sat, 09:00–18:00",
    rights: "All rights reserved.",
    links: { home: "Home", about: "About Us", blog: "Blog", contact: "Contact Us" },
    labels: {
      "/cigarette-packing-machines": "Packing Machines",
      "/cigarette-box-wrapping-machines": "Wrapping Machines",
      "/cigarette-manufacturing-machines": "Manufacturing Machines",
      "/cigarette-making-machines": "Cigarette Making Machines",
      "/cigarette-filter-making-machines": "Cigarette Filter Making Machines",
      "/cutter-feeder-reclaimer": "Tobacco Machinery",
    },
  },
  switcher: { label: "Language" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Cigarette Machinery Pakistan",
    metaDescription:
      "Civic Tobacco Machinery supplies cigarette manufacturing, packing and wrapping machines in Pakistan. New and used tobacco machinery, filter making lines, spare parts and full installation support.",
    hero: {
      h1: "Looking for Cigarette & Tobacco Machinery in Pakistan?",
      lead: "You’re in the right place. From the first rod to the finished carton, Civic Tobacco Machinery sets you up with new and reconditioned making, filter, packing and wrapping lines, installed, tuned and backed by the spare parts and service you can count on.",
      getQuote: "Get a Quote",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Browse by machine type",
    browse: {
      packing: "Cigarette Packing Machines",
      wrapping: "Cigarette Wrapping Machines",
      making: "Cigarette Manufacturing Machines",
      used: "Used Cigarette Machinery",
    },
    viewRange: "View range →",
    about: {
      eyebrow: "About Us",
      h2: "Generations of Engineering Excellence in Tobacco Machinery",
      lead: "A proud father and son business, now into its third generation, with more than 35 years of hands-on experience in the tobacco industry.",
      p1: "For decades our family has worked in one field of tobacco machinery. What started as a small trading operation has grown into a trusted, multi-generation name that new and established cigarette companies across Pakistan rely on to build and run their lines.",
      p2: "We are specialist tobacco machinery manufacturers offering a complete, one-stop solution. From making and filter machines to packers and wrappers, we help you source the right equipment, see it running before you buy, and get it installed and tuned on your own floor. We also provide free demonstration and training for your technicians, so your team is confident with the machine from day one.",
      bullets: [
        "Multi-generation family business",
        "New & reconditioned machines",
        "Full line, maker to packer",
        "Demonstration & technician training",
      ],
      more: "More About Us",
    },
    featured: {
      eyebrow: "In Stock & Popular",
      h2: "Featured Machines",
      viewAll: "View all machines →",
    },
    why: {
      eyebrow: "Why Civic Tobacco Machinery",
      h2: "The Right Machine, Set Up to Last",
      reasons: [
        {
          title: "Machines that keep running",
          text: "We stick to well-proven brands with easy parts availability, so your line stays productive shift after shift.",
        },
        {
          title: "Honest condition reports",
          text: "Every used machine is inspected, serviced and tested. You get a straight account of its condition, no surprises.",
        },
        {
          title: "Full line support",
          text: "From maker to packer, we help you match machines so nothing becomes a bottleneck, and we install and support them.",
        },
        {
          title: "Local, on-the-ground help",
          text: "We are based right here in Pakistan. When you need parts or a technician, help is close by, not overseas.",
        },
      ],
    },
    ranges: {
      making: "Cigarette Making Machines",
      packing: "Cigarette Packing Machines",
      filter: "Cigarette Filter Making Machines",
      wrapping: "Cigarette Box Wrapping Machines",
    },
    carousel: {
      eyebrow: "Our Stock",
      heading: "Cigarette Machinery for Sale",
      viewAllPrefix: "View all ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Gallery",
      heading: "Civic Tobacco Machinery in Pictures",
      text: "Moments from international tobacco exhibitions and meetings with our partners and customers around the world.",
    },
    local: {
      eyebrow: "Serving All of Pakistan",
      h2: "Your Tobacco Machinery Partner in Pakistan",
      text: "Being based in the SITE industrial estate means we are close to the factories we serve. When you need a part, a technician or honest advice on a machine, you are dealing with people just across the city, not a supplier on another continent.",
      bullets: [
        "Fast local support and spare parts",
        "Installation and setup at your factory",
        "New and reconditioned machines for every budget",
      ],
      visitHeading: "Visit or Call Us",
      directions: "Get Directions & Contact",
    },
    faqHeading: {
      eyebrow: "Common Questions",
      h2: "Frequently Asked Questions",
    },
    faqs: [
      {
        question: "Do you sell both new and used cigarette machines in Pakistan?",
        answer:
          "Yes. We supply new machines as well as carefully reconditioned used cigarette and tobacco machinery. Every used machine is inspected, serviced and tested before we sell it, and it comes with an honest condition report so you know exactly what you are buying.",
      },
      {
        question: "Which brands of cigarette manufacturing machines do you deal in?",
        answer:
          "We work mainly with well-supported brands like Molins for making and filter machines, and HLP and SASIB for packing and wrapping. These are chosen because parts and trained technicians are easy to find, which keeps your line running for years.",
      },
      {
        question: "Do you install the machines and provide spare parts?",
        answer:
          "We do. We help with installation and setting the machine correctly on your floor, and we support you afterwards with spare parts and service. Getting a maker or packer running is not a plug-and-play job, so we stay involved until it runs the way it should.",
      },
      {
        question: "Where are you located and do you deliver across Pakistan?",
        answer:
          "Our workshop is in the SITE industrial estate in Karachi. We serve customers across Pakistan, and we can arrange delivery and installation wherever your factory is.",
      },
    ],
  },

  about: {
    metaTitle: "About Us | Civic Tobacco Machinery",
    metaDescription:
      "About Civic Tobacco Machinery, cigarette and tobacco machinery suppliers in Pakistan. Who we are, what we stand for, and how we support your factory with new and used machines.",
    hero: {
      eyebrow: "About Us",
      title: "Cigarette & Tobacco Machinery, Backed by People Who Know It",
      intro:
        "Civic Tobacco Machinery has spent years helping factories across Pakistan build, expand and maintain their cigarette lines.",
    },
    whoHeading: "Who we are",
    who: [
      "We are a Pakistan-based supplier of cigarette and tobacco machinery. Over the years we have worked with everything from small workshops taking their first steps into cigarette production to established factories adding a second or third line. That experience shapes how we work, we listen first, understand what you actually need, and then point you to the machine that fits.",
      "Our range covers the whole line: making machines that form the rod, filter makers, packing machines for hard and soft packs, wrapping and boxing machines, and the tobacco machinery that keeps the floor fed. We deal in both new and carefully reconditioned equipment, so there is a sensible option whatever your budget looks like.",
    ],
    howHeading: "How we work",
    how: [
      "Buying a machine is only half the story. A maker or packer has to be installed properly, set correctly and kept running, and that is where a lot of suppliers disappear. We do not. We help you get the machine onto your floor and running the way it should, and we stay reachable afterwards for parts and service.",
      "Because we are based right here in the SITE industrial estate, that support is genuinely local. When something needs attention, you are speaking to people across the city, not waiting on a supplier in another country and another time zone.",
    ],
    brandsHeading: "The brands we trust",
    brands:
      "We focus on well-proven names, Molins for making and filter machines, HLP and SASIB for packing and wrapping, and the Protos family for higher-speed lines. We choose these not for the badge but because their parts and know-how are easy to find, which is exactly what keeps a machine earning its keep for years.",
    glance: {
      heading: "At a glance",
      basedIn: "Based in",
      basedInValue: "SITE, Karachi, Pakistan",
      supply: "We supply",
      supplyValue: "New & used tobacco machinery",
      serve: "We serve",
      serveValue: "All of Pakistan",
      call: "Call / WhatsApp",
      talk: "Talk to Us",
    },
    valuesEyebrow: "What We Stand For",
    valuesHeading: "The Way We Do Business",
    values: [
      {
        title: "Honesty first",
        text: "We tell you the real condition of a machine and what it can do. A sale that leaves you unhappy is no sale at all.",
      },
      {
        title: "Machines we would run ourselves",
        text: "We deal in brands and models we trust, the ones with good parts availability and a long working life.",
      },
      {
        title: "Support that stays",
        text: "Our job does not end at delivery. We help with installation, setup, spare parts and service for the long run.",
      },
      {
        title: "Fair value",
        text: "New or reconditioned, we help you get the right machine for your budget without cutting corners that matter.",
      },
    ],
    ctaTitle: "Let's talk about your line",
    ctaText:
      "Whether you are starting out or expanding, tell us what you are trying to produce and we will help you get there.",
  },

  contact: {
    metaTitle: "Contact Us | Civic Tobacco Machinery",
    metaDescription:
      "Contact Civic Tobacco Machinery in Pakistan. Call, WhatsApp or send an enquiry about cigarette manufacturing, packing, wrapping and used machines. Workshop in SITE, Karachi.",
    hero: {
      eyebrow: "Contact Us",
      title: "Get in Touch With Civic Tobacco Machinery",
      intro:
        "Tell us what you are looking for and we will get back to you the same working day. Call, WhatsApp, email or send the form below.",
    },
    directHeading: "Reach us directly",
    directText:
      "The quickest way to get a straight answer on a machine, its condition, price or availability, is to message us on WhatsApp or give us a call.",
    rows: {
      visit: "Visit our workshop",
      call: "Call us",
      whatsapp: "WhatsApp",
      whatsappValue: "Message us on",
      email: "Email",
      hours: "Opening hours",
      hoursValue: "Monday – Saturday, 09:00 – 18:00",
      hoursClosed: "Closed on Sunday",
    },
    openInMaps: "Open in Google Maps",
    formHeading: "Send an enquiry",
    formIntro:
      "Fill this in and we will get back to you quickly. Fields marked as required help us give you an accurate answer.",
    form: {
      name: "Your name",
      namePlaceholder: "e.g. Ahmed Khan",
      phone: "Phone / WhatsApp",
      phonePlaceholder: "e.g. 0300 1234567",
      email: "Email",
      emailOptional: "(optional)",
      emailPlaceholder: "you@company.com",
      interest: "Machine you are interested in",
      interestPlaceholder: "e.g. HLP-200 packing machine",
      message: "Your message",
      messagePlaceholder: "Tell us your format, target output and any details.",
      submit: "Send Enquiry",
      sending: "Sending…",
      successTitle: "Thank you!",
      successText:
        "Your enquiry has been sent. Our team will get back to you shortly, usually the same working day.",
      errorText:
        "Sorry, something went wrong sending your message. Please try again, or",
      errorWhatsApp: "message us on WhatsApp",
      footnote:
        "Your details go straight to our team, we usually reply the same working day. Prefer to chat?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Manufacturing Machines",
      title: "Cigarette Manufacturing Machines in Pakistan",
      description:
        "Cigarette manufacturing machines in Pakistan, Molins making machines, filter makers and tobacco machinery. New and reconditioned lines from Civic Tobacco Machinery.",
      intro: [
        "Making a good cigarette starts long before the pack. It starts with a maker that lays down an even rod, a filter line that cuts clean, and tobacco machinery that keeps the whole floor fed. Civic Tobacco Machinery supplies cigarette manufacturing machines in Pakistan across all three areas.",
        "We handle Molins making machines, KDF and PM filter makers, and the feeders, cutters and reclaimers that support them. Tell us the brands you run and the output you need, and we will help you build a line that holds its speed and quality day after day.",
      ],
      faqs: [
        {
          question: "What cigarette manufacturing machines do you supply?",
          answer:
            "We supply the full making line: Molins Mark 8, Mark 9 and Mark 9.5 makers and Hauni Protos makers, plus KDF and Molins filter makers and the tobacco feeders, cutters and reclaimers that support them.",
        },
        {
          question: "How many cigarettes per minute do the makers produce?",
          answer:
            "Depending on the model, our makers run from around 3,000 up to 8,000 cigarettes per minute, so you can match the machine to your target output.",
        },
        {
          question: "Do you supply new or reconditioned machines?",
          answer:
            "Both. Reconditioned Molins and Hauni machines are fully inspected, serviced and tested before sale, offering strong value for growing factories.",
        },
        {
          question: "Do you help match the maker with the right filter line?",
          answer:
            "Yes. We make sure the maker and filter maker run in step so the whole line stays balanced. Tell us your brands and target output and we will recommend a setup.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Packing Machines",
      title: "Cigarette Packing Machines in Pakistan",
      description:
        "Cigarette packing machines in Pakistan, HLP and SASIB hard and soft pack lines from 180 to 225 packs per minute. Supplied, installed and supported by Civic Tobacco Machinery.",
      intro: [
        "A packing line is where your product finally takes shape, so it has to be steady, clean and easy to run shift after shift. At Civic Tobacco Machinery we supply cigarette packing machines in Pakistan that are chosen for exactly that, dependable output and packs that look the same every single time.",
        "Our range covers hard pack and soft pack formats, from 180 up to 225 packs per minute, with both new and carefully reconditioned options. Whether you are setting up a fresh line or adding capacity to an existing one, we help you match the right machine to your volume, your budget and the brands you produce.",
      ],
      faqs: [
        {
          question: "What is the difference between hard pack and soft pack machines?",
          answer:
            "Hard packs (hinge-lid boxes) run on HLP-style machines, while soft packs (folded foil and printed outer) run on SASIB-style machines. We supply both and help you match the machine to the pack format your brands actually sell.",
        },
        {
          question: "What packing speeds do you offer?",
          answer:
            "Our cigarette packing machines run from around 180 up to 225 packs per minute. Pick a speed that matches your real shift demand with some room to grow, rather than paying for capacity that sits idle.",
        },
        {
          question: "Do you sell new or reconditioned packing machines?",
          answer:
            "Both. Every used HLP or SASIB packer is inspected, serviced and tested before sale, so a good reconditioned machine can run for years at a fraction of the new price.",
        },
        {
          question: "Do you install the machine and supply spare parts?",
          answer:
            "Yes. We install and set up the machine, and support HLP and SASIB with widely available spares and service. Message us on WhatsApp at +92 301 1111184 for price and current availability.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Wrapping Machines",
      title: "Cigarette Wrapping Machines in Pakistan",
      description:
        "Cigarette wrapping machines in Pakistan, overwrappers, boxers and cellophane wrapping machines that seal your packs cleanly. Sales, spares and service from Civic Tobacco Machinery.",
      intro: [
        "The wrapper is the last thing your customer sees before they open the pack, which is why a clean, tight seal matters so much. Civic Tobacco Machinery supplies cigarette wrapping machines in Pakistan that give you a neat film finish, a straight tear tape and packs that stay fresh on the shelf.",
        "From single-pack overwrappers to box wrapping and carton boxers, we cover the full range. Every machine we sell is checked, set up and handed over ready to run, with spares and service you can call on when you need them.",
      ],
      faqs: [
        {
          question: "What is the difference between an over-wrapper and a boxer?",
          answer:
            "An over-wrapper seals each pack in cellophane film with a tear tape, while a boxer (cartoning machine) groups finished packs into cartons or boxes. Most lines use both, one after the other.",
        },
        {
          question: "Which wrapping and boxing machines do you supply?",
          answer:
            "We supply Molins and SASIB over-wrappers and boxers, including the CP1 pack wrapper, the naked over-wrapper and Molins and SASIB boxers, for both hard-pack and soft-pack lines.",
        },
        {
          question: "Do you offer new or reconditioned wrapping machines?",
          answer:
            "Both new and carefully reconditioned units are available. Every used machine is checked, set up and handed over ready to run.",
        },
        {
          question: "Do you provide installation and spares?",
          answer:
            "Yes, installation, setup, spares and service are all part of what we do. Contact us on WhatsApp at +92 301 1111184 for a quotation.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Manufacturing Machines",
      title: "Cigarette Filter Making Machines in Pakistan",
      description:
        "Cigarette filter making machines in Pakistan, Molins KDF, Molins PM and hollow tube makers. Filter rod lines supplied and supported by Civic Tobacco Machinery.",
      intro: [
        "A good filter does more than finish the cigarette, it controls draw, firmness and the whole feel of the smoke. Civic Tobacco Machinery supplies cigarette filter making machines in Pakistan that turn out consistent rods your maker can rely on.",
        "We stock Molins KDF and Molins PM filter makers along with hollow tube machines for speciality formats. Whatever filter length or type you produce, we will help you pick a line that matches the speed of your makers.",
      ],
      faqs: [
        {
          question: "Which filter making machines do you supply?",
          answer:
            "We supply Hauni KDF-1 and KDF-2 filter makers, Molins PM filter makers and hollow tube machines for speciality formats, for factories running filter rod production.",
        },
        {
          question: "Can the filter maker match my cigarette maker's speed?",
          answer:
            "Yes. We help you pick a filter line that matches the speed of your makers so the two run in step and the line stays balanced.",
        },
        {
          question: "Do you offer new and reconditioned filter makers?",
          answer:
            "Both. Every reconditioned KDF or PM machine is inspected, serviced and tested before sale.",
        },
        {
          question: "Do you install and support filter making machines?",
          answer:
            "Yes, installation, spares and service are included. Message us on WhatsApp at +92 301 1111184 for price and availability.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Manufacturing Machines",
      title: "Tobacco Cutter, Feeder & Reclaimer Machines in Pakistan",
      description:
        "Tobacco machinery in Pakistan, feeders, cutters, reclaimers and stem flatteners that keep your primary and secondary floors running. Supplied by Civic Tobacco Machinery.",
      intro: [
        "Behind every maker and packer there is a set of quieter machines doing the heavy lifting, feeding tobacco, cutting it, saving what would otherwise be lost. Civic Tobacco Machinery supplies tobacco machinery in Pakistan that keeps this side of the floor moving.",
        "Feeders, cutters, reclaimers and stem flatteners all work together to hold a steady supply to your line and cut down on waste. We help you fit the right units around the makers and packers you already run.",
      ],
      faqs: [
        {
          question: "What do tobacco feeders, cutters and reclaimers do?",
          answer:
            "Feeders keep the makers supplied with tobacco, cutters cut leaf to size for production, and reclaimers recover tobacco from rejected cigarettes so it can be reused, keeping the primary and secondary floors running smoothly.",
        },
        {
          question: "Can this equipment reduce tobacco waste?",
          answer:
            "Yes. A reclaimer recovers usable tobacco from rejected sticks, which cuts waste and lowers running costs over time.",
        },
        {
          question: "Which brands do you supply?",
          answer:
            "We supply well-supported machines such as the Hauni KT-400 tobacco cutter, along with tobacco feeders, cigarette reclaimers and stem flatteners.",
        },
        {
          question: "Are the machines new or reconditioned, and do you support them?",
          answer:
            "Both new and reconditioned units are available, all tested before sale, with installation, spares and service. Contact us on WhatsApp at +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Cigarette Making Machines in Pakistan",
    intro:
      "The maker is the heart of any cigarette factory. It takes cut tobacco and paper and turns them into a finished rod, thousands of times a minute, without a break in quality.",
    seeAll: "See all →",
  },
  blog: {
    eyebrow: "Blog",
    indexTitle: "Guides & Advice on Cigarette Machinery",
    indexIntro:
      "Straight-talking articles to help you choose, buy and run cigarette and tobacco machinery, written by people who work with these machines every day.",
    metaTitle: "Blog | Civic Tobacco Machinery",
    metaDescription:
      "Practical guides on cigarette and tobacco machinery, choosing packing machines, comparing makers, and buying used machines in Pakistan. From Civic Tobacco Machinery.",
    readArticle: "Read article →",
    minRead: "min read",
    tags: "Tags:",
    backToAll: "← Back to all articles",
    keepReading: "Keep reading",
    dateLocale: "en-GB",
  },
  product: {
    keyFeatures: "Key features",
    specifications: "Specifications",
    description: "Description",
    bestSuitedFor: "Best suited for",
    call: "Call",
    interested: "Interested in this machine?",
    askAbout: "Ask About the",
    enquiryText:
      "Send us a quick message for price, current availability and condition. We will also let you know about matching machines to complete your line.",
    related: "Related machines",
    thumbs: { front: "Front view", detail: "Detail", operation: "In operation" },
    waMessage: (name) =>
      `Hello, I am interested in the ${name}. Please share price and availability.`,
  },
};

/* ---------------------------------------------------------------------------
 * German (de-DE) — first-pass professional translation, native review pending.
 * ------------------------------------------------------------------------- */

const de: Dictionary = {
  nav: {
    about: "Über uns",
    making: "Zigarettenherstellung",
    packing: "Zigarettenverpackung",
    filter: "Filtermaschinen",
    wrappers: "Umhüller & Boxer",
    cutter: "Schneider/Beschicker/Rückgewinner",
    contact: "Kontakt",
  },
  header: {
    tagline: "Hersteller von Zigaretten- & Tabakmaschinen in Deutschland",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    region: "Deutschland",
  },
  megaMenu: {
    prompt: "Suchen Sie eine bestimmte Maschine oder eine komplette Linie?",
    viewAll: "Alle Herstellungsmaschinen ansehen →",
  },
  productCard: { viewDetails: "Details ansehen" },
  breadcrumbHome: "Startseite",
  faqHeading: "Häufig gestellte Fragen",
  emptyNote:
    "Maschinen in diesem Bereich kommen regelmäßig hinzu. Kontaktieren Sie uns für den aktuellen Bestand.",
  cta: {
    title: "Sie sind sich nicht sicher, welche Maschine Sie brauchen?",
    text: "Nennen Sie uns Ihr Format, Ihre Zielleistung und Ihr Budget. Wir empfehlen Ihnen die richtige Maschine – neu oder generalüberholt – und helfen Ihnen, sie in Betrieb zu nehmen.",
    whatsapp: "WhatsApp",
    enquiry: "Anfrage senden",
  },
  footer: {
    blurb:
      "Lieferant neuer und gebrauchter Maschinen für Zigarettenherstellung, -verpackung und -umhüllung in Pakistan – mit Installation, Ersatzteilen und Service, auf die Sie sich verlassen können.",
    machines: "Maschinen",
    manufacturing: "Herstellung",
    reachUs: "Kontakt",
    ourBlog: "Unser Blog",
    hours: "Mo–Sa, 09:00–18:00 Uhr",
    rights: "Alle Rechte vorbehalten.",
    links: { home: "Startseite", about: "Über uns", blog: "Blog", contact: "Kontakt" },
    labels: {
      "/cigarette-packing-machines": "Verpackungsmaschinen",
      "/cigarette-box-wrapping-machines": "Umhüllungsmaschinen",
      "/cigarette-manufacturing-machines": "Herstellungsmaschinen",
      "/cigarette-making-machines": "Zigarettenherstellungsmaschinen",
      "/cigarette-filter-making-machines": "Zigarettenfilter-Herstellungsmaschinen",
      "/cutter-feeder-reclaimer": "Tabakmaschinen",
    },
  },
  switcher: { label: "Sprache" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Zigarettenmaschinen aus Deutschland",
    metaDescription:
      "Civic Tobacco Machinery liefert Maschinen für die Zigarettenherstellung, -verpackung und -umhüllung in Pakistan. Neue und gebrauchte Tabakmaschinen, Filterstranganlagen, Ersatzteile und vollständige Installationsunterstützung.",
    hero: {
      h1: "Suchen Sie Zigaretten- & Tabakmaschinen aus Deutschland?",
      lead: "Dann sind Sie hier richtig. Vom ersten Strang bis zur fertigen Stange rüstet Civic Tobacco Machinery Sie mit neuen und generalüberholten Herstell-, Filter-, Verpackungs- und Umhüllungslinien aus – installiert, eingerichtet und gestützt durch Ersatzteile und Service, auf die Sie zählen können.",
      getQuote: "Angebot anfordern",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Nach Maschinentyp stöbern",
    browse: {
      packing: "Zigarettenverpackungsmaschinen",
      wrapping: "Zigaretten-Umhüllungsmaschinen",
      making: "Zigarettenherstellungsmaschinen",
      used: "Gebrauchte Zigarettenmaschinen",
    },
    viewRange: "Sortiment ansehen →",
    about: {
      eyebrow: "Über uns",
      h2: "Generationen technischer Exzellenz bei Tabakmaschinen",
      lead: "Ein stolzer Familienbetrieb von Vater und Sohn, inzwischen in dritter Generation, mit mehr als 35 Jahren praktischer Erfahrung in der Tabakindustrie.",
      p1: "Seit Jahrzehnten arbeitet unsere Familie in einem einzigen Bereich der Tabakmaschinen. Was als kleiner Handelsbetrieb begann, ist zu einem vertrauten Namen über mehrere Generationen gewachsen, auf den sich neue wie etablierte Zigarettenunternehmen in ganz Pakistan verlassen, um ihre Linien aufzubauen und zu betreiben.",
      p2: "Wir sind spezialisierte Hersteller von Tabakmaschinen und bieten eine vollständige Komplettlösung aus einer Hand. Von Herstell- und Filtermaschinen bis zu Packern und Umhüllern helfen wir Ihnen, die richtige Ausrüstung zu finden, sie vor dem Kauf im Betrieb zu sehen und sie in Ihrer eigenen Fertigung zu installieren und einzurichten. Außerdem bieten wir kostenlose Vorführungen und Schulungen für Ihre Techniker, damit Ihr Team vom ersten Tag an sicher mit der Maschine umgeht.",
      bullets: [
        "Familienbetrieb über mehrere Generationen",
        "Neue & generalüberholte Maschinen",
        "Komplette Linie, vom Hersteller bis zum Packer",
        "Vorführung & Technikerschulung",
      ],
      more: "Mehr über uns",
    },
    featured: {
      eyebrow: "Auf Lager & beliebt",
      h2: "Ausgewählte Maschinen",
      viewAll: "Alle Maschinen ansehen →",
    },
    why: {
      eyebrow: "Warum Civic Tobacco Machinery",
      h2: "Die richtige Maschine, für lange Laufzeit eingerichtet",
      reasons: [
        {
          title: "Maschinen, die zuverlässig laufen",
          text: "Wir setzen auf bewährte Marken mit guter Ersatzteilverfügbarkeit, damit Ihre Linie Schicht für Schicht produktiv bleibt.",
        },
        {
          title: "Ehrliche Zustandsberichte",
          text: "Jede Gebrauchtmaschine wird geprüft, gewartet und getestet. Sie erhalten eine klare Auskunft über ihren Zustand – ohne Überraschungen.",
        },
        {
          title: "Unterstützung für die ganze Linie",
          text: "Vom Hersteller bis zum Packer helfen wir Ihnen, Maschinen so abzustimmen, dass nichts zum Engpass wird – und wir installieren und betreuen sie.",
        },
        {
          title: "Lokale Hilfe vor Ort",
          text: "Wir sind direkt hier in Pakistan ansässig. Wenn Sie Teile oder einen Techniker brauchen, ist Hilfe in der Nähe – nicht auf einem anderen Kontinent.",
        },
      ],
    },
    ranges: {
      making: "Zigarettenherstellungsmaschinen",
      packing: "Zigarettenverpackungsmaschinen",
      filter: "Zigarettenfilter-Herstellungsmaschinen",
      wrapping: "Zigaretten-Umhüllungsmaschinen",
    },
    carousel: {
      eyebrow: "Unser Bestand",
      heading: "Zigarettenmaschinen zu verkaufen",
      viewAllPrefix: "Alle ",
      viewAllSuffix: " ansehen →",
    },
    gallery: {
      eyebrow: "Galerie",
      heading: "Civic Tobacco Machinery in Bildern",
      text: "Eindrücke von internationalen Tabakmessen und Treffen mit unseren Partnern und Kunden aus aller Welt.",
    },
    local: {
      eyebrow: "Für ganz Pakistan im Einsatz",
      h2: "Ihr Partner für Tabakmaschinen in Pakistan",
      text: "Unser Sitz im Industriegebiet SITE bedeutet, dass wir nah an den Fabriken sind, die wir betreuen. Wenn Sie ein Teil, einen Techniker oder einen ehrlichen Rat zu einer Maschine brauchen, haben Sie es mit Menschen aus derselben Stadt zu tun – nicht mit einem Lieferanten auf einem anderen Kontinent.",
      bullets: [
        "Schneller lokaler Support und Ersatzteile",
        "Installation und Einrichtung in Ihrer Fabrik",
        "Neue und generalüberholte Maschinen für jedes Budget",
      ],
      visitHeading: "Besuchen Sie uns oder rufen Sie an",
      directions: "Anfahrt & Kontakt",
    },
    faqHeading: {
      eyebrow: "Häufige Fragen",
      h2: "Häufig gestellte Fragen",
    },
    faqs: [
      {
        question: "Verkaufen Sie in Pakistan sowohl neue als auch gebrauchte Zigarettenmaschinen?",
        answer:
          "Ja. Wir liefern neue Maschinen sowie sorgfältig generalüberholte gebrauchte Zigaretten- und Tabakmaschinen. Jede Gebrauchtmaschine wird vor dem Verkauf geprüft, gewartet und getestet und kommt mit einem ehrlichen Zustandsbericht, damit Sie genau wissen, was Sie kaufen.",
      },
      {
        question: "Welche Marken von Zigarettenherstellungsmaschinen führen Sie?",
        answer:
          "Wir arbeiten vor allem mit gut unterstützten Marken wie Molins für Herstell- und Filtermaschinen sowie HLP und SASIB für Verpackung und Umhüllung. Diese wählen wir, weil Teile und geschulte Techniker leicht zu finden sind, was Ihre Linie über Jahre am Laufen hält.",
      },
      {
        question: "Installieren Sie die Maschinen und liefern Sie Ersatzteile?",
        answer:
          "Ja. Wir helfen bei der Installation und der korrekten Einrichtung der Maschine in Ihrer Fertigung und unterstützen Sie danach mit Ersatzteilen und Service. Eine Herstell- oder Verpackungsmaschine zum Laufen zu bringen ist keine Plug-and-play-Aufgabe, deshalb bleiben wir dabei, bis sie so läuft, wie sie soll.",
      },
      {
        question: "Wo befinden Sie sich und liefern Sie in ganz Pakistan?",
        answer:
          "Unsere Werkstatt liegt im Industriegebiet SITE in Karachi. Wir betreuen Kunden in ganz Pakistan und können Lieferung und Installation überall dort organisieren, wo sich Ihre Fabrik befindet.",
      },
    ],
  },

  about: {
    metaTitle: "Über uns | Civic Tobacco Machinery",
    metaDescription:
      "Über Civic Tobacco Machinery, Lieferant von Zigaretten- und Tabakmaschinen in Pakistan. Wer wir sind, wofür wir stehen und wie wir Ihre Fabrik mit neuen und gebrauchten Maschinen unterstützen.",
    hero: {
      eyebrow: "Über uns",
      title: "Zigaretten- & Tabakmaschinen, gestützt von Menschen, die sie kennen",
      intro:
        "Civic Tobacco Machinery hilft seit Jahren Fabriken in ganz Pakistan, ihre Zigarettenlinien aufzubauen, zu erweitern und zu warten.",
    },
    whoHeading: "Wer wir sind",
    who: [
      "Wir sind ein in Pakistan ansässiger Lieferant von Zigaretten- und Tabakmaschinen. Über die Jahre haben wir mit allem gearbeitet – von kleinen Werkstätten, die ihre ersten Schritte in der Zigarettenproduktion machen, bis zu etablierten Fabriken, die eine zweite oder dritte Linie ergänzen. Diese Erfahrung prägt unsere Arbeitsweise: Wir hören zuerst zu, verstehen, was Sie wirklich brauchen, und weisen Sie dann auf die passende Maschine hin.",
      "Unser Sortiment deckt die gesamte Linie ab: Herstellmaschinen, die den Strang formen, Filtermaschinen, Verpackungsmaschinen für Hart- und Weichpackungen, Umhüllungs- und Boxmaschinen sowie die Tabakmaschinen, die die Fertigung versorgen. Wir handeln sowohl mit neuen als auch mit sorgfältig generalüberholten Anlagen, sodass es für jedes Budget eine sinnvolle Option gibt.",
    ],
    howHeading: "Wie wir arbeiten",
    how: [
      "Der Kauf einer Maschine ist nur die halbe Geschichte. Eine Herstell- oder Verpackungsmaschine muss richtig installiert, korrekt eingestellt und am Laufen gehalten werden – und genau hier verschwinden viele Lieferanten. Wir nicht. Wir helfen Ihnen, die Maschine in Ihre Fertigung zu bringen und so zum Laufen zu bringen, wie sie soll, und bleiben danach für Teile und Service erreichbar.",
      "Weil wir direkt hier im Industriegebiet SITE ansässig sind, ist diese Unterstützung wirklich lokal. Wenn etwas Aufmerksamkeit braucht, sprechen Sie mit Menschen aus derselben Stadt – und warten nicht auf einen Lieferanten in einem anderen Land und einer anderen Zeitzone.",
    ],
    brandsHeading: "Die Marken, denen wir vertrauen",
    brands:
      "Wir konzentrieren uns auf bewährte Namen – Molins für Herstell- und Filtermaschinen, HLP und SASIB für Verpackung und Umhüllung sowie die Protos-Familie für Linien mit höherer Geschwindigkeit. Wir wählen sie nicht wegen des Namens, sondern weil ihre Teile und ihr Know-how leicht verfügbar sind – genau das hält eine Maschine über Jahre wirtschaftlich.",
    glance: {
      heading: "Auf einen Blick",
      basedIn: "Sitz in",
      basedInValue: "SITE, Karachi, Pakistan",
      supply: "Wir liefern",
      supplyValue: "Neue & gebrauchte Tabakmaschinen",
      serve: "Wir betreuen",
      serveValue: "Ganz Pakistan",
      call: "Anruf / WhatsApp",
      talk: "Sprechen Sie mit uns",
    },
    valuesEyebrow: "Wofür wir stehen",
    valuesHeading: "So machen wir Geschäfte",
    values: [
      {
        title: "Ehrlichkeit zuerst",
        text: "Wir sagen Ihnen den echten Zustand einer Maschine und was sie leisten kann. Ein Verkauf, der Sie unzufrieden zurücklässt, ist gar kein Verkauf.",
      },
      {
        title: "Maschinen, die wir selbst betreiben würden",
        text: "Wir handeln mit Marken und Modellen, denen wir vertrauen – jenen mit guter Ersatzteilverfügbarkeit und langer Lebensdauer.",
      },
      {
        title: "Unterstützung, die bleibt",
        text: "Unsere Aufgabe endet nicht bei der Lieferung. Wir helfen langfristig bei Installation, Einrichtung, Ersatzteilen und Service.",
      },
      {
        title: "Fairer Gegenwert",
        text: "Ob neu oder generalüberholt – wir helfen Ihnen, die richtige Maschine für Ihr Budget zu bekommen, ohne an den entscheidenden Stellen zu sparen.",
      },
    ],
    ctaTitle: "Sprechen wir über Ihre Linie",
    ctaText:
      "Ob Sie neu anfangen oder erweitern – sagen Sie uns, was Sie produzieren möchten, und wir helfen Ihnen, dorthin zu kommen.",
  },

  contact: {
    metaTitle: "Kontakt | Civic Tobacco Machinery",
    metaDescription:
      "Kontaktieren Sie Civic Tobacco Machinery in Pakistan. Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie eine Anfrage zu Maschinen für Zigarettenherstellung, -verpackung, -umhüllung und Gebrauchtmaschinen. Werkstatt in SITE, Karachi.",
    hero: {
      eyebrow: "Kontakt",
      title: "Nehmen Sie Kontakt mit Civic Tobacco Machinery auf",
      intro:
        "Sagen Sie uns, was Sie suchen, und wir melden uns noch am selben Werktag. Rufen Sie an, schreiben Sie per WhatsApp oder E-Mail oder senden Sie das untenstehende Formular.",
    },
    directHeading: "Erreichen Sie uns direkt",
    directText:
      "Am schnellsten erhalten Sie eine klare Antwort zu einer Maschine, ihrem Zustand, Preis oder ihrer Verfügbarkeit, wenn Sie uns per WhatsApp schreiben oder anrufen.",
    rows: {
      visit: "Besuchen Sie unsere Werkstatt",
      call: "Rufen Sie uns an",
      whatsapp: "WhatsApp",
      whatsappValue: "Schreiben Sie uns unter",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      hoursValue: "Montag – Samstag, 09:00 – 18:00 Uhr",
      hoursClosed: "Sonntags geschlossen",
    },
    openInMaps: "In Google Maps öffnen",
    formHeading: "Anfrage senden",
    formIntro:
      "Füllen Sie dies aus und wir melden uns schnell bei Ihnen. Als Pflicht markierte Felder helfen uns, Ihnen eine genaue Antwort zu geben.",
    form: {
      name: "Ihr Name",
      namePlaceholder: "z. B. Ahmed Khan",
      phone: "Telefon / WhatsApp",
      phonePlaceholder: "z. B. 0300 1234567",
      email: "E-Mail",
      emailOptional: "(optional)",
      emailPlaceholder: "sie@firma.com",
      interest: "Maschine, die Sie interessiert",
      interestPlaceholder: "z. B. HLP-200 Verpackungsmaschine",
      message: "Ihre Nachricht",
      messagePlaceholder: "Nennen Sie uns Ihr Format, Ihre Zielleistung und alle Details.",
      submit: "Anfrage senden",
      sending: "Wird gesendet…",
      successTitle: "Vielen Dank!",
      successText:
        "Ihre Anfrage wurde gesendet. Unser Team meldet sich in Kürze bei Ihnen, in der Regel noch am selben Werktag.",
      errorText:
        "Beim Senden Ihrer Nachricht ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder",
      errorWhatsApp: "schreiben Sie uns per WhatsApp",
      footnote:
        "Ihre Angaben gehen direkt an unser Team – wir antworten meist am selben Werktag. Lieber chatten?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Herstellungsmaschinen",
      title: "Zigarettenherstellungsmaschinen in Deutschland",
      description:
        "Zigarettenherstellungsmaschinen in Pakistan – Molins-Herstellmaschinen, Filtermaschinen und Tabakmaschinen. Neue und generalüberholte Linien von Civic Tobacco Machinery.",
      intro: [
        "Eine gute Zigarette entsteht lange vor der Packung. Sie beginnt mit einer Herstellmaschine, die einen gleichmäßigen Strang legt, einer Filterlinie, die sauber schneidet, und Tabakmaschinen, die die gesamte Fertigung versorgen. Civic Tobacco Machinery liefert Zigarettenherstellungsmaschinen in Pakistan für alle drei Bereiche.",
        "Wir führen Molins-Herstellmaschinen, KDF- und PM-Filtermaschinen sowie die Beschicker, Schneider und Rückgewinner, die sie unterstützen. Sagen Sie uns, welche Marken Sie betreiben und welche Leistung Sie brauchen, und wir helfen Ihnen, eine Linie aufzubauen, die Tag für Tag ihre Geschwindigkeit und Qualität hält.",
      ],
      faqs: [
        {
          question: "Welche Zigarettenherstellungsmaschinen liefern Sie?",
          answer:
            "Wir liefern die komplette Herstelllinie: Molins Mark 8, Mark 9 und Mark 9.5 sowie Hauni Protos, dazu KDF- und Molins-Filtermaschinen und die Tabakbeschicker, -schneider und -rückgewinner, die sie unterstützen.",
        },
        {
          question: "Wie viele Zigaretten pro Minute produzieren die Herstellmaschinen?",
          answer:
            "Je nach Modell laufen unsere Herstellmaschinen von rund 3.000 bis 8.000 Zigaretten pro Minute, sodass Sie die Maschine auf Ihre Zielleistung abstimmen können.",
        },
        {
          question: "Liefern Sie neue oder generalüberholte Maschinen?",
          answer:
            "Beides. Generalüberholte Molins- und Hauni-Maschinen werden vor dem Verkauf vollständig geprüft, gewartet und getestet und bieten wachsenden Fabriken ein starkes Preis-Leistungs-Verhältnis.",
        },
        {
          question: "Helfen Sie, die Herstellmaschine mit der richtigen Filterlinie abzustimmen?",
          answer:
            "Ja. Wir stellen sicher, dass Herstell- und Filtermaschine im Takt laufen, damit die gesamte Linie ausgewogen bleibt. Nennen Sie uns Ihre Marken und Ihre Zielleistung, und wir empfehlen eine Konfiguration.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Verpackungsmaschinen",
      title: "Zigarettenverpackungsmaschinen in Deutschland",
      description:
        "Zigarettenverpackungsmaschinen in Pakistan – HLP- und SASIB-Linien für Hart- und Weichpackungen von 180 bis 225 Packungen pro Minute. Geliefert, installiert und betreut von Civic Tobacco Machinery.",
      intro: [
        "Auf der Verpackungslinie nimmt Ihr Produkt endgültig Gestalt an, deshalb muss sie gleichmäßig, sauber und Schicht für Schicht leicht zu bedienen sein. Bei Civic Tobacco Machinery liefern wir Zigarettenverpackungsmaschinen in Pakistan, die genau dafür ausgewählt sind – zuverlässige Ausbringung und Packungen, die jedes Mal gleich aussehen.",
        "Unser Sortiment umfasst Hart- und Weichpackungsformate von 180 bis 225 Packungen pro Minute, mit neuen und sorgfältig generalüberholten Optionen. Ob Sie eine neue Linie aufbauen oder eine bestehende erweitern – wir helfen Ihnen, die richtige Maschine auf Ihr Volumen, Ihr Budget und die von Ihnen produzierten Marken abzustimmen.",
      ],
      faqs: [
        {
          question: "Was ist der Unterschied zwischen Hartpackungs- und Weichpackungsmaschinen?",
          answer:
            "Hartpackungen (Klappschachteln) laufen auf Maschinen vom Typ HLP, während Weichpackungen (gefaltete Folie und bedruckte Außenhülle) auf Maschinen vom Typ SASIB laufen. Wir liefern beide und helfen Ihnen, die Maschine auf das Packungsformat abzustimmen, das Ihre Marken tatsächlich verkaufen.",
        },
        {
          question: "Welche Verpackungsgeschwindigkeiten bieten Sie an?",
          answer:
            "Unsere Zigarettenverpackungsmaschinen laufen von rund 180 bis 225 Packungen pro Minute. Wählen Sie eine Geschwindigkeit, die zu Ihrem tatsächlichen Schichtbedarf passt und etwas Spielraum zum Wachsen lässt, statt für ungenutzte Kapazität zu zahlen.",
        },
        {
          question: "Verkaufen Sie neue oder generalüberholte Verpackungsmaschinen?",
          answer:
            "Beides. Jeder gebrauchte HLP- oder SASIB-Packer wird vor dem Verkauf geprüft, gewartet und getestet, sodass eine gute generalüberholte Maschine jahrelang zu einem Bruchteil des Neupreises laufen kann.",
        },
        {
          question: "Installieren Sie die Maschine und liefern Sie Ersatzteile?",
          answer:
            "Ja. Wir installieren und richten die Maschine ein und unterstützen HLP und SASIB mit weit verbreiteten Ersatzteilen und Service. Schreiben Sie uns per WhatsApp unter +92 301 1111184 für Preis und aktuelle Verfügbarkeit.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Umhüllungsmaschinen",
      title: "Zigaretten-Umhüllungsmaschinen in Deutschland",
      description:
        "Zigaretten-Umhüllungsmaschinen in Pakistan – Umhüller, Boxer und Zellophan-Umhüllungsmaschinen, die Ihre Packungen sauber versiegeln. Verkauf, Ersatzteile und Service von Civic Tobacco Machinery.",
      intro: [
        "Die Umhüllung ist das Letzte, was Ihr Kunde sieht, bevor er die Packung öffnet – deshalb ist eine saubere, feste Versiegelung so wichtig. Civic Tobacco Machinery liefert Zigaretten-Umhüllungsmaschinen in Pakistan, die Ihnen ein sauberes Folienfinish, ein gerades Aufreißband und Packungen bieten, die im Regal frisch bleiben.",
        "Von Einzelpackungs-Umhüllern bis zu Karton-Umhüllung und Stangen-Boxern decken wir das komplette Sortiment ab. Jede von uns verkaufte Maschine wird geprüft, eingerichtet und betriebsbereit übergeben, mit Ersatzteilen und Service, auf die Sie zurückgreifen können, wenn Sie sie brauchen.",
      ],
      faqs: [
        {
          question: "Was ist der Unterschied zwischen einem Umhüller und einem Boxer?",
          answer:
            "Ein Umhüller versiegelt jede Packung mit einem Aufreißband in Zellophanfolie, während ein Boxer (Kartoniermaschine) fertige Packungen zu Stangen oder Kartons zusammenfasst. Die meisten Linien verwenden beide nacheinander.",
        },
        {
          question: "Welche Umhüllungs- und Boxmaschinen liefern Sie?",
          answer:
            "Wir liefern Molins- und SASIB-Umhüller und -Boxer, darunter den CP1-Packungsumhüller, den Naked-Umhüller sowie Molins- und SASIB-Boxer, für Hart- und Weichpackungslinien.",
        },
        {
          question: "Bieten Sie neue oder generalüberholte Umhüllungsmaschinen an?",
          answer:
            "Sowohl neue als auch sorgfältig generalüberholte Einheiten sind verfügbar. Jede Gebrauchtmaschine wird geprüft, eingerichtet und betriebsbereit übergeben.",
        },
        {
          question: "Bieten Sie Installation und Ersatzteile an?",
          answer:
            "Ja, Installation, Einrichtung, Ersatzteile und Service gehören alle zu unserem Leistungsumfang. Kontaktieren Sie uns per WhatsApp unter +92 301 1111184 für ein Angebot.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Herstellungsmaschinen",
      title: "Zigarettenfilter-Herstellungsmaschinen in Deutschland",
      description:
        "Zigarettenfilter-Herstellungsmaschinen in Pakistan – Molins KDF, Molins PM und Hohlrohrmaschinen. Filterstranganlagen, geliefert und betreut von Civic Tobacco Machinery.",
      intro: [
        "Ein guter Filter tut mehr, als die Zigarette abzuschließen – er steuert Zug, Festigkeit und das gesamte Rauchgefühl. Civic Tobacco Machinery liefert Zigarettenfilter-Herstellungsmaschinen in Pakistan, die gleichmäßige Stränge produzieren, auf die sich Ihre Herstellmaschine verlassen kann.",
        "Wir führen Molins-KDF- und Molins-PM-Filtermaschinen sowie Hohlrohrmaschinen für Spezialformate. Welche Filterlänge oder -art Sie auch produzieren – wir helfen Ihnen, eine Linie zu wählen, die zur Geschwindigkeit Ihrer Herstellmaschinen passt.",
      ],
      faqs: [
        {
          question: "Welche Filtermaschinen liefern Sie?",
          answer:
            "Wir liefern Hauni-KDF-1- und KDF-2-Filtermaschinen, Molins-PM-Filtermaschinen und Hohlrohrmaschinen für Spezialformate, für Fabriken mit Filterstrangproduktion.",
        },
        {
          question: "Kann die Filtermaschine die Geschwindigkeit meiner Herstellmaschine erreichen?",
          answer:
            "Ja. Wir helfen Ihnen, eine Filterlinie zu wählen, die zur Geschwindigkeit Ihrer Herstellmaschinen passt, damit beide im Takt laufen und die Linie ausgewogen bleibt.",
        },
        {
          question: "Bieten Sie neue und generalüberholte Filtermaschinen an?",
          answer:
            "Beides. Jede generalüberholte KDF- oder PM-Maschine wird vor dem Verkauf geprüft, gewartet und getestet.",
        },
        {
          question: "Installieren und betreuen Sie Filtermaschinen?",
          answer:
            "Ja, Installation, Ersatzteile und Service sind inbegriffen. Schreiben Sie uns per WhatsApp unter +92 301 1111184 für Preis und Verfügbarkeit.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Herstellungsmaschinen",
      title: "Tabakschneider, -beschicker & -rückgewinner in Deutschland",
      description:
        "Tabakmaschinen in Pakistan – Beschicker, Schneider, Rückgewinner und Rippenwalzen, die Ihre Primär- und Sekundärfertigung am Laufen halten. Geliefert von Civic Tobacco Machinery.",
      intro: [
        "Hinter jeder Herstell- und Verpackungsmaschine steht eine Reihe leiserer Maschinen, die die Schwerarbeit leisten – Tabak zuführen, schneiden und retten, was sonst verloren ginge. Civic Tobacco Machinery liefert Tabakmaschinen in Pakistan, die diese Seite der Fertigung in Bewegung halten.",
        "Beschicker, Schneider, Rückgewinner und Rippenwalzen arbeiten zusammen, um eine gleichmäßige Versorgung Ihrer Linie sicherzustellen und Abfall zu reduzieren. Wir helfen Ihnen, die richtigen Einheiten rund um die Herstell- und Verpackungsmaschinen einzupassen, die Sie bereits betreiben.",
      ],
      faqs: [
        {
          question: "Was machen Tabakbeschicker, -schneider und -rückgewinner?",
          answer:
            "Beschicker versorgen die Herstellmaschinen mit Tabak, Schneider schneiden das Blatt auf Produktionsgröße, und Rückgewinner gewinnen Tabak aus ausgeschiedenen Zigaretten zurück, damit er wiederverwendet werden kann – so laufen die Primär- und Sekundärfertigung reibungslos.",
        },
        {
          question: "Kann diese Ausrüstung Tabakabfall reduzieren?",
          answer:
            "Ja. Ein Rückgewinner gewinnt verwendbaren Tabak aus ausgeschiedenen Zigaretten zurück, was Abfall verringert und die Betriebskosten mit der Zeit senkt.",
        },
        {
          question: "Welche Marken liefern Sie?",
          answer:
            "Wir liefern gut unterstützte Maschinen wie den Hauni-KT-400-Tabakschneider sowie Tabakbeschicker, Zigarettenrückgewinner und Rippenwalzen.",
        },
        {
          question: "Sind die Maschinen neu oder generalüberholt, und betreuen Sie sie?",
          answer:
            "Sowohl neue als auch generalüberholte Einheiten sind verfügbar, alle vor dem Verkauf getestet, mit Installation, Ersatzteilen und Service. Kontaktieren Sie uns per WhatsApp unter +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Zigarettenherstellungsmaschinen in Deutschland",
    intro:
      "Die Herstellmaschine ist das Herz jeder Zigarettenfabrik. Sie verwandelt geschnittenen Tabak und Papier tausendfach pro Minute in einen fertigen Strang – ohne Qualitätseinbußen.",
    seeAll: "Alle ansehen →",
  },
  blog: {
    eyebrow: "Blog",
    indexTitle: "Ratgeber & Tipps zu Zigarettenmaschinen",
    indexIntro:
      "Klare, praxisnahe Artikel, die Ihnen helfen, Zigaretten- und Tabakmaschinen auszuwählen, zu kaufen und zu betreiben – geschrieben von Menschen, die täglich mit diesen Maschinen arbeiten.",
    metaTitle: "Blog | Civic Tobacco Machinery",
    metaDescription:
      "Praxisnahe Ratgeber zu Zigaretten- und Tabakmaschinen – Verpackungsmaschinen auswählen, Strangmaschinen vergleichen und Gebrauchtmaschinen in Pakistan kaufen. Von Civic Tobacco Machinery.",
    readArticle: "Artikel lesen →",
    minRead: "Min. Lesezeit",
    tags: "Themen:",
    backToAll: "← Zurück zu allen Artikeln",
    keepReading: "Weiterlesen",
    dateLocale: "de-DE",
  },
  product: {
    keyFeatures: "Wichtigste Merkmale",
    specifications: "Technische Daten",
    description: "Beschreibung",
    bestSuitedFor: "Am besten geeignet für",
    call: "Anrufen",
    interested: "Interesse an dieser Maschine?",
    askAbout: "Anfrage zu",
    enquiryText:
      "Senden Sie uns eine kurze Nachricht für Preis, aktuelle Verfügbarkeit und Zustand. Wir informieren Sie außerdem über passende Maschinen, um Ihre Linie zu vervollständigen.",
    related: "Ähnliche Maschinen",
    thumbs: { front: "Vorderansicht", detail: "Detail", operation: "Im Betrieb" },
    waMessage: (name) =>
      `Hallo, ich interessiere mich für die ${name}. Bitte senden Sie mir Preis und Verfügbarkeit.`,
  },
};

/* ---------------------------------------------------------------------------
 * Italian (it-IT) — first-pass professional translation, native review pending.
 * ------------------------------------------------------------------------- */

const it: Dictionary = {
  nav: {
    about: "Chi siamo",
    making: "Produzione sigarette",
    packing: "Impacchettamento",
    filter: "Macchine per filtri",
    wrappers: "Incartatrici e inscatolatrici",
    cutter: "Taglierina/Alimentatore/Recuperatore",
    contact: "Contatti",
  },
  header: {
    tagline: "Produttori di macchine per sigarette e tabacco in Italia",
    call: "Chiama",
    whatsapp: "WhatsApp",
    region: "Italia",
  },
  megaMenu: {
    prompt: "Cerchi una macchina specifica o una linea completa?",
    viewAll: "Vedi tutte le macchine di produzione →",
  },
  productCard: { viewDetails: "Vedi dettagli" },
  breadcrumbHome: "Home",
  faqHeading: "Domande frequenti",
  emptyNote:
    "Le macchine di questa gamma vengono aggiunte regolarmente. Contattaci per la disponibilità attuale.",
  cta: {
    title: "Non sei sicuro di quale macchina ti serva?",
    text: "Indicaci il formato, la produzione target e il budget. Ti consiglieremo la macchina giusta, nuova o ricondizionata, e ti aiuteremo a metterla in funzione.",
    whatsapp: "WhatsApp",
    enquiry: "Invia una richiesta",
  },
  footer: {
    blurb:
      "Fornitori di macchine nuove e usate per la produzione, l'impacchettamento e l'incarto di sigarette in Pakistan, con installazione, ricambi e assistenza su cui puoi contare.",
    machines: "Macchine",
    manufacturing: "Produzione",
    reachUs: "Contatti",
    ourBlog: "Il nostro blog",
    hours: "Lun–Sab, 09:00–18:00",
    rights: "Tutti i diritti riservati.",
    links: { home: "Home", about: "Chi siamo", blog: "Blog", contact: "Contatti" },
    labels: {
      "/cigarette-packing-machines": "Macchine impacchettatrici",
      "/cigarette-box-wrapping-machines": "Macchine incartatrici",
      "/cigarette-manufacturing-machines": "Macchine di produzione",
      "/cigarette-making-machines": "Macchine per sigarette",
      "/cigarette-filter-making-machines": "Macchine per filtri per sigarette",
      "/cutter-feeder-reclaimer": "Macchine per il tabacco",
    },
  },
  switcher: { label: "Lingua" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Macchine per sigarette dall'Italia",
    metaDescription:
      "Civic Tobacco Machinery fornisce macchine per la produzione, l'impacchettamento e l'incarto di sigarette in Pakistan. Macchine per tabacco nuove e usate, linee per filtri, ricambi e supporto completo all'installazione.",
    hero: {
      h1: "Cerchi macchine per sigarette e tabacco dall'Italia?",
      lead: "Sei nel posto giusto. Dal primo baco alla stecca finita, Civic Tobacco Machinery ti mette a disposizione linee di produzione, filtri, impacchettamento e incarto nuove e ricondizionate, installate, messe a punto e supportate dai ricambi e dall'assistenza su cui puoi contare.",
      getQuote: "Richiedi un preventivo",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Sfoglia per tipo di macchina",
    browse: {
      packing: "Macchine impacchettatrici per sigarette",
      wrapping: "Macchine incartatrici per sigarette",
      making: "Macchine di produzione per sigarette",
      used: "Macchine per sigarette usate",
    },
    viewRange: "Vedi la gamma →",
    about: {
      eyebrow: "Chi siamo",
      h2: "Generazioni di eccellenza ingegneristica nelle macchine per il tabacco",
      lead: "Un'orgogliosa impresa di padre e figlio, ormai alla terza generazione, con oltre 35 anni di esperienza pratica nell'industria del tabacco.",
      p1: "Da decenni la nostra famiglia lavora in un unico settore delle macchine per il tabacco. Ciò che è iniziato come una piccola attività commerciale è cresciuto fino a diventare un nome affidabile su più generazioni, su cui aziende del tabacco nuove e affermate in tutto il Pakistan fanno affidamento per costruire e far funzionare le loro linee.",
      p2: "Siamo produttori specializzati di macchine per il tabacco e offriamo una soluzione completa a 360 gradi. Dalle macchine di produzione e per filtri agli impacchettatori e incartatori, ti aiutiamo a reperire l'attrezzatura giusta, a vederla in funzione prima dell'acquisto e a installarla e metterla a punto nel tuo stabilimento. Offriamo inoltre dimostrazioni e formazione gratuite per i tuoi tecnici, così il tuo team è sicuro con la macchina fin dal primo giorno.",
      bullets: [
        "Impresa familiare su più generazioni",
        "Macchine nuove e ricondizionate",
        "Linea completa, dalla produzione all'impacchettamento",
        "Dimostrazione e formazione dei tecnici",
      ],
      more: "Scopri di più su di noi",
    },
    featured: {
      eyebrow: "Disponibili e richieste",
      h2: "Macchine in evidenza",
      viewAll: "Vedi tutte le macchine →",
    },
    why: {
      eyebrow: "Perché Civic Tobacco Machinery",
      h2: "La macchina giusta, predisposta per durare",
      reasons: [
        {
          title: "Macchine che continuano a funzionare",
          text: "Puntiamo su marchi collaudati con buona disponibilità di ricambi, così la tua linea resta produttiva turno dopo turno.",
        },
        {
          title: "Rapporti onesti sulle condizioni",
          text: "Ogni macchina usata è ispezionata, revisionata e collaudata. Ricevi un resoconto chiaro delle sue condizioni, senza sorprese.",
        },
        {
          title: "Supporto per l'intera linea",
          text: "Dalla produzione all'impacchettamento, ti aiutiamo ad abbinare le macchine in modo che nulla diventi un collo di bottiglia, e le installiamo e le assistiamo.",
        },
        {
          title: "Aiuto locale, sul posto",
          text: "Abbiamo sede proprio qui in Pakistan. Quando ti servono ricambi o un tecnico, l'aiuto è vicino, non dall'altra parte del mondo.",
        },
      ],
    },
    ranges: {
      making: "Macchine per sigarette",
      packing: "Macchine impacchettatrici per sigarette",
      filter: "Macchine per filtri per sigarette",
      wrapping: "Macchine incartatrici per sigarette",
    },
    carousel: {
      eyebrow: "Il nostro stock",
      heading: "Macchine per sigarette in vendita",
      viewAllPrefix: "Vedi tutte le ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Galleria",
      heading: "Civic Tobacco Machinery in immagini",
      text: "Momenti da fiere internazionali del tabacco e incontri con i nostri partner e clienti in tutto il mondo.",
    },
    local: {
      eyebrow: "Al servizio di tutto il Pakistan",
      h2: "Il tuo partner per le macchine per il tabacco in Pakistan",
      text: "Avere sede nella zona industriale SITE significa essere vicini alle fabbriche che serviamo. Quando ti serve un ricambio, un tecnico o un consiglio onesto su una macchina, hai a che fare con persone dall'altra parte della città, non con un fornitore in un altro continente.",
      bullets: [
        "Supporto locale rapido e ricambi",
        "Installazione e messa a punto nel tuo stabilimento",
        "Macchine nuove e ricondizionate per ogni budget",
      ],
      visitHeading: "Vieni a trovarci o chiamaci",
      directions: "Indicazioni e contatti",
    },
    faqHeading: {
      eyebrow: "Domande comuni",
      h2: "Domande frequenti",
    },
    faqs: [
      {
        question: "Vendete macchine per sigarette sia nuove che usate in Pakistan?",
        answer:
          "Sì. Forniamo macchine nuove così come macchine per sigarette e tabacco usate accuratamente ricondizionate. Ogni macchina usata è ispezionata, revisionata e collaudata prima della vendita e viene consegnata con un rapporto onesto sulle condizioni, così sai esattamente cosa stai acquistando.",
      },
      {
        question: "Quali marchi di macchine di produzione per sigarette trattate?",
        answer:
          "Lavoriamo principalmente con marchi ben supportati come Molins per le macchine di produzione e per filtri, e HLP e SASIB per impacchettamento e incarto. Li scegliamo perché ricambi e tecnici qualificati sono facili da reperire, il che mantiene la tua linea in funzione per anni.",
      },
      {
        question: "Installate le macchine e fornite i ricambi?",
        answer:
          "Sì. Aiutiamo nell'installazione e nella corretta messa a punto della macchina nel tuo stabilimento e ti supportiamo in seguito con ricambi e assistenza. Mettere in funzione una macchina di produzione o un impacchettatore non è un'operazione plug-and-play, quindi restiamo coinvolti finché non funziona come deve.",
      },
      {
        question: "Dove vi trovate e consegnate in tutto il Pakistan?",
        answer:
          "La nostra officina si trova nella zona industriale SITE di Karachi. Serviamo clienti in tutto il Pakistan e possiamo organizzare consegna e installazione ovunque si trovi la tua fabbrica.",
      },
    ],
  },

  about: {
    metaTitle: "Chi siamo | Civic Tobacco Machinery",
    metaDescription:
      "Chi è Civic Tobacco Machinery, fornitore di macchine per sigarette e tabacco in Pakistan. Chi siamo, in cosa crediamo e come supportiamo la tua fabbrica con macchine nuove e usate.",
    hero: {
      eyebrow: "Chi siamo",
      title: "Macchine per sigarette e tabacco, supportate da chi le conosce",
      intro:
        "Civic Tobacco Machinery da anni aiuta le fabbriche di tutto il Pakistan a costruire, ampliare e mantenere le loro linee per sigarette.",
    },
    whoHeading: "Chi siamo",
    who: [
      "Siamo un fornitore con sede in Pakistan di macchine per sigarette e tabacco. Nel corso degli anni abbiamo lavorato con tutto, da piccole officine ai primi passi nella produzione di sigarette a fabbriche affermate che aggiungono una seconda o terza linea. Questa esperienza plasma il nostro modo di lavorare: prima ascoltiamo, capiamo di cosa hai davvero bisogno e poi ti indichiamo la macchina adatta.",
      "La nostra gamma copre l'intera linea: macchine di produzione che formano il baco, macchine per filtri, impacchettatrici per pacchetti rigidi e morbidi, macchine incartatrici e inscatolatrici e le macchine per il tabacco che alimentano il reparto. Trattiamo attrezzature sia nuove che accuratamente ricondizionate, così c'è un'opzione sensata qualunque sia il tuo budget.",
    ],
    howHeading: "Come lavoriamo",
    how: [
      "Acquistare una macchina è solo metà della storia. Una macchina di produzione o un impacchettatore va installato correttamente, regolato bene e mantenuto in funzione, ed è qui che molti fornitori spariscono. Noi no. Ti aiutiamo a portare la macchina nel tuo stabilimento e a farla funzionare come deve, e restiamo raggiungibili in seguito per ricambi e assistenza.",
      "Poiché abbiamo sede proprio qui nella zona industriale SITE, quel supporto è davvero locale. Quando qualcosa richiede attenzione, parli con persone dall'altra parte della città, non aspetti un fornitore in un altro paese e in un altro fuso orario.",
    ],
    brandsHeading: "I marchi di cui ci fidiamo",
    brands:
      "Ci concentriamo su nomi collaudati: Molins per le macchine di produzione e per filtri, HLP e SASIB per impacchettamento e incarto, e la famiglia Protos per le linee ad alta velocità. Li scegliamo non per il marchio, ma perché i loro ricambi e il know-how sono facili da reperire, il che è esattamente ciò che mantiene una macchina redditizia per anni.",
    glance: {
      heading: "In sintesi",
      basedIn: "Sede a",
      basedInValue: "SITE, Karachi, Pakistan",
      supply: "Forniamo",
      supplyValue: "Macchine per il tabacco nuove e usate",
      serve: "Serviamo",
      serveValue: "Tutto il Pakistan",
      call: "Chiamata / WhatsApp",
      talk: "Parla con noi",
    },
    valuesEyebrow: "In cosa crediamo",
    valuesHeading: "Il nostro modo di fare affari",
    values: [
      {
        title: "Prima l'onestà",
        text: "Ti diciamo le reali condizioni di una macchina e cosa può fare. Una vendita che ti lascia insoddisfatto non è affatto una vendita.",
      },
      {
        title: "Macchine che useremmo noi stessi",
        text: "Trattiamo marchi e modelli di cui ci fidiamo, quelli con buona disponibilità di ricambi e lunga vita utile.",
      },
      {
        title: "Un supporto che resta",
        text: "Il nostro compito non finisce alla consegna. Aiutiamo con installazione, messa a punto, ricambi e assistenza nel lungo periodo.",
      },
      {
        title: "Giusto valore",
        text: "Nuova o ricondizionata, ti aiutiamo a ottenere la macchina giusta per il tuo budget senza tagliare gli angoli che contano.",
      },
    ],
    ctaTitle: "Parliamo della tua linea",
    ctaText:
      "Che tu stia iniziando o ampliando, dicci cosa vuoi produrre e ti aiuteremo ad arrivarci.",
  },

  contact: {
    metaTitle: "Contatti | Civic Tobacco Machinery",
    metaDescription:
      "Contatta Civic Tobacco Machinery in Pakistan. Chiama, scrivi su WhatsApp o invia una richiesta su macchine per produzione, impacchettamento, incarto di sigarette e macchine usate. Officina a SITE, Karachi.",
    hero: {
      eyebrow: "Contatti",
      title: "Mettiti in contatto con Civic Tobacco Machinery",
      intro:
        "Dicci cosa cerchi e ti risponderemo entro la stessa giornata lavorativa. Chiama, scrivi su WhatsApp o via e-mail, oppure invia il modulo qui sotto.",
    },
    directHeading: "Contattaci direttamente",
    directText:
      "Il modo più rapido per ottenere una risposta chiara su una macchina, le sue condizioni, il prezzo o la disponibilità è scriverci su WhatsApp o chiamarci.",
    rows: {
      visit: "Vieni nella nostra officina",
      call: "Chiamaci",
      whatsapp: "WhatsApp",
      whatsappValue: "Scrivici al",
      email: "E-mail",
      hours: "Orari di apertura",
      hoursValue: "Lunedì – Sabato, 09:00 – 18:00",
      hoursClosed: "Chiuso la domenica",
    },
    openInMaps: "Apri in Google Maps",
    formHeading: "Invia una richiesta",
    formIntro:
      "Compila questo modulo e ti risponderemo rapidamente. I campi contrassegnati come obbligatori ci aiutano a darti una risposta accurata.",
    form: {
      name: "Il tuo nome",
      namePlaceholder: "es. Ahmed Khan",
      phone: "Telefono / WhatsApp",
      phonePlaceholder: "es. 0300 1234567",
      email: "E-mail",
      emailOptional: "(facoltativo)",
      emailPlaceholder: "tu@azienda.com",
      interest: "Macchina che ti interessa",
      interestPlaceholder: "es. impacchettatrice HLP-200",
      message: "Il tuo messaggio",
      messagePlaceholder: "Indicaci formato, produzione target e altri dettagli.",
      submit: "Invia richiesta",
      sending: "Invio in corso…",
      successTitle: "Grazie!",
      successText:
        "La tua richiesta è stata inviata. Il nostro team ti risponderà a breve, di solito entro la stessa giornata lavorativa.",
      errorText:
        "Spiacenti, qualcosa è andato storto durante l'invio del messaggio. Riprova oppure",
      errorWhatsApp: "scrivici su WhatsApp",
      footnote:
        "I tuoi dati vanno direttamente al nostro team; di solito rispondiamo entro la stessa giornata lavorativa. Preferisci chattare?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Macchine di produzione",
      title: "Macchine di produzione per sigarette in Italia",
      description:
        "Macchine di produzione per sigarette in Pakistan: macchine Molins, macchine per filtri e macchine per il tabacco. Linee nuove e ricondizionate da Civic Tobacco Machinery.",
      intro: [
        "Una buona sigaretta nasce molto prima del pacchetto. Nasce con una macchina che posa un baco uniforme, una linea per filtri che taglia in modo pulito e macchine per il tabacco che alimentano tutto il reparto. Civic Tobacco Machinery fornisce macchine di produzione per sigarette in Pakistan per tutte e tre le aree.",
        "Trattiamo macchine di produzione Molins, macchine per filtri KDF e PM e gli alimentatori, le taglierine e i recuperatori che le supportano. Dicci i marchi che utilizzi e la produzione di cui hai bisogno, e ti aiuteremo a costruire una linea che mantiene velocità e qualità giorno dopo giorno.",
      ],
      faqs: [
        {
          question: "Quali macchine di produzione per sigarette fornite?",
          answer:
            "Forniamo l'intera linea di produzione: macchine Molins Mark 8, Mark 9 e Mark 9.5 e macchine Hauni Protos, oltre a macchine per filtri KDF e Molins e agli alimentatori, taglierine e recuperatori di tabacco che le supportano.",
        },
        {
          question: "Quante sigarette al minuto producono le macchine?",
          answer:
            "A seconda del modello, le nostre macchine producono da circa 3.000 fino a 8.000 sigarette al minuto, così puoi abbinare la macchina alla tua produzione target.",
        },
        {
          question: "Fornite macchine nuove o ricondizionate?",
          answer:
            "Entrambe. Le macchine Molins e Hauni ricondizionate sono completamente ispezionate, revisionate e collaudate prima della vendita, offrendo un ottimo valore alle fabbriche in crescita.",
        },
        {
          question: "Aiutate ad abbinare la macchina di produzione alla giusta linea per filtri?",
          answer:
            "Sì. Ci assicuriamo che la macchina di produzione e quella per filtri lavorino in sincronia, così l'intera linea resta bilanciata. Dicci i tuoi marchi e la produzione target e ti consiglieremo una configurazione.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Macchine impacchettatrici",
      title: "Macchine impacchettatrici per sigarette in Italia",
      description:
        "Macchine impacchettatrici per sigarette in Pakistan: linee HLP e SASIB per pacchetti rigidi e morbidi da 180 a 225 pacchetti al minuto. Fornite, installate e supportate da Civic Tobacco Machinery.",
      intro: [
        "La linea di impacchettamento è dove il tuo prodotto prende finalmente forma, quindi deve essere stabile, pulita e facile da usare turno dopo turno. In Civic Tobacco Machinery forniamo macchine impacchettatrici per sigarette in Pakistan scelte proprio per questo: produzione affidabile e pacchetti identici ogni volta.",
        "La nostra gamma copre i formati a pacchetto rigido e morbido, da 180 fino a 225 pacchetti al minuto, con opzioni sia nuove che accuratamente ricondizionate. Che tu stia allestendo una nuova linea o aggiungendo capacità a una esistente, ti aiutiamo ad abbinare la macchina giusta al tuo volume, al tuo budget e ai marchi che produci.",
      ],
      faqs: [
        {
          question: "Qual è la differenza tra macchine per pacchetti rigidi e morbidi?",
          answer:
            "I pacchetti rigidi (con coperchio a cerniera) girano su macchine tipo HLP, mentre i pacchetti morbidi (foglio ripiegato e involucro stampato) girano su macchine tipo SASIB. Forniamo entrambe e ti aiutiamo ad abbinare la macchina al formato di pacchetto che i tuoi marchi vendono davvero.",
        },
        {
          question: "Quali velocità di impacchettamento offrite?",
          answer:
            "Le nostre macchine impacchettatrici per sigarette vanno da circa 180 fino a 225 pacchetti al minuto. Scegli una velocità che corrisponda alla tua reale domanda per turno con un po' di margine di crescita, invece di pagare per una capacità inutilizzata.",
        },
        {
          question: "Vendete macchine impacchettatrici nuove o ricondizionate?",
          answer:
            "Entrambe. Ogni impacchettatrice HLP o SASIB usata è ispezionata, revisionata e collaudata prima della vendita, così una buona macchina ricondizionata può funzionare per anni a una frazione del prezzo del nuovo.",
        },
        {
          question: "Installate la macchina e fornite i ricambi?",
          answer:
            "Sì. Installiamo e mettiamo a punto la macchina e supportiamo HLP e SASIB con ricambi ampiamente disponibili e assistenza. Scrivici su WhatsApp al +92 301 1111184 per prezzo e disponibilità attuale.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Macchine incartatrici",
      title: "Macchine incartatrici per sigarette in Italia",
      description:
        "Macchine incartatrici per sigarette in Pakistan: sovraincartatrici, inscatolatrici e macchine per l'incarto in cellophane che sigillano i pacchetti in modo pulito. Vendita, ricambi e assistenza da Civic Tobacco Machinery.",
      intro: [
        "L'incarto è l'ultima cosa che il tuo cliente vede prima di aprire il pacchetto, ecco perché una sigillatura pulita e aderente conta così tanto. Civic Tobacco Machinery fornisce macchine incartatrici per sigarette in Pakistan che offrono una finitura pulita del film, un nastro di apertura dritto e pacchetti che restano freschi sullo scaffale.",
        "Dalle sovraincartatrici per singolo pacchetto all'incarto delle scatole e alle inscatolatrici per stecche, copriamo l'intera gamma. Ogni macchina che vendiamo è controllata, messa a punto e consegnata pronta all'uso, con ricambi e assistenza a cui puoi ricorrere quando ti servono.",
      ],
      faqs: [
        {
          question: "Qual è la differenza tra una sovraincartatrice e un'inscatolatrice?",
          answer:
            "Una sovraincartatrice sigilla ogni pacchetto in film di cellophane con un nastro di apertura, mentre un'inscatolatrice (cartonatrice) raggruppa i pacchetti finiti in stecche o scatole. La maggior parte delle linee usa entrambe, una dopo l'altra.",
        },
        {
          question: "Quali macchine incartatrici e inscatolatrici fornite?",
          answer:
            "Forniamo sovraincartatrici e inscatolatrici Molins e SASIB, tra cui l'incartatrice per pacchetti CP1, la sovraincartatrice \"naked\" e le inscatolatrici Molins e SASIB, per linee a pacchetto rigido e morbido.",
        },
        {
          question: "Offrite macchine incartatrici nuove o ricondizionate?",
          answer:
            "Sono disponibili sia unità nuove che accuratamente ricondizionate. Ogni macchina usata è controllata, messa a punto e consegnata pronta all'uso.",
        },
        {
          question: "Fornite installazione e ricambi?",
          answer:
            "Sì, installazione, messa a punto, ricambi e assistenza fanno tutti parte del nostro servizio. Contattaci su WhatsApp al +92 301 1111184 per un preventivo.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Macchine di produzione",
      title: "Macchine per filtri per sigarette in Italia",
      description:
        "Macchine per filtri per sigarette in Pakistan: Molins KDF, Molins PM e macchine per tubi cavi. Linee per bacchette filtro fornite e supportate da Civic Tobacco Machinery.",
      intro: [
        "Un buon filtro fa più che completare la sigaretta: controlla il tiraggio, la consistenza e l'intera sensazione del fumo. Civic Tobacco Machinery fornisce macchine per filtri per sigarette in Pakistan che producono bacchette uniformi su cui la tua macchina di produzione può contare.",
        "Abbiamo a magazzino macchine per filtri Molins KDF e Molins PM oltre a macchine per tubi cavi per formati speciali. Qualunque lunghezza o tipo di filtro tu produca, ti aiuteremo a scegliere una linea che corrisponda alla velocità delle tue macchine di produzione.",
      ],
      faqs: [
        {
          question: "Quali macchine per filtri fornite?",
          answer:
            "Forniamo macchine per filtri Hauni KDF-1 e KDF-2, macchine per filtri Molins PM e macchine per tubi cavi per formati speciali, per fabbriche con produzione di bacchette filtro.",
        },
        {
          question: "La macchina per filtri può raggiungere la velocità della mia macchina di produzione?",
          answer:
            "Sì. Ti aiutiamo a scegliere una linea per filtri che corrisponda alla velocità delle tue macchine di produzione, così le due lavorano in sincronia e la linea resta bilanciata.",
        },
        {
          question: "Offrite macchine per filtri nuove e ricondizionate?",
          answer:
            "Entrambe. Ogni macchina KDF o PM ricondizionata è ispezionata, revisionata e collaudata prima della vendita.",
        },
        {
          question: "Installate e supportate le macchine per filtri?",
          answer:
            "Sì, installazione, ricambi e assistenza sono inclusi. Scrivici su WhatsApp al +92 301 1111184 per prezzo e disponibilità.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Macchine di produzione",
      title: "Taglierine, alimentatori e recuperatori per tabacco in Italia",
      description:
        "Macchine per il tabacco in Pakistan: alimentatori, taglierine, recuperatori e schiaccianervature che mantengono in funzione i reparti primario e secondario. Fornite da Civic Tobacco Machinery.",
      intro: [
        "Dietro ogni macchina di produzione e impacchettatrice c'è una serie di macchine più silenziose che fanno il lavoro pesante: alimentare il tabacco, tagliarlo, recuperare ciò che altrimenti andrebbe perso. Civic Tobacco Machinery fornisce macchine per il tabacco in Pakistan che mantengono in movimento questo lato del reparto.",
        "Alimentatori, taglierine, recuperatori e schiaccianervature lavorano insieme per garantire un rifornimento costante alla tua linea e ridurre gli scarti. Ti aiutiamo a inserire le unità giuste attorno alle macchine di produzione e impacchettatrici che già utilizzi.",
      ],
      faqs: [
        {
          question: "Cosa fanno alimentatori, taglierine e recuperatori di tabacco?",
          answer:
            "Gli alimentatori riforniscono di tabacco le macchine di produzione, le taglierine tagliano la foglia alla dimensione di produzione e i recuperatori recuperano il tabacco dalle sigarette scartate perché possa essere riutilizzato, mantenendo scorrevoli i reparti primario e secondario.",
        },
        {
          question: "Questa attrezzatura può ridurre gli scarti di tabacco?",
          answer:
            "Sì. Un recuperatore recupera tabacco utilizzabile dalle sigarette scartate, riducendo gli scarti e abbassando i costi di gestione nel tempo.",
        },
        {
          question: "Quali marchi fornite?",
          answer:
            "Forniamo macchine ben supportate come la taglierina per tabacco Hauni KT-400, oltre ad alimentatori di tabacco, recuperatori di sigarette e schiaccianervature.",
        },
        {
          question: "Le macchine sono nuove o ricondizionate e le supportate?",
          answer:
            "Sono disponibili sia unità nuove che ricondizionate, tutte collaudate prima della vendita, con installazione, ricambi e assistenza. Contattaci su WhatsApp al +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Macchine per sigarette in Italia",
    intro:
      "La macchina di produzione è il cuore di ogni fabbrica di sigarette. Trasforma tabacco tagliato e carta in un baco finito, migliaia di volte al minuto, senza interruzioni nella qualità.",
    seeAll: "Vedi tutte →",
  },
  blog: {
    eyebrow: "Blog",
    indexTitle: "Guide e consigli sulle macchine per sigarette",
    indexIntro:
      "Articoli chiari e concreti per aiutarti a scegliere, acquistare e far funzionare macchine per sigarette e tabacco, scritti da chi lavora con queste macchine ogni giorno.",
    metaTitle: "Blog | Civic Tobacco Machinery",
    metaDescription:
      "Guide pratiche su macchine per sigarette e tabacco: scegliere le impacchettatrici, confrontare le macchine di produzione e acquistare macchine usate in Pakistan. Da Civic Tobacco Machinery.",
    readArticle: "Leggi l'articolo →",
    minRead: "min di lettura",
    tags: "Tag:",
    backToAll: "← Torna a tutti gli articoli",
    keepReading: "Continua a leggere",
    dateLocale: "it-IT",
  },
  product: {
    keyFeatures: "Caratteristiche principali",
    specifications: "Specifiche tecniche",
    description: "Descrizione",
    bestSuitedFor: "Ideale per",
    call: "Chiama",
    interested: "Ti interessa questa macchina?",
    askAbout: "Richiedi informazioni su",
    enquiryText:
      "Inviaci un breve messaggio per prezzo, disponibilità attuale e condizioni. Ti segnaleremo anche le macchine abbinabili per completare la tua linea.",
    related: "Macchine correlate",
    thumbs: { front: "Vista frontale", detail: "Dettaglio", operation: "In funzione" },
    waMessage: (name) =>
      `Salve, sono interessato alla ${name}. Vi prego di inviarmi prezzo e disponibilità.`,
  },
};

/* ---------------------------------------------------------------------------
 * Russian (ru-RU) — first-pass professional translation, native review pending.
 * ------------------------------------------------------------------------- */

const ru: Dictionary = {
  nav: {
    about: "О нас",
    making: "Производство сигарет",
    packing: "Упаковка",
    filter: "Фильтровальные машины",
    wrappers: "Обёрточные и коробочные машины",
    cutter: "Резка/подача/рекуперация",
    contact: "Контакты",
  },
  header: {
    tagline: "Производители машин для сигарет и табака в России",
    call: "Позвонить",
    whatsapp: "WhatsApp",
    region: "Россия",
  },
  megaMenu: {
    prompt: "Ищете конкретную машину или полную линию?",
    viewAll: "Смотреть все производственные машины →",
  },
  productCard: { viewDetails: "Подробнее" },
  breadcrumbHome: "Главная",
  faqHeading: "Часто задаваемые вопросы",
  emptyNote:
    "Машины этой категории добавляются регулярно. Свяжитесь с нами, чтобы узнать о наличии.",
  cta: {
    title: "Не уверены, какая машина вам нужна?",
    text: "Сообщите нам формат, целевую производительность и бюджет. Мы порекомендуем подходящую машину — новую или восстановленную — и поможем ввести её в эксплуатацию.",
    whatsapp: "WhatsApp",
    enquiry: "Отправить запрос",
  },
  footer: {
    blurb:
      "Поставщики новых и бывших в употреблении машин для производства, упаковки и обёртки сигарет в Пакистане, с установкой, запчастями и сервисом, на которые можно положиться.",
    machines: "Машины",
    manufacturing: "Производство",
    reachUs: "Связаться с нами",
    ourBlog: "Наш блог",
    hours: "Пн–Сб, 09:00–18:00",
    rights: "Все права защищены.",
    links: { home: "Главная", about: "О нас", blog: "Блог", contact: "Контакты" },
    labels: {
      "/cigarette-packing-machines": "Упаковочные машины",
      "/cigarette-box-wrapping-machines": "Обёрточные машины",
      "/cigarette-manufacturing-machines": "Производственные машины",
      "/cigarette-making-machines": "Сигаретные машины",
      "/cigarette-filter-making-machines": "Машины для производства фильтров",
      "/cutter-feeder-reclaimer": "Табачные машины",
    },
  },
  switcher: { label: "Язык" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Сигаретные машины из России",
    metaDescription:
      "Civic Tobacco Machinery поставляет машины для производства, упаковки и обёртки сигарет в Пакистане. Новое и бывшее в употреблении табачное оборудование, линии для фильтров, запчасти и полная поддержка при установке.",
    hero: {
      h1: "Ищете машины для сигарет и табака из России?",
      lead: "Вы попали по адресу. От первого стержня до готового блока Civic Tobacco Machinery обеспечит вас новыми и восстановленными линиями для производства, фильтров, упаковки и обёртки — установленными, настроенными и поддержанными запчастями и сервисом, на которые можно рассчитывать.",
      getQuote: "Запросить предложение",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Просмотр по типу машины",
    browse: {
      packing: "Упаковочные машины для сигарет",
      wrapping: "Обёрточные машины для сигарет",
      making: "Производственные машины для сигарет",
      used: "Бывшие в употреблении сигаретные машины",
    },
    viewRange: "Смотреть линейку →",
    about: {
      eyebrow: "О нас",
      h2: "Поколения инженерного мастерства в табачном оборудовании",
      lead: "Семейное дело отца и сына, которым мы гордимся, теперь в третьем поколении, с более чем 35 годами практического опыта в табачной отрасли.",
      p1: "На протяжении десятилетий наша семья работает в одной области — табачном оборудовании. То, что начиналось как небольшая торговая деятельность, выросло в надёжное имя, охватывающее несколько поколений, на которое полагаются новые и уже состоявшиеся сигаретные компании по всему Пакистану при построении и эксплуатации своих линий.",
      p2: "Мы — специализированные производители табачного оборудования, предлагающие полное комплексное решение. От производственных и фильтровальных машин до упаковщиков и обёрточных машин мы помогаем вам подобрать нужное оборудование, увидеть его в работе до покупки и установить и настроить его на вашем производстве. Мы также проводим бесплатную демонстрацию и обучение для ваших техников, чтобы ваша команда уверенно работала с машиной с первого дня.",
      bullets: [
        "Семейное дело в нескольких поколениях",
        "Новые и восстановленные машины",
        "Полная линия, от производства до упаковки",
        "Демонстрация и обучение техников",
      ],
      more: "Подробнее о нас",
    },
    featured: {
      eyebrow: "В наличии и популярны",
      h2: "Рекомендуемые машины",
      viewAll: "Смотреть все машины →",
    },
    why: {
      eyebrow: "Почему Civic Tobacco Machinery",
      h2: "Правильная машина, настроенная надолго",
      reasons: [
        {
          title: "Машины, которые продолжают работать",
          text: "Мы придерживаемся проверенных брендов с хорошей доступностью запчастей, чтобы ваша линия оставалась продуктивной смену за сменой.",
        },
        {
          title: "Честные отчёты о состоянии",
          text: "Каждая бывшая в употреблении машина осматривается, обслуживается и тестируется. Вы получаете честный отчёт о её состоянии, без сюрпризов.",
        },
        {
          title: "Поддержка всей линии",
          text: "От производства до упаковки мы помогаем подобрать машины так, чтобы ничто не стало узким местом, и мы устанавливаем и обслуживаем их.",
        },
        {
          title: "Локальная помощь на месте",
          text: "Мы находимся прямо здесь, в Пакистане. Когда вам нужны запчасти или техник, помощь рядом, а не на другом континенте.",
        },
      ],
    },
    ranges: {
      making: "Сигаретные машины",
      packing: "Упаковочные машины для сигарет",
      filter: "Машины для производства сигаретных фильтров",
      wrapping: "Обёрточные машины для сигарет",
    },
    carousel: {
      eyebrow: "Наш ассортимент",
      heading: "Сигаретные машины в продаже",
      viewAllPrefix: "Смотреть все: ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Галерея",
      heading: "Civic Tobacco Machinery в фотографиях",
      text: "Моменты с международных табачных выставок и встреч с нашими партнёрами и клиентами по всему миру.",
    },
    local: {
      eyebrow: "Обслуживаем весь Пакистан",
      h2: "Ваш партнёр по табачному оборудованию в Пакистане",
      text: "Расположение в промышленной зоне SITE означает, что мы близко к заводам, которые обслуживаем. Когда вам нужна запчасть, техник или честный совет по машине, вы имеете дело с людьми из того же города, а не с поставщиком на другом континенте.",
      bullets: [
        "Быстрая локальная поддержка и запчасти",
        "Установка и настройка на вашем заводе",
        "Новые и восстановленные машины на любой бюджет",
      ],
      visitHeading: "Посетите нас или позвоните",
      directions: "Как добраться и контакты",
    },
    faqHeading: {
      eyebrow: "Частые вопросы",
      h2: "Часто задаваемые вопросы",
    },
    faqs: [
      {
        question: "Продаёте ли вы как новые, так и бывшие в употреблении сигаретные машины в Пакистане?",
        answer:
          "Да. Мы поставляем новые машины, а также тщательно восстановленное бывшее в употреблении оборудование для сигарет и табака. Каждая б/у машина осматривается, обслуживается и тестируется перед продажей и поставляется с честным отчётом о состоянии, чтобы вы точно знали, что покупаете.",
      },
      {
        question: "С какими брендами производственных машин для сигарет вы работаете?",
        answer:
          "Мы работаем в основном с хорошо поддерживаемыми брендами, такими как Molins для производственных и фильтровальных машин, а также HLP и SASIB для упаковки и обёртки. Мы выбираем их, потому что запчасти и обученные техники легко доступны, что позволяет вашей линии работать годами.",
      },
      {
        question: "Устанавливаете ли вы машины и предоставляете ли запчасти?",
        answer:
          "Да. Мы помогаем с установкой и правильной настройкой машины на вашем производстве и поддерживаем вас в дальнейшем запчастями и сервисом. Запуск производственной или упаковочной машины — не задача по принципу «включил и работай», поэтому мы остаёмся вовлечёнными, пока она не заработает как надо.",
      },
      {
        question: "Где вы находитесь и осуществляете ли доставку по всему Пакистану?",
        answer:
          "Наша мастерская находится в промышленной зоне SITE в Карачи. Мы обслуживаем клиентов по всему Пакистану и можем организовать доставку и установку там, где находится ваш завод.",
      },
    ],
  },

  about: {
    metaTitle: "О нас | Civic Tobacco Machinery",
    metaDescription:
      "О компании Civic Tobacco Machinery, поставщике машин для сигарет и табака в Пакистане. Кто мы, за что мы стоим и как мы поддерживаем ваш завод новыми и бывшими в употреблении машинами.",
    hero: {
      eyebrow: "О нас",
      title: "Машины для сигарет и табака от тех, кто их знает",
      intro:
        "Civic Tobacco Machinery уже годами помогает заводам по всему Пакистану строить, расширять и обслуживать их сигаретные линии.",
    },
    whoHeading: "Кто мы",
    who: [
      "Мы — поставщик машин для сигарет и табака, базирующийся в Пакистане. За годы работы мы имели дело со всем — от небольших мастерских, делающих первые шаги в производстве сигарет, до состоявшихся заводов, добавляющих вторую или третью линию. Этот опыт формирует наш подход: сначала мы слушаем, понимаем, что вам действительно нужно, а затем указываем на подходящую машину.",
      "Наш ассортимент охватывает всю линию: производственные машины, формирующие стержень, фильтровальные машины, упаковочные машины для твёрдых и мягких пачек, обёрточные и коробочные машины и табачное оборудование, которое питает производство. Мы работаем как с новым, так и с тщательно восстановленным оборудованием, поэтому найдётся разумный вариант при любом бюджете.",
    ],
    howHeading: "Как мы работаем",
    how: [
      "Покупка машины — это лишь половина дела. Производственную или упаковочную машину нужно правильно установить, точно настроить и поддерживать в работе, и именно здесь многие поставщики исчезают. Мы — нет. Мы помогаем доставить машину на ваше производство и запустить её как надо и остаёмся доступными в дальнейшем для запчастей и сервиса.",
      "Поскольку мы находимся прямо здесь, в промышленной зоне SITE, эта поддержка действительно локальна. Когда что-то требует внимания, вы говорите с людьми из того же города, а не ждёте поставщика в другой стране и другом часовом поясе.",
    ],
    brandsHeading: "Бренды, которым мы доверяем",
    brands:
      "Мы сосредотачиваемся на проверенных именах: Molins для производственных и фильтровальных машин, HLP и SASIB для упаковки и обёртки и семейство Protos для высокоскоростных линий. Мы выбираем их не ради марки, а потому что их запчасти и ноу-хау легко доступны — именно это позволяет машине окупаться годами.",
    glance: {
      heading: "Кратко",
      basedIn: "Расположение",
      basedInValue: "SITE, Карачи, Пакистан",
      supply: "Мы поставляем",
      supplyValue: "Новое и б/у табачное оборудование",
      serve: "Мы обслуживаем",
      serveValue: "Весь Пакистан",
      call: "Звонок / WhatsApp",
      talk: "Свяжитесь с нами",
    },
    valuesEyebrow: "За что мы стоим",
    valuesHeading: "Наш подход к делу",
    values: [
      {
        title: "Честность прежде всего",
        text: "Мы сообщаем вам реальное состояние машины и то, на что она способна. Продажа, которая оставляет вас недовольным, — вовсе не продажа.",
      },
      {
        title: "Машины, которые мы использовали бы сами",
        text: "Мы работаем с брендами и моделями, которым доверяем, — с хорошей доступностью запчастей и долгим сроком службы.",
      },
      {
        title: "Поддержка, которая остаётся",
        text: "Наша работа не заканчивается на поставке. Мы помогаем с установкой, настройкой, запчастями и сервисом в долгосрочной перспективе.",
      },
      {
        title: "Справедливая цена",
        text: "Новая или восстановленная — мы помогаем получить нужную машину под ваш бюджет, не экономя на том, что действительно важно.",
      },
    ],
    ctaTitle: "Давайте обсудим вашу линию",
    ctaText:
      "Начинаете вы или расширяетесь — расскажите, что вы хотите производить, и мы поможем этого достичь.",
  },

  contact: {
    metaTitle: "Контакты | Civic Tobacco Machinery",
    metaDescription:
      "Свяжитесь с Civic Tobacco Machinery в Пакистане. Позвоните, напишите в WhatsApp или отправьте запрос о машинах для производства, упаковки, обёртки сигарет и б/у машинах. Мастерская в SITE, Карачи.",
    hero: {
      eyebrow: "Контакты",
      title: "Свяжитесь с Civic Tobacco Machinery",
      intro:
        "Расскажите, что вы ищете, и мы ответим вам в тот же рабочий день. Позвоните, напишите в WhatsApp, по электронной почте или отправьте форму ниже.",
    },
    directHeading: "Свяжитесь с нами напрямую",
    directText:
      "Самый быстрый способ получить чёткий ответ о машине, её состоянии, цене или наличии — написать нам в WhatsApp или позвонить.",
    rows: {
      visit: "Посетите нашу мастерскую",
      call: "Позвоните нам",
      whatsapp: "WhatsApp",
      whatsappValue: "Напишите нам по номеру",
      email: "Эл. почта",
      hours: "Часы работы",
      hoursValue: "Понедельник – суббота, 09:00 – 18:00",
      hoursClosed: "Воскресенье — выходной",
    },
    openInMaps: "Открыть в Google Maps",
    formHeading: "Отправить запрос",
    formIntro:
      "Заполните эту форму, и мы быстро ответим вам. Поля, отмеченные как обязательные, помогают нам дать точный ответ.",
    form: {
      name: "Ваше имя",
      namePlaceholder: "напр. Ahmed Khan",
      phone: "Телефон / WhatsApp",
      phonePlaceholder: "напр. 0300 1234567",
      email: "Эл. почта",
      emailOptional: "(необязательно)",
      emailPlaceholder: "you@company.com",
      interest: "Машина, которая вас интересует",
      interestPlaceholder: "напр. упаковочная машина HLP-200",
      message: "Ваше сообщение",
      messagePlaceholder: "Укажите ваш формат, целевую производительность и любые детали.",
      submit: "Отправить запрос",
      sending: "Отправка…",
      successTitle: "Спасибо!",
      successText:
        "Ваш запрос отправлен. Наша команда свяжется с вами в ближайшее время, обычно в тот же рабочий день.",
      errorText:
        "К сожалению, при отправке сообщения что-то пошло не так. Попробуйте ещё раз или",
      errorWhatsApp: "напишите нам в WhatsApp",
      footnote:
        "Ваши данные поступают напрямую нашей команде — обычно мы отвечаем в тот же рабочий день. Предпочитаете чат?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Производственные машины",
      title: "Производственные машины для сигарет в России",
      description:
        "Производственные машины для сигарет в Пакистане: производственные машины Molins, фильтровальные машины и табачное оборудование. Новые и восстановленные линии от Civic Tobacco Machinery.",
      intro: [
        "Хорошая сигарета начинается задолго до пачки. Она начинается с машины, укладывающей ровный стержень, фильтровальной линии, которая чисто режет, и табачного оборудования, питающего всё производство. Civic Tobacco Machinery поставляет производственные машины для сигарет в Пакистане по всем трём направлениям.",
        "Мы работаем с производственными машинами Molins, фильтровальными машинами KDF и PM и подающими устройствами, резаками и рекуператорами, которые их поддерживают. Сообщите нам бренды, которые вы используете, и нужную производительность, и мы поможем построить линию, которая держит скорость и качество день за днём.",
      ],
      faqs: [
        {
          question: "Какие производственные машины для сигарет вы поставляете?",
          answer:
            "Мы поставляем полную производственную линию: машины Molins Mark 8, Mark 9 и Mark 9.5 и машины Hauni Protos, а также фильтровальные машины KDF и Molins и табачные подающие устройства, резаки и рекуператоры, которые их поддерживают.",
        },
        {
          question: "Сколько сигарет в минуту производят машины?",
          answer:
            "В зависимости от модели наши машины работают от примерно 3 000 до 8 000 сигарет в минуту, так что вы можете подобрать машину под вашу целевую производительность.",
        },
        {
          question: "Вы поставляете новые или восстановленные машины?",
          answer:
            "И те, и другие. Восстановленные машины Molins и Hauni полностью осматриваются, обслуживаются и тестируются перед продажей, предлагая отличную ценность растущим заводам.",
        },
        {
          question: "Помогаете ли вы подобрать производственную машину к нужной фильтровальной линии?",
          answer:
            "Да. Мы следим за тем, чтобы производственная и фильтровальная машины работали синхронно, чтобы вся линия оставалась сбалансированной. Сообщите нам ваши бренды и целевую производительность, и мы порекомендуем конфигурацию.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Упаковочные машины",
      title: "Упаковочные машины для сигарет в России",
      description:
        "Упаковочные машины для сигарет в Пакистане: линии HLP и SASIB для твёрдых и мягких пачек от 180 до 225 пачек в минуту. Поставка, установка и поддержка от Civic Tobacco Machinery.",
      intro: [
        "Упаковочная линия — это место, где ваш продукт наконец обретает форму, поэтому она должна быть стабильной, чистой и простой в работе смену за сменой. В Civic Tobacco Machinery мы поставляем упаковочные машины для сигарет в Пакистане, выбранные именно ради этого: надёжная производительность и пачки, которые выглядят одинаково каждый раз.",
        "Наш ассортимент охватывает форматы твёрдых и мягких пачек, от 180 до 225 пачек в минуту, с новыми и тщательно восстановленными вариантами. Строите ли вы новую линию или добавляете мощность к существующей — мы поможем подобрать нужную машину под ваш объём, бюджет и бренды, которые вы производите.",
      ],
      faqs: [
        {
          question: "В чём разница между машинами для твёрдых и мягких пачек?",
          answer:
            "Твёрдые пачки (с откидной крышкой) работают на машинах типа HLP, а мягкие пачки (сложенная фольга и печатная внешняя обёртка) — на машинах типа SASIB. Мы поставляем и те, и другие и помогаем подобрать машину под формат пачки, который действительно продают ваши бренды.",
        },
        {
          question: "Какие скорости упаковки вы предлагаете?",
          answer:
            "Наши упаковочные машины для сигарет работают от примерно 180 до 225 пачек в минуту. Выберите скорость, соответствующую вашему реальному спросу за смену с небольшим запасом для роста, вместо того чтобы платить за простаивающую мощность.",
        },
        {
          question: "Вы продаёте новые или восстановленные упаковочные машины?",
          answer:
            "И те, и другие. Каждый б/у упаковщик HLP или SASIB осматривается, обслуживается и тестируется перед продажей, так что хорошая восстановленная машина может работать годами за долю цены новой.",
        },
        {
          question: "Устанавливаете ли вы машину и поставляете ли запчасти?",
          answer:
            "Да. Мы устанавливаем и настраиваем машину и поддерживаем HLP и SASIB широко доступными запчастями и сервисом. Напишите нам в WhatsApp по номеру +92 301 1111184 для уточнения цены и наличия.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Обёрточные машины",
      title: "Обёрточные машины для сигарет в России",
      description:
        "Обёрточные машины для сигарет в Пакистане: сверхобёрточные, коробочные и целлофановые обёрточные машины, которые чисто запечатывают ваши пачки. Продажа, запчасти и сервис от Civic Tobacco Machinery.",
      intro: [
        "Обёртка — это последнее, что видит ваш клиент перед открытием пачки, поэтому чистая, плотная запайка так важна. Civic Tobacco Machinery поставляет обёрточные машины для сигарет в Пакистане, обеспечивающие аккуратную плёночную отделку, ровную ленту для вскрытия и пачки, которые остаются свежими на полке.",
        "От сверхобёрточных машин для отдельных пачек до обёртки коробок и коробочных машин для блоков мы охватываем весь ассортимент. Каждая продаваемая нами машина проверяется, настраивается и передаётся готовой к работе, с запчастями и сервисом, к которым можно обратиться, когда они нужны.",
      ],
      faqs: [
        {
          question: "В чём разница между сверхобёрточной и коробочной машиной?",
          answer:
            "Сверхобёрточная машина запечатывает каждую пачку в целлофановую плёнку с лентой для вскрытия, а коробочная машина (картонажная) группирует готовые пачки в блоки или коробки. На большинстве линий используются обе, одна за другой.",
        },
        {
          question: "Какие обёрточные и коробочные машины вы поставляете?",
          answer:
            "Мы поставляем сверхобёрточные и коробочные машины Molins и SASIB, включая обёрточную машину для пачек CP1, сверхобёрточную машину naked и коробочные машины Molins и SASIB, для линий как с твёрдыми, так и с мягкими пачками.",
        },
        {
          question: "Вы предлагаете новые или восстановленные обёрточные машины?",
          answer:
            "Доступны как новые, так и тщательно восстановленные единицы. Каждая б/у машина проверяется, настраивается и передаётся готовой к работе.",
        },
        {
          question: "Предоставляете ли вы установку и запчасти?",
          answer:
            "Да, установка, настройка, запчасти и сервис — всё это часть нашей работы. Свяжитесь с нами в WhatsApp по номеру +92 301 1111184 для получения предложения.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Производственные машины",
      title: "Машины для производства сигаретных фильтров в России",
      description:
        "Машины для производства сигаретных фильтров в Пакистане: Molins KDF, Molins PM и машины для полых трубок. Линии для фильтровальных стержней от Civic Tobacco Machinery.",
      intro: [
        "Хороший фильтр делает больше, чем просто завершает сигарету, — он управляет тягой, плотностью и всем ощущением от курения. Civic Tobacco Machinery поставляет машины для производства сигаретных фильтров в Пакистане, которые выпускают равномерные стержни, на которые может положиться ваша производственная машина.",
        "У нас на складе есть фильтровальные машины Molins KDF и Molins PM, а также машины для полых трубок для специальных форматов. Какую бы длину или тип фильтра вы ни производили, мы поможем выбрать линию, соответствующую скорости ваших производственных машин.",
      ],
      faqs: [
        {
          question: "Какие фильтровальные машины вы поставляете?",
          answer:
            "Мы поставляем фильтровальные машины Hauni KDF-1 и KDF-2, фильтровальные машины Molins PM и машины для полых трубок для специальных форматов, для заводов с производством фильтровальных стержней.",
        },
        {
          question: "Может ли фильтровальная машина соответствовать скорости моей производственной машины?",
          answer:
            "Да. Мы помогаем выбрать фильтровальную линию, соответствующую скорости ваших производственных машин, чтобы они работали синхронно и линия оставалась сбалансированной.",
        },
        {
          question: "Вы предлагаете новые и восстановленные фильтровальные машины?",
          answer:
            "И те, и другие. Каждая восстановленная машина KDF или PM осматривается, обслуживается и тестируется перед продажей.",
        },
        {
          question: "Устанавливаете ли вы фильтровальные машины и поддерживаете ли их?",
          answer:
            "Да, установка, запчасти и сервис включены. Напишите нам в WhatsApp по номеру +92 301 1111184 для уточнения цены и наличия.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Производственные машины",
      title: "Табачные резаки, подающие устройства и рекуператоры в России",
      description:
        "Табачное оборудование в Пакистане: подающие устройства, резаки, рекуператоры и машины для расплющивания жилок, поддерживающие работу первичного и вторичного производства. Поставка от Civic Tobacco Machinery.",
      intro: [
        "За каждой производственной и упаковочной машиной стоит набор более тихих машин, выполняющих тяжёлую работу: подача табака, его резка, спасение того, что иначе было бы потеряно. Civic Tobacco Machinery поставляет табачное оборудование в Пакистане, которое поддерживает движение на этой стороне производства.",
        "Подающие устройства, резаки, рекуператоры и машины для расплющивания жилок работают вместе, обеспечивая стабильную подачу на вашу линию и сокращая отходы. Мы помогаем подобрать нужные единицы к производственным и упаковочным машинам, которые вы уже используете.",
      ],
      faqs: [
        {
          question: "Что делают табачные подающие устройства, резаки и рекуператоры?",
          answer:
            "Подающие устройства снабжают производственные машины табаком, резаки режут лист под размер производства, а рекуператоры извлекают табак из отбракованных сигарет, чтобы его можно было использовать повторно, поддерживая плавную работу первичного и вторичного производства.",
        },
        {
          question: "Может ли это оборудование сократить отходы табака?",
          answer:
            "Да. Рекуператор извлекает пригодный табак из отбракованных сигарет, что сокращает отходы и со временем снижает эксплуатационные расходы.",
        },
        {
          question: "Какие бренды вы поставляете?",
          answer:
            "Мы поставляем хорошо поддерживаемые машины, такие как табачный резак Hauni KT-400, а также табачные подающие устройства, рекуператоры сигарет и машины для расплющивания жилок.",
        },
        {
          question: "Машины новые или восстановленные, и поддерживаете ли вы их?",
          answer:
            "Доступны как новые, так и восстановленные единицы, все протестированы перед продажей, с установкой, запчастями и сервисом. Свяжитесь с нами в WhatsApp по номеру +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Сигаретные машины в России",
    intro:
      "Производственная машина — сердце любого сигаретного завода. Она превращает нарезанный табак и бумагу в готовый стержень тысячи раз в минуту, без перерыва в качестве.",
    seeAll: "Смотреть все →",
  },
  blog: {
    eyebrow: "Блог",
    indexTitle: "Руководства и советы по сигаретным машинам",
    indexIntro:
      "Прямые и практичные статьи, которые помогут вам выбрать, купить и эксплуатировать машины для сигарет и табака, написанные людьми, ежедневно работающими с этими машинами.",
    metaTitle: "Блог | Civic Tobacco Machinery",
    metaDescription:
      "Практичные руководства по машинам для сигарет и табака: выбор упаковочных машин, сравнение производственных машин и покупка б/у машин в Пакистане. От Civic Tobacco Machinery.",
    readArticle: "Читать статью →",
    minRead: "мин чтения",
    tags: "Теги:",
    backToAll: "← Назад ко всем статьям",
    keepReading: "Продолжить чтение",
    dateLocale: "ru-RU",
  },
  product: {
    keyFeatures: "Ключевые характеристики",
    specifications: "Технические характеристики",
    description: "Описание",
    bestSuitedFor: "Лучше всего подходит для",
    call: "Позвонить",
    interested: "Интересует эта машина?",
    askAbout: "Узнать о",
    enquiryText:
      "Отправьте нам короткое сообщение для уточнения цены, текущего наличия и состояния. Мы также сообщим о подходящих машинах для завершения вашей линии.",
    related: "Похожие машины",
    thumbs: { front: "Вид спереди", detail: "Деталь", operation: "В работе" },
    waMessage: (name) =>
      `Здравствуйте, меня интересует ${name}. Пожалуйста, сообщите цену и наличие.`,
  },
};

/* ---------------------------------------------------------------------------
 * Arabic (ar) — first-pass professional MSA translation, native review pending.
 * Right-to-left; the page dir is set to rtl for this locale.
 * ------------------------------------------------------------------------- */

const ar: Dictionary = {
  nav: {
    about: "من نحن",
    making: "صناعة السجائر",
    packing: "تغليف السجائر",
    filter: "ماكينات الفلاتر",
    wrappers: "ماكينات اللف والتعبئة",
    cutter: "التقطيع/التغذية/الاسترجاع",
    contact: "اتصل بنا",
  },
  header: {
    tagline: "مصنّعو ماكينات السجائر والتبغ في الشرق الأوسط",
    call: "اتصل",
    whatsapp: "واتساب",
    region: "الشرق الأوسط",
  },
  megaMenu: {
    prompt: "تبحث عن ماكينة محددة أو خط إنتاج كامل؟",
    viewAll: "عرض جميع ماكينات التصنيع ←",
  },
  productCard: { viewDetails: "عرض التفاصيل" },
  breadcrumbHome: "الرئيسية",
  faqHeading: "الأسئلة الشائعة",
  emptyNote:
    "تُضاف ماكينات هذه الفئة بانتظام. تواصل معنا لمعرفة المتوفر حاليًا.",
  cta: {
    title: "لست متأكدًا من الماكينة التي تحتاجها؟",
    text: "أخبرنا بالمقاس والإنتاج المستهدف والميزانية. سنوصي لك بالماكينة المناسبة، جديدة أو مُجددة، ونساعدك على تشغيلها.",
    whatsapp: "واتساب",
    enquiry: "إرسال طلب",
  },
  footer: {
    blurb:
      "موردو ماكينات جديدة ومستعملة لتصنيع السجائر وتغليفها ولفّها في باكستان، مع التركيب وقطع الغيار والصيانة التي يمكنك الاعتماد عليها.",
    machines: "الماكينات",
    manufacturing: "التصنيع",
    reachUs: "تواصل معنا",
    ourBlog: "مدوّنتنا",
    hours: "الاثنين–السبت، 09:00–18:00",
    rights: "جميع الحقوق محفوظة.",
    links: { home: "الرئيسية", about: "من نحن", blog: "المدوّنة", contact: "اتصل بنا" },
    labels: {
      "/cigarette-packing-machines": "ماكينات التغليف",
      "/cigarette-box-wrapping-machines": "ماكينات اللف",
      "/cigarette-manufacturing-machines": "ماكينات التصنيع",
      "/cigarette-making-machines": "ماكينات صناعة السجائر",
      "/cigarette-filter-making-machines": "ماكينات صناعة الفلاتر",
      "/cutter-feeder-reclaimer": "ماكينات التبغ",
    },
  },
  switcher: { label: "اللغة" },

  home: {
    metaTitle: "Civic Tobacco Machinery | ماكينات السجائر من الشرق الأوسط",
    metaDescription:
      "توفّر Civic Tobacco Machinery ماكينات تصنيع السجائر وتغليفها ولفّها في باكستان. ماكينات تبغ جديدة ومستعملة، وخطوط فلاتر، وقطع غيار، ودعم كامل للتركيب.",
    hero: {
      h1: "تبحث عن ماكينات السجائر والتبغ من الشرق الأوسط؟",
      lead: "أنت في المكان الصحيح. من أول عود إلى العلبة النهائية، تجهّزك Civic Tobacco Machinery بخطوط صناعة وفلاتر وتغليف ولفّ جديدة ومُجددة، مُركّبة ومضبوطة ومدعومة بقطع الغيار والصيانة التي يمكنك الاعتماد عليها.",
      getQuote: "اطلب عرض سعر",
      whatsapp: "واتساب",
    },
    browseHeading: "تصفّح حسب نوع الماكينة",
    browse: {
      packing: "ماكينات تغليف السجائر",
      wrapping: "ماكينات لفّ السجائر",
      making: "ماكينات تصنيع السجائر",
      used: "ماكينات سجائر مستعملة",
    },
    viewRange: "عرض المجموعة ←",
    about: {
      eyebrow: "من نحن",
      h2: "أجيال من التميّز الهندسي في ماكينات التبغ",
      lead: "عمل عائلي نفخر به بين أبٍ وابن، وصل الآن إلى جيله الثالث، بخبرة عملية تزيد على 35 عامًا في صناعة التبغ.",
      p1: "على مدى عقود عملت عائلتنا في مجال واحد من ماكينات التبغ. وما بدأ نشاطًا تجاريًا صغيرًا نما ليصبح اسمًا موثوقًا عبر أجيال، تعتمد عليه شركات السجائر الجديدة والراسخة في جميع أنحاء باكستان لبناء خطوطها وتشغيلها.",
      p2: "نحن مصنّعون متخصصون في ماكينات التبغ ونقدّم حلاً متكاملاً من مصدر واحد. من ماكينات الصناعة والفلاتر إلى ماكينات التغليف واللف، نساعدك على اختيار المعدات المناسبة ورؤيتها أثناء العمل قبل الشراء وتركيبها وضبطها في مصنعك. كما نقدّم عروضًا وتدريبًا مجانيًا لفنّييك، ليكون فريقك واثقًا من الماكينة منذ اليوم الأول.",
      bullets: [
        "عمل عائلي عبر أجيال متعددة",
        "ماكينات جديدة ومُجددة",
        "خط كامل، من الصناعة إلى التغليف",
        "عروض تجريبية وتدريب للفنّيين",
      ],
      more: "المزيد عنّا",
    },
    featured: {
      eyebrow: "متوفرة ومطلوبة",
      h2: "ماكينات مختارة",
      viewAll: "عرض جميع الماكينات ←",
    },
    why: {
      eyebrow: "لماذا Civic Tobacco Machinery",
      h2: "الماكينة المناسبة، مهيّأة لتدوم",
      reasons: [
        {
          title: "ماكينات تستمر في العمل",
          text: "نلتزم بعلامات مجرّبة ذات توفّر جيد لقطع الغيار، ليبقى خطّك منتجًا وردية بعد وردية.",
        },
        {
          title: "تقارير صادقة عن الحالة",
          text: "تُفحص كل ماكينة مستعملة وتُصان وتُختبر. تحصل على وصف واضح لحالتها دون مفاجآت.",
        },
        {
          title: "دعم للخط بالكامل",
          text: "من الصناعة إلى التغليف، نساعدك على مواءمة الماكينات كي لا يصبح شيء عنق زجاجة، ونركّبها وندعمها.",
        },
        {
          title: "دعم محلي على الأرض",
          text: "مقرّنا هنا في باكستان. عندما تحتاج قطع غيار أو فنّيًا، تكون المساعدة قريبة، لا في قارة أخرى.",
        },
      ],
    },
    ranges: {
      making: "ماكينات صناعة السجائر",
      packing: "ماكينات تغليف السجائر",
      filter: "ماكينات صناعة فلاتر السجائر",
      wrapping: "ماكينات لفّ السجائر",
    },
    carousel: {
      eyebrow: "مخزوننا",
      heading: "ماكينات سجائر للبيع",
      viewAllPrefix: "عرض كل ",
      viewAllSuffix: " ←",
    },
    gallery: {
      eyebrow: "المعرض",
      heading: "Civic Tobacco Machinery بالصور",
      text: "لحظات من معارض التبغ الدولية ولقاءات مع شركائنا وعملائنا حول العالم.",
    },
    local: {
      eyebrow: "نخدم باكستان بأكملها",
      h2: "شريكك لماكينات التبغ في باكستان",
      text: "وجودنا في منطقة SITE الصناعية يعني أننا قريبون من المصانع التي نخدمها. عندما تحتاج قطعة غيار أو فنّيًا أو نصيحة صادقة حول ماكينة، فأنت تتعامل مع أناس في المدينة نفسها، لا مع مورّد في قارة أخرى.",
      bullets: [
        "دعم محلي سريع وقطع غيار",
        "التركيب والضبط في مصنعك",
        "ماكينات جديدة ومُجددة لكل ميزانية",
      ],
      visitHeading: "زُرنا أو اتصل بنا",
      directions: "الاتجاهات والتواصل",
    },
    faqHeading: {
      eyebrow: "أسئلة شائعة",
      h2: "الأسئلة الشائعة",
    },
    faqs: [
      {
        question: "هل تبيعون ماكينات سجائر جديدة ومستعملة في باكستان؟",
        answer:
          "نعم. نوفّر ماكينات جديدة إلى جانب ماكينات سجائر وتبغ مستعملة مُجددة بعناية. تُفحص كل ماكينة مستعملة وتُصان وتُختبر قبل البيع، وتأتي بتقرير صادق عن حالتها لتعرف تمامًا ما تشتريه.",
      },
      {
        question: "ما العلامات التجارية لماكينات تصنيع السجائر التي تتعاملون بها؟",
        answer:
          "نعمل أساسًا مع علامات مدعومة جيدًا مثل Molins لماكينات الصناعة والفلاتر، وHLP وSASIB للتغليف واللف. اخترناها لأن قطع الغيار والفنّيين المدرّبين متوفرون بسهولة، ما يبقي خطّك يعمل لسنوات.",
      },
      {
        question: "هل تركّبون الماكينات وتوفّرون قطع الغيار؟",
        answer:
          "نعم. نساعد في التركيب وضبط الماكينة بشكل صحيح في مصنعك، وندعمك بعد ذلك بقطع الغيار والصيانة. تشغيل ماكينة صناعة أو تغليف ليس أمرًا فوريًا، لذا نبقى معك حتى تعمل كما ينبغي.",
      },
      {
        question: "أين تقعون وهل توصّلون في جميع أنحاء باكستان؟",
        answer:
          "ورشتنا في منطقة SITE الصناعية في كراتشي. نخدم العملاء في جميع أنحاء باكستان، ويمكننا ترتيب التوصيل والتركيب أينما كان مصنعك.",
      },
    ],
  },

  about: {
    metaTitle: "من نحن | Civic Tobacco Machinery",
    metaDescription:
      "عن Civic Tobacco Machinery، موردي ماكينات السجائر والتبغ في باكستان. من نحن، وما نؤمن به، وكيف ندعم مصنعك بماكينات جديدة ومستعملة.",
    hero: {
      eyebrow: "من نحن",
      title: "ماكينات السجائر والتبغ، مدعومة بمن يعرفونها",
      intro:
        "أمضت Civic Tobacco Machinery سنوات في مساعدة المصانع في جميع أنحاء باكستان على بناء خطوط سجائرها وتوسيعها وصيانتها.",
    },
    whoHeading: "من نحن",
    who: [
      "نحن مورّد لماكينات السجائر والتبغ مقرّه باكستان. على مرّ السنين تعاملنا مع كل شيء، من ورش صغيرة تخطو أولى خطواتها في إنتاج السجائر إلى مصانع راسخة تضيف خطًا ثانيًا أو ثالثًا. تشكّل هذه الخبرة طريقة عملنا: نستمع أولًا، ونفهم ما تحتاجه فعلًا، ثم نرشدك إلى الماكينة المناسبة.",
      "تغطي مجموعتنا الخط بالكامل: ماكينات الصناعة التي تشكّل العود، وماكينات الفلاتر، وماكينات التغليف للعلب الصلبة واللينة، وماكينات اللف والتعبئة، وماكينات التبغ التي تغذّي الإنتاج. نتعامل بالمعدات الجديدة والمُجددة بعناية، فهناك خيار معقول مهما كانت ميزانيتك.",
    ],
    howHeading: "كيف نعمل",
    how: [
      "شراء الماكينة نصف القصة فقط. فماكينة الصناعة أو التغليف يجب تركيبها بشكل صحيح وضبطها بدقة وإبقاؤها تعمل، وهنا يختفي كثير من المورّدين. نحن لا نفعل ذلك. نساعدك على إدخال الماكينة إلى مصنعك وتشغيلها كما ينبغي، ونبقى متاحين بعد ذلك لقطع الغيار والصيانة.",
      "ولأن مقرّنا هنا مباشرة في منطقة SITE الصناعية، فهذا الدعم محلي حقًا. عندما يحتاج شيء إلى اهتمام، فأنت تتحدث مع أناس في المدينة نفسها، لا تنتظر مورّدًا في بلد آخر ومنطقة زمنية أخرى.",
    ],
    brandsHeading: "العلامات التي نثق بها",
    brands:
      "نركّز على أسماء مجرّبة: Molins لماكينات الصناعة والفلاتر، وHLP وSASIB للتغليف واللف، وعائلة Protos للخطوط عالية السرعة. نختارها لا من أجل الاسم بل لأن قطع غيارها وخبراتها متوفرة بسهولة، وهو ما يبقي الماكينة مربحة لسنوات.",
    glance: {
      heading: "لمحة سريعة",
      basedIn: "المقر",
      basedInValue: "SITE، كراتشي، باكستان",
      supply: "نوفّر",
      supplyValue: "ماكينات تبغ جديدة ومستعملة",
      serve: "نخدم",
      serveValue: "باكستان بأكملها",
      call: "اتصال / واتساب",
      talk: "تحدّث معنا",
    },
    valuesEyebrow: "ما نؤمن به",
    valuesHeading: "طريقتنا في العمل",
    values: [
      {
        title: "الصدق أولًا",
        text: "نخبرك بالحالة الحقيقية للماكينة وما يمكنها فعله. فالبيع الذي يتركك غير راضٍ ليس بيعًا على الإطلاق.",
      },
      {
        title: "ماكينات نشغّلها نحن أنفسنا",
        text: "نتعامل بعلامات وموديلات نثق بها، تلك ذات التوفّر الجيد لقطع الغيار والعمر التشغيلي الطويل.",
      },
      {
        title: "دعم يبقى",
        text: "لا ينتهي عملنا عند التسليم. نساعد في التركيب والضبط وقطع الغيار والصيانة على المدى الطويل.",
      },
      {
        title: "قيمة عادلة",
        text: "جديدة كانت أم مُجددة، نساعدك على الحصول على الماكينة المناسبة لميزانيتك دون التقصير فيما يهم.",
      },
    ],
    ctaTitle: "لنتحدّث عن خطّك",
    ctaText:
      "سواء كنت تبدأ أو توسّع، أخبرنا بما تريد إنتاجه وسنساعدك على الوصول إليه.",
  },

  contact: {
    metaTitle: "اتصل بنا | Civic Tobacco Machinery",
    metaDescription:
      "تواصل مع Civic Tobacco Machinery في باكستان. اتصل أو راسلنا عبر واتساب أو أرسل طلبًا حول ماكينات تصنيع السجائر وتغليفها ولفّها والماكينات المستعملة. ورشة في SITE، كراتشي.",
    hero: {
      eyebrow: "اتصل بنا",
      title: "تواصل مع Civic Tobacco Machinery",
      intro:
        "أخبرنا بما تبحث عنه وسنعاود التواصل معك في يوم العمل نفسه. اتصل أو راسلنا عبر واتساب أو البريد الإلكتروني أو أرسل النموذج أدناه.",
    },
    directHeading: "تواصل معنا مباشرة",
    directText:
      "أسرع طريقة للحصول على إجابة واضحة حول ماكينة وحالتها وسعرها وتوفّرها هي مراسلتنا عبر واتساب أو الاتصال بنا.",
    rows: {
      visit: "زُر ورشتنا",
      call: "اتصل بنا",
      whatsapp: "واتساب",
      whatsappValue: "راسلنا على",
      email: "البريد الإلكتروني",
      hours: "ساعات العمل",
      hoursValue: "الاثنين – السبت، 09:00 – 18:00",
      hoursClosed: "مغلق يوم الأحد",
    },
    openInMaps: "افتح في خرائط جوجل",
    formHeading: "إرسال طلب",
    formIntro:
      "املأ هذا النموذج وسنعاود التواصل معك بسرعة. تساعدنا الحقول المطلوبة على تقديم إجابة دقيقة.",
    form: {
      name: "اسمك",
      namePlaceholder: "مثال: أحمد خان",
      phone: "الهاتف / واتساب",
      phonePlaceholder: "مثال: 0300 1234567",
      email: "البريد الإلكتروني",
      emailOptional: "(اختياري)",
      emailPlaceholder: "you@company.com",
      interest: "الماكينة التي تهمّك",
      interestPlaceholder: "مثال: ماكينة تغليف HLP-200",
      message: "رسالتك",
      messagePlaceholder: "أخبرنا بالمقاس والإنتاج المستهدف وأي تفاصيل.",
      submit: "إرسال الطلب",
      sending: "جارٍ الإرسال…",
      successTitle: "شكرًا لك!",
      successText:
        "تم إرسال طلبك. سيعاود فريقنا التواصل معك قريبًا، عادةً في يوم العمل نفسه.",
      errorText:
        "عذرًا، حدث خطأ ما أثناء إرسال رسالتك. يُرجى المحاولة مرة أخرى أو",
      errorWhatsApp: "راسلنا عبر واتساب",
      footnote:
        "تصل بياناتك مباشرة إلى فريقنا، ونردّ عادةً في يوم العمل نفسه. تفضّل الدردشة؟",
      footnoteChat: "واتساب",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "ماكينات التصنيع",
      title: "ماكينات تصنيع السجائر في الشرق الأوسط",
      description:
        "ماكينات تصنيع السجائر في باكستان: ماكينات صناعة Molins، وماكينات الفلاتر، وماكينات التبغ. خطوط جديدة ومُجددة من Civic Tobacco Machinery.",
      intro: [
        "تبدأ السيجارة الجيدة قبل العلبة بوقت طويل. تبدأ بماكينة تضع عودًا متساويًا، وخط فلاتر يقطع بنظافة، وماكينات تبغ تغذّي الإنتاج بأكمله. توفّر Civic Tobacco Machinery ماكينات تصنيع السجائر في باكستان في المجالات الثلاثة.",
        "نتعامل مع ماكينات صناعة Molins، وماكينات فلاتر KDF وPM، والمغذّيات والقاطعات وأجهزة الاسترجاع التي تدعمها. أخبرنا بالعلامات التي تشغّلها والإنتاج الذي تحتاجه، وسنساعدك على بناء خط يحافظ على سرعته وجودته يومًا بعد يوم.",
      ],
      faqs: [
        {
          question: "ما ماكينات تصنيع السجائر التي توفّرونها؟",
          answer:
            "نوفّر خط الصناعة الكامل: ماكينات Molins Mark 8 وMark 9 وMark 9.5 وماكينات Hauni Protos، إضافة إلى ماكينات فلاتر KDF وMolins ومغذّيات التبغ وقاطعاته وأجهزة استرجاعه التي تدعمها.",
        },
        {
          question: "كم عدد السجائر التي تنتجها الماكينات في الدقيقة؟",
          answer:
            "حسب الموديل، تعمل ماكيناتنا من نحو 3,000 حتى 8,000 سيجارة في الدقيقة، لتتمكن من مواءمة الماكينة مع إنتاجك المستهدف.",
        },
        {
          question: "هل توفّرون ماكينات جديدة أم مُجددة؟",
          answer:
            "كلاهما. تُفحص ماكينات Molins وHauni المُجددة بالكامل وتُصان وتُختبر قبل البيع، وتقدّم قيمة قوية للمصانع النامية.",
        },
        {
          question: "هل تساعدون في مواءمة ماكينة الصناعة مع خط الفلاتر المناسب؟",
          answer:
            "نعم. نتأكد من أن ماكينة الصناعة وماكينة الفلاتر تعملان بتناغم ليبقى الخط بأكمله متوازنًا. أخبرنا بعلاماتك وإنتاجك المستهدف وسنوصي لك بالإعداد المناسب.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "ماكينات التغليف",
      title: "ماكينات تغليف السجائر في الشرق الأوسط",
      description:
        "ماكينات تغليف السجائر في باكستان: خطوط HLP وSASIB للعلب الصلبة واللينة من 180 إلى 225 علبة في الدقيقة. تُورّد وتُركّب وتُدعم من Civic Tobacco Machinery.",
      intro: [
        "خط التغليف هو المكان الذي يتخذ فيه منتجك شكله النهائي، لذا يجب أن يكون ثابتًا ونظيفًا وسهل التشغيل وردية بعد وردية. في Civic Tobacco Machinery نوفّر ماكينات تغليف السجائر في باكستان المختارة لذلك بالضبط: إنتاج موثوق وعلب تبدو متماثلة في كل مرة.",
        "تغطي مجموعتنا صيغ العلب الصلبة واللينة، من 180 إلى 225 علبة في الدقيقة، مع خيارات جديدة ومُجددة بعناية. سواء كنت تُنشئ خطًا جديدًا أو تضيف طاقة إلى خط قائم، نساعدك على مواءمة الماكينة المناسبة مع حجمك وميزانيتك والعلامات التي تنتجها.",
      ],
      faqs: [
        {
          question: "ما الفرق بين ماكينات العلب الصلبة واللينة؟",
          answer:
            "تعمل العلب الصلبة (ذات الغطاء المفصلي) على ماكينات من نوع HLP، بينما تعمل العلب اللينة (رقائق مطوية وغلاف خارجي مطبوع) على ماكينات من نوع SASIB. نوفّر النوعين ونساعدك على مواءمة الماكينة مع صيغة العلبة التي تبيعها علاماتك فعلًا.",
        },
        {
          question: "ما سرعات التغليف التي تقدّمونها؟",
          answer:
            "تعمل ماكينات تغليف السجائر لدينا من نحو 180 حتى 225 علبة في الدقيقة. اختر سرعة تناسب طلبك الفعلي في الوردية مع هامش للنمو، بدلًا من الدفع مقابل طاقة معطّلة.",
        },
        {
          question: "هل تبيعون ماكينات تغليف جديدة أم مُجددة؟",
          answer:
            "كلاهما. تُفحص كل ماكينة تغليف HLP أو SASIB مستعملة وتُصان وتُختبر قبل البيع، فيمكن لماكينة مُجددة جيدة أن تعمل لسنوات بجزء من سعر الجديدة.",
        },
        {
          question: "هل تركّبون الماكينة وتوفّرون قطع الغيار؟",
          answer:
            "نعم. نركّب الماكينة ونضبطها وندعم HLP وSASIB بقطع غيار متوفرة على نطاق واسع وبالصيانة. راسلنا عبر واتساب على ‎+92 301 1111184‎ للسعر والتوفّر الحالي.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "ماكينات اللف",
      title: "ماكينات لفّ السجائر في الشرق الأوسط",
      description:
        "ماكينات لفّ السجائر في باكستان: ماكينات اللف الخارجي والتعبئة في كراتين وماكينات اللف بالسيلوفان التي تُحكم إغلاق علبك بنظافة. بيع وقطع غيار وصيانة من Civic Tobacco Machinery.",
      intro: [
        "الغلاف هو آخر ما يراه عميلك قبل فتح العلبة، ولهذا يهمّ الإغلاق النظيف والمحكم كثيرًا. توفّر Civic Tobacco Machinery ماكينات لفّ السجائر في باكستان التي تمنحك تشطيبًا نظيفًا للفيلم وشريط فتح مستقيمًا وعلبًا تبقى طازجة على الرف.",
        "من ماكينات اللف الخارجي للعلبة الواحدة إلى لفّ الكراتين وماكينات التعبئة في الصناديق، نغطي المجموعة كاملة. تُفحص كل ماكينة نبيعها وتُضبط وتُسلَّم جاهزة للعمل، مع قطع غيار وصيانة يمكنك اللجوء إليها عند الحاجة.",
      ],
      faqs: [
        {
          question: "ما الفرق بين ماكينة اللف الخارجي وماكينة التعبئة في الصناديق؟",
          answer:
            "تُحكم ماكينة اللف الخارجي إغلاق كل علبة بفيلم سيلوفان مع شريط فتح، بينما تجمّع ماكينة التعبئة (الكرتنة) العلب النهائية في كراتين أو صناديق. تستخدم معظم الخطوط كلتيهما، واحدة تلو الأخرى.",
        },
        {
          question: "ما ماكينات اللف والتعبئة التي توفّرونها؟",
          answer:
            "نوفّر ماكينات لف وتعبئة من Molins وSASIB، بما فيها ماكينة لف العلب CP1 وماكينة اللف الخارجي «Naked» وماكينات التعبئة من Molins وSASIB، لخطوط العلب الصلبة واللينة.",
        },
        {
          question: "هل تقدّمون ماكينات لف جديدة أم مُجددة؟",
          answer:
            "تتوفر وحدات جديدة ومُجددة بعناية على السواء. تُفحص كل ماكينة مستعملة وتُضبط وتُسلَّم جاهزة للعمل.",
        },
        {
          question: "هل توفّرون التركيب وقطع الغيار؟",
          answer:
            "نعم، التركيب والضبط وقطع الغيار والصيانة كلها جزء من عملنا. تواصل معنا عبر واتساب على ‎+92 301 1111184‎ للحصول على عرض سعر.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "ماكينات التصنيع",
      title: "ماكينات صناعة فلاتر السجائر في الشرق الأوسط",
      description:
        "ماكينات صناعة فلاتر السجائر في باكستان: Molins KDF وMolins PM وماكينات الأنابيب المجوّفة. خطوط أعواد الفلاتر تُورّد وتُدعم من Civic Tobacco Machinery.",
      intro: [
        "الفلتر الجيد يفعل أكثر من إنهاء السيجارة، فهو يتحكم في السحب والصلابة وإحساس التدخين بأكمله. توفّر Civic Tobacco Machinery ماكينات صناعة فلاتر السجائر في باكستان التي تُنتج أعوادًا متساوية يمكن لماكينة صناعتك الاعتماد عليها.",
        "لدينا ماكينات فلاتر Molins KDF وMolins PM إلى جانب ماكينات الأنابيب المجوّفة للصيغ الخاصة. مهما كان طول الفلتر أو نوعه الذي تنتجه، سنساعدك على اختيار خط يوائم سرعة ماكينات صناعتك.",
      ],
      faqs: [
        {
          question: "ما ماكينات صناعة الفلاتر التي توفّرونها؟",
          answer:
            "نوفّر ماكينات فلاتر Hauni KDF-1 وKDF-2، وماكينات فلاتر Molins PM، وماكينات الأنابيب المجوّفة للصيغ الخاصة، للمصانع التي تُنتج أعواد الفلاتر.",
        },
        {
          question: "هل يمكن لماكينة الفلاتر مجاراة سرعة ماكينة صناعتي؟",
          answer:
            "نعم. نساعدك على اختيار خط فلاتر يوائم سرعة ماكينات صناعتك ليعملا بتناغم ويبقى الخط متوازنًا.",
        },
        {
          question: "هل تقدّمون ماكينات فلاتر جديدة ومُجددة؟",
          answer:
            "كلاهما. تُفحص كل ماكينة KDF أو PM مُجددة وتُصان وتُختبر قبل البيع.",
        },
        {
          question: "هل تركّبون ماكينات الفلاتر وتدعمونها؟",
          answer:
            "نعم، التركيب وقطع الغيار والصيانة مشمولة. راسلنا عبر واتساب على ‎+92 301 1111184‎ للسعر والتوفّر.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "ماكينات التصنيع",
      title: "ماكينات تقطيع وتغذية واسترجاع التبغ في الشرق الأوسط",
      description:
        "ماكينات التبغ في باكستان: مغذّيات وقاطعات وأجهزة استرجاع ومسطّحات عروق تُبقي إنتاجك الأولي والثانوي يعمل. تُورّد من Civic Tobacco Machinery.",
      intro: [
        "خلف كل ماكينة صناعة وتغليف مجموعة من الماكينات الأهدأ تؤدي العمل الشاق: تغذية التبغ وتقطيعه وإنقاذ ما كان سيُهدر. توفّر Civic Tobacco Machinery ماكينات التبغ في باكستان التي تُبقي هذا الجانب من الإنتاج يتحرك.",
        "تعمل المغذّيات والقاطعات وأجهزة الاسترجاع ومسطّحات العروق معًا لضمان إمداد ثابت لخطّك وتقليل الهدر. نساعدك على تركيب الوحدات المناسبة حول ماكينات الصناعة والتغليف التي تشغّلها بالفعل.",
      ],
      faqs: [
        {
          question: "ماذا تفعل مغذّيات التبغ وقاطعاته وأجهزة استرجاعه؟",
          answer:
            "تُمدّ المغذّيات ماكينات الصناعة بالتبغ، وتقطع القاطعات الورق إلى مقاس الإنتاج، وتستعيد أجهزة الاسترجاع التبغ من السجائر المرفوضة لإعادة استخدامه، ما يُبقي الإنتاج الأولي والثانوي يعمل بسلاسة.",
        },
        {
          question: "هل يمكن لهذه المعدات تقليل هدر التبغ؟",
          answer:
            "نعم. يستعيد جهاز الاسترجاع تبغًا صالحًا للاستخدام من السجائر المرفوضة، ما يقلّل الهدر ويخفّض تكاليف التشغيل مع الوقت.",
        },
        {
          question: "ما العلامات التي توفّرونها؟",
          answer:
            "نوفّر ماكينات مدعومة جيدًا مثل قاطعة التبغ Hauni KT-400، إضافة إلى مغذّيات التبغ وأجهزة استرجاع السجائر ومسطّحات العروق.",
        },
        {
          question: "هل الماكينات جديدة أم مُجددة، وهل تدعمونها؟",
          answer:
            "تتوفر وحدات جديدة ومُجددة، كلها مُختبرة قبل البيع، مع التركيب وقطع الغيار والصيانة. تواصل معنا عبر واتساب على ‎+92 301 1111184‎.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "ماكينات صناعة السجائر في الشرق الأوسط",
    intro:
      "ماكينة الصناعة هي قلب أي مصنع سجائر. تحوّل التبغ المقطّع والورق إلى عود جاهز، آلاف المرات في الدقيقة، دون انقطاع في الجودة.",
    seeAll: "عرض الكل ←",
  },
  blog: {
    eyebrow: "المدوّنة",
    indexTitle: "أدلة ونصائح حول ماكينات السجائر",
    indexIntro:
      "مقالات واضحة وعملية تساعدك على اختيار ماكينات السجائر والتبغ وشرائها وتشغيلها، كتبها أناس يعملون مع هذه الماكينات كل يوم.",
    metaTitle: "المدوّنة | Civic Tobacco Machinery",
    metaDescription:
      "أدلة عملية حول ماكينات السجائر والتبغ: اختيار ماكينات التغليف، ومقارنة ماكينات الصناعة، وشراء الماكينات المستعملة في باكستان. من Civic Tobacco Machinery.",
    readArticle: "اقرأ المقال ←",
    minRead: "دقيقة قراءة",
    tags: "الوسوم:",
    backToAll: "→ العودة إلى جميع المقالات",
    keepReading: "تابع القراءة",
    dateLocale: "ar",
  },
  product: {
    keyFeatures: "أبرز الميزات",
    specifications: "المواصفات الفنية",
    description: "الوصف",
    bestSuitedFor: "الأنسب لـ",
    call: "اتصل",
    interested: "مهتم بهذه الماكينة؟",
    askAbout: "استفسر عن",
    enquiryText:
      "أرسل لنا رسالة قصيرة للسعر والتوفّر الحالي والحالة. سنخبرك أيضًا بالماكينات المتوائمة لإكمال خطّك.",
    related: "ماكينات ذات صلة",
    thumbs: { front: "منظر أمامي", detail: "تفصيل", operation: "أثناء التشغيل" },
    waMessage: (name) =>
      `مرحبًا، أنا مهتم بـ ${name}. يُرجى إرسال السعر والتوفّر.`,
  },
};

/* ---------------------------------------------------------------------------
 * Polish (pl-PL) — first-pass professional translation, native review pending.
 * ------------------------------------------------------------------------- */

const pl: Dictionary = {
  nav: {
    about: "O nas",
    making: "Produkcja papierosów",
    packing: "Pakowanie",
    filter: "Maszyny do filtrów",
    wrappers: "Owijarki i pakowaczki",
    cutter: "Krajanie/podawanie/odzysk",
    contact: "Kontakt",
  },
  header: {
    tagline: "Producenci maszyn do papierosów i tytoniu w Polsce",
    call: "Zadzwoń",
    whatsapp: "WhatsApp",
    region: "Polska",
  },
  megaMenu: {
    prompt: "Szukasz konkretnej maszyny lub całej linii?",
    viewAll: "Zobacz wszystkie maszyny produkcyjne →",
  },
  productCard: { viewDetails: "Zobacz szczegóły" },
  breadcrumbHome: "Strona główna",
  faqHeading: "Najczęściej zadawane pytania",
  emptyNote:
    "Maszyny z tej kategorii są dodawane regularnie. Skontaktuj się z nami, aby poznać aktualną dostępność.",
  cta: {
    title: "Nie wiesz, jakiej maszyny potrzebujesz?",
    text: "Podaj nam format, docelową wydajność i budżet. Polecimy odpowiednią maszynę — nową lub regenerowaną — i pomożemy ją uruchomić.",
    whatsapp: "WhatsApp",
    enquiry: "Wyślij zapytanie",
  },
  footer: {
    blurb:
      "Dostawcy nowych i używanych maszyn do produkcji, pakowania i owijania papierosów w Pakistanie, z montażem, częściami zamiennymi i serwisem, na których możesz polegać.",
    machines: "Maszyny",
    manufacturing: "Produkcja",
    reachUs: "Kontakt",
    ourBlog: "Nasz blog",
    hours: "Pon–Sob, 09:00–18:00",
    rights: "Wszelkie prawa zastrzeżone.",
    links: { home: "Strona główna", about: "O nas", blog: "Blog", contact: "Kontakt" },
    labels: {
      "/cigarette-packing-machines": "Maszyny pakujące",
      "/cigarette-box-wrapping-machines": "Maszyny owijające",
      "/cigarette-manufacturing-machines": "Maszyny produkcyjne",
      "/cigarette-making-machines": "Maszyny do papierosów",
      "/cigarette-filter-making-machines": "Maszyny do produkcji filtrów",
      "/cutter-feeder-reclaimer": "Maszyny do tytoniu",
    },
  },
  switcher: { label: "Język" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Maszyny do papierosów z Polski",
    metaDescription:
      "Civic Tobacco Machinery dostarcza maszyny do produkcji, pakowania i owijania papierosów w Pakistanie. Nowe i używane maszyny tytoniowe, linie do filtrów, części zamienne i pełne wsparcie przy montażu.",
    hero: {
      h1: "Szukasz maszyn do papierosów i tytoniu z Polski?",
      lead: "Jesteś we właściwym miejscu. Od pierwszego wałka po gotowy karton, Civic Tobacco Machinery wyposaży Cię w nowe i regenerowane linie produkcyjne, filtrowe, pakujące i owijające — zamontowane, wyregulowane i wsparte częściami zamiennymi oraz serwisem, na których możesz polegać.",
      getQuote: "Poproś o wycenę",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Przeglądaj według typu maszyny",
    browse: {
      packing: "Maszyny pakujące do papierosów",
      wrapping: "Maszyny owijające do papierosów",
      making: "Maszyny produkcyjne do papierosów",
      used: "Używane maszyny do papierosów",
    },
    viewRange: "Zobacz ofertę →",
    about: {
      eyebrow: "O nas",
      h2: "Pokolenia inżynierskiej doskonałości w maszynach tytoniowych",
      lead: "Dumny rodzinny biznes ojca i syna, obecnie w trzecim pokoleniu, z ponad 35-letnim praktycznym doświadczeniem w branży tytoniowej.",
      p1: "Od dziesięcioleci nasza rodzina działa w jednej dziedzinie — maszyn tytoniowych. To, co zaczęło się jako niewielka działalność handlowa, wyrosło na zaufaną, wielopokoleniową markę, na której nowe i uznane firmy papierosowe w całym Pakistanie polegają przy budowie i eksploatacji swoich linii.",
      p2: "Jesteśmy wyspecjalizowanymi producentami maszyn tytoniowych i oferujemy kompletne rozwiązanie z jednego źródła. Od maszyn produkcyjnych i filtrowych po pakowaczki i owijarki, pomagamy dobrać właściwy sprzęt, zobaczyć go w pracy przed zakupem oraz zamontować i wyregulować go w Twoim zakładzie. Zapewniamy też bezpłatne pokazy i szkolenia dla Twoich techników, aby Twój zespół czuł się pewnie przy maszynie od pierwszego dnia.",
      bullets: [
        "Rodzinny biznes od wielu pokoleń",
        "Maszyny nowe i regenerowane",
        "Pełna linia, od produkcji po pakowanie",
        "Pokazy i szkolenia techników",
      ],
      more: "Więcej o nas",
    },
    featured: {
      eyebrow: "Dostępne i popularne",
      h2: "Wybrane maszyny",
      viewAll: "Zobacz wszystkie maszyny →",
    },
    why: {
      eyebrow: "Dlaczego Civic Tobacco Machinery",
      h2: "Właściwa maszyna, przygotowana na lata",
      reasons: [
        {
          title: "Maszyny, które nie zawodzą",
          text: "Stawiamy na sprawdzone marki z łatwą dostępnością części, aby Twoja linia pozostała wydajna zmiana po zmianie.",
        },
        {
          title: "Uczciwe raporty o stanie",
          text: "Każda używana maszyna jest sprawdzana, serwisowana i testowana. Otrzymujesz rzetelny opis jej stanu, bez niespodzianek.",
        },
        {
          title: "Wsparcie dla całej linii",
          text: "Od produkcji po pakowanie pomagamy dobrać maszyny tak, aby nic nie stało się wąskim gardłem, a także montujemy je i serwisujemy.",
        },
        {
          title: "Lokalna pomoc na miejscu",
          text: "Mamy siedzibę tutaj, w Pakistanie. Gdy potrzebujesz części lub technika, pomoc jest blisko, a nie na innym kontynencie.",
        },
      ],
    },
    ranges: {
      making: "Maszyny do papierosów",
      packing: "Maszyny pakujące do papierosów",
      filter: "Maszyny do produkcji filtrów papierosowych",
      wrapping: "Maszyny owijające do papierosów",
    },
    carousel: {
      eyebrow: "Nasz asortyment",
      heading: "Maszyny do papierosów na sprzedaż",
      viewAllPrefix: "Zobacz wszystkie: ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Galeria",
      heading: "Civic Tobacco Machinery w obrazach",
      text: "Chwile z międzynarodowych targów tytoniowych oraz spotkań z naszymi partnerami i klientami na całym świecie.",
    },
    local: {
      eyebrow: "Obsługujemy cały Pakistan",
      h2: "Twój partner w zakresie maszyn tytoniowych w Pakistanie",
      text: "Siedziba w strefie przemysłowej SITE oznacza, że jesteśmy blisko fabryk, które obsługujemy. Gdy potrzebujesz części, technika lub uczciwej porady dotyczącej maszyny, masz do czynienia z ludźmi z tego samego miasta, a nie z dostawcą z innego kontynentu.",
      bullets: [
        "Szybkie lokalne wsparcie i części zamienne",
        "Montaż i uruchomienie w Twojej fabryce",
        "Maszyny nowe i regenerowane na każdy budżet",
      ],
      visitHeading: "Odwiedź nas lub zadzwoń",
      directions: "Dojazd i kontakt",
    },
    faqHeading: {
      eyebrow: "Częste pytania",
      h2: "Najczęściej zadawane pytania",
    },
    faqs: [
      {
        question: "Czy sprzedajecie w Pakistanie zarówno nowe, jak i używane maszyny do papierosów?",
        answer:
          "Tak. Dostarczamy maszyny nowe oraz starannie regenerowane używane maszyny do papierosów i tytoniu. Każda używana maszyna jest przed sprzedażą sprawdzana, serwisowana i testowana oraz dostarczana z uczciwym raportem o stanie, abyś dokładnie wiedział, co kupujesz.",
      },
      {
        question: "Jakimi markami maszyn produkcyjnych do papierosów się zajmujecie?",
        answer:
          "Pracujemy głównie z dobrze wspieranymi markami, takimi jak Molins do maszyn produkcyjnych i filtrowych oraz HLP i SASIB do pakowania i owijania. Wybieramy je, ponieważ części i przeszkoleni technicy są łatwo dostępni, co utrzymuje Twoją linię w ruchu przez lata.",
      },
      {
        question: "Czy montujecie maszyny i dostarczacie części zamienne?",
        answer:
          "Tak. Pomagamy w montażu i prawidłowym ustawieniu maszyny w Twoim zakładzie, a następnie wspieramy Cię częściami zamiennymi i serwisem. Uruchomienie maszyny produkcyjnej lub pakującej nie jest zadaniem typu „podłącz i działaj”, dlatego pozostajemy zaangażowani, aż zacznie działać tak, jak powinna.",
      },
      {
        question: "Gdzie się znajdujecie i czy dostarczacie na terenie całego Pakistanu?",
        answer:
          "Nasz warsztat znajduje się w strefie przemysłowej SITE w Karaczi. Obsługujemy klientów w całym Pakistanie i możemy zorganizować dostawę oraz montaż wszędzie tam, gdzie znajduje się Twoja fabryka.",
      },
    ],
  },

  about: {
    metaTitle: "O nas | Civic Tobacco Machinery",
    metaDescription:
      "O Civic Tobacco Machinery, dostawcy maszyn do papierosów i tytoniu w Pakistanie. Kim jesteśmy, co jest dla nas ważne i jak wspieramy Twoją fabrykę nowymi i używanymi maszynami.",
    hero: {
      eyebrow: "O nas",
      title: "Maszyny do papierosów i tytoniu, wsparte przez ludzi, którzy je znają",
      intro:
        "Civic Tobacco Machinery od lat pomaga fabrykom w całym Pakistanie budować, rozwijać i utrzymywać ich linie papierosowe.",
    },
    whoHeading: "Kim jesteśmy",
    who: [
      "Jesteśmy dostawcą maszyn do papierosów i tytoniu z siedzibą w Pakistanie. Przez lata pracowaliśmy ze wszystkim — od małych warsztatów stawiających pierwsze kroki w produkcji papierosów po uznane fabryki dodające drugą lub trzecią linię. To doświadczenie kształtuje nasz sposób pracy: najpierw słuchamy, rozumiemy, czego naprawdę potrzebujesz, a następnie wskazujemy pasującą maszynę.",
      "Nasza oferta obejmuje całą linię: maszyny produkcyjne formujące wałek, maszyny filtrowe, maszyny pakujące do opakowań twardych i miękkich, maszyny owijające i pakujące w kartony oraz maszyny tytoniowe zasilające produkcję. Zajmujemy się zarówno nowym, jak i starannie regenerowanym sprzętem, więc znajdzie się rozsądna opcja niezależnie od budżetu.",
    ],
    howHeading: "Jak pracujemy",
    how: [
      "Zakup maszyny to tylko połowa historii. Maszynę produkcyjną lub pakującą trzeba prawidłowo zamontować, właściwie ustawić i utrzymać w ruchu, i właśnie tutaj wielu dostawców znika. My nie. Pomagamy wprowadzić maszynę do Twojego zakładu i uruchomić ją tak, jak należy, a potem pozostajemy dostępni w kwestii części i serwisu.",
      "Ponieważ mamy siedzibę tutaj, w strefie przemysłowej SITE, to wsparcie jest naprawdę lokalne. Gdy coś wymaga uwagi, rozmawiasz z ludźmi z tego samego miasta, a nie czekasz na dostawcę w innym kraju i innej strefie czasowej.",
    ],
    brandsHeading: "Marki, którym ufamy",
    brands:
      "Skupiamy się na sprawdzonych nazwach: Molins do maszyn produkcyjnych i filtrowych, HLP i SASIB do pakowania i owijania oraz rodzina Protos do linii o wyższej prędkości. Wybieramy je nie ze względu na markę, lecz dlatego, że ich części i wiedza są łatwo dostępne — a to właśnie sprawia, że maszyna zarabia na siebie przez lata.",
    glance: {
      heading: "W skrócie",
      basedIn: "Siedziba w",
      basedInValue: "SITE, Karaczi, Pakistan",
      supply: "Dostarczamy",
      supplyValue: "Nowe i używane maszyny tytoniowe",
      serve: "Obsługujemy",
      serveValue: "Cały Pakistan",
      call: "Telefon / WhatsApp",
      talk: "Porozmawiaj z nami",
    },
    valuesEyebrow: "Co jest dla nas ważne",
    valuesHeading: "Nasz sposób prowadzenia interesów",
    values: [
      {
        title: "Uczciwość przede wszystkim",
        text: "Mówimy Ci o rzeczywistym stanie maszyny i o tym, co potrafi. Sprzedaż, która pozostawia Cię niezadowolonym, to w ogóle nie sprzedaż.",
      },
      {
        title: "Maszyny, które sami byśmy eksploatowali",
        text: "Zajmujemy się markami i modelami, którym ufamy — tymi o dobrej dostępności części i długiej żywotności.",
      },
      {
        title: "Wsparcie, które zostaje",
        text: "Nasza praca nie kończy się na dostawie. Pomagamy przy montażu, ustawieniu, częściach i serwisie w długiej perspektywie.",
      },
      {
        title: "Uczciwa wartość",
        text: "Nowa czy regenerowana — pomagamy zdobyć właściwą maszynę w ramach Twojego budżetu, bez oszczędzania na tym, co się liczy.",
      },
    ],
    ctaTitle: "Porozmawiajmy o Twojej linii",
    ctaText:
      "Czy zaczynasz, czy się rozwijasz — powiedz nam, co chcesz produkować, a pomożemy Ci to osiągnąć.",
  },

  contact: {
    metaTitle: "Kontakt | Civic Tobacco Machinery",
    metaDescription:
      "Skontaktuj się z Civic Tobacco Machinery w Pakistanie. Zadzwoń, napisz na WhatsApp lub wyślij zapytanie o maszyny do produkcji, pakowania, owijania papierosów oraz maszyny używane. Warsztat w SITE, Karaczi.",
    hero: {
      eyebrow: "Kontakt",
      title: "Skontaktuj się z Civic Tobacco Machinery",
      intro:
        "Powiedz nam, czego szukasz, a odpowiemy tego samego dnia roboczego. Zadzwoń, napisz na WhatsApp lub e-mail albo wyślij formularz poniżej.",
    },
    directHeading: "Skontaktuj się z nami bezpośrednio",
    directText:
      "Najszybszym sposobem na uzyskanie jasnej odpowiedzi o maszynie, jej stanie, cenie lub dostępności jest napisanie do nas na WhatsApp lub telefon.",
    rows: {
      visit: "Odwiedź nasz warsztat",
      call: "Zadzwoń do nas",
      whatsapp: "WhatsApp",
      whatsappValue: "Napisz do nas pod",
      email: "E-mail",
      hours: "Godziny otwarcia",
      hoursValue: "Poniedziałek – sobota, 09:00 – 18:00",
      hoursClosed: "Niedziela nieczynne",
    },
    openInMaps: "Otwórz w Mapach Google",
    formHeading: "Wyślij zapytanie",
    formIntro:
      "Wypełnij to, a szybko się odezwiemy. Pola oznaczone jako wymagane pomagają nam udzielić dokładnej odpowiedzi.",
    form: {
      name: "Twoje imię i nazwisko",
      namePlaceholder: "np. Ahmed Khan",
      phone: "Telefon / WhatsApp",
      phonePlaceholder: "np. 0300 1234567",
      email: "E-mail",
      emailOptional: "(opcjonalnie)",
      emailPlaceholder: "ty@firma.com",
      interest: "Maszyna, która Cię interesuje",
      interestPlaceholder: "np. maszyna pakująca HLP-200",
      message: "Twoja wiadomość",
      messagePlaceholder: "Podaj format, docelową wydajność i wszelkie szczegóły.",
      submit: "Wyślij zapytanie",
      sending: "Wysyłanie…",
      successTitle: "Dziękujemy!",
      successText:
        "Twoje zapytanie zostało wysłane. Nasz zespół wkrótce się odezwie, zwykle tego samego dnia roboczego.",
      errorText:
        "Przepraszamy, coś poszło nie tak przy wysyłaniu wiadomości. Spróbuj ponownie lub",
      errorWhatsApp: "napisz do nas na WhatsApp",
      footnote:
        "Twoje dane trafiają bezpośrednio do naszego zespołu — odpowiadamy zwykle tego samego dnia roboczego. Wolisz czat?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Maszyny produkcyjne",
      title: "Maszyny produkcyjne do papierosów w Polsce",
      description:
        "Maszyny produkcyjne do papierosów w Pakistanie: maszyny produkcyjne Molins, maszyny filtrowe i maszyny tytoniowe. Nowe i regenerowane linie od Civic Tobacco Machinery.",
      intro: [
        "Dobry papieros powstaje na długo przed opakowaniem. Zaczyna się od maszyny układającej równy wałek, linii filtrowej tnącej czysto oraz maszyn tytoniowych zasilających całą produkcję. Civic Tobacco Machinery dostarcza maszyny produkcyjne do papierosów w Pakistanie we wszystkich trzech obszarach.",
        "Zajmujemy się maszynami produkcyjnymi Molins, maszynami filtrowymi KDF i PM oraz podajnikami, krajalnicami i regeneratorami, które je wspierają. Powiedz nam, jakich marek używasz i jakiej wydajności potrzebujesz, a pomożemy zbudować linię, która utrzymuje prędkość i jakość dzień po dniu.",
      ],
      faqs: [
        {
          question: "Jakie maszyny produkcyjne do papierosów dostarczacie?",
          answer:
            "Dostarczamy pełną linię produkcyjną: maszyny Molins Mark 8, Mark 9 i Mark 9.5 oraz maszyny Hauni Protos, a także maszyny filtrowe KDF i Molins oraz podajniki, krajalnice i regeneratory tytoniu, które je wspierają.",
        },
        {
          question: "Ile papierosów na minutę produkują maszyny?",
          answer:
            "W zależności od modelu nasze maszyny pracują od około 3 000 do 8 000 papierosów na minutę, więc możesz dopasować maszynę do docelowej wydajności.",
        },
        {
          question: "Dostarczacie maszyny nowe czy regenerowane?",
          answer:
            "Oba rodzaje. Regenerowane maszyny Molins i Hauni są przed sprzedażą w pełni sprawdzane, serwisowane i testowane, oferując dużą wartość rozwijającym się fabrykom.",
        },
        {
          question: "Czy pomagacie dopasować maszynę produkcyjną do właściwej linii filtrowej?",
          answer:
            "Tak. Dbamy o to, aby maszyna produkcyjna i filtrowa pracowały zgodnie, dzięki czemu cała linia pozostaje zrównoważona. Podaj nam swoje marki i docelową wydajność, a polecimy konfigurację.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Maszyny pakujące",
      title: "Maszyny pakujące do papierosów w Polsce",
      description:
        "Maszyny pakujące do papierosów w Pakistanie: linie HLP i SASIB do opakowań twardych i miękkich od 180 do 225 paczek na minutę. Dostarczane, montowane i wspierane przez Civic Tobacco Machinery.",
      intro: [
        "Linia pakująca to miejsce, w którym Twój produkt nabiera ostatecznego kształtu, więc musi być stabilna, czysta i łatwa w obsłudze zmiana po zmianie. W Civic Tobacco Machinery dostarczamy maszyny pakujące do papierosów w Pakistanie wybrane właśnie pod tym kątem: niezawodna wydajność i paczki wyglądające tak samo za każdym razem.",
        "Nasza oferta obejmuje formaty opakowań twardych i miękkich, od 180 do 225 paczek na minutę, z opcjami nowymi i starannie regenerowanymi. Niezależnie od tego, czy tworzysz nową linię, czy zwiększasz moce istniejącej, pomagamy dobrać właściwą maszynę do Twojej wielkości produkcji, budżetu i produkowanych marek.",
      ],
      faqs: [
        {
          question: "Jaka jest różnica między maszynami do opakowań twardych i miękkich?",
          answer:
            "Opakowania twarde (pudełka z uchylnym wieczkiem) pracują na maszynach typu HLP, a opakowania miękkie (składana folia i nadrukowane opakowanie zewnętrzne) na maszynach typu SASIB. Dostarczamy oba rodzaje i pomagamy dopasować maszynę do formatu opakowania, który faktycznie sprzedają Twoje marki.",
        },
        {
          question: "Jakie prędkości pakowania oferujecie?",
          answer:
            "Nasze maszyny pakujące do papierosów pracują od około 180 do 225 paczek na minutę. Wybierz prędkość odpowiadającą Twojemu realnemu zapotrzebowaniu na zmianę z pewnym zapasem na wzrost, zamiast płacić za nieużywaną moc.",
        },
        {
          question: "Sprzedajecie maszyny pakujące nowe czy regenerowane?",
          answer:
            "Oba rodzaje. Każda używana pakowaczka HLP lub SASIB jest przed sprzedażą sprawdzana, serwisowana i testowana, więc dobra regenerowana maszyna może pracować latami za ułamek ceny nowej.",
        },
        {
          question: "Czy montujecie maszynę i dostarczacie części zamienne?",
          answer:
            "Tak. Montujemy i ustawiamy maszynę oraz wspieramy HLP i SASIB szeroko dostępnymi częściami i serwisem. Napisz do nas na WhatsApp pod +92 301 1111184 w sprawie ceny i aktualnej dostępności.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Maszyny owijające",
      title: "Maszyny owijające do papierosów w Polsce",
      description:
        "Maszyny owijające do papierosów w Pakistanie: owijarki zewnętrzne, pakowaczki kartonowe i owijarki celofanowe, które czysto zamykają Twoje paczki. Sprzedaż, części i serwis od Civic Tobacco Machinery.",
      intro: [
        "Owijka to ostatnia rzecz, jaką widzi Twój klient przed otwarciem paczki, dlatego czyste, szczelne zamknięcie ma tak duże znaczenie. Civic Tobacco Machinery dostarcza maszyny owijające do papierosów w Pakistanie, które zapewniają schludne wykończenie folii, prostą taśmę do otwierania i paczki pozostające świeże na półce.",
        "Od owijarek pojedynczych paczek po owijanie kartonów i pakowaczki kartonowe, obejmujemy pełen zakres. Każda sprzedawana przez nas maszyna jest sprawdzana, ustawiana i przekazywana gotowa do pracy, z częściami i serwisem, po które możesz sięgnąć, gdy ich potrzebujesz.",
      ],
      faqs: [
        {
          question: "Jaka jest różnica między owijarką a pakowaczką kartonową?",
          answer:
            "Owijarka zamyka każdą paczkę w folii celofanowej z taśmą do otwierania, a pakowaczka kartonowa grupuje gotowe paczki w kartony lub pudełka. Większość linii używa obu, jedna po drugiej.",
        },
        {
          question: "Jakie maszyny owijające i pakujące dostarczacie?",
          answer:
            "Dostarczamy owijarki i pakowaczki Molins i SASIB, w tym owijarkę paczek CP1, owijarkę „Naked” oraz pakowaczki Molins i SASIB, do linii z opakowaniami twardymi i miękkimi.",
        },
        {
          question: "Oferujecie maszyny owijające nowe czy regenerowane?",
          answer:
            "Dostępne są zarówno nowe, jak i starannie regenerowane jednostki. Każda używana maszyna jest sprawdzana, ustawiana i przekazywana gotowa do pracy.",
        },
        {
          question: "Czy zapewniacie montaż i części zamienne?",
          answer:
            "Tak, montaż, ustawienie, części zamienne i serwis to wszystko część naszej pracy. Skontaktuj się z nami na WhatsApp pod +92 301 1111184, aby otrzymać wycenę.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Maszyny produkcyjne",
      title: "Maszyny do produkcji filtrów papierosowych w Polsce",
      description:
        "Maszyny do produkcji filtrów papierosowych w Pakistanie: Molins KDF, Molins PM i maszyny do rurek. Linie do wałków filtrowych dostarczane i wspierane przez Civic Tobacco Machinery.",
      intro: [
        "Dobry filtr robi więcej niż tylko wykańcza papierosa — kontroluje zaciąg, twardość i całe odczucie palenia. Civic Tobacco Machinery dostarcza maszyny do produkcji filtrów papierosowych w Pakistanie, które wytwarzają równe wałki, na których może polegać Twoja maszyna produkcyjna.",
        "Mamy na stanie maszyny filtrowe Molins KDF i Molins PM oraz maszyny do rurek do formatów specjalnych. Niezależnie od długości czy rodzaju produkowanego filtra, pomożemy wybrać linię dopasowaną do prędkości Twoich maszyn produkcyjnych.",
      ],
      faqs: [
        {
          question: "Jakie maszyny do produkcji filtrów dostarczacie?",
          answer:
            "Dostarczamy maszyny filtrowe Hauni KDF-1 i KDF-2, maszyny filtrowe Molins PM oraz maszyny do rurek do formatów specjalnych, dla fabryk prowadzących produkcję wałków filtrowych.",
        },
        {
          question: "Czy maszyna filtrowa może dorównać prędkości mojej maszyny produkcyjnej?",
          answer:
            "Tak. Pomagamy wybrać linię filtrową dopasowaną do prędkości Twoich maszyn produkcyjnych, aby obie pracowały zgodnie, a linia pozostała zrównoważona.",
        },
        {
          question: "Oferujecie maszyny filtrowe nowe i regenerowane?",
          answer:
            "Oba rodzaje. Każda regenerowana maszyna KDF lub PM jest przed sprzedażą sprawdzana, serwisowana i testowana.",
        },
        {
          question: "Czy montujecie i wspieracie maszyny do filtrów?",
          answer:
            "Tak, montaż, części zamienne i serwis są wliczone. Napisz do nas na WhatsApp pod +92 301 1111184 w sprawie ceny i dostępności.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Maszyny produkcyjne",
      title: "Krajalnice, podajniki i regeneratory tytoniu w Polsce",
      description:
        "Maszyny tytoniowe w Pakistanie: podajniki, krajalnice, regeneratory i spłaszczarki żył, które utrzymują w ruchu produkcję pierwotną i wtórną. Dostarczane przez Civic Tobacco Machinery.",
      intro: [
        "Za każdą maszyną produkcyjną i pakującą stoi zestaw cichszych maszyn wykonujących ciężką pracę: podawanie tytoniu, jego cięcie, ratowanie tego, co inaczej zostałoby zmarnowane. Civic Tobacco Machinery dostarcza maszyny tytoniowe w Pakistanie, które utrzymują tę stronę produkcji w ruchu.",
        "Podajniki, krajalnice, regeneratory i spłaszczarki żył współpracują, aby zapewnić stałe zasilanie Twojej linii i ograniczyć odpady. Pomagamy dobrać właściwe jednostki wokół maszyn produkcyjnych i pakujących, które już eksploatujesz.",
      ],
      faqs: [
        {
          question: "Co robią podajniki, krajalnice i regeneratory tytoniu?",
          answer:
            "Podajniki zasilają maszyny produkcyjne tytoniem, krajalnice tną liść na rozmiar produkcyjny, a regeneratory odzyskują tytoń z odrzuconych papierosów, aby można go było ponownie wykorzystać, utrzymując płynny ruch produkcji pierwotnej i wtórnej.",
        },
        {
          question: "Czy ten sprzęt może ograniczyć odpady tytoniu?",
          answer:
            "Tak. Regenerator odzyskuje nadający się do użytku tytoń z odrzuconych papierosów, co ogranicza odpady i z czasem obniża koszty eksploatacji.",
        },
        {
          question: "Jakie marki dostarczacie?",
          answer:
            "Dostarczamy dobrze wspierane maszyny, takie jak krajalnica tytoniu Hauni KT-400, a także podajniki tytoniu, regeneratory papierosów i spłaszczarki żył.",
        },
        {
          question: "Czy maszyny są nowe czy regenerowane i czy je wspieracie?",
          answer:
            "Dostępne są zarówno nowe, jak i regenerowane jednostki, wszystkie testowane przed sprzedażą, z montażem, częściami i serwisem. Skontaktuj się z nami na WhatsApp pod +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Maszyny do papierosów w Polsce",
    intro:
      "Maszyna produkcyjna to serce każdej fabryki papierosów. Zamienia cięty tytoń i papier w gotowy wałek, tysiące razy na minutę, bez przerwy w jakości.",
    seeAll: "Zobacz wszystkie →",
  },
  blog: {
    eyebrow: "Blog",
    indexTitle: "Poradniki i wskazówki dotyczące maszyn do papierosów",
    indexIntro:
      "Konkretne, rzeczowe artykuły, które pomogą Ci wybrać, kupić i eksploatować maszyny do papierosów i tytoniu, napisane przez ludzi pracujących z tymi maszynami każdego dnia.",
    metaTitle: "Blog | Civic Tobacco Machinery",
    metaDescription:
      "Praktyczne poradniki dotyczące maszyn do papierosów i tytoniu: wybór maszyn pakujących, porównywanie maszyn produkcyjnych i kupowanie maszyn używanych w Pakistanie. Od Civic Tobacco Machinery.",
    readArticle: "Czytaj artykuł →",
    minRead: "min czytania",
    tags: "Tagi:",
    backToAll: "← Powrót do wszystkich artykułów",
    keepReading: "Czytaj dalej",
    dateLocale: "pl-PL",
  },
  product: {
    keyFeatures: "Najważniejsze cechy",
    specifications: "Dane techniczne",
    description: "Opis",
    bestSuitedFor: "Najlepsze do",
    call: "Zadzwoń",
    interested: "Zainteresowany tą maszyną?",
    askAbout: "Zapytaj o",
    enquiryText:
      "Wyślij nam krótką wiadomość w sprawie ceny, aktualnej dostępności i stanu. Poinformujemy Cię też o pasujących maszynach uzupełniających Twoją linię.",
    related: "Podobne maszyny",
    thumbs: { front: "Widok z przodu", detail: "Szczegół", operation: "W trakcie pracy" },
    waMessage: (name) =>
      `Dzień dobry, jestem zainteresowany maszyną ${name}. Proszę o podanie ceny i dostępności.`,
  },
};

/* ---------------------------------------------------------------------------
 * English (South Africa) / English (Zimbabwe) — same English copy as the
 * main site; only the H1s, meta titles and headings that name the target
 * country are swapped from "Pakistan" to "South Africa" / "Zimbabwe".
 * ------------------------------------------------------------------------- */

const za: Dictionary = {
  ...en,
  header: {
    ...en.header,
    tagline: "Cigarette & Tobacco Machinery Manufacturers in South Africa",
    region: "South Africa",
  },
  home: {
    ...en.home,
    metaTitle: "Civic Tobacco Machinery | Cigarette Machinery South Africa",
    hero: {
      ...en.home.hero,
      h1: "Looking for Cigarette & Tobacco Machinery in South Africa?",
    },
  },
  categories: {
    ...en.categories,
    "/cigarette-manufacturing-machines": {
      ...en.categories["/cigarette-manufacturing-machines"],
      title: "Cigarette Manufacturing Machines in South Africa",
    },
    "/cigarette-packing-machines": {
      ...en.categories["/cigarette-packing-machines"],
      title: "Cigarette Packing Machines in South Africa",
    },
    "/cigarette-box-wrapping-machines": {
      ...en.categories["/cigarette-box-wrapping-machines"],
      title: "Cigarette Wrapping Machines in South Africa",
    },
    "/cigarette-filter-making-machines": {
      ...en.categories["/cigarette-filter-making-machines"],
      title: "Cigarette Filter Making Machines in South Africa",
    },
    "/cutter-feeder-reclaimer": {
      ...en.categories["/cutter-feeder-reclaimer"],
      title: "Tobacco Cutter, Feeder & Reclaimer Machines in South Africa",
    },
  },
  manufacturingSection: {
    ...en.manufacturingSection,
    title: "Cigarette Making Machines in South Africa",
  },
};

const zw: Dictionary = {
  ...en,
  header: {
    ...en.header,
    tagline: "Cigarette & Tobacco Machinery Manufacturers in Zimbabwe",
    region: "Zimbabwe",
  },
  home: {
    ...en.home,
    metaTitle: "Civic Tobacco Machinery | Cigarette Machinery Zimbabwe",
    hero: {
      ...en.home.hero,
      h1: "Looking for Cigarette & Tobacco Machinery in Zimbabwe?",
    },
  },
  categories: {
    ...en.categories,
    "/cigarette-manufacturing-machines": {
      ...en.categories["/cigarette-manufacturing-machines"],
      title: "Cigarette Manufacturing Machines in Zimbabwe",
    },
    "/cigarette-packing-machines": {
      ...en.categories["/cigarette-packing-machines"],
      title: "Cigarette Packing Machines in Zimbabwe",
    },
    "/cigarette-box-wrapping-machines": {
      ...en.categories["/cigarette-box-wrapping-machines"],
      title: "Cigarette Wrapping Machines in Zimbabwe",
    },
    "/cigarette-filter-making-machines": {
      ...en.categories["/cigarette-filter-making-machines"],
      title: "Cigarette Filter Making Machines in Zimbabwe",
    },
    "/cutter-feeder-reclaimer": {
      ...en.categories["/cutter-feeder-reclaimer"],
      title: "Tobacco Cutter, Feeder & Reclaimer Machines in Zimbabwe",
    },
  },
  manufacturingSection: {
    ...en.manufacturingSection,
    title: "Cigarette Making Machines in Zimbabwe",
  },
};

/* ---------------------------------------------------------------------------
 * Bulgarian (bg-BG)
 * ------------------------------------------------------------------------- */

const bg: Dictionary = {
  nav: {
    about: "За нас",
    making: "Производство на цигари",
    packing: "Опаковане на цигари",
    filter: "Машини за филтри",
    wrappers: "Опаковъчни и кутиени машини",
    cutter: "Резачки/подаватели/рекуператори",
    contact: "Свържете се с нас",
  },
  header: {
    tagline: "Производители на машини за цигари и тютюн в България",
    call: "Обадете се",
    whatsapp: "WhatsApp",
    region: "България",
  },
  megaMenu: {
    prompt: "Търсите конкретна машина или цяла линия?",
    viewAll: "Вижте всички машини за производство →",
  },
  productCard: { viewDetails: "Вижте детайли" },
  breadcrumbHome: "Начало",
  faqHeading: "Често задавани въпроси",
  emptyNote:
    "Машините в тази категория се добавят редовно. Свържете се с нас за наличната бройка.",
  cta: {
    title: "Не сте сигурни коя машина ви трябва?",
    text: "Кажете ни формата, целевия обем и бюджета. Ще ви препоръчаме подходящата машина, нова или реновирана, и ще ви помогнем да я пуснете в експлоатация.",
    whatsapp: "WhatsApp",
    enquiry: "Изпратете запитване",
  },
  footer: {
    blurb:
      "Доставчици на нови и употребявани машини за производство, опаковане и увиване на цигари в Пакистан, с монтаж, резервни части и сервиз, на които можете да разчитате.",
    machines: "Машини",
    manufacturing: "Производство",
    reachUs: "Свържете се с нас",
    ourBlog: "Нашият блог",
    hours: "Пон.–Съб., 09:00–18:00",
    rights: "Всички права запазени.",
    links: { home: "Начало", about: "За нас", blog: "Блог", contact: "Свържете се с нас" },
    labels: {
      "/cigarette-packing-machines": "Опаковъчни машини",
      "/cigarette-box-wrapping-machines": "Машини за увиване",
      "/cigarette-manufacturing-machines": "Производствени машини",
      "/cigarette-making-machines": "Машини за производство на цигари",
      "/cigarette-filter-making-machines": "Машини за производство на филтри",
      "/cutter-feeder-reclaimer": "Тютюнево оборудване",
    },
  },
  switcher: { label: "Език" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Машини за цигари България",
    metaDescription:
      "Civic Tobacco Machinery доставя машини за производство, опаковане и увиване на цигари в Пакистан. Ново и употребявано тютюнево оборудване, линии за филтри, резервни части и пълна поддръжка при монтаж.",
    hero: {
      h1: "Търсите машини за цигари и тютюн в България?",
      lead: "На правилното място сте. От първия къс тютюн до готовия кашон, Civic Tobacco Machinery ви осигурява нови и реновирани линии за производство, филтри, опаковане и увиване, монтирани, настроени и подкрепени с резервни части и сервиз, на които можете да разчитате.",
      getQuote: "Получете оферта",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Разгледайте по вид машина",
    browse: {
      packing: "Машини за опаковане на цигари",
      wrapping: "Машини за увиване на цигари",
      making: "Машини за производство на цигари",
      used: "Употребявано оборудване за цигари",
    },
    viewRange: "Вижте гамата →",
    about: {
      eyebrow: "За нас",
      h2: "Поколения инженерно съвършенство в тютюневото машиностроене",
      lead: "Семеен бизнес баща и син, вече в третото поколение, с над 35 години практически опит в тютюневата индустрия.",
      p1: "От десетилетия семейството ни работи в една-единствена област на тютюневото машиностроене. Това, което започна като малка търговска дейност, се превърна в доверено, многопоколенческо име, на което нови и утвърдени цигарени компании в цял Пакистан разчитат, за да изградят и управляват своите линии.",
      p2: "Ние сме специализирани производители на тютюнево оборудване, предлагащи цялостно решение на едно място. От машини за производство и филтри до опаковъчни и увиващи машини, ние ви помагаме да намерите точното оборудване, да го видите в действие преди покупка и да го монтирате и настроите на вашия под. Предлагаме и безплатна демонстрация и обучение за вашите техници, за да работи екипът ви уверено с машината от първия ден.",
      bullets: [
        "Семеен бизнес в няколко поколения",
        "Нови и реновирани машини",
        "Цяла линия, от машина за производство до опаковчик",
        "Демонстрация и обучение на техници",
      ],
      more: "Още за нас",
    },
    featured: {
      eyebrow: "В наличност и популярни",
      h2: "Препоръчани машини",
      viewAll: "Вижте всички машини →",
    },
    why: {
      eyebrow: "Защо Civic Tobacco Machinery",
      h2: "Правилната машина, настроена да работи дълго",
      reasons: [
        {
          title: "Машини, които продължават да работят",
          text: "Придържаме се към утвърдени марки с лесна наличност на резервни части, така че линията ви остава продуктивна смяна след смяна.",
        },
        {
          title: "Честни доклади за състоянието",
          text: "Всяка употребявана машина се проверява, обслужва и тества. Получавате точна информация за нейното състояние, без изненади.",
        },
        {
          title: "Пълна поддръжка на линията",
          text: "От машина за производство до опаковчик, помагаме ви да съчетаете машините така, че нищо да не се превръща в тясно място, и ги монтираме и поддържаме.",
        },
        {
          title: "Локална помощ на място",
          text: "Базирани сме точно тук, в Пакистан. Когато ви трябват части или техник, помощта е наблизо, не отвъд океана.",
        },
      ],
    },
    ranges: {
      making: "Машини за производство на цигари",
      packing: "Машини за опаковане на цигари",
      filter: "Машини за производство на филтри",
      wrapping: "Машини за увиване на кутии за цигари",
    },
    carousel: {
      eyebrow: "Нашата наличност",
      heading: "Тютюнево оборудване за продажба",
      viewAllPrefix: "Вижте всички ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Галерия",
      heading: "Civic Tobacco Machinery в снимки",
      text: "Моменти от международни тютюневи изложения и срещи с наши партньори и клиенти по целия свят.",
    },
    local: {
      eyebrow: "Обслужваме цял Пакистан",
      h2: "Вашият партньор за тютюнево оборудване в Пакистан",
      text: "Базирани сме в индустриалната зона SITE, което ни доближава до фабриките, които обслужваме. Когато ви трябва част, техник или честен съвет за машина, общувате с хора точно от другия край на града, а не с доставчик от друг континент.",
      bullets: [
        "Бърза локална поддръжка и резервни части",
        "Монтаж и настройка във вашата фабрика",
        "Нови и реновирани машини за всеки бюджет",
      ],
      visitHeading: "Посетете ни или се обадете",
      directions: "Вижте маршрут и контакти",
    },
    faqHeading: {
      eyebrow: "Чести въпроси",
      h2: "Често задавани въпроси",
    },
    faqs: [
      {
        question: "Продавате ли и нови, и употребявани цигарени машини в България?",
        answer:
          "Да. Доставяме нови машини, както и внимателно реновирано употребявано оборудване за цигари и тютюн. Всяка употребявана машина се проверява, обслужва и тества преди продажба и се предоставя с честен доклад за състоянието, за да знаете точно какво купувате.",
      },
      {
        question: "С кои марки машини за производство на цигари работите?",
        answer:
          "Работим предимно с добре поддържани марки като Molins за машини за производство и филтри, и HLP и SASIB за опаковане и увиване. Избрани са, защото частите и обучените техници се намират лесно, което поддържа линията ви в движение с години.",
      },
      {
        question: "Монтирате ли машините и предоставяте ли резервни части?",
        answer:
          "Да. Помагаме с монтажа и правилното настройване на машината на вашия под, а след това ви подкрепяме с резервни части и сервиз. Пускането на машина за производство или опаковане в експлоатация не е работа тип „включи и работи“, затова оставаме ангажирани, докато не заработи както трябва.",
      },
      {
        question: "Къде се намирате и доставяте ли в цял Пакистан?",
        answer:
          "Нашата работилница се намира в индустриалната зона SITE в Карачи. Обслужваме клиенти в целия Пакистан и можем да организираме доставка и монтаж, където и да се намира вашата фабрика.",
      },
    ],
  },

  about: {
    metaTitle: "За нас | Civic Tobacco Machinery",
    metaDescription:
      "За Civic Tobacco Machinery, доставчик на машини за цигари и тютюн в Пакистан. Кои сме ние, за какво се застъпваме и как подкрепяме вашата фабрика с нови и употребявани машини.",
    hero: {
      eyebrow: "За нас",
      title: "Машини за цигари и тютюн, подкрепени от хора, които ги разбират",
      intro:
        "Civic Tobacco Machinery от години помага на фабрики в цял Пакистан да изграждат, разширяват и поддържат своите цигарени линии.",
    },
    whoHeading: "Кои сме ние",
    who: [
      "Ние сме доставчик на машини за цигари и тютюн, базиран в Пакистан. През годините сме работили с всичко, от малки работилници, правещи първите си стъпки в производството на цигари, до утвърдени фабрики, добавящи втора или трета линия. Този опит оформя начина ни на работа — първо слушаме, разбираме от какво наистина имате нужда, а после ви насочваме към подходящата машина.",
      "Гамата ни обхваща цялата линия: машини за производство, които формират къса тютюн, машини за филтри, опаковъчни машини за твърди и меки кутии, машини за увиване и кутиране, както и тютюнево оборудване, което поддържа производството захранено. Работим както с нови, така и с внимателно реновирани машини, така че винаги има разумен вариант за вашия бюджет.",
    ],
    howHeading: "Как работим",
    how: [
      "Купуването на машина е само половината от историята. Машина за производство или опаковане трябва да бъде монтирана правилно, настроена коректно и поддържана в движение, а именно тук много доставчици изчезват. Ние не го правим. Помагаме ви да монтирате машината на вашия под и да заработи както трябва, и оставаме на разположение за части и сервиз.",
      "Тъй като сме базирани точно тук, в индустриалната зона SITE, тази поддръжка е наистина локална. Когато нещо се нуждае от внимание, говорите с хора от другия край на града, а не чакате доставчик в друга държава и часова зона.",
    ],
    brandsHeading: "Марките, на които се доверяваме",
    brands:
      "Фокусираме се върху утвърдени имена — Molins за машини за производство и филтри, HLP и SASIB за опаковане и увиване, и семейството Protos за линии с по-висока скорост. Избираме ги не заради марката, а защото частите и know-how за тях се намират лесно, а именно това поддържа машината печеливша с години.",
    glance: {
      heading: "Накратко",
      basedIn: "Базирани сме в",
      basedInValue: "SITE, Карачи, Пакистан",
      supply: "Доставяме",
      supplyValue: "Ново и употребявано тютюнево оборудване",
      serve: "Обслужваме",
      serveValue: "Целия Пакистан",
      call: "Обадете се / WhatsApp",
      talk: "Свържете се с нас",
    },
    valuesEyebrow: "Какво отстояваме",
    valuesHeading: "Начинът, по който работим",
    values: [
      {
        title: "Честност на първо място",
        text: "Казваме ви истинското състояние на машината и какво може да прави. Продажба, която ви оставя недоволни, изобщо не е продажба.",
      },
      {
        title: "Машини, които бихме карали сами",
        text: "Работим с марки и модели, на които се доверяваме — тези с добра наличност на части и дълъг експлоатационен живот.",
      },
      {
        title: "Поддръжка, която остава",
        text: "Работата ни не приключва с доставката. Помагаме с монтаж, настройка, резервни части и сервиз в дългосрочен план.",
      },
      {
        title: "Справедлива стойност",
        text: "Нова или реновирана, помагаме ви да получите подходящата машина за вашия бюджет, без да правим компромис с важните неща.",
      },
    ],
    ctaTitle: "Нека поговорим за вашата линия",
    ctaText:
      "Независимо дали започвате или разширявате, кажете ни какво искате да произвеждате и ще ви помогнем да стигнете дотам.",
  },

  contact: {
    metaTitle: "Свържете се с нас | Civic Tobacco Machinery",
    metaDescription:
      "Свържете се с Civic Tobacco Machinery в Пакистан. Обадете се, пишете в WhatsApp или изпратете запитване за машини за производство, опаковане, увиване на цигари и употребявани машини. Работилница в SITE, Карачи.",
    hero: {
      eyebrow: "Свържете се с нас",
      title: "Свържете се с Civic Tobacco Machinery",
      intro:
        "Кажете ни какво търсите и ще се свържем с вас още същия работен ден. Обадете се, пишете в WhatsApp, изпратете имейл или попълнете формуляра по-долу.",
    },
    directHeading: "Свържете се директно с нас",
    directText:
      "Най-бързият начин да получите точен отговор за машина, нейното състояние, цена или наличност, е да ни пишете в WhatsApp или да ни се обадите.",
    rows: {
      visit: "Посетете нашата работилница",
      call: "Обадете ни се",
      whatsapp: "WhatsApp",
      whatsappValue: "Пишете ни на",
      email: "Имейл",
      hours: "Работно време",
      hoursValue: "Понеделник – събота, 09:00 – 18:00",
      hoursClosed: "Затворено в неделя",
    },
    openInMaps: "Отворете в Google Maps",
    formHeading: "Изпратете запитване",
    formIntro:
      "Попълнете това и ще се свържем с вас бързо. Полетата, отбелязани като задължителни, ни помагат да ви дадем точен отговор.",
    form: {
      name: "Вашето име",
      namePlaceholder: "напр. Ахмед Хан",
      phone: "Телефон / WhatsApp",
      phonePlaceholder: "напр. 0300 1234567",
      email: "Имейл",
      emailOptional: "(по избор)",
      emailPlaceholder: "you@company.com",
      interest: "Машина, от която се интересувате",
      interestPlaceholder: "напр. Опаковъчна машина HLP-200",
      message: "Вашето съобщение",
      messagePlaceholder: "Кажете ни формата, целевия обем и всякакви подробности.",
      submit: "Изпратете запитване",
      sending: "Изпращане…",
      successTitle: "Благодарим ви!",
      successText:
        "Запитването ви беше изпратено. Нашият екип ще се свърже с вас скоро, обикновено още същия работен ден.",
      errorText:
        "Съжаляваме, възникна грешка при изпращането на съобщението. Моля, опитайте отново, или",
      errorWhatsApp: "пишете ни в WhatsApp",
      footnote:
        "Данните ви отиват директно при нашия екип — обикновено отговаряме още същия работен ден. Предпочитате чат?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Производствени машини",
      title: "Машини за производство на цигари в България",
      description:
        "Машини за производство на цигари в Пакистан, машини за производство Molins, машини за филтри и тютюнево оборудване. Нови и реновирани линии от Civic Tobacco Machinery.",
      intro: [
        "Добрата цигара започва много преди пакета. Тя започва с машина за производство, която полага равен къс тютюн, линия за филтри, която реже чисто, и тютюнево оборудване, което поддържа целия под захранен. Civic Tobacco Machinery доставя машини за производство на цигари в Пакистан във всички три области.",
        "Работим с машини за производство Molins, машини за филтри KDF и PM, както и подавателите, резачките и рекуператорите, които ги подкрепят. Кажете ни марките, с които работите, и обема, който ви трябва, и ще ви помогнем да изградите линия, която пази скоростта и качеството си ден след ден.",
      ],
      faqs: [
        {
          question: "Какви машини за производство на цигари доставяте?",
          answer:
            "Доставяме цялата линия за производство: машини Molins Mark 8, Mark 9 и Mark 9.5, както и машини Hauni Protos, плюс машини за филтри KDF и Molins и подавателите, резачките и рекуператорите, които ги подкрепят.",
        },
        {
          question: "Колко цигари в минута произвеждат машините?",
          answer:
            "В зависимост от модела, нашите машини работят от около 3000 до 8000 цигари в минута, така че можете да съобразите машината с целевия си обем.",
        },
        {
          question: "Доставяте ли нови или реновирани машини?",
          answer:
            "И двете. Реновираните машини Molins и Hauni преминават пълна проверка, обслужване и тестване преди продажба, предлагайки силна стойност за развиващи се фабрики.",
        },
        {
          question: "Помагате ли за съчетаване на машината за производство с подходящата линия за филтри?",
          answer:
            "Да. Погрижваме се машината за производство и филтрите да работят в синхрон, за да остане цялата линия балансирана. Кажете ни марките и целевия обем и ще препоръчаме подходяща конфигурация.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Опаковъчни машини",
      title: "Машини за опаковане на цигари в България",
      description:
        "Машини за опаковане на цигари в Пакистан, линии HLP и SASIB за твърди и меки кутии от 180 до 225 пакета в минута. Доставени, монтирани и поддържани от Civic Tobacco Machinery.",
      intro: [
        "Опаковъчната линия е мястото, където продуктът ви най-накрая придобива форма, затова тя трябва да е стабилна, чиста и лесна за работа смяна след смяна. В Civic Tobacco Machinery доставяме машини за опаковане на цигари в Пакистан, избрани именно за това — надеждна производителност и пакети, изглеждащи еднакво всеки път.",
        "Гамата ни обхваща формати за твърди и меки кутии, от 180 до 225 пакета в минута, с нови и внимателно реновирани опции. Независимо дали изграждате нова линия или добавяте капацитет към съществуваща, помагаме ви да съчетаете подходящата машина с обема, бюджета и марките, които произвеждате.",
      ],
      faqs: [
        {
          question: "Каква е разликата между машините за твърди и меки кутии?",
          answer:
            "Твърдите кутии (тип „hinge-lid“) се произвеждат на машини от типа HLP, докато меките пакети (сгъната фолиo и печатен външен слой) се произвеждат на машини от типа SASIB. Доставяме и двата вида и помагаме да съчетаете машината с формата пакет, който вашите марки реално продават.",
        },
        {
          question: "Какви скорости на опаковане предлагате?",
          answer:
            "Нашите машини за опаковане на цигари работят от около 180 до 225 пакета в минута. Изберете скорост, която отговаря на реалното ви търсене на смяна, с известен резерв за растеж, вместо да плащате за неизползван капацитет.",
        },
        {
          question: "Продавате ли нови или реновирани опаковъчни машини?",
          answer:
            "И двете. Всяка употребявана машина HLP или SASIB се проверява, обслужва и тества преди продажба, така че добра реновирана машина може да работи с години на част от цената на нова.",
        },
        {
          question: "Монтирате ли машината и доставяте ли резервни части?",
          answer:
            "Да. Монтираме и настройваме машината и подкрепяме HLP и SASIB с широко достъпни части и сервиз. Пишете ни в WhatsApp на +92 301 1111184 за цена и текуща наличност.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Машини за увиване",
      title: "Машини за увиване на цигари в България",
      description:
        "Машини за увиване на цигари в Пакистан, обвиватели, кутиращи машини и машини за целофаново увиване, които запечатват пакетите ви чисто. Продажби, части и сервиз от Civic Tobacco Machinery.",
      intro: [
        "Опаковката е последното нещо, което клиентът ви вижда, преди да отвори пакета, затова чистото, плътно запечатване е толкова важно. Civic Tobacco Machinery доставя машини за увиване на цигари в Пакистан, които ви дават спретнато фолийно покритие, права лента за отваряне и пакети, оставащи свежи на рафта.",
        "От еднопакетни обвиватели до кутиращи и картонажни машини, покриваме цялата гама. Всяка машина, която продаваме, е проверена, настроена и предадена готова за работа, с части и сервиз, на които можете да разчитате при нужда.",
      ],
      faqs: [
        {
          question: "Каква е разликата между обвивателна и кутираща машина?",
          answer:
            "Обвивателят запечатва всеки пакет в целофаново фолио с лента за отваряне, докато кутиращата машина (картонажна машина) групира готовите пакети в кутии или кашони. Повечето линии използват и двете, една след друга.",
        },
        {
          question: "Какви машини за увиване и кутиране доставяте?",
          answer:
            "Доставяме обвиватели и кутиращи машини Molins и SASIB, включително обвивателя за пакети CP1, обвивателя без кутия и кутиращите машини Molins и SASIB, за линии с твърди и меки пакети.",
        },
        {
          question: "Предлагате ли нови или реновирани машини за увиване?",
          answer:
            "Налични са както нови, така и внимателно реновирани машини. Всяка употребявана машина е проверена, настроена и предадена готова за работа.",
        },
        {
          question: "Осигурявате ли монтаж и резервни части?",
          answer:
            "Да, монтажът, настройката, частите и сервизът са част от това, което правим. Свържете се с нас в WhatsApp на +92 301 1111184 за оферта.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Производствени машини",
      title: "Машини за производство на филтри за цигари в България",
      description:
        "Машини за производство на филтри за цигари в Пакистан, Molins KDF, Molins PM и машини за кухи тръбички. Линии за филтърни пръчки, доставени и поддържани от Civic Tobacco Machinery.",
      intro: [
        "Добрият филтър прави повече от това да завърши цигарата — той контролира дърпането, твърдостта и цялото усещане от дима. Civic Tobacco Machinery доставя машини за производство на филтри за цигари в Пакистан, които произвеждат постоянни пръчки, на които вашата машина за производство може да разчита.",
        "Предлагаме машини за филтри Molins KDF и Molins PM, заедно с машини за кухи тръбички за специализирани формати. Каквато и дължина или тип филтър да произвеждате, ще ви помогнем да изберете линия, съответстваща на скоростта на вашите машини за производство.",
      ],
      faqs: [
        {
          question: "Какви машини за производство на филтри доставяте?",
          answer:
            "Доставяме машини за филтри Hauni KDF-1 и KDF-2, машини за филтри Molins PM и машини за кухи тръбички за специализирани формати, за фабрики, произвеждащи филтърни пръчки.",
        },
        {
          question: "Може ли машината за филтри да съответства на скоростта на моята машина за цигари?",
          answer:
            "Да. Помагаме ви да изберете линия за филтри, съответстваща на скоростта на вашите машини за производство, така че двете да работят в синхрон и линията да остане балансирана.",
        },
        {
          question: "Предлагате ли нови и реновирани машини за филтри?",
          answer:
            "И двете. Всяка реновирана машина KDF или PM се проверява, обслужва и тества преди продажба.",
        },
        {
          question: "Монтирате ли и поддържате ли машините за производство на филтри?",
          answer:
            "Да, монтажът, частите и сервизът са включени. Пишете ни в WhatsApp на +92 301 1111184 за цена и наличност.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Производствени машини",
      title: "Резачки, подаватели и рекуператори за тютюн в България",
      description:
        "Тютюнево оборудване в Пакистан, подаватели, резачки, рекуператори и изправящи машини за жилки, поддържащи вашите основни и вторични линии в движение. Доставено от Civic Tobacco Machinery.",
      intro: [
        "Зад всяка машина за производство и опаковане стои набор от по-тихи машини, вършещи тежката работа — подаване на тютюн, рязане, спасяване на това, което иначе би било загубено. Civic Tobacco Machinery доставя тютюнево оборудване в Пакистан, което поддържа тази страна на производството в движение.",
        "Подаватели, резачки, рекуператори и изправящи машини за жилки работят заедно, за да поддържат стабилно захранване на линията ви и да намалят отпадъците. Помагаме ви да монтирате подходящите единици около машините за производство и опаковане, които вече използвате.",
      ],
      faqs: [
        {
          question: "Какво правят подавателите, резачките и рекуператорите за тютюн?",
          answer:
            "Подавателите поддържат машините за производство захранени с тютюн, резачките режат листата до нужния размер за производство, а рекуператорите възстановяват тютюна от бракувани цигари, за да бъде използван отново, поддържайки основните и вторичните линии в гладко движение.",
        },
        {
          question: "Може ли това оборудване да намали отпадъка от тютюн?",
          answer:
            "Да. Рекуператорът възстановява годен за употреба тютюн от бракувани пръчки, което намалява отпадъка и понижава оперативните разходи във времето.",
        },
        {
          question: "Какви марки доставяте?",
          answer:
            "Доставяме добре поддържани машини като резачката за тютюн Hauni KT-400, заедно с подаватели на тютюн, рекуператори за цигари и изправящи машини за жилки.",
        },
        {
          question: "Машините нови ли са или реновирани, и поддържате ли ги?",
          answer:
            "Налични са както нови, така и реновирани единици, всички тествани преди продажба, с монтаж, части и сервиз. Свържете се с нас в WhatsApp на +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Машини за производство на цигари в България",
    intro:
      "Машината за производство е сърцето на всяка цигарена фабрика. Тя взема нарязан тютюн и хартия и ги превръща в готова пръчка, хиляди пъти в минута, без прекъсване на качеството.",
    seeAll: "Вижте всички →",
  },
  blog: {
    eyebrow: "Блог",
    indexTitle: "Ръководства и съвети за тютюнево оборудване",
    indexIntro:
      "Практични статии, които да ви помогнат да изберете, купите и управлявате оборудване за цигари и тютюн, написани от хора, работещи с тези машини всеки ден.",
    metaTitle: "Блог | Civic Tobacco Machinery",
    metaDescription:
      "Практични ръководства за оборудване за цигари и тютюн, избор на опаковъчни машини, сравняване на машини за производство и покупка на употребявани машини в Пакистан. От Civic Tobacco Machinery.",
    readArticle: "Прочетете статията →",
    minRead: "мин четене",
    tags: "Тагове:",
    backToAll: "← Обратно към всички статии",
    keepReading: "Продължете да четете",
    dateLocale: "bg-BG",
  },
  product: {
    keyFeatures: "Основни характеристики",
    specifications: "Технически данни",
    description: "Описание",
    bestSuitedFor: "Най-подходящо за",
    call: "Обадете се",
    interested: "Заинтересовани от тази машина?",
    askAbout: "Попитайте за",
    enquiryText:
      "Изпратете ни кратко съобщение за цена, текуща наличност и състояние. Ще ви уведомим и за подходящи машини за допълване на линията ви.",
    related: "Свързани машини",
    thumbs: { front: "Изглед отпред", detail: "Детайл", operation: "В работа" },
    waMessage: (name) =>
      `Здравейте, интересувам се от ${name}. Моля, споделете цена и наличност.`,
  },
};

/* ---------------------------------------------------------------------------
 * Vietnamese (vi-VN)
 * ------------------------------------------------------------------------- */

const vi: Dictionary = {
  nav: {
    about: "Giới thiệu",
    making: "Máy sản xuất thuốc lá",
    packing: "Máy đóng gói thuốc lá",
    filter: "Máy làm đầu lọc",
    wrappers: "Máy bọc & đóng hộp",
    cutter: "Máy cắt/cấp liệu/thu hồi",
    contact: "Liên hệ",
  },
  header: {
    tagline: "Nhà sản xuất máy thuốc lá & thuốc sợi tại Việt Nam",
    call: "Gọi",
    whatsapp: "WhatsApp",
    region: "Việt Nam",
  },
  megaMenu: {
    prompt: "Bạn đang tìm một máy cụ thể hay cả dây chuyền?",
    viewAll: "Xem tất cả máy sản xuất →",
  },
  productCard: { viewDetails: "Xem chi tiết" },
  breadcrumbHome: "Trang chủ",
  faqHeading: "Câu hỏi thường gặp",
  emptyNote:
    "Các máy trong nhóm này được cập nhật thường xuyên. Liên hệ với chúng tôi để biết hàng có sẵn.",
  cta: {
    title: "Chưa chắc chắn cần loại máy nào?",
    text: "Cho chúng tôi biết định dạng, sản lượng mục tiêu và ngân sách của bạn. Chúng tôi sẽ đề xuất đúng máy, mới hoặc tân trang, và giúp bạn đưa máy vào vận hành.",
    whatsapp: "WhatsApp",
    enquiry: "Gửi yêu cầu",
  },
  footer: {
    blurb:
      "Nhà cung cấp máy sản xuất, đóng gói và bọc thuốc lá mới và đã qua sử dụng tại Pakistan, cùng dịch vụ lắp đặt, phụ tùng và bảo trì đáng tin cậy.",
    machines: "Máy móc",
    manufacturing: "Sản xuất",
    reachUs: "Liên hệ với chúng tôi",
    ourBlog: "Blog của chúng tôi",
    hours: "Thứ Hai–Thứ Bảy, 09:00–18:00",
    rights: "Bảo lưu mọi quyền.",
    links: { home: "Trang chủ", about: "Giới thiệu", blog: "Blog", contact: "Liên hệ" },
    labels: {
      "/cigarette-packing-machines": "Máy đóng gói",
      "/cigarette-box-wrapping-machines": "Máy bọc",
      "/cigarette-manufacturing-machines": "Máy sản xuất",
      "/cigarette-making-machines": "Máy sản xuất thuốc lá",
      "/cigarette-filter-making-machines": "Máy làm đầu lọc thuốc lá",
      "/cutter-feeder-reclaimer": "Thiết bị chế biến thuốc sợi",
    },
  },
  switcher: { label: "Ngôn ngữ" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Máy thuốc lá Việt Nam",
    metaDescription:
      "Civic Tobacco Machinery cung cấp máy sản xuất, đóng gói và bọc thuốc lá tại Pakistan. Thiết bị thuốc sợi mới và cũ, dây chuyền làm đầu lọc, phụ tùng và hỗ trợ lắp đặt trọn gói.",
    hero: {
      h1: "Bạn đang tìm máy thuốc lá & thuốc sợi tại Việt Nam?",
      lead: "Bạn đã tìm đúng nơi. Từ điếu thuốc đầu tiên đến thùng carton hoàn chỉnh, Civic Tobacco Machinery cung cấp cho bạn các dây chuyền sản xuất, đầu lọc, đóng gói và bọc mới và tân trang, đã lắp đặt, hiệu chỉnh và được hỗ trợ bởi phụ tùng và dịch vụ bạn có thể tin tưởng.",
      getQuote: "Nhận báo giá",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Duyệt theo loại máy",
    browse: {
      packing: "Máy đóng gói thuốc lá",
      wrapping: "Máy bọc thuốc lá",
      making: "Máy sản xuất thuốc lá",
      used: "Thiết bị thuốc lá đã qua sử dụng",
    },
    viewRange: "Xem dòng sản phẩm →",
    about: {
      eyebrow: "Giới thiệu",
      h2: "Nhiều thế hệ kinh nghiệm kỹ thuật xuất sắc trong ngành máy thuốc sợi",
      lead: "Một doanh nghiệp gia đình cha và con, nay đã bước sang thế hệ thứ ba, với hơn 35 năm kinh nghiệm thực tế trong ngành thuốc lá.",
      p1: "Trong nhiều thập kỷ, gia đình chúng tôi đã làm việc trong một lĩnh vực duy nhất là máy thuốc sợi. Từ một cơ sở kinh doanh nhỏ, chúng tôi đã trở thành một cái tên đáng tin cậy qua nhiều thế hệ mà các công ty thuốc lá mới thành lập và lâu năm trên khắp Pakistan tin tưởng để xây dựng và vận hành dây chuyền của họ.",
      p2: "Chúng tôi là nhà sản xuất thiết bị thuốc sợi chuyên nghiệp, cung cấp giải pháp trọn gói toàn diện. Từ máy sản xuất và máy làm đầu lọc đến máy đóng gói và máy bọc, chúng tôi giúp bạn tìm đúng thiết bị, xem máy vận hành trước khi mua, và lắp đặt, hiệu chỉnh ngay tại nhà máy của bạn. Chúng tôi cũng cung cấp trình diễn và đào tạo kỹ thuật viên miễn phí, để đội ngũ của bạn tự tin sử dụng máy ngay từ ngày đầu.",
      bullets: [
        "Doanh nghiệp gia đình nhiều thế hệ",
        "Máy mới & tân trang",
        "Trọn dây chuyền, từ máy sản xuất đến máy đóng gói",
        "Trình diễn & đào tạo kỹ thuật viên",
      ],
      more: "Tìm hiểu thêm về chúng tôi",
    },
    featured: {
      eyebrow: "Đang có sẵn & bán chạy",
      h2: "Máy nổi bật",
      viewAll: "Xem tất cả máy →",
    },
    why: {
      eyebrow: "Vì sao chọn Civic Tobacco Machinery",
      h2: "Đúng máy, được thiết lập để bền lâu",
      reasons: [
        {
          title: "Máy hoạt động bền bỉ",
          text: "Chúng tôi gắn bó với các thương hiệu đã được kiểm chứng, dễ tìm phụ tùng, để dây chuyền của bạn luôn năng suất qua từng ca sản xuất.",
        },
        {
          title: "Báo cáo tình trạng trung thực",
          text: "Mỗi máy đã qua sử dụng đều được kiểm tra, bảo dưỡng và thử nghiệm. Bạn nhận được thông tin chính xác về tình trạng máy, không có bất ngờ.",
        },
        {
          title: "Hỗ trợ trọn dây chuyền",
          text: "Từ máy sản xuất đến máy đóng gói, chúng tôi giúp bạn kết hợp các máy để không có điểm nghẽn, đồng thời lắp đặt và hỗ trợ chúng.",
        },
        {
          title: "Hỗ trợ tại chỗ, ngay địa phương",
          text: "Chúng tôi đặt trụ sở ngay tại Pakistan. Khi bạn cần phụ tùng hoặc kỹ thuật viên, sự hỗ trợ luôn ở gần, không phải từ nước ngoài.",
        },
      ],
    },
    ranges: {
      making: "Máy sản xuất thuốc lá",
      packing: "Máy đóng gói thuốc lá",
      filter: "Máy làm đầu lọc thuốc lá",
      wrapping: "Máy bọc hộp thuốc lá",
    },
    carousel: {
      eyebrow: "Hàng có sẵn",
      heading: "Thiết bị thuốc lá đang bán",
      viewAllPrefix: "Xem tất cả ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Thư viện ảnh",
      heading: "Civic Tobacco Machinery qua hình ảnh",
      text: "Những khoảnh khắc từ các triển lãm thuốc lá quốc tế và các cuộc gặp gỡ với đối tác, khách hàng trên toàn thế giới.",
    },
    local: {
      eyebrow: "Phục vụ toàn Pakistan",
      h2: "Đối tác thiết bị thuốc sợi của bạn tại Pakistan",
      text: "Đặt trụ sở tại khu công nghiệp SITE giúp chúng tôi gần gũi với các nhà máy mà chúng tôi phục vụ. Khi bạn cần phụ tùng, kỹ thuật viên hay lời khuyên trung thực về một chiếc máy, bạn đang làm việc với những người ở ngay trong thành phố, không phải một nhà cung cấp ở lục địa khác.",
      bullets: [
        "Hỗ trợ tại chỗ nhanh chóng và phụ tùng thay thế",
        "Lắp đặt và thiết lập tại nhà máy của bạn",
        "Máy mới và tân trang cho mọi ngân sách",
      ],
      visitHeading: "Ghé thăm hoặc gọi cho chúng tôi",
      directions: "Xem đường đi & liên hệ",
    },
    faqHeading: {
      eyebrow: "Câu hỏi phổ biến",
      h2: "Câu hỏi thường gặp",
    },
    faqs: [
      {
        question: "Bạn có bán cả máy thuốc lá mới và đã qua sử dụng tại Việt Nam không?",
        answer:
          "Có. Chúng tôi cung cấp máy mới cũng như thiết bị thuốc lá và thuốc sợi đã qua sử dụng được tân trang cẩn thận. Mỗi máy đã qua sử dụng đều được kiểm tra, bảo dưỡng và thử nghiệm trước khi bán, kèm theo báo cáo tình trạng trung thực để bạn biết chính xác mình đang mua gì.",
      },
      {
        question: "Bạn kinh doanh những thương hiệu máy sản xuất thuốc lá nào?",
        answer:
          "Chúng tôi chủ yếu làm việc với các thương hiệu được hỗ trợ tốt như Molins cho máy sản xuất và làm đầu lọc, HLP và SASIB cho máy đóng gói và bọc. Những thương hiệu này được chọn vì dễ tìm phụ tùng và kỹ thuật viên lành nghề, giúp dây chuyền của bạn vận hành nhiều năm.",
      },
      {
        question: "Bạn có lắp đặt máy và cung cấp phụ tùng không?",
        answer:
          "Có. Chúng tôi hỗ trợ lắp đặt và thiết lập máy đúng cách tại nhà máy của bạn, sau đó tiếp tục hỗ trợ bạn bằng phụ tùng và dịch vụ. Đưa một máy sản xuất hay đóng gói vào vận hành không phải là việc cắm là chạy, vì vậy chúng tôi luôn đồng hành cho đến khi máy hoạt động đúng như mong đợi.",
      },
      {
        question: "Bạn đặt trụ sở ở đâu và có giao hàng khắp Pakistan không?",
        answer:
          "Xưởng của chúng tôi nằm tại khu công nghiệp SITE ở Karachi. Chúng tôi phục vụ khách hàng khắp Pakistan và có thể sắp xếp giao hàng, lắp đặt bất cứ nơi nào nhà máy của bạn đặt tại.",
      },
    ],
  },

  about: {
    metaTitle: "Giới thiệu | Civic Tobacco Machinery",
    metaDescription:
      "Giới thiệu về Civic Tobacco Machinery, nhà cung cấp máy thuốc lá và thuốc sợi tại Pakistan. Chúng tôi là ai, chúng tôi đại diện cho điều gì, và cách chúng tôi hỗ trợ nhà máy của bạn bằng máy mới và đã qua sử dụng.",
    hero: {
      eyebrow: "Giới thiệu",
      title: "Máy thuốc lá & thuốc sợi, được hậu thuẫn bởi những người am hiểu",
      intro:
        "Civic Tobacco Machinery đã nhiều năm giúp các nhà máy khắp Pakistan xây dựng, mở rộng và bảo trì dây chuyền sản xuất thuốc lá của họ.",
    },
    whoHeading: "Chúng tôi là ai",
    who: [
      "Chúng tôi là nhà cung cấp máy thuốc lá và thuốc sợi có trụ sở tại Pakistan. Qua nhiều năm, chúng tôi đã làm việc với đủ loại khách hàng, từ những xưởng nhỏ mới bắt đầu bước vào sản xuất thuốc lá đến các nhà máy lâu năm bổ sung dây chuyền thứ hai hoặc thứ ba. Kinh nghiệm đó định hình cách chúng tôi làm việc — chúng tôi lắng nghe trước, hiểu rõ nhu cầu thực sự của bạn, rồi mới hướng dẫn bạn đến chiếc máy phù hợp.",
      "Dòng sản phẩm của chúng tôi bao phủ toàn bộ dây chuyền: máy sản xuất tạo hình điếu, máy làm đầu lọc, máy đóng gói cho bao cứng và bao mềm, máy bọc và đóng hộp, cùng thiết bị thuốc sợi giữ cho sàn sản xuất luôn được cấp liệu. Chúng tôi kinh doanh cả thiết bị mới và thiết bị tân trang cẩn thận, để luôn có phương án hợp lý cho mọi ngân sách.",
    ],
    howHeading: "Cách chúng tôi làm việc",
    how: [
      "Mua máy chỉ là một nửa câu chuyện. Một máy sản xuất hay đóng gói cần được lắp đặt đúng cách, thiết lập chính xác và duy trì hoạt động, và đó chính là nơi nhiều nhà cung cấp biến mất. Chúng tôi thì không. Chúng tôi giúp bạn đưa máy vào nhà máy và vận hành đúng cách, đồng thời luôn sẵn sàng hỗ trợ phụ tùng và dịch vụ sau đó.",
      "Vì chúng tôi đặt trụ sở ngay tại khu công nghiệp SITE, sự hỗ trợ đó thực sự mang tính địa phương. Khi có vấn đề cần xử lý, bạn đang nói chuyện với những người ở ngay trong thành phố, không phải chờ đợi một nhà cung cấp ở quốc gia khác và múi giờ khác.",
    ],
    brandsHeading: "Các thương hiệu chúng tôi tin tưởng",
    brands:
      "Chúng tôi tập trung vào các tên tuổi đã được kiểm chứng — Molins cho máy sản xuất và làm đầu lọc, HLP và SASIB cho đóng gói và bọc, cùng dòng Protos cho dây chuyền tốc độ cao. Chúng tôi chọn những thương hiệu này không vì tên tuổi mà vì phụ tùng và bí quyết kỹ thuật của chúng dễ tìm, chính điều đó giúp máy duy trì hiệu quả trong nhiều năm.",
    glance: {
      heading: "Tổng quan nhanh",
      basedIn: "Trụ sở tại",
      basedInValue: "SITE, Karachi, Pakistan",
      supply: "Chúng tôi cung cấp",
      supplyValue: "Thiết bị thuốc sợi mới & đã qua sử dụng",
      serve: "Chúng tôi phục vụ",
      serveValue: "Toàn Pakistan",
      call: "Gọi / WhatsApp",
      talk: "Liên hệ với chúng tôi",
    },
    valuesEyebrow: "Điều chúng tôi đề cao",
    valuesHeading: "Cách chúng tôi kinh doanh",
    values: [
      {
        title: "Trung thực là trên hết",
        text: "Chúng tôi nói rõ tình trạng thực sự của máy và khả năng của nó. Một giao dịch khiến bạn không hài lòng thì không phải là một giao dịch thành công.",
      },
      {
        title: "Những chiếc máy chúng tôi cũng muốn sử dụng",
        text: "Chúng tôi kinh doanh các thương hiệu và mẫu máy mà chúng tôi tin tưởng — những máy có sẵn phụ tùng tốt và tuổi thọ sử dụng lâu dài.",
      },
      {
        title: "Hỗ trợ lâu dài",
        text: "Công việc của chúng tôi không kết thúc khi giao hàng. Chúng tôi hỗ trợ lắp đặt, thiết lập, phụ tùng và dịch vụ lâu dài.",
      },
      {
        title: "Giá trị công bằng",
        text: "Dù mới hay tân trang, chúng tôi giúp bạn có được chiếc máy phù hợp với ngân sách mà không cắt giảm những yếu tố quan trọng.",
      },
    ],
    ctaTitle: "Hãy cùng bàn về dây chuyền của bạn",
    ctaText:
      "Dù bạn đang bắt đầu hay mở rộng, hãy cho chúng tôi biết bạn muốn sản xuất gì và chúng tôi sẽ giúp bạn đạt được điều đó.",
  },

  contact: {
    metaTitle: "Liên hệ | Civic Tobacco Machinery",
    metaDescription:
      "Liên hệ với Civic Tobacco Machinery tại Pakistan. Gọi điện, nhắn WhatsApp hoặc gửi yêu cầu về máy sản xuất, đóng gói, bọc thuốc lá và máy đã qua sử dụng. Xưởng tại SITE, Karachi.",
    hero: {
      eyebrow: "Liên hệ",
      title: "Liên hệ với Civic Tobacco Machinery",
      intro:
        "Cho chúng tôi biết bạn đang tìm gì và chúng tôi sẽ phản hồi trong cùng ngày làm việc. Gọi điện, nhắn WhatsApp, email hoặc gửi biểu mẫu bên dưới.",
    },
    directHeading: "Liên hệ trực tiếp với chúng tôi",
    directText:
      "Cách nhanh nhất để nhận được câu trả lời rõ ràng về một chiếc máy, tình trạng, giá cả hoặc hàng có sẵn là nhắn tin cho chúng tôi qua WhatsApp hoặc gọi điện.",
    rows: {
      visit: "Ghé thăm xưởng của chúng tôi",
      call: "Gọi cho chúng tôi",
      whatsapp: "WhatsApp",
      whatsappValue: "Nhắn tin cho chúng tôi qua",
      email: "Email",
      hours: "Giờ làm việc",
      hoursValue: "Thứ Hai – Thứ Bảy, 09:00 – 18:00",
      hoursClosed: "Đóng cửa Chủ Nhật",
    },
    openInMaps: "Mở trong Google Maps",
    formHeading: "Gửi yêu cầu",
    formIntro:
      "Điền vào biểu mẫu này và chúng tôi sẽ phản hồi nhanh chóng. Các trường được đánh dấu bắt buộc giúp chúng tôi đưa ra câu trả lời chính xác.",
    form: {
      name: "Tên của bạn",
      namePlaceholder: "vd: Nguyễn Văn A",
      phone: "Điện thoại / WhatsApp",
      phonePlaceholder: "vd: 0300 1234567",
      email: "Email",
      emailOptional: "(không bắt buộc)",
      emailPlaceholder: "you@company.com",
      interest: "Máy bạn quan tâm",
      interestPlaceholder: "vd: Máy đóng gói HLP-200",
      message: "Nội dung của bạn",
      messagePlaceholder: "Cho chúng tôi biết định dạng, sản lượng mục tiêu và các chi tiết khác.",
      submit: "Gửi yêu cầu",
      sending: "Đang gửi…",
      successTitle: "Cảm ơn bạn!",
      successText:
        "Yêu cầu của bạn đã được gửi. Đội ngũ của chúng tôi sẽ phản hồi sớm, thường là trong cùng ngày làm việc.",
      errorText:
        "Rất tiếc, đã có lỗi xảy ra khi gửi tin nhắn của bạn. Vui lòng thử lại, hoặc",
      errorWhatsApp: "nhắn tin cho chúng tôi qua WhatsApp",
      footnote:
        "Thông tin của bạn được gửi trực tiếp đến đội ngũ của chúng tôi — chúng tôi thường phản hồi trong cùng ngày làm việc. Muốn trò chuyện trực tiếp hơn?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Máy sản xuất",
      title: "Máy sản xuất thuốc lá tại Việt Nam",
      description:
        "Máy sản xuất thuốc lá tại Pakistan, máy sản xuất Molins, máy làm đầu lọc và thiết bị thuốc sợi. Dây chuyền mới và tân trang từ Civic Tobacco Machinery.",
      intro: [
        "Một điếu thuốc chất lượng bắt đầu từ rất lâu trước khi vào bao. Nó bắt đầu từ một máy sản xuất tạo ra điếu thuốc đều, một dây chuyền đầu lọc cắt gọn gàng, và thiết bị thuốc sợi giữ cho toàn bộ sàn sản xuất được cấp liệu. Civic Tobacco Machinery cung cấp máy sản xuất thuốc lá tại Pakistan trên cả ba lĩnh vực này.",
        "Chúng tôi xử lý máy sản xuất Molins, máy làm đầu lọc KDF và PM, cùng các máy cấp liệu, máy cắt và máy thu hồi hỗ trợ chúng. Hãy cho chúng tôi biết thương hiệu bạn đang vận hành và sản lượng bạn cần, chúng tôi sẽ giúp bạn xây dựng một dây chuyền giữ vững tốc độ và chất lượng ngày qua ngày.",
      ],
      faqs: [
        {
          question: "Bạn cung cấp những máy sản xuất thuốc lá nào?",
          answer:
            "Chúng tôi cung cấp trọn dây chuyền sản xuất: máy Molins Mark 8, Mark 9 và Mark 9.5 cùng máy Hauni Protos, cộng thêm máy làm đầu lọc KDF và Molins, cùng các máy cấp liệu, máy cắt và máy thu hồi hỗ trợ chúng.",
        },
        {
          question: "Máy sản xuất được bao nhiêu điếu thuốc mỗi phút?",
          answer:
            "Tùy theo mẫu máy, máy sản xuất của chúng tôi chạy từ khoảng 3.000 đến 8.000 điếu mỗi phút, để bạn có thể chọn máy phù hợp với sản lượng mục tiêu.",
        },
        {
          question: "Bạn cung cấp máy mới hay máy tân trang?",
          answer:
            "Cả hai. Máy Molins và Hauni tân trang đều được kiểm tra, bảo dưỡng và thử nghiệm đầy đủ trước khi bán, mang lại giá trị cao cho các nhà máy đang phát triển.",
        },
        {
          question: "Bạn có giúp kết hợp máy sản xuất với dây chuyền đầu lọc phù hợp không?",
          answer:
            "Có. Chúng tôi đảm bảo máy sản xuất và máy làm đầu lọc vận hành đồng bộ để toàn bộ dây chuyền luôn cân bằng. Hãy cho chúng tôi biết thương hiệu và sản lượng mục tiêu, chúng tôi sẽ đề xuất cấu hình phù hợp.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Máy đóng gói",
      title: "Máy đóng gói thuốc lá tại Việt Nam",
      description:
        "Máy đóng gói thuốc lá tại Pakistan, dây chuyền HLP và SASIB cho bao cứng và bao mềm từ 180 đến 225 bao mỗi phút. Được cung cấp, lắp đặt và hỗ trợ bởi Civic Tobacco Machinery.",
      intro: [
        "Dây chuyền đóng gói là nơi sản phẩm của bạn cuối cùng thành hình, vì vậy nó cần ổn định, sạch sẽ và dễ vận hành qua từng ca. Tại Civic Tobacco Machinery, chúng tôi cung cấp máy đóng gói thuốc lá tại Pakistan được lựa chọn chính vì điều đó — sản lượng đáng tin cậy và những bao thuốc trông giống hệt nhau mỗi lần.",
        "Dòng sản phẩm của chúng tôi bao gồm cả bao cứng và bao mềm, từ 180 đến 225 bao mỗi phút, với cả tùy chọn mới và tân trang cẩn thận. Dù bạn đang thiết lập dây chuyền mới hay bổ sung công suất cho dây chuyền hiện có, chúng tôi giúp bạn chọn đúng máy phù hợp với sản lượng, ngân sách và thương hiệu bạn sản xuất.",
      ],
      faqs: [
        {
          question: "Sự khác biệt giữa máy đóng bao cứng và bao mềm là gì?",
          answer:
            "Bao cứng (hộp nắp bật) chạy trên máy kiểu HLP, trong khi bao mềm (giấy bạc gấp và vỏ in) chạy trên máy kiểu SASIB. Chúng tôi cung cấp cả hai và giúp bạn chọn đúng máy phù hợp với định dạng bao mà thương hiệu của bạn thực sự bán.",
        },
        {
          question: "Bạn cung cấp tốc độ đóng gói nào?",
          answer:
            "Máy đóng gói thuốc lá của chúng tôi chạy từ khoảng 180 đến 225 bao mỗi phút. Hãy chọn tốc độ phù hợp với nhu cầu thực tế theo ca của bạn, kèm dư địa để phát triển, thay vì phải trả tiền cho công suất không sử dụng.",
        },
        {
          question: "Bạn có bán máy đóng gói mới hay tân trang không?",
          answer:
            "Cả hai. Mỗi máy đóng gói HLP hoặc SASIB đã qua sử dụng đều được kiểm tra, bảo dưỡng và thử nghiệm trước khi bán, vì vậy một máy tân trang tốt có thể hoạt động nhiều năm với chi phí chỉ bằng một phần giá máy mới.",
        },
        {
          question: "Bạn có lắp đặt máy và cung cấp phụ tùng không?",
          answer:
            "Có. Chúng tôi lắp đặt và thiết lập máy, đồng thời hỗ trợ HLP và SASIB với phụ tùng và dịch vụ dễ tìm. Nhắn tin cho chúng tôi qua WhatsApp theo số +92 301 1111184 để biết giá và hàng có sẵn hiện tại.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Máy bọc",
      title: "Máy bọc thuốc lá tại Việt Nam",
      description:
        "Máy bọc thuốc lá tại Pakistan, máy bọc ngoài, máy đóng hộp và máy bọc cellophane niêm phong bao thuốc của bạn gọn gàng. Bán hàng, phụ tùng và dịch vụ từ Civic Tobacco Machinery.",
      intro: [
        "Lớp bọc là thứ cuối cùng khách hàng của bạn nhìn thấy trước khi mở bao thuốc, đó là lý do vì sao một đường niêm phong sạch, chặt lại quan trọng đến vậy. Civic Tobacco Machinery cung cấp máy bọc thuốc lá tại Pakistan mang lại lớp màng hoàn thiện gọn gàng, dải xé thẳng và bao thuốc luôn tươi mới trên kệ hàng.",
        "Từ máy bọc từng bao đến máy bọc hộp và đóng thùng, chúng tôi bao phủ toàn bộ dòng sản phẩm. Mỗi máy chúng tôi bán ra đều được kiểm tra, thiết lập và bàn giao sẵn sàng vận hành, kèm phụ tùng và dịch vụ bạn có thể liên hệ khi cần.",
      ],
      faqs: [
        {
          question: "Sự khác biệt giữa máy bọc ngoài và máy đóng hộp là gì?",
          answer:
            "Máy bọc ngoài niêm phong từng bao bằng màng cellophane với dải xé, trong khi máy đóng hộp (máy đóng thùng) gom các bao đã hoàn thiện vào thùng hoặc hộp. Hầu hết các dây chuyền sử dụng cả hai, nối tiếp nhau.",
        },
        {
          question: "Bạn cung cấp những máy bọc và đóng hộp nào?",
          answer:
            "Chúng tôi cung cấp máy bọc ngoài và máy đóng hộp Molins và SASIB, bao gồm máy bọc bao CP1, máy bọc ngoài trần và máy đóng hộp Molins, SASIB, cho cả dây chuyền bao cứng và bao mềm.",
        },
        {
          question: "Bạn có máy bọc mới hay tân trang không?",
          answer:
            "Cả máy mới và máy tân trang cẩn thận đều có sẵn. Mỗi máy đã qua sử dụng đều được kiểm tra, thiết lập và bàn giao sẵn sàng vận hành.",
        },
        {
          question: "Bạn có cung cấp lắp đặt và phụ tùng không?",
          answer:
            "Có, lắp đặt, thiết lập, phụ tùng và dịch vụ đều nằm trong những gì chúng tôi cung cấp. Liên hệ với chúng tôi qua WhatsApp theo số +92 301 1111184 để nhận báo giá.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Máy sản xuất",
      title: "Máy làm đầu lọc thuốc lá tại Việt Nam",
      description:
        "Máy làm đầu lọc thuốc lá tại Pakistan, Molins KDF, Molins PM và máy làm ống rỗng. Dây chuyền đầu lọc được cung cấp và hỗ trợ bởi Civic Tobacco Machinery.",
      intro: [
        "Một đầu lọc tốt làm nhiều hơn là hoàn thiện điếu thuốc — nó kiểm soát lực hút, độ chắc và toàn bộ cảm giác khi hút. Civic Tobacco Machinery cung cấp máy làm đầu lọc thuốc lá tại Pakistan tạo ra các đoạn đầu lọc đồng đều mà máy sản xuất của bạn có thể tin cậy.",
        "Chúng tôi cung cấp máy làm đầu lọc Molins KDF và Molins PM cùng máy làm ống rỗng cho các định dạng đặc biệt. Dù bạn sản xuất chiều dài hay loại đầu lọc nào, chúng tôi sẽ giúp bạn chọn dây chuyền phù hợp với tốc độ của máy sản xuất.",
      ],
      faqs: [
        {
          question: "Bạn cung cấp những máy làm đầu lọc nào?",
          answer:
            "Chúng tôi cung cấp máy làm đầu lọc Hauni KDF-1 và KDF-2, máy làm đầu lọc Molins PM và máy làm ống rỗng cho các định dạng đặc biệt, dành cho các nhà máy sản xuất đoạn đầu lọc.",
        },
        {
          question: "Máy làm đầu lọc có thể khớp tốc độ với máy sản xuất thuốc lá của tôi không?",
          answer:
            "Có. Chúng tôi giúp bạn chọn dây chuyền đầu lọc khớp tốc độ với máy sản xuất, để cả hai vận hành đồng bộ và dây chuyền luôn cân bằng.",
        },
        {
          question: "Bạn có cung cấp máy làm đầu lọc mới và tân trang không?",
          answer:
            "Cả hai. Mỗi máy KDF hoặc PM tân trang đều được kiểm tra, bảo dưỡng và thử nghiệm trước khi bán.",
        },
        {
          question: "Bạn có lắp đặt và hỗ trợ máy làm đầu lọc không?",
          answer:
            "Có, lắp đặt, phụ tùng và dịch vụ đều được bao gồm. Nhắn tin cho chúng tôi qua WhatsApp theo số +92 301 1111184 để biết giá và hàng có sẵn.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Máy sản xuất",
      title: "Máy cắt, cấp liệu & thu hồi thuốc sợi tại Việt Nam",
      description:
        "Thiết bị thuốc sợi tại Pakistan, máy cấp liệu, máy cắt, máy thu hồi và máy làm phẳng cọng giữ cho sàn sản xuất sơ cấp và thứ cấp của bạn luôn vận hành. Được cung cấp bởi Civic Tobacco Machinery.",
      intro: [
        "Đằng sau mỗi máy sản xuất và máy đóng gói là một loạt máy móc thầm lặng hơn đang làm công việc nặng nhọc — cấp liệu thuốc sợi, cắt thuốc, cứu vãn những gì lẽ ra sẽ bị lãng phí. Civic Tobacco Machinery cung cấp thiết bị thuốc sợi tại Pakistan giữ cho phần này của sàn sản xuất luôn vận hành.",
        "Máy cấp liệu, máy cắt, máy thu hồi và máy làm phẳng cọng cùng hoạt động để duy trì nguồn cung ổn định cho dây chuyền của bạn và giảm lãng phí. Chúng tôi giúp bạn lắp đặt đúng thiết bị quanh các máy sản xuất và đóng gói bạn đang vận hành.",
      ],
      faqs: [
        {
          question: "Máy cấp liệu, máy cắt và máy thu hồi thuốc sợi làm gì?",
          answer:
            "Máy cấp liệu giữ cho máy sản xuất luôn được cung cấp thuốc sợi, máy cắt cắt lá thuốc theo kích thước cho sản xuất, và máy thu hồi khôi phục thuốc sợi từ các điếu thuốc bị loại bỏ để tái sử dụng, giữ cho sàn sản xuất sơ cấp và thứ cấp vận hành trơn tru.",
        },
        {
          question: "Thiết bị này có thể giảm lãng phí thuốc sợi không?",
          answer:
            "Có. Máy thu hồi khôi phục thuốc sợi có thể sử dụng được từ các điếu bị loại bỏ, giúp giảm lãng phí và hạ chi phí vận hành theo thời gian.",
        },
        {
          question: "Bạn cung cấp những thương hiệu nào?",
          answer:
            "Chúng tôi cung cấp các máy được hỗ trợ tốt như máy cắt thuốc sợi Hauni KT-400, cùng với máy cấp liệu thuốc sợi, máy thu hồi thuốc lá và máy làm phẳng cọng.",
        },
        {
          question: "Máy mới hay tân trang, và bạn có hỗ trợ chúng không?",
          answer:
            "Cả máy mới và tân trang đều có sẵn, tất cả đều được thử nghiệm trước khi bán, kèm lắp đặt, phụ tùng và dịch vụ. Liên hệ với chúng tôi qua WhatsApp theo số +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Máy sản xuất thuốc lá tại Việt Nam",
    intro:
      "Máy sản xuất là trái tim của mọi nhà máy thuốc lá. Nó lấy thuốc sợi đã cắt và giấy để tạo thành một điếu thuốc hoàn chỉnh, hàng nghìn lần mỗi phút, mà không gián đoạn chất lượng.",
    seeAll: "Xem tất cả →",
  },
  blog: {
    eyebrow: "Blog",
    indexTitle: "Hướng dẫn & tư vấn về thiết bị thuốc lá",
    indexIntro:
      "Các bài viết thẳng thắn giúp bạn chọn, mua và vận hành thiết bị thuốc lá và thuốc sợi, được viết bởi những người làm việc với các máy này mỗi ngày.",
    metaTitle: "Blog | Civic Tobacco Machinery",
    metaDescription:
      "Hướng dẫn thực tế về thiết bị thuốc lá và thuốc sợi, cách chọn máy đóng gói, so sánh máy sản xuất và mua máy đã qua sử dụng tại Pakistan. Từ Civic Tobacco Machinery.",
    readArticle: "Đọc bài viết →",
    minRead: "phút đọc",
    tags: "Thẻ:",
    backToAll: "← Quay lại tất cả bài viết",
    keepReading: "Đọc tiếp",
    dateLocale: "vi-VN",
  },
  product: {
    keyFeatures: "Đặc điểm chính",
    specifications: "Thông số kỹ thuật",
    description: "Mô tả",
    bestSuitedFor: "Phù hợp nhất cho",
    call: "Gọi",
    interested: "Quan tâm đến máy này?",
    askAbout: "Hỏi về",
    enquiryText:
      "Gửi cho chúng tôi tin nhắn nhanh để biết giá, hàng có sẵn hiện tại và tình trạng. Chúng tôi cũng sẽ cho bạn biết về các máy phù hợp để hoàn thiện dây chuyền của bạn.",
    related: "Máy liên quan",
    thumbs: { front: "Mặt trước", detail: "Chi tiết", operation: "Đang vận hành" },
    waMessage: (name) =>
      `Xin chào, tôi quan tâm đến ${name}. Vui lòng cho tôi biết giá và hàng có sẵn.`,
  },
};

/* ---------------------------------------------------------------------------
 * Indonesian (id-ID)
 * ------------------------------------------------------------------------- */

const id: Dictionary = {
  nav: {
    about: "Tentang Kami",
    making: "Mesin Pembuat Rokok",
    packing: "Mesin Pengemas Rokok",
    filter: "Mesin Filter",
    wrappers: "Mesin Pembungkus & Pengardus",
    cutter: "Pemotong/Pengumpan/Reklaimer",
    contact: "Hubungi Kami",
  },
  header: {
    tagline: "Produsen Mesin Rokok & Tembakau di Indonesia",
    call: "Telepon",
    whatsapp: "WhatsApp",
    region: "Indonesia",
  },
  megaMenu: {
    prompt: "Mencari mesin tertentu atau satu lini lengkap?",
    viewAll: "Lihat semua mesin produksi →",
  },
  productCard: { viewDetails: "Lihat detail" },
  breadcrumbHome: "Beranda",
  faqHeading: "Pertanyaan yang sering diajukan",
  emptyNote:
    "Mesin dalam kategori ini ditambahkan secara berkala. Hubungi kami untuk stok terkini.",
  cta: {
    title: "Belum yakin mesin mana yang Anda butuhkan?",
    text: "Beri tahu kami format, target output, dan anggaran Anda. Kami akan merekomendasikan mesin yang tepat, baru atau rekondisi, dan membantu Anda menjalankannya.",
    whatsapp: "WhatsApp",
    enquiry: "Kirim Pertanyaan",
  },
  footer: {
    blurb:
      "Pemasok mesin pembuat, pengemas, dan pembungkus rokok baru dan bekas di Pakistan, dengan pemasangan, suku cadang, dan servis yang dapat Anda andalkan.",
    machines: "Mesin",
    manufacturing: "Produksi",
    reachUs: "Hubungi Kami",
    ourBlog: "Blog Kami",
    hours: "Sen–Sab, 09:00–18:00",
    rights: "Hak cipta dilindungi undang-undang.",
    links: { home: "Beranda", about: "Tentang Kami", blog: "Blog", contact: "Hubungi Kami" },
    labels: {
      "/cigarette-packing-machines": "Mesin Pengemas",
      "/cigarette-box-wrapping-machines": "Mesin Pembungkus",
      "/cigarette-manufacturing-machines": "Mesin Produksi",
      "/cigarette-making-machines": "Mesin Pembuat Rokok",
      "/cigarette-filter-making-machines": "Mesin Pembuat Filter Rokok",
      "/cutter-feeder-reclaimer": "Peralatan Tembakau",
    },
  },
  switcher: { label: "Bahasa" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Mesin Rokok Indonesia",
    metaDescription:
      "Civic Tobacco Machinery memasok mesin pembuat, pengemas, dan pembungkus rokok di Pakistan. Peralatan tembakau baru dan bekas, lini pembuat filter, suku cadang, dan dukungan pemasangan penuh.",
    hero: {
      h1: "Mencari Mesin Rokok & Tembakau di Indonesia?",
      lead: "Anda berada di tempat yang tepat. Dari batang rokok pertama hingga karton jadi, Civic Tobacco Machinery melengkapi Anda dengan lini pembuat, filter, pengemas, dan pembungkus baru maupun rekondisi, terpasang, disetel, dan didukung oleh suku cadang serta servis yang dapat Anda andalkan.",
      getQuote: "Dapatkan Penawaran",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Jelajahi berdasarkan jenis mesin",
    browse: {
      packing: "Mesin Pengemas Rokok",
      wrapping: "Mesin Pembungkus Rokok",
      making: "Mesin Pembuat Rokok",
      used: "Mesin Rokok Bekas",
    },
    viewRange: "Lihat jangkauan produk →",
    about: {
      eyebrow: "Tentang Kami",
      h2: "Generasi Keunggulan Rekayasa dalam Mesin Tembakau",
      lead: "Bisnis keluarga ayah dan anak, kini memasuki generasi ketiga, dengan pengalaman langsung lebih dari 35 tahun di industri tembakau.",
      p1: "Selama beberapa dekade, keluarga kami bekerja di satu bidang mesin tembakau. Yang dimulai sebagai usaha dagang kecil telah berkembang menjadi nama tepercaya lintas generasi yang diandalkan oleh perusahaan rokok baru maupun mapan di seluruh Pakistan untuk membangun dan menjalankan lini produksi mereka.",
      p2: "Kami adalah produsen mesin tembakau spesialis yang menawarkan solusi lengkap satu atap. Dari mesin pembuat dan filter hingga pengemas dan pembungkus, kami membantu Anda mendapatkan peralatan yang tepat, melihatnya beroperasi sebelum membeli, dan memasang serta menyetelnya di lantai produksi Anda sendiri. Kami juga menyediakan demonstrasi dan pelatihan gratis untuk teknisi Anda, agar tim Anda percaya diri menggunakan mesin sejak hari pertama.",
      bullets: [
        "Bisnis keluarga lintas generasi",
        "Mesin baru & rekondisi",
        "Lini lengkap, dari pembuat hingga pengemas",
        "Demonstrasi & pelatihan teknisi",
      ],
      more: "Selengkapnya Tentang Kami",
    },
    featured: {
      eyebrow: "Tersedia & Populer",
      h2: "Mesin Unggulan",
      viewAll: "Lihat semua mesin →",
    },
    why: {
      eyebrow: "Mengapa Civic Tobacco Machinery",
      h2: "Mesin yang Tepat, Disiapkan untuk Bertahan Lama",
      reasons: [
        {
          title: "Mesin yang terus beroperasi",
          text: "Kami tetap menggunakan merek yang terbukti dengan ketersediaan suku cadang yang mudah, sehingga lini produksi Anda tetap produktif shift demi shift.",
        },
        {
          title: "Laporan kondisi yang jujur",
          text: "Setiap mesin bekas diperiksa, diservis, dan diuji. Anda mendapatkan gambaran kondisi yang jelas, tanpa kejutan.",
        },
        {
          title: "Dukungan lini lengkap",
          text: "Dari pembuat hingga pengemas, kami membantu Anda memadukan mesin agar tidak ada yang menjadi hambatan, dan kami memasang serta mendukungnya.",
        },
        {
          title: "Bantuan lokal, langsung di lapangan",
          text: "Kami berbasis tepat di sini, di Pakistan. Saat Anda membutuhkan suku cadang atau teknisi, bantuan selalu dekat, bukan dari luar negeri.",
        },
      ],
    },
    ranges: {
      making: "Mesin Pembuat Rokok",
      packing: "Mesin Pengemas Rokok",
      filter: "Mesin Pembuat Filter Rokok",
      wrapping: "Mesin Pembungkus Kotak Rokok",
    },
    carousel: {
      eyebrow: "Stok Kami",
      heading: "Mesin Tembakau untuk Dijual",
      viewAllPrefix: "Lihat semua ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Galeri",
      heading: "Civic Tobacco Machinery dalam Gambar",
      text: "Momen dari pameran tembakau internasional dan pertemuan dengan mitra serta pelanggan kami di seluruh dunia.",
    },
    local: {
      eyebrow: "Melayani Seluruh Pakistan",
      h2: "Mitra Mesin Tembakau Anda di Pakistan",
      text: "Berbasis di kawasan industri SITE membuat kami dekat dengan pabrik yang kami layani. Saat Anda membutuhkan suku cadang, teknisi, atau saran jujur tentang sebuah mesin, Anda berhadapan dengan orang-orang yang tinggal di kota yang sama, bukan pemasok dari benua lain.",
      bullets: [
        "Dukungan lokal cepat dan suku cadang",
        "Pemasangan dan penyetelan di pabrik Anda",
        "Mesin baru dan rekondisi untuk setiap anggaran",
      ],
      visitHeading: "Kunjungi atau Hubungi Kami",
      directions: "Dapatkan Petunjuk Arah & Kontak",
    },
    faqHeading: {
      eyebrow: "Pertanyaan Umum",
      h2: "Pertanyaan yang Sering Diajukan",
    },
    faqs: [
      {
        question: "Apakah Anda menjual mesin rokok baru maupun bekas di Indonesia?",
        answer:
          "Ya. Kami memasok mesin baru serta mesin rokok dan tembakau bekas yang direkondisi dengan cermat. Setiap mesin bekas diperiksa, diservis, dan diuji sebelum kami jual, dan dilengkapi laporan kondisi yang jujur agar Anda tahu persis apa yang Anda beli.",
      },
      {
        question: "Merek mesin pembuat rokok apa saja yang Anda tangani?",
        answer:
          "Kami terutama bekerja dengan merek yang didukung dengan baik seperti Molins untuk mesin pembuat dan filter, serta HLP dan SASIB untuk pengemasan dan pembungkusan. Merek-merek ini dipilih karena suku cadang dan teknisi terlatih mudah ditemukan, yang membuat lini Anda tetap berjalan selama bertahun-tahun.",
      },
      {
        question: "Apakah Anda memasang mesin dan menyediakan suku cadang?",
        answer:
          "Ya. Kami membantu pemasangan dan penyetelan mesin dengan benar di lantai produksi Anda, dan mendukung Anda setelahnya dengan suku cadang dan servis. Menjalankan mesin pembuat atau pengemas bukan pekerjaan yang langsung siap pakai, jadi kami tetap terlibat hingga mesin berjalan sebagaimana mestinya.",
      },
      {
        question: "Di mana lokasi Anda dan apakah Anda mengirim ke seluruh Pakistan?",
        answer:
          "Bengkel kami berada di kawasan industri SITE di Karachi. Kami melayani pelanggan di seluruh Pakistan dan dapat mengatur pengiriman serta pemasangan di mana pun pabrik Anda berada.",
      },
    ],
  },

  about: {
    metaTitle: "Tentang Kami | Civic Tobacco Machinery",
    metaDescription:
      "Tentang Civic Tobacco Machinery, pemasok mesin rokok dan tembakau di Pakistan. Siapa kami, apa yang kami perjuangkan, dan bagaimana kami mendukung pabrik Anda dengan mesin baru dan bekas.",
    hero: {
      eyebrow: "Tentang Kami",
      title: "Mesin Rokok & Tembakau, Didukung oleh Orang-orang yang Memahaminya",
      intro:
        "Civic Tobacco Machinery telah bertahun-tahun membantu pabrik di seluruh Pakistan membangun, memperluas, dan memelihara lini produksi rokok mereka.",
    },
    whoHeading: "Siapa kami",
    who: [
      "Kami adalah pemasok mesin rokok dan tembakau yang berbasis di Pakistan. Selama bertahun-tahun kami telah bekerja dengan berbagai jenis pelanggan, dari bengkel kecil yang baru memulai langkah pertama mereka dalam produksi rokok hingga pabrik mapan yang menambah lini kedua atau ketiga. Pengalaman itu membentuk cara kami bekerja — kami mendengarkan terlebih dahulu, memahami apa yang benar-benar Anda butuhkan, lalu mengarahkan Anda ke mesin yang sesuai.",
      "Jangkauan produk kami mencakup seluruh lini: mesin pembuat yang membentuk batang rokok, mesin pembuat filter, mesin pengemas untuk kemasan keras dan lunak, mesin pembungkus dan pengardus, serta peralatan tembakau yang menjaga lantai produksi tetap terpasok. Kami menyediakan peralatan baru maupun bekas yang direkondisi dengan cermat, sehingga selalu ada pilihan yang masuk akal untuk anggaran Anda.",
    ],
    howHeading: "Cara kami bekerja",
    how: [
      "Membeli mesin hanyalah setengah dari cerita. Mesin pembuat atau pengemas harus dipasang dengan benar, disetel dengan tepat, dan dijaga tetap berjalan, dan di sanalah banyak pemasok menghilang. Kami tidak. Kami membantu Anda memasang mesin di lantai produksi dan menjalankannya sebagaimana mestinya, dan kami tetap dapat dihubungi setelahnya untuk suku cadang dan servis.",
      "Karena kami berbasis tepat di kawasan industri SITE, dukungan itu benar-benar bersifat lokal. Saat ada sesuatu yang perlu ditangani, Anda berbicara dengan orang-orang di kota yang sama, bukan menunggu pemasok di negara dan zona waktu lain.",
    ],
    brandsHeading: "Merek yang kami percayai",
    brands:
      "Kami berfokus pada nama-nama yang telah terbukti — Molins untuk mesin pembuat dan filter, HLP dan SASIB untuk pengemasan dan pembungkusan, serta keluarga Protos untuk lini berkecepatan tinggi. Kami memilih merek-merek ini bukan karena namanya, tetapi karena suku cadang dan pengetahuannya mudah ditemukan, yang justru membuat mesin tetap menguntungkan selama bertahun-tahun.",
    glance: {
      heading: "Sekilas",
      basedIn: "Berbasis di",
      basedInValue: "SITE, Karachi, Pakistan",
      supply: "Kami memasok",
      supplyValue: "Peralatan tembakau baru & bekas",
      serve: "Kami melayani",
      serveValue: "Seluruh Pakistan",
      call: "Telepon / WhatsApp",
      talk: "Hubungi Kami",
    },
    valuesEyebrow: "Apa yang Kami Perjuangkan",
    valuesHeading: "Cara Kami Berbisnis",
    values: [
      {
        title: "Kejujuran di atas segalanya",
        text: "Kami memberi tahu kondisi sebenarnya dari sebuah mesin dan kemampuannya. Penjualan yang membuat Anda tidak puas sama sekali bukanlah penjualan.",
      },
      {
        title: "Mesin yang akan kami operasikan sendiri",
        text: "Kami menangani merek dan model yang kami percayai — yang memiliki ketersediaan suku cadang baik dan usia pakai yang panjang.",
      },
      {
        title: "Dukungan yang bertahan",
        text: "Pekerjaan kami tidak berakhir saat pengiriman. Kami membantu pemasangan, penyetelan, suku cadang, dan servis dalam jangka panjang.",
      },
      {
        title: "Nilai yang adil",
        text: "Baru atau rekondisi, kami membantu Anda mendapatkan mesin yang tepat untuk anggaran Anda tanpa mengorbankan hal-hal yang penting.",
      },
    ],
    ctaTitle: "Mari bicarakan lini produksi Anda",
    ctaText:
      "Baik Anda baru memulai atau sedang berkembang, beri tahu kami apa yang ingin Anda produksi dan kami akan membantu Anda mencapainya.",
  },

  contact: {
    metaTitle: "Hubungi Kami | Civic Tobacco Machinery",
    metaDescription:
      "Hubungi Civic Tobacco Machinery di Pakistan. Telepon, WhatsApp, atau kirim pertanyaan tentang mesin pembuat, pengemas, pembungkus rokok, dan mesin bekas. Bengkel di SITE, Karachi.",
    hero: {
      eyebrow: "Hubungi Kami",
      title: "Hubungi Civic Tobacco Machinery",
      intro:
        "Beri tahu kami apa yang Anda cari dan kami akan menghubungi Anda kembali pada hari kerja yang sama. Telepon, WhatsApp, email, atau kirim formulir di bawah ini.",
    },
    directHeading: "Hubungi kami langsung",
    directText:
      "Cara tercepat untuk mendapatkan jawaban pasti tentang sebuah mesin, kondisinya, harga, atau ketersediaannya adalah dengan mengirim pesan kepada kami di WhatsApp atau menelepon kami.",
    rows: {
      visit: "Kunjungi bengkel kami",
      call: "Hubungi kami",
      whatsapp: "WhatsApp",
      whatsappValue: "Kirim pesan kepada kami di",
      email: "Email",
      hours: "Jam operasional",
      hoursValue: "Senin – Sabtu, 09:00 – 18:00",
      hoursClosed: "Tutup pada hari Minggu",
    },
    openInMaps: "Buka di Google Maps",
    formHeading: "Kirim pertanyaan",
    formIntro:
      "Isi formulir ini dan kami akan segera menghubungi Anda kembali. Kolom yang ditandai wajib membantu kami memberikan jawaban yang akurat.",
    form: {
      name: "Nama Anda",
      namePlaceholder: "mis. Ahmed Khan",
      phone: "Telepon / WhatsApp",
      phonePlaceholder: "mis. 0300 1234567",
      email: "Email",
      emailOptional: "(opsional)",
      emailPlaceholder: "you@company.com",
      interest: "Mesin yang Anda minati",
      interestPlaceholder: "mis. Mesin pengemas HLP-200",
      message: "Pesan Anda",
      messagePlaceholder: "Beri tahu kami format, target output, dan detail lainnya.",
      submit: "Kirim Pertanyaan",
      sending: "Mengirim…",
      successTitle: "Terima kasih!",
      successText:
        "Pertanyaan Anda telah terkirim. Tim kami akan segera menghubungi Anda, biasanya pada hari kerja yang sama.",
      errorText:
        "Maaf, terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi, atau",
      errorWhatsApp: "kirim pesan kepada kami di WhatsApp",
      footnote:
        "Detail Anda langsung sampai ke tim kami — kami biasanya membalas pada hari kerja yang sama. Lebih suka mengobrol?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Mesin Produksi",
      title: "Mesin Pembuat Rokok di Indonesia",
      description:
        "Mesin pembuat rokok di Pakistan, mesin pembuat Molins, mesin pembuat filter, dan peralatan tembakau. Lini baru dan rekondisi dari Civic Tobacco Machinery.",
      intro: [
        "Rokok yang baik dimulai jauh sebelum kemasan. Semuanya dimulai dari mesin pembuat yang menghasilkan batang yang rata, lini filter yang memotong dengan bersih, dan peralatan tembakau yang menjaga seluruh lantai produksi tetap terpasok. Civic Tobacco Machinery memasok mesin pembuat rokok di Pakistan untuk ketiga bidang tersebut.",
        "Kami menangani mesin pembuat Molins, mesin pembuat filter KDF dan PM, serta pengumpan, pemotong, dan reklaimer yang mendukungnya. Beri tahu kami merek yang Anda jalankan dan output yang Anda butuhkan, dan kami akan membantu Anda membangun lini yang menjaga kecepatan dan kualitasnya hari demi hari.",
      ],
      faqs: [
        {
          question: "Mesin pembuat rokok apa saja yang Anda pasok?",
          answer:
            "Kami memasok lini pembuat lengkap: mesin pembuat Molins Mark 8, Mark 9, dan Mark 9.5 serta mesin pembuat Hauni Protos, ditambah mesin pembuat filter KDF dan Molins serta pengumpan, pemotong, dan reklaimer tembakau yang mendukungnya.",
        },
        {
          question: "Berapa rokok per menit yang dihasilkan mesin pembuat?",
          answer:
            "Tergantung modelnya, mesin pembuat kami berjalan dari sekitar 3.000 hingga 8.000 rokok per menit, sehingga Anda dapat menyesuaikan mesin dengan target output Anda.",
        },
        {
          question: "Apakah Anda memasok mesin baru atau rekondisi?",
          answer:
            "Keduanya. Mesin Molins dan Hauni yang direkondisi telah diperiksa, diservis, dan diuji sepenuhnya sebelum dijual, menawarkan nilai kuat untuk pabrik yang sedang berkembang.",
        },
        {
          question: "Apakah Anda membantu memadukan mesin pembuat dengan lini filter yang tepat?",
          answer:
            "Ya. Kami memastikan mesin pembuat dan mesin pembuat filter berjalan selaras agar seluruh lini tetap seimbang. Beri tahu kami merek dan target output Anda, dan kami akan merekomendasikan konfigurasi yang sesuai.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Mesin Pengemas",
      title: "Mesin Pengemas Rokok di Indonesia",
      description:
        "Mesin pengemas rokok di Pakistan, lini HLP dan SASIB untuk kemasan keras dan lunak dari 180 hingga 225 kemasan per menit. Dipasok, dipasang, dan didukung oleh Civic Tobacco Machinery.",
      intro: [
        "Lini pengemasan adalah tempat produk Anda akhirnya terbentuk, sehingga harus stabil, bersih, dan mudah dijalankan shift demi shift. Di Civic Tobacco Machinery kami memasok mesin pengemas rokok di Pakistan yang dipilih tepat untuk itu — output yang dapat diandalkan dan kemasan yang terlihat sama setiap saat.",
        "Jangkauan produk kami mencakup format kemasan keras dan lunak, dari 180 hingga 225 kemasan per menit, dengan opsi baru maupun rekondisi yang dicermati. Baik Anda menyiapkan lini baru atau menambah kapasitas pada lini yang ada, kami membantu Anda memadukan mesin yang tepat dengan volume, anggaran, dan merek yang Anda produksi.",
      ],
      faqs: [
        {
          question: "Apa perbedaan antara mesin kemasan keras dan lunak?",
          answer:
            "Kemasan keras (kotak berengsel) berjalan pada mesin bergaya HLP, sedangkan kemasan lunak (foil lipat dan sampul cetak) berjalan pada mesin bergaya SASIB. Kami memasok keduanya dan membantu Anda memadukan mesin dengan format kemasan yang benar-benar dijual oleh merek Anda.",
        },
        {
          question: "Kecepatan pengemasan apa yang Anda tawarkan?",
          answer:
            "Mesin pengemas rokok kami berjalan dari sekitar 180 hingga 225 kemasan per menit. Pilih kecepatan yang sesuai dengan permintaan shift nyata Anda dengan sedikit ruang untuk berkembang, alih-alih membayar kapasitas yang menganggur.",
        },
        {
          question: "Apakah Anda menjual mesin pengemas baru atau rekondisi?",
          answer:
            "Keduanya. Setiap mesin pengemas HLP atau SASIB bekas diperiksa, diservis, dan diuji sebelum dijual, sehingga mesin rekondisi yang baik dapat berjalan bertahun-tahun dengan sebagian kecil dari harga baru.",
        },
        {
          question: "Apakah Anda memasang mesin dan memasok suku cadang?",
          answer:
            "Ya. Kami memasang dan menyetel mesin, serta mendukung HLP dan SASIB dengan suku cadang dan servis yang tersedia luas. Kirim pesan kepada kami di WhatsApp di +92 301 1111184 untuk harga dan ketersediaan terkini.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Mesin Pembungkus",
      title: "Mesin Pembungkus Rokok di Indonesia",
      description:
        "Mesin pembungkus rokok di Pakistan, pembungkus luar, pengardus, dan mesin pembungkus selofan yang menyegel kemasan Anda dengan bersih. Penjualan, suku cadang, dan servis dari Civic Tobacco Machinery.",
      intro: [
        "Pembungkus adalah hal terakhir yang dilihat pelanggan Anda sebelum membuka kemasan, itulah sebabnya penyegelan yang bersih dan rapat begitu penting. Civic Tobacco Machinery memasok mesin pembungkus rokok di Pakistan yang memberi Anda hasil akhir film yang rapi, pita sobek yang lurus, dan kemasan yang tetap segar di rak.",
        "Dari pembungkus satu kemasan hingga mesin pembungkus kotak dan pengardus, kami mencakup seluruh jangkauan. Setiap mesin yang kami jual diperiksa, disetel, dan diserahkan siap dijalankan, dengan suku cadang dan servis yang dapat Anda andalkan saat dibutuhkan.",
      ],
      faqs: [
        {
          question: "Apa perbedaan antara pembungkus luar dan pengardus?",
          answer:
            "Pembungkus luar menyegel setiap kemasan dalam film selofan dengan pita sobek, sedangkan pengardus (mesin pengarton) mengelompokkan kemasan jadi ke dalam karton atau kotak. Sebagian besar lini menggunakan keduanya, satu demi satu.",
        },
        {
          question: "Mesin pembungkus dan pengardus apa saja yang Anda pasok?",
          answer:
            "Kami memasok pembungkus luar dan pengardus Molins serta SASIB, termasuk pembungkus kemasan CP1, pembungkus luar tanpa kotak, serta pengardus Molins dan SASIB, untuk lini kemasan keras maupun lunak.",
        },
        {
          question: "Apakah Anda menawarkan mesin pembungkus baru atau rekondisi?",
          answer:
            "Baik unit baru maupun rekondisi yang dicermati tersedia. Setiap mesin bekas diperiksa, disetel, dan diserahkan siap dijalankan.",
        },
        {
          question: "Apakah Anda menyediakan pemasangan dan suku cadang?",
          answer:
            "Ya, pemasangan, penyetelan, suku cadang, dan servis semuanya bagian dari yang kami lakukan. Hubungi kami di WhatsApp di +92 301 1111184 untuk penawaran harga.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Mesin Produksi",
      title: "Mesin Pembuat Filter Rokok di Indonesia",
      description:
        "Mesin pembuat filter rokok di Pakistan, Molins KDF, Molins PM, dan mesin pembuat tabung berongga. Lini batang filter dipasok dan didukung oleh Civic Tobacco Machinery.",
      intro: [
        "Filter yang baik melakukan lebih dari sekadar menyelesaikan rokok — ia mengendalikan hisapan, kekokohan, dan seluruh sensasi asap. Civic Tobacco Machinery memasok mesin pembuat filter rokok di Pakistan yang menghasilkan batang konsisten yang dapat diandalkan oleh mesin pembuat Anda.",
        "Kami menyediakan mesin pembuat filter Molins KDF dan Molins PM bersama mesin pembuat tabung berongga untuk format khusus. Apa pun panjang atau jenis filter yang Anda produksi, kami akan membantu Anda memilih lini yang sesuai dengan kecepatan mesin pembuat Anda.",
      ],
      faqs: [
        {
          question: "Mesin pembuat filter apa saja yang Anda pasok?",
          answer:
            "Kami memasok mesin pembuat filter Hauni KDF-1 dan KDF-2, mesin pembuat filter Molins PM, dan mesin pembuat tabung berongga untuk format khusus, untuk pabrik yang menjalankan produksi batang filter.",
        },
        {
          question: "Bisakah mesin pembuat filter menyesuaikan kecepatan dengan mesin pembuat rokok saya?",
          answer:
            "Ya. Kami membantu Anda memilih lini filter yang sesuai dengan kecepatan mesin pembuat Anda sehingga keduanya berjalan selaras dan lini tetap seimbang.",
        },
        {
          question: "Apakah Anda menawarkan mesin pembuat filter baru dan rekondisi?",
          answer:
            "Keduanya. Setiap mesin KDF atau PM rekondisi diperiksa, diservis, dan diuji sebelum dijual.",
        },
        {
          question: "Apakah Anda memasang dan mendukung mesin pembuat filter?",
          answer:
            "Ya, pemasangan, suku cadang, dan servis sudah termasuk. Kirim pesan kepada kami di WhatsApp di +92 301 1111184 untuk harga dan ketersediaan.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Mesin Produksi",
      title: "Mesin Pemotong, Pengumpan & Reklaimer Tembakau di Indonesia",
      description:
        "Peralatan tembakau di Pakistan, pengumpan, pemotong, reklaimer, dan pemipih batang yang menjaga lantai produksi utama dan sekunder Anda tetap berjalan. Dipasok oleh Civic Tobacco Machinery.",
      intro: [
        "Di balik setiap mesin pembuat dan pengemas terdapat serangkaian mesin yang lebih tenang yang melakukan pekerjaan berat — memasok tembakau, memotongnya, menyelamatkan apa yang jika tidak akan terbuang. Civic Tobacco Machinery memasok peralatan tembakau di Pakistan yang menjaga sisi lantai produksi ini tetap bergerak.",
        "Pengumpan, pemotong, reklaimer, dan pemipih batang bekerja sama untuk menjaga pasokan yang stabil ke lini Anda dan mengurangi limbah. Kami membantu Anda memasang unit yang tepat di sekitar mesin pembuat dan pengemas yang sudah Anda jalankan.",
      ],
      faqs: [
        {
          question: "Apa yang dilakukan pengumpan, pemotong, dan reklaimer tembakau?",
          answer:
            "Pengumpan menjaga mesin pembuat tetap terpasok tembakau, pemotong memotong daun sesuai ukuran untuk produksi, dan reklaimer memulihkan tembakau dari rokok yang ditolak agar dapat digunakan kembali, menjaga lantai produksi utama dan sekunder tetap berjalan lancar.",
        },
        {
          question: "Bisakah peralatan ini mengurangi limbah tembakau?",
          answer:
            "Ya. Reklaimer memulihkan tembakau yang dapat digunakan dari batang yang ditolak, yang mengurangi limbah dan menurunkan biaya operasional seiring waktu.",
        },
        {
          question: "Merek apa saja yang Anda pasok?",
          answer:
            "Kami memasok mesin yang didukung dengan baik seperti pemotong tembakau Hauni KT-400, bersama pengumpan tembakau, reklaimer rokok, dan pemipih batang.",
        },
        {
          question: "Apakah mesinnya baru atau rekondisi, dan apakah Anda mendukungnya?",
          answer:
            "Baik unit baru maupun rekondisi tersedia, semuanya diuji sebelum dijual, dengan pemasangan, suku cadang, dan servis. Hubungi kami di WhatsApp di +92 301 1111184.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Mesin Pembuat Rokok di Indonesia",
    intro:
      "Mesin pembuat adalah jantung dari setiap pabrik rokok. Ia mengambil tembakau dan kertas yang telah dipotong dan mengubahnya menjadi batang jadi, ribuan kali per menit, tanpa jeda dalam kualitas.",
    seeAll: "Lihat semua →",
  },
  blog: {
    eyebrow: "Blog",
    indexTitle: "Panduan & Saran tentang Mesin Rokok",
    indexIntro:
      "Artikel yang jujur dan lugas untuk membantu Anda memilih, membeli, dan menjalankan mesin rokok dan tembakau, ditulis oleh orang-orang yang bekerja dengan mesin ini setiap hari.",
    metaTitle: "Blog | Civic Tobacco Machinery",
    metaDescription:
      "Panduan praktis tentang mesin rokok dan tembakau, memilih mesin pengemas, membandingkan mesin pembuat, dan membeli mesin bekas di Pakistan. Dari Civic Tobacco Machinery.",
    readArticle: "Baca artikel →",
    minRead: "menit baca",
    tags: "Tag:",
    backToAll: "← Kembali ke semua artikel",
    keepReading: "Lanjutkan membaca",
    dateLocale: "id-ID",
  },
  product: {
    keyFeatures: "Fitur utama",
    specifications: "Spesifikasi",
    description: "Deskripsi",
    bestSuitedFor: "Paling cocok untuk",
    call: "Telepon",
    interested: "Tertarik dengan mesin ini?",
    askAbout: "Tanyakan tentang",
    enquiryText:
      "Kirimkan pesan singkat kepada kami untuk harga, ketersediaan terkini, dan kondisi. Kami juga akan memberi tahu Anda tentang mesin yang cocok untuk melengkapi lini Anda.",
    related: "Mesin terkait",
    thumbs: { front: "Tampilan depan", detail: "Detail", operation: "Sedang beroperasi" },
    waMessage: (name) =>
      `Halo, saya tertarik dengan ${name}. Mohon informasikan harga dan ketersediaannya.`,
  },
};

/* ---------------------------------------------------------------------------
 * Turkish (tr-TR)
 * ------------------------------------------------------------------------- */

const tr: Dictionary = {
  nav: {
    about: "Hakkımızda",
    making: "Sigara Üretim Makineleri",
    packing: "Sigara Paketleme Makineleri",
    filter: "Filtre Makineleri",
    wrappers: "Sargı & Kutulama Makineleri",
    cutter: "Kesici/Besleyici/Geri Kazanım",
    contact: "Bize Ulaşın",
  },
  header: {
    tagline: "Türkiye'de Sigara & Tütün Makineleri Üreticileri",
    call: "Ara",
    whatsapp: "WhatsApp",
    region: "Türkiye",
  },
  megaMenu: {
    prompt: "Belirli bir makine mi yoksa tam bir hat mı arıyorsunuz?",
    viewAll: "Tüm üretim makinelerini görüntüle →",
  },
  productCard: { viewDetails: "Detayları görüntüle" },
  breadcrumbHome: "Ana Sayfa",
  faqHeading: "Sıkça sorulan sorular",
  emptyNote:
    "Bu kategorideki makineler düzenli olarak eklenir. Güncel stok için bizimle iletişime geçin.",
  cta: {
    title: "Hangi makineye ihtiyacınız olduğundan emin değil misiniz?",
    text: "Bize formatınızı, hedef üretiminizi ve bütçenizi bildirin. Sıfır veya yenilenmiş, doğru makineyi önerelim ve çalışır hale getirmenize yardımcı olalım.",
    whatsapp: "WhatsApp",
    enquiry: "Talep Gönderin",
  },
  footer: {
    blurb:
      "Pakistan'da güvenebileceğiniz montaj, yedek parça ve servis hizmetiyle sıfır ve ikinci el sigara üretim, paketleme ve sargı makineleri tedarikçisi.",
    machines: "Makineler",
    manufacturing: "Üretim",
    reachUs: "Bize Ulaşın",
    ourBlog: "Blogumuz",
    hours: "Pzt–Cmt, 09:00–18:00",
    rights: "Tüm hakları saklıdır.",
    links: { home: "Ana Sayfa", about: "Hakkımızda", blog: "Blog", contact: "Bize Ulaşın" },
    labels: {
      "/cigarette-packing-machines": "Paketleme Makineleri",
      "/cigarette-box-wrapping-machines": "Sargı Makineleri",
      "/cigarette-manufacturing-machines": "Üretim Makineleri",
      "/cigarette-making-machines": "Sigara Üretim Makineleri",
      "/cigarette-filter-making-machines": "Sigara Filtre Üretim Makineleri",
      "/cutter-feeder-reclaimer": "Tütün Ekipmanları",
    },
  },
  switcher: { label: "Dil" },

  home: {
    metaTitle: "Civic Tobacco Machinery | Sigara Makineleri Türkiye",
    metaDescription:
      "Civic Tobacco Machinery, Pakistan'da sigara üretim, paketleme ve sargı makineleri tedarik eder. Sıfır ve ikinci el tütün ekipmanları, filtre üretim hatları, yedek parça ve tam montaj desteği.",
    hero: {
      h1: "Türkiye için Sigara & Tütün Makineleri mi Arıyorsunuz?",
      lead: "Doğru yerdesiniz. İlk çubuktan bitmiş kartona kadar, Civic Tobacco Machinery size sıfır ve yenilenmiş üretim, filtre, paketleme ve sargı hatları sunar; kurulur, ayarlanır ve güvenebileceğiniz yedek parça ve servisle desteklenir.",
      getQuote: "Teklif Alın",
      whatsapp: "WhatsApp",
    },
    browseHeading: "Makine türüne göre gözat",
    browse: {
      packing: "Sigara Paketleme Makineleri",
      wrapping: "Sigara Sargı Makineleri",
      making: "Sigara Üretim Makineleri",
      used: "İkinci El Sigara Makineleri",
    },
    viewRange: "Ürün gamını görüntüle →",
    about: {
      eyebrow: "Hakkımızda",
      h2: "Tütün Makinelerinde Nesiller Boyu Mühendislik Mükemmelliği",
      lead: "Tütün endüstrisinde 35 yılı aşkın uygulamalı deneyime sahip, şimdi üçüncü nesline giren gururlu bir baba-oğul işletmesi.",
      p1: "Onlarca yıldır ailemiz tütün makineleri alanında tek bir alanda çalışıyor. Küçük bir ticaret faaliyeti olarak başlayan iş, Pakistan genelindeki yeni ve köklü sigara şirketlerinin hatlarını kurmak ve işletmek için güvendiği, nesiller boyu güvenilir bir isme dönüştü.",
      p2: "Baştan sona kapsamlı bir çözüm sunan uzman tütün makineleri üreticileriyiz. Üretim ve filtre makinelerinden paketleyicilere ve sarma makinelerine kadar, doğru ekipmanı bulmanıza, satın almadan önce çalışırken görmenize ve kendi tesisinizde kurulup ayarlanmasına yardımcı oluyoruz. Ayrıca teknisyenleriniz için ücretsiz demonstrasyon ve eğitim sağlıyoruz, böylece ekibiniz ilk günden itibaren makineye güvenle hakim olur.",
      bullets: [
        "Nesiller boyu aile işletmesi",
        "Sıfır ve yenilenmiş makineler",
        "Üretimden paketlemeye tam hat",
        "Demonstrasyon ve teknisyen eğitimi",
      ],
      more: "Hakkımızda Daha Fazla",
    },
    featured: {
      eyebrow: "Stokta ve Popüler",
      h2: "Öne Çıkan Makineler",
      viewAll: "Tüm makineleri görüntüle →",
    },
    why: {
      eyebrow: "Neden Civic Tobacco Machinery",
      h2: "Kalıcı Olacak Şekilde Kurulmuş Doğru Makine",
      reasons: [
        {
          title: "Çalışmaya devam eden makineler",
          text: "Yedek parça bulmanın kolay olduğu kanıtlanmış markalara bağlı kalıyoruz, böylece hattınız vardiya boyunca üretken kalır.",
        },
        {
          title: "Dürüst durum raporları",
          text: "Her ikinci el makine incelenir, servisten geçirilir ve test edilir. Sürpriz olmadan makinenin gerçek durumu hakkında net bilgi alırsınız.",
        },
        {
          title: "Tam hat desteği",
          text: "Üretimden paketlemeye kadar, hiçbir şeyin darboğaz olmaması için makineleri eşleştirmenize yardımcı oluyoruz ve onları kuruyor, destekliyoruz.",
        },
        {
          title: "Yerel, sahadaki yardım",
          text: "Tam olarak burada, Pakistan'da bulunuyoruz. Parçaya veya bir teknisyene ihtiyacınız olduğunda, yardım denizaşırı değil, yakınınızdadır.",
        },
      ],
    },
    ranges: {
      making: "Sigara Üretim Makineleri",
      packing: "Sigara Paketleme Makineleri",
      filter: "Sigara Filtre Üretim Makineleri",
      wrapping: "Sigara Kutu Sargı Makineleri",
    },
    carousel: {
      eyebrow: "Stoğumuz",
      heading: "Satılık Sigara Makineleri",
      viewAllPrefix: "Tümünü görüntüle: ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "Galeri",
      heading: "Fotoğraflarla Civic Tobacco Machinery",
      text: "Uluslararası tütün fuarlarından ve dünya çapındaki iş ortaklarımız ve müşterilerimizle buluşmalarımızdan anlar.",
    },
    local: {
      eyebrow: "Türkiye'ye Hizmet Veriyoruz",
      h2: "Türkiye'deki Tütün Makineleri Ortağınız",
      text: "SITE sanayi bölgesinde bulunmamız, hizmet verdiğimiz fabrikalara yakın olmamızı sağlıyor. Bir parçaya, teknisyene veya bir makine hakkında dürüst bir tavsiyeye ihtiyacınız olduğunda, başka bir kıtadaki bir tedarikçiyle değil, şehrin öbür ucundaki insanlarla muhatap oluyorsunuz.",
      bullets: [
        "Hızlı yerel destek ve yedek parça",
        "Fabrikanızda kurulum ve ayarlama",
        "Her bütçeye uygun sıfır ve yenilenmiş makineler",
      ],
      visitHeading: "Bizi Ziyaret Edin veya Arayın",
      directions: "Yol Tarifi ve İletişim Alın",
    },
    faqHeading: {
      eyebrow: "Sık Sorulan Sorular",
      h2: "Sıkça Sorulan Sorular",
    },
    faqs: [
      {
        question: "Türkiye'de hem sıfır hem de ikinci el sigara makineleri satıyor musunuz?",
        answer:
          "Evet. Sıfır makinelerin yanı sıra dikkatle yenilenmiş ikinci el sigara ve tütün makineleri de tedarik ediyoruz. Her ikinci el makine satmadan önce incelenir, servisten geçirilir ve test edilir; ayrıca ne satın aldığınızı tam olarak bilmeniz için dürüst bir durum raporuyla birlikte gelir.",
      },
      {
        question: "Hangi sigara üretim makinesi markalarıyla çalışıyorsunuz?",
        answer:
          "Öncelikle üretim ve filtre makineleri için Molins gibi iyi desteklenen markalarla, paketleme ve sargı için HLP ve SASIB ile çalışıyoruz. Bu markalar seçildi çünkü parça ve eğitimli teknisyen bulmak kolay, bu da hattınızın yıllarca çalışmasını sağlıyor.",
      },
      {
        question: "Makineleri kuruyor musunuz ve yedek parça sağlıyor musunuz?",
        answer:
          "Evet. Makinenin tesisinizde doğru şekilde kurulması ve ayarlanmasına yardımcı oluyoruz ve sonrasında yedek parça ve servisle sizi destekliyoruz. Bir üretim veya paketleme makinesini çalışır hale getirmek tak-çalıştır bir iş değildir, bu yüzden gerektiği gibi çalışana kadar süreçte yer almaya devam ediyoruz.",
      },
      {
        question: "Nerede bulunuyorsunuz ve Pakistan genelinde teslimat yapıyor musunuz?",
        answer:
          "Atölyemiz Karaçi'deki SITE sanayi bölgesinde bulunuyor. Pakistan genelinde müşterilere hizmet veriyoruz ve fabrikanızın bulunduğu her yere teslimat ve kurulum düzenleyebiliyoruz.",
      },
    ],
  },

  about: {
    metaTitle: "Hakkımızda | Civic Tobacco Machinery",
    metaDescription:
      "Pakistan'daki sigara ve tütün makineleri tedarikçisi Civic Tobacco Machinery hakkında. Kim olduğumuz, neyi savunduğumuz ve fabrikanızı sıfır ve ikinci el makinelerle nasıl desteklediğimiz.",
    hero: {
      eyebrow: "Hakkımızda",
      title: "Konusunu Bilen İnsanların Desteklediği Sigara & Tütün Makineleri",
      intro:
        "Civic Tobacco Machinery, Pakistan genelindeki fabrikaların sigara hatlarını kurmasına, genişletmesine ve bakımını yapmasına yıllardır yardımcı oluyor.",
    },
    whoHeading: "Biz kimiz",
    who: [
      "Pakistan merkezli bir sigara ve tütün makineleri tedarikçisiyiz. Yıllar içinde, sigara üretimine ilk adımlarını atan küçük atölyelerden ikinci veya üçüncü hat ekleyen köklü fabrikalara kadar her şeyle çalıştık. Bu deneyim çalışma şeklimizi şekillendiriyor; önce dinliyoruz, gerçekten neye ihtiyacınız olduğunu anlıyoruz ve ardından size uygun makineyi gösteriyoruz.",
      "Ürün gamımız tüm hattı kapsıyor: çubuğu şekillendiren üretim makineleri, filtre üreticileri, sert ve yumuşak paketler için paketleme makineleri, sargı ve kutulama makineleri ve fabrika zeminini besleyen tütün ekipmanları. Hem sıfır hem de dikkatle yenilenmiş ekipmanlarla ilgileniyoruz, böylece her bütçeye uygun makul bir seçenek her zaman mevcut.",
    ],
    howHeading: "Nasıl çalışıyoruz",
    how: [
      "Bir makine satın almak hikayenin sadece yarısıdır. Bir üretim veya paketleme makinesinin doğru şekilde kurulması, doğru ayarlanması ve çalışır durumda tutulması gerekir; birçok tedarikçinin ortadan kaybolduğu nokta da tam olarak burasıdır. Biz kaybolmuyoruz. Makinenizi tesisinize kurup gerektiği gibi çalışır hale getirmenize yardımcı oluyoruz ve sonrasında parça ve servis için ulaşılabilir kalıyoruz.",
      "Tam olarak burada, SITE sanayi bölgesinde bulunduğumuz için bu destek gerçek anlamda yereldir. Bir şeyin ilgi görmesi gerektiğinde, başka bir ülkede ve başka bir zaman diliminde bir tedarikçiyi beklemek yerine, şehrin öbür ucundaki insanlarla konuşuyorsunuz.",
    ],
    brandsHeading: "Güvendiğimiz markalar",
    brands:
      "Kanıtlanmış isimlere odaklanıyoruz — üretim ve filtre makineleri için Molins, paketleme ve sargı için HLP ve SASIB, yüksek hızlı hatlar için Protos ailesi. Bunları marka için değil, parçalarının ve bilgi birikiminin kolay bulunması için seçiyoruz; bu da bir makinenin yıllarca kendini amorti etmesini sağlayan şeydir.",
    glance: {
      heading: "Bir bakışta",
      basedIn: "Merkezimiz",
      basedInValue: "SITE, Karaçi, Pakistan",
      supply: "Tedarik ettiğimiz",
      supplyValue: "Sıfır ve ikinci el tütün makineleri",
      serve: "Hizmet verdiğimiz",
      serveValue: "Pakistan'ın tamamı",
      call: "Ara / WhatsApp",
      talk: "Bizimle Konuşun",
    },
    valuesEyebrow: "Neyi Savunuyoruz",
    valuesHeading: "İş Yapış Şeklimiz",
    values: [
      {
        title: "Önce dürüstlük",
        text: "Bir makinenin gerçek durumunu ve neler yapabileceğini size söylüyoruz. Sizi memnun etmeyen bir satış hiç satış değildir.",
      },
      {
        title: "Kendimizin de çalıştıracağı makineler",
        text: "Güvendiğimiz markalar ve modellerle ilgileniyoruz; iyi parça bulunabilirliğine ve uzun bir çalışma ömrüne sahip olanlarla.",
      },
      {
        title: "Kalıcı destek",
        text: "İşimiz teslimatla bitmiyor. Uzun vadede kurulum, ayarlama, yedek parça ve servis konusunda yardımcı oluyoruz.",
      },
      {
        title: "Adil değer",
        text: "Sıfır ya da yenilenmiş, önemli noktalardan ödün vermeden bütçenize uygun doğru makineyi bulmanıza yardımcı oluyoruz.",
      },
    ],
    ctaTitle: "Hattınız hakkında konuşalım",
    ctaText:
      "İster yeni başlıyor ister genişliyor olun, ne üretmeye çalıştığınızı bize söyleyin, oraya ulaşmanıza yardımcı olalım.",
  },

  contact: {
    metaTitle: "Bize Ulaşın | Civic Tobacco Machinery",
    metaDescription:
      "Pakistan'da Civic Tobacco Machinery ile iletişime geçin. Sigara üretim, paketleme, sargı ve ikinci el makineler hakkında arayın, WhatsApp'tan yazın veya talep gönderin. Atölye: SITE, Karaçi.",
    hero: {
      eyebrow: "Bize Ulaşın",
      title: "Civic Tobacco Machinery ile İletişime Geçin",
      intro:
        "Ne aradığınızı bize bildirin, aynı iş günü içinde size geri dönüş yapalım. Arayın, WhatsApp'tan yazın, e-posta gönderin veya aşağıdaki formu doldurun.",
    },
    directHeading: "Bize doğrudan ulaşın",
    directText:
      "Bir makine, durumu, fiyatı veya uygunluğu hakkında net bir yanıt almanın en hızlı yolu, WhatsApp'tan bize mesaj göndermek veya bizi aramaktır.",
    rows: {
      visit: "Atölyemizi ziyaret edin",
      call: "Bizi arayın",
      whatsapp: "WhatsApp",
      whatsappValue: "Şu numaradan bize mesaj gönderin:",
      email: "E-posta",
      hours: "Çalışma saatleri",
      hoursValue: "Pazartesi – Cumartesi, 09:00 – 18:00",
      hoursClosed: "Pazar günleri kapalı",
    },
    openInMaps: "Google Haritalar'da Aç",
    formHeading: "Talep gönderin",
    formIntro:
      "Bunu doldurun, hızlıca size geri dönelim. Zorunlu olarak işaretlenen alanlar size doğru bir yanıt vermemize yardımcı olur.",
    form: {
      name: "Adınız",
      namePlaceholder: "örn. Ahmed Khan",
      phone: "Telefon / WhatsApp",
      phonePlaceholder: "örn. 0300 1234567",
      email: "E-posta",
      emailOptional: "(isteğe bağlı)",
      emailPlaceholder: "siz@sirket.com",
      interest: "İlgilendiğiniz makine",
      interestPlaceholder: "örn. HLP-200 paketleme makinesi",
      message: "Mesajınız",
      messagePlaceholder: "Formatınızı, hedef üretiminizi ve diğer detayları bize bildirin.",
      submit: "Talep Gönder",
      sending: "Gönderiliyor…",
      successTitle: "Teşekkürler!",
      successText:
        "Talebiniz gönderildi. Ekibimiz kısa süre içinde, genellikle aynı iş günü içinde size geri dönecek.",
      errorText:
        "Üzgünüz, mesajınızı gönderirken bir sorun oluştu. Lütfen tekrar deneyin veya",
      errorWhatsApp: "WhatsApp'tan bize yazın",
      footnote:
        "Bilgileriniz doğrudan ekibimize ulaşır — genellikle aynı iş günü içinde yanıt veriyoruz. Sohbet etmeyi mi tercih edersiniz?",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "Üretim Makineleri",
      title: "Türkiye'de Sigara Üretim Makineleri",
      description:
        "Pakistan'da sigara üretim makineleri, Molins üretim makineleri, filtre üreticileri ve tütün ekipmanları. Civic Tobacco Machinery'den sıfır ve yenilenmiş hatlar.",
      intro: [
        "İyi bir sigara, pakete girmeden çok önce başlar. Düzgün bir çubuk döşeyen bir üretim makinesiyle, temiz kesen bir filtre hattıyla ve tüm fabrika zeminini besleyen tütün ekipmanıyla başlar. Civic Tobacco Machinery, Pakistan'da bu üç alanın tamamında sigara üretim makineleri tedarik eder.",
        "Molins üretim makineleri, KDF ve PM filtre üreticileri ile bunları destekleyen besleyici, kesici ve geri kazanım makineleriyle ilgileniyoruz. Bize çalıştırdığınız markaları ve ihtiyacınız olan üretimi söyleyin, gün be gün hızını ve kalitesini koruyan bir hat kurmanıza yardımcı olalım.",
      ],
      faqs: [
        {
          question: "Hangi sigara üretim makinelerini tedarik ediyorsunuz?",
          answer:
            "Tam üretim hattını tedarik ediyoruz: Molins Mark 8, Mark 9 ve Mark 9.5 üretim makineleri ve Hauni Protos üretim makineleri, ayrıca KDF ve Molins filtre üreticileri ile bunları destekleyen tütün besleyicileri, kesicileri ve geri kazanım makineleri.",
        },
        {
          question: "Üretim makineleri dakikada kaç sigara üretiyor?",
          answer:
            "Modele bağlı olarak, üretim makinelerimiz dakikada yaklaşık 3.000 ila 8.000 sigara arasında çalışır, böylece makineyi hedef üretiminize göre eşleştirebilirsiniz.",
        },
        {
          question: "Sıfır mı yoksa yenilenmiş makine mi tedarik ediyorsunuz?",
          answer:
            "İkisi de. Yenilenmiş Molins ve Hauni makineleri satıştan önce tamamen incelenir, servisten geçirilir ve test edilir, büyüyen fabrikalar için güçlü bir değer sunar.",
        },
        {
          question: "Üretim makinesini doğru filtre hattıyla eşleştirmeye yardımcı oluyor musunuz?",
          answer:
            "Evet. Üretim makinesi ve filtre üreticisinin uyumlu çalışmasını sağlıyoruz, böylece tüm hat dengede kalır. Markalarınızı ve hedef üretiminizi bize söyleyin, uygun bir düzen önerelim.",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "Paketleme Makineleri",
      title: "Türkiye'de Sigara Paketleme Makineleri",
      description:
        "Pakistan'da sigara paketleme makineleri, dakikada 180 ila 225 paket arasında sert ve yumuşak paket hatları için HLP ve SASIB. Civic Tobacco Machinery tarafından tedarik edilir, kurulur ve desteklenir.",
      intro: [
        "Paketleme hattı, ürününüzün nihayet şeklini aldığı yerdir, bu yüzden istikrarlı, temiz ve vardiya boyunca çalıştırması kolay olmalıdır. Civic Tobacco Machinery'de, tam olarak bunun için seçilmiş sigara paketleme makinelerini Pakistan'da tedarik ediyoruz — güvenilir üretim ve her seferinde aynı görünen paketler.",
        "Ürün gamımız, dakikada 180 ila 225 paket arasında, hem sıfır hem de dikkatle yenilenmiş seçeneklerle sert ve yumuşak paket formatlarını kapsar. İster yeni bir hat kuruyor ister mevcut bir hatta kapasite ekliyor olun, hacminize, bütçenize ve ürettiğiniz markalara uygun makineyi eşleştirmenize yardımcı oluyoruz.",
      ],
      faqs: [
        {
          question: "Sert paket ve yumuşak paket makineleri arasındaki fark nedir?",
          answer:
            "Sert paketler (menteşeli kapaklı kutular) HLP tarzı makinelerde, yumuşak paketler (katlanmış folyo ve baskılı dış kağıt) ise SASIB tarzı makinelerde üretilir. İkisini de tedarik ediyoruz ve markalarınızın gerçekten sattığı paket formatına uygun makineyi eşleştirmenize yardımcı oluyoruz.",
        },
        {
          question: "Hangi paketleme hızlarını sunuyorsunuz?",
          answer:
            "Sigara paketleme makinelerimiz dakikada yaklaşık 180 ila 225 paket arasında çalışır. Kullanılmayan kapasite için ödeme yapmak yerine, büyümeye alan bırakarak gerçek vardiya talebinize uygun bir hız seçin.",
        },
        {
          question: "Sıfır mı yoksa yenilenmiş paketleme makineleri mi satıyorsunuz?",
          answer:
            "İkisi de. Her ikinci el HLP veya SASIB paketleyici satıştan önce incelenir, servisten geçirilir ve test edilir, böylece iyi bir yenilenmiş makine yıllarca, sıfır fiyatının bir kısmıyla çalışabilir.",
        },
        {
          question: "Makineyi kuruyor musunuz ve yedek parça sağlıyor musunuz?",
          answer:
            "Evet. Makineyi kurup ayarlıyoruz ve HLP ile SASIB'i yaygın olarak bulunabilen yedek parça ve servisle destekliyoruz. Güncel fiyat ve stok durumu için +92 301 1111184 numarasından WhatsApp'tan bize yazın.",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "Sargı Makineleri",
      title: "Türkiye'de Sigara Sargı Makineleri",
      description:
        "Pakistan'da sigara sargı makineleri, paketlerinizi temizce mühürleyen dış sargı, kutulama ve selofan sargı makineleri. Civic Tobacco Machinery'den satış, yedek parça ve servis.",
      intro: [
        "Sargı, müşterinizin paketi açmadan önce gördüğü son şeydir, bu yüzden temiz ve sıkı bir mühür bu kadar önemlidir. Civic Tobacco Machinery, Pakistan'da size düzgün bir film bitişi, düz bir yırtma bandı ve rafta taze kalan paketler sunan sigara sargı makineleri tedarik eder.",
        "Tekli paket dış sargı makinelerinden kutulama ve karton kutulayıcılara kadar tüm gamı kapsıyoruz. Sattığımız her makine kontrol edilir, ayarlanır ve çalışmaya hazır şekilde teslim edilir; ihtiyaç duyduğunuzda başvurabileceğiniz yedek parça ve servisle birlikte.",
      ],
      faqs: [
        {
          question: "Dış sargı makinesi ile kutulayıcı arasındaki fark nedir?",
          answer:
            "Dış sargı makinesi her paketi yırtma bantlı selofan filmle mühürler, kutulayıcı (kartonlama makinesi) ise bitmiş paketleri kartonlara veya kutulara gruplar. Çoğu hat, birbiri ardına ikisini de kullanır.",
        },
        {
          question: "Hangi sargı ve kutulama makinelerini tedarik ediyorsunuz?",
          answer:
            "CP1 paket sargı makinesi, çıplak dış sargı makinesi ve Molins ile SASIB kutulayıcılar dahil olmak üzere, hem sert paket hem de yumuşak paket hatları için Molins ve SASIB dış sargı ve kutulama makineleri tedarik ediyoruz.",
        },
        {
          question: "Sıfır veya yenilenmiş sargı makineleri sunuyor musunuz?",
          answer:
            "Hem sıfır hem de dikkatle yenilenmiş ünitler mevcuttur. Her ikinci el makine kontrol edilir, ayarlanır ve çalışmaya hazır şekilde teslim edilir.",
        },
        {
          question: "Kurulum ve yedek parça sağlıyor musunuz?",
          answer:
            "Evet, kurulum, ayarlama, yedek parça ve servis yaptığımız işin bir parçasıdır. Teklif için +92 301 1111184 numarasından WhatsApp'tan bize ulaşın.",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "Üretim Makineleri",
      title: "Türkiye'de Sigara Filtre Üretim Makineleri",
      description:
        "Pakistan'da sigara filtre üretim makineleri, Molins KDF, Molins PM ve içi boş tüp üreticileri. Filtre çubuğu hatları Civic Tobacco Machinery tarafından tedarik edilir ve desteklenir.",
      intro: [
        "İyi bir filtre, sigarayı tamamlamaktan daha fazlasını yapar; çekişi, sertliği ve dumanın genel hissini kontrol eder. Civic Tobacco Machinery, üretim makinenizin güvenebileceği tutarlı çubuklar üreten sigara filtre üretim makinelerini Pakistan'da tedarik eder.",
        "Özel formatlar için içi boş tüp makineleriyle birlikte Molins KDF ve Molins PM filtre üreticilerini stoklarız. Hangi filtre uzunluğunu veya türünü üretirseniz üretin, üretim makinelerinizin hızına uygun bir hat seçmenize yardımcı oluruz.",
      ],
      faqs: [
        {
          question: "Hangi filtre üretim makinelerini tedarik ediyorsunuz?",
          answer:
            "Filtre çubuğu üretimi yapan fabrikalar için Hauni KDF-1 ve KDF-2 filtre üreticilerini, Molins PM filtre üreticilerini ve özel formatlar için içi boş tüp makinelerini tedarik ediyoruz.",
        },
        {
          question: "Filtre üreticisi, sigara üretim makinemin hızına uyabilir mi?",
          answer:
            "Evet. İkisinin uyumlu çalışması ve hattın dengede kalması için üretim makinelerinizin hızına uygun bir filtre hattı seçmenize yardımcı oluyoruz.",
        },
        {
          question: "Sıfır ve yenilenmiş filtre üreticileri sunuyor musunuz?",
          answer:
            "İkisi de. Her yenilenmiş KDF veya PM makinesi satıştan önce incelenir, servisten geçirilir ve test edilir.",
        },
        {
          question: "Filtre üretim makinelerini kuruyor ve destekliyor musunuz?",
          answer:
            "Evet, kurulum, yedek parça ve servis dahildir. Fiyat ve stok durumu için +92 301 1111184 numarasından WhatsApp'tan bize yazın.",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "Üretim Makineleri",
      title: "Türkiye'de Tütün Kesici, Besleyici & Geri Kazanım Makineleri",
      description:
        "Pakistan'da tütün ekipmanları, birincil ve ikincil zeminlerinizi çalışır tutan besleyiciler, kesiciler, geri kazanım makineleri ve sap düzleştiriciler. Civic Tobacco Machinery tarafından tedarik edilir.",
      intro: [
        "Her üretim ve paketleme makinesinin arkasında, ağır işi yapan daha sessiz bir makine grubu vardır — tütün besleme, kesme, kaybolacak olanı kurtarma. Civic Tobacco Machinery, fabrika zemininin bu tarafını hareket halinde tutan tütün ekipmanlarını Pakistan'da tedarik eder.",
        "Besleyiciler, kesiciler, geri kazanım makineleri ve sap düzleştiriciler, hattınıza istikrarlı bir tedarik sağlamak ve israfı azaltmak için birlikte çalışır. Zaten çalıştırdığınız üretim ve paketleme makinelerinin etrafına doğru üniteleri yerleştirmenize yardımcı oluyoruz.",
      ],
      faqs: [
        {
          question: "Tütün besleyicileri, kesicileri ve geri kazanım makineleri ne işe yarar?",
          answer:
            "Besleyiciler üretim makinelerini tütünle besler, kesiciler yaprakları üretim için boyutlandırır ve geri kazanım makineleri reddedilen sigaralardan tütünü yeniden kullanılabilmesi için geri kazanır, birincil ve ikincil zeminlerin sorunsuz çalışmasını sağlar.",
        },
        {
          question: "Bu ekipman tütün israfını azaltabilir mi?",
          answer:
            "Evet. Bir geri kazanım makinesi, reddedilen çubuklardan kullanılabilir tütünü geri kazanır, bu da zaman içinde israfı azaltır ve işletme maliyetlerini düşürür.",
        },
        {
          question: "Hangi markaları tedarik ediyorsunuz?",
          answer:
            "Tütün besleyicileri, sigara geri kazanım makineleri ve sap düzleştiriciler ile birlikte Hauni KT-400 tütün kesici gibi iyi desteklenen makineler tedarik ediyoruz.",
        },
        {
          question: "Makineler sıfır mı yoksa yenilenmiş mi ve onları destekliyor musunuz?",
          answer:
            "Hem sıfır hem de yenilenmiş ünitler mevcuttur, hepsi satıştan önce test edilir; kurulum, yedek parça ve servisle birlikte. +92 301 1111184 numarasından WhatsApp'tan bize ulaşın.",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "Türkiye'de Sigara Üretim Makineleri",
    intro:
      "Üretim makinesi, her sigara fabrikasının kalbidir. Kesilmiş tütün ve kağıdı alır ve dakikada binlerce kez, kalitede kesinti olmadan bitmiş bir çubuğa dönüştürür.",
    seeAll: "Tümünü gör →",
  },
  blog: {
    eyebrow: "Blog",
    indexTitle: "Sigara Makineleri Hakkında Rehberler & Tavsiyeler",
    indexIntro:
      "Bu makinelerle her gün çalışan kişiler tarafından yazılmış, sigara ve tütün makineleri seçmenize, satın almanıza ve çalıştırmanıza yardımcı olacak dobra makaleler.",
    metaTitle: "Blog | Civic Tobacco Machinery",
    metaDescription:
      "Sigara ve tütün makineleri, paketleme makinesi seçimi, üretim makinelerini karşılaştırma ve Pakistan'da ikinci el makine satın alma konusunda pratik rehberler. Civic Tobacco Machinery'den.",
    readArticle: "Makaleyi oku →",
    minRead: "dk okuma",
    tags: "Etiketler:",
    backToAll: "← Tüm makalelere dön",
    keepReading: "Okumaya devam et",
    dateLocale: "tr-TR",
  },
  product: {
    keyFeatures: "Temel özellikler",
    specifications: "Teknik özellikler",
    description: "Açıklama",
    bestSuitedFor: "En uygun olduğu alan",
    call: "Ara",
    interested: "Bu makineyle ilgileniyor musunuz?",
    askAbout: "Hakkında sorun:",
    enquiryText:
      "Fiyat, güncel stok durumu ve durumu için bize kısa bir mesaj gönderin. Hattınızı tamamlayacak uyumlu makineler hakkında da sizi bilgilendireceğiz.",
    related: "İlgili makineler",
    thumbs: { front: "Ön görünüm", detail: "Detay", operation: "Çalışırken" },
    waMessage: (name) =>
      `Merhaba, ${name} ile ilgileniyorum. Lütfen fiyat ve stok durumunu paylaşır mısınız?`,
  },
};

/* ---------------------------------------------------------------------------
 * Chinese (zh-CN)
 * ------------------------------------------------------------------------- */

const zh: Dictionary = {
  nav: {
    about: "关于我们",
    making: "卷烟制造机",
    packing: "卷烟包装机",
    filter: "滤棒机",
    wrappers: "封装与装箱机",
    cutter: "切丝机/喂料机/回收机",
    contact: "联系我们",
  },
  header: {
    tagline: "中国卷烟与烟草机械制造商",
    call: "致电",
    whatsapp: "WhatsApp",
    region: "中国",
  },
  megaMenu: {
    prompt: "在寻找特定机器还是整条生产线？",
    viewAll: "查看所有制造机器 →",
  },
  productCard: { viewDetails: "查看详情" },
  breadcrumbHome: "首页",
  faqHeading: "常见问题",
  emptyNote: "此类别的机器会定期更新。请联系我们了解现有库存。",
  cta: {
    title: "不确定需要哪种机器？",
    text: "告诉我们您的规格、目标产量和预算。我们会为您推荐合适的机器，无论是全新还是翻新，并帮助您顺利投产。",
    whatsapp: "WhatsApp",
    enquiry: "发送咨询",
  },
  footer: {
    blurb: "巴基斯坦全新及二手卷烟制造、包装和封装机器供应商，提供可靠的安装、备件和维修服务。",
    machines: "机器",
    manufacturing: "制造",
    reachUs: "联系我们",
    ourBlog: "我们的博客",
    hours: "周一至周六，09:00–18:00",
    rights: "版权所有。",
    links: { home: "首页", about: "关于我们", blog: "博客", contact: "联系我们" },
    labels: {
      "/cigarette-packing-machines": "包装机",
      "/cigarette-box-wrapping-machines": "封装机",
      "/cigarette-manufacturing-machines": "制造机",
      "/cigarette-making-machines": "卷烟制造机",
      "/cigarette-filter-making-machines": "卷烟滤棒制造机",
      "/cutter-feeder-reclaimer": "烟草设备",
    },
  },
  switcher: { label: "语言" },

  home: {
    metaTitle: "Civic Tobacco Machinery | 中国卷烟机械",
    metaDescription:
      "Civic Tobacco Machinery 在巴基斯坦供应卷烟制造、包装和封装机器。提供全新及二手烟草设备、滤棒生产线、备件和全套安装支持。",
    hero: {
      h1: "在中国寻找卷烟与烟草机械？",
      lead: "您找对地方了。从第一根烟支到成品纸箱，Civic Tobacco Machinery 为您提供全新及翻新的制造、滤棒、包装和封装生产线，均已安装调试，并配有您可以信赖的备件和服务支持。",
      getQuote: "获取报价",
      whatsapp: "WhatsApp",
    },
    browseHeading: "按机器类型浏览",
    browse: {
      packing: "卷烟包装机",
      wrapping: "卷烟封装机",
      making: "卷烟制造机",
      used: "二手卷烟设备",
    },
    viewRange: "查看产品系列 →",
    about: {
      eyebrow: "关于我们",
      h2: "几代人在烟草机械领域的卓越工程技术",
      lead: "一家自豪的父子企业，如今已传承至第三代，在烟草行业拥有超过35年的实践经验。",
      p1: "几十年来，我们家族一直专注于烟草机械这一单一领域。从一个小型贸易业务起步，如今已发展成为跨越数代人的值得信赖的品牌，巴基斯坦各地新兴及老牌卷烟公司都依靠我们来建设和运营他们的生产线。",
      p2: "我们是专业的烟草机械制造商，提供全面的一站式解决方案。从制造机和滤棒机到包装机和封装机，我们帮助您找到合适的设备，在购买前查看其运行情况，并在您自己的车间完成安装和调试。我们还为您的技术人员提供免费演示和培训，让您的团队从第一天起就能自信地操作机器。",
      bullets: [
        "跨代经营的家族企业",
        "全新及翻新机器",
        "从制造到包装的完整生产线",
        "演示与技术人员培训",
      ],
      more: "了解更多关于我们",
    },
    featured: {
      eyebrow: "现货热销",
      h2: "精选机器",
      viewAll: "查看所有机器 →",
    },
    why: {
      eyebrow: "为什么选择 Civic Tobacco Machinery",
      h2: "经久耐用的合适机器",
      reasons: [
        {
          title: "持续运转的机器",
          text: "我们坚持使用备件供应充足、经过验证的品牌，让您的生产线班班都能保持高产。",
        },
        {
          title: "诚实的状态报告",
          text: "每台二手机器都经过检查、维修和测试。您将获得关于其状态的真实说明，绝无意外。",
        },
        {
          title: "全线支持",
          text: "从制造机到包装机，我们帮助您搭配机器，避免出现瓶颈，并为其提供安装和支持。",
        },
        {
          title: "本地实地援助",
          text: "我们就设在巴基斯坦本地。当您需要备件或技术人员时，援助近在咫尺，而非远隔重洋。",
        },
      ],
    },
    ranges: {
      making: "卷烟制造机",
      packing: "卷烟包装机",
      filter: "卷烟滤棒制造机",
      wrapping: "卷烟盒封装机",
    },
    carousel: {
      eyebrow: "我们的库存",
      heading: "在售烟草机械",
      viewAllPrefix: "查看全部 ",
      viewAllSuffix: " →",
    },
    gallery: {
      eyebrow: "图库",
      heading: "图片中的 Civic Tobacco Machinery",
      text: "来自国际烟草展会以及与全球合作伙伴和客户会面的精彩瞬间。",
    },
    local: {
      eyebrow: "服务全巴基斯坦",
      h2: "您在巴基斯坦的烟草机械合作伙伴",
      text: "总部设在SITE工业区，让我们更贴近所服务的工厂。当您需要备件、技术人员或对机器的诚实建议时，您面对的是同城的人，而不是来自其他大陆的供应商。",
      bullets: ["快速的本地支持和备件供应", "在您的工厂进行安装和调试", "适合每种预算的全新及翻新机器"],
      visitHeading: "拜访或致电我们",
      directions: "获取路线与联系方式",
    },
    faqHeading: {
      eyebrow: "常见问题",
      h2: "常见问题解答",
    },
    faqs: [
      {
        question: "您在中国销售全新和二手卷烟机器吗？",
        answer:
          "是的。我们供应全新机器以及经过精心翻新的二手卷烟和烟草机械。每台二手机器在出售前都经过检查、维修和测试，并附有诚实的状态报告，让您清楚了解自己购买的是什么。",
      },
      {
        question: "您经营哪些品牌的卷烟制造机？",
        answer:
          "我们主要经营支持完善的品牌，如制造机和滤棒机方面的 Molins，以及包装和封装方面的 HLP 和 SASIB。选择这些品牌是因为备件和熟练技术人员容易获得，这能让您的生产线运转多年。",
      },
      {
        question: "您安装机器并提供备件吗？",
        answer:
          "是的。我们协助在您的车间正确安装和设置机器，之后还会为您提供备件和维修支持。让制造机或包装机投入运行并非即插即用的工作，因此我们会持续参与，直到机器达到应有的运行状态。",
      },
      {
        question: "您的所在地在哪里，是否可以送货到巴基斯坦全境？",
        answer:
          "我们的车间位于卡拉奇的SITE工业区。我们为巴基斯坦全境的客户提供服务，无论您的工厂位于何处，我们都可以安排送货和安装。",
      },
    ],
  },

  about: {
    metaTitle: "关于我们 | Civic Tobacco Machinery",
    metaDescription:
      "关于 Civic Tobacco Machinery，巴基斯坦卷烟与烟草机械供应商。我们是谁，我们坚持什么，以及我们如何通过全新和二手机器支持您的工厂。",
    hero: {
      eyebrow: "关于我们",
      title: "由深谙此道的人们支持的卷烟与烟草机械",
      intro: "多年来，Civic Tobacco Machinery 一直帮助巴基斯坦各地的工厂建设、扩展和维护他们的卷烟生产线。",
    },
    whoHeading: "我们是谁",
    who: [
      "我们是一家总部位于巴基斯坦的卷烟与烟草机械供应商。多年来，我们与各种客户合作过，从刚刚迈出卷烟生产第一步的小型作坊，到增设第二或第三条生产线的老牌工厂。这些经验塑造了我们的工作方式——我们先倾听，理解您真正的需求，然后为您推荐合适的机器。",
      "我们的产品系列涵盖整条生产线：制造烟支的制造机、滤棒机、用于硬包和软包的包装机、封装和装箱机，以及保持车间持续供料的烟草设备。我们经营全新和精心翻新的设备，因此无论您的预算如何，总有合理的选择。",
    ],
    howHeading: "我们的工作方式",
    how: [
      "购买机器只是故事的一半。制造机或包装机必须正确安装、精准调试并保持运转，而这正是许多供应商消失的地方。我们不会。我们帮助您将机器安装到车间并使其正常运转，之后仍随时可联系我们获取备件和维修服务。",
      "由于我们就设在SITE工业区，这种支持是真正本地化的。当有问题需要处理时，您面对的是同城的人，而不是等待另一个国家、另一个时区的供应商。",
    ],
    brandsHeading: "我们信赖的品牌",
    brands:
      "我们专注于经过验证的品牌——制造机和滤棒机方面的 Molins，包装和封装方面的 HLP 和 SASIB，以及适用于高速生产线的 Protos 系列。我们选择这些品牌不是因为名气，而是因为它们的备件和技术知识容易获得，这正是让机器多年来物有所值的关键。",
    glance: {
      heading: "一览",
      basedIn: "总部位于",
      basedInValue: "巴基斯坦卡拉奇 SITE",
      supply: "我们供应",
      supplyValue: "全新及二手烟草机械",
      serve: "我们服务",
      serveValue: "巴基斯坦全境",
      call: "致电 / WhatsApp",
      talk: "联系我们",
    },
    valuesEyebrow: "我们的坚持",
    valuesHeading: "我们的经营方式",
    values: [
      {
        title: "诚信第一",
        text: "我们如实告知机器的真实状况及其性能。一笔让您不满意的交易根本算不上交易。",
      },
      {
        title: "我们自己也会使用的机器",
        text: "我们经营我们信赖的品牌和型号——那些备件供应良好、使用寿命长的机器。",
      },
      {
        title: "持续的支持",
        text: "我们的工作不会在交付时结束。我们长期协助安装、调试、备件供应和维修服务。",
      },
      {
        title: "公平的价值",
        text: "无论全新还是翻新，我们都帮助您在不牺牲重要品质的前提下，获得符合预算的合适机器。",
      },
    ],
    ctaTitle: "让我们聊聊您的生产线",
    ctaText: "无论您是刚起步还是正在扩张，告诉我们您想生产什么，我们将帮助您实现目标。",
  },

  contact: {
    metaTitle: "联系我们 | Civic Tobacco Machinery",
    metaDescription:
      "联系巴基斯坦的 Civic Tobacco Machinery。致电、发送 WhatsApp 消息或提交咨询，了解卷烟制造、包装、封装及二手机器信息。车间位于卡拉奇SITE。",
    hero: {
      eyebrow: "联系我们",
      title: "联系 Civic Tobacco Machinery",
      intro: "告诉我们您在寻找什么，我们会在同一个工作日内回复您。请致电、发送 WhatsApp 消息、发邮件，或填写下方表单。",
    },
    directHeading: "直接联系我们",
    directText: "要快速获得关于机器、其状况、价格或库存的明确答复，最快的方式是通过 WhatsApp 给我们发消息或直接致电。",
    rows: {
      visit: "参观我们的车间",
      call: "致电我们",
      whatsapp: "WhatsApp",
      whatsappValue: "通过以下方式给我们发消息：",
      email: "电子邮件",
      hours: "营业时间",
      hoursValue: "周一至周六，09:00 – 18:00",
      hoursClosed: "周日休息",
    },
    openInMaps: "在 Google 地图中打开",
    formHeading: "发送咨询",
    formIntro: "填写此表单，我们会尽快回复您。标记为必填的字段有助于我们提供准确的答复。",
    form: {
      name: "您的姓名",
      namePlaceholder: "例如：张三",
      phone: "电话 / WhatsApp",
      phonePlaceholder: "例如：0300 1234567",
      email: "电子邮件",
      emailOptional: "（可选）",
      emailPlaceholder: "you@company.com",
      interest: "您感兴趣的机器",
      interestPlaceholder: "例如：HLP-200 包装机",
      message: "您的留言",
      messagePlaceholder: "请告诉我们您的规格、目标产量及其他详情。",
      submit: "发送咨询",
      sending: "发送中…",
      successTitle: "谢谢！",
      successText: "您的咨询已发送。我们的团队会尽快回复您，通常在同一个工作日内。",
      errorText: "抱歉，发送您的消息时出现问题。请重试，或",
      errorWhatsApp: "通过 WhatsApp 联系我们",
      footnote: "您的信息将直接送达我们的团队——我们通常会在同一个工作日内回复。更喜欢即时聊天？",
      footnoteChat: "WhatsApp",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "制造机",
      title: "中国卷烟制造机",
      description: "巴基斯坦卷烟制造机，Molins 制造机、滤棒机和烟草设备。Civic Tobacco Machinery 提供全新及翻新生产线。",
      intro: [
        "一支优质卷烟远在装入烟包之前就已开始成形。它始于一台能制出均匀烟支的制造机、一条能干净切割的滤棒生产线，以及能为整个车间持续供料的烟草设备。Civic Tobacco Machinery 在巴基斯坦供应涵盖这三大领域的卷烟制造机。",
        "我们经营 Molins 制造机、KDF 和 PM 滤棒机，以及为其提供支持的喂料机、切丝机和回收机。告诉我们您使用的品牌和所需产量，我们将帮助您搭建一条日复一日都能保持速度和质量的生产线。",
      ],
      faqs: [
        {
          question: "您供应哪些卷烟制造机？",
          answer:
            "我们供应完整的制造生产线：Molins Mark 8、Mark 9 和 Mark 9.5 制造机以及 Hauni Protos 制造机，另外还有 KDF 和 Molins 滤棒机及为其提供支持的烟草喂料机、切丝机和回收机。",
        },
        {
          question: "制造机每分钟能生产多少支卷烟？",
          answer: "根据型号不同，我们的制造机每分钟可生产约3,000至8,000支卷烟，因此您可以根据目标产量匹配合适的机器。",
        },
        {
          question: "您供应全新还是翻新机器？",
          answer: "两者都有。翻新的 Molins 和 Hauni 机器在出售前均经过全面检查、维修和测试，为不断发展的工厂提供了强大的性价比。",
        },
        {
          question: "您能帮忙将制造机与合适的滤棒生产线搭配吗？",
          answer: "可以。我们确保制造机和滤棒机同步运行，使整条生产线保持平衡。告诉我们您的品牌和目标产量，我们会推荐合适的配置。",
        },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "包装机",
      title: "中国卷烟包装机",
      description: "巴基斯坦卷烟包装机，HLP 和 SASIB 硬盒软盒生产线，每分钟180至225包。由 Civic Tobacco Machinery 供应、安装和支持。",
      intro: [
        "包装生产线是您的产品最终成形的地方，因此它必须稳定、洁净，并且班班都易于操作。在 Civic Tobacco Machinery，我们在巴基斯坦供应正是因此而被选中的卷烟包装机——可靠的产量和每次都一模一样的包装外观。",
        "我们的产品系列涵盖硬盒和软盒格式，每分钟180至225包，并提供全新和精心翻新的选择。无论您是搭建全新生产线还是为现有生产线增加产能，我们都会帮助您根据产量、预算和所生产的品牌匹配合适的机器。",
      ],
      faqs: [
        {
          question: "硬盒机和软盒机有什么区别？",
          answer:
            "硬盒（翻盖盒）在 HLP 类型的机器上生产，而软盒（折叠锡纸和印刷外包装）在 SASIB 类型的机器上生产。我们两种都供应，并帮助您根据品牌实际销售的包装格式匹配合适的机器。",
        },
        {
          question: "您提供哪些包装速度？",
          answer: "我们的卷烟包装机运行速度约为每分钟180至225包。请选择符合您实际班次需求且有一定增长空间的速度，而不必为闲置产能付费。",
        },
        {
          question: "您出售全新还是翻新的包装机？",
          answer: "两者都有。每台二手 HLP 或 SASIB 包装机在出售前都经过检查、维修和测试，因此一台优质的翻新机器能以新机价格的一部分运行多年。",
        },
        {
          question: "您安装机器并供应备件吗？",
          answer: "是的。我们安装并调试机器，并为 HLP 和 SASIB 提供广泛供应的备件和维修支持。请通过 WhatsApp（+92 301 1111184）联系我们获取价格和现有库存信息。",
        },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "封装机",
      title: "中国卷烟封装机",
      description: "巴基斯坦卷烟封装机，外包装机、装箱机和玻璃纸封装机，可将您的烟包封得干净利落。Civic Tobacco Machinery 提供销售、备件和维修服务。",
      intro: [
        "包装纸是您的客户在打开烟包前看到的最后一样东西，这就是为什么干净、紧实的封口如此重要。Civic Tobacco Machinery 在巴基斯坦供应的卷烟封装机，能为您带来整洁的薄膜效果、笔直的撕拉带，以及在货架上始终保持新鲜的烟包。",
        "从单包外包装机到装箱和纸箱包装机，我们涵盖全系列产品。我们出售的每台机器都经过检查、调试，交付时即可投入运行，并配有您在需要时可以联系的备件和维修服务。",
      ],
      faqs: [
        {
          question: "外包装机和装箱机有什么区别？",
          answer:
            "外包装机用带撕拉带的玻璃纸薄膜密封每个烟包，而装箱机（装纸箱机）则将成品烟包分组装入纸箱或箱子。大多数生产线两者都会使用，先后配合。",
        },
        {
          question: "您供应哪些封装和装箱机？",
          answer: "我们供应 Molins 和 SASIB 外包装机及装箱机，包括 CP1 烟包包装机、裸装外包装机以及 Molins 和 SASIB 装箱机，适用于硬盒和软盒生产线。",
        },
        {
          question: "您提供全新还是翻新的封装机？",
          answer: "全新和精心翻新的机器均有供应。每台二手机器都经过检查、调试，交付时即可投入运行。",
        },
        {
          question: "您提供安装和备件吗？",
          answer: "是的，安装、调试、备件和维修都是我们服务的一部分。请通过 WhatsApp（+92 301 1111184）联系我们获取报价。",
        },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "制造机",
      title: "中国卷烟滤棒制造机",
      description: "巴基斯坦卷烟滤棒制造机，Molins KDF、Molins PM 和空心管制造机。滤棒生产线由 Civic Tobacco Machinery 供应和支持。",
      intro: [
        "优质的滤棒不仅仅是完成一支卷烟——它还控制着抽吸阻力、坚实度以及整体的吸烟感受。Civic Tobacco Machinery 在巴基斯坦供应的卷烟滤棒制造机，能生产出您的制造机可以信赖的稳定滤棒。",
        "我们备有 Molins KDF 和 Molins PM 滤棒机，以及用于特殊规格的空心管制造机。无论您生产何种长度或类型的滤棒，我们都会帮助您选择与制造机速度相匹配的生产线。",
      ],
      faqs: [
        {
          question: "您供应哪些滤棒制造机？",
          answer: "我们为生产滤棒的工厂供应 Hauni KDF-1 和 KDF-2 滤棒机、Molins PM 滤棒机以及用于特殊规格的空心管制造机。",
        },
        {
          question: "滤棒机能与我的卷烟制造机速度匹配吗？",
          answer: "可以。我们帮助您选择与制造机速度相匹配的滤棒生产线，使两者同步运行，保持生产线的平衡。",
        },
        {
          question: "您提供全新和翻新的滤棒机吗？",
          answer: "两者都有。每台翻新的 KDF 或 PM 机器在出售前都经过检查、维修和测试。",
        },
        {
          question: "您安装并支持滤棒制造机吗？",
          answer: "是的，包括安装、备件和维修服务。请通过 WhatsApp（+92 301 1111184）联系我们获取价格和库存信息。",
        },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "制造机",
      title: "中国烟草切丝、喂料及回收机",
      description: "巴基斯坦烟草设备，喂料机、切丝机、回收机和梗片压扁机，让您的一线和二线车间持续运转。由 Civic Tobacco Machinery 供应。",
      intro: [
        "在每台制造机和包装机的背后，都有一系列更为低调的机器在完成繁重的工作——供应烟草、切割烟草、挽回本会浪费的部分。Civic Tobacco Machinery 在巴基斯坦供应的烟草设备，让车间的这一环节持续运转。",
        "喂料机、切丝机、回收机和梗片压扁机协同工作，为您的生产线保持稳定的供应并减少浪费。我们帮助您在已有的制造机和包装机周围配置合适的设备。",
      ],
      faqs: [
        {
          question: "烟草喂料机、切丝机和回收机的作用是什么？",
          answer: "喂料机为制造机持续供应烟草，切丝机将烟叶切割至生产所需尺寸，回收机则从废弃卷烟中回收烟草以供再利用，保持一线和二线车间平稳运转。",
        },
        {
          question: "这些设备能减少烟草浪费吗？",
          answer: "可以。回收机能从废弃烟支中回收可用的烟草，从而减少浪费，长期降低运营成本。",
        },
        {
          question: "您供应哪些品牌？",
          answer: "我们供应支持完善的机器，如 Hauni KT-400 烟草切丝机，以及烟草喂料机、卷烟回收机和梗片压扁机。",
        },
        {
          question: "这些机器是全新还是翻新的，您提供支持吗？",
          answer: "全新和翻新机器均有供应，出售前均经过测试，并提供安装、备件和维修服务。请通过 WhatsApp（+92 301 1111184）联系我们。",
        },
      ],
    },
  },
  manufacturingSection: {
    title: "中国卷烟制造机",
    intro: "制造机是每一家卷烟工厂的核心。它将切好的烟丝和卷烟纸转化为成品烟支，每分钟数千次，质量始终如一。",
    seeAll: "查看全部 →",
  },
  blog: {
    eyebrow: "博客",
    indexTitle: "卷烟机械指南与建议",
    indexIntro: "由每天与这些机器打交道的人撰写的实用文章，帮助您选择、购买和运营卷烟及烟草机械。",
    metaTitle: "博客 | Civic Tobacco Machinery",
    metaDescription: "关于卷烟和烟草机械、如何选择包装机、比较制造机以及在巴基斯坦购买二手机器的实用指南。来自 Civic Tobacco Machinery。",
    readArticle: "阅读文章 →",
    minRead: "分钟阅读",
    tags: "标签：",
    backToAll: "← 返回所有文章",
    keepReading: "继续阅读",
    dateLocale: "zh-CN",
  },
  product: {
    keyFeatures: "主要特点",
    specifications: "技术规格",
    description: "描述",
    bestSuitedFor: "最适用于",
    call: "致电",
    interested: "对这台机器感兴趣？",
    askAbout: "咨询",
    enquiryText: "请给我们发送简短消息，询问价格、现有库存和状况。我们还会告知您可搭配完善生产线的其他机器。",
    related: "相关机器",
    thumbs: { front: "正面视图", detail: "细节", operation: "运行中" },
    waMessage: (name) => `您好，我对 ${name} 感兴趣。请告知价格和库存情况。`,
  },
};

/* ---------------------------------------------------------------------------
 * Persian / Farsi (fa-IR)
 * ------------------------------------------------------------------------- */

const fa: Dictionary = {
  nav: {
    about: "درباره ما",
    making: "ماشین‌آلات تولید سیگار",
    packing: "ماشین‌آلات بسته‌بندی سیگار",
    filter: "ماشین‌آلات فیلتر",
    wrappers: "ماشین‌آلات پوشش و جعبه‌بندی",
    cutter: "برش/تغذیه/بازیافت",
    contact: "تماس با ما",
  },
  header: {
    tagline: "تولیدکنندگان ماشین‌آلات سیگار و تنباکو در ایران",
    call: "تماس",
    whatsapp: "واتساپ",
    region: "ایران",
  },
  megaMenu: {
    prompt: "به دنبال یک ماشین خاص یا یک خط کامل هستید؟",
    viewAll: "مشاهده همه ماشین‌آلات تولید ←",
  },
  productCard: { viewDetails: "مشاهده جزئیات" },
  breadcrumbHome: "خانه",
  faqHeading: "سؤالات متداول",
  emptyNote: "ماشین‌های این دسته به طور منظم اضافه می‌شوند. برای موجودی فعلی با ما تماس بگیرید.",
  cta: {
    title: "مطمئن نیستید به چه ماشینی نیاز دارید؟",
    text: "فرمت، تولید هدف و بودجه خود را به ما بگویید. ما ماشین مناسب، نو یا بازسازی‌شده، را پیشنهاد می‌دهیم و در راه‌اندازی آن به شما کمک می‌کنیم.",
    whatsapp: "واتساپ",
    enquiry: "ارسال درخواست",
  },
  footer: {
    blurb: "تأمین‌کننده ماشین‌آلات نو و دست دوم تولید، بسته‌بندی و پوشش سیگار در پاکستان، با نصب، قطعات یدکی و خدماتی که می‌توانید به آن اعتماد کنید.",
    machines: "ماشین‌آلات",
    manufacturing: "تولید",
    reachUs: "با ما در ارتباط باشید",
    ourBlog: "وبلاگ ما",
    hours: "شنبه تا پنجشنبه، ۰۹:۰۰–۱۸:۰۰",
    rights: "کلیه حقوق محفوظ است.",
    links: { home: "خانه", about: "درباره ما", blog: "وبلاگ", contact: "تماس با ما" },
    labels: {
      "/cigarette-packing-machines": "ماشین‌آلات بسته‌بندی",
      "/cigarette-box-wrapping-machines": "ماشین‌آلات پوشش",
      "/cigarette-manufacturing-machines": "ماشین‌آلات تولید",
      "/cigarette-making-machines": "ماشین‌آلات تولید سیگار",
      "/cigarette-filter-making-machines": "ماشین‌آلات تولید فیلتر سیگار",
      "/cutter-feeder-reclaimer": "تجهیزات تنباکو",
    },
  },
  switcher: { label: "زبان" },

  home: {
    metaTitle: "Civic Tobacco Machinery | ماشین‌آلات سیگار ایران",
    metaDescription:
      "Civic Tobacco Machinery ماشین‌آلات تولید، بسته‌بندی و پوشش سیگار را در پاکستان تأمین می‌کند. تجهیزات تنباکوی نو و دست دوم، خطوط تولید فیلتر، قطعات یدکی و پشتیبانی کامل نصب.",
    hero: {
      h1: "به دنبال ماشین‌آلات سیگار و تنباکو برای ایران هستید؟",
      lead: "شما در جای درستی هستید. از اولین ساقه تا کارتن نهایی، Civic Tobacco Machinery شما را با خطوط تولید، فیلتر، بسته‌بندی و پوشش نو و بازسازی‌شده مجهز می‌کند که نصب، تنظیم و با قطعات یدکی و خدماتی که می‌توانید روی آن‌ها حساب کنید، پشتیبانی می‌شوند.",
      getQuote: "دریافت قیمت",
      whatsapp: "واتساپ",
    },
    browseHeading: "مرور بر اساس نوع ماشین",
    browse: {
      packing: "ماشین‌آلات بسته‌بندی سیگار",
      wrapping: "ماشین‌آلات پوشش سیگار",
      making: "ماشین‌آلات تولید سیگار",
      used: "ماشین‌آلات دست دوم سیگار",
    },
    viewRange: "مشاهده محصولات ←",
    about: {
      eyebrow: "درباره ما",
      h2: "نسل‌ها تعالی مهندسی در ماشین‌آلات تنباکو",
      lead: "یک کسب‌وکار خانوادگی پدر و پسر که اکنون وارد نسل سوم خود شده و بیش از ۳۵ سال تجربه عملی در صنعت تنباکو دارد.",
      p1: "خانواده ما برای دهه‌ها در یک زمینه واحد از ماشین‌آلات تنباکو فعالیت کرده است. آنچه به‌عنوان یک فعالیت تجاری کوچک آغاز شد، به نامی معتبر و چند نسلی تبدیل شده که شرکت‌های سیگارسازی جدید و باسابقه در سراسر پاکستان برای ساخت و اداره خطوط خود به آن اعتماد می‌کنند.",
      p2: "ما تولیدکنندگان متخصص ماشین‌آلات تنباکو هستیم که راه‌حلی کامل و یکپارچه ارائه می‌دهیم. از ماشین‌های تولید و فیلتر گرفته تا بسته‌بندها و پوشش‌دهنده‌ها، به شما کمک می‌کنیم تجهیزات مناسب را تهیه کنید، پیش از خرید عملکرد آن را ببینید و آن را در کارگاه خودتان نصب و تنظیم کنید. همچنین آموزش و نمایش رایگان برای تکنسین‌های شما ارائه می‌دهیم تا تیم شما از روز اول با ماشین اطمینان کامل داشته باشد.",
      bullets: ["کسب‌وکار خانوادگی چند نسلی", "ماشین‌های نو و بازسازی‌شده", "خط کامل، از تولید تا بسته‌بندی", "نمایش و آموزش تکنسین"],
      more: "بیشتر درباره ما",
    },
    featured: {
      eyebrow: "موجود و محبوب",
      h2: "ماشین‌های ویژه",
      viewAll: "مشاهده همه ماشین‌ها ←",
    },
    why: {
      eyebrow: "چرا Civic Tobacco Machinery",
      h2: "ماشین مناسب، آماده برای دوام",
      reasons: [
        { title: "ماشین‌هایی که به کار خود ادامه می‌دهند", text: "ما به برندهای اثبات‌شده با دسترسی آسان به قطعات پایبند هستیم، تا خط تولید شما شیفت به شیفت پربازده بماند." },
        { title: "گزارش‌های صادقانه از وضعیت", text: "هر ماشین دست دوم بازرسی، سرویس و آزمایش می‌شود. شما گزارشی دقیق از وضعیت آن دریافت می‌کنید، بدون هیچ‌گونه غافلگیری." },
        { title: "پشتیبانی کامل خط تولید", text: "از تولید تا بسته‌بندی، به شما کمک می‌کنیم ماشین‌ها را طوری هماهنگ کنید که هیچ‌کدام گلوگاه نشوند، و آن‌ها را نصب و پشتیبانی می‌کنیم." },
        { title: "کمک محلی و در محل", text: "ما دقیقاً همین‌جا، در پاکستان مستقر هستیم. وقتی به قطعه یا تکنسین نیاز دارید، کمک نزدیک است، نه در آن‌سوی دنیا." },
      ],
    },
    ranges: {
      making: "ماشین‌آلات تولید سیگار",
      packing: "ماشین‌آلات بسته‌بندی سیگار",
      filter: "ماشین‌آلات تولید فیلتر سیگار",
      wrapping: "ماشین‌آلات پوشش جعبه سیگار",
    },
    carousel: {
      eyebrow: "موجودی ما",
      heading: "ماشین‌آلات تنباکو برای فروش",
      viewAllPrefix: "مشاهده همه ",
      viewAllSuffix: " ←",
    },
    gallery: {
      eyebrow: "گالری",
      heading: "Civic Tobacco Machinery در تصاویر",
      text: "لحظاتی از نمایشگاه‌های بین‌المللی تنباکو و دیدارها با شرکا و مشتریان ما در سراسر جهان.",
    },
    local: {
      eyebrow: "خدمت‌رسانی به سراسر پاکستان",
      h2: "شریک ماشین‌آلات تنباکوی شما در پاکستان",
      text: "استقرار در منطقه صنعتی SITE، ما را به کارخانه‌هایی که خدمت می‌کنیم نزدیک می‌کند. وقتی به قطعه، تکنسین یا مشاوره‌ای صادقانه درباره یک ماشین نیاز دارید، با افرادی در همان شهر سروکار دارید، نه تأمین‌کننده‌ای در قاره‌ای دیگر.",
      bullets: ["پشتیبانی سریع محلی و قطعات یدکی", "نصب و راه‌اندازی در کارخانه شما", "ماشین‌های نو و بازسازی‌شده برای هر بودجه"],
      visitHeading: "از ما بازدید کنید یا تماس بگیرید",
      directions: "دریافت مسیر و اطلاعات تماس",
    },
    faqHeading: {
      eyebrow: "سؤالات رایج",
      h2: "سؤالات متداول",
    },
    faqs: [
      {
        question: "آیا در ایران هم ماشین‌های سیگار نو و هم دست دوم می‌فروشید؟",
        answer:
          "بله. ما ماشین‌های نو و همچنین ماشین‌آلات سیگار و تنباکوی دست دوم که با دقت بازسازی شده‌اند را تأمین می‌کنیم. هر ماشین دست دوم پیش از فروش بازرسی، سرویس و آزمایش می‌شود و با گزارش صادقانه‌ای از وضعیت همراه است تا دقیقاً بدانید چه چیزی می‌خرید.",
      },
      {
        question: "با چه برندهایی از ماشین‌آلات تولید سیگار کار می‌کنید؟",
        answer:
          "ما عمدتاً با برندهایی با پشتیبانی خوب مانند Molins برای ماشین‌های تولید و فیلتر، و HLP و SASIB برای بسته‌بندی و پوشش کار می‌کنیم. این‌ها به این دلیل انتخاب شده‌اند که قطعات و تکنسین‌های آموزش‌دیده به‌راحتی یافت می‌شوند، که خط تولید شما را سال‌ها فعال نگه می‌دارد.",
      },
      {
        question: "آیا ماشین‌ها را نصب می‌کنید و قطعات یدکی ارائه می‌دهید؟",
        answer:
          "بله. ما در نصب و تنظیم صحیح ماشین در کارگاه شما کمک می‌کنیم و پس از آن با قطعات یدکی و خدمات از شما پشتیبانی می‌کنیم. راه‌اندازی یک ماشین تولید یا بسته‌بندی کاری «نصب و استفاده فوری» نیست، پس تا زمانی که به‌درستی کار کند، همراه شما می‌مانیم.",
      },
      {
        question: "کجا مستقر هستید و آیا به سراسر پاکستان ارسال می‌کنید؟",
        answer:
          "کارگاه ما در منطقه صنعتی SITE در کراچی قرار دارد. ما به مشتریان در سراسر پاکستان خدمت می‌کنیم و می‌توانیم ارسال و نصب را در هر جایی که کارخانه شما باشد، ترتیب دهیم.",
      },
    ],
  },

  about: {
    metaTitle: "درباره ما | Civic Tobacco Machinery",
    metaDescription:
      "درباره Civic Tobacco Machinery، تأمین‌کننده ماشین‌آلات سیگار و تنباکو در پاکستان. ما چه کسانی هستیم، به چه چیزی پایبندیم و چگونه کارخانه شما را با ماشین‌های نو و دست دوم پشتیبانی می‌کنیم.",
    hero: {
      eyebrow: "درباره ما",
      title: "ماشین‌آلات سیگار و تنباکو، پشتیبانی‌شده توسط افرادی که آن را می‌شناسند",
      intro: "Civic Tobacco Machinery سال‌هاست به کارخانه‌های سراسر پاکستان کمک می‌کند تا خطوط سیگارسازی خود را بسازند، گسترش دهند و نگهداری کنند.",
    },
    whoHeading: "ما چه کسانی هستیم",
    who: [
      "ما تأمین‌کننده‌ای مستقر در پاکستان برای ماشین‌آلات سیگار و تنباکو هستیم. طی سال‌ها با انواع مشتریان کار کرده‌ایم، از کارگاه‌های کوچکی که اولین قدم‌های خود را در تولید سیگار برمی‌دارند تا کارخانه‌های باسابقه‌ای که خط دوم یا سوم اضافه می‌کنند. این تجربه شکل‌دهنده نحوه کار ماست؛ ابتدا گوش می‌دهیم، می‌فهمیم واقعاً به چه چیزی نیاز دارید و سپس شما را به ماشین مناسب هدایت می‌کنیم.",
      "محصولات ما تمام خط تولید را پوشش می‌دهد: ماشین‌های تولید که ساقه را شکل می‌دهند، تولیدکنندگان فیلتر، ماشین‌های بسته‌بندی برای پاکت‌های سخت و نرم، ماشین‌های پوشش و جعبه‌بندی، و تجهیزات تنباکو که کف کارخانه را تغذیه نگه می‌دارند. ما هم تجهیزات نو و هم تجهیزات با دقت بازسازی‌شده ارائه می‌دهیم، بنابراین همیشه گزینه‌ای معقول برای هر بودجه‌ای وجود دارد.",
    ],
    howHeading: "نحوه کار ما",
    how: [
      "خرید ماشین تنها نیمی از داستان است. یک ماشین تولید یا بسته‌بندی باید به‌درستی نصب شود، به‌طور صحیح تنظیم شود و در حال کار نگه داشته شود، و این دقیقاً جایی است که بسیاری از تأمین‌کنندگان ناپدید می‌شوند. ما این‌طور نیستیم. به شما کمک می‌کنیم ماشین را در کارگاه خود نصب کنید و آن را به‌درستی راه بیندازید و پس از آن نیز برای قطعات و خدمات در دسترس می‌مانیم.",
      "از آنجا که ما دقیقاً در همین منطقه صنعتی SITE مستقر هستیم، این پشتیبانی واقعاً محلی است. وقتی چیزی نیاز به توجه دارد، با افرادی در همان شهر صحبت می‌کنید، نه اینکه منتظر تأمین‌کننده‌ای در کشوری دیگر و منطقه زمانی دیگر بمانید.",
    ],
    brandsHeading: "برندهایی که به آن‌ها اعتماد داریم",
    brands:
      "ما بر نام‌های اثبات‌شده تمرکز می‌کنیم — Molins برای ماشین‌های تولید و فیلتر، HLP و SASIB برای بسته‌بندی و پوشش، و خانواده Protos برای خطوط با سرعت بالا. ما این‌ها را نه به خاطر برند، بلکه به این دلیل انتخاب می‌کنیم که قطعات و دانش فنی آن‌ها به‌راحتی یافت می‌شود، که دقیقاً همان چیزی است که یک ماشین را سال‌ها سودآور نگه می‌دارد.",
    glance: {
      heading: "در یک نگاه",
      basedIn: "مستقر در",
      basedInValue: "SITE، کراچی، پاکستان",
      supply: "ما تأمین می‌کنیم",
      supplyValue: "تجهیزات تنباکوی نو و دست دوم",
      serve: "ما خدمت می‌کنیم به",
      serveValue: "سراسر پاکستان",
      call: "تماس / واتساپ",
      talk: "با ما صحبت کنید",
    },
    valuesEyebrow: "به چه چیزی پایبندیم",
    valuesHeading: "شیوه انجام کسب‌وکار ما",
    values: [
      { title: "صداقت در درجه اول", text: "ما وضعیت واقعی یک ماشین و توانایی‌های آن را به شما می‌گوییم. فروشی که شما را ناراضی بگذارد اصلاً فروش نیست." },
      { title: "ماشین‌هایی که خودمان هم استفاده می‌کنیم", text: "ما با برندها و مدل‌هایی کار می‌کنیم که به آن‌ها اعتماد داریم — آن‌هایی که دسترسی خوبی به قطعات دارند و عمر کاری طولانی." },
      { title: "پشتیبانی پایدار", text: "کار ما با تحویل به پایان نمی‌رسد. ما در بلندمدت با نصب، راه‌اندازی، قطعات یدکی و خدمات کمک می‌کنیم." },
      { title: "ارزش منصفانه", text: "نو یا بازسازی‌شده، به شما کمک می‌کنیم ماشین مناسب برای بودجه‌تان را بدون کوتاه آمدن در نکات مهم پیدا کنید." },
    ],
    ctaTitle: "بیایید درباره خط تولید شما صحبت کنیم",
    ctaText: "چه در حال شروع باشید و چه در حال گسترش، به ما بگویید چه چیزی می‌خواهید تولید کنید و ما به شما کمک می‌کنیم به آن برسید.",
  },

  contact: {
    metaTitle: "تماس با ما | Civic Tobacco Machinery",
    metaDescription:
      "با Civic Tobacco Machinery در پاکستان تماس بگیرید. تماس بگیرید، در واتساپ پیام دهید یا درخواستی درباره ماشین‌های تولید، بسته‌بندی، پوشش سیگار و ماشین‌های دست دوم ارسال کنید. کارگاه در SITE، کراچی.",
    hero: {
      eyebrow: "تماس با ما",
      title: "با Civic Tobacco Machinery در تماس باشید",
      intro: "به ما بگویید به دنبال چه چیزی هستید و ما همان روز کاری با شما تماس می‌گیریم. تماس بگیرید، در واتساپ پیام دهید، ایمیل بزنید یا فرم زیر را ارسال کنید.",
    },
    directHeading: "مستقیماً با ما تماس بگیرید",
    directText: "سریع‌ترین راه برای دریافت پاسخی روشن درباره یک ماشین، وضعیت، قیمت یا موجودی آن، پیام دادن به ما در واتساپ یا تماس تلفنی است.",
    rows: {
      visit: "از کارگاه ما بازدید کنید",
      call: "با ما تماس بگیرید",
      whatsapp: "واتساپ",
      whatsappValue: "به ما پیام دهید در",
      email: "ایمیل",
      hours: "ساعات کاری",
      hoursValue: "شنبه تا پنجشنبه، ۰۹:۰۰ – ۱۸:۰۰",
      hoursClosed: "جمعه‌ها تعطیل",
    },
    openInMaps: "باز کردن در گوگل مپ",
    formHeading: "ارسال درخواست",
    formIntro: "این فرم را پر کنید و ما به‌سرعت با شما تماس می‌گیریم. فیلدهای علامت‌گذاری‌شده به‌عنوان الزامی به ما کمک می‌کنند پاسخی دقیق ارائه دهیم.",
    form: {
      name: "نام شما",
      namePlaceholder: "مثال: احمد خان",
      phone: "تلفن / واتساپ",
      phonePlaceholder: "مثال: ۰۳۰۰۱۲۳۴۵۶۷",
      email: "ایمیل",
      emailOptional: "(اختیاری)",
      emailPlaceholder: "you@company.com",
      interest: "ماشینی که به آن علاقه‌مندید",
      interestPlaceholder: "مثال: ماشین بسته‌بندی HLP-200",
      message: "پیام شما",
      messagePlaceholder: "فرمت، تولید هدف و هر جزئیات دیگری را به ما بگویید.",
      submit: "ارسال درخواست",
      sending: "در حال ارسال…",
      successTitle: "متشکریم!",
      successText: "درخواست شما ارسال شد. تیم ما به‌زودی، معمولاً همان روز کاری، با شما تماس خواهد گرفت.",
      errorText: "متأسفیم، در ارسال پیام شما مشکلی پیش آمد. لطفاً دوباره امتحان کنید، یا",
      errorWhatsApp: "در واتساپ به ما پیام دهید",
      footnote: "اطلاعات شما مستقیماً به تیم ما می‌رسد — ما معمولاً همان روز کاری پاسخ می‌دهیم. ترجیح می‌دهید چت کنید؟",
      footnoteChat: "واتساپ",
    },
  },

  categories: {
    "/cigarette-manufacturing-machines": {
      eyebrow: "ماشین‌آلات تولید",
      title: "ماشین‌آلات تولید سیگار در ایران",
      description: "ماشین‌آلات تولید سیگار در پاکستان، ماشین‌های تولید Molins، تولیدکنندگان فیلتر و تجهیزات تنباکو. خطوط نو و بازسازی‌شده از Civic Tobacco Machinery.",
      intro: [
        "یک سیگار خوب مدت‌ها پیش از رسیدن به پاکت آغاز می‌شود. با ماشینی که ساقه‌ای یکنواخت می‌سازد، خط فیلتری که تمیز برش می‌دهد، و تجهیزات تنباکویی که کل کف کارخانه را تغذیه نگه می‌دارد شروع می‌شود. Civic Tobacco Machinery ماشین‌آلات تولید سیگار را در هر سه این حوزه‌ها در پاکستان تأمین می‌کند.",
        "ما با ماشین‌های تولید Molins، تولیدکنندگان فیلتر KDF و PM، و تغذیه‌کننده‌ها، برش‌دهنده‌ها و بازیافت‌کننده‌هایی که از آن‌ها پشتیبانی می‌کنند کار می‌کنیم. برندهایی که استفاده می‌کنید و تولیدی که نیاز دارید را به ما بگویید، و ما به شما کمک می‌کنیم خطی بسازید که سرعت و کیفیت خود را روز به روز حفظ کند.",
      ],
      faqs: [
        { question: "چه ماشین‌آلات تولید سیگاری تأمین می‌کنید؟", answer: "ما خط تولید کامل را تأمین می‌کنیم: ماشین‌های تولید Molins Mark 8، Mark 9 و Mark 9.5 و ماشین‌های تولید Hauni Protos، به‌علاوه تولیدکنندگان فیلتر KDF و Molins و تغذیه‌کننده‌ها، برش‌دهنده‌ها و بازیافت‌کننده‌های تنباکویی که از آن‌ها پشتیبانی می‌کنند." },
        { question: "ماشین‌های تولید چند سیگار در دقیقه تولید می‌کنند؟", answer: "بسته به مدل، ماشین‌های تولید ما بین حدود ۳,۰۰۰ تا ۸,۰۰۰ سیگار در دقیقه کار می‌کنند، بنابراین می‌توانید ماشین را با تولید هدف خود تطبیق دهید." },
        { question: "آیا ماشین‌های نو یا بازسازی‌شده تأمین می‌کنید؟", answer: "هر دو. ماشین‌های بازسازی‌شده Molins و Hauni پیش از فروش کاملاً بازرسی، سرویس و آزمایش می‌شوند و ارزشی قوی برای کارخانه‌های در حال رشد ارائه می‌دهند." },
        { question: "آیا در تطبیق ماشین تولید با خط فیلتر مناسب کمک می‌کنید؟", answer: "بله. ما اطمینان می‌دهیم که ماشین تولید و تولیدکننده فیلتر هماهنگ کار کنند تا کل خط متعادل بماند. برندها و تولید هدف خود را به ما بگویید و ما پیکربندی مناسب را پیشنهاد می‌دهیم." },
      ],
    },
    "/cigarette-packing-machines": {
      eyebrow: "ماشین‌آلات بسته‌بندی",
      title: "ماشین‌آلات بسته‌بندی سیگار در ایران",
      description: "ماشین‌آلات بسته‌بندی سیگار در پاکستان، خطوط HLP و SASIB برای پاکت‌های سخت و نرم از ۱۸۰ تا ۲۲۵ پاکت در دقیقه. تأمین، نصب و پشتیبانی توسط Civic Tobacco Machinery.",
      intro: [
        "خط بسته‌بندی جایی است که محصول شما بالاخره شکل می‌گیرد، بنابراین باید پایدار، تمیز و در هر شیفت آسان برای کار باشد. در Civic Tobacco Machinery، ماشین‌آلات بسته‌بندی سیگار را در پاکستان تأمین می‌کنیم که دقیقاً برای همین انتخاب شده‌اند — تولید قابل اعتماد و پاکت‌هایی که هر بار یکسان به نظر می‌رسند.",
        "محصولات ما فرمت‌های پاکت سخت و نرم را از ۱۸۰ تا ۲۲۵ پاکت در دقیقه پوشش می‌دهد، با گزینه‌های نو و با دقت بازسازی‌شده. چه در حال راه‌اندازی یک خط جدید باشید و چه افزودن ظرفیت به خطی موجود، به شما کمک می‌کنیم ماشین مناسب را با حجم، بودجه و برندهایی که تولید می‌کنید تطبیق دهید.",
      ],
      faqs: [
        { question: "تفاوت بین ماشین‌های پاکت سخت و نرم چیست؟", answer: "پاکت‌های سخت (جعبه‌های درپوش‌لولایی) روی ماشین‌های سبک HLP کار می‌شوند، در حالی که پاکت‌های نرم (فویل تاشده و روکش چاپی) روی ماشین‌های سبک SASIB کار می‌شوند. ما هر دو را تأمین می‌کنیم و به شما کمک می‌کنیم ماشین را با فرمت پاکتی که برندهای شما واقعاً می‌فروشند تطبیق دهید." },
        { question: "چه سرعت‌های بسته‌بندی ارائه می‌دهید؟", answer: "ماشین‌های بسته‌بندی سیگار ما بین حدود ۱۸۰ تا ۲۲۵ پاکت در دقیقه کار می‌کنند. سرعتی را انتخاب کنید که با تقاضای واقعی شیفت شما مطابقت داشته باشد و کمی فضا برای رشد داشته باشد، به‌جای پرداخت هزینه برای ظرفیت بیکار." },
        { question: "آیا ماشین‌های بسته‌بندی نو یا بازسازی‌شده می‌فروشید؟", answer: "هر دو. هر بسته‌بند HLP یا SASIB دست دوم پیش از فروش بازرسی، سرویس و آزمایش می‌شود، بنابراین یک ماشین بازسازی‌شده خوب می‌تواند سال‌ها با کسری از قیمت نو کار کند." },
        { question: "آیا ماشین را نصب می‌کنید و قطعات یدکی تأمین می‌کنید؟", answer: "بله. ما ماشین را نصب و راه‌اندازی می‌کنیم و از HLP و SASIB با قطعات یدکی و خدماتی که به‌طور گسترده در دسترس هستند پشتیبانی می‌کنیم. برای قیمت و موجودی فعلی در واتساپ به شماره ۱۱۱۱۱۸۴ ۳۰۱ ۹۲+ به ما پیام دهید." },
      ],
    },
    "/cigarette-box-wrapping-machines": {
      eyebrow: "ماشین‌آلات پوشش",
      title: "ماشین‌آلات پوشش سیگار در ایران",
      description: "ماشین‌آلات پوشش سیگار در پاکستان، پوشش‌دهنده‌های خارجی، جعبه‌سازها و ماشین‌های پوشش سلوفان که پاکت‌های شما را تمیز مهر و موم می‌کنند. فروش، قطعات یدکی و خدمات از Civic Tobacco Machinery.",
      intro: [
        "پوشش آخرین چیزی است که مشتری شما پیش از باز کردن پاکت می‌بیند، به همین دلیل مهر و موم تمیز و محکم بسیار اهمیت دارد. Civic Tobacco Machinery ماشین‌آلات پوشش سیگار را در پاکستان تأمین می‌کند که به شما پرداخت فیلم مرتب، نوار پارگی مستقیم و پاکت‌هایی که در قفسه تازه می‌مانند می‌دهد.",
        "از پوشش‌دهنده‌های تک‌پاکت گرفته تا ماشین‌های پوشش جعبه و جعبه‌ساز کارتن، ما کل محصولات را پوشش می‌دهیم. هر ماشینی که می‌فروشیم بررسی، راه‌اندازی و آماده کار تحویل داده می‌شود، به‌همراه قطعات یدکی و خدماتی که در صورت نیاز می‌توانید به آن‌ها مراجعه کنید.",
      ],
      faqs: [
        { question: "تفاوت بین یک پوشش‌دهنده خارجی و یک جعبه‌ساز چیست؟", answer: "پوشش‌دهنده خارجی هر پاکت را در فیلم سلوفان با نوار پارگی مهر و موم می‌کند، در حالی که جعبه‌ساز (ماشین کارتن‌سازی) پاکت‌های تمام‌شده را در کارتن یا جعبه گروه‌بندی می‌کند. بیشتر خطوط از هر دو، پشت سر هم، استفاده می‌کنند." },
        { question: "چه ماشین‌های پوشش و جعبه‌سازی تأمین می‌کنید؟", answer: "ما پوشش‌دهنده‌های خارجی و جعبه‌سازهای Molins و SASIB تأمین می‌کنیم، از جمله پوشش‌دهنده پاکت CP1، پوشش‌دهنده خارجی بدون جعبه و جعبه‌سازهای Molins و SASIB، برای خطوط پاکت سخت و نرم." },
        { question: "آیا ماشین‌های پوشش نو یا بازسازی‌شده ارائه می‌دهید؟", answer: "هم واحدهای نو و هم با دقت بازسازی‌شده موجود است. هر ماشین دست دوم بررسی، راه‌اندازی و آماده کار تحویل داده می‌شود." },
        { question: "آیا نصب و قطعات یدکی ارائه می‌دهید؟", answer: "بله، نصب، راه‌اندازی، قطعات یدکی و خدمات همگی بخشی از کاری هستند که ما انجام می‌دهیم. برای دریافت قیمت در واتساپ به شماره ۱۱۱۱۱۸۴ ۳۰۱ ۹۲+ با ما تماس بگیرید." },
      ],
    },
    "/cigarette-filter-making-machines": {
      eyebrow: "ماشین‌آلات تولید",
      title: "ماشین‌آلات تولید فیلتر سیگار در ایران",
      description: "ماشین‌آلات تولید فیلتر سیگار در پاکستان، Molins KDF، Molins PM و تولیدکنندگان لوله توخالی. خطوط ساقه فیلتر تأمین و پشتیبانی‌شده توسط Civic Tobacco Machinery.",
      intro: [
        "یک فیلتر خوب کاری بیش از تکمیل سیگار انجام می‌دهد؛ کشش، سفتی و کل احساس دود را کنترل می‌کند. Civic Tobacco Machinery ماشین‌آلات تولید فیلتر سیگار را در پاکستان تأمین می‌کند که ساقه‌های پایداری تولید می‌کنند که ماشین تولید شما می‌تواند به آن‌ها اعتماد کند.",
        "ما تولیدکنندگان فیلتر Molins KDF و Molins PM را به‌همراه ماشین‌های لوله توخالی برای فرمت‌های تخصصی موجود داریم. هر طول یا نوع فیلتری که تولید کنید، به شما کمک می‌کنیم خطی متناسب با سرعت ماشین‌های تولید خود انتخاب کنید.",
      ],
      faqs: [
        { question: "چه ماشین‌های تولید فیلتری تأمین می‌کنید؟", answer: "ما تولیدکنندگان فیلتر Hauni KDF-1 و KDF-2، تولیدکنندگان فیلتر Molins PM و ماشین‌های لوله توخالی برای فرمت‌های تخصصی را برای کارخانه‌هایی که تولید ساقه فیلتر دارند، تأمین می‌کنیم." },
        { question: "آیا تولیدکننده فیلتر می‌تواند با سرعت ماشین سیگار من هماهنگ شود؟", answer: "بله. ما به شما کمک می‌کنیم خط فیلتری را انتخاب کنید که با سرعت ماشین‌های تولید شما مطابقت داشته باشد تا هر دو هماهنگ کار کنند و خط متعادل بماند." },
        { question: "آیا تولیدکنندگان فیلتر نو و بازسازی‌شده ارائه می‌دهید؟", answer: "هر دو. هر ماشین KDF یا PM بازسازی‌شده پیش از فروش بازرسی، سرویس و آزمایش می‌شود." },
        { question: "آیا ماشین‌های تولید فیلتر را نصب و پشتیبانی می‌کنید؟", answer: "بله، نصب، قطعات یدکی و خدمات شامل می‌شود. برای قیمت و موجودی در واتساپ به شماره ۱۱۱۱۱۸۴ ۳۰۱ ۹۲+ به ما پیام دهید." },
      ],
    },
    "/cutter-feeder-reclaimer": {
      eyebrow: "ماشین‌آلات تولید",
      title: "ماشین‌آلات برش، تغذیه و بازیافت تنباکو در ایران",
      description: "تجهیزات تنباکو در پاکستان، تغذیه‌کننده‌ها، برش‌دهنده‌ها، بازیافت‌کننده‌ها و صاف‌کننده‌های ساقه که کف‌های اولیه و ثانویه شما را در حال کار نگه می‌دارند. تأمین‌شده توسط Civic Tobacco Machinery.",
      intro: [
        "پشت هر ماشین تولید و بسته‌بندی، مجموعه‌ای از ماشین‌های ساکت‌تر کار سنگین را انجام می‌دهند — تغذیه تنباکو، برش آن، نجات آنچه در غیر این صورت هدر می‌رفت. Civic Tobacco Machinery تجهیزات تنباکو را در پاکستان تأمین می‌کند که این بخش از کف کارخانه را در حرکت نگه می‌دارد.",
        "تغذیه‌کننده‌ها، برش‌دهنده‌ها، بازیافت‌کننده‌ها و صاف‌کننده‌های ساقه با هم کار می‌کنند تا تأمین پایداری برای خط شما حفظ کنند و ضایعات را کاهش دهند. ما به شما کمک می‌کنیم واحدهای مناسب را در اطراف ماشین‌های تولید و بسته‌بندی که در حال حاضر استفاده می‌کنید، نصب کنید.",
      ],
      faqs: [
        { question: "تغذیه‌کننده‌ها، برش‌دهنده‌ها و بازیافت‌کننده‌های تنباکو چه کاری انجام می‌دهند؟", answer: "تغذیه‌کننده‌ها ماشین‌های تولید را با تنباکو تأمین شده نگه می‌دارند، برش‌دهنده‌ها برگ‌ها را برای تولید به اندازه لازم برش می‌دهند، و بازیافت‌کننده‌ها تنباکو را از سیگارهای رد شده بازیابی می‌کنند تا دوباره استفاده شود، و کف‌های اولیه و ثانویه را روان نگه می‌دارند." },
        { question: "آیا این تجهیزات می‌توانند ضایعات تنباکو را کاهش دهند؟", answer: "بله. یک بازیافت‌کننده تنباکوی قابل استفاده را از ساقه‌های رد شده بازیابی می‌کند که ضایعات را کاهش و هزینه‌های عملیاتی را در طول زمان پایین می‌آورد." },
        { question: "چه برندهایی تأمین می‌کنید؟", answer: "ما ماشین‌های با پشتیبانی خوب مانند برش‌دهنده تنباکو Hauni KT-400، به‌همراه تغذیه‌کننده‌های تنباکو، بازیافت‌کننده‌های سیگار و صاف‌کننده‌های ساقه را تأمین می‌کنیم." },
        { question: "آیا ماشین‌ها نو هستند یا بازسازی‌شده، و آیا از آن‌ها پشتیبانی می‌کنید؟", answer: "هم واحدهای نو و هم بازسازی‌شده موجود است، همگی پیش از فروش آزمایش می‌شوند، به‌همراه نصب، قطعات یدکی و خدمات. در واتساپ به شماره ۱۱۱۱۱۸۴ ۳۰۱ ۹۲+ با ما تماس بگیرید." },
      ],
    },
  },
  manufacturingSection: {
    title: "ماشین‌آلات تولید سیگار در ایران",
    intro: "ماشین تولید، قلب هر کارخانه سیگارسازی است. تنباکوی برش‌خورده و کاغذ را می‌گیرد و آن‌ها را هزاران بار در دقیقه، بدون وقفه در کیفیت، به ساقه‌ای کامل تبدیل می‌کند.",
    seeAll: "مشاهده همه ←",
  },
  blog: {
    eyebrow: "وبلاگ",
    indexTitle: "راهنماها و توصیه‌ها درباره ماشین‌آلات سیگار",
    indexIntro: "مقالاتی صریح که به شما کمک می‌کند ماشین‌آلات سیگار و تنباکو را انتخاب، خریداری و اداره کنید، نوشته‌شده توسط افرادی که هر روز با این ماشین‌ها کار می‌کنند.",
    metaTitle: "وبلاگ | Civic Tobacco Machinery",
    metaDescription: "راهنماهای عملی درباره ماشین‌آلات سیگار و تنباکو، انتخاب ماشین‌های بسته‌بندی، مقایسه ماشین‌های تولید و خرید ماشین‌های دست دوم در پاکستان. از Civic Tobacco Machinery.",
    readArticle: "خواندن مقاله ←",
    minRead: "دقیقه مطالعه",
    tags: "برچسب‌ها:",
    backToAll: "← بازگشت به همه مقالات",
    keepReading: "ادامه مطالعه",
    dateLocale: "fa-IR",
  },
  product: {
    keyFeatures: "ویژگی‌های کلیدی",
    specifications: "مشخصات فنی",
    description: "توضیحات",
    bestSuitedFor: "بهترین گزینه برای",
    call: "تماس",
    interested: "به این ماشین علاقه‌مندید؟",
    askAbout: "درباره این سؤال بپرسید:",
    enquiryText: "برای اطلاع از قیمت، موجودی فعلی و وضعیت، پیامی کوتاه برای ما ارسال کنید. همچنین شما را از ماشین‌های مناسب برای تکمیل خط تولیدتان مطلع می‌کنیم.",
    related: "ماشین‌های مرتبط",
    thumbs: { front: "نمای جلو", detail: "جزئیات", operation: "در حال کار" },
    waMessage: (name) => `سلام، به ${name} علاقه‌مندم. لطفاً قیمت و موجودی را اعلام کنید.`,
  },
};

const dictionaries: Partial<Record<LocaleCode, Dictionary>> = {
  en,
  de,
  it,
  ru,
  ar,
  pl,
  bg,
  vi,
  id,
  tr,
  zh,
  fa,
  za,
  zw,
};

/** Get the dictionary for a locale, falling back to English if not translated. */
export function getDict(locale: LocaleCode): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]!;
}

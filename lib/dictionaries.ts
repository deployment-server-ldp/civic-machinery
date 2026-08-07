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
    tagline: "Hersteller von Zigaretten- & Tabakmaschinen in Pakistan",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    region: "Pakistan",
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
    metaTitle: "Civic Tobacco Machinery | Zigarettenmaschinen aus Pakistan",
    metaDescription:
      "Civic Tobacco Machinery liefert Maschinen für die Zigarettenherstellung, -verpackung und -umhüllung in Pakistan. Neue und gebrauchte Tabakmaschinen, Filterstranganlagen, Ersatzteile und vollständige Installationsunterstützung.",
    hero: {
      h1: "Suchen Sie Zigaretten- & Tabakmaschinen aus Pakistan?",
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
      title: "Zigarettenherstellungsmaschinen in Pakistan",
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
      title: "Zigarettenverpackungsmaschinen in Pakistan",
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
      title: "Zigaretten-Umhüllungsmaschinen in Pakistan",
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
      title: "Zigarettenfilter-Herstellungsmaschinen in Pakistan",
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
      title: "Tabakschneider, -beschicker & -rückgewinner in Pakistan",
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
    title: "Zigarettenherstellungsmaschinen in Pakistan",
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
    tagline: "Produttori di macchine per sigarette e tabacco in Pakistan",
    call: "Chiama",
    whatsapp: "WhatsApp",
    region: "Pakistan",
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
    metaTitle: "Civic Tobacco Machinery | Macchine per sigarette dal Pakistan",
    metaDescription:
      "Civic Tobacco Machinery fornisce macchine per la produzione, l'impacchettamento e l'incarto di sigarette in Pakistan. Macchine per tabacco nuove e usate, linee per filtri, ricambi e supporto completo all'installazione.",
    hero: {
      h1: "Cerchi macchine per sigarette e tabacco dal Pakistan?",
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
      title: "Macchine di produzione per sigarette in Pakistan",
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
      title: "Macchine impacchettatrici per sigarette in Pakistan",
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
      title: "Macchine incartatrici per sigarette in Pakistan",
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
      title: "Macchine per filtri per sigarette in Pakistan",
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
      title: "Taglierine, alimentatori e recuperatori per tabacco in Pakistan",
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
    title: "Macchine per sigarette in Pakistan",
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
    tagline: "Производители машин для сигарет и табака в Пакистане",
    call: "Позвонить",
    whatsapp: "WhatsApp",
    region: "Пакистан",
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
    metaTitle: "Civic Tobacco Machinery | Сигаретные машины из Пакистана",
    metaDescription:
      "Civic Tobacco Machinery поставляет машины для производства, упаковки и обёртки сигарет в Пакистане. Новое и бывшее в употреблении табачное оборудование, линии для фильтров, запчасти и полная поддержка при установке.",
    hero: {
      h1: "Ищете машины для сигарет и табака из Пакистана?",
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
      title: "Производственные машины для сигарет в Пакистане",
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
      title: "Упаковочные машины для сигарет в Пакистане",
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
      title: "Обёрточные машины для сигарет в Пакистане",
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
      title: "Машины для производства сигаретных фильтров в Пакистане",
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
      title: "Табачные резаки, подающие устройства и рекуператоры в Пакистане",
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
    title: "Сигаретные машины в Пакистане",
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
    tagline: "مصنّعو ماكينات السجائر والتبغ في باكستان",
    call: "اتصل",
    whatsapp: "واتساب",
    region: "باكستان",
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
    metaTitle: "Civic Tobacco Machinery | ماكينات السجائر من باكستان",
    metaDescription:
      "توفّر Civic Tobacco Machinery ماكينات تصنيع السجائر وتغليفها ولفّها في باكستان. ماكينات تبغ جديدة ومستعملة، وخطوط فلاتر، وقطع غيار، ودعم كامل للتركيب.",
    hero: {
      h1: "تبحث عن ماكينات السجائر والتبغ من باكستان؟",
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
      title: "ماكينات تصنيع السجائر في باكستان",
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
      title: "ماكينات تغليف السجائر في باكستان",
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
      title: "ماكينات لفّ السجائر في باكستان",
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
      title: "ماكينات صناعة فلاتر السجائر في باكستان",
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
      title: "ماكينات تقطيع وتغذية واسترجاع التبغ في باكستان",
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
    title: "ماكينات صناعة السجائر في باكستان",
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

const dictionaries: Partial<Record<LocaleCode, Dictionary>> = { en, de, it, ru, ar };

/** Get the dictionary for a locale, falling back to English if not translated. */
export function getDict(locale: LocaleCode): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]!;
}

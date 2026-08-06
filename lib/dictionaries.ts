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
};

const dictionaries: Partial<Record<LocaleCode, Dictionary>> = { en, de };

/** Get the dictionary for a locale, falling back to English if not translated. */
export function getDict(locale: LocaleCode): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]!;
}

/**
 * Blog articles. Written as helpful guides that also support the main
 * keywords. Each post renders an Article + Breadcrumb JSON-LD.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO
  updated?: string;
  author: string;
  readMinutes: number;
  keywords: string[];
  /** Simple content model: headings + paragraphs. */
  body: { heading?: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-cigarette-packing-machine-karachi",
    title: "How to Choose the Right Cigarette Packing Machine for Your Factory",
    description:
      "A practical guide to choosing a cigarette packing machine in Pakistan — hard pack vs soft pack, speed, budget and support. Advice from Civic Tobacco Machinery.",
    excerpt:
      "Hard pack or soft pack? 180 or 225 a minute? New or reconditioned? A plain-English guide to picking a packing machine that fits your factory.",
    date: "2026-01-14",
    author: "Civic Tobacco Machinery",
    readMinutes: 6,
    keywords: [
      "Cigarette Packing Machines in Pakistan",
      "choose packing machine",
      "hard pack soft pack",
    ],
    body: [
      {
        paragraphs: [
          "Buying a packing machine is a big decision, and it is easy to get lost in speeds and model numbers. This guide keeps it simple. We will walk through the few things that really decide which machine is right for you, based on what we see every day with factories here in Pakistan.",
        ],
      },
      {
        heading: "1. Start with your pack format",
        paragraphs: [
          "The first question is always the same — hard pack or soft pack? Hard packs, the hinge-lid boxes, need an HLP-style machine. Soft packs, the ones with the folded foil and printed outer, need a SASIB-style machine. Some factories run both, but most start with one. Choose the format your brands actually sell, not the one that looks fancier.",
        ],
      },
      {
        heading: "2. Match the speed to your real demand",
        paragraphs: [
          "It is tempting to buy the fastest machine you can afford, but a 225-a-minute line that sits half idle is money wasted. Look at how many packs you actually need per shift, add some room to grow, and pick a speed that matches. An HLP-180 is plenty for many factories; step up to a 200 or 225 only when your orders truly need it.",
        ],
      },
      {
        heading: "3. New or reconditioned?",
        paragraphs: [
          "A good reconditioned machine can run for years and costs far less than new. The key word is good — it has to be properly inspected, serviced and tested. That is exactly how we prepare every used machine we sell. If your budget is tight, a reconditioned HLP or SASIB is often the smarter buy.",
        ],
      },
      {
        heading: "4. Think about the whole line",
        paragraphs: [
          "A packer does not work alone. It needs an overwrapper after it and a maker feeding it. When you choose a packing machine, make sure it fits with the rest of your line in speed and format. We help with this every time so nothing becomes a bottleneck.",
        ],
      },
      {
        heading: "5. Ask about parts and service",
        paragraphs: [
          "The best machine is worthless if you cannot get parts or help when it stops. Popular models like HLP and SASIB have widely available spares and plenty of technicians who know them. That is one more reason we stick to well-supported machines.",
        ],
      },
      {
        heading: "Talk to us before you decide",
        paragraphs: [
          "Every factory is a little different. Tell us your format, your target output and your budget, and we will point you to the machine that fits — no pressure, just honest advice. Message us on WhatsApp or drop by our workshop in SITE, Pakistan.",
        ],
      },
    ],
  },
  {
    slug: "hauni-mark-8-vs-mark-9-cigarette-makers",
    title: "Hauni Mark 8 vs Mark 9: Which Cigarette Maker Suits You?",
    description:
      "Comparing the Hauni Mark 8 and Mark 9 cigarette making machines — speed, control and cost. Practical advice from Civic Tobacco Machinery in Pakistan.",
    excerpt:
      "Both are legends. But which Hauni maker is right for your floor? We compare the Mark 8 and Mark 9 in plain terms.",
    date: "2026-02-03",
    author: "Civic Tobacco Machinery",
    readMinutes: 5,
    keywords: [
      "Hauni Mark 8",
      "Hauni Mark 9",
      "Cigarette Manufacturing Machines in Pakistan",
    ],
    body: [
      {
        paragraphs: [
          "The Hauni Mark 8 and Mark 9 are two of the most respected cigarette makers ever built, and both still run in factories around the world. If you are choosing between them, here is how we help customers decide.",
        ],
      },
      {
        heading: "The Mark 8: simple and dependable",
        paragraphs: [
          "The Mark 8 is the workhorse. It is simple, tough, and almost every technician knows it. Parts are easy to find and it forgives a lot. For a first maker, a backup line, or a factory that values reliability over top speed, the Mark 8 is hard to beat. The Post 64 and 8D MAX versions add better control while keeping that dependable base.",
        ],
      },
      {
        heading: "The Mark 9: more speed, more control",
        paragraphs: [
          "The Mark 9 is the faster generation. If your orders have grown and one maker needs to produce more, the Mark 9 — especially the MAX S and Mark 9.5 versions — gives you the output. The trade-off is that it is a more advanced machine, so it rewards a team that keeps up with maintenance.",
        ],
      },
      {
        heading: "So which one?",
        paragraphs: [
          "If you are starting out or want maximum reliability for the money, go Mark 8. If you need higher volume from a single machine and have the team to support it, go Mark 9. Either way, we make sure the maker is matched with the right filter maker so the line stays balanced.",
          "Not sure? Send us your target output and we will recommend the maker — and the supporting equipment — that fits.",
        ],
      },
    ],
  },
  {
    slug: "buying-used-tobacco-machinery-karachi-checklist",
    title: "Buying Used Tobacco Machinery in Pakistan: A Buyer's Checklist",
    description:
      "What to check before buying used cigarette machines in Pakistan — condition, testing, parts and support. A buyer's checklist from Civic Tobacco Machinery.",
    excerpt:
      "Used machinery can save you a fortune — or cost you one. Here is the checklist we would use before handing over any money.",
    date: "2026-03-10",
    author: "Civic Tobacco Machinery",
    readMinutes: 6,
    keywords: [
      "Used Cigarette Machines Pakistan",
      "used tobacco machinery",
      "buying used cigarette machines",
    ],
    body: [
      {
        paragraphs: [
          "Used cigarette and tobacco machinery is a great way to build or expand a factory without paying new prices. But not every used machine is a good buy. Here is the checklist we would use before purchasing anything — and the standard we hold ourselves to when we sell.",
        ],
      },
      {
        heading: "1. Has it actually been tested?",
        paragraphs: [
          "A machine that has been sitting in a warehouse is an unknown until it runs. Ask whether it has been powered up, run and tested — not just cleaned and painted. We test every machine before we sell it, because a fresh coat of paint tells you nothing about the mechanics underneath.",
        ],
      },
      {
        heading: "2. Is there an honest condition report?",
        paragraphs: [
          "You should know what has been replaced, what is worn and what to expect. A seller who gives you a straight condition report is a seller you can trust. Be cautious of anyone who insists everything is perfect — every used machine has a history.",
        ],
      },
      {
        heading: "3. Can you get spare parts?",
        paragraphs: [
          "Stick to models with good parts availability — Hauni Mark and Protos makers, KDF filter makers, HLP and SASIB packers. Rare or unusual machines can strand you the first time something wears out.",
        ],
      },
      {
        heading: "4. Will the seller support installation?",
        paragraphs: [
          "Getting a maker or packer running on your floor is not a plug-and-play job. Choose a seller who will help with installation and setting the machine correctly. We do this as standard so the machine performs the way it should from the start.",
        ],
      },
      {
        heading: "5. Does it fit your line?",
        paragraphs: [
          "A brilliant machine at the wrong speed or format still becomes a bottleneck. Make sure any used machine matches the rest of your line. We always check this before recommending anything.",
          "Buying used the right way is one of the smartest moves a factory can make. Come and see our stock in SITE, Pakistan, or message us on WhatsApp and we will tell you what is available today.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

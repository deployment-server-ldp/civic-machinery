import { siteConfig } from "./site";
import type { BlogPost } from "./blog";

/**
 * Hand-written JSON-LD for individual blog posts, keyed by slug. When a post
 * has an entry here, the post page renders this @graph instead of the default
 * Article schema and breadcrumb schema. URLs, dates and the image come from
 * the post itself so they always match the live page.
 */
type PostSchema = (post: BlogPost, pageUrl: string) => object;

const abs = (path: string) => (path.startsWith("http") ? path : `${siteConfig.url}${path}`);
const ORG = { "@id": `${siteConfig.url}/#organization` };

/** FAQs for the TIT Expo post: must match the FAQ section in the post body. */
const TIT_EXPO_FAQS = [
  {
    q: "When and where is TIT Expo 2026?",
    a: "TIT Expo 2026 (Tobacco Industry Technologies Expo) takes place on 1–2 December 2026, from 10:00 to 18:00, at Anhor Park Exhibition Hall, 12/1 Labzak Street, Tashkent, Uzbekistan.",
  },
  {
    q: "What is TIT Expo?",
    a: "TIT Expo is an international B2B exhibition and forum for the tobacco industry, covering equipment, raw materials, packaging and production technology, and it is the first tobacco-focused exhibition in Uzbekistan.",
  },
  {
    q: "Is Civic Tobacco Machinery exhibiting at TIT Expo 2026?",
    a: "Yes. Civic Tobacco Machinery, a tobacco machinery supplier since 1990, is exhibiting at Stand A-11 at TIT Expo 2026 in Tashkent, showing cigarette machines, spare parts, brochures and machine videos, with its senior management at the stand.",
  },
  {
    q: "Which cigarette machines can I discuss with Civic at TIT Expo?",
    a: "Molins Mark 8, Mark 8D, MK-9 and Mark 9.5 makers, Hauni Protos 70 and Protos 80 ER makers, HLP-180, HLP-200 and HLP-225 hard pack packers, and SASIB 3000 and SASIB 5000 soft pack machines, new or reconditioned.",
  },
  {
    q: "Can I book a meeting with Civic before TIT Expo?",
    a: "Yes. Message us on WhatsApp at +92 301 1111184 with your company name, preferred day and the machines you are interested in, and we will reserve a time to meet you at Stand A-11 in Tashkent.",
  },
  {
    q: "Can Civic deliver tobacco machinery to Tashkent after the exhibition?",
    a: "Yes. We ship cigarette machinery by road from Karachi to Tashkent, usually in 7 to 10 days on the Trans-Afghan corridor when it is open, and we install and commission every machine at your factory.",
  },
];

const titExpo2026: PostSchema = (post, pageUrl) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: post.metaTitle ?? post.title,
      description: post.description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      inLanguage: "en",
      image: abs(post.featuredImage || "/images/machines/protos-80-er.webp"),
      author: {
        "@type": "Person",
        name: "Kashif Ali",
        jobTitle: "CEO, Civic Tobacco Machinery",
        worksFor: ORG,
      },
      publisher: ORG,
      about: [
        { "@id": `${pageUrl}#event` },
        {
          "@type": "Place",
          name: "Tashkent",
          containedInPlace: { "@type": "Country", name: "Uzbekistan" },
        },
      ],
      mentions: [
        {
          "@type": "WebPage",
          url: `${siteConfig.url}/export-to/uzbekistan/`,
          name: "Tobacco & Cigarette Machinery Supplier Tashkent, Uzbekistan",
        },
      ],
      keywords:
        "tobacco machinery, cigarette machinery, tobacco machinery supplier, cigarette machinery supplier, tobacco machines, cigarette machines, TIT Expo 2026, Tashkent",
    },
    {
      "@type": "Event",
      "@id": `${pageUrl}#event`,
      name: "TIT Expo 2026 – Tobacco Industry Technologies Expo",
      startDate: "2026-12-01T10:00:00+05:00",
      endDate: "2026-12-02T18:00:00+05:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Anhor Park Exhibition Hall",
        address: {
          "@type": "PostalAddress",
          streetAddress: "12/1 Labzak Street",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
      },
      organizer: { "@type": "Organization", name: "United Expo", url: "https://tit-expo.com/en/" },
      description:
        "International B2B exhibition and forum for the tobacco industry: equipment, raw materials, packaging and production technology.",
      url: "https://tit-expo.com/en/",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog/` },
        { "@type": "ListItem", position: 3, name: "TIT Expo 2026 Tashkent", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: TIT_EXPO_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
});

export const blogPostSchemas: Record<string, PostSchema> = {
  "tit-expo-2026-in-tashkent-meet-team-civic-tobacco-machinery-your-cigarette-and-t": titExpo2026,
};

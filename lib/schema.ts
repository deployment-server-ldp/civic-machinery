import { siteConfig } from "./site";
import type { BlogPost } from "./blog";

/**
 * JSON-LD structured data builders. Each returns a plain object that is
 * serialised into a <script type="application/ld+json"> tag by <JsonLd />.
 */

const abs = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.url}${path === "/" ? "" : path}`;

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.locality,
  addressRegion: siteConfig.address.region,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.country,
});

// Continents/regions are described as Place; everything else as a Country.
const REGIONS = new Set(["Europe", "North America", "South America"]);
const areaServed = () =>
  siteConfig.serviceAreas.map((name) => ({
    "@type": REGIONS.has(name) ? "Place" : "Country",
    name,
  }));

const socialProfiles = () => [
  siteConfig.social.facebook,
  siteConfig.social.instagram,
  siteConfig.social.linkedin,
  siteConfig.social.youtube,
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: abs("/logo.svg"),
    image: abs("/og-default.svg"),
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingYear,
    address: postalAddress(),
    areaServed: areaServed(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: siteConfig.serviceAreas,
      availableLanguage: ["en", "ur"],
    },
    sameAs: socialProfiles(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost, path: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: abs(image),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: abs("/logo.svg") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(path) },
  };
}

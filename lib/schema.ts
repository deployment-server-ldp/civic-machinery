import { siteConfig } from "./site";
import type { Product } from "./products";
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
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: abs("/og-default.svg"),
    logo: abs("/logo.svg"),
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$$",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Karachi" },
      { "@type": "Country", name: "Pakistan" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.hours.days,
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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

export function productSchema(product: Product, path: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: abs(image),
    description: product.metaDescription,
    sku: product.slug.toUpperCase(),
    category: product.category,
    ...(product.brand
      ? { brand: { "@type": "Brand", name: product.brand } }
      : {}),
    itemCondition:
      product.condition === "New"
        ? "https://schema.org/NewCondition"
        : "https://schema.org/UsedCondition",
    offers: {
      "@type": "Offer",
      url: abs(path),
      priceCurrency: "PKR",
      price: "0",
      availability: "https://schema.org/InStock",
      itemCondition:
        product.condition === "New"
          ? "https://schema.org/NewCondition"
          : "https://schema.org/UsedCondition",
      seller: { "@id": `${siteConfig.url}/#organization` },
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    },
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

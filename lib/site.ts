/**
 * Central site configuration.
 * Change values here (or set NEXT_PUBLIC_SITE_URL) and they flow through
 * metadata, sitemap, robots, JSON-LD schema and the whole UI.
 */

export const siteConfig = {
  name: "Civic Tobacco Machinery",
  shortName: "Civic Tobacco Machinery",
  legalName: "Civic Tobacco Machinery",
  // Set the real domain in production via NEXT_PUBLIC_SITE_URL.
  url:
    (process.env.NEXT_PUBLIC_SITE_URL || "https://www.civictobaccomachinery.com").replace(
      /\/$/,
      ""
    ),
  description:
    "Civic Tobacco Machinery supplies cigarette manufacturing, packing and wrapping machines in Karachi. New and used tobacco machinery, filter making lines, spare parts and full installation support.",
  tagline: "Cigarette & Tobacco Machinery Suppliers in Karachi",
  locale: "en_PK",
  phoneDisplay: "+92 301 1111184",
  phone: "+923011111184",
  whatsapp: "923011111184",
  email: "info@civictobaccomachinery.com",
  address: {
    street: "Plot No. A, 8/D Fakhruddin Valika Rd, Metroville S.I.T.E.",
    locality: "Karachi",
    region: "Sindh",
    postalCode: "75700",
    country: "PK",
    countryName: "Pakistan",
  },
  geo: {
    // Approximate coordinates for SITE / Metroville, Karachi.
    latitude: 24.9268,
    longitude: 67.0668,
  },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
  foundingYear: "1998",
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const fullAddress = () => {
  const a = siteConfig.address;
  return `${a.street}, ${a.locality}, ${a.region} ${a.postalCode}, ${a.countryName}`;
};

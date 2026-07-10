import type { Metadata } from "next";
import { siteConfig } from "./site";

/**
 * Build a Metadata object with sensible SEO defaults:
 * title, description, canonical URL, Open Graph and Twitter tags.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  images,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  /** Absolute path beginning with "/". Used for the canonical URL. */
  path: string;
  keywords?: string[];
  images?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const ogImages = (images && images.length ? images : ["/og-default.svg"]).map(
    (img) => (img.startsWith("http") ? img : `${siteConfig.url}${img}`)
  );

  // The passed `title` is used exactly as the <title> (kept under ~60 chars by
  // the caller). `absolute` bypasses the root layout title template so the site
  // name is never appended twice.
  return {
    title: { absolute: title },
    description,
    keywords: keywords?.length ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: ogImages.map((u) => ({ url: u, width: 1200, height: 630, alt: title })),
      ...(type === "article"
        ? { publishedTime, modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
  };
}

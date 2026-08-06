import type { Metadata } from "next";
import { siteConfig } from "./site";
import { metaOverrides } from "./seo-overrides";
import {
  type LocaleCode,
  defaultLocale,
  locales,
  localePath,
  hreflangAlternates,
} from "./i18n";

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
  locale = defaultLocale,
}: {
  title: string;
  description: string;
  /**
   * Canonical English/root-relative path beginning with "/" (e.g. "/contact").
   * The locale prefix is added automatically for non-default locales, so pass
   * the same `path` for both the English page and its translated counterpart.
   */
  path: string;
  keywords?: string[];
  images?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  /** Which language this page is rendered in. Defaults to English. */
  locale?: LocaleCode;
}): Metadata {
  // Self-referencing canonical for this locale (English stays unprefixed).
  const localizedPath = localePath(locale, path);
  const url = `${siteConfig.url}${localizedPath === "/" ? "" : localizedPath}`;
  const ogImages = (images && images.length ? images : ["/og-default.svg"]).map(
    (img) => (img.startsWith("http") ? img : `${siteConfig.url}${img}`)
  );

  // Per-page SEO overrides from the master sheet (title/description only) are
  // English-only. Translated pages carry their own copy from the dictionary.
  const override = locale === defaultLocale ? metaOverrides[path] : undefined;
  const metaTitle = override?.title ?? title;
  const metaDescription = override?.description ?? description;

  // hreflang cluster: every locale this path is translated into + x-default.
  // Only emitted when a translation actually exists (avoids broken alternates).
  const alts = hreflangAlternates(path);
  const languages =
    alts.length > 1
      ? Object.fromEntries(
          alts.map((a) => [a.hreflang, `${siteConfig.url}${a.path === "/" ? "" : a.path}`]),
        )
      : undefined;

  // `absolute` bypasses the root layout title template so the site name is
  // never appended twice.
  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    keywords: keywords?.length ? keywords : undefined,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
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
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: siteConfig.name,
      locale: locale === defaultLocale ? siteConfig.locale : locales[locale].hreflang.replace("-", "_"),
      type,
      images: ogImages.map((u) => ({ url: u, width: 1200, height: 630, alt: metaTitle })),
      ...(type === "article"
        ? { publishedTime, modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImages,
    },
  };
}

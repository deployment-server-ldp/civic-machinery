/**
 * Internationalisation foundation.
 *
 * The English site stays at the domain root (the x-default). Each other
 * language lives under its own folder (/de/, /ar/, …). This registry is the
 * single source of truth for which locales exist, how they map to hreflang,
 * which are right-to-left, and how to build localized paths + hreflang
 * alternates. Adding a language = adding one entry here (plus its content).
 */

import { translatedProductPaths } from "./i18n-products";

export type LocaleCode = "en" | "de" | "ar" | "ru" | "it" | "pl";

export interface Locale {
  /** Short code used in the URL folder (except the default, which is root). */
  code: LocaleCode;
  /** hreflang value, e.g. "de-DE". */
  hreflang: string;
  /** Language name in its own language (for the switcher). */
  name: string;
  /** Language name in English (for admin/tooling). */
  englishName: string;
  /** Text direction. */
  dir: "ltr" | "rtl";
}

export const defaultLocale: LocaleCode = "en";

/** All live locales. `en` is the root/x-default; the rest are Wave A. */
export const locales: Record<LocaleCode, Locale> = {
  en: { code: "en", hreflang: "en", name: "English", englishName: "English", dir: "ltr" },
  de: { code: "de", hreflang: "de-DE", name: "Deutsch", englishName: "German", dir: "ltr" },
  ar: { code: "ar", hreflang: "ar", name: "العربية", englishName: "Arabic", dir: "rtl" },
  ru: { code: "ru", hreflang: "ru-RU", name: "Русский", englishName: "Russian", dir: "ltr" },
  it: { code: "it", hreflang: "it-IT", name: "Italiano", englishName: "Italian", dir: "ltr" },
  pl: { code: "pl", hreflang: "pl-PL", name: "Polski", englishName: "Polish", dir: "ltr" },
};

export const localeCodes = Object.keys(locales) as LocaleCode[];

/**
 * Locales that are actually built and live right now. The `locales` registry
 * above lists every *planned* language, but only these have dictionaries and
 * pages — so only these drive static generation, hreflang and the switcher.
 * Promote a language here (after adding its dictionary) to take it live.
 */
export const liveLocaleCodes: LocaleCode[] = ["en", "de"];

/** Live locales that get a URL folder prefix (everyone except the default). */
export const prefixedLocales = liveLocaleCodes.filter((c) => c !== defaultLocale);

export const isLocale = (v: string): v is LocaleCode =>
  (localeCodes as string[]).includes(v);

export const isRtl = (code: LocaleCode) => locales[code].dir === "rtl";

/**
 * Build the path for a given locale. The default locale is unprefixed
 * (keeps the existing English URLs), others get a /<code> prefix.
 * `path` is the root-relative path beginning with "/".
 */
export function localePath(code: LocaleCode, path: string): string {
  const clean = path === "/" ? "" : path;
  return code === defaultLocale ? path : `/${code}${clean || "/"}`;
}

/**
 * Canonical English paths that currently have translated counterparts.
 * Only these advertise hreflang alternates + appear in the /[locale] tree.
 * Grow this set as more pages/waves are translated. This is the single
 * source of truth shared by buildMetadata, the sitemap and the switcher.
 */
const staticTranslatedPaths = [
  "/",
  "/about",
  "/contact",
  "/cigarette-manufacturing-machines",
  "/cigarette-packing-machines",
  "/cigarette-box-wrapping-machines",
  "/cigarette-filter-making-machines",
  "/cutter-feeder-reclaimer",
  // Blog: the index + the translated posts (kept in sync with content/blog/de).
  // Hardcoded here so client chrome + hreflang work without importing the
  // fs-backed blog loader into client code.
  "/blog",
  "/blog/how-to-choose-the-right-cigarette-making-machine",
  "/blog/molins-mark-8-post-64-vs-mark-8d-max-15",
  "/blog/regular-wrapper-cp1-vs-naked-over-wrapper",
  "/blog/what-does-a-hollow-tube-maker-do",
];

export const translatedPaths: readonly string[] = [
  ...staticTranslatedPaths,
  ...translatedProductPaths,
];

/** Live locales a given English path is translated into (always includes en). */
export function localesForPath(path: string): LocaleCode[] {
  return translatedPaths.includes(path) ? liveLocaleCodes : [defaultLocale];
}

/**
 * Locale-safe href: prefixes the path with the locale folder ONLY if that path
 * has a translated counterpart; otherwise returns the English path. Prevents
 * localized chrome (nav, footer) from linking to pages that don't exist yet.
 */
export function localeHref(code: LocaleCode, path: string): string {
  return translatedPaths.includes(path) ? localePath(code, path) : path;
}

/** Strip a leading locale folder from a path, returning the canonical English path. */
export function stripLocale(path: string): { locale: LocaleCode; path: string } {
  const parts = path.split("/");
  const seg = parts[1];
  if (seg && isLocale(seg) && seg !== defaultLocale) {
    const rest = "/" + parts.slice(2).join("/");
    return { locale: seg, path: rest === "/" ? "/" : rest.replace(/\/$/, "") || "/" };
  }
  return { locale: defaultLocale, path: path === "/" ? "/" : path.replace(/\/$/, "") || "/" };
}

/**
 * hreflang alternates for a page. If the path has translated counterparts,
 * every live locale + x-default (English) is returned; otherwise just the
 * single English self-reference. `path` is the English/root-relative path
 * (e.g. "/cigarette-packing-machines"). Returns root-relative hrefs
 * (prefix the site URL where rendered).
 */
export function hreflangAlternates(
  path: string,
): { hreflang: string; path: string }[] {
  const codes = localesForPath(path);
  const alts = codes.map((code) => ({
    hreflang: locales[code].hreflang,
    path: localePath(code, path),
  }));
  if (codes.length > 1) {
    // x-default points at the English (root) version.
    alts.push({ hreflang: "x-default", path });
  }
  return alts;
}

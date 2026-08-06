/**
 * Internationalisation foundation.
 *
 * The English site stays at the domain root (the x-default). Each other
 * language lives under its own folder (/de/, /ar/, …). This registry is the
 * single source of truth for which locales exist, how they map to hreflang,
 * which are right-to-left, and how to build localized paths + hreflang
 * alternates. Adding a language = adding one entry here (plus its content).
 */

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

/** Locales that get a URL folder prefix (everyone except the default). */
export const prefixedLocales = localeCodes.filter((c) => c !== defaultLocale);

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
 * hreflang alternates for a page: every live locale + x-default (English).
 * `path` is the English/root-relative path (e.g. "/cigarette-packing-machines").
 * Returns absolute-path hrefs (prefix the site URL where rendered).
 */
export function hreflangAlternates(
  path: string,
): { hreflang: string; path: string }[] {
  const alts = localeCodes.map((code) => ({
    hreflang: locales[code].hreflang,
    path: localePath(code, path),
  }));
  // x-default points at the English (root) version.
  alts.push({ hreflang: "x-default", path });
  return alts;
}

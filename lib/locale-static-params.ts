import { prefixedLocales } from "./i18n";

/**
 * Static params for the /[locale] tree: one entry per live prefixed locale
 * (currently just "de"). Re-exported as `generateStaticParams` by every page
 * under app/[locale] so `output: export` pre-renders each language.
 */
export function generateLocaleParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

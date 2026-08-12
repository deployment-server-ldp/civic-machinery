import type { LocaleCode } from "./i18n";

/**
 * Countries/regions shown in the header country selector. Each maps to the
 * language it will be served in. When that language is live (see
 * `liveLocaleCodes`) the country links to the localized page; otherwise it
 * falls back to the English (x-default) site. Flip a language live and every
 * country mapped to it lights up automatically.
 */
export interface Country {
  /** ISO 3166-1 alpha-2 (also used for the flag). */
  code: string;
  name: string;
  /** Flag emoji (degrades to the country code on platforms without flags). */
  flag: string;
  /** Language this market is served in. */
  locale: LocaleCode;
}

export const countries: Country[] = [
  { code: "PK", name: "Pakistan", flag: "🇵🇰", locale: "en" },
  { code: "DE", name: "Germany", flag: "🇩🇪", locale: "de" },
  { code: "IT", name: "Italy", flag: "🇮🇹", locale: "it" },
  { code: "PL", name: "Poland", flag: "🇵🇱", locale: "pl" },
  { code: "RU", name: "Russia", flag: "🇷🇺", locale: "ru" },
  { code: "AE", name: "UAE", flag: "🇦🇪", locale: "ar" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", locale: "ar" },
  { code: "YE", name: "Yemen", flag: "🇾🇪", locale: "ar" },
  { code: "SY", name: "Syria", flag: "🇸🇾", locale: "ar" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", locale: "tr" },
  { code: "IR", name: "Iran", flag: "🇮🇷", locale: "fa" },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬", locale: "bg" },
  { code: "CN", name: "China", flag: "🇨🇳", locale: "zh" },
  { code: "IN", name: "India", flag: "🇮🇳", locale: "en" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", locale: "id" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", locale: "en" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", locale: "vi" },
  { code: "ZW", name: "Zimbabwe", flag: "🇿🇼", locale: "zw" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", locale: "za" },
  { code: "CA", name: "Canada", flag: "🇨🇦", locale: "en" },
  { code: "US", name: "USA", flag: "🇺🇸", locale: "en" },
];

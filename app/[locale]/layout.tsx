import { notFound } from "next/navigation";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { generateLocaleParams } from "@/lib/locale-static-params";

// Only the pre-listed live locales are valid; anything else 404s.
export const dynamicParams = false;
export const generateStaticParams = generateLocaleParams;

/**
 * Layout for the localized page tree. The shared root layout already renders
 * the (locale-aware) Header/Footer, so this only validates the locale segment
 * and passes children through.
 */
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale) || params.locale === defaultLocale) {
    notFound();
  }
  return <>{children}</>;
}

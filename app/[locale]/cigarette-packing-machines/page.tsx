import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import { getProductsByCategory } from "@/lib/products";
import { getDict } from "@/lib/dictionaries";
import { localeHref, type LocaleCode } from "@/lib/i18n";
import { generateLocaleParams } from "@/lib/locale-static-params";

const PATH = "/cigarette-packing-machines";

export const dynamicParams = false;
export const generateStaticParams = generateLocaleParams;

export function generateMetadata({
  params,
}: {
  params: { locale: LocaleCode };
}): Metadata {
  const c = getDict(params.locale).categories[PATH];
  return buildMetadata({
    title: c.title,
    description: c.description,
    path: PATH,
    locale: params.locale,
  });
}

export default function LocalePackingPage({
  params,
}: {
  params: { locale: LocaleCode };
}) {
  const locale = params.locale;
  const dict = getDict(locale);
  const c = dict.categories[PATH];

  return (
    <CategoryListing
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      crumbs={[
        { name: dict.breadcrumbHome, path: localeHref(locale, "/") },
        { name: dict.footer.labels[PATH], path: localeHref(locale, PATH) },
      ]}
      products={getProductsByCategory("packing-machines")}
      faqs={c.faqs}
      locale={locale}
    />
  );
}

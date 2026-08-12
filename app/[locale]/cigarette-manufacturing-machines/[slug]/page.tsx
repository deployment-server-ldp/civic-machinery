import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import ProductDetail from "@/components/ProductDetail";
import {
  getProduct,
  getProductsBySubcategory,
  productHref,
} from "@/lib/products";
import { getDict } from "@/lib/dictionaries";
import { localizedProduct, hasProductTranslation } from "@/lib/i18n-products";
import { localeHref, prefixedLocales, type LocaleCode } from "@/lib/i18n";

const SUB = "cigarette-making-machines";
const CAT_PATH = "/cigarette-manufacturing-machines";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) =>
    getProductsBySubcategory(SUB)
      .filter((p) => hasProductTranslation(locale, p.slug))
      .map((p) => ({ locale, slug: p.slug })),
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: LocaleCode; slug: string };
}): Metadata {
  const base = getProduct("manufacturing-machines", params.slug, SUB);
  if (!base) return {};
  const product = localizedProduct(params.locale, base);
  return buildMetadata({
    title: product.metaTitle ?? product.name,
    description: product.metaDescription,
    path: productHref(base),
    keywords: product.keywords,
    images: product.image ? [product.image] : undefined,
    locale: params.locale,
  });
}

export default function LocaleMakingProductPage({
  params,
}: {
  params: { locale: LocaleCode; slug: string };
}) {
  const locale = params.locale;
  const base = getProduct("manufacturing-machines", params.slug, SUB);
  if (!base) notFound();

  const product = localizedProduct(locale, base);
  const dict = getDict(locale);
  const related = getProductsBySubcategory(SUB)
    .filter((p) => p.slug !== base.slug)
    .map((p) => localizedProduct(locale, p));

  return (
    <ProductDetail
      product={product}
      locale={locale}
      categoryLabel={dict.footer.labels["/cigarette-making-machines"]}
      crumbs={[
        { name: dict.breadcrumbHome, path: localeHref(locale, "/") },
        { name: dict.footer.labels[CAT_PATH], path: localeHref(locale, CAT_PATH) },
        {
          name: product.h1 ?? product.name,
          path: localeHref(locale, productHref(base)),
        },
      ]}
      related={related}
    />
  );
}

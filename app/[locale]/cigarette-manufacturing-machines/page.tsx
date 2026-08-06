import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { getProductsBySubcategory, productHref } from "@/lib/products";
import { getDict } from "@/lib/dictionaries";
import { localeHref, type LocaleCode } from "@/lib/i18n";
import { generateLocaleParams } from "@/lib/locale-static-params";

const PATH = "/cigarette-manufacturing-machines";
const MAKING = "/cigarette-making-machines";

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

export default function LocaleManufacturingPage({
  params,
}: {
  params: { locale: LocaleCode };
}) {
  const locale = params.locale;
  const dict = getDict(locale);
  const c = dict.categories[PATH];
  const section = dict.manufacturingSection;
  const products = getProductsBySubcategory("cigarette-making-machines");

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro[0]}
        crumbs={[
          { name: dict.breadcrumbHome, path: localeHref(locale, "/") },
          { name: dict.footer.labels[PATH], path: localeHref(locale, PATH) },
        ]}
      />

      <section className="container mx-auto py-14">
        <div className="space-y-16">
          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-brand-100 pb-4">
              <div>
                <h2 className="text-2xl">
                  <Link
                    href={localeHref(locale, MAKING)}
                    className="text-brand-900 hover:text-accent-700"
                  >
                    {section.title}
                  </Link>
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-brand-600">{section.intro}</p>
              </div>
              <Link href={localeHref(locale, MAKING)} className="link-accent">
                {section.seeAll}
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={productHref(p)} product={p} locale={locale} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {c.faqs && c.faqs.length > 0 && (
        <section className="container mx-auto pb-14">
          <JsonLd data={faqSchema(c.faqs)} />
          <h2 className="text-center text-2xl sm:text-3xl">{dict.faqHeading}</h2>
          <div className="mt-8">
            <Faq items={c.faqs} />
          </div>
        </section>
      )}

      <CtaBand locale={locale} />
    </>
  );
}

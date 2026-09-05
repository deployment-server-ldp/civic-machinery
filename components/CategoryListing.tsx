import PageHero from "./PageHero";
import ProductCard from "./ProductCard";
import CtaBand from "./CtaBand";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import type { Crumb } from "./Breadcrumbs";
import { faqSchema } from "@/lib/schema";
import { type Product, type Faq as FaqType, productHref } from "@/lib/products";
import { getDict } from "@/lib/dictionaries";
import { defaultLocale, type LocaleCode } from "@/lib/i18n";

/**
 * Generic listing page: hero intro, a grid of machine cards and a CTA.
 * Used by the flat categories and the Manufacturing sub-categories.
 */
export default function CategoryListing({
  eyebrow,
  title,
  intro,
  crumbs,
  products,
  emptyNote,
  content,
  faqs,
  locale = defaultLocale,
}: {
  eyebrow?: string;
  title: string;
  intro: string[];
  crumbs: Crumb[];
  products: Product[];
  emptyNote?: string;
  /** Longer guide-style content, rendered above the FAQ section. English only for now. */
  content?: React.ReactNode;
  faqs?: FaqType[];
  locale?: LocaleCode;
}) {
  const dict = getDict(locale);
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro[0]}
        crumbs={crumbs}
      />

      <section className="container mx-auto py-14">
        {intro.length > 1 && (
          <div className="prose-content mb-10 max-w-3xl">
            {intro.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={productHref(p)} product={p} locale={locale} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-brand-100 bg-brand-50 p-6 text-brand-600">
            {emptyNote || dict.emptyNote}
          </p>
        )}
      </section>

      {content && (
        <section className="container mx-auto pb-14">{content}</section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="container mx-auto pb-14">
          <JsonLd data={faqSchema(faqs)} />
          <h2 className="text-center text-2xl sm:text-3xl">{dict.faqHeading}</h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </section>
      )}

      <CtaBand locale={locale} />
    </>
  );
}

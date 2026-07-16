import PageHero from "./PageHero";
import ProductCard from "./ProductCard";
import CtaBand from "./CtaBand";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import type { Crumb } from "./Breadcrumbs";
import { faqSchema } from "@/lib/schema";
import { type Product, type Faq as FaqType, productHref } from "@/lib/products";

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
  faqs,
}: {
  eyebrow?: string;
  title: string;
  intro: string[];
  crumbs: Crumb[];
  products: Product[];
  emptyNote?: string;
  faqs?: FaqType[];
}) {
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
              <ProductCard key={productHref(p)} product={p} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-brand-100 bg-brand-50 p-6 text-brand-600">
            {emptyNote || "Machines in this range are added regularly. Contact us for current stock."}
          </p>
        )}
      </section>

      {faqs && faqs.length > 0 && (
        <section className="container mx-auto pb-14">
          <JsonLd data={faqSchema(faqs)} />
          <h2 className="text-center text-2xl sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}

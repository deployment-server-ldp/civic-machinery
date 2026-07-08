import PageHero from "./PageHero";
import ProductCard from "./ProductCard";
import CtaBand from "./CtaBand";
import type { Crumb } from "./Breadcrumbs";
import { type Product, productHref } from "@/lib/products";

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
}: {
  eyebrow?: string;
  title: string;
  intro: string[];
  crumbs: Crumb[];
  products: Product[];
  emptyNote?: string;
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

      <CtaBand />
    </>
  );
}

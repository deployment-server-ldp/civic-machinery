import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";
import {
  getCategory,
  getSubcategoriesFor,
  getProductsBySubcategory,
  subcategoryHref,
  productHref,
} from "@/lib/products";

const category = getCategory("manufacturing-machines")!;

export const metadata: Metadata = buildMetadata({
  title: category.title,
  description: category.description,
  path: "/manufacturing-machines",
  keywords: category.keywords,
});

export default function ManufacturingMachinesPage() {
  const subs = getSubcategoriesFor("manufacturing-machines");

  return (
    <>
      <PageHero
        eyebrow="Manufacturing Machines"
        title={category.title}
        intro={category.intro[0]}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Manufacturing Machines", path: "/manufacturing-machines" },
        ]}
      />

      <section className="container mx-auto py-14">
        <div className="prose-content mb-6 max-w-3xl">
          {category.intro.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Quick jump to sub-categories */}
        <div className="mb-14 grid gap-4 sm:grid-cols-3">
          {subs.map((s) => (
            <Link
              key={s.slug}
              href={subcategoryHref(s)}
              className="group rounded-2xl border border-brand-100 bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <h2 className="text-lg text-brand-900 group-hover:text-accent-700">
                {s.navLabel}
              </h2>
              <p className="mt-2 text-sm text-brand-600">{s.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent-700">
                View range →
              </span>
            </Link>
          ))}
        </div>

        {/* Each sub-category with its machines */}
        <div className="space-y-16">
          {subs.map((s) => {
            const products = getProductsBySubcategory(s.slug);
            return (
              <div key={s.slug}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-brand-100 pb-4">
                  <div>
                    <h2 className="text-2xl">
                      <Link
                        href={subcategoryHref(s)}
                        className="text-brand-900 hover:text-accent-700"
                      >
                        {s.title}
                      </Link>
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-brand-600">
                      {s.intro[0]}
                    </p>
                  </div>
                  <Link href={subcategoryHref(s)} className="link-accent">
                    See all →
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((p) => (
                    <ProductCard key={productHref(p)} product={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

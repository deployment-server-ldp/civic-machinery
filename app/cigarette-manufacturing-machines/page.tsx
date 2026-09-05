import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import CigaretteMakingMachinesContent from "@/components/content/CigaretteMakingMachinesContent";
import { faqSchema } from "@/lib/schema";
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
  path: "/cigarette-manufacturing-machines",
  keywords: category.keywords,
});

export default function ManufacturingMachinesPage() {
  // This page focuses on the cigarette making machines range only.
  const subs = getSubcategoriesFor("manufacturing-machines").filter(
    (s) => s.slug === "cigarette-making-machines"
  );

  return (
    <>
      <PageHero
        eyebrow="Manufacturing Machines"
        title={category.title}
        intro={category.intro[0]}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Manufacturing Machines", path: "/cigarette-manufacturing-machines" },
        ]}
      />

      <section className="container mx-auto py-14">
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

      <section className="container mx-auto pb-14">
        <div className="prose-content max-w-3xl">
          <CigaretteMakingMachinesContent />
        </div>
      </section>

      {category.faqs && category.faqs.length > 0 && (
        <section className="container mx-auto pb-14">
          <JsonLd data={faqSchema(category.faqs)} />
          <h2 className="text-center text-2xl sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <Faq items={category.faqs} />
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}

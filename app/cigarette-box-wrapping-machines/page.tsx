import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import CigaretteWrappingMachinesContent from "@/components/content/CigaretteWrappingMachinesContent";
import { getCategory, getProductsByCategory, categoryHref } from "@/lib/products";

const category = getCategory("wrapping-machines")!;

export const metadata: Metadata = buildMetadata({
  title: category.title,
  description: category.description,
  path: categoryHref(category),
  keywords: category.keywords,
});

export default function WrappingMachinesPage() {
  return (
    <CategoryListing
      eyebrow="Wrapping Machines"
      title={category.title}
      intro={category.intro}
      crumbs={[
        { name: "Home", path: "/" },
        { name: category.navLabel, path: categoryHref(category) },
      ]}
      products={getProductsByCategory("wrapping-machines")}
      content={<CigaretteWrappingMachinesContent />}
      faqs={category.faqs}
    />
  );
}

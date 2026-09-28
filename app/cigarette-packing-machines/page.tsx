import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import CigarettePackingMachinesContent from "@/components/content/CigarettePackingMachinesContent";
import { getCategory, getProductsByCategory, categoryHref } from "@/lib/products";

const category = getCategory("packing-machines")!;

export const metadata: Metadata = buildMetadata({
  title: category.title,
  description: category.description,
  path: categoryHref(category),
  keywords: category.keywords,
});

export default function PackingMachinesPage() {
  return (
    <CategoryListing
      eyebrow="Packing Machines"
      title={category.title}
      intro={category.intro}
      crumbs={[
        { name: "Home", path: "/" },
        { name: category.navLabel, path: categoryHref(category) },
      ]}
      products={getProductsByCategory("packing-machines")}
      content={<CigarettePackingMachinesContent />}
      faqs={category.faqs}
    />
  );
}

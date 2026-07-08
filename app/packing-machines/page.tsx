import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import { getCategory, getProductsByCategory } from "@/lib/products";

const category = getCategory("packing-machines")!;

export const metadata: Metadata = buildMetadata({
  title: category.title,
  description: category.description,
  path: "/packing-machines",
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
        { name: "Packing Machines", path: "/packing-machines" },
      ]}
      products={getProductsByCategory("packing-machines")}
    />
  );
}

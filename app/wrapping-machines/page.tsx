import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import { getCategory, getProductsByCategory } from "@/lib/products";

const category = getCategory("wrapping-machines")!;

export const metadata: Metadata = buildMetadata({
  title: category.title,
  description: category.description,
  path: "/wrapping-machines",
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
        { name: "Wrapping Machines", path: "/wrapping-machines" },
      ]}
      products={getProductsByCategory("wrapping-machines")}
    />
  );
}

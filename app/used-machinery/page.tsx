import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import { getCategory, getProductsByCategory } from "@/lib/products";

const category = getCategory("used-machinery")!;

export const metadata: Metadata = buildMetadata({
  title: category.title,
  description: category.description,
  path: "/used-machinery",
  keywords: category.keywords,
});

export default function UsedMachineryPage() {
  return (
    <CategoryListing
      eyebrow="Used Machinery"
      title={category.title}
      intro={category.intro}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Used Machinery", path: "/used-machinery" },
      ]}
      products={getProductsByCategory("used-machinery")}
    />
  );
}

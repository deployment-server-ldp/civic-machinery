import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import {
  getCategory,
  getSubcategory,
  getProductsBySubcategory,
  categoryHref,
  subcategoryHref,
} from "@/lib/products";

const SUB = "tobacco-machinery";
const sub = getSubcategory(SUB)!;
const parent = getCategory("manufacturing-machines")!;

export const metadata: Metadata = buildMetadata({
  title: sub.title,
  description: sub.description,
  path: subcategoryHref(sub),
  keywords: sub.keywords,
});

export default function TobaccoMachineryPage() {
  return (
    <CategoryListing
      eyebrow="Manufacturing Machines"
      title={sub.h1 ?? sub.title}
      intro={sub.intro}
      crumbs={[
        { name: "Home", path: "/" },
        { name: parent.navLabel, path: categoryHref(parent) },
        { name: sub.navLabel, path: subcategoryHref(sub) },
      ]}
      products={getProductsBySubcategory(SUB)}
      faqs={sub.faqs}
    />
  );
}

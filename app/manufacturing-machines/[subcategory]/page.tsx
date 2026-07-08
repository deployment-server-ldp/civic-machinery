import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import CategoryListing from "@/components/CategoryListing";
import {
  getSubcategoriesFor,
  getSubcategory,
  getProductsBySubcategory,
} from "@/lib/products";

export function generateStaticParams() {
  return getSubcategoriesFor("manufacturing-machines").map((s) => ({
    subcategory: s.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { subcategory: string };
}): Metadata {
  const sub = getSubcategory(params.subcategory);
  if (!sub || sub.category !== "manufacturing-machines") return {};
  return buildMetadata({
    title: sub.title,
    description: sub.description,
    path: `/manufacturing-machines/${sub.slug}`,
    keywords: sub.keywords,
  });
}

export default function SubcategoryPage({
  params,
}: {
  params: { subcategory: string };
}) {
  const sub = getSubcategory(params.subcategory);
  if (!sub || sub.category !== "manufacturing-machines") notFound();

  return (
    <CategoryListing
      eyebrow="Manufacturing Machines"
      title={sub.title}
      intro={sub.intro}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Manufacturing Machines", path: "/manufacturing-machines" },
        { name: sub.navLabel, path: `/manufacturing-machines/${sub.slug}` },
      ]}
      products={getProductsBySubcategory(sub.slug)}
    />
  );
}

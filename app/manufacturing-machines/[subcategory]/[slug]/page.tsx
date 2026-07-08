import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import ProductDetail from "@/components/ProductDetail";
import {
  getSubcategory,
  getProduct,
  getProductsBySubcategory,
  products,
} from "@/lib/products";

export function generateStaticParams() {
  return products
    .filter((p) => p.category === "manufacturing-machines" && p.subcategory)
    .map((p) => ({ subcategory: p.subcategory!, slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { subcategory: string; slug: string };
}): Metadata {
  const product = getProduct(
    "manufacturing-machines",
    params.slug,
    params.subcategory
  );
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.metaDescription,
    path: `/manufacturing-machines/${params.subcategory}/${product.slug}`,
    keywords: product.keywords,
  });
}

export default function ManufacturingProductPage({
  params,
}: {
  params: { subcategory: string; slug: string };
}) {
  const sub = getSubcategory(params.subcategory);
  const product = getProduct(
    "manufacturing-machines",
    params.slug,
    params.subcategory
  );
  if (!sub || !product) notFound();

  const related = getProductsBySubcategory(sub.slug).filter(
    (p) => p.slug !== product.slug
  );

  return (
    <ProductDetail
      product={product}
      categoryLabel={sub.navLabel}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Manufacturing Machines", path: "/manufacturing-machines" },
        { name: sub.navLabel, path: `/manufacturing-machines/${sub.slug}` },
        {
          name: product.name,
          path: `/manufacturing-machines/${sub.slug}/${product.slug}`,
        },
      ]}
      related={related}
    />
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import ProductDetail from "@/components/ProductDetail";
import {
  getCategory,
  getProduct,
  getProductsByCategory,
} from "@/lib/products";

const CATEGORY = "packing-machines" as const;
const category = getCategory(CATEGORY)!;

export function generateStaticParams() {
  return getProductsByCategory(CATEGORY).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(CATEGORY, params.slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.metaDescription,
    path: `/${CATEGORY}/${product.slug}`,
    keywords: product.keywords,
  });
}

export default function PackingMachinePage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(CATEGORY, params.slug);
  if (!product) notFound();

  const related = getProductsByCategory(CATEGORY).filter(
    (p) => p.slug !== product.slug
  );

  return (
    <ProductDetail
      product={product}
      categoryLabel={category.navLabel}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Packing Machines", path: "/packing-machines" },
        { name: product.name, path: `/${CATEGORY}/${product.slug}` },
      ]}
      related={related}
    />
  );
}

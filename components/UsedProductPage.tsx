import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import ProductDetail from "@/components/ProductDetail";
import {
  getCategory,
  getProduct,
  getProductsByCategory,
  productHref,
  productCrumbs,
} from "@/lib/products";

const CATEGORY = "used-machinery" as const;

/** Metadata for a flattened used-machinery product page (root-level URL). */
export function buildUsedMetadata(slug: string): Metadata {
  const product = getProduct(CATEGORY, slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.metaDescription,
    path: productHref(product),
    keywords: product.keywords,
  });
}

export default function UsedProductPage({ slug }: { slug: string }) {
  const product = getProduct(CATEGORY, slug);
  if (!product) notFound();

  const category = getCategory(CATEGORY)!;
  const related = getProductsByCategory(CATEGORY).filter(
    (p) => p.slug !== product.slug
  );

  return (
    <ProductDetail
      product={product}
      categoryLabel={category.navLabel}
      crumbs={productCrumbs(product)}
      related={related}
    />
  );
}

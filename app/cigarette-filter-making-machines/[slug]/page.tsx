import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import ProductDetail from "@/components/ProductDetail";
import {
  getSubcategory,
  getProduct,
  getProductsBySubcategory,
  productHref,
  productCrumbs,
} from "@/lib/products";

const SUB = "cigarette-filter-making-machines";
const sub = getSubcategory(SUB)!;

export function generateStaticParams() {
  return getProductsBySubcategory(SUB).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct("manufacturing-machines", params.slug, SUB);
  if (!product) return {};
  return buildMetadata({
    title: product.metaTitle ?? product.name,
    description: product.metaDescription,
    path: productHref(product),
    keywords: product.keywords,
    images: product.image ? [product.image] : undefined,
  });
}

export default function FilterMachineProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct("manufacturing-machines", params.slug, SUB);
  if (!product) notFound();

  const related = getProductsBySubcategory(SUB).filter(
    (p) => p.slug !== product.slug
  );

  return (
    <ProductDetail
      product={product}
      categoryLabel={sub.navLabel}
      crumbs={productCrumbs(product)}
      related={related}
    />
  );
}

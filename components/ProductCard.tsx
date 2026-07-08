import Link from "next/link";
import MachineImage from "./MachineImage";
import { type Product, productHref } from "@/lib/products";

export default function ProductCard({
  product,
  imageSrc,
}: {
  product: Product;
  imageSrc?: string;
}) {
  const href = productHref(product);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <MachineImage
        src={imageSrc}
        alt={product.name}
        label={product.name}
        aspect="aspect-[16/10]"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
            {product.condition}
          </span>
          {product.brand && (
            <span className="text-xs font-medium text-brand-400">
              {product.brand}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold">
          {/* Stretched link makes the whole card clickable and accessible. */}
          <Link
            href={href}
            className="text-brand-900 transition-colors after:absolute after:inset-0 group-hover:text-accent-700"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-600">
          {product.tagline}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
          View details
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10h11M11 5l5 5-5 5" />
          </svg>
        </span>
      </div>
    </article>
  );
}

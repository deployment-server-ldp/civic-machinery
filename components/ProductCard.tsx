import Link from "next/link";
import MachineImage from "./MachineImage";
import { type Product, productHref } from "@/lib/products";
import { getDict } from "@/lib/dictionaries";
import { defaultLocale, localeHref, type LocaleCode } from "@/lib/i18n";

export default function ProductCard({
  product,
  imageSrc,
  locale = defaultLocale,
}: {
  product: Product;
  imageSrc?: string;
  locale?: LocaleCode;
}) {
  const href = localeHref(locale, productHref(product));
  const dict = getDict(locale);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <MachineImage
        src={imageSrc ?? product.image}
        alt={product.name}
        label={product.name}
        aspect="aspect-[655/330]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 655px"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">
          {/* Stretched link makes the whole card clickable and accessible. */}
          <Link
            href={href}
            className="text-brand-900 transition-colors after:absolute after:inset-0 group-hover:text-accent-700"
          >
            {product.name}
          </Link>
        </h3>

        {/* Features: prefer the spec-style table, fall back to bullets, then tagline. */}
        {product.featureTable && product.featureTable.length > 0 ? (
          <dl className="mt-3 flex-1 space-y-2">
            {product.featureTable.map((f) => (
              <div key={f.label}>
                <dt className="text-xs font-semibold text-brand-800">{f.label}</dt>
                <dd className="text-xs leading-snug text-brand-600">{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : product.features && product.features.length > 0 ? (
          <ul className="mt-3 flex-1 space-y-1.5">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2 text-xs text-brand-600">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 6 8 15l-4-4" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-600">
            {product.tagline}
          </p>
        )}

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
          {dict.productCard.viewDetails}
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10h11M11 5l5 5-5 5" />
          </svg>
        </span>
      </div>
    </article>
  );
}

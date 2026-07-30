import PageHero from "./PageHero";
import MachineImage from "./MachineImage";
import ProductImageZoom from "./ProductImageZoom";
import WhatsAppIcon from "./WhatsAppIcon";
import ProductCard from "./ProductCard";
import ContactForm from "./ContactForm";
import type { Crumb } from "./Breadcrumbs";
import { whatsappLink, siteConfig } from "@/lib/site";
import { type Product, productHref } from "@/lib/products";

export default function ProductDetail({
  product,
  crumbs,
  related,
  categoryLabel,
}: {
  product: Product;
  crumbs: Crumb[];
  related: Product[];
  categoryLabel: string;
}) {
  const wa = whatsappLink(
    `Hello, I am interested in the ${product.name}. Please share price and availability.`
  );

  return (
    <>
      <PageHero
        eyebrow={categoryLabel}
        title={product.h1 ?? product.name}
        intro={product.tagline}
        crumbs={crumbs}
      />

      <section className="container mx-auto py-14">
        {/* Row 1: image (left) + key features (right) */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Image */}
          <div>
            {product.image ? (
              <ProductImageZoom
                src={product.image}
                alt={product.name}
                aspect="aspect-[655/330]"
              />
            ) : (
              <>
                <MachineImage
                  src={product.image}
                  alt={product.name}
                  label={product.name}
                  aspect="aspect-[655/330]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Placeholder thumbnails only until a real photo is added. */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Front view", "Detail", "In operation"].map((v) => (
                    <MachineImage
                      key={v}
                      alt={`${product.name}, ${v}`}
                      label={v}
                      aspect="aspect-square"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Key features */}
          <div>
            <h2 className="text-xl">Key features</h2>

            {product.featureTable ? (
              /* Feature table replaces both the bullet list and the specs table. */
              <div className="mt-4 overflow-hidden rounded-xl border border-brand-100">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-brand-100">
                    {product.featureTable.map((s, i) => (
                      <tr key={s.label} className={i % 2 ? "bg-white" : "bg-brand-50"}>
                        <th
                          scope="row"
                          className="w-2/5 px-4 py-3 text-left font-medium text-brand-600"
                        >
                          {s.label}
                        </th>
                        <td className="px-4 py-3 text-brand-900">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : product.features.length > 0 ? (
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-brand-700">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 6 8 15l-4-4" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-brand-600">{product.tagline}</p>
            )}

            {/* Specifications only shown for machines without a feature table. */}
            {!product.featureTable && product.specs.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg">Specifications</h3>
                <div className="mt-4 overflow-hidden rounded-xl border border-brand-100">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-brand-100">
                      {product.specs.map((s, i) => (
                        <tr key={s.label} className={i % 2 ? "bg-white" : "bg-brand-50"}>
                          <th
                            scope="row"
                            className="w-2/5 px-4 py-3 text-left font-medium text-brand-600"
                          >
                            {s.label}
                          </th>
                          <td className="px-4 py-3 text-brand-900">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg">Best suited for</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span
                      key={a}
                      className="rounded-lg border border-brand-100 bg-brand-50 px-3 py-1.5 text-sm text-brand-700"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:brightness-105 sm:flex-1"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-secondary sm:flex-1"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: full-width description */}
        <div className="mt-14 border-t border-brand-100 pt-10">
          <h2 className="text-2xl">Description</h2>
          <div className="prose-content mt-4 max-w-3xl">
            {product.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-brand-50 py-14">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Interested in this machine?</p>
            <h2 className="mt-2 text-3xl">Ask About the {shortName(product.name)}</h2>
            <p className="mt-4 text-brand-600">
              Send us a quick message for price, current availability and
              condition. We will also let you know about matching machines to
              complete your line.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card sm:p-8">
            <ContactForm machine={product.name} />
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container mx-auto py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl">Related machines</h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((p) => (
              <ProductCard key={productHref(p)} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function shortName(name: string) {
  return name
    .replace("Cigarette ", "")
    .replace(" Cigarette Packing Machine", "")
    .replace(", Box Packing Machine", "");
}

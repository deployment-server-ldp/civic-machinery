"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MachineImage from "@/components/MachineImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, siteConfig } from "@/lib/site";
import type { Product } from "@/lib/products";

export interface MachineShowcaseSection {
  key: string;
  title: string;
  products: Product[];
}

/**
 * The five "Our Machines" sections on a country page: image + name cards
 * only, each opening a shared modal with the machine's specifications.
 * Clicking a card never navigates — this is the strict requirement behind
 * the export country pages (no machine detail page, no route change).
 */
export default function CountryMachinesShowcase({
  sections,
}: {
  sections: MachineShowcaseSection[];
}) {
  const [selected, setSelected] = useState<Product | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openModal = (product: Product, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelected(product);
  };

  const closeModal = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  return (
    <>
      {sections.map((section) => (
        <section key={section.key} className="border-t border-brand-100 py-12 first:border-t-0 first:pt-0">
          <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {section.products.map((product) => (
              <button
                key={product.slug}
                type="button"
                onClick={(e) => openModal(product, e.currentTarget)}
                className="group flex flex-col overflow-hidden rounded-xl border border-brand-100 bg-white text-left shadow-card transition-shadow hover:shadow-card-hover"
              >
                <MachineImage
                  src={product.image}
                  alt={product.name}
                  label={product.name}
                  aspect="aspect-[4/3]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="rounded-none"
                />
                <span className="px-3 py-3 text-sm font-semibold text-brand-900 group-hover:text-accent-700">
                  {product.name}
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}

      <MachineModal product={selected} onClose={closeModal} />
    </>
  );
}

function MachineModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // ESC to close.
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        // Simple focus trap within the dialog.
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  // Lock body scroll while open, and move focus into the dialog.
  useEffect(() => {
    if (!product) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [product]);

  if (!product) return null;

  const specRows = product.featureTable ?? product.specs;
  const wa = whatsappLink(
    `Hi, I'm interested in the ${product.name}. Could you share more details, pricing and availability?`,
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="machine-modal-title"
        tabIndex={-1}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 shrink-0 rounded-full bg-white/90 p-1.5 text-brand-500 shadow-sm backdrop-blur hover:bg-white hover:text-brand-900 sm:right-4 sm:top-4"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 5l10 10M15 5 5 15" />
          </svg>
        </button>

        <div className="grid gap-0 sm:grid-cols-2">
          <div className="relative border-b border-brand-100 bg-brand-50 sm:border-b-0 sm:border-r">
            <MachineImage
              src={product.image}
              alt={product.name}
              label={product.name}
              aspect="aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[320px]"
              fit="contain"
              className="rounded-none bg-brand-50 p-4"
            />
          </div>
          <div className="flex flex-col p-5 sm:p-6">
            <h3 id="machine-modal-title" className="pr-8 text-xl font-semibold text-brand-900 sm:text-2xl">
              {product.name}
            </h3>

            {specRows.length > 0 && (
              <dl className="mt-4 divide-y divide-brand-100 border-t border-brand-100 text-sm">
                {specRows.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
                    <dt className="font-medium text-brand-500">{s.label}</dt>
                    <dd className="text-brand-900 sm:text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-6 flex flex-col gap-2.5 border-t border-brand-100 pt-5">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-[#25D366] text-white hover:brightness-105"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary w-full">
                <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 3.5h2.7l1.1 3.3-1.6 1.2a9.2 9.2 0 0 0 4.3 4.3l1.2-1.6 3.3 1.1v2.7c0 .8-.7 1.4-1.5 1.3A13 13 0 0 1 3.2 5c-.1-.8.5-1.5 1.3-1.5Z" />
                </svg>
                Call: {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-primary w-full">
                Contact Us for This Machine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

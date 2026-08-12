import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappLink } from "@/lib/site";
import {
  categoryPaths,
  subcategoryPaths,
  getProduct,
  getProductsByCategory,
  getProductsBySubcategory,
  productHref,
  type Product,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import MachineCarousel, {
  type CarouselGroup,
} from "@/components/MachineCarousel";
import { localizedProduct } from "@/lib/i18n-products";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { getDict } from "@/lib/dictionaries";
import { localeHref, type LocaleCode } from "@/lib/i18n";
import { generateLocaleParams } from "@/lib/locale-static-params";

export const dynamicParams = false;
export const generateStaticParams = generateLocaleParams;

export function generateMetadata({
  params,
}: {
  params: { locale: LocaleCode };
}): Metadata {
  const dict = getDict(params.locale);
  return buildMetadata({
    title: dict.home.metaTitle,
    description: dict.home.metaDescription,
    path: "/",
    locale: params.locale,
  });
}

const galleryImages = [
  { src: "/images/gallery/gallery-1.webp", alt: "Civic Tobacco Machinery team at an international tobacco exhibition" },
  { src: "/images/gallery/gallery-2.webp", alt: "Meeting a customer at a tobacco machinery expo" },
  { src: "/images/gallery/gallery-3.webp", alt: "Welcoming a visitor to the Civic Tobacco Machinery stand" },
  { src: "/images/gallery/gallery-4.webp", alt: "Discussing tobacco machinery with an international partner" },
  { src: "/images/gallery/gallery-5.webp", alt: "Civic Tobacco Machinery meeting industry customers" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Civic Tobacco Machinery presenting to visitors at a tobacco expo" },
];

const reasonIcons = ["gear", "check", "layers", "pin"];

export default function LocaleHomePage({
  params,
}: {
  params: { locale: LocaleCode };
}) {
  const locale = params.locale;
  const dict = getDict(locale);
  const h = dict.home;

  const featured = [
    getProduct("manufacturing-machines", "mark-8-post-64", "cigarette-making-machines"),
    getProduct("manufacturing-machines", "mark-8d-max-15", "cigarette-making-machines"),
    getProduct("packing-machines", "hlp-200"),
    getProduct("packing-machines", "hlp-225"),
  ]
    .filter(Boolean)
    .map((p) => localizedProduct(locale, p as Product));

  const toItems = (list: Product[]) =>
    list.map((p) => {
      const lp = localizedProduct(locale, p);
      return {
        name: lp.name,
        href: localeHref(locale, productHref(p)),
        tagline: lp.tagline,
        image: lp.image,
      };
    });

  const carouselGroups: CarouselGroup[] = [
    {
      label: h.ranges.making,
      href: localeHref(locale, subcategoryPaths["cigarette-making-machines"]),
      items: toItems(getProductsBySubcategory("cigarette-making-machines")),
    },
    {
      label: h.ranges.packing,
      href: localeHref(locale, categoryPaths["packing-machines"]),
      items: toItems(getProductsByCategory("packing-machines")),
    },
    {
      label: h.ranges.filter,
      href: localeHref(locale, subcategoryPaths["cigarette-filter-making-machines"]),
      items: toItems(getProductsBySubcategory("cigarette-filter-making-machines")),
    },
    {
      label: h.ranges.wrapping,
      href: localeHref(locale, categoryPaths["wrapping-machines"]),
      items: toItems(getProductsByCategory("wrapping-machines")),
    },
  ];

  const browseTypes = [
    { label: h.browse.packing, href: localeHref(locale, categoryPaths["packing-machines"]) },
    { label: h.browse.wrapping, href: localeHref(locale, categoryPaths["wrapping-machines"]) },
    { label: h.browse.making, href: localeHref(locale, categoryPaths["manufacturing-machines"]) },
    { label: h.browse.used, href: localeHref(locale, categoryPaths["manufacturing-machines"]) },
  ];

  return (
    <>
      <JsonLd data={faqSchema(h.faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <video
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/mark-8-post-64.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-950/60"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-brand-950/25" />
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
        />
        <div className="container relative z-10 mx-auto grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              {h.hero.h1}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-200">
              {h.hero.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={localeHref(locale, "/contact")} className="btn-primary">
                {h.hero.getQuote}
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                {h.hero.whatsapp} {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-300">
              {h.browseHeading}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {browseTypes.map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="group rounded-xl border border-white/10 bg-brand-900/40 p-4 transition-colors hover:border-accent-500/50 hover:bg-brand-900"
                >
                  <span className="block text-sm font-semibold text-white group-hover:text-accent-300">
                    {t.label}
                  </span>
                  <span className="mt-1 block text-xs text-brand-400">
                    {h.viewRange}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-accent-50 px-6 py-12 shadow-card sm:px-10 lg:px-14 lg:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-accent-500 to-accent-700"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="eyebrow">{h.about.eyebrow}</p>
                <h2 className="mt-2 text-3xl sm:text-4xl">{h.about.h2}</h2>
                <p className="mt-5 text-lg font-medium leading-relaxed text-brand-800">
                  {h.about.lead}
                </p>
                <p className="mt-4 leading-relaxed text-brand-600">{h.about.p1}</p>
                <p className="mt-4 leading-relaxed text-brand-600">{h.about.p2}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {h.about.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-brand-700">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={localeHref(locale, "/about")} className="btn-primary mt-8">
                  {h.about.more}
                </Link>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/legacy.webp"
                    alt="The family team behind Civic Tobacco Machinery"
                    width={1402}
                    height={992}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured machines */}
      <section className="bg-brand-50 py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{h.featured.eyebrow}</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">{h.featured.h2}</h2>
            </div>
            <Link href={localeHref(locale, "/cigarette-manufacturing-machines")} className="link-accent">
              {h.featured.viewAll}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((p) => (
              <ProductCard key={productHref(p)} product={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container mx-auto py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{h.why.eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">{h.why.h2}</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.why.reasons.map((r, i) => (
            <div
              key={r.title}
              className="rounded-2xl border border-brand-100 bg-white p-6"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent-50 text-accent-700">
                <ReasonIcon name={reasonIcons[i]} />
              </span>
              <h3 className="text-lg">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-600">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Machine ranges carousel */}
      <MachineCarousel groups={carouselGroups} locale={locale} />

      {/* Gallery */}
      <Gallery images={galleryImages} locale={locale} />

      {/* Local SEO block */}
      <section className="bg-brand-950 py-16 text-white">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-accent-300">{h.local.eyebrow}</p>
            <h2 className="mt-2 text-3xl text-white sm:text-4xl">{h.local.h2}</h2>
            <p className="mt-4 text-brand-200">{h.local.text}</p>
            <ul className="mt-6 space-y-3 text-brand-200">
              {h.local.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <Dot /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white">{h.local.visitHeading}</h3>
            <address className="mt-4 space-y-3 not-italic text-brand-200">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                {siteConfig.address.postalCode}
              </p>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-accent-300">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            </address>
            <Link href={localeHref(locale, "/contact")} className="btn-primary mt-6">
              {h.local.directions}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">{h.faqHeading.eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">{h.faqHeading.h2}</h2>
        </div>
        <Faq items={h.faqs} />
      </section>

      <CtaBand locale={locale} />
    </>
  );
}

function ReasonIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "check":
      return (
        <svg {...common}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      );
  }
}

function Dot() {
  return (
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
  );
}

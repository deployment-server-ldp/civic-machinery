import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappLink } from "@/lib/site";
import {
  categoryPaths,
  getProduct,
  productHref,
  type Product,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Civic Tobacco Machinery | Cigarette Machinery Pakistan",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "Cigarette Manufacturing Machines in Pakistan",
    "Cigarette Packing Machines in Pakistan",
    "Cigarette Wrapping Machines Pakistan",
    "Used Cigarette Machines Pakistan",
    "Tobacco Machinery in Pakistan",
    "Tobacco Manufacturing Machines in Pakistan",
    "Tobacco Packing Machines in Pakistan",
  ],
});

const homeFaqs = [
  {
    question: "Do you sell both new and used cigarette machines in Pakistan?",
    answer:
      "Yes. We supply new machines as well as carefully reconditioned used cigarette and tobacco machinery. Every used machine is inspected, serviced and tested before we sell it, and it comes with an honest condition report so you know exactly what you are buying.",
  },
  {
    question: "Which brands of cigarette manufacturing machines do you deal in?",
    answer:
      "We work mainly with well-supported brands like Molins for making and filter machines, and HLP and SASIB for packing and wrapping. These are chosen because parts and trained technicians are easy to find, which keeps your line running for years.",
  },
  {
    question: "Do you install the machines and provide spare parts?",
    answer:
      "We do. We help with installation and setting the machine correctly on your floor, and we support you afterwards with spare parts and service. Getting a maker or packer running is not a plug-and-play job, so we stay involved until it runs the way it should.",
  },
  {
    question: "Where are you located and do you deliver across Pakistan?",
    answer:
      "Our workshop is in the SITE industrial estate in Karachi. We serve customers across Pakistan, and we can arrange delivery and installation wherever your factory is.",
  },
];

// "Browse by machine type" quick links in the hero (Used points to the
// manufacturing range since our stock is largely reconditioned).
const browseTypes = [
  { label: "Cigarette Packing Machines", href: categoryPaths["packing-machines"] },
  { label: "Cigarette Wrapping Machines", href: categoryPaths["wrapping-machines"] },
  { label: "Cigarette Manufacturing Machines", href: categoryPaths["manufacturing-machines"] },
  { label: "Used Cigarette Machinery", href: categoryPaths["manufacturing-machines"] },
];

const reasons = [
  {
    title: "Machines that keep running",
    text: "We stick to well-proven brands with easy parts availability, so your line stays productive shift after shift.",
    icon: "gear",
  },
  {
    title: "Honest condition reports",
    text: "Every used machine is inspected, serviced and tested. You get a straight account of its condition, no surprises.",
    icon: "check",
  },
  {
    title: "Full line support",
    text: "From maker to packer, we help you match machines so nothing becomes a bottleneck, and we install and support them.",
    icon: "layers",
  },
  {
    title: "Local, on-the-ground help",
    text: "We are based right here in Pakistan. When you need parts or a technician, help is close by, not overseas.",
    icon: "pin",
  },
];

export default function HomePage() {
  // A small, hand-picked set of featured machines across the range.
  const featured = [
    getProduct("manufacturing-machines", "mark-8-post-64", "cigarette-making-machines"),
    getProduct("manufacturing-machines", "mark-8d-max-15", "cigarette-making-machines"),
    getProduct("packing-machines", "hlp-200"),
    getProduct("packing-machines", "hlp-225"),
  ].filter(Boolean) as Product[];

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        {/* Background video, Mark 8 Post 64 cigarette manufacturing machine.
            Drop the file at public/videos/mark-8-post-64.mp4 (optionally .webm).
            Until then the dark gradient below shows as a graceful fallback. */}
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

        {/* Readability overlay so the copy stays legible over any footage. */}
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
              Looking for Cigarette &amp; Tobacco Machinery in Pakistan?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-200">
              You’re in the right place. From the first rod to the finished
              carton, Civic Tobacco Machinery sets you up with new and
              reconditioned making, filter, packing and wrapping lines, installed,
              tuned and backed by the spare parts and service you can count on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                WhatsApp {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Category quick links panel */}
          <div className="animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-300">
              Browse by machine type
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
                    View range →
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
            {/* Soft brand glow, keeps the panel distinct from the white page */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-accent-500 to-accent-700"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Generations of Engineering Excellence in Tobacco Machinery
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-brand-800">
              A proud father and son business, now into its third generation,
              with more than 35 years of hands-on experience in the tobacco
              industry.
            </p>
            <p className="mt-4 leading-relaxed text-brand-600">
              For decades our family has worked in one field of tobacco
              machinery. What started as a small trading operation has grown into
              a trusted, multi-generation name that new and established cigarette
              companies across Pakistan rely on to build and run their lines.
            </p>
            <p className="mt-4 leading-relaxed text-brand-600">
              We are specialist tobacco machinery manufacturers offering a
              complete, one-stop solution. From making and filter machines to packers and
              wrappers, we help you source the right equipment, see it running
              before you buy, and get it installed and tuned on your own floor. We
              also provide free demonstration and training for your technicians, so
              your team is confident with the machine from day one.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Multi-generation family business",
                "New & reconditioned machines",
                "Full line, maker to packer",
                "Demonstration & technician training",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-700">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary mt-8">
              More About Us
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/legacy.webp"
                alt="The team behind Civic Tobacco Machinery at an international tobacco machinery exhibition"
                width={1585}
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
              <p className="eyebrow">In Stock &amp; Popular</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Featured Machines</h2>
            </div>
            <Link href="/manufacturing-machines" className="link-accent">
              View all machines →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((p) => (
              <ProductCard key={productHref(p)} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container mx-auto py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Civic Tobacco Machinery</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">
            The Right Machine, Set Up to Last
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-brand-100 bg-white p-6"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent-50 text-accent-700">
                <ReasonIcon name={r.icon} />
              </span>
              <h3 className="text-lg">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-600">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Local SEO block */}
      <section className="bg-brand-950 py-16 text-white">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-accent-300">Serving All of Pakistan</p>
            <h2 className="mt-2 text-3xl text-white sm:text-4xl">
              Your Tobacco Machinery Partner in Pakistan
            </h2>
            <p className="mt-4 text-brand-200">
              Being based in the SITE industrial estate means we are close to the
              factories we serve. When you need a part, a technician or honest
              advice on a machine, you are dealing with people just across the
              city, not a supplier on another continent.
            </p>
            <ul className="mt-6 space-y-3 text-brand-200">
              <li className="flex gap-3">
                <Dot /> Fast local support and spare parts
              </li>
              <li className="flex gap-3">
                <Dot /> Installation and setup at your factory
              </li>
              <li className="flex gap-3">
                <Dot /> New and reconditioned machines for every budget
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white">Visit or Call Us</h3>
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
            <Link href="/contact" className="btn-primary mt-6">
              Get Directions &amp; Contact
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">Common Questions</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <Faq items={homeFaqs} />
      </section>

      <CtaBand />
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

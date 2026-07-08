import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Cigarette & Tobacco Machinery Suppliers in Pakistan",
  description:
    "About Civic Tobacco Machinery — cigarette and tobacco machinery suppliers in Pakistan. Who we are, what we stand for, and how we support your factory with new and used machines.",
  path: "/about",
  keywords: [
    "about Civic Tobacco Machinery",
    "tobacco machinery suppliers Pakistan",
    "cigarette machine dealers Pakistan",
  ],
});

const values = [
  {
    title: "Honesty first",
    text: "We tell you the real condition of a machine and what it can do. A sale that leaves you unhappy is no sale at all.",
  },
  {
    title: "Machines we would run ourselves",
    text: "We deal in brands and models we trust — the ones with good parts availability and a long working life.",
  },
  {
    title: "Support that stays",
    text: "Our job does not end at delivery. We help with installation, setup, spare parts and service for the long run.",
  },
  {
    title: "Fair value",
    text: "New or reconditioned, we help you get the right machine for your budget without cutting corners that matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Cigarette & Tobacco Machinery, Backed by People Who Know It"
        intro="Civic Tobacco Machinery has spent years helping factories across Pakistan build, expand and maintain their cigarette lines."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="container mx-auto py-14">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="prose-content lg:col-span-2">
            <h2 className="text-2xl">Who we are</h2>
            <p>
              We are a Pakistan-based supplier of cigarette and tobacco machinery.
              Over the years we have worked with everything from small workshops
              taking their first steps into cigarette production to established
              factories adding a second or third line. That experience shapes how
              we work — we listen first, understand what you actually need, and
              then point you to the machine that fits.
            </p>
            <p>
              Our range covers the whole line: making machines that form the rod,
              filter makers, packing machines for hard and soft packs, wrapping
              and boxing machines, and the tobacco machinery that keeps the floor
              fed. We deal in both new and carefully reconditioned equipment, so
              there is a sensible option whatever your budget looks like.
            </p>

            <h2 className="text-2xl">How we work</h2>
            <p>
              Buying a machine is only half the story. A maker or packer has to be
              installed properly, set correctly and kept running — and that is
              where a lot of suppliers disappear. We do not. We help you get the
              machine onto your floor and running the way it should, and we stay
              reachable afterwards for parts and service.
            </p>
            <p>
              Because we are based right here in the SITE industrial estate, that
              support is genuinely local. When something needs attention, you are
              speaking to people across the city, not waiting on a supplier in
              another country and another time zone.
            </p>

            <h2 className="text-2xl">The brands we trust</h2>
            <p>
              We focus on well-proven names — Hauni and Molins for making and
              filter machines, HLP and SASIB for packing and wrapping, and the
              Protos family for higher-speed lines. We choose these not for the
              badge but because their parts and know-how are easy to find, which
              is exactly what keeps a machine earning its keep for years.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <h3 className="text-lg">At a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-brand-500">Based in</dt>
                  <dd className="font-medium text-brand-800">
                    SITE, Karachi, Pakistan
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-500">We supply</dt>
                  <dd className="font-medium text-brand-800">
                    New &amp; used tobacco machinery
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-500">We serve</dt>
                  <dd className="font-medium text-brand-800">
                    All of Pakistan
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-500">Call / WhatsApp</dt>
                  <dd className="font-medium text-brand-800">
                    {siteConfig.phoneDisplay}
                  </dd>
                </div>
              </dl>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Talk to Us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-50 py-14">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Stand For</p>
            <h2 className="mt-2 text-3xl">The Way We Do Business</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-brand-100 bg-white p-6"
              >
                <h3 className="text-lg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's talk about your line"
        text="Whether you are starting out or expanding, tell us what you are trying to produce and we will help you get there."
      />
    </>
  );
}

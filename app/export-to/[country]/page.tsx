import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { productHref } from "@/lib/products";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqSchema, itemListSchema } from "@/lib/schema";
import CountryMachinesShowcase from "@/components/export/CountryMachinesShowcase";
import SectionCards from "@/components/export/SectionCards";
import QuickFacts from "@/components/export/QuickFacts";
import StatCallout from "@/components/export/StatCallout";
import { exportCountries, getExportCountry } from "@/lib/export-countries";
import { getExportMachineSections } from "@/lib/export-machine-sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return exportCountries.map((c) => ({ country: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { country: string };
}): Metadata {
  const country = getExportCountry(params.country);
  if (!country) return {};
  return buildMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/export-to/${country.slug}`,
    keywords: [
      `cigarette machinery suppliers in ${country.name}`,
      `cigarette machinery ${country.name}`,
      `tobacco machinery ${country.name}`,
      "cigarette manufacturing equipment",
      "cigarette machinery exporter Pakistan",
    ],
  });
}

/** H2 heading builders for the long-form sections, shared by every country. */
function headings(name: string) {
  return {
    overview: `Cigarette Machinery Suppliers in ${name}`,
    sourcingGuide: `Guide to Sourcing Tobacco Machinery in ${name}`,
    supplierSelection: `What to Look for in a Tobacco Machinery Supplier for ${name}`,
    whyChooseUs: `Why Choose Civic Tobacco Machinery for ${name}`,
    productionScale: `Machinery for Different Production Requirements in ${name}`,
    usedReconditioned: `Used & Reconditioned Machinery for ${name}`,
    completeSolutions: `Complete Tobacco Machinery Solutions for ${name}`,
    exportShipping: `Exporting Machinery from Pakistan to ${name}`,
    technicalSupport: `Technical Support & Spare Parts for ${name}`,
  };
}

export default function ExportCountryPage({
  params,
}: {
  params: { country: string };
}) {
  const country = getExportCountry(params.country);
  if (!country) notFound();

  const h = headings(country.name);
  const machineSections = getExportMachineSections().map((s) => ({
    key: s.key,
    title: `${s.heading} in ${country.name}`,
    products: s.products,
  }));

  const allMachines = machineSections.flatMap((s) => s.products);

  return (
    <>
      <PageHero
        eyebrow="Export To"
        title={`Cigarette & Tobacco Machinery Suppliers in ${country.name}`}
        intro={country.heroIntro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Export To", path: "/export-to" },
          { name: country.name, path: `/export-to/${country.slug}` },
        ]}
      />

      <JsonLd
        data={itemListSchema(
          allMachines.map((p) => ({ name: p.name, path: productHref(p) })),
        )}
      />

      {/* Our Machines */}
      <section className="container mx-auto py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Machines</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Our Machines</h2>
          <p className="mt-4 text-brand-600">
            Select a machine below to see its image and specifications. The same catalogue of
            making, packing, filter, wrapping and supporting tobacco machinery is available for
            export to {country.name}, new and reconditioned.
          </p>
        </div>
        <div className="mt-10">
          <CountryMachinesShowcase sections={machineSections} />
        </div>
      </section>

      {/* What we export — service-card grid (only when the country defines one) */}
      {country.machineryCategories && (
        <section className="border-t border-brand-100 py-14">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">What We Export</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">
                Tobacco &amp; Cigarette Machinery We Export to {country.name}
              </h2>
            </div>
            <div className="mt-10">
              <SectionCards items={country.machineryCategories} columns={3} />
            </div>
          </div>
        </section>
      )}

      {/* Long-form country content */}
      <section className="border-t border-brand-100 bg-brand-50 py-14">
        <div className="container mx-auto">
          {/* Overview, with an optional quick-facts sidebar alongside it */}
          <div className={country.quickFacts ? "lg:grid lg:grid-cols-3 lg:gap-10" : ""}>
            <div className={`prose-content max-w-3xl ${country.quickFacts ? "lg:col-span-2" : "mx-auto"}`}>
              <h2>{h.overview}</h2>
              {country.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {country.quickFacts && (
              <div className="mt-8 lg:mt-0">
                <QuickFacts facts={country.quickFacts} />
              </div>
            )}
          </div>

          <div className="prose-content mx-auto mt-4 max-w-3xl">
            <h2>{h.sourcingGuide}</h2>
            {country.sourcingGuide.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Country-specific differentiator — free zones, incentive programs, etc. */}
          {country.highlights && (
            <div className="mt-14">
              <h2 className="text-2xl sm:text-3xl">
                {country.highlightsHeading ?? `Why ${country.name} Stands Out`}
              </h2>
              <div className="mt-6">
                <SectionCards items={country.highlights} columns={3} />
              </div>
            </div>
          )}

          {/* What to look for — cards when available, prose otherwise */}
          <div className="mt-14">
            <h2 className="text-2xl sm:text-3xl">{h.supplierSelection}</h2>
            <div className="mt-6">
              {country.supplierSelectionPoints ? (
                <SectionCards items={country.supplierSelectionPoints} columns={2} />
              ) : (
                <div className="prose-content max-w-3xl">
                  {country.supplierSelection.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Why choose us — cards when available, plain bullet list otherwise */}
          <div className="mt-14">
            <h2 className="text-2xl sm:text-3xl">{h.whyChooseUs}</h2>
            <div className="mt-6">
              {country.whyChooseUsPoints ? (
                <SectionCards items={country.whyChooseUsPoints} columns={2} />
              ) : (
                <ul className="prose-content max-w-3xl">
                  {country.whyChooseUs.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Production scale tiers — cards when available, prose otherwise */}
          <div className="mt-14">
            <h2 className="text-2xl sm:text-3xl">{h.productionScale}</h2>
            <div className="mt-6">
              {country.productionScalePoints ? (
                <SectionCards items={country.productionScalePoints} columns={3} />
              ) : (
                <div className="prose-content max-w-3xl">
                  {country.productionScale.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Used & reconditioned, with an optional pulled-out stat */}
          <div className="mt-14">
            <h2 className="text-2xl sm:text-3xl">{h.usedReconditioned}</h2>
            <div
              className={`mt-6 ${
                country.usedReconditionedStat ? "lg:grid lg:grid-cols-3 lg:gap-10" : ""
              }`}
            >
              <div
                className={`prose-content max-w-3xl ${
                  country.usedReconditionedStat ? "lg:col-span-2" : ""
                }`}
              >
                {country.usedReconditioned.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {country.usedReconditionedStat && (
                <div className="mt-6 lg:mt-0">
                  <StatCallout
                    value={country.usedReconditionedStat.value}
                    label={country.usedReconditionedStat.label}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Complete solutions — cards when available, prose otherwise */}
          <div className="mt-14">
            <h2 className="text-2xl sm:text-3xl">{h.completeSolutions}</h2>
            <div className="mt-6">
              {country.completeSolutionsPoints ? (
                <SectionCards items={country.completeSolutionsPoints} columns={2} />
              ) : (
                <div className="prose-content max-w-3xl">
                  {country.completeSolutions.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Export & shipping — cards when available, prose otherwise */}
          <div className="mt-14">
            <h2 className="text-2xl sm:text-3xl">{h.exportShipping}</h2>
            <div className="mt-6">
              {country.exportShippingPoints ? (
                <SectionCards items={country.exportShippingPoints} columns={2} />
              ) : (
                <div className="prose-content max-w-3xl">
                  {country.exportShipping.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Technical support — cards when available, prose otherwise */}
          <div className="mt-14">
            <h2 className="text-2xl sm:text-3xl">{h.technicalSupport}</h2>
            <div className="mt-6">
              {country.technicalSupportPoints ? (
                <SectionCards items={country.technicalSupportPoints} columns={2} />
              ) : (
                <div className="prose-content max-w-3xl">
                  {country.technicalSupport.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-14">
        <JsonLd data={faqSchema(country.faqs)} />
        <h2 className="text-center text-2xl sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-8">
          <Faq items={country.faqs} columns={country.faqs.length > 6 ? 2 : 1} />
        </div>
      </section>

      <CtaBand
        title={`Looking for Cigarette Machinery in ${country.name}?`}
        text="Tell Civic Tobacco Machinery what you are looking to produce, your required output and the type of equipment you need. Our team can help you identify suitable new, used or reconditioned machinery and discuss export options from Pakistan."
      />
    </>
  );
}

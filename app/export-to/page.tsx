import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { itemListSchema } from "@/lib/schema";
import ExportRegionExplorer from "@/components/export/ExportRegionExplorer";
import { exportRegionOrder, exportCountrySummaries } from "@/lib/export-countries";

export const metadata: Metadata = buildMetadata({
  title: "Regions We Export To | Civic Tobacco Machinery",
  description:
    "Civic Tobacco Machinery, a Pakistan-based cigarette and tobacco machinery supplier, exports new, used and reconditioned machinery to manufacturers across Asia, the Middle East, Europe, North America and beyond.",
  path: "/export-to",
  keywords: [
    "cigarette machinery exporter",
    "tobacco machinery exporter Pakistan",
    "export cigarette machines",
  ],
});

export default function ExportHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Export To"
        title="Regions We Export To"
        intro="Civic Tobacco Machinery supplies cigarette manufacturing and tobacco processing machinery to manufacturers and industrial buyers across international markets. From single machines and reconditioned equipment to complete making, filter, packing and wrapping lines, we help customers source practical, well-specified machinery from Pakistan, with clear communication and technical support throughout the process."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Export To", path: "/export-to" },
        ]}
      />

      <JsonLd
        data={itemListSchema(
          exportCountrySummaries.map((c) => ({ name: c.name, path: `/export-to/${c.slug}` })),
        )}
      />

      <section className="container mx-auto py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Browse by Region</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Select a Region to See Countries</h2>
          <p className="mt-4 text-brand-600">
            Choose a region below to see the countries we currently list. Each country page covers
            the machinery categories relevant to a cigarette production line and how to source
            equipment from Pakistan.
          </p>
        </div>

        <div className="mt-10">
          <ExportRegionExplorer regions={exportRegionOrder} countries={exportCountrySummaries} />
        </div>
      </section>

      <CtaBand
        title="Don't See Your Country Listed?"
        text="Our export capability isn't limited to the countries shown here. Tell us where you are and what you are looking to produce, and our team can discuss machinery options and shipping for your location."
      />
    </>
  );
}

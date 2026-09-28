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

      <section className="border-t border-brand-100 bg-brand-50 py-14">
        <div className="container mx-auto">
          <div className="prose-content mx-auto max-w-3xl">
            <h2>How Exporting From Pakistan Works</h2>
            <p>
              Whichever country you&rsquo;re buying for, the process runs the
              same way: we start with a requirement discussion covering the
              machine or machines you need and your target output, move to
              machine selection and condition confirmation, then a
              commercial quotation, and finally shipping and documentation
              coordination through to delivery. Exact shipping arrangements
              and import requirements vary by destination, so we confirm
              those specifics for each order rather than quoting a single
              figure that wouldn&rsquo;t hold true everywhere.
            </p>
            <h3>New, Used &amp; Reconditioned Machinery for Export</h3>
            <p>
              Every category we supply, making machines, filter machines,
              packing and wrapping equipment, and supporting tobacco
              machinery, is available new or reconditioned. Reconditioned
              units are inspected, serviced and tested before they ship,
              with condition disclosed upfront so an international buyer
              isn&rsquo;t relying on photos alone.
            </p>
            <h3>Installation and Support After Delivery</h3>
            <p>
              A machine landing at your port is only half the job. We stay
              involved after delivery with spare parts availability and
              technical guidance on setup, troubleshooting and maintenance,
              the same support we provide to factories here in Pakistan,
              extended to buyers wherever the machine ends up running.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't See Your Country Listed?"
        text="Our export capability isn't limited to the countries shown here. Tell us where you are and what you are looking to produce, and our team can discuss machinery options and shipping for your location."
      />
    </>
  );
}

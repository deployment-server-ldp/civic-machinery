import Link from "next/link";
import { products, productHref } from "@/lib/products";
import SectionCards from "@/components/export/SectionCards";
import { getIndonesiaMachineSpeedRows, getMakerFormatRange } from "@/lib/export-indonesia";
import type { ExportCountry } from "@/lib/export-countries/types";

function productLink(slug: string, label: string) {
  const product = products.find((p) => p.slug === slug);
  if (!product) throw new Error(`Indonesia export page: unknown product slug "${slug}"`);
  return (
    <Link key={slug} href={productHref(product)}>
      {label}
    </Link>
  );
}

const CITIES = [
  {
    title: "Jakarta",
    text: "The capital region is home to high-capacity manufacturing and export-oriented production, where output volume and line uptime matter most.",
  },
  {
    title: "Surabaya",
    text: "East Java's industrial hub hosts large-scale tobacco processing plants, with cutting, conditioning and blending capacity to match major cigarette makers.",
  },
  {
    title: "Bandung & Semarang",
    text: "Both cities have growing demand for automated cigarette machines as manufacturers move away from manual production toward PLC-controlled lines.",
  },
  {
    title: "Medan & Makassar",
    text: "Expanding local factories and contract manufacturers in Sumatra and Sulawesi are adding capacity to serve regional demand.",
  },
  {
    title: "Yogyakarta, Bali & other areas",
    text: "Smaller manufacturers and new entrants across the archipelago are a growing segment, often starting with a single maker and packing line.",
  },
];

/**
 * Indonesia's bespoke long-form content (the shared template's section order
 * doesn't fit this brief — see app/export-to/[country]/page.tsx). Every
 * other country keeps the shared template unchanged.
 */
export default function IndonesiaExportSections({ country }: { country: ExportCountry }) {
  const speedRows = getIndonesiaMachineSpeedRows();
  const formatRange = getMakerFormatRange();

  return (
    <section className="border-t border-brand-100 bg-brand-50 py-14">
      <div className="container mx-auto">
        {/* 2. Kretek and white cigarettes */}
        <div className="prose-content mx-auto max-w-3xl">
          <h2>Cigarette Machinery Built for Kretek and White Cigarette Production</h2>
          <p>
            Indonesia&rsquo;s cigarette industry produces both kretek, the clove-blended
            cigarette that dominates domestic demand, and white, filter-only cigarettes for
            export and premium segments. Our cigarette making machines, the{" "}
            {productLink("mark-8-post-64", "Molins Mark 8")},{" "}
            {productLink("mark-9-max-s", "Mark 9")} and{" "}
            {productLink("mark-9-5-lenze-servo-drives", "Mark 9.5")}, and the{" "}
            {productLink("protos-70", "Protos 70")} and{" "}
            {productLink("protos-80-er", "Protos 80 ER")}, can be configured for king-size,
            slim, super-slim and kretek formats, so the same line can switch between clove and
            standard production without a different setup.
          </p>
          <p>
            Tobacco cutting and blending equipment keeps clove-tobacco blends consistent from
            batch to batch, which matters for kretek&rsquo;s distinctive flavour profile. Filter
            making machines, the {productLink("kdf-1", "Hauni KDF-1")},{" "}
            {productLink("kdf-2", "KDF-2")} and {productLink("molins-pm-5", "Molins PM-5")}, let
            filters fit into a line that runs both clove-based and standard cigarettes without a
            separate changeover.
          </p>
          <p>
            On the packing side, the {productLink("hlp-180", "HLP-180")},{" "}
            {productLink("hlp-200", "HLP-200")} and {productLink("hlp-225", "HLP-225")} hinge-lid
            packers and the {productLink("sasib-3000", "SASIB 3000")} and{" "}
            {productLink("sasib-5000", "SASIB 5000")} soft-pack machines are all PLC-controlled,
            so pack quality stays consistent whether the line is running kretek or white
            cigarettes.
          </p>
        </div>

        {/* 3. Across Indonesia */}
        <div className="mt-14">
          <h2 className="text-2xl sm:text-3xl">Tobacco Machinery Supplier Across Indonesia</h2>
          <p className="prose-content mx-auto mt-4 max-w-3xl">
            We supply and support manufacturers across Indonesia&rsquo;s main industrial regions,
            each with its own mix of production scale and machinery needs.
          </p>
          <div className="mt-6">
            <SectionCards items={CITIES} columns={3} />
          </div>
          <p className="prose-content mx-auto mt-6 max-w-3xl">
            World Tobacco Asia 2026 takes place in Surabaya, 22&ndash;23 October &mdash; see our{" "}
            <Link href="/blog/world-tobacco-asia/">guide to the event</Link> for what is on show.
          </p>
        </div>

        {/* 4. Machine speeds and formats */}
        <div className="mt-14">
          <h2 className="text-2xl sm:text-3xl">Machine Speeds and Formats</h2>
          {formatRange && (
            <p className="prose-content mx-auto mt-4 max-w-3xl">
              Our cigarette making machines handle {formatRange.circumference} circumference and{" "}
              {formatRange.rodLength} rod lengths, covering king-size, slim, super-slim and
              kretek formats.
            </p>
          )}
          <div className="mt-6 overflow-x-auto rounded-xl border border-brand-100 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-brand-50 text-left">
                  <th className="px-4 py-3 font-semibold text-brand-900">Machine</th>
                  <th className="px-4 py-3 font-semibold text-brand-900">Type</th>
                  <th className="px-4 py-3 font-semibold text-brand-900">Speed</th>
                  <th className="px-4 py-3 font-semibold text-brand-900">Formats / Sizes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {speedRows.map((row) => (
                  <tr key={row.product.slug}>
                    <td className="px-4 py-3 font-medium">
                      <Link href={row.href} className="text-accent-700 hover:underline">
                        {row.product.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-brand-600">{row.type}</td>
                    <td className="px-4 py-3 text-brand-600">{row.speed}</td>
                    <td className="px-4 py-3 text-brand-600">{row.formats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Guide to sourcing */}
        <div className="prose-content mx-auto mt-14 max-w-3xl">
          <h2>Guide to Sourcing Tobacco Machinery in Indonesia</h2>
          {country.sourcingGuide.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 6. What to look for */}
        <div className="prose-content mx-auto mt-14 max-w-3xl">
          <h2>What to Look for in a Tobacco Machinery Supplier</h2>
          {country.supplierSelection.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 7. Used & reconditioned */}
        <div className="prose-content mx-auto mt-14 max-w-3xl">
          <h2>Used &amp; Reconditioned Cigarette Machinery</h2>
          {country.usedReconditioned.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 8. Spare parts, training and technical support */}
        <div className="mt-14">
          <h2 className="text-2xl sm:text-3xl">Spare Parts, Training and Technical Support</h2>
          <div className="mt-6">
            <SectionCards items={country.technicalSupportPoints ?? []} columns={2} />
          </div>
        </div>

        {/* 9. How export works */}
        <div className="prose-content mx-auto mt-14 max-w-3xl">
          <h2>How Export to Indonesia Works</h2>
          {country.exportShipping.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 10. Why choose us */}
        <div className="mt-14">
          <h2 className="text-2xl sm:text-3xl">
            Why Choose Civic Tobacco Machinery as Your Cigarette Machinery Supplier
          </h2>
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
      </div>
    </section>
  );
}

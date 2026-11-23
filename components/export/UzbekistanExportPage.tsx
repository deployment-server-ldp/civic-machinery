import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MachineImage from "@/components/MachineImage";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/export/QuoteForm";
import { products, productHref } from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/site";
import type { ExportCountry } from "@/lib/export-countries/types";

const PAGE_PATH = "/export-to/uzbekistan/";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const abs = (path: string) => `${siteConfig.url}${path}`;

function product(slug: string) {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Uzbekistan export page: unknown product slug "${slug}"`);
  return p;
}

/** A machine card: card title (H3), one line, and the schema ItemList name. */
interface MachineCardData {
  slug: string;
  title: string;
  text: string;
  listName: string;
}

const MAKERS: MachineCardData[] = [
  {
    slug: "protos-80-er",
    title: "Hauni Protos 80 ER Cigarette Machine",
    text: "High-speed cigarette maker for large factories, rated at up to 8,000 cigarettes per minute.",
    listName: "Hauni Protos 80 ER Cigarette Maker",
  },
  {
    slug: "protos-70",
    title: "Hauni Protos 70 Cigarette Making Machine",
    text: "High-volume cigarette making machine rated at up to 7,000 cigarettes per minute.",
    listName: "Hauni Protos 70 Cigarette Maker",
  },
  {
    slug: "mark-8-post-64",
    title: "Molins Mark 8 Post 64 Cigarette Manufacturing Machine",
    text: "Proven starter maker with double colour printer, 1,800 to 2,000 cigarettes per minute.",
    listName: "Molins Mark 8 Post 64 Cigarette Maker",
  },
  {
    slug: "mark-9-5-lenze-servo-drives",
    title: "Molins Mark 9.5 Cigarette Making Machine",
    text: "Mid-speed maker with Lenze servo drives and Siemens PLC, up to 3,500 cigarettes per minute.",
    listName: "Molins Mark 9.5 with Lenze Servo Drives",
  },
];

const PACKERS: MachineCardData[] = [
  {
    slug: "hlp-225",
    title: "HLP-225 Cigarette Packing Machine",
    text: "Double plunger hard pack packer with full PLC control, 225 packs per minute.",
    listName: "HLP-225 Cigarette Packing Machine",
  },
  {
    slug: "hlp-200",
    title: "HLP-200 Cigarette Packing Machine",
    text: "Hard pack packer with PLC control for steady output, 200 packs per minute.",
    listName: "HLP-200 Cigarette Packing Machine",
  },
  {
    slug: "hlp-180",
    title: "HLP-180 Cigarette Packing Machine",
    text: "Single plunger hard pack packer for king size, slim and super slim, 180 packs per minute.",
    listName: "HLP-180 Cigarette Packing Machine",
  },
  {
    slug: "sasib-5000",
    title: "SASIB 5000 Soft Pack Machine",
    text: "High-speed soft pack cigarette packing machine for larger lines.",
    listName: "SASIB 5000 Soft Pack Machine",
  },
  {
    slug: "sasib-3000",
    title: "SASIB 3000 Soft Pack Machine",
    text: "Soft pack cigarette packing machine with steady, consistent output.",
    listName: "SASIB 3000 Soft Pack Machine",
  },
  {
    slug: "regular-wrapper-cp1",
    title: "Regular Wrapper CP1",
    text: "Pack overwrapping machine for hard pack and soft pack lines, up to 250 packs per minute.",
    listName: "Regular Wrapper CP1",
  },
  {
    slug: "naked-over-wrapper",
    title: "Naked Over Wrapper",
    text: "Cellophane overwrapper for finished cigarette packs and cartons.",
    listName: "Naked Over Wrapper",
  },
  {
    slug: "molins-boxer",
    title: "Molins Boxer",
    text: "Cartoning machine that groups finished packs into cartons at line speed.",
    listName: "Molins Boxer",
  },
];

const SERVED_CITIES = ["Tashkent", "Samarkand", "Bukhara", "Andijan", "Fergana", "Namangan"];

const CATALOGUE = [
  { name: "Cigarette making machines", path: "/cigarette-manufacturing-machines/" },
  { name: "Cigarette packing machines", path: "/cigarette-packing-machines/" },
  { name: "Cigarette box wrapping machines", path: "/cigarette-box-wrapping-machines/" },
  { name: "Cigarette filter making machines", path: "/cigarette-filter-making-machines/" },
  { name: "Tobacco cutters, feeders and reclaimers", path: "/cutter-feeder-reclaimer/" },
];

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Export To", path: "/export-to" },
  { name: "Uzbekistan", path: "/export-to/uzbekistan" },
];

/** WebPage + Service + ItemList + BreadcrumbList + FAQPage in one @graph. */
function pageSchema(country: ExportCountry) {
  const machines = [...MAKERS, ...PACKERS];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Tobacco & Cigarette Machinery Supplier in Uzbekistan | Civic",
        description: country.metaDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${PAGE_URL}#service` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#machines` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Cigarette and tobacco machinery supplier for Uzbekistan",
        serviceType: "Tobacco machinery supplier",
        description:
          "Supply, shipping, installation, training and spare parts for new and reconditioned cigarette making, packing, wrapping and filter machines for cigarette factories in Uzbekistan.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Uzbekistan" },
          ...SERVED_CITIES.map((name) => ({ "@type": "City", name })),
        ],
        url: PAGE_URL,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cigarette machinery for Uzbekistan",
          itemListElement: CATALOGUE.map((c) => ({
            "@type": "OfferCatalog",
            name: c.name,
            url: abs(c.path),
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#machines`,
        name: "Cigarette machines supplied to Uzbekistan",
        numberOfItems: machines.length,
        itemListElement: machines.map((m, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: m.listName,
          url: abs(`${productHref(product(m.slug))}/`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: CRUMBS.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: abs(c.path === "/" ? "/" : `${c.path}/`),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: country.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

function MachineCard({ card }: { card: MachineCardData }) {
  const p = product(card.slug);
  const href = productHref(p);
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card">
      <MachineImage
        src={p.image}
        alt={card.title}
        aspect="aspect-[655/330]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">
          <Link href={href} className="text-brand-900 hover:text-accent-700">
            {card.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-600">{card.text}</p>
        <Link href={href} className="btn-secondary mt-4 self-start">
          Check Machine
        </Link>
      </div>
    </article>
  );
}

function ContactButtons({ quote = false }: { quote?: boolean }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={whatsappLink("Enquiry from Uzbekistan")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-[#25D366] text-white hover:brightness-105"
      >
        WhatsApp {siteConfig.phoneDisplay}
      </a>
      <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
        Email Us
      </a>
      {quote && (
        <a href="#quote" className="btn-primary">
          Get a Quote
        </a>
      )}
    </div>
  );
}

/** A titled point with free-form (linkable) text. */
function Point({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-brand-100 bg-white p-5 shadow-card">
      <h3 className="text-base font-semibold text-brand-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-600">{children}</p>
    </div>
  );
}

/**
 * Uzbekistan's bespoke export page, built to the client's content brief
 * (section order, copy, H2/H3 levels and the single @graph schema block).
 * Every other country keeps the shared template.
 */
export default function UzbekistanExportPage({ country }: { country: ExportCountry }) {
  const hero = product("protos-80-er");
  return (
    <>
      <JsonLd data={pageSchema(country)} />

      {/* 1. Hero */}
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="container mx-auto py-8 sm:py-12">
          <Breadcrumbs items={CRUMBS} schema={false} />
          <div className="mt-5 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-2">Export To</p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.7rem]">{country.h1}</h1>
              <ContactButtons quote />
            </div>
            <MachineImage
              src={hero.image}
              alt="Hauni Protos 80 ER cigarette making machine supplied by Civic Tobacco Machinery to Uzbekistan"
              aspect="aspect-[655/330]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Featured cigarette making machines */}
      <section className="container mx-auto py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MAKERS.map((c) => (
            <MachineCard key={c.slug} card={c} />
          ))}
        </div>
      </section>

      {/* 3. Intro */}
      <section className="border-t border-brand-100 bg-brand-50 py-14">
        <div className="prose-content container mx-auto max-w-3xl">
          <h2>Cigarette &amp; Tobacco Machinery Supplier Uzbekistan</h2>
          <h3>New and Reconditioned Cigarette Machinery for Uzbekistan&rsquo;s Cigarette Factories</h3>
          <p>
            Civic Tobacco Machinery is a tobacco machinery supplier based in Karachi, Pakistan,
            supplying new and reconditioned cigarette machines to factories in Uzbekistan. Since
            1990 we have supplied complete lines, from tobacco feeders and Molins or Hauni
            cigarette makers to HLP and SASIB packers, overwrappers and boxers, and we install and
            commission every machine we sell.
          </p>
          <p>
            Uzbekistan has an established cigarette industry with international investment: BAT
            Uzbekistan alone reports US$530 million invested and US$95 million of exports (
            <a
              href="https://www.uzdaily.uz/en/british-american-tobacco-expands-production-in-uzbekistan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UzDaily, May 2026
            </a>
            ). Independent and mid-size factories serving the local market and Central Asian
            exports need proven machines at a sensible price, and that is what we supply.
          </p>
        </div>
        <div className="container mx-auto max-w-3xl">
          <ContactButtons quote />
        </div>
      </section>

      {/* 4. Packing and wrapping machines */}
      <section className="container mx-auto py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKERS.map((c) => (
            <MachineCard key={c.slug} card={c} />
          ))}
        </div>
      </section>

      <section className="border-t border-brand-100 bg-brand-50 py-14">
        <div className="container mx-auto">
          {/* 5. Cities */}
          <div className="prose-content mx-auto max-w-3xl">
            <h2>We Are a Tobacco Machinery Supplier in Uzbekistan</h2>
            <p>
              We work with cigarette manufacturers across Uzbekistan, from established factories
              expanding capacity to new companies building their first line. Machines travel by
              road from Karachi, and our technicians come to your factory to install them. We
              supply factories in:
            </p>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Point title="Tashkent">
              The country&rsquo;s main industrial and trading centre, and the end point of road
              freight from Pakistan.
            </Point>
            <Point title="Samarkand and Urgut">
              Long-standing tobacco manufacturing and fermentation centres (
              <a
                href="https://www.trend.az/business/economy/2997584.html"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                Trend
              </a>
              ).
            </Point>
            <Point title="Bukhara and Navoi">
              Growing industrial zones in the centre and west of the country.
            </Point>
            <Point title="Andijan, Fergana and Namangan">
              The populous Fergana Valley, with easy reach into Kyrgyzstan and Tajikistan.
            </Point>
            <Point title="Termez and the south">
              The border crossing on the Trans-Afghan road route from Pakistan.
            </Point>
          </div>
          <p className="prose-content mx-auto mt-6 max-w-3xl">
            Tell us your city and target output, and we will recommend a line that fits your floor
            space, power supply and budget.
          </p>

          {/* 6. Formats */}
          <div className="prose-content mx-auto mt-14 max-w-3xl">
            <h2>Cigarette Machinery for King Size, Slim and Filter Production</h2>
            <p>
              Uzbek brands run king size, slim and super slim filter cigarettes, often on the same
              line. Our Molins and Hauni makers handle circumferences from 17 mm to 28.3 mm and
              lengths from 65 mm to 110 mm with format change parts, and our HLP packers run all
              three formats. For filter production we supply{" "}
              <Link href="/cigarette-filter-making-machines">
                Hauni KDF-1, KDF-2 and Molins PM-5 filter makers
              </Link>
              , so you can make your own filter rods instead of buying them. Each machine is set up
              and test-run on your format before it leaves Karachi.
            </p>
          </div>

          {/* 7. Spare parts and support */}
          <div className="mt-14">
            <div className="prose-content mx-auto max-w-3xl">
              <h2>Customized Cigarette Machinery and Spare Parts for Uzbekistan</h2>
              <p>
                A cigarette line is only as reliable as the support behind it. With every machine
                we supply:
              </p>
            </div>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <Point title="Spare parts supply">
                Garniture parts, knives, suction tapes, belts and bearings for Molins, Hauni and
                HLP machines, shipped from Karachi.
              </Point>
              <Point title="Format and line engineering">
                Format parts, speed matching between maker, packer and wrapper, and layout advice
                for your building.
              </Point>
              <Point title="Installation, training and remote support">
                On-site installation and commissioning, operator and mechanic training, then
                support by WhatsApp and video call.
              </Point>
            </div>
            <p className="prose-content mx-auto mt-6 max-w-3xl">
              Our reconditioned tobacco machines are stripped, rebuilt with new wear parts and
              test-run before shipping, so you get a reliable machine at a fraction of the cost of
              a new one.{" "}
              <Link href="/blog/how-to-choose-a-cigarette-machinery-supplier-for-reconditioned-equipment">
                Read what reconditioning should include
              </Link>
              .
            </p>
          </div>

          {/* 8. Why choose us */}
          <div className="mt-14">
            <div className="prose-content mx-auto max-w-3xl">
              <h2>Why Choose Civic for Cigarette Machinery in Uzbekistan?</h2>
              <p>
                Choosing a cigarette machinery supplier is a long-term decision. Civic Tobacco
                Machinery has supplied and serviced cigarette lines since 1990 from our workshop in
                SITE, Karachi. <Link href="/about">About us</Link>.
              </p>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Point title="Industry knowledge">
                More than 35 years with Molins, Hauni, HLP and SASIB machines.
              </Point>
              <Point title="Complete lines">
                Feeding, making, filter, packing, wrapping and cartoning from one supplier.
              </Point>
              <Point title="Flexible options">
                New or reconditioned machines, single machines or full lines, sized to your budget.
              </Point>
              <Point title="Proven shipping route">
                Road freight from Karachi to Tashkent, with export documents prepared by us.
              </Point>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ (FAQPage schema is in the @graph above) */}
      <section className="container mx-auto py-14">
        <h2 className="text-center text-2xl sm:text-3xl">
          Frequently Asked Questions on Cigarette Machinery in Uzbekistan
        </h2>
        <div className="mt-8">
          <Faq items={country.faqs} />
        </div>
      </section>

      {/* 10. Product links */}
      <section className="border-t border-brand-100 bg-brand-50 py-14">
        <div className="prose-content container mx-auto max-w-3xl">
          <h2>High-Quality Tobacco Machinery for Uzbekistan</h2>
          <p>
            Whether you are setting up a new cigarette factory or upgrading an existing line, we
            supply the tobacco machines you need, matched to your output and format.
          </p>
          <ul>
            <li>
              <Link href="/cigarette-manufacturing-machines">Cigarette Manufacturing Machines</Link>:
              Molins Mark 8, Mark 9, Mark 9.5 and Hauni Protos makers.
            </li>
            <li>
              <Link href="/cigarette-packing-machines">Cigarette Packing Machines</Link>: HLP hard
              pack and SASIB soft pack packers.
            </li>
            <li>
              <Link href="/cutter-feeder-reclaimer">Cutters, Feeders &amp; Reclaimers</Link>:
              tobacco cutters, feeders, reclaimers and stem flatteners.
            </li>
            <li>
              <Link href="/cigarette-box-wrapping-machines">Cigarette Box Wrapping Machines</Link>:
              CP1 and naked overwrappers, Molins and SASIB boxers.
            </li>
          </ul>
        </div>
      </section>

      {/* 11. Contact + 12. Quote form */}
      <section className="container mx-auto py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="prose-content max-w-xl">
              <h2>Contact Us for Cigarette Machinery in Uzbekistan</h2>
              <p>
                Planning a new line or replacing a machine in Uzbekistan? Send us your cigarette
                format, target output and city, and we will reply with machine options, videos and a
                delivered price to your factory.
              </p>
              <p>
                Call or WhatsApp {siteConfig.phoneDisplay}, use the{" "}
                <Link href="/contact">contact page</Link>, or fill in the form below. Our workshop
                in SITE, Karachi is open Monday to Saturday, 9am to 6pm.
              </p>
            </div>
            <ContactButtons />
          </div>
          <div id="quote" className="scroll-mt-32 rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
            <h2 className="text-2xl">Get a Quote for Uzbekistan</h2>
            <div className="mt-6">
              <QuoteForm city="Uzbekistan" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

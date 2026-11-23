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

const HERO_ALT =
  "Hauni Protos 80 ER cigarette making machine supplied by Civic Tobacco Machinery to Tashkent, Uzbekistan";

function product(slug: string) {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Uzbekistan export page: unknown product slug "${slug}"`);
  return p;
}

/** A machine card: card title (H3), short text, and the schema ItemList name. */
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
    text: "High-speed cigarette maker for large factories, rated at up to 8,000 cigarettes per minute. Suited to high-volume king size production for local sale and export.",
    listName: "Hauni Protos 80 ER Cigarette Maker",
  },
  {
    slug: "protos-70",
    title: "Hauni Protos 70 Cigarette Making Machine",
    text: "High-volume cigarette making machine rated at up to 7,000 cigarettes per minute, for factories moving beyond Molins speeds.",
    listName: "Hauni Protos 70 Cigarette Maker",
  },
  {
    slug: "mark-8-post-64",
    title: "Molins Mark 8 Post 64 Cigarette Manufacturing Machine",
    text: "Proven starter maker with double colour printer, 1,800 to 2,000 cigarettes per minute. The usual first machine for a new factory.",
    listName: "Molins Mark 8 Post 64 Cigarette Maker",
  },
  {
    slug: "mark-9-5-lenze-servo-drives",
    title: "Molins Mark 9.5 Cigarette Making Machine",
    text: "Mid-speed maker with Lenze servo drives and Siemens PLC control, rated at up to 3,500 cigarettes per minute.",
    listName: "Molins Mark 9.5 with Lenze Servo Drives",
  },
];

const PACKERS: MachineCardData[] = [
  {
    slug: "hlp-225",
    title: "HLP-225 Cigarette Packing Machine",
    text: "Double plunger hard pack packer with full PLC control, 225 packs per minute. Pairs with high-speed makers.",
    listName: "HLP-225 Cigarette Packing Machine",
  },
  {
    slug: "hlp-200",
    title: "HLP-200 Cigarette Packing Machine",
    text: "Hard pack packer with PLC control for steady output at 200 packs per minute.",
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
    text: "High-speed soft pack cigarette packing machine for larger production lines.",
    listName: "SASIB 5000 Soft Pack Machine",
  },
  {
    slug: "sasib-3000",
    title: "SASIB 3000 Soft Pack Machine",
    text: "Soft pack cigarette packing machine with steady, consistent output for mid-size lines.",
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
    text: "Cellophane overwrapper that seals finished cigarette packs and cartons.",
    listName: "Naked Over Wrapper",
  },
  {
    slug: "molins-boxer",
    title: "Molins Boxer",
    text: "Cartoning machine that groups finished packs into cartons at line speed.",
    listName: "Molins Boxer",
  },
];

/** Market figures for the Tashkent industry section, each with its source. */
const MARKET = [
  {
    indicator: "Cigarette market revenue, 2025",
    figure: "About US$994 million",
    source: "Statista",
    url: "https://statista.com/outlook/cmo/tobacco-products/cigarettes/uzbekistan",
  },
  {
    indicator: "Cigarettes per person, 2025",
    figure: "About 566 a year",
    source: "Statista",
    url: "https://statista.com/outlook/cmo/tobacco-products/cigarettes/uzbekistan",
  },
  {
    indicator: "Market volume forecast, 2029",
    figure: "17.3 billion cigarettes",
    source: "Statista",
    url: "https://statista.com/outlook/cmo/tobacco-products/cigarettes/uzbekistan",
  },
  {
    indicator: "Cigarette volume growth, 2024",
    figure: "Strong year; illicit share falling from nearly a quarter of sales in 2023",
    source: "Euromonitor",
    url: "https://marketresearch.com/Euromonitor-International-v746/Tobacco-Uzbekistan-34523058",
  },
  {
    indicator: "Total tax on cigarettes",
    figure: "56.43% of retail price (specific excise 35.39%)",
    source: "GSTHR",
    url: "https://gsthr.org/countries/profile/uzb/cigarettes/",
  },
  {
    indicator: "Digital marking of cigarettes",
    figure: "Mandatory since 2021 (Asl Belgisi, Data Matrix)",
    source: "US Trade.gov",
    url: "https://www.trade.gov/country-commercial-guides/uzbekistan-labeling-and-marking-requirements",
  },
];

const SERVED_CITIES = [
  "Tashkent",
  "Samarkand",
  "Urgut",
  "Bukhara",
  "Navoi",
  "Andijan",
  "Fergana",
  "Namangan",
  "Termez",
];

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
  const uzbekistan = { "@type": "Country", name: "Uzbekistan" };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: country.metaTitle,
        description: country.metaDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${PAGE_URL}#service` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#machines` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: abs(product("protos-80-er").image ?? ""),
          caption: HERO_ALT,
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Cigarette and tobacco machinery supplier for Tashkent and Uzbekistan",
        serviceType: "Tobacco machinery supplier",
        description:
          "Supply, road freight, installation, training and spare parts for new and reconditioned cigarette making, packing, wrapping and filter machines for cigarette factories in Tashkent and across Uzbekistan.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [
          uzbekistan,
          ...SERVED_CITIES.map((name) => ({ "@type": "City", name, containedInPlace: uzbekistan })),
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
        name: "Cigarette machines supplied to Tashkent and Uzbekistan",
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

/** Link to a source on another site. */
function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
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
    <div className="prose-content max-w-none rounded-xl border border-brand-100 bg-white p-5 shadow-card">
      <h3 className="!mt-0 !text-base font-semibold text-brand-900">{title}</h3>
      <p className="!mb-0 mt-2 text-sm leading-relaxed text-brand-600">{children}</p>
    </div>
  );
}

/**
 * Uzbekistan's bespoke export page, built to the client's Tashkent content
 * brief (section order, copy, H2/H3 levels and the single @graph schema
 * block). Every other country keeps the shared template.
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
              alt={HERO_ALT}
              aspect="aspect-[655/330]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Featured cigarette making machines */}
      <section className="container mx-auto py-14">
        <p className="mx-auto max-w-2xl text-center text-lg text-brand-700">
          Cigarette machines for Tashkent and Uzbekistan, new or reconditioned, installed at your
          factory.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MAKERS.map((c) => (
            <MachineCard key={c.slug} card={c} />
          ))}
        </div>
      </section>

      {/* 3. Intro */}
      <section className="border-t border-brand-100 bg-brand-50 py-14">
        <div className="prose-content container mx-auto max-w-3xl">
          <h2>Tobacco Machinery Supplier in Tashkent, Uzbekistan</h2>
          <h3>Cigarette Machinery Supplier for Uzbekistan&rsquo;s Growing Cigarette Industry</h3>
          <p>
            Civic Tobacco Machinery is a tobacco machinery supplier serving cigarette manufacturers
            in Tashkent and across Uzbekistan. Since 1990 we have supplied new and reconditioned
            cigarette machinery from our workshop in SITE, Karachi: Molins and Hauni cigarette
            makers, HLP and SASIB packing machines, overwrappers, boxers, filter makers, tobacco
            feeders and reclaimers. We ship by road to Tashkent, install every machine at your
            factory and train your team to run it.
          </p>
          <p>
            Our customers range from established producers adding a second line to new companies
            building their first cigarette factory. What they have in common is a need for proven
            tobacco machinery at a realistic price, backed by a supplier who answers the phone,
            ships spare parts quickly and sends a technician when one is needed. If you are
            planning a new plant, our guide on{" "}
            <Link href="/blog/how-to-choose-the-right-cigarette-making-machine">
              how to choose the right cigarette making machine
            </Link>{" "}
            explains where to start.
          </p>
        </div>
        <div className="container mx-auto max-w-3xl">
          <ContactButtons quote />
        </div>
      </section>

      {/* 4. Packing and wrapping machines */}
      <section className="container mx-auto py-14">
        <p className="mx-auto max-w-2xl text-center text-lg text-brand-700">
          Tobacco machines for packing, overwrapping and cartoning, matched to the speed of your
          cigarette maker and ready for Data Matrix coding.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKERS.map((c) => (
            <MachineCard key={c.slug} card={c} />
          ))}
        </div>
      </section>

      <section className="border-t border-brand-100 bg-brand-50 py-14">
        <div className="container mx-auto">
          {/* 5. Tashkent tobacco industry and cities */}
          <div className="prose-content mx-auto max-w-3xl">
            <h2>We Are a Tobacco Machinery Supplier in Tashkent and Across Uzbekistan</h2>
            <p>
              Uzbekistan is one of the most important cigarette markets in Central Asia, and
              Tashkent sits at its centre. Understanding the market helps explain why demand for
              reliable cigarette machinery keeps growing.
            </p>

            <h3>Tashkent&rsquo;s Cigarette and Tobacco Industry</h3>
            <p>
              Cigarette making in Tashkent has deep roots. In the 1990s British American Tobacco
              bought into the state tobacco company, formed the UzBAT joint venture and invested in
              upgrading its Tashkent cigarette factory (
              <Ext href="https://www.themoscowtimes.com/archive/bat-will-go-ahead-with-uzbekistan-plant">
                The Moscow Times
              </Ext>
              ). BAT Uzbekistan remains the largest producer today, with US$95 million of exports
              and ongoing plans to modernize its production lines and launch new products for
              domestic and export markets (
              <Ext href="https://trend.az/business/4183878.html">Trend, May 2026</Ext>).
            </p>
            <p>
              International brands are also made locally. Tashkent Tobacco, a Tashkent cigarette
              manufacturer registered in 2005, began licensed production of Marlboro, Parliament
              and L&amp;M with Philip Morris International in December 2019, planning 500 million
              cigarettes in its first year (
              <Ext href="https://en.trend.az/business/economy/3161813.html">Trend</Ext>).
              Alongside these companies, a group of independent and mid-size factories produce
              local brands for the Uzbek market and for neighbouring countries.
            </p>

            <div className="prose-table-wrap">
              <table>
                <caption className="sr-only">Uzbekistan cigarette market at a glance</caption>
                <thead>
                  <tr>
                    <th scope="col">Indicator</th>
                    <th scope="col">Figure</th>
                    <th scope="col">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {MARKET.map((m) => (
                    <tr key={m.indicator}>
                      <th scope="row" className="font-medium text-brand-900">
                        {m.indicator}
                      </th>
                      <td>{m.figure}</td>
                      <td>
                        <Ext href={m.url}>{m.source}</Ext>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              For a cigarette factory, these figures point in one direction: a large, legal and
              increasingly regulated market, where every pack must be correctly made, coded and
              traced. That rewards factories with dependable machines and consistent quality, and
              it is why buyers in Tashkent look for a cigarette machinery supplier that can deliver
              both output and reliability.
            </p>

            <h3>Tobacco Machinery in Tashkent</h3>
            <p>
              Most of our enquiries from Uzbekistan start in Tashkent, the country&rsquo;s centre
              of industry and trade. Road freight from Karachi ends in Tashkent, so machines for
              factories in the city and the Tashkent region arrive first and can be installed soon
              after customs clearance. For Tashkent buyers we offer:
            </p>
            <ul>
              <li>
                Complete cigarette lines or single tobacco machines, delivered to your factory in
                Tashkent or the Tashkent region.
              </li>
              <li>On-site installation, commissioning and operator training at your factory.</li>
              <li>
                Spare parts for Molins, Hauni, HLP and SASIB machines, sent from Karachi by road or
                air.
              </li>
              <li>A live video call before you order, to see the machine running in our workshop.</li>
            </ul>

            <h3>Other Cities We Supply in Uzbekistan</h3>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Point title="Samarkand and Urgut">
              Long-standing tobacco manufacturing and fermentation centres (
              <Ext href="https://www.trend.az/business/economy/2997584.html">Trend</Ext>).
            </Point>
            <Point title="Bukhara and Navoi">
              Growing industrial zones in the centre and west of the country.
            </Point>
            <Point title="Andijan, Fergana and Namangan">
              The Fergana Valley, with easy reach into Kyrgyzstan and Tajikistan.
            </Point>
            <Point title="Termez and the south">
              The border crossing on the Trans-Afghan road route from Pakistan.
            </Point>
          </div>
          <p className="prose-content mx-auto mt-6 max-w-3xl">
            Tell us your city and target output, and we will recommend a line that fits your floor
            space, power supply and budget.
          </p>

          {/* 6. Formats and digital marking */}
          <div className="prose-content mx-auto mt-14 max-w-3xl">
            <h2>Tobacco Machinery for King Size, Slim and Filter Cigarettes</h2>
            <p>
              Cigarette brands in Uzbekistan run king size, slim and super slim filter cigarettes,
              often on the same line. Our Molins and Hauni makers handle circumferences from 17 mm
              to 28.3 mm and lengths from 65 mm to 110 mm with format change parts, and our HLP
              packers run all three pack formats. Changing format means changing parts, not
              machines, so one line can serve several brands. To compare makers by speed, see{" "}
              <Link href="/blog/molins-mark-8-vs-mark-9">Molins Mark 8 vs Mark 9</Link> and{" "}
              <Link href="/blog/molins-mark-8-post-64-vs-mark-8d-max-15">
                Mark 8 Post 64 vs Mark 8D MAX 15
              </Link>
              , or the <Link href="/cigarette-manufacturing-machines/protos-70">Hauni Protos 70</Link>{" "}
              and <Link href="/cigarette-manufacturing-machines/protos-80-er">Protos 80 ER</Link>{" "}
              pages for high-speed lines.
            </p>
            <p>
              For filter production we supply{" "}
              <Link href="/cigarette-filter-making-machines">
                Hauni KDF-1, KDF-2 and Molins PM-5 filter making machines
              </Link>
              , so you can make your own filter rods instead of importing them. For hollow filters,
              see{" "}
              <Link href="/blog/what-does-a-hollow-tube-maker-do">
                what a hollow tube maker does
              </Link>
              .
            </p>

            <h3>Asl Belgisi Digital Marking and Your Packing Line</h3>
            <p>
              Uzbekistan requires digital marking on cigarettes. Manufacturers and importers apply
              a Data Matrix code to each pack and register it in the national Asl Belgisi system,
              operated by CRPT Turon (
              <Ext href="https://gov.uz/ru/soliq/news/view/93824">State Tax Committee</Ext>), and
              the import of unmarked tobacco products has been prohibited since March 2021 (
              <Ext href="https://kun.uz/en/news/2020/11/25/uzbekistan-approves-a-list-of-products-subject-to-mandatory-digital-labeling">
                Kun.uz
              </Ext>
              ).
            </p>
            <p>
              For a factory, this means the packing line must leave room to apply and verify the
              code after packing and before overwrapping, at the full speed of the packer. When we
              plan a line for Uzbekistan, we size the gap between the{" "}
              <Link href="/cigarette-packing-machines">HLP packing machine</Link> and the{" "}
              <Link href="/cigarette-box-wrapping-machines/regular-wrapper-cp1">CP1 overwrapper</Link>{" "}
              for the coding and inspection equipment your marking provider specifies. Our{" "}
              <Link href="/blog/hlp-180-vs-hlp-200-vs-hlp-225">
                HLP-180 vs HLP-200 vs HLP-225 comparison
              </Link>{" "}
              shows the pack speeds the coding system must match.
            </p>
          </div>

          {/* 7. Spare parts and support */}
          <div className="mt-14">
            <div className="prose-content mx-auto max-w-3xl">
              <h2>Customized Cigarette Machinery and Spare Parts for Uzbekistan</h2>
              <p>
                A cigarette line is only as reliable as the support behind it. With every machine
                we supply to Tashkent or anywhere in Uzbekistan:
              </p>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Point title="Spare parts supply">
                Garniture tapes, tongues, knives, suction tapes, belts and bearings for Molins,
                Hauni, HLP and SASIB machines, shipped from Karachi.
              </Point>
              <Point title="Format and line engineering">
                Format parts, speed matching between maker, packer and wrapper, and layout advice
                for your building, including space for Data Matrix coding.
              </Point>
              <Point title="Tobacco preparation and recovery">
                <Link href="/cutter-feeder-reclaimer/tobacco-feeder">Tobacco feeders</Link>,{" "}
                <Link href="/cutter-feeder-reclaimer/tobacco-cutters">cutters</Link> and{" "}
                <Link href="/cutter-feeder-reclaimer/cigarette-reclaimer">cigarette reclaimers</Link>{" "}
                that keep rod weight steady and recover tobacco from rejects (see{" "}
                <Link href="/blog/what-does-a-tobacco-feeder-do">what a tobacco feeder does</Link>
                ).
              </Point>
              <Point title="Installation, training and remote support">
                On-site installation and commissioning, operator and mechanic training, then support
                by WhatsApp and video call.
              </Point>
            </div>
            <p className="prose-content mx-auto mt-6 max-w-3xl">
              Our reconditioned tobacco machines are stripped, rebuilt with new wear parts and
              test-run before shipping, so you get a dependable machine at a fraction of the price
              of a new one. Our guide to{" "}
              <Link href="/blog/how-to-choose-a-cigarette-machinery-supplier-for-reconditioned-equipment">
                choosing a supplier for reconditioned cigarette machinery
              </Link>{" "}
              explains what a proper rebuild should include.
            </p>
          </div>

          {/* 8. Why choose us */}
          <div className="mt-14">
            <div className="prose-content mx-auto max-w-3xl">
              <h2>Why Choose Civic for Cigarette Machinery in Uzbekistan?</h2>
              <p>
                Choosing a cigarette machinery supplier is a long-term decision: the machines will
                run for years, and you will need parts and advice long after delivery. Civic
                Tobacco Machinery has supplied and serviced cigarette lines since 1990 from SITE,
                Karachi (<Link href="/about">about us</Link>).
              </p>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Point title="Industry knowledge">
                More than 35 years with Molins, Hauni, HLP and SASIB machines.
              </Point>
              <Point title="Complete lines from one supplier">
                Feeding, making, filter, packing, wrapping and cartoning, matched to each other.
              </Point>
              <Point title="Flexible options">
                New or reconditioned machines, single machines or full lines, sized to your budget.
              </Point>
              <Point title="Ready for Uzbek regulations">
                Lines planned with space for Asl Belgisi Data Matrix coding.
              </Point>
              <Point title="A direct road route to Tashkent">
                Road freight from Karachi, with export documents prepared by us (
                <Ext href="https://thediplomat.com/2025/03/uzbekistan-pakistan-expanding-trade-amid-connectivity-challenges">
                  The Diplomat
                </Ext>{" "}
                on the Trans-Afghan route).
              </Point>
              <Point title="Test-run before shipping">
                Every machine runs in our workshop and you see the video before it leaves.
              </Point>
            </div>
            <p className="prose-content mx-auto mt-6 max-w-3xl">
              We have shipped cigarette machinery across Asia and beyond; the process we follow for
              Uzbekistan is the same one described in{" "}
              <Link href="/blog/importing-cigarette-machinery-from-pakistan-to-indonesia">
                importing cigarette machinery from Pakistan to Indonesia
              </Link>
              , adapted for road freight.
            </p>
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
          <h2>High-Quality Tobacco Machinery for Tashkent and Uzbekistan</h2>
          <p>
            Whether you are setting up a new cigarette factory in Tashkent or upgrading a line
            elsewhere in Uzbekistan, we supply the tobacco machines you need, matched to your output
            and format. Not sure where to start? Read{" "}
            <Link href="/blog/how-to-choose-the-right-cigarette-making-machine">
              how to choose the right cigarette making machine
            </Link>
            .
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
              <Link href="/cigarette-filter-making-machines">Cigarette Filter Making Machines</Link>:
              Hauni KDF-1, KDF-2, Molins PM-5 and hollow tube makers.
            </li>
            <li>
              <Link href="/cigarette-box-wrapping-machines">Cigarette Box Wrapping Machines</Link>:
              CP1 and naked overwrappers, Molins and SASIB boxers.
            </li>
            <li>
              <Link href="/cutter-feeder-reclaimer">Cutters, Feeders &amp; Reclaimers</Link>:
              tobacco cutters, feeders, reclaimers and stem flatteners.
            </li>
          </ul>
        </div>
      </section>

      {/* 11. Contact + 12. Quote form */}
      <section className="container mx-auto py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="prose-content max-w-xl">
              <h2>Contact Us for Cigarette Machinery in Tashkent</h2>
              <p>
                Planning a new line or replacing a machine in Tashkent or elsewhere in Uzbekistan?
                Send us your cigarette format, target output, city and whether you need a single
                machine or a complete line. We reply with machine options, test videos and a
                delivered price to your factory.
              </p>
              <p>
                Call or WhatsApp {siteConfig.phoneDisplay}, use the{" "}
                <Link href="/contact">contact page</Link>, or fill in the quote form. Our workshop
                in SITE, Karachi is open Monday to Saturday, 9am to 6pm. Civic Tobacco Machinery:
                your <Link href="/">cigarette and tobacco machinery supplier</Link> for Uzbekistan
                since 1990.
              </p>
            </div>
            <ContactButtons />
          </div>
          <div
            id="quote"
            className="scroll-mt-32 rounded-2xl border border-brand-100 bg-white p-6 shadow-card"
          >
            <h2 className="text-2xl">Get a Quote for Tashkent and Uzbekistan</h2>
            <div className="mt-6">
              <QuoteForm city="Tashkent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

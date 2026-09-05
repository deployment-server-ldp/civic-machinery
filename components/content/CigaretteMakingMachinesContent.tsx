import Link from "next/link";

const stages: {
  title: string;
  body: string;
  points: string[];
}[] = [
  {
    title: "Stage 1: Tobacco Feeding, Cutting & Reclaiming",
    body: "Before a rod is ever formed, tobacco has to be cut to size and fed to the maker at a steady, unbroken rate, while material lost to rejects is recovered rather than wasted.",
    points: [
      "Cutters, such as the Hauni KT-400, size tobacco leaf and stem for production",
      "Feeders keep the maker supplied with cut tobacco at a constant rate",
      "Reclaimers recover usable tobacco from rejected cigarettes",
    ],
  },
  {
    title: "Stage 2: The Maker",
    body: "This is the core of the line. The maker wraps cut tobacco in a continuous strip of paper to form a rod, attaches a filter, and cuts the rod into individual cigarettes at very high speed.",
    points: [
      "Rod-forming units wrap tobacco in paper to build a continuous rod",
      "Filter attachments join a filter to each rod as it forms",
      "Cutting units slice the rod into precise cigarette lengths",
      "Molins Mark 8, Mark 9, Mark 9.5 and Hauni Protos makers run from roughly 3,000 up to 8,000 cigarettes a minute",
    ],
  },
  {
    title: "Stage 3: Filter Making & Assembly",
    body: "A cigarette is not finished without a filter, produced on a dedicated line that has to keep pace with the maker it feeds.",
    points: [
      "Filter rod makers form cellulose acetate tow into filter rod",
      "Tipping paper wraps the joint between the tobacco rod and the filter",
      "Filter and cigarette makers are matched so the two run in step",
    ],
  },
  {
    title: "Stage 4: Packing",
    body: "Once cigarettes leave the maker, they are counted and formed into a finished, retail-ready pack.",
    points: [
      "Hard pack machines (HLP-style) form rigid hinge-lid boxes",
      "Soft pack machines (SASIB-style) form folded, foil-wrapped packs",
      "Most lines handle several sizes, from King Size down to Nano",
    ],
  },
  {
    title: "Stage 5: Wrapping & Boxing",
    body: "Finished packs are over-wrapped for a clean seal and shelf presentation, then grouped into cartons ready for shipping.",
    points: [
      "Over-wrappers seal each pack in film with a tear tape",
      "Boxers group a fixed number of packs into outer cartons",
      "This stage protects the pack and readies it for distribution",
    ],
  },
  {
    title: "Stage 6: Labelling & Coding",
    body: "Before a carton leaves the factory, it has to carry accurate product and regulatory information.",
    points: [
      "Labels carry product, batch and market information",
      "Coding prints batch numbers and dates for traceability",
      "Accurate coding keeps output compliant with local regulations",
    ],
  },
  {
    title: "Stage 7: Quality Control",
    body: "Checks run throughout the line rather than only at the end, so problems are caught before they turn into wasted stock.",
    points: [
      "Rod density and dimensions are checked against target specification",
      "Reject handling removes faulty cigarettes automatically",
      "Consistent checks protect both output and brand reputation",
    ],
  },
];

const supplyLinks: Record<string, string> = {
  "Stage 1: Tobacco Feeding, Cutting & Reclaiming": "/cutter-feeder-reclaimer",
  "Stage 3: Filter Making & Assembly": "/cigarette-filter-making-machines",
  "Stage 4: Packing": "/cigarette-packing-machines",
  "Stage 5: Wrapping & Boxing": "/cigarette-box-wrapping-machines",
};

/** Long-form, two-column guide content for the cigarette manufacturing (making machines) page. */
export default function CigaretteMakingMachinesContent() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Row 1: manufacturer positioning + condition options */}
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>Cigarette Making Machine Manufacturing in Pakistan</h2>
          <p>
            Civic Tobacco Machinery has supplied and supported cigarette
            making machines from the SITE industrial estate in Karachi since
            1998, working with factories across Pakistan and export markets
            beyond it. Every maker we sell, Molins or Hauni Protos, is set up,
            tested and handed over ready to hold its rod density and speed
            from the first shift, not just on the day of the demo.
          </p>
          <p>
            Supplying the machine is only part of the job. Our team handles
            installation and commissioning on your own floor, so a maker
            arrives ready to run rather than left for your operators to work
            out on their own, and we stay reachable afterwards for parts and
            service.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h2>New, Used &amp; Reconditioned Cigarette Making Machines</h2>
          <p>
            Every factory&rsquo;s starting point is different, so we do not
            push the same machine on everyone. Tell us your target output and
            the brands you already run, and we will point you to a maker that
            actually fits your line, whether that is a Molins Mark 8 for a
            modest run or a faster Mark 9.5 or Protos for high-volume
            production.
          </p>
          <p>
            New, used and reconditioned machines are all genuinely available,
            priced for different budgets, and every reconditioned unit is
            inspected, serviced and tested before it leaves us. Our engineers
            stay involved through setup, so the machine you buy performs the
            way it was described to you.
          </p>
        </div>
      </div>

      {/* Row 2: the guide intro + definition */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>Cigarette Making Machines: A Complete Guide</h2>
          <p>
            This guide covers what a cigarette making machine actually does,
            how it fits into the rest of the production line, and what
            matters when you are choosing one, whether you are buying your
            first maker or adding capacity to an existing floor.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h3>What Is a Cigarette Making Machine?</h3>
          <p>
            A cigarette making machine, usually just called &ldquo;the
            maker,&rdquo; feeds cut tobacco onto a continuous strip of paper,
            forms it into a rod, attaches a filter and cuts the rod into
            individual cigarettes at very high speed. Models differ mainly in
            how fast, and how evenly, they can hold that rod density as speed
            increases.
          </p>
        </div>
      </div>

      {/* Centered production-line heading */}
      <div className="prose-content mx-auto mt-16 max-w-2xl text-center">
        <h3>The Complete Cigarette Production Line</h3>
        <p>
          A cigarette factory moves tobacco through a series of connected
          stages, and the maker is only one link in that chain. Here is how
          the process flows from raw leaf to a finished, retail-ready
          cigarette, and where our own machines fit into it.
        </p>
      </div>

      {/* Stage cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {stages.map((s) => {
          const href = supplyLinks[s.title];
          return (
            <div
              key={s.title}
              className="prose-content max-w-none rounded-2xl border border-brand-100 bg-brand-50/50 p-6"
            >
              <h3 className="!mt-0">{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {href && (
                <p className="!mb-0 text-sm">
                  <Link href={href}>See the machines we supply for this stage →</Link>
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Scale + automation */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h3>Choosing a Maker by Production Scale</h3>
          <p>
            We supply makers suited to different production scales, from a
            single Molins Mark 8 line to faster Mark 9.5 and Hauni Protos
            setups for high-volume factories.
          </p>
          <ul>
            <li>Entry-level lines for smaller or first-time factories</li>
            <li>Mid-speed makers for established, growing operations</li>
            <li>High-speed Protos and Mark 9.5 lines for large-scale production</li>
          </ul>
        </div>

        <div className="prose-content max-w-none">
          <h3>Why Factories Automate Their Making Line</h3>
          <p>
            A modern making machine gives a factory a real production
            advantage over manual handling or older equipment.
          </p>
          <ul>
            <li>Higher, more consistent output across every shift</li>
            <li>Even rod density and filtration from the first cigarette to the last</li>
            <li>Lower labour cost per cigarette produced</li>
            <li>Flexibility to run standard, slim or super slim formats on the same line</li>
          </ul>
        </div>
      </div>

      {/* Supplier checklist + install/support */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h3>How to Choose a Cigarette Making Machine Supplier</h3>
          <p>Before you commit to a maker, it is worth checking:</p>
          <ul>
            <li>Does its rated speed actually match your target output, with room to grow?</li>
            <li>Can the supplier source spare parts for that specific brand and model?</li>
            <li>Is installation, commissioning and operator handover included?</li>
            <li>Will they help pair the maker with a filter line that runs at the same speed?</li>
            <li>Is after-sale technical support available once the machine is running?</li>
          </ul>
        </div>

        <div className="prose-content max-w-none">
          <h3>Installation, Commissioning &amp; After-Sale Support</h3>
          <p>
            Buying the machine is only the first step. Our team supports
            onsite installation and commissioning so your line runs correctly
            from day one, and we stay involved afterwards with spare parts
            and technical support, so downtime stays minimal once you are in
            production.
          </p>
        </div>
      </div>

      {/* Export */}
      <div className="prose-content mt-14 max-w-none">
        <h3>Exporting Cigarette Making Machines Beyond Pakistan</h3>
        <p>
          Most of our makers go to factories across Pakistan, but we also
          export equipment to markets including Bangladesh, Turkey,
          Indonesia, Poland, Bulgaria and beyond. See our{" "}
          <Link href="/export-to">export destinations</Link> for more on how
          we ship and support machinery outside Pakistan.
        </p>
      </div>
    </div>
  );
}

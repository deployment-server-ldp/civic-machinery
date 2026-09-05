import Link from "next/link";

const components: {
  title: string;
  body: string;
}[] = [
  {
    title: "1. Rod-Forming Unit",
    body: "Cut tobacco is combined with cigarette paper to build a continuous rod. Precision rollers keep density and diameter consistent from the first stick of a shift to the last.",
  },
  {
    title: "2. Filter Attachment Unit",
    body: "A filter is aligned and bonded to each rod as it forms, so draw and firmness stay even across the whole run rather than drifting stick to stick.",
  },
  {
    title: "3. Cutting Unit",
    body: "High-speed rotary cutters slice the combined tobacco-and-filter rod into individual cigarettes at exact, repeatable lengths.",
  },
  {
    title: "4. Tipping & Wrapping Unit",
    body: "Tipping paper wraps the join between the tobacco rod and the filter, finishing the cigarette's appearance and sealing the joint.",
  },
  {
    title: "5. Inspection & Reject Handling",
    body: "Sensors and gauges monitor rod density and dimensions in real time, and reject handling removes anything outside specification before it reaches packing.",
  },
];

/** Long-form, two-column guide content for the cigarette manufacturing (making machines) page. */
export default function CigaretteMakingMachinesContent() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Row 1: positioning + range */}
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>Advanced Cigarette Making Solutions from Civic Tobacco Machinery</h2>
          <p>
            Civic Tobacco Machinery builds its cigarette manufacturing supply
            around one goal: precision that holds up at speed. Our cigarette
            making machines pair proven rod-forming, filter-attachment,
            cutting and tipping systems, built to run continuously without
            drifting off spec over a full shift. Whatever format your brands
            need, King Size, Slim, Super Slim or Nano, our Molins and Hauni
            Protos lines are matched to your production targets rather than
            sold off the shelf.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h2>Explore Our Range of Cigarette Manufacturing Machines</h2>
          <p>
            Cigarette manufacturing is a tightly automated process, and no
            single machine works in isolation. Alongside our making machines,
            we supply the tobacco feeders, filter makers, packers and
            wrapping lines that a complete cigarette production line depends
            on, so a factory can build or expand its floor through one
            supplier instead of chasing parts and support from several.
          </p>
        </div>
      </div>

      {/* Definition */}
      <div className="prose-content mt-14 max-w-3xl">
        <h2>What Are Cigarette Manufacturing Machines?</h2>
        <p>
          Cigarette manufacturing machines are the industrial systems that
          turn processed tobacco into finished cigarette rods, automating
          tobacco feeding, rod formation, filter assembly and cutting into
          one continuous, high-speed operation. Running them well keeps
          output uniform, rod density, filtration and cut length alike, while
          cutting the manual labour a factory would otherwise need at every
          stage.
        </p>
      </div>

      {/* Components grid */}
      <div className="prose-content mt-14 max-w-none">
        <h2>Main Components of a Cigarette Making Machine</h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {components.map((c) => (
          <div
            key={c.title}
            className="prose-content max-w-none rounded-2xl border border-brand-100 bg-brand-50/50 p-6"
          >
            <h3 className="!mt-0">{c.title}</h3>
            <p className="!mb-0">{c.body}</p>
          </div>
        ))}
      </div>

      {/* High-speed + benefits */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>High-Speed Cigarette Manufacturing Machines</h2>
          <p>
            Our faster lines, the Molins Mark 9.5 and Hauni Protos makers,
            are built for factories measuring output in thousands of
            cigarettes a minute rather than hundreds. PLC-based control keeps
            speed and rod quality steady across a full shift, with far less
            manual adjustment than older mechanical lines need.
          </p>
          <ul>
            <li>Higher sustained output per shift</li>
            <li>Lower labour and maintenance cost per cigarette</li>
            <li>Consistent rod density and filtration at speed</li>
            <li>
              Straightforward integration with a downstream{" "}
              <Link href="/cigarette-packing-machines">packing line</Link> so
              the maker does not become the bottleneck
            </li>
          </ul>
        </div>

        <div className="prose-content max-w-none">
          <h2>Benefits of Industrial Cigarette Making Equipment</h2>
          <ul>
            <li>
              <strong>Efficiency &amp; speed</strong> — automation keeps
              output high without adding shifts or headcount
            </li>
            <li>
              <strong>Consistency</strong> — uniform rod density, length and
              filtration across the full run
            </li>
            <li>
              <strong>Cost reduction</strong> — less tobacco waste and lower
              labour cost per finished cigarette
            </li>
            <li>
              <strong>Scalability</strong> — add capacity with another line
              rather than rebuilding the floor
            </li>
            <li>
              <strong>Long-term reliability</strong> — well-supported brands
              keep parts and service available for years, not just for the
              warranty period
            </li>
          </ul>
        </div>
      </div>

      {/* Condition options + why choose us */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>New, Used &amp; Reconditioned Cigarette Manufacturing Machines</h2>
          <p>
            Not every factory needs, or can justify, a brand-new line on day
            one. We supply new, used and reconditioned cigarette making
            machines side by side, and every reconditioned unit is inspected,
            serviced and tested by our own team before it goes anywhere near
            your floor.
          </p>
          <ul>
            <li>Lower upfront investment than a new line</li>
            <li>Faster setup for factories starting or expanding quickly</li>
            <li>Performance tested before handover, not sold as-is</li>
            <li>Ongoing spares and technical support included</li>
          </ul>
        </div>

        <div className="prose-content max-w-none">
          <h2>Why Choose Civic Tobacco Machinery</h2>
          <p>
            Civic Tobacco Machinery has supplied and supported cigarette
            manufacturing equipment from Karachi&rsquo;s SITE industrial
            estate since 1998, working with factories across Pakistan and
            export markets beyond it. Our own team handles technical
            consultation, installation and after-sales support directly, so
            you are dealing with people who know the machine, not a call
            centre.
          </p>
          <p>
            We also supply the complementary machinery a full production line
            depends on:
          </p>
          <ul>
            <li>
              <Link href="/cigarette-filter-making-machines">
                Cigarette filter making machines
              </Link>
            </li>
            <li>
              <Link href="/cutter-feeder-reclaimer">
                Tobacco feeders, cutters &amp; reclaimers
              </Link>
            </li>
            <li>
              <Link href="/cigarette-packing-machines">
                Cigarette packing machines
              </Link>
            </li>
            <li>
              <Link href="/cigarette-box-wrapping-machines">
                Cigarette wrapping &amp; box packing machines
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const units: {
  name: string;
  href: string;
  blurb: string;
}[] = [
  {
    name: "HLP-225 Cigarette Packing Machine",
    href: "/cigarette-packing-machines/hlp-225",
    blurb:
      "Our fastest hard pack line, a double plunger machine built for 225 packs a minute without giving up finish quality.",
  },
  {
    name: "HLP-200 Cigarette Packing Machine",
    href: "/cigarette-packing-machines/hlp-200",
    blurb:
      "A double plunger core unit running 200 packs a minute, built as the dependable centre of an integrated packing line.",
  },
  {
    name: "SASIB 3000 Soft Pack Machine",
    href: "/cigarette-packing-machines/sasib-3000",
    blurb:
      "A soft pack machine handling both 84mm and 100mm formats, finishing every pack with SASIB's signature squared corners.",
  },
];

/** Long-form, two-column guide content for the cigarette packing machines page. */
export default function CigarettePackingMachinesContent() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Row 1: positioning + automation */}
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>High-Performance Cigarette Packing Machinery</h2>
          <p>
            Civic Tobacco Machinery supplies cigarette packing machines built
            for precision, speed and repeatability. These machines carry a
            counted batch of cigarettes through forming, folding and sealing
            in one continuous cycle, so every pack that leaves the line looks
            and feels the same as the one before it. Whether your brands run
            King Size, Slim, Super Slim or Nano formats, our hard pack and
            soft pack lines are built to hold that consistency at speed
            rather than trade it off for output.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h2>Automated Efficiency in Cigarette Packaging</h2>
          <p>
            Moving to an automatic packer changes what a packing floor looks
            like day to day. PLC control keeps every cycle on spec, so
            plunger movement, fold timing and seal pressure stay consistent
            across a full shift rather than drifting as an operator tires.
            The result is fewer rejects, less material wasted on correction,
            and a pack that holds its shape and seal from the line to the
            shelf.
          </p>
          <p>
            Packing is only one stage of a working line. See our{" "}
            <Link href="/cigarette-manufacturing-machines">
              cigarette making machines
            </Link>{" "}
            and{" "}
            <Link href="/cigarette-box-wrapping-machines">
              wrapping &amp; box packing machines
            </Link>{" "}
            for the stages either side of it.
          </p>
        </div>
      </div>

      {/* Why choose us */}
      <div className="prose-content mt-14 max-w-3xl">
        <h2>Why Choose Civic Tobacco Machinery</h2>
        <p>
          We work with factories at every stage, from a first packing line to
          a floor being expanded with a second or third unit, and we size the
          machine to the job rather than the other way round. That means:
        </p>
        <ul>
          <li>Recommendations matched to your actual output target and pack format, not a one-size sales pitch</li>
          <li>High-speed machines running modern PLC control rather than dated mechanical systems</li>
          <li>Installation, commissioning and operator handover included, not left to figure out on site</li>
          <li>Spare parts and technical support you can call on long after the sale</li>
        </ul>
      </div>

      {/* Format flexibility + hard vs soft */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>Cigarette Box Packing Machines for Modern Production</h2>
          <p>
            Pack presentation is part of how a brand competes on the shelf, so
            our hard pack machines are built to handle round corner, bevel
            edge, D-type and square formats without swapping to a different
            machine. That flexibility lets a single line serve more than one
            brand or format as your product range grows.
          </p>
          <ul>
            <li>PLC-controlled automation for precise, repeatable cycles</li>
            <li>Multi-format compatibility across cigarette sizes and pack shapes</li>
            <li>Durable mechanical builds designed for continuous, shift-after-shift running</li>
            <li>Low maintenance demands, with parts and service readily available</li>
          </ul>
        </div>

        <div className="prose-content max-w-none">
          <h2>Hard Pack vs. Soft Pack Packing Machines</h2>
          <p>
            Hard pack and soft pack cigarettes are built on genuinely
            different machines, not just a different setting on the same
            line. Our HLP-series machines form the rigid, hinge-lid hard pack
            using a plunger mechanism, single or double depending on the
            model, while our SASIB soft packers wrap and fold cigarettes into
            a flexible pack finished with alufoil and label wrapping around
            an arbour for neat, squared corners.
          </p>
          <p>
            Picking between them comes down to which format your brands
            actually sell, or whether you need both running side by side.
          </p>
        </div>
      </div>

      {/* Featured units */}
      <div className="prose-content mt-14 max-w-none">
        <h2>Featured Cigarette Packing Machines</h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {units.map((u) => (
          <div
            key={u.href}
            className="prose-content max-w-none rounded-2xl border border-brand-100 bg-brand-50/50 p-6"
          >
            <h3 className="!mt-0">
              <Link href={u.href}>{u.name}</Link>
            </h3>
            <p className="!mb-0">{u.blurb}</p>
          </div>
        ))}
      </div>

      {/* Integrated line */}
      <div className="prose-content mt-14 max-w-3xl">
        <h2>An Integrated Cigarette Production Line</h2>
        <p>
          A packing machine performs best when it is not working in
          isolation. We help factories build a matched line end to end:
        </p>
        <ul>
          <li>
            <Link href="/cigarette-manufacturing-machines">
              Cigarette making machines
            </Link>{" "}
            for rod formation and filter attachment upstream of packing
          </li>
          <li>
            <Link href="/cigarette-filter-making-machines">
              Cigarette filter making machines
            </Link>{" "}
            supplying the filter rod the maker attaches
          </li>
          <li>
            <Link href="/cigarette-box-wrapping-machines">
              Wrapping &amp; box packing machines
            </Link>{" "}
            to finish and carton the pack once it leaves this stage
          </li>
        </ul>
        <p>
          Sourcing the whole line through one supplier keeps speeds matched
          stage to stage and puts spares and technical support for every
          machine behind a single call.
        </p>
      </div>
    </div>
  );
}

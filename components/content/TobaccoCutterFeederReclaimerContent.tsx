import Link from "next/link";

/** Guide content for the tobacco cutter, feeder & reclaimer machines page. */
export default function TobaccoCutterFeederReclaimerContent() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Row 1 */}
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>What Do Cutter, Feeder &amp; Reclaimer Machines Actually Do?</h2>
          <p>
            Unlike a maker, filter machine, packer, or wrapper, the equipment
            on this page doesn&rsquo;t form any part of the finished
            cigarette itself. These machines sit at the edges of the
            production line, preparing raw tobacco before it ever reaches
            the maker, and recovering usable material afterward from
            anything that doesn&rsquo;t make it into a finished pack. None
            of it appears in the product a customer holds, but all of it
            affects how efficiently and consistently the rest of your line
            runs.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h2>Preparing Tobacco Before It Reaches the Maker</h2>
          <p>
            Tobacco has to be cut to size and conditioned before a
            cigarette making machine can use it. Our{" "}
            <Link href="/cutter-feeder-reclaimer/tobacco-cutters">
              Tobacco Cutter KT-400
            </Link>{" "}
            handles the cutting stage, using five knives with pneumatic
            cylinders for jaw operation and a PLC-controlled drive on a
            brass bend slat to regulate cut size accurately. This machine
            is built for primary processing and cut rag preparation, the
            stage that determines how consistently your tobacco is sized
            before anything downstream can work with it.
          </p>
          <p>
            Alongside cutting, our{" "}
            <Link href="/cutter-feeder-reclaimer/tobacco-stem-flattener">
              Tobacco Stem Flattener
            </Link>{" "}
            flattens tobacco stems so they blend evenly with the rest of
            the leaf. This improves processing ease further down the line,
            reduces leaf waste, and helps ensure a more uniform final
            product, since unflattened stems blend poorly and create
            inconsistency that&rsquo;s difficult to correct once tobacco
            reaches the maker.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>Keeping the Maker Fed: Why a Steady Supply Matters</h2>
          <p>
            Once tobacco is cut and conditioned, it still needs to reach
            the cigarette making machine in a steady, even stream rather
            than an inconsistent volume. That&rsquo;s the role of our{" "}
            <Link href="/cutter-feeder-reclaimer/tobacco-feeder">
              Tobacco Feeder
            </Link>
            , built to work with both Mark 8 and Mark 9 class machines,
            with adjustable volume settings and automated handling that
            reduces manual intervention. We&rsquo;ve covered exactly what
            this machine does and why it matters in more detail in a{" "}
            <Link href="/blog/what-does-a-tobacco-feeder-do">
              dedicated guide
            </Link>
            , worth reading if you&rsquo;re specifying a feeder alongside a
            new or existing maker.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h2>Recovering Usable Tobacco: What a Reclaimer Does</h2>
          <p>
            Not every cigarette that comes off the maker meets spec, and
            rejected cigarettes still contain usable tobacco that
            doesn&rsquo;t need to go to waste. Our{" "}
            <Link href="/cutter-feeder-reclaimer/cigarette-reclaimer">
              Cigarette Reclaimer
            </Link>{" "}
            recovers that tobacco from rejected product, separating it
            efficiently from paper and filter material so it can be
            reintroduced into production rather than discarded.
          </p>
          <p>
            The numbers behind this are worth knowing. Our reclaimer
            processes 120 kg of rejected product per hour, operates at
            99.8% efficiency, and achieves a 90% recovery rate on usable
            tobacco, all through simple, straightforward operation. For a
            factory running at volume, even a small reject rate adds up
            over a full shift, and a reclaimer at this recovery rate is
            what determines whether that tobacco becomes recovered
            material or straightforward waste.
          </p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>
            Why This Stage Matters Even Though It&rsquo;s Invisible in the
            Finished Product
          </h2>
          <p>
            None of the equipment on this page appears in a finished
            cigarette, which is exactly why it&rsquo;s easy to underspecify
            when planning a new line. A factory can have an excellent
            maker, filter line, and packer, and still lose money and
            consistency if tobacco arrives at the maker unevenly cut,
            poorly conditioned, or inconsistently fed, or if rejected
            product simply gets thrown away instead of reclaimed. This
            stage doesn&rsquo;t show up as a product defect. It shows up as
            cost, waste, and avoidable inconsistency in output that&rsquo;s
            harder to trace back to its actual source.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h2>Matching Capacity to Your Cigarette Maker</h2>
          <p>
            Cutting and feeding capacity needs to be sized to your
            maker&rsquo;s actual throughput, not just &ldquo;enough&rdquo;
            in general terms. A high-speed maker like the{" "}
            <Link href="/cigarette-manufacturing-machines/protos-80-er">
              Protos 80 ER
            </Link>
            , running up to 8,000 cigarettes per minute, places a
            genuinely different demand on upstream cutting and feeding
            equipment than a{" "}
            <Link href="/cigarette-manufacturing-machines/mark-8-post-64">
              Molins Mark 8 Post 64
            </Link>{" "}
            running at 1,800 to 2,000. Confirm this pairing when planning
            your line, since undersized preparation equipment becomes the
            constraint on your maker&rsquo;s real-world output, regardless
            of what the maker itself is rated for.
          </p>
        </div>
      </div>

      {/* Row 4 - full width */}
      <div className="mt-14 grid gap-x-12 gap-y-10">
        <div className="prose-content max-w-none">
          <h2>Why Buy From Civic Tobacco Machinery</h2>
          <p>
            Civic Tobacco Machinery has supplied and supported tobacco
            machinery from the SITE industrial estate in Karachi since
            1998, including the cutting, feeding, and reclaiming equipment
            that supports a complete production line, not just the maker
            itself. A few reasons factories choose us for this equipment
            specifically:
          </p>
          <ul>
            <li>
              <strong>Equipment sized to your maker.</strong> We help
              confirm cutting and feeding capacity actually matches your
              cigarette making machine&rsquo;s throughput.
            </li>
            <li>
              <strong>Installation and commissioning included.</strong>{" "}
              Our own team sets up this equipment on your factory floor,
              tested and ready to run.
            </li>
            <li>
              <strong>Ongoing spares and service.</strong> We stay
              reachable after handover for parts and technical support.
            </li>
            <li>
              <strong>New, used and reconditioned options.</strong> A
              genuine choice for different budgets, not just the newest
              equipment available.
            </li>
          </ul>
        </div>
      </div>

      {/* Row 5 */}
      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <div className="prose-content max-w-none">
          <h2>New, Used &amp; Reconditioned Machines</h2>
          <p>
            This equipment is available new, used, or reconditioned,
            priced to fit different stages of a factory&rsquo;s growth.
            Every reconditioned unit is inspected, serviced, and tested
            before it leaves us, and our engineers stay involved through
            setup so the machine performs the way it was described.
          </p>
        </div>

        <div className="prose-content max-w-none">
          <h2>Exporting From Pakistan</h2>
          <p>
            Alongside factories across Pakistan, we export cutting,
            feeding, and reclaiming equipment to markets including
            Bangladesh, Turkey, Indonesia, Poland, Bulgaria and beyond. See
            our <Link href="/export-to">export destinations</Link> for
            more on shipping and support outside Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
}

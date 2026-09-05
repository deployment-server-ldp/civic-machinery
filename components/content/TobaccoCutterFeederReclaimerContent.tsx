import Link from "next/link";

/** Guide-style content for the tobacco cutter, feeder & reclaimer page. */
export default function TobaccoCutterFeederReclaimerContent() {
  return (
    <div className="prose-content max-w-3xl">
      <h2>Tobacco Cutter, Feeder &amp; Reclaimer Machines: A Complete Guide</h2>
      <p>
        Before a single cigarette is made, tobacco has to be cut to size and
        fed to the maker at a steady, unbroken rate, and material lost to
        rejects has to be recovered rather than wasted. This guide covers what
        this equipment does, where it fits in the production line, and what
        to check before you buy it.
      </p>

      <h3>What Are Tobacco Feeding, Cutting &amp; Reclaiming Machines?</h3>
      <p>
        Tobacco feeders keep a maker supplied with cut tobacco at a constant
        rate, cutters like the Hauni KT-400 cut leaf and stem to the size
        production needs, and reclaimers recover usable tobacco from rejected
        cigarettes so it can go back into the process. Stem flatteners handle
        the stem itself, preparing it for reuse rather than letting it go to
        waste.
      </p>

      <h3>Where This Equipment Fits in the Cigarette Production Line</h3>
      <p>
        This machinery works upstream of the{" "}
        <Link href="/cigarette-manufacturing-machines">
          cigarette making machine
        </Link>
        , on what factories call the primary floor, and it also supports the
        secondary floor by recovering tobacco from rejects further down the
        line. A maker can only run as steadily as its tobacco supply, so
        under-sized feeding or cutting equipment shows up as inconsistency in
        every stage after it.
      </p>

      <h3>New, Used &amp; Reconditioned Tobacco Machinery</h3>
      <p>Feeders, cutters and reclaimers are supplied in three conditions:</p>
      <ul>
        <li>
          <strong>New machines</strong> suit factories building a long-term
          line with full manufacturer backing.
        </li>
        <li>
          <strong>Used machines</strong> cost less and suit buyers with their
          own maintenance capability.
        </li>
        <li>
          <strong>Reconditioned machines</strong> are inspected, serviced and
          tested before sale, giving reliable output at a lower price than
          new.
        </li>
      </ul>

      <h3>How to Choose a Tobacco Machinery Supplier</h3>
      <p>Before you buy tobacco feeding, cutting or reclaiming equipment, check:</p>
      <ul>
        <li>Can it keep pace with the maker or makers it will feed?</li>
        <li>Will it meaningfully cut down tobacco waste in your current setup?</li>
        <li>Can the supplier source spares for that model, such as Hauni KT-400 parts?</li>
        <li>Is installation and setup around your existing floor included?</li>
        <li>Is technical support available once the equipment is running?</li>
      </ul>
    </div>
  );
}

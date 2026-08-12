"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { ExportCountrySummary, ExportRegion } from "@/lib/export-countries";

/**
 * Region tabs + data-driven country grid for /export-to/. Client-side only
 * (no page reload on region change) and fed the minimal {name, slug, region}
 * projection — no country long-form content ships in this bundle.
 */
export default function ExportRegionExplorer({
  regions,
  countries,
}: {
  regions: ExportRegion[];
  countries: ExportCountrySummary[];
}) {
  const [active, setActive] = useState<ExportRegion>(regions[0]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const grouped = useMemo(() => {
    const map = new Map<ExportRegion, ExportCountrySummary[]>();
    for (const region of regions) {
      map.set(
        region,
        countries
          .filter((c) => c.region === region)
          .sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
    return map;
  }, [regions, countries]);

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % regions.length;
    else if (e.key === "ArrowLeft") nextIndex = (index - 1 + regions.length) % regions.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = regions.length - 1;
    if (nextIndex !== null) {
      e.preventDefault();
      setActive(regions[nextIndex]);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div>
      {/* Region tabs */}
      <div
        role="tablist"
        aria-label="Export regions"
        className="flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {regions.map((region, i) => {
          const isActive = region === active;
          return (
            <button
              key={region}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`region-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`region-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(region)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
                isActive
                  ? "border-accent-600 bg-accent-600 text-white shadow-sm"
                  : "border-brand-200 bg-white text-brand-700 hover:border-accent-400 hover:text-accent-700"
              }`}
            >
              {region}
            </button>
          );
        })}
      </div>

      {/* Country grids — every region's panel is rendered (data is static at
          build time), and all rendered so every country link exists in the
          static HTML for crawlers; only the active region's panel is
          visible. Switching regions is a pure CSS/attribute toggle, no
          client-side re-render of the link list and no page reload. */}
      {regions.map((region, i) => {
        const isActive = region === active;
        const regionCountries = grouped.get(region) ?? [];
        return (
          <div
            key={region}
            role="tabpanel"
            id={`region-panel-${i}`}
            aria-labelledby={`region-tab-${i}`}
            hidden={!isActive}
            className="mt-8"
          >
            {regionCountries.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
                {regionCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/export-to/${country.slug}/`}
                    className="group flex items-center justify-between gap-2 rounded-xl border border-brand-100 bg-white px-4 py-3.5 text-sm font-semibold text-brand-800 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-700 hover:shadow-card-hover"
                  >
                    <span className="truncate">{country.name}</span>
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4 shrink-0 text-brand-300 transition-colors group-hover:text-accent-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 10h11M11 5l5 5-5 5" />
                    </svg>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-brand-500">No countries listed for this region yet.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

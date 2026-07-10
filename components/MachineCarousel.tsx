"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MachineImage from "./MachineImage";

export interface CarouselItem {
  name: string;
  href: string;
  tagline: string;
  image?: string;
}

export interface CarouselGroup {
  label: string;
  href: string;
  items: CarouselItem[];
}

/** How long each tab stays active before auto-advancing to the next. */
const AUTO_ROTATE_MS = 4000;

/**
 * Tabbed machine carousel. Each tab maps to one of the main machine ranges and
 * scrolls that range's machines horizontally. Every card links to its dedicated
 * product page, and each tab links through to its full category page.
 *
 * The tabs rotate automatically and pause while the visitor is hovering the
 * section. The prev/next arrows sit beside the machine track and scroll the
 * cards for the active tab.
 */
export default function MachineCarousel({ groups }: { groups: CarouselGroup[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const group = groups[active];

  // Auto-rotate the tabs, unless the visitor is interacting with the section.
  useEffect(() => {
    if (paused || groups.length < 2) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % groups.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, groups.length]);

  // Reset the horizontal scroll whenever the active tab changes.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
  }, [active]);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      className="bg-brand-50 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Stock</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Cigarette Machinery for Sale</h2>
        </div>

        {/* Tabs (auto-rotating) */}
        <div className="mt-9 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-brand-200 bg-white p-1.5 shadow-sm">
            {groups.map((g, i) => (
              <button
                key={g.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  i === active
                    ? "bg-accent-600 text-white shadow-sm"
                    : "text-brand-600 hover:bg-brand-50 hover:text-accent-700"
                }`}
              >
                {g.label}
                {/* Progress bar shows the auto-rotate countdown on the active tab */}
                {i === active && !paused && groups.length > 1 && (
                  <span
                    key={active}
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-white/70"
                    style={{ animation: `carousel-progress ${AUTO_ROTATE_MS}ms linear forwards` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Track + side arrows */}
        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous machines"
            className="absolute -left-3 top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-card transition-colors hover:border-accent-400 hover:text-accent-700 sm:flex lg:-left-5"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next machines"
            className="absolute -right-3 top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-card transition-colors hover:border-accent-400 hover:text-accent-700 sm:flex lg:-right-5"
          >
            <Arrow dir="right" />
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-card
                className="group relative w-[17rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card transition-shadow hover:shadow-card-hover sm:w-[19rem]"
              >
                <MachineImage
                  src={item.image}
                  alt={item.name}
                  label={item.name}
                  aspect="aspect-[655/420]"
                  sizes="(max-width: 640px) 80vw, 19rem"
                  className="rounded-none"
                />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-brand-900 group-hover:text-accent-700">
                      {item.name}
                    </h3>
                    <p className="mt-1 truncate text-xs text-brand-500">
                      {item.tagline}
                    </p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                    <Arrow dir="right" small />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href={group.href} className="link-accent">
            View all {group.label} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Arrow({ dir, small = false }: { dir: "left" | "right"; small?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={small ? "h-4 w-4" : "h-5 w-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={dir === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

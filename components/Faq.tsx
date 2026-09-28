"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Accessible FAQ accordion. Pair with faqSchema() in the page for
 * FAQ rich results. (This component renders the visible UI only.)
 *
 * `columns={2}` splits a longer list into two side-by-side accordions
 * (odd/even split) on large screens instead of one long stacked list.
 */
export default function Faq({ items, columns = 1 }: { items: FaqItem[]; columns?: 1 | 2 }) {
  const [open, setOpen] = useState<number | null>(0);

  if (columns === 2) {
    const left = items.filter((_, i) => i % 2 === 0);
    const right = items.filter((_, i) => i % 2 === 1);
    return (
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        <FaqColumn items={left} baseIndex={0} open={open} setOpen={setOpen} />
        <FaqColumn items={right} baseIndex={1} open={open} setOpen={setOpen} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <FaqColumn items={items} baseIndex={0} open={open} setOpen={setOpen} />
    </div>
  );
}

function FaqColumn({
  items,
  baseIndex,
  open,
  setOpen,
}: {
  items: FaqItem[];
  /** Column's items sit at indices baseIndex, baseIndex+2, baseIndex+4… in the original list. */
  baseIndex: number;
  open: number | null;
  setOpen: (i: number | null) => void;
}) {
  return (
    <div className="divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
      {items.map((item, i) => {
        const globalIndex = baseIndex + i * 2;
        const isOpen = open === globalIndex;
        return (
          <div key={globalIndex}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : globalIndex)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-brand-900 hover:text-accent-700"
              >
                <span>{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 shrink-0 text-accent-600 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h3>
            <div
              className={`grid overflow-hidden px-5 transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="text-brand-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

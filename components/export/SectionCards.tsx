import type { SectionCard } from "@/lib/export-countries/types";

/**
 * Titled-card grid used to replace stacked paragraphs wherever a country
 * page's content is really a set of distinct points (services offered,
 * what-to-check items, production tiers…) rather than flowing prose.
 */
export default function SectionCards({
  items,
  columns = 2,
}: {
  items: SectionCard[];
  columns?: 2 | 3;
}) {
  const gridCols = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-5 ${gridCols}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-brand-100 bg-white p-5 shadow-card"
        >
          <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

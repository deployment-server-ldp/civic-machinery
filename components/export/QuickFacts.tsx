import type { QuickFact } from "@/lib/export-countries/types";

/** Sidebar "at a glance" panel: customs duty, VAT, port, transit time, etc. */
export default function QuickFacts({
  facts,
  title = "Quick Facts",
}: {
  facts: QuickFact[];
  title?: string;
}) {
  return (
    <aside className="rounded-2xl border border-brand-100 bg-white p-6">
      <p className="eyebrow">{title}</p>
      <dl className="mt-4 space-y-4">
        {facts.map((f) => (
          <div key={f.label} className="border-t border-brand-100 pt-3 first:border-t-0 first:pt-0">
            <dt className="text-xs font-medium uppercase tracking-wide text-brand-500">{f.label}</dt>
            <dd className="mt-1 text-sm font-semibold text-brand-900">{f.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

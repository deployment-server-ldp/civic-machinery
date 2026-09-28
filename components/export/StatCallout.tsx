/** Pulled-out stat (e.g. "40–60% lower cost") shown beside a block of prose. */
export default function StatCallout({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent-200 bg-accent-50 p-6 text-center">
      <p className="text-3xl font-bold text-accent-700 sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm font-medium text-brand-700">{label}</p>
    </div>
  );
}

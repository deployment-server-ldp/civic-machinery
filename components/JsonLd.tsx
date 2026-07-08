/**
 * Renders one or more JSON-LD objects into a script tag.
 * Server component — the structured data is in the initial HTML for crawlers.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe here; we control the input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

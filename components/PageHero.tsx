import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/**
 * Standard inner-page hero: breadcrumb trail, eyebrow, H1 and intro.
 * Used across category, subcategory, product and static pages.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-brand-100 bg-brand-50">
      <div className="container mx-auto py-8 sm:py-12">
        <Breadcrumbs items={crumbs} />
        <div className="mt-5 max-w-3xl">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.7rem]">{title}</h1>
          {intro && (
            <p className="mt-4 text-lg leading-relaxed text-brand-600">{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Accessible breadcrumb navigation. Always include Home as the first crumb.
 * Emits BreadcrumbList JSON-LD alongside the visible trail.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-brand-500">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="font-medium text-brand-700">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      className="transition-colors hover:text-accent-700"
                    >
                      {item.name}
                    </Link>
                    <span aria-hidden="true" className="text-brand-300">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

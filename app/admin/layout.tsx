import type { Metadata } from "next";

// The CMS must never be indexed by search engines.
export const metadata: Metadata = {
  title: "Content Manager",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-brand-50">{children}</div>;
}

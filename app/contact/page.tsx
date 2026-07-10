import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us, Cigarette Machinery Manufacturers in Pakistan",
  description:
    "Contact Civic Tobacco Machinery in Pakistan. Call, WhatsApp or send an enquiry about cigarette manufacturing, packing, wrapping and used machines. Workshop in SITE, Karachi.",
  path: "/contact",
  keywords: [
    "contact cigarette machinery Pakistan",
    "tobacco machinery suppliers contact",
    "Civic Tobacco Machinery Pakistan",
  ],
});

// Google Maps listing for the workshop (Civic Enterprises).
const mapEmbedSrc =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Civic Enterprises, 8/D Fakhruddin Valika Road, SITE, Karachi") +
  "&output=embed";
const mapPlaceUrl = "https://maps.google.com/?cid=11182906624603889619";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch With Civic Tobacco Machinery"
        intro="Tell us what you are looking for and we will get back to you the same working day. Call, WhatsApp, email or send the form below."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="container mx-auto py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <div>
            <h2 className="text-2xl">Reach us directly</h2>
            <p className="mt-3 text-brand-600">
              The quickest way to get a straight answer on a machine, its
              condition, price or availability, is to message us on WhatsApp or
              give us a call.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow label="Visit our workshop" icon="pin">
                <address className="not-italic text-brand-700">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postalCode}, {siteConfig.address.countryName}
                </address>
              </ContactRow>

              <ContactRow label="Call us" icon="phone">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-brand-700 hover:text-accent-700"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </ContactRow>

              <ContactRow label="WhatsApp" icon="chat">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 hover:text-accent-700"
                >
                  Message us on {siteConfig.phoneDisplay}
                </a>
              </ContactRow>

              <ContactRow label="Email" icon="mail">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-700 hover:text-accent-700"
                >
                  {siteConfig.email}
                </a>
              </ContactRow>

              <ContactRow label="Opening hours" icon="clock">
                <p className="text-brand-700">
                  Monday – Saturday, {siteConfig.hours.opens} – {siteConfig.hours.closes}
                  <br />
                  <span className="text-brand-500">Closed on Sunday</span>
                </p>
              </ContactRow>
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-100">
              <iframe
                title="Civic Tobacco Machinery location on Google Maps"
                src={mapEmbedSrc}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
            <a
              href={mapPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:underline"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Form */}
          <div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl">Send an enquiry</h2>
              <p className="mt-2 text-sm text-brand-600">
                Fill this in and we will get back to you quickly. Fields marked as
                required help us give you an accurate answer.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-700">
        <ContactIcon name={icon} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
          {label}
        </p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}

function ContactIcon({ name }: { name: string }) {
  const c = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...c}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "chat":
      return (
        <svg {...c}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...c}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      );
    case "clock":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
  }
}

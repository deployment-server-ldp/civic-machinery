import Link from "next/link";
import { whatsappLink, siteConfig } from "@/lib/site";

/**
 * Conversion band used near the bottom of most pages.
 */
export default function CtaBand({
  title = "Not sure which machine you need?",
  text = "Tell us your format, target output and budget. We will recommend the right machine — new or reconditioned — and help you get it running.",
  waMessage,
}: {
  title?: string;
  text?: string;
  waMessage?: string;
}) {
  return (
    <section className="container mx-auto my-16">
      <div className="overflow-hidden rounded-3xl bg-brand-950 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl text-white sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-300">{text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:brightness-105"
            >
              WhatsApp: {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-ghost-light">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

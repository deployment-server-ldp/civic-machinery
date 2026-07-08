"use client";

import { useState } from "react";
import { whatsappLink, siteConfig } from "@/lib/site";

/**
 * Enquiry form. With no backend wired up yet, it composes the enquiry into a
 * pre-filled WhatsApp message (and offers an email fallback) — the fastest way
 * for a customer here to reach the workshop. Swap in an API route later
 * without changing the UI.
 */
export default function ContactForm({ machine }: { machine?: string }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    interest: machine || "",
    message: "",
  });

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const composed = () =>
    [
      `Enquiry for ${siteConfig.name}`,
      values.name && `Name: ${values.name}`,
      values.phone && `Phone: ${values.phone}`,
      values.interest && `Interested in: ${values.interest}`,
      values.message && `Message: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(composed()), "_blank", "noopener,noreferrer");
  };

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Machine Enquiry"
  )}&body=${encodeURIComponent(composed())}`;

  const field =
    "w-full rounded-lg border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 placeholder:text-brand-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30";

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Enquiry form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-700">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            className={field}
            placeholder="e.g. Ahmed Khan"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-700">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            className={field}
            placeholder="e.g. 0300 1234567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-brand-700">
          Machine you are interested in
        </label>
        <input
          id="interest"
          name="interest"
          type="text"
          value={values.interest}
          onChange={update("interest")}
          className={field}
          placeholder="e.g. HLP-200 packing machine"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-700">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={update("message")}
          className={field}
          placeholder="Tell us your format, target output and any details."
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button type="submit" className="btn-primary sm:flex-1">
          Send via WhatsApp
        </button>
        <a href={mailtoHref} className="btn-secondary sm:flex-1">
          Send by Email
        </a>
      </div>
      <p className="text-xs text-brand-400">
        Your details go straight to our team — we usually reply the same working day.
      </p>
    </form>
  );
}

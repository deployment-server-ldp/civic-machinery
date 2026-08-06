"use client";

import { useState } from "react";
import { whatsappLink, siteConfig } from "@/lib/site";
import { getDict } from "@/lib/dictionaries";
import { defaultLocale, type LocaleCode } from "@/lib/i18n";

/**
 * Enquiry form. Submissions are POSTed to /sendmail.php (a small PHP handler
 * that emails the lead to the business inbox). The recipient address lives only
 * in that server-side file, never in the front-end. If the send fails, we fall
 * back to a WhatsApp link so the lead is never lost.
 */
export default function ContactForm({
  machine,
  locale = defaultLocale,
}: {
  machine?: string;
  locale?: LocaleCode;
}) {
  const t = getDict(locale).contact.form;
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    interest: machine || "",
    message: "",
    company: "", // honeypot — real users leave this empty
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source:
            typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setStatus("success");
        setValues({
          name: "",
          email: "",
          phone: "",
          interest: machine || "",
          message: "",
          company: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const waFallback = whatsappLink(
    [
      "Enquiry for Civic Tobacco Machinery",
      values.name && `Name: ${values.name}`,
      values.phone && `Phone: ${values.phone}`,
      values.interest && `Interested in: ${values.interest}`,
      values.message && `Message: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n")
  );

  const field =
    "w-full rounded-lg border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 placeholder:text-brand-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30";

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-brand-900">{t.successTitle}</h3>
        <p className="mt-1 text-sm text-brand-600">{t.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Enquiry form">
      {/* Honeypot: hidden from users, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={values.company}
        onChange={update("company")}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-700">
            {t.name}
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
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-700">
            {t.phone}
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
            placeholder={t.phonePlaceholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-700">
          {t.email} <span className="text-brand-400">{t.emailOptional}</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          className={field}
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-brand-700">
          {t.interest}
        </label>
        <input
          id="interest"
          name="interest"
          type="text"
          value={values.interest}
          onChange={update("interest")}
          className={field}
          placeholder={t.interestPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-700">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={update("message")}
          className={field}
          placeholder={t.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {t.errorText}{" "}
          <a
            href={waFallback}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            {t.errorWhatsApp}
          </a>
          .
        </p>
      )}

      <p className="text-xs text-brand-400">
        {t.footnote}{" "}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent-700 hover:underline"
        >
          {t.footnoteChat} {siteConfig.phoneDisplay}
        </a>
      </p>
    </form>
  );
}

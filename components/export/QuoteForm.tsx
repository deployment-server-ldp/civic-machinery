"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

const MACHINE_TYPES = [
  "Cigarette Making Machine",
  "Cigarette Packing Machine",
  "Cigarette Wrapping Machine",
  "Filter Making Machine",
  "Cutter / Feeder / Reclaimer",
  "Complete Line",
];

const FORMATS = ["King size", "Slim", "Super slim"];

/**
 * Export-page quote form. Posts to the same /sendmail.php handler as
 * ContactForm. That handler only reads name/phone/email/interest/message
 * and treats `company` as a bot honeypot, so the company, city and format
 * fields are folded into the message instead of sent as their own keys.
 */
export default function QuoteForm({ city = "" }: { city?: string }) {
  const empty = {
    machineType: "",
    name: "",
    companyName: "",
    phone: "",
    email: "",
    city,
    format: "",
    message: "",
    company: "", // honeypot — real users leave this empty
  };
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const details = [
    values.companyName && `Company: ${values.companyName}`,
    values.city && `City: ${values.city}`,
    values.format && `Cigarette format: ${values.format}`,
  ].filter(Boolean) as string[];
  const fullMessage = [...details, values.message && `\n${values.message}`]
    .filter(Boolean)
    .join("\n");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          interest: values.machineType,
          message: fullMessage || "Quote request",
          company: values.company,
          source: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setStatus("success");
        setValues(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const waFallback = whatsappLink(
    [
      "Quote request for Civic Tobacco Machinery",
      values.machineType && `Machine type: ${values.machineType}`,
      values.name && `Name: ${values.name}`,
      values.phone && `Phone: ${values.phone}`,
      fullMessage,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const field =
    "w-full rounded-lg border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 placeholder:text-brand-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30";
  const label = "mb-1.5 block text-sm font-medium text-brand-700";

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-brand-900">Thank you, your request is sent</h3>
        <p className="mt-1 text-sm text-brand-600">
          We will reply with machine options, videos and a delivered price.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Quote request form">
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

      <div>
        <label htmlFor="q-machine" className={label}>
          Machine type
        </label>
        <select
          id="q-machine"
          required
          value={values.machineType}
          onChange={update("machineType")}
          className={field}
        >
          <option value="" disabled>
            Select a machine type
          </option>
          {MACHINE_TYPES.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className={label}>
            Name
          </label>
          <input id="q-name" type="text" required autoComplete="name" value={values.name} onChange={update("name")} className={field} />
        </div>
        <div>
          <label htmlFor="q-company" className={label}>
            Company
          </label>
          <input id="q-company" type="text" autoComplete="organization" value={values.companyName} onChange={update("companyName")} className={field} />
        </div>
        <div>
          <label htmlFor="q-phone" className={label}>
            Phone / WhatsApp
          </label>
          <input id="q-phone" type="tel" required autoComplete="tel" value={values.phone} onChange={update("phone")} className={field} />
        </div>
        <div>
          <label htmlFor="q-email" className={label}>
            Email
          </label>
          <input id="q-email" type="email" autoComplete="email" value={values.email} onChange={update("email")} className={field} />
        </div>
        <div>
          <label htmlFor="q-city" className={label}>
            City
          </label>
          <input id="q-city" type="text" value={values.city} onChange={update("city")} className={field} />
        </div>
        <div>
          <label htmlFor="q-format" className={label}>
            Cigarette format
          </label>
          <select id="q-format" value={values.format} onChange={update("format")} className={field}>
            <option value="">Select a format</option>
            {FORMATS.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-message" className={label}>
          Message
        </label>
        <textarea id="q-message" rows={4} value={values.message} onChange={update("message")} className={field} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Sorry, the form could not be sent.{" "}
          <a href={waFallback} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Send it on WhatsApp instead
          </a>
          .
        </p>
      )}
    </form>
  );
}

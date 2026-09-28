import type { Product } from "./products";

/**
 * Generates a short, safe buyer-FAQ block for a product detail page,
 * English only (see ProductDetail.tsx for why). Every answer is built only
 * from facts already true and already published elsewhere on the site
 * (the product's own condition/tagline, and standing site-wide claims like
 * "reconditioned machines are inspected, serviced and tested" or "we export
 * internationally") — nothing here states a price, dimension, lead time or
 * any other figure that isn't already on the page or provably true.
 */
export function productFaqs(product: Product): { question: string; answer: string }[] {
  const name = product.name;

  const conditionFaq =
    product.condition === "New"
      ? {
          question: `Is the ${name} available new, or do you offer reconditioned alternatives?`,
          answer:
            "This model is supplied new. If you're working to a tighter budget, ask us about reconditioned options elsewhere in our range — every reconditioned machine we sell is inspected, serviced and tested before it leaves us.",
        }
      : {
          question: `Is the ${name} available reconditioned, and what condition grading do you use?`,
          answer:
            "Yes. Every reconditioned machine is inspected, serviced and tested before it leaves us, and we give you a straight, specific account of its condition rather than a generic listing.",
        };

  return [
    {
      question: `What is the price of the ${name}?`,
      answer:
        "Pricing depends on the machine's condition and configuration. Contact us on WhatsApp or through the enquiry form below for a current quote.",
    },
    conditionFaq,
    {
      question: `Do you export the ${name} outside Pakistan?`,
      answer:
        "Yes, we export to manufacturers internationally. See our export destinations page for shipping and support details, or contact us to confirm delivery to your country.",
    },
    {
      question: `What does the ${name} do, in short?`,
      answer: product.tagline,
    },
  ];
}

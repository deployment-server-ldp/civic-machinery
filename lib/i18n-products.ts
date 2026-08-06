/**
 * Translated product content, layered over the English catalogue in
 * `products.ts`. Machine names, model numbers and technical values stay as-is
 * (they are language-neutral); only the prose (tagline, intro, features,
 * applications, meta) and the spec/feature-table *labels* are translated.
 *
 * A product appears in the /[locale] tree only once it has an entry here for
 * that locale — so this file also drives which product paths advertise
 * hreflang and get statically generated. Translate in waves; each wave stays
 * self-consistent.
 */

import type { LocaleCode } from "./i18n";
import { products, productHref, type Product } from "./products";

export interface ProductContent {
  tagline: string;
  h1?: string;
  metaTitle?: string;
  metaDescription: string;
  intro: string[];
  features?: string[];
  applications?: string[];
}

/* Shared spec / feature-table label translations (values are left untouched). */
const specLabels: Partial<Record<LocaleCode, Record<string, string>>> = {
  de: {
    "Machine Speed": "Maschinengeschwindigkeit",
    "Filter + Tobacco Rod Length": "Filter- + Tabakstranglänge",
    "Cigarette Circumference": "Zigarettenumfang",
    Type: "Typ",
    "Production Capacity": "Produktionskapazität",
    "Total Weight": "Gesamtgewicht",
    Power: "Leistung",
    "PLC Control System": "SPS-Steuerung",
    "Machine Unit": "Maschineneinheit",
    Weight: "Gewicht",
    Speed: "Geschwindigkeit",
    "Cigarette Sizes": "Zigarettenformate",
    "Air Pressure": "Luftdruck",
    "Weight Control": "Gewichtskontrolle",
    "Servo System": "Servosystem",
    "Power Requirement": "Leistungsbedarf",
    "Packet Set-up Available": "Verfügbare Packungsformate",
    Model: "Modell",
    "Machine Model": "Maschinenmodell",
    Function: "Funktion",
    "Filter Attachment": "Filteransetzung",
    "Electrical System": "Elektrik",
    "Default Setup Size": "Standard-Formateinstellung",
    "Cigarette Maker": "Zigarettenstrangmaschine",
    "Wrapping Method": "Umhüllungsverfahren",
    "Total Power": "Gesamtleistung",
    "Pack Quality": "Packungsqualität",
    "Filter Length": "Filterlänge",
    "Filter Circumference": "Filterumfang",
    Capacity: "Kapazität",
    Voltage: "Spannung",
    Version: "Version",
    Utilisation: "Auslastung",
    Separation: "Trennung",
    "Rod Speed Range": "Stranggeschwindigkeitsbereich",
    "Recovery Rate": "Rückgewinnungsrate",
    Preparation: "Aufbereitung",
    "Plug Assembler Weight": "Gewicht des Plug-Assemblers",
    Outcome: "Ergebnis",
    Operation: "Betrieb",
    "Number of Knives": "Anzahl der Messer",
    "Maximum Capacity": "Maximale Kapazität",
    Manufacturer: "Hersteller",
    "Maker Weight": "Gewicht der Strangmaschine",
    Integration: "Integration",
    "Filter Rod Length": "Filterstranglänge",
    "Filter Rod Diameter": "Filterstrangdurchmesser",
    Efficiency: "Effizienz",
    Drive: "Antrieb",
    Cylinders: "Zylinder",
    "Cut-off Speed": "Abschneidgeschwindigkeit",
    Control: "Steuerung",
    Consistency: "Gleichmäßigkeit",
    Condition: "Zustand",
    "Circumference Control": "Umfangskontrolle",
    Brand: "Marke",
    Benefit: "Vorteil",
    Automation: "Automatisierung",
  },
};

/** Translate a single spec/feature label (identity for English / unknowns). */
export function translateSpecLabel(locale: LocaleCode, label: string): string {
  return specLabels[locale]?.[label] ?? label;
}

/* ----------------------------- German content ---------------------------- */

const de: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "HLP-180 Zigarettenverpackungsmaschine",
    metaTitle: "HLP-180 Zigarettenverpackungsmaschine, 180 Pkg./Min",
    tagline: "Hochgeschwindigkeits-Hartpackungslinie mit 180 Packungen pro Minute.",
    metaDescription:
      "HLP-180 Zigarettenverpackungsmaschine in Pakistan – 180 Packungen pro Minute von King Size bis Nano mit SPS-Steuerung. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die HLP-180 ist eine leistungsstarke Maschine der neuen Generation für die Hochgeschwindigkeits-Zigarettenverpackung. Bekannt für gleichmäßige Leistung und zuverlässige Ausbringung, eignet sich der HLP-180-Packer für Hersteller, die ihren Verpackungsprozess straffen wollen, ohne bei Qualität oder Präzision Abstriche zu machen.",
      "Mit 180 Packungen pro Minute läuft sie dank ihres Einzelstößel-Mechanismus in effizienten, gleichmäßigen Verpackungszyklen und hält bei jeder Packung perfekte Ausrichtung, Umhüllung und Versiegelung. So können Fabriken in Pakistan große Mengen bewältigen und dabei ein sauberes, wiederholbares Finish beibehalten.",
      "Sie ist für ein breites Spektrum an Zigarettenformaten ausgelegt, darunter King Size, Demi, Slims, Super Slims und Nano. Diese Vielseitigkeit bedeutet, dass Sie mit derselben Maschine unterschiedliche Verbrauchervorlieben in lokalen und Exportmärkten bedienen können – von klassischen Formaten bis zu Nischenprodukten.",
      "Ein SPS-Steuerungssystem hält den Betrieb genau und vollständig automatisiert, sodass jede Packung gleichmäßig, gut umhüllt und verkaufsfertig herauskommt. Die benutzerfreundliche Oberfläche gibt dem Bediener volle Kontrolle über Geschwindigkeit, Fehlererkennung und Produktionsüberwachung, was Stillstände reduziert und die Gesamteffizienz steigert.",
      "Was die HLP-180 wirklich auszeichnet, ist ihre Flexibilität bei den Packungsformen. Sie unterstützt Rundeck-, Fasenkant-, D-Typ- und quadratische Packungsformate, sodass Marken ihre Verpackung differenzieren, sich im Regal abheben und mit Markttrends Schritt halten können. Gebaut für den kontinuierlichen Großserienbetrieb, ist sie eine starke Wahl, ob Sie eine Linie erweitern oder ältere Anlagen ersetzen.",
    ],
    applications: ["Hartpackungsproduktion in großen Mengen", "Lokale und Exportmärkte"],
  },
  "hlp-200": {
    h1: "HLP-200 Zigarettenverpackungsmaschine",
    metaTitle: "HLP-200 Zigarettenverpackungsmaschine, 200 Pkg./Min",
    tagline: "Doppelstößel-Hartpackungslinie mit 200 Packungen pro Minute.",
    metaDescription:
      "HLP-200 Zigarettenverpackungsmaschine in Pakistan – 200 Packungen pro Minute, Doppelstößel-Linie von King Size bis Nano. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die HLP-200 ist eine Doppelstößel-Trichter-Verpackungsmaschine für die kleine bis mittlere und große Serienproduktion. Sie ist bei Herstellern in Pakistan beliebt, weil sie sparsam mit Material umgeht und die Betriebskosten senkt, während sie ein schnelles, gleichmäßiges Tempo hält.",
      "Mit 200 Packungen pro Minute und einem maximalen Durchsatz von rund 12.000 Zigaretten steht sie als erste kritische Einheit im Zentrum der Verpackungslinie und formt und vollendet die Packung, bevor sie zur Umhüllung und zum Boxen weiterläuft. Sie unterstützt alle gängigen Zigarettenpackungsformate und fügt sich mühelos in die meisten Produktionsanlagen ein.",
      "Die Maschine verarbeitet ein breites Spektrum an Zigarettenformaten, darunter King Size, Demi, Slims, Super Slims und Nano, und ihr Doppelstößelsystem hält den Verpackungszyklus effizient und das Finish gleichmäßig. Ein SPS-Steuerungssystem sorgt für einen genauen, vollautomatischen Betrieb und gibt dem Bediener klare Kontrolle über Geschwindigkeit, Fehlererkennung und Überwachung.",
      "Für die Packungspräsentation bietet sie Rundeck-, Fasenkant-, D-Typ- und quadratische Formate, sodass Marken ihre Verpackung so gestalten können, dass sie im Regal auffällt. Mit einer Versorgung von 220 V/380 V und für zuverlässige, kontinuierliche Ausbringung gebaut, ist die HLP-200 eine solide Kerneinheit für jede integrierte Verpackungslinie.",
    ],
    applications: ["Hartpackungsproduktion in großen Mengen", "Kern einer integrierten Verpackungslinie"],
  },
  "hlp-225": {
    h1: "HLP-225 Zigarettenverpackungsmaschine",
    metaTitle: "HLP-225 Zigarettenverpackungsmaschine, 225 Pkg./Min",
    tagline: "Hochgeschwindigkeits-Doppelstößel-Hartpackungslinie mit 225 Packungen pro Minute.",
    metaDescription:
      "HLP-225 Zigarettenverpackungsmaschine in Pakistan – schnelle Doppelstößel-Linie mit 225 Packungen pro Minute und SPS-Steuerung. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die HLP-225-Verpackungslinie ist ein echter Fortschritt in der Zigarettenverpackung. Mit 225 Packungen pro Minute liefert diese Doppelstößelmaschine hohe Effizienz und hohen Durchsatz für Fabriken, die in großem Maßstab verpacken müssen.",
      "Sie ist so konstruiert, dass sie ein breites Spektrum an Zigarettenformaten verarbeitet, darunter King, Demi, Slims, Super Slims und Nano, sodass Hersteller in Pakistan die Flexibilität erhalten, unterschiedliche Marktanforderungen mit einer einzigen Maschine zu erfüllen.",
      "Ein modernes SPS-Steuerungssystem verbessert die Genauigkeit und automatisiert den Verpackungsprozess, wodurch manuelle Eingriffe und Fehler reduziert werden. Die HLP-225 unterstützt außerdem mehrere Packungsformate, darunter Rundeck, Fasenkant, D-Typ und quadratisch, sodass Marken ihre Verpackung an unterschiedliche Verbrauchervorlieben und Anforderungen anpassen können.",
      "Für die Großserienproduktion gebaut, verbindet die HLP-225 fortschrittliche Funktionen mit einer robusten Bauweise für zuverlässige, gleichmäßige Leistung. Ihre Fähigkeit, mit hoher Geschwindigkeit zu verpacken, ohne Qualität einzubüßen, macht sie zu einem wertvollen Baustein für jeden Betrieb, der seine Ausbringung steigern und wettbewerbsfähig bleiben will.",
    ],
    applications: ["Hartpackungsproduktion in großen Mengen", "Großserien-Verpackungslinien"],
  },
  "sasib-5000": {
    h1: "SASIB 5000 Weichpackungsmaschine",
    metaTitle: "SASIB 5000 Weichpackungsmaschine für Zigaretten",
    tagline: "SASIB-Weichpacker für 100-mm-Packungen mit quadratischen Ecken.",
    metaDescription:
      "SASIB 5000 Weichpackungsmaschine in Pakistan – 100-mm-Weichpackungen mit Alufolien- und Etikettenumhüllung. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die SASIB 5000 ist eine vielseitige Maschine zur Herstellung von Weichpackungen für 100-mm-Zigaretten. Mit einer um einen Dorn ausgeführten Alufolien- und Etikettenumhüllung liefert sie perfekte, gleichmäßige Packungen mit sauber quadratischen Ecken.",
      "Dieses Umhüllungsverfahren sieht nicht nur gut aus, es schützt die Zigaretten und hält jede Packung intakt, während es zugleich die optische Wirkung des Endprodukts steigert. Für Hersteller in Pakistan, die ein hochwertiges Weichpackungs-Finish wünschen, ist sie eine zuverlässige Wahl von hoher Qualität.",
      "Bewährt und einfach zu bedienen, wird die SASIB 5000 geprüft und betriebsbereit eingerichtet geliefert, sodass Sie zuverlässige Weichpackungskapazität mit Zuversicht hinzufügen können.",
    ],
    applications: ["Weichpackungsproduktion", "100-mm-Formate"],
  },
  "sasib-3000": {
    h1: "SASIB 3000 Weichpackungsmaschine",
    metaTitle: "SASIB 3000 Weichpackungsmaschine für Zigaretten",
    tagline: "SASIB-Weichpacker für 84-mm- und 100-mm-Packungen mit quadratischen Ecken.",
    metaDescription:
      "SASIB 3000 Weichpackungsmaschine in Pakistan – verarbeitet 84-mm- und 100-mm-Packungen mit Alufolien- und Etikettenumhüllung. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die SASIB 3000 erweitert die SASIB-Weichpackungslinie um zusätzliche Vielseitigkeit, da sie sowohl 84-mm- als auch 100-mm-Zigarettenpackungen verarbeiten kann. Mit einer um einen Dorn ausgeführten Alufolien- und Etikettenumhüllung behält sie das typische SASIB-Finish bei – perfekte, gleichmäßige Packungen mit sauber quadratischen Ecken.",
      "Diese Doppelformat-Fähigkeit macht die SASIB 3000 zu einem wertvollen Baustein für Hersteller in Pakistan, die Flexibilität in der Produktion brauchen und dabei jede Packung auf hohem Niveau von Präsentation und Schutz halten wollen.",
      "Ihre Steuerungssysteme machen Einstellungen und Wartung unkompliziert, was Stillstände verringert und die Gesamtproduktivität hoch hält. Geprüft und betriebsbereit eingerichtet geliefert, ist sie eine zuverlässige Weichpackungslinie für Fabriken, die sowohl Qualität als auch Formatflexibilität wünschen.",
    ],
    applications: ["Weichpackungsproduktion", "84-mm- und 100-mm-Formate"],
  },
};

const productContent: Partial<Record<LocaleCode, Record<string, ProductContent>>> = {
  de,
};

/** German (or other-locale) content for a product slug, if translated. */
export function getProductContent(
  locale: LocaleCode,
  slug: string,
): ProductContent | undefined {
  return productContent[locale]?.[slug];
}

/** Does this product have a translation for the given locale? */
export function hasProductTranslation(locale: LocaleCode, slug: string): boolean {
  return Boolean(productContent[locale]?.[slug]);
}

/**
 * Merge a translated overlay onto the English product: prose + meta are
 * replaced, spec/feature-table labels are translated, everything else
 * (name, image, values, keywords) is kept. Returns the English product
 * unchanged when there is no translation.
 */
export function localizedProduct(locale: LocaleCode, product: Product): Product {
  const c = getProductContent(locale, product.slug);
  if (!c) return product;
  return {
    ...product,
    h1: c.h1 ?? product.h1,
    metaTitle: c.metaTitle ?? product.metaTitle,
    metaDescription: c.metaDescription,
    tagline: c.tagline,
    intro: c.intro,
    features: c.features ?? product.features,
    applications: c.applications ?? product.applications,
    specs: product.specs.map((s) => ({ ...s, label: translateSpecLabel(locale, s.label) })),
    featureTable: product.featureTable?.map((s) => ({
      ...s,
      label: translateSpecLabel(locale, s.label),
    })),
  };
}

/**
 * English product paths that have at least one translated counterpart — used
 * to extend `translatedPaths` so product pages advertise hreflang and appear
 * in the sitemap. Computed from the union of all locale overlays.
 */
export const translatedProductPaths: string[] = (() => {
  const slugs = new Set<string>();
  for (const map of Object.values(productContent)) {
    for (const slug of Object.keys(map)) slugs.add(slug);
  }
  return products.filter((p) => slugs.has(p.slug)).map((p) => productHref(p));
})();

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

  "regular-wrapper-cp1": {
    tagline: "Hochgeschwindigkeits-Packungsumhüller für bis zu 250 Packungen pro Minute.",
    metaTitle: "CP-1 Zigaretten-Packungsumhüller, 250 Pkg./Min",
    metaDescription:
      "CP-1 Zigaretten-Packungsumhüller in Pakistan – Umhüller für bis zu 250 Packungen pro Minute. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die CP-1 ist ein Hochleistungs-Umhüller für Zigarettenpackungen, der auch anspruchsvolle Produktionsanforderungen mühelos bewältigt. Mit einer Umhüllungsgeschwindigkeit von bis zu 250 Packungen pro Minute steigert sie die Effizienz und den Durchsatz der Verpackungslinie für Fabriken in Pakistan.",
      "Sie kommt mit einem bescheidenen Leistungsbedarf von 6 kVA und einem Luftdruckbedarf von 0,05 m³/min aus und liefert damit starke Leistung bei gleichzeitiger Energieeffizienz. Die CP-1 ist auf präzise, gleichmäßige Umhüllung ausgelegt, die Materialabfall reduziert und jede Packung auf engem Qualitätsniveau hält.",
      "Ihre robuste Bauweise und ihr zuverlässiger Betrieb machen sie zu einem verlässlichen Baustein für Großserienlinien und halten den Prozess reibungslos und die Ausbringung sauber. Sie lässt sich zudem sauber in bestehende Linien integrieren, was sie zu einer praktischen, wertvollen Ergänzung für jeden Betrieb macht, der die Produktivität steigern will, ohne Qualität zu verlieren.",
    ],
    applications: ["Packungsumhüllung", "Großserien-Verpackungslinien"],
  },
  "naked-over-wrapper": {
    tagline: "Umhüller für Außenpackungen mit 25 Außenpackungen pro Minute.",
    metaTitle: "Naked Over Wrapper, Zigaretten-Außenumhüller",
    metaDescription:
      "Naked Over Wrapper in Pakistan – Umhüller für Zigaretten-Außenpackungen mit 25 Außenpackungen pro Minute. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Der Naked Over Wrapper ist eine gut konstruierte Maschine zum Umhüllen von Zigaretten-Außenpackungen mit Präzision und Tempo. Er umhüllt 25 Außenpackungen pro Minute und hält damit ein hohes Effizienzniveau auf der Linie für Fabriken in Pakistan.",
      "Er kommt mit einem Energiebedarf von 6 kVA und einem Luftdruck von 0,05 m³/min aus und bietet zuverlässige Arbeitsleistung ohne hohe Stromaufnahme. Robust und effizient, ist er eine solide Ergänzung einer Zigarettenproduktionslinie und hebt die Verpackungsqualität in der letzten Stufe.",
    ],
    applications: ["Umhüllung von Außenpackungen", "Versiegelung am Linienende"],
  },
  "molins-boxer": {
    tagline: "Zigaretten-Boxmaschine mit bis zu 20 Boxen pro Minute.",
    metaTitle: "Molins Boxer, Zigaretten-Boxmaschine",
    metaDescription:
      "Molins Boxer Boxmaschine in Pakistan – bis zu 20 Boxen pro Minute für Zigarettenstangen. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Der Molins Boxer ist eine zuverlässige Zigaretten-Boxmaschine, bekannt für effizienten Lauf und soliden Durchsatz. Mit einer Packgeschwindigkeit von bis zu 20 Boxen pro Minute steigert er die Produktivität der Zigarettenverpackungslinien in Pakistan.",
      "Er arbeitet mit einem Luftdruck von 0,05 m³/min und hält damit Energieverbrauch und gleichmäßigen Betrieb in Balance. Auf Zuverlässigkeit ausgelegt, hält der Molins Boxer die Verpackung gleichmäßig und präzise, was Stillstände reduziert und die Produktqualität hoch hält.",
      "Damit ist er ein entscheidender Teil jeder auf Effizienz und gleichmäßige Ausbringung ausgerichteten Produktionsanlage – er nimmt umhüllte Packungen auf und formt sie am Linienende zu ordentlichen Stangen.",
    ],
    applications: ["Stangen-/Boxverpackung", "Zusammenführung am Linienende"],
  },
  "sasib-boxer": {
    tagline: "Zigaretten-Boxmaschine mit bis zu 25 Boxen pro Minute.",
    metaTitle: "SASIB Boxer, Zigaretten-Boxmaschine",
    metaDescription:
      "SASIB Boxer Boxmaschine in Pakistan – bis zu 25 Boxen pro Minute für Zigarettenstangen. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Der SASIB Boxer ist eine fortschrittliche Zigaretten-Boxmaschine, bekannt für Tempo und Effizienz. Mit bis zu 25 Boxen pro Minute gibt er dem Durchsatz einer Zigarettenproduktionslinie in Pakistan einen echten Schub.",
      "Er kommt mit einem Leistungsbedarf von 6 kVA aus, verbindet also Leistung mit Performance, und einem Luftdruckbedarf von 0,1 m³/min, wodurch Energieverbrauch und Betriebseffizienz in Balance bleiben.",
      "Auf hochgenaue, gleichmäßige Verpackung ausgelegt, minimiert der SASIB Boxer Stillstände und strafft den Prozess, was ihn zu einem wertvollen Baustein für Großserienumgebungen macht, in denen Tempo und Präzision für Produktivität und Produktqualität zählen.",
    ],
    applications: ["Stangen-/Boxverpackung", "Großserien-Verpackungslinien"],
  },

  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – Zigarettenherstellungsmaschine in Pakistan",
    metaTitle: "MK 8 | Mark 8 Post 64 Zigarettenherstellungsmaschine",
    tagline: "Die zuverlässige Arbeitspferd-Strangmaschine, auf die Fabriken bis heute setzen.",
    metaDescription:
      "Molins Mark 8 Post 64 Zigarettenstrangmaschine in Pakistan – zuverlässige Strangmaschine für gleichmäßige Produktion. Generalüberholt und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die Molins Mark 8 Post 64 ist eine bewährte, leistungsstarke Zigarettenstrangmaschine, die auf Qualität und Flexibilität ausgelegt ist. Sie läuft gleichmäßig mit 1.800 bis 2.000 Zigaretten pro Minute und trägt einen Zweifarbendrucker, sodass Sie das Papier genau so bedrucken können, wie es Ihre Marke verlangt, ohne die Linie zu verlangsamen.",
      "Sie verarbeitet ein breites Formatspektrum: Zigarettenumfänge von 17 mm bis 28,3 mm und kombinierte Filter-Tabakstranglängen von 65 mm bis 110 mm, was alles von Standard 84 mm und 100 mm bis hin zu Slims, Super Slims und Nano abdeckt. Eine Max-Multiroll-Filteransetzung setzt die Filter bei voller Geschwindigkeit sauber an.",
      "Mit rund 3.500 kg ist sie eine schwere, solide Maschine, gebaut, um ihr Tempo über lange Produktionsläufe zu halten. Diese Kombination aus Geschwindigkeit, Formatflexibilität und Zuverlässigkeit macht die Mark 8 Post 64 zur klugen Wahl für Fabriken, die von einer einzigen Strangmaschine starke Ausbringung wünschen.",
    ],
    features: [
      "Bewährte, langlebige Molins-Konstruktion",
      "Gleichmäßiger Strang und sauberer Schnitt",
      "Teile und Know-how breit verfügbar",
      "Einfach für Techniker zu warten",
      "Als generalüberholte Einheit hervorragendes Preis-Leistungs-Verhältnis",
    ],
    applications: ["Einstiegs-Strangmaschinenlinie", "Zuverlässige Ersatz-Strangmaschine"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D mit MAX-15 Strangmaschine",
    tagline: "Hochgeschwindigkeits-Mark-8D-Strangmaschine mit MAX-15-Steuerung.",
    metaDescription:
      "Molins Mark 8D mit MAX-15 Zigarettenstrangmaschine in Pakistan – 3.000 pro Minute von King Size bis Nano. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die Molins Mark 8D mit MAX-15 ist eine kräftige, flexible Zigarettenstrangmaschine für die Anforderungen einer modernen Tabakfabrik. Sie gehört zur bekannten Mark-8-Familie und bietet pakistanischen Herstellern einen zuverlässigen Weg, die Ausbringung zu steigern, ohne bei der Qualität nachzulassen.",
      "Sie läuft mit bis zu 3.000 Zigaretten pro Minute und hält ihr Tempo auf einer stark ausgelasteten Produktionslinie mühelos. Ebenso wichtig: Sie verarbeitet ein breites Formatspektrum. Ob Sie King Size, Demi, Slims, Super Slims oder Nano herstellen – dieselbe Maschine kann sie alle produzieren, was sie zur praktischen Wahl für eine Fabrik macht, die mehrere Segmente zugleich bedient.",
      "Die Strangmaschine nimmt Zigarettenumfänge von 17 mm bis 28,3 mm und kombinierte Filter-Tabakstranglängen von 65 mm bis 110 mm auf, sodass Sie die volle Kontrolle über die Formate behalten und von einem Lauf zum nächsten gleichmäßig bleiben.",
      "Die Konfiguration verbindet die MK-8D-Strangmaschine mit der MAX-15 und ihrer 1117-Einlaufeinheit. Gemeinsam führen sie den Prozess sauber von der Tabakzuführung bis zum fertigen Strang, halten die Linie stabil, reduzieren Stillstände und wahren die Qualität über die gesamte Schicht. Mit einer Gesamtaufnahme von 17 kW hält sie echte Produktionsgeschwindigkeit und vernünftige Betriebskosten in Balance.",
      "Bei all dem bleibt die Maschine kompakt. Mit rund 5.000 kg ist sie solide und verschleißfest, fügt sich aber ohne größeren Umbau in eine bestehende Fertigung ein, und ihre Bauweise hält langer, kontinuierlicher Produktion stand. Im Alltag liefert sie gleichmäßige Zigaretten mit wenig Abfall und geringem Wartungsaufwand – genau das, was eine Fabrik braucht, die schlank arbeiten und dennoch die Nachfrage über verschiedene Formate hinweg erfüllen will.",
      "Kurz gesagt verdient sich die Mark 8D mit MAX-15 ihren Platz durch bewährte Zuverlässigkeit, flexible Formatunterstützung von Slims bis Nano, hohe und dennoch genaue Ausbringung, energieeffizienten Betrieb und einfache Einbindung in eine automatisierte Linie. Ob Sie ältere Anlagen ersetzen oder Kapazität hinzufügen – sie ist eine zukunftsfähige Strangmaschine, die klassische Ingenieurskunst für die moderne Produktion einsetzt.",
    ],
    applications: ["Großserienproduktion", "Multiformat-Fabriken"],
  },
  "mark-9-5-lenze-servo-drives": {
    tagline: "Hochgeschwindigkeits-Mark-9.5-Strangmaschinenlinie mit Lenze-Servoantrieben.",
    metaDescription:
      "Molins Mark 9.5 mit Lenze-Servoantrieben in Pakistan – bis zu 3.500 pro Minute mit Siemens-SPS und Mikrowellen-Gewichtskontrolle. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die Molins Mark 9.5 mit Lenze-Servoantrieben ist für Hersteller gebaut, die hohe Ausbringung ohne Flexibilitätsverlust wünschen. Sie produziert bis zu 3.500 Zigaretten pro Minute bei regulären Durchmessern und 3.200 pro Minute bei Slim- und Super-Slim-Formaten, sodass eine Linie ein breites Produktspektrum bei echter Produktionsgeschwindigkeit abdeckt.",
      "Sie arbeitet über Zigarettenumfänge von 17 mm bis 28,3 mm und kombinierte Filter-Tabakstranglängen von 65 mm bis 110 mm, was Ihnen Spielraum gibt, Formate zu wechseln und dennoch von Lauf zu Lauf einen gleichmäßigen Strang zu halten.",
      "Die Linie vereint drei Einheiten – die MK-9.5-Strangmaschine, den MAX-S-Filteransetzer und den automatischen HCF80-Tray-Filler – mit einer Aufnahme von 35 kW, 20 kW bzw. 15 kW. Gemeinsam führen sie den Prozess von der Herstellung bis zu gefüllten Trays mit sehr wenig Handarbeit dazwischen.",
      "Steuerung und Genauigkeit stehen im Zentrum dieser Maschine. Eine Siemens-SPS führt den Ablauf reibungslos, ein Mikrowellensystem hält das Stranggewicht eng unter Kontrolle, und die Lenze-Servoantriebe liefern die präzise, gleichmäßige Bewegung, die die Qualität selbst bei voller Geschwindigkeit hoch hält.",
      "Mit einem Gesamtgewicht von rund 8.600 kg ist sie eine schwere, solide Linie für die Großserienfertigung. Für eine Fabrik, die zuverlässige Ausbringung in großen Mengen mit moderner Steuerung und einfacher Wartung braucht, ist die Mark 9.5 mit Lenze-Servoantrieben eine starke, zukunftsfähige Wahl.",
    ],
    applications: ["Großserienproduktion", "Multiformat-Fabriken"],
  },
  "mark-9-5-max-s-tray-filler": {
    tagline: "Hochgeschwindigkeits-Mark-9.5-Strangmaschine mit Max S und Massenstrom-Tray-Filler.",
    metaDescription:
      "Molins Mark-9.5 mit Max S und Tray-Filler in Pakistan – 4.500 bis 5.000 Zigaretten pro Minute. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die Molins Mark-9.5 mit Max S und Tray-Filler ist eine erstklassige Wahl für Hersteller, die hohe Ausbringung, saubere Filterintegration und zuverlässige Produktionsleistung in einer Linie brauchen. Auf Volumen ausgelegt, läuft sie mit bemerkenswerten 4.500 bis 5.000 Zigaretten pro Minute, was sie zu einem der effizientesten Systeme für Großfabriken in Pakistan macht.",
      "Im Zentrum steht die MK-9.5-Strangmaschine, eine Weiterentwicklung der bewährten Mark-9-Serie, die starke Ausbringung bei hoher Präzision und Gleichmäßigkeit hält. Sie unterstützt Zigarettenumfänge von 17 mm bis 28,3 mm und kombinierte Filter-Tabakstranglängen von 65 mm bis 110 mm, sodass Sie zwischen King Size, Slims, Demi und anderen Formaten wechseln können, ohne Strangqualität zu verlieren.",
      "Die Strangmaschine ist mit dem Max-S-Filteransetzer gepaart, der den Filter genau und wiederholbar an den Tabakstrang ansetzt. Über einen Massenstrom-Tray-Filler steigert sie den Durchsatz und hält dabei Materialabfall und Fehlausrichtung gering, sodass die Filterintegrität über jeden Produktionszyklus gleichmäßig bleibt.",
      "Eine Standard-Formateinstellung von 84 mm hält die Maschine im Einklang mit weltweit anerkannten Zigarettenmaßen, was sie sowohl für die lokale Versorgung als auch für die Exportproduktion praktisch macht. Ob Sie Ihre eigene Marke fertigen oder große Aufträge erfüllen – sie wechselt reibungslos zwischen Chargen und passt sich leicht wechselnden Bestellungen an.",
      "Mit rund 7.800 kg ist sie eine schwere, stabile Linie für Dauerbetrieb und lange Lebensdauer. Für eine Fabrik, die skalieren und dabei Qualität schützen und Stillstände gering halten will, bringt die Mark-9.5 mit Max S und Tray-Filler Geschwindigkeit, Flexibilität und Zuverlässigkeit zusammen – von bewährter Herstellung über präzise Filteransetzung bis zu einer schlanken Massenstromzuführung und einem robusten Schwerlastrahmen.",
    ],
    applications: ["Großserienproduktion", "Exportfähige Fertigung"],
  },
  "mark-9-max-s": {
    tagline: "Hochgeschwindigkeits-MK-9-Strangmaschine mit Max S und Massenstrom-Tray-Filler.",
    metaDescription:
      "Molins MK-9 mit Max S in Pakistan – 4.500 bis 5.000 Zigaretten pro Minute mit Massenstrom-Tray-Filler. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die Molins MK-9 mit Max S ist eine weitere hocheffiziente Zigarettenstrangmaschine für die ernsthafte Produktion und läuft zwischen 4.500 und 5.000 Zigaretten pro Minute. Sie ist eine zuverlässige Wahl für Fabriken in Pakistan, die starke, gleichmäßige Ausbringung aus einer einzigen Linie wünschen.",
      "Die MK-9-Strangmaschine im Kern hält die Produktion Schicht für Schicht präzise und gleichmäßig. Sie arbeitet über Zigarettenumfänge von 17 mm bis 28,3 mm und kombinierte Filter-Tabakstranglängen von 65 mm bis 110 mm, sodass Sie echte Flexibilität erhalten, zwischen Formaten zu wechseln, ohne Strangqualität zu verlieren.",
      "Sie ist mit dem Max-S-Filteransetzer und einem Massenstrom-Tray-Filler ausgestattet, die den Schritt der Filteransetzung schneller und zuverlässiger machen und dabei Abfall und Fehlausrichtung gering halten. Eine Standard-Formateinstellung von 84 mm hält sie im Einklang mit weithin anerkannten Zigarettenmaßen, sodass sie sich mühelos in die meisten Produktionspläne einfügt.",
      "Mit rund 7.800 kg ist die MK-9 eine schwere, stabile Maschine für Dauerbetrieb und lange Lebensdauer. Für eine Fabrik, die die Großserienproduktion hochfährt und dabei Qualität schützt, ist sie eine solide, zuverlässige Ergänzung der Fertigung.",
    ],
    applications: ["Großserienproduktion", "Haupt-Strangmaschinenlinie"],
  },
  "protos-70": {
    tagline: "Hochgeschwindigkeits-Protos-70-Linie bis zu 7.000 Zigaretten pro Minute.",
    metaDescription:
      "Hauni Protos 70 Zigarettenstrangmaschine in Pakistan – bis zu 7.000 pro Minute mit Siemens- oder Beckhoff-IPC-Steuerung. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die Hauni Protos 70 ist eine fortschrittliche Zigarettenstrangmaschine, gebaut, um höchste Ansprüche an Produktionseffizienz und Präzision zu erfüllen. Sie läuft mit beeindruckenden 7.000 Zigaretten pro Minute bei regulären Durchmessern und 6.000 pro Minute bei Slim- und Super-Slim-Formaten, was Fabriken in Pakistan echte Geschwindigkeit und Flexibilität aus einer einzigen Linie gibt.",
      "Sie verarbeitet Zigarettenumfänge von 17 mm bis 28,3 mm und kombinierte Filter-Tabakstranglängen von 65 mm bis 110 mm, sodass Sie zwischen Formaten wechseln und dennoch von Lauf zu Lauf einen gleichmäßigen Strang halten können.",
      "Ein Siemens-IPC- oder Beckhoff-IPC-Steuerungssystem hält den Ablauf automatisiert, reibungslos und zuverlässig, während ein Mikrowellen-Gewichtskontrollsystem jede Zigarette auf ein präzises Gewicht hält, für gleichmäßige Produktqualität. Die Linie vereint die S7000-Strangmaschine, die M8000-Filteransetzung und den automatischen F80-Tray-Filler, die jeweils ihre eigene Prozessstufe sauber bewältigen.",
      "Mit 50 kW für die S7000, 20 kW für die M8000 und 15 kW für die F80 ist die Protos 70 eine leistungsstarke, fähige Linie. Mit einem Gesamtgewicht von rund 10.800 kg ist sie schwer und stabil, für Dauerbetrieb und lange Lebensdauer gebaut, was sie zur idealen Wahl für die Großserien-Zigarettenproduktion macht.",
    ],
    applications: ["Großserienproduktion", "Großserienfertigung"],
  },
  "protos-80-er": {
    tagline: "Hochgeschwindigkeits-Protos-80-ER-Linie bis zu 8.000 Zigaretten pro Minute.",
    metaDescription:
      "Hauni Protos 80 ER Zigarettenstrangmaschine in Pakistan – bis zu 8.000 pro Minute mit Siemens- oder Beckhoff-IPC-Steuerung. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die Protos 80 ER ist eine Hochleistungs-Zigarettenstrangmaschine für Hersteller, die maximale Effizienz, Präzision und Ausbringung wünschen. Von Hauni gebaut, ist die Protos-80-Serie für ihre Zuverlässigkeit und fortschrittliche Automatisierung bekannt, und ob Sie reguläre oder Slim-Zigaretten produzieren – sie liefert starke Gleichmäßigkeit und Produktivität, was sie zur vertrauten Wahl für Großserienlinien in Pakistan macht.",
      "Bei der Kapazität sticht diese Maschine wirklich hervor. Sie produziert bis zu 8.000 Zigaretten pro Minute bei regulären Durchmessern und 7.000 pro Minute bei Slim- und Super-Slim-Formaten. Sie nimmt Zigarettenumfänge von 17 mm bis 28,3 mm und kombinierte Filter-Tabakstranglängen von 65 mm bis 110 mm auf, sodass sie über Zigarettentypen und Marktanforderungen hinweg flexibel bleibt. Von King Size über Slim bis zu Nischenformaten passt sich die Protos 80 ER an Ihre Produktion an.",
      "Für Präzision und Verfügbarkeit läuft sie mit einer hochwertigen SPS-Steuerung auf einem Siemens-IPC oder einem Beckhoff-IPC und hält den gesamten Zyklus reibungslos und automatisiert. Echtzeitüberwachung und schnelle Systemreaktion reduzieren menschliche Fehler und halten die Linie am Laufen, während ein integriertes Mikrowellen-Gewichtskontrollsystem bei jeder Einheit ein gleichmäßiges Zigarettengewicht für enge Qualitätskontrolle hält.",
      "Die Linie besteht aus drei leistungsstarken, zusammenarbeitenden Einheiten: der S7000-Strangmaschine mit 50 kW, der M8000-Filteransetzung mit 20 kW und dem automatischen F80-Tray-Filler mit 15 kW. Bekannt für Zuverlässigkeit und weltweit in Zigarettenfabriken im Einsatz, verbindet die Protos 80 effizienten Energieeinsatz, geringen Abfall und präzise Technik, um Betriebskosten niedrig und Produktstandards hoch zu halten. Mit einem Gesamtgewicht von rund 10.800 kg ist sie eine schwere, stabile Linie für die kontinuierliche Großserienproduktion.",
    ],
    applications: ["Großserienproduktion", "Großserienfertigung"],
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

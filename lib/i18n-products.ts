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
  it: {
    "Machine Speed": "Velocità macchina",
    "Filter + Tobacco Rod Length": "Lunghezza baco filtro + tabacco",
    "Cigarette Circumference": "Circonferenza sigaretta",
    Type: "Tipo",
    "Production Capacity": "Capacità produttiva",
    "Total Weight": "Peso totale",
    Power: "Potenza",
    "PLC Control System": "Sistema di controllo PLC",
    "Machine Unit": "Unità macchina",
    Weight: "Peso",
    Speed: "Velocità",
    "Cigarette Sizes": "Formati sigaretta",
    "Air Pressure": "Pressione aria",
    "Weight Control": "Controllo peso",
    "Servo System": "Sistema servo",
    "Power Requirement": "Fabbisogno di potenza",
    "Packet Set-up Available": "Formati pacchetto disponibili",
    Model: "Modello",
    "Machine Model": "Modello macchina",
    Function: "Funzione",
    "Filter Attachment": "Applicazione filtro",
    "Electrical System": "Impianto elettrico",
    "Default Setup Size": "Formato predefinito",
    "Cigarette Maker": "Macchina per sigarette",
    "Wrapping Method": "Metodo di incarto",
    "Total Power": "Potenza totale",
    "Pack Quality": "Qualità del pacchetto",
    "Filter Length": "Lunghezza filtro",
    "Filter Circumference": "Circonferenza filtro",
    Capacity: "Capacità",
    Voltage: "Tensione",
    Version: "Versione",
    Utilisation: "Utilizzo",
    Separation: "Separazione",
    "Rod Speed Range": "Intervallo velocità baco",
    "Recovery Rate": "Tasso di recupero",
    Preparation: "Preparazione",
    "Plug Assembler Weight": "Peso plug assembler",
    Outcome: "Risultato",
    Operation: "Funzionamento",
    "Number of Knives": "Numero di lame",
    "Maximum Capacity": "Capacità massima",
    Manufacturer: "Produttore",
    "Maker Weight": "Peso macchina di produzione",
    Integration: "Integrazione",
    "Filter Rod Length": "Lunghezza bacchetta filtro",
    "Filter Rod Diameter": "Diametro bacchetta filtro",
    Efficiency: "Efficienza",
    Drive: "Azionamento",
    Cylinders: "Cilindri",
    "Cut-off Speed": "Velocità di taglio",
    Control: "Controllo",
    Consistency: "Uniformità",
    Condition: "Condizione",
    "Circumference Control": "Controllo circonferenza",
    Brand: "Marca",
    Benefit: "Vantaggio",
    Automation: "Automazione",
  },
  ru: {
    "Machine Speed": "Скорость машины",
    "Filter + Tobacco Rod Length": "Длина стержня фильтр + табак",
    "Cigarette Circumference": "Окружность сигареты",
    Type: "Тип",
    "Production Capacity": "Производительность",
    "Total Weight": "Общий вес",
    Power: "Мощность",
    "PLC Control System": "Система управления ПЛК",
    "Machine Unit": "Блок машины",
    Weight: "Вес",
    Speed: "Скорость",
    "Cigarette Sizes": "Форматы сигарет",
    "Air Pressure": "Давление воздуха",
    "Weight Control": "Контроль веса",
    "Servo System": "Сервосистема",
    "Power Requirement": "Потребляемая мощность",
    "Packet Set-up Available": "Доступные форматы пачки",
    Model: "Модель",
    "Machine Model": "Модель машины",
    Function: "Функция",
    "Filter Attachment": "Присоединение фильтра",
    "Electrical System": "Электрическая система",
    "Default Setup Size": "Формат по умолчанию",
    "Cigarette Maker": "Сигаретная машина",
    "Wrapping Method": "Метод обёртки",
    "Total Power": "Общая мощность",
    "Pack Quality": "Качество пачки",
    "Filter Length": "Длина фильтра",
    "Filter Circumference": "Окружность фильтра",
    Capacity: "Производительность",
    Voltage: "Напряжение",
    Version: "Версия",
    Utilisation: "Использование",
    Separation: "Разделение",
    "Rod Speed Range": "Диапазон скорости стержня",
    "Recovery Rate": "Коэффициент извлечения",
    Preparation: "Подготовка",
    "Plug Assembler Weight": "Вес узла сборки штранга",
    Outcome: "Результат",
    Operation: "Работа",
    "Number of Knives": "Количество ножей",
    "Maximum Capacity": "Максимальная производительность",
    Manufacturer: "Производитель",
    "Maker Weight": "Вес производственной машины",
    Integration: "Интеграция",
    "Filter Rod Length": "Длина фильтровального стержня",
    "Filter Rod Diameter": "Диаметр фильтровального стержня",
    Efficiency: "Эффективность",
    Drive: "Привод",
    Cylinders: "Цилиндры",
    "Cut-off Speed": "Скорость отреза",
    Control: "Управление",
    Consistency: "Однородность",
    Condition: "Состояние",
    "Circumference Control": "Контроль окружности",
    Brand: "Бренд",
    Benefit: "Преимущество",
    Automation: "Автоматизация",
  },
  ar: {
    "Machine Speed": "سرعة الماكينة",
    "Filter + Tobacco Rod Length": "طول عود الفلتر + التبغ",
    "Cigarette Circumference": "محيط السيجارة",
    Type: "النوع",
    "Production Capacity": "الطاقة الإنتاجية",
    "Total Weight": "الوزن الإجمالي",
    Power: "القدرة",
    "PLC Control System": "نظام تحكم PLC",
    "Machine Unit": "وحدة الماكينة",
    Weight: "الوزن",
    Speed: "السرعة",
    "Cigarette Sizes": "مقاسات السجائر",
    "Air Pressure": "ضغط الهواء",
    "Weight Control": "التحكم في الوزن",
    "Servo System": "نظام سيرفو",
    "Power Requirement": "متطلبات القدرة",
    "Packet Set-up Available": "صيغ العلب المتاحة",
    Model: "الموديل",
    "Machine Model": "موديل الماكينة",
    Function: "الوظيفة",
    "Filter Attachment": "تركيب الفلتر",
    "Electrical System": "النظام الكهربائي",
    "Default Setup Size": "المقاس الافتراضي",
    "Cigarette Maker": "ماكينة صناعة السجائر",
    "Wrapping Method": "طريقة اللف",
    "Total Power": "القدرة الإجمالية",
    "Pack Quality": "جودة العلبة",
    "Filter Length": "طول الفلتر",
    "Filter Circumference": "محيط الفلتر",
    Capacity: "الطاقة",
    Voltage: "الجهد",
    Version: "الإصدار",
    Utilisation: "الاستغلال",
    Separation: "الفصل",
    "Rod Speed Range": "نطاق سرعة العود",
    "Recovery Rate": "معدل الاسترجاع",
    Preparation: "التحضير",
    "Plug Assembler Weight": "وزن مجمّع السدادة",
    Outcome: "النتيجة",
    Operation: "التشغيل",
    "Number of Knives": "عدد السكاكين",
    "Maximum Capacity": "الطاقة القصوى",
    Manufacturer: "الصانع",
    "Maker Weight": "وزن ماكينة الصناعة",
    Integration: "التكامل",
    "Filter Rod Length": "طول عود الفلتر",
    "Filter Rod Diameter": "قطر عود الفلتر",
    Efficiency: "الكفاءة",
    Drive: "الدفع",
    Cylinders: "الأسطوانات",
    "Cut-off Speed": "سرعة القطع",
    Control: "التحكم",
    Consistency: "التجانس",
    Condition: "الحالة",
    "Circumference Control": "التحكم في المحيط",
    Brand: "العلامة التجارية",
    Benefit: "الفائدة",
    Automation: "الأتمتة",
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
    h1: "Mark 8 Post 64 – Zigarettenherstellungsmaschine in Deutschland",
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

  "kdf-1": {
    h1: "Hauni KDF-1 Zigarettenfilter-Herstellungsmaschine",
    metaTitle: "Hauni KDF-1 Filtermaschine",
    tagline: "Hauni-KDF-1-Filterlinie mit laserbasierter Umfangskontrolle.",
    metaDescription:
      "Hauni KDF-1 Filtermaschine in Pakistan – 120-mm-Filter mit Siemens-/Beckhoff-SPS und laserbasierter Umfangskontrolle. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die Hauni KDF-1 ist eine bewährte, leistungsstarke Filterlinie mit einem starken Ruf für Leistung, Präzision und Langlebigkeit in der Zigarettenfertigung. Für die Anforderungen der Großserienproduktion gebaut, eignet sich die KDF-1 für Hersteller in Pakistan, die Gleichmäßigkeit, Tempo und Qualität an erste Stelle setzen.",
      "Für den Betrieb mit hoher Ausbringung gemacht, bietet sie eine robuste Produktionskapazität für 120-mm-Filter, die sich sowohl für Standard- als auch für kundenspezifische Zigarettenformate gut eignet. Sie unterstützt Filterumfänge von 16,8 mm bis 28,1 mm und Filterlängen von 64 mm bis 150 mm, sodass Sie ein breites Spektrum an Filtergrößen und -typen ohne ständige Umbauten produzieren können. Von King-Size-Filtern über Slims bis zu Spezialdesigns bewältigt die KDF-1 sie alle effizient.",
      "Sie läuft mit einer fortschrittlichen SPS-Steuerung, verfügbar in Siemens- oder Beckhoff-Konfiguration, die intuitive Bedienung, Echtzeitdiagnose und zuverlässige Automatisierung bietet und die Filterqualität über den gesamten Lauf gleichmäßig hält. Lenze- oder Beckhoff-Servosysteme erhöhen die Stabilität und halten die Bewegung ruhig und genau.",
      "Ein herausragendes Merkmal ist das laserbasierte Umfangskontrollsystem, das den Umfang jedes Filters hochpräzise misst, Abweichungen reduziert und jede Charge gleichmäßig hält. Diese Genauigkeit ist entscheidend, um die Markenqualitätsstandards bei Premiumprodukten zu halten.",
      "Bei all ihrer Ausbringung hält die KDF-1 mit insgesamt 40 kW ein ausgewogenes Energieprofil, was sie langfristig wirtschaftlich macht. Ihre robuste, gut konstruierte Bauweise gibt lange Lebensdauer, und ihr modularer Aufbau sowie ihre Kompatibilität mit verschiedenen Zigarettentypen machen sie sowohl für die kleinere als auch für die große Filterproduktion zur starken Wahl – ob Sie Kapazität erweitern oder ältere Maschinen ersetzen.",
    ],
    applications: ["Großserien-Filterproduktion", "Standard- und Spezialfilter"],
  },
  "kdf-2": {
    h1: "Hauni KDF-2 Zigarettenfilter-Herstellungsmaschine",
    metaTitle: "Hauni KDF-2 Hochgeschwindigkeits-Filtermaschine",
    tagline: "Hochgeschwindigkeits-Hauni-KDF-2-Filterlinie mit 400 Metern pro Minute.",
    metaDescription:
      "Hauni KDF-2 Filtermaschine in Pakistan – 400 Meter Acetat-Kabel pro Minute mit Siemens-/Beckhoff-SPS. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Die Hauni KDF-2 ist eine Weltklasse-Filtermaschine für die hocheffiziente Zigarettenfilterproduktion mit hoher Ausbringung. Bekannt für ihre Konstruktionsqualität und fortschrittliche Automatisierung, ist die KDF-2 eine vertraute Wahl für Großhersteller in Pakistan, die sowohl Präzision als auch Produktivität brauchen.",
      "Sie läuft in einem beeindruckenden Tempo und verarbeitet 400 Meter Acetat-Kabel pro Minute, was sie den Anforderungen moderner Produktionslinien gut anpasst. Dieses Tempo geht mit echter Vielseitigkeit einher: Sie unterstützt Filterumfänge von 16,8 mm bis 28,1 mm und Filterlängen von 64 mm bis 150 mm und deckt so alles von Standard-King-Size-Filtern bis zu spezielleren Formaten mit Gleichmäßigkeit, Qualität und minimalen Stillständen ab.",
      "Was die KDF-2 auszeichnet, ist ihre Automatisierung. Eine SPS-Steuerung, verfügbar in Siemens- oder Beckhoff-Konfiguration, bietet volle Kontrolle und Echtzeitüberwachung, während ein leistungsstarkes Lenze- oder Beckhoff-Servosystem die Bewegungen genau und den Betrieb zuverlässig hält. Das verringert die Fehlerspanne und hält die Filterqualität gleichmäßig, sodass sich die Maschine reibungslos als zuverlässiges Rückgrat der kontinuierlichen Großserienfertigung einfügt.",
      "Auf Langlebigkeit gebaut, arbeitet die KDF-2 mit einem Kabelöffner und dem automatischen HCF80-Tray-Filler zusammen, um den Arbeitsablauf zu straffen und Handarbeit zu reduzieren. Sie nimmt 40 kW für die KDF-2-Haupteinheit und 15 kW für den HCF80-Filler auf und verbindet so Energieeffizienz mit starker Leistung.",
      "Trotz all ihrer Leistungsfähigkeit behält die KDF-2 mit rund 6.500 kg einen überschaubaren Platzbedarf, und ihre solide Konstruktion gibt langfristige Haltbarkeit unter anspruchsvollen Produktionsplänen. Ob Sie eine neue Anlage aufbauen oder bestehende Maschinen ersetzen – sie ist eine kluge Investition, die sich sauber in moderne Produktionssysteme einfügt und dabei ausgezeichnete Filterqualität liefert.",
    ],
    applications: ["Großserien-Filterproduktion", "Großserienfertigung"],
  },
  "molins-pm-5": {
    tagline: "Molins-Filtermaschine mit hoher Kapazität und 4.000 Filtern pro Minute.",
    metaDescription:
      "Molins PM-5 Filtermaschine in Pakistan – Maschine mit hoher Kapazität und 4.000 Filtern pro Minute. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die Molins PM-5 ist eine Filtermaschine mit hoher Kapazität für die Anforderungen der Großserienproduktion. Mit einer Kapazität von 4.000 Filtern pro Minute ist sie ein starkes Beispiel für Effizienz und Präzision in der Filterfertigung und passt zuverlässig zu stark ausgelasteten Fabriken in Pakistan.",
      "Sie bietet nützliche Flexibilität bei der Filterdimensionierung, mit einem Filterstrangdurchmesser von 7,5 bis 7,8 mm und Filterstranglängen von 108 bis 126 mm, sodass sie unterschiedliche Filterspezifikationen problemlos aufnehmen kann.",
      "Mit rund 2.000 kg hat die PM-5 eine robuste Bauweise, die Haltbarkeit und stabilen Lauf über lange Zeiträume gibt. Von Molins gebaut, einem bekannten Namen der Branche, verbindet sie bewährte Technik mit hoher Ausbringung, was sie zu einem unverzichtbaren Baustein für Hersteller macht, die Qualitätsfilter bei maximalem Durchsatz wünschen.",
    ],
    applications: ["Großserien-Filterproduktion", "Molins-basierte Linien"],
  },
  "hollow-tube-maker": {
    tagline: "Hochgeschwindigkeits-Hohlrohrmaschine mit 2.100 Zigaretten pro Minute.",
    metaTitle: "Hohlrohrmaschine, Zigarettenfiltermaschine",
    metaDescription:
      "Hohlrohrmaschine in Pakistan – 2.100 pro Minute mit Plug-Assembler für Spezialfilterrohre. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die Hohlrohrmaschine sticht durch ihre Produktionskapazität und ihren Hochgeschwindigkeitslauf hervor. Fähig, 2.100 Zigaretten pro Minute zu produzieren, liefert sie starke Effizienz und gleichmäßige Ausbringung. Ein Stranggeschwindigkeitsbereich von 140 bis 175 Metern pro Minute sowie eine Abschneidgeschwindigkeit von bis zu 2.500 Strängen pro Minute unterstreichen, wie gut sie sich für die Großserienproduktion in Fabriken in Pakistan eignet.",
      "Mit 3.050 kg hat die Maschine eine robuste Bauweise für Haltbarkeit und langfristige Zuverlässigkeit. Der Plug-Assembler fügt weitere 1.800 kg hinzu und arbeitet im Takt mit der Maschine für eine präzise, effiziente Rohrproduktion. Die Gesamtleistungsaufnahme beträgt 14 kW, aufgeteilt in 6,5 kW für die Maschine und 7,5 kW für den Plug-Assembler, was Leistung und Energieverbrauch gut ausbalanciert.",
      "Für die Großserienfertigung ausgelegt, nutzt die Hohlrohrmaschine aktuelle Technik, um hochwertige Rohre herzustellen. Ihre Hochgeschwindigkeitsfähigkeit und ihre solide Technik machen sie zu einem wertvollen Baustein für Produzenten, die eine hohe Nachfrage erfüllen und dabei exzellente Produktionsstandards halten müssen.",
    ],
    applications: ["Großserien-Filterproduktion", "Spezialfilterrohre"],
  },

  "tobacco-feeder": {
    tagline: "Führt Mark-8- und Mark-9-Strangmaschinen einen gleichmäßigen Tabakstrom zu.",
    metaTitle: "Tabakbeschicker für Zigarettenstrangmaschinen",
    metaDescription:
      "Tabakbeschicker in Pakistan – gleichmäßiger Tabakstrom für Mark-8- und Mark-9-Strangmaschinen. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Der Tabakbeschicker ist eine entscheidende Zuführmaschine für eine Zigarettenfabrik. Er führt den Herstellmaschinen kontinuierlich und gleichmäßig Tabak zu und schichtet ihn ordentlich, sodass er genau richtig für die Produktion vorbereitet ist.",
      "Er ist mit Mark-8- und Mark-9-Maschinen kompatibel und fügt sich mühelos in eine bestehende Anlage ein. Seine einstellbaren Mengenwerte lassen Sie den Tabakstrom präzise steuern, was die Produktionseffizienz steigert, und seine Automatisierung reduziert Handarbeit, strafft den Betrieb und hält die Produktivität hoch.",
    ],
    applications: ["Beschickung der Strangmaschine", "Gleichmäßige Strangproduktion"],
  },
  "cigarette-reclaimer": {
    tagline: "Gewinnt Tabak aus Abfall mit 120 kg/Stunde und 99,8 % Effizienz zurück.",
    metaTitle: "Zigarettenrückgewinner, Tabakrückgewinnungsmaschine",
    metaDescription:
      "Zigarettenrückgewinner in Pakistan – gewinnt Tabak aus Produktionsabfall mit 120 kg/Stunde und 99,8 % Effizienz zurück. Geliefert von Civic Tobacco Machinery.",
    intro: [
      "Der Zigarettenrückgewinner ist eine ausgezeichnete Tabakrückgewinnungsmaschine für Abfall aus der Zigarettenfertigung. Er trennt wiederverwendbaren Tabak mit sehr geringen Verlusten von Abfallstoffen, sodass der Tabak, den Sie sonst wegwerfen würden, zurück in die Produktion geht.",
      "Bei maximaler Kapazität gewinnt er 120 kg pro Stunde zurück und arbeitet mit beeindruckenden 99,8 % Effizienz, was Ihnen die höchstmögliche Auslastung gibt. Mit einer Rückgewinnungsrate von 90 % bietet er einen echten Vorteil bei der Abfallreduzierung und der Steigerung der Gesamtproduktionseffizienz.",
      "Er ist benutzerfreundlich und einfach in Ihre Produktionslinie zu integrieren, was ihn zu einer praktischen, kostensparenden Ergänzung für Fabriken in Pakistan macht, die das Meiste aus jeder Charge herausholen wollen.",
    ],
    applications: ["Abfallreduzierung", "Tabakrückgewinnung"],
  },
  "tobacco-cutters": {
    tagline: "Hauni-KT-400-Tabakschneider mit fünf Messern und SPS-Schnittgrößensteuerung.",
    metaTitle: "Hauni Tabakschneider KT-400",
    metaDescription:
      "Hauni Tabakschneider KT-400 in Pakistan – Fünf-Messer-Schneider mit SPS-geregelter Schnittgröße. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Der Hauni Tabakschneider KT-400 ist eine präzisionsgefertigte Maschine, die eine entscheidende Rolle dabei spielt, die Schnittqualität in der Tabakverarbeitung gleichmäßig zu halten. Er trägt fünf Messer, die gleichmäßige Schnitte liefern und die Gesamtqualität der Tabakmischung verbessern, und pneumatische Zylinder betätigen die Klemmbacke für glattes, effizientes Schneiden mit weniger Stillstand und Wartung.",
      "Der KT-400 läuft außerdem mit einem fortschrittlichen SPS-Antriebssystem auf einer Messing-Biegelatte, das die Schnittgröße präzise regelt. Das hält jede Charge gleichmäßig und lässt Sie die Schnittgröße auf spezifische Anforderungen abstimmen, was echte Vielseitigkeit hinzufügt. Mit seiner Präzision und Zuverlässigkeit ist der KT-400 ein wichtiger Baustein für jeden Tabakproduktionsbetrieb in Pakistan, der auf Spitzenqualität und Effizienz zielt.",
    ],
    applications: ["Primärverarbeitung", "Aufbereitung von Schnitttabak"],
  },
  "tobacco-stem-flattener": {
    tagline: "Walzt Tabakrippen für gleichmäßige Mischung und weniger Blattabfall.",
    metaTitle: "Rippenwalze, Maschine für die Primärverarbeitung",
    metaDescription:
      "Rippenwalze in Pakistan – walzt Rippen für gleichmäßige Mischung und reduzierten Blattabfall. Geliefert und betreut von Civic Tobacco Machinery.",
    intro: [
      "Die Rippenwalze spielt eine Schlüsselrolle bei der Optimierung des Tabakverarbeitungsablaufs. Durch das Walzen der Tabakrippen bereitet sie diese für die gleichmäßige Mischung mit den Blättern vor, was die Verarbeitung erleichtert und die Wahrscheinlichkeit von Ungleichmäßigkeiten im Endprodukt verringert.",
      "Durch das effiziente Walzen der Rippen minimiert sie außerdem den Blattabfall und macht den gesamten Prozess wirtschaftlicher und nachhaltiger. Das Ergebnis ist ein gleichmäßiges, hochwertiges Produkt, das strenge Branchenstandards erfüllt, was die Rippenwalze zu einem wertvollen Baustein für jeden Tabakverarbeitungsbetrieb in Pakistan macht.",
    ],
    applications: ["Primärverarbeitung", "Ausbeuteverbesserung"],
  },
};

const it: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "Impacchettatrice per sigarette HLP-180",
    metaTitle: "Impacchettatrice HLP-180, 180 pacch./min",
    tagline: "Linea per pacchetti rigidi ad alta velocità a 180 pacchetti al minuto.",
    metaDescription:
      "Impacchettatrice per sigarette HLP-180 in Pakistan: 180 pacchetti al minuto dai formati King a Nano con controllo PLC. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La HLP-180 è una macchina potente di nuova generazione costruita per l'impacchettamento di sigarette ad alta velocità. Nota per prestazioni costanti e produzione affidabile, l'impacchettatrice HLP-180 è adatta ai produttori che vogliono snellire il processo di impacchettamento senza rinunciare a qualità o precisione.",
      "Con una produzione di 180 pacchetti al minuto, esegue cicli di impacchettamento efficienti e regolari grazie al suo meccanismo a singolo pistone, mantenendo allineamento, incarto e sigillatura perfetti su ogni pacchetto. Questo permette alle fabbriche in Pakistan di soddisfare una domanda elevata mantenendo una finitura pulita e ripetibile.",
      "È progettata per gestire un'ampia gamma di formati di sigaretta, tra cui King Size, Demi, Slims, Super Slims e Nano. Questa versatilità significa che puoi servire preferenze diverse dei consumatori nei mercati locali ed esteri, dai formati tradizionali ai prodotti di nicchia, tutto sulla stessa macchina.",
      "Un sistema di controllo PLC mantiene il funzionamento preciso e completamente automatizzato, così ogni pacchetto esce uniforme, ben incartato e pronto per la vendita. L'interfaccia intuitiva dà all'operatore pieno controllo su velocità, rilevamento errori e monitoraggio della produzione, riducendo i tempi di fermo e aumentando l'efficienza complessiva.",
      "Ciò che distingue davvero la HLP-180 è la sua flessibilità nelle forme del pacchetto. Supporta formati con angoli arrotondati, bordo smussato, tipo D e quadrati, così i marchi possono differenziare la loro confezione, distinguersi sullo scaffale e stare al passo con le tendenze del mercato. Costruita per la produzione continua su larga scala, è una scelta solida sia che tu stia ampliando una linea o sostituendo attrezzature più vecchie.",
    ],
    applications: ["Produzione di pacchetti rigidi in grandi volumi", "Mercati locali ed esteri"],
  },
  "hlp-200": {
    h1: "Impacchettatrice per sigarette HLP-200",
    metaTitle: "Impacchettatrice HLP-200, 200 pacch./min",
    tagline: "Linea per pacchetti rigidi a doppio pistone a 200 pacchetti al minuto.",
    metaDescription:
      "Impacchettatrice per sigarette HLP-200 in Pakistan: linea a doppio pistone da 200 pacchetti al minuto dai formati King a Nano. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La HLP-200 è un'impacchettatrice a tramoggia con doppio pistone costruita per la produzione da piccola a media e in grandi volumi. È una scelta popolare tra i produttori in Pakistan perché utilizza il materiale con attenzione e aiuta a contenere i costi di gestione, mantenendo al contempo un ritmo rapido e regolare.",
      "Funzionando a 200 pacchetti al minuto con una portata massima di circa 12.000 sigarette, si colloca al centro della linea di impacchettamento come prima unità critica, formando e completando il pacchetto prima che passi all'incarto e all'inscatolamento. Supporta tutti i formati comuni di pacchetto di sigarette, quindi si inserisce facilmente nella maggior parte delle configurazioni produttive.",
      "La macchina gestisce un'ampia gamma di formati di sigaretta, tra cui King Size, Demi, Slims, Super Slims e Nano, e il suo sistema a doppio pistone mantiene il ciclo di impacchettamento efficiente e la finitura uniforme. Un sistema di controllo PLC mantiene il funzionamento preciso e completamente automatizzato, dando all'operatore un controllo chiaro su velocità, rilevamento errori e monitoraggio.",
      "Per la presentazione del pacchetto offre formati con angoli arrotondati, bordo smussato, tipo D e quadrati, così i marchi possono modellare la confezione per distinguersi sullo scaffale. Alimentata a 220V/380V e costruita per una produzione continua e affidabile, la HLP-200 è una solida unità centrale per qualsiasi linea di impacchettamento integrata.",
    ],
    applications: ["Produzione di pacchetti rigidi in grandi volumi", "Cuore di una linea di impacchettamento integrata"],
  },
  "hlp-225": {
    h1: "Impacchettatrice per sigarette HLP-225",
    metaTitle: "Impacchettatrice HLP-225, 225 pacch./min",
    tagline: "Linea per pacchetti rigidi a doppio pistone ad alta velocità a 225 pacchetti al minuto.",
    metaDescription:
      "Impacchettatrice per sigarette HLP-225 in Pakistan: linea a doppio pistone ad alta velocità da 225 pacchetti al minuto con controllo PLC. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La linea di impacchettamento HLP-225 è un vero passo avanti nell'impacchettamento delle sigarette. Funzionando a 225 pacchetti al minuto, questa macchina a doppio pistone offre elevata efficienza e portata alle fabbriche che devono impacchettare su larga scala.",
      "È progettata per gestire un'ampia gamma di formati di sigaretta, tra cui King, Demi, Slims, Super Slims e Nano, così i produttori in Pakistan ottengono la flessibilità di soddisfare diverse esigenze di mercato con un'unica macchina.",
      "Un moderno sistema di controllo PLC migliora la precisione e automatizza il processo di impacchettamento, riducendo l'intervento manuale e gli errori. La HLP-225 supporta inoltre più formati di pacchetto, tra cui angoli arrotondati, bordo smussato, tipo D e quadrati, che permettono ai marchi di adattare la confezione a diverse preferenze ed esigenze dei consumatori.",
      "Costruita per la produzione su larga scala, la HLP-225 unisce funzioni avanzate a una struttura robusta per prestazioni affidabili e costanti. La sua capacità di impacchettare ad alta velocità senza rinunciare alla qualità la rende una risorsa preziosa per qualsiasi operazione che voglia aumentare la produzione e restare competitiva.",
    ],
    applications: ["Produzione di pacchetti rigidi in grandi volumi", "Linee di impacchettamento su larga scala"],
  },
  "sasib-5000": {
    h1: "Macchina per pacchetti morbidi SASIB 5000",
    metaTitle: "Macchina per pacchetti morbidi SASIB 5000",
    tagline: "Impacchettatrice morbida SASIB per pacchetti da 100 mm con angoli squadrati.",
    metaDescription:
      "Macchina per pacchetti morbidi SASIB 5000 in Pakistan: pacchetti morbidi da 100 mm con incarto in foglio di alluminio ed etichetta. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La SASIB 5000 è una macchina versatile costruita per produrre pacchetti morbidi di sigarette da 100 mm. Utilizzando l'incarto in foglio di alluminio ed etichetta eseguito attorno a un mandrino, offre pacchetti perfetti e uniformi con angoli ben squadrati.",
      "Questo metodo di incarto non è solo estetico: protegge le sigarette e mantiene ogni pacchetto integro, aumentando al contempo l'attrattiva visiva del prodotto finito. Per i produttori in Pakistan che desiderano una finitura premium del pacchetto morbido, è una scelta affidabile e di alta qualità.",
      "Ben collaudata e semplice da usare, la SASIB 5000 viene fornita controllata e predisposta pronta per il reparto, così puoi aggiungere con fiducia una capacità affidabile di pacchetti morbidi.",
    ],
    applications: ["Produzione di pacchetti morbidi", "Formati da 100 mm"],
  },
  "sasib-3000": {
    h1: "Macchina per pacchetti morbidi SASIB 3000",
    metaTitle: "Macchina per pacchetti morbidi SASIB 3000",
    tagline: "Impacchettatrice morbida SASIB per pacchetti da 84 mm e 100 mm con angoli squadrati.",
    metaDescription:
      "Macchina per pacchetti morbidi SASIB 3000 in Pakistan: gestisce pacchetti da 84 mm e 100 mm con incarto in foglio di alluminio ed etichetta. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La SASIB 3000 aggiunge ulteriore versatilità alla linea SASIB per pacchetti morbidi grazie alla capacità di gestire pacchetti di sigarette sia da 84 mm che da 100 mm. Utilizzando l'incarto in foglio di alluminio ed etichetta eseguito attorno a un mandrino, mantiene la caratteristica finitura SASIB: pacchetti perfetti e uniformi con angoli ben squadrati.",
      "Questa capacità doppio formato rende la SASIB 3000 una risorsa preziosa per i produttori in Pakistan che hanno bisogno di flessibilità nella produzione mantenendo ogni pacchetto a un elevato standard di presentazione e protezione.",
      "I suoi sistemi di controllo rendono semplici regolazioni e manutenzione, il che aiuta a ridurre i tempi di fermo e a mantenere alta la produttività complessiva. Fornita controllata e predisposta pronta all'uso, è una linea affidabile per pacchetti morbidi per le fabbriche che desiderano sia qualità che flessibilità di formato.",
    ],
    applications: ["Produzione di pacchetti morbidi", "Formati da 84 mm e 100 mm"],
  },

  "regular-wrapper-cp1": {
    tagline: "Sovraincartatrice per pacchetti di sigarette ad alta velocità fino a 250 pacchetti al minuto.",
    metaTitle: "Sovraincartatrice CP-1 per pacchetti, 250 pacch./min",
    metaDescription:
      "Sovraincartatrice CP-1 per pacchetti di sigarette in Pakistan: fino a 250 pacchetti al minuto. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La CP-1 è una sovraincartatrice per pacchetti di sigarette ad alte prestazioni, costruita per gestire con facilità esigenze produttive impegnative. Con una velocità di incarto fino a 250 pacchetti al minuto, aumenta l'efficienza e la portata della linea di impacchettamento per le fabbriche in Pakistan.",
      "Funziona con un modesto fabbisogno di potenza di 6 kVA e una richiesta di pressione dell'aria di 0,05 m³/min, offrendo prestazioni elevate mantenendo l'efficienza energetica. La CP-1 è progettata per un incarto preciso e uniforme che riduce gli sprechi di materiale e mantiene ogni pacchetto entro uno standard di qualità rigoroso.",
      "La sua struttura robusta e il funzionamento affidabile la rendono una risorsa sicura per le linee ad alto volume, mantenendo il processo scorrevole e la produzione pulita. Si integra inoltre in modo pulito nelle linee esistenti, il che la rende un'aggiunta pratica e preziosa per qualsiasi stabilimento che voglia aumentare la produttività senza perdere qualità.",
    ],
    applications: ["Sovraincarto dei pacchetti", "Linee di impacchettamento ad alto volume"],
  },
  "naked-over-wrapper": {
    tagline: "Sovraincartatrice per pacchetti esterni a 25 pacchetti esterni al minuto.",
    metaTitle: "Naked Over Wrapper, sovraincartatrice esterna per sigarette",
    metaDescription:
      "Naked Over Wrapper in Pakistan: sovraincartatrice per pacchetti esterni di sigarette a 25 pacchetti esterni al minuto. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "Il Naked Over Wrapper è una macchina ben progettata per incartare i pacchetti esterni di sigarette con precisione e velocità. Incarta 25 pacchetti esterni al minuto, mantenendo un elevato livello di efficienza sulla linea per le fabbriche in Pakistan.",
      "Funziona con un fabbisogno energetico di 6 kVA e una pressione dell'aria di 0,05 m³/min, offrendo prestazioni di lavoro affidabili senza un elevato assorbimento di potenza. Robusto ed efficiente, è un'aggiunta valida a una linea di produzione di sigarette, migliorando la qualità della confezione nella fase finale.",
    ],
    applications: ["Sovraincarto dei pacchetti esterni", "Sigillatura a fine linea"],
  },
  "molins-boxer": {
    tagline: "Inscatolatrice per sigarette fino a 20 scatole al minuto.",
    metaTitle: "Molins Boxer, inscatolatrice per sigarette",
    metaDescription:
      "Inscatolatrice Molins Boxer in Pakistan: fino a 20 scatole al minuto per stecche di sigarette. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La Molins Boxer è un'affidabile inscatolatrice per sigarette nota per il funzionamento efficiente e la solida portata. Con una velocità di inscatolamento fino a 20 scatole al minuto, aumenta la produttività delle linee di confezionamento delle sigarette in Pakistan.",
      "Funziona con una pressione dell'aria di 0,05 m³/min, bilanciando il consumo energetico con un funzionamento costante. Progettata per l'affidabilità, la Molins Boxer mantiene l'inscatolamento uniforme e preciso, riducendo i tempi di fermo e mantenendo alta la qualità del prodotto.",
      "Questo la rende una parte fondamentale di qualsiasi configurazione produttiva orientata all'efficienza e alla produzione costante: prende i pacchetti incartati e li forma in stecche ordinate a fine linea.",
    ],
    applications: ["Inscatolamento in stecche/scatole", "Raccolta a fine linea"],
  },
  "sasib-boxer": {
    tagline: "Inscatolatrice per sigarette fino a 25 scatole al minuto.",
    metaTitle: "SASIB Boxer, inscatolatrice per sigarette",
    metaDescription:
      "Inscatolatrice SASIB Boxer in Pakistan: fino a 25 scatole al minuto per stecche di sigarette. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La SASIB Boxer è un'inscatolatrice per sigarette avanzata, nota per velocità ed efficienza. In grado di inscatolare fino a 25 scatole al minuto, dà un vero impulso alla portata di una linea di produzione di sigarette in Pakistan.",
      "Funziona con un fabbisogno di potenza di 6 kVA, unendo potenza e prestazioni, e una richiesta di pressione dell'aria di 0,1 m³/min, mantenendo l'equilibrio tra consumo energetico ed efficienza operativa.",
      "Progettata per un inscatolamento estremamente preciso e uniforme, la SASIB Boxer riduce al minimo i tempi di fermo e snellisce il processo, il che la rende una risorsa preziosa per ambienti ad alto volume in cui velocità e precisione contano per produttività e qualità del prodotto.",
    ],
    applications: ["Inscatolamento in stecche/scatole", "Linee di impacchettamento ad alto volume"],
  },

  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – Macchina di produzione per sigarette in Italia",
    metaTitle: "MK 8 | Macchina di produzione Mark 8 Post 64",
    tagline: "L'affidabile macchina da lavoro su cui le fabbriche contano ancora.",
    metaDescription:
      "Macchina per sigarette Molins Mark 8 Post 64 in Pakistan: macchina affidabile per una produzione costante. Ricondizionata e supportata da Civic Tobacco Machinery.",
    intro: [
      "La Molins Mark 8 Post 64 è una collaudata macchina per sigarette ad alta produzione, costruita per qualità e flessibilità. Funziona in modo costante da 1.800 a 2.000 sigarette al minuto e monta una stampante a due colori, così puoi stampare la carta esattamente come richiede il tuo marchio senza rallentare la linea.",
      "Gestisce un'ampia gamma di formati: circonferenze delle sigarette da 17 mm fino a 28,3 mm e lunghezze combinate del baco filtro e tabacco da 65 mm a 110 mm, coprendo tutto dai formati standard 84 mm e 100 mm fino a slims, super slims e nano. Un'applicazione filtro Max Multiroll monta i filtri in modo pulito a piena velocità.",
      "Con circa 3.500 kg è una macchina pesante e solida, fatta per mantenere il ritmo durante lunghe produzioni. Questa combinazione di velocità, flessibilità di formato e affidabilità rende la Mark 8 Post 64 una scelta intelligente per le fabbriche che vogliono una produzione elevata da un'unica macchina.",
    ],
    features: [
      "Progetto Molins collaudato e di lunga durata",
      "Baco uniforme e taglio pulito",
      "Ricambi e know-how ampiamente disponibili",
      "Facile da manutenere per i tecnici",
      "Ottimo valore come unità ricondizionata",
    ],
    applications: ["Linea di produzione d'ingresso", "Macchina di riserva affidabile"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D con macchina MAX-15",
    tagline: "Macchina Mark 8D ad alta velocità con sistema di controllo MAX-15.",
    metaDescription:
      "Macchina per sigarette Molins Mark 8D con MAX-15 in Pakistan: 3.000 al minuto dai formati King a Nano. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La Molins Mark 8D con MAX-15 è una macchina per sigarette robusta e flessibile, costruita per le esigenze di una moderna fabbrica di tabacco. Appartiene alla nota famiglia Mark 8 e offre ai produttori pakistani un modo affidabile per aumentare la produzione senza rinunciare alla qualità.",
      "Funziona fino a 3.000 sigarette al minuto, mantenendo comodamente il ritmo su una linea di produzione impegnata. Altrettanto importante, gestisce un'ampia gamma di formati. Che tu produca King size, Demi, Slims, Super Slims o Nano, la stessa macchina può produrli tutti, il che la rende una scelta pratica per una fabbrica che serve più segmenti contemporaneamente.",
      "La macchina accetta circonferenze delle sigarette da 17 mm a 28,3 mm e lunghezze combinate del baco filtro e tabacco da 65 mm a 110 mm, così mantieni il pieno controllo sui formati e resti uniforme da una produzione all'altra.",
      "La configurazione abbina la macchina MK-8D al sistema MAX-15 e alla sua unità di alimentazione 1117. Insieme portano il processo in modo pulito dall'alimentazione del tabacco fino al baco finito, mantenendo la linea stabile, riducendo i fermi e preservando la qualità durante il turno. Con un assorbimento totale di 17 kW, bilancia una reale velocità di produzione con costi di gestione ragionevoli.",
      "Nonostante tutto ciò che fa, la macchina resta compatta. Con circa 5.000 kg è solida e resistente, ma si inserisce in un reparto esistente senza grandi ristrutturazioni e la sua struttura regge lunghe produzioni continue. Ogni giorno produce sigarette uniformi con pochi scarti e una manutenzione contenuta, esattamente ciò di cui una fabbrica ha bisogno quando cerca di lavorare in modo snello e soddisfare comunque la domanda su formati diversi.",
      "In breve, la Mark 8D con MAX-15 si guadagna il suo posto grazie ad affidabilità comprovata, supporto flessibile dei formati da slims a nano, produzione ad alta velocità che resta precisa, funzionamento efficiente dal punto di vista energetico e facile inserimento in una linea automatizzata. Che tu stia sostituendo attrezzature più vecchie o aggiungendo capacità, è una macchina pronta per il futuro che mette l'ingegneria classica al servizio della produzione moderna.",
    ],
    applications: ["Produzione in grandi volumi", "Fabbriche multiformato"],
  },
  "mark-9-5-lenze-servo-drives": {
    tagline: "Linea di produzione Mark 9.5 ad alta velocità con azionamenti servo Lenze.",
    metaDescription:
      "Molins Mark 9.5 con azionamenti servo Lenze in Pakistan: fino a 3.500 al minuto con PLC Siemens e controllo peso a microonde. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La Molins Mark 9.5 con azionamenti servo Lenze è costruita per i produttori che vogliono una produzione elevata senza perdere flessibilità. Produce fino a 3.500 sigarette al minuto sui diametri regolari e 3.200 al minuto sui formati slim e super slim, così un'unica linea può coprire un'ampia gamma di prodotti a una reale velocità di produzione.",
      "Lavora su circonferenze delle sigarette da 17 mm a 28,3 mm e lunghezze combinate del baco filtro e tabacco da 65 mm a 110 mm, il che ti dà lo spazio per cambiare formato mantenendo un baco uniforme da una produzione all'altra.",
      "La linea riunisce tre unità: la macchina MK-9.5, l'assemblatore di filtri MAX-S e la riempitrice automatica di vassoi HCF80, con un assorbimento rispettivamente di 35 kW, 20 kW e 15 kW. Insieme portano il processo dalla produzione fino ai vassoi riempiti con pochissima movimentazione manuale nel mezzo.",
      "Controllo e precisione sono al centro di questa macchina. Un PLC Siemens gestisce la sequenza in modo fluido, un sistema a microonde mantiene uno stretto controllo sul peso del baco e gli azionamenti servo Lenze offrono il movimento preciso e costante che mantiene alta la qualità anche a piena velocità.",
      "Con un peso totale di circa 8.600 kg è una linea pesante e solida, fatta per la produzione su larga scala. Per una fabbrica che ha bisogno di una produzione affidabile in grandi volumi con controlli moderni e facile manutenzione, la Mark 9.5 con azionamenti servo Lenze è una scelta forte e pronta per il futuro.",
    ],
    applications: ["Produzione in grandi volumi", "Fabbriche multiformato"],
  },
  "mark-9-5-max-s-tray-filler": {
    tagline: "Macchina Mark 9.5 ad alta velocità con Max S e riempitrice di vassoi a flusso di massa.",
    metaDescription:
      "Molins Mark 9.5 con Max S e riempitrice di vassoi in Pakistan: da 4.500 a 5.000 sigarette al minuto. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La Molins Mark 9.5 con Max S e riempitrice di vassoi è una scelta di alto livello per i produttori che hanno bisogno di produzione ad alta velocità, integrazione ordinata dei filtri e capacità produttiva affidabile in un'unica linea. Progettata per il volume, produce da 4.500 a 5.000 sigarette al minuto, il che la colloca tra i sistemi più efficienti per le grandi fabbriche in Pakistan.",
      "Al centro della configurazione c'è la macchina MK-9.5, un'evoluzione della collaudata serie Mark 9 che mantiene una produzione elevata con alta precisione e uniformità. Supporta circonferenze delle sigarette da 17 mm a 28,3 mm e lunghezze combinate del baco filtro e tabacco da 65 mm a 110 mm, così puoi passare tra King size, Slims, Demi e altri formati senza perdere qualità del baco.",
      "La macchina è abbinata all'assemblatore di filtri Max-S, che applica il filtro al baco di tabacco in modo preciso e ripetibile. Lavorando attraverso una riempitrice di vassoi a flusso di massa, aumenta la portata mantenendo bassi gli scarti di materiale e i disallineamenti, così l'integrità del filtro resta uniforme in ogni ciclo produttivo.",
      "Un formato predefinito di 84 mm mantiene la macchina in linea con le dimensioni delle sigarette accettate a livello mondiale, il che la rende adatta sia alla fornitura locale che alla produzione per l'esportazione. Che tu gestisca il tuo marchio o soddisfi grandi contratti, passa in modo fluido tra i lotti e si adatta facilmente a ordini variabili.",
      "Con circa 7.800 kg è una linea pesante e stabile, costruita per il funzionamento continuo e una lunga vita utile. Per una fabbrica che vuole crescere proteggendo la qualità e mantenendo bassi i tempi di fermo, la Mark 9.5 con Max S e riempitrice di vassoi unisce velocità, flessibilità e affidabilità di cui il reparto ha bisogno: dalla produzione collaudata all'applicazione precisa del filtro, fino a un'alimentazione snella a flusso di massa e un telaio robusto per impieghi gravosi.",
    ],
    applications: ["Produzione in grandi volumi", "Produzione pronta per l'esportazione"],
  },
  "mark-9-max-s": {
    tagline: "Macchina MK-9 ad alta velocità con Max S e riempitrice di vassoi a flusso di massa.",
    metaDescription:
      "Molins MK-9 con Max S in Pakistan: da 4.500 a 5.000 sigarette al minuto con riempitrice di vassoi a flusso di massa. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La Molins MK-9 con Max S è un'altra macchina per sigarette ad alta efficienza costruita per una produzione impegnativa, con una portata tra 4.500 e 5.000 sigarette al minuto. È una scelta affidabile per le fabbriche in Pakistan che vogliono una produzione forte e costante da un'unica linea.",
      "La macchina MK-9 al suo centro mantiene la produzione precisa e uniforme turno dopo turno. Lavora su circonferenze delle sigarette da 17 mm a 28,3 mm e lunghezze combinate del baco filtro e tabacco da 65 mm a 110 mm, così ottieni una reale flessibilità nel passare tra i formati senza perdere qualità del baco.",
      "È dotata dell'assemblatore di filtri Max-S e di una riempitrice di vassoi a flusso di massa, che rendono la fase di applicazione del filtro più rapida e affidabile mantenendo bassi scarti e disallineamenti. Un formato predefinito di 84 mm la mantiene in linea con le dimensioni delle sigarette ampiamente accettate, così si inserisce con facilità nella maggior parte dei piani produttivi.",
      "Con circa 7.800 kg la MK-9 è una macchina pesante e stabile fatta per il funzionamento continuo e una lunga vita utile. Per una fabbrica che aumenta la produzione su larga scala proteggendo la qualità, è un'aggiunta solida e affidabile al reparto.",
    ],
    applications: ["Produzione in grandi volumi", "Linea di produzione principale"],
  },
  "protos-70": {
    tagline: "Linea Protos 70 ad alta velocità fino a 7.000 sigarette al minuto.",
    metaDescription:
      "Macchina per sigarette Hauni Protos 70 in Pakistan: fino a 7.000 al minuto con controllo IPC Siemens o Beckhoff. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La Hauni Protos 70 è una macchina per sigarette avanzata, costruita per soddisfare i più alti standard di efficienza e precisione produttiva. Produce ben 7.000 sigarette al minuto sui diametri regolari e 6.000 al minuto sui formati slim e super slim, il che dà alle fabbriche in Pakistan reale velocità e flessibilità da un'unica linea.",
      "Gestisce circonferenze delle sigarette da 17 mm a 28,3 mm e lunghezze combinate del baco filtro e tabacco da 65 mm a 110 mm, così puoi passare tra i formati mantenendo un baco uniforme da una produzione all'altra.",
      "Un sistema di controllo IPC Siemens o IPC Beckhoff mantiene la sequenza automatizzata, fluida e affidabile, mentre un sistema di controllo del peso a microonde mantiene ogni sigaretta a un peso preciso per un'uniformità costante del prodotto. La linea riunisce la macchina S7000, l'applicazione del filtro M8000 e la riempitrice automatica di vassoi F80, ciascuna gestendo in modo pulito la propria fase del processo.",
      "Con una potenza di 50 kW per la S7000, 20 kW per la M8000 e 15 kW per la F80, la Protos 70 è una linea potente e capace. Con un peso totale di circa 10.800 kg è pesante e stabile, costruita per il funzionamento continuo e una lunga vita utile, il che la rende una scelta ideale per la produzione di sigarette su larga scala.",
    ],
    applications: ["Produzione in grandi volumi", "Produzione su larga scala"],
  },
  "protos-80-er": {
    tagline: "Linea Protos 80 ER ad alta velocità fino a 8.000 sigarette al minuto.",
    metaDescription:
      "Macchina per sigarette Hauni Protos 80 ER in Pakistan: fino a 8.000 al minuto con controllo IPC Siemens o Beckhoff. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La Protos 80 ER è una macchina per sigarette ad alte prestazioni, progettata per i produttori che vogliono massima efficienza, precisione e produzione. Costruita da Hauni, la serie Protos 80 è nota per affidabilità e automazione avanzata, e sia che tu produca sigarette regolari o slim, offre forte uniformità e produttività, il che la rende una scelta affidabile per le linee ad alto volume in Pakistan.",
      "È nella capacità che questa macchina spicca davvero. Produce fino a 8.000 sigarette al minuto sui diametri regolari e 7.000 al minuto sui formati slim e super slim. Accetta circonferenze delle sigarette da 17 mm a 28,3 mm e lunghezze combinate del baco filtro e tabacco da 65 mm a 110 mm, così resta flessibile tra tipi di sigaretta ed esigenze di mercato. Dai formati king size agli slim fino a quelli di nicchia, la Protos 80 ER si adatta al tuo modo di produrre.",
      "Per precisione e continuità funziona con un sistema di controllo PLC di alto livello su un IPC Siemens o un IPC Beckhoff, mantenendo l'intero ciclo fluido e automatizzato. Il monitoraggio in tempo reale e la rapida risposta del sistema riducono l'errore umano e mantengono la linea in funzione, mentre un sistema integrato di controllo del peso a microonde mantiene un peso uniforme della sigaretta su ogni unità per uno stretto controllo qualità.",
      "La linea è composta da tre potenti unità che lavorano insieme: la macchina S7000 a 50 kW, l'applicazione del filtro M8000 a 20 kW e la riempitrice automatica di vassoi F80 a 15 kW. Nota per l'affidabilità e utilizzata nelle fabbriche di sigarette in tutto il mondo, la Protos 80 unisce un uso efficiente dell'energia, bassi scarti e un'ingegneria precisa per mantenere bassi i costi di gestione e alti gli standard di prodotto. Con un peso totale di circa 10.800 kg è una linea pesante e stabile costruita per la produzione continua su larga scala.",
    ],
    applications: ["Produzione in grandi volumi", "Produzione su larga scala"],
  },

  "kdf-1": {
    h1: "Macchina per filtri per sigarette Hauni KDF-1",
    metaTitle: "Macchina per filtri Hauni KDF-1",
    tagline: "Linea per filtri Hauni KDF-1 con controllo laser della circonferenza.",
    metaDescription:
      "Macchina per filtri Hauni KDF-1 in Pakistan: filtri da 120 mm con PLC Siemens/Beckhoff e controllo laser della circonferenza. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La Hauni KDF-1 è una collaudata e potente linea per filtri con una solida reputazione di prestazioni, precisione e durata nella produzione di sigarette. Costruita per le esigenze della produzione ad alto volume, la KDF-1 è adatta ai produttori in Pakistan che mettono al primo posto uniformità, velocità e qualità.",
      "Pensata per un funzionamento ad alta produzione, offre una robusta capacità produttiva per filtri da 120 mm, adatta sia a formati di sigaretta standard che personalizzati. Supporta circonferenze del filtro da 16,8 mm a 28,1 mm e lunghezze del filtro da 64 mm a 150 mm, così puoi produrre un'ampia gamma di dimensioni e tipi di filtro senza continui cambi macchina. Dai filtri King Size agli Slims fino ai design speciali, la KDF-1 li gestisce tutti in modo efficiente.",
      "Funziona con un sistema di controllo PLC avanzato disponibile nelle configurazioni Siemens o Beckhoff, che offre controllo intuitivo, diagnostica in tempo reale e un'automazione affidabile che mantiene stabile la qualità del filtro per tutta la produzione. I sistemi servo Lenze o Beckhoff aumentano la stabilità e mantengono il movimento fluido e preciso.",
      "Una caratteristica di spicco è il sistema di controllo della circonferenza basato su laser, che misura la circonferenza di ogni filtro con alta precisione, riducendo gli scostamenti e mantenendo ogni lotto uniforme. Questo livello di precisione è importante per rispettare gli standard qualitativi del marchio sui prodotti premium.",
      "Con tutta la sua produzione, la KDF-1 mantiene un profilo energetico bilanciato a un totale di 40 kW, il che la rende efficiente da gestire nel lungo periodo. La sua struttura robusta e ben progettata offre una lunga vita utile, e il design modulare e la compatibilità con diversi tipi di sigaretta la rendono adatta sia alla produzione di filtri su piccola che su grande scala, che tu stia ampliando la capacità o sostituendo macchinari più vecchi.",
    ],
    applications: ["Produzione di filtri in grandi volumi", "Filtri standard e speciali"],
  },
  "kdf-2": {
    h1: "Macchina per filtri per sigarette Hauni KDF-2",
    metaTitle: "Macchina per filtri ad alta velocità Hauni KDF-2",
    tagline: "Linea per filtri Hauni KDF-2 ad alta velocità a 400 metri al minuto.",
    metaDescription:
      "Macchina per filtri Hauni KDF-2 in Pakistan: 400 metri di fascia di acetato al minuto con PLC Siemens/Beckhoff. Fornita da Civic Tobacco Machinery.",
    intro: [
      "La Hauni KDF-2 è una macchina per filtri di livello mondiale costruita per una produzione di filtri per sigarette ad alta efficienza e ad alta produzione. Nota per la qualità costruttiva e l'automazione avanzata, la KDF-2 è una scelta affidabile per i grandi produttori in Pakistan che hanno bisogno sia di precisione che di produttività.",
      "Funziona a un ritmo impressionante, lavorando 400 metri di fascia di acetato al minuto, il che la rende adatta alle esigenze delle moderne linee di produzione. Questa velocità è accompagnata da reale versatilità: supporta circonferenze del filtro da 16,8 mm a 28,1 mm e lunghezze del filtro da 64 mm a 150 mm, coprendo tutto dai filtri King Size standard ai formati più speciali con uniformità, qualità e minimi tempi di fermo.",
      "Ciò che distingue la KDF-2 è la sua automazione. Un sistema di controllo PLC, disponibile nelle configurazioni Siemens o Beckhoff, offre pieno controllo e monitoraggio in tempo reale, mentre un sistema servo Lenze o Beckhoff ad alte prestazioni mantiene i movimenti precisi e il funzionamento affidabile. Questo riduce il margine di errore e mantiene uniforme la qualità del filtro, così la macchina si integra in modo fluido come una spina dorsale affidabile per la produzione continua su larga scala.",
      "Costruita per la durata, la KDF-2 si abbina a un apri-fascia e alla riempitrice automatica di vassoi HCF80 per snellire il flusso di lavoro e ridurre la movimentazione manuale. Assorbe 40 kW per l'unità principale KDF-2 e 15 kW per la riempitrice HCF80, unendo efficienza energetica e prestazioni elevate.",
      "Pur con tutte le sue capacità, la KDF-2 mantiene un ingombro gestibile di circa 6.500 kg, e la sua struttura solida offre durata nel lungo periodo sotto programmi produttivi impegnativi. Che tu stia allestendo un nuovo stabilimento o sostituendo macchinari esistenti, è un investimento intelligente che si inserisce in modo pulito nei moderni sistemi produttivi offrendo un'eccellente qualità del filtro.",
    ],
    applications: ["Produzione di filtri in grandi volumi", "Produzione su larga scala"],
  },
  "molins-pm-5": {
    tagline: "Macchina per filtri Molins ad alta capacità a 4.000 filtri al minuto.",
    metaDescription:
      "Macchina per filtri Molins PM-5 in Pakistan: macchina ad alta capacità a 4.000 filtri al minuto. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La Molins PM-5 è una macchina per filtri per sigarette ad alta capacità costruita per le esigenze della produzione su larga scala. Con una capacità di 4.000 filtri al minuto, è un forte esempio di efficienza e precisione nella produzione di filtri e si adatta in modo affidabile alle fabbriche impegnate in Pakistan.",
      "Offre un'utile flessibilità sul dimensionamento del filtro, con un diametro della bacchetta filtro da 7,5 a 7,8 mm e lunghezze della bacchetta filtro da 108 a 126 mm, così può accogliere senza difficoltà diverse specifiche di filtro.",
      "Con circa 2.000 kg la PM-5 ha una struttura robusta che offre durata e funzionamento stabile per lunghi periodi. Costruita da Molins, un nome noto del settore, unisce ingegneria collaudata e produzione ad alta velocità, il che la rende una risorsa essenziale per i produttori che vogliono filtri di qualità massimizzando la portata.",
    ],
    applications: ["Produzione di filtri in grandi volumi", "Linee basate su Molins"],
  },
  "hollow-tube-maker": {
    tagline: "Macchina per tubi cavi ad alta velocità a 2.100 sigarette al minuto.",
    metaTitle: "Macchina per tubi cavi, macchina per filtri per sigarette",
    metaDescription:
      "Macchina per tubi cavi in Pakistan: 2.100 al minuto con plug assembler per tubi filtro speciali. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La macchina per tubi cavi spicca per capacità produttiva e funzionamento ad alta velocità. In grado di produrre 2.100 sigarette al minuto, offre forte efficienza e produzione uniforme. Un intervallo di velocità del baco da 140 a 175 metri al minuto, insieme a una velocità di taglio fino a 2.500 bacchette al minuto, sottolinea quanto sia adatta alla produzione ad alto volume per le fabbriche in Pakistan.",
      "Con 3.050 kg la macchina ha una struttura robusta per durata e affidabilità nel lungo periodo. Il plug assembler aggiunge altri 1.800 kg e lavora in sincronia con la macchina per una produzione di tubi precisa ed efficiente. L'assorbimento totale di potenza è di 14 kW, suddiviso tra 6,5 kW per la macchina e 7,5 kW per il plug assembler, il che bilancia bene prestazioni e consumo energetico.",
      "Progettata per la produzione su larga scala, la macchina per tubi cavi utilizza tecnologia aggiornata per produrre tubi di alta qualità. La sua capacità ad alta velocità e la solida ingegneria la rendono una risorsa preziosa per i produttori che devono soddisfare una forte domanda mantenendo eccellenti standard produttivi.",
    ],
    applications: ["Produzione di filtri in grandi volumi", "Tubi filtro speciali"],
  },

  "tobacco-feeder": {
    tagline: "Alimenta un flusso costante e uniforme di tabacco alle macchine Mark 8 e Mark 9.",
    metaTitle: "Alimentatore di tabacco per macchine per sigarette",
    metaDescription:
      "Alimentatore di tabacco in Pakistan: flusso di tabacco costante e uniforme per le macchine per sigarette Mark 8 e Mark 9. Fornito e assistito da Civic Tobacco Machinery.",
    intro: [
      "L'alimentatore di tabacco è una macchina di ingresso fondamentale per una fabbrica di sigarette. Alimenta il tabacco in modo continuo e uniforme nelle macchine di produzione, stratificandolo con cura affinché sia preparato esattamente come serve per la produzione.",
      "È compatibile con le macchine Mark 8 e Mark 9, quindi si inserisce con facilità in una configurazione esistente. Le sue impostazioni di volume regolabili permettono di controllare con precisione il flusso di tabacco, aumentando l'efficienza produttiva, e la sua automazione riduce la movimentazione manuale, snellisce il funzionamento e mantiene alta la produttività.",
    ],
    applications: ["Alimentazione della macchina di produzione", "Produzione uniforme del baco"],
  },
  "cigarette-reclaimer": {
    tagline: "Recupera tabacco dagli scarti a 120 kg/ora con il 99,8% di efficienza.",
    metaTitle: "Recuperatore di sigarette, macchina di recupero del tabacco",
    metaDescription:
      "Recuperatore di sigarette in Pakistan: recupera tabacco dagli scarti di produzione a 120 kg/ora con il 99,8% di efficienza. Fornito da Civic Tobacco Machinery.",
    intro: [
      "Il recuperatore di sigarette è un'eccellente macchina di recupero del tabacco dagli scarti di produzione di sigarette. Separa il tabacco riutilizzabile dai materiali di scarto con perdite molto ridotte, così il tabacco che altrimenti getteresti torna in produzione.",
      "Alla massima capacità recupera 120 kg all'ora e lavora con un'impressionante efficienza del 99,8%, offrendoti il massimo utilizzo possibile. Con un tasso di recupero del 90%, offre un vero vantaggio nel ridurre gli scarti e aumentare l'efficienza produttiva complessiva.",
      "È intuitivo e facile da integrare nella tua linea di produzione, il che lo rende un'aggiunta pratica e conveniente per le fabbriche in Pakistan che vogliono ottenere il massimo da ogni lotto.",
    ],
    applications: ["Riduzione degli scarti", "Recupero del tabacco"],
  },
  "tobacco-cutters": {
    tagline: "Taglierina per tabacco Hauni KT-400 con cinque lame e controllo PLC della dimensione di taglio.",
    metaTitle: "Taglierina per tabacco Hauni KT-400",
    metaDescription:
      "Taglierina per tabacco Hauni KT-400 in Pakistan: taglierina a cinque lame con dimensione di taglio regolata da PLC. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La taglierina per tabacco Hauni KT-400 è una macchina di precisione che svolge un ruolo cruciale nel mantenere uniforme la qualità del taglio nella lavorazione del tabacco. Monta cinque lame, che offrono tagli uniformi e migliorano la qualità complessiva della miscela di tabacco, e cilindri pneumatici azionano la ganascia per un taglio scorrevole ed efficiente con meno fermi e manutenzione.",
      "La KT-400 funziona inoltre con un avanzato sistema di azionamento PLC su una stecca ricurva in ottone, che regola con precisione la dimensione di taglio. Questo mantiene ogni lotto uniforme e ti permette di adattare la dimensione di taglio a esigenze specifiche, aggiungendo reale versatilità. Con la sua precisione e affidabilità, la KT-400 è una risorsa importante per qualsiasi stabilimento di produzione del tabacco in Pakistan che punta a massima qualità ed efficienza.",
    ],
    applications: ["Lavorazione primaria", "Preparazione del trinciato"],
  },
  "tobacco-stem-flattener": {
    tagline: "Schiaccia le nervature del tabacco per una miscela uniforme e meno scarti di foglia.",
    metaTitle: "Schiaccianervature del tabacco, macchina per la lavorazione primaria",
    metaDescription:
      "Schiaccianervature del tabacco in Pakistan: schiaccia le nervature per una miscela uniforme e ridotti scarti di foglia. Fornita e assistita da Civic Tobacco Machinery.",
    intro: [
      "La schiaccianervature del tabacco svolge un ruolo chiave nell'ottimizzare il flusso di lavorazione del tabacco. Schiacciando le nervature del tabacco, le prepara per una miscela uniforme con le foglie, il che migliora la facilità di lavorazione e riduce la probabilità di disuniformità nel prodotto finale.",
      "Schiacciando le nervature in modo efficiente, riduce inoltre al minimo gli scarti di foglia, rendendo l'intero processo più economico e sostenibile. Il risultato è un prodotto uniforme e di alta qualità che rispetta rigorosi standard di settore, il che rende la schiaccianervature una risorsa preziosa per qualsiasi operazione di lavorazione del tabacco in Pakistan.",
    ],
    applications: ["Lavorazione primaria", "Miglioramento della resa"],
  },
};

const ru: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "Упаковочная машина для сигарет HLP-180",
    metaTitle: "Упаковочная машина HLP-180, 180 пачек/мин",
    tagline: "Высокоскоростная линия для твёрдых пачек со скоростью 180 пачек в минуту.",
    metaDescription:
      "Упаковочная машина для сигарет HLP-180 в Пакистане: 180 пачек в минуту от форматов King до Nano с управлением ПЛК. Поставка от Civic Tobacco Machinery.",
    intro: [
      "HLP-180 — это мощная машина нового поколения, созданная для высокоскоростной упаковки сигарет. Известный своей стабильной работой и надёжной производительностью, упаковщик HLP-180 подходит производителям, желающим оптимизировать процесс упаковки без ущерба качеству или точности.",
      "При производительности 180 пачек в минуту он выполняет эффективные, ровные циклы упаковки благодаря механизму с одним плунжером, сохраняя идеальное выравнивание, обёртку и запайку на каждой пачке. Это позволяет заводам в Пакистане удовлетворять высокий спрос, сохраняя чистую и повторяемую отделку.",
      "Он рассчитан на широкий диапазон форматов сигарет, включая King Size, Demi, Slims, Super Slims и Nano. Эта универсальность означает, что вы можете обслуживать разные предпочтения потребителей на местных и экспортных рынках, от традиционных форматов до нишевых продуктов, на одной машине.",
      "Система управления ПЛК поддерживает работу точной и полностью автоматизированной, так что каждая пачка выходит равномерной, хорошо обёрнутой и готовой к продаже. Удобный интерфейс даёт оператору полный контроль над скоростью, обнаружением ошибок и мониторингом производства, что сокращает простои и повышает общую эффективность.",
      "По-настоящему отличает HLP-180 её гибкость в формах пачки. Она поддерживает форматы со скруглёнными углами, скошенной кромкой, типа D и квадратные, так что бренды могут дифференцировать свою упаковку, выделяться на полке и идти в ногу с тенденциями рынка. Созданная для непрерывного крупносерийного производства, она — сильный выбор, расширяете ли вы линию или заменяете старое оборудование.",
    ],
    applications: ["Крупносерийное производство твёрдых пачек", "Местные и экспортные рынки"],
  },
  "hlp-200": {
    h1: "Упаковочная машина для сигарет HLP-200",
    metaTitle: "Упаковочная машина HLP-200, 200 пачек/мин",
    tagline: "Линия для твёрдых пачек с двойным плунжером со скоростью 200 пачек в минуту.",
    metaDescription:
      "Упаковочная машина для сигарет HLP-200 в Пакистане: линия с двойным плунжером 200 пачек в минуту от форматов King до Nano. Поставка от Civic Tobacco Machinery.",
    intro: [
      "HLP-200 — это упаковочная машина бункерного типа с двойным плунжером, созданная для мелко-, среднесерийного и крупносерийного производства. Она популярна среди производителей в Пакистане, потому что бережно расходует материал и помогает снижать эксплуатационные расходы, сохраняя при этом быстрый, ровный темп.",
      "Работая со скоростью 200 пачек в минуту при максимальной пропускной способности около 12 000 сигарет, она находится в центре упаковочной линии как первый критический узел, формируя и завершая пачку до её перехода к обёртке и укладке в коробки. Она поддерживает все распространённые форматы пачек сигарет, поэтому легко вписывается в большинство производственных схем.",
      "Машина работает с широким диапазоном форматов сигарет, включая King Size, Demi, Slims, Super Slims и Nano, а её система с двойным плунжером сохраняет цикл упаковки эффективным, а отделку — равномерной. Система управления ПЛК поддерживает точную и полностью автоматизированную работу, давая оператору чёткий контроль над скоростью, обнаружением ошибок и мониторингом.",
      "Для представления пачки она предлагает форматы со скруглёнными углами, скошенной кромкой, типа D и квадратные, так что бренды могут придавать упаковке форму, выделяющуюся на полке. Работающая от сети 220 В/380 В и созданная для надёжного непрерывного выпуска, HLP-200 — прочный центральный узел для любой интегрированной упаковочной линии.",
    ],
    applications: ["Крупносерийное производство твёрдых пачек", "Ядро интегрированной упаковочной линии"],
  },
  "hlp-225": {
    h1: "Упаковочная машина для сигарет HLP-225",
    metaTitle: "Упаковочная машина HLP-225, 225 пачек/мин",
    tagline: "Высокоскоростная линия для твёрдых пачек с двойным плунжером, 225 пачек в минуту.",
    metaDescription:
      "Упаковочная машина для сигарет HLP-225 в Пакистане: высокоскоростная линия с двойным плунжером 225 пачек в минуту с управлением ПЛК. Поставка от Civic Tobacco Machinery.",
    intro: [
      "Упаковочная линия HLP-225 — настоящий шаг вперёд в упаковке сигарет. Работая со скоростью 225 пачек в минуту, эта машина с двойным плунжером обеспечивает высокую эффективность и пропускную способность для заводов, которым нужно упаковывать в больших масштабах.",
      "Она спроектирована для работы с широким диапазоном форматов сигарет, включая King, Demi, Slims, Super Slims и Nano, так что производители в Пакистане получают гибкость для удовлетворения разных требований рынка на одной машине.",
      "Современная система управления ПЛК повышает точность и автоматизирует процесс упаковки, сокращая ручное вмешательство и ошибки. HLP-225 также поддерживает несколько форматов пачек, включая скруглённые углы, скошенную кромку, тип D и квадратные, что позволяет брендам адаптировать упаковку под разные предпочтения и требования потребителей.",
      "Созданная для крупносерийного производства, HLP-225 сочетает передовые функции с прочной конструкцией для надёжной и стабильной работы. Её способность упаковывать на высокой скорости без ущерба качеству делает её ценным активом для любого производства, стремящегося увеличить выпуск и оставаться конкурентоспособным.",
    ],
    applications: ["Крупносерийное производство твёрдых пачек", "Упаковочные линии большого масштаба"],
  },
  "sasib-5000": {
    h1: "Машина для мягких пачек SASIB 5000",
    metaTitle: "Машина для мягких пачек SASIB 5000",
    tagline: "Упаковщик мягких пачек SASIB для пачек 100 мм с квадратными углами.",
    metaDescription:
      "Машина для мягких пачек SASIB 5000 в Пакистане: мягкие пачки 100 мм с обёрткой из алюминиевой фольги и этикеткой. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "SASIB 5000 — универсальная машина, созданная для производства мягких пачек сигарет 100 мм. Используя обёртку из алюминиевой фольги и этикетку, выполняемую вокруг оправки, она обеспечивает идеальные, равномерные пачки с аккуратно квадратными углами.",
      "Этот метод обёртки не только красив: он защищает сигареты и сохраняет каждую пачку целой, одновременно повышая визуальную привлекательность готового продукта. Для производителей в Пакистане, желающих премиальную отделку мягкой пачки, это надёжный и высококачественный выбор.",
      "Хорошо зарекомендовавшая себя и простая в работе, SASIB 5000 поставляется проверенной и настроенной, готовой для производства, так что вы можете уверенно добавить надёжную мощность для мягких пачек.",
    ],
    applications: ["Производство мягких пачек", "Форматы 100 мм"],
  },
  "sasib-3000": {
    h1: "Машина для мягких пачек SASIB 3000",
    metaTitle: "Машина для мягких пачек SASIB 3000",
    tagline: "Упаковщик мягких пачек SASIB для пачек 84 мм и 100 мм с квадратными углами.",
    metaDescription:
      "Машина для мягких пачек SASIB 3000 в Пакистане: работает с пачками 84 мм и 100 мм с обёрткой из алюминиевой фольги и этикеткой. Поставка от Civic Tobacco Machinery.",
    intro: [
      "SASIB 3000 добавляет дополнительную универсальность линии мягких пачек SASIB благодаря способности работать с пачками сигарет как 84 мм, так и 100 мм. Используя обёртку из алюминиевой фольги и этикетку, выполняемую вокруг оправки, она сохраняет фирменную отделку SASIB — идеальные, равномерные пачки с аккуратно квадратными углами.",
      "Эта способность работать с двумя форматами делает SASIB 3000 ценным активом для производителей в Пакистане, которым нужна гибкость в производстве при сохранении каждой пачки на высоком уровне представления и защиты.",
      "Её системы управления делают настройку и обслуживание простыми, что помогает сократить простои и поддерживать высокую общую производительность. Поставляемая проверенной и настроенной, готовой к работе, она — надёжная линия для мягких пачек для заводов, которым нужны и качество, и гибкость формата.",
    ],
    applications: ["Производство мягких пачек", "Форматы 84 мм и 100 мм"],
  },

  "regular-wrapper-cp1": {
    tagline: "Высокоскоростная сверхобёрточная машина для пачек сигарет до 250 пачек в минуту.",
    metaTitle: "Сверхобёрточная машина CP-1 для пачек, 250 пачек/мин",
    metaDescription:
      "Сверхобёрточная машина CP-1 для пачек сигарет в Пакистане: до 250 пачек в минуту. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "CP-1 — это высокопроизводительная сверхобёрточная машина для пачек сигарет, созданная, чтобы легко справляться с серьёзными производственными задачами. При скорости обёртки до 250 пачек в минуту она повышает эффективность и пропускную способность упаковочной линии для заводов в Пакистане.",
      "Она работает при скромной потребляемой мощности 6 кВА и потребности в давлении воздуха 0,05 м³/мин, обеспечивая высокую производительность при сохранении энергоэффективности. CP-1 спроектирована для точной, равномерной обёртки, которая сокращает отходы материала и удерживает каждую пачку в жёстком стандарте качества.",
      "Её прочная конструкция и надёжная работа делают её надёжным активом для высокообъёмных линий, сохраняя процесс плавным, а выпуск — чистым. Она также аккуратно интегрируется в существующие линии, что делает её практичным и ценным дополнением для любого предприятия, стремящегося повысить производительность без потери качества.",
    ],
    applications: ["Сверхобёртка пачек", "Высокообъёмные упаковочные линии"],
  },
  "naked-over-wrapper": {
    tagline: "Сверхобёрточная машина для внешних пачек, 25 внешних пачек в минуту.",
    metaTitle: "Naked Over Wrapper, внешняя сверхобёрточная машина для сигарет",
    metaDescription:
      "Naked Over Wrapper в Пакистане: сверхобёрточная машина для внешних пачек сигарет, 25 внешних пачек в минуту. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Naked Over Wrapper — хорошо спроектированная машина для обёртки внешних пачек сигарет с точностью и скоростью. Она обёртывает 25 внешних пачек в минуту, поддерживая высокий уровень эффективности на линии для заводов в Пакистане.",
      "Она работает при энергопотреблении 6 кВА и давлении воздуха 0,05 м³/мин, обеспечивая надёжную рабочую производительность без большого потребления мощности. Прочная и эффективная, она — разумное дополнение к линии производства сигарет, повышающее качество упаковки на финальном этапе.",
    ],
    applications: ["Сверхобёртка внешних пачек", "Запайка в конце линии"],
  },
  "molins-boxer": {
    tagline: "Коробочная машина для сигарет до 20 коробок в минуту.",
    metaTitle: "Molins Boxer, коробочная машина для сигарет",
    metaDescription:
      "Коробочная машина Molins Boxer в Пакистане: до 20 коробок в минуту для сигаретных блоков. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Molins Boxer — надёжная коробочная машина для сигарет, известная эффективной работой и солидной пропускной способностью. При скорости упаковки до 20 коробок в минуту она повышает производительность линий упаковки сигарет в Пакистане.",
      "Она работает при давлении воздуха 0,05 м³/мин, балансируя энергопотребление с ровной работой. Спроектированная для надёжности, Molins Boxer сохраняет упаковку равномерной и точной, что сокращает простои и поддерживает высокое качество продукта.",
      "Это делает её важной частью любой производственной схемы, ориентированной на эффективность и стабильный выпуск: она берёт обёрнутые пачки и формирует их в аккуратные блоки в конце линии.",
    ],
    applications: ["Упаковка в блоки/коробки", "Сборка в конце линии"],
  },
  "sasib-boxer": {
    tagline: "Коробочная машина для сигарет до 25 коробок в минуту.",
    metaTitle: "SASIB Boxer, коробочная машина для сигарет",
    metaDescription:
      "Коробочная машина SASIB Boxer в Пакистане: до 25 коробок в минуту для сигаретных блоков. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "SASIB Boxer — это передовая коробочная машина для сигарет, известная скоростью и эффективностью. Способная упаковывать до 25 коробок в минуту, она даёт реальный импульс пропускной способности линии производства сигарет в Пакистане.",
      "Она работает при потребляемой мощности 6 кВА, сочетая мощность и производительность, и потребности в давлении воздуха 0,1 м³/мин, сохраняя баланс между энергопотреблением и эффективностью работы.",
      "Спроектированная для высокоточной, равномерной упаковки, SASIB Boxer сводит к минимуму простои и оптимизирует процесс, что делает её ценным активом для высокообъёмных условий, где скорость и точность важны для производительности и качества продукта.",
    ],
    applications: ["Упаковка в блоки/коробки", "Высокообъёмные упаковочные линии"],
  },

  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – Производственная машина для сигарет в России",
    metaTitle: "MK 8 | Производственная машина Mark 8 Post 64",
    tagline: "Надёжная рабочая лошадка, на которую заводы полагаются до сих пор.",
    metaDescription:
      "Сигаретная машина Molins Mark 8 Post 64 в Пакистане: надёжная машина для стабильного производства. Восстановлена и поддержана Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 8 Post 64 — проверенная высокопроизводительная сигаретная машина, созданная для качества и гибкости. Она работает стабильно на скорости от 1 800 до 2 000 сигарет в минуту и оснащена двухцветным принтером, так что вы можете печатать на бумаге именно так, как нужно вашему бренду, не замедляя линию.",
      "Она работает с широким набором форматов: окружность сигарет от 17 мм до 28,3 мм и комбинированная длина стержня фильтр-табак от 65 мм до 110 мм, что охватывает всё от стандартных 84 мм и 100 мм до slims, super slims и nano. Присоединение фильтра Max Multiroll аккуратно устанавливает фильтры на полной скорости.",
      "При весе около 3 500 кг это тяжёлая, прочная машина, созданная держать темп на протяжении длительных производственных циклов. Это сочетание скорости, гибкости форматов и надёжности делает Mark 8 Post 64 разумным выбором для заводов, которым нужен высокий выпуск от одной машины.",
    ],
    features: [
      "Проверенная, долговечная конструкция Molins",
      "Ровный стержень и чистый рез",
      "Запчасти и ноу-хау широко доступны",
      "Проста в обслуживании для техников",
      "Отличная ценность как восстановленная единица",
    ],
    applications: ["Начальная производственная линия", "Надёжная резервная машина"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D с машиной MAX-15",
    tagline: "Высокоскоростная машина Mark 8D с системой управления MAX-15.",
    metaDescription:
      "Сигаретная машина Molins Mark 8D с MAX-15 в Пакистане: 3 000 в минуту от форматов King до Nano. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 8D с MAX-15 — крепкая, гибкая сигаретная машина, созданная для нужд современного табачного завода. Она принадлежит к известному семейству Mark 8 и даёт пакистанским производителям надёжный способ наращивать выпуск без ущерба качеству.",
      "Она работает со скоростью до 3 000 сигарет в минуту, легко удерживая темп на загруженной производственной линии. Не менее важно, что она работает с широким набором форматов. Производите ли вы King size, Demi, Slims, Super Slims или Nano — одна и та же машина может выпускать их все, что делает её практичным выбором для завода, обслуживающего сразу несколько сегментов.",
      "Машина принимает окружность сигарет от 17 мм до 28,3 мм и комбинированную длину стержня фильтр-табак от 65 мм до 110 мм, так что вы сохраняете полный контроль над форматами и остаётесь стабильными от цикла к циклу.",
      "Конфигурация объединяет машину MK-8D с системой MAX-15 и её блоком подачи 1117. Вместе они чисто ведут процесс от подачи табака до готового стержня, сохраняя линию стабильной, сокращая остановки и удерживая качество на протяжении смены. При общем потреблении 17 кВт она балансирует реальную скорость производства с разумными эксплуатационными расходами.",
      "При всём, что она делает, машина остаётся компактной. При весе около 5 000 кг она прочная и износостойкая, но вписывается в существующее производство без крупной перестройки, а её конструкция выдерживает длительное непрерывное производство. Изо дня в день она выпускает ровные сигареты с малыми отходами и умеренным обслуживанием — именно то, что нужно заводу, стремящемуся работать экономно и всё же удовлетворять спрос по разным форматам.",
      "Короче говоря, Mark 8D с MAX-15 заслуживает своё место благодаря проверенной надёжности, гибкой поддержке форматов от slims до nano, высокоскоростному, но точному выпуску, энергоэффективной работе и лёгкой интеграции в автоматизированную линию. Заменяете ли вы старое оборудование или добавляете мощность — это машина, готовая к будущему, ставящая классическую инженерию на службу современному производству.",
    ],
    applications: ["Крупносерийное производство", "Многоформатные заводы"],
  },
  "mark-9-5-lenze-servo-drives": {
    tagline: "Высокоскоростная производственная линия Mark 9.5 с сервоприводами Lenze.",
    metaDescription:
      "Molins Mark 9.5 с сервоприводами Lenze в Пакистане: до 3 500 в минуту с ПЛК Siemens и микроволновым контролем веса. Поставка от Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 9.5 с сервоприводами Lenze создана для производителей, которым нужен серьёзный выпуск без потери гибкости. Она производит до 3 500 сигарет в минуту на обычных диаметрах и 3 200 в минуту на форматах slim и super slim, так что одна линия может покрыть широкий ассортимент продукции на реальной производственной скорости.",
      "Она работает с окружностью сигарет от 17 мм до 28,3 мм и комбинированной длиной стержня фильтр-табак от 65 мм до 110 мм, что даёт вам простор менять форматы, сохраняя ровный стержень от цикла к циклу.",
      "Линия объединяет три узла — машину MK-9.5, узел сборки фильтров MAX-S и автоматический лоткозаполнитель HCF80 — с потреблением соответственно 35 кВт, 20 кВт и 15 кВт. Вместе они ведут процесс от производства до заполненных лотков с очень малой ручной обработкой между этапами.",
      "Управление и точность — в центре этой машины. ПЛК Siemens плавно ведёт последовательность, микроволновая система жёстко контролирует вес стержня, а сервоприводы Lenze обеспечивают точное, ровное движение, удерживающее качество высоким даже на полной скорости.",
      "При общем весе около 8 600 кг это тяжёлая, прочная линия, созданная для крупносерийного производства. Для завода, которому нужен надёжный высокообъёмный выпуск с современным управлением и лёгким обслуживанием, Mark 9.5 с сервоприводами Lenze — сильный, готовый к будущему выбор.",
    ],
    applications: ["Крупносерийное производство", "Многоформатные заводы"],
  },
  "mark-9-5-max-s-tray-filler": {
    tagline: "Высокоскоростная машина Mark 9.5 с Max S и лоткозаполнителем массового потока.",
    metaDescription:
      "Molins Mark 9.5 с Max S и лоткозаполнителем в Пакистане: от 4 500 до 5 000 сигарет в минуту. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 9.5 с Max S и лоткозаполнителем — первоклассный выбор для производителей, которым нужны высокоскоростной выпуск, аккуратная интеграция фильтров и надёжная производственная способность в одной линии. Спроектированная для объёма, она работает на выдающихся 4 500–5 000 сигарет в минуту, что ставит её в число самых эффективных систем для крупных заводов в Пакистане.",
      "В центре конфигурации — машина MK-9.5, развитие проверенной серии Mark 9, удерживающая высокий выпуск при высокой точности и однородности. Она поддерживает окружность сигарет от 17 мм до 28,3 мм и комбинированную длину стержня фильтр-табак от 65 мм до 110 мм, так что вы можете переходить между King size, Slims, Demi и другими форматами без потери качества стержня.",
      "Машина сочетается с узлом сборки фильтров Max-S, который присоединяет фильтр к табачному стержню точно и повторяемо. Работая через лоткозаполнитель массового потока, она повышает пропускную способность, удерживая отходы материала и рассогласование низкими, так что целостность фильтра остаётся стабильной в каждом производственном цикле.",
      "Формат по умолчанию 84 мм удерживает машину в соответствии с общепринятыми в мире размерами сигарет, что делает её практичной как для местного снабжения, так и для экспортного производства. Управляете ли вы собственным брендом или выполняете крупные контракты — она плавно переходит между партиями и легко адаптируется к меняющимся заказам.",
      "При весе около 7 800 кг это тяжёлая, стабильная линия, созданная для непрерывной работы и долгого срока службы. Для завода, желающего масштабироваться, защищая качество и удерживая простои низкими, Mark 9.5 с Max S и лоткозаполнителем объединяет скорость, гибкость и надёжность, нужные производству, — от проверенного изготовления и точного присоединения фильтра до оптимизированной подачи массового потока и прочной, износостойкой рамы.",
    ],
    applications: ["Крупносерийное производство", "Производство, готовое к экспорту"],
  },
  "mark-9-max-s": {
    tagline: "Высокоскоростная машина MK-9 с Max S и лоткозаполнителем массового потока.",
    metaDescription:
      "Molins MK-9 с Max S в Пакистане: от 4 500 до 5 000 сигарет в минуту с лоткозаполнителем массового потока. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Molins MK-9 с Max S — ещё одна высокоэффективная сигаретная машина, созданная для серьёзного производства, работающая между 4 500 и 5 000 сигарет в минуту. Это надёжный выбор для заводов в Пакистане, которым нужен сильный, стабильный выпуск от одной линии.",
      "Машина MK-9 в её основе сохраняет производство точным и однородным смену за сменой. Она работает с окружностью сигарет от 17 мм до 28,3 мм и комбинированной длиной стержня фильтр-табак от 65 мм до 110 мм, так что вы получаете реальную гибкость переходить между форматами без потери качества стержня.",
      "Она оснащена узлом сборки фильтров Max-S и лоткозаполнителем массового потока, которые делают этап присоединения фильтра быстрее и надёжнее, удерживая отходы и рассогласование низкими. Формат по умолчанию 84 мм удерживает её в соответствии с широко принятыми размерами сигарет, так что она легко вписывается в большинство производственных планов.",
      "При весе около 7 800 кг MK-9 — тяжёлая, стабильная машина, созданная для непрерывной работы и долгого срока службы. Для завода, наращивающего крупносерийное производство с защитой качества, это прочное, надёжное дополнение к производству.",
    ],
    applications: ["Крупносерийное производство", "Основная производственная линия"],
  },
  "protos-70": {
    tagline: "Высокоскоростная линия Protos 70 до 7 000 сигарет в минуту.",
    metaDescription:
      "Сигаретная машина Hauni Protos 70 в Пакистане: до 7 000 в минуту с управлением IPC Siemens или Beckhoff. Поставка от Civic Tobacco Machinery.",
    intro: [
      "Hauni Protos 70 — передовая сигаретная машина, созданная соответствовать высочайшим стандартам производственной эффективности и точности. Она работает на впечатляющих 7 000 сигарет в минуту на обычных диаметрах и 6 000 в минуту на форматах slim и super slim, что даёт заводам в Пакистане реальную скорость и гибкость от одной линии.",
      "Она работает с окружностью сигарет от 17 мм до 28,3 мм и комбинированной длиной стержня фильтр-табак от 65 мм до 110 мм, так что вы можете переходить между форматами, сохраняя ровный стержень от цикла к циклу.",
      "Система управления IPC Siemens или IPC Beckhoff удерживает последовательность автоматизированной, плавной и надёжной, а микроволновая система контроля веса удерживает каждую сигарету на точном весе для стабильной однородности продукта. Линия объединяет машину для стержня S7000, узел присоединения фильтра M8000 и автоматический лоткозаполнитель F80, каждый из которых чисто выполняет свой этап процесса.",
      "С мощностью 50 кВт для S7000, 20 кВт для M8000 и 15 кВт для F80 Protos 70 — мощная, способная линия. При общем весе около 10 800 кг она тяжёлая и стабильная, созданная для непрерывной работы и долгого срока службы, что делает её идеальным выбором для крупносерийного производства сигарет.",
    ],
    applications: ["Крупносерийное производство", "Производство большого масштаба"],
  },
  "protos-80-er": {
    tagline: "Высокоскоростная линия Protos 80 ER до 8 000 сигарет в минуту.",
    metaDescription:
      "Сигаретная машина Hauni Protos 80 ER в Пакистане: до 8 000 в минуту с управлением IPC Siemens или Beckhoff. Поставка от Civic Tobacco Machinery.",
    intro: [
      "Protos 80 ER — высокопроизводительная сигаретная машина, спроектированная для производителей, которым нужны максимальная эффективность, точность и выпуск. Созданная Hauni, серия Protos 80 известна надёжностью и передовой автоматизацией, и производите ли вы обычные или slim сигареты — она обеспечивает сильную однородность и производительность, что делает её надёжным выбором для высокообъёмных линий в Пакистане.",
      "Именно в производительности эта машина по-настоящему выделяется. Она производит до 8 000 сигарет в минуту на обычных диаметрах и 7 000 в минуту на форматах slim и super slim. Она принимает окружность сигарет от 17 мм до 28,3 мм и комбинированную длину стержня фильтр-табак от 65 мм до 110 мм, так что остаётся гибкой между типами сигарет и требованиями рынка. От king size до slim и нишевых форматов Protos 80 ER адаптируется к тому, как вы производите.",
      "Для точности и бесперебойности она работает с системой управления ПЛК высокого уровня на IPC Siemens или IPC Beckhoff, удерживая весь цикл плавным и автоматизированным. Мониторинг в реальном времени и быстрая реакция системы сокращают человеческие ошибки и удерживают линию в работе, а встроенная микроволновая система контроля веса удерживает стабильный вес сигареты на каждой единице для жёсткого контроля качества.",
      "Линия состоит из трёх мощных узлов, работающих вместе: машина для стержня S7000 на 50 кВт, узел присоединения фильтра M8000 на 20 кВт и автоматический лоткозаполнитель F80 на 15 кВт. Известная надёжностью и используемая на сигаретных заводах по всему миру, Protos 80 сочетает эффективное использование энергии, малые отходы и точную инженерию, удерживая эксплуатационные расходы низкими, а стандарты продукта — высокими. При общем весе около 10 800 кг это тяжёлая, стабильная линия, созданная для непрерывного крупносерийного производства.",
    ],
    applications: ["Крупносерийное производство", "Производство большого масштаба"],
  },

  "kdf-1": {
    h1: "Машина для производства сигаретных фильтров Hauni KDF-1",
    metaTitle: "Фильтровальная машина Hauni KDF-1",
    tagline: "Фильтровальная линия Hauni KDF-1 с лазерным контролем окружности.",
    metaDescription:
      "Фильтровальная машина Hauni KDF-1 в Пакистане: фильтры 120 мм с ПЛК Siemens/Beckhoff и лазерным контролем окружности. Поставка от Civic Tobacco Machinery.",
    intro: [
      "Hauni KDF-1 — проверенная, мощная фильтровальная линия с прочной репутацией по производительности, точности и долговечности в производстве сигарет. Созданная для нужд высокообъёмного производства, KDF-1 подходит производителям в Пакистане, ставящим на первое место однородность, скорость и качество.",
      "Созданная для работы с высоким выпуском, она предлагает надёжную производительность для фильтров 120 мм, которая хорошо подходит как для стандартных, так и для нестандартных форматов сигарет. Она поддерживает окружность фильтра от 16,8 мм до 28,1 мм и длину фильтра от 64 мм до 150 мм, так что вы можете производить широкий диапазон размеров и типов фильтров без постоянных переналадок. От фильтров King Size до Slims и специализированных конструкций KDF-1 эффективно справляется со всеми.",
      "Она работает с передовой системой управления ПЛК, доступной в конфигурациях Siemens или Beckhoff, обеспечивая интуитивное управление, диагностику в реальном времени и надёжную автоматизацию, удерживающую качество фильтра стабильным на протяжении всего цикла. Сервосистемы Lenze или Beckhoff добавляют стабильности и удерживают движение плавным и точным.",
      "Выдающаяся особенность — лазерная система контроля окружности, измеряющая окружность каждого фильтра с высокой точностью, сокращая отклонения и удерживая каждую партию однородной. Такой уровень точности важен для соблюдения стандартов качества бренда на премиальных продуктах.",
      "При всём своём выпуске KDF-1 сохраняет сбалансированный энергетический профиль при общей мощности 40 кВт, что делает её экономичной в эксплуатации в долгосрочной перспективе. Её прочная, хорошо спроектированная конструкция обеспечивает долгий срок службы, а модульная конструкция и совместимость с разными типами сигарет делают её подходящей как для мелко-, так и для крупносерийного производства фильтров, расширяете ли вы мощность или заменяете старое оборудование.",
    ],
    applications: ["Крупносерийное производство фильтров", "Стандартные и специализированные фильтры"],
  },
  "kdf-2": {
    h1: "Машина для производства сигаретных фильтров Hauni KDF-2",
    metaTitle: "Высокоскоростная фильтровальная машина Hauni KDF-2",
    tagline: "Высокоскоростная фильтровальная линия Hauni KDF-2 на 400 метров в минуту.",
    metaDescription:
      "Фильтровальная машина Hauni KDF-2 в Пакистане: 400 метров ацетатного жгута в минуту с ПЛК Siemens/Beckhoff. Поставка от Civic Tobacco Machinery.",
    intro: [
      "Hauni KDF-2 — фильтровальная машина мирового класса, созданная для высокоэффективного, высокообъёмного производства сигаретных фильтров. Известная качеством инженерии и передовой автоматизацией, KDF-2 — надёжный выбор для крупных производителей в Пакистане, которым нужны и точность, и производительность.",
      "Она работает в впечатляющем темпе, обрабатывая 400 метров ацетатного жгута в минуту, что хорошо подходит для нужд современных производственных линий. Эта скорость сочетается с реальной универсальностью: она поддерживает окружность фильтра от 16,8 мм до 28,1 мм и длину фильтра от 64 мм до 150 мм, охватывая всё от стандартных фильтров King Size до более специализированных форматов с однородностью, качеством и минимальными простоями.",
      "Что отличает KDF-2 — это её автоматизация. Система управления ПЛК, доступная в конфигурациях Siemens или Beckhoff, обеспечивает полный контроль и мониторинг в реальном времени, а высокопроизводительная сервосистема Lenze или Beckhoff удерживает движения точными, а работу — надёжной. Это уменьшает погрешность и удерживает качество фильтра однородным, так что машина плавно интегрируется как надёжная основа для непрерывного крупносерийного производства.",
      "Созданная для долговечности, KDF-2 сочетается с раскрывателем жгута и автоматическим лоткозаполнителем HCF80 для оптимизации рабочего процесса и сокращения ручной обработки. Она потребляет 40 кВт для основного узла KDF-2 и 15 кВт для заполнителя HCF80, сочетая энергоэффективность с высокой производительностью.",
      "Даже при всех своих возможностях KDF-2 сохраняет управляемый размер около 6 500 кг, а её прочная конструкция обеспечивает долговечность под требовательными производственными графиками. Строите ли вы новое предприятие или заменяете существующее оборудование — это разумная инвестиция, аккуратно вписывающаяся в современные производственные системы при отличном качестве фильтра.",
    ],
    applications: ["Крупносерийное производство фильтров", "Производство большого масштаба"],
  },
  "molins-pm-5": {
    tagline: "Высокопроизводительная фильтровальная машина Molins на 4 000 фильтров в минуту.",
    metaDescription:
      "Фильтровальная машина Molins PM-5 в Пакистане: высокопроизводительная машина на 4 000 фильтров в минуту. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Molins PM-5 — высокопроизводительная машина для сигаретных фильтров, созданная для нужд крупносерийного производства. С производительностью 4 000 фильтров в минуту она — сильный пример эффективности и точности в производстве фильтров и надёжно подходит загруженным заводам в Пакистане.",
      "Она предлагает полезную гибкость в размерах фильтра: диаметр фильтровального стержня от 7,5 до 7,8 мм и длина фильтровального стержня от 108 до 126 мм, так что она может без труда работать с разными спецификациями фильтров.",
      "При весе около 2 000 кг PM-5 имеет прочную конструкцию, обеспечивающую долговечность и стабильную работу в течение длительных периодов. Созданная Molins, известным именем в отрасли, она сочетает проверенную инженерию с высокоскоростным выпуском, что делает её незаменимым активом для производителей, которым нужны качественные фильтры при максимизации пропускной способности.",
    ],
    applications: ["Крупносерийное производство фильтров", "Линии на базе Molins"],
  },
  "hollow-tube-maker": {
    tagline: "Высокоскоростная машина для полых трубок на 2 100 сигарет в минуту.",
    metaTitle: "Машина для полых трубок, машина для сигаретных фильтров",
    metaDescription:
      "Машина для полых трубок в Пакистане: 2 100 в минуту с узлом сборки штранга для специальных фильтровальных трубок. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Машина для полых трубок выделяется производительностью и высокоскоростной работой. Способная производить 2 100 сигарет в минуту, она обеспечивает сильную эффективность и стабильный выпуск. Диапазон скорости стержня от 140 до 175 метров в минуту, вместе со скоростью отреза до 2 500 стержней в минуту, подчёркивает, насколько хорошо она подходит для высокообъёмного производства для заводов в Пакистане.",
      "При весе 3 050 кг машина имеет прочную конструкцию для долговечности и надёжности в долгосрочной перспективе. Узел сборки штранга добавляет ещё 1 800 кг и работает синхронно с машиной для точного, эффективного производства трубок. Общее потребление мощности — 14 кВт, разделённое между 6,5 кВт для машины и 7,5 кВт для узла сборки штранга, что хорошо балансирует производительность и энергопотребление.",
      "Спроектированная для крупносерийного производства, машина для полых трубок использует современную технологию для выпуска высококачественных трубок. Её высокоскоростная способность и прочная инженерия делают её ценным активом для производителей, которым нужно удовлетворять высокий спрос при отличных производственных стандартах.",
    ],
    applications: ["Крупносерийное производство фильтров", "Специальные фильтровальные трубки"],
  },

  "tobacco-feeder": {
    tagline: "Подаёт ровный, равномерный поток табака к машинам Mark 8 и Mark 9.",
    metaTitle: "Табачное подающее устройство для сигаретных машин",
    metaDescription:
      "Табачное подающее устройство в Пакистане: ровный, равномерный поток табака для сигаретных машин Mark 8 и Mark 9. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Табачное подающее устройство — важнейшая входная машина для сигаретного завода. Оно подаёт табак непрерывно и равномерно в производственные машины, аккуратно укладывая его слоями, чтобы он был подготовлен ровно так, как нужно для производства.",
      "Оно совместимо с машинами Mark 8 и Mark 9, так что легко вписывается в существующую схему. Его регулируемые настройки объёма позволяют точно контролировать поток табака, что повышает эффективность производства, а его автоматизация сокращает ручную обработку, оптимизирует работу и поддерживает высокую производительность.",
    ],
    applications: ["Подача к производственной машине", "Равномерное производство стержня"],
  },
  "cigarette-reclaimer": {
    tagline: "Извлекает табак из отходов на 120 кг/час с эффективностью 99,8 %.",
    metaTitle: "Рекуператор сигарет, машина для извлечения табака",
    metaDescription:
      "Рекуператор сигарет в Пакистане: извлекает табак из производственных отходов на 120 кг/час с эффективностью 99,8 %. Поставка от Civic Tobacco Machinery.",
    intro: [
      "Рекуператор сигарет — отличная машина для извлечения табака из отходов производства сигарет. Он отделяет пригодный к повторному использованию табак от отходов с очень малыми потерями, так что табак, который иначе вы бы выбросили, возвращается в производство.",
      "При максимальной производительности он извлекает 120 кг в час и работает с впечатляющей эффективностью 99,8 %, давая вам максимально возможное использование. При коэффициенте извлечения 90 % он даёт реальное преимущество в сокращении отходов и повышении общей эффективности производства.",
      "Он удобен и прост в интеграции в вашу производственную линию, что делает его практичным, экономящим средства дополнением для заводов в Пакистане, желающих получить максимум от каждой партии.",
    ],
    applications: ["Сокращение отходов", "Извлечение табака"],
  },
  "tobacco-cutters": {
    tagline: "Табачный резак Hauni KT-400 с пятью ножами и ПЛК-контролем размера реза.",
    metaTitle: "Табачный резак Hauni KT-400",
    metaDescription:
      "Табачный резак Hauni KT-400 в Пакистане: пятиножевой резак с ПЛК-регулировкой размера реза. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Табачный резак Hauni KT-400 — прецизионная машина, играющая ключевую роль в поддержании стабильного качества реза при переработке табака. Он несёт пять ножей, обеспечивающих равномерный рез и улучшающих общее качество табачной смеси, а пневматические цилиндры приводят в действие зажим для плавного, эффективного реза с меньшими простоями и обслуживанием.",
      "KT-400 также работает с передовой системой привода ПЛК на латунной изогнутой планке, которая точно регулирует размер реза. Это удерживает каждую партию однородной и позволяет подстраивать размер реза под конкретные требования, добавляя реальную универсальность. С его точностью и надёжностью KT-400 — важный актив для любого табачного производства в Пакистане, стремящегося к высшему качеству и эффективности.",
    ],
    applications: ["Первичная переработка", "Подготовка резаного табака"],
  },
  "tobacco-stem-flattener": {
    tagline: "Расплющивает табачные жилки для равномерной смеси и меньших отходов листа.",
    metaTitle: "Машина для расплющивания жилок табака, машина первичной переработки",
    metaDescription:
      "Машина для расплющивания жилок табака в Пакистане: расплющивает жилки для равномерной смеси и сокращённых отходов листа. Поставка и обслуживание от Civic Tobacco Machinery.",
    intro: [
      "Машина для расплющивания жилок табака играет ключевую роль в оптимизации процесса переработки табака. Расплющивая табачные жилки, она подготавливает их к равномерному смешиванию с листьями, что улучшает удобство переработки и снижает вероятность неоднородностей в конечном продукте.",
      "Эффективно расплющивая жилки, она также сводит к минимуму отходы листа, делая весь процесс более экономичным и устойчивым. Результат — однородный, высококачественный продукт, отвечающий строгим отраслевым стандартам, что делает машину для расплющивания жилок ценным активом для любого табачного производства в Пакистане.",
    ],
    applications: ["Первичная переработка", "Повышение выхода"],
  },
};

const ar: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "ماكينة تغليف السجائر HLP-180",
    metaTitle: "ماكينة تغليف HLP-180، 180 علبة/دقيقة",
    tagline: "خط علب صلبة عالي السرعة يعمل بمعدل 180 علبة في الدقيقة.",
    metaDescription:
      "ماكينة تغليف السجائر HLP-180 في باكستان: 180 علبة في الدقيقة من مقاسات King إلى Nano مع تحكم PLC. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "HLP-180 ماكينة قوية من الجيل الجديد مصمّمة لتغليف السجائر عالي السرعة. تشتهر بأدائها الثابت وإنتاجها الموثوق، وتناسب المصنّعين الراغبين في تبسيط عملية التغليف دون التنازل عن الجودة أو الدقة.",
      "بإنتاج 180 علبة في الدقيقة، تنفّذ دورات تغليف فعّالة ومنتظمة بفضل آلية المكبس الواحد، محافظةً على محاذاة ولفّ وإحكام مثالي لكل علبة. يتيح ذلك للمصانع في باكستان تلبية الطلب الكبير مع الحفاظ على تشطيب نظيف قابل للتكرار.",
      "صُمّمت للتعامل مع نطاق واسع من مقاسات السجائر، بما فيها King Size وDemi وSlims وSuper Slims وNano. تعني هذه المرونة أنه يمكنك خدمة تفضيلات مختلفة للمستهلكين في الأسواق المحلية والتصديرية على الماكينة نفسها.",
      "يحافظ نظام تحكم PLC على تشغيل دقيق ومؤتمت بالكامل، لتخرج كل علبة متجانسة ومغلّفة جيدًا وجاهزة للبيع. تمنح الواجهة سهلة الاستخدام المشغّل تحكمًا كاملاً في السرعة واكتشاف الأخطاء ومراقبة الإنتاج، ما يقلّل التوقفات ويرفع الكفاءة العامة.",
      "ما يميّز HLP-180 حقًا مرونتها في أشكال العلب. تدعم صيغ الزوايا الدائرية والحافة المشطوفة ونوع D والمربعة، ليتمكن أصحاب العلامات من تمييز تغليفهم والتميّز على الرف ومواكبة اتجاهات السوق. مبنية للإنتاج المستمر واسع النطاق، وهي خيار قوي سواء كنت توسّع خطًا أو تستبدل معدات قديمة.",
    ],
    applications: ["إنتاج العلب الصلبة بكميات كبيرة", "الأسواق المحلية والتصديرية"],
  },
  "hlp-200": {
    h1: "ماكينة تغليف السجائر HLP-200",
    metaTitle: "ماكينة تغليف HLP-200، 200 علبة/دقيقة",
    tagline: "خط علب صلبة بمكبس مزدوج يعمل بمعدل 200 علبة في الدقيقة.",
    metaDescription:
      "ماكينة تغليف السجائر HLP-200 في باكستان: خط بمكبس مزدوج 200 علبة في الدقيقة من مقاسات King إلى Nano. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "HLP-200 ماكينة تغليف بقادوس ومكبس مزدوج مبنية للإنتاج الصغير والمتوسط والكبير. وهي خيار شائع لدى المصنّعين في باكستان لأنها تستخدم المواد بعناية وتساعد على خفض تكاليف التشغيل مع الحفاظ على وتيرة سريعة وثابتة.",
      "بسرعة 200 علبة في الدقيقة وطاقة قصوى نحو 12,000 سيجارة، تقع في قلب خط التغليف كأول وحدة حرجة، تشكّل العلبة وتنهيها قبل انتقالها إلى اللف والتعبئة. تدعم جميع صيغ علب السجائر الشائعة، فتندمج بسهولة في معظم إعدادات الإنتاج.",
      "تتعامل الماكينة مع نطاق واسع من مقاسات السجائر، بما فيها King Size وDemi وSlims وSuper Slims وNano، ويحافظ نظام المكبس المزدوج على كفاءة دورة التغليف وتجانس التشطيب. يحافظ نظام تحكم PLC على تشغيل دقيق ومؤتمت بالكامل، مانحًا المشغّل تحكمًا واضحًا في السرعة واكتشاف الأخطاء والمراقبة.",
      "لعرض العلبة توفّر صيغ الزوايا الدائرية والحافة المشطوفة ونوع D والمربعة، ليتمكن أصحاب العلامات من تشكيل تغليفهم للتميّز على الرف. تعمل على تغذية 220/380 فولت ومبنية لإنتاج مستمر موثوق، وهي وحدة أساسية متينة لأي خط تغليف متكامل.",
    ],
    applications: ["إنتاج العلب الصلبة بكميات كبيرة", "قلب خط تغليف متكامل"],
  },
  "hlp-225": {
    h1: "ماكينة تغليف السجائر HLP-225",
    metaTitle: "ماكينة تغليف HLP-225، 225 علبة/دقيقة",
    tagline: "خط علب صلبة عالي السرعة بمكبس مزدوج بمعدل 225 علبة في الدقيقة.",
    metaDescription:
      "ماكينة تغليف السجائر HLP-225 في باكستان: خط بمكبس مزدوج عالي السرعة 225 علبة في الدقيقة مع تحكم PLC. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "خط التغليف HLP-225 خطوة حقيقية إلى الأمام في تغليف السجائر. بسرعة 225 علبة في الدقيقة، تقدّم هذه الماكينة ذات المكبس المزدوج كفاءة وإنتاجية عاليتين للمصانع التي تحتاج إلى التغليف على نطاق واسع.",
      "صُمّمت للتعامل مع نطاق واسع من مقاسات السجائر، بما فيها King وDemi وSlims وSuper Slims وNano، ليحصل المصنّعون في باكستان على مرونة تلبية متطلبات سوق مختلفة على ماكينة واحدة.",
      "يحسّن نظام تحكم PLC حديث الدقة ويؤتمت عملية التغليف، مقلّلًا التدخل اليدوي والأخطاء. وتدعم HLP-225 أيضًا صيغ علب متعددة، بما فيها الزوايا الدائرية والحافة المشطوفة ونوع D والمربعة، ما يتيح لأصحاب العلامات تكييف تغليفهم مع تفضيلات ومتطلبات مستهلكين مختلفة.",
      "مبنية للإنتاج واسع النطاق، تجمع HLP-225 بين ميزات متقدمة وبنية متينة لأداء موثوق وثابت. قدرتها على التغليف بسرعة عالية دون التنازل عن الجودة تجعلها أصلًا قيّمًا لأي منشأة تسعى إلى رفع الإنتاج والبقاء تنافسية.",
    ],
    applications: ["إنتاج العلب الصلبة بكميات كبيرة", "خطوط تغليف واسعة النطاق"],
  },
  "sasib-5000": {
    h1: "ماكينة العلب اللينة SASIB 5000",
    metaTitle: "ماكينة العلب اللينة SASIB 5000",
    tagline: "ماكينة SASIB لعلب لينة مقاس 100 مم بزوايا مربعة.",
    metaDescription:
      "ماكينة العلب اللينة SASIB 5000 في باكستان: علب لينة 100 مم بلفّ رقائق الألمنيوم والملصق. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "SASIB 5000 ماكينة متعددة الاستخدامات مبنية لإنتاج علب لينة لسجائر 100 مم. باستخدام لفّ رقائق الألمنيوم والملصق حول محور، تقدّم علبًا مثالية ومتجانسة بزوايا مربعة أنيقة.",
      "لا تقتصر طريقة اللف هذه على الشكل الجميل؛ فهي تحمي السجائر وتُبقي كل علبة سليمة، مع رفع الجاذبية البصرية للمنتج النهائي. وللمصنّعين في باكستان الراغبين في تشطيب علب لينة راقٍ، فهي خيار موثوق وعالي الجودة.",
      "مجرّبة وسهلة التشغيل، تُسلَّم SASIB 5000 مفحوصة ومهيّأة جاهزة للإنتاج، لتضيف طاقة موثوقة للعلب اللينة بثقة.",
    ],
    applications: ["إنتاج العلب اللينة", "مقاسات 100 مم"],
  },
  "sasib-3000": {
    h1: "ماكينة العلب اللينة SASIB 3000",
    metaTitle: "ماكينة العلب اللينة SASIB 3000",
    tagline: "ماكينة SASIB لعلب لينة مقاس 84 مم و100 مم بزوايا مربعة.",
    metaDescription:
      "ماكينة العلب اللينة SASIB 3000 في باكستان: تتعامل مع علب 84 مم و100 مم بلفّ رقائق الألمنيوم والملصق. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "تضيف SASIB 3000 مرونة إضافية لخط العلب اللينة من SASIB بقدرتها على التعامل مع علب سجائر 84 مم و100 مم. وباستخدام لفّ رقائق الألمنيوم والملصق حول محور، تحافظ على تشطيب SASIB المميّز: علب مثالية ومتجانسة بزوايا مربعة أنيقة.",
      "تجعل قدرة المقاسين هذه من SASIB 3000 أصلًا قيّمًا للمصنّعين في باكستان الذين يحتاجون مرونة في الإنتاج مع الحفاظ على كل علبة بمستوى عالٍ من العرض والحماية.",
      "تجعل أنظمة التحكم فيها الضبط والصيانة أمرًا بسيطًا، ما يساعد على تقليل التوقفات والحفاظ على إنتاجية عالية. تُسلَّم مفحوصة ومهيّأة جاهزة للعمل، وهي خط علب لينة موثوق للمصانع التي تريد الجودة ومرونة المقاسات معًا.",
    ],
    applications: ["إنتاج العلب اللينة", "مقاسات 84 مم و100 مم"],
  },

  "regular-wrapper-cp1": {
    tagline: "ماكينة لفّ خارجي لعلب السجائر عالية السرعة حتى 250 علبة في الدقيقة.",
    metaTitle: "ماكينة لفّ العلب CP-1، 250 علبة/دقيقة",
    metaDescription:
      "ماكينة لفّ علب السجائر CP-1 في باكستان: حتى 250 علبة في الدقيقة. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "CP-1 ماكينة لفّ خارجي عالية الأداء لعلب السجائر مبنية للتعامل بسهولة مع متطلبات إنتاج جادة. بسرعة لفّ تصل إلى 250 علبة في الدقيقة، ترفع كفاءة خط التغليف وإنتاجيته للمصانع في باكستان.",
      "تعمل بمتطلبات قدرة متواضعة قدرها 6 ك.ف.أ وضغط هواء 0.05 م³/دقيقة، فتقدّم أداءً قويًا مع الحفاظ على كفاءة الطاقة. صُمّمت CP-1 للفّ دقيق ومتجانس يقلّل هدر المواد ويُبقي كل علبة ضمن معيار جودة صارم.",
      "بنيتها المتينة وتشغيلها الموثوق يجعلانها أصلًا يُعتمد عليه للخطوط عالية الكميات، محافظةً على سلاسة العملية ونظافة الإنتاج. كما تندمج بأناقة في الخطوط القائمة، ما يجعلها إضافة عملية وقيّمة لأي منشأة تسعى لرفع الإنتاجية دون فقدان الجودة.",
    ],
    applications: ["لفّ العلب", "خطوط تغليف عالية الكميات"],
  },
  "naked-over-wrapper": {
    tagline: "ماكينة لفّ خارجي للعلب الخارجية بمعدل 25 علبة خارجية في الدقيقة.",
    metaTitle: "Naked Over Wrapper، ماكينة لفّ خارجي للسجائر",
    metaDescription:
      "Naked Over Wrapper في باكستان: ماكينة لفّ خارجي لعلب السجائر الخارجية بمعدل 25 علبة خارجية في الدقيقة. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "Naked Over Wrapper ماكينة مصمّمة جيدًا للفّ العلب الخارجية للسجائر بدقة وسرعة. تلفّ 25 علبة خارجية في الدقيقة، محافظةً على مستوى عالٍ من الكفاءة على الخط للمصانع في باكستان.",
      "تعمل باحتياج طاقة قدره 6 ك.ف.أ وضغط هواء 0.05 م³/دقيقة، ما يمنح أداء عمل موثوقًا دون سحب طاقة كبير. متينة وفعّالة، وهي إضافة سليمة لخط إنتاج السجائر، ترفع جودة التغليف في المرحلة الأخيرة.",
    ],
    applications: ["لفّ العلب الخارجية", "الإحكام في نهاية الخط"],
  },
  "molins-boxer": {
    tagline: "ماكينة تعبئة علب السجائر في صناديق حتى 20 صندوقًا في الدقيقة.",
    metaTitle: "Molins Boxer، ماكينة تعبئة علب السجائر",
    metaDescription:
      "ماكينة التعبئة Molins Boxer في باكستان: حتى 20 صندوقًا في الدقيقة لكراتين السجائر. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "Molins Boxer ماكينة تعبئة موثوقة لعلب السجائر تشتهر بتشغيلها الفعّال وإنتاجيتها المتينة. بسرعة تعبئة تصل إلى 20 صندوقًا في الدقيقة، ترفع إنتاجية خطوط تغليف السجائر في باكستان.",
      "تعمل بضغط هواء 0.05 م³/دقيقة، موازنةً بين استهلاك الطاقة والتشغيل الثابت. مصمّمة للموثوقية، تُبقي Molins Boxer التعبئة متجانسة ودقيقة، ما يقلّل التوقفات ويحافظ على جودة المنتج عالية.",
      "هذا يجعلها جزءًا أساسيًا من أي إعداد إنتاج يركّز على الكفاءة والإنتاج الثابت، إذ تأخذ العلب الملفوفة وتشكّلها في كراتين مرتّبة في نهاية الخط.",
    ],
    applications: ["التعبئة في كراتين/صناديق", "التجميع في نهاية الخط"],
  },
  "sasib-boxer": {
    tagline: "ماكينة تعبئة علب السجائر في صناديق حتى 25 صندوقًا في الدقيقة.",
    metaTitle: "SASIB Boxer، ماكينة تعبئة علب السجائر",
    metaDescription:
      "ماكينة التعبئة SASIB Boxer في باكستان: حتى 25 صندوقًا في الدقيقة لكراتين السجائر. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "SASIB Boxer ماكينة تعبئة متقدمة لعلب السجائر تشتهر بسرعتها وكفاءتها. قادرة على تعبئة حتى 25 صندوقًا في الدقيقة، تمنح دفعة حقيقية لإنتاجية خط إنتاج السجائر في باكستان.",
      "تعمل بمتطلبات قدرة قدرها 6 ك.ف.أ، جامعةً بين القدرة والأداء، وباحتياج ضغط هواء 0.1 م³/دقيقة، محافظةً على التوازن بين استهلاك الطاقة وكفاءة التشغيل.",
      "مصمّمة لتعبئة دقيقة ومتجانسة للغاية، تقلّل SASIB Boxer التوقفات وتبسّط العملية، ما يجعلها أصلًا قيّمًا للبيئات عالية الكميات حيث تهمّ السرعة والدقة للإنتاجية وجودة المنتج.",
    ],
    applications: ["التعبئة في كراتين/صناديق", "خطوط تغليف عالية الكميات"],
  },

  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – ماكينة تصنيع السجائر في الشرق الأوسط",
    metaTitle: "MK 8 | ماكينة تصنيع السجائر Mark 8 Post 64",
    tagline: "ماكينة الصناعة الموثوقة التي لا تزال المصانع تعتمد عليها.",
    metaDescription:
      "ماكينة صناعة السجائر Molins Mark 8 Post 64 في باكستان: ماكينة موثوقة لإنتاج ثابت. مُجددة ومدعومة من Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 8 Post 64 ماكينة صناعة سجائر مجرّبة عالية الإنتاج مبنية للجودة والمرونة. تعمل بثبات بمعدل 1,800 إلى 2,000 سيجارة في الدقيقة وتحمل طابعة ثنائية اللون، لتطبع الورق تمامًا كما تحتاج علامتك دون إبطاء الخط.",
      "تتعامل مع طيف واسع من المقاسات: محيط سجائر من 17 مم حتى 28.3 مم وأطوال عود فلتر وتبغ مجمّعة من 65 مم إلى 110 مم، ما يغطي كل شيء من المقاسات القياسية 84 مم و100 مم حتى Slims وSuper Slims وNano. ويركّب تجهيز الفلتر Max Multiroll الفلاتر بنظافة عند السرعة الكاملة.",
      "بوزن نحو 3,500 كجم، هي ماكينة ثقيلة ومتينة صُنعت للحفاظ على وتيرتها خلال دورات إنتاج طويلة. هذا المزيج من السرعة ومرونة المقاسات والموثوقية يجعل Mark 8 Post 64 خيارًا ذكيًا للمصانع التي تريد إنتاجًا قويًا من ماكينة واحدة.",
    ],
    features: [
      "تصميم Molins مجرّب وطويل العمر",
      "عود متساوٍ وقطع نظيف",
      "قطع الغيار والخبرة متوفرة على نطاق واسع",
      "سهلة الصيانة للفنّيين",
      "قيمة ممتازة كوحدة مُجددة",
    ],
    applications: ["خط صناعة للبداية", "ماكينة صناعة احتياطية موثوقة"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D مع ماكينة MAX-15",
    tagline: "ماكينة Mark 8D عالية السرعة مع نظام تحكم MAX-15.",
    metaDescription:
      "ماكينة صناعة السجائر Molins Mark 8D مع MAX-15 في باكستان: 3,000 في الدقيقة من مقاسات King إلى Nano. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 8D مع MAX-15 ماكينة صناعة سجائر قوية ومرنة مبنية لمتطلبات مصنع تبغ حديث. تنتمي إلى عائلة Mark 8 المعروفة وتمنح المصنّعين الباكستانيين طريقة موثوقة لزيادة الإنتاج دون التنازل عن الجودة.",
      "تعمل بسرعة تصل إلى 3,000 سيجارة في الدقيقة، محافظةً على وتيرتها بارتياح على خط إنتاج مزدحم. والأهم أنها تتعامل مع طيف واسع من المقاسات. سواء صنعت King size أو Demi أو Slims أو Super Slims أو Nano، فالماكينة نفسها تنتجها جميعًا، ما يجعلها خيارًا عمليًا لمصنع يخدم عدة قطاعات في آن.",
      "تقبل الماكينة محيط سجائر من 17 مم إلى 28.3 مم وأطوال عود فلتر وتبغ مجمّعة من 65 مم إلى 110 مم، لتحتفظ بالتحكم الكامل في المقاسات وتبقى متجانسة من دورة إلى أخرى.",
      "يجمع الإعداد ماكينة MK-8D مع نظام MAX-15 ووحدة تغذية 1117. معًا تقودان العملية بنظافة من تغذية التبغ حتى العود النهائي، محافظةً على استقرار الخط وتقليل التوقفات وصون الجودة طوال الوردية. وبسحب إجمالي قدره 17 كيلوواط، توازن بين سرعة إنتاج حقيقية وتكاليف تشغيل معقولة.",
      "ومع كل ذلك تبقى الماكينة مدمجة. بوزن نحو 5,000 كجم فهي متينة ومقاومة للتآكل، لكنها تندمج في مصنع قائم دون إعادة بناء كبيرة، وبنيتها تتحمّل الإنتاج المستمر الطويل. يوميًا تُخرج سجائر متساوية بهدر قليل وصيانة معتدلة، وهو تمامًا ما يحتاجه المصنع الساعي للعمل باقتصاد وتلبية الطلب عبر مقاسات مختلفة.",
      "باختصار، تكسب Mark 8D مع MAX-15 مكانتها بموثوقية مثبتة، ودعم مرن للمقاسات من Slims إلى Nano، وإنتاج عالي السرعة يبقى دقيقًا، وتشغيل موفّر للطاقة، واندماج سهل في خط مؤتمت. سواء استبدلت معدات قديمة أو أضفت طاقة، فهي ماكينة جاهزة للمستقبل تضع الهندسة الكلاسيكية في خدمة الإنتاج الحديث.",
    ],
    applications: ["إنتاج بكميات كبيرة", "مصانع متعددة المقاسات"],
  },
  "mark-9-5-lenze-servo-drives": {
    tagline: "خط صناعة Mark 9.5 عالي السرعة مع محرّكات سيرفو Lenze.",
    metaDescription:
      "Molins Mark 9.5 مع محرّكات سيرفو Lenze في باكستان: حتى 3,500 في الدقيقة مع PLC من Siemens وتحكم بالوزن بالميكروويف. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 9.5 مع محرّكات سيرفو Lenze مبنية للمصنّعين الراغبين في إنتاج كبير دون فقدان المرونة. تنتج حتى 3,500 سيجارة في الدقيقة للأقطار العادية و3,200 في الدقيقة لصيغ Slim وSuper Slim، ليغطي خط واحد نطاق منتجات واسعًا بسرعة إنتاج حقيقية.",
      "تعمل عبر محيط سجائر من 17 مم إلى 28.3 مم وأطوال عود فلتر وتبغ مجمّعة من 65 مم إلى 110 مم، ما يمنحك مساحة لتغيير المقاسات مع الحفاظ على عود متجانس من دورة إلى أخرى.",
      "يجمع الخط ثلاث وحدات: ماكينة MK-9.5، ومجمّع الفلاتر MAX-S، ومعبّئ الصواني الآلي HCF80، بسحب 35 و20 و15 كيلوواط على التوالي. معًا تقود العملية من الصناعة حتى الصواني الممتلئة بأقل قدر من المناولة اليدوية بينها.",
      "التحكم والدقة في صميم هذه الماكينة. يدير PLC من Siemens التسلسل بسلاسة، ويُبقي نظام ميكروويف تحكمًا محكمًا في وزن العود، وتمنح محرّكات سيرفو Lenze الحركة الدقيقة الثابتة التي تُبقي الجودة عالية حتى عند السرعة الكاملة.",
      "بوزن إجمالي نحو 8,600 كجم فهي خط ثقيل ومتين صُنع للتصنيع واسع النطاق. وللمصنع الذي يحتاج إنتاجًا موثوقًا بكميات كبيرة مع تحكم حديث وصيانة سهلة، فإن Mark 9.5 مع محرّكات سيرفو Lenze خيار قوي جاهز للمستقبل.",
    ],
    applications: ["إنتاج بكميات كبيرة", "مصانع متعددة المقاسات"],
  },
  "mark-9-5-max-s-tray-filler": {
    tagline: "ماكينة Mark 9.5 عالية السرعة مع Max S ومعبّئ صوانٍ بتدفق كتلي.",
    metaDescription:
      "Molins Mark 9.5 مع Max S ومعبّئ صوانٍ في باكستان: من 4,500 إلى 5,000 سيجارة في الدقيقة. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "Molins Mark 9.5 مع Max S ومعبّئ الصواني خيار راقٍ للمصنّعين الذين يحتاجون إنتاجًا عالي السرعة وتكامل فلاتر مرتّبًا وقدرة إنتاجية موثوقة في خط واحد. مصمّمة للكميات، تعمل بمعدل مذهل من 4,500 إلى 5,000 سيجارة في الدقيقة، ما يضعها بين أكثر الأنظمة كفاءة للمصانع الكبيرة في باكستان.",
      "في قلب الإعداد ماكينة MK-9.5، تطوّر لسلسلة Mark 9 المجرّبة يحافظ على إنتاج قوي مع دقة وتجانس عاليين. تدعم محيط سجائر من 17 مم إلى 28.3 مم وأطوال عود فلتر وتبغ مجمّعة من 65 مم إلى 110 مم، لتنتقل بين King size وSlims وDemi وصيغ أخرى دون فقدان جودة العود.",
      "تُقرن الماكينة بمجمّع الفلاتر Max-S الذي يركّب الفلتر على عود التبغ بدقة وقابلية للتكرار. وبالعمل عبر معبّئ صوانٍ بتدفق كتلي، ترفع الإنتاجية مع إبقاء هدر المواد وسوء المحاذاة منخفضين، لتبقى سلامة الفلتر متجانسة عبر كل دورة إنتاج.",
      "يُبقي المقاس الافتراضي 84 مم الماكينة متوائمة مع أبعاد السجائر المقبولة عالميًا، ما يجعلها عملية للإمداد المحلي والإنتاج التصديري معًا. سواء أدرت علامتك الخاصة أو نفّذت عقودًا كبيرة، فهي تنتقل بسلاسة بين الدفعات وتتكيّف بسهولة مع الطلبات المتغيّرة.",
      "بوزن نحو 7,800 كجم فهي خط ثقيل مستقر مبني للتشغيل المستمر وعمر خدمة طويل. وللمصنع الراغب في التوسّع مع حماية الجودة وإبقاء التوقفات منخفضة، تجمع Mark 9.5 مع Max S ومعبّئ الصواني السرعة والمرونة والموثوقية التي يحتاجها الإنتاج: من صناعة مجرّبة وتركيب فلتر دقيق إلى تغذية تدفق كتلي مبسّطة وهيكل متين للخدمة الشاقة.",
    ],
    applications: ["إنتاج بكميات كبيرة", "تصنيع جاهز للتصدير"],
  },
  "mark-9-max-s": {
    tagline: "ماكينة MK-9 عالية السرعة مع Max S ومعبّئ صوانٍ بتدفق كتلي.",
    metaDescription:
      "Molins MK-9 مع Max S في باكستان: من 4,500 إلى 5,000 سيجارة في الدقيقة مع معبّئ صوانٍ بتدفق كتلي. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "Molins MK-9 مع Max S ماكينة صناعة سجائر أخرى عالية الكفاءة مبنية لإنتاج جاد، تعمل بين 4,500 و5,000 سيجارة في الدقيقة. وهي خيار موثوق للمصانع في باكستان التي تريد إنتاجًا قويًا وثابتًا من خط واحد.",
      "تُبقي ماكينة MK-9 في قلبها الإنتاج دقيقًا ومتجانسًا وردية بعد وردية. تعمل عبر محيط سجائر من 17 مم إلى 28.3 مم وأطوال عود فلتر وتبغ مجمّعة من 65 مم إلى 110 مم، لتحصل على مرونة حقيقية للانتقال بين المقاسات دون فقدان جودة العود.",
      "مزوّدة بمجمّع الفلاتر Max-S ومعبّئ صوانٍ بتدفق كتلي، يجعلان خطوة تركيب الفلتر أسرع وأكثر موثوقية مع إبقاء الهدر وسوء المحاذاة منخفضين. ويُبقيها المقاس الافتراضي 84 مم متوائمة مع أبعاد السجائر المقبولة على نطاق واسع، فتندمج بسهولة في معظم خطط الإنتاج.",
      "بوزن نحو 7,800 كجم فإن MK-9 ماكينة ثقيلة مستقرة صُنعت للتشغيل المستمر وعمر خدمة طويل. وللمصنع الذي يرفع الإنتاج واسع النطاق مع حماية الجودة، فهي إضافة متينة وموثوقة.",
    ],
    applications: ["إنتاج بكميات كبيرة", "خط الصناعة الرئيسي"],
  },
  "protos-70": {
    tagline: "خط Protos 70 عالي السرعة حتى 7,000 سيجارة في الدقيقة.",
    metaDescription:
      "ماكينة صناعة السجائر Hauni Protos 70 في باكستان: حتى 7,000 في الدقيقة مع تحكم IPC من Siemens أو Beckhoff. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "Hauni Protos 70 ماكينة صناعة سجائر متقدمة مبنية لتلبية أعلى معايير كفاءة الإنتاج والدقة. تعمل بمعدل مبهر قدره 7,000 سيجارة في الدقيقة للأقطار العادية و6,000 في الدقيقة لصيغ Slim وSuper Slim، ما يمنح المصانع في باكستان سرعة ومرونة حقيقيتين من خط واحد.",
      "تتعامل مع محيط سجائر من 17 مم إلى 28.3 مم وأطوال عود فلتر وتبغ مجمّعة من 65 مم إلى 110 مم، لتنتقل بين المقاسات مع الحفاظ على عود متجانس من دورة إلى أخرى.",
      "يُبقي نظام تحكم IPC من Siemens أو Beckhoff التسلسل مؤتمتًا وسلسًا وموثوقًا، بينما يُبقي نظام تحكم بالوزن بالميكروويف كل سيجارة عند وزن دقيق لتجانس ثابت للمنتج. ويجمع الخط ماكينة العود S7000 وتركيب الفلتر M8000 ومعبّئ الصواني الآلي F80، وكلٌّ يؤدي مرحلته بنظافة.",
      "بقدرة 50 كيلوواط لـ S7000 و20 كيلوواط لـ M8000 و15 كيلوواط لـ F80، فإن Protos 70 خط قوي وقادر. وبوزن إجمالي نحو 10,800 كجم فهو ثقيل ومستقر، مبني للتشغيل المستمر وعمر خدمة طويل، ما يجعله خيارًا مثاليًا لإنتاج السجائر واسع النطاق.",
    ],
    applications: ["إنتاج بكميات كبيرة", "تصنيع واسع النطاق"],
  },
  "protos-80-er": {
    tagline: "خط Protos 80 ER عالي السرعة حتى 8,000 سيجارة في الدقيقة.",
    metaDescription:
      "ماكينة صناعة السجائر Hauni Protos 80 ER في باكستان: حتى 8,000 في الدقيقة مع تحكم IPC من Siemens أو Beckhoff. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "Protos 80 ER ماكينة صناعة سجائر عالية الأداء مصمّمة للمصنّعين الذين يريدون أقصى كفاءة ودقة وإنتاج. من صنع Hauni، وتشتهر سلسلة Protos 80 بموثوقيتها وأتمتتها المتقدمة، وسواء أنتجت سجائر عادية أو Slim فهي تقدّم تجانسًا وإنتاجية قويين، ما يجعلها خيارًا موثوقًا للخطوط عالية الكميات في باكستان.",
      "في الطاقة تبرز هذه الماكينة حقًا. تنتج حتى 8,000 سيجارة في الدقيقة للأقطار العادية و7,000 في الدقيقة لصيغ Slim وSuper Slim. تقبل محيط سجائر من 17 مم إلى 28.3 مم وأطوال عود فلتر وتبغ مجمّعة من 65 مم إلى 110 مم، لتبقى مرنة عبر أنواع السجائر ومتطلبات السوق. من King size إلى Slim إلى الصيغ المتخصصة، تتكيّف Protos 80 ER مع طريقة إنتاجك.",
      "للدقة والجاهزية تعمل بنظام تحكم PLC رفيع المستوى على IPC من Siemens أو Beckhoff، مُبقيةً الدورة كاملة سلسة ومؤتمتة. تقلّل المراقبة اللحظية والاستجابة السريعة للنظام الخطأ البشري وتُبقي الخط يعمل، بينما يُبقي نظام تحكم بالوزن بالميكروويف مدمج وزن سيجارة متجانسًا لكل وحدة لتحكم صارم في الجودة.",
      "يتكوّن الخط من ثلاث وحدات قوية تعمل معًا: ماكينة العود S7000 بقدرة 50 كيلوواط، وتركيب الفلتر M8000 بقدرة 20 كيلوواط، ومعبّئ الصواني الآلي F80 بقدرة 15 كيلوواط. تشتهر بالموثوقية وتُستخدم في مصانع السجائر حول العالم، وتجمع Protos 80 بين استخدام فعّال للطاقة وهدر منخفض وهندسة دقيقة لإبقاء تكاليف التشغيل منخفضة ومعايير المنتج عالية. وبوزن إجمالي نحو 10,800 كجم فهو خط ثقيل مستقر مبني للإنتاج المستمر واسع النطاق.",
    ],
    applications: ["إنتاج بكميات كبيرة", "تصنيع واسع النطاق"],
  },

  "kdf-1": {
    h1: "ماكينة صناعة فلاتر السجائر Hauni KDF-1",
    metaTitle: "ماكينة فلاتر Hauni KDF-1",
    tagline: "خط فلاتر Hauni KDF-1 مع تحكم بالمحيط بالليزر.",
    metaDescription:
      "ماكينة فلاتر Hauni KDF-1 في باكستان: فلاتر 120 مم مع PLC من Siemens/Beckhoff وتحكم بالمحيط بالليزر. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "Hauni KDF-1 خط فلاتر موثوق وقوي بسمعة راسخة في الأداء والدقة والمتانة في تصنيع السجائر. مبني لمتطلبات الإنتاج عالي الكميات، وتناسب KDF-1 المصنّعين في باكستان الذين يضعون التجانس والسرعة والجودة في المقدمة.",
      "مصنوعة للتشغيل عالي الإنتاج، تقدّم طاقة إنتاجية متينة لفلاتر 120 مم، تناسب الصيغ القياسية والمخصصة للسجائر. تدعم محيط فلتر من 16.8 مم إلى 28.1 مم وأطوال فلتر من 64 مم إلى 150 مم، لتنتج نطاقًا واسعًا من مقاسات وأنواع الفلاتر دون تغييرات دائمة للماكينة. من فلاتر King Size إلى Slims إلى التصاميم المتخصصة، تتعامل KDF-1 معها جميعًا بكفاءة.",
      "تعمل بنظام تحكم PLC متقدم متوفر بإعدادات Siemens أو Beckhoff، يمنح تحكمًا بديهيًا وتشخيصًا لحظيًا وأتمتة موثوقة تُبقي جودة الفلتر ثابتة طوال الدورة. وتضيف أنظمة سيرفو Lenze أو Beckhoff إلى الاستقرار وتُبقي الحركة سلسة ودقيقة.",
      "من أبرز الميزات نظام التحكم بالمحيط القائم على الليزر، الذي يقيس محيط كل فلتر بدقة عالية، مقلّلًا الانحراف ومُبقيًا كل دفعة متجانسة. هذا المستوى من الدقة مهم للحفاظ على معايير جودة العلامة في المنتجات الراقية.",
      "مع كل إنتاجها، تحافظ KDF-1 على ملف طاقة متوازن بإجمالي 40 كيلوواط، ما يجعلها اقتصادية التشغيل على المدى الطويل. بنيتها المتينة جيدة التصميم تمنح عمر خدمة طويلًا، ويجعلها تصميمها المعياري وتوافقها مع أنواع سجائر مختلفة مناسبة لإنتاج الفلاتر الصغير والكبير معًا، سواء وسّعت الطاقة أو استبدلت معدات قديمة.",
    ],
    applications: ["إنتاج الفلاتر بكميات كبيرة", "فلاتر قياسية ومتخصصة"],
  },
  "kdf-2": {
    h1: "ماكينة صناعة فلاتر السجائر Hauni KDF-2",
    metaTitle: "ماكينة فلاتر Hauni KDF-2 عالية السرعة",
    tagline: "خط فلاتر Hauni KDF-2 عالي السرعة بمعدل 400 متر في الدقيقة.",
    metaDescription:
      "ماكينة فلاتر Hauni KDF-2 في باكستان: 400 متر من شعيرات الأسيتات في الدقيقة مع PLC من Siemens/Beckhoff. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "Hauni KDF-2 ماكينة فلاتر عالمية المستوى مبنية لإنتاج فلاتر سجائر عالي الكفاءة والإنتاج. تشتهر بجودة هندستها وأتمتتها المتقدمة، وهي خيار موثوق للمصنّعين الكبار في باكستان الذين يحتاجون الدقة والإنتاجية معًا.",
      "تعمل بوتيرة مبهرة، معالجةً 400 متر من شعيرات الأسيتات في الدقيقة، ما يجعلها مناسبة لمتطلبات خطوط الإنتاج الحديثة. وتقترن هذه السرعة بمرونة حقيقية: تدعم محيط فلتر من 16.8 مم إلى 28.1 مم وأطوال فلتر من 64 مم إلى 150 مم، فتغطي كل شيء من فلاتر King Size القياسية إلى الصيغ الأكثر تخصصًا بتجانس وجودة وأقل توقفات.",
      "ما يميّز KDF-2 أتمتتها. يمنح نظام تحكم PLC، متوفر بإعدادات Siemens أو Beckhoff، تحكمًا كاملاً ومراقبة لحظية، بينما يُبقي نظام سيرفو Lenze أو Beckhoff عالي الأداء الحركات دقيقة والتشغيل موثوقًا. يقلّل ذلك هامش الخطأ ويُبقي جودة الفلتر متجانسة، فتندمج الماكينة بسلاسة كعمود فقري موثوق للتصنيع المستمر واسع النطاق.",
      "مبنية للمتانة، تقترن KDF-2 بفاتح شعيرات ومعبّئ صوانٍ آلي HCF80 لتبسيط سير العمل وتقليل المناولة اليدوية. تسحب 40 كيلوواط للوحدة الرئيسية KDF-2 و15 كيلوواط لمعبّئ HCF80، جامعةً بين كفاءة الطاقة والأداء القوي.",
      "حتى مع كل قدراتها، تحافظ KDF-2 على حيّز معقول قدره نحو 6,500 كجم، وتمنح بنيتها المتينة متانة طويلة الأمد تحت جداول إنتاج شاقة. سواء أنشأت منشأة جديدة أو استبدلت معدات قائمة، فهي استثمار ذكي يندمج بأناقة في أنظمة الإنتاج الحديثة مع تقديم جودة فلتر ممتازة.",
    ],
    applications: ["إنتاج الفلاتر بكميات كبيرة", "تصنيع واسع النطاق"],
  },
  "molins-pm-5": {
    tagline: "ماكينة فلاتر Molins عالية الطاقة بمعدل 4,000 فلتر في الدقيقة.",
    metaDescription:
      "ماكينة فلاتر Molins PM-5 في باكستان: ماكينة عالية الطاقة بمعدل 4,000 فلتر في الدقيقة. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "Molins PM-5 ماكينة فلاتر سجائر عالية الطاقة مبنية لمتطلبات الإنتاج واسع النطاق. بطاقة 4,000 فلتر في الدقيقة، هي مثال قوي على الكفاءة والدقة في تصنيع الفلاتر، وتناسب بموثوقية المصانع المزدحمة في باكستان.",
      "تقدّم مرونة مفيدة في مقاسات الفلتر، بقطر عود فلتر من 7.5 إلى 7.8 مم وأطوال عود فلتر من 108 إلى 126 مم، لتستوعب مواصفات فلاتر مختلفة دون صعوبة.",
      "بوزن نحو 2,000 كجم، تتمتع PM-5 ببنية متينة تمنح متانة وتشغيلًا مستقرًا لفترات طويلة. من صنع Molins، الاسم المعروف في الصناعة، تجمع بين هندسة مجرّبة وإنتاج عالي السرعة، ما يجعلها أصلًا أساسيًا للمصنّعين الذين يريدون فلاتر عالية الجودة مع تعظيم الإنتاجية.",
    ],
    applications: ["إنتاج الفلاتر بكميات كبيرة", "خطوط قائمة على Molins"],
  },
  "hollow-tube-maker": {
    tagline: "ماكينة أنابيب مجوّفة عالية السرعة بمعدل 2,100 سيجارة في الدقيقة.",
    metaTitle: "ماكينة الأنابيب المجوّفة، ماكينة فلاتر سجائر",
    metaDescription:
      "ماكينة الأنابيب المجوّفة في باكستان: 2,100 في الدقيقة مع مجمّع سدادة لأنابيب فلاتر متخصصة. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "تبرز ماكينة الأنابيب المجوّفة بطاقتها الإنتاجية وتشغيلها عالي السرعة. قادرة على إنتاج 2,100 سيجارة في الدقيقة، تقدّم كفاءة قوية وإنتاجًا متجانسًا. ويؤكد نطاق سرعة عود من 140 إلى 175 مترًا في الدقيقة، مع سرعة قطع تصل إلى 2,500 عود في الدقيقة، مدى ملاءمتها للإنتاج عالي الكميات للمصانع في باكستان.",
      "بوزن 3,050 كجم تتمتع الماكينة ببنية متينة للمتانة والموثوقية طويلة الأمد. ويضيف مجمّع السدادة 1,800 كجم أخرى ويعمل بتناغم مع الماكينة لإنتاج أنابيب دقيق وفعّال. إجمالي سحب الطاقة 14 كيلوواط، موزّعة بين 6.5 كيلوواط للماكينة و7.5 كيلوواط لمجمّع السدادة، ما يوازن جيدًا بين الأداء واستهلاك الطاقة.",
      "مصمّمة للتصنيع واسع النطاق، تستخدم ماكينة الأنابيب المجوّفة تقنية حديثة لإنتاج أنابيب عالية الجودة. قدرتها عالية السرعة وهندستها المتينة تجعلانها أصلًا قيّمًا للمنتجين الذين يحتاجون تلبية طلب قوي مع الحفاظ على معايير إنتاج ممتازة.",
    ],
    applications: ["إنتاج الفلاتر بكميات كبيرة", "أنابيب فلاتر متخصصة"],
  },

  "tobacco-feeder": {
    tagline: "يغذّي ماكينات Mark 8 وMark 9 بتدفق تبغ ثابت ومتساوٍ.",
    metaTitle: "مغذّي التبغ لماكينات صناعة السجائر",
    metaDescription:
      "مغذّي التبغ في باكستان: تدفق تبغ ثابت ومتساوٍ لماكينات السجائر Mark 8 وMark 9. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "مغذّي التبغ ماكينة إدخال أساسية لمصنع السجائر. يغذّي التبغ بشكل مستمر ومتساوٍ إلى ماكينات الصناعة، مرتّبًا إياه في طبقات ليكون مُحضّرًا تمامًا كما يلزم للإنتاج.",
      "متوافق مع ماكينات Mark 8 وMark 9، فيندمج بسهولة في إعداد قائم. تتيح إعدادات الحجم القابلة للتعديل التحكم بدقة في تدفق التبغ، ما يرفع كفاءة الإنتاج، وتقلّل أتمتته المناولة اليدوية وتبسّط التشغيل وتُبقي الإنتاجية عالية.",
    ],
    applications: ["تغذية ماكينة الصناعة", "إنتاج عود متساوٍ"],
  },
  "cigarette-reclaimer": {
    tagline: "يستعيد التبغ من الهدر بمعدل 120 كجم/ساعة وكفاءة 99.8%.",
    metaTitle: "جهاز استرجاع السجائر، ماكينة استعادة التبغ",
    metaDescription:
      "جهاز استرجاع السجائر في باكستان: يستعيد التبغ من هدر الإنتاج بمعدل 120 كجم/ساعة وكفاءة 99.8%. تُورّد من Civic Tobacco Machinery.",
    intro: [
      "جهاز استرجاع السجائر ماكينة ممتازة لاستعادة التبغ من هدر تصنيع السجائر. يفصل التبغ القابل لإعادة الاستخدام عن مواد الهدر بخسائر ضئيلة جدًا، ليعود التبغ الذي كنت سترميه إلى الإنتاج.",
      "عند الطاقة القصوى يستعيد 120 كجم في الساعة ويعمل بكفاءة مبهرة قدرها 99.8%، ما يمنحك أعلى استغلال ممكن. وبمعدل استرجاع 90%، يقدّم ميزة حقيقية في تقليل الهدر ورفع كفاءة الإنتاج العامة.",
      "سهل الاستخدام والدمج في خط إنتاجك، ما يجعله إضافة عملية وموفّرة للتكاليف للمصانع في باكستان التي تريد تحقيق أقصى استفادة من كل دفعة.",
    ],
    applications: ["تقليل الهدر", "استعادة التبغ"],
  },
  "tobacco-cutters": {
    tagline: "قاطعة تبغ Hauni KT-400 بخمس سكاكين وتحكم بمقاس القطع عبر PLC.",
    metaTitle: "قاطعة التبغ Hauni KT-400",
    metaDescription:
      "قاطعة التبغ Hauni KT-400 في باكستان: قاطعة بخمس سكاكين مع مقاس قطع مضبوط عبر PLC. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "قاطعة التبغ Hauni KT-400 ماكينة دقيقة الهندسة تؤدي دورًا حاسمًا في الحفاظ على تجانس جودة القطع في معالجة التبغ. تحمل خمس سكاكين تقدّم قطعًا متساويًا وتحسّن الجودة العامة لخلطة التبغ، وتشغّل أسطوانات هوائية الفكّ لقطع سلس وفعّال بأقل توقف وصيانة.",
      "كما تعمل KT-400 بنظام دفع PLC متقدم على شريط نحاسي منحنٍ، يضبط مقاس القطع بدقة. يُبقي ذلك كل دفعة متجانسة ويتيح تكييف مقاس القطع مع متطلبات محددة، ما يضيف تنوعًا حقيقيًا. بدقتها وموثوقيتها، تُعد KT-400 أصلًا مهمًا لأي منشأة إنتاج تبغ في باكستان تسعى إلى أعلى جودة وكفاءة.",
    ],
    applications: ["المعالجة الأولية", "تحضير التبغ المقطّع"],
  },
  "tobacco-stem-flattener": {
    tagline: "يسطّح عروق التبغ لخلط متجانس وهدر أقل للأوراق.",
    metaTitle: "مسطّح عروق التبغ، ماكينة المعالجة الأولية",
    metaDescription:
      "مسطّح عروق التبغ في باكستان: يسطّح العروق لخلط متجانس وتقليل هدر الأوراق. تُورّد وتُدعم من Civic Tobacco Machinery.",
    intro: [
      "يؤدي مسطّح عروق التبغ دورًا رئيسيًا في تحسين سير معالجة التبغ. فبتسطيح عروق التبغ يُحضّرها للخلط المتجانس مع الأوراق، ما يحسّن سهولة المعالجة ويقلّل احتمال عدم التجانس في المنتج النهائي.",
      "وبتسطيح العروق بكفاءة، يقلّل أيضًا هدر الأوراق، ما يجعل العملية بأكملها أكثر اقتصادًا واستدامة. والنتيجة منتج متجانس عالي الجودة يلبّي معايير الصناعة الصارمة، ما يجعل مسطّح العروق أصلًا قيّمًا لأي عملية معالجة تبغ في باكستان.",
    ],
    applications: ["المعالجة الأولية", "تحسين الإنتاجية"],
  },
};

const productContent: Partial<Record<LocaleCode, Record<string, ProductContent>>> = {
  de,
  it,
  ru,
  ar,
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

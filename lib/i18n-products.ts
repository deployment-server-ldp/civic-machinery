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
  pl: {
    "Machine Speed": "Prędkość maszyny",
    "Filter + Tobacco Rod Length": "Długość pręta filtr + tytoń",
    "Cigarette Circumference": "Obwód papierosa",
    Type: "Typ",
    "Production Capacity": "Wydajność produkcyjna",
    "Total Weight": "Waga całkowita",
    Power: "Moc",
    "PLC Control System": "System sterowania PLC",
    "Machine Unit": "Jednostka maszyny",
    Weight: "Waga",
    Speed: "Prędkość",
    "Cigarette Sizes": "Formaty papierosów",
    "Air Pressure": "Ciśnienie powietrza",
    "Weight Control": "Kontrola wagi",
    "Servo System": "System serwo",
    "Power Requirement": "Zapotrzebowanie na moc",
    "Packet Set-up Available": "Dostępne formaty paczek",
    Model: "Model",
    "Machine Model": "Model maszyny",
    Function: "Funkcja",
    "Filter Attachment": "Mocowanie filtra",
    "Electrical System": "Układ elektryczny",
    "Default Setup Size": "Domyślny format",
    "Cigarette Maker": "Maszyna do produkcji papierosów",
    "Wrapping Method": "Metoda owijania",
    "Total Power": "Moc całkowita",
    "Pack Quality": "Jakość paczki",
    "Filter Length": "Długość filtra",
    "Filter Circumference": "Obwód filtra",
    Capacity: "Wydajność",
    Voltage: "Napięcie",
    Version: "Wersja",
    Utilisation: "Wykorzystanie",
    Separation: "Rozdzielenie",
    "Rod Speed Range": "Zakres prędkości pręta",
    "Recovery Rate": "Współczynnik odzysku",
    Preparation: "Przygotowanie",
    "Plug Assembler Weight": "Waga zespołu formującego",
    Outcome: "Rezultat",
    Operation: "Działanie",
    "Number of Knives": "Liczba noży",
    "Maximum Capacity": "Maksymalna wydajność",
    Manufacturer: "Producent",
    "Maker Weight": "Waga maszyny produkcyjnej",
    Integration: "Integracja",
    "Filter Rod Length": "Długość pręta filtra",
    "Filter Rod Diameter": "Średnica pręta filtra",
    Efficiency: "Wydajność",
    Drive: "Napęd",
    Cylinders: "Cylindry",
    "Cut-off Speed": "Prędkość cięcia",
    Control: "Sterowanie",
    Consistency: "Jednorodność",
    Condition: "Stan",
    "Circumference Control": "Kontrola obwodu",
    Brand: "Marka",
    Benefit: "Korzyść",
    Automation: "Automatyzacja",
  },
  bg: {
    "Machine Speed": "Скорост на машината",
    "Filter + Tobacco Rod Length": "Дължина на пръчката филтър + тютюн",
    "Cigarette Circumference": "Обиколка на цигарата",
    Type: "Тип",
    "Production Capacity": "Производствен капацитет",
    "Total Weight": "Общо тегло",
    Power: "Мощност",
    "PLC Control System": "Система за управление PLC",
    "Machine Unit": "Модул на машината",
    Weight: "Тегло",
    Speed: "Скорост",
    "Cigarette Sizes": "Размери на цигарите",
    "Air Pressure": "Въздушно налягане",
    "Weight Control": "Контрол на теглото",
    "Servo System": "Серво система",
    "Power Requirement": "Изисквана мощност",
    "Packet Set-up Available": "Налични формати на пакета",
    Model: "Модел",
    "Machine Model": "Модел на машината",
    Function: "Функция",
    "Filter Attachment": "Прикачване на филтъра",
    "Electrical System": "Електрическа система",
    "Default Setup Size": "Стандартен формат",
    "Cigarette Maker": "Машина за производство на цигари",
    "Wrapping Method": "Метод на увиване",
    "Total Power": "Обща мощност",
    "Pack Quality": "Качество на пакета",
    "Filter Length": "Дължина на филтъра",
    "Filter Circumference": "Обиколка на филтъра",
    Capacity: "Капацитет",
    Voltage: "Напрежение",
    Version: "Версия",
    Utilisation: "Използване",
    Separation: "Разделяне",
    "Rod Speed Range": "Диапазон на скоростта на пръчката",
    "Recovery Rate": "Коефициент на възстановяване",
    Preparation: "Подготовка",
    "Plug Assembler Weight": "Тегло на възела за формоване",
    Outcome: "Резултат",
    Operation: "Работа",
    "Number of Knives": "Брой ножове",
    "Maximum Capacity": "Максимален капацитет",
    Manufacturer: "Производител",
    "Maker Weight": "Тегло на производствената машина",
    Integration: "Интеграция",
    "Filter Rod Length": "Дължина на филтърната пръчка",
    "Filter Rod Diameter": "Диаметър на филтърната пръчка",
    Efficiency: "Ефективност",
    Drive: "Задвижване",
    Cylinders: "Цилиндри",
    "Cut-off Speed": "Скорост на рязане",
    Control: "Управление",
    Consistency: "Еднородност",
    Condition: "Състояние",
    "Circumference Control": "Контрол на обиколката",
    Brand: "Марка",
    Benefit: "Предимство",
    Automation: "Автоматизация",
  },
  vi: {
    "Machine Speed": "Tốc độ máy",
    "Filter + Tobacco Rod Length": "Chiều dài đoạn đầu lọc + thuốc sợi",
    "Cigarette Circumference": "Chu vi điếu thuốc",
    Type: "Loại",
    "Production Capacity": "Công suất sản xuất",
    "Total Weight": "Tổng trọng lượng",
    Power: "Công suất điện",
    "PLC Control System": "Hệ thống điều khiển PLC",
    "Machine Unit": "Cụm máy",
    Weight: "Trọng lượng",
    Speed: "Tốc độ",
    "Cigarette Sizes": "Kích cỡ điếu thuốc",
    "Air Pressure": "Áp suất khí",
    "Weight Control": "Kiểm soát trọng lượng",
    "Servo System": "Hệ thống servo",
    "Power Requirement": "Yêu cầu công suất",
    "Packet Set-up Available": "Định dạng bao có sẵn",
    Model: "Mẫu máy",
    "Machine Model": "Model máy",
    Function: "Chức năng",
    "Filter Attachment": "Bộ gắn đầu lọc",
    "Electrical System": "Hệ thống điện",
    "Default Setup Size": "Kích cỡ thiết lập mặc định",
    "Cigarette Maker": "Máy sản xuất thuốc lá",
    "Wrapping Method": "Phương pháp bọc",
    "Total Power": "Tổng công suất",
    "Pack Quality": "Chất lượng bao gói",
    "Filter Length": "Chiều dài đầu lọc",
    "Filter Circumference": "Chu vi đầu lọc",
    Capacity: "Công suất",
    Voltage: "Điện áp",
    Version: "Phiên bản",
    Utilisation: "Mức sử dụng",
    Separation: "Tách lọc",
    "Rod Speed Range": "Dải tốc độ điếu",
    "Recovery Rate": "Tỷ lệ thu hồi",
    Preparation: "Chuẩn bị",
    "Plug Assembler Weight": "Trọng lượng bộ lắp ráp đầu lọc",
    Outcome: "Kết quả",
    Operation: "Vận hành",
    "Number of Knives": "Số lượng dao",
    "Maximum Capacity": "Công suất tối đa",
    Manufacturer: "Nhà sản xuất",
    "Maker Weight": "Trọng lượng máy sản xuất",
    Integration: "Tích hợp",
    "Filter Rod Length": "Chiều dài đoạn đầu lọc",
    "Filter Rod Diameter": "Đường kính đoạn đầu lọc",
    Efficiency: "Hiệu suất",
    Drive: "Truyền động",
    Cylinders: "Xi-lanh",
    "Cut-off Speed": "Tốc độ cắt",
    Control: "Điều khiển",
    Consistency: "Độ đồng đều",
    Condition: "Tình trạng",
    "Circumference Control": "Kiểm soát chu vi",
    Brand: "Thương hiệu",
    Benefit: "Lợi ích",
    Automation: "Tự động hóa",
  },
  id: {
    "Machine Speed": "Kecepatan Mesin",
    "Filter + Tobacco Rod Length": "Panjang Batang Filter + Tembakau",
    "Cigarette Circumference": "Lingkar Rokok",
    Type: "Tipe",
    "Production Capacity": "Kapasitas Produksi",
    "Total Weight": "Berat Total",
    Power: "Daya",
    "PLC Control System": "Sistem Kontrol PLC",
    "Machine Unit": "Unit Mesin",
    Weight: "Berat",
    Speed: "Kecepatan",
    "Cigarette Sizes": "Ukuran Rokok",
    "Air Pressure": "Tekanan Udara",
    "Weight Control": "Kontrol Berat",
    "Servo System": "Sistem Servo",
    "Power Requirement": "Kebutuhan Daya",
    "Packet Set-up Available": "Format Kemasan Tersedia",
    Model: "Model",
    "Machine Model": "Model Mesin",
    Function: "Fungsi",
    "Filter Attachment": "Pemasangan Filter",
    "Electrical System": "Sistem Kelistrikan",
    "Default Setup Size": "Ukuran Setelan Standar",
    "Cigarette Maker": "Mesin Pembuat Rokok",
    "Wrapping Method": "Metode Pembungkusan",
    "Total Power": "Daya Total",
    "Pack Quality": "Kualitas Kemasan",
    "Filter Length": "Panjang Filter",
    "Filter Circumference": "Lingkar Filter",
    Capacity: "Kapasitas",
    Voltage: "Tegangan",
    Version: "Versi",
    Utilisation: "Pemanfaatan",
    Separation: "Pemisahan",
    "Rod Speed Range": "Rentang Kecepatan Batang",
    "Recovery Rate": "Tingkat Pemulihan",
    Preparation: "Persiapan",
    "Plug Assembler Weight": "Berat Unit Perakit Filter",
    Outcome: "Hasil",
    Operation: "Operasi",
    "Number of Knives": "Jumlah Pisau",
    "Maximum Capacity": "Kapasitas Maksimum",
    Manufacturer: "Produsen",
    "Maker Weight": "Berat Mesin Pembuat",
    Integration: "Integrasi",
    "Filter Rod Length": "Panjang Batang Filter",
    "Filter Rod Diameter": "Diameter Batang Filter",
    Efficiency: "Efisiensi",
    Drive: "Penggerak",
    Cylinders: "Silinder",
    "Cut-off Speed": "Kecepatan Potong",
    Control: "Kontrol",
    Consistency: "Konsistensi",
    Condition: "Kondisi",
    "Circumference Control": "Kontrol Lingkar",
    Brand: "Merek",
    Benefit: "Manfaat",
    Automation: "Otomatisasi",
  },
  tr: {
    "Machine Speed": "Makine Hızı",
    "Filter + Tobacco Rod Length": "Filtre + Tütün Çubuğu Uzunluğu",
    "Cigarette Circumference": "Sigara Çevresi",
    Type: "Tip",
    "Production Capacity": "Üretim Kapasitesi",
    "Total Weight": "Toplam Ağırlık",
    Power: "Güç",
    "PLC Control System": "PLC Kontrol Sistemi",
    "Machine Unit": "Makine Ünitesi",
    Weight: "Ağırlık",
    Speed: "Hız",
    "Cigarette Sizes": "Sigara Boyutları",
    "Air Pressure": "Hava Basıncı",
    "Weight Control": "Ağırlık Kontrolü",
    "Servo System": "Servo Sistemi",
    "Power Requirement": "Güç İhtiyacı",
    "Packet Set-up Available": "Mevcut Paket Formatları",
    Model: "Model",
    "Machine Model": "Makine Modeli",
    Function: "İşlev",
    "Filter Attachment": "Filtre Bağlantısı",
    "Electrical System": "Elektrik Sistemi",
    "Default Setup Size": "Varsayılan Format Boyutu",
    "Cigarette Maker": "Sigara Üretim Makinesi",
    "Wrapping Method": "Sargı Yöntemi",
    "Total Power": "Toplam Güç",
    "Pack Quality": "Paket Kalitesi",
    "Filter Length": "Filtre Uzunluğu",
    "Filter Circumference": "Filtre Çevresi",
    Capacity: "Kapasite",
    Voltage: "Voltaj",
    Version: "Versiyon",
    Utilisation: "Kullanım",
    Separation: "Ayırma",
    "Rod Speed Range": "Çubuk Hız Aralığı",
    "Recovery Rate": "Geri Kazanım Oranı",
    Preparation: "Hazırlık",
    "Plug Assembler Weight": "Filtre Montaj Ünitesi Ağırlığı",
    Outcome: "Sonuç",
    Operation: "İşletim",
    "Number of Knives": "Bıçak Sayısı",
    "Maximum Capacity": "Maksimum Kapasite",
    Manufacturer: "Üretici",
    "Maker Weight": "Üretim Makinesi Ağırlığı",
    Integration: "Entegrasyon",
    "Filter Rod Length": "Filtre Çubuğu Uzunluğu",
    "Filter Rod Diameter": "Filtre Çubuğu Çapı",
    Efficiency: "Verimlilik",
    Drive: "Tahrik",
    Cylinders: "Silindirler",
    "Cut-off Speed": "Kesme Hızı",
    Control: "Kontrol",
    Consistency: "Tutarlılık",
    Condition: "Durum",
    "Circumference Control": "Çevre Kontrolü",
    Brand: "Marka",
    Benefit: "Fayda",
    Automation: "Otomasyon",
  },
  zh: {
    "Machine Speed": "机器速度",
    "Filter + Tobacco Rod Length": "滤棒＋烟支组合长度",
    "Cigarette Circumference": "卷烟周长",
    Type: "类型",
    "Production Capacity": "生产能力",
    "Total Weight": "总重量",
    Power: "功率",
    "PLC Control System": "PLC 控制系统",
    "Machine Unit": "机组单元",
    Weight: "重量",
    Speed: "速度",
    "Cigarette Sizes": "卷烟规格",
    "Air Pressure": "气压",
    "Weight Control": "重量控制",
    "Servo System": "伺服系统",
    "Power Requirement": "功率需求",
    "Packet Set-up Available": "可用包装格式",
    Model: "型号",
    "Machine Model": "机器型号",
    Function: "功能",
    "Filter Attachment": "滤嘴装配",
    "Electrical System": "电气系统",
    "Default Setup Size": "默认设置规格",
    "Cigarette Maker": "卷烟制造机",
    "Wrapping Method": "封装方式",
    "Total Power": "总功率",
    "Pack Quality": "包装质量",
    "Filter Length": "滤嘴长度",
    "Filter Circumference": "滤嘴周长",
    Capacity: "产能",
    Voltage: "电压",
    Version: "版本",
    Utilisation: "利用率",
    Separation: "分离",
    "Rod Speed Range": "烟支速度范围",
    "Recovery Rate": "回收率",
    Preparation: "预处理",
    "Plug Assembler Weight": "滤嘴组装机重量",
    Outcome: "成果",
    Operation: "运行",
    "Number of Knives": "刀片数量",
    "Maximum Capacity": "最大产能",
    Manufacturer: "制造商",
    "Maker Weight": "制造机重量",
    Integration: "集成",
    "Filter Rod Length": "滤棒长度",
    "Filter Rod Diameter": "滤棒直径",
    Efficiency: "效率",
    Drive: "驱动",
    Cylinders: "气缸",
    "Cut-off Speed": "切割速度",
    Control: "控制",
    Consistency: "一致性",
    Condition: "状况",
    "Circumference Control": "周长控制",
    Brand: "品牌",
    Benefit: "优势",
    Automation: "自动化",
  },
  fa: {
    "Machine Speed": "سرعت ماشین",
    "Filter + Tobacco Rod Length": "طول ساقه فیلتر + تنباکو",
    "Cigarette Circumference": "محیط سیگار",
    Type: "نوع",
    "Production Capacity": "ظرفیت تولید",
    "Total Weight": "وزن کل",
    Power: "توان",
    "PLC Control System": "سیستم کنترل PLC",
    "Machine Unit": "واحد ماشین",
    Weight: "وزن",
    Speed: "سرعت",
    "Cigarette Sizes": "اندازه‌های سیگار",
    "Air Pressure": "فشار هوا",
    "Weight Control": "کنترل وزن",
    "Servo System": "سیستم سروو",
    "Power Requirement": "نیاز توان",
    "Packet Set-up Available": "فرمت‌های پاکت موجود",
    Model: "مدل",
    "Machine Model": "مدل ماشین",
    Function: "عملکرد",
    "Filter Attachment": "اتصال فیلتر",
    "Electrical System": "سیستم برقی",
    "Default Setup Size": "اندازه پیش‌فرض تنظیم",
    "Cigarette Maker": "ماشین تولید سیگار",
    "Wrapping Method": "روش پوشش",
    "Total Power": "توان کل",
    "Pack Quality": "کیفیت پاکت",
    "Filter Length": "طول فیلتر",
    "Filter Circumference": "محیط فیلتر",
    Capacity: "ظرفیت",
    Voltage: "ولتاژ",
    Version: "نسخه",
    Utilisation: "بهره‌برداری",
    Separation: "جداسازی",
    "Rod Speed Range": "محدوده سرعت ساقه",
    "Recovery Rate": "نرخ بازیافت",
    Preparation: "آماده‌سازی",
    "Plug Assembler Weight": "وزن مونتاژگر فیلتر",
    Outcome: "نتیجه",
    Operation: "عملیات",
    "Number of Knives": "تعداد تیغه‌ها",
    "Maximum Capacity": "حداکثر ظرفیت",
    Manufacturer: "سازنده",
    "Maker Weight": "وزن ماشین تولید",
    Integration: "یکپارچگی",
    "Filter Rod Length": "طول ساقه فیلتر",
    "Filter Rod Diameter": "قطر ساقه فیلتر",
    Efficiency: "بازدهی",
    Drive: "محرک",
    Cylinders: "سیلندرها",
    "Cut-off Speed": "سرعت برش",
    Control: "کنترل",
    Consistency: "یکنواختی",
    Condition: "وضعیت",
    "Circumference Control": "کنترل محیط",
    Brand: "برند",
    Benefit: "مزیت",
    Automation: "اتوماسیون",
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

/* ----------------------- English (South Africa) ----------------------- */

const za: Record<string, ProductContent> = {
  "hlp-180": {
    tagline: "High-speed hard pack line running 180 packs per minute.",
    h1: "HLP-180 Cigarette Packing Machine",
    metaTitle: "HLP-180 Cigarette Packing Machine, 180 Packs/Min",
    metaDescription: "HLP-180 cigarette packing machine in Pakistan, 180 packs per minute across King to Nano formats with PLC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The HLP-180 is a powerful, next-generation machine built for high-speed cigarette packing. Known for consistent performance and reliable output, the HLP-180 packer suits manufacturers who want to streamline their packing process without giving up quality or precision.",
      "At an output of 180 packs a minute, it runs efficient, steady packing cycles with its single plunger mechanism, holding perfect alignment, wrapping and sealing on every pack. That lets factories in Pakistan meet high-volume demand while keeping the finish clean and repeatable.",
      "It is designed to handle a wide range of cigarette sizes, including King Size, Demi, Slims, Super Slims and Nano. That versatility means you can serve different consumer preferences across local and export markets, from traditional formats through to niche products, all on the same machine.",
      "A PLC control system keeps operation accurate and fully automated, so every pack comes out uniform, well wrapped and retail-ready. The user-friendly interface gives operators full control over speed, error detection and production monitoring, which cuts downtime and lifts overall efficiency.",
      "What really sets the HLP-180 apart is its flexibility in pack shapes. It supports round corner, bevel edge, D-type and square pack formats, so brands can differentiate their packaging, stand out on the shelf and keep up with changing market trends. Built for non-stop, large-scale production, it is a strong choice whether you are expanding a line or upgrading older equipment.",
    ],
    applications: [
      "High-volume hard pack production",
      "Local and export markets",
    ],
  },
  "hlp-200": {
    tagline: "Double plunger hard pack line running 200 packs per minute.",
    h1: "HLP-200 Cigarette Packing Machine",
    metaTitle: "HLP-200 Cigarette Packing Machine, 200 Packs/Min",
    metaDescription: "HLP-200 cigarette packing machine in Pakistan, 200 packs per minute double plunger line across King to Nano formats. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The HLP-200 is a double plunger hopper packing machine built for small to medium and high-volume production. It is a popular choice with manufacturers in Pakistan because it makes careful use of material and helps keep running costs down while still holding a fast, steady pace.",
      "Running at 200 packs a minute with a maximum throughput of around 12,000 cigarettes, it sits at the core of the packing line as the first critical unit, forming and finishing the pack before it moves on to wrapping and boxing. It supports all common cigarette pack formats, so it slots into most production setups with ease.",
      "The machine handles a wide range of cigarette sizes, including King Size, Demi, Slims, Super Slims and Nano, and its double plunger system keeps the packing cycle efficient and the finish consistent. A PLC control system keeps operation accurate and fully automated, giving operators clear control over speed, error detection and monitoring.",
      "For pack presentation it offers round corner, bevel edge, D-type and square formats, so brands can shape their packaging to stand out on the shelf. Running on a 220V/380V supply and built for dependable, continuous output, the HLP-200 is a solid core unit for any integrated packing line.",
    ],
    applications: [
      "High-volume hard pack production",
      "Core of an integrated packing line",
    ],
  },
  "hlp-225": {
    tagline: "High-speed double plunger hard pack line at 225 packs per minute.",
    h1: "HLP-225 Cigarette Packing Machine",
    metaTitle: "HLP-225 Cigarette Packing Machine, 225 Packs/Min",
    metaDescription: "HLP-225 cigarette packing machine in Pakistan, high-speed 225 packs per minute double plunger line with PLC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The HLP-225 packing line is a real step forward in cigarette packing. Running at 225 packs a minute, this double plunger machine delivers high efficiency and throughput for factories that need to pack at scale.",
      "It is engineered to handle a wide range of cigarette sizes, including King, Demi, Slims, Super Slims and Nano, so manufacturers in Pakistan get the flexibility to meet different market demands on a single machine.",
      "A modern PLC control system improves accuracy and automates the packing process, cutting manual intervention and reducing errors. The HLP-225 also supports multiple pack formats, including round corner, bevel edge, D-type and square, which lets brands tailor their packaging to different consumer preferences and requirements.",
      "Built for large-scale production, the HLP-225 pairs advanced features with a robust build for reliable, consistent performance. Its ability to pack at high speed without giving up quality makes it a valuable asset for any operation looking to scale up output and stay competitive.",
    ],
    applications: [
      "High-volume hard pack production",
      "Large-scale packing lines",
    ],
  },
  "sasib-5000": {
    tagline: "SASIB soft packer for 100mm packs with squared corners.",
    h1: "SASIB 5000 Soft Pack Machine",
    metaTitle: "SASIB 5000 Soft Pack Cigarette Machine",
    metaDescription: "SASIB 5000 soft pack cigarette machine in Pakistan, 100mm soft packs with alufoil and label wrapping. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The SASIB 5000 is a versatile machine built for producing soft packs of 100mm cigarettes. Using alufoil and label wrapping performed around an arbour, it delivers perfect, consistent packs with neatly squared corners.",
      "That wrapping method does more than look good, it protects the cigarettes and keeps each pack intact, while also lifting the visual appeal of the finished product. For manufacturers in Pakistan who want a premium soft pack finish, it is a reliable, high-quality choice.",
      "Well proven and straightforward to run, the SASIB 5000 is supplied checked and set up ready for the floor, so you can add dependable soft pack capacity with confidence.",
    ],
    applications: [
      "Soft pack production",
      "100mm formats",
    ],
  },
  "sasib-3000": {
    tagline: "SASIB soft packer for 84mm and 100mm packs with squared corners.",
    h1: "SASIB 3000 Soft Pack Machine",
    metaTitle: "SASIB 3000 Soft Pack Cigarette Machine",
    metaDescription: "SASIB 3000 soft pack cigarette machine in Pakistan, handles 84mm and 100mm packs with alufoil and label wrapping. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The SASIB 3000 adds extra versatility to the SASIB soft pack line with its ability to handle both 84mm and 100mm cigarette packs. Using alufoil and label wrapping performed around an arbor, it keeps the hallmark SASIB finish, perfect, consistent packs with neatly squared corners.",
      "That dual-size capability makes the SASIB 3000 a valuable asset for manufacturers in Pakistan who need flexibility in their production while keeping every pack to a high standard of presentation and protection.",
      "Its control systems make adjustments and maintenance straightforward, which helps reduce downtime and keep overall productivity high. Supplied checked and set up ready to run, it is a dependable soft pack line for factories that want both quality and format flexibility.",
    ],
    applications: [
      "Soft pack production",
      "84mm and 100mm formats",
    ],
  },
  "regular-wrapper-cp1": {
    tagline: "High-speed cigarette pack overwrapper running up to 250 packs per minute.",
    h1: "Regular Wrapper CP1",
    metaTitle: "CP-1 Cigarette Pack Wrapping Machine, 250 PPM",
    metaDescription: "CP-1 cigarette pack wrapping machine in Pakistan, up to 250 packs per minute overwrapper. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The CP-1 is a high-performance cigarette pack wrapping machine built to handle serious production demands with ease. At a wrapping speed of up to 250 packs a minute, it lifts the efficiency and throughput of the packing line for factories in Pakistan.",
      "It runs on a modest power requirement of 6 KVA and an air pressure need of 0.05 m³/min, so it delivers strong performance while staying energy efficient. The CP-1 is engineered for precise, consistent wrapping that reduces material waste and keeps every pack to a tight quality standard.",
      "Its robust construction and reliable operation make it a dependable asset for high-volume lines, keeping the process smooth and the output clean. It also integrates neatly into existing lines, which makes it a practical, valuable addition for any facility looking to lift productivity without losing quality.",
    ],
    applications: [
      "Pack overwrapping",
      "High-volume packing lines",
    ],
  },
  "naked-over-wrapper": {
    tagline: "Outer pack overwrapper at 25 outer packs per minute.",
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, Cigarette Outer Pack Wrapper",
    metaDescription: "Naked Over Wrapper in Pakistan, cigarette outer pack overwrapper at 25 outer packs per minute. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Naked Over Wrapper is a well-engineered machine for wrapping cigarette outer packs with precision and speed. It wraps 25 outer packs a minute, which keeps a high level of efficiency on the line for factories in Pakistan.",
      "It runs on an energy need of 6 KVA and an air pressure of 0.05 m³/min, giving dependable working performance without heavy power draw. Robust and efficient, it is a sound addition to a cigarette production line, lifting packaging quality at the final stage.",
    ],
    applications: [
      "Outer pack overwrapping",
      "End-of-line sealing",
    ],
  },
  "molins-boxer": {
    tagline: "Cigarette box packing machine running up to 20 boxes per minute.",
    h1: "Molins Boxer, Box Packing Machine",
    metaTitle: "Molins Boxer, Cigarette Box Packing Machine",
    metaDescription: "Molins Boxer box packing machine in Pakistan, up to 20 boxes per minute for cigarette cartons. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins Boxer is a dependable cigarette box packing machine known for efficient running and solid throughput. At a packing speed of up to 20 boxes a minute, it lifts the productivity of cigarette packaging lines in Pakistan.",
      "It works on an air pressure of 0.05 m³/min, balancing energy use with steady operation. Engineered for reliability, the Molins Boxer keeps packing consistent and precise, which reduces downtime and holds product quality high.",
      "That makes it a critical part of any production setup focused on efficiency and steady output, taking wrapped packs and forming them into tidy cartons at the end of the line.",
    ],
    applications: [
      "Carton / box packing",
      "End-of-line collation",
    ],
  },
  "sasib-boxer": {
    tagline: "Cigarette box packing machine running up to 25 boxes per minute.",
    h1: "SASIB Boxer, Box Packing Machine",
    metaTitle: "SASIB Boxer, Cigarette Box Packing Machine",
    metaDescription: "SASIB Boxer box packing machine in Pakistan, up to 25 boxes per minute for cigarette cartons. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The SASIB Boxer is an advanced cigarette box packing machine known for its speed and efficiency. Capable of packing up to 25 boxes a minute, it gives a real boost to the throughput of a cigarette manufacturing line in Pakistan.",
      "It runs on a power requirement of 6 KVA, combining power with performance, and an air pressure need of 0.1 m³/min, keeping a balance between energy use and operational efficiency.",
      "Designed for highly accurate, consistent packing, the SASIB Boxer minimises downtime and streamlines the process, which makes it a valuable asset for high-volume environments where speed and precision matter for productivity and product quality.",
    ],
    applications: [
      "Carton / box packing",
      "High-volume packing lines",
    ],
  },
  "mark-8-post-64": {
    tagline: "The dependable workhorse maker that factories still rely on.",
    h1: "Mark 8 Post 64 – Cigarette Manufacturing Machine in South Africa",
    metaTitle: "MK 8 | Mark 8 Post 64 Cigarette Manufacturing Machine",
    metaDescription: "Molins Mark 8 Post 64 cigarette making machine in Pakistan, reliable rod maker for steady production. Reconditioned and supported by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark 8 Post 64 is a proven, high-output cigarette maker built for both quality and flexibility. It runs at a steady 1,800 to 2,000 cigarettes per minute and carries a double colour printer, so you can print the paper exactly the way your brand needs without slowing the line down.",
      "It handles a wide spread of formats, cigarette circumferences from 17mm up to 28.3mm and combined filter-and-tobacco rod lengths from 65mm to 110mm, which covers everything from standard 84mm and 100mm right through to slims, super slims and nano. A Max Multiroll filter attachment keeps the filters going on cleanly at full speed.",
      "At around 3,500kg it is a heavy, solid machine made to hold its pace through long production runs. That combination of speed, format flexibility and reliability makes the Mark 8 Post 64 a smart pick for factories that want strong output from a single maker.",
    ],
    features: [
      "Proven, long-life Molins design",
      "Even rod and clean cut",
      "Parts and know-how widely available",
      "Easy for technicians to maintain",
      "Great value as a reconditioned unit",
    ],
    applications: [
      "Entry maker line",
      "Reliable backup maker",
    ],
  },
  "mark-8d-max-15": {
    tagline: "High-speed Mark 8D maker with the MAX-15 control system.",
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D with MAX-15 Cigarette Maker",
    metaDescription: "Molins Mark 8D with MAX-15 cigarette making machine in Pakistan, 3,000 per minute across King to Nano formats. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark 8D with MAX-15 is a strong, flexible cigarette making machine built for the demands of a modern tobacco factory. It belongs to the well-known Mark 8 maker family and gives Pakistani manufacturers a dependable way to grow output without giving up on quality.",
      "It runs at up to 3,000 cigarettes a minute, so it holds its pace comfortably on a busy production line. Just as important, it handles a wide spread of formats. Whether you make King size, Demi, Slims, Super Slims or Nano, the same machine can produce them all, which makes it a practical choice for a factory serving several segments at once.",
      "The maker accepts cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you keep full control over sizing and stay consistent from one run to the next.",
      "The setup pairs the MK-8D cigarette maker with the MAX-15 and its 1117 infeed unit. Together they carry the process cleanly from tobacco feeding through to the finished rod, keeping the line steady, cutting down on stoppages and holding quality across the shift. At a total draw of 17KW it balances real production speed with sensible running costs.",
      "For all that it does, the machine stays compact. At around 5,000kg it is solid and hard-wearing, yet it drops into an existing floor without major rebuilding, and its build stands up to long, continuous production. Day to day it turns out even cigarettes with little waste and modest maintenance, which is exactly what a factory needs when it is trying to run lean and still meet demand across different formats.",
      "In short, the Mark 8D with MAX-15 earns its place through proven reliability, flexible format support from slims to nano, high-speed output that stays accurate, energy-efficient running and easy fitment into an automated line. Whether you are replacing older equipment or adding capacity, it is a future-ready maker that puts classic engineering to work for modern production.",
    ],
    applications: [
      "High-volume production",
      "Multi-format factories",
    ],
  },
  "mark-9-5-lenze-servo-drives": {
    tagline: "High-speed Mark 9.5 maker line with Lenze servo drives.",
    h1: "Molins Mark 9.5 with Lenze Servo Drives",
    metaDescription: "Molins Mark 9.5 with Lenze servo drives in Pakistan, up to 3,500 per minute with Siemens PLC and microwave weight control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark 9.5 with Lenze servo drives is built for manufacturers who want serious output without losing flexibility. It produces up to 3,500 cigarettes a minute on regular diameters and 3,200 a minute on slim and super slim formats, so one line can cover a broad product range at real production speed.",
      "It works across cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, which gives you the room to switch formats and still hold a consistent rod from run to run.",
      "The line brings together three units, the MK-9.5 cigarette maker, the MAX-S filter assembler and the HCF80 automatic tray filler, drawing 35KW, 20KW and 15KW in turn. Together they take the process from making through to filled trays with very little manual handling in between.",
      "Control and accuracy sit at the centre of this machine. A Siemens PLC runs the sequence smoothly, a microwave system keeps tight control over rod weight, and the Lenze servo drives deliver the precise, steady motion that keeps quality high even at full speed.",
      "At a total weight of around 8,600kg it is a heavy, solid line made for large-scale manufacturing. For a factory that needs dependable high-volume output with modern controls and easy servicing, the Mark 9.5 with Lenze servo drives is a strong, future-ready choice.",
    ],
    applications: [
      "High-volume production",
      "Multi-format factories",
    ],
  },
  "mark-9-5-max-s-tray-filler": {
    tagline: "High-speed Mark-9.5 maker with Max S and mass flow tray filler.",
    h1: "Molins Mark-9.5 with Max S & Tray Filler",
    metaTitle: "Molins Mark-9.5 with Max S & Tray Filler",
    metaDescription: "Molins Mark-9.5 with Max S and tray filler in Pakistan, 4,500 to 5,000 cigarettes per minute. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark-9.5 with Max S and tray filler is a premium choice for manufacturers that need high-speed output, tidy filter integration and dependable production capability in one line. Engineered for volume, it runs a remarkable 4,500 to 5,000 cigarettes a minute, which puts it among the most efficient systems available for large-scale factories in Pakistan.",
      "At the centre of the setup is the MK-9.5 cigarette maker, an evolution of the proven Mark 9 series that holds strong output while keeping precision and consistency high. It supports cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you can move between King size, Slims, Demi and other formats without losing rod quality.",
      "The maker is paired with the Max-S filter assembler, which attaches the filter to the tobacco rod accurately and repeatably. Working through a mass flow tray filler, it lifts throughput while keeping material waste and misalignment low, so filter integrity stays consistent across every production cycle.",
      "A default setup size of 84mm keeps the machine in step with globally accepted cigarette dimensions, which makes it a practical fit for both local supply and export production. Whether you run your own brand or fulfil large contracts, it moves smoothly between batches and adapts easily to changing orders.",
      "At roughly 7,800kg it is a heavy, stable line built for continuous operation and long service life. For a factory looking to scale up while protecting quality and keeping downtime low, the Mark-9.5 with Max S and tray filler brings together the speed, flexibility and reliability the floor needs, from proven making and precise filter attachment to a streamlined mass flow feed and a durable, heavy-duty frame.",
    ],
    applications: [
      "High-volume production",
      "Export-ready manufacturing",
    ],
  },
  "mark-9-max-s": {
    tagline: "High-speed MK-9 maker with Max S and mass flow tray filler.",
    h1: "Molins MK-9 with Max S",
    metaTitle: "Molins MK-9 with Max S",
    metaDescription: "Molins MK-9 with Max S in Pakistan, 4,500 to 5,000 cigarettes per minute with mass flow tray filler. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins MK-9 with Max S is another high-efficiency cigarette maker built for serious production, running between 4,500 and 5,000 cigarettes a minute. It is a dependable choice for factories in Pakistan that want strong, steady output from a single line.",
      "The MK-9 cigarette maker at its core keeps production precise and consistent shift after shift. It works across cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you get real flexibility to move between formats without losing rod quality.",
      "It is fitted with the Max-S filter assembler and a mass flow tray filler, which make the filter attachment step faster and more reliable while keeping waste and misalignment low. A default setup size of 84mm keeps it in line with widely accepted cigarette dimensions, so it slots into most production plans with ease.",
      "At around 7,800kg the MK-9 is a heavy, stable machine made for continuous running and long service life. For a factory scaling up large-scale production while protecting quality, it is a solid, reliable addition to the floor.",
    ],
    applications: [
      "High-volume production",
      "Main maker line",
    ],
  },
  "protos-70": {
    tagline: "High-speed Protos 70 maker line up to 7,000 cigarettes a minute.",
    h1: "Protos 70",
    metaTitle: "Hauni Protos 70 Cigarette Making Machine",
    metaDescription: "Hauni Protos 70 cigarette making machine in Pakistan, up to 7,000 per minute with Siemens or Beckhoff IPC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Hauni Protos 70 is an advanced cigarette making machine built to meet the highest standards of production efficiency and precision. It runs an impressive 7,000 cigarettes a minute on regular diameters and 6,000 a minute on slim and super slim formats, which gives factories in Pakistan real speed and flexibility from a single line.",
      "It handles cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you can move across formats and still hold a consistent rod from run to run.",
      "A Siemens IPC or Beckhoff IPC control system keeps the sequence automated, smooth and reliable, while a microwave weight control system holds every cigarette to a precise weight for steady product consistency. The line brings together the S7000 cigarette rod maker, the M8000 filter tip attachment and the F80 automatic tray filler, each handling its own stage of the process cleanly.",
      "With power of 50KW for the S7000, 20KW for the M8000 and 15KW for the F80, the Protos 70 is a powerful, capable line. At a total weight of around 10,800kg it is heavy and stable, built for continuous running and long service life, which makes it an ideal choice for large-scale cigarette production.",
    ],
    applications: [
      "High-volume production",
      "Large-scale manufacturing",
    ],
  },
  "protos-80-er": {
    tagline: "High-speed Protos 80 ER maker line up to 8,000 cigarettes a minute.",
    h1: "Protos 80 ER",
    metaTitle: "Hauni Protos 80 ER Cigarette Making Machine",
    metaDescription: "Hauni Protos 80 ER cigarette making machine in Pakistan, up to 8,000 per minute with Siemens or Beckhoff IPC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Protos 80 ER is a high-performance cigarette making machine engineered for manufacturers who want maximum efficiency, precision and output. Built by Hauni, the Protos 80 series is known for its reliability and advanced automation, and whether you produce regular or slim cigarettes it delivers strong consistency and productivity, which makes it a trusted choice for high-volume lines in Pakistan.",
      "Capacity is where this machine really stands out. It produces up to 8,000 cigarettes a minute on regular diameters and 7,000 a minute on slim and super slim formats. It accepts cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so it stays flexible across cigarette types and market demands. From king size to slim to niche formats, the Protos 80 ER adapts to how you produce.",
      "For precision and uptime it runs a high-level PLC control system on either a Siemens IPC or a Beckhoff IPC, keeping the whole cycle smooth and automated. Real-time monitoring and quick system response cut down on human error and keep the line running, while a built-in microwave weight control system holds a consistent cigarette weight on every unit for tight quality control.",
      "The line is made up of three powerful units working together, the S7000 cigarette rod maker at 50KW, the M8000 filter tip attachment at 20KW and the F80 automatic tray filler at 15KW. Known for reliability and used in cigarette factories worldwide, the Protos 80 combines efficient energy use, low wastage and precise engineering to keep running costs down while product standards stay high. At a total weight of around 10,800kg it is a heavy, stable line built for continuous, large-scale production.",
    ],
    applications: [
      "High-volume production",
      "Large-scale manufacturing",
    ],
  },
  "kdf-1": {
    tagline: "Hauni KDF-1 filter making line with laser circumference control.",
    h1: "Hauni KDF-1 Cigarette Filter Manufacturing Machine",
    metaTitle: "Hauni KDF-1 Filter Making Machine",
    metaDescription: "Hauni KDF-1 filter making machine in Pakistan, 120mm filters with Siemens/Beckhoff PLC and laser circumference control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Hauni KDF-1 is a trusted, powerful filter making line with a strong reputation for performance, precision and durability in cigarette manufacturing. Built for the demands of high-volume production, the KDF-1 suits manufacturers in Pakistan who put consistency, speed and quality first.",
      "Made for high-output running, it offers a robust production capacity for 120mm filters, which works well for both standard and customised cigarette formats. It supports filter circumferences from 16.8mm to 28.1mm and filter lengths from 64mm to 150mm, so you can produce a wide range of filter sizes and types without constant machine changes. From King Size filters to Slims and specialised designs, the KDF-1 handles them all efficiently.",
      "It runs on an advanced PLC control system available in Siemens or Beckhoff configurations, giving intuitive control, real-time diagnostics and reliable automation that holds filter quality steady through the whole run. Lenze or Beckhoff servo systems add to the stability and keep motion smooth and accurate.",
      "A standout feature is the laser-based circumference control system, which measures each filter's circumference with high precision, cutting deviation and keeping every batch uniform. That level of accuracy matters for holding brand quality standards on premium products.",
      "For all its output, the KDF-1 keeps a balanced energy profile at a total of 40KW, which makes it efficient to run over the long term. Its sturdy, well-engineered build gives long service life, and its modular design and compatibility with different cigarette types make it a strong fit for both smaller and large-scale filter production, whether you are expanding capacity or upgrading older machinery.",
    ],
    applications: [
      "High-volume filter production",
      "Standard and specialised filters",
    ],
  },
  "kdf-2": {
    tagline: "High-speed Hauni KDF-2 filter line at 400 metres per minute.",
    h1: "Hauni KDF-2 Cigarette Filter Manufacturing Machine",
    metaTitle: "Hauni KDF-2 High-Speed Filter Making Machine",
    metaDescription: "Hauni KDF-2 filter making machine in Pakistan, 400 metres per minute of acetate tow with Siemens/Beckhoff PLC. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Hauni KDF-2 is a world-class filter making machine built for high-efficiency, high-output cigarette filter production. Known for its engineering quality and advanced automation, the KDF-2 is a trusted choice for large-scale manufacturers in Pakistan who need both precision and productivity.",
      "It runs at an impressive pace, processing 400 metres of acetate tow a minute, which makes it well suited to the demands of modern production lines. That speed is matched by real versatility: it supports filter circumferences from 16.8mm to 28.1mm and filter lengths from 64mm to 150mm, so it covers everything from standard King Size filters to more specialised formats with consistency, quality and minimal downtime.",
      "What sets the KDF-2 apart is its automation. A PLC control system, available in Siemens or Beckhoff configurations, gives full control and real-time monitoring, while a high-performance Lenze or Beckhoff servo system keeps movements accurate and operation dependable. That reduces the margin of error and keeps filter quality uniform, so the machine integrates smoothly as a reliable backbone for continuous, large-scale manufacturing.",
      "Built for durability, the KDF-2 pairs with a tow opener and the HCF80 automatic tray filler to streamline the workflow and cut manual handling. It draws 40KW for the main KDF-2 unit and 15KW for the HCF80 filler, combining energy efficiency with strong performance.",
      "Even with all that capability, the KDF-2 keeps a manageable footprint at around 6,500kg, and its solid construction gives long-term durability under demanding production schedules. Whether you are setting up a new facility or upgrading existing machinery, it is a smart investment that fits neatly into modern production systems while delivering excellent filter quality.",
    ],
    applications: [
      "High-volume filter production",
      "Large-scale manufacturing",
    ],
  },
  "molins-pm-5": {
    tagline: "High-capacity Molins filter maker at 4,000 filters per minute.",
    h1: "Molins PM-5 Filter Maker",
    metaTitle: "Molins PM-5 Cigarette Filter Making Machine",
    metaDescription: "Molins PM-5 filter making machine in Pakistan, high-capacity maker at 4,000 filters per minute. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins PM-5 is a high-capacity cigarette filter maker built for the demands of large-scale production. With a capacity of 4,000 filters a minute, it is a strong example of efficiency and precision in filter manufacturing, and a dependable fit for busy factories in Pakistan.",
      "It offers useful flexibility on filter sizing, with a filter rod diameter of 7.5 to 7.8mm and filter rod lengths from 108 to 126mm, so it can accommodate different filter specifications without difficulty.",
      "At around 2,000kg the PM-5 has a sturdy build that gives durability and stable running over long periods. Made by Molins, a well-known name in the industry, it combines proven engineering with high-speed output, which makes it an essential asset for manufacturers who want quality filters while maximising throughput.",
    ],
    applications: [
      "High-volume filter production",
      "Molins-based lines",
    ],
  },
  "hollow-tube-maker": {
    tagline: "High-speed hollow tube maker at 2,100 cigarettes per minute.",
    h1: "Hollow Tube Maker",
    metaTitle: "Hollow Tube Maker, Cigarette Filter Machine",
    metaDescription: "Hollow tube maker in Pakistan, 2,100 per minute with plug assembler for speciality filter tubes. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Hollow Tube Maker stands out for its production capacity and high-speed running. Capable of producing 2,100 cigarettes a minute, it delivers strong efficiency and consistent output. A rod speed range of 140 to 175 metres a minute, together with a cut-off speed of up to 2,500 rods a minute, underlines how well it suits high-volume production for factories in Pakistan.",
      "At 3,050kg the maker has a robust build for durability and long-term reliability. The plug assembler adds a further 1,800kg and works in step with the maker for precise, efficient tube production. Total power draw is 14kW, split between 6.5kW for the maker and 7.5kW for the plug assembler, which strikes a good balance between performance and energy use.",
      "Designed for large-scale manufacturing, the Hollow Tube Maker uses up-to-date technology to turn out high-quality tubes. Its high-speed capability and solid engineering make it a valuable asset for producers that need to meet strong demand while holding excellent production standards.",
    ],
    applications: [
      "High-volume filter production",
      "Speciality filter tubes",
    ],
  },
  "tobacco-feeder": {
    tagline: "Feeds a steady, even flow of tobacco to Mark 8 and Mark 9 makers.",
    h1: "Tobacco Feeder",
    metaTitle: "Tobacco Feeder for Cigarette Making Machines",
    metaDescription: "Tobacco feeder in Pakistan, steady, even tobacco flow for Mark 8 and Mark 9 cigarette makers. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The tobacco feeder is a crucial input machine for a cigarette factory. It feeds tobacco continuously and evenly into the making machines, layering it neatly so it is prepared exactly right for production.",
      "It is compatible with Mark 8 and Mark 9 machines, so it slots into an existing setup with ease. Its adjustable volume settings let you control the tobacco flow precisely, which lifts production efficiency, and its automation cuts manual handling, streamlines operation and keeps productivity high.",
    ],
    applications: [
      "Maker feeding",
      "Steady rod production",
    ],
  },
  "cigarette-reclaimer": {
    tagline: "Recovers tobacco from waste at 120 kg/hour with 99.8% efficiency.",
    h1: "Cigarette Reclaimer",
    metaTitle: "Cigarette Reclaimer, Tobacco Recovery Machine",
    metaDescription: "Cigarette reclaimer in Pakistan, recovers tobacco from manufacturing waste at 120 kg/hour with 99.8% efficiency. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Cigarette Reclaimer is an excellent tobacco recovery machine for cigarette manufacturing waste. It separates reusable tobacco from waste materials with very small losses, so the tobacco you would otherwise throw away goes back into production.",
      "At maximum capacity it reclaims 120 kg an hour and works at an impressive 99.8% efficiency, giving you the highest possible utilisation. With a 90% recovery rate, it delivers a real advantage in reducing waste and lifting overall production efficiency.",
      "It is user-friendly and easy to install into your production line, which makes it a practical, cost-saving addition for factories in Pakistan that want to get the most out of every batch.",
    ],
    applications: [
      "Waste reduction",
      "Tobacco recovery",
    ],
  },
  "tobacco-cutters": {
    tagline: "Hauni KT-400 tobacco cutter with five knives and PLC cut-size control.",
    h1: "Hauni Tobacco Cutter KT-400",
    metaTitle: "Hauni Tobacco Cutter KT-400",
    metaDescription: "Hauni Tobacco Cutter KT-400 in Pakistan, five-knife cutter with PLC-regulated cut size. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Hauni Tobacco Cutter KT-400 is a precision-engineered machine that plays a crucial role in keeping cut quality consistent in tobacco processing. It carries five knives, which deliver uniform cuts and improve the overall quality of the tobacco blend, and pneumatic cylinders operate the jaw for smooth, efficient cutting with less downtime and maintenance.",
      "The KT-400 also runs an advanced PLC drive system on a brass bend slat, which regulates the cut size precisely. That keeps every batch uniform and lets you tailor the cut size to specific requirements, adding real versatility. With its precision and reliability, the KT-400 is an important asset for any tobacco production facility in Pakistan aiming for top quality and efficiency.",
    ],
    applications: [
      "Primary processing",
      "Cut rag preparation",
    ],
  },
  "tobacco-stem-flattener": {
    tagline: "Flattens tobacco stems for uniform blending and less leaf waste.",
    h1: "Tobacco Stem Flattener",
    metaTitle: "Tobacco Stem Flattener, Primary Processing Machine",
    metaDescription: "Tobacco stem flattener in Pakistan, flattens stems for uniform blending and reduced leaf waste. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Tobacco Stem Flattener plays a key role in optimising the tobacco processing workflow. By flattening tobacco stems, it prepares them for uniform blending with the leaves, which improves processing ease and reduces the chance of inconsistencies in the final product.",
      "By flattening stems efficiently, it also minimises leaf waste, making the whole process more economical and sustainable. The result is a consistent, high-quality product that meets strict industry standards, which makes the stem flattener a valuable asset for any tobacco processing operation in Pakistan.",
    ],
    applications: [
      "Primary processing",
      "Yield improvement",
    ],
  },
};

/* ------------------------- English (Zimbabwe) --------------------------- */

const zw: Record<string, ProductContent> = {
  "hlp-180": {
    tagline: "High-speed hard pack line running 180 packs per minute.",
    h1: "HLP-180 Cigarette Packing Machine",
    metaTitle: "HLP-180 Cigarette Packing Machine, 180 Packs/Min",
    metaDescription: "HLP-180 cigarette packing machine in Pakistan, 180 packs per minute across King to Nano formats with PLC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The HLP-180 is a powerful, next-generation machine built for high-speed cigarette packing. Known for consistent performance and reliable output, the HLP-180 packer suits manufacturers who want to streamline their packing process without giving up quality or precision.",
      "At an output of 180 packs a minute, it runs efficient, steady packing cycles with its single plunger mechanism, holding perfect alignment, wrapping and sealing on every pack. That lets factories in Pakistan meet high-volume demand while keeping the finish clean and repeatable.",
      "It is designed to handle a wide range of cigarette sizes, including King Size, Demi, Slims, Super Slims and Nano. That versatility means you can serve different consumer preferences across local and export markets, from traditional formats through to niche products, all on the same machine.",
      "A PLC control system keeps operation accurate and fully automated, so every pack comes out uniform, well wrapped and retail-ready. The user-friendly interface gives operators full control over speed, error detection and production monitoring, which cuts downtime and lifts overall efficiency.",
      "What really sets the HLP-180 apart is its flexibility in pack shapes. It supports round corner, bevel edge, D-type and square pack formats, so brands can differentiate their packaging, stand out on the shelf and keep up with changing market trends. Built for non-stop, large-scale production, it is a strong choice whether you are expanding a line or upgrading older equipment.",
    ],
    applications: [
      "High-volume hard pack production",
      "Local and export markets",
    ],
  },
  "hlp-200": {
    tagline: "Double plunger hard pack line running 200 packs per minute.",
    h1: "HLP-200 Cigarette Packing Machine",
    metaTitle: "HLP-200 Cigarette Packing Machine, 200 Packs/Min",
    metaDescription: "HLP-200 cigarette packing machine in Pakistan, 200 packs per minute double plunger line across King to Nano formats. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The HLP-200 is a double plunger hopper packing machine built for small to medium and high-volume production. It is a popular choice with manufacturers in Pakistan because it makes careful use of material and helps keep running costs down while still holding a fast, steady pace.",
      "Running at 200 packs a minute with a maximum throughput of around 12,000 cigarettes, it sits at the core of the packing line as the first critical unit, forming and finishing the pack before it moves on to wrapping and boxing. It supports all common cigarette pack formats, so it slots into most production setups with ease.",
      "The machine handles a wide range of cigarette sizes, including King Size, Demi, Slims, Super Slims and Nano, and its double plunger system keeps the packing cycle efficient and the finish consistent. A PLC control system keeps operation accurate and fully automated, giving operators clear control over speed, error detection and monitoring.",
      "For pack presentation it offers round corner, bevel edge, D-type and square formats, so brands can shape their packaging to stand out on the shelf. Running on a 220V/380V supply and built for dependable, continuous output, the HLP-200 is a solid core unit for any integrated packing line.",
    ],
    applications: [
      "High-volume hard pack production",
      "Core of an integrated packing line",
    ],
  },
  "hlp-225": {
    tagline: "High-speed double plunger hard pack line at 225 packs per minute.",
    h1: "HLP-225 Cigarette Packing Machine",
    metaTitle: "HLP-225 Cigarette Packing Machine, 225 Packs/Min",
    metaDescription: "HLP-225 cigarette packing machine in Pakistan, high-speed 225 packs per minute double plunger line with PLC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The HLP-225 packing line is a real step forward in cigarette packing. Running at 225 packs a minute, this double plunger machine delivers high efficiency and throughput for factories that need to pack at scale.",
      "It is engineered to handle a wide range of cigarette sizes, including King, Demi, Slims, Super Slims and Nano, so manufacturers in Pakistan get the flexibility to meet different market demands on a single machine.",
      "A modern PLC control system improves accuracy and automates the packing process, cutting manual intervention and reducing errors. The HLP-225 also supports multiple pack formats, including round corner, bevel edge, D-type and square, which lets brands tailor their packaging to different consumer preferences and requirements.",
      "Built for large-scale production, the HLP-225 pairs advanced features with a robust build for reliable, consistent performance. Its ability to pack at high speed without giving up quality makes it a valuable asset for any operation looking to scale up output and stay competitive.",
    ],
    applications: [
      "High-volume hard pack production",
      "Large-scale packing lines",
    ],
  },
  "sasib-5000": {
    tagline: "SASIB soft packer for 100mm packs with squared corners.",
    h1: "SASIB 5000 Soft Pack Machine",
    metaTitle: "SASIB 5000 Soft Pack Cigarette Machine",
    metaDescription: "SASIB 5000 soft pack cigarette machine in Pakistan, 100mm soft packs with alufoil and label wrapping. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The SASIB 5000 is a versatile machine built for producing soft packs of 100mm cigarettes. Using alufoil and label wrapping performed around an arbour, it delivers perfect, consistent packs with neatly squared corners.",
      "That wrapping method does more than look good, it protects the cigarettes and keeps each pack intact, while also lifting the visual appeal of the finished product. For manufacturers in Pakistan who want a premium soft pack finish, it is a reliable, high-quality choice.",
      "Well proven and straightforward to run, the SASIB 5000 is supplied checked and set up ready for the floor, so you can add dependable soft pack capacity with confidence.",
    ],
    applications: [
      "Soft pack production",
      "100mm formats",
    ],
  },
  "sasib-3000": {
    tagline: "SASIB soft packer for 84mm and 100mm packs with squared corners.",
    h1: "SASIB 3000 Soft Pack Machine",
    metaTitle: "SASIB 3000 Soft Pack Cigarette Machine",
    metaDescription: "SASIB 3000 soft pack cigarette machine in Pakistan, handles 84mm and 100mm packs with alufoil and label wrapping. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The SASIB 3000 adds extra versatility to the SASIB soft pack line with its ability to handle both 84mm and 100mm cigarette packs. Using alufoil and label wrapping performed around an arbor, it keeps the hallmark SASIB finish, perfect, consistent packs with neatly squared corners.",
      "That dual-size capability makes the SASIB 3000 a valuable asset for manufacturers in Pakistan who need flexibility in their production while keeping every pack to a high standard of presentation and protection.",
      "Its control systems make adjustments and maintenance straightforward, which helps reduce downtime and keep overall productivity high. Supplied checked and set up ready to run, it is a dependable soft pack line for factories that want both quality and format flexibility.",
    ],
    applications: [
      "Soft pack production",
      "84mm and 100mm formats",
    ],
  },
  "regular-wrapper-cp1": {
    tagline: "High-speed cigarette pack overwrapper running up to 250 packs per minute.",
    h1: "Regular Wrapper CP1",
    metaTitle: "CP-1 Cigarette Pack Wrapping Machine, 250 PPM",
    metaDescription: "CP-1 cigarette pack wrapping machine in Pakistan, up to 250 packs per minute overwrapper. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The CP-1 is a high-performance cigarette pack wrapping machine built to handle serious production demands with ease. At a wrapping speed of up to 250 packs a minute, it lifts the efficiency and throughput of the packing line for factories in Pakistan.",
      "It runs on a modest power requirement of 6 KVA and an air pressure need of 0.05 m³/min, so it delivers strong performance while staying energy efficient. The CP-1 is engineered for precise, consistent wrapping that reduces material waste and keeps every pack to a tight quality standard.",
      "Its robust construction and reliable operation make it a dependable asset for high-volume lines, keeping the process smooth and the output clean. It also integrates neatly into existing lines, which makes it a practical, valuable addition for any facility looking to lift productivity without losing quality.",
    ],
    applications: [
      "Pack overwrapping",
      "High-volume packing lines",
    ],
  },
  "naked-over-wrapper": {
    tagline: "Outer pack overwrapper at 25 outer packs per minute.",
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, Cigarette Outer Pack Wrapper",
    metaDescription: "Naked Over Wrapper in Pakistan, cigarette outer pack overwrapper at 25 outer packs per minute. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Naked Over Wrapper is a well-engineered machine for wrapping cigarette outer packs with precision and speed. It wraps 25 outer packs a minute, which keeps a high level of efficiency on the line for factories in Pakistan.",
      "It runs on an energy need of 6 KVA and an air pressure of 0.05 m³/min, giving dependable working performance without heavy power draw. Robust and efficient, it is a sound addition to a cigarette production line, lifting packaging quality at the final stage.",
    ],
    applications: [
      "Outer pack overwrapping",
      "End-of-line sealing",
    ],
  },
  "molins-boxer": {
    tagline: "Cigarette box packing machine running up to 20 boxes per minute.",
    h1: "Molins Boxer, Box Packing Machine",
    metaTitle: "Molins Boxer, Cigarette Box Packing Machine",
    metaDescription: "Molins Boxer box packing machine in Pakistan, up to 20 boxes per minute for cigarette cartons. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins Boxer is a dependable cigarette box packing machine known for efficient running and solid throughput. At a packing speed of up to 20 boxes a minute, it lifts the productivity of cigarette packaging lines in Pakistan.",
      "It works on an air pressure of 0.05 m³/min, balancing energy use with steady operation. Engineered for reliability, the Molins Boxer keeps packing consistent and precise, which reduces downtime and holds product quality high.",
      "That makes it a critical part of any production setup focused on efficiency and steady output, taking wrapped packs and forming them into tidy cartons at the end of the line.",
    ],
    applications: [
      "Carton / box packing",
      "End-of-line collation",
    ],
  },
  "sasib-boxer": {
    tagline: "Cigarette box packing machine running up to 25 boxes per minute.",
    h1: "SASIB Boxer, Box Packing Machine",
    metaTitle: "SASIB Boxer, Cigarette Box Packing Machine",
    metaDescription: "SASIB Boxer box packing machine in Pakistan, up to 25 boxes per minute for cigarette cartons. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The SASIB Boxer is an advanced cigarette box packing machine known for its speed and efficiency. Capable of packing up to 25 boxes a minute, it gives a real boost to the throughput of a cigarette manufacturing line in Pakistan.",
      "It runs on a power requirement of 6 KVA, combining power with performance, and an air pressure need of 0.1 m³/min, keeping a balance between energy use and operational efficiency.",
      "Designed for highly accurate, consistent packing, the SASIB Boxer minimises downtime and streamlines the process, which makes it a valuable asset for high-volume environments where speed and precision matter for productivity and product quality.",
    ],
    applications: [
      "Carton / box packing",
      "High-volume packing lines",
    ],
  },
  "mark-8-post-64": {
    tagline: "The dependable workhorse maker that factories still rely on.",
    h1: "Mark 8 Post 64 – Cigarette Manufacturing Machine in Zimbabwe",
    metaTitle: "MK 8 | Mark 8 Post 64 Cigarette Manufacturing Machine",
    metaDescription: "Molins Mark 8 Post 64 cigarette making machine in Pakistan, reliable rod maker for steady production. Reconditioned and supported by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark 8 Post 64 is a proven, high-output cigarette maker built for both quality and flexibility. It runs at a steady 1,800 to 2,000 cigarettes per minute and carries a double colour printer, so you can print the paper exactly the way your brand needs without slowing the line down.",
      "It handles a wide spread of formats, cigarette circumferences from 17mm up to 28.3mm and combined filter-and-tobacco rod lengths from 65mm to 110mm, which covers everything from standard 84mm and 100mm right through to slims, super slims and nano. A Max Multiroll filter attachment keeps the filters going on cleanly at full speed.",
      "At around 3,500kg it is a heavy, solid machine made to hold its pace through long production runs. That combination of speed, format flexibility and reliability makes the Mark 8 Post 64 a smart pick for factories that want strong output from a single maker.",
    ],
    features: [
      "Proven, long-life Molins design",
      "Even rod and clean cut",
      "Parts and know-how widely available",
      "Easy for technicians to maintain",
      "Great value as a reconditioned unit",
    ],
    applications: [
      "Entry maker line",
      "Reliable backup maker",
    ],
  },
  "mark-8d-max-15": {
    tagline: "High-speed Mark 8D maker with the MAX-15 control system.",
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D with MAX-15 Cigarette Maker",
    metaDescription: "Molins Mark 8D with MAX-15 cigarette making machine in Pakistan, 3,000 per minute across King to Nano formats. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark 8D with MAX-15 is a strong, flexible cigarette making machine built for the demands of a modern tobacco factory. It belongs to the well-known Mark 8 maker family and gives Pakistani manufacturers a dependable way to grow output without giving up on quality.",
      "It runs at up to 3,000 cigarettes a minute, so it holds its pace comfortably on a busy production line. Just as important, it handles a wide spread of formats. Whether you make King size, Demi, Slims, Super Slims or Nano, the same machine can produce them all, which makes it a practical choice for a factory serving several segments at once.",
      "The maker accepts cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you keep full control over sizing and stay consistent from one run to the next.",
      "The setup pairs the MK-8D cigarette maker with the MAX-15 and its 1117 infeed unit. Together they carry the process cleanly from tobacco feeding through to the finished rod, keeping the line steady, cutting down on stoppages and holding quality across the shift. At a total draw of 17KW it balances real production speed with sensible running costs.",
      "For all that it does, the machine stays compact. At around 5,000kg it is solid and hard-wearing, yet it drops into an existing floor without major rebuilding, and its build stands up to long, continuous production. Day to day it turns out even cigarettes with little waste and modest maintenance, which is exactly what a factory needs when it is trying to run lean and still meet demand across different formats.",
      "In short, the Mark 8D with MAX-15 earns its place through proven reliability, flexible format support from slims to nano, high-speed output that stays accurate, energy-efficient running and easy fitment into an automated line. Whether you are replacing older equipment or adding capacity, it is a future-ready maker that puts classic engineering to work for modern production.",
    ],
    applications: [
      "High-volume production",
      "Multi-format factories",
    ],
  },
  "mark-9-5-lenze-servo-drives": {
    tagline: "High-speed Mark 9.5 maker line with Lenze servo drives.",
    h1: "Molins Mark 9.5 with Lenze Servo Drives",
    metaDescription: "Molins Mark 9.5 with Lenze servo drives in Pakistan, up to 3,500 per minute with Siemens PLC and microwave weight control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark 9.5 with Lenze servo drives is built for manufacturers who want serious output without losing flexibility. It produces up to 3,500 cigarettes a minute on regular diameters and 3,200 a minute on slim and super slim formats, so one line can cover a broad product range at real production speed.",
      "It works across cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, which gives you the room to switch formats and still hold a consistent rod from run to run.",
      "The line brings together three units, the MK-9.5 cigarette maker, the MAX-S filter assembler and the HCF80 automatic tray filler, drawing 35KW, 20KW and 15KW in turn. Together they take the process from making through to filled trays with very little manual handling in between.",
      "Control and accuracy sit at the centre of this machine. A Siemens PLC runs the sequence smoothly, a microwave system keeps tight control over rod weight, and the Lenze servo drives deliver the precise, steady motion that keeps quality high even at full speed.",
      "At a total weight of around 8,600kg it is a heavy, solid line made for large-scale manufacturing. For a factory that needs dependable high-volume output with modern controls and easy servicing, the Mark 9.5 with Lenze servo drives is a strong, future-ready choice.",
    ],
    applications: [
      "High-volume production",
      "Multi-format factories",
    ],
  },
  "mark-9-5-max-s-tray-filler": {
    tagline: "High-speed Mark-9.5 maker with Max S and mass flow tray filler.",
    h1: "Molins Mark-9.5 with Max S & Tray Filler",
    metaTitle: "Molins Mark-9.5 with Max S & Tray Filler",
    metaDescription: "Molins Mark-9.5 with Max S and tray filler in Pakistan, 4,500 to 5,000 cigarettes per minute. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins Mark-9.5 with Max S and tray filler is a premium choice for manufacturers that need high-speed output, tidy filter integration and dependable production capability in one line. Engineered for volume, it runs a remarkable 4,500 to 5,000 cigarettes a minute, which puts it among the most efficient systems available for large-scale factories in Pakistan.",
      "At the centre of the setup is the MK-9.5 cigarette maker, an evolution of the proven Mark 9 series that holds strong output while keeping precision and consistency high. It supports cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you can move between King size, Slims, Demi and other formats without losing rod quality.",
      "The maker is paired with the Max-S filter assembler, which attaches the filter to the tobacco rod accurately and repeatably. Working through a mass flow tray filler, it lifts throughput while keeping material waste and misalignment low, so filter integrity stays consistent across every production cycle.",
      "A default setup size of 84mm keeps the machine in step with globally accepted cigarette dimensions, which makes it a practical fit for both local supply and export production. Whether you run your own brand or fulfil large contracts, it moves smoothly between batches and adapts easily to changing orders.",
      "At roughly 7,800kg it is a heavy, stable line built for continuous operation and long service life. For a factory looking to scale up while protecting quality and keeping downtime low, the Mark-9.5 with Max S and tray filler brings together the speed, flexibility and reliability the floor needs, from proven making and precise filter attachment to a streamlined mass flow feed and a durable, heavy-duty frame.",
    ],
    applications: [
      "High-volume production",
      "Export-ready manufacturing",
    ],
  },
  "mark-9-max-s": {
    tagline: "High-speed MK-9 maker with Max S and mass flow tray filler.",
    h1: "Molins MK-9 with Max S",
    metaTitle: "Molins MK-9 with Max S",
    metaDescription: "Molins MK-9 with Max S in Pakistan, 4,500 to 5,000 cigarettes per minute with mass flow tray filler. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins MK-9 with Max S is another high-efficiency cigarette maker built for serious production, running between 4,500 and 5,000 cigarettes a minute. It is a dependable choice for factories in Pakistan that want strong, steady output from a single line.",
      "The MK-9 cigarette maker at its core keeps production precise and consistent shift after shift. It works across cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you get real flexibility to move between formats without losing rod quality.",
      "It is fitted with the Max-S filter assembler and a mass flow tray filler, which make the filter attachment step faster and more reliable while keeping waste and misalignment low. A default setup size of 84mm keeps it in line with widely accepted cigarette dimensions, so it slots into most production plans with ease.",
      "At around 7,800kg the MK-9 is a heavy, stable machine made for continuous running and long service life. For a factory scaling up large-scale production while protecting quality, it is a solid, reliable addition to the floor.",
    ],
    applications: [
      "High-volume production",
      "Main maker line",
    ],
  },
  "protos-70": {
    tagline: "High-speed Protos 70 maker line up to 7,000 cigarettes a minute.",
    h1: "Protos 70",
    metaTitle: "Hauni Protos 70 Cigarette Making Machine",
    metaDescription: "Hauni Protos 70 cigarette making machine in Pakistan, up to 7,000 per minute with Siemens or Beckhoff IPC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Hauni Protos 70 is an advanced cigarette making machine built to meet the highest standards of production efficiency and precision. It runs an impressive 7,000 cigarettes a minute on regular diameters and 6,000 a minute on slim and super slim formats, which gives factories in Pakistan real speed and flexibility from a single line.",
      "It handles cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so you can move across formats and still hold a consistent rod from run to run.",
      "A Siemens IPC or Beckhoff IPC control system keeps the sequence automated, smooth and reliable, while a microwave weight control system holds every cigarette to a precise weight for steady product consistency. The line brings together the S7000 cigarette rod maker, the M8000 filter tip attachment and the F80 automatic tray filler, each handling its own stage of the process cleanly.",
      "With power of 50KW for the S7000, 20KW for the M8000 and 15KW for the F80, the Protos 70 is a powerful, capable line. At a total weight of around 10,800kg it is heavy and stable, built for continuous running and long service life, which makes it an ideal choice for large-scale cigarette production.",
    ],
    applications: [
      "High-volume production",
      "Large-scale manufacturing",
    ],
  },
  "protos-80-er": {
    tagline: "High-speed Protos 80 ER maker line up to 8,000 cigarettes a minute.",
    h1: "Protos 80 ER",
    metaTitle: "Hauni Protos 80 ER Cigarette Making Machine",
    metaDescription: "Hauni Protos 80 ER cigarette making machine in Pakistan, up to 8,000 per minute with Siemens or Beckhoff IPC control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Protos 80 ER is a high-performance cigarette making machine engineered for manufacturers who want maximum efficiency, precision and output. Built by Hauni, the Protos 80 series is known for its reliability and advanced automation, and whether you produce regular or slim cigarettes it delivers strong consistency and productivity, which makes it a trusted choice for high-volume lines in Pakistan.",
      "Capacity is where this machine really stands out. It produces up to 8,000 cigarettes a minute on regular diameters and 7,000 a minute on slim and super slim formats. It accepts cigarette circumferences from 17mm to 28.3mm and combined filter and tobacco rod lengths from 65mm to 110mm, so it stays flexible across cigarette types and market demands. From king size to slim to niche formats, the Protos 80 ER adapts to how you produce.",
      "For precision and uptime it runs a high-level PLC control system on either a Siemens IPC or a Beckhoff IPC, keeping the whole cycle smooth and automated. Real-time monitoring and quick system response cut down on human error and keep the line running, while a built-in microwave weight control system holds a consistent cigarette weight on every unit for tight quality control.",
      "The line is made up of three powerful units working together, the S7000 cigarette rod maker at 50KW, the M8000 filter tip attachment at 20KW and the F80 automatic tray filler at 15KW. Known for reliability and used in cigarette factories worldwide, the Protos 80 combines efficient energy use, low wastage and precise engineering to keep running costs down while product standards stay high. At a total weight of around 10,800kg it is a heavy, stable line built for continuous, large-scale production.",
    ],
    applications: [
      "High-volume production",
      "Large-scale manufacturing",
    ],
  },
  "kdf-1": {
    tagline: "Hauni KDF-1 filter making line with laser circumference control.",
    h1: "Hauni KDF-1 Cigarette Filter Manufacturing Machine",
    metaTitle: "Hauni KDF-1 Filter Making Machine",
    metaDescription: "Hauni KDF-1 filter making machine in Pakistan, 120mm filters with Siemens/Beckhoff PLC and laser circumference control. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Hauni KDF-1 is a trusted, powerful filter making line with a strong reputation for performance, precision and durability in cigarette manufacturing. Built for the demands of high-volume production, the KDF-1 suits manufacturers in Pakistan who put consistency, speed and quality first.",
      "Made for high-output running, it offers a robust production capacity for 120mm filters, which works well for both standard and customised cigarette formats. It supports filter circumferences from 16.8mm to 28.1mm and filter lengths from 64mm to 150mm, so you can produce a wide range of filter sizes and types without constant machine changes. From King Size filters to Slims and specialised designs, the KDF-1 handles them all efficiently.",
      "It runs on an advanced PLC control system available in Siemens or Beckhoff configurations, giving intuitive control, real-time diagnostics and reliable automation that holds filter quality steady through the whole run. Lenze or Beckhoff servo systems add to the stability and keep motion smooth and accurate.",
      "A standout feature is the laser-based circumference control system, which measures each filter's circumference with high precision, cutting deviation and keeping every batch uniform. That level of accuracy matters for holding brand quality standards on premium products.",
      "For all its output, the KDF-1 keeps a balanced energy profile at a total of 40KW, which makes it efficient to run over the long term. Its sturdy, well-engineered build gives long service life, and its modular design and compatibility with different cigarette types make it a strong fit for both smaller and large-scale filter production, whether you are expanding capacity or upgrading older machinery.",
    ],
    applications: [
      "High-volume filter production",
      "Standard and specialised filters",
    ],
  },
  "kdf-2": {
    tagline: "High-speed Hauni KDF-2 filter line at 400 metres per minute.",
    h1: "Hauni KDF-2 Cigarette Filter Manufacturing Machine",
    metaTitle: "Hauni KDF-2 High-Speed Filter Making Machine",
    metaDescription: "Hauni KDF-2 filter making machine in Pakistan, 400 metres per minute of acetate tow with Siemens/Beckhoff PLC. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Hauni KDF-2 is a world-class filter making machine built for high-efficiency, high-output cigarette filter production. Known for its engineering quality and advanced automation, the KDF-2 is a trusted choice for large-scale manufacturers in Pakistan who need both precision and productivity.",
      "It runs at an impressive pace, processing 400 metres of acetate tow a minute, which makes it well suited to the demands of modern production lines. That speed is matched by real versatility: it supports filter circumferences from 16.8mm to 28.1mm and filter lengths from 64mm to 150mm, so it covers everything from standard King Size filters to more specialised formats with consistency, quality and minimal downtime.",
      "What sets the KDF-2 apart is its automation. A PLC control system, available in Siemens or Beckhoff configurations, gives full control and real-time monitoring, while a high-performance Lenze or Beckhoff servo system keeps movements accurate and operation dependable. That reduces the margin of error and keeps filter quality uniform, so the machine integrates smoothly as a reliable backbone for continuous, large-scale manufacturing.",
      "Built for durability, the KDF-2 pairs with a tow opener and the HCF80 automatic tray filler to streamline the workflow and cut manual handling. It draws 40KW for the main KDF-2 unit and 15KW for the HCF80 filler, combining energy efficiency with strong performance.",
      "Even with all that capability, the KDF-2 keeps a manageable footprint at around 6,500kg, and its solid construction gives long-term durability under demanding production schedules. Whether you are setting up a new facility or upgrading existing machinery, it is a smart investment that fits neatly into modern production systems while delivering excellent filter quality.",
    ],
    applications: [
      "High-volume filter production",
      "Large-scale manufacturing",
    ],
  },
  "molins-pm-5": {
    tagline: "High-capacity Molins filter maker at 4,000 filters per minute.",
    h1: "Molins PM-5 Filter Maker",
    metaTitle: "Molins PM-5 Cigarette Filter Making Machine",
    metaDescription: "Molins PM-5 filter making machine in Pakistan, high-capacity maker at 4,000 filters per minute. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Molins PM-5 is a high-capacity cigarette filter maker built for the demands of large-scale production. With a capacity of 4,000 filters a minute, it is a strong example of efficiency and precision in filter manufacturing, and a dependable fit for busy factories in Pakistan.",
      "It offers useful flexibility on filter sizing, with a filter rod diameter of 7.5 to 7.8mm and filter rod lengths from 108 to 126mm, so it can accommodate different filter specifications without difficulty.",
      "At around 2,000kg the PM-5 has a sturdy build that gives durability and stable running over long periods. Made by Molins, a well-known name in the industry, it combines proven engineering with high-speed output, which makes it an essential asset for manufacturers who want quality filters while maximising throughput.",
    ],
    applications: [
      "High-volume filter production",
      "Molins-based lines",
    ],
  },
  "hollow-tube-maker": {
    tagline: "High-speed hollow tube maker at 2,100 cigarettes per minute.",
    h1: "Hollow Tube Maker",
    metaTitle: "Hollow Tube Maker, Cigarette Filter Machine",
    metaDescription: "Hollow tube maker in Pakistan, 2,100 per minute with plug assembler for speciality filter tubes. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Hollow Tube Maker stands out for its production capacity and high-speed running. Capable of producing 2,100 cigarettes a minute, it delivers strong efficiency and consistent output. A rod speed range of 140 to 175 metres a minute, together with a cut-off speed of up to 2,500 rods a minute, underlines how well it suits high-volume production for factories in Pakistan.",
      "At 3,050kg the maker has a robust build for durability and long-term reliability. The plug assembler adds a further 1,800kg and works in step with the maker for precise, efficient tube production. Total power draw is 14kW, split between 6.5kW for the maker and 7.5kW for the plug assembler, which strikes a good balance between performance and energy use.",
      "Designed for large-scale manufacturing, the Hollow Tube Maker uses up-to-date technology to turn out high-quality tubes. Its high-speed capability and solid engineering make it a valuable asset for producers that need to meet strong demand while holding excellent production standards.",
    ],
    applications: [
      "High-volume filter production",
      "Speciality filter tubes",
    ],
  },
  "tobacco-feeder": {
    tagline: "Feeds a steady, even flow of tobacco to Mark 8 and Mark 9 makers.",
    h1: "Tobacco Feeder",
    metaTitle: "Tobacco Feeder for Cigarette Making Machines",
    metaDescription: "Tobacco feeder in Pakistan, steady, even tobacco flow for Mark 8 and Mark 9 cigarette makers. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The tobacco feeder is a crucial input machine for a cigarette factory. It feeds tobacco continuously and evenly into the making machines, layering it neatly so it is prepared exactly right for production.",
      "It is compatible with Mark 8 and Mark 9 machines, so it slots into an existing setup with ease. Its adjustable volume settings let you control the tobacco flow precisely, which lifts production efficiency, and its automation cuts manual handling, streamlines operation and keeps productivity high.",
    ],
    applications: [
      "Maker feeding",
      "Steady rod production",
    ],
  },
  "cigarette-reclaimer": {
    tagline: "Recovers tobacco from waste at 120 kg/hour with 99.8% efficiency.",
    h1: "Cigarette Reclaimer",
    metaTitle: "Cigarette Reclaimer, Tobacco Recovery Machine",
    metaDescription: "Cigarette reclaimer in Pakistan, recovers tobacco from manufacturing waste at 120 kg/hour with 99.8% efficiency. Supplied by Civic Tobacco Machinery.",
    intro: [
      "The Cigarette Reclaimer is an excellent tobacco recovery machine for cigarette manufacturing waste. It separates reusable tobacco from waste materials with very small losses, so the tobacco you would otherwise throw away goes back into production.",
      "At maximum capacity it reclaims 120 kg an hour and works at an impressive 99.8% efficiency, giving you the highest possible utilisation. With a 90% recovery rate, it delivers a real advantage in reducing waste and lifting overall production efficiency.",
      "It is user-friendly and easy to install into your production line, which makes it a practical, cost-saving addition for factories in Pakistan that want to get the most out of every batch.",
    ],
    applications: [
      "Waste reduction",
      "Tobacco recovery",
    ],
  },
  "tobacco-cutters": {
    tagline: "Hauni KT-400 tobacco cutter with five knives and PLC cut-size control.",
    h1: "Hauni Tobacco Cutter KT-400",
    metaTitle: "Hauni Tobacco Cutter KT-400",
    metaDescription: "Hauni Tobacco Cutter KT-400 in Pakistan, five-knife cutter with PLC-regulated cut size. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Hauni Tobacco Cutter KT-400 is a precision-engineered machine that plays a crucial role in keeping cut quality consistent in tobacco processing. It carries five knives, which deliver uniform cuts and improve the overall quality of the tobacco blend, and pneumatic cylinders operate the jaw for smooth, efficient cutting with less downtime and maintenance.",
      "The KT-400 also runs an advanced PLC drive system on a brass bend slat, which regulates the cut size precisely. That keeps every batch uniform and lets you tailor the cut size to specific requirements, adding real versatility. With its precision and reliability, the KT-400 is an important asset for any tobacco production facility in Pakistan aiming for top quality and efficiency.",
    ],
    applications: [
      "Primary processing",
      "Cut rag preparation",
    ],
  },
  "tobacco-stem-flattener": {
    tagline: "Flattens tobacco stems for uniform blending and less leaf waste.",
    h1: "Tobacco Stem Flattener",
    metaTitle: "Tobacco Stem Flattener, Primary Processing Machine",
    metaDescription: "Tobacco stem flattener in Pakistan, flattens stems for uniform blending and reduced leaf waste. Supplied and serviced by Civic Tobacco Machinery.",
    intro: [
      "The Tobacco Stem Flattener plays a key role in optimising the tobacco processing workflow. By flattening tobacco stems, it prepares them for uniform blending with the leaves, which improves processing ease and reduces the chance of inconsistencies in the final product.",
      "By flattening stems efficiently, it also minimises leaf waste, making the whole process more economical and sustainable. The result is a consistent, high-quality product that meets strict industry standards, which makes the stem flattener a valuable asset for any tobacco processing operation in Pakistan.",
    ],
    applications: [
      "Primary processing",
      "Yield improvement",
    ],
  },
};

/* ----------------------------- Polish content ---------------------------- */

const pl: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "Maszyna pakująca do papierosów HLP-180",
    metaTitle: "Maszyna pakująca HLP-180, 180 paczek/min",
    metaDescription:
      "Maszyna pakująca do papierosów HLP-180 w Pakistanie – 180 paczek na minutę w formatach od King do Nano ze sterowaniem PLC. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Szybka linia do pakowania twardych paczek, 180 paczek na minutę.",
    intro: [
      "HLP-180 to wydajna maszyna nowej generacji zbudowana do szybkiego pakowania papierosów. Znana ze stabilnej pracy i niezawodnej wydajności, pakowarka HLP-180 sprawdza się u producentów, którzy chcą usprawnić proces pakowania bez utraty jakości i precyzji.",
      "Przy wydajności 180 paczek na minutę maszyna wykonuje efektywne, równe cykle pakowania dzięki mechanizmowi z pojedynczym tłokiem, zachowując idealne wyrównanie, owinięcie i zgrzew na każdej paczce. Dzięki temu fabryki w Pakistanie mogą zaspokoić duży popyt, zachowując czyste i powtarzalne wykończenie.",
      "Maszyna została zaprojektowana do obsługi szerokiej gamy formatów papierosów, w tym King Size, Demi, Slims, Super Slims i Nano. Ta wszechstronność oznacza, że można obsłużyć różne preferencje konsumentów na rynku lokalnym i eksportowym, od formatów tradycyjnych po produkty niszowe, na jednej maszynie.",
      "System sterowania PLC zapewnia dokładną i w pełni zautomatyzowaną pracę, dzięki czemu każda paczka jest jednolita, dobrze owinięta i gotowa do sprzedaży. Przyjazny interfejs daje operatorom pełną kontrolę nad prędkością, wykrywaniem błędów i monitorowaniem produkcji, co ogranicza przestoje i podnosi ogólną wydajność.",
      "Tym, co naprawdę wyróżnia HLP-180, jest elastyczność kształtów paczki. Maszyna obsługuje formaty round corner, bevel edge, D-type i square, dzięki czemu marki mogą wyróżnić swoje opakowania, wyróżnić się na półce i nadążać za zmieniającymi się trendami rynkowymi. Zbudowana do nieprzerwanej, wielkoseryjnej produkcji, jest solidnym wyborem zarówno przy rozbudowie linii, jak i modernizacji starszego sprzętu.",
    ],
    applications: [
      "Wielkoseryjna produkcja twardych paczek",
      "Rynek lokalny i eksportowy",
    ],
  },
  "hlp-200": {
    h1: "Maszyna pakująca do papierosów HLP-200",
    metaTitle: "Maszyna pakująca HLP-200, 200 paczek/min",
    metaDescription:
      "Maszyna pakująca do papierosów HLP-200 w Pakistanie – linia dwutłokowa 200 paczek na minutę w formatach od King do Nano. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Dwutłokowa linia do pakowania twardych paczek, 200 paczek na minutę.",
    intro: [
      "HLP-200 to dwutłokowa maszyna pakująca typu hopper, zbudowana do produkcji od małej i średniej po wielkoseryjną. Jest popularnym wyborem wśród producentów w Pakistanie, ponieważ oszczędnie wykorzystuje materiał i pomaga ograniczyć koszty eksploatacji, zachowując przy tym szybkie, równe tempo.",
      "Pracując z wydajnością 200 paczek na minutę i maksymalną przepustowością około 12 000 papierosów, stanowi kluczowy pierwszy element linii pakującej, formując i wykańczając paczkę, zanim trafi ona do owijania i pakowania w kartony. Obsługuje wszystkie popularne formaty paczek papierosów, dzięki czemu łatwo wpasowuje się w większość istniejących linii produkcyjnych.",
      "Maszyna obsługuje szeroki zakres rozmiarów papierosów, w tym King Size, Demi, Slims, Super Slims i Nano, a jej dwutłokowy system utrzymuje wydajny cykl pakowania i jednolite wykończenie. System sterowania PLC zapewnia dokładną i w pełni zautomatyzowaną pracę, dając operatorom jasną kontrolę nad prędkością, wykrywaniem błędów i monitorowaniem.",
      "W zakresie prezentacji paczki oferuje formaty round corner, bevel edge, D-type i square, dzięki czemu marki mogą kształtować opakowanie tak, by wyróżniało się na półce. Zasilana napięciem 220V/380V i zbudowana do niezawodnej, ciągłej pracy, HLP-200 stanowi solidną jednostkę centralną każdej zintegrowanej linii pakującej.",
    ],
    applications: [
      "Wielkoseryjna produkcja twardych paczek",
      "Rdzeń zintegrowanej linii pakującej",
    ],
  },
  "hlp-225": {
    h1: "Maszyna pakująca do papierosów HLP-225",
    metaTitle: "Maszyna pakująca HLP-225, 225 paczek/min",
    metaDescription:
      "Maszyna pakująca do papierosów HLP-225 w Pakistanie – szybka linia dwutłokowa 225 paczek na minutę ze sterowaniem PLC. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Szybka dwutłokowa linia do pakowania twardych paczek, 225 paczek na minutę.",
    intro: [
      "Linia pakująca HLP-225 to prawdziwy krok naprzód w pakowaniu papierosów. Pracując z wydajnością 225 paczek na minutę, ta dwutłokowa maszyna zapewnia wysoką wydajność i przepustowość dla fabryk, które muszą pakować na dużą skalę.",
      "Została zaprojektowana do obsługi szerokiej gamy formatów papierosów, w tym King, Demi, Slims, Super Slims i Nano, dzięki czemu producenci w Pakistanie zyskują elastyczność w zaspokajaniu różnych wymagań rynkowych na jednej maszynie.",
      "Nowoczesny system sterowania PLC poprawia dokładność i automatyzuje proces pakowania, ograniczając ręczną ingerencję i redukując błędy. HLP-225 obsługuje również wiele formatów paczki, w tym round corner, bevel edge, D-type i square, co pozwala markom dostosować opakowanie do różnych preferencji i wymagań konsumentów.",
      "Zbudowana do produkcji wielkoseryjnej, HLP-225 łączy zaawansowane funkcje z solidną konstrukcją, zapewniając niezawodną, stabilną pracę. Zdolność do pakowania z dużą prędkością bez utraty jakości sprawia, że jest cennym atutem dla każdej firmy chcącej zwiększyć produkcję i utrzymać konkurencyjność.",
    ],
    applications: [
      "Wielkoseryjna produkcja twardych paczek",
      "Wielkoseryjne linie pakujące",
    ],
  },
  "sasib-5000": {
    h1: "Maszyna do miękkich paczek SASIB 5000",
    metaTitle: "Maszyna do miękkich paczek SASIB 5000 dla papierosów",
    metaDescription:
      "Maszyna do miękkich paczek SASIB 5000 w Pakistanie – paczki miękkie 100 mm z owijaniem folią aluminiową i etykietą. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Pakowarka miękkich paczek SASIB dla formatu 100 mm z prostymi narożnikami.",
    intro: [
      "SASIB 5000 to wszechstronna maszyna zbudowana do produkcji miękkich paczek papierosów 100 mm. Wykorzystując owijanie folią aluminiową i etykietą wykonywane wokół trzpienia, zapewnia idealne, jednolite paczki o starannie uformowanych, prostych narożnikach.",
      "Ta metoda owijania to nie tylko estetyka – chroni papierosy i utrzymuje integralność każdej paczki, jednocześnie podnosząc walory wizualne gotowego produktu. Dla producentów w Pakistanie, którzy chcą uzyskać premium wykończenie miękkiej paczki, jest to niezawodny, wysokiej jakości wybór.",
      "Sprawdzona i prosta w obsłudze, SASIB 5000 jest dostarczana sprawdzona i skonfigurowana, gotowa do uruchomienia na hali, dzięki czemu można pewnie dodać niezawodne moce produkcyjne miękkich paczek.",
    ],
    applications: ["Produkcja miękkich paczek", "Format 100 mm"],
  },
  "sasib-3000": {
    h1: "Maszyna do miękkich paczek SASIB 3000",
    metaTitle: "Maszyna do miękkich paczek SASIB 3000 dla papierosów",
    metaDescription:
      "Maszyna do miękkich paczek SASIB 3000 w Pakistanie – obsługuje paczki 84 mm i 100 mm z owijaniem folią aluminiową i etykietą. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Pakowarka miękkich paczek SASIB dla formatów 84 mm i 100 mm z prostymi narożnikami.",
    intro: [
      "SASIB 3000 dodaje dodatkową wszechstronność do linii miękkich paczek SASIB dzięki zdolności obsługi zarówno paczek 84 mm, jak i 100 mm. Wykorzystując owijanie folią aluminiową i etykietą wokół trzpienia, zachowuje charakterystyczne wykończenie SASIB – idealne, jednolite paczki o starannie uformowanych, prostych narożnikach.",
      "Ta zdolność obsługi dwóch formatów sprawia, że SASIB 3000 jest cennym atutem dla producentów w Pakistanie, którzy potrzebują elastyczności produkcji, zachowując przy tym wysoki standard prezentacji i ochrony każdej paczki.",
      "Jej systemy sterowania ułatwiają regulacje i konserwację, co pomaga ograniczyć przestoje i utrzymać wysoką ogólną produktywność. Dostarczana sprawdzona i skonfigurowana, gotowa do pracy, to niezawodna linia miękkich paczek dla fabryk, które chcą zarówno jakości, jak i elastyczności formatów.",
    ],
    applications: ["Produkcja miękkich paczek", "Formaty 84 mm i 100 mm"],
  },
  "regular-wrapper-cp1": {
    h1: "Owijarka CP1",
    metaTitle: "Maszyna do owijania paczek papierosów CP-1, 250 szt./min",
    metaDescription:
      "Maszyna do owijania paczek papierosów CP-1 w Pakistanie – owijarka do 250 paczek na minutę. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Szybka owijarka paczek papierosów pracująca do 250 paczek na minutę.",
    intro: [
      "CP-1 to wydajna maszyna do owijania paczek papierosów, zbudowana do obsługi poważnych wymagań produkcyjnych z łatwością. Przy prędkości owijania do 250 paczek na minutę podnosi wydajność i przepustowość linii pakującej dla fabryk w Pakistanie.",
      "Pracuje przy umiarkowanym zapotrzebowaniu na moc 6 KVA i ciśnieniu powietrza 0,05 m³/min, zapewniając dużą wydajność przy zachowaniu efektywności energetycznej. CP-1 zaprojektowano do precyzyjnego, jednolitego owijania, które zmniejsza zużycie materiału i utrzymuje każdą paczkę w rygorystycznym standardzie jakości.",
      "Solidna konstrukcja i niezawodna praca czynią ją godnym zaufania elementem linii wielkoseryjnych, utrzymując płynność procesu i czystość wykończenia. Sprawnie integruje się z istniejącymi liniami, co czyni ją praktycznym, wartościowym dodatkiem dla każdego zakładu chcącego zwiększyć produktywność bez utraty jakości.",
    ],
    applications: ["Owijanie paczek", "Wielkoseryjne linie pakujące"],
  },
  "naked-over-wrapper": {
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, owijarka zewnętrznych paczek papierosów",
    metaDescription:
      "Naked Over Wrapper w Pakistanie – owijarka zewnętrznych paczek papierosów, 25 paczek zewnętrznych na minutę. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Owijarka zewnętrznych paczek, 25 paczek zewnętrznych na minutę.",
    intro: [
      "Naked Over Wrapper to dobrze zaprojektowana maszyna do owijania zewnętrznych paczek papierosów z precyzją i szybkością. Owija 25 paczek zewnętrznych na minutę, co utrzymuje wysoki poziom wydajności linii w fabrykach w Pakistanie.",
      "Pracuje przy zapotrzebowaniu energetycznym 6 KVA i ciśnieniu powietrza 0,05 m³/min, zapewniając niezawodną wydajność bez dużego poboru mocy. Solidna i wydajna, jest wartościowym uzupełnieniem linii produkcji papierosów, podnoszącym jakość opakowania na końcowym etapie.",
    ],
    applications: ["Owijanie paczek zewnętrznych", "Zgrzewanie na końcu linii"],
  },
  "molins-boxer": {
    h1: "Molins Boxer, maszyna do pakowania w kartoniki",
    metaTitle: "Molins Boxer, maszyna do pakowania kartonów papierosów",
    metaDescription:
      "Maszyna do pakowania kartonów papierosów Molins Boxer w Pakistanie – do 20 kartonów na minutę. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Maszyna do pakowania kartonów papierosów, do 20 kartonów na minutę.",
    intro: [
      "Molins Boxer to niezawodna maszyna do pakowania kartonów papierosów, znana z wydajnej pracy i solidnej przepustowości. Przy prędkości pakowania do 20 kartonów na minutę podnosi produktywność linii pakujących papierosy w Pakistanie.",
      "Pracuje przy ciśnieniu powietrza 0,05 m³/min, równoważąc zużycie energii ze stabilną pracą. Zaprojektowana pod kątem niezawodności, Molins Boxer utrzymuje jednolite i precyzyjne pakowanie, co ogranicza przestoje i utrzymuje wysoką jakość produktu.",
      "To sprawia, że jest kluczowym elementem każdej linii produkcyjnej nastawionej na wydajność i stabilną wydajność, przyjmującym owinięte paczki i formującym z nich schludne kartony na końcu linii.",
    ],
    applications: ["Pakowanie w kartony", "Zbieranie na końcu linii"],
  },
  "sasib-boxer": {
    h1: "SASIB Boxer, maszyna do pakowania w kartoniki",
    metaTitle: "SASIB Boxer, maszyna do pakowania kartonów papierosów",
    metaDescription:
      "Maszyna do pakowania kartonów papierosów SASIB Boxer w Pakistanie – do 25 kartonów na minutę. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Maszyna do pakowania kartonów papierosów, do 25 kartonów na minutę.",
    intro: [
      "SASIB Boxer to zaawansowana maszyna do pakowania kartonów papierosów, znana z prędkości i wydajności. Zdolna do pakowania do 25 kartonów na minutę, znacząco zwiększa przepustowość linii produkcyjnej papierosów w Pakistanie.",
      "Pracuje przy zapotrzebowaniu na moc 6 KVA, łącząc siłę z wydajnością, oraz ciśnieniu powietrza 0,1 m³/min, zachowując równowagę między zużyciem energii a wydajnością operacyjną.",
      "Zaprojektowana pod kątem wysoce precyzyjnego, jednolitego pakowania, SASIB Boxer minimalizuje przestoje i usprawnia proces, co czyni ją cennym atutem w środowiskach wielkoseryjnych, gdzie prędkość i precyzja mają znaczenie dla produktywności i jakości produktu.",
    ],
    applications: ["Pakowanie w kartony", "Wielkoseryjne linie pakujące"],
  },
  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – maszyna do produkcji papierosów w Polsce",
    metaTitle: "MK 8 | Maszyna do produkcji papierosów Mark 8 Post 64",
    metaDescription:
      "Maszyna do produkcji papierosów Molins Mark 8 Post 64 w Pakistanie – niezawodna maszyna formująca dla stabilnej produkcji. Odnowiona i wspierana przez Civic Tobacco Machinery.",
    tagline: "Sprawdzona, niezawodna maszyna formująca, na której wciąż polegają fabryki.",
    intro: [
      "Molins Mark 8 Post 64 to sprawdzona, wysokowydajna maszyna do produkcji papierosów, zbudowana zarówno pod kątem jakości, jak i elastyczności. Pracuje ze stabilną prędkością 1800–2000 papierosów na minutę i wyposażona jest w podwójną drukarkę kolorową, dzięki czemu można zadrukować bibułkę dokładnie tak, jak wymaga tego marka, bez zwalniania linii.",
      "Obsługuje szeroki zakres formatów – obwody papierosa od 17 mm do 28,3 mm oraz połączoną długość pręta filtr + tytoń od 65 mm do 110 mm, co obejmuje wszystko od standardowych 84 mm i 100 mm po slimy, super slimy i nano. Nakładka filtra Max Multiroll utrzymuje czyste podawanie filtrów przy pełnej prędkości.",
      "Przy wadze około 3500 kg jest to ciężka, solidna maszyna zbudowana do utrzymania tempa przez długie serie produkcyjne. To połączenie prędkości, elastyczności formatów i niezawodności sprawia, że Mark 8 Post 64 jest rozsądnym wyborem dla fabryk chcących uzyskać silną wydajność z pojedynczej maszyny formującej.",
    ],
    features: [
      "Sprawdzona, długowieczna konstrukcja Molins",
      "Równy pręt i czyste cięcie",
      "Powszechnie dostępne części i wiedza serwisowa",
      "Łatwa konserwacja dla techników",
      "Doskonała wartość jako jednostka odnowiona",
    ],
    applications: ["Podstawowa linia formująca", "Niezawodna maszyna zapasowa"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D z systemem MAX-15",
    metaDescription:
      "Maszyna do produkcji papierosów Molins Mark 8D z MAX-15 w Pakistanie – 3000 na minutę w formatach od King do Nano. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Szybka maszyna formująca Mark 8D z systemem sterowania MAX-15.",
    intro: [
      "Molins Mark 8D z MAX-15 to mocna, elastyczna maszyna do produkcji papierosów, zbudowana pod kątem wymagań nowoczesnej fabryki tytoniowej. Należy do znanej rodziny maszyn formujących Mark 8 i daje polskim producentom niezawodny sposób na zwiększenie produkcji bez utraty jakości.",
      "Pracuje z prędkością do 3000 papierosów na minutę, więc bez trudu utrzymuje tempo na ruchliwej linii produkcyjnej. Równie ważne jest to, że obsługuje szeroki zakres formatów. Niezależnie od tego, czy produkujesz King size, Demi, Slims, Super Slims czy Nano, ta sama maszyna wyprodukuje je wszystkie, co czyni ją praktycznym wyborem dla fabryki obsługującej kilka segmentów jednocześnie.",
      "Maszyna formująca przyjmuje obwody papierosa od 17 mm do 28,3 mm oraz połączoną długość pręta filtr + tytoń od 65 mm do 110 mm, dzięki czemu zachowujesz pełną kontrolę nad rozmiarem i spójność od serii do serii.",
      "Konfiguracja łączy maszynę formującą MK-8D z systemem MAX-15 i jednostką podającą 1117. Razem prowadzą proces sprawnie od podawania tytoniu aż po gotowy pręt, utrzymując stabilność linii, ograniczając przestoje i utrzymując jakość przez całą zmianę. Przy łącznym poborze mocy 17 kW zachowuje równowagę między realną prędkością produkcji a rozsądnymi kosztami eksploatacji.",
      "Mimo wszystkich swoich funkcji maszyna pozostaje kompaktowa. Przy wadze około 5000 kg jest solidna i trwała, a jednocześnie mieści się na istniejącej hali bez większej przebudowy, a jej konstrukcja wytrzymuje długą, ciągłą produkcję. Na co dzień produkuje równe papierosy przy niewielkim odpadzie i umiarkowanej konserwacji, co jest dokładnie tym, czego potrzebuje fabryka starająca się działać oszczędnie, a jednocześnie zaspokajać popyt na różne formaty.",
      "Krótko mówiąc, Mark 8D z MAX-15 zdobywa uznanie dzięki sprawdzonej niezawodności, elastycznemu wsparciu formatów od slimów po nano, wysokiej prędkości produkcji przy zachowaniu dokładności, energooszczędnej pracy i łatwej integracji z automatyczną linią. Niezależnie od tego, czy wymieniasz starszy sprzęt, czy zwiększasz moce, to gotowa na przyszłość maszyna, która wykorzystuje klasyczną inżynierię w nowoczesnej produkcji.",
    ],
    applications: ["Wielkoseryjna produkcja", "Fabryki wieloformatowe"],
  },
  "mark-9-5-lenze-servo-drives": {
    h1: "Molins Mark 9.5 z napędami serwo Lenze",
    metaDescription:
      "Molins Mark 9.5 z napędami serwo Lenze w Pakistanie – do 3500 na minutę ze sterownikiem PLC Siemens i mikrofalową kontrolą wagi. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Szybka linia formująca Mark 9.5 z napędami serwo Lenze.",
    intro: [
      "Molins Mark 9.5 z napędami serwo Lenze jest zbudowany dla producentów, którzy chcą poważnej wydajności bez utraty elastyczności. Produkuje do 3500 papierosów na minutę w formatach standardowych i 3200 na minutę w formatach slim i super slim, więc jedna linia może obsłużyć szeroką gamę produktów przy realnej prędkości produkcji.",
      "Pracuje w zakresie obwodów papierosa od 17 mm do 28,3 mm oraz połączonej długości pręta filtr + tytoń od 65 mm do 110 mm, co daje przestrzeń do zmiany formatów przy zachowaniu spójnego pręta z serii na serię.",
      "Linia łączy trzy jednostki – maszynę formującą MK-9.5, zespół nakładania filtra MAX-S i automatyczny napełniacz tacek HCF80, pobierające kolejno 35 kW, 20 kW i 15 kW. Razem prowadzą proces od formowania po napełnione tacki przy bardzo niewielkiej obsłudze ręcznej pomiędzy etapami.",
      "Sterowanie i dokładność są sercem tej maszyny. Sterownik PLC Siemens płynnie prowadzi sekwencję, system mikrofalowy utrzymuje ścisłą kontrolę wagi pręta, a napędy serwo Lenze zapewniają precyzyjny, stabilny ruch, który utrzymuje wysoką jakość nawet przy pełnej prędkości.",
      "Przy łącznej wadze około 8600 kg jest to ciężka, solidna linia zbudowana do produkcji wielkoseryjnej. Dla fabryki potrzebującej niezawodnej, wielkoseryjnej wydajności z nowoczesnym sterowaniem i łatwym serwisem, Mark 9.5 z napędami serwo Lenze jest mocnym, gotowym na przyszłość wyborem.",
    ],
    applications: ["Wielkoseryjna produkcja", "Fabryki wieloformatowe"],
  },
  "mark-9-5-max-s-tray-filler": {
    h1: "Molins Mark-9.5 z Max S i napełniaczem tacek",
    metaTitle: "Molins Mark-9.5 z Max S i napełniaczem tacek",
    metaDescription:
      "Molins Mark-9.5 z Max S i napełniaczem tacek w Pakistanie – 4500–5000 papierosów na minutę. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Szybka maszyna Mark-9.5 z Max S i przepływowym napełniaczem tacek.",
    intro: [
      "Molins Mark-9.5 z Max S i napełniaczem tacek to wysokiej klasy wybór dla producentów, którzy potrzebują wysokiej prędkości produkcji, starannej integracji filtra i niezawodnych możliwości produkcyjnych w jednej linii. Zaprojektowana pod kątem dużych wolumenów, pracuje z imponującą prędkością 4500–5000 papierosów na minutę, co plasuje ją wśród najbardziej wydajnych systemów dostępnych dla wielkoseryjnych fabryk w Pakistanie.",
      "Sercem układu jest maszyna formująca MK-9.5, rozwinięcie sprawdzonej serii Mark 9, utrzymująca wysoką wydajność przy zachowaniu precyzji i jednorodności. Obsługuje obwody papierosa od 17 mm do 28,3 mm oraz połączoną długość pręta filtr + tytoń od 65 mm do 110 mm, dzięki czemu można przechodzić między King size, Slims, Demi i innymi formatami bez utraty jakości pręta.",
      "Maszyna formująca współpracuje z zespołem nakładania filtra Max-S, który dokładnie i powtarzalnie łączy filtr z prętem tytoniowym. Pracując poprzez przepływowy napełniacz tacek, zwiększa przepustowość, utrzymując niski poziom odpadów i błędnego wyrównania, dzięki czemu integralność filtra pozostaje spójna w każdym cyklu produkcyjnym.",
      "Domyślny format 84 mm utrzymuje maszynę w zgodzie z globalnie przyjętymi wymiarami papierosów, co czyni ją praktycznym rozwiązaniem zarówno dla dostaw lokalnych, jak i produkcji eksportowej. Niezależnie od tego, czy prowadzisz własną markę, czy realizujesz duże kontrakty, płynnie przechodzi między partiami i łatwo dostosowuje się do zmieniających się zamówień.",
      "Przy wadze około 7800 kg jest to ciężka, stabilna linia zbudowana do pracy ciągłej i długiej żywotności. Dla fabryki chcącej się rozwijać przy zachowaniu jakości i niskich przestojach, Mark-9.5 z Max S i napełniaczem tacek łączy prędkość, elastyczność i niezawodność potrzebne na hali – od sprawdzonego formowania i precyzyjnego nakładania filtra po usprawnione podawanie przepływowe i wytrzymałą, solidną ramę.",
    ],
    applications: ["Wielkoseryjna produkcja", "Produkcja gotowa na eksport"],
  },
  "mark-9-max-s": {
    h1: "Molins MK-9 z Max S",
    metaTitle: "Molins MK-9 z Max S",
    metaDescription:
      "Molins MK-9 z Max S w Pakistanie – 4500–5000 papierosów na minutę z przepływowym napełniaczem tacek. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Szybka maszyna MK-9 z Max S i przepływowym napełniaczem tacek.",
    intro: [
      "Molins MK-9 z Max S to kolejna wysoce wydajna maszyna do produkcji papierosów, zbudowana z myślą o poważnej produkcji, pracująca z prędkością 4500–5000 papierosów na minutę. To niezawodny wybór dla fabryk w Pakistanie, które chcą uzyskać silną, stabilną wydajność z jednej linii.",
      "Maszyna formująca MK-9 w sercu układu utrzymuje precyzję i jednorodność produkcji zmiana po zmianie. Pracuje w zakresie obwodów papierosa od 17 mm do 28,3 mm oraz połączonej długości pręta filtr + tytoń od 65 mm do 110 mm, dając realną elastyczność przy zmianie formatów bez utraty jakości pręta.",
      "Wyposażona jest w zespół nakładania filtra Max-S i przepływowy napełniacz tacek, które przyspieszają i uwiarygadniają etap nakładania filtra, jednocześnie utrzymując niski poziom odpadów i błędnego wyrównania. Domyślny format 84 mm utrzymuje ją w zgodzie z powszechnie przyjętymi wymiarami papierosów, dzięki czemu z łatwością wpasowuje się w większość planów produkcyjnych.",
      "Przy wadze około 7800 kg MK-9 to ciężka, stabilna maszyna zbudowana do pracy ciągłej i długiej żywotności. Dla fabryki zwiększającej wielkoseryjną produkcję przy zachowaniu jakości, jest solidnym, niezawodnym dodatkiem do hali.",
    ],
    applications: ["Wielkoseryjna produkcja", "Główna linia formująca"],
  },
  "protos-70": {
    h1: "Protos 70",
    metaTitle: "Maszyna do produkcji papierosów Hauni Protos 70",
    metaDescription:
      "Maszyna do produkcji papierosów Hauni Protos 70 w Pakistanie – do 7000 na minutę ze sterowaniem IPC Siemens lub Beckhoff. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Szybka linia formująca Protos 70, do 7000 papierosów na minutę.",
    intro: [
      "Hauni Protos 70 to zaawansowana maszyna do produkcji papierosów zbudowana, by spełniać najwyższe standardy wydajności produkcyjnej i precyzji. Pracuje z imponującą prędkością 7000 papierosów na minutę w formatach standardowych i 6000 na minutę w formatach slim i super slim, dając fabrykom w Pakistanie realną prędkość i elastyczność z jednej linii.",
      "Obsługuje obwody papierosa od 17 mm do 28,3 mm oraz połączoną długość pręta filtr + tytoń od 65 mm do 110 mm, dzięki czemu można przechodzić między formatami przy zachowaniu spójnego pręta z serii na serię.",
      "System sterowania IPC Siemens lub IPC Beckhoff utrzymuje sekwencję zautomatyzowaną, płynną i niezawodną, a mikrofalowy system kontroli wagi utrzymuje precyzyjną wagę każdego papierosa dla stałej jednorodności produktu. Linia łączy maszynę formującą pręt S7000, nakładkę końcówki filtra M8000 i automatyczny napełniacz tacek F80, z których każdy sprawnie obsługuje swój etap procesu.",
      "Przy mocy 50 kW dla S7000, 20 kW dla M8000 i 15 kW dla F80, Protos 70 to mocna, wydajna linia. Przy łącznej wadze około 10 800 kg jest ciężka i stabilna, zbudowana do pracy ciągłej i długiej żywotności, co czyni ją idealnym wyborem do wielkoseryjnej produkcji papierosów.",
    ],
    applications: ["Wielkoseryjna produkcja", "Produkcja na dużą skalę"],
  },
  "protos-80-er": {
    h1: "Protos 80 ER",
    metaTitle: "Maszyna do produkcji papierosów Hauni Protos 80 ER",
    metaDescription:
      "Maszyna do produkcji papierosów Hauni Protos 80 ER w Pakistanie – do 8000 na minutę ze sterowaniem IPC Siemens lub Beckhoff. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Szybka linia formująca Protos 80 ER, do 8000 papierosów na minutę.",
    intro: [
      "Protos 80 ER to wysokowydajna maszyna do produkcji papierosów, zaprojektowana dla producentów, którzy chcą maksymalnej wydajności, precyzji i produkcji. Zbudowana przez Hauni, seria Protos 80 znana jest z niezawodności i zaawansowanej automatyzacji, a niezależnie od tego, czy produkujesz papierosy standardowe czy slim, zapewnia dużą jednorodność i produktywność, co czyni ją zaufanym wyborem dla wielkoseryjnych linii w Pakistanie.",
      "Wydajność to miejsce, w którym ta maszyna naprawdę się wyróżnia. Produkuje do 8000 papierosów na minutę w formatach standardowych i 7000 na minutę w formatach slim i super slim. Przyjmuje obwody papierosa od 17 mm do 28,3 mm oraz połączoną długość pręta filtr + tytoń od 65 mm do 110 mm, dzięki czemu pozostaje elastyczna wobec różnych typów papierosów i wymagań rynkowych. Od king size przez slim po formaty niszowe, Protos 80 ER dostosowuje się do sposobu produkcji.",
      "Dla precyzji i czasu pracy uruchamia zaawansowany system sterowania PLC na IPC Siemens lub IPC Beckhoff, utrzymując cały cykl płynny i zautomatyzowany. Monitorowanie w czasie rzeczywistym i szybka reakcja systemu ograniczają błędy ludzkie i utrzymują linię w ruchu, podczas gdy wbudowany mikrofalowy system kontroli wagi utrzymuje spójną wagę papierosa na każdej sztuce dla ścisłej kontroli jakości.",
      "Linia składa się z trzech mocnych jednostek pracujących razem – maszyny formującej pręt S7000 przy 50 kW, nakładki końcówki filtra M8000 przy 20 kW i automatycznego napełniacza tacek F80 przy 15 kW. Znana z niezawodności i wykorzystywana w fabrykach papierosów na całym świecie, seria Protos 80 łączy efektywne zużycie energii, niskie straty i precyzyjną inżynierię, by utrzymać niskie koszty eksploatacji przy wysokich standardach produktu. Przy łącznej wadze około 10 800 kg jest to ciężka, stabilna linia zbudowana do ciągłej, wielkoseryjnej produkcji.",
    ],
    applications: ["Wielkoseryjna produkcja", "Produkcja na dużą skalę"],
  },
  "kdf-1": {
    h1: "Maszyna do produkcji filtrów papierosowych Hauni KDF-1",
    metaTitle: "Maszyna do produkcji filtrów Hauni KDF-1",
    metaDescription:
      "Maszyna do produkcji filtrów Hauni KDF-1 w Pakistanie – filtry 120 mm ze sterownikiem PLC Siemens/Beckhoff i laserową kontrolą obwodu. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Linia do produkcji filtrów Hauni KDF-1 z laserową kontrolą obwodu.",
    intro: [
      "Hauni KDF-1 to zaufana, mocna linia do produkcji filtrów o silnej reputacji pod względem wydajności, precyzji i trwałości w produkcji papierosów. Zbudowana pod kątem wymagań wielkoseryjnej produkcji, KDF-1 sprawdza się u producentów w Pakistanie, którzy stawiają na pierwszym miejscu jednorodność, prędkość i jakość.",
      "Zbudowana do wydajnej pracy, oferuje solidną wydajność produkcyjną dla filtrów 120 mm, co dobrze sprawdza się zarówno w standardowych, jak i niestandardowych formatach papierosów. Obsługuje obwody filtra od 16,8 mm do 28,1 mm oraz długości filtra od 64 mm do 150 mm, dzięki czemu można produkować szeroki zakres rozmiarów i typów filtrów bez ciągłych zmian maszyny. Od filtrów King Size po Slims i konstrukcje specjalistyczne, KDF-1 obsługuje je wszystkie wydajnie.",
      "Pracuje na zaawansowanym systemie sterowania PLC dostępnym w konfiguracjach Siemens lub Beckhoff, dając intuicyjne sterowanie, diagnostykę w czasie rzeczywistym i niezawodną automatyzację, która utrzymuje stałą jakość filtra przez całą serię. Systemy serwo Lenze lub Beckhoff dodatkowo zwiększają stabilność i utrzymują płynny, precyzyjny ruch.",
      "Wyróżniającą cechą jest laserowy system kontroli obwodu, który mierzy obwód każdego filtra z dużą precyzją, ograniczając odchylenia i utrzymując jednorodność każdej partii. Ten poziom dokładności ma znaczenie dla utrzymania standardów jakości marki w produktach premium.",
      "Mimo swojej wydajności, KDF-1 utrzymuje zrównoważony profil energetyczny na poziomie łącznie 40 kW, co czyni ją efektywną w długoterminowej eksploatacji. Jej solidna, dobrze zaprojektowana konstrukcja zapewnia długą żywotność, a modułowa budowa i kompatybilność z różnymi typami papierosów sprawiają, że dobrze sprawdza się zarówno w mniejszej, jak i wielkoseryjnej produkcji filtrów, niezależnie od tego, czy zwiększasz moce, czy modernizujesz starszy sprzęt.",
    ],
    applications: ["Wielkoseryjna produkcja filtrów", "Filtry standardowe i specjalistyczne"],
  },
  "kdf-2": {
    h1: "Maszyna do produkcji filtrów papierosowych Hauni KDF-2",
    metaTitle: "Szybka maszyna do produkcji filtrów Hauni KDF-2",
    metaDescription:
      "Maszyna do produkcji filtrów Hauni KDF-2 w Pakistanie – 400 metrów kabla octanowego na minutę ze sterownikiem PLC Siemens/Beckhoff. Dostarczana przez Civic Tobacco Machinery.",
    tagline: "Szybka linia do produkcji filtrów Hauni KDF-2, 400 metrów na minutę.",
    intro: [
      "Hauni KDF-2 to światowej klasy maszyna do produkcji filtrów, zbudowana pod kątem wysokowydajnej, wielkoseryjnej produkcji filtrów papierosowych. Znana z jakości inżynierii i zaawansowanej automatyzacji, KDF-2 jest zaufanym wyborem dla wielkoseryjnych producentów w Pakistanie, którzy potrzebują zarówno precyzji, jak i produktywności.",
      "Pracuje w imponującym tempie, przetwarzając 400 metrów kabla octanowego na minutę, co dobrze sprawdza się w wymaganiach nowoczesnych linii produkcyjnych. Tej prędkości towarzyszy prawdziwa wszechstronność: obsługuje obwody filtra od 16,8 mm do 28,1 mm i długości filtra od 64 mm do 150 mm, obejmując wszystko od standardowych filtrów King Size po bardziej specjalistyczne formaty, z zachowaniem jednorodności, jakości i minimalnych przestojów.",
      "Tym, co wyróżnia KDF-2, jest jej automatyzacja. System sterowania PLC, dostępny w konfiguracjach Siemens lub Beckhoff, daje pełną kontrolę i monitorowanie w czasie rzeczywistym, podczas gdy wysokowydajny system serwo Lenze lub Beckhoff utrzymuje dokładny ruch i niezawodną pracę. To ogranicza margines błędu i utrzymuje jednorodność jakości filtra, dzięki czemu maszyna sprawnie integruje się jako niezawodny fundament ciągłej, wielkoseryjnej produkcji.",
      "Zbudowana pod kątem trwałości, KDF-2 współpracuje z rozwijaczem kabla i automatycznym napełniaczem tacek HCF80, usprawniając przepływ pracy i ograniczając obsługę ręczną. Pobiera 40 kW dla głównej jednostki KDF-2 i 15 kW dla napełniacza HCF80, łącząc efektywność energetyczną z dużą wydajnością.",
      "Mimo wszystkich swoich możliwości, KDF-2 zachowuje kontrolowane wymiary przy wadze około 6500 kg, a jej solidna konstrukcja zapewnia długoterminową trwałość przy wymagających harmonogramach produkcji. Niezależnie od tego, czy uruchamiasz nowy zakład, czy modernizujesz istniejący sprzęt, to rozsądna inwestycja, która sprawnie wpasowuje się w nowoczesne systemy produkcyjne, zapewniając doskonałą jakość filtra.",
    ],
    applications: ["Wielkoseryjna produkcja filtrów", "Produkcja na dużą skalę"],
  },
  "molins-pm-5": {
    h1: "Maszyna do filtrów Molins PM-5",
    metaTitle: "Maszyna do produkcji filtrów papierosowych Molins PM-5",
    metaDescription:
      "Maszyna do produkcji filtrów Molins PM-5 w Pakistanie – wysokowydajna maszyna produkująca 4000 filtrów na minutę. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Wysokowydajna maszyna do filtrów Molins, 4000 filtrów na minutę.",
    intro: [
      "Molins PM-5 to wysokowydajna maszyna do produkcji filtrów papierosowych, zbudowana pod kątem wymagań wielkoseryjnej produkcji. Przy wydajności 4000 filtrów na minutę jest mocnym przykładem wydajności i precyzji w produkcji filtrów, niezawodnie sprawdzającym się w ruchliwych fabrykach w Pakistanie.",
      "Oferuje przydatną elastyczność w zakresie rozmiaru filtrów, ze średnicą pręta filtra 7,5–7,8 mm i długością pręta filtra od 108 do 126 mm, dzięki czemu może obsłużyć różne specyfikacje filtrów bez trudności.",
      "Przy wadze około 2000 kg PM-5 ma solidną konstrukcję zapewniającą trwałość i stabilną pracę przez długi czas. Wyprodukowana przez Molins, znaną markę w branży, łączy sprawdzoną inżynierię z wysoką prędkością produkcji, co czyni ją niezbędnym atutem dla producentów, którzy chcą jakościowych filtrów przy maksymalizacji przepustowości.",
    ],
    applications: ["Wielkoseryjna produkcja filtrów", "Linie oparte na Molins"],
  },
  "hollow-tube-maker": {
    h1: "Maszyna do produkcji rurek pustych",
    metaTitle: "Maszyna do produkcji rurek pustych, maszyna do filtrów papierosowych",
    metaDescription:
      "Maszyna do produkcji rurek pustych w Pakistanie – 2100 na minutę z zespołem formującym do specjalistycznych rurek filtracyjnych. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Szybka maszyna do produkcji rurek pustych, 2100 papierosów na minutę.",
    intro: [
      "Maszyna do produkcji rurek pustych wyróżnia się wydajnością produkcyjną i szybką pracą. Zdolna do produkcji 2100 papierosów na minutę, zapewnia dużą wydajność i stałą produkcję. Zakres prędkości pręta od 140 do 175 metrów na minutę wraz z prędkością cięcia do 2500 prętów na minutę podkreśla, jak dobrze sprawdza się w wielkoseryjnej produkcji dla fabryk w Pakistanie.",
      "Przy wadze 3050 kg maszyna ma solidną konstrukcję zapewniającą trwałość i długoterminową niezawodność. Zespół formujący dodaje kolejne 1800 kg i pracuje w zgodzie z maszyną dla precyzyjnej, wydajnej produkcji rurek. Łączny pobór mocy wynosi 14 kW, podzielony na 6,5 kW dla maszyny i 7,5 kW dla zespołu formującego, co daje dobrą równowagę między wydajnością a zużyciem energii.",
      "Zaprojektowana pod kątem wielkoskalowej produkcji, maszyna do produkcji rurek pustych wykorzystuje aktualną technologię do produkcji wysokiej jakości rurek. Jej szybka praca i solidna inżynieria czynią ją cennym atutem dla producentów, którzy muszą sprostać dużemu popytowi, zachowując doskonałe standardy produkcji.",
    ],
    applications: ["Wielkoseryjna produkcja filtrów", "Specjalistyczne rurki filtracyjne"],
  },
  "tobacco-feeder": {
    h1: "Podajnik tytoniu",
    metaTitle: "Podajnik tytoniu do maszyn produkujących papierosy",
    metaDescription:
      "Podajnik tytoniu w Pakistanie – stały, równy przepływ tytoniu do maszyn formujących Mark 8 i Mark 9. Dostarczany i serwisowany przez Civic Tobacco Machinery.",
    tagline: "Zapewnia stały, równy przepływ tytoniu do maszyn formujących Mark 8 i Mark 9.",
    intro: [
      "Podajnik tytoniu to kluczowa maszyna wejściowa dla fabryki papierosów. Podaje tytoń w sposób ciągły i równomierny do maszyn formujących, warstwując go starannie, tak by był przygotowany dokładnie tak, jak wymaga tego produkcja.",
      "Jest kompatybilny z maszynami Mark 8 i Mark 9, dzięki czemu łatwo wpasowuje się w istniejącą linię. Regulowane ustawienia objętości pozwalają precyzyjnie kontrolować przepływ tytoniu, co podnosi wydajność produkcji, a automatyzacja ogranicza obsługę ręczną, usprawnia działanie i utrzymuje wysoką produktywność.",
    ],
    applications: ["Zasilanie maszyny formującej", "Stabilna produkcja pręta"],
  },
  "cigarette-reclaimer": {
    h1: "Odzyskiwacz papierosów",
    metaTitle: "Odzyskiwacz papierosów, maszyna do odzysku tytoniu",
    metaDescription:
      "Odzyskiwacz papierosów w Pakistanie – odzyskuje tytoń z odpadów produkcyjnych przy 120 kg/h i 99,8% skuteczności. Dostarczany przez Civic Tobacco Machinery.",
    tagline: "Odzyskuje tytoń z odpadów przy 120 kg/h i 99,8% skuteczności.",
    intro: [
      "Odzyskiwacz papierosów to doskonała maszyna do odzysku tytoniu z odpadów produkcji papierosów. Oddziela tytoń nadający się do ponownego użycia od materiałów odpadowych z bardzo małymi stratami, dzięki czemu tytoń, który w innym przypadku trafiłby na wyrzucenie, wraca do produkcji.",
      "Przy maksymalnej wydajności odzyskuje 120 kg na godzinę i pracuje z imponującą skutecznością 99,8%, dając najwyższe możliwe wykorzystanie. Przy współczynniku odzysku 90% zapewnia realną przewagę w ograniczaniu odpadów i podnoszeniu ogólnej wydajności produkcji.",
      "Jest przyjazna użytkownikowi i łatwa do zainstalowania w linii produkcyjnej, co czyni ją praktycznym, oszczędnym dodatkiem dla fabryk w Pakistanie, które chcą maksymalnie wykorzystać każdą partię.",
    ],
    applications: ["Ograniczanie odpadów", "Odzysk tytoniu"],
  },
  "tobacco-cutters": {
    h1: "Krajalnica do tytoniu Hauni KT-400",
    metaTitle: "Krajalnica do tytoniu Hauni KT-400",
    metaDescription:
      "Krajalnica do tytoniu Hauni KT-400 w Pakistanie – krajalnica pięcionożowa z regulacją rozmiaru cięcia PLC. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Krajalnica do tytoniu Hauni KT-400 z pięcioma nożami i regulacją rozmiaru cięcia PLC.",
    intro: [
      "Krajalnica do tytoniu Hauni KT-400 to precyzyjnie zaprojektowana maszyna, która odgrywa kluczową rolę w utrzymaniu spójnej jakości cięcia w przetwarzaniu tytoniu. Posiada pięć noży, które zapewniają jednolite cięcia i poprawiają ogólną jakość mieszanki tytoniowej, a cylindry pneumatyczne napędzają szczękę dla płynnego, wydajnego cięcia przy mniejszych przestojach i konserwacji.",
      "KT-400 wykorzystuje również zaawansowany system napędu PLC na mosiężnej listwie gnącej, który precyzyjnie reguluje rozmiar cięcia. Dzięki temu każda partia jest jednolita, a rozmiar cięcia można dostosować do konkretnych wymagań, co dodaje realną wszechstronność. Dzięki precyzji i niezawodności, KT-400 jest ważnym atutem dla każdego zakładu przetwarzania tytoniu w Pakistanie, dążącego do najwyższej jakości i wydajności.",
    ],
    applications: ["Przetwarzanie pierwotne", "Przygotowanie krajanki"],
  },
  "tobacco-stem-flattener": {
    h1: "Spłaszczarka żył tytoniu",
    metaTitle: "Spłaszczarka żył tytoniu, maszyna do przetwarzania pierwotnego",
    metaDescription:
      "Spłaszczarka żył tytoniu w Pakistanie – spłaszcza żyły dla jednolitego mieszania i mniejszego marnowania liści. Dostarczana i serwisowana przez Civic Tobacco Machinery.",
    tagline: "Spłaszcza żyły tytoniu dla jednolitego mieszania i mniejszego marnowania liści.",
    intro: [
      "Spłaszczarka żył tytoniu odgrywa kluczową rolę w optymalizacji procesu przetwarzania tytoniu. Spłaszczając żyły tytoniu, przygotowuje je do jednolitego mieszania z liśćmi, co poprawia łatwość przetwarzania i zmniejsza ryzyko niejednorodności w gotowym produkcie.",
      "Efektywnie spłaszczając żyły, minimalizuje również marnowanie liści, czyniąc cały proces bardziej ekonomicznym i zrównoważonym. Rezultatem jest jednolity, wysokiej jakości produkt spełniający rygorystyczne standardy branżowe, co czyni spłaszczarkę żył cennym atutem dla każdego zakładu przetwarzania tytoniu w Pakistanie.",
    ],
    applications: ["Przetwarzanie pierwotne", "Poprawa wydajności"],
  },
};

/* --------------------------- Bulgarian content ---------------------------- */

const bg: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "Опаковъчна машина за цигари HLP-180",
    metaTitle: "Опаковъчна машина HLP-180, 180 пакета/мин",
    metaDescription:
      "Опаковъчна машина за цигари HLP-180 в Пакистан – 180 пакета в минута във формати от King до Nano с PLC управление. Доставена от Civic Tobacco Machinery.",
    tagline: "Високоскоростна линия за твърди пакети, 180 пакета в минута.",
    intro: [
      "HLP-180 е мощна машина от ново поколение, изградена за високоскоростно опаковане на цигари. Известна с постоянна производителност и надежден добив, опаковъчната машина HLP-180 подхожда на производители, които искат да оптимизират процеса си на опаковане, без да жертват качество или прецизност.",
      "При добив от 180 пакета в минута тя изпълнява ефективни, равномерни цикли на опаковане благодарение на своя механизъм с единичен бутален елемент, запазвайки перфектно подравняване, увиване и запечатване на всеки пакет. Това позволява на фабриките в Пакистан да отговарят на голямо търсене, като запазват чисто и повторяемо изпълнение.",
      "Проектирана е да обработва широка гама размери цигари, включително King Size, Demi, Slims, Super Slims и Nano. Тази гъвкавост означава, че можете да обслужвате различни предпочитания на потребителите на местния и износния пазар, от традиционни формати до нишови продукти, на една и съща машина.",
      "Система за PLC управление поддържа точна и напълно автоматизирана работа, така че всеки пакет излиза еднакъв, добре увит и готов за продажба. Удобният интерфейс дава на операторите пълен контрол над скоростта, откриването на грешки и мониторинга на производството, което намалява престоите и повишава общата ефективност.",
      "Това, което наистина отличава HLP-180, е гъвкавостта в формата на пакета. Тя поддържа формати round corner, bevel edge, D-type и square, така че марките могат да разграничат опаковката си, да се откроят на рафта и да следват променящите се пазарни тенденции. Изградена за непрекъснато, мащабно производство, тя е силен избор както при разширяване на линия, така и при обновяване на по-старо оборудване.",
    ],
    applications: ["Мащабно производство на твърди пакети", "Местни и износни пазари"],
  },
  "hlp-200": {
    h1: "Опаковъчна машина за цигари HLP-200",
    metaTitle: "Опаковъчна машина HLP-200, 200 пакета/мин",
    metaDescription:
      "Опаковъчна машина за цигари HLP-200 в Пакистан – линия с два бутални елемента, 200 пакета в минута във формати от King до Nano. Доставена от Civic Tobacco Machinery.",
    tagline: "Линия за твърди пакети с два бутални елемента, 200 пакета в минута.",
    intro: [
      "HLP-200 е опаковъчна машина тип hopper с два бутални елемента, изградена за производство от малък и среден до голям мащаб. Тя е предпочитан избор сред производителите в Пакистан, защото използва внимателно материала и помага да се задържат ниски експлоатационните разходи, като същевременно поддържа бързо, равномерно темпо.",
      "Работейки с 200 пакета в минута и максимален капацитет от около 12 000 цигари, тя е ключовият първи модул на опаковъчната линия, оформящ и завършващ пакета, преди той да премине към увиване и кутиране. Поддържа всички разпространени формати пакети цигари, така че се вписва лесно в повечето производствени линии.",
      "Машината обработва широка гама размери цигари, включително King Size, Demi, Slims, Super Slims и Nano, а системата ѝ с два бутални елемента поддържа ефективен цикъл на опаковане и постоянно изпълнение. Система за PLC управление поддържа точна и напълно автоматизирана работа, давайки на операторите ясен контрол над скоростта, откриването на грешки и мониторинга.",
      "По отношение на представянето на пакета предлага формати round corner, bevel edge, D-type и square, така че марките могат да оформят опаковката си, за да се открояват на рафта. Работеща с 220V/380V захранване и изградена за надежден, непрекъснат добив, HLP-200 е солиден основен модул за всяка интегрирана опаковъчна линия.",
    ],
    applications: ["Мащабно производство на твърди пакети", "Ядро на интегрирана опаковъчна линия"],
  },
  "hlp-225": {
    h1: "Опаковъчна машина за цигари HLP-225",
    metaTitle: "Опаковъчна машина HLP-225, 225 пакета/мин",
    metaDescription:
      "Опаковъчна машина за цигари HLP-225 в Пакистан – високоскоростна линия с два бутални елемента, 225 пакета в минута с PLC управление. Доставена от Civic Tobacco Machinery.",
    tagline: "Високоскоростна линия за твърди пакети с два бутални елемента, 225 пакета в минута.",
    intro: [
      "Опаковъчната линия HLP-225 е истинска стъпка напред в опаковането на цигари. Работейки с 225 пакета в минута, тази машина с два бутални елемента осигурява висока ефективност и капацитет за фабрики, които трябва да опаковат мащабно.",
      "Проектирана е да обработва широка гама размери цигари, включително King, Demi, Slims, Super Slims и Nano, така че производителите в Пакистан получават гъвкавостта да отговарят на различни пазарни изисквания с една машина.",
      "Модерна система за PLC управление подобрява точността и автоматизира процеса на опаковане, намалявайки ръчната намеса и грешките. HLP-225 поддържа също множество формати на пакета, включително round corner, bevel edge, D-type и square, което позволява на марките да съобразят опаковката си с различни потребителски предпочитания и изисквания.",
      "Изградена за мащабно производство, HLP-225 съчетава напреднали функции със солидна конструкция за надеждна, постоянна работа. Способността ѝ да опакова с висока скорост, без да жертва качество, я прави ценен актив за всяка дейност, целяща да увеличи добива и да остане конкурентоспособна.",
    ],
    applications: ["Мащабно производство на твърди пакети", "Мащабни опаковъчни линии"],
  },
  "sasib-5000": {
    h1: "Машина за меки пакети SASIB 5000",
    metaTitle: "Машина за меки цигарени пакети SASIB 5000",
    metaDescription:
      "Машина за меки цигарени пакети SASIB 5000 в Пакистан – меки пакети 100 мм с увиване с алуфолио и етикет. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "SASIB опаковчик за меки пакети 100 мм с изравнени ъгли.",
    intro: [
      "SASIB 5000 е универсална машина, изградена за производство на меки пакети цигари от 100 мм. Използвайки увиване с алуфолио и етикет, изпълнявано около арбор, тя произвежда перфектни, постоянни пакети с прецизно изравнени ъгли.",
      "Този метод на увиване не само изглежда добре — той защитава цигарите и запазва целостта на всеки пакет, като същевременно повишава визуалната привлекателност на готовия продукт. За производителите в Пакистан, които искат премиум изпълнение на мек пакет, той е надежден, висококачествен избор.",
      "Утвърдена и лесна за работа, SASIB 5000 се доставя проверена и настроена, готова за производствения под, така че можете уверено да добавите надежден капацитет за меки пакети.",
    ],
    applications: ["Производство на меки пакети", "Формат 100 мм"],
  },
  "sasib-3000": {
    h1: "Машина за меки пакети SASIB 3000",
    metaTitle: "Машина за меки цигарени пакети SASIB 3000",
    metaDescription:
      "Машина за меки цигарени пакети SASIB 3000 в Пакистан – обработва пакети 84 мм и 100 мм с увиване с алуфолио и етикет. Доставена от Civic Tobacco Machinery.",
    tagline: "SASIB опаковчик за меки пакети 84 мм и 100 мм с изравнени ъгли.",
    intro: [
      "SASIB 3000 добавя допълнителна гъвкавост към линията за меки пакети SASIB благодарение на способността си да обработва както 84 мм, така и 100 мм пакети цигари. Използвайки увиване с алуфолио и етикет около арбор, тя запазва характерното изпълнение на SASIB — перфектни, постоянни пакети с прецизно изравнени ъгли.",
      "Тази двойна способност прави SASIB 3000 ценен актив за производителите в Пакистан, които се нуждаят от гъвкавост в производството, като същевременно поддържат висок стандарт на представяне и защита на всеки пакет.",
      "Нейните системи за управление правят настройките и поддръжката лесни, което помага да се намалят престоите и да се поддържа висока обща продуктивност. Доставена проверена и настроена, готова за работа, тя е надеждна линия за меки пакети за фабрики, които искат както качество, така и гъвкавост на формата.",
    ],
    applications: ["Производство на меки пакети", "Формати 84 мм и 100 мм"],
  },
  "regular-wrapper-cp1": {
    h1: "Увивна машина CP1",
    metaTitle: "Увивна машина за цигарени пакети CP-1, 250 пакета/мин",
    metaDescription:
      "Увивна машина за цигарени пакети CP-1 в Пакистан – до 250 пакета в минута. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Високоскоростен обвиватай на цигарени пакети, до 250 пакета в минута.",
    intro: [
      "CP-1 е високопроизводителна машина за увиване на цигарени пакети, изградена да се справя лесно със сериозни производствени изисквания. При скорост на увиване до 250 пакета в минута тя повишава ефективността и капацитета на опаковъчната линия за фабрики в Пакистан.",
      "Работи с умерено изискване за мощност от 6 kVA и нужда от въздушно налягане от 0,05 m³/мин, така че осигурява силна производителност, като остава енергийно ефективна. CP-1 е проектирана за прецизно, постоянно увиване, което намалява отпадъка от материал и поддържа всеки пакет в строг стандарт за качество.",
      "Здравата конструкция и надеждната работа я правят сигурен актив за мащабни линии, поддържайки процеса гладък, а изхода чист. Освен това се интегрира спретнато в съществуващи линии, което я прави практично, ценно допълнение за всяко предприятие, което иска да повиши продуктивността, без да губи качество.",
    ],
    applications: ["Увиване на пакети", "Мащабни опаковъчни линии"],
  },
  "naked-over-wrapper": {
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, обвиватай на външни цигарени пакети",
    metaDescription:
      "Naked Over Wrapper в Пакистан – обвиватай на външни цигарени пакети, 25 външни пакета в минута. Доставен и обслужван от Civic Tobacco Machinery.",
    tagline: "Обвиватай на външни пакети, 25 външни пакета в минута.",
    intro: [
      "Naked Over Wrapper е добре проектирана машина за увиване на външни цигарени пакети с прецизност и скорост. Тя увива 25 външни пакета в минута, поддържайки високо ниво на ефективност на линията за фабрики в Пакистан.",
      "Работи с енергийна нужда от 6 kVA и въздушно налягане от 0,05 m³/мин, осигурявайки надеждна работна производителност без голямо потребление на мощност. Здрава и ефективна, тя е разумно допълнение към линията за производство на цигари, повишавайки качеството на опаковката в крайния етап.",
    ],
    applications: ["Увиване на външни пакети", "Запечатване в края на линията"],
  },
  "molins-boxer": {
    h1: "Molins Boxer, машина за кутиране",
    metaTitle: "Molins Boxer, машина за кутиране на цигарени пакети",
    metaDescription:
      "Машина за кутиране на цигарени пакети Molins Boxer в Пакистан – до 20 кутии в минута. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Машина за кутиране на цигарени пакети, до 20 кутии в минута.",
    intro: [
      "Molins Boxer е надеждна машина за кутиране на цигарени пакети, известна с ефективна работа и солиден капацитет. При скорост на опаковане до 20 кутии в минута тя повишава продуктивността на линиите за опаковане на цигари в Пакистан.",
      "Работи с въздушно налягане от 0,05 m³/мин, балансирайки потреблението на енергия със стабилна работа. Проектирана за надеждност, Molins Boxer поддържа опаковането постоянно и прецизно, което намалява престоите и поддържа високо качество на продукта.",
      "Това я прави критичен елемент от всяка производствена линия, фокусирана върху ефективност и постоянен добив, приемайки увити пакети и оформяйки ги в спретнати кашони в края на линията.",
    ],
    applications: ["Кутиране на кашони", "Събиране в края на линията"],
  },
  "sasib-boxer": {
    h1: "SASIB Boxer, машина за кутиране",
    metaTitle: "SASIB Boxer, машина за кутиране на цигарени пакети",
    metaDescription:
      "Машина за кутиране на цигарени пакети SASIB Boxer в Пакистан – до 25 кутии в минута. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Машина за кутиране на цигарени пакети, до 25 кутии в минута.",
    intro: [
      "SASIB Boxer е усъвършенствана машина за кутиране на цигарени пакети, известна със скоростта и ефективността си. Способна да опакова до 25 кутии в минута, тя дава реален тласък на капацитета на линия за производство на цигари в Пакистан.",
      "Работи с изискване за мощност от 6 kVA, съчетавайки сила с производителност, и нужда от въздушно налягане от 0,1 m³/мин, поддържайки баланс между потреблението на енергия и оперативната ефективност.",
      "Проектирана за много точно, постоянно опаковане, SASIB Boxer минимизира престоите и рационализира процеса, което я прави ценен актив за мащабни среди, където скоростта и прецизността имат значение за продуктивността и качеството на продукта.",
    ],
    applications: ["Кутиране на кашони", "Мащабни опаковъчни линии"],
  },
  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – машина за производство на цигари в България",
    metaTitle: "MK 8 | Машина за производство на цигари Mark 8 Post 64",
    metaDescription:
      "Машина за производство на цигари Molins Mark 8 Post 64 в Пакистан – надеждна машина за пръчки за стабилно производство. Реновирана и поддържана от Civic Tobacco Machinery.",
    tagline: "Утвърдената, надеждна машина за производство, на която фабриките все още разчитат.",
    intro: [
      "Molins Mark 8 Post 64 е утвърдена, високопроизводителна машина за цигари, изградена както за качество, така и за гъвкавост. Работи стабилно между 1800 и 2000 цигари в минута и носи двоен цветен принтер, така че можете да отпечатате хартията точно както изисква марката ви, без да забавяте линията.",
      "Обработва широк спектър от формати — обиколка на цигарата от 17 мм до 28,3 мм и комбинирана дължина на пръчката филтър и тютюн от 65 мм до 110 мм, което покрива всичко от стандартните 84 мм и 100 мм до slim, super slim и nano. Прикачването за филтри Max Multiroll поддържа непрекъснатото подаване на филтри при пълна скорост.",
      "При около 3500 кг това е тежка, солидна машина, изградена да поддържа темпото си през дълги производствени серии. Тази комбинация от скорост, гъвкавост на формата и надеждност прави Mark 8 Post 64 разумен избор за фабрики, които искат силен добив от една машина за производство.",
    ],
    features: [
      "Утвърден, дълготраен дизайн на Molins",
      "Равна пръчка и чист разрез",
      "Широко достъпни части и know-how",
      "Лесна поддръжка за техници",
      "Отлична стойност като реновирана единица",
    ],
    applications: ["Начална линия за производство", "Надеждна резервна машина"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D със система MAX-15",
    metaDescription:
      "Машина за производство на цигари Molins Mark 8D с MAX-15 в Пакистан – 3000 в минута във формати от King до Nano. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Високоскоростна машина Mark 8D със система за управление MAX-15.",
    intro: [
      "Molins Mark 8D с MAX-15 е силна, гъвкава машина за производство на цигари, изградена за изискванията на модерна тютюнева фабрика. Принадлежи към добре познатото семейство машини Mark 8 и дава на българските производители надежден начин да увеличат добива, без да жертват качеството.",
      "Работи с до 3000 цигари в минута, така че лесно поддържа темпото си на натоварена производствена линия. Също толкова важно е, че обработва широк спектър от формати. Независимо дали произвеждате King size, Demi, Slims, Super Slims или Nano, същата машина може да ги произведе всички, което я прави практичен избор за фабрика, обслужваща няколко сегмента едновременно.",
      "Машината приема обиколка на цигарата от 17 мм до 28,3 мм и комбинирана дължина на пръчката филтър и тютюн от 65 мм до 110 мм, така че запазвате пълен контрол над размера и постоянство от една серия до следващата.",
      "Конфигурацията съчетава машината за производство MK-8D със системата MAX-15 и нейния подаващ модул 1117. Заедно те провеждат процеса чисто от подаването на тютюна до готовата пръчка, поддържайки линията стабилна, намалявайки спиранията и запазвайки качеството през цялата смяна. При общо потребление от 17 kW тя балансира реалната производствена скорост с разумни експлоатационни разходи.",
      "Въпреки всичко, което прави, машината остава компактна. При около 5000 кг е солидна и издръжлива, но същевременно се вписва на съществуващ производствен под без голямо преустройство, а конструкцията ѝ издържа на дълго, непрекъснато производство. Ден след ден произвежда равномерни цигари с малко отпадък и умерена поддръжка, което е точно това, от което се нуждае фабрика, опитваща се да работи ефективно и все пак да отговаря на търсенето в различни формати.",
      "Накратко, Mark 8D с MAX-15 заслужава мястото си благодарение на доказаната надеждност, гъвкавата поддръжка на формати от slim до nano, високоскоростния добив, който остава точен, енергийно ефективната работа и лесното вписване в автоматизирана линия. Независимо дали заменяте по-старо оборудване, или добавяте капацитет, това е готова за бъдещето машина, която прилага класическото инженерство в модерното производство.",
    ],
    applications: ["Мащабно производство", "Многоформатни фабрики"],
  },
  "mark-9-5-lenze-servo-drives": {
    h1: "Molins Mark 9.5 със серво задвижвания Lenze",
    metaDescription:
      "Molins Mark 9.5 със серво задвижвания Lenze в Пакистан – до 3500 в минута със Siemens PLC и микровълнов контрол на теглото. Доставена от Civic Tobacco Machinery.",
    tagline: "Високоскоростна линия Mark 9.5 със серво задвижвания Lenze.",
    intro: [
      "Molins Mark 9.5 със серво задвижвания Lenze е изградена за производители, които искат сериозен добив, без да губят гъвкавост. Произвежда до 3500 цигари в минута при стандартни диаметри и 3200 в минута при slim и super slim формати, така че една линия може да покрие широка гама продукти при реална производствена скорост.",
      "Работи с обиколка на цигарата от 17 мм до 28,3 мм и комбинирана дължина на пръчката филтър и тютюн от 65 мм до 110 мм, което дава пространство за смяна на формати, като се запазва постоянна пръчка от серия до серия.",
      "Линията обединява три модула — машината за производство MK-9.5, възела за прикачване на филтри MAX-S и автоматичния пълнител на тави HCF80, потребяващи съответно 35 kW, 20 kW и 15 kW. Заедно те провеждат процеса от производството до напълнените тави с много малко ръчна намеса между тях.",
      "Управлението и точността са в центъра на тази машина. Siemens PLC управлява плавно последователността, микровълнова система поддържа стриктен контрол над теглото на пръчката, а серво задвижванията Lenze осигуряват прецизно, стабилно движение, което поддържа високо качество дори при пълна скорост.",
      "При общо тегло около 8600 кг това е тежка, солидна линия, изградена за мащабно производство. За фабрика, нуждаеща се от надежден, мащабен добив с модерно управление и лесен сервиз, Mark 9.5 със серво задвижвания Lenze е силен, готов за бъдещето избор.",
    ],
    applications: ["Мащабно производство", "Многоформатни фабрики"],
  },
  "mark-9-5-max-s-tray-filler": {
    h1: "Molins Mark-9.5 с Max S и пълнител на тави",
    metaTitle: "Molins Mark-9.5 с Max S и пълнител на тави",
    metaDescription:
      "Molins Mark-9.5 с Max S и пълнител на тави в Пакистан – 4500 до 5000 цигари в минута. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Високоскоростна машина Mark-9.5 с Max S и поточен пълнител на тави.",
    intro: [
      "Molins Mark-9.5 с Max S и пълнител на тави е премиум избор за производители, нуждаещи се от висока производствена скорост, спретната интеграция на филтри и надеждна производствена способност в една линия. Проектирана за обем, тя работи с забележителните 4500 до 5000 цигари в минута, което я поставя сред най-ефективните системи, налични за мащабни фабрики в Пакистан.",
      "В центъра на конфигурацията е машината за производство MK-9.5, развитие на утвърдената серия Mark 9, която поддържа силен добив, като запазва висока прецизност и постоянство. Поддържа обиколка на цигарата от 17 мм до 28,3 мм и комбинирана дължина на пръчката филтър и тютюн от 65 мм до 110 мм, така че можете да преминавате между King size, Slims, Demi и други формати, без да губите качеството на пръчката.",
      "Машината за производство е съчетана с възела за прикачване на филтри Max-S, който точно и повторяемо прикрепя филтъра към тютюневата пръчка. Работейки чрез поточен пълнител на тави, тя повишава капацитета, като поддържа ниско ниво на отпадъци и неподравняване, така че целостта на филтъра остава постоянна във всеки производствен цикъл.",
      "Стандартен формат от 84 мм поддържа машината в съответствие с глобално приетите размери на цигарите, което я прави практично решение както за местни доставки, така и за производство за износ. Независимо дали произвеждате собствена марка, или изпълнявате големи договори, тя плавно преминава между партиди и лесно се адаптира към променящи се поръчки.",
      "При около 7800 кг това е тежка, стабилна линия, изградена за непрекъсната работа и дълъг експлоатационен живот. За фабрика, търсеща разрастване при запазване на качеството и ниски престои, Mark-9.5 с Max S и пълнител на тави обединява скоростта, гъвкавостта и надеждността, от които се нуждае производственият под — от доказано производство и прецизно прикачване на филтри до рационализирано поточно подаване и издръжлива, тежка рамка.",
    ],
    applications: ["Мащабно производство", "Производство, готово за износ"],
  },
  "mark-9-max-s": {
    h1: "Molins MK-9 с Max S",
    metaTitle: "Molins MK-9 с Max S",
    metaDescription:
      "Molins MK-9 с Max S в Пакистан – 4500 до 5000 цигари в минута с поточен пълнител на тави. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Високоскоростна машина MK-9 с Max S и поточен пълнител на тави.",
    intro: [
      "Molins MK-9 с Max S е поредната високоефективна машина за производство на цигари, изградена за сериозно производство, работеща между 4500 и 5000 цигари в минута. Тя е надежден избор за фабрики в Пакистан, които искат силен, стабилен добив от една линия.",
      "Машината за производство MK-9 в основата поддържа производството прецизно и постоянно смяна след смяна. Работи с обиколка на цигарата от 17 мм до 28,3 мм и комбинирана дължина на пръчката филтър и тютюн от 65 мм до 110 мм, така че получавате реална гъвкавост да преминавате между формати, без да губите качеството на пръчката.",
      "Оборудвана е с възела за прикачване на филтри Max-S и поточен пълнител на тави, които правят стъпката на прикачване на филтъра по-бърза и по-надеждна, като същевременно поддържат ниско ниво на отпадъци и неподравняване. Стандартен формат от 84 мм я поддържа в съответствие с широко приетите размери на цигарите, така че се вписва лесно в повечето производствени планове.",
      "При около 7800 кг MK-9 е тежка, стабилна машина, изградена за непрекъсната работа и дълъг експлоатационен живот. За фабрика, разширяваща мащабното производство при запазване на качеството, тя е солидно, надеждно допълнение към производствения под.",
    ],
    applications: ["Мащабно производство", "Основна линия за производство"],
  },
  "protos-70": {
    h1: "Protos 70",
    metaTitle: "Машина за производство на цигари Hauni Protos 70",
    metaDescription:
      "Машина за производство на цигари Hauni Protos 70 в Пакистан – до 7000 в минута със Siemens или Beckhoff IPC управление. Доставена от Civic Tobacco Machinery.",
    tagline: "Високоскоростна линия Protos 70, до 7000 цигари в минута.",
    intro: [
      "Hauni Protos 70 е усъвършенствана машина за производство на цигари, изградена да отговаря на най-високите стандарти за производствена ефективност и прецизност. Работи с впечатляващите 7000 цигари в минута при стандартни диаметри и 6000 в минута при slim и super slim формати, давайки на фабриките в Пакистан реална скорост и гъвкавост от една линия.",
      "Обработва обиколка на цигарата от 17 мм до 28,3 мм и комбинирана дължина на пръчката филтър и тютюн от 65 мм до 110 мм, така че можете да преминавате между формати, като запазвате постоянна пръчка от серия до серия.",
      "Система за управление Siemens IPC или Beckhoff IPC поддържа последователността автоматизирана, плавна и надеждна, докато микровълнова система за контрол на теглото поддържа точното тегло на всяка цигара за постоянно качество на продукта. Линията обединява машината за производство на пръчки S7000, прикачването за филтърни накрайници M8000 и автоматичния пълнител на тави F80, всеки от които обработва спретнато своя етап от процеса.",
      "При мощност от 50 kW за S7000, 20 kW за M8000 и 15 kW за F80, Protos 70 е мощна, способна линия. При общо тегло около 10 800 кг тя е тежка и стабилна, изградена за непрекъсната работа и дълъг експлоатационен живот, което я прави идеален избор за мащабно производство на цигари.",
    ],
    applications: ["Мащабно производство", "Широкомащабно производство"],
  },
  "protos-80-er": {
    h1: "Protos 80 ER",
    metaTitle: "Машина за производство на цигари Hauni Protos 80 ER",
    metaDescription:
      "Машина за производство на цигари Hauni Protos 80 ER в Пакистан – до 8000 в минута със Siemens или Beckhoff IPC управление. Доставена от Civic Tobacco Machinery.",
    tagline: "Високоскоростна линия Protos 80 ER, до 8000 цигари в минута.",
    intro: [
      "Protos 80 ER е високопроизводителна машина за производство на цигари, проектирана за производители, които искат максимална ефективност, прецизност и добив. Изградена от Hauni, серията Protos 80 е известна с надеждността и напредналата си автоматизация, и независимо дали произвеждате стандартни или slim цигари, тя осигурява силна постоянство и продуктивност, което я прави доверен избор за мащабни линии в Пакистан.",
      "Капацитетът е мястото, където тази машина наистина се отличава. Произвежда до 8000 цигари в минута при стандартни диаметри и 7000 в минута при slim и super slim формати. Приема обиколка на цигарата от 17 мм до 28,3 мм и комбинирана дължина на пръчката филтър и тютюн от 65 мм до 110 мм, така че остава гъвкава спрямо различни типове цигари и пазарни изисквания. От King size през slim до нишови формати, Protos 80 ER се адаптира към начина, по който произвеждате.",
      "За прецизност и работно време тя изпълнява усъвършенствана система за PLC управление на Siemens IPC или Beckhoff IPC, поддържайки целия цикъл плавен и автоматизиран. Мониторингът в реално време и бързата реакция на системата намаляват човешката грешка и поддържат линията в движение, докато вградена микровълнова система за контрол на теглото поддържа постоянно тегло на цигарата на всяка единица за строг контрол на качеството.",
      "Линията се състои от три мощни модула, работещи заедно — машината за производство на пръчки S7000 при 50 kW, прикачването за филтърни накрайници M8000 при 20 kW и автоматичния пълнител на тави F80 при 15 kW. Известна с надеждността си и използвана в цигарени фабрики по целия свят, серията Protos 80 съчетава ефективно потребление на енергия, ниски загуби и прецизно инженерство, за да поддържа ниски експлоатационни разходи, докато стандартите на продукта остават високи. При общо тегло около 10 800 кг тя е тежка, стабилна линия, изградена за непрекъснато, мащабно производство.",
    ],
    applications: ["Мащабно производство", "Широкомащабно производство"],
  },
  "kdf-1": {
    h1: "Машина за производство на филтри за цигари Hauni KDF-1",
    metaTitle: "Машина за производство на филтри Hauni KDF-1",
    metaDescription:
      "Машина за производство на филтри Hauni KDF-1 в Пакистан – филтри 120 мм със Siemens/Beckhoff PLC и лазерен контрол на обиколката. Доставена от Civic Tobacco Machinery.",
    tagline: "Линия за производство на филтри Hauni KDF-1 с лазерен контрол на обиколката.",
    intro: [
      "Hauni KDF-1 е доверена, мощна линия за производство на филтри със силна репутация за производителност, прецизност и издръжливост в производството на цигари. Изградена за изискванията на мащабно производство, KDF-1 подхожда на производители в Пакистан, които поставят постоянство, скорост и качество на първо място.",
      "Изградена за високопроизводителна работа, тя предлага солиден производствен капацитет за филтри 120 мм, което работи добре както за стандартни, така и за персонализирани формати цигари. Поддържа обиколка на филтъра от 16,8 мм до 28,1 мм и дължина на филтъра от 64 мм до 150 мм, така че можете да произвеждате широка гама размери и видове филтри без постоянни промени на машината. От филтри King Size до Slims и специализирани дизайни, KDF-1 ги обработва всички ефективно.",
      "Работи с усъвършенствана система за PLC управление, налична в конфигурации Siemens или Beckhoff, давайки интуитивен контрол, диагностика в реално време и надеждна автоматизация, която поддържа постоянно качество на филтъра през цялата серия. Серво системи Lenze или Beckhoff допълват стабилността и поддържат плавно, точно движение.",
      "Отличителна характеристика е лазерната система за контрол на обиколката, която измерва обиколката на всеки филтър с висока прецизност, намалявайки отклоненията и поддържайки еднородност на всяка партида. Това ниво на точност има значение за поддържане на стандартите за качество на марката при премиум продукти.",
      "Въпреки целия си добив, KDF-1 поддържа балансиран енергиен профил от общо 40 kW, което я прави ефективна за дългосрочна работа. Здравата, добре проектирана конструкция ѝ дава дълъг експлоатационен живот, а модулният дизайн и съвместимостта с различни типове цигари я правят подходяща както за по-малко, така и за мащабно производство на филтри, независимо дали разширявате капацитета, или обновявате по-старо оборудване.",
    ],
    applications: ["Мащабно производство на филтри", "Стандартни и специализирани филтри"],
  },
  "kdf-2": {
    h1: "Машина за производство на филтри за цигари Hauni KDF-2",
    metaTitle: "Високоскоростна машина за филтри Hauni KDF-2",
    metaDescription:
      "Машина за производство на филтри Hauni KDF-2 в Пакистан – 400 метра ацетатна нишка в минута със Siemens/Beckhoff PLC. Доставена от Civic Tobacco Machinery.",
    tagline: "Високоскоростна линия за филтри Hauni KDF-2 при 400 метра в минута.",
    intro: [
      "Hauni KDF-2 е машина за производство на филтри от световна класа, изградена за високоефективно, високопроизводително производство на цигарени филтри. Известна с качеството на инженерството и напредналата си автоматизация, KDF-2 е доверен избор за мащабни производители в Пакистан, нуждаещи се както от прецизност, така и от продуктивност.",
      "Работи с впечатляващо темпо, обработвайки 400 метра ацетатна нишка в минута, което я прави подходяща за изискванията на модерните производствени линии. Тази скорост е съчетана с реална гъвкавост: поддържа обиколка на филтъра от 16,8 мм до 28,1 мм и дължина на филтъра от 64 мм до 150 мм, така че покрива всичко от стандартни King Size филтри до по-специализирани формати с постоянство, качество и минимални престои.",
      "Това, което отличава KDF-2, е автоматизацията ѝ. Система за PLC управление, налична в конфигурации Siemens или Beckhoff, дава пълен контрол и мониторинг в реално време, докато високопроизводителна серво система Lenze или Beckhoff поддържа точни движения и надеждна работа. Това намалява маржа на грешка и поддържа еднородно качество на филтъра, така че машината се интегрира гладко като надежден гръбнак за непрекъснато, мащабно производство.",
      "Изградена за издръжливост, KDF-2 се съчетава с отварящо устройство за нишка и автоматичния пълнител на тави HCF80, за да рационализира работния процес и да намали ръчната обработка. Потребява 40 kW за основния модул KDF-2 и 15 kW за пълнителя HCF80, съчетавайки енергийна ефективност със силна производителност.",
      "Дори с всички тези възможности, KDF-2 поддържа управляеми размери при около 6500 кг, а солидната ѝ конструкция осигурява дългосрочна издръжливост при взискателни производствени графици. Независимо дали изграждате нов обект, или обновявате съществуващо оборудване, тя е разумна инвестиция, която се вписва спретнато в модерни производствени системи, доставяйки отлично качество на филтъра.",
    ],
    applications: ["Мащабно производство на филтри", "Широкомащабно производство"],
  },
  "molins-pm-5": {
    h1: "Машина за филтри Molins PM-5",
    metaTitle: "Машина за производство на цигарени филтри Molins PM-5",
    metaDescription:
      "Машина за производство на филтри Molins PM-5 в Пакистан – високопроизводителна машина с 4000 филтъра в минута. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Високопроизводителна машина за филтри Molins, 4000 филтъра в минута.",
    intro: [
      "Molins PM-5 е високопроизводителна машина за цигарени филтри, изградена за изискванията на мащабно производство. С капацитет от 4000 филтъра в минута тя е силен пример за ефективност и прецизност в производството на филтри, надежден избор за натоварени фабрики в Пакистан.",
      "Предлага полезна гъвкавост при размера на филтрите, с диаметър на филтърната пръчка 7,5–7,8 мм и дължина на филтърната пръчка от 108 до 126 мм, така че може да поеме различни спецификации на филтри без затруднения.",
      "При около 2000 кг PM-5 има солидна конструкция, осигуряваща издръжливост и стабилна работа за дълъг период. Произведена от Molins, добре познато име в индустрията, тя съчетава утвърдено инженерство с високоскоростен добив, което я прави съществен актив за производители, искащи качествени филтри, докато максимизират капацитета.",
    ],
    applications: ["Мащабно производство на филтри", "Линии на базата на Molins"],
  },
  "hollow-tube-maker": {
    h1: "Машина за кухи тръбички",
    metaTitle: "Машина за кухи тръбички, машина за цигарени филтри",
    metaDescription:
      "Машина за кухи тръбички в Пакистан – 2100 в минута с възел за формоване за специализирани филтърни тръбички. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Високоскоростна машина за кухи тръбички, 2100 цигари в минута.",
    intro: [
      "Машината за кухи тръбички се отличава с производствения си капацитет и високоскоростната работа. Способна да произвежда 2100 цигари в минута, тя доставя силна ефективност и постоянен добив. Диапазон на скоростта на пръчката от 140 до 175 метра в минута, заедно със скорост на рязане до 2500 пръчки в минута, подчертава колко добре подхожда за мащабно производство за фабрики в Пакистан.",
      "При 3050 кг машината има здрава конструкция за издръжливост и дългосрочна надеждност. Възелът за формоване добавя още 1800 кг и работи в синхрон с машината за прецизно, ефективно производство на тръбички. Общото потребление на мощност е 14 kW, разделено на 6,5 kW за машината и 7,5 kW за възела за формоване, което постига добър баланс между производителност и потребление на енергия.",
      "Проектирана за мащабно производство, машината за кухи тръбички използва актуална технология за производство на висококачествени тръбички. Високоскоростната ѝ способност и солидното инженерство я правят ценен актив за производители, които трябва да отговарят на силно търсене, поддържайки отлични производствени стандарти.",
    ],
    applications: ["Мащабно производство на филтри", "Специализирани филтърни тръбички"],
  },
  "tobacco-feeder": {
    h1: "Подавател на тютюн",
    metaTitle: "Подавател на тютюн за машини за производство на цигари",
    metaDescription:
      "Подавател на тютюн в Пакистан – постоянен, равномерен поток тютюн за машини за производство Mark 8 и Mark 9. Доставен и обслужван от Civic Tobacco Machinery.",
    tagline: "Осигурява постоянен, равномерен поток тютюн за машините за производство Mark 8 и Mark 9.",
    intro: [
      "Подавателят на тютюн е ключова входна машина за цигарена фабрика. Подава тютюна непрекъснато и равномерно към машините за производство, наслоявайки го спретнато, така че да бъде подготвен точно както изисква производството.",
      "Съвместим е с машини Mark 8 и Mark 9, така че се вписва лесно в съществуваща линия. Регулируемите настройки на обема ви позволяват да контролирате прецизно потока на тютюна, което повишава производствената ефективност, а автоматизацията ѝ намалява ръчната обработка, рационализира работата и поддържа висока продуктивност.",
    ],
    applications: ["Захранване на машина за производство", "Постоянно производство на пръчка"],
  },
  "cigarette-reclaimer": {
    h1: "Рекуператор за цигари",
    metaTitle: "Рекуператор за цигари, машина за възстановяване на тютюн",
    metaDescription:
      "Рекуператор за цигари в Пакистан – възстановява тютюн от производствен отпадък при 120 кг/час с 99,8% ефективност. Доставен от Civic Tobacco Machinery.",
    tagline: "Възстановява тютюн от отпадъка при 120 кг/час с 99,8% ефективност.",
    intro: [
      "Рекуператорът за цигари е отлична машина за възстановяване на тютюн от отпадъка от производството на цигари. Отделя годен за повторна употреба тютюн от отпадъчните материали с много малки загуби, така че тютюнът, който иначе бихте изхвърлили, се връща обратно в производството.",
      "При максимален капацитет възстановява 120 кг на час и работи с впечатляващата ефективност от 99,8%, давайки ви най-високото възможно оползотворяване. С коефициент на възстановяване от 90% той доставя реално предимство в намаляването на отпадъците и повишаването на общата производствена ефективност.",
      "Удобен е за потребителя и лесен за монтиране в производствената ви линия, което го прави практично, спестяващо разходи допълнение за фабрики в Пакистан, желаещи да извлекат максимума от всяка партида.",
    ],
    applications: ["Намаляване на отпадъка", "Възстановяване на тютюн"],
  },
  "tobacco-cutters": {
    h1: "Резачка за тютюн Hauni KT-400",
    metaTitle: "Резачка за тютюн Hauni KT-400",
    metaDescription:
      "Резачка за тютюн Hauni KT-400 в Пакистан – петножова резачка с PLC регулиран размер на рязане. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Резачка за тютюн Hauni KT-400 с пет ножа и PLC регулиране на размера на рязане.",
    intro: [
      "Резачката за тютюн Hauni KT-400 е прецизно проектирана машина, която играе ключова роля в поддържането на постоянно качество на рязане при обработката на тютюн. Носи пет ножа, които осигуряват еднородни разрези и подобряват общото качество на тютюневата смес, а пневматични цилиндри задвижват челюстта за плавно, ефективно рязане с по-малко престои и поддръжка.",
      "KT-400 работи и с усъвършенствана система за PLC задвижване върху месингова огъваща летва, която прецизно регулира размера на рязане. Това поддържа всяка партида еднородна и ви позволява да съобразите размера на рязане със специфични изисквания, добавяйки реална гъвкавост. Благодарение на прецизността и надеждността си, KT-400 е важен актив за всеки обект за обработка на тютюн в Пакистан, стремящ се към високо качество и ефективност.",
    ],
    applications: ["Първична обработка", "Подготовка на нарязан тютюн"],
  },
  "tobacco-stem-flattener": {
    h1: "Изправяща машина за жилки на тютюн",
    metaTitle: "Изправяща машина за жилки на тютюн, машина за първична обработка",
    metaDescription:
      "Изправяща машина за жилки на тютюн в Пакистан – изравнява жилките за еднородно смесване и по-малко загуба на листа. Доставена и обслужвана от Civic Tobacco Machinery.",
    tagline: "Изравнява жилките на тютюна за еднородно смесване и по-малко загуба на листа.",
    intro: [
      "Изправящата машина за жилки на тютюн играе ключова роля в оптимизирането на процеса на обработка на тютюн. Като изравнява жилките на тютюна, тя ги подготвя за еднородно смесване с листата, което подобрява лекотата на обработка и намалява вероятността от неравномерности в крайния продукт.",
      "Като изравнява жилките ефективно, тя също така минимизира загубата на листа, правейки целия процес по-икономичен и устойчив. Резултатът е постоянен, висококачествен продукт, отговарящ на строгите индустриални стандарти, което прави изправящата машина за жилки ценен актив за всеки обект за обработка на тютюн в Пакистан.",
    ],
    applications: ["Първична обработка", "Подобряване на добива"],
  },
};

/* --------------------------- Vietnamese content ---------------------------- */

const vi: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "Máy đóng gói thuốc lá HLP-180",
    metaTitle: "Máy đóng gói HLP-180, 180 bao/phút",
    metaDescription:
      "Máy đóng gói thuốc lá HLP-180 tại Pakistan – 180 bao mỗi phút với các định dạng từ King đến Nano, có điều khiển PLC. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền đóng bao cứng tốc độ cao, 180 bao mỗi phút.",
    intro: [
      "HLP-180 là một chiếc máy mạnh mẽ thế hệ mới, được chế tạo cho việc đóng gói thuốc lá tốc độ cao. Nổi tiếng với hiệu suất ổn định và sản lượng đáng tin cậy, máy đóng gói HLP-180 phù hợp với các nhà sản xuất muốn tinh gọn quy trình đóng gói mà không phải hy sinh chất lượng hay độ chính xác.",
      "Với sản lượng 180 bao mỗi phút, máy vận hành các chu kỳ đóng gói hiệu quả, đều đặn nhờ cơ chế một piston, giữ độ căn chỉnh, bọc và niêm phong hoàn hảo trên từng bao. Điều đó giúp các nhà máy tại Pakistan đáp ứng nhu cầu lớn trong khi vẫn giữ được bề mặt sạch sẽ, lặp lại nhất quán.",
      "Máy được thiết kế để xử lý nhiều kích cỡ điếu thuốc, bao gồm King Size, Demi, Slims, Super Slims và Nano. Sự linh hoạt đó có nghĩa là bạn có thể phục vụ nhiều sở thích khách hàng khác nhau ở cả thị trường nội địa và xuất khẩu, từ định dạng truyền thống đến sản phẩm ngách, tất cả trên cùng một máy.",
      "Hệ thống điều khiển PLC giữ cho vận hành chính xác và hoàn toàn tự động, để mỗi bao ra đời đều đồng nhất, được bọc kỹ và sẵn sàng bán lẻ. Giao diện thân thiện cho phép người vận hành kiểm soát hoàn toàn tốc độ, phát hiện lỗi và giám sát sản xuất, giúp giảm thời gian dừng máy và nâng cao hiệu quả tổng thể.",
      "Điều thực sự khiến HLP-180 nổi bật là sự linh hoạt về hình dạng bao. Máy hỗ trợ các định dạng round corner, bevel edge, D-type và square, để các thương hiệu có thể tạo sự khác biệt cho bao bì, nổi bật trên kệ hàng và bắt kịp xu hướng thị trường thay đổi. Được chế tạo cho sản xuất quy mô lớn, không ngừng nghỉ, đây là lựa chọn mạnh mẽ dù bạn đang mở rộng dây chuyền hay nâng cấp thiết bị cũ.",
    ],
    applications: ["Sản xuất bao cứng quy mô lớn", "Thị trường nội địa và xuất khẩu"],
  },
  "hlp-200": {
    h1: "Máy đóng gói thuốc lá HLP-200",
    metaTitle: "Máy đóng gói HLP-200, 200 bao/phút",
    metaDescription:
      "Máy đóng gói thuốc lá HLP-200 tại Pakistan – dây chuyền hai piston 200 bao mỗi phút với các định dạng từ King đến Nano. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền đóng bao cứng hai piston, 200 bao mỗi phút.",
    intro: [
      "HLP-200 là máy đóng gói kiểu phễu hai piston, được chế tạo cho sản xuất từ quy mô nhỏ, trung bình đến quy mô lớn. Đây là lựa chọn phổ biến với các nhà sản xuất tại Pakistan vì máy sử dụng vật liệu tiết kiệm và giúp giữ chi phí vận hành thấp trong khi vẫn duy trì tốc độ nhanh, ổn định.",
      "Chạy với 200 bao mỗi phút và công suất tối đa khoảng 12.000 điếu, máy là bộ phận đầu tiên quan trọng của dây chuyền đóng gói, tạo hình và hoàn thiện bao trước khi chuyển sang bọc và đóng hộp. Máy hỗ trợ tất cả các định dạng bao thuốc lá phổ biến, nên dễ dàng lắp vào hầu hết các dây chuyền sản xuất hiện có.",
      "Máy xử lý nhiều kích cỡ điếu thuốc, bao gồm King Size, Demi, Slims, Super Slims và Nano, và hệ thống hai piston giữ chu kỳ đóng gói hiệu quả và bề mặt hoàn thiện nhất quán. Hệ thống điều khiển PLC giữ cho vận hành chính xác và hoàn toàn tự động, cho người vận hành khả năng kiểm soát rõ ràng về tốc độ, phát hiện lỗi và giám sát.",
      "Về mặt hiển thị bao, máy cung cấp các định dạng round corner, bevel edge, D-type và square, để các thương hiệu có thể tạo hình bao bì nổi bật trên kệ hàng. Chạy trên nguồn điện 220V/380V và được chế tạo cho sản lượng đáng tin cậy, liên tục, HLP-200 là bộ phận trung tâm vững chắc cho bất kỳ dây chuyền đóng gói tích hợp nào.",
    ],
    applications: ["Sản xuất bao cứng quy mô lớn", "Trung tâm dây chuyền đóng gói tích hợp"],
  },
  "hlp-225": {
    h1: "Máy đóng gói thuốc lá HLP-225",
    metaTitle: "Máy đóng gói HLP-225, 225 bao/phút",
    metaDescription:
      "Máy đóng gói thuốc lá HLP-225 tại Pakistan – dây chuyền hai piston tốc độ cao 225 bao mỗi phút với điều khiển PLC. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền đóng bao cứng hai piston tốc độ cao, 225 bao mỗi phút.",
    intro: [
      "Dây chuyền đóng gói HLP-225 là một bước tiến thực sự trong việc đóng gói thuốc lá. Chạy với 225 bao mỗi phút, chiếc máy hai piston này mang lại hiệu quả và công suất cao cho các nhà máy cần đóng gói ở quy mô lớn.",
      "Máy được thiết kế để xử lý nhiều kích cỡ điếu thuốc, bao gồm King, Demi, Slims, Super Slims và Nano, giúp các nhà sản xuất tại Pakistan có sự linh hoạt để đáp ứng các yêu cầu thị trường khác nhau trên cùng một máy.",
      "Hệ thống điều khiển PLC hiện đại cải thiện độ chính xác và tự động hóa quy trình đóng gói, giảm sự can thiệp thủ công và giảm lỗi. HLP-225 cũng hỗ trợ nhiều định dạng bao, bao gồm round corner, bevel edge, D-type và square, cho phép các thương hiệu điều chỉnh bao bì theo sở thích và yêu cầu khác nhau của người tiêu dùng.",
      "Được chế tạo cho sản xuất quy mô lớn, HLP-225 kết hợp các tính năng tiên tiến với cấu trúc chắc chắn để đạt hiệu suất đáng tin cậy, ổn định. Khả năng đóng gói tốc độ cao mà không giảm chất lượng khiến máy trở thành tài sản quý giá cho bất kỳ hoạt động nào muốn mở rộng sản lượng và duy trì tính cạnh tranh.",
    ],
    applications: ["Sản xuất bao cứng quy mô lớn", "Dây chuyền đóng gói quy mô lớn"],
  },
  "sasib-5000": {
    h1: "Máy đóng bao mềm SASIB 5000",
    metaTitle: "Máy đóng bao mềm thuốc lá SASIB 5000",
    metaDescription:
      "Máy đóng bao mềm thuốc lá SASIB 5000 tại Pakistan – bao mềm 100mm với bọc giấy nhôm và nhãn. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy đóng bao mềm SASIB cho định dạng 100mm với góc vuông.",
    intro: [
      "SASIB 5000 là chiếc máy đa năng được chế tạo để sản xuất bao mềm thuốc lá 100mm. Sử dụng phương pháp bọc giấy nhôm và nhãn được thực hiện quanh trục cuộn, máy tạo ra những bao thuốc hoàn hảo, nhất quán với các góc vuông gọn gàng.",
      "Phương pháp bọc này không chỉ đẹp mắt — nó còn bảo vệ điếu thuốc và giữ cho từng bao nguyên vẹn, đồng thời nâng cao tính thẩm mỹ của sản phẩm hoàn thiện. Đối với các nhà sản xuất tại Pakistan muốn có bề mặt bao mềm cao cấp, đây là lựa chọn đáng tin cậy, chất lượng cao.",
      "Đã được kiểm chứng và dễ vận hành, SASIB 5000 được cung cấp đã kiểm tra và thiết lập sẵn sàng cho sàn sản xuất, để bạn có thể tự tin bổ sung công suất bao mềm đáng tin cậy.",
    ],
    applications: ["Sản xuất bao mềm", "Định dạng 100mm"],
  },
  "sasib-3000": {
    h1: "Máy đóng bao mềm SASIB 3000",
    metaTitle: "Máy đóng bao mềm thuốc lá SASIB 3000",
    metaDescription:
      "Máy đóng bao mềm thuốc lá SASIB 3000 tại Pakistan – xử lý bao 84mm và 100mm với bọc giấy nhôm và nhãn. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Máy đóng bao mềm SASIB cho định dạng 84mm và 100mm với góc vuông.",
    intro: [
      "SASIB 3000 mang lại thêm sự linh hoạt cho dòng máy đóng bao mềm SASIB nhờ khả năng xử lý cả bao 84mm và 100mm. Sử dụng phương pháp bọc giấy nhôm và nhãn quanh trục cuộn, máy giữ được bề mặt hoàn thiện đặc trưng của SASIB — những bao thuốc hoàn hảo, nhất quán với các góc vuông gọn gàng.",
      "Khả năng xử lý hai kích cỡ này khiến SASIB 3000 trở thành tài sản quý giá cho các nhà sản xuất tại Pakistan cần sự linh hoạt trong sản xuất trong khi vẫn duy trì tiêu chuẩn cao về trình bày và bảo vệ cho từng bao thuốc.",
      "Hệ thống điều khiển của máy giúp việc điều chỉnh và bảo trì trở nên đơn giản, giúp giảm thời gian dừng máy và duy trì năng suất tổng thể cao. Được cung cấp đã kiểm tra và thiết lập sẵn sàng vận hành, đây là dây chuyền bao mềm đáng tin cậy cho các nhà máy muốn cả chất lượng lẫn sự linh hoạt về định dạng.",
    ],
    applications: ["Sản xuất bao mềm", "Định dạng 84mm và 100mm"],
  },
  "regular-wrapper-cp1": {
    h1: "Máy bọc Regular Wrapper CP1",
    metaTitle: "Máy bọc bao thuốc lá CP-1, 250 bao/phút",
    metaDescription:
      "Máy bọc bao thuốc lá CP-1 tại Pakistan – lên đến 250 bao mỗi phút. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy bọc bao thuốc lá tốc độ cao, chạy đến 250 bao mỗi phút.",
    intro: [
      "CP-1 là máy bọc bao thuốc lá hiệu suất cao, được chế tạo để dễ dàng xử lý các yêu cầu sản xuất nghiêm túc. Với tốc độ bọc lên đến 250 bao mỗi phút, máy nâng cao hiệu quả và công suất của dây chuyền đóng gói cho các nhà máy tại Pakistan.",
      "Máy chạy với yêu cầu công suất khiêm tốn 6 KVA và nhu cầu áp suất khí 0,05 m³/phút, mang lại hiệu suất mạnh mẽ trong khi vẫn tiết kiệm năng lượng. CP-1 được thiết kế để bọc chính xác, nhất quán, giảm lãng phí vật liệu và giữ cho từng bao đạt tiêu chuẩn chất lượng nghiêm ngặt.",
      "Cấu trúc vững chắc và vận hành đáng tin cậy khiến máy trở thành tài sản đáng tin cậy cho các dây chuyền quy mô lớn, giữ cho quy trình trơn tru và sản phẩm đầu ra sạch sẽ. Máy cũng tích hợp gọn gàng vào các dây chuyền hiện có, khiến nó trở thành bổ sung thực tế, giá trị cho bất kỳ cơ sở nào muốn nâng cao năng suất mà không mất chất lượng.",
    ],
    applications: ["Bọc bao thuốc", "Dây chuyền đóng gói quy mô lớn"],
  },
  "naked-over-wrapper": {
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, máy bọc ngoài bao thuốc lá",
    metaDescription:
      "Naked Over Wrapper tại Pakistan – máy bọc ngoài bao thuốc lá, 25 bao ngoài mỗi phút. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy bọc bao ngoài, 25 bao ngoài mỗi phút.",
    intro: [
      "Naked Over Wrapper là chiếc máy được thiết kế tốt để bọc bao ngoài thuốc lá với độ chính xác và tốc độ. Máy bọc 25 bao ngoài mỗi phút, giữ mức hiệu quả cao trên dây chuyền cho các nhà máy tại Pakistan.",
      "Máy chạy với nhu cầu năng lượng 6 KVA và áp suất khí 0,05 m³/phút, mang lại hiệu suất làm việc đáng tin cậy mà không tiêu tốn nhiều điện năng. Chắc chắn và hiệu quả, đây là bổ sung hợp lý cho dây chuyền sản xuất thuốc lá, nâng cao chất lượng bao bì ở giai đoạn cuối cùng.",
    ],
    applications: ["Bọc bao ngoài", "Niêm phong cuối dây chuyền"],
  },
  "molins-boxer": {
    h1: "Molins Boxer, máy đóng hộp",
    metaTitle: "Molins Boxer, máy đóng hộp thuốc lá",
    metaDescription:
      "Máy đóng hộp thuốc lá Molins Boxer tại Pakistan – lên đến 20 hộp mỗi phút. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy đóng hộp thuốc lá, chạy đến 20 hộp mỗi phút.",
    intro: [
      "Molins Boxer là chiếc máy đóng hộp thuốc lá đáng tin cậy, nổi tiếng với vận hành hiệu quả và công suất vững chắc. Với tốc độ đóng gói lên đến 20 hộp mỗi phút, máy nâng cao năng suất của các dây chuyền đóng gói thuốc lá tại Pakistan.",
      "Máy hoạt động với áp suất khí 0,05 m³/phút, cân bằng việc sử dụng năng lượng với vận hành ổn định. Được thiết kế để đáng tin cậy, Molins Boxer giữ cho việc đóng gói nhất quán và chính xác, giúp giảm thời gian dừng máy và duy trì chất lượng sản phẩm cao.",
      "Điều đó khiến máy trở thành bộ phận quan trọng của bất kỳ hệ thống sản xuất nào tập trung vào hiệu quả và sản lượng ổn định, tiếp nhận các bao đã bọc và tạo thành các hộp gọn gàng ở cuối dây chuyền.",
    ],
    applications: ["Đóng hộp/thùng carton", "Thu gom cuối dây chuyền"],
  },
  "sasib-boxer": {
    h1: "SASIB Boxer, máy đóng hộp",
    metaTitle: "SASIB Boxer, máy đóng hộp thuốc lá",
    metaDescription:
      "Máy đóng hộp thuốc lá SASIB Boxer tại Pakistan – lên đến 25 hộp mỗi phút. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy đóng hộp thuốc lá, chạy đến 25 hộp mỗi phút.",
    intro: [
      "SASIB Boxer là chiếc máy đóng hộp thuốc lá tiên tiến, nổi tiếng với tốc độ và hiệu quả. Có khả năng đóng gói lên đến 25 hộp mỗi phút, máy mang lại sự thúc đẩy thực sự cho công suất của dây chuyền sản xuất thuốc lá tại Pakistan.",
      "Máy chạy với yêu cầu công suất 6 KVA, kết hợp sức mạnh với hiệu suất, và nhu cầu áp suất khí 0,1 m³/phút, giữ cân bằng giữa sử dụng năng lượng và hiệu quả vận hành.",
      "Được thiết kế để đóng gói chính xác cao, nhất quán, SASIB Boxer giảm thiểu thời gian dừng máy và tinh gọn quy trình, khiến nó trở thành tài sản quý giá trong môi trường quy mô lớn, nơi tốc độ và độ chính xác quan trọng đối với năng suất và chất lượng sản phẩm.",
    ],
    applications: ["Đóng hộp/thùng carton", "Dây chuyền đóng gói quy mô lớn"],
  },
  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – Máy sản xuất thuốc lá tại Việt Nam",
    metaTitle: "MK 8 | Máy sản xuất thuốc lá Mark 8 Post 64",
    metaDescription:
      "Máy sản xuất thuốc lá Molins Mark 8 Post 64 tại Pakistan – máy tạo điếu đáng tin cậy cho sản xuất ổn định. Được tân trang và hỗ trợ bởi Civic Tobacco Machinery.",
    tagline: "Máy tạo điếu bền bỉ, đáng tin cậy mà các nhà máy vẫn tin dùng.",
    intro: [
      "Molins Mark 8 Post 64 là chiếc máy sản xuất thuốc lá đã được kiểm chứng, sản lượng cao, được chế tạo cho cả chất lượng và sự linh hoạt. Máy chạy ổn định từ 1.800 đến 2.000 điếu mỗi phút và trang bị máy in hai màu, để bạn có thể in giấy cuốn đúng theo yêu cầu thương hiệu mà không làm chậm dây chuyền.",
      "Máy xử lý nhiều định dạng — chu vi điếu thuốc từ 17mm đến 28,3mm và chiều dài kết hợp đoạn đầu lọc và thuốc sợi từ 65mm đến 110mm, bao phủ mọi thứ từ 84mm và 100mm tiêu chuẩn đến slim, super slim và nano. Bộ gắn đầu lọc Max Multiroll giữ cho việc cấp đầu lọc diễn ra liên tục ở tốc độ tối đa.",
      "Với trọng lượng khoảng 3.500kg, đây là chiếc máy nặng, chắc chắn được chế tạo để giữ vững tốc độ trong các đợt sản xuất dài. Sự kết hợp giữa tốc độ, tính linh hoạt về định dạng và độ tin cậy khiến Mark 8 Post 64 trở thành lựa chọn thông minh cho các nhà máy muốn có sản lượng mạnh mẽ từ một máy sản xuất duy nhất.",
    ],
    features: [
      "Thiết kế Molins đã được kiểm chứng, tuổi thọ cao",
      "Điếu thuốc đều và cắt gọn",
      "Phụ tùng và bí quyết kỹ thuật dễ tìm",
      "Dễ bảo trì cho kỹ thuật viên",
      "Giá trị tuyệt vời khi là máy tân trang",
    ],
    applications: ["Dây chuyền sản xuất cơ bản", "Máy dự phòng đáng tin cậy"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D với hệ thống MAX-15",
    metaDescription:
      "Máy sản xuất thuốc lá Molins Mark 8D với MAX-15 tại Pakistan – 3.000 điếu mỗi phút với các định dạng từ King đến Nano. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy sản xuất Mark 8D tốc độ cao với hệ thống điều khiển MAX-15.",
    intro: [
      "Molins Mark 8D với MAX-15 là chiếc máy sản xuất thuốc lá mạnh mẽ, linh hoạt, được chế tạo cho các yêu cầu của một nhà máy thuốc sợi hiện đại. Máy thuộc dòng máy sản xuất Mark 8 nổi tiếng và mang lại cho các nhà sản xuất Việt Nam một cách đáng tin cậy để tăng sản lượng mà không hy sinh chất lượng.",
      "Máy chạy với tốc độ lên đến 3.000 điếu mỗi phút, nên dễ dàng giữ nhịp độ trên một dây chuyền sản xuất bận rộn. Quan trọng không kém, máy xử lý nhiều định dạng. Dù bạn sản xuất King size, Demi, Slims, Super Slims hay Nano, cùng một máy có thể sản xuất tất cả, khiến nó trở thành lựa chọn thực tế cho nhà máy phục vụ nhiều phân khúc cùng lúc.",
      "Máy tạo điếu chấp nhận chu vi điếu thuốc từ 17mm đến 28,3mm và chiều dài kết hợp đoạn đầu lọc và thuốc sợi từ 65mm đến 110mm, để bạn giữ được toàn quyền kiểm soát về kích cỡ và duy trì tính nhất quán từ đợt này sang đợt khác.",
      "Cấu hình kết hợp máy tạo điếu MK-8D với hệ thống MAX-15 và bộ phận cấp liệu 1117 của nó. Cùng nhau, chúng thực hiện quy trình một cách sạch sẽ từ cấp liệu thuốc sợi đến điếu thuốc hoàn chỉnh, giữ cho dây chuyền ổn định, giảm thiểu gián đoạn và duy trì chất lượng suốt ca làm việc. Với tổng công suất tiêu thụ 17kW, máy cân bằng giữa tốc độ sản xuất thực tế và chi phí vận hành hợp lý.",
      "Dù có nhiều tính năng, máy vẫn giữ được kích thước gọn gàng. Với trọng lượng khoảng 5.000kg, máy chắc chắn và bền bỉ, nhưng vẫn lắp vừa vào sàn sản xuất hiện có mà không cần cải tạo lớn, và cấu trúc của máy chịu được sản xuất liên tục, lâu dài. Hàng ngày, máy sản xuất ra những điếu thuốc đều nhau với ít lãng phí và bảo trì vừa phải, đúng là những gì một nhà máy cần khi cố gắng vận hành tinh gọn mà vẫn đáp ứng nhu cầu trên nhiều định dạng khác nhau.",
      "Tóm lại, Mark 8D với MAX-15 xứng đáng có vị trí của mình nhờ độ tin cậy đã được kiểm chứng, hỗ trợ định dạng linh hoạt từ slim đến nano, sản lượng tốc độ cao vẫn giữ độ chính xác, vận hành tiết kiệm năng lượng và dễ dàng lắp đặt vào dây chuyền tự động. Dù bạn đang thay thế thiết bị cũ hay bổ sung công suất, đây là máy sản xuất sẵn sàng cho tương lai, ứng dụng kỹ thuật cổ điển vào sản xuất hiện đại.",
    ],
    applications: ["Sản xuất quy mô lớn", "Nhà máy đa định dạng"],
  },
  "mark-9-5-lenze-servo-drives": {
    h1: "Molins Mark 9.5 với động cơ servo Lenze",
    metaDescription:
      "Molins Mark 9.5 với động cơ servo Lenze tại Pakistan – lên đến 3.500 điếu mỗi phút với PLC Siemens và kiểm soát trọng lượng vi sóng. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền sản xuất Mark 9.5 tốc độ cao với động cơ servo Lenze.",
    intro: [
      "Molins Mark 9.5 với động cơ servo Lenze được chế tạo cho các nhà sản xuất muốn sản lượng nghiêm túc mà không mất đi tính linh hoạt. Máy sản xuất lên đến 3.500 điếu mỗi phút ở đường kính tiêu chuẩn và 3.200 điếu mỗi phút ở định dạng slim và super slim, để một dây chuyền có thể bao phủ nhiều loại sản phẩm ở tốc độ sản xuất thực tế.",
      "Máy hoạt động trong khoảng chu vi điếu thuốc từ 17mm đến 28,3mm và chiều dài kết hợp đoạn đầu lọc và thuốc sợi từ 65mm đến 110mm, mang lại không gian để chuyển đổi định dạng mà vẫn giữ được điếu thuốc nhất quán từ đợt này sang đợt khác.",
      "Dây chuyền kết hợp ba cụm — máy tạo điếu MK-9.5, bộ lắp ráp đầu lọc MAX-S và máy nạp khay tự động HCF80, tiêu thụ lần lượt 35kW, 20kW và 15kW. Cùng nhau, chúng thực hiện quy trình từ sản xuất đến khay đầy với rất ít thao tác thủ công ở giữa.",
      "Điều khiển và độ chính xác là trọng tâm của chiếc máy này. PLC Siemens điều khiển trơn tru chuỗi vận hành, hệ thống vi sóng giữ kiểm soát chặt chẽ trọng lượng điếu thuốc, và động cơ servo Lenze mang lại chuyển động chính xác, ổn định giúp giữ chất lượng cao ngay cả khi chạy hết tốc độ.",
      "Với tổng trọng lượng khoảng 8.600kg, đây là dây chuyền nặng, chắc chắn được chế tạo cho sản xuất quy mô lớn. Đối với nhà máy cần sản lượng lớn đáng tin cậy với hệ thống điều khiển hiện đại và dễ bảo trì, Mark 9.5 với động cơ servo Lenze là lựa chọn mạnh mẽ, sẵn sàng cho tương lai.",
    ],
    applications: ["Sản xuất quy mô lớn", "Nhà máy đa định dạng"],
  },
  "mark-9-5-max-s-tray-filler": {
    h1: "Molins Mark-9.5 với Max S & máy nạp khay",
    metaTitle: "Molins Mark-9.5 với Max S & máy nạp khay",
    metaDescription:
      "Molins Mark-9.5 với Max S và máy nạp khay tại Pakistan – 4.500 đến 5.000 điếu thuốc mỗi phút. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy sản xuất Mark-9.5 tốc độ cao với Max S và máy nạp khay dòng chảy.",
    intro: [
      "Molins Mark-9.5 với Max S và máy nạp khay là lựa chọn cao cấp cho các nhà sản xuất cần sản lượng tốc độ cao, tích hợp đầu lọc gọn gàng và khả năng sản xuất đáng tin cậy trong một dây chuyền. Được thiết kế cho khối lượng lớn, máy chạy với tốc độ đáng kinh ngạc từ 4.500 đến 5.000 điếu mỗi phút, đưa nó vào nhóm những hệ thống hiệu quả nhất dành cho các nhà máy quy mô lớn tại Pakistan.",
      "Trung tâm của cấu hình này là máy tạo điếu MK-9.5, phiên bản phát triển từ dòng Mark 9 đã được kiểm chứng, giữ được sản lượng mạnh mẽ trong khi vẫn duy trì độ chính xác và tính nhất quán cao. Máy hỗ trợ chu vi điếu thuốc từ 17mm đến 28,3mm và chiều dài kết hợp đoạn đầu lọc và thuốc sợi từ 65mm đến 110mm, để bạn có thể chuyển đổi giữa King size, Slims, Demi và các định dạng khác mà không mất chất lượng điếu thuốc.",
      "Máy tạo điếu được kết hợp với bộ lắp ráp đầu lọc Max-S, gắn đầu lọc vào điếu thuốc một cách chính xác và lặp lại được. Hoạt động thông qua máy nạp khay dòng chảy, hệ thống nâng cao công suất trong khi giữ mức lãng phí vật liệu và sai lệch căn chỉnh thấp, để tính toàn vẹn của đầu lọc luôn nhất quán trong mỗi chu kỳ sản xuất.",
      "Kích cỡ thiết lập mặc định 84mm giữ cho máy phù hợp với các kích thước điếu thuốc được chấp nhận trên toàn cầu, khiến nó trở thành lựa chọn thực tế cho cả cung cấp nội địa lẫn sản xuất xuất khẩu. Dù bạn sản xuất thương hiệu riêng hay thực hiện các hợp đồng lớn, máy chuyển đổi trơn tru giữa các đợt sản xuất và dễ dàng thích ứng với các đơn hàng thay đổi.",
      "Với trọng lượng khoảng 7.800kg, đây là dây chuyền nặng, ổn định được chế tạo cho vận hành liên tục và tuổi thọ sử dụng lâu dài. Đối với nhà máy muốn mở rộng quy mô trong khi bảo vệ chất lượng và giảm thời gian dừng máy, Mark-9.5 với Max S và máy nạp khay kết hợp tốc độ, tính linh hoạt và độ tin cậy mà sàn sản xuất cần — từ sản xuất đã được kiểm chứng và gắn đầu lọc chính xác đến cấp liệu dòng chảy tinh gọn và khung máy bền bỉ, chịu tải nặng.",
    ],
    applications: ["Sản xuất quy mô lớn", "Sản xuất sẵn sàng xuất khẩu"],
  },
  "mark-9-max-s": {
    h1: "Molins MK-9 với Max S",
    metaTitle: "Molins MK-9 với Max S",
    metaDescription:
      "Molins MK-9 với Max S tại Pakistan – 4.500 đến 5.000 điếu thuốc mỗi phút với máy nạp khay dòng chảy. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy sản xuất MK-9 tốc độ cao với Max S và máy nạp khay dòng chảy.",
    intro: [
      "Molins MK-9 với Max S là một chiếc máy sản xuất thuốc lá hiệu suất cao khác được chế tạo cho sản xuất nghiêm túc, chạy từ 4.500 đến 5.000 điếu mỗi phút. Đây là lựa chọn đáng tin cậy cho các nhà máy tại Pakistan muốn sản lượng mạnh mẽ, ổn định từ một dây chuyền duy nhất.",
      "Máy tạo điếu MK-9 ở trung tâm giữ cho sản xuất chính xác và nhất quán qua từng ca làm việc. Máy hoạt động trong khoảng chu vi điếu thuốc từ 17mm đến 28,3mm và chiều dài kết hợp đoạn đầu lọc và thuốc sợi từ 65mm đến 110mm, mang lại sự linh hoạt thực sự để chuyển đổi giữa các định dạng mà không mất chất lượng điếu thuốc.",
      "Máy được trang bị bộ lắp ráp đầu lọc Max-S và máy nạp khay dòng chảy, giúp bước gắn đầu lọc nhanh hơn và đáng tin cậy hơn trong khi vẫn giữ mức lãng phí và sai lệch căn chỉnh thấp. Kích cỡ thiết lập mặc định 84mm giữ cho máy phù hợp với các kích thước điếu thuốc được chấp nhận rộng rãi, để dễ dàng lắp vào hầu hết các kế hoạch sản xuất.",
      "Với trọng lượng khoảng 7.800kg, MK-9 là chiếc máy nặng, ổn định được chế tạo cho vận hành liên tục và tuổi thọ sử dụng lâu dài. Đối với nhà máy đang mở rộng sản xuất quy mô lớn trong khi bảo vệ chất lượng, đây là bổ sung vững chắc, đáng tin cậy cho sàn sản xuất.",
    ],
    applications: ["Sản xuất quy mô lớn", "Dây chuyền sản xuất chính"],
  },
  "protos-70": {
    h1: "Protos 70",
    metaTitle: "Máy sản xuất thuốc lá Hauni Protos 70",
    metaDescription:
      "Máy sản xuất thuốc lá Hauni Protos 70 tại Pakistan – lên đến 7.000 điếu mỗi phút với điều khiển IPC Siemens hoặc Beckhoff. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền sản xuất Protos 70 tốc độ cao, lên đến 7.000 điếu mỗi phút.",
    intro: [
      "Hauni Protos 70 là chiếc máy sản xuất thuốc lá tiên tiến được chế tạo để đáp ứng các tiêu chuẩn cao nhất về hiệu quả sản xuất và độ chính xác. Máy chạy với tốc độ ấn tượng 7.000 điếu mỗi phút ở đường kính tiêu chuẩn và 6.000 điếu mỗi phút ở định dạng slim và super slim, mang lại cho các nhà máy tại Pakistan tốc độ và sự linh hoạt thực sự từ một dây chuyền duy nhất.",
      "Máy xử lý chu vi điếu thuốc từ 17mm đến 28,3mm và chiều dài kết hợp đoạn đầu lọc và thuốc sợi từ 65mm đến 110mm, để bạn có thể chuyển đổi giữa các định dạng mà vẫn giữ được điếu thuốc nhất quán từ đợt này sang đợt khác.",
      "Hệ thống điều khiển IPC Siemens hoặc IPC Beckhoff giữ cho chuỗi vận hành tự động, trơn tru và đáng tin cậy, trong khi hệ thống kiểm soát trọng lượng bằng vi sóng giữ trọng lượng chính xác cho mỗi điếu thuốc để đảm bảo tính nhất quán sản phẩm ổn định. Dây chuyền kết hợp máy tạo điếu S7000, bộ gắn đầu lọc M8000 và máy nạp khay tự động F80, mỗi bộ phận xử lý gọn gàng giai đoạn riêng của quy trình.",
      "Với công suất 50kW cho S7000, 20kW cho M8000 và 15kW cho F80, Protos 70 là dây chuyền mạnh mẽ, có năng lực. Với tổng trọng lượng khoảng 10.800kg, máy nặng và ổn định, được chế tạo cho vận hành liên tục và tuổi thọ sử dụng lâu dài, khiến nó trở thành lựa chọn lý tưởng cho sản xuất thuốc lá quy mô lớn.",
    ],
    applications: ["Sản xuất quy mô lớn", "Sản xuất quy mô rộng"],
  },
  "protos-80-er": {
    h1: "Protos 80 ER",
    metaTitle: "Máy sản xuất thuốc lá Hauni Protos 80 ER",
    metaDescription:
      "Máy sản xuất thuốc lá Hauni Protos 80 ER tại Pakistan – lên đến 8.000 điếu mỗi phút với điều khiển IPC Siemens hoặc Beckhoff. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền sản xuất Protos 80 ER tốc độ cao, lên đến 8.000 điếu mỗi phút.",
    intro: [
      "Protos 80 ER là chiếc máy sản xuất thuốc lá hiệu suất cao, được thiết kế cho các nhà sản xuất muốn hiệu quả, độ chính xác và sản lượng tối đa. Được chế tạo bởi Hauni, dòng Protos 80 nổi tiếng với độ tin cậy và tự động hóa tiên tiến, và dù bạn sản xuất thuốc lá tiêu chuẩn hay slim, máy đều mang lại tính nhất quán và năng suất mạnh mẽ, khiến nó trở thành lựa chọn đáng tin cậy cho các dây chuyền quy mô lớn tại Pakistan.",
      "Công suất là nơi chiếc máy này thực sự nổi bật. Máy sản xuất lên đến 8.000 điếu mỗi phút ở đường kính tiêu chuẩn và 7.000 điếu mỗi phút ở định dạng slim và super slim. Máy chấp nhận chu vi điếu thuốc từ 17mm đến 28,3mm và chiều dài kết hợp đoạn đầu lọc và thuốc sợi từ 65mm đến 110mm, để giữ tính linh hoạt trước các loại thuốc lá và yêu cầu thị trường khác nhau. Từ king size đến slim đến các định dạng ngách, Protos 80 ER thích ứng với cách bạn sản xuất.",
      "Để đạt độ chính xác và thời gian hoạt động, máy chạy hệ thống điều khiển PLC cao cấp trên IPC Siemens hoặc IPC Beckhoff, giữ cho toàn bộ chu kỳ trơn tru và tự động. Giám sát thời gian thực và phản hồi hệ thống nhanh chóng giúp giảm lỗi con người và giữ cho dây chuyền vận hành liên tục, trong khi hệ thống kiểm soát trọng lượng vi sóng tích hợp giữ trọng lượng điếu thuốc nhất quán trên mỗi đơn vị để kiểm soát chất lượng chặt chẽ.",
      "Dây chuyền bao gồm ba cụm mạnh mẽ hoạt động cùng nhau — máy tạo điếu S7000 ở mức 50kW, bộ gắn đầu lọc M8000 ở mức 20kW và máy nạp khay tự động F80 ở mức 15kW. Nổi tiếng với độ tin cậy và được sử dụng trong các nhà máy thuốc lá trên toàn thế giới, dòng Protos 80 kết hợp sử dụng năng lượng hiệu quả, ít lãng phí và kỹ thuật chính xác để giữ chi phí vận hành thấp trong khi tiêu chuẩn sản phẩm vẫn cao. Với tổng trọng lượng khoảng 10.800kg, đây là dây chuyền nặng, ổn định được chế tạo cho sản xuất liên tục, quy mô lớn.",
    ],
    applications: ["Sản xuất quy mô lớn", "Sản xuất quy mô rộng"],
  },
  "kdf-1": {
    h1: "Máy làm đầu lọc thuốc lá Hauni KDF-1",
    metaTitle: "Máy làm đầu lọc Hauni KDF-1",
    metaDescription:
      "Máy làm đầu lọc Hauni KDF-1 tại Pakistan – đầu lọc 120mm với PLC Siemens/Beckhoff và kiểm soát chu vi bằng laser. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền làm đầu lọc Hauni KDF-1 với kiểm soát chu vi bằng laser.",
    intro: [
      "Hauni KDF-1 là dây chuyền làm đầu lọc đáng tin cậy, mạnh mẽ với danh tiếng vững chắc về hiệu suất, độ chính xác và độ bền trong sản xuất thuốc lá. Được chế tạo cho các yêu cầu sản xuất quy mô lớn, KDF-1 phù hợp với các nhà sản xuất tại Pakistan đặt tính nhất quán, tốc độ và chất lượng lên hàng đầu.",
      "Được chế tạo để vận hành sản lượng cao, máy cung cấp công suất sản xuất vững chắc cho đầu lọc 120mm, phù hợp cho cả định dạng thuốc lá tiêu chuẩn và tùy chỉnh. Máy hỗ trợ chu vi đầu lọc từ 16,8mm đến 28,1mm và chiều dài đầu lọc từ 64mm đến 150mm, để bạn có thể sản xuất nhiều kích cỡ và loại đầu lọc mà không cần thay đổi máy liên tục. Từ đầu lọc King Size đến Slims và các thiết kế chuyên biệt, KDF-1 xử lý tất cả một cách hiệu quả.",
      "Máy chạy trên hệ thống điều khiển PLC tiên tiến, có sẵn ở cấu hình Siemens hoặc Beckhoff, mang lại điều khiển trực quan, chẩn đoán thời gian thực và tự động hóa đáng tin cậy giữ cho chất lượng đầu lọc ổn định suốt cả đợt sản xuất. Hệ thống servo Lenze hoặc Beckhoff bổ sung thêm sự ổn định và giữ chuyển động trơn tru, chính xác.",
      "Một đặc điểm nổi bật là hệ thống kiểm soát chu vi dựa trên laser, đo chu vi từng đầu lọc với độ chính xác cao, giảm sai lệch và giữ tính đồng nhất cho mỗi lô sản xuất. Mức độ chính xác đó rất quan trọng để duy trì tiêu chuẩn chất lượng thương hiệu trên các sản phẩm cao cấp.",
      "Dù có sản lượng lớn, KDF-1 vẫn giữ hồ sơ năng lượng cân bằng ở tổng mức 40kW, giúp máy hiệu quả khi vận hành lâu dài. Cấu trúc chắc chắn, được thiết kế tốt mang lại tuổi thọ sử dụng lâu dài, và thiết kế dạng mô-đun cùng khả năng tương thích với nhiều loại thuốc lá khiến máy phù hợp cho cả sản xuất đầu lọc quy mô nhỏ lẫn quy mô lớn, dù bạn đang mở rộng công suất hay nâng cấp thiết bị cũ.",
    ],
    applications: ["Sản xuất đầu lọc quy mô lớn", "Đầu lọc tiêu chuẩn và chuyên biệt"],
  },
  "kdf-2": {
    h1: "Máy làm đầu lọc thuốc lá Hauni KDF-2",
    metaTitle: "Máy làm đầu lọc tốc độ cao Hauni KDF-2",
    metaDescription:
      "Máy làm đầu lọc Hauni KDF-2 tại Pakistan – 400 mét dây acetate mỗi phút với PLC Siemens/Beckhoff. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Dây chuyền làm đầu lọc Hauni KDF-2 tốc độ cao, 400 mét mỗi phút.",
    intro: [
      "Hauni KDF-2 là máy làm đầu lọc đẳng cấp thế giới, được chế tạo cho sản xuất đầu lọc thuốc lá hiệu quả cao, sản lượng lớn. Nổi tiếng với chất lượng kỹ thuật và tự động hóa tiên tiến, KDF-2 là lựa chọn đáng tin cậy cho các nhà sản xuất quy mô lớn tại Pakistan cần cả độ chính xác lẫn năng suất.",
      "Máy chạy với tốc độ ấn tượng, xử lý 400 mét dây acetate mỗi phút, phù hợp với yêu cầu của các dây chuyền sản xuất hiện đại. Tốc độ đó đi kèm với sự linh hoạt thực sự: máy hỗ trợ chu vi đầu lọc từ 16,8mm đến 28,1mm và chiều dài đầu lọc từ 64mm đến 150mm, bao phủ mọi thứ từ đầu lọc King Size tiêu chuẩn đến các định dạng chuyên biệt hơn với tính nhất quán, chất lượng và thời gian dừng máy tối thiểu.",
      "Điều khiến KDF-2 nổi bật là tính tự động hóa của nó. Hệ thống điều khiển PLC, có sẵn ở cấu hình Siemens hoặc Beckhoff, mang lại toàn quyền kiểm soát và giám sát thời gian thực, trong khi hệ thống servo Lenze hoặc Beckhoff hiệu suất cao giữ cho chuyển động chính xác và vận hành đáng tin cậy. Điều đó giảm biên độ sai số và giữ chất lượng đầu lọc đồng nhất, để máy tích hợp trơn tru như nền tảng đáng tin cậy cho sản xuất liên tục, quy mô lớn.",
      "Được chế tạo cho độ bền, KDF-2 kết hợp với bộ mở dây và máy nạp khay tự động HCF80 để tinh gọn quy trình làm việc và giảm thao tác thủ công. Máy tiêu thụ 40kW cho cụm KDF-2 chính và 15kW cho máy nạp HCF80, kết hợp hiệu quả năng lượng với hiệu suất mạnh mẽ.",
      "Dù có tất cả những khả năng đó, KDF-2 vẫn giữ kích thước dễ quản lý ở khoảng 6.500kg, và cấu trúc chắc chắn của nó mang lại độ bền lâu dài trong các lịch trình sản xuất khắt khe. Dù bạn đang thiết lập một cơ sở mới hay nâng cấp thiết bị hiện có, đây là khoản đầu tư khôn ngoan, phù hợp gọn gàng với các hệ thống sản xuất hiện đại trong khi mang lại chất lượng đầu lọc xuất sắc.",
    ],
    applications: ["Sản xuất đầu lọc quy mô lớn", "Sản xuất quy mô rộng"],
  },
  "molins-pm-5": {
    h1: "Máy làm đầu lọc Molins PM-5",
    metaTitle: "Máy làm đầu lọc thuốc lá Molins PM-5",
    metaDescription:
      "Máy làm đầu lọc Molins PM-5 tại Pakistan – máy công suất cao 4.000 đầu lọc mỗi phút. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy làm đầu lọc công suất cao Molins, 4.000 đầu lọc mỗi phút.",
    intro: [
      "Molins PM-5 là máy làm đầu lọc thuốc lá công suất cao, được chế tạo cho các yêu cầu sản xuất quy mô lớn. Với công suất 4.000 đầu lọc mỗi phút, đây là ví dụ mạnh mẽ về hiệu quả và độ chính xác trong sản xuất đầu lọc, lựa chọn đáng tin cậy cho các nhà máy bận rộn tại Pakistan.",
      "Máy mang lại sự linh hoạt hữu ích về kích cỡ đầu lọc, với đường kính đoạn đầu lọc 7,5–7,8mm và chiều dài đoạn đầu lọc từ 108 đến 126mm, để có thể đáp ứng các thông số kỹ thuật đầu lọc khác nhau mà không gặp khó khăn.",
      "Với trọng lượng khoảng 2.000kg, PM-5 có cấu trúc chắc chắn mang lại độ bền và vận hành ổn định trong thời gian dài. Được sản xuất bởi Molins, tên tuổi nổi tiếng trong ngành, máy kết hợp kỹ thuật đã được kiểm chứng với sản lượng tốc độ cao, khiến nó trở thành tài sản thiết yếu cho các nhà sản xuất muốn đầu lọc chất lượng trong khi tối đa hóa công suất.",
    ],
    applications: ["Sản xuất đầu lọc quy mô lớn", "Dây chuyền dựa trên Molins"],
  },
  "hollow-tube-maker": {
    h1: "Máy làm ống rỗng",
    metaTitle: "Máy làm ống rỗng, máy làm đầu lọc thuốc lá",
    metaDescription:
      "Máy làm ống rỗng tại Pakistan – 2.100 điếu mỗi phút với bộ lắp ráp cho ống đầu lọc chuyên biệt. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy làm ống rỗng tốc độ cao, 2.100 điếu mỗi phút.",
    intro: [
      "Máy làm ống rỗng nổi bật với công suất sản xuất và vận hành tốc độ cao. Có khả năng sản xuất 2.100 điếu mỗi phút, máy mang lại hiệu quả mạnh mẽ và sản lượng ổn định. Dải tốc độ điếu từ 140 đến 175 mét mỗi phút, cùng với tốc độ cắt lên đến 2.500 điếu mỗi phút, nhấn mạnh mức độ phù hợp của máy với sản xuất quy mô lớn cho các nhà máy tại Pakistan.",
      "Với trọng lượng 3.050kg, máy có cấu trúc chắc chắn cho độ bền và độ tin cậy lâu dài. Bộ lắp ráp bổ sung thêm 1.800kg và hoạt động đồng bộ với máy để sản xuất ống chính xác, hiệu quả. Tổng công suất tiêu thụ là 14kW, chia thành 6,5kW cho máy và 7,5kW cho bộ lắp ráp, tạo ra sự cân bằng tốt giữa hiệu suất và tiêu thụ năng lượng.",
      "Được thiết kế cho sản xuất quy mô lớn, Máy làm ống rỗng sử dụng công nghệ hiện đại để sản xuất ống chất lượng cao. Khả năng vận hành tốc độ cao và kỹ thuật vững chắc khiến máy trở thành tài sản quý giá cho các nhà sản xuất cần đáp ứng nhu cầu lớn trong khi vẫn duy trì tiêu chuẩn sản xuất xuất sắc.",
    ],
    applications: ["Sản xuất đầu lọc quy mô lớn", "Ống đầu lọc chuyên biệt"],
  },
  "tobacco-feeder": {
    h1: "Máy cấp liệu thuốc sợi",
    metaTitle: "Máy cấp liệu thuốc sợi cho máy sản xuất thuốc lá",
    metaDescription:
      "Máy cấp liệu thuốc sợi tại Pakistan – dòng thuốc sợi ổn định, đều đặn cho máy tạo điếu Mark 8 và Mark 9. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Cung cấp dòng thuốc sợi ổn định, đều đặn cho máy tạo điếu Mark 8 và Mark 9.",
    intro: [
      "Máy cấp liệu thuốc sợi là máy đầu vào quan trọng cho một nhà máy thuốc lá. Máy cấp thuốc sợi liên tục và đều đặn vào các máy tạo điếu, xếp lớp gọn gàng để thuốc sợi được chuẩn bị đúng như yêu cầu sản xuất.",
      "Máy tương thích với các máy Mark 8 và Mark 9, nên dễ dàng lắp vào một hệ thống hiện có. Các cài đặt điều chỉnh khối lượng cho phép bạn kiểm soát chính xác dòng thuốc sợi, nâng cao hiệu quả sản xuất, và tính tự động hóa giúp giảm thao tác thủ công, tinh gọn vận hành và duy trì năng suất cao.",
    ],
    applications: ["Cấp liệu cho máy tạo điếu", "Sản xuất điếu thuốc ổn định"],
  },
  "cigarette-reclaimer": {
    h1: "Máy thu hồi thuốc lá",
    metaTitle: "Máy thu hồi thuốc lá, máy thu hồi thuốc sợi",
    metaDescription:
      "Máy thu hồi thuốc lá tại Pakistan – thu hồi thuốc sợi từ chất thải sản xuất với 120 kg/giờ và hiệu suất 99,8%. Được cung cấp bởi Civic Tobacco Machinery.",
    tagline: "Thu hồi thuốc sợi từ chất thải với 120 kg/giờ và hiệu suất 99,8%.",
    intro: [
      "Máy thu hồi thuốc lá là chiếc máy tuyệt vời để thu hồi thuốc sợi từ chất thải sản xuất thuốc lá. Máy tách thuốc sợi có thể tái sử dụng khỏi vật liệu thải với tổn thất rất nhỏ, để thuốc sợi mà lẽ ra bạn sẽ phải bỏ đi quay trở lại sản xuất.",
      "Ở công suất tối đa, máy thu hồi 120 kg mỗi giờ và hoạt động với hiệu suất ấn tượng 99,8%, mang lại cho bạn mức sử dụng cao nhất có thể. Với tỷ lệ thu hồi 90%, máy mang lại lợi thế thực sự trong việc giảm lãng phí và nâng cao hiệu quả sản xuất tổng thể.",
      "Máy thân thiện với người dùng và dễ lắp đặt vào dây chuyền sản xuất của bạn, khiến nó trở thành bổ sung thực tế, tiết kiệm chi phí cho các nhà máy tại Pakistan muốn tận dụng tối đa mỗi lô sản xuất.",
    ],
    applications: ["Giảm lãng phí", "Thu hồi thuốc sợi"],
  },
  "tobacco-cutters": {
    h1: "Máy cắt thuốc sợi Hauni KT-400",
    metaTitle: "Máy cắt thuốc sợi Hauni KT-400",
    metaDescription:
      "Máy cắt thuốc sợi Hauni KT-400 tại Pakistan – máy cắt năm dao với kích cỡ cắt được điều chỉnh bằng PLC. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Máy cắt thuốc sợi Hauni KT-400 với năm dao và điều chỉnh kích cỡ cắt bằng PLC.",
    intro: [
      "Máy cắt thuốc sợi Hauni KT-400 là chiếc máy được thiết kế chính xác, đóng vai trò quan trọng trong việc giữ chất lượng cắt nhất quán trong chế biến thuốc sợi. Máy có năm dao, mang lại các đường cắt đồng đều và cải thiện chất lượng tổng thể của hỗn hợp thuốc sợi, và các xi-lanh khí nén vận hành hàm kẹp cho việc cắt trơn tru, hiệu quả với ít thời gian dừng máy và bảo trì hơn.",
      "KT-400 cũng chạy hệ thống truyền động PLC tiên tiến trên thanh uốn bằng đồng thau, điều chỉnh chính xác kích cỡ cắt. Điều đó giữ cho mỗi lô sản xuất đồng đều và cho phép bạn tùy chỉnh kích cỡ cắt theo yêu cầu cụ thể, bổ sung tính linh hoạt thực sự. Với độ chính xác và độ tin cậy, KT-400 là tài sản quan trọng cho bất kỳ cơ sở chế biến thuốc sợi nào tại Pakistan hướng đến chất lượng và hiệu quả hàng đầu.",
    ],
    applications: ["Chế biến sơ cấp", "Chuẩn bị thuốc sợi cắt"],
  },
  "tobacco-stem-flattener": {
    h1: "Máy làm phẳng cọng thuốc lá",
    metaTitle: "Máy làm phẳng cọng thuốc lá, máy chế biến sơ cấp",
    metaDescription:
      "Máy làm phẳng cọng thuốc lá tại Pakistan – làm phẳng cọng để phối trộn đồng đều và giảm lãng phí lá. Được cung cấp và bảo trì bởi Civic Tobacco Machinery.",
    tagline: "Làm phẳng cọng thuốc lá để phối trộn đồng đều và giảm lãng phí lá.",
    intro: [
      "Máy làm phẳng cọng thuốc lá đóng vai trò quan trọng trong việc tối ưu hóa quy trình chế biến thuốc sợi. Bằng cách làm phẳng cọng thuốc lá, máy chuẩn bị chúng để phối trộn đồng đều với lá thuốc, cải thiện sự dễ dàng trong chế biến và giảm khả năng không đồng nhất trong sản phẩm cuối cùng.",
      "Bằng cách làm phẳng cọng hiệu quả, máy cũng giảm thiểu lãng phí lá thuốc, khiến toàn bộ quy trình tiết kiệm và bền vững hơn. Kết quả là một sản phẩm đồng nhất, chất lượng cao đáp ứng các tiêu chuẩn ngành nghiêm ngặt, khiến máy làm phẳng cọng trở thành tài sản quý giá cho bất kỳ hoạt động chế biến thuốc sợi nào tại Pakistan.",
    ],
    applications: ["Chế biến sơ cấp", "Cải thiện sản lượng"],
  },
};

/* -------------------------- Indonesian content ---------------------------- */

const id: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "Mesin Pengemas Rokok HLP-180",
    metaTitle: "Mesin Pengemas HLP-180, 180 Kemasan/Menit",
    metaDescription:
      "Mesin pengemas rokok HLP-180 di Pakistan – 180 kemasan per menit untuk format King hingga Nano dengan kontrol PLC. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini kemasan keras berkecepatan tinggi, 180 kemasan per menit.",
    intro: [
      "HLP-180 adalah mesin generasi terbaru yang bertenaga, dibuat untuk pengemasan rokok berkecepatan tinggi. Dikenal karena performa yang konsisten dan output yang andal, mesin pengemas HLP-180 cocok untuk produsen yang ingin merampingkan proses pengemasan tanpa mengorbankan kualitas atau presisi.",
      "Dengan output 180 kemasan per menit, mesin ini menjalankan siklus pengemasan yang efisien dan stabil berkat mekanisme plunger tunggalnya, menjaga keselarasan, pembungkusan, dan penyegelan yang sempurna pada setiap kemasan. Hal ini memungkinkan pabrik di Pakistan memenuhi permintaan besar sambil menjaga hasil akhir yang bersih dan berulang.",
      "Mesin ini dirancang untuk menangani berbagai ukuran rokok, termasuk King Size, Demi, Slims, Super Slims, dan Nano. Fleksibilitas ini berarti Anda dapat melayani preferensi konsumen yang berbeda di pasar lokal dan ekspor, dari format tradisional hingga produk khusus, semuanya dengan satu mesin yang sama.",
      "Sistem kontrol PLC menjaga operasi tetap akurat dan sepenuhnya otomatis, sehingga setiap kemasan keluar seragam, terbungkus rapi, dan siap dijual. Antarmuka yang ramah pengguna memberi operator kendali penuh atas kecepatan, deteksi kesalahan, dan pemantauan produksi, yang mengurangi waktu henti dan meningkatkan efisiensi keseluruhan.",
      "Yang benar-benar membedakan HLP-180 adalah fleksibilitas bentuk kemasannya. Mesin ini mendukung format round corner, bevel edge, D-type, dan square, sehingga merek dapat membedakan kemasan mereka, menonjol di rak, dan mengikuti tren pasar yang berubah. Dibuat untuk produksi skala besar yang terus-menerus, ini adalah pilihan kuat baik untuk memperluas lini maupun meningkatkan peralatan lama.",
    ],
    applications: ["Produksi kemasan keras skala besar", "Pasar lokal dan ekspor"],
  },
  "hlp-200": {
    h1: "Mesin Pengemas Rokok HLP-200",
    metaTitle: "Mesin Pengemas HLP-200, 200 Kemasan/Menit",
    metaDescription:
      "Mesin pengemas rokok HLP-200 di Pakistan – lini plunger ganda 200 kemasan per menit untuk format King hingga Nano. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini kemasan keras plunger ganda, 200 kemasan per menit.",
    intro: [
      "HLP-200 adalah mesin pengemas hopper plunger ganda yang dibuat untuk produksi skala kecil hingga menengah dan besar. Ini menjadi pilihan populer di kalangan produsen di Pakistan karena hemat penggunaan material dan membantu menekan biaya operasional sambil tetap menjaga kecepatan yang stabil.",
      "Berjalan pada 200 kemasan per menit dengan throughput maksimum sekitar 12.000 rokok, mesin ini menjadi unit pertama yang krusial di lini pengemasan, membentuk dan menyelesaikan kemasan sebelum berlanjut ke pembungkusan dan pengardusan. Mesin ini mendukung semua format kemasan rokok yang umum, sehingga mudah masuk ke sebagian besar jalur produksi.",
      "Mesin ini menangani berbagai ukuran rokok, termasuk King Size, Demi, Slims, Super Slims, dan Nano, dan sistem plunger gandanya menjaga siklus pengemasan tetap efisien dan hasil akhir yang konsisten. Sistem kontrol PLC menjaga operasi tetap akurat dan sepenuhnya otomatis, memberi operator kendali yang jelas atas kecepatan, deteksi kesalahan, dan pemantauan.",
      "Untuk tampilan kemasan, mesin ini menawarkan format round corner, bevel edge, D-type, dan square, sehingga merek dapat membentuk kemasan mereka agar menonjol di rak. Berjalan pada suplai 220V/380V dan dibuat untuk output yang andal dan berkelanjutan, HLP-200 adalah unit inti yang solid untuk setiap lini pengemasan terintegrasi.",
    ],
    applications: ["Produksi kemasan keras skala besar", "Inti dari lini pengemasan terintegrasi"],
  },
  "hlp-225": {
    h1: "Mesin Pengemas Rokok HLP-225",
    metaTitle: "Mesin Pengemas HLP-225, 225 Kemasan/Menit",
    metaDescription:
      "Mesin pengemas rokok HLP-225 di Pakistan – lini plunger ganda berkecepatan tinggi 225 kemasan per menit dengan kontrol PLC. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini kemasan keras plunger ganda berkecepatan tinggi, 225 kemasan per menit.",
    intro: [
      "Lini pengemasan HLP-225 adalah langkah maju yang nyata dalam pengemasan rokok. Berjalan pada 225 kemasan per menit, mesin plunger ganda ini memberikan efisiensi dan throughput tinggi untuk pabrik yang perlu mengemas dalam skala besar.",
      "Mesin ini direkayasa untuk menangani berbagai ukuran rokok, termasuk King, Demi, Slims, Super Slims, dan Nano, sehingga produsen di Pakistan mendapatkan fleksibilitas untuk memenuhi berbagai permintaan pasar pada satu mesin.",
      "Sistem kontrol PLC modern meningkatkan akurasi dan mengotomatisasi proses pengemasan, mengurangi intervensi manual dan kesalahan. HLP-225 juga mendukung berbagai format kemasan, termasuk round corner, bevel edge, D-type, dan square, yang memungkinkan merek menyesuaikan kemasan mereka dengan preferensi dan kebutuhan konsumen yang berbeda.",
      "Dibuat untuk produksi skala besar, HLP-225 memadukan fitur canggih dengan konstruksi kokoh untuk performa yang andal dan konsisten. Kemampuannya mengemas dengan kecepatan tinggi tanpa mengorbankan kualitas menjadikannya aset berharga bagi setiap operasi yang ingin meningkatkan output dan tetap kompetitif.",
    ],
    applications: ["Produksi kemasan keras skala besar", "Lini pengemasan skala besar"],
  },
  "sasib-5000": {
    h1: "Mesin Kemasan Lunak SASIB 5000",
    metaTitle: "Mesin Kemasan Lunak Rokok SASIB 5000",
    metaDescription:
      "Mesin kemasan lunak rokok SASIB 5000 di Pakistan – kemasan lunak 100mm dengan pembungkusan alufoil dan label. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pengemas kemasan lunak SASIB untuk kemasan 100mm dengan sudut siku.",
    intro: [
      "SASIB 5000 adalah mesin serbaguna yang dibuat untuk memproduksi kemasan lunak rokok 100mm. Menggunakan pembungkusan alufoil dan label yang dilakukan di sekitar arbor, mesin ini menghasilkan kemasan yang sempurna dan konsisten dengan sudut siku yang rapi.",
      "Metode pembungkusan ini tidak hanya terlihat bagus — mesin ini juga melindungi rokok dan menjaga setiap kemasan tetap utuh, sekaligus meningkatkan daya tarik visual produk jadi. Bagi produsen di Pakistan yang menginginkan hasil akhir kemasan lunak premium, ini adalah pilihan yang andal dan berkualitas tinggi.",
      "Terbukti andal dan mudah dioperasikan, SASIB 5000 dipasok dalam keadaan sudah diperiksa dan disetel, siap untuk lantai produksi, sehingga Anda dapat menambah kapasitas kemasan lunak yang andal dengan percaya diri.",
    ],
    applications: ["Produksi kemasan lunak", "Format 100mm"],
  },
  "sasib-3000": {
    h1: "Mesin Kemasan Lunak SASIB 3000",
    metaTitle: "Mesin Kemasan Lunak Rokok SASIB 3000",
    metaDescription:
      "Mesin kemasan lunak rokok SASIB 3000 di Pakistan – menangani kemasan 84mm dan 100mm dengan pembungkusan alufoil dan label. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Mesin pengemas kemasan lunak SASIB untuk kemasan 84mm dan 100mm dengan sudut siku.",
    intro: [
      "SASIB 3000 menambah fleksibilitas ekstra pada lini kemasan lunak SASIB berkat kemampuannya menangani kemasan rokok 84mm maupun 100mm. Menggunakan pembungkusan alufoil dan label di sekitar arbor, mesin ini mempertahankan hasil akhir khas SASIB — kemasan yang sempurna dan konsisten dengan sudut siku yang rapi.",
      "Kemampuan dua ukuran ini menjadikan SASIB 3000 aset berharga bagi produsen di Pakistan yang membutuhkan fleksibilitas dalam produksi sambil menjaga setiap kemasan tetap pada standar tinggi dalam tampilan dan perlindungan.",
      "Sistem kontrolnya membuat penyesuaian dan pemeliharaan menjadi mudah, yang membantu mengurangi waktu henti dan menjaga produktivitas keseluruhan tetap tinggi. Dipasok dalam keadaan sudah diperiksa dan disetel, siap dijalankan, ini adalah lini kemasan lunak yang andal untuk pabrik yang menginginkan kualitas sekaligus fleksibilitas format.",
    ],
    applications: ["Produksi kemasan lunak", "Format 84mm dan 100mm"],
  },
  "regular-wrapper-cp1": {
    h1: "Mesin Pembungkus Regular Wrapper CP1",
    metaTitle: "Mesin Pembungkus Kemasan Rokok CP-1, 250 PPM",
    metaDescription:
      "Mesin pembungkus kemasan rokok CP-1 di Pakistan – hingga 250 kemasan per menit. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pembungkus kemasan rokok berkecepatan tinggi, hingga 250 kemasan per menit.",
    intro: [
      "CP-1 adalah mesin pembungkus kemasan rokok berperforma tinggi yang dibuat untuk menangani permintaan produksi yang serius dengan mudah. Dengan kecepatan pembungkusan hingga 250 kemasan per menit, mesin ini meningkatkan efisiensi dan throughput lini pengemasan untuk pabrik di Pakistan.",
      "Mesin ini beroperasi dengan kebutuhan daya sedang sebesar 6 KVA dan kebutuhan tekanan udara 0,05 m³/menit, sehingga memberikan performa kuat sambil tetap hemat energi. CP-1 direkayasa untuk pembungkusan yang presisi dan konsisten yang mengurangi pemborosan material dan menjaga setiap kemasan pada standar kualitas yang ketat.",
      "Konstruksinya yang kokoh dan operasinya yang andal menjadikannya aset yang dapat diandalkan untuk lini skala besar, menjaga proses tetap lancar dan output tetap bersih. Mesin ini juga terintegrasi dengan rapi ke dalam lini yang sudah ada, menjadikannya tambahan praktis dan berharga bagi fasilitas mana pun yang ingin meningkatkan produktivitas tanpa kehilangan kualitas.",
    ],
    applications: ["Pembungkusan kemasan", "Lini pengemasan skala besar"],
  },
  "naked-over-wrapper": {
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, Pembungkus Luar Kemasan Rokok",
    metaDescription:
      "Naked Over Wrapper di Pakistan – pembungkus luar kemasan rokok, 25 kemasan luar per menit. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Pembungkus kemasan luar, 25 kemasan luar per menit.",
    intro: [
      "Naked Over Wrapper adalah mesin yang direkayasa dengan baik untuk membungkus kemasan luar rokok dengan presisi dan kecepatan. Mesin ini membungkus 25 kemasan luar per menit, menjaga tingkat efisiensi yang tinggi di lini produksi untuk pabrik di Pakistan.",
      "Mesin ini beroperasi dengan kebutuhan energi 6 KVA dan tekanan udara 0,05 m³/menit, memberikan performa kerja yang andal tanpa konsumsi daya yang besar. Kokoh dan efisien, ini adalah tambahan yang tepat untuk lini produksi rokok, meningkatkan kualitas kemasan pada tahap akhir.",
    ],
    applications: ["Pembungkusan kemasan luar", "Penyegelan akhir lini"],
  },
  "molins-boxer": {
    h1: "Molins Boxer, Mesin Pengardus",
    metaTitle: "Molins Boxer, Mesin Pengardus Kemasan Rokok",
    metaDescription:
      "Mesin pengardus kemasan rokok Molins Boxer di Pakistan – hingga 20 kardus per menit. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pengardus kemasan rokok, hingga 20 kardus per menit.",
    intro: [
      "Molins Boxer adalah mesin pengardus kemasan rokok yang andal, dikenal karena operasinya yang efisien dan throughput yang solid. Dengan kecepatan pengemasan hingga 20 kardus per menit, mesin ini meningkatkan produktivitas lini pengemasan rokok di Pakistan.",
      "Mesin ini bekerja dengan tekanan udara 0,05 m³/menit, menyeimbangkan penggunaan energi dengan operasi yang stabil. Direkayasa untuk keandalan, Molins Boxer menjaga pengemasan tetap konsisten dan presisi, yang mengurangi waktu henti dan menjaga kualitas produk tetap tinggi.",
      "Hal itu menjadikannya bagian penting dari setiap jalur produksi yang berfokus pada efisiensi dan output yang stabil, menerima kemasan yang telah dibungkus dan membentuknya menjadi kardus yang rapi di ujung lini.",
    ],
    applications: ["Pengardusan/pengemasan kardus", "Pengumpulan akhir lini"],
  },
  "sasib-boxer": {
    h1: "SASIB Boxer, Mesin Pengardus",
    metaTitle: "SASIB Boxer, Mesin Pengardus Kemasan Rokok",
    metaDescription:
      "Mesin pengardus kemasan rokok SASIB Boxer di Pakistan – hingga 25 kardus per menit. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pengardus kemasan rokok, hingga 25 kardus per menit.",
    intro: [
      "SASIB Boxer adalah mesin pengardus kemasan rokok canggih yang dikenal karena kecepatan dan efisiensinya. Mampu mengemas hingga 25 kardus per menit, mesin ini memberikan dorongan nyata pada throughput lini produksi rokok di Pakistan.",
      "Mesin ini bekerja dengan kebutuhan daya 6 KVA, memadukan kekuatan dengan performa, dan kebutuhan tekanan udara 0,1 m³/menit, menjaga keseimbangan antara penggunaan energi dan efisiensi operasional.",
      "Dirancang untuk pengemasan yang sangat akurat dan konsisten, SASIB Boxer meminimalkan waktu henti dan merampingkan proses, menjadikannya aset berharga di lingkungan skala besar di mana kecepatan dan presisi penting bagi produktivitas dan kualitas produk.",
    ],
    applications: ["Pengardusan/pengemasan kardus", "Lini pengemasan skala besar"],
  },
  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – Mesin Pembuat Rokok di Indonesia",
    metaTitle: "MK 8 | Mesin Pembuat Rokok Mark 8 Post 64",
    metaDescription:
      "Mesin pembuat rokok Molins Mark 8 Post 64 di Pakistan – mesin pembuat batang yang andal untuk produksi stabil. Direkondisi dan didukung oleh Civic Tobacco Machinery.",
    tagline: "Mesin pembuat yang telah terbukti dan andal yang masih diandalkan pabrik.",
    intro: [
      "Molins Mark 8 Post 64 adalah mesin pembuat rokok berkinerja tinggi yang telah terbukti, dibuat untuk kualitas maupun fleksibilitas. Mesin ini berjalan stabil pada 1.800 hingga 2.000 rokok per menit dan dilengkapi printer warna ganda, sehingga Anda dapat mencetak kertas persis seperti yang dibutuhkan merek Anda tanpa memperlambat lini.",
      "Mesin ini menangani berbagai format — lingkar rokok dari 17mm hingga 28,3mm dan panjang gabungan batang filter dan tembakau dari 65mm hingga 110mm, yang mencakup segala sesuatu dari 84mm dan 100mm standar hingga slim, super slim, dan nano. Pemasangan filter Max Multiroll menjaga filter tetap berjalan lancar pada kecepatan penuh.",
      "Dengan berat sekitar 3.500kg, ini adalah mesin berat dan kokoh yang dibuat untuk menjaga kecepatannya selama proses produksi yang panjang. Kombinasi kecepatan, fleksibilitas format, dan keandalan ini menjadikan Mark 8 Post 64 pilihan cerdas untuk pabrik yang menginginkan output kuat dari satu mesin pembuat.",
    ],
    features: [
      "Desain Molins yang terbukti dan tahan lama",
      "Batang rata dan potongan bersih",
      "Suku cadang dan pengetahuan yang tersedia luas",
      "Mudah dirawat oleh teknisi",
      "Nilai luar biasa sebagai unit rekondisi",
    ],
    applications: ["Lini pembuat awal", "Mesin cadangan yang andal"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D dengan Sistem MAX-15",
    metaDescription:
      "Mesin pembuat rokok Molins Mark 8D dengan MAX-15 di Pakistan – 3.000 per menit untuk format King hingga Nano. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pembuat Mark 8D berkecepatan tinggi dengan sistem kontrol MAX-15.",
    intro: [
      "Molins Mark 8D dengan MAX-15 adalah mesin pembuat rokok yang kuat dan fleksibel, dibuat untuk memenuhi tuntutan pabrik tembakau modern. Mesin ini termasuk dalam keluarga mesin pembuat Mark 8 yang terkenal dan memberikan produsen Indonesia cara yang andal untuk meningkatkan output tanpa mengorbankan kualitas.",
      "Mesin ini berjalan hingga 3.000 rokok per menit, sehingga dengan nyaman menjaga kecepatannya pada lini produksi yang sibuk. Sama pentingnya, mesin ini menangani berbagai format. Baik Anda membuat King size, Demi, Slims, Super Slims, atau Nano, mesin yang sama dapat memproduksi semuanya, menjadikannya pilihan praktis untuk pabrik yang melayani beberapa segmen sekaligus.",
      "Mesin pembuat ini menerima lingkar rokok dari 17mm hingga 28,3mm dan panjang gabungan batang filter dan tembakau dari 65mm hingga 110mm, sehingga Anda tetap memiliki kendali penuh atas ukuran dan konsistensi dari satu proses produksi ke proses berikutnya.",
      "Konfigurasi ini memadukan mesin pembuat MK-8D dengan MAX-15 dan unit pengumpan 1117-nya. Bersama-sama, mereka menjalankan proses secara bersih dari pengumpanan tembakau hingga batang jadi, menjaga lini tetap stabil, mengurangi henti kerja, dan mempertahankan kualitas sepanjang shift. Dengan konsumsi total 17kW, mesin ini menyeimbangkan kecepatan produksi nyata dengan biaya operasional yang masuk akal.",
      "Meski memiliki banyak fitur, mesin ini tetap kompak. Dengan berat sekitar 5.000kg, mesin ini kokoh dan tahan lama, namun tetap masuk ke lantai produksi yang ada tanpa perlu renovasi besar, dan konstruksinya mampu menahan produksi yang panjang dan berkelanjutan. Setiap hari, mesin ini menghasilkan rokok yang seragam dengan sedikit limbah dan perawatan sedang, yang tepat menjadi kebutuhan pabrik yang berusaha beroperasi efisien namun tetap memenuhi permintaan di berbagai format.",
      "Singkatnya, Mark 8D dengan MAX-15 layak mendapat tempatnya berkat keandalan yang terbukti, dukungan format fleksibel dari slim hingga nano, output berkecepatan tinggi yang tetap akurat, operasi hemat energi, dan pemasangan yang mudah ke dalam lini otomatis. Baik Anda mengganti peralatan lama atau menambah kapasitas, ini adalah mesin pembuat siap masa depan yang menerapkan rekayasa klasik untuk produksi modern.",
    ],
    applications: ["Produksi skala besar", "Pabrik multi-format"],
  },
  "mark-9-5-lenze-servo-drives": {
    h1: "Molins Mark 9.5 dengan Penggerak Servo Lenze",
    metaDescription:
      "Molins Mark 9.5 dengan penggerak servo Lenze di Pakistan – hingga 3.500 per menit dengan PLC Siemens dan kontrol berat gelombang mikro. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini pembuat Mark 9.5 berkecepatan tinggi dengan penggerak servo Lenze.",
    intro: [
      "Molins Mark 9.5 dengan penggerak servo Lenze dibuat untuk produsen yang menginginkan output serius tanpa kehilangan fleksibilitas. Mesin ini menghasilkan hingga 3.500 rokok per menit pada diameter reguler dan 3.200 per menit pada format slim dan super slim, sehingga satu lini dapat mencakup rangkaian produk yang luas dengan kecepatan produksi nyata.",
      "Mesin ini bekerja pada lingkar rokok dari 17mm hingga 28,3mm dan panjang gabungan batang filter dan tembakau dari 65mm hingga 110mm, memberikan ruang untuk beralih format sambil tetap mempertahankan batang yang konsisten dari satu proses ke proses berikutnya.",
      "Lini ini menyatukan tiga unit — mesin pembuat MK-9.5, perakit filter MAX-S, dan pengisi baki otomatis HCF80, yang masing-masing mengonsumsi 35kW, 20kW, dan 15kW. Bersama-sama, mereka menjalankan proses dari pembuatan hingga baki terisi dengan penanganan manual yang sangat minim di antaranya.",
      "Kontrol dan akurasi menjadi inti dari mesin ini. PLC Siemens menjalankan urutan dengan lancar, sistem gelombang mikro menjaga kontrol ketat atas berat batang, dan penggerak servo Lenze memberikan gerakan yang presisi dan stabil yang menjaga kualitas tetap tinggi bahkan pada kecepatan penuh.",
      "Dengan berat total sekitar 8.600kg, ini adalah lini yang berat dan kokoh yang dibuat untuk produksi skala besar. Untuk pabrik yang membutuhkan output skala besar yang andal dengan kontrol modern dan servis yang mudah, Mark 9.5 dengan penggerak servo Lenze adalah pilihan kuat yang siap untuk masa depan.",
    ],
    applications: ["Produksi skala besar", "Pabrik multi-format"],
  },
  "mark-9-5-max-s-tray-filler": {
    h1: "Molins Mark-9.5 dengan Max S & Pengisi Baki",
    metaTitle: "Molins Mark-9.5 dengan Max S & Pengisi Baki",
    metaDescription:
      "Molins Mark-9.5 dengan Max S dan pengisi baki di Pakistan – 4.500 hingga 5.000 rokok per menit. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pembuat Mark-9.5 berkecepatan tinggi dengan Max S dan pengisi baki aliran massal.",
    intro: [
      "Molins Mark-9.5 dengan Max S dan pengisi baki adalah pilihan premium bagi produsen yang membutuhkan output berkecepatan tinggi, integrasi filter yang rapi, dan kemampuan produksi yang andal dalam satu lini. Direkayasa untuk volume besar, mesin ini berjalan pada kecepatan luar biasa 4.500 hingga 5.000 rokok per menit, menempatkannya di antara sistem paling efisien yang tersedia untuk pabrik skala besar di Pakistan.",
      "Di pusat konfigurasi ini adalah mesin pembuat MK-9.5, pengembangan dari seri Mark 9 yang telah terbukti, yang mempertahankan output kuat sambil menjaga presisi dan konsistensi tinggi. Mesin ini mendukung lingkar rokok dari 17mm hingga 28,3mm dan panjang gabungan batang filter dan tembakau dari 65mm hingga 110mm, sehingga Anda dapat berpindah antara King size, Slims, Demi, dan format lainnya tanpa kehilangan kualitas batang.",
      "Mesin pembuat ini dipadukan dengan perakit filter Max-S, yang memasang filter ke batang tembakau secara akurat dan dapat diulang. Bekerja melalui pengisi baki aliran massal, mesin ini meningkatkan throughput sambil menjaga limbah material dan ketidaksejajaran tetap rendah, sehingga integritas filter tetap konsisten di setiap siklus produksi.",
      "Ukuran setelan standar 84mm menjaga mesin tetap sesuai dengan dimensi rokok yang diterima secara global, menjadikannya solusi praktis baik untuk pasokan lokal maupun produksi ekspor. Baik Anda menjalankan merek sendiri atau memenuhi kontrak besar, mesin ini berpindah dengan lancar antar batch dan beradaptasi dengan mudah terhadap pesanan yang berubah.",
      "Dengan berat sekitar 7.800kg, ini adalah lini yang berat dan stabil yang dibuat untuk operasi berkelanjutan dan masa pakai yang panjang. Bagi pabrik yang ingin berkembang sambil menjaga kualitas dan waktu henti yang rendah, Mark-9.5 dengan Max S dan pengisi baki memadukan kecepatan, fleksibilitas, dan keandalan yang dibutuhkan lantai produksi — dari pembuatan yang telah terbukti dan pemasangan filter yang presisi hingga pengumpanan aliran massal yang efisien dan rangka berat yang tahan lama.",
    ],
    applications: ["Produksi skala besar", "Produksi siap ekspor"],
  },
  "mark-9-max-s": {
    h1: "Molins MK-9 dengan Max S",
    metaTitle: "Molins MK-9 dengan Max S",
    metaDescription:
      "Molins MK-9 dengan Max S di Pakistan – 4.500 hingga 5.000 rokok per menit dengan pengisi baki aliran massal. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pembuat MK-9 berkecepatan tinggi dengan Max S dan pengisi baki aliran massal.",
    intro: [
      "Molins MK-9 dengan Max S adalah mesin pembuat rokok berefisiensi tinggi lainnya yang dibuat untuk produksi serius, berjalan antara 4.500 dan 5.000 rokok per menit. Ini adalah pilihan yang andal untuk pabrik di Pakistan yang menginginkan output kuat dan stabil dari satu lini.",
      "Mesin pembuat MK-9 di intinya menjaga produksi tetap presisi dan konsisten shift demi shift. Mesin ini bekerja pada lingkar rokok dari 17mm hingga 28,3mm dan panjang gabungan batang filter dan tembakau dari 65mm hingga 110mm, sehingga Anda mendapatkan fleksibilitas nyata untuk berpindah antar format tanpa kehilangan kualitas batang.",
      "Mesin ini dilengkapi dengan perakit filter Max-S dan pengisi baki aliran massal, yang membuat langkah pemasangan filter lebih cepat dan lebih andal sambil menjaga limbah dan ketidaksejajaran tetap rendah. Ukuran setelan standar 84mm menjaganya tetap sesuai dengan dimensi rokok yang diterima secara luas, sehingga mudah masuk ke sebagian besar rencana produksi.",
      "Dengan berat sekitar 7.800kg, MK-9 adalah mesin yang berat dan stabil yang dibuat untuk operasi berkelanjutan dan masa pakai yang panjang. Bagi pabrik yang meningkatkan produksi skala besar sambil menjaga kualitas, ini adalah tambahan yang solid dan andal untuk lantai produksi.",
    ],
    applications: ["Produksi skala besar", "Lini pembuat utama"],
  },
  "protos-70": {
    h1: "Protos 70",
    metaTitle: "Mesin Pembuat Rokok Hauni Protos 70",
    metaDescription:
      "Mesin pembuat rokok Hauni Protos 70 di Pakistan – hingga 7.000 per menit dengan kontrol IPC Siemens atau Beckhoff. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini pembuat Protos 70 berkecepatan tinggi, hingga 7.000 rokok per menit.",
    intro: [
      "Hauni Protos 70 adalah mesin pembuat rokok canggih yang dibuat untuk memenuhi standar tertinggi efisiensi produksi dan presisi. Mesin ini berjalan pada kecepatan mengesankan 7.000 rokok per menit pada diameter reguler dan 6.000 per menit pada format slim dan super slim, memberikan pabrik di Pakistan kecepatan dan fleksibilitas nyata dari satu lini.",
      "Mesin ini menangani lingkar rokok dari 17mm hingga 28,3mm dan panjang gabungan batang filter dan tembakau dari 65mm hingga 110mm, sehingga Anda dapat berpindah antar format sambil tetap mempertahankan batang yang konsisten dari satu proses ke proses berikutnya.",
      "Sistem kontrol IPC Siemens atau IPC Beckhoff menjaga urutan tetap otomatis, lancar, dan andal, sementara sistem kontrol berat gelombang mikro menjaga berat setiap rokok tetap presisi untuk konsistensi produk yang stabil. Lini ini menyatukan mesin pembuat batang S7000, pemasangan ujung filter M8000, dan pengisi baki otomatis F80, masing-masing menangani tahap prosesnya sendiri dengan rapi.",
      "Dengan daya 50kW untuk S7000, 20kW untuk M8000, dan 15kW untuk F80, Protos 70 adalah lini yang kuat dan mumpuni. Dengan berat total sekitar 10.800kg, mesin ini berat dan stabil, dibuat untuk operasi berkelanjutan dan masa pakai yang panjang, menjadikannya pilihan ideal untuk produksi rokok skala besar.",
    ],
    applications: ["Produksi skala besar", "Manufaktur skala besar"],
  },
  "protos-80-er": {
    h1: "Protos 80 ER",
    metaTitle: "Mesin Pembuat Rokok Hauni Protos 80 ER",
    metaDescription:
      "Mesin pembuat rokok Hauni Protos 80 ER di Pakistan – hingga 8.000 per menit dengan kontrol IPC Siemens atau Beckhoff. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini pembuat Protos 80 ER berkecepatan tinggi, hingga 8.000 rokok per menit.",
    intro: [
      "Protos 80 ER adalah mesin pembuat rokok berkinerja tinggi yang direkayasa untuk produsen yang menginginkan efisiensi, presisi, dan output maksimal. Dibuat oleh Hauni, seri Protos 80 dikenal karena keandalan dan otomatisasi canggihnya, dan baik Anda memproduksi rokok reguler atau slim, mesin ini memberikan konsistensi dan produktivitas yang kuat, menjadikannya pilihan tepercaya untuk lini skala besar di Pakistan.",
      "Kapasitas adalah tempat mesin ini benar-benar menonjol. Mesin ini menghasilkan hingga 8.000 rokok per menit pada diameter reguler dan 7.000 per menit pada format slim dan super slim. Mesin ini menerima lingkar rokok dari 17mm hingga 28,3mm dan panjang gabungan batang filter dan tembakau dari 65mm hingga 110mm, sehingga tetap fleksibel terhadap berbagai jenis rokok dan permintaan pasar. Dari king size hingga slim hingga format khusus, Protos 80 ER beradaptasi dengan cara Anda berproduksi.",
      "Untuk presisi dan waktu operasional, mesin ini menjalankan sistem kontrol PLC tingkat tinggi pada IPC Siemens atau IPC Beckhoff, menjaga seluruh siklus tetap lancar dan otomatis. Pemantauan waktu nyata dan respons sistem yang cepat mengurangi kesalahan manusia dan menjaga lini tetap berjalan, sementara sistem kontrol berat gelombang mikro bawaan menjaga berat rokok tetap konsisten pada setiap unit untuk kontrol kualitas yang ketat.",
      "Lini ini terdiri dari tiga unit kuat yang bekerja bersama — mesin pembuat batang S7000 pada 50kW, pemasangan ujung filter M8000 pada 20kW, dan pengisi baki otomatis F80 pada 15kW. Dikenal karena keandalannya dan digunakan di pabrik rokok di seluruh dunia, seri Protos 80 memadukan penggunaan energi yang efisien, limbah rendah, dan rekayasa presisi untuk menjaga biaya operasional tetap rendah sementara standar produk tetap tinggi. Dengan berat total sekitar 10.800kg, ini adalah lini yang berat dan stabil yang dibuat untuk produksi berkelanjutan dan skala besar.",
    ],
    applications: ["Produksi skala besar", "Manufaktur skala besar"],
  },
  "kdf-1": {
    h1: "Mesin Pembuat Filter Rokok Hauni KDF-1",
    metaTitle: "Mesin Pembuat Filter Hauni KDF-1",
    metaDescription:
      "Mesin pembuat filter Hauni KDF-1 di Pakistan – filter 120mm dengan PLC Siemens/Beckhoff dan kontrol lingkar berbasis laser. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini pembuat filter Hauni KDF-1 dengan kontrol lingkar berbasis laser.",
    intro: [
      "Hauni KDF-1 adalah lini pembuat filter yang tepercaya dan bertenaga dengan reputasi kuat dalam performa, presisi, dan daya tahan dalam produksi rokok. Dibuat untuk tuntutan produksi skala besar, KDF-1 cocok untuk produsen di Pakistan yang mengutamakan konsistensi, kecepatan, dan kualitas.",
      "Dibuat untuk operasi berkapasitas tinggi, mesin ini menawarkan kapasitas produksi yang kuat untuk filter 120mm, yang bekerja dengan baik untuk format rokok standar maupun kustom. Mesin ini mendukung lingkar filter dari 16,8mm hingga 28,1mm dan panjang filter dari 64mm hingga 150mm, sehingga Anda dapat memproduksi berbagai ukuran dan jenis filter tanpa perubahan mesin yang terus-menerus. Dari filter King Size hingga Slims dan desain khusus, KDF-1 menanganinya semua secara efisien.",
      "Mesin ini berjalan pada sistem kontrol PLC canggih yang tersedia dalam konfigurasi Siemens atau Beckhoff, memberikan kontrol intuitif, diagnostik waktu nyata, dan otomatisasi andal yang menjaga kualitas filter tetap stabil sepanjang proses produksi. Sistem servo Lenze atau Beckhoff menambah stabilitas dan menjaga gerakan tetap lancar dan akurat.",
      "Fitur unggulan adalah sistem kontrol lingkar berbasis laser, yang mengukur lingkar setiap filter dengan presisi tinggi, mengurangi deviasi dan menjaga keseragaman setiap batch. Tingkat akurasi ini penting untuk menjaga standar kualitas merek pada produk premium.",
      "Meski memiliki output besar, KDF-1 menjaga profil energi yang seimbang dengan total 40kW, membuatnya efisien untuk operasi jangka panjang. Konstruksinya yang kokoh dan direkayasa dengan baik memberikan masa pakai yang panjang, dan desain modular serta kompatibilitas dengan berbagai jenis rokok menjadikannya cocok untuk produksi filter skala kecil maupun besar, baik Anda memperluas kapasitas atau meningkatkan peralatan lama.",
    ],
    applications: ["Produksi filter skala besar", "Filter standar dan khusus"],
  },
  "kdf-2": {
    h1: "Mesin Pembuat Filter Rokok Hauni KDF-2",
    metaTitle: "Mesin Pembuat Filter Berkecepatan Tinggi Hauni KDF-2",
    metaDescription:
      "Mesin pembuat filter Hauni KDF-2 di Pakistan – 400 meter tow asetat per menit dengan PLC Siemens/Beckhoff. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Lini pembuat filter Hauni KDF-2 berkecepatan tinggi pada 400 meter per menit.",
    intro: [
      "Hauni KDF-2 adalah mesin pembuat filter kelas dunia yang dibuat untuk produksi filter rokok berefisiensi tinggi dan berkapasitas besar. Dikenal karena kualitas rekayasa dan otomatisasi canggihnya, KDF-2 adalah pilihan tepercaya bagi produsen skala besar di Pakistan yang membutuhkan presisi maupun produktivitas.",
      "Mesin ini berjalan dengan kecepatan yang mengesankan, memproses 400 meter tow asetat per menit, sehingga cocok untuk tuntutan lini produksi modern. Kecepatan itu diimbangi dengan fleksibilitas nyata: mesin ini mendukung lingkar filter dari 16,8mm hingga 28,1mm dan panjang filter dari 64mm hingga 150mm, sehingga mencakup segala sesuatu dari filter King Size standar hingga format yang lebih khusus dengan konsistensi, kualitas, dan waktu henti minimal.",
      "Yang membedakan KDF-2 adalah otomatisasinya. Sistem kontrol PLC, tersedia dalam konfigurasi Siemens atau Beckhoff, memberikan kontrol penuh dan pemantauan waktu nyata, sementara sistem servo Lenze atau Beckhoff berkinerja tinggi menjaga gerakan tetap akurat dan operasi tetap andal. Hal ini mengurangi margin kesalahan dan menjaga kualitas filter tetap seragam, sehingga mesin terintegrasi dengan mulus sebagai tulang punggung yang andal untuk produksi skala besar yang berkelanjutan.",
      "Dibuat untuk daya tahan, KDF-2 dipasangkan dengan pembuka tow dan pengisi baki otomatis HCF80 untuk merampingkan alur kerja dan mengurangi penanganan manual. Mesin ini mengonsumsi 40kW untuk unit KDF-2 utama dan 15kW untuk pengisi HCF80, memadukan efisiensi energi dengan performa yang kuat.",
      "Meski memiliki semua kemampuan itu, KDF-2 menjaga ukuran yang mudah dikelola sekitar 6.500kg, dan konstruksinya yang kokoh memberikan daya tahan jangka panjang di bawah jadwal produksi yang menuntut. Baik Anda mendirikan fasilitas baru atau meningkatkan peralatan yang ada, ini adalah investasi cerdas yang masuk dengan rapi ke dalam sistem produksi modern sambil memberikan kualitas filter yang unggul.",
    ],
    applications: ["Produksi filter skala besar", "Manufaktur skala besar"],
  },
  "molins-pm-5": {
    h1: "Mesin Filter Molins PM-5",
    metaTitle: "Mesin Pembuat Filter Rokok Molins PM-5",
    metaDescription:
      "Mesin pembuat filter Molins PM-5 di Pakistan – mesin berkapasitas tinggi dengan 4.000 filter per menit. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pembuat filter berkapasitas tinggi Molins, 4.000 filter per menit.",
    intro: [
      "Molins PM-5 adalah mesin pembuat filter rokok berkapasitas tinggi yang dibuat untuk tuntutan produksi skala besar. Dengan kapasitas 4.000 filter per menit, mesin ini merupakan contoh kuat efisiensi dan presisi dalam manufaktur filter, pilihan yang andal untuk pabrik yang sibuk di Pakistan.",
      "Mesin ini menawarkan fleksibilitas berguna pada ukuran filter, dengan diameter batang filter 7,5–7,8mm dan panjang batang filter dari 108 hingga 126mm, sehingga dapat mengakomodasi berbagai spesifikasi filter tanpa kesulitan.",
      "Dengan berat sekitar 2.000kg, PM-5 memiliki konstruksi kokoh yang memberikan daya tahan dan operasi yang stabil dalam jangka panjang. Dibuat oleh Molins, nama yang terkenal di industri ini, mesin ini memadukan rekayasa yang telah terbukti dengan output berkecepatan tinggi, menjadikannya aset penting bagi produsen yang menginginkan filter berkualitas sambil memaksimalkan throughput.",
    ],
    applications: ["Produksi filter skala besar", "Lini berbasis Molins"],
  },
  "hollow-tube-maker": {
    h1: "Mesin Pembuat Tabung Berongga",
    metaTitle: "Mesin Pembuat Tabung Berongga, Mesin Filter Rokok",
    metaDescription:
      "Mesin pembuat tabung berongga di Pakistan – 2.100 per menit dengan perakit filter untuk tabung filter khusus. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Mesin pembuat tabung berongga berkecepatan tinggi, 2.100 rokok per menit.",
    intro: [
      "Mesin Pembuat Tabung Berongga menonjol karena kapasitas produksi dan operasi berkecepatan tingginya. Mampu memproduksi 2.100 rokok per menit, mesin ini memberikan efisiensi yang kuat dan output yang konsisten. Rentang kecepatan batang dari 140 hingga 175 meter per menit, bersama dengan kecepatan potong hingga 2.500 batang per menit, menegaskan betapa cocoknya mesin ini untuk produksi skala besar bagi pabrik di Pakistan.",
      "Pada 3.050kg, mesin ini memiliki konstruksi kokoh untuk daya tahan dan keandalan jangka panjang. Perakit filter menambah 1.800kg lagi dan bekerja selaras dengan mesin untuk produksi tabung yang presisi dan efisien. Total konsumsi daya adalah 14kW, terbagi antara 6,5kW untuk mesin dan 7,5kW untuk perakit filter, yang mencapai keseimbangan baik antara performa dan konsumsi energi.",
      "Dirancang untuk manufaktur skala besar, Mesin Pembuat Tabung Berongga menggunakan teknologi terkini untuk menghasilkan tabung berkualitas tinggi. Kemampuan berkecepatan tinggi dan rekayasa yang kokoh menjadikannya aset berharga bagi produsen yang perlu memenuhi permintaan besar sambil menjaga standar produksi yang unggul.",
    ],
    applications: ["Produksi filter skala besar", "Tabung filter khusus"],
  },
  "tobacco-feeder": {
    h1: "Pengumpan Tembakau",
    metaTitle: "Pengumpan Tembakau untuk Mesin Pembuat Rokok",
    metaDescription:
      "Pengumpan tembakau di Pakistan – aliran tembakau yang stabil dan merata untuk mesin pembuat Mark 8 dan Mark 9. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Memasok aliran tembakau yang stabil dan merata untuk mesin pembuat Mark 8 dan Mark 9.",
    intro: [
      "Pengumpan tembakau adalah mesin input yang krusial untuk pabrik rokok. Mesin ini memasok tembakau secara terus-menerus dan merata ke mesin pembuat, melapisinya dengan rapi sehingga siap tepat seperti yang dibutuhkan produksi.",
      "Mesin ini kompatibel dengan mesin Mark 8 dan Mark 9, sehingga mudah masuk ke sistem yang sudah ada. Pengaturan volume yang dapat disesuaikan memungkinkan Anda mengontrol aliran tembakau secara presisi, yang meningkatkan efisiensi produksi, dan otomatisasinya mengurangi penanganan manual, merampingkan operasi, dan menjaga produktivitas tetap tinggi.",
    ],
    applications: ["Pengumpanan mesin pembuat", "Produksi batang yang stabil"],
  },
  "cigarette-reclaimer": {
    h1: "Reklaimer Rokok",
    metaTitle: "Reklaimer Rokok, Mesin Pemulihan Tembakau",
    metaDescription:
      "Reklaimer rokok di Pakistan – memulihkan tembakau dari limbah produksi pada 120 kg/jam dengan efisiensi 99,8%. Dipasok oleh Civic Tobacco Machinery.",
    tagline: "Memulihkan tembakau dari limbah pada 120 kg/jam dengan efisiensi 99,8%.",
    intro: [
      "Reklaimer Rokok adalah mesin pemulihan tembakau yang sangat baik untuk limbah manufaktur rokok. Mesin ini memisahkan tembakau yang dapat digunakan kembali dari material limbah dengan kehilangan yang sangat kecil, sehingga tembakau yang seharusnya Anda buang kembali masuk ke produksi.",
      "Pada kapasitas maksimum, mesin ini memulihkan 120 kg per jam dan bekerja dengan efisiensi mengesankan 99,8%, memberi Anda pemanfaatan setinggi mungkin. Dengan tingkat pemulihan 90%, mesin ini memberikan keuntungan nyata dalam mengurangi limbah dan meningkatkan efisiensi produksi secara keseluruhan.",
      "Mesin ini ramah pengguna dan mudah dipasang di lini produksi Anda, menjadikannya tambahan praktis dan hemat biaya bagi pabrik di Pakistan yang ingin memaksimalkan setiap batch.",
    ],
    applications: ["Pengurangan limbah", "Pemulihan tembakau"],
  },
  "tobacco-cutters": {
    h1: "Pemotong Tembakau Hauni KT-400",
    metaTitle: "Pemotong Tembakau Hauni KT-400",
    metaDescription:
      "Pemotong Tembakau Hauni KT-400 di Pakistan – pemotong lima pisau dengan ukuran potongan yang diatur PLC. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Pemotong Tembakau Hauni KT-400 dengan lima pisau dan kontrol ukuran potongan berbasis PLC.",
    intro: [
      "Pemotong Tembakau Hauni KT-400 adalah mesin yang direkayasa dengan presisi yang memainkan peran krusial dalam menjaga kualitas potongan yang konsisten dalam pengolahan tembakau. Mesin ini memiliki lima pisau, yang memberikan potongan seragam dan meningkatkan kualitas keseluruhan campuran tembakau, dan silinder pneumatik menggerakkan rahang untuk pemotongan yang lancar dan efisien dengan waktu henti dan perawatan yang lebih sedikit.",
      "KT-400 juga menjalankan sistem penggerak PLC canggih pada bilah lengkung kuningan, yang mengatur ukuran potongan secara presisi. Hal ini menjaga setiap batch tetap seragam dan memungkinkan Anda menyesuaikan ukuran potongan dengan kebutuhan spesifik, menambah fleksibilitas nyata. Dengan presisi dan keandalannya, KT-400 adalah aset penting untuk setiap fasilitas pengolahan tembakau di Pakistan yang menargetkan kualitas dan efisiensi terbaik.",
    ],
    applications: ["Pengolahan primer", "Persiapan rajangan"],
  },
  "tobacco-stem-flattener": {
    h1: "Pemipih Batang Tembakau",
    metaTitle: "Pemipih Batang Tembakau, Mesin Pengolahan Primer",
    metaDescription:
      "Pemipih batang tembakau di Pakistan – memipihkan batang untuk pencampuran seragam dan limbah daun yang lebih sedikit. Dipasok dan diservis oleh Civic Tobacco Machinery.",
    tagline: "Memipihkan batang tembakau untuk pencampuran seragam dan limbah daun yang lebih sedikit.",
    intro: [
      "Pemipih Batang Tembakau memainkan peran kunci dalam mengoptimalkan alur kerja pengolahan tembakau. Dengan memipihkan batang tembakau, mesin ini menyiapkannya untuk pencampuran seragam dengan daun, yang meningkatkan kemudahan pengolahan dan mengurangi kemungkinan ketidakkonsistenan pada produk akhir.",
      "Dengan memipihkan batang secara efisien, mesin ini juga meminimalkan limbah daun, membuat seluruh proses lebih ekonomis dan berkelanjutan. Hasilnya adalah produk yang konsisten dan berkualitas tinggi yang memenuhi standar industri yang ketat, menjadikan pemipih batang aset berharga bagi setiap operasi pengolahan tembakau di Pakistan.",
    ],
    applications: ["Pengolahan primer", "Peningkatan hasil"],
  },
};

/* ---------------------------- Turkish content ------------------------------ */

const tr: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "HLP-180 Sigara Paketleme Makinesi",
    metaTitle: "HLP-180 Paketleme Makinesi, 180 Paket/Dk",
    metaDescription:
      "HLP-180 sigara paketleme makinesi, Pakistan'da – King'den Nano'ya kadar formatlarda PLC kontrollü dakikada 180 paket. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Dakikada 180 paket üreten yüksek hızlı sert paket hattı.",
    intro: [
      "HLP-180, yüksek hızlı sigara paketlemesi için üretilmiş güçlü, yeni nesil bir makinedir. Tutarlı performansı ve güvenilir üretimiyle bilinen HLP-180 paketleyici, kaliteden veya hassasiyetten ödün vermeden paketleme sürecini kolaylaştırmak isteyen üreticilere uygundur.",
      "Dakikada 180 paket üretimle, tekli piston mekanizması sayesinde verimli ve düzenli paketleme döngüleri çalıştırır; her pakette mükemmel hizalama, sarma ve mühürleme sağlar. Bu, Pakistan'daki fabrikaların temiz ve tekrarlanabilir bir bitiş sürdürürken yüksek talebi karşılamasına olanak tanır.",
      "King Size, Demi, Slims, Super Slims ve Nano dahil olmak üzere geniş bir sigara boyutu yelpazesini işleyecek şekilde tasarlanmıştır. Bu esneklik, aynı makinede geleneksel formatlardan niş ürünlere kadar yerel ve ihracat pazarlarında farklı tüketici tercihlerine hizmet edebileceğiniz anlamına gelir.",
      "PLC kontrol sistemi çalışmayı doğru ve tamamen otomatik tutar, böylece her paket tekdüze, iyi sarılmış ve satışa hazır çıkar. Kullanıcı dostu arayüz, operatörlere hız, hata algılama ve üretim izleme üzerinde tam kontrol sağlar; bu da duruş süresini azaltır ve genel verimliliği artırır.",
      "HLP-180'i gerçekten öne çıkaran şey, paket şekillerindeki esnekliğidir. Round corner, bevel edge, D-type ve square paket formatlarını destekler, böylece markalar ambalajlarını farklılaştırabilir, rafta öne çıkabilir ve değişen pazar trendlerini takip edebilir. Kesintisiz, büyük ölçekli üretim için üretilmiştir; bir hattı genişletirken veya eski ekipmanı yükseltirken güçlü bir seçimdir.",
    ],
    applications: ["Yüksek hacimli sert paket üretimi", "Yerel ve ihracat pazarları"],
  },
  "hlp-200": {
    h1: "HLP-200 Sigara Paketleme Makinesi",
    metaTitle: "HLP-200 Paketleme Makinesi, 200 Paket/Dk",
    metaDescription:
      "HLP-200 sigara paketleme makinesi, Pakistan'da – King'den Nano'ya kadar formatlarda dakikada 200 paket çift pistonlu hat. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Dakikada 200 paket üreten çift pistonlu sert paket hattı.",
    intro: [
      "HLP-200, küçük-orta ve yüksek hacimli üretim için üretilmiş çift pistonlu bir hazne paketleme makinesidir. Malzemeyi dikkatli kullandığı ve işletme maliyetlerini düşük tutmaya yardımcı olurken hızlı, istikrarlı bir tempo sürdürdüğü için Pakistan'daki üreticiler arasında popüler bir tercihtir.",
      "Dakikada 200 paket ve yaklaşık 12.000 sigaralık maksimum verimle çalışan makine, paketleme hattının ilk kritik ünitesi olarak paketi şekillendirir ve tamamlar, ardından sargı ve kutulamaya geçer. Tüm yaygın sigara paket formatlarını destekler, böylece çoğu üretim düzenine kolayca uyum sağlar.",
      "Makine, King Size, Demi, Slims, Super Slims ve Nano dahil olmak üzere geniş bir sigara boyutu yelpazesini işler ve çift piston sistemi paketleme döngüsünü verimli ve bitişi tutarlı tutar. PLC kontrol sistemi çalışmayı doğru ve tamamen otomatik tutar, operatörlere hız, hata algılama ve izleme üzerinde net bir kontrol verir.",
      "Paket sunumu açısından round corner, bevel edge, D-type ve square formatları sunar, böylece markalar ambalajlarını rafta öne çıkacak şekilde şekillendirebilir. 220V/380V beslemeyle çalışan ve güvenilir, sürekli üretim için üretilmiş HLP-200, herhangi bir entegre paketleme hattı için sağlam bir çekirdek ünitedir.",
    ],
    applications: ["Yüksek hacimli sert paket üretimi", "Entegre paketleme hattının çekirdeği"],
  },
  "hlp-225": {
    h1: "HLP-225 Sigara Paketleme Makinesi",
    metaTitle: "HLP-225 Paketleme Makinesi, 225 Paket/Dk",
    metaDescription:
      "HLP-225 sigara paketleme makinesi, Pakistan'da – PLC kontrollü, dakikada 225 paket yüksek hızlı çift pistonlu hat. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Dakikada 225 paket üreten yüksek hızlı çift pistonlu sert paket hattı.",
    intro: [
      "HLP-225 paketleme hattı, sigara paketlemesinde gerçek bir ileri adımdır. Dakikada 225 paket üreten bu çift pistonlu makine, büyük ölçekte paketleme yapması gereken fabrikalar için yüksek verimlilik ve verim sağlar.",
      "King, Demi, Slims, Super Slims ve Nano dahil olmak üzere geniş bir sigara boyutu yelpazesini işlemek üzere tasarlanmıştır, böylece Pakistan'daki üreticiler tek bir makinede farklı pazar taleplerini karşılama esnekliği kazanır.",
      "Modern bir PLC kontrol sistemi doğruluğu artırır ve paketleme sürecini otomatikleştirir, manuel müdahaleyi ve hataları azaltır. HLP-225 ayrıca round corner, bevel edge, D-type ve square dahil olmak üzere birden fazla paket formatını destekler, bu da markaların ambalajlarını farklı tüketici tercihlerine ve gereksinimlerine göre uyarlamasına olanak tanır.",
      "Büyük ölçekli üretim için üretilen HLP-225, güvenilir ve tutarlı performans için gelişmiş özellikleri sağlam bir yapıyla birleştirir. Kaliteden ödün vermeden yüksek hızda paketleme yeteneği, üretimini artırmak ve rekabetçi kalmak isteyen her işletme için değerli bir varlık haline getirir.",
    ],
    applications: ["Yüksek hacimli sert paket üretimi", "Büyük ölçekli paketleme hatları"],
  },
  "sasib-5000": {
    h1: "SASIB 5000 Yumuşak Paket Makinesi",
    metaTitle: "SASIB 5000 Sigara Yumuşak Paket Makinesi",
    metaDescription:
      "SASIB 5000 sigara yumuşak paket makinesi, Pakistan'da – alüminyum folyo ve etiket sargılı 100mm yumuşak paketler. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Köşeleri kare 100mm paketler için SASIB yumuşak paket makinesi.",
    intro: [
      "SASIB 5000, 100mm sigaraların yumuşak paketlerini üretmek için üretilmiş çok yönlü bir makinedir. Bir mil etrafında gerçekleştirilen alüminyum folyo ve etiket sargısı kullanarak, düzgün kare köşeli mükemmel ve tutarlı paketler üretir.",
      "Bu sargı yöntemi sadece iyi görünmekle kalmaz; sigaraları korur ve her paketi sağlam tutarken, bitmiş ürünün görsel çekiciliğini de artırır. Premium bir yumuşak paket bitişi isteyen Pakistan'daki üreticiler için güvenilir, yüksek kaliteli bir seçimdir.",
      "Kanıtlanmış ve çalıştırması kolay olan SASIB 5000, kontrol edilmiş ve kurulmuş şekilde, üretim zeminine hazır olarak tedarik edilir, böylece güvenle güvenilir yumuşak paket kapasitesi ekleyebilirsiniz.",
    ],
    applications: ["Yumuşak paket üretimi", "100mm formatlar"],
  },
  "sasib-3000": {
    h1: "SASIB 3000 Yumuşak Paket Makinesi",
    metaTitle: "SASIB 3000 Sigara Yumuşak Paket Makinesi",
    metaDescription:
      "SASIB 3000 sigara yumuşak paket makinesi, Pakistan'da – alüminyum folyo ve etiket sargılı 84mm ve 100mm paketleri işler. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Köşeleri kare 84mm ve 100mm paketler için SASIB yumuşak paket makinesi.",
    intro: [
      "SASIB 3000, hem 84mm hem de 100mm sigara paketlerini işleyebilme yeteneğiyle SASIB yumuşak paket hattına ekstra çok yönlülük katar. Bir mil etrafında alüminyum folyo ve etiket sargısı kullanarak, SASIB'in ayırt edici bitişini korur — düzgün kare köşeli mükemmel ve tutarlı paketler.",
      "Bu çift boyut kapasitesi, SASIB 3000'i, üretimde esnekliğe ihtiyaç duyarken her paketi yüksek bir sunum ve koruma standardında tutmak isteyen Pakistan'daki üreticiler için değerli bir varlık haline getirir.",
      "Kontrol sistemleri, ayarlamaları ve bakımı basit hale getirir, bu da duruş süresini azaltmaya ve genel üretkenliği yüksek tutmaya yardımcı olur. Kontrol edilmiş ve kurulmuş şekilde, çalışmaya hazır olarak tedarik edilen bu makine, hem kalite hem de format esnekliği isteyen fabrikalar için güvenilir bir yumuşak paket hattıdır.",
    ],
    applications: ["Yumuşak paket üretimi", "84mm ve 100mm formatlar"],
  },
  "regular-wrapper-cp1": {
    h1: "Regular Wrapper CP1",
    metaTitle: "CP-1 Sigara Paketi Sargı Makinesi, 250 PPM",
    metaDescription:
      "CP-1 sigara paketi sargı makinesi, Pakistan'da – dakikada 250 pakete kadar dış sargı makinesi. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Dakikada 250 pakete kadar çalışan yüksek hızlı sigara paketi sargı makinesi.",
    intro: [
      "CP-1, ciddi üretim taleplerini kolayca karşılamak üzere üretilmiş yüksek performanslı bir sigara paketi sargı makinesidir. Dakikada 250 pakete varan sargı hızıyla, Pakistan'daki fabrikalar için paketleme hattının verimliliğini ve verimini artırır.",
      "Makine, mütevazı bir 6 KVA güç gereksinimi ve 0,05 m³/dk hava basıncı ihtiyacıyla çalışır, böylece enerji verimliliğini korurken güçlü performans sağlar. CP-1, malzeme israfını azaltan ve her paketi sıkı bir kalite standardında tutan hassas, tutarlı sargı için tasarlanmıştır.",
      "Sağlam yapısı ve güvenilir çalışması, onu yüksek hacimli hatlar için güvenilir bir varlık haline getirir, süreci sorunsuz ve çıktıyı temiz tutar. Ayrıca mevcut hatlara düzgünce entegre olur, bu da onu kaliteden ödün vermeden üretkenliği artırmak isteyen her tesis için pratik ve değerli bir katkı haline getirir.",
    ],
    applications: ["Paket dış sargısı", "Yüksek hacimli paketleme hatları"],
  },
  "naked-over-wrapper": {
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper, Sigara Dış Paket Sargı Makinesi",
    metaDescription:
      "Naked Over Wrapper, Pakistan'da – dakikada 25 dış paket işleyen sigara dış paket sargı makinesi. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Dakikada 25 dış paket işleyen dış paket sargı makinesi.",
    intro: [
      "Naked Over Wrapper, sigara dış paketlerini hassasiyet ve hızla sarmak için iyi tasarlanmış bir makinedir. Dakikada 25 dış paket sarar, bu da Pakistan'daki fabrikalar için hatta yüksek bir verimlilik seviyesi sağlar.",
      "6 KVA enerji ihtiyacı ve 0,05 m³/dk hava basıncıyla çalışır, yüksek güç tüketimi olmadan güvenilir çalışma performansı sağlar. Sağlam ve verimli olan bu makine, sigara üretim hattına sağlam bir katkıdır ve son aşamada ambalaj kalitesini artırır.",
    ],
    applications: ["Dış paket sargısı", "Hat sonu mühürleme"],
  },
  "molins-boxer": {
    h1: "Molins Boxer, Kutulama Makinesi",
    metaTitle: "Molins Boxer, Sigara Kutulama Makinesi",
    metaDescription:
      "Molins Boxer sigara kutulama makinesi, Pakistan'da – dakikada 20 kutuya kadar sigara kartonu üretimi. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Dakikada 20 kutuya kadar çalışan sigara kutulama makinesi.",
    intro: [
      "Molins Boxer, verimli çalışması ve sağlam verimiyle bilinen güvenilir bir sigara kutulama makinesidir. Dakikada 20 kutuya varan paketleme hızıyla, Pakistan'daki sigara paketleme hatlarının üretkenliğini artırır.",
      "0,05 m³/dk hava basıncında çalışarak enerji kullanımını istikrarlı çalışmayla dengeler. Güvenilirlik için tasarlanan Molins Boxer, paketlemeyi tutarlı ve hassas tutar, bu da duruş süresini azaltır ve ürün kalitesini yüksek tutar.",
      "Bu, onu verimlilik ve istikrarlı verime odaklanan her üretim düzeninin kritik bir parçası haline getirir; sarılmış paketleri alır ve hattın sonunda düzgün kartonlar oluşturur.",
    ],
    applications: ["Karton/kutu paketleme", "Hat sonu toplama"],
  },
  "sasib-boxer": {
    h1: "SASIB Boxer, Kutulama Makinesi",
    metaTitle: "SASIB Boxer, Sigara Kutulama Makinesi",
    metaDescription:
      "SASIB Boxer sigara kutulama makinesi, Pakistan'da – dakikada 25 kutuya kadar sigara kartonu üretimi. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Dakikada 25 kutuya kadar çalışan sigara kutulama makinesi.",
    intro: [
      "SASIB Boxer, hızı ve verimliliğiyle bilinen gelişmiş bir sigara kutulama makinesidir. Dakikada 25 kutuya kadar paketleme kapasitesiyle, Pakistan'daki bir sigara üretim hattının verimine gerçek bir katkı sağlar.",
      "6 KVA güç gereksinimiyle çalışarak güç ve performansı birleştirir, 0,1 m³/dk hava basıncı ihtiyacıyla enerji kullanımı ve operasyonel verimlilik arasında bir denge kurar.",
      "Yüksek düzeyde doğru, tutarlı paketleme için tasarlanan SASIB Boxer, duruş süresini en aza indirir ve süreci sadeleştirir; bu da onu, hız ve hassasiyetin üretkenlik ve ürün kalitesi için önemli olduğu yüksek hacimli ortamlarda değerli bir varlık haline getirir.",
    ],
    applications: ["Karton/kutu paketleme", "Yüksek hacimli paketleme hatları"],
  },
  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – Türkiye'de Sigara Üretim Makinesi",
    metaTitle: "MK 8 | Mark 8 Post 64 Sigara Üretim Makinesi",
    metaDescription:
      "Molins Mark 8 Post 64 sigara üretim makinesi, Pakistan'da – istikrarlı üretim için güvenilir çubuk üretim makinesi. Civic Tobacco Machinery tarafından yenilenir ve desteklenir.",
    tagline: "Fabrikaların hâlâ güvendiği kanıtlanmış, güvenilir üretim makinesi.",
    intro: [
      "Molins Mark 8 Post 64, hem kalite hem de esneklik için üretilmiş, kanıtlanmış, yüksek verimli bir sigara üretim makinesidir. Dakikada istikrarlı bir şekilde 1.800 ila 2.000 sigara üretir ve çift renkli yazıcı taşır, böylece kağıdı markanızın tam olarak ihtiyaç duyduğu şekilde, hattı yavaşlatmadan yazdırabilirsiniz.",
      "17mm ila 28,3mm sigara çevresi ve 65mm ila 110mm birleşik filtre ve tütün çubuğu uzunluğu dahil olmak üzere geniş bir format yelpazesini işler; bu, standart 84mm ve 100mm'den slim, super slim ve nano'ya kadar her şeyi kapsar. Max Multiroll filtre bağlantısı, filtrelerin tam hızda temiz bir şekilde ilerlemesini sağlar.",
      "Yaklaşık 3.500kg ağırlığıyla, uzun üretim koşuları boyunca temposunu korumak üzere üretilmiş ağır, sağlam bir makinedir. Hız, format esnekliği ve güvenilirliğin bu birleşimi, Mark 8 Post 64'ü tek bir üretim makinesinden güçlü bir verim isteyen fabrikalar için akıllı bir seçim haline getirir.",
    ],
    features: [
      "Kanıtlanmış, uzun ömürlü Molins tasarımı",
      "Düzgün çubuk ve temiz kesim",
      "Yaygın olarak bulunan parçalar ve bilgi birikimi",
      "Teknisyenler için kolay bakım",
      "Yenilenmiş ünite olarak muhteşem değer",
    ],
    applications: ["Giriş seviyesi üretim hattı", "Güvenilir yedek makine"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | MAX-15 ile Molins Mark 8D",
    metaDescription:
      "MAX-15 ile Molins Mark 8D sigara üretim makinesi, Pakistan'da – King'den Nano'ya kadar formatlarda dakikada 3.000 üretim. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "MAX-15 kontrol sistemli yüksek hızlı Mark 8D üretim makinesi.",
    intro: [
      "MAX-15 ile Molins Mark 8D, modern bir tütün fabrikasının taleplerine göre üretilmiş güçlü, esnek bir sigara üretim makinesidir. Tanınmış Mark 8 üretim makinesi ailesine aittir ve Türk üreticilere kaliteden ödün vermeden verimi artırmanın güvenilir bir yolunu sunar.",
      "Dakikada 3.000 sigaraya kadar çalışır, böylece yoğun bir üretim hattında temposunu rahatça korur. Aynı derecede önemli olan, geniş bir format yelpazesini işlemesidir. İster King size, Demi, Slims, Super Slims ister Nano üretin, aynı makine hepsini üretebilir; bu da onu birden fazla segmente aynı anda hizmet veren bir fabrika için pratik bir seçim haline getirir.",
      "Üretim makinesi, 17mm ila 28,3mm sigara çevresini ve 65mm ila 110mm birleşik filtre ve tütün çubuğu uzunluğunu kabul eder, böylece boyut üzerinde tam kontrolü korur ve bir üretimden diğerine tutarlılığı sürdürürsünüz.",
      "Kurulum, MK-8D sigara üretim makinesini MAX-15 ve 1117 besleme ünitesiyle eşleştirir. Birlikte, süreci tütün beslemeden bitmiş çubuğa kadar temiz bir şekilde yürütür, hattı istikrarlı tutar, duruşları azaltır ve vardiya boyunca kaliteyi korurlar. Toplam 17kW tüketimle, gerçek üretim hızını makul işletme maliyetleriyle dengeler.",
      "Yaptığı her şeye rağmen, makine kompakt kalır. Yaklaşık 5.000kg ağırlığıyla sağlam ve dayanıklıdır, ancak yine de büyük bir yeniden yapılanma olmadan mevcut bir zemine oturur ve yapısı uzun, sürekli üretime dayanır. Gün be gün, az israf ve orta düzeyde bakımla düzgün sigaralar üretir; bu da yalın çalışmaya çalışırken farklı formatlarda talebi karşılamaya çalışan bir fabrikanın tam olarak ihtiyaç duyduğu şeydir.",
      "Kısacası, MAX-15 ile Mark 8D, kanıtlanmış güvenilirlik, slim'den nano'ya esnek format desteği, doğru kalan yüksek hızlı üretim, enerji verimli çalışma ve otomatik bir hatta kolay yerleşimle yerini hak eder. İster eski ekipmanı değiştiriyor ister kapasite ekliyor olun, klasik mühendisliği modern üretime uygulayan geleceğe hazır bir üretim makinesidir.",
    ],
    applications: ["Yüksek hacimli üretim", "Çok formatlı fabrikalar"],
  },
  "mark-9-5-lenze-servo-drives": {
    h1: "Lenze Servo Sürücülü Molins Mark 9.5",
    metaDescription:
      "Lenze servo sürücülü Molins Mark 9.5, Pakistan'da – Siemens PLC ve mikrodalga ağırlık kontrolüyle dakikada 3.500'e kadar üretim. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Lenze servo sürücülü yüksek hızlı Mark 9.5 üretim hattı.",
    intro: [
      "Lenze servo sürücülü Molins Mark 9.5, esneklikten ödün vermeden ciddi verim isteyen üreticiler için üretilmiştir. Standart çaplarda dakikada 3.500'e, slim ve super slim formatlarda ise dakikada 3.200'e kadar sigara üretir, böylece tek bir hat gerçek üretim hızında geniş bir ürün yelpazesini kapsayabilir.",
      "17mm ila 28,3mm sigara çevresi ve 65mm ila 110mm birleşik filtre ve tütün çubuğu uzunluğu aralığında çalışır, bu da formatları değiştirme alanı sağlarken bir üretimden diğerine tutarlı bir çubuk sürdürmenizi mümkün kılar.",
      "Hat, sırasıyla 35kW, 20kW ve 15kW tüketen MK-9.5 üretim makinesi, MAX-S filtre montaj ünitesi ve HCF80 otomatik tepsi doldurucusu olmak üzere üç üniteyi bir araya getirir. Birlikte, süreci üretimden dolu tepsilere kadar aralarında çok az manuel işlemle yürütürler.",
      "Kontrol ve doğruluk bu makinenin merkezinde yer alır. Bir Siemens PLC sırayı sorunsuzca yönetir, bir mikrodalga sistemi çubuk ağırlığı üzerinde sıkı bir kontrol sağlar ve Lenze servo sürücüleri, tam hızda bile kaliteyi yüksek tutan hassas, istikrarlı bir hareket sunar.",
      "Yaklaşık 8.600kg toplam ağırlığıyla, büyük ölçekli üretim için üretilmiş ağır, sağlam bir hattır. Modern kontrollerle ve kolay servisle güvenilir, yüksek hacimli üretime ihtiyaç duyan bir fabrika için, Lenze servo sürücülü Mark 9.5 güçlü, geleceğe hazır bir seçimdir.",
    ],
    applications: ["Yüksek hacimli üretim", "Çok formatlı fabrikalar"],
  },
  "mark-9-5-max-s-tray-filler": {
    h1: "Max S ve Tepsi Doldurucu ile Molins Mark-9.5",
    metaTitle: "Max S ve Tepsi Doldurucu ile Molins Mark-9.5",
    metaDescription:
      "Max S ve tepsi doldurucu ile Molins Mark-9.5, Pakistan'da – dakikada 4.500 ila 5.000 sigara. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Max S ve akışlı tepsi doldurucu ile yüksek hızlı Mark-9.5 üretim makinesi.",
    intro: [
      "Max S ve tepsi doldurucu ile Molins Mark-9.5, tek bir hatta yüksek hızlı üretim, düzgün filtre entegrasyonu ve güvenilir üretim kapasitesi isteyen üreticiler için premium bir seçimdir. Hacim için tasarlanan bu makine, dakikada 4.500 ila 5.000 sigara gibi olağanüstü bir hızda çalışır; bu da onu Pakistan'daki büyük ölçekli fabrikalar için mevcut en verimli sistemler arasına sokar.",
      "Kurulumun merkezinde, kanıtlanmış Mark 9 serisinin bir evrimi olan ve güçlü verimi korurken yüksek hassasiyet ve tutarlılık sağlayan MK-9.5 üretim makinesi bulunur. 17mm ila 28,3mm sigara çevresini ve 65mm ila 110mm birleşik filtre ve tütün çubuğu uzunluğunu destekler, böylece çubuk kalitesini kaybetmeden King size, Slims, Demi ve diğer formatlar arasında geçiş yapabilirsiniz.",
      "Üretim makinesi, tütün çubuğuna filtreyi doğru ve tekrarlanabilir şekilde takan Max-S filtre montaj ünitesiyle eşleştirilmiştir. Akışlı bir tepsi doldurucu aracılığıyla çalışarak, malzeme israfını ve hizalama sorununu düşük tutarken verimi artırır, böylece filtre bütünlüğü her üretim döngüsünde tutarlı kalır.",
      "84mm varsayılan format boyutu, makineyi küresel olarak kabul edilen sigara boyutlarıyla uyumlu tutar, bu da onu hem yerel arz hem de ihracat üretimi için pratik bir seçim haline getirir. İster kendi markanızı çalıştırın ister büyük sözleşmeleri yerine getirin, partiler arasında sorunsuzca geçiş yapar ve değişen siparişlere kolayca uyum sağlar.",
      "Yaklaşık 7.800kg ağırlığıyla, sürekli çalışma ve uzun servis ömrü için üretilmiş ağır, istikrarlı bir hattır. Kaliteyi korurken ve duruş sürelerini düşük tutarken büyümek isteyen bir fabrika için, Max S ve tepsi doldurucu ile Mark-9.5, zeminin ihtiyaç duyduğu hızı, esnekliği ve güvenilirliği bir araya getirir — kanıtlanmış üretim ve hassas filtre bağlantısından sadeleştirilmiş akışlı beslemeye ve dayanıklı, ağır hizmet çerçevesine kadar.",
    ],
    applications: ["Yüksek hacimli üretim", "İhracata hazır üretim"],
  },
  "mark-9-max-s": {
    h1: "Max S ile Molins MK-9",
    metaTitle: "Max S ile Molins MK-9",
    metaDescription:
      "Max S ile Molins MK-9, Pakistan'da – akışlı tepsi doldurucuyla dakikada 4.500 ila 5.000 sigara. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Max S ve akışlı tepsi doldurucu ile yüksek hızlı MK-9 üretim makinesi.",
    intro: [
      "Max S ile Molins MK-9, dakikada 4.500 ila 5.000 sigara arasında çalışan, ciddi üretim için üretilmiş bir başka yüksek verimli sigara üretim makinesidir. Tek bir hattan güçlü, istikrarlı verim isteyen Pakistan'daki fabrikalar için güvenilir bir seçimdir.",
      "Merkezindeki MK-9 üretim makinesi, üretimi vardiya boyunca hassas ve tutarlı tutar. 17mm ila 28,3mm sigara çevresi ve 65mm ila 110mm birleşik filtre ve tütün çubuğu uzunluğu aralığında çalışır, böylece çubuk kalitesini kaybetmeden formatlar arasında geçiş yapmak için gerçek esneklik kazanırsınız.",
      "Max-S filtre montaj ünitesi ve akışlı bir tepsi doldurucuyla donatılmıştır; bunlar filtre bağlantı adımını daha hızlı ve daha güvenilir hale getirirken israf ve hizalama sorununu düşük tutar. 84mm varsayılan format boyutu, onu yaygın olarak kabul edilen sigara boyutlarıyla uyumlu tutar, böylece çoğu üretim planına kolayca uyar.",
      "Yaklaşık 7.800kg ağırlığıyla MK-9, sürekli çalışma ve uzun servis ömrü için üretilmiş ağır, istikrarlı bir makinedir. Kaliteyi korurken büyük ölçekli üretimi artıran bir fabrika için sağlam, güvenilir bir katkıdır.",
    ],
    applications: ["Yüksek hacimli üretim", "Ana üretim hattı"],
  },
  "protos-70": {
    h1: "Protos 70",
    metaTitle: "Hauni Protos 70 Sigara Üretim Makinesi",
    metaDescription:
      "Hauni Protos 70 sigara üretim makinesi, Pakistan'da – Siemens veya Beckhoff IPC kontrollü dakikada 7.000'e kadar üretim. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Dakikada 7.000 sigaraya kadar çalışan yüksek hızlı Protos 70 üretim hattı.",
    intro: [
      "Hauni Protos 70, üretim verimliliği ve hassasiyette en yüksek standartları karşılamak üzere üretilmiş gelişmiş bir sigara üretim makinesidir. Standart çaplarda dakikada etkileyici 7.000, slim ve super slim formatlarda ise dakikada 6.000 sigara üretir; bu da Pakistan'daki fabrikalara tek bir hatta gerçek hız ve esneklik sağlar.",
      "17mm ila 28,3mm sigara çevresini ve 65mm ila 110mm birleşik filtre ve tütün çubuğu uzunluğunu işler, böylece formatlar arasında geçiş yapabilir ve bir üretimden diğerine tutarlı bir çubuk sürdürebilirsiniz.",
      "Bir Siemens IPC veya Beckhoff IPC kontrol sistemi, sırayı otomatik, sorunsuz ve güvenilir tutarken, bir mikrodalga ağırlık kontrol sistemi her sigarayı istikrarlı ürün tutarlılığı için hassas bir ağırlıkta tutar. Hat, her biri kendi süreç aşamasını temiz bir şekilde işleyen S7000 sigara çubuğu üretim makinesini, M8000 filtre ucu bağlantısını ve F80 otomatik tepsi doldurucusunu bir araya getirir.",
      "S7000 için 50kW, M8000 için 20kW ve F80 için 15kW güçle, Protos 70 güçlü, kapasiteli bir hattır. Yaklaşık 10.800kg toplam ağırlığıyla ağır ve istikrarlıdır, sürekli çalışma ve uzun servis ömrü için üretilmiştir; bu da onu büyük ölçekli sigara üretimi için ideal bir seçim haline getirir.",
    ],
    applications: ["Yüksek hacimli üretim", "Büyük ölçekli üretim"],
  },
  "protos-80-er": {
    h1: "Protos 80 ER",
    metaTitle: "Hauni Protos 80 ER Sigara Üretim Makinesi",
    metaDescription:
      "Hauni Protos 80 ER sigara üretim makinesi, Pakistan'da – Siemens veya Beckhoff IPC kontrollü dakikada 8.000'e kadar üretim. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Dakikada 8.000 sigaraya kadar çalışan yüksek hızlı Protos 80 ER üretim hattı.",
    intro: [
      "Protos 80 ER, maksimum verimlilik, hassasiyet ve verim isteyen üreticiler için tasarlanmış yüksek performanslı bir sigara üretim makinesidir. Hauni tarafından üretilen Protos 80 serisi, güvenilirliği ve gelişmiş otomasyonuyla bilinir; ister standart ister slim sigaralar üretin, güçlü tutarlılık ve üretkenlik sunar, bu da onu Pakistan'daki yüksek hacimli hatlar için güvenilir bir seçim haline getirir.",
      "Bu makinenin gerçekten öne çıktığı yer kapasitedir. Standart çaplarda dakikada 8.000'e, slim ve super slim formatlarda ise dakikada 7.000'e kadar sigara üretir. 17mm ila 28,3mm sigara çevresini ve 65mm ila 110mm birleşik filtre ve tütün çubuğu uzunluğunu kabul eder, böylece farklı sigara türleri ve pazar talepleri karşısında esnek kalır. King size'dan slim'e, niş formatlara kadar Protos 80 ER üretim şeklinize uyum sağlar.",
      "Hassasiyet ve çalışma süresi için, bir Siemens IPC veya Beckhoff IPC üzerinde üst düzey bir PLC kontrol sistemi çalıştırır, tüm döngüyü sorunsuz ve otomatik tutar. Gerçek zamanlı izleme ve hızlı sistem yanıtı insan hatasını azaltır ve hattı çalışır tutarken, dahili bir mikrodalga ağırlık kontrol sistemi sıkı kalite kontrolü için her ünitede tutarlı bir sigara ağırlığı tutar.",
      "Hat, birlikte çalışan üç güçlü üniteden oluşur: 50kW'ta S7000 sigara çubuğu üretim makinesi, 20kW'ta M8000 filtre ucu bağlantısı ve 15kW'ta F80 otomatik tepsi doldurucusu. Güvenilirliğiyle tanınan ve dünya çapında sigara fabrikalarında kullanılan Protos 80 serisi, ürün standartları yüksek kalırken işletme maliyetlerini düşük tutmak için verimli enerji kullanımını, düşük israfı ve hassas mühendisliği birleştirir. Yaklaşık 10.800kg toplam ağırlığıyla, sürekli, büyük ölçekli üretim için üretilmiş ağır, istikrarlı bir hattır.",
    ],
    applications: ["Yüksek hacimli üretim", "Büyük ölçekli üretim"],
  },
  "kdf-1": {
    h1: "Hauni KDF-1 Sigara Filtre Üretim Makinesi",
    metaTitle: "Hauni KDF-1 Filtre Üretim Makinesi",
    metaDescription:
      "Hauni KDF-1 filtre üretim makinesi, Pakistan'da – Siemens/Beckhoff PLC ve lazer çevre kontrollü 120mm filtreler. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Lazer çevre kontrollü Hauni KDF-1 filtre üretim hattı.",
    intro: [
      "Hauni KDF-1, sigara üretiminde performans, hassasiyet ve dayanıklılık konusunda güçlü bir üne sahip, güvenilir, güçlü bir filtre üretim hattıdır. Büyük ölçekli üretimin taleplerine göre üretilen KDF-1, tutarlılığı, hızı ve kaliteyi ön planda tutan Pakistan'daki üreticilere uygundur.",
      "Yüksek verimli çalışma için üretilmiş olan makine, hem standart hem de özel sigara formatları için iyi çalışan 120mm filtreler için sağlam bir üretim kapasitesi sunar. 16,8mm ila 28,1mm filtre çevresini ve 64mm ila 150mm filtre uzunluğunu destekler, böylece sürekli makine değişimi olmadan geniş bir yelpazede filtre boyutu ve türü üretebilirsiniz. King Size filtrelerden Slims'e ve özel tasarımlara kadar, KDF-1 hepsini verimli bir şekilde işler.",
      "Siemens veya Beckhoff yapılandırmalarında mevcut gelişmiş bir PLC kontrol sistemiyle çalışır; sezgisel kontrol, gerçek zamanlı tanılama ve tüm koşu boyunca filtre kalitesini istikrarlı tutan güvenilir otomasyon sağlar. Lenze veya Beckhoff servo sistemleri, kararlılığa katkıda bulunur ve hareketi sorunsuz ve doğru tutar.",
      "Öne çıkan bir özellik, her filtrenin çevresini yüksek hassasiyetle ölçen, sapmayı azaltan ve her partinin tekdüzeliğini koruyan lazer tabanlı çevre kontrol sistemidir. Bu doğruluk seviyesi, premium ürünlerde marka kalite standartlarını korumak için önemlidir.",
      "Tüm verimine rağmen, KDF-1 toplam 40kW'lık dengeli bir enerji profilini korur, bu da uzun vadeli çalışma için verimli olmasını sağlar. Sağlam, iyi tasarlanmış yapısı uzun bir servis ömrü verir ve modüler tasarımı ile farklı sigara türleriyle uyumluluğu, kapasite genişletme veya eski makineleri yükseltme durumunda hem küçük hem de büyük ölçekli filtre üretimi için güçlü bir seçim haline getirir.",
    ],
    applications: ["Yüksek hacimli filtre üretimi", "Standart ve özel filtreler"],
  },
  "kdf-2": {
    h1: "Hauni KDF-2 Sigara Filtre Üretim Makinesi",
    metaTitle: "Hauni KDF-2 Yüksek Hızlı Filtre Üretim Makinesi",
    metaDescription:
      "Hauni KDF-2 filtre üretim makinesi, Pakistan'da – Siemens/Beckhoff PLC ile dakikada 400 metre asetat tow. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Dakikada 400 metre çalışan yüksek hızlı Hauni KDF-2 filtre üretim hattı.",
    intro: [
      "Hauni KDF-2, yüksek verimli, yüksek çıktılı sigara filtre üretimi için üretilmiş dünya standartlarında bir filtre üretim makinesidir. Mühendislik kalitesi ve gelişmiş otomasyonuyla tanınan KDF-2, hem hassasiyet hem de üretkenlik isteyen Pakistan'daki büyük ölçekli üreticiler için güvenilir bir seçimdir.",
      "Dakikada 400 metre asetat tow işleyerek etkileyici bir hızda çalışır, bu da onu modern üretim hatlarının taleplerine uygun hale getirir. Bu hıza gerçek çok yönlülük eşlik eder: 16,8mm ila 28,1mm filtre çevresini ve 64mm ila 150mm filtre uzunluğunu destekler, böylece standart King Size filtrelerden daha özel formatlara kadar her şeyi tutarlılık, kalite ve minimum duruş süresiyle kapsar.",
      "KDF-2'yi öne çıkaran şey, otomasyonudur. Siemens veya Beckhoff yapılandırmalarında mevcut bir PLC kontrol sistemi tam kontrol ve gerçek zamanlı izleme sağlarken, yüksek performanslı bir Lenze veya Beckhoff servo sistemi hareketleri doğru ve çalışmayı güvenilir tutar. Bu, hata payını azaltır ve filtre kalitesini tekdüze tutar, böylece makine sürekli, büyük ölçekli üretim için güvenilir bir omurga olarak sorunsuzca entegre olur.",
      "Dayanıklılık için üretilen KDF-2, iş akışını sadeleştirmek ve manuel işlemi azaltmak için bir tow açıcıyla ve HCF80 otomatik tepsi doldurucusuyla eşleştirilir. Ana KDF-2 ünitesi için 40kW ve HCF80 doldurucusu için 15kW çeker, enerji verimliliğini güçlü performansla birleştirir.",
      "Tüm bu kapasiteye rağmen, KDF-2 yaklaşık 6.500kg'lık yönetilebilir bir ayak izini korur ve sağlam yapısı, zorlu üretim programları altında uzun vadeli dayanıklılık sağlar. İster yeni bir tesis kuruyor ister mevcut ekipmanı yükseltiyor olun, üstün filtre kalitesi sunarken modern üretim sistemlerine düzgünce uyan akıllı bir yatırımdır.",
    ],
    applications: ["Yüksek hacimli filtre üretimi", "Büyük ölçekli üretim"],
  },
  "molins-pm-5": {
    h1: "Molins PM-5 Filtre Üretim Makinesi",
    metaTitle: "Molins PM-5 Sigara Filtre Üretim Makinesi",
    metaDescription:
      "Molins PM-5 filtre üretim makinesi, Pakistan'da – dakikada 4.000 filtre üreten yüksek kapasiteli makine. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Dakikada 4.000 filtre üreten yüksek kapasiteli Molins filtre üretim makinesi.",
    intro: [
      "Molins PM-5, büyük ölçekli üretimin taleplerine göre üretilmiş yüksek kapasiteli bir sigara filtre üretim makinesidir. Dakikada 4.000 filtre kapasitesiyle, filtre üretiminde verimlilik ve hassasiyetin güçlü bir örneğidir; Pakistan'daki yoğun fabrikalar için güvenilir bir seçimdir.",
      "7,5–7,8mm filtre çubuğu çapı ve 108 ila 126mm filtre çubuğu uzunluğuyla filtre boyutlandırmasında kullanışlı bir esneklik sunar, böylece zorluk çekmeden farklı filtre özelliklerine uyum sağlayabilir.",
      "Yaklaşık 2.000kg ağırlığıyla PM-5, uzun süreler boyunca dayanıklılık ve istikrarlı çalışma sağlayan sağlam bir yapıya sahiptir. Sektörde tanınmış bir isim olan Molins tarafından üretilen makine, kanıtlanmış mühendisliği yüksek hızlı üretimle birleştirir; bu da onu, verimi en üst düzeye çıkarırken kaliteli filtreler isteyen üreticiler için önemli bir varlık haline getirir.",
    ],
    applications: ["Yüksek hacimli filtre üretimi", "Molins tabanlı hatlar"],
  },
  "hollow-tube-maker": {
    h1: "İçi Boş Tüp Üretim Makinesi",
    metaTitle: "İçi Boş Tüp Üretim Makinesi, Sigara Filtre Makinesi",
    metaDescription:
      "İçi boş tüp üretim makinesi, Pakistan'da – özel filtre tüpleri için montaj üniteli, dakikada 2.100 üretim. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Dakikada 2.100 sigara üreten yüksek hızlı içi boş tüp üretim makinesi.",
    intro: [
      "İçi Boş Tüp Üretim Makinesi, üretim kapasitesi ve yüksek hızlı çalışmasıyla öne çıkar. Dakikada 2.100 sigara üretebilme kapasitesiyle güçlü verimlilik ve tutarlı verim sağlar. Dakikada 140 ila 175 metre çubuk hız aralığı ve dakikada 2.500 çubuğa varan kesme hızı, Pakistan'daki fabrikalar için büyük ölçekli üretime ne kadar uygun olduğunu vurgular.",
      "3.050kg'da makine, dayanıklılık ve uzun vadeli güvenilirlik için sağlam bir yapıya sahiptir. Montaj ünitesi 1.800kg daha ekler ve hassas, verimli tüp üretimi için makineyle uyumlu çalışır. Toplam güç tüketimi, makine için 6,5kW ve montaj ünitesi için 7,5kW olmak üzere 14kW'tır; bu da performans ve enerji tüketimi arasında iyi bir denge sağlar.",
      "Büyük ölçekli üretim için tasarlanan İçi Boş Tüp Üretim Makinesi, yüksek kaliteli tüpler üretmek için güncel teknolojiyi kullanır. Yüksek hızlı kapasitesi ve sağlam mühendisliği, mükemmel üretim standartlarını korurken güçlü talebi karşılaması gereken üreticiler için değerli bir varlık haline getirir.",
    ],
    applications: ["Yüksek hacimli filtre üretimi", "Özel filtre tüpleri"],
  },
  "tobacco-feeder": {
    h1: "Tütün Besleyici",
    metaTitle: "Sigara Üretim Makineleri için Tütün Besleyici",
    metaDescription:
      "Tütün besleyici, Pakistan'da – Mark 8 ve Mark 9 sigara üretim makineleri için istikrarlı, düzenli tütün akışı. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Mark 8 ve Mark 9 üretim makinelerine istikrarlı, düzenli bir tütün akışı sağlar.",
    intro: [
      "Tütün besleyici, bir sigara fabrikası için kritik bir giriş makinesidir. Tütünü üretim makinelerine sürekli ve düzenli olarak besler, üretim için tam olarak gerektiği gibi hazırlanmasını sağlayacak şekilde düzgünce katmanlar halinde yerleştirir.",
      "Mark 8 ve Mark 9 makineleriyle uyumludur, böylece mevcut bir düzene kolayca uyar. Ayarlanabilir hacim ayarları, tütün akışını hassas bir şekilde kontrol etmenizi sağlar; bu da üretim verimliliğini artırır ve otomasyonu manuel işlemi azaltır, çalışmayı sadeleştirir ve üretkenliği yüksek tutar.",
    ],
    applications: ["Üretim makinesi besleme", "İstikrarlı çubuk üretimi"],
  },
  "cigarette-reclaimer": {
    h1: "Sigara Geri Kazanım Makinesi",
    metaTitle: "Sigara Geri Kazanım Makinesi, Tütün Geri Kazanım Makinesi",
    metaDescription:
      "Sigara geri kazanım makinesi, Pakistan'da – %99,8 verimle saatte 120 kg üretim atığından tütün geri kazanır. Civic Tobacco Machinery tarafından tedarik edilir.",
    tagline: "Atıktan %99,8 verimle saatte 120 kg tütün geri kazanır.",
    intro: [
      "Sigara Geri Kazanım Makinesi, sigara üretim atığından tütün geri kazanımı için mükemmel bir makinedir. Yeniden kullanılabilir tütünü çok az kayıpla atık malzemelerden ayırır, böylece aksi halde atacağınız tütün üretime geri döner.",
      "Maksimum kapasitede saatte 120 kg geri kazanır ve etkileyici bir %99,8 verimle çalışır, size mümkün olan en yüksek kullanımı sağlar. %90 geri kazanım oranıyla, israfı azaltmak ve genel üretim verimliliğini artırmak konusunda gerçek bir avantaj sunar.",
      "Kullanıcı dostudur ve üretim hattınıza kolayca kurulabilir, bu da onu her partiden en iyi şekilde yararlanmak isteyen Pakistan'daki fabrikalar için pratik, maliyet tasarrufu sağlayan bir katkı haline getirir.",
    ],
    applications: ["Atık azaltma", "Tütün geri kazanımı"],
  },
  "tobacco-cutters": {
    h1: "Hauni Tütün Kesici KT-400",
    metaTitle: "Hauni Tütün Kesici KT-400",
    metaDescription:
      "Hauni Tütün Kesici KT-400, Pakistan'da – PLC ile ayarlanan kesim boyutuna sahip beş bıçaklı kesici. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Beş bıçaklı ve PLC ile kesim boyutu ayarlı Hauni Tütün Kesici KT-400.",
    intro: [
      "Hauni Tütün Kesici KT-400, tütün işlemede kesim kalitesinin tutarlı kalmasında kritik bir rol oynayan hassas mühendislikli bir makinedir. Beş bıçak taşır; bu da tekdüze kesimler sağlar ve tütün harmanının genel kalitesini artırır; pnömatik silindirler çeneyi çalıştırarak daha az duruş süresi ve bakımla sorunsuz, verimli kesim sağlar.",
      "KT-400 ayrıca pirinç bükme çıtası üzerinde gelişmiş bir PLC tahrik sistemi çalıştırır; bu sistem kesim boyutunu hassas bir şekilde ayarlar. Bu, her partiyi tekdüze tutar ve kesim boyutunu belirli gereksinimlere göre uyarlamanıza olanak tanır; gerçek bir çok yönlülük katar. Hassasiyeti ve güvenilirliğiyle KT-400, en üst düzeyde kalite ve verimlilik hedefleyen Pakistan'daki her tütün üretim tesisi için önemli bir varlıktır.",
    ],
    applications: ["Birincil işleme", "Kesilmiş harman hazırlığı"],
  },
  "tobacco-stem-flattener": {
    h1: "Tütün Sap Düzleştirici",
    metaTitle: "Tütün Sap Düzleştirici, Birincil İşleme Makinesi",
    metaDescription:
      "Tütün sap düzleştirici, Pakistan'da – tutarlı harmanlama ve daha az yaprak israfı için sapları düzleştirir. Civic Tobacco Machinery tarafından tedarik edilir ve servis verilir.",
    tagline: "Tutarlı harmanlama ve daha az yaprak israfı için tütün saplarını düzleştirir.",
    intro: [
      "Tütün Sap Düzleştirici, tütün işleme sürecini optimize etmede önemli bir rol oynar. Tütün saplarını düzleştirerek onları yapraklarla tutarlı harmanlama için hazırlar, bu da işleme kolaylığını artırır ve nihai üründe tutarsızlık olasılığını azaltır.",
      "Sapları verimli bir şekilde düzleştirerek, yaprak israfını da en aza indirir, tüm süreci daha ekonomik ve sürdürülebilir hale getirir. Sonuç, sıkı endüstri standartlarını karşılayan tutarlı, yüksek kaliteli bir üründür; bu da sap düzleştiriciyi Pakistan'daki her tütün işleme operasyonu için değerli bir varlık haline getirir.",
    ],
    applications: ["Birincil işleme", "Verim iyileştirme"],
  },
};

/* ---------------------------- Chinese content ------------------------------ */

const zh: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "HLP-180 卷烟包装机",
    metaTitle: "HLP-180 包装机，180包/分钟",
    metaDescription: "HLP-180 卷烟包装机，在巴基斯坦——每分钟180包，覆盖King至Nano格式，配备PLC控制。由 Civic Tobacco Machinery 供应。",
    tagline: "高速硬盒生产线，每分钟180包。",
    intro: [
      "HLP-180 是一款强大的新一代机器，专为高速卷烟包装而设计。这款以稳定性能和可靠产量著称的 HLP-180 包装机，适合那些希望在不牺牲质量或精度的前提下简化包装流程的制造商。",
      "在每分钟180包的产量下，该机器凭借其单柱塞机制运行高效、稳定的包装周期，在每一包上都保持完美的对齐、包裹和封口。这让巴基斯坦的工厂能够满足大量需求，同时保持整洁、可重复的外观。",
      "该机器设计用于处理各种卷烟规格，包括King Size、Demi、Slims、Super Slims和Nano。这种灵活性意味着您可以在同一台机器上，为国内和出口市场服务，从传统格式到细分产品，满足不同的消费者偏好。",
      "PLC 控制系统确保运行准确且完全自动化，使每一包都均匀一致、包装精良、可直接上架销售。友好的用户界面让操作员完全掌控速度、故障检测和生产监控，从而减少停机时间并提高整体效率。",
      "真正让 HLP-180 与众不同的是其包装形状的灵活性。它支持round corner、bevel edge、D-type和square等格式，让品牌能够打造差异化包装，在货架上脱颖而出，紧跟不断变化的市场趋势。该机器专为不间断的大规模生产而打造，无论是扩展生产线还是升级旧设备，都是强有力的选择。",
    ],
    applications: ["大批量硬盒生产", "国内及出口市场"],
  },
  "hlp-200": {
    h1: "HLP-200 卷烟包装机",
    metaTitle: "HLP-200 包装机，200包/分钟",
    metaDescription: "HLP-200 卷烟包装机，在巴基斯坦——每分钟200包双柱塞生产线，覆盖King至Nano格式。由 Civic Tobacco Machinery 供应。",
    tagline: "双柱塞硬盒生产线，每分钟200包。",
    intro: [
      "HLP-200 是一款双柱塞漏斗式包装机，专为中小型至大批量生产而设计。它之所以受到巴基斯坦制造商的青睐，是因为它能谨慎地使用材料，帮助降低运营成本，同时保持快速、稳定的节奏。",
      "以每分钟200包、最大产能约12,000支卷烟的速度运行，该机器是包装生产线中第一个关键单元，负责成形并完成烟包，然后进入封装和装箱环节。它支持所有常见的卷烟包装格式，因此可以轻松融入大多数生产布局。",
      "该机器可处理多种卷烟规格，包括King Size、Demi、Slims、Super Slims和Nano，其双柱塞系统保持包装周期高效、外观一致。PLC 控制系统确保运行准确且完全自动化，让操作员对速度、故障检测和监控有清晰的掌控。",
      "在包装呈现方面，它提供round corner、bevel edge、D-type和square等格式，让品牌能够塑造在货架上脱颖而出的包装。该机器采用220V/380V供电，专为可靠、持续的产量而设计，是任何集成包装生产线的坚实核心单元。",
    ],
    applications: ["大批量硬盒生产", "集成包装生产线的核心"],
  },
  "hlp-225": {
    h1: "HLP-225 卷烟包装机",
    metaTitle: "HLP-225 包装机，225包/分钟",
    metaDescription: "HLP-225 卷烟包装机，在巴基斯坦——高速双柱塞生产线，每分钟225包，配备PLC控制。由 Civic Tobacco Machinery 供应。",
    tagline: "高速双柱塞硬盒生产线，每分钟225包。",
    intro: [
      "HLP-225 包装生产线是卷烟包装领域的真正进步。以每分钟225包的速度运行，这款双柱塞机器为需要大规模包装的工厂提供了高效率和高产能。",
      "该机器经过设计，可处理多种卷烟规格，包括King、Demi、Slims、Super Slims和Nano，让巴基斯坦的制造商能够在一台机器上灵活满足不同的市场需求。",
      "现代化的PLC控制系统提高了精度并使包装过程自动化，减少了人工干预和错误。HLP-225 还支持多种包装格式，包括round corner、bevel edge、D-type和square，让品牌能够根据不同的消费者偏好和需求调整包装。",
      "HLP-225 专为大规模生产而打造，将先进功能与坚固结构相结合，实现可靠、稳定的性能。它能在不牺牲质量的前提下高速包装，使其成为任何希望扩大产量并保持竞争力的运营的宝贵资产。",
    ],
    applications: ["大批量硬盒生产", "大规模包装生产线"],
  },
  "sasib-5000": {
    h1: "SASIB 5000 软盒机",
    metaTitle: "SASIB 5000 卷烟软盒机",
    metaDescription: "SASIB 5000 卷烟软盒机，在巴基斯坦——100mm软盒，配铝箔及标签包装。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "SASIB 软盒包装机，适用于直角形100mm烟包。",
    intro: [
      "SASIB 5000 是一款多功能机器，专为生产100mm卷烟软盒而设计。它采用围绕心轴进行的铝箔及标签包装方式，能生产出边角方正、完美一致的烟包。",
      "这种包装方式不仅美观，还能保护卷烟并保持每包的完整性，同时提升成品的视觉吸引力。对于希望获得高端软盒效果的巴基斯坦制造商而言，这是一个可靠、高质量的选择。",
      "SASIB 5000 经过验证，操作简单，交付时已完成检查和调试，可直接投入车间使用，让您能够放心地增加可靠的软盒产能。",
    ],
    applications: ["软盒生产", "100mm格式"],
  },
  "sasib-3000": {
    h1: "SASIB 3000 软盒机",
    metaTitle: "SASIB 3000 卷烟软盒机",
    metaDescription: "SASIB 3000 卷烟软盒机，在巴基斯坦——处理84mm和100mm烟包，配铝箔及标签包装。由 Civic Tobacco Machinery 供应。",
    tagline: "SASIB 软盒包装机，适用于直角形84mm和100mm烟包。",
    intro: [
      "SASIB 3000 凭借同时处理84mm和100mm卷烟包装的能力，为SASIB软盒生产线增添了额外的灵活性。它采用围绕心轴进行的铝箔及标签包装方式，保持SASIB标志性的效果——边角方正、完美一致的烟包。",
      "这种双规格能力使 SASIB 3000 成为巴基斯坦制造商的宝贵资产，他们需要生产灵活性，同时保持每包在外观和保护方面的高标准。",
      "其控制系统使调整和维护变得简单，有助于减少停机时间并保持整体生产效率处于高水平。该机器交付时已完成检查和调试，可直接投入运行，是一条可靠的软盒生产线，适合既追求质量又需要格式灵活性的工厂。",
    ],
    applications: ["软盒生产", "84mm和100mm格式"],
  },
  "regular-wrapper-cp1": {
    h1: "Regular Wrapper CP1 封装机",
    metaTitle: "CP-1 卷烟包封装机，250包/分钟",
    metaDescription: "CP-1 卷烟包封装机，在巴基斯坦——每分钟最高250包。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "高速卷烟包封装机，最高每分钟250包。",
    intro: [
      "CP-1 是一款高性能卷烟包封装机，专为轻松应对严苛的生产需求而打造。以最高每分钟250包的封装速度，它提升了巴基斯坦工厂包装生产线的效率和产能。",
      "该机器功率需求适中，为6 KVA，气压需求为0.05 m³/分钟，因此在保持能效的同时提供强劲性能。CP-1 专为精确、一致的封装而设计，可减少材料浪费，并使每包都保持严格的质量标准。",
      "其坚固的结构和可靠的运行使其成为大规模生产线值得信赖的资产，保持流程顺畅、产出洁净。它还能整齐地融入现有生产线，成为任何希望在不损失质量的情况下提升生产力的工厂的实用而有价值的补充。",
    ],
    applications: ["烟包外封装", "大批量包装生产线"],
  },
  "naked-over-wrapper": {
    h1: "Naked Over Wrapper 裸装外封装机",
    metaTitle: "Naked Over Wrapper，卷烟外包裸装封装机",
    metaDescription: "Naked Over Wrapper 裸装外封装机，在巴基斯坦——卷烟外包封装机，每分钟25包。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "外包封装机，每分钟25包。",
    intro: [
      "Naked Over Wrapper 是一款精心设计的机器，能以精度和速度封装卷烟外包。它每分钟封装25个外包，为巴基斯坦工厂的生产线保持高效率水平。",
      "该机器功耗需求为6 KVA，气压为0.05 m³/分钟，在不消耗大量电力的情况下提供可靠的工作性能。这款机器坚固高效，是卷烟生产线上的可靠补充，能在最后阶段提升包装质量。",
    ],
    applications: ["外包封装", "生产线末端封口"],
  },
  "molins-boxer": {
    h1: "Molins Boxer 装箱机",
    metaTitle: "Molins Boxer，卷烟装箱机",
    metaDescription: "Molins Boxer 卷烟装箱机，在巴基斯坦——每分钟最高20箱。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "卷烟装箱机，每分钟最高20箱。",
    intro: [
      "Molins Boxer 是一款可靠的卷烟装箱机，以高效运行和稳定产能著称。以每分钟最高20箱的包装速度，提升了巴基斯坦卷烟包装生产线的生产力。",
      "该机器在0.05 m³/分钟的气压下运行，在能源使用与稳定运行之间取得平衡。Molins Boxer 专为可靠性而设计，保持包装的一致性和精确性，减少停机时间，保持产品质量处于高水平。",
      "这使其成为任何注重效率和稳定产量的生产线的关键组成部分，能接收已封装的烟包并在生产线末端将其整齐地装成纸箱。",
    ],
    applications: ["纸箱/装箱包装", "生产线末端收集"],
  },
  "sasib-boxer": {
    h1: "SASIB Boxer 装箱机",
    metaTitle: "SASIB Boxer，卷烟装箱机",
    metaDescription: "SASIB Boxer 卷烟装箱机，在巴基斯坦——每分钟最高25箱。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "卷烟装箱机，每分钟最高25箱。",
    intro: [
      "SASIB Boxer 是一款先进的卷烟装箱机，以速度和效率著称。凭借最高每分钟25箱的包装能力，它为巴基斯坦卷烟生产线的产能带来了真正的提升。",
      "该机器功率需求为6 KVA，兼具动力与性能，气压需求为0.1 m³/分钟，在能源使用与运行效率之间保持平衡。",
      "SASIB Boxer 专为高精度、一致性包装而设计，最大限度地减少停机时间并简化流程，使其成为大批量环境中的宝贵资产，在这些环境中，速度和精度对生产力和产品质量至关重要。",
    ],
    applications: ["纸箱/装箱包装", "大批量包装生产线"],
  },
  "mark-8-post-64": {
    h1: "Mark 8 Post 64——中国卷烟制造机",
    metaTitle: "MK 8 | Mark 8 Post 64 卷烟制造机",
    metaDescription: "Molins Mark 8 Post 64 卷烟制造机，在巴基斯坦——可靠的制烟机，适用于稳定生产。由 Civic Tobacco Machinery 翻新并提供支持。",
    tagline: "工厂至今仍在依赖的经过验证、可靠的制造机。",
    intro: [
      "Molins Mark 8 Post 64 是一款经过验证、高产能的卷烟制造机，兼顾质量与灵活性。它以每分钟1,800至2,000支的稳定速度运行，并配备双色打印机，让您可以按照品牌要求精确印刷卷烟纸，而不会拖慢生产线速度。",
      "它能处理广泛的规格——卷烟周长从17mm到28.3mm，滤棒＋烟支组合长度从65mm到110mm，涵盖从标准的84mm和100mm到slim、super slim和nano的所有规格。Max Multiroll滤嘴装配装置能确保滤嘴在满速运行时顺畅供给。",
      "该机器重约3,500公斤，是一台重型、坚固的机器，专为在长时间生产运行中保持速度而打造。这种速度、格式灵活性和可靠性的结合，使 Mark 8 Post 64 成为希望从单台制造机获得强劲产量的工厂的明智之选。",
    ],
    features: ["经过验证、经久耐用的Molins设计", "均匀的烟支和干净的切割", "备件和技术知识广泛可得", "便于技术人员维护", "作为翻新机器物超所值"],
    applications: ["入门级制造生产线", "可靠的备用机器"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | 配备MAX-15的Molins Mark 8D",
    metaDescription: "配备MAX-15的Molins Mark 8D卷烟制造机，在巴基斯坦——每分钟3,000支，覆盖King至Nano格式。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "配备MAX-15控制系统的高速Mark 8D制造机。",
    intro: [
      "配备MAX-15的Molins Mark 8D是一款强大、灵活的卷烟制造机，专为满足现代烟草工厂的需求而打造。它属于著名的Mark 8制造机家族，为中国制造商提供了一种在不牺牲质量的前提下提高产量的可靠方式。",
      "该机器最高可运行至每分钟3,000支，因此在繁忙的生产线上能轻松保持节奏。同样重要的是，它能处理广泛的规格。无论您生产King size、Demi、Slims、Super Slims还是Nano，同一台机器都能生产所有这些规格，使其成为同时服务多个细分市场的工厂的实用选择。",
      "该制造机接受17mm至28.3mm的卷烟周长以及65mm至110mm的滤棒＋烟支组合长度，让您在规格上保持完全掌控，并在不同批次间保持一致性。",
      "该配置将MK-8D卷烟制造机与MAX-15及其1117喂料装置相结合。它们协同工作，将整个流程从烟草喂料到成品烟支干净地完成，保持生产线稳定，减少停机，并在整个班次中保持质量。总功耗为17kW，兼顾了实际生产速度与合理的运营成本。",
      "尽管功能众多，该机器仍保持紧凑。它重约5,000公斤，坚固耐用，同时无需大规模改造即可安装于现有车间，其结构能够承受长时间的连续生产。日复一日，它以极少的浪费和适度的维护生产出均匀的卷烟，这正是那些努力精简运营同时又要满足不同规格需求的工厂所需要的。",
      "简而言之，配备MAX-15的Mark 8D凭借经过验证的可靠性、从slim到nano的灵活规格支持、保持精确的高速产量、节能运行以及易于融入自动化生产线，赢得了自己的地位。无论您是更换旧设备还是增加产能，它都是一款面向未来的制造机，将经典工程应用于现代生产。",
    ],
    applications: ["大批量生产", "多规格工厂"],
  },
  "mark-9-5-lenze-servo-drives": {
    h1: "配备伦茨伺服驱动的Molins Mark 9.5",
    metaDescription: "配备伦茨伺服驱动的Molins Mark 9.5，在巴基斯坦——最高每分钟3,500支，配西门子PLC及微波重量控制。由 Civic Tobacco Machinery 供应。",
    tagline: "配备伦茨伺服驱动的高速Mark 9.5制造生产线。",
    intro: [
      "配备伦茨伺服驱动的Molins Mark 9.5，专为希望在不牺牲灵活性的前提下获得强劲产量的制造商而打造。它在常规直径下最高可达每分钟3,500支，在slim和super slim规格下可达每分钟3,200支，因此一条生产线即可以实际生产速度覆盖广泛的产品范围。",
      "该机器在17mm至28.3mm的卷烟周长以及65mm至110mm的滤棒＋烟支组合长度范围内工作，为切换规格提供了空间，同时在不同批次间保持烟支的一致性。",
      "该生产线整合了三个机组——MK-9.5制造机、MAX-S滤嘴组装机和HCF80自动托盘装填机，分别耗电35kW、20kW和15kW。它们协同工作，将整个流程从制造推进到装满的托盘，几乎无需人工干预。",
      "控制和精度是这台机器的核心。西门子PLC平稳地运行整个流程，微波系统对烟支重量进行严格控制，而伦茨伺服驱动提供精确、稳定的运动，即使在满速运行时也能保持高质量。",
      "该生产线总重约8,600公斤，是专为大规模生产而打造的重型、坚固生产线。对于需要可靠、大批量产量，并配备现代化控制系统和便捷维修服务的工厂而言，配备伦茨伺服驱动的Mark 9.5是一个强大、面向未来的选择。",
    ],
    applications: ["大批量生产", "多规格工厂"],
  },
  "mark-9-5-max-s-tray-filler": {
    h1: "配备Max S和托盘装填机的Molins Mark-9.5",
    metaTitle: "配备Max S和托盘装填机的Molins Mark-9.5",
    metaDescription: "配备Max S和托盘装填机的Molins Mark-9.5，在巴基斯坦——每分钟4,500至5,000支卷烟。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "配备Max S和大流量托盘装填机的高速Mark-9.5制造机。",
    intro: [
      "配备Max S和托盘装填机的Molins Mark-9.5，是需要在一条生产线上实现高速产量、整洁滤嘴集成和可靠生产能力的制造商的高端之选。该机器专为大产量而设计，运行速度惊人地达到每分钟4,500至5,000支，使其跻身巴基斯坦大型工厂所能使用的最高效系统之列。",
      "该配置的核心是MK-9.5制造机，它是经过验证的Mark 9系列的进化版本，在保持强劲产量的同时，保持高精度和一致性。它支持17mm至28.3mm的卷烟周长以及65mm至110mm的滤棒＋烟支组合长度，让您能够在King size、Slims、Demi和其他规格之间切换，而不会损失烟支质量。",
      "该制造机与Max-S滤嘴组装机配对，后者能准确、可重复地将滤嘴接合到烟支上。通过大流量托盘装填机运行，它在保持材料浪费和错位率低的同时提升了产能，使滤嘴的完整性在每个生产周期中都保持一致。",
      "84mm的默认设置规格使该机器与全球公认的卷烟尺寸保持一致，使其成为国内供应和出口生产的实用选择。无论您经营自有品牌还是履行大宗合同，它都能在批次之间平滑切换，并轻松适应不断变化的订单。",
      "该机器重约7,800公斤，是专为持续运行和长使用寿命而打造的重型、稳定生产线。对于希望在保护质量和降低停机时间的同时实现规模扩张的工厂而言，配备Max S和托盘装填机的Mark-9.5汇集了车间所需的速度、灵活性和可靠性——从经过验证的制造和精确的滤嘴接合，到简化的大流量供料和坚固耐用的重型机架。",
    ],
    applications: ["大批量生产", "适合出口的生产"],
  },
  "mark-9-max-s": {
    h1: "配备Max S的Molins MK-9",
    metaTitle: "配备Max S的Molins MK-9",
    metaDescription: "配备Max S的Molins MK-9，在巴基斯坦——每分钟4,500至5,000支卷烟，配大流量托盘装填机。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "配备Max S和大流量托盘装填机的高速MK-9制造机。",
    intro: [
      "配备Max S的Molins MK-9是另一款专为严肃生产而打造的高效卷烟制造机，运行速度在每分钟4,500至5,000支之间。对于希望从单条生产线获得强劲、稳定产量的巴基斯坦工厂而言，这是一个可靠的选择。",
      "作为核心的MK-9制造机，能班班保持生产的精确性和一致性。它在17mm至28.3mm的卷烟周长以及65mm至110mm的滤棒＋烟支组合长度范围内工作，让您在切换规格时获得真正的灵活性，而不会损失烟支质量。",
      "它配备了Max-S滤嘴组装机和大流量托盘装填机，使滤嘴接合步骤更快、更可靠，同时保持较低的浪费和错位率。84mm的默认设置规格使其与广泛认可的卷烟尺寸保持一致，因此能轻松融入大多数生产计划。",
      "MK-9重约7,800公斤，是专为持续运行和长使用寿命而打造的重型、稳定机器。对于希望在保护质量的同时扩大大批量生产的工厂而言，这是车间的坚实、可靠补充。",
    ],
    applications: ["大批量生产", "主制造生产线"],
  },
  "protos-70": {
    h1: "Protos 70",
    metaTitle: "豪尼Protos 70卷烟制造机",
    metaDescription: "豪尼Protos 70卷烟制造机，在巴基斯坦——最高每分钟7,000支，配西门子或倍福IPC控制。由 Civic Tobacco Machinery 供应。",
    tagline: "高速Protos 70制造生产线，最高每分钟7,000支卷烟。",
    intro: [
      "豪尼Protos 70是一款先进的卷烟制造机，专为满足生产效率和精度的最高标准而打造。它在常规直径下以令人印象深刻的每分钟7,000支运行，在slim和super slim规格下为每分钟6,000支，为巴基斯坦的工厂提供单条生产线的真正速度和灵活性。",
      "它能处理17mm至28.3mm的卷烟周长以及65mm至110mm的滤棒＋烟支组合长度，让您能够在不同规格间切换，同时在不同批次间保持烟支的一致性。",
      "西门子IPC或倍福IPC控制系统使整个流程保持自动化、平稳和可靠，而微波重量控制系统则将每支卷烟的重量控制在精确范围内，以确保产品的稳定一致性。该生产线整合了S7000卷烟棒制造机、M8000滤嘴接合装置和F80自动托盘装填机，每个机组都能整洁地处理各自的工艺阶段。",
      "S7000功率为50kW，M8000为20kW，F80为15kW，Protos 70是一条强大、能力出众的生产线。该生产线总重约10,800公斤，重型且稳定，专为持续运行和长使用寿命而打造，是大规模卷烟生产的理想选择。",
    ],
    applications: ["大批量生产", "大规模制造"],
  },
  "protos-80-er": {
    h1: "Protos 80 ER",
    metaTitle: "豪尼Protos 80 ER卷烟制造机",
    metaDescription: "豪尼Protos 80 ER卷烟制造机，在巴基斯坦——最高每分钟8,000支，配西门子或倍福IPC控制。由 Civic Tobacco Machinery 供应。",
    tagline: "高速Protos 80 ER制造生产线，最高每分钟8,000支卷烟。",
    intro: [
      "Protos 80 ER是一款高性能卷烟制造机，专为追求最高效率、精度和产量的制造商而设计。由豪尼制造的Protos 80系列以其可靠性和先进的自动化而著称，无论您生产常规卷烟还是slim卷烟，它都能提供强劲的一致性和生产力，使其成为巴基斯坦大批量生产线值得信赖的选择。",
      "产能是这台机器真正出彩的地方。它在常规直径下最高可达每分钟8,000支，在slim和super slim规格下为每分钟7,000支。它可接受17mm至28.3mm的卷烟周长以及65mm至110mm的滤棒＋烟支组合长度，因此能灵活应对不同的卷烟类型和市场需求。从king size到slim再到细分规格，Protos 80 ER都能适应您的生产方式。",
      "在精度和运行时间方面，它在西门子IPC或倍福IPC上运行高级PLC控制系统，使整个周期保持平稳和自动化。实时监控和快速的系统响应减少了人为错误，保持生产线运转，而内置的微波重量控制系统则确保每支卷烟的重量保持一致，实现严格的质量控制。",
      "该生产线由三个协同工作的强大机组组成——50kW的S7000卷烟棒制造机、20kW的M8000滤嘴接合装置和15kW的F80自动托盘装填机。以可靠性著称，并被全球卷烟工厂使用的Protos 80系列，兼具高效的能源利用、低损耗和精密工程，在保持产品标准的同时降低运营成本。该生产线总重约10,800公斤，是专为持续、大规模生产而打造的重型、稳定生产线。",
    ],
    applications: ["大批量生产", "大规模制造"],
  },
  "kdf-1": {
    h1: "豪尼KDF-1卷烟滤棒制造机",
    metaTitle: "豪尼KDF-1滤棒制造机",
    metaDescription: "豪尼KDF-1滤棒制造机，在巴基斯坦——120mm滤棒，配西门子/倍福PLC及激光周长控制。由 Civic Tobacco Machinery 供应。",
    tagline: "配备激光周长控制的豪尼KDF-1滤棒制造生产线。",
    intro: [
      "豪尼KDF-1是一条值得信赖、强大的滤棒制造生产线，在卷烟制造领域以性能、精度和耐用性著称。该生产线专为大批量生产的需求而打造，适合将一致性、速度和质量放在首位的巴基斯坦制造商。",
      "该机器专为高产量运行而打造，为120mm滤棒提供强大的生产能力，适用于标准和定制卷烟规格。它支持16.8mm至28.1mm的滤嘴周长以及64mm至150mm的滤嘴长度，因此您可以生产各种规格和类型的滤棒，而无需持续更换机器。从King Size滤棒到Slims以及特殊设计，KDF-1都能高效处理。",
      "该机器采用西门子或倍福配置的先进PLC控制系统运行，提供直观的控制、实时诊断和可靠的自动化，在整个生产过程中保持滤棒质量的稳定。伦茨或倍福伺服系统进一步增强了稳定性，保持运动的平稳和精确。",
      "一个突出特点是基于激光的周长控制系统，能以高精度测量每根滤棒的周长，减少偏差，保持每批产品的一致性。这种精度水平对于在高端产品上维持品牌质量标准至关重要。",
      "尽管产量巨大，KDF-1仍保持均衡的能耗，总功耗为40kW，使其在长期运行中保持高效。其坚固、精心设计的结构赋予了它较长的使用寿命，其模块化设计和与不同卷烟类型的兼容性，使其适用于中小规模和大规模的滤棒生产，无论您是要扩大产能还是升级旧设备。",
    ],
    applications: ["大批量滤棒生产", "标准及特殊滤棒"],
  },
  "kdf-2": {
    h1: "豪尼KDF-2卷烟滤棒制造机",
    metaTitle: "豪尼KDF-2高速滤棒制造机",
    metaDescription: "豪尼KDF-2滤棒制造机，在巴基斯坦——每分钟400米醋酸纤维束，配西门子/倍福PLC。由 Civic Tobacco Machinery 供应。",
    tagline: "高速豪尼KDF-2滤棒制造生产线，每分钟400米。",
    intro: [
      "豪尼KDF-2是一款世界级的滤棒制造机，专为高效率、大产量的卷烟滤棒生产而打造。以工程质量和先进自动化著称，KDF-2是巴基斯坦大批量制造商值得信赖的选择，他们既需要精度也需要生产力。",
      "该机器以令人印象深刻的速度运行，每分钟处理400米醋酸纤维束，非常适合现代生产线的需求。这种速度还伴随着真正的多功能性：它支持16.8mm至28.1mm的滤嘴周长以及64mm至150mm的滤嘴长度，因此能涵盖从标准King Size滤棒到更特殊规格的一切，且保持一致性、质量和最少的停机时间。",
      "KDF-2的与众不同之处在于其自动化。西门子或倍福配置的PLC控制系统提供完全的控制和实时监控，而高性能的伦茨或倍福伺服系统则保持运动的精确和运行的可靠。这减少了误差幅度，保持滤棒质量的一致性，使该机器作为持续、大规模生产的可靠支柱平顺集成。",
      "为耐用性而打造的KDF-2，与拉丝开松器和HCF80自动托盘装填机配对，以简化工作流程并减少人工操作。主KDF-2机组功耗40kW，HCF80装填机功耗15kW，兼顾能效与强劲性能。",
      "尽管功能强大，KDF-2仍保持约6,500公斤的可控体积，其坚固的结构在苛刻的生产计划下提供长期耐用性。无论您是新建工厂还是升级现有设备，这都是一项明智的投资，能顺畅地融入现代生产系统，同时提供卓越的滤棒质量。",
    ],
    applications: ["大批量滤棒生产", "大规模制造"],
  },
  "molins-pm-5": {
    h1: "Molins PM-5滤棒机",
    metaTitle: "Molins PM-5卷烟滤棒制造机",
    metaDescription: "Molins PM-5滤棒制造机，在巴基斯坦——高产能机器，每分钟4,000支滤棒。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "Molins高产能滤棒制造机，每分钟4,000支滤棒。",
    intro: [
      "Molins PM-5是一款高产能卷烟滤棒制造机，专为满足大批量生产的需求而打造。凭借每分钟4,000支滤棒的产能，它是滤棒制造中效率和精度的有力典范，是巴基斯坦繁忙工厂的可靠选择。",
      "它在滤棒尺寸上提供了实用的灵活性，滤棒直径为7.5–7.8mm，滤棒长度为108至126mm，因此能够轻松适应不同的滤棒规格。",
      "PM-5重约2,000公斤，结构坚固，能长期保持耐用性和稳定运行。由业内知名品牌Molins制造，该机器将经过验证的工程技术与高速产量相结合，是制造商在追求高产量的同时获得优质滤棒的重要资产。",
    ],
    applications: ["大批量滤棒生产", "基于Molins的生产线"],
  },
  "hollow-tube-maker": {
    h1: "空心管制造机",
    metaTitle: "空心管制造机，卷烟滤棒机",
    metaDescription: "空心管制造机，在巴基斯坦——每分钟2,100支，配组装机用于特殊滤棒管。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "高速空心管制造机，每分钟2,100支卷烟。",
    intro: [
      "空心管制造机以其生产能力和高速运行而著称。该机器能够每分钟生产2,100支卷烟，提供强劲的效率和稳定的产量。烟支速度范围为每分钟140至175米，切割速度最高可达每分钟2,500支，凸显了其非常适合巴基斯坦工厂大批量生产的特点。",
      "该机器重3,050公斤，结构坚固，具有耐用性和长期可靠性。组装机再增加1,800公斤，与制造机同步工作，实现精确、高效的管材生产。总功耗为14kW，其中制造机为6.5kW，组装机为7.5kW，在性能和能耗之间取得了良好的平衡。",
      "空心管制造机专为大规模制造而设计，采用最新技术生产高质量的管材。其高速能力和坚固的工程技术，使其成为需要满足强劲需求同时保持卓越生产标准的制造商的宝贵资产。",
    ],
    applications: ["大批量滤棒生产", "特殊滤棒管"],
  },
  "tobacco-feeder": {
    h1: "烟草喂料机",
    metaTitle: "用于卷烟制造机的烟草喂料机",
    metaDescription: "烟草喂料机，在巴基斯坦——为Mark 8和Mark 9卷烟制造机提供稳定、均匀的烟草流。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "为Mark 8和Mark 9制造机提供稳定、均匀的烟草流。",
    intro: [
      "烟草喂料机是卷烟工厂中至关重要的输入设备。它持续、均匀地向制造机供应烟草，将其整齐地分层，以便按照生产所需的确切要求做好准备。",
      "它与Mark 8和Mark 9机器兼容，因此能轻松融入现有的生产布局。可调节的容量设置让您能够精确控制烟草流量，从而提高生产效率，其自动化功能减少了人工操作，简化了运行，保持了高生产力。",
    ],
    applications: ["制造机供料", "稳定的烟支生产"],
  },
  "cigarette-reclaimer": {
    h1: "卷烟回收机",
    metaTitle: "卷烟回收机，烟草回收机",
    metaDescription: "卷烟回收机，在巴基斯坦——以99.8%的效率从生产废料中每小时回收120公斤烟草。由 Civic Tobacco Machinery 供应。",
    tagline: "以99.8%的效率从废料中每小时回收120公斤烟草。",
    intro: [
      "卷烟回收机是一款出色的烟草回收机器，用于处理卷烟制造废料。它以极少的损耗将可再利用的烟草从废料中分离出来，让您本会丢弃的烟草重新投入生产。",
      "在最大产能下，它每小时可回收120公斤烟草，运行效率高达99.8%，为您提供尽可能高的利用率。凭借90%的回收率，它在减少浪费和提高整体生产效率方面带来了真正的优势。",
      "该机器操作简便，易于安装到您的生产线中，是巴基斯坦工厂希望从每一批次中获得最大收益的实用、节省成本的补充设备。",
    ],
    applications: ["减少浪费", "烟草回收"],
  },
  "tobacco-cutters": {
    h1: "豪尼烟草切丝机KT-400",
    metaTitle: "豪尼烟草切丝机KT-400",
    metaDescription: "豪尼烟草切丝机KT-400，在巴基斯坦——五刀切丝机，配PLC调节切割尺寸。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "配备五把刀片和PLC切割尺寸控制的豪尼烟草切丝机KT-400。",
    intro: [
      "豪尼烟草切丝机KT-400是一款精密设计的机器，在保持烟草加工切割质量一致性方面发挥着关键作用。它配备五把刀片，能提供均匀的切割，提升烟丝混合的整体质量，气动缸驱动卡爪，实现平稳、高效的切割，减少停机时间和维护需求。",
      "KT-400还在黄铜弯曲板条上运行先进的PLC驱动系统，精确调节切割尺寸。这使每一批产品保持均匀一致，并让您能够根据特定要求调整切割尺寸，增加了真正的多功能性。凭借其精度和可靠性，KT-400是巴基斯坦任何追求卓越质量和效率的烟草加工设施的重要资产。",
    ],
    applications: ["初级加工", "切丝准备"],
  },
  "tobacco-stem-flattener": {
    h1: "烟梗压扁机",
    metaTitle: "烟梗压扁机，初级加工设备",
    metaDescription: "烟梗压扁机，在巴基斯坦——压扁烟梗以实现均匀混合并减少烟叶浪费。由 Civic Tobacco Machinery 供应并提供维修服务。",
    tagline: "压扁烟梗以实现均匀混合并减少烟叶浪费。",
    intro: [
      "烟梗压扁机在优化烟草加工流程方面发挥着关键作用。通过压扁烟梗，它为与烟叶的均匀混合做好准备，这提高了加工的便利性，并降低了最终产品出现不一致的可能性。",
      "通过高效压扁烟梗，它还能最大限度地减少烟叶浪费，使整个流程更加经济和可持续。其结果是符合严格行业标准的一致、高质量产品，这使得烟梗压扁机成为巴基斯坦任何烟草加工业务的宝贵资产。",
    ],
    applications: ["初级加工", "提高产量"],
  },
};

/* ----------------------------- Persian content ----------------------------- */

const fa: Record<string, ProductContent> = {
  "hlp-180": {
    h1: "ماشین بسته‌بندی سیگار HLP-180",
    metaTitle: "ماشین بسته‌بندی HLP-180، ۱۸۰ پاکت در دقیقه",
    metaDescription: "ماشین بسته‌بندی سیگار HLP-180 در پاکستان — ۱۸۰ پاکت در دقیقه در فرمت‌های King تا Nano با کنترل PLC. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط پاکت سخت با سرعت بالا، ۱۸۰ پاکت در دقیقه.",
    intro: [
      "HLP-180 ماشینی قدرتمند از نسل جدید است که برای بسته‌بندی سیگار با سرعت بالا ساخته شده است. این بسته‌بند HLP-180 که به عملکرد ثابت و تولید قابل اعتماد شهرت دارد، برای تولیدکنندگانی مناسب است که می‌خواهند فرآیند بسته‌بندی خود را بدون از دست دادن کیفیت یا دقت ساده کنند.",
      "با تولید ۱۸۰ پاکت در دقیقه، این ماشین به لطف مکانیزم تک‌پیستون خود چرخه‌های بسته‌بندی کارآمد و منظمی اجرا می‌کند و در هر پاکت، تراز، پیچش و مهر و موم کامل را حفظ می‌کند. این امر به کارخانه‌های پاکستان اجازه می‌دهد تقاضای بالا را برآورده کنند و در عین حال ظاهری تمیز و قابل تکرار حفظ کنند.",
      "این ماشین برای مدیریت طیف گسترده‌ای از اندازه‌های سیگار، از جمله King Size، Demi، Slims، Super Slims و Nano طراحی شده است. این انعطاف‌پذیری به این معناست که می‌توانید در بازارهای داخلی و صادراتی، از فرمت‌های سنتی تا محصولات خاص، سلیقه‌های مختلف مصرف‌کننده را روی یک ماشین پوشش دهید.",
      "سیستم کنترل PLC عملکرد را دقیق و کاملاً خودکار نگه می‌دارد، بنابراین هر پاکت یکنواخت، به‌خوبی پیچیده‌شده و آماده فروش خارج می‌شود. رابط کاربرپسند کنترل کامل سرعت، تشخیص خطا و نظارت تولید را در اختیار اپراتورها قرار می‌دهد که زمان توقف را کاهش می‌دهد و بازدهی کلی را افزایش می‌دهد.",
      "آنچه واقعاً HLP-180 را متمایز می‌کند، انعطاف‌پذیری آن در شکل پاکت است. این ماشین از فرمت‌های round corner، bevel edge، D-type و square پشتیبانی می‌کند، بنابراین برندها می‌توانند بسته‌بندی خود را متمایز کنند، در قفسه برجسته شوند و با روندهای بازار در حال تغییر همراه باشند. این ماشین که برای تولید مداوم و در مقیاس بزرگ ساخته شده، چه در حال گسترش یک خط باشید و چه ارتقای تجهیزات قدیمی، انتخابی قدرتمند است.",
    ],
    applications: ["تولید حجم بالای پاکت سخت", "بازارهای داخلی و صادراتی"],
  },
  "hlp-200": {
    h1: "ماشین بسته‌بندی سیگار HLP-200",
    metaTitle: "ماشین بسته‌بندی HLP-200، ۲۰۰ پاکت در دقیقه",
    metaDescription: "ماشین بسته‌بندی سیگار HLP-200 در پاکستان — خط دوپیستون ۲۰۰ پاکت در دقیقه در فرمت‌های King تا Nano. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط پاکت سخت دوپیستون، ۲۰۰ پاکت در دقیقه.",
    intro: [
      "HLP-200 یک ماشین بسته‌بندی هاپر دوپیستون است که برای تولید کوچک تا متوسط و حجم بالا ساخته شده است. این ماشین به این دلیل که از مواد با دقت استفاده می‌کند و به کاهش هزینه‌های عملیاتی کمک می‌کند در حالی که سرعت و ثبات را حفظ می‌کند، در میان تولیدکنندگان پاکستان محبوب است.",
      "این ماشین با ۲۰۰ پاکت در دقیقه و حداکثر ظرفیت حدود ۱۲,۰۰۰ سیگار کار می‌کند و اولین واحد حیاتی خط بسته‌بندی است که پاکت را شکل داده و تکمیل می‌کند پیش از اینکه به پوشش و جعبه‌بندی برود. این ماشین از تمام فرمت‌های رایج پاکت سیگار پشتیبانی می‌کند، بنابراین به‌راحتی در اکثر چیدمان‌های تولید جای می‌گیرد.",
      "این ماشین طیف گسترده‌ای از اندازه‌های سیگار، از جمله King Size، Demi، Slims، Super Slims و Nano را مدیریت می‌کند و سیستم دوپیستون آن چرخه بسته‌بندی را کارآمد و ظاهر آن را یکنواخت نگه می‌دارد. سیستم کنترل PLC عملکرد را دقیق و کاملاً خودکار نگه می‌دارد و کنترل واضحی روی سرعت، تشخیص خطا و نظارت به اپراتورها می‌دهد.",
      "از نظر نمایش پاکت، این ماشین فرمت‌های round corner، bevel edge، D-type و square را ارائه می‌دهد، بنابراین برندها می‌توانند بسته‌بندی خود را طوری شکل دهند که در قفسه برجسته شود. این ماشین که با تغذیه برق 220V/380V کار می‌کند و برای تولید قابل اعتماد و مداوم ساخته شده، واحدی اصلی و مستحکم برای هر خط بسته‌بندی یکپارچه است.",
    ],
    applications: ["تولید حجم بالای پاکت سخت", "هسته خط بسته‌بندی یکپارچه"],
  },
  "hlp-225": {
    h1: "ماشین بسته‌بندی سیگار HLP-225",
    metaTitle: "ماشین بسته‌بندی HLP-225، ۲۲۵ پاکت در دقیقه",
    metaDescription: "ماشین بسته‌بندی سیگار HLP-225 در پاکستان — خط دوپیستون با سرعت بالا، ۲۲۵ پاکت در دقیقه با کنترل PLC. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط پاکت سخت دوپیستون با سرعت بالا، ۲۲۵ پاکت در دقیقه.",
    intro: [
      "خط بسته‌بندی HLP-225 گامی واقعی به جلو در بسته‌بندی سیگار است. این ماشین دوپیستون که با ۲۲۵ پاکت در دقیقه کار می‌کند، بازدهی و ظرفیت بالایی برای کارخانه‌هایی که نیاز به بسته‌بندی در مقیاس بزرگ دارند، فراهم می‌کند.",
      "این ماشین برای مدیریت طیف گسترده‌ای از اندازه‌های سیگار، از جمله King، Demi، Slims، Super Slims و Nano طراحی شده است، بنابراین تولیدکنندگان پاکستان انعطاف‌پذیری لازم برای برآوردن تقاضاهای مختلف بازار را روی یک ماشین به دست می‌آورند.",
      "یک سیستم کنترل PLC مدرن دقت را بهبود می‌بخشد و فرآیند بسته‌بندی را خودکار می‌کند و مداخله دستی و خطاها را کاهش می‌دهد. HLP-225 همچنین از فرمت‌های متعدد پاکت، از جمله round corner، bevel edge، D-type و square پشتیبانی می‌کند که به برندها اجازه می‌دهد بسته‌بندی خود را با سلیقه‌ها و نیازهای مختلف مصرف‌کننده تنظیم کنند.",
      "HLP-225 که برای تولید در مقیاس بزرگ ساخته شده، ویژگی‌های پیشرفته را با ساختاری مستحکم برای عملکردی قابل اعتماد و ثابت ترکیب می‌کند. توانایی آن برای بسته‌بندی با سرعت بالا بدون از دست دادن کیفیت، آن را به دارایی ارزشمندی برای هر عملیاتی تبدیل می‌کند که به دنبال افزایش تولید و حفظ رقابت‌پذیری است.",
    ],
    applications: ["تولید حجم بالای پاکت سخت", "خطوط بسته‌بندی در مقیاس بزرگ"],
  },
  "sasib-5000": {
    h1: "ماشین پاکت نرم SASIB 5000",
    metaTitle: "ماشین پاکت نرم سیگار SASIB 5000",
    metaDescription: "ماشین پاکت نرم سیگار SASIB 5000 در پاکستان — پاکت‌های نرم ۱۰۰ میلی‌متری با پوشش فویل آلومینیوم و برچسب. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین پاکت نرم SASIB برای پاکت‌های ۱۰۰ میلی‌متری با گوشه‌های مربع.",
    intro: [
      "SASIB 5000 ماشینی چندمنظوره است که برای تولید پاکت‌های نرم سیگار ۱۰۰ میلی‌متری ساخته شده است. با استفاده از پوشش فویل آلومینیوم و برچسب که در اطراف یک محور انجام می‌شود، این ماشین پاکت‌های کامل و یکنواختی با گوشه‌های مربع مرتب تولید می‌کند.",
      "این روش پوشش نه‌تنها ظاهری خوب دارد؛ بلکه از سیگارها محافظت می‌کند و هر پاکت را سالم نگه می‌دارد و در عین حال جذابیت بصری محصول نهایی را افزایش می‌دهد. برای تولیدکنندگانی در پاکستان که خواهان ظاهری پریمیوم برای پاکت نرم هستند، این انتخابی قابل اعتماد و باکیفیت است.",
      "SASIB 5000 که اثبات‌شده و کار با آن آسان است، بازرسی و راه‌اندازی‌شده و آماده برای کف تولید تحویل داده می‌شود، بنابراین می‌توانید با اطمینان ظرفیت پاکت نرم قابل اعتماد اضافه کنید.",
    ],
    applications: ["تولید پاکت نرم", "فرمت‌های ۱۰۰ میلی‌متری"],
  },
  "sasib-3000": {
    h1: "ماشین پاکت نرم SASIB 3000",
    metaTitle: "ماشین پاکت نرم سیگار SASIB 3000",
    metaDescription: "ماشین پاکت نرم سیگار SASIB 3000 در پاکستان — پاکت‌های ۸۴ و ۱۰۰ میلی‌متری را با پوشش فویل آلومینیوم و برچسب مدیریت می‌کند. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین پاکت نرم SASIB برای پاکت‌های ۸۴ و ۱۰۰ میلی‌متری با گوشه‌های مربع.",
    intro: [
      "SASIB 3000 با توانایی مدیریت پاکت‌های سیگار هم ۸۴ و هم ۱۰۰ میلی‌متری، انعطاف‌پذیری بیشتری به خط پاکت نرم SASIB اضافه می‌کند. با استفاده از پوشش فویل آلومینیوم و برچسب در اطراف یک محور، این ماشین ظاهر مشخصه SASIB را حفظ می‌کند — پاکت‌های کامل و یکنواخت با گوشه‌های مربع مرتب.",
      "این قابلیت دو اندازه، SASIB 3000 را به دارایی ارزشمندی برای تولیدکنندگانی در پاکستان تبدیل می‌کند که به انعطاف‌پذیری در تولید نیاز دارند در حالی که هر پاکت را در استانداردی بالا از ارائه و محافظت نگه می‌دارند.",
      "سیستم‌های کنترل آن تنظیمات و نگهداری را ساده می‌کنند که به کاهش زمان توقف و حفظ بهره‌وری کلی بالا کمک می‌کند. این ماشین که بازرسی و راه‌اندازی‌شده و آماده کار تحویل داده می‌شود، خط پاکت نرمی قابل اعتماد برای کارخانه‌هایی است که هم کیفیت و هم انعطاف‌پذیری فرمت را می‌خواهند.",
    ],
    applications: ["تولید پاکت نرم", "فرمت‌های ۸۴ و ۱۰۰ میلی‌متری"],
  },
  "regular-wrapper-cp1": {
    h1: "ماشین پوشش Regular Wrapper CP1",
    metaTitle: "ماشین پوشش پاکت سیگار CP-1، ۲۵۰ پاکت در دقیقه",
    metaDescription: "ماشین پوشش پاکت سیگار CP-1 در پاکستان — تا ۲۵۰ پاکت در دقیقه. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین پوشش پاکت سیگار با سرعت بالا، تا ۲۵۰ پاکت در دقیقه.",
    intro: [
      "CP-1 ماشین پوشش پاکت سیگاری با عملکرد بالا است که برای مدیریت آسان تقاضاهای جدی تولید ساخته شده است. با سرعت پوشش تا ۲۵۰ پاکت در دقیقه، این ماشین بازدهی و ظرفیت خط بسته‌بندی را برای کارخانه‌های پاکستان افزایش می‌دهد.",
      "این ماشین با نیاز توان متوسط ۶ کیلوولت‌آمپر و نیاز فشار هوای ۰.۰۵ متر مکعب در دقیقه کار می‌کند، بنابراین عملکرد قدرتمندی ارائه می‌دهد در حالی که کارآمد از نظر انرژی باقی می‌ماند. CP-1 برای پوششی دقیق و یکنواخت طراحی شده که ضایعات مواد را کاهش می‌دهد و هر پاکت را در استانداردی سخت‌گیرانه از کیفیت نگه می‌دارد.",
      "ساختار مستحکم و عملکرد قابل اعتماد آن، این ماشین را به دارایی قابل اعتمادی برای خطوط با حجم بالا تبدیل می‌کند و فرآیند را روان و محصول خروجی را تمیز نگه می‌دارد. همچنین به‌خوبی در خطوط موجود ادغام می‌شود که آن را به افزوده‌ای عملی و ارزشمند برای هر تأسیساتی تبدیل می‌کند که به دنبال افزایش بهره‌وری بدون از دست دادن کیفیت است.",
    ],
    applications: ["پوشش پاکت", "خطوط بسته‌بندی با حجم بالا"],
  },
  "naked-over-wrapper": {
    h1: "Naked Over Wrapper",
    metaTitle: "Naked Over Wrapper، ماشین پوشش خارجی پاکت سیگار",
    metaDescription: "Naked Over Wrapper در پاکستان — ماشین پوشش خارجی پاکت سیگار، ۲۵ پاکت خارجی در دقیقه. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین پوشش پاکت خارجی، ۲۵ پاکت خارجی در دقیقه.",
    intro: [
      "Naked Over Wrapper ماشینی به‌خوبی طراحی‌شده برای پوشش پاکت‌های خارجی سیگار با دقت و سرعت است. این ماشین ۲۵ پاکت خارجی در دقیقه می‌پیچد که سطح بالایی از بازدهی را در خط برای کارخانه‌های پاکستان حفظ می‌کند.",
      "این ماشین با نیاز انرژی ۶ کیلوولت‌آمپر و فشار هوای ۰.۰۵ متر مکعب در دقیقه کار می‌کند و عملکرد کاری قابل اعتمادی بدون مصرف زیاد برق ارائه می‌دهد. این ماشین مستحکم و کارآمد، افزوده‌ای مناسب به خط تولید سیگار است که کیفیت بسته‌بندی را در مرحله نهایی افزایش می‌دهد.",
    ],
    applications: ["پوشش پاکت خارجی", "مهر و موم پایان خط"],
  },
  "molins-boxer": {
    h1: "Molins Boxer، ماشین جعبه‌بندی",
    metaTitle: "Molins Boxer، ماشین جعبه‌بندی سیگار",
    metaDescription: "ماشین جعبه‌بندی سیگار Molins Boxer در پاکستان — تا ۲۰ جعبه در دقیقه. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین جعبه‌بندی سیگار، تا ۲۰ جعبه در دقیقه.",
    intro: [
      "Molins Boxer ماشین جعبه‌بندی سیگار قابل اعتمادی است که به عملکرد کارآمد و ظرفیت مستحکم شهرت دارد. با سرعت بسته‌بندی تا ۲۰ جعبه در دقیقه، این ماشین بهره‌وری خطوط بسته‌بندی سیگار در پاکستان را افزایش می‌دهد.",
      "این ماشین با فشار هوای ۰.۰۵ متر مکعب در دقیقه کار می‌کند و مصرف انرژی را با عملکردی ثابت متعادل می‌کند. Molins Boxer که برای قابلیت اطمینان طراحی شده، بسته‌بندی را یکنواخت و دقیق نگه می‌دارد که زمان توقف را کاهش داده و کیفیت محصول را بالا نگه می‌دارد.",
      "این ویژگی آن را به بخشی حیاتی از هر چیدمان تولیدی متمرکز بر بازدهی و تولید ثابت تبدیل می‌کند که پاکت‌های پیچیده‌شده را می‌گیرد و آن‌ها را در انتهای خط به کارتن‌های مرتب تبدیل می‌کند.",
    ],
    applications: ["جعبه‌بندی کارتن/جعبه", "جمع‌آوری پایان خط"],
  },
  "sasib-boxer": {
    h1: "SASIB Boxer، ماشین جعبه‌بندی",
    metaTitle: "SASIB Boxer، ماشین جعبه‌بندی سیگار",
    metaDescription: "ماشین جعبه‌بندی سیگار SASIB Boxer در پاکستان — تا ۲۵ جعبه در دقیقه. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین جعبه‌بندی سیگار، تا ۲۵ جعبه در دقیقه.",
    intro: [
      "SASIB Boxer ماشین جعبه‌بندی سیگار پیشرفته‌ای است که به سرعت و کارایی خود شهرت دارد. با توانایی جعبه‌بندی تا ۲۵ جعبه در دقیقه، این ماشین جهشی واقعی به ظرفیت خط تولید سیگار در پاکستان می‌دهد.",
      "این ماشین با نیاز توان ۶ کیلوولت‌آمپر کار می‌کند و قدرت را با عملکرد ترکیب می‌کند، و نیاز فشار هوای ۰.۱ متر مکعب در دقیقه دارد که تعادلی بین مصرف انرژی و بازدهی عملیاتی حفظ می‌کند.",
      "SASIB Boxer که برای بسته‌بندی بسیار دقیق و یکنواخت طراحی شده، زمان توقف را به حداقل می‌رساند و فرآیند را ساده می‌کند که آن را به دارایی ارزشمندی در محیط‌های با حجم بالا تبدیل می‌کند، جایی که سرعت و دقت برای بهره‌وری و کیفیت محصول اهمیت دارد.",
    ],
    applications: ["جعبه‌بندی کارتن/جعبه", "خطوط بسته‌بندی با حجم بالا"],
  },
  "mark-8-post-64": {
    h1: "Mark 8 Post 64 – ماشین تولید سیگار در ایران",
    metaTitle: "MK 8 | ماشین تولید سیگار Mark 8 Post 64",
    metaDescription: "ماشین تولید سیگار Molins Mark 8 Post 64 در پاکستان — ماشین ساقه‌ساز قابل اعتماد برای تولید ثابت. بازسازی و پشتیبانی‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین تولید اثبات‌شده و قابل اعتمادی که کارخانه‌ها هنوز به آن اعتماد دارند.",
    intro: [
      "Molins Mark 8 Post 64 ماشین تولید سیگاری اثبات‌شده و پرتولید است که هم برای کیفیت و هم انعطاف‌پذیری ساخته شده است. این ماشین به‌طور ثابت با سرعت ۱,۸۰۰ تا ۲,۰۰۰ سیگار در دقیقه کار می‌کند و دارای چاپگر دورنگ است، بنابراین می‌توانید کاغذ را دقیقاً همان‌طور که برند شما نیاز دارد چاپ کنید بدون اینکه خط را کند کنید.",
      "این ماشین طیف گسترده‌ای از فرمت‌ها را مدیریت می‌کند — محیط سیگار از ۱۷ تا ۲۸.۳ میلی‌متر و طول ترکیبی ساقه فیلتر و تنباکو از ۶۵ تا ۱۱۰ میلی‌متر، که همه چیز از استاندارد ۸۴ و ۱۰۰ میلی‌متری تا slim، super slim و nano را پوشش می‌دهد. اتصال فیلتر Max Multiroll، فیلترها را در سرعت کامل به‌طور تمیز در جریان نگه می‌دارد.",
      "این ماشین با وزن حدود ۳,۵۰۰ کیلوگرم، ماشینی سنگین و مستحکم است که برای حفظ سرعت خود در طول تولیدهای طولانی ساخته شده است. این ترکیب سرعت، انعطاف‌پذیری فرمت و قابلیت اطمینان، Mark 8 Post 64 را به انتخابی هوشمندانه برای کارخانه‌هایی تبدیل می‌کند که خواهان تولید قوی از یک ماشین واحد هستند.",
    ],
    features: ["طراحی اثبات‌شده و بادوام Molins", "ساقه یکنواخت و برش تمیز", "قطعات و دانش فنی به‌طور گسترده در دسترس", "نگهداری آسان برای تکنسین‌ها", "ارزش عالی به‌عنوان یک واحد بازسازی‌شده"],
    applications: ["خط تولید ورودی", "ماشین پشتیبان قابل اعتماد"],
  },
  "mark-8d-max-15": {
    h1: "Mark 8D MAX 15",
    metaTitle: "MK 8D | Molins Mark 8D با سیستم MAX-15",
    metaDescription: "ماشین تولید سیگار Molins Mark 8D با MAX-15 در پاکستان — ۳,۰۰۰ در دقیقه در فرمت‌های King تا Nano. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین تولید Mark 8D با سرعت بالا با سیستم کنترل MAX-15.",
    intro: [
      "Molins Mark 8D با MAX-15 ماشین تولید سیگاری قدرتمند و انعطاف‌پذیر است که برای نیازهای یک کارخانه تنباکوی مدرن ساخته شده است. این ماشین متعلق به خانواده معروف ماشین تولید Mark 8 است و راهی قابل اعتماد برای تولیدکنندگان ایرانی فراهم می‌کند تا بدون از دست دادن کیفیت، تولید را افزایش دهند.",
      "این ماشین تا ۳,۰۰۰ سیگار در دقیقه کار می‌کند، بنابراین سرعت خود را به‌راحتی روی یک خط تولید شلوغ حفظ می‌کند. به همان اندازه مهم، این ماشین طیف گسترده‌ای از فرمت‌ها را مدیریت می‌کند. چه King size، Demi، Slims، Super Slims یا Nano تولید کنید، همان ماشین می‌تواند همه آن‌ها را تولید کند، که آن را به انتخابی عملی برای کارخانه‌ای تبدیل می‌کند که چند بخش را همزمان خدمت می‌کند.",
      "این ماشین تولید، محیط سیگار از ۱۷ تا ۲۸.۳ میلی‌متر و طول ترکیبی ساقه فیلتر و تنباکو از ۶۵ تا ۱۱۰ میلی‌متر را می‌پذیرد، بنابراین کنترل کامل روی اندازه را حفظ می‌کنید و از یک تولید به تولید دیگر ثبات دارید.",
      "این پیکربندی ماشین تولید MK-8D را با MAX-15 و واحد تغذیه 1117 آن ترکیب می‌کند. آن‌ها با هم فرآیند را به‌طور تمیز از تغذیه تنباکو تا ساقه نهایی انجام می‌دهند و خط را ثابت نگه می‌دارند، توقف‌ها را کاهش می‌دهند و کیفیت را در طول شیفت حفظ می‌کنند. با مصرف کل ۱۷ کیلووات، این ماشین سرعت تولید واقعی را با هزینه‌های عملیاتی معقول متعادل می‌کند.",
      "با وجود همه کارهایی که انجام می‌دهد، این ماشین فشرده باقی می‌ماند. با وزن حدود ۵,۰۰۰ کیلوگرم، مستحکم و بادوام است، اما بدون نیاز به بازسازی عمده در کف موجود جا می‌گیرد، و ساختار آن تولید طولانی و مداوم را تحمل می‌کند. روز به روز، این ماشین سیگارهای یکنواختی با ضایعات کم و نگهداری متوسط تولید می‌کند که دقیقاً همان چیزی است که یک کارخانه در تلاش برای کارکردن ناب در عین برآوردن تقاضا در فرمت‌های مختلف نیاز دارد.",
      "به طور خلاصه، Mark 8D با MAX-15 با قابلیت اطمینان اثبات‌شده، پشتیبانی انعطاف‌پذیر فرمت از slim تا nano، تولید با سرعت بالا که دقیق باقی می‌ماند، عملکرد کارآمد از نظر انرژی و جاگیری آسان در خط اتوماتیک، جایگاه خود را کسب می‌کند. چه در حال جایگزینی تجهیزات قدیمی باشید و چه افزودن ظرفیت، این ماشینی آماده برای آینده است که مهندسی کلاسیک را برای تولید مدرن به کار می‌گیرد.",
    ],
    applications: ["تولید با حجم بالا", "کارخانه‌های چندفرمتی"],
  },
  "mark-9-5-lenze-servo-drives": {
    h1: "Molins Mark 9.5 با سروو درایوهای Lenze",
    metaDescription: "Molins Mark 9.5 با سروو درایوهای Lenze در پاکستان — تا ۳,۵۰۰ در دقیقه با PLC زیمنس و کنترل وزن مایکروویو. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط تولید Mark 9.5 با سرعت بالا با سروو درایوهای Lenze.",
    intro: [
      "Molins Mark 9.5 با سروو درایوهای Lenze برای تولیدکنندگانی ساخته شده که تولید جدی می‌خواهند بدون از دست دادن انعطاف‌پذیری. این ماشین در قطرهای معمولی تا ۳,۵۰۰ سیگار در دقیقه و در فرمت‌های slim و super slim تا ۳,۲۰۰ در دقیقه تولید می‌کند، بنابراین یک خط می‌تواند طیف گسترده‌ای از محصولات را با سرعت تولید واقعی پوشش دهد.",
      "این ماشین در محدوده محیط سیگار از ۱۷ تا ۲۸.۳ میلی‌متر و طول ترکیبی ساقه فیلتر و تنباکو از ۶۵ تا ۱۱۰ میلی‌متر کار می‌کند که فضایی برای تغییر فرمت‌ها فراهم می‌کند در حالی که ساقه‌ای ثابت از یک تولید به تولید دیگر حفظ می‌شود.",
      "این خط سه واحد را با هم ترکیب می‌کند — ماشین تولید MK-9.5، مونتاژگر فیلتر MAX-S و پرکننده سینی خودکار HCF80، که به‌ترتیب ۳۵، ۲۰ و ۱۵ کیلووات مصرف می‌کنند. آن‌ها با هم فرآیند را از تولید تا سینی‌های پر با دخالت دستی بسیار کم انجام می‌دهند.",
      "کنترل و دقت در مرکز این ماشین قرار دارد. یک PLC زیمنس توالی را به‌طور روان اجرا می‌کند، سیستم مایکروویو کنترل دقیقی روی وزن ساقه حفظ می‌کند، و سروو درایوهای Lenze حرکتی دقیق و ثابت ارائه می‌دهند که حتی در سرعت کامل کیفیت را بالا نگه می‌دارد.",
      "با وزن کل حدود ۸,۶۰۰ کیلوگرم، این خطی سنگین و مستحکم است که برای تولید در مقیاس بزرگ ساخته شده است. برای کارخانه‌ای که به تولید حجم بالای قابل اعتماد با کنترل‌های مدرن و سرویس آسان نیاز دارد، Mark 9.5 با سروو درایوهای Lenze انتخابی قدرتمند و آماده برای آینده است.",
    ],
    applications: ["تولید با حجم بالا", "کارخانه‌های چندفرمتی"],
  },
  "mark-9-5-max-s-tray-filler": {
    h1: "Molins Mark-9.5 با Max S و پرکننده سینی",
    metaTitle: "Molins Mark-9.5 با Max S و پرکننده سینی",
    metaDescription: "Molins Mark-9.5 با Max S و پرکننده سینی در پاکستان — ۴,۵۰۰ تا ۵,۰۰۰ سیگار در دقیقه. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین تولید Mark-9.5 با سرعت بالا با Max S و پرکننده سینی جریانی.",
    intro: [
      "Molins Mark-9.5 با Max S و پرکننده سینی، انتخابی پریمیوم برای تولیدکنندگانی است که به تولید با سرعت بالا، یکپارچگی مرتب فیلتر و قابلیت تولید قابل اعتماد در یک خط نیاز دارند. این ماشین که برای حجم طراحی شده، با سرعتی چشمگیر ۴,۵۰۰ تا ۵,۰۰۰ سیگار در دقیقه کار می‌کند که آن را در میان کارآمدترین سیستم‌های موجود برای کارخانه‌های بزرگ در پاکستان قرار می‌دهد.",
      "در مرکز این پیکربندی، ماشین تولید MK-9.5 قرار دارد که تکاملی از سری اثبات‌شده Mark 9 است و در حالی که دقت و ثبات بالایی حفظ می‌کند، تولید قوی را نیز حفظ می‌کند. این ماشین از محیط سیگار ۱۷ تا ۲۸.۳ میلی‌متر و طول ترکیبی ساقه فیلتر و تنباکو ۶۵ تا ۱۱۰ میلی‌متر پشتیبانی می‌کند، بنابراین می‌توانید بین King size، Slims، Demi و سایر فرمت‌ها بدون از دست دادن کیفیت ساقه جابه‌جا شوید.",
      "ماشین تولید با مونتاژگر فیلتر Max-S جفت شده که فیلتر را به‌طور دقیق و تکرارپذیر به ساقه تنباکو متصل می‌کند. این ماشین که از طریق یک پرکننده سینی جریانی کار می‌کند، بازدهی را افزایش می‌دهد در حالی که ضایعات مواد و عدم تراز را پایین نگه می‌دارد، بنابراین یکپارچگی فیلتر در هر چرخه تولید ثابت می‌ماند.",
      "اندازه پیش‌فرض تنظیم ۸۴ میلی‌متری، ماشین را با ابعاد سیگار پذیرفته‌شده جهانی هماهنگ نگه می‌دارد که آن را به انتخابی عملی هم برای تأمین داخلی و هم تولید صادراتی تبدیل می‌کند. چه برند خود را اداره کنید و چه قراردادهای بزرگ را انجام دهید، این ماشین به‌طور روان بین دسته‌ها حرکت می‌کند و به‌راحتی با سفارش‌های در حال تغییر سازگار می‌شود.",
      "با وزن حدود ۷,۸۰۰ کیلوگرم، این خطی سنگین و پایدار است که برای عملیات مداوم و طول عمر خدماتی طولانی ساخته شده است. برای کارخانه‌ای که به دنبال گسترش است در حالی که کیفیت را حفظ کرده و زمان توقف را پایین نگه می‌دارد، Mark-9.5 با Max S و پرکننده سینی، سرعت، انعطاف‌پذیری و قابلیت اطمینانی که کف تولید نیاز دارد را گرد هم می‌آورد — از تولید اثبات‌شده و اتصال دقیق فیلتر تا تغذیه جریانی ساده‌شده و قابی بادوام و سنگین.",
    ],
    applications: ["تولید با حجم بالا", "تولید آماده صادرات"],
  },
  "mark-9-max-s": {
    h1: "Molins MK-9 با Max S",
    metaTitle: "Molins MK-9 با Max S",
    metaDescription: "Molins MK-9 با Max S در پاکستان — ۴,۵۰۰ تا ۵,۰۰۰ سیگار در دقیقه با پرکننده سینی جریانی. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین تولید MK-9 با سرعت بالا با Max S و پرکننده سینی جریانی.",
    intro: [
      "Molins MK-9 با Max S یک ماشین تولید سیگار پرکارآمد دیگر است که برای تولید جدی ساخته شده و بین ۴,۵۰۰ تا ۵,۰۰۰ سیگار در دقیقه کار می‌کند. این ماشین انتخابی قابل اعتماد برای کارخانه‌های پاکستان است که تولید قوی و ثابت را از یک خط واحد می‌خواهند.",
      "ماشین تولید MK-9 در مرکز، تولید را در هر شیفت دقیق و ثابت نگه می‌دارد. این ماشین در محدوده محیط سیگار از ۱۷ تا ۲۸.۳ میلی‌متر و طول ترکیبی ساقه فیلتر و تنباکو از ۶۵ تا ۱۱۰ میلی‌متر کار می‌کند، بنابراین انعطاف‌پذیری واقعی برای جابه‌جایی بین فرمت‌ها بدون از دست دادن کیفیت ساقه به دست می‌آورید.",
      "این ماشین با مونتاژگر فیلتر Max-S و پرکننده سینی جریانی مجهز شده که مرحله اتصال فیلتر را سریع‌تر و قابل‌اعتمادتر می‌کند در حالی که ضایعات و عدم تراز را پایین نگه می‌دارد. اندازه پیش‌فرض تنظیم ۸۴ میلی‌متری آن را با ابعاد سیگار به‌طور گسترده پذیرفته‌شده هماهنگ نگه می‌دارد، بنابراین به‌راحتی در اکثر برنامه‌های تولید جای می‌گیرد.",
      "با وزن حدود ۷,۸۰۰ کیلوگرم، MK-9 ماشینی سنگین و پایدار است که برای عملیات مداوم و طول عمر خدماتی طولانی ساخته شده است. برای کارخانه‌ای که تولید در مقیاس بزرگ را افزایش می‌دهد در حالی که کیفیت را حفظ می‌کند، این افزوده‌ای مستحکم و قابل اعتماد به کف تولید است.",
    ],
    applications: ["تولید با حجم بالا", "خط تولید اصلی"],
  },
  "protos-70": {
    h1: "Protos 70",
    metaTitle: "ماشین تولید سیگار Hauni Protos 70",
    metaDescription: "ماشین تولید سیگار Hauni Protos 70 در پاکستان — تا ۷,۰۰۰ در دقیقه با کنترل IPC زیمنس یا Beckhoff. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط تولید Protos 70 با سرعت بالا، تا ۷,۰۰۰ سیگار در دقیقه.",
    intro: [
      "Hauni Protos 70 یک ماشین تولید سیگار پیشرفته است که برای برآوردن بالاترین استانداردهای بازدهی تولید و دقت ساخته شده است. این ماشین در قطرهای معمولی با سرعت چشمگیر ۷,۰۰۰ سیگار در دقیقه و در فرمت‌های slim و super slim ۶,۰۰۰ در دقیقه کار می‌کند که به کارخانه‌های پاکستان سرعت و انعطاف‌پذیری واقعی از یک خط می‌دهد.",
      "این ماشین محیط سیگار از ۱۷ تا ۲۸.۳ میلی‌متر و طول ترکیبی ساقه فیلتر و تنباکو از ۶۵ تا ۱۱۰ میلی‌متر را مدیریت می‌کند، بنابراین می‌توانید بین فرمت‌ها جابه‌جا شوید در حالی که ساقه‌ای ثابت از یک تولید به تولید دیگر حفظ می‌کنید.",
      "یک سیستم کنترل IPC زیمنس یا IPC Beckhoff، توالی را خودکار، روان و قابل اعتماد نگه می‌دارد، در حالی که سیستم کنترل وزن مایکروویو، هر سیگار را در وزنی دقیق نگه می‌دارد تا ثبات محصول ثابت باشد. این خط ماشین تولید ساقه S7000، اتصال نوک فیلتر M8000 و پرکننده سینی خودکار F80 را با هم ترکیب می‌کند که هر کدام مرحله فرآیند خود را به‌طور تمیز مدیریت می‌کنند.",
      "با توان ۵۰ کیلووات برای S7000، ۲۰ کیلووات برای M8000 و ۱۵ کیلووات برای F80، Protos 70 خطی قدرتمند و توانمند است. با وزن کل حدود ۱۰,۸۰۰ کیلوگرم، این ماشین سنگین و پایدار است و برای عملیات مداوم و طول عمر خدماتی طولانی ساخته شده که آن را به انتخابی ایده‌آل برای تولید سیگار در مقیاس بزرگ تبدیل می‌کند.",
    ],
    applications: ["تولید با حجم بالا", "تولید در مقیاس بزرگ"],
  },
  "protos-80-er": {
    h1: "Protos 80 ER",
    metaTitle: "ماشین تولید سیگار Hauni Protos 80 ER",
    metaDescription: "ماشین تولید سیگار Hauni Protos 80 ER در پاکستان — تا ۸,۰۰۰ در دقیقه با کنترل IPC زیمنس یا Beckhoff. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط تولید Protos 80 ER با سرعت بالا، تا ۸,۰۰۰ سیگار در دقیقه.",
    intro: [
      "Protos 80 ER ماشین تولید سیگار با عملکرد بالایی است که برای تولیدکنندگانی طراحی شده که خواهان حداکثر بازدهی، دقت و تولید هستند. این ماشین که توسط Hauni ساخته شده، سری Protos 80 به قابلیت اطمینان و اتوماسیون پیشرفته خود شهرت دارد، و چه سیگارهای معمولی یا slim تولید کنید، ثبات و بهره‌وری قوی ارائه می‌دهد که آن را به انتخابی مورد اعتماد برای خطوط با حجم بالا در پاکستان تبدیل می‌کند.",
      "ظرفیت جایی است که این ماشین واقعاً برجسته می‌شود. این ماشین در قطرهای معمولی تا ۸,۰۰۰ سیگار در دقیقه و در فرمت‌های slim و super slim تا ۷,۰۰۰ در دقیقه تولید می‌کند. این ماشین محیط سیگار از ۱۷ تا ۲۸.۳ میلی‌متر و طول ترکیبی ساقه فیلتر و تنباکو از ۶۵ تا ۱۱۰ میلی‌متر را می‌پذیرد، بنابراین در برابر انواع مختلف سیگار و تقاضاهای بازار انعطاف‌پذیر باقی می‌ماند. از king size تا slim تا فرمت‌های خاص، Protos 80 ER با نحوه تولید شما سازگار می‌شود.",
      "برای دقت و زمان کارکرد، این ماشین یک سیستم کنترل PLC سطح بالا روی IPC زیمنس یا IPC Beckhoff اجرا می‌کند و کل چرخه را روان و خودکار نگه می‌دارد. نظارت لحظه‌ای و پاسخ سریع سیستم، خطای انسانی را کاهش می‌دهد و خط را در حال کار نگه می‌دارد، در حالی که سیستم کنترل وزن مایکروویو داخلی، وزن ثابتی از سیگار را روی هر واحد برای کنترل کیفیت سخت‌گیرانه حفظ می‌کند.",
      "این خط از سه واحد قدرتمند تشکیل شده که با هم کار می‌کنند — ماشین تولید ساقه S7000 با ۵۰ کیلووات، اتصال نوک فیلتر M8000 با ۲۰ کیلووات و پرکننده سینی خودکار F80 با ۱۵ کیلووات. Protos 80 که به قابلیت اطمینان شهرت دارد و در کارخانه‌های سیگار در سراسر جهان استفاده می‌شود، مصرف کارآمد انرژی، ضایعات پایین و مهندسی دقیق را برای پایین نگه داشتن هزینه‌های عملیاتی در حالی که استانداردهای محصول بالا باقی می‌ماند، ترکیب می‌کند. با وزن کل حدود ۱۰,۸۰۰ کیلوگرم، این خطی سنگین و پایدار است که برای تولید مداوم و در مقیاس بزرگ ساخته شده است.",
    ],
    applications: ["تولید با حجم بالا", "تولید در مقیاس بزرگ"],
  },
  "kdf-1": {
    h1: "ماشین تولید فیلتر سیگار Hauni KDF-1",
    metaTitle: "ماشین تولید فیلتر Hauni KDF-1",
    metaDescription: "ماشین تولید فیلتر Hauni KDF-1 در پاکستان — فیلترهای ۱۲۰ میلی‌متری با PLC زیمنس/Beckhoff و کنترل محیط لیزری. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط تولید فیلتر Hauni KDF-1 با کنترل محیط لیزری.",
    intro: [
      "Hauni KDF-1 خط تولید فیلتر قابل اعتماد و قدرتمندی است که به عملکرد، دقت و دوام در تولید سیگار شهرت دارد. این ماشین که برای نیازهای تولید در مقیاس بزرگ ساخته شده، برای تولیدکنندگانی در پاکستان مناسب است که ثبات، سرعت و کیفیت را در اولویت قرار می‌دهند.",
      "این ماشین که برای عملکرد پرتولید ساخته شده، ظرفیت تولید مستحکمی برای فیلترهای ۱۲۰ میلی‌متری ارائه می‌دهد که هم برای فرمت‌های استاندارد و هم سفارشی سیگار خوب کار می‌کند. این ماشین از محیط فیلتر ۱۶.۸ تا ۲۸.۱ میلی‌متر و طول فیلتر ۶۴ تا ۱۵۰ میلی‌متر پشتیبانی می‌کند، بنابراین می‌توانید طیف گسترده‌ای از اندازه‌ها و انواع فیلتر را بدون تغییرات مداوم ماشین تولید کنید. از فیلترهای King Size تا Slims و طرح‌های تخصصی، KDF-1 همه آن‌ها را به‌طور کارآمد مدیریت می‌کند.",
      "این ماشین با یک سیستم کنترل PLC پیشرفته که در پیکربندی‌های زیمنس یا Beckhoff موجود است کار می‌کند و کنترل شهودی، تشخیص لحظه‌ای و اتوماسیون قابل اعتمادی ارائه می‌دهد که کیفیت فیلتر را در طول کل تولید ثابت نگه می‌دارد. سیستم‌های سروو Lenze یا Beckhoff به ثبات بیشتر کمک کرده و حرکت را روان و دقیق نگه می‌دارند.",
      "یک ویژگی برجسته، سیستم کنترل محیط مبتنی بر لیزر است که محیط هر فیلتر را با دقت بالا اندازه‌گیری می‌کند، انحراف را کاهش می‌دهد و یکنواختی هر دسته را حفظ می‌کند. این سطح از دقت برای حفظ استانداردهای کیفیت برند در محصولات پریمیوم اهمیت دارد.",
      "با وجود تمام تولید خود، KDF-1 پروفایل انرژی متعادلی در مجموع ۴۰ کیلووات حفظ می‌کند که آن را برای عملکرد بلندمدت کارآمد می‌سازد. ساختار مستحکم و به‌خوبی مهندسی‌شده آن، عمر خدماتی طولانی می‌دهد و طراحی ماژولار و سازگاری آن با انواع مختلف سیگار، آن را برای تولید فیلتر هم در مقیاس کوچک و هم بزرگ مناسب می‌سازد، چه در حال گسترش ظرفیت باشید و چه ارتقای ماشین‌آلات قدیمی.",
    ],
    applications: ["تولید فیلتر با حجم بالا", "فیلترهای استاندارد و تخصصی"],
  },
  "kdf-2": {
    h1: "ماشین تولید فیلتر سیگار Hauni KDF-2",
    metaTitle: "ماشین تولید فیلتر با سرعت بالا Hauni KDF-2",
    metaDescription: "ماشین تولید فیلتر Hauni KDF-2 در پاکستان — ۴۰۰ متر نخ استات در دقیقه با PLC زیمنس/Beckhoff. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "خط تولید فیلتر Hauni KDF-2 با سرعت بالا، ۴۰۰ متر در دقیقه.",
    intro: [
      "Hauni KDF-2 ماشین تولید فیلتری در سطح جهانی است که برای تولید فیلتر سیگار با کارایی بالا و پرتولید ساخته شده است. این ماشین که به کیفیت مهندسی و اتوماسیون پیشرفته خود شهرت دارد، برای تولیدکنندگان بزرگ در پاکستان که هم به دقت و هم بهره‌وری نیاز دارند، انتخابی قابل اعتماد است.",
      "این ماشین با سرعتی چشمگیر کار می‌کند و ۴۰۰ متر نخ استات در دقیقه پردازش می‌کند که آن را برای نیازهای خطوط تولید مدرن مناسب می‌سازد. این سرعت با تطبیق‌پذیری واقعی همراه است: این ماشین از محیط فیلتر ۱۶.۸ تا ۲۸.۱ میلی‌متر و طول فیلتر ۶۴ تا ۱۵۰ میلی‌متر پشتیبانی می‌کند، بنابراین همه چیز از فیلترهای استاندارد King Size تا فرمت‌های تخصصی‌تر را با ثبات، کیفیت و حداقل زمان توقف پوشش می‌دهد.",
      "آنچه KDF-2 را متمایز می‌کند، اتوماسیون آن است. یک سیستم کنترل PLC که در پیکربندی‌های زیمنس یا Beckhoff موجود است، کنترل کامل و نظارت لحظه‌ای ارائه می‌دهد، در حالی که یک سیستم سروو Lenze یا Beckhoff پرعملکرد، حرکات را دقیق و عملکرد را قابل اعتماد نگه می‌دارد. این امر حاشیه خطا را کاهش داده و کیفیت فیلتر را یکنواخت نگه می‌دارد، بنابراین این ماشین به‌طور روان به‌عنوان ستون فقرات قابل اعتمادی برای تولید مداوم و در مقیاس بزرگ ادغام می‌شود.",
      "KDF-2 که برای دوام ساخته شده، با یک بازکننده نخ و پرکننده سینی خودکار HCF80 جفت می‌شود تا گردش کار را ساده‌تر کند و مدیریت دستی را کاهش دهد. این ماشین ۴۰ کیلووات برای واحد اصلی KDF-2 و ۱۵ کیلووات برای پرکننده HCF80 مصرف می‌کند و بازدهی انرژی را با عملکرد قوی ترکیب می‌کند.",
      "با وجود تمام این قابلیت‌ها، KDF-2 اندازه‌ای قابل مدیریت حدود ۶,۵۰۰ کیلوگرم حفظ می‌کند و ساختار مستحکم آن دوام بلندمدت را تحت برنامه‌های تولید سخت‌گیرانه فراهم می‌کند. چه در حال راه‌اندازی یک تأسیسات جدید باشید و چه ارتقای ماشین‌آلات موجود، این سرمایه‌گذاری هوشمندانه‌ای است که به‌خوبی در سیستم‌های تولید مدرن جای می‌گیرد در حالی که کیفیت عالی فیلتر ارائه می‌دهد.",
    ],
    applications: ["تولید فیلتر با حجم بالا", "تولید در مقیاس بزرگ"],
  },
  "molins-pm-5": {
    h1: "ماشین فیلتر Molins PM-5",
    metaTitle: "ماشین تولید فیلتر سیگار Molins PM-5",
    metaDescription: "ماشین تولید فیلتر Molins PM-5 در پاکستان — ماشین با ظرفیت بالا، ۴,۰۰۰ فیلتر در دقیقه. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین تولید فیلتر با ظرفیت بالای Molins، ۴,۰۰۰ فیلتر در دقیقه.",
    intro: [
      "Molins PM-5 ماشین تولید فیلتر سیگار با ظرفیت بالایی است که برای نیازهای تولید در مقیاس بزرگ ساخته شده است. با ظرفیت ۴,۰۰۰ فیلتر در دقیقه، این ماشین نمونه‌ای قوی از بازدهی و دقت در تولید فیلتر است، انتخابی قابل اعتماد برای کارخانه‌های شلوغ در پاکستان.",
      "این ماشین انعطاف‌پذیری مفیدی در اندازه فیلتر ارائه می‌دهد، با قطر ساقه فیلتر ۷.۵ تا ۷.۸ میلی‌متر و طول ساقه فیلتر ۱۰۸ تا ۱۲۶ میلی‌متر، بنابراین می‌تواند مشخصات مختلف فیلتر را بدون مشکل مدیریت کند.",
      "با وزن حدود ۲,۰۰۰ کیلوگرم، PM-5 ساختاری مستحکم دارد که دوام و عملکرد پایدار در دوره‌های طولانی را ارائه می‌دهد. این ماشین که توسط Molins، نامی شناخته‌شده در صنعت، ساخته شده، مهندسی اثبات‌شده را با تولید سرعت بالا ترکیب می‌کند که آن را به دارایی ضروری برای تولیدکنندگانی تبدیل می‌کند که خواهان فیلترهای باکیفیت هستند در حالی که بازدهی را به حداکثر می‌رسانند.",
    ],
    applications: ["تولید فیلتر با حجم بالا", "خطوط مبتنی بر Molins"],
  },
  "hollow-tube-maker": {
    h1: "ماشین تولید لوله توخالی",
    metaTitle: "ماشین تولید لوله توخالی، ماشین فیلتر سیگار",
    metaDescription: "ماشین تولید لوله توخالی در پاکستان — ۲,۱۰۰ در دقیقه با مونتاژگر برای لوله‌های فیلتر تخصصی. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ماشین تولید لوله توخالی با سرعت بالا، ۲,۱۰۰ سیگار در دقیقه.",
    intro: [
      "ماشین تولید لوله توخالی به دلیل ظرفیت تولید و عملکرد با سرعت بالای خود برجسته است. این ماشین قادر به تولید ۲,۱۰۰ سیگار در دقیقه است و بازدهی قوی و تولید ثابتی ارائه می‌دهد. محدوده سرعت ساقه ۱۴۰ تا ۱۷۵ متر در دقیقه، همراه با سرعت برش تا ۲,۵۰۰ ساقه در دقیقه، نشان می‌دهد که این ماشین چقدر برای تولید در مقیاس بزرگ در کارخانه‌های پاکستان مناسب است.",
      "با وزن ۳,۰۵۰ کیلوگرم، این ماشین ساختاری مستحکم برای دوام و قابلیت اطمینان بلندمدت دارد. مونتاژگر ۱,۸۰۰ کیلوگرم دیگر اضافه می‌کند و همگام با ماشین برای تولید دقیق و کارآمد لوله کار می‌کند. مصرف کل توان ۱۴ کیلووات است که بین ۶.۵ کیلووات برای ماشین و ۷.۵ کیلووات برای مونتاژگر تقسیم می‌شود که تعادل خوبی بین عملکرد و مصرف انرژی ایجاد می‌کند.",
      "ماشین تولید لوله توخالی که برای تولید در مقیاس بزرگ طراحی شده، از فناوری روز برای تولید لوله‌های باکیفیت استفاده می‌کند. قابلیت سرعت بالا و مهندسی مستحکم آن، این ماشین را به دارایی ارزشمندی برای تولیدکنندگانی تبدیل می‌کند که باید تقاضای قوی را برآورده کنند در حالی که استانداردهای تولید عالی را حفظ می‌کنند.",
    ],
    applications: ["تولید فیلتر با حجم بالا", "لوله‌های فیلتر تخصصی"],
  },
  "tobacco-feeder": {
    h1: "تغذیه‌کننده تنباکو",
    metaTitle: "تغذیه‌کننده تنباکو برای ماشین‌های تولید سیگار",
    metaDescription: "تغذیه‌کننده تنباکو در پاکستان — جریان ثابت و یکنواخت تنباکو برای ماشین‌های تولید Mark 8 و Mark 9. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "جریانی ثابت و یکنواخت از تنباکو برای ماشین‌های تولید Mark 8 و Mark 9 تأمین می‌کند.",
    intro: [
      "تغذیه‌کننده تنباکو ماشین ورودی حیاتی برای یک کارخانه سیگارسازی است. این ماشین تنباکو را به‌طور مداوم و یکنواخت به ماشین‌های تولید تغذیه می‌کند و آن را به‌طور مرتب لایه‌بندی می‌کند تا دقیقاً همان‌طور که برای تولید لازم است، آماده شود.",
      "این ماشین با ماشین‌های Mark 8 و Mark 9 سازگار است، بنابراین به‌راحتی در یک چیدمان موجود جای می‌گیرد. تنظیمات حجم قابل تنظیم به شما اجازه می‌دهد جریان تنباکو را به‌طور دقیق کنترل کنید که بازدهی تولید را افزایش می‌دهد، و اتوماسیون آن مدیریت دستی را کاهش می‌دهد، عملیات را ساده می‌کند و بهره‌وری را بالا نگه می‌دارد.",
    ],
    applications: ["تغذیه ماشین تولید", "تولید ثابت ساقه"],
  },
  "cigarette-reclaimer": {
    h1: "بازیافت‌کننده سیگار",
    metaTitle: "بازیافت‌کننده سیگار، ماشین بازیافت تنباکو",
    metaDescription: "بازیافت‌کننده سیگار در پاکستان — تنباکو را از ضایعات تولید با ۱۲۰ کیلوگرم در ساعت و بازدهی ۹۹.۸٪ بازیافت می‌کند. تأمین‌شده توسط Civic Tobacco Machinery.",
    tagline: "تنباکو را از ضایعات با ۱۲۰ کیلوگرم در ساعت و بازدهی ۹۹.۸٪ بازیافت می‌کند.",
    intro: [
      "بازیافت‌کننده سیگار ماشین عالی برای بازیافت تنباکو از ضایعات تولید سیگار است. این ماشین تنباکوی قابل استفاده مجدد را از مواد ضایعاتی با تلفات بسیار کم جدا می‌کند، بنابراین تنباکویی که در غیر این صورت دور می‌ریختید، به تولید بازمی‌گردد.",
      "در حداکثر ظرفیت، این ماشین ۱۲۰ کیلوگرم در ساعت بازیافت می‌کند و با بازدهی چشمگیر ۹۹.۸٪ کار می‌کند و بالاترین بهره‌برداری ممکن را به شما می‌دهد. با نرخ بازیافت ۹۰٪، این ماشین مزیت واقعی در کاهش ضایعات و افزایش بازدهی کلی تولید ارائه می‌دهد.",
      "این ماشین کاربرپسند است و به‌راحتی در خط تولید شما نصب می‌شود که آن را به افزوده‌ای عملی و صرفه‌جویانه در هزینه برای کارخانه‌های پاکستان تبدیل می‌کند که می‌خواهند از هر دسته بیشترین بهره را ببرند.",
    ],
    applications: ["کاهش ضایعات", "بازیافت تنباکو"],
  },
  "tobacco-cutters": {
    h1: "برش‌دهنده تنباکو Hauni KT-400",
    metaTitle: "برش‌دهنده تنباکو Hauni KT-400",
    metaDescription: "برش‌دهنده تنباکو Hauni KT-400 در پاکستان — برش‌دهنده پنج‌تیغه با اندازه برش تنظیم‌شده توسط PLC. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "برش‌دهنده تنباکو Hauni KT-400 با پنج تیغه و کنترل اندازه برش با PLC.",
    intro: [
      "برش‌دهنده تنباکو Hauni KT-400 ماشینی با مهندسی دقیق است که نقشی حیاتی در حفظ کیفیت ثابت برش در فرآوری تنباکو دارد. این ماشین دارای پنج تیغه است که برش‌های یکنواختی ارائه می‌دهد و کیفیت کلی مخلوط تنباکو را بهبود می‌بخشد، و سیلندرهای پنوماتیک فک را برای برش روان و کارآمد با زمان توقف و نگهداری کمتر به کار می‌گیرند.",
      "KT-400 همچنین یک سیستم درایو PLC پیشرفته روی یک نوار خمشی برنجی اجرا می‌کند که اندازه برش را به‌طور دقیق تنظیم می‌کند. این امر هر دسته را یکنواخت نگه می‌دارد و به شما اجازه می‌دهد اندازه برش را با نیازهای خاص تنظیم کنید، تطبیق‌پذیری واقعی اضافه می‌کند. با دقت و قابلیت اطمینان خود، KT-400 دارایی مهمی برای هر تأسیسات فرآوری تنباکو در پاکستان است که هدف آن کیفیت و بازدهی برتر است.",
    ],
    applications: ["فرآوری اولیه", "آماده‌سازی خرده تنباکو"],
  },
  "tobacco-stem-flattener": {
    h1: "صاف‌کننده ساقه تنباکو",
    metaTitle: "صاف‌کننده ساقه تنباکو، ماشین فرآوری اولیه",
    metaDescription: "صاف‌کننده ساقه تنباکو در پاکستان — ساقه‌ها را برای مخلوط یکنواخت و کاهش ضایعات برگ صاف می‌کند. تأمین و سرویس‌شده توسط Civic Tobacco Machinery.",
    tagline: "ساقه‌های تنباکو را برای مخلوط یکنواخت و کاهش ضایعات برگ صاف می‌کند.",
    intro: [
      "صاف‌کننده ساقه تنباکو نقش کلیدی در بهینه‌سازی گردش کار فرآوری تنباکو ایفا می‌کند. با صاف کردن ساقه‌های تنباکو، این ماشین آن‌ها را برای مخلوط یکنواخت با برگ‌ها آماده می‌کند که آسانی فرآوری را بهبود می‌بخشد و احتمال ناهماهنگی در محصول نهایی را کاهش می‌دهد.",
      "با صاف کردن کارآمد ساقه‌ها، این ماشین همچنین ضایعات برگ را به حداقل می‌رساند و کل فرآیند را اقتصادی‌تر و پایدارتر می‌کند. نتیجه، محصولی یکنواخت و باکیفیت است که استانداردهای سخت‌گیرانه صنعت را برآورده می‌کند که صاف‌کننده ساقه را به دارایی ارزشمندی برای هر عملیات فرآوری تنباکو در پاکستان تبدیل می‌کند.",
    ],
    applications: ["فرآوری اولیه", "بهبود بازدهی"],
  },
};

const productContent: Partial<Record<LocaleCode, Record<string, ProductContent>>> = {
  de,
  it,
  ru,
  ar,
  pl,
  bg,
  vi,
  id,
  tr,
  zh,
  fa,
  za,
  zw,
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

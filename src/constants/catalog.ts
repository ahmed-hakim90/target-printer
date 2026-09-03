export const comingSoonProducts = [
  {
    id: "nail-printer",
    name: "Nail Printer",
    nameAr: "طابعة الأظافر",
    description: "Compact direct nail-art printing for personalized beauty applications.",
    descriptionAr: "طباعة مباشرة ومدمجة لتخصيص تصميمات الأظافر في تطبيقات التجميل.",
    icon: "nail" as const,
  },
  {
    id: "coffee-printer",
    name: "Coffee Printer",
    nameAr: "طابعة القهوة",
    description: "Edible-image printing designed for personalized drinks and hospitality service.",
    descriptionAr: "طباعة صور صالحة للاستهلاك لتخصيص المشروبات وخدمات الضيافة.",
    icon: "coffee" as const,
  },
  {
    id: "portable-printer",
    name: "Portable Printer",
    nameAr: "طابعة محمولة",
    description: "A portable format for convenient on-demand color printing.",
    descriptionAr: "تصميم محمول للطباعة الملونة عند الطلب بسهولة.",
    icon: "portable" as const,
  },
] as const;

export const catalogConsumables = [
  {
    series: "DTF Series",
    seriesAr: "سلسلة DTF",
    items: ["DTF pigment ink", "Glue powder", "PET transfer film"],
    itemsAr: ["حبر DTF Pigment", "بودرة لاصقة", "فيلم نقل PET"],
  },
  {
    series: "Textile Series",
    seriesAr: "سلسلة المنسوجات",
    items: ["Sublimation ink", "Transfer-sublimation paper"],
    itemsAr: ["حبر سبلميشن", "ورق نقل سبلميشن"],
  },
  {
    series: "Eco & Solvent Series",
    seriesAr: "سلسلة Eco & Solvent",
    items: ["Eco-solvent ink", "Solvent ink", "Cleaning flush"],
    itemsAr: ["حبر Eco Solvent", "حبر Solvent", "سائل تنظيف"],
  },
  {
    series: "UV-DTF Series",
    seriesAr: "سلسلة UV-DTF",
    items: ["UV ink", "UV A-B film"],
    itemsAr: ["حبر UV", "فيلم UV A-B"],
  },
] as const;

const highlights = [
  {
    match: "TA-602+604",
    en: [
      "High-frequency powder shaking",
      "White-ink circulation",
      "Adjustable pinch rollers",
      "Low-failure design",
    ],
    ar: [
      "هز بودرة عالي التردد",
      "تدوير الحبر الأبيض",
      "رولات ضغط قابلة للضبط",
      "تصميم منخفض الأعطال",
    ],
  },
  {
    match: "TA-604Pro",
    en: [
      "Integrated computer stand",
      "Enhanced feed-up traction",
      "Three-color warning light",
      "Ink-level display",
    ],
    ar: ["حامل كمبيوتر مدمج", "سحب محسن للخامة", "تنبيه ضوئي ثلاثي الألوان", "شاشة مستوى الحبر"],
  },
  {
    match: "DTE Integrated",
    en: [
      "Strong color expression",
      "Optional visual positioning",
      "High-precision printing",
      "Original Epson print heads",
    ],
    ar: [
      "إظهار قوي للألوان",
      "تحديد موضع بصري اختياري",
      "طباعة عالية الدقة",
      "رؤوس طباعة Epson أصلية",
    ],
  },
  {
    match: "TA-604UV",
    en: [
      "Automatic capping and moisturizing",
      "Managed ink-supply system",
      "Operator-friendly configuration",
      "Original Epson print heads",
    ],
    ar: [
      "تغطية وترطيب تلقائيان",
      "نظام منظم لتغذية الحبر",
      "تجهيز سهل للمشغل",
      "رؤوس طباعة Epson أصلية",
    ],
  },
  {
    match: "TA-300UV",
    en: [
      "Detailed decorative output",
      "White-ink supply system",
      "Automatic cleaning",
      "Fully automatic lamination",
    ],
    ar: [
      "مخرجات زخرفية دقيقة",
      "نظام تغذية للحبر الأبيض",
      "تنظيف تلقائي",
      "تغليف أوتوماتيكي بالكامل",
    ],
  },
  {
    match: "KJ-1602/1802",
    en: [
      "Level-measuring instrument",
      "Continuous ink supply",
      "Automatic cleaning",
      "Media-shortage alarm",
    ],
    ar: ["أداة قياس مستوى", "تغذية حبر مستمرة", "تنظيف تلقائي", "تنبيه نفاد الخامة"],
  },
  {
    match: "KJ-1804",
    en: [
      "Anti-collision device",
      "Continuous ink supply",
      "Automatic cleaning",
      "Three-stage pinch rollers",
    ],
    ar: ["نظام مضاد للتصادم", "تغذية حبر مستمرة", "تنظيف تلقائي", "رولات ضغط ثلاثية المراحل"],
  },
  {
    match: "TA-1601/1801",
    en: [
      "Anti-collision device",
      "Continuous ink supply",
      "Automatic cleaning",
      "Three-stage pinch rollers",
    ],
    ar: ["نظام مضاد للتصادم", "تغذية حبر مستمرة", "تنظيف تلقائي", "رولات ضغط ثلاثية المراحل"],
  },
] as const;

export const catalogHighlightsFor = (productName: string, language: "en" | "ar") => {
  const item = highlights.find(({ match }) => productName.includes(match));
  return item?.[language] ?? [];
};

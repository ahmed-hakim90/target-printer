import { images } from "./images";
export const partCategories = [
  { id: "rotating", label: "Inks & Consumables", image: images.partCategories.rotating },
  { id: "hydraulics", label: "Print Heads", image: images.partCategories.hydraulics },
  {
    id: "powerTransmission",
    label: "UV Components",
    image: images.partCategories.powerTransmission,
  },
  { id: "conveying", label: "Media Handling", image: images.partCategories.conveying },
  { id: "electrical", label: "Electrical Parts", image: images.partCategories.electrical },
  { id: "automation", label: "Maintenance Kits", image: images.partCategories.automation },
] as const;
export type PartCategoryId = (typeof partCategories)[number]["id"];
export type PartRaw = {
  slug: string;
  name: string;
  nameAr: string;
  categoryId: PartCategoryId;
  summary: string;
  summaryAr: string;
  description: string;
  descriptionAr: string;
  applications: string[];
  applicationsAr: string[];
  compatibility: string[];
  compatibilityAr: string[];
  serviceIncludes: string[];
  serviceIncludesAr: string[];
};
export const partCatalog: PartRaw[] = [
  {
    slug: "original-inks",
    name: "Original Target Inks",
    nameAr: "أحبار Target الأصلية",
    categoryId: "rotating",
    summary: "Color-consistent inks matched to Target print profiles and production systems.",
    summaryAr: "أحبار ثابتة اللون ومتوافقة مع بروفايلات الطباعة وأنظمة إنتاج Target.",
    description:
      "The correct ink chemistry protects color consistency, adhesion and print-head life. We supply ink selected for the supported machine, application and curing system rather than an unverified universal substitute.",
    descriptionAr:
      "تركيبة الحبر الصحيحة تحافظ على ثبات الألوان وقوة الالتصاق وعمر رأس الطباعة. نوفر الحبر المحدد للماكينة والتطبيق ونظام التجفيف المدعوم بدل البدائل العامة غير الموثقة.",
    applications: [
      "Office document printing",
      "DTF textile transfer",
      "UV DTF transfer",
      "Eco-solvent wide format",
    ],
    applicationsAr: [
      "طباعة المستندات المكتبية",
      "نقل DTF للمنسوجات",
      "نقل UV DTF",
      "الطباعة العريضة إيكو سولفنت",
    ],
    compatibility: [
      "Target office printers",
      "Supported KingJet and Target production systems",
      "Machine-specific color and ink configuration",
    ],
    compatibilityAr: [
      "طابعات Target المكتبية",
      "أنظمة KingJet وTarget المدعومة",
      "تركيبة اللون والحبر المحددة لكل ماكينة",
    ],
    serviceIncludes: [
      "Ink compatibility check",
      "Storage and handling guidance",
      "Color-profile and output support",
    ],
    serviceIncludesAr: [
      "فحص توافق الحبر",
      "إرشادات التخزين والتعامل",
      "دعم بروفايل الألوان وجودة المخرجات",
    ],
  },
  {
    slug: "print-heads",
    name: "Genuine Print Heads",
    nameAr: "رؤوس طباعة أصلية",
    categoryId: "hydraulics",
    summary: "Replacement print heads with installation and calibration by trained technicians.",
    summaryAr: "رؤوس طباعة بديلة مع التركيب والمعايرة بواسطة فنيين متخصصين.",
    description:
      "Print-head replacement starts with diagnosis. The team confirms the head model, cable and board condition, ink path and failure cause before installation, alignment and nozzle testing.",
    descriptionAr:
      "يبدأ استبدال رأس الطباعة بالتشخيص. يتأكد الفريق من موديل الرأس وحالة الكابلات والبورد ومسار الحبر وسبب العطل قبل التركيب والمحاذاة واختبار النوزلات.",
    applications: [
      "Office laser output units",
      "DTF and DTG production",
      "UV DTF printing",
      "Eco-solvent large format",
    ],
    applicationsAr: [
      "وحدات طباعة الليزر المكتبية",
      "إنتاج DTF وDTG",
      "طباعة UV DTF",
      "الطباعة العريضة إيكو سولفنت",
    ],
    compatibility: [
      "Epson-head configurations listed per machine",
      "Supported office printer imaging systems",
      "Matching head rank, cables and firmware",
    ],
    compatibilityAr: [
      "تجهيزات رؤوس Epson المحددة لكل ماكينة",
      "وحدات التصوير للطابعات المكتبية المدعومة",
      "تطابق تصنيف الرأس والكابلات والبرمجيات",
    ],
    serviceIncludes: [
      "Failure diagnosis",
      "Professional installation",
      "Alignment, calibration and nozzle test",
    ],
    serviceIncludesAr: ["تشخيص سبب العطل", "تركيب احترافي", "محاذاة ومعايرة واختبار النوزلات"],
  },
  {
    slug: "uv-lamps",
    name: "UV Lamps & Curing Parts",
    nameAr: "لمبات UV ومكونات التجفيف",
    categoryId: "powerTransmission",
    summary: "Reliable UV curing components for stable adhesion and production quality.",
    summaryAr: "مكونات تجفيف UV موثوقة لالتصاق ثابت وجودة إنتاج مستقرة.",
    description:
      "UV curing performance depends on the lamp, driver, cooling and working distance operating together. Components are identified against the machine configuration before replacement and output testing.",
    descriptionAr:
      "يعتمد أداء التجفيف بالأشعة فوق البنفسجية على تكامل اللمبة والدرايفر والتبريد ومسافة التشغيل. نحدد المكونات طبقًا لتجهيز الماكينة قبل الاستبدال واختبار المخرجات.",
    applications: [
      "UV DTF stickers and transfers",
      "Rigid and hard-surface decoration",
      "Cylindrical product transfers",
    ],
    applicationsAr: [
      "استيكرات ونقل UV DTF",
      "الطباعة على الأسطح الصلبة",
      "نقل التصميمات للمنتجات الأسطوانية",
    ],
    compatibility: [
      "Supported Target UV DTF systems",
      "Machine-specific lamp width and power",
      "Matching driver and cooling assembly",
    ],
    compatibilityAr: [
      "أنظمة Target UV DTF المدعومة",
      "عرض وقدرة اللمبة المحددان للماكينة",
      "الدرايفر ووحدة التبريد المتوافقان",
    ],
    serviceIncludes: [
      "Curing-system inspection",
      "Lamp and driver identification",
      "Adhesion and curing test after fitting",
    ],
    serviceIncludesAr: [
      "فحص نظام التجفيف",
      "تحديد اللمبة والدرايفر",
      "اختبار الالتصاق والتجفيف بعد التركيب",
    ],
  },
  {
    slug: "rollers",
    name: "Pinch Rollers & Media Feed",
    nameAr: "رولات الضغط وتغذية الخامة",
    categoryId: "conveying",
    summary: "Precision media-handling parts that protect tracking accuracy and feed consistency.",
    summaryAr: "مكونات دقيقة لحركة الخامة تحافظ على مسارها وانتظام التغذية.",
    description:
      "Worn rollers and feed components can cause skew, banding and registration errors. We identify the correct dimensions and surface type, inspect the feed path and verify tracking after fitting.",
    descriptionAr:
      "قد تسبب الرولات ومكونات التغذية المستهلكة انحراف الخامة أو تقطيع الألوان وأخطاء المحاذاة. نحدد المقاس ونوع السطح الصحيحين ونفحص مسار التغذية ثم نختبر الحركة بعد التركيب.",
    applications: [
      "Roll-fed large-format media",
      "DTF film transport",
      "Laminating and finishing",
      "Office paper feed",
    ],
    applicationsAr: [
      "خامات الرول للطباعة العريضة",
      "حركة فيلم DTF",
      "التغليف والتشطيب",
      "تغذية الورق المكتبي",
    ],
    compatibility: [
      "Pinch and pressure rollers",
      "Feed and take-up assemblies",
      "Model-specific shafts, bearings and sensors",
    ],
    compatibilityAr: [
      "رولات الضغط والسحب",
      "وحدات التغذية واللف",
      "الأعمدة والبلي والحساسات الخاصة بالموديل",
    ],
    serviceIncludes: [
      "Feed-path diagnosis",
      "Part measurement and identification",
      "Tracking and pressure calibration",
    ],
    serviceIncludesAr: ["تشخيص مسار التغذية", "قياس وتحديد القطعة", "معايرة المسار والضغط"],
  },
  {
    slug: "boards-motors",
    name: "Boards, Motors & Sensors",
    nameAr: "البوردات والموتورات والحساسات",
    categoryId: "electrical",
    summary: "Original electrical components diagnosed and fitted by the Target service team.",
    summaryAr: "مكونات كهربائية أصلية يتم تشخيصها وتركيبها بواسطة فريق خدمة Target.",
    description:
      "Electrical faults require measured diagnosis before replacing a board or motor. Technicians inspect power, wiring, drivers, sensors and connected loads to identify the failed component and avoid repeat damage.",
    descriptionAr:
      "تحتاج الأعطال الكهربائية إلى تشخيص بالقياس قبل استبدال البورد أو الموتور. يفحص الفنيون التغذية والتوصيلات والدرايفرات والحساسات والأحمال المتصلة لتحديد الجزء التالف ومنع تكرار الضرر.",
    applications: [
      "Main and carriage control",
      "Media movement and take-up",
      "Temperature and position sensing",
      "Power and driver systems",
    ],
    applicationsAr: [
      "التحكم الرئيسي وحركة العربة",
      "حركة الخامة ووحدة اللف",
      "استشعار الحرارة والموضع",
      "وحدات القدرة والدرايفر",
    ],
    compatibility: [
      "Machine-specific mainboards and driver boards",
      "Motors, encoders and limit sensors",
      "Matching voltage, firmware and connector layout",
    ],
    compatibilityAr: [
      "البوردات الرئيسية والدرايفر الخاصة بالموديل",
      "الموتورات والإنكودر وحساسات الحدود",
      "تطابق الجهد والبرمجيات وترتيب الموصلات",
    ],
    serviceIncludes: [
      "Electrical fault diagnosis",
      "Component and firmware verification",
      "Installation and functional test",
    ],
    serviceIncludesAr: [
      "تشخيص العطل الكهربائي",
      "التحقق من القطعة والبرمجيات",
      "التركيب واختبار التشغيل",
    ],
  },
  {
    slug: "maintenance-kits",
    name: "Preventive Maintenance Kits",
    nameAr: "أطقم الصيانة الوقائية",
    categoryId: "automation",
    summary: "Scheduled-service kits that reduce downtime and extend machine life.",
    summaryAr: "أطقم خدمة دورية تقلل التوقف وتساعد على إطالة العمر التشغيلي للماكينة.",
    description:
      "Preventive kits group the wear items needed at a planned service interval. The exact kit is selected by model, operating hours, ink system and observed condition—not by a generic parts list.",
    descriptionAr:
      "تجمع أطقم الصيانة الوقائية الأجزاء الاستهلاكية اللازمة في موعد الخدمة المخطط. نحدد الطقم طبقًا للموديل وساعات التشغيل ونظام الحبر والحالة الفعلية، وليس من قائمة عامة.",
    applications: [
      "Routine cleaning and lubrication",
      "Ink-path maintenance",
      "Media-feed inspection",
      "Scheduled office-printer service",
    ],
    applicationsAr: [
      "التنظيف والتشحيم الدوري",
      "صيانة مسار الحبر",
      "فحص حركة الخامة",
      "الصيانة المجدولة للطابعات المكتبية",
    ],
    compatibility: [
      "Model and serial-number verification",
      "Usage-based service intervals",
      "Supported office and production printers",
    ],
    compatibilityAr: [
      "التحقق من الموديل والرقم التسلسلي",
      "مواعيد خدمة حسب معدل الاستخدام",
      "طابعات المكاتب والإنتاج المدعومة",
    ],
    serviceIncludes: [
      "Machine-condition checklist",
      "Replacement of scheduled wear items",
      "Cleaning, calibration and service report",
    ],
    serviceIncludesAr: [
      "قائمة فحص لحالة الماكينة",
      "استبدال الأجزاء المستهلكة المجدولة",
      "تنظيف ومعايرة وتقرير خدمة",
    ],
  },
];

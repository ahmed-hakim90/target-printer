import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Language = "en" | "ar";

const ar: Record<string, string> = {
  Home: "الرئيسية",
  Products: "المنتجات",
  Solutions: "الحلول",
  "Spare Parts": "قطع الغيار",
  "About Us": "من نحن",
  Contact: "تواصل معنا",
  "Request a Quote": "اطلب عرض سعر",
  "Request Quote": "اطلب السعر",
  "Request details": "اطلب التفاصيل",
  "View Details": "عرض التفاصيل",
  WhatsApp: "واتساب",
  "WhatsApp Inquiry": "تواصل عبر واتساب",
  "Email Us": "راسلنا",
  Company: "الشركة",
  Follow: "تابعنا",
  "Switch language": "تغيير اللغة",
  "Made in Egypt": "صُنع في مصر",
  "Print bigger.": "اطبع بشكل أكبر.",
  "Build smarter.": "وابنِ أعمالك بذكاء.",
  "Explore products": "استكشف المنتجات",
  "Reliable quality": "جودة موثوقة",
  "Technical support": "دعم فني",
  "Local expertise": "خبرة محلية",
  "Since 2005": "منذ 2005",
  "Original quality": "جودة أصلية",
  "Responsive support": "دعم سريع",
  "Installation & training": "تركيب وتدريب",
  "Annual maintenance": "صيانة سنوية",
  "Explore Target": "اكتشف Target",
  "The right printing solution for every business.": "حل الطباعة المناسب لكل نشاط.",
  "Featured products": "منتجات مختارة",
  "Built to perform, supported to last.": "أداء قوي ودعم يدوم.",
  "Happy customers": "عميل سعيد",
  "Products delivered": "منتج تم توريده",
  "Service points": "نقطة خدمة",
  "Years of experience": "سنوات الخبرة",
  "What we offer": "ما نقدمه",
  "Everything your print operation needs.": "كل ما تحتاجه منظومة الطباعة لديك.",
  "Equipment supply": "توريد معدات الطباعة",
  "Direct importing": "استيراد مباشر",
  "Technical service": "الدعم الفني والصيانة",
  "Genuine spare parts": "قطع غيار أصلية",
  "Annual contracts": "عقود صيانة سنوية",
  "Technical consultation": "استشارات فنية",
  "Learn more": "اعرف المزيد",
  "Engineered here.": "هندسة وتصنيع محلي.",
  "Ready for the world.": "بجودة تنافس عالميًا.",
  "Discover our story": "اكتشف قصتنا",
  "Why Modern Egypt": "لماذا مصر الحديثة؟",
  "A printing partner built around your uptime.": "شريك طباعة يحافظ على استمرارية عملك.",
  "Advanced technology": "تكنولوجيا متقدمة",
  "Cost effective": "تكلفة تشغيل أفضل",
  "Quality assurance": "ضمان الجودة",
  "Local support": "دعم محلي",
  "Genuine supply": "توريد أصلي",
  "Business solutions": "حلول الأعمال",
  "One partner from machine selection to production.": "شريك واحد من اختيار الماكينة حتى الإنتاج.",
  "Office solutions": "حلول المكاتب",
  "Textile printing": "طباعة المنسوجات",
  "Advertising & signage": "الدعاية واللافتات",
  "Industrial printing": "الطباعة الصناعية",
  "Our foundation": "أساس عملنا",
  "A clear purpose behind every solution.": "هدف واضح وراء كل حل.",
  "Our vision": "رؤيتنا",
  "Our values": "قيمنا",
  "Our mission": "رسالتنا",
  "Leading the future through innovation and precision.": "نقود المستقبل بالابتكار والدقة.",
  "Quality, honesty and lasting responsibility.": "الجودة والنزاهة والمسؤولية المستمرة.",
  "Keeping every customer productive.": "نحافظ على إنتاجية كل عميل.",
  "Customer reviews": "آراء العملاء",
  "Their trust is the measure of our work.": "ثقة عملائنا هي مقياس نجاحنا.",
  "Real feedback from teams that rely on Modern Egypt for equipment and technical support.":
    "آراء فرق تعتمد على مصر الحديثة في المعدات والدعم الفني.",
  carousel: "عارض متحرك",
  "5 out of 5 stars": "5 من 5 نجوم",
  "Previous review": "الرأي السابق",
  "Next review": "الرأي التالي",
  "Purchasing Manager — Al Raya Contracting": "مدير المشتريات — شركة الراية للمقاولات",
  "Administration Manager — Origin Group": "مديرة الإدارة — مجموعة أوريجين",
  "IT Manager — Elite Educational Academy": "مديرة تكنولوجيا المعلومات — أكاديمية النخبة التعليمية",
  "We purchased printers and copiers for the company. The equipment was original, delivery was on time and the technical support made a real difference.":
    "اشترينا طابعات وماكينات تصوير للشركة. الأجهزة أصلية، والتسليم كان في الموعد، والدعم الفني صنع فرقًا حقيقيًا.",
  "Installation was quick and the service team was very cooperative. The improvement in our daily document workflow was immediately noticeable.":
    "تم التركيب بسرعة وكان فريق الخدمة متعاونًا جدًا. لاحظنا فورًا تحسن سير عمل المستندات اليومي.",
  "Their preventive follow-up stopped many issues before they interrupted work. Strong equipment and a professional, honest support team.":
    "المتابعة الوقائية منعت مشكلات كثيرة قبل أن توقف العمل. أجهزة قوية وفريق دعم محترف وأمين.",
  "Innovation updates": "آخر المستجدات",
  "Product launches, printing insights and practical ideas.":
    "إطلاقات المنتجات ونصائح الطباعة والأفكار العملية.",
  "Business email": "البريد الإلكتروني للعمل",
  "Get updates": "اشترك الآن",
  "Enter a valid email address.": "أدخل بريدًا إلكترونيًا صحيحًا.",
  "Become a Target partner": "كن شريكًا لـ Target",
  "Grow with our distribution network.": "نمُ معنا داخل شبكة الموزعين.",
  "Apply now": "قدّم الآن",
  "Machinery Catalog": "كتالوج المنتجات",
  "Production machines for every stage of the line.": "ماكينات طباعة لكل مرحلة من مراحل الإنتاج.",
  All: "الكل",
  "Office Printers": "طابعات مكتبية",
  "UV DTF Printers": "طابعات UV DTF",
  "DTF & Textile Printers": "طابعات DTF والمنسوجات",
  "DTF Printers": "طابعات DTF",
  "DTG & Textile Printers": "طابعات DTG والمنسوجات",
  "Finishing Equipment": "معدات التشطيب",
  "Production Printers": "ماكينات الإنتاج",
  "Large Format & Eco Solvent": "طباعة عريضة وإيكو سولفنت",
  "Back to machines": "العودة للمنتجات",
  Specifications: "المواصفات",
  "Product Overview": "نظرة عامة",
  "Supported from setup to production.": "دعم من التركيب حتى الإنتاج.",
  "Request product brochure": "اطلب بروشور المنتج",
  "Related Machines": "منتجات مرتبطة",
  "Other equipment in this category.": "منتجات أخرى في نفس الفئة.",
  "Talk to our engineering team.": "تحدث مع فريقنا الفني.",
  "Send us a message": "أرسل لنا رسالة",
  "Name *": "الاسم *",
  "Company Name *": "اسم الشركة *",
  "Email *": "البريد الإلكتروني *",
  "Phone *": "الهاتف *",
  "Interested Product": "المنتج المطلوب",
  "Message *": "الرسالة *",
  "Submit Inquiry": "إرسال الطلب",
  "Direct contact": "تواصل مباشر",
  "Our Location": "موقعنا",
  "About Target Printers": "عن Target Printers",
  "A leader in turnkey solutions": "شركة رائدة في الحلول المتكاملة",
  "across industrial fields.": "لمختلف قطاعات الطباعة.",
  "Company Profile": "نبذة عن الشركة",
  "Built on innovation, service, and global reach.":
    "خبرة مبنية على الابتكار والخدمة والوصول إلى أفضل التقنيات.",
  "Our Journey": "رحلتنا",
  "From machinery supply to global turnkey partner.": "من توريد المعدات إلى شريك حلول متكاملة.",
  "Why partner with us": "لماذا تتعامل معنا؟",
  "Strengths that translate to results on your production line.":
    "خبرات تتحول إلى نتائج حقيقية في خط إنتاجك.",
  "Turnkey Solutions": "حلول متكاملة",
  "Quality & Innovation": "الجودة والابتكار",
  "Global Markets": "تقنيات عالمية",
  "Trusted Service": "خدمة موثوقة",
  "Let's make business easier and safer.": "نجعل تشغيل أعمالك أسهل وأكثر أمانًا.",
  "Our Services": "خدماتنا",
  "Comprehensive services for": "خدمات متكاملة من أجل",
  "seamless operations.": "تشغيل مستمر بلا تعطّل.",
  "Comprehensive Services": "خدمات شاملة",
  "Turnkey Project Solutions": "حلول المشاريع المتكاملة",
  "From Concept to Completion": "من الفكرة حتى التشغيل",
  "Our Turnkey Services": "خدماتنا المتكاملة",
  "Feasibility Studies and Planning": "دراسة الاحتياج والتخطيط",
  "Design and Engineering": "التصميم والهندسة",
  "Procurement and Sourcing": "التوريد والاستيراد",
  "Construction and Installation": "التركيب والتجهيز",
  "Commissioning and Testing": "التشغيل والاختبار",
  "Training and Support": "التدريب والدعم",
  "Industries We Serve": "القطاعات التي نخدمها",
  Industrial: "الصناعة",
  Infrastructure: "المؤسسات والبنية التحتية",
  Pharma: "القطاع الدوائي",
  "Our Project Management Approach": "منهجنا في إدارة المشروعات",
  "Proven Track Record of Success": "سجل نجاح موثوق",
  "Ready to discuss your next project?": "جاهز لمناقشة مشروعك القادم؟",
  "No machines in this category yet. Contact us for a custom inquiry.":
    "لا توجد منتجات في هذا التصنيف حاليًا. تواصل معنا لطلب مخصص.",
  Catalog: "الكتالوج",
  "Auxiliary Parts": "قطع الغيار والمستلزمات",
  "Spare parts that keep your machines running.": "قطع غيار تحافظ على استمرار تشغيل معداتك.",
  "Auxiliary components and spare parts.": "مكونات وقطع غيار أصلية.",
  "We provide genuine printer and photocopier parts—from inks and drums to rollers and mechanical components—with professional fitting and support.":
    "نوفر قطع غيار أصلية للطابعات وماكينات التصوير، من الأحبار والدرامات إلى الرولات والمكونات الميكانيكية، مع تركيب ودعم احترافي.",
  "Office printers": "طابعات المكاتب",
  "Fast, reliable document printing": "طباعة مستندات سريعة وموثوقة",
  "DTF printers": "طابعات DTF",
  "Direct-to-film production systems": "أنظمة إنتاج الطباعة المباشرة على الفيلم",
  "UV DTF printers": "طابعات UV DTF",
  "Premium transfers for hard surfaces": "نقل احترافي للأسطح الصلبة",
  "Large format": "الطباعة العريضة",
  "Indoor and outdoor print production": "إنتاج للطباعة الداخلية والخارجية",
  Finishing: "التشطيب",
  "Cutters and laminators": "معدات القص والتغليف الحراري",
  Consumables: "المستلزمات",
  "Original inks and spare parts": "أحبار وقطع غيار أصلية",
  "Printing Solutions": "حلول الطباعة",
  "Everything your business needs to": "كل ما يحتاجه نشاطك لكي",
  "print without interruption.": "يطبع دون توقف.",
  "One local team for equipment selection, direct supply, professional installation, operator training, maintenance and genuine parts.":
    "فريق محلي واحد لاختيار المعدات والتوريد المباشر والتركيب الاحترافي وتدريب المشغلين والصيانة وقطع الغيار الأصلية.",
  "Unique product models": "موديلًا فريدًا",
  "Integrated services": "خدمات متكاملة",
  "End-to-end support": "دعم متكامل",
  "From the first consultation to every production day.": "من الاستشارة الأولى إلى كل يوم إنتاج.",
  "We begin with your application, expected volume, media and working size—not a generic machine list. Then our team recommends the right configuration and stays responsible for installation, training and after-sales support.":
    "نبدأ بتطبيقك وحجم الإنتاج والخامة ومقاس العمل، وليس بقائمة ماكينات عامة. بعدها نرشح التجهيز المناسب ونظل مسؤولين عن التركيب والتدريب وخدمة ما بعد البيع.",
  "Needs assessment & consultation": "دراسة الاحتياج والاستشارة",
  "Equipment supply & direct import": "توريد المعدات والاستيراد المباشر",
  "Installation & commissioning": "التركيب والتشغيل",
  "Operator training": "تدريب المشغلين",
  "Maintenance & repairs": "الصيانة والإصلاح",
  "Genuine parts & consumables": "قطع الغيار والمستلزمات الأصلية",
  "Printing applications": "تطبيقات الطباعة",
  "Solutions designed around what you produce.": "حلول مصممة حول ما تنتجه.",
  "Labels & packaging": "الملصقات والتغليف",
  "Garment logos & direct printing": "شعارات الملابس والطباعة المباشرة",
  "Textile solutions": "حلول المنسوجات",
  "Consumables & accessories": "المستلزمات والإكسسوارات",
  "Signage & banners": "اللافتات والبنرات",
  "Cups, bottles & cylinders": "الأكواب والزجاجات والأسطوانات",
  "How we work": "كيف نعمل",
  "A clear path to reliable production.": "مسار واضح نحو إنتاج موثوق.",
  Understand: "نفهم",
  Recommend: "نرشح",
  Install: "نركب ونشغّل",
  Support: "ندعم",
  "Installation, training and local support": "تركيب وتدريب ودعم محلي",
  "About Modern Egypt": "عن مصر الحديثة",
  "Twenty years of printing expertise.": "عشرون عامًا من خبرة الطباعة.",
  "One dependable local partner.": "وشريك محلي تعتمد عليه.",
  "Our story": "قصتنا",
  "Built to keep Egyptian businesses productive.": "نحافظ على إنتاجية الأعمال المصرية.",
  "Modern Egypt established": "تأسيس مصر الحديثة",
  Today: "اليوم",
  "Modern technology": "تكنولوجيا حديثة",
  "Quality & trust": "الجودة والثقة",
  "Continuous support": "دعم مستمر",
  "Competitive value": "قيمة تنافسية",
  "Experience that continues after the sale.": "خبرة تستمر بعد البيع.",
  "The standards behind every recommendation.": "معايير واضحة وراء كل ترشيح.",
  "Previous product": "المنتج السابق",
  "Next product": "المنتج التالي",
  "A practical recommendation based on your application, volume, working size, budget and running cost.":
    "ترشيح عملي مبني على تطبيقك وحجم الإنتاج ومقاس العمل والميزانية وتكلفة التشغيل.",
  "Office, DTF, UV DTF and large-format systems sourced with the correct configuration and warranty.":
    "أنظمة مكتبية وDTF وUV DTF وطباعة عريضة بالتجهيز الصحيح والضمان المناسب.",
  "Professional setup, calibration and output testing before the machine enters production.":
    "تركيب ومعايرة واختبار احترافي للمخرجات قبل دخول الماكينة مرحلة الإنتاج.",
  "Hands-on guidance for daily operation, media handling, routine care and consistent output quality.":
    "تدريب عملي على التشغيل اليومي والتعامل مع الخامات والعناية الدورية وثبات جودة الطباعة.",
  "Scheduled and emergency service with accurate diagnostics to reduce downtime and protect equipment life.":
    "صيانة دورية وطارئة وتشخيص دقيق لتقليل التوقف والحفاظ على العمر التشغيلي للمعدات.",
  "Original inks, drums, rollers, heads, electrical components and maintenance kits for supported models.":
    "أحبار ودرامات ورولات ورؤوس طباعة ومكونات كهربائية وأطقم صيانة أصلية للموديلات المدعومة.",
  "High-quality customized labels and print solutions for accurate brand presentation.":
    "ملصقات مخصصة وحلول طباعة عالية الجودة لعرض العلامة التجارية بدقة.",
  "TPU logo and direct-to-garment production for professional results across multiple fabrics.":
    "حلول شعارات TPU وطباعة مباشرة على الملابس بنتائج احترافية لمختلف الأقمشة.",
  "Stable color, sharp detail and practical workflows for textile printing businesses.":
    "ألوان ثابتة وتفاصيل واضحة وسير عمل عملي لمشروعات طباعة المنسوجات.",
  "Approved inks, media and accessories selected for reliable day-to-day production.":
    "أحبار وخامات وإكسسوارات معتمدة لضمان إنتاج يومي موثوق.",
  "Indoor and outdoor wide-format solutions for banners, graphics and advertising applications.":
    "حلول طباعة عريضة داخلية وخارجية للبنرات والجرافيك والتطبيقات الإعلانية.",
  "UV DTF technology for detailed transfers and full-coverage cylindrical applications.":
    "تقنية UV DTF لنقل التفاصيل وتغطية تطبيقات الأكواب والزجاجات والأسطح الأسطوانية.",
  "We review what you print, your production volume and required quality.":
    "نراجع ما تطبعه وحجم إنتاجك ومستوى الجودة المطلوب.",
  "You receive a clear equipment configuration, quotation and support plan.":
    "تحصل على تجهيز واضح للمعدات وعرض سعر وخطة دعم.",
  "Our technicians install, calibrate, test and train your operators.":
    "يركب الفنيون المعدات ويعايرونها ويختبرونها ويدربون المشغلين.",
  "We remain available for preventive service, genuine parts and assistance.":
    "نظل متاحين للصيانة الوقائية وقطع الغيار الأصلية والدعم الفني.",
  "Support that continues after installation.": "دعم يستمر بعد التركيب.",
  "Choose on-demand support or an annual maintenance agreement with preventive visits, service reporting and prioritized response.":
    "اختر الدعم عند الطلب أو عقد صيانة سنويًا يتضمن زيارات وقائية وتقارير خدمة وأولوية استجابة.",
  "Tell us what you need to print.": "أخبرنا بما تحتاج إلى طباعته.",
  "Share your application, expected volume and working size. Our team will recommend the right equipment and service plan.":
    "شاركنا التطبيق وحجم الإنتاج ومقاس العمل، وسيقترح فريقنا المعدات وخطة الخدمة المناسبة.",
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: string) => string;
  localize: <T>(value: T) => T;
};
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    const saved = localStorage.getItem("target-language");
    if (saved === "ar") setLanguage("ar");
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("target-language", language);
  }, [language]);
  const value = useMemo<LanguageContextValue>(() => {
    const t = (text: string) => (language === "ar" ? (ar[text] ?? text) : text);
    const localize = <T,>(input: T): T => {
      if (typeof input === "string") return t(input) as T;
      if (Array.isArray(input)) return input.map(localize) as T;
      if (input && typeof input === "object")
        return Object.fromEntries(
          Object.entries(input).map(([key, item]) => [
            key,
            typeof item === "function" ? item : localize(item),
          ]),
        ) as T;
      return input;
    };
    return { language, setLanguage, t, localize };
  }, [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}

import { Link } from "@tanstack/react-router";
import { Facebook, Globe2, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { mailLink, site } from "@/constants";
import { useLanguage } from "@/lib/language";

type FooterItem = {
  label: string;
  labelAr: string;
  to?: "/about" | "/parts";
  category?: string;
};

const productLinks: FooterItem[] = [
  { label: "Office Printers", labelAr: "طابعات مكتبية", category: "Office Printers" },
  { label: "DTF Printers", labelAr: "طابعات DTF", category: "DTF Printers" },
  {
    label: "DTG Printers",
    labelAr: "طابعات DTG",
    category: "DTG & Textile Printers",
  },
  { label: "UV DTF Printers", labelAr: "طابعات UV DTF", category: "UV DTF Printers" },
  {
    label: "Large Format Printers",
    labelAr: "طابعات المقاسات الكبيرة",
    category: "Large Format & Eco Solvent",
  },
  {
    label: "Eco Solvent Printers",
    labelAr: "طابعات إيكو سولفنت",
    category: "Large Format & Eco Solvent",
  },
  { label: "Consumables", labelAr: "المستلزمات", to: "/parts" },
];

const supportLinks: FooterItem[] = [
  { label: "Drivers & Downloads", labelAr: "التعريفات والتنزيلات" },
  { label: "Manuals", labelAr: "أدلة الاستخدام" },
  { label: "Warranty", labelAr: "الضمان" },
  { label: "Spare Parts", labelAr: "قطع الغيار", to: "/parts" },
  { label: "Service Centers", labelAr: "مراكز الخدمة" },
  { label: "FAQ", labelAr: "الأسئلة الشائعة" },
];

const companyLinks: FooterItem[] = [
  { label: "About Modern Egypt", labelAr: "عن مصر الحديثة", to: "/about" },
  { label: "Our Factory", labelAr: "مصنعنا" },
  { label: "Quality", labelAr: "الجودة" },
  { label: "Careers", labelAr: "الوظائف" },
  { label: "News & Events", labelAr: "الأخبار والفعاليات" },
];

function FooterLinks({ items, language }: { items: FooterItem[]; language: "en" | "ar" }) {
  return (
    <ul className="mt-5 space-y-3 text-sm">
      {items.map((item) => (
        <li key={item.label}>
          {item.category ? (
            <Link
              to="/machines"
              search={{ category: item.category }}
              hash="catalog"
              className="text-surface-foreground/75 transition-colors hover:text-accent focus-visible:text-accent"
            >
              {language === "ar" ? item.labelAr : item.label}
            </Link>
          ) : item.to ? (
            <Link
              to={item.to}
              className="text-surface-foreground/75 transition-colors hover:text-accent focus-visible:text-accent"
            >
              {language === "ar" ? item.labelAr : item.label}
            </Link>
          ) : (
            <span className="cursor-default text-surface-foreground/55">
              {language === "ar" ? item.labelAr : item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="container-x py-14 md:py-18">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 min-w-16 place-items-center rounded-md bg-white px-2 font-display text-xs font-extrabold text-primary">
                TARGET
              </span>
              <span className="font-display text-lg font-semibold">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface-foreground/70">
              {language === "ar"
                ? "تكنولوجيا طباعة مصرية، معدات احترافية وقطع غيار أصلية بدعم فريق محلي منذ عام 2005."
                : "Egyptian printing technology, professional equipment and genuine spare parts—supported by a local team since 2005."}
            </p>
            <nav
              className="mt-5"
              aria-label={language === "ar" ? "روابط التواصل الاجتماعي" : "Social media links"}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-surface-foreground/50">
                {t("Follow")}
              </p>
              <ul className="mt-3 flex gap-2.5">
                {[
                  { label: "Instagram", href: site.instagram, Icon: Instagram },
                  { label: "Facebook", href: site.facebook, Icon: Facebook },
                  { label: "YouTube", href: site.youtube, Icon: Youtube },
                ].map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-surface-foreground/80 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav aria-label={language === "ar" ? "روابط المنتجات" : "Product links"}>
            <h2 className="font-display text-lg font-bold">
              {language === "ar" ? "المنتجات" : "Products"}
            </h2>
            <FooterLinks items={productLinks} language={language} />
          </nav>

          <nav aria-label={language === "ar" ? "روابط المساعدة" : "Support links"}>
            <h2 className="font-display text-lg font-bold">
              {language === "ar" ? "المساعدة" : "Support"}
            </h2>
            <FooterLinks items={supportLinks} language={language} />
          </nav>

          <nav aria-label={language === "ar" ? "روابط الشركة" : "Company links"}>
            <h2 className="font-display text-lg font-bold">{t("Company")}</h2>
            <FooterLinks items={companyLinks} language={language} />
          </nav>

          <div>
            <h2 className="font-display text-lg font-bold">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-surface-foreground/75">
              <li>
                <a
                  href="tel:01500088875"
                  dir="ltr"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  0150 008 8875
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                  dir="ltr"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailLink()}
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Globe2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  www.target-printer.com
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-surface-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("All rights reserved.")}
          </p>
          <p>{t("Made in Egypt. Built for ambitious businesses.")}</p>
        </div>
      </div>
    </footer>
  );
}

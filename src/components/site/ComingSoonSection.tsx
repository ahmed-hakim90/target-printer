import { Coffee, Printer, ScanLine, Sparkles } from "lucide-react";
import { comingSoonProducts } from "@/constants/catalog";
import { useLanguage } from "@/lib/language";

const icons = { nail: ScanLine, coffee: Coffee, portable: Printer } as const;

export function ComingSoonSection() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section
      id="coming-soon"
      className="relative scroll-mt-20 overflow-hidden bg-primary py-16 text-white md:py-24"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#2d7ff9_0,transparent_35%),radial-gradient(circle_at_80%_70%,#2d7ff9_0,transparent_32%)]" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.2em] text-blue-300">
              <Sparkles className="h-4 w-4" /> {isArabic ? "قريبًا" : "Coming soon"}
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-extrabold md:text-5xl">
              {isArabic
                ? "تقنيات طباعة جديدة في الطريق."
                : "New printing possibilities are on the way."}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            {isArabic
              ? "منتجات معلنة في كتالوج مصر الحديثة. المواصفات وموعد الإتاحة سيتم تأكيدهما عند الإطلاق."
              : "Products announced in the Modern Egypt catalog. Specifications and availability will be confirmed at launch."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {comingSoonProducts.map((product) => {
            const Icon = icons[product.icon];
            return (
              <article
                key={product.id}
                className="group rounded-2xl border border-white/15 bg-white/[.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:bg-white/[.1] focus-within:border-blue-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-white transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-200">
                    {isArabic ? "قريبًا" : "Coming soon"}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold">
                  {isArabic ? product.nameAr : product.name}
                </h3>
                <p className="mt-3 leading-7 text-white/65">
                  {isArabic ? product.descriptionAr : product.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

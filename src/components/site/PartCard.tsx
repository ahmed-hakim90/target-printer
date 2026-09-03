import { QuoteButton, WhatsAppButton } from "./CTAButtons";
import type { Part } from "@/constants";
import { useLanguage } from "@/lib/language";
import { SmartImage } from "./SmartImage";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function PartCard({ part }: { part: Part }) {
  const { language, t } = useLanguage();
  const name = language === "ar" ? part.nameAr : part.name;
  const summary = language === "ar" ? part.summaryAr : part.summary;
  return (
    <article
      className="interactive-card group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card"
      tabIndex={0}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <SmartImage
          src={part.image}
          alt={name}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute start-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
          {t(part.category)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
            <Link to="/parts/$slug" params={{ slug: part.slug }} className="hover:text-accent">
              {name}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
        </div>
        <Link
          to="/parts/$slug"
          params={{ slug: part.slug }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          {language === "ar" ? "عرض التفاصيل" : "View details"}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>
        <div className="mt-auto grid grid-cols-2 gap-2">
          <QuoteButton size="sm" label={language === "ar" ? "استفسر" : "Inquire"} product={name} />
          <WhatsAppButton
            size="sm"
            label="WhatsApp"
            message={`Hello, I am interested in your ${part.name}.`}
          />
        </div>
      </div>
    </article>
  );
}

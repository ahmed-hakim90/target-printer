import { QuoteButton, WhatsAppButton } from "./CTAButtons";
import type { Part } from "@/constants";
import { useLanguage } from "@/lib/language";
import { SmartImage } from "./SmartImage";

export function PartCard({ part }: { part: Part }) {
  const { language } = useLanguage();
  return (
    <article
      className="interactive-card group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
      tabIndex={0}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <SmartImage
          src={part.image}
          alt={part.name}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
          {part.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
            {part.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{part.summary}</p>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2">
          <QuoteButton
            size="sm"
            label={language === "ar" ? "استفسر" : "Inquire"}
            product={part.name}
          />
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

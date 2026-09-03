import { EmailButton, QuoteButton, WhatsAppButton } from "./CTAButtons";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/language";

export function CTASection({
  title = "Ready to power your production line?",
  description = "Send us your specifications and our engineering team will respond with a tailored quotation within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  const { t, language } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-surface/95 text-surface-foreground">
      <div className="absolute inset-0 hero-grid-bg opacity-60" aria-hidden />
      <div
        className="absolute inset-y-0 end-0 w-1/3 bg-gradient-to-l from-accent/20 to-transparent rtl:bg-gradient-to-r"
        aria-hidden
      />
      <div className="container-x relative grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-center md:py-28">
        <Reveal>
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {language === "ar" ? "لننجح معًا" : "Let's build together"}
          </div>
          <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] md:text-4xl lg:text-5xl">
            {t(title)}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/70 md:text-lg">
            {t(description)}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 md:items-end">
          <QuoteButton size="lg" />
          <WhatsAppButton size="lg" variant="whatsapp" />
          <EmailButton size="lg" variant="surface" />
        </Reveal>
      </div>
    </section>
  );
}

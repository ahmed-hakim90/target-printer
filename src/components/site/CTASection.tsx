import { EmailButton, QuoteButton, WhatsAppButton } from "./CTAButtons";

export function CTASection({
  title = "Ready to power your production line?",
  description = "Send us your specifications and our engineering team will respond with a tailored quotation within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface text-surface-foreground">
      <div className="absolute inset-0 hero-grid-bg opacity-60" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-accent/20 to-transparent"
        aria-hidden
      />
      <div className="container-x relative grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-center md:py-28">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Let's build together
          </div>
          <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/70 md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <QuoteButton size="lg" />
          <WhatsAppButton size="lg" variant="whatsapp" />
          <EmailButton size="lg" variant="surface" />
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { RouteLoading } from "@/components/site/RouteLoading";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/constants/services";
import { previewGate } from "@/lib/preview-gate";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: `Services — ${services.name} Turnkey & Industrial Support`,
      },
      { name: "description", content: services.meta.description },
      {
        property: "og:title",
        content: `Services — ${services.name}`,
      },
      { property: "og:description", content: services.meta.ogDescription },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(ServicesPage),
});

function ServicesPage() {
  const { localize } = useLanguage();
  const content = localize(services);
  const { trackRecord } = content;

  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-10 bg-accent" />
              {content.hero.eyebrow}
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              {content.hero.title} <span className="text-accent">{content.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
              {content.hero.lead}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={content.heroImage}
              alt={content.heroImageAlt}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionHeader title={content.comprehensive.title} />
          <p className="mt-12 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.comprehensive.body}
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader eyebrow={content.turnkey.eyebrow} title={content.turnkey.title} />
          <div className="mt-12 max-w-3xl space-y-6">
            {content.turnkey.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionHeader title={content.turnkeyServices.title} />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {content.turnkeyServices.items.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader title={content.industries.title} />
          <p className="mt-12 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.industries.intro}
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {content.industries.items.map(({ icon: Icon, label, desc }) => (
              <li key={label} className="bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionHeader title={content.projectManagement.title} />
          <p className="mt-12 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.projectManagement.body}
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader title={content.trackRecord.title} />
          <p className="mt-12 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {trackRecord.lead} Browse our{" "}
            <Link
              to={trackRecord.portfolio.to}
              className="font-medium text-foreground underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
            >
              {trackRecord.portfolio.label}
            </Link>{" "}
            to see how we&apos;ve helped our clients achieve their goals, and read our{" "}
            <Link
              to={trackRecord.testimonials.to}
              className="font-medium text-foreground underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
            >
              {trackRecord.testimonials.label}
            </Link>{" "}
            {trackRecord.closing}
          </p>
        </div>
      </section>

      <CTASection title={content.cta.title} description={content.cta.description} />
    </>
  );
}

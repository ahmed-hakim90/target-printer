import { createFileRoute } from "@tanstack/react-router";
import { RouteLoading } from "@/components/site/RouteLoading";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { about } from "@/constants/about";
import { previewGate } from "@/lib/preview-gate";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About ${about.name} — Turnkey Industrial Solutions`,
      },
      { name: "description", content: about.meta.description },
      { property: "og:title", content: `About ${about.name}` },
      { property: "og:description", content: about.meta.ogDescription },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(AboutPage),
});

function AboutPage() {
  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-10 bg-accent" />
              {about.hero.eyebrow}
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              {about.hero.title} <span className="text-accent">{about.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
              {about.hero.lead}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={about.heroImage}
              alt={about.heroImageAlt}
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
          <SectionHeader
            eyebrow={about.companyProfile.eyebrow}
            title={about.companyProfile.title}
          />
          <div className="mt-12 max-w-3xl space-y-6">
            {about.companyProfile.paragraphs.map((paragraph, index) => (
              <p
                key={`${index}-${paragraph.slice(0, 48)}`}
                className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow={about.experience.eyebrow}
            title={about.experience.title}
            description={about.experience.description}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {about.milestones.map((m) => (
              <div key={m.year} className="bg-background p-7">
                <div className="font-display text-3xl font-semibold text-accent">{m.year}</div>
                <div className="mt-3 font-display text-lg font-semibold text-foreground">
                  {m.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow={about.strengthsSection.eyebrow}
            title={about.strengthsSection.title}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {about.strengths.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={about.cta.title} description={about.cta.description} />
    </>
  );
}

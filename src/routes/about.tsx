import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RouteLoading } from "@/components/site/RouteLoading";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { about } from "@/constants/about";
import { previewGate } from "@/lib/preview-gate";
import { useLanguage } from "@/lib/language";
import { site } from "@/constants";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About ${about.name} — Turnkey Industrial Solutions`,
      },
      { name: "description", content: about.meta.description },
      { property: "og:title", content: `About ${about.name}` },
      { property: "og:description", content: about.meta.ogDescription },
      { property: "og:url", content: `${site.url}/about` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/about` }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(AboutPage),
});

function AboutPage() {
  const { localize } = useLanguage();
  const content = localize(about);
  return (
    <>
      <section className="relative overflow-hidden bg-surface/95 text-surface-foreground">
        <div className="hero-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid min-h-[620px] gap-12 py-20 md:py-28 lg:grid-cols-[.4fr_.6fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src={content.heroImage}
              alt={content.heroImageAlt}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-background/88 py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow={content.companyProfile.eyebrow}
            title={content.companyProfile.title}
          />
          <Reveal className="mt-12 max-w-3xl space-y-6">
            {content.companyProfile.paragraphs.map((paragraph, index) => (
              <p
                key={`${index}-${paragraph.slice(0, 48)}`}
                className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/84 py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow={content.experience.eyebrow}
            title={content.experience.title}
            description={content.experience.description}
          />
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {content.milestones.map((m) => (
              <StaggerItem key={m.year} className="h-full">
                <div className="interactive-card h-full bg-background p-7" tabIndex={0}>
                  <div className="font-display text-3xl font-semibold text-accent">{m.year}</div>
                  <div className="mt-3 font-display text-lg font-semibold text-foreground">
                    {m.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background/88 py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow={content.strengthsSection.eyebrow}
            title={content.strengthsSection.title}
          />
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {content.strengths.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title} className="h-full">
                <div className="interactive-card group h-full bg-background p-7" tabIndex={0}>
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white group-focus:bg-accent group-focus:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection title={content.cta.title} description={content.cta.description} />
    </>
  );
}

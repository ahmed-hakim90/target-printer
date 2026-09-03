import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { RouteLoading } from "@/components/site/RouteLoading";
import { QuoteButton, WhatsAppButton } from "@/components/site/CTAButtons";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/constants/services";
import { previewGate } from "@/lib/preview-gate";
import { useLanguage } from "@/lib/language";
import { site } from "@/constants";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Printing Solutions — ${services.name}` },
      { name: "description", content: services.meta.description },
      { property: "og:url", content: `${site.url}/services` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(ServicesPage),
});

function ServicesPage() {
  const { localize, t } = useLanguage();
  const c = localize(services);
  return (
    <>
      <section className="relative overflow-hidden bg-surface text-surface-foreground">
        <div className="container-x grid min-h-[640px] items-center gap-12 py-20 lg:grid-cols-[.4fr_.6fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {c.hero.title} <span className="text-accent">{c.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{c.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton size="lg" />
              <WhatsAppButton size="lg" />
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {c.pillars.map((x) => (
                <div key={x.label}>
                  <strong className="block text-2xl">{x.value}</strong>
                  <span className="text-xs text-white/55">{x.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl">
              <img
                src={c.heroImage}
                alt={c.heroImageAlt}
                width={1600}
                height={1000}
                className="min-h-80 w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-5 start-5 rounded-xl bg-primary px-5 py-4 shadow-xl">
              <span className="flex items-center gap-2 text-sm font-bold">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                {t("Installation, training and local support")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">{c.intro.eyebrow}</p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold text-primary md:text-5xl">
              {c.intro.title}
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">{c.intro.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.services.map(({ icon: Icon, title, desc }, i) => (
              <article
                key={title}
                className="interactive-card group rounded-xl border bg-white p-6"
                tabIndex={0}
              >
                <div className="flex justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white group-focus:bg-accent group-focus:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">{t("Printing applications")}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold text-primary md:text-5xl">
            {t("Solutions designed around what you produce.")}
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.applications.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                tabIndex={0}
                className="interactive-card rounded-xl border bg-white p-7"
              >
                <Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-7 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">{t("How we work")}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold text-primary md:text-5xl">
            {t("A clear path to reliable production.")}
          </h2>
          <ol className="mt-12 grid gap-4 lg:grid-cols-4">
            {c.process.map(([n, title, desc]) => (
              <li key={n} tabIndex={0} className="interactive-card rounded-xl border bg-white p-6">
                <span className="text-3xl font-extrabold text-accent/40">{n}</span>
                <h3 className="mt-8 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid items-center gap-8 rounded-2xl bg-primary p-8 text-white md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-extrabold">{c.promise.title}</h3>
              <p className="mt-3 max-w-3xl text-white/70">{c.promise.body}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-6 font-bold text-primary transition hover:-translate-y-1 focus-visible:ring-4"
            >
              {t("Request a Quote")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection title={c.cta.title} description={c.cta.description} />
    </>
  );
}

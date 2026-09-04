import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { RouteLoading } from "@/components/site/RouteLoading";
import { useState } from "react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MachineCard } from "@/components/site/MachineCard";
import { CTASection } from "@/components/site/CTASection";
import { categories, machines, site } from "@/constants";
import { cn } from "@/lib/utils";
import { previewGate } from "@/lib/preview-gate";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/machines")({
  head: () => ({
    meta: [
      { title: `Printing Equipment Catalog — ${site.name}` },
      {
        name: "description",
        content:
          "Browse 19 unique Target printer models for offices, DTF, DTG, UV DTF, large-format production and finishing.",
      },
      { property: "og:title", content: `Printing Equipment — ${site.name}` },
      {
        property: "og:description",
        content:
          "Explore office, textile, UV DTF and large-format printing equipment with local technical support.",
      },
      { property: "og:url", content: `${site.url}/machines` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/machines` }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(MachinesPage),
});

function MachinesPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? machines : machines.filter((m) => m.category === active);

  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x py-16 md:py-24">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-10 bg-accent" />
            {t("Machinery Catalog")}
          </div>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
            {t("Production machines for every stage of the line.")}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
            {t(
              "Every system is selected for dependable output and backed by installation, training, genuine parts and local technical support.",
            )}
          </p>
        </div>
      </section>

      <section className="bg-background/88 py-16 md:py-20">
        <div className="container-x">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === c
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {t(c)}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((m) => (
                <motion.div
                  key={m.slug}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  layout
                >
                  <MachineCard machine={m} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              {t("No machines in this category yet. Contact us for a custom inquiry.")}
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

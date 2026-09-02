import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { RouteLoading } from "@/components/site/RouteLoading";
import { useState } from "react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PartCard } from "@/components/site/PartCard";
import { CTASection } from "@/components/site/CTASection";
import { partCategoryLabels, parts_list, site } from "@/constants";
import { cn } from "@/lib/utils";
import { previewGate } from "@/lib/preview-gate";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: `Auxiliary Parts & Spare Components — ${site.name}` },
      {
        name: "description",
        content:
          "Genuine spare parts and consumables for printers and photocopiers, backed by professional installation and technical support.",
      },
      {
        property: "og:title",
        content: `Auxiliary Parts — ${site.name}`,
      },
      {
        property: "og:description",
        content: "Genuine printer and photocopier parts with professional technical support.",
      },
      { property: "og:url", content: "/parts" },
    ],
    links: [{ rel: "canonical", href: "/parts" }],
  }),
  pendingComponent: RouteLoading,
  component: previewGate(PartsPage),
});

function PartsPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof partCategoryLabels)[number]>("All");

  const filtered = active === "All" ? parts_list : parts_list.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x py-16 md:py-24">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-10 bg-accent" />
            {t("Auxiliary Parts")}
          </div>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
            {t("Spare parts that keep your machines running.")}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
            {t(
              "We provide genuine printer and photocopier parts—from inks and drums to rollers and mechanical components—with professional fitting and support.",
            )}
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Catalog" title="Auxiliary components and spare parts." />

          <div className="mt-10 flex flex-wrap gap-2">
            {partCategoryLabels.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
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
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
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
                  <PartCard part={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              No parts in this category yet. Contact us for a custom inquiry.
            </p>
          )}
        </div>
      </section>

      <CTASection
        title="Need a part that isn't listed?"
        description="Send us your printer or photocopier model and part reference. Our technical team will help identify and source the correct genuine component."
      />
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { QuoteButton } from "@/components/site/CTAButtons";
import { StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { images } from "@/constants/images";
import { useLanguage } from "@/lib/language";

const stats = [
  ["20+", "Years of experience"],
  ["48+", "Happy customers"],
  ["27+", "Products delivered"],
] as const;

const trustPoints = ["Reliable quality", "Technical support", "Genuine spare parts"] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef5ff] via-[#eef5ff] to-[#dce8ff]">
      <div className="hero-grid-bg-light pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="ambient-blob pointer-events-none absolute -end-24 -top-32 h-[380px] w-[380px] rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="ambient-blob ambient-blob-delay pointer-events-none absolute -start-20 -bottom-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid min-h-[720px] min-w-0 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[.46fr_.54fr] lg:py-20">
        <StaggerGroup className="relative z-10 min-w-0">
          <StaggerItem className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> {t("Made in Egypt")}
          </StaggerItem>

          <StaggerItem>
            <h1 className="max-w-2xl text-balance text-4xl font-extrabold leading-[1.15] text-primary rtl:leading-[1.45] sm:text-6xl sm:leading-[1.05] sm:rtl:leading-[1.35] lg:text-7xl lg:leading-[.98] lg:rtl:leading-[1.25]">
              {t("Print bigger.")}
              <br />
              <span className="text-accent">{t("Build smarter.")}</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p
              lang="ar"
              dir="rtl"
              className="mt-5 w-fit max-w-full text-xl font-bold text-primary sm:text-2xl"
            >
              صناعة مصرية بطموح عالمي
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {t(
                "High-performance printing systems engineered for businesses that expect consistent quality, dependable uptime, and expert local support.",
              )}
            </p>
          </StaggerItem>

          <StaggerItem className="mt-7 grid max-w-md grid-cols-3 items-start gap-0">
            {stats.map(([value, label], i) => (
              <div key={label} className="flex min-w-0 items-center">
                <div className="min-w-0 flex-1 pe-2 sm:pe-4">
                  <strong className="block text-2xl font-extrabold text-primary">{value}</strong>
                  <span className="block text-[11px] font-semibold leading-5 text-muted-foreground sm:text-xs">
                    {t(label)}
                  </span>
                </div>
                {i < stats.length - 1 && <span className="h-10 w-px shrink-0 bg-primary/15" />}
              </div>
            ))}
          </StaggerItem>

          <StaggerItem className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <QuoteButton size="lg" className="w-full sm:w-auto" />
            <Link
              to="/machines"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-primary/25 bg-white px-6 font-semibold text-primary transition hover:border-primary sm:w-auto"
            >
              {t("Explore products")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </StaggerItem>

          <StaggerItem className="mt-9 grid gap-3 text-sm font-semibold text-primary/70 sm:flex sm:flex-wrap sm:gap-x-6">
            {trustPoints.map((x) => (
              <span key={x} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-accent" />
                {t(x)}
              </span>
            ))}
          </StaggerItem>
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative rounded-[2rem] bg-white/75 p-8 shadow-2xl shadow-blue-950/15 backdrop-blur-sm sm:p-12">
            <img
              src={images.uv}
              alt="Target large-format UV DTF printing system"
              width={891}
              height={630}
              fetchPriority="high"
              decoding="async"
              className={`mx-auto h-auto w-full max-w-md object-contain drop-shadow-2xl ${reduce ? "" : "float-slow"}`}
            />
          </div>
          <div className="absolute -bottom-2 start-4 rounded-xl bg-white/95 p-4 shadow-lg sm:start-6">
            <strong className="block text-primary">{t("Local expertise")}</strong>
            <span className="text-sm text-muted-foreground">{t("Since 2005")}</span>
          </div>
          <div className="absolute -top-2 end-4 rounded-xl bg-primary p-4 text-white shadow-lg sm:end-6">
            <strong className="block text-lg">27+</strong>
            <span className="text-xs text-white/70">{t("Machine models")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

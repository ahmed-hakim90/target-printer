import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CircleDollarSign,
  Factory,
  Gauge,
  Headphones,
  PackageCheck,
  RefreshCw,
  Settings,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { RouteLoading } from "@/components/site/RouteLoading";
import { CTASection } from "@/components/site/CTASection";
import { Hero } from "@/components/site/Hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { CountUp } from "@/components/site/CountUp";
import { images } from "@/constants/images";
import { site } from "@/constants";
import { useLanguage } from "@/lib/language";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { ProductsCarousel } from "@/components/site/ProductsCarousel";
import { ComingSoonSection } from "@/components/site/ComingSoonSection";
import { CategoryProductShowcase } from "@/components/site/CategoryProductShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
      { property: "og:url", content: site.url },
    ],
    links: [{ rel: "canonical", href: site.url }],
  }),
  pendingComponent: RouteLoading,
  component: HomePage,
});

const categories = [
  ["Office printers", "Fast, reliable document printing", images.office],
  ["DTF printers", "Direct-to-film production systems", images.machineCategories.cutting],
  ["UV DTF printers", "Premium transfers for hard surfaces", images.uv],
  ["Large format", "Indoor and outdoor print production", images.machineCategories.welding],
  ["Finishing", "Cutters and laminators", images.machineCategories.packaging],
  ["Consumables", "Original inks and spare parts", images.machineCategories.materialHandling],
] as const;

function HomePage() {
  const { t } = useLanguage();
  const [principle, setPrinciple] = useState<"vision" | "values" | "mission">("vision");
  const [newsletterState, setNewsletterState] = useState<"idle" | "error" | "success">("idle");
  const principles = {
    vision: {
      label: "Our vision",
      title: "Leading the future through innovation and precision.",
      body: "To be the trusted partner for every organization seeking quality, speed and proven expertise in printing and office imaging.",
    },
    values: {
      label: "Our values",
      title: "Quality, honesty and lasting responsibility.",
      body: "We measure success by dependable equipment, transparent advice and relationships that continue long after installation.",
    },
    mission: {
      label: "Our mission",
      title: "Keeping every customer productive.",
      body: "We deliver efficient printing and document systems with responsive technical service, genuine parts and practical operator support.",
    },
  } as const;
  return (
    <>
      <Hero />

      <section className="border-b border-border bg-white/95 py-10">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            [ShieldCheck, "Original quality"],
            [Headphones, "Responsive support"],
            [Settings, "Installation & training"],
            [Wrench, "Annual maintenance"],
          ].map(([Icon, label]) => (
            <div key={label as string} className="flex items-center gap-3 bg-white p-5">
              <Icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-bold text-primary">{t(label as string)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background/95 py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="Explore Target"
            title="The right printing solution for every business."
            text="From everyday office output to high-volume textile and signage production."
          />
          <Marquee className="mt-10" itemClassName="w-[19rem] sm:w-80">
            {categories.map(([name, desc, img]) => (
              <Link
                key={name}
                to="/machines"
                className="group grid h-full grid-cols-[1fr_96px] overflow-hidden rounded-xl border border-border bg-white p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div>
                  <h3 className="font-bold text-primary">{t(name)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(desc)}</p>
                  <ArrowRight className="mt-5 h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </div>
                <img src={img} alt="" className="h-28 w-full object-contain" />
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="bg-secondary/90 py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <Header kicker="Featured products" title="Built to perform, supported to last." />
            <Link
              to="/machines"
              className="hidden items-center gap-2 text-sm font-bold text-accent md:flex"
            >
              {t("View all products")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
          <ProductsCarousel />
        </div>
      </section>

      <section className="border-y border-border bg-white/95 py-14">
        <StaggerGroup className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            ["48+", "Happy customers"],
            ["27+", "Products delivered"],
            ["48+", "Service points"],
            ["20+", "Years of experience"],
          ].map(([value, label]) => (
            <StaggerItem key={label}>
              <CountUp
                value={value}
                className="block text-4xl font-extrabold text-primary md:text-5xl"
              />
              <span className="mt-2 block text-sm font-semibold text-muted-foreground">
                {t(label)}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CategoryProductShowcase />

      <section className="bg-background/95 py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="What we offer"
            title="Everything your print operation needs."
            text="Supply, installation and long-term support under one accountable local team."
          />
          <StaggerGroup className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                Truck,
                "Equipment supply",
                "Office printers, production systems and finishing equipment selected around your application.",
              ],
              [
                Factory,
                "Direct importing",
                "Access to current international technologies and configurations for different production scales.",
              ],
              [
                Wrench,
                "Technical service",
                "Fast diagnostics, repairs and planned maintenance that protect uptime.",
              ],
              [
                Boxes,
                "Genuine spare parts",
                "Original inks, heads, rollers, boards and service kits for supported models.",
              ],
              [
                RefreshCw,
                "Annual contracts",
                "Preventive visits and practical service plans for companies and institutions.",
              ],
              [
                Gauge,
                "Technical consultation",
                "Clear advice on workflow, capacity and running cost before you invest.",
              ],
            ].map(([Icon, title, desc]) => (
              <StaggerItem key={title as string} className="h-full">
                <article className="interactive-card group h-full bg-white p-7 md:p-8" tabIndex={0}>
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white group-focus:bg-accent group-focus:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-primary">{t(title as string)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {t(desc as string)}
                  </p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent"
                  >
                    {t("Learn more")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface/95 py-20 text-white">
        <div className="hero-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
              {t("Made in Egypt")}
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              {t("Engineered here.")}
              <br />
              {t("Ready for the world.")}
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              {t(
                "Target combines international printing technology with local assembly, testing, training, spare-parts availability and a technical team that stays close after installation.",
              )}
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-white">
              {t("Discover our story")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={images.factory}
              alt="Modern Egypt and Target Printers"
              className="w-full rounded-2xl bg-white/5 object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/90 py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="Why Modern Egypt"
            title="A printing partner built around your uptime."
            text="Technology matters. The support system around it matters more."
          />
          <Marquee className="mt-10" itemClassName="w-64" duration={26}>
            {[
              [Settings, "Advanced technology", "Modern systems tested for stable production."],
              [
                CircleDollarSign,
                "Cost effective",
                "Lower total operating cost and better efficiency.",
              ],
              [ShieldCheck, "Quality assurance", "Rigorous testing and dependable specifications."],
              [Headphones, "Local support", "A technical team available when you need it."],
              [
                PackageCheck,
                "Genuine supply",
                "Original parts and consumables for consistent output.",
              ],
            ].map(([Icon, title, desc]) => (
              <article
                key={title as string}
                className="interactive-card h-full rounded-xl border border-border bg-white p-6"
                tabIndex={0}
              >
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-5 font-extrabold text-primary">{t(title as string)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(desc as string)}</p>
              </article>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="bg-background/95 py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="Business solutions"
            title="One partner from machine selection to production."
            text="Tailored print ecosystems for office teams, textile producers, advertising businesses and industrial applications."
          />
          <Marquee className="mt-10" itemClassName="w-72 sm:w-80" duration={24}>
            {[
              "Office solutions",
              "Textile printing",
              "Advertising & signage",
              "Industrial printing",
            ].map((x, i) => (
              <Link
                key={x}
                to="/services"
                className="group relative block h-full min-h-52 overflow-hidden rounded-xl bg-primary p-6 text-white"
              >
                <div className="absolute inset-0 opacity-25">
                  <img src={categories[i + 1][2]} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="relative flex h-full flex-col justify-end">
                  <Zap className="mb-4 h-6 w-6 text-blue-300" />
                  <h3 className="text-xl font-bold">{t(x)}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-white/70">
                    {t("Explore solution")} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="bg-[#eef5ff]/90 py-20 md:py-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Header
            kicker="Our foundation"
            title="A clear purpose behind every solution."
            text="The principles that guide how Modern Egypt selects equipment, serves customers and grows the Target brand."
          />
          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm md:p-8">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label={t("Company principles")}
            >
              {(Object.keys(principles) as Array<keyof typeof principles>).map((key) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={principle === key}
                  onClick={() => setPrinciple(key)}
                  className={`rounded-md px-4 py-2 text-sm font-bold transition ${principle === key ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:text-primary"}`}
                >
                  {t(principles[key].label)}
                </button>
              ))}
            </div>
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
              role="tabpanel"
            >
              <h3 className="max-w-2xl text-2xl font-extrabold text-primary md:text-3xl">
                {t(principles[principle].title)}
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                {t(principles[principle].body)}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="customer-reviews" className="scroll-mt-20 bg-background/95 py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="Customer reviews"
            title="Their trust is the measure of our work."
            text="Real feedback from teams that rely on Modern Egypt for equipment and technical support."
          />
          <TestimonialsCarousel />
        </div>
      </section>

      <ComingSoonSection />

      <section className="border-y border-border bg-secondary/90 py-14">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-accent">
              {t("Innovation updates")}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-primary md:text-3xl">
              {t("Product launches, printing insights and practical ideas.")}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t("Receive occasional updates from the Modern Egypt team—no daily noise.")}
            </p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const email =
                new FormData(event.currentTarget).get("newsletter-email")?.toString().trim() ?? "";
              setNewsletterState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "success" : "error");
            }}
            noValidate
            className="rounded-xl border border-border bg-white p-3"
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                {t("Business email")}
              </label>
              <input
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                placeholder={t("Business email")}
                aria-invalid={newsletterState === "error"}
                className="h-12 min-w-0 flex-1 rounded-md border border-border px-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              <button
                type="submit"
                className="h-12 rounded-md bg-primary px-6 text-sm font-bold text-white hover:bg-primary/90"
              >
                {t("Get updates")}
              </button>
            </div>
            {newsletterState === "error" && (
              <p role="alert" className="px-1 pt-2 text-xs font-semibold text-red-600">
                {t("Enter a valid email address.")}
              </p>
            )}
            {newsletterState === "success" && (
              <p role="status" className="px-1 pt-2 text-xs font-semibold text-emerald-700">
                {t(
                  "Thank you. Your email is ready to be added when the mailing integration is connected.",
                )}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-primary/95 py-12 text-white">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-300">
              {t("Become a Target partner")}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              {t("Grow with our distribution network.")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              {t(
                "Competitive pricing, marketing support, product training and reliable after-sales service.",
              )}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 font-bold text-primary"
          >
            {t("Apply now")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
      <CTASection
        title="Ready to upgrade your print production?"
        description="Tell us what you print, your expected volume and working size. Our team will recommend the right system and support plan."
      />
    </>
  );
}

function Header({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  const { t } = useLanguage();
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-accent">{t(kicker)}</p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-primary md:text-4xl">
        {t(title)}
      </h2>
      {text && <p className="mt-4 leading-7 text-muted-foreground">{t(text)}</p>}
    </div>
  );
}

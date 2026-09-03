import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CircleDollarSign,
  Factory,
  Gauge,
  Headphones,
  PackageCheck,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { RouteLoading } from "@/components/site/RouteLoading";
import { QuoteButton } from "@/components/site/CTAButtons";
import { CTASection } from "@/components/site/CTASection";
import { images } from "@/constants/images";
import { site } from "@/constants";
import { useLanguage } from "@/lib/language";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { ProductsCarousel } from "@/components/site/ProductsCarousel";
import { ComingSoonSection } from "@/components/site/ComingSoonSection";

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
      <section className="relative overflow-hidden bg-[#eef5ff]">
        <div className="container-x grid min-h-[680px] items-center gap-10 py-16 lg:grid-cols-[.4fr_.6fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> {t("Made in Egypt")}
            </div>
            <h1 className="max-w-2xl text-balance text-5xl font-extrabold leading-[.98] text-primary sm:text-6xl lg:text-7xl">
              {t("Print bigger.")}
              <br />
              <span className="text-accent">{t("Build smarter.")}</span>
            </h1>
            <p lang="ar" dir="rtl" className="mt-5 w-fit text-2xl font-bold text-primary">
              صناعة مصرية بطموح عالمي
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              High-performance printing systems engineered for businesses that expect consistent
              quality, dependable uptime, and expert local support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton size="lg" />
              <Link
                to="/machines"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-primary/25 bg-white px-6 font-semibold text-primary hover:border-primary"
              >
                {t("Explore products")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary/70">
              {["Reliable quality", "Technical support", "Genuine spare parts"].map((x) => (
                <span key={x} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-accent" />
                  {t(x)}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12 }}
            className="relative min-h-[390px] lg:min-h-[570px]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-white/70" />
            <img
              src={images.hero}
              alt="Target printing systems"
              width={1500}
              height={745}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full rounded-[2rem] object-cover object-center shadow-2xl shadow-blue-950/15"
            />
            <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 p-4 shadow-lg">
              <strong className="block text-primary">Local expertise</strong>
              <span className="text-sm text-muted-foreground">Since 2005</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-10">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            [ShieldCheck, "Original quality"],
            [Headphones, "Responsive support"],
            [Settings, "Installation & training"],
            [Wrench, "Annual maintenance"],
          ].map(([Icon, label]) => (
            <div key={label as string} className="flex items-center gap-3 bg-white p-5">
              <Icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-bold text-primary">{label as string}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="Explore Target"
            title="The right printing solution for every business."
            text="From everyday office output to high-volume textile and signage production."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(([name, desc, img]) => (
              <Link
                key={name}
                to="/machines"
                className="group grid grid-cols-[1fr_120px] overflow-hidden rounded-xl border border-border bg-white p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div>
                  <h3 className="font-bold text-primary">{t(name)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(desc)}</p>
                  <ArrowRight className="mt-5 h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </div>
                <img src={img} alt="" className="h-28 w-full object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <Header kicker="Featured products" title="Built to perform, supported to last." />
            <Link
              to="/machines"
              className="hidden items-center gap-2 text-sm font-bold text-accent md:flex"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductsCarousel />
        </div>
      </section>

      <section className="border-y border-border bg-white py-14">
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            ["48+", "Happy customers"],
            ["27+", "Products delivered"],
            ["48+", "Service points"],
            ["20+", "Years of experience"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong className="block text-4xl font-extrabold text-primary md:text-5xl">
                {value}
              </strong>
              <span className="mt-2 block text-sm font-semibold text-muted-foreground">
                {t(label)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="What we offer"
            title="Everything your print operation needs."
            text="Supply, installation and long-term support under one accountable local team."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
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
              <article
                key={title as string}
                className="interactive-card group bg-white p-7 md:p-8"
                tabIndex={0}
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white group-focus:bg-accent group-focus:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-primary">{t(title as string)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc as string}</p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 text-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
              {t("Made in Egypt")}
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              {t("Engineered here.")}
              <br />
              {t("Ready for the world.")}
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              Target combines international printing technology with local assembly, testing,
              training, spare-parts availability and a technical team that stays close after
              installation.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-white">
              {t("Discover our story")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
          <img
            src={images.factory}
            alt="Modern Egypt and Target Printers"
            className="w-full rounded-2xl bg-white/5 object-cover"
          />
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="Why Modern Egypt"
            title="A printing partner built around your uptime."
            text="Technology matters. The support system around it matters more."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
                className="interactive-card rounded-xl border border-border bg-white p-6"
                tabIndex={0}
              >
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-5 font-extrabold text-primary">{t(title as string)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Header
            kicker="Business solutions"
            title="One partner from machine selection to production."
            text="Tailored print ecosystems for office teams, textile producers, advertising businesses and industrial applications."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Office solutions",
              "Textile printing",
              "Advertising & signage",
              "Industrial printing",
            ].map((x, i) => (
              <Link
                key={x}
                to="/services"
                className="group relative min-h-52 overflow-hidden rounded-xl bg-primary p-6 text-white"
              >
                <div className="absolute inset-0 opacity-25">
                  <img src={categories[i + 1][2]} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="relative flex h-full flex-col justify-end">
                  <Zap className="mb-4 h-6 w-6 text-blue-300" />
                  <h3 className="text-xl font-bold">{t(x)}</h3>
                  <span className="mt-3 text-sm text-white/70">Explore solution →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5ff] py-20 md:py-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Header
            kicker="Our foundation"
            title="A clear purpose behind every solution."
            text="The principles that guide how Modern Egypt selects equipment, serves customers and grows the Target brand."
          />
          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm md:p-8">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Company principles">
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
                {principles[principle].body}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
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

      <section className="border-y border-border bg-secondary py-14">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-accent">
              Innovation updates
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-primary md:text-3xl">
              Product launches, printing insights and practical ideas.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Receive occasional updates from the Modern Egypt team—no daily noise.
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
                Business email
              </label>
              <input
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                placeholder="Business email"
                aria-invalid={newsletterState === "error"}
                className="h-12 min-w-0 flex-1 rounded-md border border-border px-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              <button
                type="submit"
                className="h-12 rounded-md bg-primary px-6 text-sm font-bold text-white hover:bg-primary/90"
              >
                Get updates
              </button>
            </div>
            {newsletterState === "error" && (
              <p role="alert" className="px-1 pt-2 text-xs font-semibold text-red-600">
                Enter a valid email address.
              </p>
            )}
            {newsletterState === "success" && (
              <p role="status" className="px-1 pt-2 text-xs font-semibold text-emerald-700">
                Thank you. Your email is ready to be added when the mailing integration is
                connected.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-primary py-12 text-white">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-300">
              {t("Become a Target partner")}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              {t("Grow with our distribution network.")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              Competitive pricing, marketing support, product training and reliable after-sales
              service.
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

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { RouteLoading } from "@/components/site/RouteLoading";
import { QuoteButton } from "@/components/site/CTAButtons";
import { CTASection } from "@/components/site/CTASection";
import { images } from "@/constants/images";
import { site } from "@/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
    ],
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

const products = [
  [
    "Plotter Cutter",
    "Precision contour cutting for signage and apparel.",
    images.machineCategories.cutting,
  ],
  [
    "Laminator",
    "Professional wide-format finishing and protection.",
    images.machineCategories.packaging,
  ],
  ["KingJet KJ-1804", "Large-format indoor and outdoor printer.", images.machineCategories.welding],
  ["Target TA-300UV", "A3/A2 UV DTF sticker printer for growing businesses.", images.uv],
] as const;

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#eef5ff]">
        <div className="container-x grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Made in Egypt
            </div>
            <h1 className="max-w-2xl text-balance text-5xl font-extrabold leading-[.98] text-primary sm:text-6xl lg:text-7xl">
              Print bigger.
              <br />
              <span className="text-accent">Build smarter.</span>
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
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary/70">
              {["Reliable quality", "Technical support", "Genuine spare parts"].map((x) => (
                <span key={x} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-accent" />
                  {x}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12 }}
            className="relative min-h-[360px] lg:min-h-[520px]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-white/70" />
            <img
              src={images.hero}
              alt="Target printing systems"
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
                  <h3 className="font-bold text-primary">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
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
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map(([name, desc, img]) => (
              <article key={name} className="group rounded-xl border border-border bg-white p-5">
                <div className="grid aspect-[4/3] place-items-center rounded-lg bg-[#f5f8fc]">
                  <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-contain p-3 transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-widest text-accent">
                  Target professional series
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-primary">{name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{desc}</p>
                <QuoteButton
                  product={name}
                  variant="solid"
                  className="mt-5 w-full"
                  label="Request details"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 text-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
              Made in Egypt
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Engineered here.
              <br />
              Ready for the world.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              Target combines international printing technology with local assembly, testing,
              training, spare-parts availability and a technical team that stays close after
              installation.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-white">
              Discover our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={images.factory}
            alt="Modern Egypt and Target Printers"
            className="w-full rounded-2xl bg-white/5 object-cover"
          />
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
                  <h3 className="text-xl font-bold">{x}</h3>
                  <span className="mt-3 text-sm text-white/70">Explore solution →</span>
                </div>
              </Link>
            ))}
          </div>
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
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-accent">{kicker}</p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-primary md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 leading-7 text-muted-foreground">{text}</p>}
    </div>
  );
}

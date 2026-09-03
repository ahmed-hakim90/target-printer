import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { machineCategories, machines } from "@/constants";
import type { Machine } from "@/constants";
import { useLanguage } from "@/lib/language";
import { QuoteButton } from "./CTAButtons";
import { SmartImage } from "./SmartImage";

const categoryOrder = [
  "cnc",
  "cutting",
  "dtg",
  "hydraulicPress",
  "materialHandling",
  "packaging",
] as const;

export function CategoryProductShowcase() {
  const { language, t } = useLanguage();
  const reduce = useReducedMotion();
  const categories = machineCategories.filter((category) =>
    categoryOrder.includes(category.id as never),
  );
  const [categoryId, setCategoryId] = useState<(typeof categoryOrder)[number]>(categoryOrder[0]);
  const products = useMemo(
    () => machines.filter((machine) => machine.categoryId === categoryId),
    [categoryId],
  );
  const [selected, setSelected] = useState(0);
  const active = products[selected] ?? products[0];
  const slides = products.length > 1 && products.length < 4 ? [...products, ...products] : products;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [viewportRef, api] = useEmblaCarousel({
    align: "start",
    direction: language === "ar" ? "rtl" : "ltr",
    loop: products.length > 1,
  });

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    timer.current = null;
    resumeTimer.current = null;
  }, []);
  const start = useCallback(() => {
    if (!api || products.length < 2 || reduce || timer.current) return;
    timer.current = setInterval(() => api.scrollNext(), 3600);
  }, [api, products.length, reduce]);
  const resume = useCallback(() => {
    stop();
    resumeTimer.current = setTimeout(start, 900);
  }, [start, stop]);

  useEffect(() => {
    setSelected(0);
    api?.reInit();
  }, [api, categoryId]);
  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  const choose = (machine: Machine, index: number) => {
    setSelected(products.findIndex((product) => product.slug === machine.slug));
    api?.scrollTo(index);
    resume();
  };

  if (!active) return null;

  return (
    <section className="relative overflow-hidden border-b border-border bg-[#eef5ff]/82 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">{t("Products by category")}</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-primary md:text-5xl">
            {t("Explore products around your application.")}
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t(
              "Choose a printing category, compare the available models and request the right configuration for your workflow.",
            )}
          </p>
        </div>

        <div
          className="no-scrollbar -mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
          role="tablist"
          aria-label={t("Product categories")}
        >
          {categories.map((category) => {
            const selectedCategory = category.id === categoryId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory}
                onClick={() => setCategoryId(category.id as (typeof categoryOrder)[number])}
                className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-bold transition ${selectedCategory ? "border-primary bg-primary text-white shadow-md" : "border-border bg-white text-muted-foreground hover:border-accent hover:text-primary"}`}
              >
                {t(category.label)}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.slug}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid min-h-[32rem] overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-950/5 md:grid-cols-[.9fr_1.1fr]"
              role="tabpanel"
            >
              <div className="min-h-64 bg-gradient-to-br from-white to-blue-50 p-6 md:min-h-full md:p-10">
                <SmartImage
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="text-xs font-extrabold uppercase tracking-[.16em] text-accent">
                  {t(active.category)}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-primary md:text-4xl">
                  {active.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{t(active.summary)}</p>
                <dl className="mt-6 grid gap-3">
                  {active.specs.slice(0, 3).map((spec) => (
                    <div
                      key={`${spec.label}-${spec.value}`}
                      className="grid grid-cols-[minmax(7rem,.7fr)_1fr] gap-3 border-t border-border pt-3 text-sm"
                    >
                      <dt className="font-bold text-primary">{t(spec.label)}</dt>
                      <dd className="min-w-0 break-words text-muted-foreground">{spec.value}</dd>
                    </div>
                  ))}
                  {active.specs.length === 0 && (
                    <p className="rounded-lg bg-secondary p-4 text-sm font-semibold text-muted-foreground">
                      {t("Specifications available on request.")}
                    </p>
                  )}
                </dl>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/machines/$slug"
                    params={{ slug: active.slug }}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90"
                  >
                    {t("View Details")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                  <QuoteButton product={active.name} variant="outline" />
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div
            ref={viewportRef}
            className="no-scrollbar cursor-grab overflow-hidden rounded-2xl active:cursor-grabbing"
            onPointerDown={stop}
            onPointerUp={resume}
            onPointerCancel={resume}
            onMouseEnter={stop}
            onMouseLeave={resume}
            onFocusCapture={stop}
            onBlurCapture={resume}
            aria-label={t("Products in selected category")}
          >
            <div className="flex touch-pan-y gap-4 xl:grid xl:grid-cols-2">
              {slides.map((machine, index) => {
                const duplicate = index >= products.length;
                const isActive = machine.slug === active.slug;
                return (
                  <button
                    key={`${machine.slug}-${index}`}
                    type="button"
                    onClick={() => choose(machine, index)}
                    aria-pressed={isActive && !duplicate}
                    aria-hidden={duplicate || undefined}
                    tabIndex={duplicate ? -1 : 0}
                    className={`group min-h-72 min-w-0 flex-[0_0_86%] overflow-hidden rounded-xl border bg-white p-4 text-start transition sm:basis-[46%] xl:min-h-0 xl:basis-auto ${isActive ? "border-accent shadow-lg" : "border-border hover:-translate-y-1 hover:border-accent/60 hover:shadow-md"}`}
                  >
                    <span className="block h-36 overflow-hidden rounded-lg bg-secondary p-3">
                      <SmartImage
                        src={machine.image}
                        alt=""
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="mt-4 block text-xs font-bold uppercase tracking-wider text-accent">
                      {t(machine.category)}
                    </span>
                    <strong className="mt-2 block line-clamp-2 text-base text-primary">
                      {machine.name}
                    </strong>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

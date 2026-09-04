import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import aquafix from "@/assets/target/client-aquafix.png";
import trustnetic from "@/assets/target/client-trustnetic.png";
import printa from "@/assets/target/client-printa.png";

const reviews = [
  {
    name: "Ahmed Fawzy",
    role: "Purchasing Manager — Al Raya Contracting",
    review:
      "We purchased printers and copiers for the company. The equipment was original, delivery was on time and the technical support made a real difference.",
    logo: trustnetic,
    logoClass: "bg-white",
  },
  {
    name: "Sara Khaled",
    role: "Administration Manager — Origin Group",
    review:
      "Installation was quick and the service team was very cooperative. The improvement in our daily document workflow was immediately noticeable.",
    logo: aquafix,
    logoClass: "bg-white",
  },
  {
    name: "Yasmin Abdelaziz",
    role: "IT Manager — Elite Educational Academy",
    review:
      "Their preventive follow-up stopped many issues before they interrupted work. Strong equipment and a professional, honest support team.",
    logo: printa,
    logoClass: "bg-primary",
  },
] as const;

type Review = (typeof reviews)[number];

function ReviewCard({ item, featured = false }: { item: Review; featured?: boolean }) {
  const { t } = useLanguage();
  return (
    <figure
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 transition-[height,border-color,box-shadow,transform] duration-500 ease-out md:p-7 ${featured ? "border-accent/50 shadow-2xl shadow-blue-950/15 md:min-h-[31rem] md:-translate-y-2 lg:min-h-[27rem]" : "border-border shadow-sm md:min-h-[27rem] lg:min-h-[23rem]"}`}
    >
      <div className={`flex h-14 w-36 items-center rounded-lg p-3 lg:w-40 ${item.logoClass}`}>
        <img src={item.logo} alt="" className="max-h-10 w-full object-contain" />
      </div>
      <div className="mt-5 flex gap-1 text-[#f4b740]" aria-label={t("5 out of 5 stars")}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <Quote className="mt-7 h-8 w-8 text-accent/25" aria-hidden="true" />
      <blockquote className="mt-3 flex-1 leading-7 text-foreground/80">
        “{t(item.review)}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-5">
        <strong className="block text-primary">{item.name}</strong>
        <span className="mt-1 block text-xs leading-5 text-muted-foreground">{t(item.role)}</span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsCarousel() {
  const { language, t } = useLanguage();
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);
  const [rotation, setRotation] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerStart = useRef<number | null>(null);
  const [viewportRef, api] = useEmblaCarousel({
    align: "center",
    direction: language === "ar" ? "rtl" : "ltr",
    loop: true,
  });

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const advance = useCallback(
    (direction = 1) => {
      if (desktop)
        setRotation((current) => (current + direction + reviews.length) % reviews.length);
      else if (direction > 0) api?.scrollNext();
      else api?.scrollPrev();
    },
    [api, desktop],
  );
  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    timer.current = null;
    resumeTimer.current = null;
  }, []);
  const start = useCallback(() => {
    if (reduce || timer.current) return;
    timer.current = setInterval(() => advance(1), 3200);
  }, [advance, reduce]);
  const resume = useCallback(() => {
    stop();
    resumeTimer.current = setTimeout(start, 900);
  }, [start, stop]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);
  const ordered = reviews.map((_, index) => reviews[(index + rotation) % reviews.length]);

  if (desktop)
    return (
      <div
        className="mt-10 cursor-grab select-none active:cursor-grabbing"
        role="region"
        aria-roledescription={t("carousel")}
        aria-label={t("Customer reviews")}
        tabIndex={0}
        onMouseEnter={stop}
        onMouseLeave={resume}
        onFocus={stop}
        onBlur={resume}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
          stop();
        }}
        onPointerUp={(event) => {
          if (
            pointerStart.current !== null &&
            Math.abs(event.clientX - pointerStart.current) > 45
          ) {
            const movedLeft = event.clientX < pointerStart.current;
            advance(language === "ar" ? (movedLeft ? -1 : 1) : movedLeft ? 1 : -1);
          }
          pointerStart.current = null;
          resume();
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          const forward =
            language === "ar" ? event.key === "ArrowLeft" : event.key === "ArrowRight";
          advance(forward ? 1 : -1);
          resume();
        }}
      >
        <div className="grid min-h-[33rem] grid-cols-3 items-center gap-5 lg:min-h-[29rem]">
          {ordered.map((item, index) => (
            <motion.div
              layout={!reduce}
              key={item.name}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0"
              role="group"
              aria-label={`${index + 1} / ${reviews.length}`}
            >
              <ReviewCard item={item} featured={index === 1} />
            </motion.div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="mt-10">
      <div
        ref={viewportRef}
        className="no-scrollbar cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerDown={stop}
        onPointerUp={resume}
        onPointerCancel={resume}
        onMouseEnter={stop}
        onMouseLeave={resume}
        onFocusCapture={stop}
        onBlurCapture={resume}
        tabIndex={0}
        aria-roledescription={t("carousel")}
        aria-label={t("Customer reviews")}
      >
        <div className="flex touch-pan-y gap-4 py-3">
          {reviews.map((item) => (
            <div key={item.name} className="min-w-0 flex-[0_0_88%]" role="group">
              <ReviewCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

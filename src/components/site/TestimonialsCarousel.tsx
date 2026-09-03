import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
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

export function TestimonialsCarousel() {
  const { language, t } = useLanguage();
  const [viewportRef, api] = useEmblaCarousel({
    align: "start",
    direction: language === "ar" ? "rtl" : "ltr",
    dragFree: false,
    loop: true,
  });
  const paused = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    paused.current = true;
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const start = useCallback(() => {
    paused.current = false;
    if (timer.current || !api) return;
    timer.current = setInterval(() => {
      if (!paused.current) api.scrollNext();
    }, 3200);
  }, [api]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = null;
    };
  }, [start]);

  const resumeSoon = () => {
    stop();
    window.setTimeout(start, 900);
  };

  return (
    <div className="mt-10">
      <div
        ref={viewportRef}
        className="cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerDown={stop}
        onPointerUp={resumeSoon}
        onPointerCancel={resumeSoon}
        onMouseEnter={stop}
        onMouseLeave={start}
        onFocusCapture={stop}
        onBlurCapture={start}
        aria-roledescription={t("carousel")}
        aria-label={t("Customer reviews")}
      >
        <div className="flex touch-pan-y gap-5">
          {reviews.map(({ name, role, review, logo, logoClass }) => (
            <div
              key={name}
              className="min-w-0 flex-[0_0_88%] sm:basis-[58%] lg:basis-[42%] xl:basis-[36%]"
            >
              <figure className="flex h-full min-h-80 flex-col rounded-xl border border-border bg-white p-7 shadow-sm">
                <div className={`flex h-16 w-44 items-center rounded-lg p-3 ${logoClass}`}>
                  <img src={logo} alt="" className="max-h-10 w-full object-contain" />
                </div>
                <div className="flex gap-1 text-[#f4b740]" aria-label={t("5 out of 5 stars")}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="mt-7 h-8 w-8 text-accent/25" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 leading-7 text-foreground/80">
                  “{t(review)}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <strong className="block text-primary">{name}</strong>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                    {t(role)}
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            stop();
            api?.scrollPrev();
            resumeSoon();
          }}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={t("Previous review")}
        >
          <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => {
            stop();
            api?.scrollNext();
            resumeSoon();
          }}
          className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={t("Next review")}
        >
          <ArrowRight className="h-5 w-5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}

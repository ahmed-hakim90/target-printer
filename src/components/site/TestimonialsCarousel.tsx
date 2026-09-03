import useEmblaCarousel from "embla-carousel-react";
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

export function TestimonialsCarousel() {
  const { language, t } = useLanguage();
  const [viewportRef, api] = useEmblaCarousel({
    align: "center",
    direction: language === "ar" ? "rtl" : "ltr",
    dragFree: false,
    loop: true,
    startIndex: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(1);
  const paused = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stop = useCallback(() => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = null;
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
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    };
  }, [start]);

  useEffect(() => {
    if (!api) return;
    const updateSelected = () => setSelectedIndex(api.selectedScrollSnap());
    updateSelected();
    api.on("select", updateSelected);
    api.on("reInit", updateSelected);
    return () => {
      api.off("select", updateSelected);
      api.off("reInit", updateSelected);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    // Re-measure once the webfont finishes loading: Embla can compute
    // slide widths/centering before "Cairo" swaps in, especially on a
    // slower mobile connection, leaving the selected card off-center.
    document.fonts?.ready.then(() => api.reInit());
  }, [api]);

  const resumeSoon = () => {
    stop();
    resumeTimer.current = window.setTimeout(start, 900);
  };

  const trackReviews = [...reviews, ...reviews];

  return (
    <div className="mt-10">
      <div
        ref={viewportRef}
        className="no-scrollbar cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerDown={stop}
        onPointerUp={resumeSoon}
        onPointerCancel={resumeSoon}
        onMouseEnter={stop}
        onMouseLeave={resumeSoon}
        onFocusCapture={stop}
        onBlurCapture={resumeSoon}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          stop();
          const forward =
            language === "ar" ? event.key === "ArrowLeft" : event.key === "ArrowRight";
          if (forward) api?.scrollNext();
          else api?.scrollPrev();
          resumeSoon();
        }}
        tabIndex={0}
        aria-roledescription={t("carousel")}
        aria-label={t("Customer reviews")}
      >
        <div className="flex min-h-[27rem] touch-pan-y items-center gap-5 py-4 md:min-h-[33rem] lg:min-h-[29rem]">
          {trackReviews.map(({ name, role, review, logo, logoClass }, index) => {
            const isSelected = selectedIndex === index;
            const duplicate = index >= reviews.length;
            return (
              <div
                key={`${name}-${duplicate ? "duplicate" : "original"}`}
                role="group"
                aria-roledescription="slide"
                aria-current={
                  !duplicate && selectedIndex % reviews.length === index ? "true" : undefined
                }
                aria-hidden={duplicate || undefined}
                inert={duplicate || undefined}
                className={`min-w-0 flex-[0_0_88%] transition-[transform,opacity] duration-500 ease-out sm:basis-[70%] md:basis-[calc((100%-2.5rem)/3)] ${
                  isSelected
                    ? "relative z-10 opacity-100 md:scale-100"
                    : "opacity-100 md:scale-[.94] md:opacity-70"
                }`}
              >
                <figure
                  className={`flex min-h-[25rem] flex-col rounded-2xl border bg-white p-6 transition-[height,border-color,box-shadow,transform] duration-500 ease-out md:p-7 ${
                    isSelected
                      ? "border-accent/40 shadow-2xl shadow-blue-950/15 md:h-[31rem] md:-translate-y-1 lg:h-[27rem]"
                      : "border-border shadow-sm md:h-[27rem] lg:h-[23rem]"
                  }`}
                >
                  <div
                    className={`flex h-14 w-36 items-center rounded-lg p-3 lg:w-40 ${logoClass}`}
                  >
                    <img src={logo} alt="" className="max-h-10 w-full object-contain" />
                  </div>
                  <div
                    className="mt-5 flex gap-1 text-[#f4b740]"
                    aria-label={t("5 out of 5 stars")}
                  >
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

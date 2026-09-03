import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { machines } from "@/constants";
import { MachineCard } from "./MachineCard";
import { useLanguage } from "@/lib/language";

export function ProductsCarousel() {
  const { language, t } = useLanguage();
  const [viewportRef, api] = useEmblaCarousel({
    align: "start",
    loop: true,
    direction: language === "ar" ? "rtl" : "ltr",
  });
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);
  const start = useCallback(() => {
    if (!api || timer.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    timer.current = setInterval(() => api.scrollNext(), 3600);
  }, [api]);
  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);
  const resume = () => {
    stop();
    window.setTimeout(start, 900);
  };
  return (
    <div className="mt-10">
      <div
        ref={viewportRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onPointerDown={stop}
        onPointerUp={resume}
        onPointerCancel={resume}
        onMouseEnter={stop}
        onMouseLeave={start}
        onFocusCapture={stop}
        onBlurCapture={start}
        aria-label={t("Featured products")}
        aria-roledescription={t("carousel")}
      >
        <div className="flex touch-pan-y gap-5">
          {machines.map((machine) => (
            <div
              key={machine.slug}
              className="min-w-0 flex-[0_0_88%] sm:basis-[48%] lg:basis-[31%] xl:basis-[24%]"
            >
              <MachineCard machine={machine} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            stop();
            api?.scrollPrev();
            resume();
          }}
          className="carousel-control"
          aria-label={t("Previous product")}
        >
          <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => {
            stop();
            api?.scrollNext();
            resume();
          }}
          className="carousel-control bg-primary text-white hover:bg-accent"
          aria-label={t("Next product")}
        >
          <ArrowRight className="h-5 w-5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}

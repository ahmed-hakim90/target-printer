import useEmblaCarousel from "embla-carousel-react";
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
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stop = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = null;
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
    return () => {
      stop();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [start, stop]);
  const resume = () => {
    stop();
    resumeTimer.current = window.setTimeout(start, 900);
  };
  return (
    <div className="mt-10">
      <div
        ref={viewportRef}
        className="no-scrollbar cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerDown={stop}
        onPointerUp={resume}
        onPointerCancel={resume}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") stop();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") resume();
        }}
        onFocusCapture={stop}
        onBlurCapture={resume}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          stop();
          const forward =
            language === "ar" ? event.key === "ArrowLeft" : event.key === "ArrowRight";
          if (forward) api?.scrollNext();
          else api?.scrollPrev();
          resume();
        }}
        tabIndex={0}
        aria-label={t("Featured products")}
        aria-roledescription={t("carousel")}
      >
        <div className="flex touch-pan-y gap-5">
          {machines.map((machine) => (
            <div
              key={machine.slug}
              className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_31%] xl:flex-[0_0_24%]"
            >
              <MachineCard machine={machine} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

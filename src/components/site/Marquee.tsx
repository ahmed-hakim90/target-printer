import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language";

export function Marquee({
  children,
  duration = 32,
  className,
  itemClassName,
  gapClassName = "gap-5",
}: {
  children: ReactNode[];
  duration?: number;
  className?: string;
  itemClassName?: string;
  gapClassName?: string;
}) {
  const { language } = useLanguage();
  const reduce = useReducedMotion();
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoScroll = useMemo(
    () =>
      AutoScroll({
        playOnInit: !reduce,
        speed: Math.max(0.55, 34 / duration),
        startDelay: 700,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    [duration, reduce],
  );
  const [viewportRef, api] = useEmblaCarousel(
    {
      align: "start",
      containScroll: false,
      direction: language === "ar" ? "rtl" : "ltr",
      dragFree: true,
      loop: true,
    },
    [autoScroll],
  );

  const stop = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = null;
    api?.plugins().autoScroll?.stop();
  }, [api]);

  const resume = useCallback(() => {
    stop();
    if (reduce) return;
    resumeTimer.current = setTimeout(() => api?.plugins().autoScroll?.play(), 900);
  }, [api, reduce, stop]);

  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    [],
  );

  if (reduce) {
    return (
      <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>{children}</div>
    );
  }

  return (
    <div
      ref={viewportRef}
      className={cn("no-scrollbar cursor-grab overflow-hidden active:cursor-grabbing", className)}
      onPointerDown={stop}
      onPointerUp={resume}
      onPointerCancel={resume}
      onMouseEnter={stop}
      onMouseLeave={resume}
      onFocusCapture={stop}
      onBlurCapture={resume}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        stop();
        const forward = language === "ar" ? event.key === "ArrowLeft" : event.key === "ArrowRight";
        if (forward) api?.scrollNext();
        else api?.scrollPrev();
        resume();
      }}
      tabIndex={0}
      role="region"
      aria-label={language === "ar" ? "محتوى متحرك أفقيًا" : "Horizontally scrolling content"}
    >
      <div className={cn("flex touch-pan-y", gapClassName)}>
        {Array.from(
          { length: Math.max(children.length, 8) },
          (_, i) => children[i % children.length],
        ).map((child, i) => (
          <div
            key={i}
            className={cn("min-w-0 shrink-0", itemClassName)}
            aria-hidden={i >= children.length || undefined}
            inert={i >= children.length || undefined}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

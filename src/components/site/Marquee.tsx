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
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const paused = useRef(false);
  const lastTime = useRef<number | null>(null);
  const pointerStart = useRef<number | null>(null);
  const scrollStart = useRef(0);
  const dragged = useRef(false);
  const orderedChildren = useMemo(
    () => (language === "ar" ? [...children].reverse() : children),
    [children, language],
  );

  const normalizePosition = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const segment = viewport.scrollWidth / 3;
    if (!segment) return;
    if (viewport.scrollLeft < segment * 0.5) viewport.scrollLeft += segment;
    if (viewport.scrollLeft >= segment * 2) viewport.scrollLeft -= segment;
  }, []);

  const stop = useCallback(() => {
    paused.current = true;
    lastTime.current = null;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = null;
  }, []);

  const resume = useCallback(() => {
    stop();
    if (reduce) return;
    resumeTimer.current = setTimeout(() => {
      normalizePosition();
      paused.current = false;
    }, 900);
  }, [normalizePosition, reduce, stop]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || reduce) return;
    const placeInMiddle = () => {
      const segment = viewport.scrollWidth / 3;
      if (segment) viewport.scrollLeft = segment;
    };
    placeInMiddle();
    const observer = new ResizeObserver(placeInMiddle);
    observer.observe(viewport);
    paused.current = false;

    const tick = (time: number) => {
      if (!paused.current) {
        const segment = viewport.scrollWidth / 3;
        if (lastTime.current !== null && segment) {
          const pixelsPerMs = segment / (duration * 1000);
          viewport.scrollLeft += (time - lastTime.current) * pixelsPerMs;
          normalizePosition();
        }
        lastTime.current = time;
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [duration, language, normalizePosition, reduce]);

  if (reduce) {
    return (
      <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>{children}</div>
    );
  }

  return (
    <div
      ref={viewportRef}
      dir="ltr"
      className={cn("no-scrollbar cursor-grab overflow-x-auto active:cursor-grabbing", className)}
      onPointerDown={(event) => {
        stop();
        pointerStart.current = event.clientX;
        scrollStart.current = event.currentTarget.scrollLeft;
        dragged.current = false;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        if (Math.abs(distance) > 5) dragged.current = true;
        event.currentTarget.scrollLeft = scrollStart.current - distance;
      }}
      onPointerUp={() => {
        pointerStart.current = null;
        normalizePosition();
        resume();
      }}
      onPointerCancel={() => {
        pointerStart.current = null;
        normalizePosition();
        resume();
      }}
      onClickCapture={(event) => {
        if (!dragged.current) return;
        event.preventDefault();
        event.stopPropagation();
        dragged.current = false;
      }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") stop();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") resume();
      }}
      onFocusCapture={stop}
      onBlurCapture={resume}
      onScroll={normalizePosition}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        stop();
        viewportRef.current?.scrollBy({
          left: event.key === "ArrowRight" ? 280 : -280,
          behavior: "smooth",
        });
        resume();
      }}
      tabIndex={0}
      role="region"
      aria-label={language === "ar" ? "محتوى متحرك أفقيًا" : "Horizontally scrolling content"}
    >
      <div className="flex w-max">
        {[0, 1, 2].map((group) => (
          <div
            key={group}
            className={cn("flex shrink-0 pe-5", gapClassName)}
            aria-hidden={group !== 1 || undefined}
            inert={group !== 1 || undefined}
          >
            {orderedChildren.map((child, index) => (
              <div
                key={index}
                dir={language === "ar" ? "rtl" : "ltr"}
                className={cn("min-w-0 shrink-0", itemClassName)}
              >
                {child}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

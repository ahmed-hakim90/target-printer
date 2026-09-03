import { useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

const DOTS = Array.from({ length: 28 }, (_, index) => ({
  top: `${(index * 37 + 11) % 96}%`,
  left: `${(index * 61 + 7) % 97}%`,
  size: 2 + (index % 4),
  delay: -((index * 1.7) % 16),
  duration: 13 + (index % 7) * 2.5,
  driftX: `${index % 2 ? "-" : ""}${18 + (index % 5) * 8}px`,
  driftY: `${index % 3 ? "-" : ""}${14 + (index % 6) * 7}px`,
}));

export function AmbientDots() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[11] overflow-hidden">
      {!reduce &&
        DOTS.map((dot, i) => (
          <span
            key={i}
            className="ambient-random-dot absolute rounded-full bg-accent"
            style={
              {
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration}s`,
                "--dot-x": dot.driftX,
                "--dot-y": dot.driftY,
              } as CSSProperties
            }
          />
        ))}
    </div>
  );
}

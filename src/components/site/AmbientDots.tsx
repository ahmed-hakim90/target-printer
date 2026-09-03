import { useReducedMotion } from "framer-motion";

const TWINKLE_DOTS = [
  { top: "8%", left: "12%", size: 5, delay: 0 },
  { top: "18%", left: "82%", size: 4, delay: 0.3 },
  { top: "27%", left: "34%", size: 3, delay: 0.6 },
  { top: "14%", left: "62%", size: 4, delay: 0.9 },
  { top: "38%", left: "8%", size: 3, delay: 1.2 },
  { top: "44%", left: "92%", size: 5, delay: 1.5 },
  { top: "52%", left: "46%", size: 3, delay: 1.8 },
  { top: "61%", left: "20%", size: 4, delay: 2.1 },
  { top: "58%", left: "74%", size: 3, delay: 2.4 },
  { top: "72%", left: "58%", size: 4, delay: 2.7 },
  { top: "78%", left: "14%", size: 3, delay: 3.0 },
  { top: "83%", left: "88%", size: 5, delay: 3.3 },
  { top: "91%", left: "40%", size: 3, delay: 3.6 },
  { top: "5%", left: "45%", size: 3, delay: 3.9 },
  { top: "35%", left: "70%", size: 4, delay: 4.2 },
  { top: "67%", left: "38%", size: 3, delay: 4.5 },
  { top: "95%", left: "68%", size: 4, delay: 4.8 },
  { top: "22%", left: "5%", size: 3, delay: 5.1 },
] as const;

export function AmbientDots() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-dot-grid absolute inset-0 opacity-[0.35]" />
      {!reduce &&
        TWINKLE_DOTS.map((dot, i) => (
          <span
            key={i}
            className="ambient-twinkle absolute rounded-full bg-accent"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
    </div>
  );
}

import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    const timer = window.setTimeout(() => {
      const sections = Array.from(document.querySelectorAll("main section"));
      sections.forEach((section) => {
        section.classList.add("scroll-reveal");
        observer.observe(section);
      });
    }, 80);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);
  return null;
}

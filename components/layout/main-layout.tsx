"use client";
import { ReactNode, useEffect, useRef } from "react";

export default function MainLayout({ children }: { children?: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>(".reveal, .project-card, .role, .skill-group");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-pending");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("reveal-pending", "visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return (
    <div
      ref={rootRef}
      onPointerMove={(event) => {
        if (!(event.target instanceof Element)) return;
        const card = event.target.closest<HTMLElement>(".project-card");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }}
      className="min-h-full flex flex-col"
    >
      {children}
    </div>
  );
}

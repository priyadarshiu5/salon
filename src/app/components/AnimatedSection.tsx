"use client";
import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  threshold?: number;
  tag?: keyof React.JSX.IntrinsicElements;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  threshold = 0.05,
  tag: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediate visibility for elements already in viewport on load
    const show = () => el.classList.add("visible");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    // Fallback: if the element is already partially visible on mount, show it
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
    }

    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`${animation} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}

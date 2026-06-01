"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type ScrollRevealProps = {
  as?: "div" | "p";
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
  stagger?: number;
  start?: string;
  style?: CSSProperties;
};

export function ScrollReveal({
  as = "div",
  children,
  className,
  delay = 0,
  distance = 36,
  duration = 0.8,
  once = true,
  stagger = 0,
  start = "top 82%",
  style,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const setElementRef = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const currentElement = element;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      currentElement.style.opacity = "1";
      return;
    }

    let context: { revert: () => void } | undefined;
    let isCancelled = false;

    async function animate() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (isCancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const targets =
          stagger > 0
            ? Array.from(currentElement.children)
            : [currentElement];

        gsap.set(currentElement, { autoAlpha: 1 });
        gsap.fromTo(
          targets,
          {
            autoAlpha: 0,
            y: distance,
          },
          {
            autoAlpha: 1,
            delay,
            duration,
            ease: "power3.out",
            stagger: stagger > 0 ? stagger : 0,
            y: 0,
            scrollTrigger: {
              once,
              start,
              trigger: currentElement,
            },
          },
        );
      }, currentElement);
    }

    animate().catch(() => {
      currentElement.style.opacity = "1";
    });

    return () => {
      isCancelled = true;
      context?.revert();
    };
  }, [delay, distance, duration, once, stagger, start]);

  const revealStyle = { opacity: 0, ...style };

  if (as === "p") {
    return (
      <p className={className} ref={setElementRef} style={revealStyle}>
        {children}
      </p>
    );
  }

  return (
    <div className={className} ref={setElementRef} style={revealStyle}>
      {children}
    </div>
  );
}

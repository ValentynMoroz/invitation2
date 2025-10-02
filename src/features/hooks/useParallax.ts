import { useRef, useEffect } from "react";

export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.2) {
  const ref = useRef<T | null>(null);
  const initialY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    initialY.current = el.getBoundingClientRect().top;

    let ticking = false;

    const updateTransform = (currentScrollY: number) => {
      const el = ref.current;
      if (!el) return;

      const distanceScrolled = currentScrollY - initialY.current;
      const translateY = distanceScrolled * -speed;

      el.style.transform = `translateY( ${translateY}px)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => updateTransform(window.scrollY));
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => updateTransform(window.scrollY));

    updateTransform(window.scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => updateTransform(window.scrollY));
    };
  }, [speed]);

  return ref;
}

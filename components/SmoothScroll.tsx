"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

// Smooth (inertia) scrolling + scroll progress bar + light hero parallax.
// Only transforms are written (no CSS variables on <html>), so scrolling stays cheap.
export default function SmoothScroll() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    lenis.on("scroll", () => {
      if (bar.current) bar.current.style.transform = `scaleX(${lenis.progress || 0})`;
      if (lenis.scroll < 900) {
        const packs = document.querySelector<HTMLElement>(".hero2 .packs");
        if (packs) packs.style.transform = `translate3d(0, ${-lenis.scroll * 0.05}px, 0)`;
      }
    });
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector<HTMLElement>(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -80 }); }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
  return <div ref={bar} className="spbar" aria-hidden="true" />;
}

"use client";

import { useEffect, useRef } from "react";

// Background video that only plays while it is on screen and the tab is visible.
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { v.pause(); return; }
    let visible = true;
    const sync = () => { if (visible && !document.hidden) v.play().catch(() => {}); else v.pause(); };
    const io = new IntersectionObserver((en) => { visible = en[0].isIntersecting; sync(); }, { threshold: 0.05 });
    io.observe(v);
    document.addEventListener("visibilitychange", sync);
    return () => { io.disconnect(); document.removeEventListener("visibilitychange", sync); };
  }, []);
  return (
    <video ref={ref} autoPlay muted loop playsInline preload="metadata" poster="/hero-poster.jpg" aria-hidden="true">
      <source src="/hero-bg.webm" type="video/webm" />
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}

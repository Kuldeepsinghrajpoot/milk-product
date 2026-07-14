"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin orange scroll-progress bar that sits fixed at the very top of the page,
 * below the sticky navbar (z-40 so it's under the navbar z-50).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #EA580C 0%, #FBBF24 60%, #EA580C 100%)",
      }}
    />
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

type WaveDividerProps = {
  /** top color of the wave (the section above) */
  fromColor?: string;
  /** bottom color of the wave (the section below) */
  toColor?: string;
  /** flip vertically */
  flip?: boolean;
};

/**
 * Animated milk-wave SVG divider between sections.
 * The wave slowly undulates — gives a flowing-liquid feel.
 */
export default function WaveDivider({
  fromColor = "#fff7ed",
  toColor = "#ffffff",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{
        backgroundColor: toColor,
        transform: flip ? "scaleY(-1)" : undefined,
        marginTop: "-2px",
        marginBottom: "-2px",
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
      >
        {/* Static base wave */}
        <motion.path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          fill={fromColor}
          animate={{
            d: [
              "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z",
              "M0,25 C240,0 480,80 720,25 C960,0 1200,80 1440,25 L1440,0 L0,0 Z",
              "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Overlay wave with slight opacity for depth */}
        <motion.path
          d="M0,55 C360,20 720,70 1080,30 C1260,10 1380,50 1440,55 L1440,0 L0,0 Z"
          fill={fromColor}
          fillOpacity={0.5}
          animate={{
            d: [
              "M0,55 C360,20 720,70 1080,30 C1260,10 1380,50 1440,55 L1440,0 L0,0 Z",
              "M0,35 C360,65 720,20 1080,55 C1260,70 1380,25 1440,35 L1440,0 L0,0 Z",
              "M0,55 C360,20 720,70 1080,30 C1260,10 1380,50 1440,55 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
}

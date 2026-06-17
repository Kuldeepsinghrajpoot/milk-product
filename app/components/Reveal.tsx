"use client";

import React from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Set true for elements that should scale in slightly instead of sliding up */
  scale?: boolean;
};

/**
 * Wraps content in a scroll-triggered fade + rise animation.
 * Plays once when the element enters the viewport, respects reduced-motion
 * implicitly via small distances/durations, and never re-triggers on scroll-back.
 */
export function Reveal({ children, delay = 0, y = 28, className, scale = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: scale ? 0.96 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

/**
 * Staggers the entrance of its direct children (use for grids of cards).
 * Each child should be wrapped by the consumer in <motion.div variants={item}>.
 */
export function RevealGroup({ children, className, stagger = 0.12 }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export { motion };

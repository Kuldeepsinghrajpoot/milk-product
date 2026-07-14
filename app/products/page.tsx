

"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Droplets,
  Milk,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import MilkPouch from "../components/MilkPouch";
import WaveDivider from "../components/WaveDivider";
import ScrollProgress from "../components/ScrollProgress";

type MilkType = {
  name: string;
  tagline: string;
  fat: string;
  snf: string;
  description: string;
  packs: string[];
  accent: string;
  color: string;
  liquid: string;
};

const MILK_TYPES: MilkType[] = [
  {
    name: "Toned Milk",
    tagline: "Everyday milk for the whole family",
    fat: "3% Fat",
    snf: "8.5% SNF",
    description:
      "A lighter, well-balanced milk that's the household staple across India — ideal for tea, cooking, and daily drinking.",
    packs: ["200 ml pouch", "500 ml pouch", "1 L pouch", "1 L Tetra Pak (UHT)"],
    accent: "orange",
    color: "#EA580C",
    liquid: "#FED7AA",
  },
  {
    name: "Full Cream Milk",
    tagline: "Rich, creamy, and packed with nutrition",
    fat: "6% Fat",
    snf: "9% SNF",
    description:
      "Our richest variant, standardized for a thick mouthfeel and higher energy content — popular for desserts, paneer-making, and growing children.",
    packs: ["200 ml Tetra Pak", "500 ml pouch", "1 L pouch", "1 L Tetra Pak (UHT)"],
    accent: "amber",
    color: "#D97706",
    liquid: "#FDE68A",
  },
  {
    name: "Double Toned Milk",
    tagline: "Low-fat milk for the health-conscious",
    fat: "1.5% Fat",
    snf: "9% SNF",
    description:
      "Skimmed of most of its fat while keeping the protein and calcium intact — a favourite for fitness-focused households.",
    packs: ["500 ml pouch", "1 L pouch"],
    accent: "blue",
    color: "#2563EB",
    liquid: "#BFDBFE",
  },
  {
    name: "Standardized Milk",
    tagline: "Balanced taste, consistent quality",
    fat: "4.5% Fat",
    snf: "8.5% SNF",
    description:
      "Sits between Toned and Full Cream — a consistent, mid-range fat profile that bottlers and retailers stock as a balanced default.",
    packs: ["500 ml pouch", "1 L pouch"],
    accent: "green",
    color: "#16A34A",
    liquid: "#BBF7D0",
  },
];

const COMING_SOON = [
  { name: "Curd (Dahi)", note: "Set in incubation rooms at 37°C–42°C" },
  { name: "Ghee", note: "Traditional pre-stratification, Agmark grade" },
  { name: "Paneer", note: "Citric coagulation, pneumatic pressing" },
  { name: "Butter", note: "Cultured cream, slow-churned" },
  { name: "Buttermilk (Chaas)", note: "Spiced and plain variants" },
];

const accentClasses: Record<string, { bg: string; text: string; border: string; chip: string; glow: string }> = {
  orange: { bg: "bg-orange-50/60", text: "text-orange-600", border: "border-orange-200", chip: "bg-white text-orange-700 border-orange-200", glow: "shadow-orange-200" },
  amber: { bg: "bg-amber-50/60", text: "text-amber-600", border: "border-amber-200", chip: "bg-white text-amber-700 border-amber-200", glow: "shadow-amber-200" },
  blue: { bg: "bg-blue-50/60", text: "text-blue-600", border: "border-blue-200", chip: "bg-white text-blue-700 border-blue-200", glow: "shadow-blue-200" },
  green: { bg: "bg-green-50/60", text: "text-green-600", border: "border-green-200", chip: "bg-white text-green-700 border-green-200", glow: "shadow-green-200" },
};

/* ────────────────────────────────────────────────────────────────
   DRAGGABLE CAROUSEL
──────────────────────────────────────────────────────────────── */
function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const total = MILK_TYPES.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
  };

  const milk = MILK_TYPES[current];
  const accent = accentClasses[milk.accent];

  return (
    <div className="relative">
      {/* Sticky filter/tab bar on mobile */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur border-b border-slate-100 py-3 mb-10 -mx-4 px-4 md:static md:bg-transparent md:border-none md:py-0 md:mb-12 md:mx-0 md:px-0">
        <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
          {MILK_TYPES.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setCurrent(i)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                current === i
                  ? `${accentClasses[m.accent].bg} ${accentClasses[m.accent].text} ${accentClasses[m.accent].border}`
                  : "text-slate-500 border-transparent hover:bg-slate-100"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Carousel Card */}
      <div
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="select-none"
      >
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-3xl border-2 ${accent.border} ${accent.bg} p-8 lg:p-14 shadow-xl ${accent.glow}`}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Milk Pouch illustration — bigger in carousel */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "backOut" }}
              className="shrink-0"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MilkPouch
                  color={milk.color}
                  fill={milk.liquid}
                  label={milk.name}
                  fat={milk.fat}
                  className="w-40 lg:w-52 drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${accent.chip}`}>{milk.fat}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${accent.chip}`}>{milk.snf}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">{milk.name}</h2>
              <p className={`text-base font-semibold ${accent.text} mb-5`}>{milk.tagline}</p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">{milk.description}</p>

              <div className="border-t border-slate-200/70 pt-6">
                <div className="flex items-center justify-center lg:justify-start text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                  <Package className="w-4 h-4 mr-2" /> Available Packaging
                </div>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {milk.packs.map((pack) => (
                    <motion.span
                      key={pack}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center text-sm font-medium text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm"
                    >
                      <CheckCircle2 className={`w-4 h-4 mr-2 ${accent.text}`} />
                      {pack}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows + Dots */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {MILK_TYPES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                current === i ? "w-8 h-3 bg-blue-600" : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="text-slate-400 text-sm font-medium">
          {current + 1} / {total}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   PAGE
──────────────────────────────────────────────────────────────── */
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <ScrollProgress />
      <main>
        {/* HERO */}
        <section className="relative pt-20 pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50/30 overflow-hidden">
          <motion.div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-blue-700 font-bold text-sm tracking-widest uppercase mb-6 bg-blue-100 px-4 py-2 rounded-full">
                <Milk className="w-4 h-4" />
                <span>Our Products</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Pure milk, precisely standardized.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Every variant is fat-and-SNF standardized on the same automated lines, pasteurized within hours of
                collection, and packed in formats built for retail and bulk B2B supply.
              </p>
            </div>
          </Reveal>
        </section>

        <WaveDivider fromColor="#eff6ff" toColor="#ffffff" />

        {/* ═══ PRODUCT CAROUSEL ═══ */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Milk Variants</h2>
                <p className="text-slate-500">Swipe, drag, or use arrows to explore our range</p>
              </div>
            </Reveal>
            <ProductCarousel />
          </div>
        </section>

        <WaveDivider fromColor="#ffffff" toColor="#f8fafc" />

        {/* COMING SOON */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-200 text-slate-600 rounded-xl mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">More from our lines, soon.</h2>
                <p className="text-slate-600 mt-4">
                  Curd, ghee, paneer and more are already running on our fermented and ghee-processing lines —
                  retail packaging for these is on its way.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {COMING_SOON.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden hover:border-blue-300 transition-colors"
                  >
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-3 right-3 inline-flex items-center gap-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    >
                      Soon
                    </motion.span>
                    <Droplets className="w-8 h-8 text-blue-400 mb-6 mt-2" />
                    <h4 className="font-bold text-slate-900 mb-1">{item.name}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.note}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900" />
          <motion.div
            className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          />
          <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Want a custom SKU or pack size?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Our OEM line can format any of these variants under your own private label.
              </p>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl cursor-pointer"
                >
                  Talk to our team <ArrowRight className="ml-2 w-5 h-5" />
                </motion.span>
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

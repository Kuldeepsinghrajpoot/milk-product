"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  Milk,
  Package,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import MilkPouch from "../components/MilkPouch";

type MilkType = {
  name: string;
  tagline: string;
  fat: string;
  snf: string;
  description: string;
  packs: string[];
  accent: string; // tailwind color stem, e.g. "orange"
  color: string; // hex used inside the MilkPouch illustration
  liquid: string; // light hex tint used for the illustration's liquid fill
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

const accentClasses: Record<string, { bg: string; text: string; border: string; chip: string }> = {
  orange: { bg: "bg-orange-50/60", text: "text-orange-600", border: "border-orange-100 hover:border-orange-300", chip: "bg-white text-orange-700 border-orange-200" },
  amber: { bg: "bg-amber-50/60", text: "text-amber-600", border: "border-amber-100 hover:border-amber-300", chip: "bg-white text-amber-700 border-amber-200" },
  blue: { bg: "bg-blue-50/60", text: "text-blue-600", border: "border-blue-100 hover:border-blue-300", chip: "bg-white text-blue-700 border-blue-200" },
  green: { bg: "bg-green-50/60", text: "text-green-600", border: "border-green-100 hover:border-green-300", chip: "bg-white text-green-700 border-green-200" },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <main>
        {/* HERO */}
        <section className="relative pt-20 pb-24 bg-orange-50/30 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 C30,40 70,40 100,0 L100,100 L0,100 Z" fill="url(#prod-grad)" />
              <defs>
                <linearGradient id="prod-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "rgb(255,237,213)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "rgb(255,255,255)", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-orange-700 font-bold text-sm tracking-widest uppercase mb-6 bg-orange-100 px-4 py-2 rounded-full">
                <Milk className="w-4 h-4" />
                <span>Our Products</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Pure milk, precisely standardized.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Every variant is fat-and-SNF standardized on the same automated lines, pasteurized within hours
                of collection, and packed in formats built for retail and bulk B2B supply.
              </p>
            </div>
          </Reveal>
        </section>

        {/* MILK TYPES */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {MILK_TYPES.map((milk, i) => {
                const accent = accentClasses[milk.accent];
                return (
                  <Reveal key={milk.name} delay={i * 0.1}>
                    <div className={`h-full rounded-2xl p-6 sm:p-8 lg:p-10 border transition-all ${accent.bg} ${accent.border}`}>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                        <MilkPouch
                          color={milk.color}
                          fill={milk.liquid}
                          label={milk.name}
                          fat={milk.fat}
                          className="w-28 sm:w-24 lg:w-28 shrink-0 drop-shadow-md"
                        />
                        <div className="text-center sm:text-left">
                          <h3 className="text-2xl font-bold text-slate-900">{milk.name}</h3>
                          <p className="text-slate-500 text-sm mb-3">{milk.tagline}</p>
                          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${accent.chip}`}>{milk.fat}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${accent.chip}`}>{milk.snf}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 leading-relaxed text-sm">{milk.description}</p>

                      <div className="border-t border-slate-200/70 pt-5">
                        <div className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                          <Package className="w-4 h-4 mr-2" /> Available Packaging
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {milk.packs.map((pack) => (
                            <span key={pack} className="inline-flex items-center text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg">
                              <CheckCircle2 className={`w-3.5 h-3.5 mr-1.5 ${accent.text}`} />
                              {pack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

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
                  <div className="relative h-full bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden grayscale-[0.3] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-3 right-3 inline-flex items-center gap-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    >
                      Coming Soon
                    </motion.span>
                    <Droplets className="w-8 h-8 text-slate-400 mb-6 mt-2" />
                    <h4 className="font-bold text-slate-900 mb-1">{item.name}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-orange-600">
          <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Want a custom SKU or pack size?
              </h2>
              <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
                Our OEM line can format any of these variants under your own private label.
              </p>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center bg-white text-orange-700 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl cursor-pointer"
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

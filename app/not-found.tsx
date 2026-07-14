"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, Droplets } from "lucide-react";
import Logo from "./components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background blobs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-100/60 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-green-100/50 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating milk drops */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-300/20 pointer-events-none"
          style={{
            width: 8 + (i % 3) * 6,
            height: 8 + (i % 3) * 6,
            left: `${10 + i * 14}%`,
            bottom: 0,
          }}
          animate={{ y: [0, -500], opacity: [0, 0.6, 0] }}
          transition={{ duration: 6 + i, delay: i * 0.7, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-20 w-auto object-contain" />
        </div>

        {/* 404 number */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Droplets className="w-10 h-10 text-blue-300" />
            <span className="text-9xl font-black text-blue-700/20 leading-none select-none">
              404
            </span>
            <Droplets className="w-10 h-10 text-blue-300" />
          </div>
        </motion.div>

        {/* Message */}
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
          Yeh page nahi mila!
        </h1>
        <p className="text-slate-500 text-lg mb-2">
          Lagta hai aap galat raaste pe aa gaye.
        </p>
        <p className="text-slate-400 text-sm mb-10">
          Jo page aap dhundh rahe hain woh exist nahi karta ya move ho gaya hai.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-200 transition-colors cursor-pointer"
            >
              <Home className="w-5 h-5" />
              Home Par Jao
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-bold px-8 py-4 rounded-xl transition-colors cursor-pointer"
            >
              Contact Karo <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>

        {/* Tagline */}
        <p className="mt-12 text-xs font-bold tracking-widest uppercase text-slate-300">
          गंगा अमृत · शुद्धता का वादा
        </p>
      </motion.div>
    </div>
  );
}
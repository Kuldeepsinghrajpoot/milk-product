"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on very first visit per session
    const seen = sessionStorage.getItem("ga_splash_seen");
    if (!seen) {
      setShow(true);
      sessionStorage.setItem("ga_splash_seen", "true");
      const t = setTimeout(() => setShow(false), 2200);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating drops */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-200/40 pointer-events-none"
              style={{
                width: 8 + (i % 4) * 5,
                height: 8 + (i % 4) * 5,
                left: `${8 + i * 11}%`,
                bottom: 0,
              }}
              animate={{ y: [0, -600], opacity: [0, 0.7, 0] }}
              transition={{ duration: 2.2, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo bounce in */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="h-32 w-auto object-contain drop-shadow-xl" />
            </motion.div>

            {/* Tagline fade in */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-blue-700 font-black text-xl tracking-widest uppercase"
            >
              शुद्धता का वादा
            </motion.p>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-1.5 mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-600"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
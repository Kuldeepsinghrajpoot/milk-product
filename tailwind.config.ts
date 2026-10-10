import type { Config } from "tailwindcss";

// Preflight is off so the existing design CSS in app/globals.css stays exactly as designed.
// Tailwind utilities (flex, grid, mt-4, ...) are still available for new work.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        acc: "#1d4ed0",
        acc2: "#5b8def",
        tint: "#ecf2ff",
        cream: "#f8f5f0",
      },
    },
  },
  plugins: [],
};
export default config;

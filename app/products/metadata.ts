// app/products/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Pure Milk Variants",
  description:
    "Explore Ganga Amrit's range — Toned, Full Cream, Double Toned and Standardized milk in bulk B2B supply across India.",
  openGraph: {
    title: "Ganga Amrit Products | Pure Milk, Precisely Standardized",
    description:
      "Fat/SNF standardized, pasteurized within hours, packed for retail and B2B supply.",
    images: [{ url: "/ganga-amrit-logo.jpeg", width: 1080, height: 1080 }],
  },
};
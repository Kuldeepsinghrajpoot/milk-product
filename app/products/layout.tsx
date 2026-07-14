import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Pure Milk Variants",
  description:
    "Explore Ganga Amrit's range of standardized milk variants — Toned, Full Cream, Double Toned and Standardized milk. Available in bulk B2B supply across India.",
  openGraph: {
    title: "Ganga Amrit Products | Pure Milk, Precisely Standardized",
    description:
      "Toned, Full Cream, Double Toned & Standardized milk — fat/SNF standardized, pasteurized within hours, packed for retail and B2B bulk supply.",
    images: [{ url: "/ganga-amrit-logo.jpeg", width: 1080, height: 1080 }],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
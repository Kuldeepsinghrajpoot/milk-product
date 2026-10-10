import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComingSoon from "@/components/ComingSoon";
import { CtaBox, ProcessSection, ProductsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Gold Full Cream, Chai Special and Double Toned milk from Ganga Amrit, Chhatarpur. Pouches in 180 ml, 500 ml and 1 L.",
  alternates: { canonical: "/products" },
};

export default function Page() {
  return (
    <div className="inner">
      <PageHeader kicker="Our Products" title="Fresh milk from Chhatarpur." sub="Three variants, each standardized for a consistent Fat% and SNF%. Pouches in 180 ml, 500 ml and 1 L." />
      <ProductsSection bare />
      <ComingSoon />
      <ProcessSection />
      <CtaBox />
    </div>
  );
}

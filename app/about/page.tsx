import type { Metadata } from "next";
import MilkJourneyStrip from "@/components/MilkJourneyStrip";
import PageHeader from "@/components/PageHeader";
import { AboutSection, VisionSection } from "@/components/pages";
import { CtaBox, FacilitySection, GallerySection, StepsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us | गंगा अमृत के बारे में",
  description: "About Ganga Amrit, Chhatarpur's first milk brand - a modern dairy processing fresh milk under strict quality standards.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <div className="inner">
      <PageHeader kicker="About Us | हमारे बारे में" title="About Ganga Amrit" sub="Born in Chhatarpur on 3 September 2026 - a promise of purity, freshness and trust. शुद्धता का वादा." />
      <AboutSection bare />
      <MilkJourneyStrip />
      <VisionSection />
      <StepsSection />
      <FacilitySection />
      <GallerySection />
      <CtaBox />
    </div>
  );
}

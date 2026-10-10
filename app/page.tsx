import Hero from "@/components/Hero";
import ComingSoon from "@/components/ComingSoon";
import Marquee from "@/components/Marquee";
import StatsCard from "@/components/StatsCard";
import { CtaBox, FacilitySection, FaqSection, GallerySection, JourneySection, ProductsSection, StepsSection } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCard />
      <Marquee />
      <ProductsSection />
      <ComingSoon />
      <JourneySection />
      <StepsSection />
      <GallerySection />
      <FacilitySection />
      <CtaBox />
      <FaqSection />
    </>
  );
}

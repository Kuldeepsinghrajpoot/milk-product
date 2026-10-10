import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { CtaBox, FaqSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Quick answers about Ganga Amrit milk, FSSAI and GST licences, and how to become a distributor or retailer.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <div className="inner">
      <PageHeader kicker="FAQ" title="Quick questions." sub="A few things people usually ask us." />
      <FaqSection bare />
      <CtaBox />
    </div>
  );
}

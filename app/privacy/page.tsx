import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { LegalPage } from "@/components/pages";
import { PRIVACY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Ganga Amrit website handles your information.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <div className="inner">
      <PageHeader kicker="Legal" title="Privacy Policy" sub="Last updated: October 2026" />
      <LegalPage title="Privacy Policy" items={PRIVACY} />
    </div>
  );
}

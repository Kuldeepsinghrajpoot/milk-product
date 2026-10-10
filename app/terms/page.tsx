import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { LegalPage } from "@/components/pages";
import { TERMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Ganga Amrit website.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <div className="inner">
      <PageHeader kicker="Legal" title="Terms & Conditions" sub="Last updated: October 2026" />
      <LegalPage title="Terms & Conditions" items={TERMS} />
    </div>
  );
}

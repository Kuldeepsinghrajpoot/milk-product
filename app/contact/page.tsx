import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ContactSection } from "@/components/pages";

export const metadata: Metadata = {
  title: "B2B Inquiries",
  description: "Distributor, agency, retail and bulk supply enquiries for Ganga Amrit milk, Chhatarpur, Madhya Pradesh.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <div className="inner">
      <PageHeader kicker="B2B Inquiries" title="Let's talk milk." sub="Distributor, agency, retail or bulk supply - tell us what you need and we will get back to you." />
      <ContactSection bare />
    </div>
  );
}

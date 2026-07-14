import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story Since 2026",
  description:
    "Ganga Amrit was founded in 2026 near Kanpur, UP. From a farmer cooperative to a modern dairy manufacturer processing 2 Lakh Liters daily.",
  openGraph: {
    title: "About Ganga Amrit | शुद्धता का वादा",
    description:
      "Founded in 2026. Modern dairy manufacturer processing 2 Lakh Liters daily across 12 states.",
    images: [{ url: "/ganga-amrit-logo.jpeg", width: 1080, height: 1080 }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
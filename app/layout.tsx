import type { Metadata, Viewport } from "next";
import { DM_Sans, Noto_Sans_Devanagari } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sprite from "@/components/Sprite";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingButtons from "@/components/FloatingButtons";
import { SITE, SOCIAL } from "@/lib/data";

const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], weight: ["400", "600", "700"], variable: "--font-deva", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Ganga Amrit | Milk Agency, Distributor & Dairy in Chhatarpur, MP", template: "%s | Ganga Amrit" },
  description: "Ganga Amrit - Chhatarpur's own dairy. Fresh pasteurized Gold Full Cream, Double Toned and Chai Special milk. Distributor and agency enquiries welcome.",
  icons: { icon: [{ url: "/favicon-logo.png?v=4", type: "image/png" }], shortcut: "/favicon-logo.png?v=4", apple: "/apple-logo.png?v=4" },
  openGraph: { type: "website", siteName: "Ganga Amrit", locale: "en_IN" },
};
export const viewport: Viewport = { themeColor: "#1d4ed0", width: "device-width", initialScale: 1, viewportFit: "cover" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  telephone: "+91-7415802748",
  email: SITE.email,
  sameAs: SOCIAL.filter((s) => s.name !== "WhatsApp").map((s) => s.href),
  address: { "@type": "PostalAddress", streetAddress: "Ganga Ice Factory and Milk Products, Industrial Area, Ward No. 01", addressLocality: "Chhatarpur", addressRegion: "Madhya Pradesh", postalCode: "471001", addressCountry: "IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dm.variable} ${deva.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Sprite />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <SmoothScroll />
      </body>
    </html>
  );
}

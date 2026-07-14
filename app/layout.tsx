import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(landing-page)/footer/page";
import Navbar from "./(landing-page)/navbar/page";
import NextTopLoader from "nextjs-toploader";
import BackToTop from "./components/BackToTop";
import SplashScreen from "./components/SplashScreen";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://www.gangaamrit.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ganga Amrit | India's Bulk Milk Backbone",
    template: "%s | Ganga Amrit",
  },
  description:
    "Ganga Amrit is an industrial-scale dairy manufacturer supplying fresh milk, ghee, paneer and curd for B2B distributors and private-label partners across India. Processing 15 Lakh Liters daily.",
  keywords: [
    "bulk milk supplier India",
    "dairy B2B manufacturer",
    "contract dairy manufacturing",
    "private label milk",
    "ghee manufacturer Kanpur",
    "OEM dairy India",
    "Ganga Amrit",
    "shuddhata ka vaada",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Ganga Amrit Dairy",
    title: "Ganga Amrit | शुद्धता का वादा — India's Bulk Milk Backbone",
    description:
      "Processing 15 Lakh Liters of fresh milk daily. Trusted B2B dairy partner for brands, distributors & private-label OEMs across 12 states.",
    images: [
      {
        url: "/ganga-amrit-logo.jpeg",
        width: 1080,
        height: 1080,
        alt: "Ganga Amrit — शुद्धता का वादा",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganga Amrit | India's Bulk Milk Backbone",
    description: "15 Lakh Liters/day. Trusted B2B dairy partner across 12 states. ISO 22000 certified.",
    images: ["/ganga-amrit-logo.jpeg"],
  },
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SplashScreen />
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
          <NextTopLoader color="#1d4ed8" showSpinner={false} />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
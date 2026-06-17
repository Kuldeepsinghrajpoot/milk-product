import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(landing-page)/footer/page";
import Navbar from "./(landing-page)/navbar/page";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganga Amrit | India's Bulk Milk Backbone",
  description:
    "Ganga Amrit is an industrial-scale dairy manufacturer supplying fresh milk, ghee, paneer and curd for B2B distributors and private-label partners across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
          <NextTopLoader color="#EA580C" showSpinner={false} />
          {/* Navigation */}
          <Navbar />
          {children}
          {/* footer */}
          <Footer />
        </div>
     
      </body>
    </html>
  );
}

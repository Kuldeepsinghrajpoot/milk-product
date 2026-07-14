import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ganga Amrit",
  description: "Privacy policy for Ganga Amrit Dairy — how we collect, use and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">Last updated: January 2026</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
            <p className="text-blue-800 text-sm font-medium m-0">
              Ganga Amrit Dairy Pvt. Ltd. ("we", "us", "our") is committed to protecting your privacy 
              in accordance with the Information Technology Act, 2000 and IT (Amendment) Act, 2008.
            </p>
          </div>

          {[
            {
              title: "1. Information We Collect",
              content: `When you use our website (gangaamrit.co.in) or contact us, we may collect:
              Name, company name, and job title; Email address and phone number; 
              State/city and business requirements you share via our contact form; 
              Technical data like IP address, browser type, and pages visited (via cookies).`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use collected information to: Respond to your B2B inquiries and send rate cards; 
              Send product updates or newsletters (only with your consent); 
              Improve our website and user experience; 
              Comply with legal obligations under Indian law.`,
            },
            {
              title: "3. Cookies",
              content: `We use cookies to understand how visitors interact with our website. 
              You can control cookies through your browser settings or our cookie consent banner. 
              Declining cookies will not prevent you from using our website.`,
            },
            {
              title: "4. Data Sharing",
              content: `We do not sell, trade, or rent your personal data to third parties. 
              We may share data with trusted service providers (e.g., email service) who assist 
              our operations, under strict confidentiality agreements.`,
            },
            {
              title: "5. Data Security",
              content: `We implement appropriate technical and organizational measures to protect 
              your personal data against unauthorized access, alteration, disclosure, or destruction. 
              Our website uses HTTPS encryption for all data in transit.`,
            },
            {
              title: "6. Your Rights",
              content: `You have the right to: Access the personal data we hold about you; 
              Request correction of inaccurate data; Request deletion of your data; 
              Withdraw consent for marketing communications at any time. 
              To exercise these rights, email us at partnerships@gangaamrit.co.in`,
            },
            {
              title: "7. Contact Us",
              content: `For any privacy-related questions or concerns, contact our team at:
              Ganga Amrit Dairy Pvt. Ltd., Plot 14, Ganga Industrial Estate, Panki, Kanpur, UP — 208020
              Email: partnerships@gangaamrit.co.in`,
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
          <p className="text-slate-400 text-sm">© 2026 Ganga Amrit Dairy Pvt. Ltd.</p>
          <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Back to Home →
          </Link>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Ganga Amrit",
  description: "Terms of use for Ganga Amrit Dairy website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Terms of Use</h1>
            <p className="text-slate-500 text-sm">Last updated: January 2026</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-blue-800 text-sm font-medium m-0">
            By accessing and using the Ganga Amrit website (gangaamrit.co.in), you agree to be
            bound by these Terms of Use. Please read them carefully before using our website.
          </p>
        </div>

        <div className="space-y-8 text-slate-600">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing our website, you confirm that you are at least 18 years of age, have read and understood these terms, and agree to be bound by them. If you do not agree, please discontinue use of this website immediately.",
            },
            {
              title: "2. Use of Website",
              content: "This website is intended for informational and B2B inquiry purposes only. You agree not to misuse the website, attempt to gain unauthorized access, transmit harmful or malicious content, or use the website for any unlawful purpose under Indian law.",
            },
            {
              title: "3. Intellectual Property",
              content: "All content on this website including text, images, logos, graphics, and design elements are the intellectual property of Ganga Amrit Dairy Pvt. Ltd. You may not reproduce, distribute, or use any content without prior written permission.",
            },
            {
              title: "4. B2B Inquiries & Communications",
              content: "Information submitted through our contact form is used solely for responding to your business inquiry. We do not share your information with third parties for marketing purposes. Submitting an inquiry does not constitute a binding contract or commitment from either party.",
            },
            {
              title: "5. Product Information",
              content: "Product specifications, certifications, and capacity details listed on this website are provided for informational purposes. Actual commercial terms, pricing, and availability are subject to separate agreements and may vary. We reserve the right to update product information without prior notice.",
            },
            {
              title: "6. Disclaimers",
              content: "This website is provided 'as is' without any warranties, express or implied. Ganga Amrit Dairy Pvt. Ltd. does not guarantee uninterrupted access to the website and is not liable for any technical errors, downtime, or inaccuracies in information.",
            },
            {
              title: "7. Limitation of Liability",
              content: "To the maximum extent permitted by law, Ganga Amrit Dairy Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on information provided herein.",
            },
            {
              title: "8. Governing Law",
              content: "These Terms of Use are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Kanpur, Uttar Pradesh, India.",
            },
            {
              title: "9. Changes to Terms",
              content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Continued use of the website constitutes acceptance of the revised terms.",
            },
            {
              title: "10. Contact",
              content: "For any questions regarding these Terms of Use, please contact us at info@gangaamrit.co.in or write to: Ganga Amrit Dairy Pvt. Ltd., Plot 14, Ganga Industrial Estate, Panki, Kanpur, UP — 208020.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
              <p className="leading-relaxed">{section.content}</p>
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
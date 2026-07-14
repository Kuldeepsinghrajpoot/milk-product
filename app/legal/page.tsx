import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal | Ganga Amrit",
  description: "Legal information, disclaimers and compliance details for Ganga Amrit Dairy Pvt. Ltd.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Scale className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Legal Information</h1>
            <p className="text-slate-500 text-sm">Last updated: January 2026</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-blue-800 text-sm font-medium m-0">
            This page contains important legal information about Ganga Amrit Dairy Pvt. Ltd.,
            including company registration, regulatory compliance, and statutory disclosures.
          </p>
        </div>

        <div className="space-y-8 text-slate-600">

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Company Information</h2>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              {[
                ["Registered Name", "Ganga Amrit Dairy Pvt. Ltd."],
                ["Type", "Private Limited Company"],
                ["Registered Office", "Plot 14, Ganga Industrial Estate, Panki, Kanpur, UP — 208020"],
                ["State of Incorporation", "Uttar Pradesh, India"],
                ["Email", "info@gangaamrit.co.in"],
                ["Website", "www.gangaamrit.co.in"],
              ].map(([label, value]) => (
                <div key={label} className="flex border-b border-slate-200 last:border-none">
                  <div className="w-2/5 px-5 py-3 font-bold text-slate-700 text-sm bg-slate-100/60">{label}</div>
                  <div className="w-3/5 px-5 py-3 text-slate-600 text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Regulatory & Certifications</h2>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              {[
                ["FSSAI License", "Applied / In Process"],
                ["ISO 22000:2018", "Food Safety Management System"],
                ["FSSC 22000", "Food Safety System Certification"],
                ["HACCP", "Hazard Analysis Critical Control Points"],
                ["Agmark", "Special Grade Certified"],
                ["Export EIA", "Export Inspection Agency Approved"],
              ].map(([label, value]) => (
                <div key={label} className="flex border-b border-slate-200 last:border-none">
                  <div className="w-2/5 px-5 py-3 font-bold text-slate-700 text-sm bg-slate-100/60">{label}</div>
                  <div className="w-3/5 px-5 py-3 text-slate-600 text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {[
            {
              title: "Disclaimer",
              content: "The information on this website is provided for general informational purposes only. While we strive to keep information accurate and up to date, Ganga Amrit Dairy Pvt. Ltd. makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information on this website.",
            },
            {
              title: "No Commercial Offer",
              content: "Nothing on this website constitutes a commercial offer, tender, or binding quote. All business transactions, supply agreements, and commercial terms are subject to separate written contracts duly signed by authorized representatives of Ganga Amrit Dairy Pvt. Ltd.",
            },
            {
              title: "Third Party Links",
              content: "Our website may contain links to third-party websites for reference purposes. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.",
            },
            {
              title: "Modern Slavery Statement",
              content: "Ganga Amrit Dairy Pvt. Ltd. is committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business. We operate in full compliance with applicable Indian labour laws including the Contract Labour Act and Minimum Wages Act.",
            },
            {
              title: "Governing Law & Jurisdiction",
              content: "All legal matters relating to this website and our business operations are governed exclusively by the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of competent courts in Kanpur, Uttar Pradesh.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Related links */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Related Legal Documents</h3>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Privacy Policy
              </Link>
              <Link href="/terms" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Terms of Use
              </Link>
            </div>
          </div>

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
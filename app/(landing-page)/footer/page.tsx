"use client";

import { Award, Mail, MapPin, Phone, ArrowRight, Youtube, Instagram, Linkedin, Facebook, Home, Package, Info, PhoneCall } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../../components/Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/", icon: <Home className="w-3.5 h-3.5" /> },
  { label: "Products", href: "/products", icon: <Package className="w-3.5 h-3.5" /> },
  { label: "About Us", href: "/about", icon: <Info className="w-3.5 h-3.5" /> },
  { label: "Contact", href: "/contact", icon: <PhoneCall className="w-3.5 h-3.5" /> },
];

const CERTIFICATIONS = [
  "ISO 22000:2018",
  "FSSC 22000",
  "HACCP & GMP",
  "FSSAI Licensed",
  "Export EIA Approved",
  "Agmark Certified",
];

const SOCIALS = [
  { Icon: Linkedin,  href: "#", label: "LinkedIn",  color: "hover:bg-blue-700" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { Icon: Facebook,  href: "#", label: "Facebook",  color: "hover:bg-blue-600" },
  { Icon: Youtube,   href: "#", label: "YouTube",   color: "hover:bg-red-600"  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">

      {/* Tagline strip */}
      <div className="bg-blue-700 py-4 px-4">
        <p className="text-center text-white font-black text-lg tracking-widest uppercase">
          गंगा अमृत &nbsp;·&nbsp; शुद्धता का वादा
        </p>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Logo className="h-16 w-auto object-contain brightness-110" />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6 max-w-xs">
              India's trusted industrial dairy partner — processing{" "}
              <strong className="text-slate-300">2 Lakh Liters</strong> of fresh milk daily for
              brands, distributors &amp; private-label OEMs across 12 states.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Certifications */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Accreditations</h4>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert} className="flex items-center text-sm font-medium">
                  <Award className="w-4 h-4 mr-3 text-blue-500 shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact HQ</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5" />
                <span className="group-hover:text-slate-300 transition-colors leading-relaxed">
                  Plot 14, Ganga Industrial Estate,<br />
                  Panki, Kanpur, UP — 208020
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center group">
                  <Phone className="w-5 h-5 mr-3 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                  <span className="group-hover:text-white transition-colors">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@gangaamrit.co.in" className="flex items-center group">
                  <Mail className="w-5 h-5 mr-3 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                  <span className="group-hover:text-white transition-colors break-all">
                    info@gangaamrit.co.in
                  </span>
                </a>
              </li>
            </ul>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center mt-6 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                B2B Inquiry <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide text-slate-600">
          <p>© {new Date().getFullYear()} Ganga Amrit Dairy Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
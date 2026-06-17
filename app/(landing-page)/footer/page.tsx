'use client';

import { Award, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import { Reveal } from '../../components/Reveal';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 pr-8">
            <div className="flex items-center text-white mb-6">
              <Logo className="h-9 w-9 mr-3" />
              <span className="font-black text-2xl tracking-tighter">
                Ganga Amrit<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="max-w-md mb-8 text-sm leading-relaxed text-slate-500">
              Ganga Amrit Dairy is a next-generation contract manufacturer for the dairy and functional
              beverage sectors. We are committed to sustainable practices and technological leadership.
            </p>
            <div className="flex space-x-3">
              <Link
                href="/products"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-slate-800 hover:border-orange-600 hover:text-orange-400 transition-colors"
              >
                Our Products
              </Link>
              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-slate-800 hover:border-orange-600 hover:text-orange-400 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Accreditations</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-orange-500" /> ISO 22000:2018</li>
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-orange-500" /> FSSC 22000</li>
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-orange-500" /> HACCP & GMP</li>
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-orange-500" /> FSSAI Licensed</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact HQ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group cursor-pointer">
                <MapPin className="w-5 h-5 mr-3 text-slate-600 group-hover:text-orange-500 transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">
                  Plot 14, Ganga Industrial Estate,<br />Panki, Kanpur, Uttar Pradesh 208020
                </span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <Phone className="w-5 h-5 mr-3 text-slate-600 group-hover:text-orange-500 transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <Mail className="w-5 h-5 mr-3 text-slate-600 group-hover:text-orange-500 transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">partnerships@gangaamrit.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 text-xs font-medium tracking-wide flex flex-col md:flex-row justify-between items-center text-slate-600">
          <p>© {new Date().getFullYear()} Ganga Amrit Dairy Pvt. Ltd.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Slavery Statement</a>
            <a href="#" className="hover:text-white transition-colors">Privacy & Cookies</a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

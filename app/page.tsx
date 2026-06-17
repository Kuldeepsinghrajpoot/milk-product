"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from './components/Reveal';
import {
  Droplet,
  Milk,
  Store,
  ThermometerSun,
  CheckCircle2,
  ShieldCheck,
  Award,
  Factory,
  Truck,
  Users,
  IndianRupee,
  Cog,
  ThermometerSnowflake,
  FlaskConical,
  Leaf,
  Recycle,
  Sun,
  History,
  HelpCircle,
  ChevronDown,
  Cpu,
  Database,
  Server,
  Zap,
  Warehouse,
  ArrowRight
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <main>
        {/* HERO SECTION: B2B/Industrial Focus */}
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-orange-50/30">
          <div className="absolute inset-0 overflow-hidden opacity-10">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,0 C30,40 70,40 100,0 L100,100 L0,100 Z" fill="url(#grad1)"/>
               <defs>
                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" style={{stopColor:'rgb(255,237,213)', stopOpacity:1}} />
                   <stop offset="100%" style={{stopColor:'rgb(255,255,255)', stopOpacity:1}} />
                 </linearGradient>
               </defs>
             </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="inline-flex items-center space-x-2 text-orange-700 font-bold text-sm tracking-widest uppercase mb-8 bg-orange-100 px-4 py-2 rounded-full">
                    <Factory className="w-4 h-4" />
                    <span>The Modern Doodh Factory</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                  India's Bulk
                  <span className="text-orange-600"> Milk Backbone.</span>
                </h1>
                <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-lg">
                  We are the silent engine behind the nation's dairy brands. Processing 15 Lakh Liters of fresh Doodh daily for industrial B2B supply across 12 states.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-orange-600 hover:bg-orange-700 transition-all rounded-lg shadow-lg shadow-orange-200">
                    Become a Distributor
                  </Link>
                  <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-orange-600 hover:text-orange-600 transition-all rounded-lg">
                    OEM/Co-Packing Inquiry
                  </Link>
                </div>

                {/* Quick Trust Signals */}
                <div className="mt-12 pt-8 border-t border-orange-200/50 flex flex-wrap gap-6 items-center">
                    <span className="flex items-center font-bold text-slate-600 text-sm bg-white px-3 py-1 rounded shadow-sm border border-slate-100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/FSSAI_logo.png/900px-FSSAI_logo.png" alt="FSSAI" className="h-5 mr-2" />
                        Lic. No. 100123456789
                    </span>
                    <span className="flex items-center font-bold text-slate-600 text-sm">
                        <Award className="w-5 h-5 mr-2 text-orange-600" /> ISO 22000:2018
                    </span>
                     <span className="flex items-center font-bold text-slate-600 text-sm">
                        <Award className="w-5 h-5 mr-2 text-orange-600" /> Export EIA Approved
                    </span>
                </div>
              </Reveal>

              <Reveal delay={0.15} scale>
                <div className="relative mt-16 lg:mt-0">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img
                    src="/hero.png"
                    alt="Industrial milk processing silos"
                    className="w-full h-full object-cover"
                  />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/60 to-transparent p-6">
                       {/* <p className="text-white font-medium"><span className="text-orange-400">Site:</span> National Milk Grid Hub, Haryana</p> */}
                   </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-50 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-orange-100 rounded-full -z-10"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="relative z-20 -mt-24 px-4">
            <Reveal delay={0.1}>
             <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <div className="pb-8 md:pb-0 md:pr-8 text-center md:text-left flex flex-col justify-center">
                        <div className="flex items-center justify-center md:justify-start text-orange-600 mb-3">
                            <Droplet className="w-6 h-6 mr-2" />
                            <span className="font-bold uppercase tracking-wider text-sm">Processing Capacity</span>
                        </div>
                        <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                            15 LLPD
                        </div>
                        <div className="text-slate-500 text-sm mt-2 font-medium">Lakh Liters Per Day (Expandable to 25)</div>
                    </div>
                     <div className="py-8 md:py-0 md:px-8 text-center md:text-left flex flex-col justify-center">
                        <div className="flex items-center justify-center md:justify-start text-green-600 mb-3">
                            <Users className="w-6 h-6 mr-2" />
                            <span className="font-bold uppercase tracking-wider text-sm">Direct Procurement</span>
                        </div>
                        <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                            1,200+
                        </div>
                         <div className="text-slate-500 text-sm mt-2 font-medium">Villages with Automated Collection (AMCS)</div>
                    </div>
                     <div className="pt-8 md:pt-0 md:pl-8 text-center md:text-left flex flex-col justify-center">
                        <div className="flex items-center justify-center md:justify-start text-blue-600 mb-3">
                            <Truck className="w-6 h-6 mr-2" />
                            <span className="font-bold uppercase tracking-wider text-sm">Dealer Network</span>
                        </div>
                        <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                            12 States
                        </div>
                         <div className="text-slate-500 text-sm mt-2 font-medium">Supported by 200+ Reefer Trucks</div>
                    </div>
                </div>
             </div>
            </Reveal>
        </section>

        {/* Factory Operations Detail */}
        <section className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-orange-600 font-bold uppercase tracking-widest mb-4">Factory Operations</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-6">From Farm to Factory Gate.</h3>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Our vertically integrated supply chain ensures traceability and quality control at every step before it reaches our dealers.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Op Card 1 */}
                    <Reveal delay={0}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-6">
                            <Store className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">1. Collection (VLCCs)</h4>
                        <p className="text-slate-600 leading-relaxed">
                            Milk sourced directly via <strong>Village Level Collection Centers</strong> equipped with AMCS for instant Fat% & SNF% testing, ensuring transparency with our 50,000+ farmers.
                        </p>
                    </div>
                    </Reveal>
                    {/* Op Card 2 */}
                    <Reveal delay={0.12}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                         <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                            <ThermometerSnowflake className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">2. "Zero-Hour" Chilling</h4>
                        <p className="text-slate-600 leading-relaxed">
                            80% of procurement is chilled to <strong>4°C within 60 minutes</strong> of milking at cluster Bulk Milk Coolers (BMCs), drastically reducing bacterial load (MBRT {'>'} 5 hrs).
                        </p>
                    </div>
                    </Reveal>
                    {/* Op Card 3 */}
                    <Reveal delay={0.24}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                         <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center mb-6">
                            <Cog className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">3. Core Processing</h4>
                        <p className="text-slate-600 leading-relaxed">
                            High-speed clarification followed by <strong>2-stage homogenization at 200 Bar</strong> pressure and 5-stage Plate Heat Exchanger (PHE) pasteurization.
                        </p>
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>

        {/* NEW: Industrial Infrastructure Deep Dive */}
        <section className="py-32 bg-white overflow-hidden">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="lg:flex items-start gap-16">
                     <Reveal className="lg:w-2/5 mb-16 lg:mb-0 lg:sticky lg:top-32">
                     <div>
                        <div className="inline-flex items-center space-x-2 text-slate-500 font-bold text-sm tracking-widest uppercase mb-6 bg-slate-100 px-4 py-2 rounded-full">
                            <Database className="w-4 h-4" />
                            <span>Infrastructure & Assets</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Built for Uninterrupted Scale.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Our facility is designed for N+1 redundancy across all critical utilities, ensuring 99.9% operational uptime for our contract manufacturing partners.
                        </p>
                         <div className="p-6 bg-slate-900 text-slate-300 rounded-2xl">
                             <h4 className="text-white font-bold mb-4 flex items-center">
                                 <Cpu className="w-5 h-5 mr-2 text-orange-500" />
                                 Industry 4.0 Ready
                             </h4>
                             <p className="text-sm leading-relaxed">
                                 Entire plant operation is monitored via a central <strong>SCADA</strong> system, providing real-time data on flow rates, temperatures, and valve status to our control room.
                             </p>
                         </div>
                     </div>
                     </Reveal>

                     <div className="lg:w-3/5 grid sm:grid-cols-2 gap-6">
                         {/* Asset Card 1 */}
                         <Reveal delay={0}>
                         <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors group h-full">
                             <Warehouse className="w-10 h-10 text-slate-400 mb-6 group-hover:text-orange-600 transition-colors" />
                             <h3 className="text-xl font-bold text-slate-900 mb-2">Raw Milk Silos</h3>
                             <p className="text-4xl font-extrabold text-slate-900 mb-1">25 LL</p>
                             <p className="text-slate-500 font-medium text-sm">Total storage capacity (5 x 500KL insulated silos)</p>
                         </div>
                         </Reveal>
                         {/* Asset Card 2 */}
                         <Reveal delay={0.1}>
                         <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors group h-full">
                             <ThermometerSnowflake className="w-10 h-10 text-slate-400 mb-6 group-hover:text-blue-600 transition-colors" />
                             <h3 className="text-xl font-bold text-slate-900 mb-2">Cold Warehouse</h3>
                             <p className="text-4xl font-extrabold text-slate-900 mb-1">4,500 MT</p>
                             <p className="text-slate-500 font-medium text-sm">Automated pallet storage (-18°C & 4°C zones)</p>
                         </div>
                         </Reveal>
                          {/* Asset Card 3 */}
                         <Reveal delay={0.2}>
                         <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors group h-full">
                             <Zap className="w-10 h-10 text-slate-400 mb-6 group-hover:text-yellow-500 transition-colors" />
                             <h3 className="text-xl font-bold text-slate-900 mb-2">Power Backup</h3>
                             <p className="text-4xl font-extrabold text-slate-900 mb-1">100%</p>
                             <p className="text-slate-500 font-medium text-sm">3 x 2000 kVA DG Sets with auto-changeover</p>
                         </div>
                         </Reveal>
                          {/* Asset Card 4 */}
                         <Reveal delay={0.3}>
                         <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors group h-full">
                             <Server className="w-10 h-10 text-slate-400 mb-6 group-hover:text-green-600 transition-colors" />
                             <h3 className="text-xl font-bold text-slate-900 mb-2">Tech Partners</h3>
                             <div className="flex flex-wrap gap-2 mt-3">
                                 <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 border">Tetra Pak</span>
                                 <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 border">GEA</span>
                                 <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 border">Alfa Laval</span>
                             </div>
                         </div>
                         </Reveal>
                     </div>
                 </div>
             </div>
        </section>

        {/* NEW: SUSTAINABILITY SECTION (Adapted for Industrial Context) */}
        <section className="py-24 bg-green-900 text-green-50 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                 <Reveal className="lg:w-1/2">
                 <div>
                    <div className="inline-flex items-center space-x-2 text-green-300 font-bold text-sm tracking-widest uppercase mb-6 bg-green-800/50 px-4 py-2 rounded-full">
                        <Leaf className="w-4 h-4" />
                        <span>ESG Commitment</span>
                    </div>
                    <h2 className="text-4xl font-extrabold mb-6 leading-tight">Responsible Manufacturing.</h2>
                    <p className="text-lg text-green-100/80 leading-relaxed mb-8">
                        Modern dairy isn't just about efficiency; it's about responsibility. Our Kanpur facility operates on a closed-loop system designed to meet rigorous international ESG standards.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                            <Recycle className="h-6 w-6 text-green-400 shrink-0" />
                            <span className="font-medium">100% water recycled via on-site ETP/STP for irrigation.</span>
                        </li>
                        <li className="flex items-center space-x-3">
                             <Sun className="h-6 w-6 text-green-400 shrink-0" />
                            <span className="font-medium">2MW Solar Plant powers 40% of daytime operations.</span>
                        </li>
                        <li className="flex items-center space-x-3">
                             <Leaf className="h-6 w-6 text-green-400 shrink-0" />
                            <span className="font-medium">Biogas generation from organic dairy waste.</span>
                        </li>
                    </ul>
                </div>
                </Reveal>
                <Reveal delay={0.15} className="lg:w-1/2 grid grid-cols-2 gap-6">
                    <div className="bg-green-800/30 backdrop-blur-sm p-8 rounded-3xl border border-green-700/30 text-center">
                         <div className="text-5xl font-black text-green-400 mb-2">-30%</div>
                         <div className="text-xs uppercase tracking-widest font-bold text-green-200">Carbon Footprint</div>
                    </div>
                    <div className="bg-green-800/30 backdrop-blur-sm p-8 rounded-3xl border border-green-700/30 text-center">
                         <div className="text-5xl font-black text-green-400 mb-2">ZERO</div>
                         <div className="text-xs uppercase tracking-widest font-bold text-green-200">Liquid Discharge (ZLD)</div>
                    </div>
                </Reveal>
             </div>
        </section>

        {/* Capabilities Section: DETAILED SPECS */}
        <section id="capabilities" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-orange-600 font-bold uppercase tracking-widest mb-4">Production Lines</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Technical Specifications.</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Dedicated, automated lines for high-volume SKUs.
                </p>
                <Link href="/products" className="inline-flex items-center mt-6 text-orange-600 font-bold hover:text-orange-700 transition-colors group">
                    View full product range
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <Reveal className="grid lg:grid-cols-3 gap-8">
              {/* Card 1: Milk Specs */}
              <div className="bg-orange-50/50 rounded-2xl p-8 lg:p-10 border border-orange-100 hover:border-orange-300 transition-all">
                 <div className="flex items-center mb-6">
                     <div className="w-12 h-12 bg-white text-orange-600 shadow-sm flex items-center justify-center rounded-xl mr-4">
                        <Milk className="w-6 h-6" />
                     </div>
                     <h4 className="text-2xl font-bold text-slate-900">Fluid Milk Lines</h4>
                 </div>
                 <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                     Automated standardization for precise Fat/SNF ratios. High-speed FFS (Form-Fill-Seal) machines for pouch packing.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                         <span><strong>Variants:</strong> FCM (6/9), Toned (3/8.5), DTM (1.5/9)</span>
                     </li>
                     <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                         <span><strong>Capacity:</strong> 5 Lakh Pouches/Day</span>
                     </li>
                      <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                         <span><strong>UHT:</strong> 6-layer Aseptic Tetra Pak</span>
                      </li>
                 </ul>
              </div>

              {/* Card 2: Ghee Specs */}
              <div className="bg-yellow-50/50 rounded-2xl p-8 lg:p-10 border border-yellow-100 hover:border-yellow-300 transition-all">
                 <div className="flex items-center mb-6">
                     <div className="w-12 h-12 bg-white text-yellow-600 shadow-sm flex items-center justify-center rounded-xl mr-4">
                        <ThermometerSun className="w-6 h-6" />
                     </div>
                     <h4 className="text-2xl font-bold text-slate-900">Ghee Processing</h4>
                 </div>
                 <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                     Traditional pre-stratification method with modern clarification at <strong>115°C</strong> for authentic 'Danedar' texture.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-3 shrink-0" />
                         <span><strong>Tech:</strong> Proprietary Aroma Recovery System</span>
                     </li>
                     <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-3 shrink-0" />
                         <span><strong>Packing:</strong> Automated Tin & Jar lines (N2 flushing)</span>
                     </li>
                      <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-3 shrink-0" />
                         <span><strong>Quality:</strong> Agmark Special Grade</span>
                      </li>
                 </ul>
              </div>

              {/* Card 3: Paneer Specs */}
              <div className="bg-blue-50/50 rounded-2xl p-8 lg:p-10 border border-blue-100 hover:border-blue-300 transition-all">
                 <div className="flex items-center mb-6">
                     <div className="w-12 h-12 bg-white text-blue-600 shadow-sm flex items-center justify-center rounded-xl mr-4">
                        <Store className="w-6 h-6" />
                     </div>
                     <h4 className="text-2xl font-bold text-slate-900">Fermented Lines</h4>
                 </div>
                 <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                     Completely hands-free Paneer & Curd lines ensuring maximum hygiene and consistent texture.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                         <span><strong>Paneer:</strong> Citric coagulation @ 85°C, pneumatic pressing</span>
                     </li>
                     <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                         <span><strong>Dahi:</strong> Incubation rooms (37°C-42°C)</span>
                     </li>
                      <li className="flex items-start text-slate-700 text-sm font-medium">
                         <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                         <span><strong>Packing:</strong> Vacuum pack & Thermoforming cups</span>
                      </li>
                 </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Quality Section: Technical Lab Details */}
        <section id="quality" className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
          }}></div>

          <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
              <Reveal className="order-2 lg:order-1">
              <div>
                  <img
                    src="/advanced.jpg"
                    alt="Advanced dairy laboratory spectroscopy"
                    className="rounded-xl h-[400px] shadow-2xl border-4 border-orange-600/20 w-full object-cover"
                  />
              </div>
              </Reveal>
              <Reveal delay={0.15} className="order-1 lg:order-2 mb-16 lg:mb-0">
              <div>
                <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-6">NABL Standard Lab</h2>
                <h3 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                  Rigorous Dealer<br />Assurance.
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-12">
                  Every incoming tanker undergoes a 20-minute "Platform Test" before unloading. If it fails any parameter, it is rejected at the gate.
                </p>

                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-orange-500 border border-slate-700">
                            <FlaskConical className="w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2">Adulterant Spectroscopy</h4>
                        <p className="text-slate-400 leading-relaxed">Advanced screening for Urea, Starch, Sugar, Neutralizers, and Melamine traces.</p>
                    </div>
                  </div>
                   <div className="flex">
                    <div className="flex-shrink-0 mr-6">
                        <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-green-500 border border-slate-700">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2">Antibiotic Residue Testing</h4>
                        <p className="text-slate-400 leading-relaxed">Regular screening for veterinary drugs (e.g., Oxytetracycline) to ensure antibiotic-free output.</p>
                    </div>
                  </div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        

        {/* FAQ SECTION (B2B Focus) */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                <div className="text-center mb-16">
                     <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-xl mb-4">
                         <HelpCircle className="w-6 h-6" />
                     </div>
                    <h2 className="text-3xl font-extrabold text-slate-900">Commercial FAQs</h2>
                    <p className="text-slate-600 mt-4">Common queries from our OEM & Distribution partners.</p>
                </div>
                </Reveal>

                <Reveal delay={0.1} className="space-y-4">
                <div>
                    {/* Q1 */}
                    <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:border-orange-400 transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                            <span>What are your Minimum Order Quantities (MOQs)?</span>
                            <ChevronDown className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            For private labeling, our typical MOQ is 5MT per SKU for Ghee and 10,000 liters per day for fluid milk variants. This ensures optimal utilization of our continuous processing lines.
                        </div>
                    </details>
                     {/* Q2 */}
                     
                    <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:border-orange-400 transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                            <span>Are you certified for export to MENA/EU regions?</span>
                            <ChevronDown className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            Yes, our facility is Export Inspection Agency (EIA) approved and holds Halal, Kosher, and ISO 22000:2018 certifications suitable for Gulf and select European markets.
                        </div>
                    </details>
                    {/* Q3 */}
                    <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:border-orange-400 transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                            <span>What is the typical lead time for new contract manufacturing?</span>
                            <ChevronDown className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            From artwork approval to first commercial dispatch, our standard timeline is 4-6 weeks, depending on packaging material availability and customized formulation requirements.
                        </div>
                    </details>
                </div>
                </Reveal>
            </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-32 bg-orange-50 relative overflow-hidden border-t border-orange-100">
          <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 text-white rounded-full mb-12 shadow-xl shadow-orange-200"
              >
                  <IndianRupee className="w-10 h-10" />
              </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.2]">
              Partner with a trusted<br/>industrial supplier.
            </h2>
            <p className="text-slate-700 text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              Get competitive B2B rate cards for bulk supply or discuss private labeling opportunities for your brand.
            </p>
            <p className="text-slate-700 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to talk numbers?{' '}
              <Link
                href="/contact"
                className="font-bold text-orange-600 underline underline-offset-4 decoration-orange-300 hover:text-orange-700 hover:decoration-orange-500 transition-colors"
              >
                Contact Us
              </Link>{' '}
              and our B2B team will respond within 24 hours.
            </p>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center bg-orange-600 text-white hover:bg-orange-700 font-bold px-10 py-5 text-lg rounded-lg transition-colors shadow-xl shadow-orange-600/20 cursor-pointer"
              >
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </motion.span>
            </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
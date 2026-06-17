'use client';
import { ArrowRight, PackageCheck } from 'lucide-react'

import React, { useState } from 'react';
import {
  Factory,
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  Activity,
  Droplet,
  FlaskConical,
  Truck,
  Check,
  Microscope,
  Thermometer,
  Award,
  MapPin,
  Phone,
  Mail,
  
  Settings,
  ClipboardCheck
} from 'lucide-react';
import Link from 'next/link';
export default function Hero() {
  return (
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col justify-center bg-slate-900 overflow-hidden">
          {/* Video/Image Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559564247-74462696885c?auto=format&fit=crop&w=2000&q=80"
              alt="Modern dairy factory bottling line"
              className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom" // Added a theoretical slow zoom class for effect
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-blue-900/20"></div>
            {/* Subtle grid overlay for industrial feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQMEgMGgxWiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-30"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0 flex-grow flex items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-blue-50 font-medium text-sm mb-8 backdrop-blur-md border border-white/10 animate-fade-in">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="tracking-wide uppercase text-xs font-bold">ISO 22000 • FSSC 22000 • HACCP Certified</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] animate-slide-up">
                Future-ready<br />
                dairy processing.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl animate-slide-up-delay">
                We combine autonomous manufacturing with rigorous microbiology to deliver millions of liters of pure dairy products daily.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-slide-up-delay-2">
                <a href="#products" className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] inline-flex justify-center items-center">
                  Explore Capabilities
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="group bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex justify-center items-center backdrop-blur-sm">
                  Facility Virtual Tour
                </a>
              </div>
            </div>
          </div>

          {/* Trusted By Strip */}
          <div className="relative w-full bg-slate-950/50 border-t border-white/5 backdrop-blur-md py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Operated under standards & recognition of</p>
              <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-all duration-500">
                 <img src="https://placehold.co/300x80/transparent/white?text=Government+of+India" alt="Government of India" className="h-16 md:h-20 w-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Dashboard */}
        <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 border-r border-slate-100 last:border-0 pr-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 tracking-tight">99.9<span className="text-blue-600">%</span></div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">OEE Efficiency</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r border-slate-100 last:border-0 pr-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <Droplet className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 tracking-tight">500k<span className="text-sm text-slate-400 ml-1">L/day</span></div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Throughput</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-r border-slate-100 last:border-0 pr-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <ClipboardCheck className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 tracking-tight">Zero</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Critical Defects</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 tracking-tight">24h</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Farm to Fridge</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Process (New Section) */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">The Ganga Amrit Standard</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight mb-6">Closed-Loop Purity.</h3>
              <p className="text-xl text-slate-600">From tanker reception to final palletization, our product never touches open air.</p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>

              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {[
                  { icon: Truck, title: "Automated Intake", desc: "HEPA-filtered tanker bays with automated CIP (Clean-in-Place) systems." },
                  { icon: FlaskConical, title: "Separation & Standard", desc: "Centrifugal clarifiers remove impurities before precision fat standardization." },
                  { icon: Thermometer, title: "Ultra-Pasteurization", desc: "Gentle thermal treatment preserves taste while ensuring commercial sterility." },
                  { icon: PackageCheck, title: "Aseptic Filling", desc: "Class 100 clean-room environment for final bottling and packaging." }
                ].map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl rotate-3 flex items-center justify-center mb-6 group-hover:rotate-6 transition-all shadow-blue-200 shadow-lg">
                      <step.icon className="w-8 h-8 -rotate-3 group-hover:-rotate-6 transition-all" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Production Lines (Enhanced) */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Capabilities</h2>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">Manufacturing Lines</h3>
                <p className="text-xl text-slate-600 mt-4">Flexible, scalable production integrated with your supply chain.</p>
              </div>
              <a href="#contact" className="hidden md:flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors">
                View full equipment list <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Line 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1606859221207-25ab5c3e92e3?auto=format&fit=crop&w=800&q=80" alt="Bottling Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-white/50">
                    24,000 units/hr
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-20">
                     <h3 className="text-2xl font-bold text-white mb-1">Liquid Bottling (ESL)</h3>
                     <p className="text-slate-300 text-sm">HDPE, PET, Glass</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6">High-speed rotary filling for milk, flavored drinks, and plant-based alternatives. Integrated sleeving and case packing.</p>
                  <div className="space-y-3 border-t border-slate-100 pt-6">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <Settings className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Formats: 250ml - 2L</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Extended Shelf Life (60+ days)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line 2 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1632055123979-0178dd6299df?auto=format&fit=crop&w=800&q=80" alt="Butter Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-white/50">
                    5 Tons/hr
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-20">
                     <h3 className="text-2xl font-bold text-white mb-1">Fats & Spreads</h3>
                     <p className="text-slate-300 text-sm">Butter, Margarine, Blends</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6">Continuous churning technology with texturizers for premium spreadability. Foil wrapping and tub filling options.</p>
                  <div className="space-y-3 border-t border-slate-100 pt-6">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <Settings className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Formats: 10g portions - 25kg bulk</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Nitrogen aeration capable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line 3 (Added "Batter" reference here for the pun) */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1612198273690-955bdfa87a86?q=80&w=800&auto=format&fit=crop" alt="Mixing Vats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-white/50">
                    Custom Batching
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 pt-20">
                     <h3 className="text-2xl font-bold text-white mb-1">Batters & Mixes</h3>
                     <p className="text-slate-300 text-sm">Viscous Liquids & Cultured</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6">Specialized high-shear mixing vats for pancake batters, ice cream mixes, and cultured yogurt products.</p>
                  <div className="space-y-3 border-t border-slate-100 pt-6">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                       <Settings className="w-4 h-4 text-blue-500 mr-3" />
                      <span>In-line fruit & inclusions</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Allergen-segregated lines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Section */}
        <section id="facility" className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Refined background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
              <div className="mb-12 lg:mb-0">
                 <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">The Facility</h2>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                  Obsessive<br/>Quality Control.
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-12">
                  Our on-site ISO 17025 accredited laboratory conducts over 1,500 tests daily. We don't just meet regulatory standards; we set new ones for the industry.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                    <Microscope className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-white font-bold mb-2">Microbiology Lab</h3>
                    <p className="text-slate-400 text-sm">Pathogen testing with 4-hour rapid turnaround using PCR technology.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                    <FlaskConical className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-white font-bold mb-2">Chemical Analysis</h3>
                    <p className="text-slate-400 text-sm">Precise fat, protein, and lactose standardization within 0.05% variance.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" alt="Factory Control Room" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 to-transparent h-1/2 opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold flex items-center"><Activity className="w-4 h-4 text-green-500 mr-2 animate-pulse" /> Live Status</span>
                      <span className="text-slate-400 text-xs">Updated 2m ago</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Line A OEE</span>
                        <span className="text-green-400 font-mono">98.4%</span>
                      </div>
                       <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[98.4%]"></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Pasteurizer Temp</span>
                        <span className="text-blue-400 font-mono">74.2°C</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[75%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B2B CTA Section */}
        <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQMEgMGgxWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
           <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 text-blue-100 text-sm font-bold mb-6 border border-blue-400/30">Ready for scale?</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Start your next production run<br/>with Ganga Amrit.
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              We have open capacity for Q3 2024. Schedule a technical consultation with our manufacturing engineers today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:-translate-y-1">
                Request Facility Audit
              </button>
              <button className="group bg-blue-700 hover:bg-blue-800 text-white border border-blue-500/50 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:-translate-y-1 flex items-center justify-center">
                Download Spec Sheets <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>
  )
}

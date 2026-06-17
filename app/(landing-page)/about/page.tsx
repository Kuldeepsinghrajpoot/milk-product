"use client";
import React from 'react';
import {
  Target,
  Heart,
  History,
  Globe,
  Leaf
} from 'lucide-react';
import { Reveal } from '../../components/Reveal';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&w=2000&q=80"
              alt="Factory exterior at dawn"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
          </div>
          <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Pioneering Purity since <span className="text-orange-500">1987</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are more than just a manufacturer. We are custodians of quality, blending tradition with cutting-edge technology to deliver dairy excellence.
            </p>
            </div>
          </Reveal>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <Reveal className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-12 lg:mb-0 group">
                <div>
                <img
                  src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=1935&auto=format&fit=crop"
                  alt="Historical photo of first collection center"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Our first collection center on the banks of the Ganga, circa 1987.</p>
                </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
              <div>
                <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full text-orange-700 font-medium text-sm mb-6">
                  <History className="w-4 h-4" />
                  <span className="tracking-wide uppercase text-xs font-bold">Our History</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  From a farmer cooperative to a national partner.
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Ganga Amrit was founded in 1987 by a group of dairy farmers along the Ganga basin near Kanpur, Uttar Pradesh, who shared a single vision: to process the milk from their own herds with the same care they put into raising them. What began as a small village cooperative supplying local markets has grown into a state-of-the-art manufacturing powerhouse.
                  </p>
                  <p>
                    Over the decades, we've continuously reinvested in technology and talent. In 2010, we opened our current flagship facility, designed from the ground up for automated, closed-loop processing. Today, we are proud to be a trusted partner for major national brands and retailers, processing over 15 lakh liters of milk daily while staying true to our roots of integrity and quality.
                  </p>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Driven by Purpose.</h2>
              <p className="text-xl text-slate-600">Our guiding principles shape every decision we make, from the factory floor to the boardroom.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={0}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide safe, nutritious, and high-quality dairy products to families across India through sustainable and innovative manufacturing practices.
                </p>
              </div>
              </Reveal>
              <Reveal delay={0.12}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be India's benchmark for excellence in contract dairy manufacturing, recognized for our integrity, agility, and commitment to sustainability.
                </p>
              </div>
              </Reveal>
              <Reveal delay={0.24}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
                <ul className="text-slate-600 leading-relaxed space-y-2">
                  <li><strong>Integrity:</strong> Doing the right thing, always.</li>
                  <li><strong>Quality:</strong> Uncompromising standards.</li>
                  <li><strong>Innovation:</strong> Embracing the future.</li>
                  <li><strong>Sustainability:</strong> Respecting our planet.</li>
                </ul>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Sustainability Commitment */}
        <section className="py-24 bg-green-900 relative overflow-hidden">
          <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" alt="Green pastures" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
               <Reveal>
               <div>
                 <div className="inline-flex items-center space-x-2 bg-green-800/50 px-4 py-2 rounded-full text-green-100 font-medium text-sm mb-6 backdrop-blur-md border border-green-500/20">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="tracking-wide uppercase text-xs font-bold">Sustainability</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                  Nourishing the future, responsibly.
                </h2>
                <p className="text-green-100 text-lg leading-relaxed mb-8">
                  We believe that great dairy starts with a healthy planet. We are committed to reducing our environmental footprint through:
                </p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start">
                    <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span><strong>Water Conservation:</strong> Advanced water recycling systems that reduce our freshwater usage by 40%.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span><strong>Renewable Energy:</strong> 60% of our facility's power is generated from on-site solar and bio-gas digesters.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span><strong>Sustainable Sourcing:</strong> Partnering exclusively with farms that practice regenerative agriculture and ensure high animal welfare standards.</span>
                  </li>
                </ul>
               </div>
               </Reveal>
               <Reveal delay={0.15} className="mt-12 lg:mt-0 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-green-800">
                 <img src="/solar.png" alt="Solar panels on factory roof" className="w-full h-full object-cover" />
               </Reveal>
             </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 tracking-tight">Meet Our Leadership</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <Reveal delay={0}>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Vikram Mehta</h3>
                <p className="text-orange-600 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">With over 25 years in the dairy industry, Vikram leads our strategic vision and national expansion.</p>
              </div>
              </Reveal>
              <Reveal delay={0.12}>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="COO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Anjali Sharma</h3>
                <p className="text-orange-600 font-medium mb-4">Chief Operating Officer</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">Anjali oversees our daily operations, ensuring efficiency, safety, and unwavering quality.</p>
              </div>
              </Reveal>
               <Reveal delay={0.24}>
               <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="Head of R&D" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Dr. Sanjeev Rao</h3>
                <p className="text-orange-600 font-medium mb-4">Head of R&D</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">Dr. Rao leads our innovation lab, developing new product formulations and processing techniques.</p>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// Helper component for checkmarks
const Check = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
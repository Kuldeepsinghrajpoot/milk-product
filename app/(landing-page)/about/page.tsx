"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Heart,
  History,
  Globe,
  Leaf,
  Linkedin,
  Mail,
} from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import WaveDivider from '../../components/WaveDivider';
import ScrollProgress from '../../components/ScrollProgress';

const LEADERS = [
  {
    name: 'Rajesh Kumar Agarwal',
    role: 'Founder & Chairman',
    bio: 'Rajesh founded Ganga Amrit in 2026 with a clear mission — to bring honest, technology-driven milk processing to the Ganga basin near Kanpur. His deep roots in the dairy sector and commitment to farmer welfare have helped build direct procurement relationships with thousands of farmers across Uttar Pradesh.',
    initials: 'RK',
    gradient: 'from-blue-600 to-blue-800',
    tag: 'Founder',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Suresh Prakash Verma',
    role: 'Co-Founder & Managing Director',
    bio: 'Suresh co-founded Ganga Amrit in 2026, bringing deep manufacturing and supply-chain expertise to build the company from the ground up. He designed and commissioned our flagship processing facility near Kanpur, establishing automated closed-loop systems that set the foundation for our growing 2 Lakh Liters per day capacity.',
    initials: 'SP',
    gradient: 'from-green-600 to-green-800',
    tag: 'Co-Founder',
    tagColor: 'bg-green-100 text-green-700',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <ScrollProgress />
      <main>

        {/* HERO */}
        <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&w=2000&q=80"
              alt="Factory exterior"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
          </div>

          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400/20 pointer-events-none"
              style={{
                width: 6 + (i % 3) * 6,
                height: 6 + (i % 3) * 6,
                left: `${12 + i * 10}%`,
                bottom: 0,
              }}
              animate={{ y: [0, -300], opacity: [0, 0.6, 0] }}
              transition={{ duration: 6 + i, delay: i * 0.8, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}

          <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm tracking-widest uppercase mb-6 bg-blue-900/50 px-4 py-2 rounded-full border border-blue-700/50 backdrop-blur"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <History className="w-4 h-4" />
                Est. 2026
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Pioneering Purity since{' '}
                <span className="text-blue-400">2026</span>.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We are more than just a manufacturer. We are custodians of quality, blending
                modern technology with the timeless values of honest dairy farming.
              </p>
            </div>
          </Reveal>
        </section>

        <WaveDivider fromColor="#0f172a" toColor="#ffffff" flip />

        {/* OUR STORY */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <Reveal className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-12 lg:mb-0 group">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=1935&auto=format&fit=crop"
                    alt="Our first collection center"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium">
                      Our processing facility near Kanpur, Uttar Pradesh.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
                    <History className="w-4 h-4" />
                    <span className="tracking-wide uppercase text-xs font-bold">Our Story</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                    Built from scratch, with purpose.
                  </h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                      Ganga Amrit was founded in 2026 with a clear mission — to build a transparent,
                      technology-driven dairy processing company rooted in the values of the Ganga
                      basin. From day one, we invested in automated processing lines, direct farmer
                      procurement, and rigorous quality systems.
                    </p>
                    <p>
                      In a short time, we've grown to process <strong>2 Lakh Liters</strong> of fresh
                      milk daily from our flagship facility near Kanpur, UP. We are proud to be a
                      growing trusted partner for B2B brands and distributors — delivering on our
                      founding promise of <strong>शुद्धता का वादा</strong>.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#ffffff" toColor="#f8fafc" />

        {/* MISSION / VISION / VALUES */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                Driven by Purpose.
              </h2>
              <p className="text-xl text-slate-600">
                Our guiding principles shape every decision we make, from the factory floor to the boardroom.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  delay: 0,
                  icon: <Target className="w-8 h-8" />,
                  iconBg: 'bg-blue-100 text-blue-600',
                  title: 'Our Mission',
                  body: 'To provide safe, nutritious, and high-quality dairy products to families across India through sustainable and innovative manufacturing practices.',
                },
                {
                  delay: 0.12,
                  icon: <Globe className="w-8 h-8" />,
                  iconBg: 'bg-green-100 text-green-600',
                  title: 'Our Vision',
                  body: "To be India's benchmark for excellence in contract dairy manufacturing, recognized for our integrity, agility, and commitment to sustainability.",
                },
                {
                  delay: 0.24,
                  icon: <Heart className="w-8 h-8" />,
                  iconBg: 'bg-red-100 text-red-500',
                  title: 'Our Values',
                  list: [
                    'Integrity: Doing the right thing, always.',
                    'Quality: Uncompromising standards.',
                    'Innovation: Embracing the future.',
                    'Sustainability: Respecting our planet.',
                  ],
                },
              ].map((card) => (
                <Reveal key={card.title} delay={card.delay}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.12)' }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center h-full cursor-default"
                  >
                    <div className={`w-16 h-16 ${card.iconBg} rounded-full flex items-center justify-center mb-6`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                    {card.body && <p className="text-slate-600 leading-relaxed">{card.body}</p>}
                    {card.list && (
                      <ul className="text-slate-600 leading-relaxed space-y-2 text-left">
                        {card.list.map((item) => (
                          <li key={item}>
                            <strong>{item.split(':')[0]}:</strong>
                            {item.slice(item.indexOf(':') + 1)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#f8fafc" toColor="#14532d" />

        {/* SUSTAINABILITY */}
        <section className="py-24 bg-green-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
              alt="Green pastures"
              className="w-full h-full object-cover opacity-10 mix-blend-overlay"
            />
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
                    We believe that great dairy starts with a healthy planet. Our commitment to
                    reducing our environmental footprint is backed by measurable action, not just words.
                  </p>
                  <ul className="space-y-4 text-white">
                    {[
                      ['Water Conservation', 'Advanced water recycling systems reduce freshwater usage by 40%.'],
                      ['Renewable Energy', "60% of our facility's power from on-site solar and bio-gas digesters."],
                      ['Sustainable Sourcing', 'Partnering exclusively with farms that practice regenerative agriculture.'],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex items-start">
                        <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="mt-12 lg:mt-0 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-green-800">
                <motion.img
                  src="/solar.png"
                  alt="Solar panels on factory roof"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        <WaveDivider fromColor="#14532d" toColor="#ffffff" flip />

        {/* LEADERSHIP */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm tracking-widest uppercase mb-4 bg-blue-50 px-4 py-2 rounded-full">
                  <History className="w-4 h-4" />
                  Leadership
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  The Visionaries Behind Ganga Amrit
                </h2>
                <p className="text-slate-500 mt-4 text-lg">
                  Built from the ground up with integrity, grit, and a love for the land.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-10">
              {LEADERS.map((leader, i) => (
                <Reveal key={leader.name} delay={i * 0.15}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: '0 32px 60px -16px rgba(37,99,235,0.18)' }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden"
                  >
                    <div className={`bg-gradient-to-br ${leader.gradient} p-10 flex flex-col items-center relative overflow-hidden`}>
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        style={{
                          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div className="relative z-10 w-28 h-28 rounded-full bg-white/20 backdrop-blur border-4 border-white/40 flex items-center justify-center mb-4 shadow-2xl">
                        <span className="text-3xl font-black text-white">{leader.initials}</span>
                      </div>
                      <span className={`relative z-10 px-3 py-1 rounded-full text-xs font-bold ${leader.tagColor} mb-2`}>
                        {leader.tag}
                      </span>
                      <h3 className="relative z-10 text-xl font-black text-white text-center">
                        {leader.name}
                      </h3>
                      <p className="relative z-10 text-white/80 text-sm font-medium mt-1">
                        {leader.role}
                      </p>
                    </div>

                    <div className="p-8">
                      <p className="text-slate-600 leading-relaxed text-base">{leader.bio}</p>
                      <div className="flex gap-3 mt-6">
                        <button className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
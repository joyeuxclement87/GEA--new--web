'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';

const offerings = [
  {
    num: '01',
    title: 'Real Estate Services',
    desc: 'Advisory grounded in real technical expertise — helping clients find, evaluate, and acquire property with genuine confidence.',
    points: ['Property sourcing & advisory', 'Investment feasibility analysis', 'Acquisition support', 'Portfolio strategy'],
    image: cld('services-real-estate-real-estate-services', { w: 1400 }),
    href: '/services#real-estate-services',
  },
  {
    num: '02',
    title: 'Property Refurbishment',
    desc: 'Renovation and refurbishment that restores and elevates existing properties — extending their life and unlocking additional value.',
    points: ['Condition assessment', 'Refurbishment design', 'Structural upgrades', 'Full renovation delivery'],
    image: cld('services-real-estate-property-refurbishment', { w: 1400 }),
    href: '/services#property-refurbishment',
  },
  {
    num: '03',
    title: 'Property Demolition',
    desc: 'Safe, controlled demolition and site clearance carried out to regulatory standard — preparing sites for what comes next.',
    points: ['Demolition planning & permits', 'Safe dismantling & clearance', 'Waste & material disposal', 'Site preparation handover'],
    image: cld('services-real-estate-property-demolition', { w: 1400 }),
    href: '/services#property-demolition',
  },
];

const strengths = [
  { num: '01', title: 'Technical Advisory', desc: 'Real estate guidance grounded in genuine engineering and construction expertise, not just market data.' },
  { num: '02', title: 'End-to-End Support', desc: 'From sourcing and feasibility through refurbishment or demolition and back to build.' },
  { num: '03', title: 'Risk-Aware Investment', desc: 'Feasibility and due diligence that protects capital before it is committed.' },
  { num: '04', title: 'Trusted Local Network', desc: 'Deep relationships across the region\u2019s property, legal, and construction landscape.' },
  { num: '05', title: 'Integrated Delivery', desc: 'Advisory backed by the same team capable of designing and building the asset itself.' },
  { num: '06', title: 'Long-Term Partnership', desc: 'We support portfolios over time, not just single transactions.' },
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-hidden" style={{ marginTop: '88px' }}>

      {/* HERO */}
      <section className="relative flex items-end bg-[#0D1B2A] text-white overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.30 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src={cld('heroes-services-real-estate', { w: 1800 })}
                        alt="Real Estate Services"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-24">
          <div className="flex items-center gap-2 mb-10 text-[11px] font-[500] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link href="/services" className="hover:text-white/70 transition-colors">Expertise</Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-white/70">Real Estate</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Property &amp; Investment</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-[36px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[800px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Real Estate Advisory Built on Technical Expertise.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[540px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Global Engineering Agency helps clients find, evaluate, refurbish, and invest in property with genuine confidence — backed by the same engineering and construction expertise that delivers our buildings.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap gap-4">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
              Request Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2.5 rounded-[999px] border border-white/20 px-7 py-3.5 text-[13.5px] font-[500] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              All Expertise
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Why It Matters</span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.2]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Property Decisions <br />
                <span className="font-[300] text-[#10367D]">Deserve Technical Rigor.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 pt-4">
              <p className="text-[17px] leading-[1.9] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Most real estate advice is built on market data alone. Ours is built on decades of engineering, construction, and delivery experience — meaning we can assess a property&apos;s true condition, renovation potential, and investment feasibility before you commit capital. Whether you are acquiring, refurbishing, or clearing a site, our advisory is grounded in what it actually takes to build and maintain a property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#10367D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">What We Provide</span>
          </div>
          <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[700px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Advisory across the <span className="font-[300]">property lifecycle.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between bg-white rounded-[24px] overflow-hidden border border-[#E6E6E6] hover:border-[#C8A45D] hover:shadow-card-hover transition-all duration-500 p-8 min-h-[440px]"
            >
              <div>
                <div className="relative w-full h-[180px] overflow-hidden rounded-[16px] mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center border border-[#E6E6E6]">
                    <span className="text-[12px] font-[700] text-[#10367D]">{item.num}</span>
                  </div>
                </div>
                <h3 className="text-[22px] font-[700] text-[#1F2937] tracking-tight leading-[1.2] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                <p className="text-[14px] leading-[1.65] text-[#1F2937]/60 font-[300] mb-6">{item.desc}</p>
              </div>

              <div>
                <ul className="space-y-2 pt-4 border-t border-[#F0F0F0] mb-6">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[12.5px] text-[#1F2937]/70 font-[300]">
                      <span className="h-[4px] w-[4px] rounded-full bg-[#C8A45D] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className="inline-flex items-center gap-2 text-[12.5px] font-[600] tracking-[0.02em] text-[#10367D] group-hover:text-[#C8A45D] transition-colors">
                  Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0D1B2A] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div className="max-w-[560px]">
              <div className="inline-flex items-center gap-3 mb-5"><span className="h-[1px] w-6 bg-[#C8A45D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]">Why Choose Us</span></div>
              <h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]">Property advisory <span className="font-[300] text-white/70">you can build on.</span></h2>
            </div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]">Every recommendation is grounded in what it actually takes to design, build, and maintain a property.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.06 }}
                className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"
              >
                <span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">{item.num}</span>
                <div>
                  <h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5 group-hover:text-[#C8A45D] transition-colors duration-300" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                  <p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0D1B2A] py-32 lg:py-44">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.03] text-white mb-6">Considering a property <span className="text-[#C8A45D]">move?</span></h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.8] font-[300] text-white/55 mb-8">Whether you&apos;re acquiring, refurbishing, or clearing a site, our team brings genuine technical expertise to every decision.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">Request Consultation<ArrowRight className="h-4 w-4" strokeWidth={2} /></Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white">Explore All Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

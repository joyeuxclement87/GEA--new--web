'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';
import { getSolutionCategory } from './solutions-data';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E6E6E6]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[15px] font-[500] text-[#1F2937] group-hover:text-[#10367D] transition-colors duration-200 pr-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-[#E6E6E6] flex items-center justify-center text-[#10367D] transition-all duration-200 group-hover:border-[#10367D]">
          {open ? <Minus className="w-3.5 h-3.5" strokeWidth={2} /> : <Plus className="w-3.5 h-3.5" strokeWidth={2} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14px] leading-[1.85] font-[300] text-[#1F2937]/60 max-w-[640px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SolutionCategoryDetailPage({ slug }: { slug: string }) {
  const cat = getSolutionCategory(slug) || {
    slug,
    title: slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    tagline: 'Premium Solutions for Every Project.',
    description: 'High-quality building products and engineering systems supplied by Global Engineering Agency for residential, commercial, and industrial projects.',
    heroImage: cld('heroes-solutions-default', { w: 2400 }),
    overview: 'Global Engineering Agency carefully curates and supplies this product category from trusted global manufacturers. Every product is selected for quality, durability, and compatibility with modern construction and engineering requirements.',
    applications: ['Residential projects', 'Commercial developments', 'Industrial facilities', 'Hospitality', 'Infrastructure'],
    collections: [
      { name: 'Standard Collection', desc: 'Core products for residential and light commercial applications.', image: cld('solutions-default-standard-collection', { w: 800 }) },
      { name: 'Professional Series', desc: 'Heavy-duty products engineered for demanding commercial and industrial use.', image: cld('solutions-default-professional-series', { w: 800 }) },
      { name: 'Premium Range', desc: 'Best-in-class products for high-specification architectural projects.', image: cld('solutions-default-premium-range', { w: 800 }) },
    ],
    specs: [
      { label: 'Product Types', value: '50+' },
      { label: 'Brand Partners', value: '5+' },
      { label: 'Lead Time', value: '2–4 weeks' },
      { label: 'Warranty', value: 'Manufacturer' },
    ],
    faqs: [
      { q: 'Do you supply for both residential and commercial projects?', a: 'Yes, we supply products across all project types — residential, commercial, hospitality, industrial, and infrastructure.' },
      { q: 'Can you provide a quotation for bulk orders?', a: 'Yes. Submit your requirements and our team will provide a competitive commercial quotation.' },
      { q: 'Do you deliver to project sites?', a: 'Yes. We coordinate delivery directly to your project site, ensuring materials arrive on schedule.' },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-white text-[#1F2937] overflow-hidden" style={{ marginTop: '88px' }}>
        <section className="relative flex items-end bg-[#0D1B2A] text-white overflow-hidden" style={{ minHeight: '70vh' }}>
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.30 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src={cat.heroImage}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-24">
            <div className="flex items-center gap-2 mb-10 text-[11px] font-[500] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="/solutions" className="hover:text-white/70 transition-colors">Solutions</a>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="text-white/70">{cat.title}</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Building Solutions
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-[36px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[800px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {cat.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }} className="text-[16px] font-[300] text-[#C8A45D] italic mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              {cat.tagline}
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[540px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              {cat.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap gap-4">
              <a href="/quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
                Request a Quote
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="/solutions" className="inline-flex items-center gap-2.5 rounded-[999px] border border-white/20 px-7 py-3.5 text-[13.5px] font-[500] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                All Solutions
              </a>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#F8F8F8] border-b border-[#E6E6E6]">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="flex flex-wrap divide-x divide-[#E6E6E6]">
              {cat.specs.map((spec) => (
                <div key={spec.label} className="flex-1 min-w-[140px] py-7 px-8 first:pl-0">
                  <div className="text-[24px] font-[700] text-[#10367D] leading-none mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>{spec.value}</div>
                  <div className="text-[10px] font-[500] uppercase tracking-[0.18em] text-[#1F2937]/45" style={{ fontFamily: 'Inter, sans-serif' }}>{spec.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
              <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-6 bg-[#10367D]" />
                  <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Category Overview</span>
                </div>
                <h2 className="text-[32px] lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  What We Supply
                </h2>
                <p className="text-[15.5px] leading-[1.9] font-[300] text-[#1F2937]/60 mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {cat.overview}
                </p>
                <a href="/quote" className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#10367D] group transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="h-[1px] bg-[#10367D] w-8 transition-all duration-300 group-hover:w-14" />
                  Request a Product Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-6 bg-[#10367D]" />
                  <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Applications</span>
                </div>
                <h2 className="text-[32px] lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Where We Supply
                </h2>
                <div className="flex flex-col border-t border-[#E6E6E6]">
                  {cat.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-5 py-5 border-b border-[#E6E6E6]">
                      <span className="text-[11px] font-[700] tracking-[0.18em] text-[#10367D] w-6 shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-[14px] font-[500] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8] py-20 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Product Collections</span>
              </div>
              <h2 className="text-[36px] lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Explore the <span className="font-[300]">Range.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {cat.collections.map((col, idx) => (
                <motion.div key={col.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.65, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }} className="group bg-white rounded-[20px] overflow-hidden border border-[#E6E6E6] hover:border-[#10367D]/20 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }} src={col.image} alt={col.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-[17px] font-[700] text-[#1F2937] mb-2.5 group-hover:text-[#10367D] transition-colors duration-200" style={{ fontFamily: 'Manrope, sans-serif' }}>{col.name}</h3>
                    <p className="text-[13px] leading-[1.75] font-[300] text-[#1F2937]/55 mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>{col.desc}</p>
                    <a href="/quote" className="inline-flex items-center gap-2 text-[12px] font-[600] tracking-[0.04em] text-[#10367D] group/link" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span className="h-[1px] w-4 bg-[#10367D]" />
                      Request Quote
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group/link-hover:translate-x-1" strokeWidth={1.5} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-6 bg-[#10367D]" />
                  <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>FAQ</span>
                </div>
                <h2 className="text-[34px] lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Common <span className="font-[300]">Questions.</span>
                </h2>
                <p className="text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Have more questions about this product category? Our team is ready to assist.
                </p>
                <a href="/contact" className="inline-flex items-center gap-3 rounded-[999px] border border-[#10367D] px-7 py-3.5 text-[13px] font-[600] text-[#10367D] transition-all duration-300 hover:bg-[#10367D] hover:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Contact Our Team
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <div className="divide-y divide-[#E6E6E6]">
                  {cat.faqs.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E6E6E6] bg-[#1F2937] text-white">
          <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
            <p className="text-[10px] font-[600] uppercase tracking-[0.22em] text-[#C8A45D]">Start A Conversation</p>
            <h2 className="mt-6 max-w-[780px] text-[36px] font-[600] leading-[1.1] tracking-[-0.03em] sm:text-[50px] lg:text-[64px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready To Bring Your Vision To Life?
            </h2>
            <p className="mt-7 max-w-[760px] text-[16px] font-[300] leading-[1.85] text-white/75">
              Whether you&apos;re planning a new project or looking for professional guidance, our multidisciplinary team is here to help.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2.5 rounded-full bg-[#C8A45D] px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
                Request Consultation
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[13px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/45 hover:bg-white/10">
                Explore Our Expertise
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

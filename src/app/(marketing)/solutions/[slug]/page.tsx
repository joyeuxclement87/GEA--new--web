'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Footer from '@/components/Footer';

// ─── Category data ────────────────────────────────────────────────────────────

const categoryData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  overview: string;
  applications: string[];
  collections: Array<{ name: string; desc: string; image: string }>;
  specs: Array<{ label: string; value: string }>;
  faqs: Array<{ q: string; a: string }>;
}> = {
  'bathroom-sanitary': {
    title: 'Bathroom & Sanitary',
    tagline: 'Where Function Meets Design.',
    description: 'Premium sanitary ware, bathtubs, showers, vanities, and bathroom accessories for residential, hospitality, and commercial projects.',
    heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies bathroom and sanitary products from Europe\'s leading manufacturers. Every product is selected for design quality, durability, and performance in demanding environments — from luxury residences to commercial hospitality projects.',
    applications: ['Residential bathrooms', 'Hotel & hospitality suites', 'Commercial washrooms', 'Healthcare facilities', 'Educational facilities'],
    collections: [
      { name: 'Premium Vanity Collection', desc: 'Wall-hung and freestanding vanity units with integrated basin and storage.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80' },
      { name: 'Freestanding Bathtub Series', desc: 'Sculptural freestanding baths in acrylic, stone resin, and cast iron.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rainfall Shower Systems', desc: 'Overhead and handheld shower systems with thermostatic controls.', image: 'https://images.unsplash.com/photo-1560185127-6a7e2f2a8b5a?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '120+' },
      { label: 'Brand Partners', value: '8' },
      { label: 'Lead Time', value: '2–4 weeks' },
      { label: 'Warranty', value: 'Up to 10 years' },
    ],
    faqs: [
      { q: 'Do you supply bathroom products for commercial projects?', a: 'Yes, we supply bathroom and sanitary products for commercial projects of all scales — from hotels and office buildings to healthcare and hospitality facilities.' },
      { q: 'Can you provide product samples before ordering?', a: 'In many cases, samples can be arranged through our supplier network. Contact our team to discuss your requirements.' },
      { q: 'Do you supply complete bathroom packages?', a: 'Yes. We can curate complete bathroom packages including sanitary ware, taps, showers, accessories, and complementary tile selections for coordinated specification.' },
    ],
  },
  'tiles-flooring': {
    title: 'Tiles & Flooring',
    tagline: 'Every Surface, Defined.',
    description: 'Porcelain, ceramic, natural stone, and wood-effect tiles for floors, walls, and facades from world-leading manufacturers.',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80',
    overview: 'From large-format porcelain slabs to handcrafted terracotta, GEA\'s tile and flooring range covers every project type and design intent. We source from manufacturers recognized for quality, consistency, and technical performance.',
    applications: ['Residential interiors', 'Commercial lobbies & corridors', 'Wet areas & pools', 'External facades', 'Retail & hospitality'],
    collections: [
      { name: 'Large Format Porcelain', desc: '1200x2400mm and 1600x3200mm slabs for seamless, uninterrupted surfaces.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80' },
      { name: 'Natural Stone Selection', desc: 'Marble, travertine, limestone, and granite in raw and honed finishes.', image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80' },
      { name: 'Wood-Effect Ceramics', desc: 'High-fidelity timber-look tiles for durability without wood maintenance.', image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '200+' },
      { label: 'Brand Partners', value: '12' },
      { label: 'Lead Time', value: '1–3 weeks' },
      { label: 'Min. Order', value: 'By project' },
    ],
    faqs: [
      { q: 'Do you supply tiles for outdoor and wet areas?', a: 'Yes. We have a dedicated range of slip-resistant and frost-resistant tiles suitable for outdoor terraces, pool surrounds, and wet areas.' },
      { q: 'Can you provide quantity estimates for my project?', a: 'Our team can calculate tile quantities from your floor plans or room dimensions, including appropriate waste allowances.' },
      { q: 'Do you carry large-format slabs?', a: 'Yes. We supply large-format porcelain slabs up to 1600x3200mm for dramatic, seamless floor and wall installations.' },
    ],
  },
  'electrical': {
    title: 'Electrical Solutions',
    tagline: 'Power, Controlled.',
    description: 'Complete electrical systems including switchgear, distribution boards, cables, and intelligent energy management solutions.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies a comprehensive range of electrical products from global manufacturers, covering everything from basic wiring accessories to advanced smart energy management systems. All products meet international quality and safety certifications.',
    applications: ['Residential wiring', 'Commercial fit-out', 'Industrial installations', 'Data centres', 'Infrastructure projects'],
    collections: [
      { name: 'Distribution Boards & Panels', desc: 'MDB, SMDB, and final distribution boards from Schneider, Legrand, and Hager.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
      { name: 'Cable & Containment', desc: 'Power cables, data cables, cable trays, and conduit systems.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Smart Lighting Controls', desc: 'DALI, KNX, and wireless lighting control systems for intelligent spaces.', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '180+' },
      { label: 'Brand Partners', value: '10' },
      { label: 'Standards', value: 'IEC/BS/CE' },
      { label: 'Warranty', value: 'Up to 5 years' },
    ],
    faqs: [
      { q: 'Do your products meet local electrical standards?', a: 'Yes. All electrical products we supply are certified to international standards including IEC, BS, and CE, and comply with local regulatory requirements.' },
      { q: 'Can you supply complete electrical packages for a project?', a: 'Yes. We can compile complete electrical material lists from your single-line diagrams and BOQ, and provide a comprehensive supply package.' },
      { q: 'Do you supply smart home electrical systems?', a: 'Yes. We supply KNX, DALI, and wireless smart electrical and lighting control systems suitable for residential and commercial applications.' },
    ],
  },
};

// Default for categories without specific data
const defaultCategory = (slug: string) => ({
  title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  tagline: 'Premium Solutions for Every Project.',
  description: 'High-quality building products and engineering systems supplied by Global Engineering Agency for residential, commercial, and industrial projects.',
  heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
  overview: 'Global Engineering Agency carefully curates and supplies this product category from trusted global manufacturers. Every product is selected for quality, durability, and compatibility with modern construction and engineering requirements.',
  applications: ['Residential projects', 'Commercial developments', 'Industrial facilities', 'Hospitality', 'Infrastructure'],
  collections: [
    { name: 'Standard Collection', desc: 'Core products for residential and light commercial applications.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
    { name: 'Professional Series', desc: 'Heavy-duty products engineered for demanding commercial and industrial use.', image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80' },
    { name: 'Premium Range', desc: 'Best-in-class products for high-specification architectural projects.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80' },
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
});

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

export default function SolutionCategoryPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const cat = categoryData[slug] || defaultCategory(slug);

  return (
    <>
      <main className="min-h-screen bg-white text-[#1F2937] overflow-hidden" style={{ marginTop: '88px' }}>

        {/* Hero */}
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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-10 text-[11px] font-[500] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="/solutions" className="hover:text-white/70 transition-colors">Solutions</a>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="text-white/70">{cat.title}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Building Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[36px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[800px]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {cat.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16px] font-[300] text-[#C8A45D] italic mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {cat.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[540px] mb-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {cat.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
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

        {/* Specs bar */}
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

        {/* Overview */}
        <section className="bg-white py-20 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
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

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
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
                      <span className="text-[11px] font-[700] tracking-[0.18em] text-[#10367D] w-6 shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[14px] font-[500] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Collections */}
        <section className="bg-[#F8F8F8] py-20 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 lg:mb-16"
            >
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
                <motion.div
                  key={col.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white rounded-[20px] overflow-hidden border border-[#E6E6E6] hover:border-[#10367D]/20 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover"
                    />
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

        {/* FAQ */}
        <section className="bg-white py-20 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-[#E6E6E6]"
              >
                {cat.faqs.map((faq, idx) => (
                  <FAQItem key={idx} q={faq.q} a={faq.a} />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#10367D] text-white py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[38px] sm:text-[52px] lg:text-[60px] font-[700] tracking-[-0.025em] leading-[1.06] mb-6 max-w-[700px] mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Ready to Source <span className="font-[300] text-white/60">{cat.title}?</span>
              </h2>
              <p className="text-[15px] leading-[1.85] font-[300] text-white/50 max-w-[520px] mx-auto mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                Request a detailed quotation or speak with our technical team about your project requirements.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="/solutions" className="inline-flex items-center gap-2.5 rounded-[999px] border border-white/25 px-8 py-4 text-[13.5px] font-[500] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                  Back to Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

const deliverables = [
  {
    num: '01',
    title: 'Landscape Master Planning',
    desc: 'Create comprehensive outdoor strategies that organize circulation, planting, recreation, and visual balance across the whole site.',
    points: ['Site analysis & zoning', 'Circulation & amenity planning', 'Spatial hierarchy & views', 'Landscape concept frameworks'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '02',
    title: 'Garden Design',
    desc: 'Design elegant residential and commercial gardens that combine planting composition, texture, and seasonal interest with daily comfort.',
    points: ['Planting palettes', 'Garden rooms & transitions', 'Outdoor comfort & privacy', 'Seasonal planting strategy'],
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '03',
    title: 'Hardscape Design',
    desc: 'Plan pathways, patios, retaining walls, pergolas, and outdoor structures that are durable, elegant, and functionally integrated.',
    points: ['Paving & surface design', 'Retaining & edge details', 'Outdoor structures', 'Material & finish coordination'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '04',
    title: 'Outdoor Living Spaces',
    desc: 'Shape inviting environments for dining, gathering, relaxation, and entertainment that feel natural and effortless.',
    points: ['Terrace & seating design', 'Entertainment zones', 'Shade & climate comfort', 'Visual connection to architecture'],
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '05',
    title: 'Irrigation Systems',
    desc: 'Develop efficient irrigation solutions that support healthy landscapes while conserving water and reducing long-term maintenance demands.',
    points: ['Water-efficient zoning', 'System layout & controls', 'Soil & plant performance', 'Maintenance-friendly design'],
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '06',
    title: 'Landscape Lighting',
    desc: 'Add lighting that improves safety, highlights planting and architecture, and extends comfort well into the evening.',
    points: ['Ambient & feature lighting', 'Pathway & safety illumination', 'Night-time visual balance', 'Low-energy lighting strategies'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '07',
    title: 'Sustainable Landscaping',
    desc: 'Incorporate native planting, drainage, soil stewardship, and water management to create resilient, environmentally responsible spaces.',
    points: ['Native planting strategies', 'Stormwater & drainage planning', 'Low-maintenance plant systems', 'Ecological performance'],
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80',
  },
];

const process = [
  { num: '01', title: 'Site Assessment', desc: 'Evaluate site conditions, topography, climate, and lifestyle needs before shaping any design direction.' },
  { num: '02', title: 'Concept Design', desc: 'Develop landscape concepts that respond to the architecture, setting, and intended way of living.' },
  { num: '03', title: 'Detailed Planning', desc: 'Prepare planting plans, hardscape layouts, irrigation, drainage, and lighting strategies with precision.' },
  { num: '04', title: 'Implementation', desc: 'Coordinate installation and delivery while maintaining quality standards and design intent.' },
  { num: '05', title: 'Maintenance Guidance', desc: 'Provide clear recommendations so the landscape continues to perform beautifully over time.' },
];

const strengths = [
  { num: '01', title: 'Integrated Design', desc: 'Landscape solutions developed alongside architecture, engineering, and construction teams from the outset.' },
  { num: '02', title: 'Sustainable Approach', desc: 'Designs that prioritize environmental responsibility, water efficiency, and long-term resilience.' },
  { num: '03', title: 'Functional Beauty', desc: 'Outdoor spaces crafted for daily living while preserving visual elegance and spatial harmony.' },
  { num: '04', title: 'End-to-End Support', desc: 'Professional guidance from concept development through implementation and handover.' },
  { num: '05', title: 'Local Sensitivity', desc: 'Planting and materials selected for climate, soil, maintenance, and cultural context.' },
  { num: '06', title: 'Measured Detail', desc: 'Every surface, planting layer, and lighting strategy is resolved with clarity and intention.' },
];

const relatedProjects = [
  {
    title: 'Luxury Residential Garden',
    category: 'Private Residence Landscape',
    location: 'Kigali, Rwanda',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Commercial Office Landscape',
    category: 'Corporate Outdoor Planning',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80',
    span: '',
  },
  {
    title: 'Hotel & Hospitality Landscape',
    category: 'Guest Experience Design',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    span: '',
  },
  {
    title: 'Residential Estate Master Plan',
    category: 'Large-Scale Outdoor Development',
    location: 'Marrakech, Morocco',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    span: '',
  },
];

const faqs = [
  {
    q: 'What landscaping services do you provide?',
    a: 'We provide full-service landscaping support including master planning, garden design, hardscape design, outdoor living spaces, irrigation planning, landscape lighting, and sustainable landscape strategies for residential and commercial projects.',
  },
  {
    q: 'Do you design residential gardens?',
    a: 'Yes. We create bespoke residential landscapes that reflect your lifestyle, enhance the architecture, and support comfortable use throughout the year.',
  },
  {
    q: 'Can landscaping be included in new construction projects?',
    a: 'Absolutely. We often integrate landscape design early in the process so outdoor spaces are planned alongside the building rather than added later as an afterthought.',
  },
  {
    q: 'Do you provide irrigation system design?',
    a: 'Yes. Our team develops irrigation concepts that support healthy planting while prioritising water efficiency and long-term maintenance.',
  },
  {
    q: 'Can you redesign an existing outdoor space?',
    a: 'Yes. We can rework existing gardens, courtyards, and exterior areas to improve usability, visual coherence, and environmental performance.',
  },
  {
    q: 'Do you provide landscape implementation support?',
    a: 'Yes. We coordinate closely with contractors and suppliers to ensure the design intent is carried through to installation and final completion.',
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#E6E6E6]">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-6 py-7 text-left" aria-expanded={isOpen}>
        <span className="text-[17px] lg:text-[19px] font-[600] text-[#1F2937] tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>{q}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E6E6E6] text-[#10367D] transition-colors duration-200">{isOpen ? <Minus className="h-3.5 w-3.5" strokeWidth={1.5} /> : <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />}</span>
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
        <p className="pb-7 pr-10 text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>{a}</p>
      </motion.div>
    </div>
  );
}

export default function LandscapingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-x-hidden">
      <section className="relative min-h-[90vh] mt-[152px] flex items-center bg-[#0D1B2A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto w-full max-w-[1440px] px-8 lg:px-16 py-12 lg:py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <Link href="/services" className="group inline-flex items-center gap-2 text-[12px] font-[500] uppercase tracking-[0.15em] text-[#C8A45D] hover:text-white transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={1.5} />
                  All Services
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Design &amp; Documentation</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="text-[40px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] text-white leading-[1.1] max-w-[720px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Creating Outdoor Spaces <span className="text-[#C8A45D] font-[350]">That Inspire, Connect, and Endure.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.26 }} className="mt-6 text-[15.5px] sm:text-[16.5px] font-[300] leading-[1.85] text-white/70 max-w-[620px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Create inspiring outdoor environments that combine nature, functionality, and aesthetics. From residential gardens to commercial landscapes, we design spaces that elevate everyday experiences and long-term property value.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.34 }} className="mt-10 flex flex-wrap gap-4">
                <Link href="/quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
                  Request Consultation <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center rounded-[999px] border border-white/20 bg-white/5 px-8 py-4 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                  View Landscaping Projects
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative aspect-[3/4] max-w-[420px] mx-auto lg:ml-auto w-full rounded-[24px] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury landscaped garden with pathways and outdoor living space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0D1B2A]/80 backdrop-blur-md rounded-[16px] border border-white/10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D] font-[600]">Featured Work</div>
                  <div className="text-[16px] font-[700] text-white mt-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Garden & Outdoor Living Masterplan</div>
                  <div className="text-[12px] text-white/50 font-[300] mt-0.5">Kigali, Rwanda • 2024</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Why It Matters</span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.2]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Landscapes Designed <br />
                <span className="font-[300] text-[#10367D]">Around Nature and Lifestyle.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 pt-4">
              <p className="text-[17px] leading-[1.9] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Landscaping is more than planting trees and flowers. It is the art of shaping outdoor environments so they support wellbeing, functionality, sustainability, and visual calm. At GEA, we integrate landscape design with architecture and construction to create cohesive places that feel natural from the first step outside the door.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#10367D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">What We Provide</span>
          </div>
          <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[760px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Outdoor environments <span className="font-[300]">that feel considered at every scale.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between bg-white rounded-[24px] overflow-hidden border border-[#E6E6E6] hover:border-[#C8A45D] hover:shadow-card-hover transition-all duration-500 p-8 min-h-[420px]"
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

              <ul className="space-y-2 pt-4 border-t border-[#F0F0F0]">
                {item.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[12.5px] text-[#1F2937]/70 font-[300]">
                    <span className="h-[4px] w-[4px] rounded-full bg-[#C8A45D] shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[650px] mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">How We Work</span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-4">From first brief to lasting landscape.</h2>
            <p className="text-[15.5px] font-[300] text-[#1F2937]/60">Explore each phase of our collaborative outdoor design journey.</p>
          </div>

          <div className="relative max-w-[1000px] mx-auto">
            <div className="absolute top-[20px] left-8 right-8 h-[2px] bg-[#E6E6E6] hidden md:block z-0" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative z-10 mb-12">
              {process.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center focus:outline-none group"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? 'bg-[#10367D] border-[#10367D] text-white scale-110 shadow-lg shadow-navy/20' : 'bg-white border-[#E6E6E6] text-[#1F2937]/60 group-hover:border-[#C8A45D]'}`}>
                      <span className="text-[13px] font-[700]">{step.num}</span>
                    </div>
                    <span className={`mt-4 text-[14px] font-[600] tracking-tight transition-colors duration-300 ${isActive ? 'text-[#10367D]' : 'text-[#1F2937]/60 group-hover:text-[#C8A45D]'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8F8F8] border border-[#E6E6E6] rounded-[24px] p-8 md:p-12 max-w-[800px] mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center"
            >
              <div className="text-[52px] font-[300] text-[#C8A45D] leading-none shrink-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {process[activeStep].num}
              </div>
              <div>
                <h3 className="text-[22px] font-[700] text-[#1F2937] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>{process[activeStep].title}</h3>
                <p className="text-[15.5px] leading-[1.8] font-[300] text-[#1F2937]/60">{process[activeStep].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1B2A] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div className="max-w-[560px]">
              <div className="inline-flex items-center gap-3 mb-5"><span className="h-[1px] w-6 bg-[#C8A45D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]">Why Choose GEA</span></div>
              <h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]">Creating landscapes that <span className="font-[300] text-white/70">grow with your vision.</span></h2>
            </div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]">Every landscape is shaped with the same discipline, care, and design rigor as our architecture and construction work.</p>
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

      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-6"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Related Work</span></div>
              <h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Designed to <span className="font-[300]">belong.</span></h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}><span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" /><span className="group-hover:text-[#10367D] transition-colors">View All Projects</span><ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} /></Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[260px] lg:auto-rows-[300px] gap-4 lg:gap-5">
            {relatedProjects.map((project, idx) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: idx * 0.08 }} className={`group relative overflow-hidden rounded-[20px] cursor-default ${project.span}`}>
                <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/85 via-[#1F2937]/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D] mb-2">{project.category}</span>
                  <h3 className="text-xl lg:text-[26px] font-[700] text-white tracking-tight leading-[1.2] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{project.title}</h3>
                  <span className="text-[12px] font-[300] text-white/60">{project.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="mx-auto max-w-[900px] px-8 lg:px-16">
          <div className="text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-3 mb-6 justify-center"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">FAQ</span><span className="h-[1px] w-6 bg-[#10367D]" /></div>
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Common <span className="font-[300]">questions.</span></h2>
          </div>

          <div className="border-t border-[#E6E6E6]">
            {faqs.map((faq, idx) => (
              <div key={faq.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <meta itemProp="name" content={faq.q} />
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <meta itemProp="text" content={faq.a} />
                  <FaqItem q={faq.q} a={faq.a} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0D1B2A] py-32 lg:py-44">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.03] text-white mb-6">Let&apos;s Transform <span className="text-[#C8A45D]">Your Outdoor Space.</span></h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.8] font-[300] text-white/55 mb-8">Whether you&apos;re developing a residential property, commercial project, or public space, our team creates landscapes that balance beauty, functionality, and sustainability.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">Request Consultation<ArrowRight className="h-4 w-4" strokeWidth={2} /></Link>
            <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white">View Our Projects</Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[13px] font-[300] text-white/60">
            <Link href="/services/architecture-drawings" className="transition-colors duration-200 hover:text-[#C8A45D]">Architecture Drawings</Link>
            <span className="text-white/20">•</span>
            <Link href="/services/exterior-design" className="transition-colors duration-200 hover:text-[#C8A45D]">Exterior Design</Link>
            <span className="text-white/20">•</span>
            <Link href="/services/interior-design" className="transition-colors duration-200 hover:text-[#C8A45D]">Interior Design</Link>
            <span className="text-white/20">•</span>
            <Link href="/services/general-contracting" className="transition-colors duration-200 hover:text-[#C8A45D]">General Contracting</Link>
            <span className="text-white/20">•</span>
            <Link href="/services/project-management" className="transition-colors duration-200 hover:text-[#C8A45D]">Project Management</Link>
            <span className="text-white/20">•</span>
            <Link href="/contact" className="transition-colors duration-200 hover:text-[#C8A45D]">Contact</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

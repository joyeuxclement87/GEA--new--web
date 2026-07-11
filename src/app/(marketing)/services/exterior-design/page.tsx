'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';

const provisions = [
  {
    num: '01',
    title: 'Building Facade Design',
    desc: 'Create modern and visually balanced building exteriors that reflect the project\'s identity.',
    points: ['Cladding & curtain walls', 'Thermal performance studies', 'Aesthetic & visual styling'],
    image: cld('services-exterior-design-building-facade-design', { w: 1600 }),
  },
  {
    num: '02',
    title: 'Architectural Concept Development',
    desc: 'Develop exterior concepts that combine creativity, functionality, and construction requirements.',
    points: ['Volumetric & massing studies', 'Contextual integration', 'Initial sketching & 3D models'],
    image: cld('services-exterior-design-architectural-concept-development', { w: 1600 }),
  },
  {
    num: '03',
    title: 'Material Selection',
    desc: 'Recommend durable, high-performance materials that also deliver refined appearances.',
    points: ['Durability & weather resistance', 'Tactile & visual harmony', 'Sustainability certifications'],
    image: cld('services-exterior-design-material-selection', { w: 1600 }),
  },
  {
    num: '04',
    title: 'Outdoor Space Integration',
    desc: 'Design exterior environments that connect buildings with their surroundings and landscape.',
    points: ['Landscape coordination', 'Terrace & entrance design', 'Threshold transitions'],
    image: cld('services-exterior-design-outdoor-space-integration', { w: 1600 }),
  },
  {
    num: '05',
    title: 'Lighting & Exterior Details',
    desc: 'Enhance architectural character through considered lighting and finishing details.',
    points: ['Architectural lighting design', 'Custom metal & glass details', 'Canopy & entryway detailing'],
    image: cld('services-exterior-design-lighting-and-exterior-details', { w: 1600 }),
  },
  {
    num: '06',
    title: 'Residential Exterior Design',
    desc: 'Personalised home exteriors that reflect lifestyle, comfort, and modern design principles.',
    points: ['Custom home envelopes', 'Villa & estate design', 'Material styling & finishes'],
    image: cld('services-exterior-design-residential-exterior-design', { w: 1600 }),
  },
  {
    num: '07',
    title: 'Commercial Exterior Design',
    desc: 'Professional facades and site presence that strengthen corporate identity and user experience.',
    points: ['High-rise & office facades', 'Brand & identity integration', 'Durability & compliance'],
    image: cld('services-exterior-design-commercial-exterior-design', { w: 1600 }),
  },
];

const timeline = [
  { num: '01', title: 'Site Analysis', desc: 'Understanding location, environment, requirements, and opportunities.' },
  { num: '02', title: 'Concept Development', desc: 'Creating initial exterior design directions and architectural ideas.' },
  { num: '03', title: 'Design Refinement', desc: 'Improving materials, forms, details, and visual balance.' },
  { num: '04', title: 'Technical Coordination', desc: 'Aligning design with engineering and construction requirements.' },
  { num: '05', title: 'Final Implementation Support', desc: 'Supporting execution to achieve the intended final result.' },
];

const principles = [
  { title: 'Architectural Identity', desc: 'Every building should communicate a unique story and purpose.' },
  { title: 'Functional Beauty', desc: 'Design decisions should improve both appearance and usability.' },
  { title: 'Long-Term Value', desc: 'Create exteriors that remain attractive, durable, and relevant.' },
];

const featured = [
  { title: 'Cliffside Villa', location: 'Dar es Salaam, TZ', service: 'Residential Exterior Design', year: '2024', image: cld('services-exterior-design-related-cliffside-villa', { w: 1600 }) },
  { title: 'Market Square Offices', location: 'Kigali, RW', service: 'Commercial Exterior Design', year: '2023', image: cld('services-exterior-design-related-market-square-offices', { w: 1600 }) },
  { title: 'Harbor Apartments', location: 'Mombasa, KE', service: 'Apartment Development', year: '2025', image: cld('services-exterior-design-related-harbor-apartments', { w: 1600 }) },
];

const faqs = [
  { q: 'What is included in exterior design services?', a: 'Façade concepts, material selection, detailing, lighting strategies, and coordination with engineering and construction.' },
  { q: 'Can you redesign an existing building exterior?', a: 'Yes — we specialise in sensitive upgrades that improve performance and appearance while respecting the original character.' },
  { q: 'Do you provide exterior design for residential projects?', a: 'Yes — from single-family homes to apartment developments, we deliver tailored exterior solutions.' },
  { q: 'Can exterior design be combined with construction services?', a: 'Yes. GEA offers integrated delivery options, combining design with contracting and construction oversight.' },
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

export default function ExteriorDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-hidden" style={{ marginTop: '88px' }}>

      {/* HERO SECTION */}
      <section className="relative flex items-end bg-[#0D1B2A] text-white overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.30 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src={cld('heroes-services-exterior-design', { w: 1800 })}
            alt="Exterior Design"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-24">
          <div className="flex items-center gap-2 mb-10 text-[11px] font-[500] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link href="/services" className="hover:text-white/70 transition-colors">Expertise</Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-white/70">Exterior Design</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Facade &amp; Envelope Expertise</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-[36px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[800px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Exterior Design That Defines Identity.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[540px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            GEA creates striking building exteriors that balance advanced technical envelope engineering, climate resilience, and timeless architectural statement.
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

      {/* INTRODUCTION (Two-Column Editorial Overview) */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Overview</span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.2]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Skins That Perform. <br />
                <span className="font-[300] text-[#10367D]">Forms That Inspire.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 pt-4">
              <p className="text-[17px] leading-[1.9] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                A building's facade is its public voice, protecting what is inside while communicating its identity to the world. We design facades and external spaces that respond to climate, context, materiality and long-term value. Our work connects exterior design with architecture, engineering and construction to deliver coherent, buildable outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE (Minimalist Bento-inspired Grid) */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#10367D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[700px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Tailored solutions for <span className="font-[300]">building envelopes.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provisions.map((item, idx) => (
            <motion.div 
              key={item.num} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: '-60px' }} 
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between bg-white rounded-[24px] overflow-hidden border border-[#E6E6E6] hover:border-[#C8A45D] hover:shadow-card-hover transition-all duration-500 p-8 min-h-[420px]"
            >
              <div>
                {/* Image Showcase inside Card */}
                <div className="relative w-full h-[180px] overflow-hidden rounded-[16px] mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center border border-[#E6E6E6]">
                    <span className="text-[12px] font-[700] text-[#10367D]">{item.num}</span>
                  </div>
                </div>

                <h3 className="text-[22px] font-[700] text-[#1F2937] tracking-tight leading-[1.2] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                <p className="text-[14px] leading-[1.65] text-[#1F2937]/60 font-[300] mb-6">{item.desc}</p>
              </div>

              {/* Point highlights */}
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

      {/* DESIGN PROCESS (Premium Stepper Timeline) */}
      <section className="bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[650px] mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Design Process</span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-4">A structured path to perfect execution.</h2>
            <p className="text-[15.5px] font-[300] text-[#1F2937]/60">Click through each phase of our collaborative design journey.</p>
          </div>

          {/* Stepper Buttons */}
          <div className="relative max-w-[1000px] mx-auto">
            {/* Timeline horizontal background line */}
            <div className="absolute top-[20px] left-8 right-8 h-[2px] bg-[#E6E6E6] hidden md:block z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative z-10 mb-12">
              {timeline.map((step, idx) => {
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

            {/* Stepper Active Card */}
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8F8F8] border border-[#E6E6E6] rounded-[24px] p-8 md:p-12 max-w-[800px] mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center"
            >
              <div className="text-[52px] font-[300] text-[#C8A45D] leading-none shrink-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {timeline[activeStep].num}
              </div>
              <div>
                <h3 className="text-[22px] font-[700] text-[#1F2937] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>{timeline[activeStep].title}</h3>
                <p className="text-[15.5px] leading-[1.8] font-[300] text-[#1F2937]/60">{timeline[activeStep].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY (Editorial split cover) */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Design Philosophy</span>
            </div>
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.05] mb-10">Designing Exteriors That Stand The Test Of Time.</h2>
            
            <div className="space-y-8">
              {principles.map((p, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="text-[14px] font-[700] text-[#C8A45D] mt-1">/ 0{idx + 1}</span>
                  <div>
                    <h3 className="text-[20px] font-[700] text-[#1F2937] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{p.title}</h3>
                    <p className="text-[15px] leading-[1.8] font-[300] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[24px] border border-[#E6E6E6] shadow-xl">
              <img src={cld('services-exterior-design-exterior-detail', { w: 1600 })} alt="Exterior detail" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GEA */}
      <section className="bg-[#0D1B2A] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div className="max-w-[560px]"><div className="inline-flex items-center gap-3 mb-5"><span className="h-[1px] w-6 bg-[#C8A45D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]">Why Choose GEA</span></div><h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]">Integrated design &amp; delivery for <span className="font-[300] text-white/70">lasting value.</span></h2></div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]">Exterior design grounded in technical understanding, coordinated delivery and a commitment to material quality.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            <div className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"><span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">01</span><div><h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5">Integrated Expertise</h3><p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">Exterior design connected with architecture, engineering, and construction.</p></div></div>
            <div className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"><span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">02</span><div><h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5">Technical Understanding</h3><p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">Design solutions that consider real construction requirements.</p></div></div>
            <div className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"><span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">03</span><div><h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5">Quality Approach</h3><p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">Attention to materials, details, and execution.</p></div></div>
            <div className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"><span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">04</span><div><h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5">Complete Support</h3><p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">Guidance from concept development to project completion.</p></div></div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div><div className="inline-flex items-center gap-3 mb-6"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Featured Projects</span></div><h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Exterior work that <span className="font-[300]">defines place.</span></h2></div>
            <Link href="/projects" className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}><span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" /><span className="group-hover:text-[#10367D] transition-colors">View All Projects</span><ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} /></Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[320px] gap-4 lg:gap-5">
            {featured.map((p, idx) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: idx * 0.08 }} className={`group relative overflow-hidden rounded-[20px] cursor-default`}>
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/85 via-[#1F2937]/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D] mb-2">{p.service}</span>
                  <h3 className="text-xl lg:text-[26px] font-[700] text-white tracking-tight leading-[1.2] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{p.title}</h3>
                  <span className="text-[12px] font-[300] text-white/60">{p.location} • {p.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="mx-auto max-w-[900px] px-8 lg:px-16">
          <div className="text-center mb-14 lg:mb-16"><div className="inline-flex items-center gap-3 mb-6 justify-center"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">FAQ</span><span className="h-[1px] w-6 bg-[#10367D]" /></div><h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Common <span className="font-[300]">questions.</span></h2></div>

          <div className="border-t border-[#E6E6E6]">
            {faqs.map((f, idx) => (
              <div key={f.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <meta itemProp="name" content={f.q} />
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <meta itemProp="text" content={f.a} />
                  <FaqItem q={f.q} a={f.a} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0D1B2A] py-32 lg:py-44">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.03] text-white mb-6">Let's Create A Building That Makes An Impact.</h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.8] font-[300] text-white/55 mb-8">Whether developing a new property or transforming an existing one, GEA provides exterior solutions designed around your vision.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">Request Consultation<ArrowRight className="h-4 w-4" strokeWidth={2} /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

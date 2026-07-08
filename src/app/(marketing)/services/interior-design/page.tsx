'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

const servicesProvided = [
  {
    num: '01',
    title: 'Space Planning',
    desc: 'Layouts that prioritise flow, natural light and the way people actually use the room.',
    points: ['Circulation & adjacency studies', 'Furniture layouts', 'Zoning & program optimisation'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
  },
  {
    num: '02',
    title: 'Concept Development',
    desc: 'Concepts that set the tone — material direction, palette and spatial character that feels uniquely yours.',
    points: ['Mood & material boards', 'Mood sketches & concept diagrams', 'Design language definition'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    num: '03',
    title: 'Material & Finish Selection',
    desc: 'Curated materials chosen for durability, tactility and lasting refinement.',
    points: ['Finish schedules', 'Sample coordination', 'Sustainability & maintenance guidance'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    num: '04',
    title: 'Residential Interiors',
    desc: 'Tailored homes that balance comfort, proportion and crafted detail.',
    points: ['Private residences & apartments', 'Custom joinery design', 'Lighting & furniture specification'],
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    num: '05',
    title: 'Commercial Interiors',
    desc: 'Commercial spaces designed for clarity, flexibility and brand expression.',
    points: ['Office & workspace layouts', 'Retail & hospitality fit-outs', 'Brand integration'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  },
  {
    num: '06',
    title: '3D Visualization',
    desc: 'Photoreal renders and walkthroughs to validate design choices and communicate intent.',
    points: ['Renders & walkthroughs', 'Lighting studies', 'Material & colour verification'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
  },
];

const process = [
  { num: '01', title: 'Discovery', desc: 'Stakeholder interviews, site review and a clear brief that defines success.' },
  { num: '02', title: 'Concept Design', desc: 'Initial spatial options, palettes and concept visuals for direction and sign-off.' },
  { num: '03', title: 'Design Development', desc: 'Detailed plans, sections and schedules coordinated for procurement.' },
  { num: '04', title: 'Visualization', desc: 'Photoreal renders and material mockups to confirm the design.' },
  { num: '05', title: 'Implementation Support', desc: 'Site visits, contractor coordination and finish checks through handover.' },
];

const principles = [
  { title: 'Function First', desc: 'Design that serves how the space is used, not trends.' },
  { title: 'Timeless Aesthetics', desc: 'Clean, restrained palettes that age with dignity.' },
  { title: 'Detail Driven', desc: 'Every junction, material and edge considered and resolved.' },
];

const featured = [
  { title: 'Lark House', location: 'Nairobi, KE', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', span: 'lg:col-span-2' },
  { title: 'Claremont Loft', location: 'Cape Town, ZA', image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80', span: '' },
  { title: 'Mercer Offices', location: 'Kigali, RW', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', span: '' },
];

const faqs = [
  { q: 'What does an interior design engagement include?', a: 'Our interior design service covers space planning, concept development, material selection, documentation and implementation support — tailored to the scale of your project.' },
  { q: 'How long does an interior design project take?', a: 'Timelines vary by scope. A residential scheme from concept to implementation support typically ranges 8-16 weeks; larger commercial projects are scheduled after an initial briefing.' },
  { q: 'Can you manage procurement and fit-out?', a: 'Yes. We provide procurement support, contractor coordination and on-site inspections to ensure finishes and installations meet the design intent.' },
  { q: 'Do you offer bespoke joinery design?', a: 'We design custom joinery as part of our documentation package and can work with trusted workshops and suppliers to realise the pieces.' },
  { q: 'Do you provide 3D renders?', a: 'Yes. High-quality 3D visualisation is offered to every client so you can see the finished space before procurement begins.' },
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

export default function InteriorDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-x-hidden">

      {/* HERO SECTION (Premium Asymmetrical Split-Screen) */}
      <section className="relative min-h-[90vh] mt-[152px] flex items-center bg-[#0D1B2A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative mx-auto w-full max-w-[1440px] px-8 lg:px-16 py-12 lg:py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <Link href="/services" className="group inline-flex items-center gap-2 text-[12px] font-[500] uppercase tracking-[0.15em] text-[#C8A45D] hover:text-white transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={1.5} />
                  All Services
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Design &amp; Finishes</span>
              </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="text-[30px] sm:text-[40px] md:text-[52px] lg:text-[76px] font-[800] tracking-[-0.03em] text-white leading-[1.1] max-w-[720px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Interior Design That <span className="text-[#C8A45D] font-[350]">Shapes Experience.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.26 }} className="mt-6 text-[15.5px] sm:text-[16.5px] font-[300] leading-[1.85] text-white/70 max-w-[620px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Considered interiors that balance material honesty, spatial comfort, and lasting quality — tailored to how each space will actually be used.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.34 }} className="mt-10 flex flex-wrap gap-4">
                <Link href="/quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
                  Request Consultation <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center rounded-[999px] border border-white/20 bg-white/5 px-8 py-4 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                  View Portfolio
                </Link>
              </motion.div>
            </div>

            {/* Hero Image Panel */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative aspect-[3/4] max-w-[420px] mx-auto lg:ml-auto w-full rounded-[24px] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern minimalist interior space" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
                
                {/* Floating Architectural Data Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0D1B2A]/80 backdrop-blur-md rounded-[16px] border border-white/10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D] font-[600]">Featured Work</div>
                  <div className="text-[16px] font-[700] text-white mt-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Claremont Loft</div>
                  <div className="text-[12px] text-white/50 font-[300] mt-0.5">Cape Town, South Africa • 2024</div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION (Two-Column Editorial Overview) */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Our Philosophy</span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.2]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Use, Craft, <br />
                <span className="font-[300] text-[#10367D]">and Longevity.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 pt-4">
              <p className="text-[17px] leading-[1.9] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our approach blends pragmatic planning with refined material intent — creating spaces that perform beautifully over time. We focus on clarity, material honesty and detailed execution to ensure each project reads as a considered whole.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES PROVIDED (Minimalist Bento-inspired Grid) */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#10367D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[700px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Bespoke design for <span className="font-[300]">refined spaces.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesProvided.map((item, idx) => (
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

            {/* Stepper Active Card */}
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

      {/* DESIGN PRINCIPLES (Editorial split cover) */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Design Principles</span>
            </div>
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.05] mb-10">Principles that guide every spatial decision.</h2>
            
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
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80" alt="Interior detail" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GEA */}
      <section className="bg-[#0D1B2A] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div className="max-w-[560px]"><div className="inline-flex items-center gap-3 mb-5"><span className="h-[1px] w-6 bg-[#C8A45D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]">Why Choose GEA</span></div><h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]">A studio approach with <span className="font-[300] text-white/70">measurable delivery.</span></h2></div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]">We combine refined design sensibility with practical delivery capabilities — so projects feel premium and build reliably.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            <div className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"><span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">01</span><div><h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5">Craft &amp; Quality</h3><p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">Materials and workmanship specified to a premium standard.</p></div></div>
            <div className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"><span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">02</span><div><h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5">Integrated Delivery</h3><p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">Coordination with engineering and contracting for seamless handover.</p></div></div>
            <div className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"><span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5">03</span><div><h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5">Client Partnership</h3><p className="text-[12.5px] leading-[1.65] font-[300] text-white/45">We treat each brief as a collaboration, not a transaction.</p></div></div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div><div className="inline-flex items-center gap-3 mb-6"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Featured Projects</span></div><h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Selected interior <span className="font-[300]">work.</span></h2></div>
            <Link href="/projects" className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}><span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" /><span className="group-hover:text-[#10367D] transition-colors">View All Projects</span><ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} /></Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[260px] lg:auto-rows-[300px] gap-4 lg:gap-5">
            {featured.map((p, idx) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: idx * 0.08 }} className={`group relative overflow-hidden rounded-[20px] cursor-default ${p.span}`}>
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/85 via-[#1F2937]/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D] mb-2">Interior Design</span>
                  <h3 className="text-xl lg:text-[26px] font-[700] text-white tracking-tight leading-[1.2] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{p.title}</h3>
                  <span className="text-[12px] font-[300] text-white/60">{p.location}</span>
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
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.03] text-white mb-6">Bring your interiors to life — <span className="text-[#C8A45D]">with GEA.</span></h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.8] font-[300] text-white/55 mb-8">We combine design ambition with delivery rigour to produce interiors that look refined and function effortlessly.</p>
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

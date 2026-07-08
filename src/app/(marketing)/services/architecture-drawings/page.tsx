'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

// ─── Data ────────────────────────────────────────────────────────────────────

const deliverables = [
  {
    num: '01',
    title: 'Floor Plans',
    desc: 'Precisely dimensioned layouts that define every room, circulation path, and structural element — the foundation every other drawing builds on.',
    points: ['Room layouts & dimensions', 'Furniture & fixture placement', 'Structural grid coordination', 'Area & efficiency calculations'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '02',
    title: 'Building Elevations',
    desc: 'Elevation drawings that resolve how a building presents itself from every angle — material, proportion, and detail resolved before construction begins.',
    points: ['Facade composition', 'Material & finish callouts', 'Height & datum references', 'Window & door scheduling'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '03',
    title: 'Section Drawings',
    desc: 'Cross-sectional views that reveal the vertical relationships within a building — critical for coordinating structure, services, and spatial quality.',
    points: ['Vertical circulation', 'Ceiling & floor build-ups', 'Structural depth coordination', 'Natural light & ventilation study'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '04',
    title: '3D Visualization',
    desc: 'Photorealistic renders and walkthroughs that let clients see and approve their project long before the first brick is laid.',
    points: ['Exterior & interior renders', 'Material & lighting studies', 'Walkthrough animations', 'Client presentation packages'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
  },
  {
    num: '05',
    title: 'Construction Documentation',
    desc: 'Fully coordinated drawing sets issued for construction and permitting — the technical backbone that keeps every trade aligned on site.',
    points: ['Permit & approval sets', 'Detail & assembly drawings', 'Specification schedules', 'Contractor coordination sets'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
  },
];

const process = [
  { num: '01', title: 'Consultation', desc: 'Understanding your brief, site conditions, and long-term ambitions for the space.' },
  { num: '02', title: 'Concept Development', desc: 'Early spatial studies and massing options that establish the project\u2019s direction.' },
  { num: '03', title: 'Design Refinement', desc: 'Layouts, elevations, and sections resolved in detail with your feedback built in.' },
  { num: '04', title: 'Technical Documentation', desc: 'Fully coordinated construction drawings prepared for permitting and build.' },
  { num: '05', title: 'Project Support', desc: 'Ongoing drawing revisions and technical support through to project completion.' },
];

const strengths = [
  { num: '01', title: 'Precision & Accuracy', desc: 'Every drawing checked and cross-referenced before it ever reaches a contractor.' },
  { num: '02', title: 'Experienced Architects', desc: 'A qualified team with two decades of combined design and documentation experience.' },
  { num: '03', title: 'Code Compliant', desc: 'Drawings prepared to meet local regulatory and permitting requirements from the outset.' },
  { num: '04', title: 'Collaborative Process', desc: 'You review and shape every stage — nothing is finalised without your sign-off.' },
  { num: '05', title: 'Fast Turnaround', desc: 'A disciplined workflow that keeps your project moving without sacrificing detail.' },
  { num: '06', title: 'Ongoing Support', desc: 'Revisions and technical clarifications available throughout construction.' },
];

const relatedProjects = [
  {
    title: 'The Horizon Commission',
    category: 'Structural Engineering & Architecture',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Opus Residence',
    category: 'Interior Finishes & Supply',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    span: '',
  },
  {
    title: 'Aura Technology Hub',
    category: 'Commercial Contracting',
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    span: '',
  },
];

const faqs = [
  {
    q: 'What are architectural drawings and why do I need them?',
    a: 'Architectural drawings are the detailed technical documents — floor plans, elevations, sections, and construction sets — that translate a design concept into a buildable set of instructions. They are required for permitting, contractor pricing, and construction, and they protect you from costly misunderstandings on site.',
  },
  {
    q: 'How long does it take to complete a full drawing set?',
    a: 'Timelines depend on project scale and complexity, but most residential projects move from consultation to a permit-ready drawing set within 4\u20138 weeks. Larger commercial projects are scoped individually during your initial consultation.',
  },
  {
    q: 'Can you help with permits and regulatory approval?',
    a: 'Yes. Every drawing set we produce is prepared to meet local building code and permitting requirements, and we can manage submission and liaison with the relevant regulatory authority on your behalf.',
  },
  {
    q: 'Do you provide 3D renders alongside technical drawings?',
    a: 'Yes. Photorealistic 3D visualisation is available as part of every architecture drawings engagement, giving you a clear picture of the finished space before construction begins.',
  },
  {
    q: 'Can you work from an existing concept or design I already have?',
    a: 'Absolutely. We regularly take a client\u2019s existing concept, sketch, or brief from another designer and develop it into a fully coordinated, construction-ready drawing set.',
  },
  {
    q: 'Will the drawings be compatible with my contractor?',
    a: 'Yes. All construction documentation is issued in industry-standard formats and coordinated with structural, MEP, and other engineering disciplines so any qualified contractor can build directly from the set.',
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#E6E6E6]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="text-[17px] lg:text-[19px] font-[600] text-[#1F2937] tracking-tight"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {q}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E6E6E6] text-[#10367D] transition-colors duration-200">
          {isOpen ? <Minus className="h-3.5 w-3.5" strokeWidth={1.5} /> : <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p
          className="pb-7 pr-10 text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {a}
        </p>
      </motion.div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ArchitectureDrawingsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative h-[85vh] min-h-[640px] mt-[152px] flex items-end bg-[#1F2937] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
            alt="Architectural drawing set for a residential development"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10367D]/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-16 lg:pb-24 z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[12px] font-[500] uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={1.5} />
              All Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Design &amp; Documentation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] sm:text-[58px] lg:text-[76px] font-[800] tracking-[-0.03em] text-white leading-[1.05] max-w-[820px]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Architecture Drawings
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[15.5px] sm:text-[16.5px] font-[300] leading-[1.85] text-white/70 max-w-[600px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Precise architectural drawings that translate ambition into buildable form — from early concept sketches to fully coordinated construction documentation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Link
              href="/quote"
              className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              <span>Request Consultation</span>
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="bg-white py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[780px] px-8 lg:px-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-8 justify-center">
            <span className="h-[1px] w-6 bg-[#10367D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Why It Matters
            </span>
            <span className="h-[1px] w-6 bg-[#10367D]" />
          </div>
          <h2 className="text-3xl lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.2] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Every great building begins on <span className="font-[300] text-[#10367D]">paper, before it exists in steel and stone.</span>
          </h2>
          <p className="text-[16px] leading-[1.9] font-[300] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            Architectural drawings are the single point of truth for every person involved in a project — the client approving a vision, the contractor pricing the build, and the authority granting a permit. Get them wrong, and costly errors surface on site. Get them right, and every stage that follows moves with confidence. It is the most consequential, least visible work in construction.
          </p>
        </motion.div>
      </section>

      {/* ─── SERVICES PROVIDED (alternating editorial rows) ─── */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                What&apos;s Included
              </span>
            </div>
            <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[700px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              A complete <span className="font-[300]">drawing set.</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {deliverables.map((item, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <motion.article
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-[1440px] w-full px-8 lg:px-16"
              >
                <div className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-6/12">
                    <div className="relative w-full aspect-[4/3] lg:aspect-[16/12] overflow-hidden rounded-[24px] bg-white">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        src={item.image}
                        alt={`${item.title} example \u2014 Global Engineering Agency`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-6/12 flex flex-col justify-center">
                    <span className="text-[13px] font-[700] tracking-[0.2em] text-[#C8A45D] mb-6 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.num}
                    </span>
                    <h3 className="text-3xl lg:text-[36px] font-[700] text-[#1F2937] tracking-tight leading-[1.15] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.85] text-[#1F2937]/60 font-[300] mb-8 max-w-[500px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-[500px]">
                      {item.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[13.5px] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#C8A45D]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ─── PROCESS (vertical timeline) ─── */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[600px] mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                How We Work
              </span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              From brief to <span className="font-[300]">buildable set.</span>
            </h2>
          </div>

          <div className="relative max-w-[760px] mx-auto">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#E6E6E6]" />
            <div className="flex flex-col gap-14 lg:gap-16">
              {process.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex gap-8"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border-2 border-[#C8A45D]">
                    <span className="text-[12px] font-[700] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.num}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-[22px] lg:text-[26px] font-[700] text-[#1F2937] tracking-tight mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60 max-w-[560px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (typography + dividers) ─── */}
      <section className="bg-[#0D1B2A] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14"
          >
            <div className="max-w-[560px]">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Drawings you and your <span className="font-[300] text-white/70">contractor can build on.</span>
              </h2>
            </div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Every set is checked, coordinated, and issued the way a premium studio would sign its own name to it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"
              >
                <span className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[15px] font-[600] text-white tracking-tight mb-1.5 group-hover:text-[#C8A45D] transition-colors duration-300" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.65] font-[300] text-white/45" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED PROJECTS ─── */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Related Work
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Drawn, documented, <span className="font-[300]">delivered.</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" />
              <span className="group-hover:text-[#10367D] transition-colors">View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[260px] lg:auto-rows-[300px] gap-4 lg:gap-5">
            {relatedProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-[20px] cursor-default ${project.span}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/85 via-[#1F2937]/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D] mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {project.category}
                  </span>
                  <h3
                    className="text-xl lg:text-[26px] font-[700] text-white tracking-tight leading-[1.2] mb-1 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-[12px] font-[300] text-white/60">{project.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="mx-auto max-w-[900px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14 lg:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                FAQ
              </span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Common <span className="font-[300]">questions.</span>
            </h2>
          </motion.div>

          <div className="border-t border-[#E6E6E6]">
            {faqs.map((faq, idx) => (
              <div key={faq.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <meta itemProp="name" content={faq.q} />
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <meta itemProp="text" content={faq.a} />
                  <FaqItem
                    q={faq.q}
                    a={faq.a}
                    isOpen={openFaq === idx}
                    onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative overflow-hidden bg-[#0D1B2A] py-32 lg:py-44">
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-8 lg:px-16 opacity-[0.04]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-[1px] bg-white h-full" />
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C8A45D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.3em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Start Your Drawing Set
              </span>
              <span className="h-[1px] w-8 bg-[#C8A45D]" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.05] text-white mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to put your vision<br />
              <span className="text-[#C8A45D]">on paper?</span>
            </h2>
            <p className="mx-auto max-w-[580px] text-[16px] leading-[1.8] font-[300] text-white/55" style={{ fontFamily: 'Inter, sans-serif' }}>
              From first sketch to permit-ready set, our architects are ready to give your project the precision it deserves.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/quote"
              className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white"
            >
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

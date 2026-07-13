'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';

const deliverables = [
  {
    num: '01',
    title: 'Residential Demolition',
    desc: 'Safe demolition of houses, villas, apartments, and residential structures.',
    points: ['House demolition', 'Villa dismantling', 'Apartment removal', 'Residential site clearing'],
    image: cld('services-property-demolition-residential-demolition', { w: 1400 }),
  },
  {
    num: '02',
    title: 'Commercial Demolition',
    desc: 'Demolition of office buildings, retail spaces, hotels, and commercial facilities with minimal disruption.',
    points: ['Office buildings', 'Retail units', 'Hotel facilities', 'Controlled work sequencing'],
    image: cld('services-property-demolition-commercial-demolition', { w: 1400 }),
  },
  {
    num: '03',
    title: 'Industrial Demolition',
    desc: 'Controlled dismantling of warehouses, factories, and industrial facilities using specialized equipment and procedures.',
    points: ['Warehouses', 'Factories', 'Heavy-duty machinery', 'Specialized demolition procedures'],
    image: cld('services-property-demolition-industrial-demolition', { w: 1400 }),
  },
  {
    num: '04',
    title: 'Interior Strip-Out Works',
    desc: 'Selective demolition of interior spaces during refurbishment or redevelopment projects.',
    points: ['Selective strip-out', 'Partition removal', 'Finish stripping', 'Redevelopment prep'],
    image: cld('services-property-demolition-interior-strip-out-works', { w: 1400 }),
  },
  {
    num: '05',
    title: 'Site Clearance',
    desc: 'Removal of debris, foundations, and unwanted structures to prepare sites for future construction.',
    points: ['Debris removal', 'Foundation clearance', 'Site leveling', 'Readiness for build'],
    image: cld('services-property-demolition-site-clearance', { w: 1400 }),
  },
  {
    num: '06',
    title: 'Waste Management & Recycling',
    desc: 'Responsible sorting, recycling, and disposal of demolition materials to minimize environmental impact.',
    points: ['Material sorting', 'Recycling plans', 'Responsible disposal', 'Environmental controls'],
    image: cld('services-property-demolition-waste-management-recycling', { w: 1400 }),
  },
  {
    num: '07',
    title: 'Redevelopment Preparation',
    desc: 'Prepare cleared sites for architecture, engineering, and construction works managed by GEA.',
    points: ['Redevelopment readiness', 'Plot preparation', 'Future build coordination', 'Development handover'],
    image: cld('services-property-demolition-redevelopment-preparation', { w: 1400 }),
  },
];

const process = [
  { num: '01', title: 'Site Inspection', desc: 'Assess the property, surrounding environment, utilities, and structural conditions.' },
  { num: '02', title: 'Planning & Permits', desc: 'Prepare demolition methodology, safety plans, environmental controls, and obtain required approvals.' },
  { num: '03', title: 'Controlled Demolition', desc: 'Execute demolition using modern equipment and strict safety procedures.' },
  { num: '04', title: 'Debris Removal', desc: 'Sort, recycle, transport, and responsibly dispose of demolition waste.' },
  { num: '05', title: 'Site Preparation', desc: 'Level and prepare the site for its next stage of development.' },
];

const strengths = [
  { num: '01', title: 'Safety First', desc: 'Every demolition project follows strict health, safety, and environmental standards.' },
  { num: '02', title: 'Experienced Professionals', desc: 'Qualified engineers and construction specialists oversee every stage of demolition.' },
  { num: '03', title: 'Modern Equipment', desc: 'Use advanced machinery and controlled demolition techniques for efficient execution.' },
  { num: '04', title: 'Complete Project Lifecycle', desc: 'From demolition to architectural design, construction, and redevelopment—all under one trusted partner.' },
];

const relatedProjects = [
  {
    title: 'Residential Redevelopment',
    category: 'Residential Demolition',
    location: 'Kigali, Rwanda',
    projectType: 'Detached House',
    servicesDelivered: 'Controlled demolition and site preparation',
    completionYear: '2025',
    image: cld('services-property-demolition-related-residential-redevelopment', { w: 1600 }),
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Commercial Building Demolition',
    category: 'Commercial Demolition',
    location: 'Nairobi, Kenya',
    projectType: 'Office Building',
    servicesDelivered: 'Selective dismantling and debris removal',
    completionYear: '2024',
    image: cld('services-property-demolition-related-commercial-building-demolition', { w: 1200 }),
    span: '',
  },
  {
    title: 'Industrial Facility Clearance',
    category: 'Industrial Demolition',
    location: 'Mombasa, Kenya',
    projectType: 'Warehouse',
    servicesDelivered: 'Heavy structure dismantling and site clearance',
    completionYear: '2024',
    image: cld('services-property-demolition-related-industrial-facility-clearance', { w: 1200 }),
    span: '',
  },
  {
    title: 'Hotel Renovation Preparation',
    category: 'Hospitality Strip-Out',
    location: 'Marrakech, Morocco',
    projectType: 'Hotel',
    servicesDelivered: 'Interior strip-out and preparatory works',
    completionYear: '2023',
    image: cld('services-property-demolition-related-hotel-renovation-preparation', { w: 1200 }),
    span: '',
  },
  {
    title: 'Urban Redevelopment Project',
    category: 'City Redevelopment',
    location: 'Dar es Salaam, Tanzania',
    projectType: 'Urban Block',
    servicesDelivered: 'Demolition, recycling, and site preparation',
    completionYear: '2025',
    image: cld('services-property-demolition-related-urban-redevelopment-project', { w: 1200 }),
    span: '',
  },
  {
    title: 'Mixed-Use Development Site',
    category: 'Redevelopment Site',
    location: 'Doha, Qatar',
    projectType: 'Mixed-Use Plot',
    servicesDelivered: 'Demolition and future development readiness',
    completionYear: '2024',
    image: cld('services-property-demolition-related-mixed-use-development-site', { w: 1200 }),
    span: '',
  },
];

const faqs = [
  {
    q: 'What types of buildings do you demolish?',
    a: 'We handle residential, commercial, industrial, and institutional demolition projects, with each scope adapted to the structure and site conditions.',
  },
  {
    q: 'Do you handle demolition permits?',
    a: 'Yes. We prepare the necessary demolition plans, controls, and permit documentation required for a compliant project start.',
  },
  {
    q: 'How do you ensure demolition safety?',
    a: 'We use structured planning, risk assessment, controlled methods, exclusion zones, and strict supervision to ensure safety throughout the project.',
  },
  {
    q: 'Can demolition waste be recycled?',
    a: 'Yes. We sort, recycle, and responsibly dispose of demolition materials wherever possible to reduce environmental impact.',
  },
  {
    q: 'Do you prepare the site for new construction?',
    a: 'Yes. We clear, level, and prepare sites so they are ready for the next stage of development or construction.',
  },
  {
    q: 'Can GEA manage the entire redevelopment project after demolition?',
    a: 'Yes. Because we also provide architecture, engineering, and construction services, we can continue with the full redevelopment process after demolition.',
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

export default function PropertyDemolitionPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-hidden" style={{ marginTop: '88px' }}>
      <section className="relative flex items-end bg-[#0D1B2A] text-white overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src={cld('heroes-services-property-demolition', { w: 1800 })}
            alt="Property Demolition"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-24">
          <div className="flex items-center gap-2 mb-10 text-[11px] font-[500] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link href="/services" className="hover:text-white/70 transition-colors">Expertise</Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-white/70">Property &amp; Investment</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Property &amp; Investment</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-[36px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[900px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Professional Property Demolition &amp; Site Clearance Services
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[640px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Global Engineering Agency provides professional demolition services for residential, commercial, industrial, and institutional properties, ensuring safe execution, regulatory compliance, environmental responsibility, and complete site readiness for future development.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
              Request Site Assessment
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2.5 rounded-[999px] border border-white/20 px-7 py-3.5 text-[13.5px] font-[500] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              View Demolition Projects
            </Link>
          </motion.div>
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
                Professional Demolition with <br />
                <span className="font-[300] text-[#10367D]">Safety at the Core.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 pt-4">
              <p className="text-[17px] leading-[1.9] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Demolition is a carefully engineered process requiring planning, structural assessment, environmental protection, and strict safety management. GEA manages demolition responsibly while preparing sites for redevelopment, renovation, or new construction, ensuring each project is executed with precision and control.
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
          <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[800px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Demolition and site preparation <span className="font-[300]">services.</span>
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
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-4">From site inspection to preparation.</h2>
            <p className="text-[15.5px] font-[300] text-[#1F2937]/60">Explore each phase of our demolition process.</p>
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
            <div className="max-w-[560px]"><div className="inline-flex items-center gap-3 mb-5"><span className="h-[1px] w-6 bg-[#C8A45D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]">Why Choose Us</span></div><h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]">Demolition managed with <span className="font-[300] text-white/70">precision and responsibility.</span></h2></div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]">We deliver demolition as a controlled engineering process, not a destructive shortcut.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 border-t border-white/10">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.06 }}
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
            <div><div className="inline-flex items-center gap-3 mb-6"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Related Projects</span></div><h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Demolished, cleared, <span className="font-[300]">and ready for redevelopment.</span></h2></div>
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
                  <div className="mt-4 space-y-1 text-[12px] font-[300] text-white/70">
                    <p>Project Type: {project.projectType}</p>
                    <p>Services Delivered: {project.servicesDelivered}</p>
                    <p>Completion Year: {project.completionYear}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]" itemScope itemType="https://schema.org/FAQPage">
        <div className="mx-auto max-w-[900px] px-8 lg:px-16">
          <div className="text-center mb-14 lg:mb-16"><div className="inline-flex items-center gap-3 mb-6 justify-center"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">FAQ</span><span className="h-[1px] w-6 bg-[#10367D]" /></div><h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Common <span className="font-[300]">questions.</span></h2></div>

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
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.03] text-white mb-6">Clear the way for <span className="text-[#C8A45D]">your next development.</span></h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.8] font-[300] text-white/55 mb-8">Whether you&apos;re removing an outdated structure, preparing land for a new project, or planning a complete redevelopment, Global Engineering Agency delivers safe, efficient, and professionally managed demolition services.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">Request Site Assessment<ArrowRight className="h-4 w-4" strokeWidth={2} /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      <section className="sr-only" aria-hidden="false">
        <nav aria-label="Related services">
          <Link href="/services/general-contracting">General Contracting</Link>
          <Link href="/services/property-refurbishment">Property Refurbishment</Link>
          <Link href="/services/real-estate-services">Real Estate Services</Link>
          <Link href="/services/architecture-drawings">Architecture Drawings</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>

      <Footer />
    </main>
  );
}

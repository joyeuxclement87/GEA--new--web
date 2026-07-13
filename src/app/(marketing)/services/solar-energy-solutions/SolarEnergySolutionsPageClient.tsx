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
    title: 'Residential Solar Systems',
    desc: 'Design and install efficient rooftop solar systems for homes and residential developments.',
    points: ['Rooftop PV design', 'Energy yield analysis', 'Grid-tied integration', 'Low-profile mounting'],
    image: cld('services-solar-energy-solutions-residential-solar-systems', { w: 1400 }),
  },
  {
    num: '02',
    title: 'Commercial Solar Solutions',
    desc: 'Develop scalable solar power systems for offices, shopping centers, hotels, schools, hospitals, and commercial buildings.',
    points: ['Large-roof system design', 'Load matching strategies', 'Business case support', 'Phased expansion planning'],
    image: cld('services-solar-energy-solutions-commercial-solar-solutions', { w: 1400 }),
  },
  {
    num: '03',
    title: 'Industrial Solar Installations',
    desc: 'Provide high-capacity solar solutions for factories, warehouses, and industrial facilities.',
    points: ['High-capacity arrays', 'Factory load profiling', 'Warehouse roof planning', 'Heavy-duty electrical coordination'],
    image: cld('services-solar-energy-solutions-industrial-solar-installations', { w: 1400 }),
  },
  {
    num: '04',
    title: 'Solar Battery Storage',
    desc: 'Integrate battery storage systems to maximize energy independence and provide reliable backup power.',
    points: ['Battery sizing', 'Backup power design', 'Inverter compatibility', 'Load shifting strategies'],
    image: cld('services-solar-energy-solutions-solar-battery-storage', { w: 1400 }),
  },
  {
    num: '05',
    title: 'Hybrid & Off-Grid Systems',
    desc: 'Design hybrid and off-grid solar solutions for locations with limited or unreliable utility power.',
    points: ['Hybrid inverter systems', 'Off-grid autonomy planning', 'Generator integration', 'Remote-site resilience'],
    image: cld('services-solar-energy-solutions-hybrid-off-grid-systems', { w: 1400 }),
  },
  {
    num: '06',
    title: 'Solar System Maintenance',
    desc: 'Provide inspections, preventive maintenance, cleaning, monitoring, and performance optimization.',
    points: ['Routine inspections', 'Panel cleaning programs', 'Performance monitoring', 'Fault diagnostics'],
    image: cld('services-solar-energy-solutions-solar-system-maintenance', { w: 1400 }),
  },
  {
    num: '07',
    title: 'Energy Audits & System Upgrades',
    desc: 'Assess existing energy consumption and recommend improvements that maximize efficiency and return on investment.',
    points: ['Energy audit reporting', 'Upgrade recommendations', 'ROI optimization', 'Existing system retrofit'],
    image: cld('services-solar-energy-solutions-energy-audits-system-upgrades', { w: 1400 }),
  },
];

const process = [
  { num: '01', title: 'Energy Assessment', desc: 'Evaluate energy consumption, building conditions, and project goals.' },
  { num: '02', title: 'System Design', desc: 'Develop a customized solar solution based on energy needs and site conditions.' },
  { num: '03', title: 'Installation', desc: 'Install solar panels, inverters, battery systems, and electrical infrastructure.' },
  { num: '04', title: 'Testing & Commissioning', desc: 'Verify performance, safety, and system efficiency before handover.' },
  { num: '05', title: 'Monitoring & Maintenance', desc: 'Provide ongoing monitoring, maintenance, and technical support to ensure optimal performance.' },
];

const strengths = [
  { num: '01', title: 'Tailored Energy Solutions', desc: 'Every solar system is designed around your building, energy consumption, and future growth.' },
  { num: '02', title: 'Certified Components', desc: 'Use high-quality solar panels, inverters, batteries, and electrical equipment from trusted manufacturers.' },
  { num: '03', title: 'Maximum Energy Efficiency', desc: 'Systems optimized for high performance, reliability, and long-term savings.' },
  { num: '04', title: 'Complete Project Support', desc: 'From consultation and design to installation, monitoring, and maintenance.' },
];

const relatedProjects = [
  {
    title: 'Residential Villa Solar Installation',
    category: 'Residential Solar',
    location: 'Kigali, Rwanda',
    projectType: 'Private Villa',
    servicesDelivered: 'Design, supply, installation, and commissioning',
    completionYear: '2025',
    image: cld('services-solar-energy-solutions-related-residential-villa-solar-installation', { w: 1600 }),
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Commercial Office Solar System',
    category: 'Commercial Solar',
    location: 'Nairobi, Kenya',
    projectType: 'Office Building',
    servicesDelivered: 'Roof-mounted PV, grid integration, monitoring',
    completionYear: '2024',
    image: cld('services-solar-energy-solutions-related-commercial-office-solar-system', { w: 1200 }),
    span: '',
  },
  {
    title: 'Industrial Manufacturing Facility',
    category: 'Industrial Solar',
    location: 'Mombasa, Kenya',
    projectType: 'Manufacturing Plant',
    servicesDelivered: 'High-capacity solar array and battery backup',
    completionYear: '2024',
    image: cld('services-solar-energy-solutions-related-industrial-manufacturing-facility', { w: 1200 }),
    span: '',
  },
  {
    title: 'Hotel Solar Energy Upgrade',
    category: 'Hospitality Energy Retrofit',
    location: 'Marrakech, Morocco',
    projectType: 'Hotel Development',
    servicesDelivered: 'System upgrade, storage, and performance optimization',
    completionYear: '2023',
    image: cld('services-solar-energy-solutions-related-hotel-solar-energy-upgrade', { w: 1200 }),
    span: '',
  },
  {
    title: 'Educational Campus',
    category: 'Institutional Solar',
    location: 'Berlin, Germany',
    projectType: 'Campus Development',
    servicesDelivered: 'PV integration, load planning, and maintenance',
    completionYear: '2025',
    image: cld('services-solar-energy-solutions-related-educational-campus', { w: 1200 }),
    span: '',
  },
  {
    title: 'Healthcare Facility',
    category: 'Critical Infrastructure Solar',
    location: 'Doha, Qatar',
    projectType: 'Hospital Facility',
    servicesDelivered: 'Resilient solar and battery backup solution',
    completionYear: '2024',
    image: cld('services-solar-energy-solutions-related-healthcare-facility', { w: 1200 }),
    span: '',
  },
];

const faqs = [
  {
    q: 'How much can solar energy reduce electricity costs?',
    a: 'Savings depend on the building load, system size, tariff structure, and usage profile, but a well-designed solar installation can significantly reduce electricity costs while improving long-term operating stability.',
  },
  {
    q: 'Do you install solar systems for homes and businesses?',
    a: 'Yes. We design and install solar energy systems for residential, commercial, industrial, and institutional projects of all sizes.',
  },
  {
    q: 'Can solar systems operate during power outages?',
    a: 'Yes, when paired with battery storage or hybrid inverter systems, solar installations can continue to supply essential loads during outages.',
  },
  {
    q: 'Do you provide battery storage solutions?',
    a: 'Yes. We integrate battery storage to improve energy independence, provide backup power, and support more flexible energy use.',
  },
  {
    q: 'How long do solar panels last?',
    a: 'Quality solar panels commonly perform for 25 years or more, with regular maintenance helping preserve output and system reliability over time.',
  },
  {
    q: 'Can existing buildings be upgraded with solar energy systems?',
    a: 'Yes. We assess existing roofs, electrical systems, and energy consumption to determine the best retrofit solar solution for an existing property.',
  },
  {
    q: 'Do you provide maintenance services?',
    a: 'Yes. We provide cleaning, inspections, monitoring, preventive maintenance, and technical support to keep solar systems operating efficiently.',
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

export default function SolarEnergySolutionsPageClient() {
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
            src={cld('heroes-services-solar-energy-solutions', { w: 1800 })}
            alt="Solar Energy Solutions"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-24">
          <div className="flex items-center gap-2 mb-10 text-[11px] font-[500] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link href="/services" className="hover:text-white/70 transition-colors">Expertise</Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-white/70">Solar Energy Solutions</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Engineering Systems</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-[36px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[900px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Solar Energy System Design, Installation &amp; Maintenance Services
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[620px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Global Engineering Agency designs, supplies, installs, and maintains high-performance solar energy systems that reduce electricity costs, improve energy independence, and support sustainable development for homes, businesses, and industries.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap gap-4">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
              Request a Solar Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2.5 rounded-[999px] border border-white/20 px-7 py-3.5 text-[13.5px] font-[500] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              View Solar Projects
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
                Sustainable Energy Solutions <br />
                <span className="font-[300] text-[#10367D]">Built for the Future.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 pt-4">
              <p className="text-[17px] leading-[1.9] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Solar energy is more than an alternative power source — it is a long-term investment in efficiency, sustainability, and operational resilience. GEA integrates solar systems with architecture, electrical engineering, and modern building technologies to reduce operating costs, strengthen energy security, and support environmentally responsible development.
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
            A complete solar energy <span className="font-[300]">implementation service.</span>
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
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-4">From energy assessment to long-term performance.</h2>
            <p className="text-[15.5px] font-[300] text-[#1F2937]/60">Explore each phase of our solar energy implementation process.</p>
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
            <div className="max-w-[560px]"><div className="inline-flex items-center gap-3 mb-5"><span className="h-[1px] w-6 bg-[#C8A45D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]">Why Choose Us</span></div><h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]">Clean energy backed by <span className="font-[300] text-white/70">engineering expertise.</span></h2></div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]">Every solar system is designed, installed, and supported with the same technical discipline clients expect from a premium engineering partner.</p>
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
            <div><div className="inline-flex items-center gap-3 mb-6"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Related Work</span></div><h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Solar projects, <span className="font-[300]">engineered to perform.</span></h2></div>
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
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.03] text-white mb-6">Start your journey toward <span className="text-[#C8A45D]">sustainable energy.</span></h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.8] font-[300] text-white/55 mb-8">Whether you&apos;re building a new property or upgrading an existing one, our solar energy specialists deliver reliable, efficient, and future-ready solutions that reduce costs and support a greener tomorrow.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">Request a Solar Consultation<ArrowRight className="h-4 w-4" strokeWidth={2} /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white">Speak With Our Engineers</Link>
          </div>
        </div>
      </section>

      <section className="sr-only" aria-hidden="false">
        <nav aria-label="Related services">
          <Link href="/services/hvac-systems">HVAC Systems</Link>
          <Link href="/services/mep-engineering">MEP Engineering</Link>
          <Link href="/services/general-contracting">General Contracting</Link>
          <Link href="/solutions">Building Solutions</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>

      <Footer />
    </main>
  );
}

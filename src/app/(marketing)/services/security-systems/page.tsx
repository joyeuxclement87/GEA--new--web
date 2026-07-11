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
    title: 'CCTV Surveillance Systems',
    desc: 'High-definition surveillance solutions with remote monitoring, recording, and intelligent analytics.',
    points: ['HD & IP camera design', 'Remote monitoring access', 'Video analytics & alerts', 'Secure recording & storage'],
    image: cld('services-security-systems-cctv-surveillance-systems', { w: 1400 }),
  },
  {
    num: '02',
    title: 'Access Control Systems',
    desc: 'Secure access management using cards, biometrics, PIN codes, mobile credentials, and centralized administration.',
    points: ['Card & biometric access', 'Mobile credential support', 'Centralized administration', 'Zone-based permissions'],
    image: cld('services-security-systems-access-control-systems', { w: 1400 }),
  },
  {
    num: '03',
    title: 'Video Intercom Systems',
    desc: 'Reliable visitor communication and controlled building entry for residential and commercial properties.',
    points: ['Visitor communication', 'Controlled entry management', 'Residential & commercial fit', 'Integration with access control'],
    image: cld('services-security-systems-video-intercom-systems', { w: 1400 }),
  },
  {
    num: '04',
    title: 'Intruder Alarm Systems',
    desc: 'Detection systems that provide immediate alerts against unauthorized access and security breaches.',
    points: ['Motion & entry detection', 'Immediate alert dispatch', 'Zoned alarm coverage', 'False-alarm minimisation'],
    image: cld('services-security-systems-intruder-alarm-systems', { w: 1400 }),
  },
  {
    num: '05',
    title: 'Perimeter Protection',
    desc: 'Secure fencing integration, motion detection, beam sensors, and perimeter monitoring solutions.',
    points: ['Fencing integration', 'Beam & motion sensors', 'Perimeter monitoring', 'Early-warning detection'],
    image: cld('services-security-systems-perimeter-protection', { w: 1400 }),
  },
  {
    num: '06',
    title: 'Central Monitoring Solutions',
    desc: 'Integrated platforms for monitoring multiple security systems from a single control interface.',
    points: ['Unified control interface', 'Multi-system integration', 'Real-time dashboards', 'Incident response coordination'],
    image: cld('services-security-systems-central-monitoring-solutions', { w: 1400 }),
  },
  {
    num: '07',
    title: 'Maintenance & Technical Support',
    desc: 'Routine inspections, preventive maintenance, upgrades, and emergency technical support.',
    points: ['Scheduled inspections', 'Preventive servicing', 'System upgrades', 'Emergency technical support'],
    image: cld('services-security-systems-maintenance-technical-support', { w: 1400 }),
  },
];

const process = [
  { num: '01', title: 'Security Assessment', desc: 'Evaluate risks, building layout, and security objectives before any design begins.' },
  { num: '02', title: 'System Design', desc: 'Develop integrated security solutions tailored to the property and its risk profile.' },
  { num: '03', title: 'Installation', desc: 'Professional installation and system integration by experienced engineers.' },
  { num: '04', title: 'Testing & Commissioning', desc: 'Verify performance, coverage, and operational reliability before handover.' },
  { num: '05', title: 'Maintenance & Support', desc: 'Provide ongoing servicing, updates, and technical assistance long after handover.' },
];

const strengths = [
  { num: '01', title: 'Integrated Technology', desc: 'Security systems that work seamlessly with fire protection, MEP, and smart building infrastructure.' },
  { num: '02', title: 'Scalable Solutions', desc: 'Systems designed to grow with future building expansion and operational needs.' },
  { num: '03', title: 'Professional Installation', desc: 'Installed by experienced engineers following industry best practices.' },
  { num: '04', title: 'Long-Term Reliability', desc: 'Ongoing maintenance and technical support to ensure continuous protection.' },
  { num: '05', title: 'Certified Expertise', desc: 'A qualified team with deep experience across surveillance, access control, and detection systems.' },
  { num: '06', title: 'Coordinated Documentation', desc: 'Every system designed, tested, and documented to a standard clients and insurers trust.' },
];

const relatedProjects = [
  {
    title: 'Corporate Headquarters',
    category: 'Integrated Security Design',
    location: 'Nairobi, Kenya',
    image: cld('services-security-systems-related-corporate-headquarters', { w: 1600 }),
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Commercial Office Building',
    category: 'Access Control & Surveillance',
    location: 'Kigali, Rwanda',
    image: cld('services-security-systems-related-commercial-office-building', { w: 1200 }),
    span: '',
  },
  {
    title: 'Residential Apartment Complex',
    category: 'Multi-Unit Security Systems',
    location: 'Dubai, UAE',
    image: cld('services-security-systems-related-residential-apartment-complex', { w: 1200 }),
    span: '',
  },
  {
    title: 'Luxury Residential Villa',
    category: 'Private Residential Security',
    location: 'Marrakech, Morocco',
    image: cld('services-security-systems-related-luxury-residential-villa', { w: 1200 }),
    span: '',
  },
  {
    title: 'Educational Campus',
    category: 'Institutional Security Systems',
    location: 'Berlin, Germany',
    image: cld('services-security-systems-related-educational-campus', { w: 1200 }),
    span: '',
  },
  {
    title: 'Industrial Facility',
    category: 'Perimeter & Access Security',
    location: 'Mombasa, Kenya',
    image: cld('services-security-systems-related-industrial-facility', { w: 1200 }),
    span: '',
  },
];

const faqs = [
  {
    q: 'What security systems do you install?',
    a: 'We design and install CCTV surveillance, access control, video intercom, intruder alarm, perimeter protection, and central monitoring systems for residential, commercial, industrial, and institutional properties.',
  },
  {
    q: 'Can CCTV systems be monitored remotely?',
    a: 'Yes. Our surveillance systems support secure remote monitoring from mobile devices and computers, along with intelligent analytics and alerts for unusual activity.',
  },
  {
    q: 'Do you provide biometric access control?',
    a: 'Yes. We design access control systems using cards, biometrics, PIN codes, and mobile credentials, with centralized administration across single or multiple sites.',
  },
  {
    q: 'Can security systems integrate with fire alarms?',
    a: 'Yes. We regularly integrate security systems with fire protection and other building systems so that alerts, access control, and emergency response work together seamlessly.',
  },
  {
    q: 'Do you offer maintenance services?',
    a: 'Yes. We provide routine inspections, preventive maintenance, system upgrades, and emergency technical support to keep every security system reliable over the long term.',
  },
  {
    q: 'Can existing buildings be upgraded with smart security?',
    a: 'Yes. We regularly assess and upgrade ageing security systems in existing buildings, introducing modern surveillance, access control, and monitoring technology without unnecessary disruption.',
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

export default function SecuritySystemsPage() {
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
            src={cld('heroes-services-security-systems', { w: 1800 })}
            alt="Security Systems"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-24">
          <div className="flex items-center gap-2 mb-10 text-[11px] font-[500] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link href="/services" className="hover:text-white/70 transition-colors">Expertise</Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-white/70">Security Systems</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Engineering Systems</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-[36px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[800px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Intelligent Security Solutions for Safer Buildings.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[540px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Global Engineering Agency delivers integrated security systems designed to protect homes, businesses, institutions, and industrial facilities through intelligent monitoring, controlled access, and advanced surveillance technologies.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap gap-4">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
              Request Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2.5 rounded-[999px] border border-white/20 px-7 py-3.5 text-[13.5px] font-[500] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              View Security Projects
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
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Why It Matters</span>
              </div>
              <h2 className="text-3xl lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.2]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Complete Security Solutions <br />
                <span className="font-[300] text-[#10367D]">Designed Around Your Environment.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 pt-4">
              <p className="text-[17px] leading-[1.9] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Modern buildings require more than physical protection — they require intelligent, connected security systems that monitor, detect, control access, and respond to potential threats. GEA integrates security systems with architecture, MEP, fire protection, and smart building technologies, so protection is built into the property rather than added on as an afterthought.
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
            <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">What We Provide</span>
          </div>
          <h2 className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[700px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            A complete security <span className="font-[300]">technology stack.</span>
          </h2>
        </div>

        {/* Bento Grid */}
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

      {/* PROCESS (Premium Stepper Timeline) */}
      <section className="bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[650px] mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">How We Work</span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2 className="text-4xl lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-4">From risk assessment to long-term support.</h2>
            <p className="text-[15.5px] font-[300] text-[#1F2937]/60">Explore each phase of our security systems process.</p>
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

      {/* WHY CHOOSE US */}
      <section className="bg-[#0D1B2A] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div className="max-w-[560px]"><div className="inline-flex items-center gap-3 mb-5"><span className="h-[1px] w-6 bg-[#C8A45D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]">Why Choose Us</span></div><h2 className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]">Security designed for <span className="font-[300] text-white/70">modern buildings.</span></h2></div>
            <p className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]">Every system is designed, installed, and tested the way a premium engineering consultancy would sign its own name to it.</p>
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

      {/* RELATED PROJECTS */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div><div className="inline-flex items-center gap-3 mb-6"><span className="h-[1px] w-6 bg-[#10367D]" /><span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]">Related Work</span></div><h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]">Designed, installed, <span className="font-[300]">secured.</span></h2></div>
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

      {/* FAQ */}
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0D1B2A] py-32 lg:py-44">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-[700] tracking-tight leading-[1.03] text-white mb-6">Secure your property with <span className="text-[#C8A45D]">intelligent technology.</span></h2>
          <p className="mx-auto max-w-[680px] text-[16px] leading-[1.8] font-[300] text-white/55 mb-8">From surveillance and access control to integrated monitoring, we deliver reliable security systems designed to protect what matters most.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">Request Consultation<ArrowRight className="h-4 w-4" strokeWidth={2} /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white">Speak With Our Engineers</Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS (SEO) */}
      <section className="sr-only" aria-hidden="false">
        <nav aria-label="Related services">
          <Link href="/services/fire-protection-systems">Fire Protection Systems</Link>
          <Link href="/services/mep-engineering">MEP Engineering</Link>
          <Link href="/services#hvac">HVAC Systems</Link>
          <Link href="/services#solar-energy">Solar Energy Solutions</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>

      <Footer />
    </main>
  );
}

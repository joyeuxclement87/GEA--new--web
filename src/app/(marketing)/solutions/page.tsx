'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { useState, useRef } from 'react';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const solutionCategories = [
  {
    num: '01',
    slug: 'bathroom-sanitary',
    title: 'Bathroom & Sanitary',
    desc: 'Premium sanitary ware, bathtubs, showers, vanities, and bathroom accessories for residential and commercial projects. Curated for quality and design excellence.',
    productTypes: '120+',
    image: cld('solutions-bathroom-sanitary-card', { w: 1400 }),
  },
  {
    num: '02',
    slug: 'tiles-flooring',
    title: 'Tiles & Flooring',
    desc: 'Porcelain, ceramic, natural stone, and wood-effect tiles for floors, walls, and facades. Sourced from world-leading manufacturers with unmatched finish quality.',
    productTypes: '200+',
    image: cld('solutions-tiles-flooring-card', { w: 1400 }),
  },
  {
    num: '03',
    slug: 'electrical',
    title: 'Electrical',
    desc: 'Wiring, switches & panels',
    productTypes: '180+',
    image: cld('solutions-electrical-card', { w: 1400 }),
  },
  {
    num: '04',
    slug: 'plumbing',
    title: 'Plumbing',
    desc: 'Pipes, fittings & valves',
    productTypes: '150+',
    image: cld('solutions-plumbing-card', { w: 1400 }),
  },

  {
    num: '06',
    slug: 'solar-energy',
    title: 'Solar Energy Solutions',
    desc: 'Complete solar photovoltaic systems, battery storage solutions, inverters, and mounting systems for residential, commercial, and industrial energy independence.',
    productTypes: '60+',
    image: cld('solutions-solar-energy-card', { w: 1400 }),
  },
  {
    num: '07',
    slug: 'fire-safety',
    title: 'Fire Protection',
    desc: 'Suppression & detection',
    productTypes: '80+',
    image: cld('solutions-fire-safety-card', { w: 1400 }),
  },
  {
    num: '08',
    slug: 'security-systems',
    title: 'Security Systems',
    desc: 'CCTV & access control',
    productTypes: '70+',
    image: cld('solutions-security-systems-card', { w: 1400 }),
  },
  {
    num: '09',
    slug: 'water-pumps',
    title: 'Water Pumps',
    desc: 'Submersible & pressure pumps',
    productTypes: '50+',
    image: cld('solutions-water-pumps-card', { w: 1400 }),
  },
  {
    num: '10',
    slug: 'water-heaters',
    title: 'Water Heaters',
    desc: 'Solar & electric heaters',
    productTypes: '40+',
    image: cld('solutions-water-heaters-card', { w: 1400 }),
  },
  {
    num: '11',
    slug: 'doors-windows',
    title: 'Doors & Windows',
    desc: 'Aluminium, uPVC & wood',
    productTypes: '100+',
    image: cld('solutions-doors-windows-card', { w: 1400 }),
  },
  {
    num: '12',
    slug: 'paint-finishes',
    title: 'Paint & Finishes',
    desc: 'Interior and exterior paints, decorative coatings, texture finishes, and waterproofing systems from professional-grade brands for lasting results.',
    productTypes: '110+',
    image: cld('solutions-paint-finishes-card', { w: 1400 }),
  },
  {
    num: '13',
    slug: 'hardware-tools',
    title: 'Hardware & Tools',
    desc: 'Professional construction tools, precision hardware, fixings, anchors, and specialist equipment for engineering, contracting, and fit-out projects.',
    productTypes: '300+',
    image: cld('solutions-hardware-tools-card', { w: 1400 }),
  },
  {
    num: '14',
    slug: 'smart-building',
    title: 'Smart Building Solutions',
    desc: 'Building automation systems, IoT sensors, smart lighting controls, and integrated building management platforms for intelligent, efficient facilities.',
    productTypes: '45+',
    image: cld('solutions-smart-building-card', { w: 1400 }),
  },
];

const featuredCollections = [
  {
    name: 'Premium Bathroom Collection',
    desc: "Curated sanitary ware, taps, showers and accessories from Europe's leading design houses.",
    image: cld('solutions-bathroom-sanitary-featured', { w: 1200 }),
    slug: 'bathroom-sanitary',
  },
  {
    name: 'Luxury Tile Collection',
    desc: 'Marble-effect porcelain, handcrafted ceramics, and natural stone for exceptional interiors.',
    image: cld('solutions-tiles-flooring-featured', { w: 1200 }),
    slug: 'tiles-flooring',
  },

  {
    name: 'Smart Security Solutions',
    desc: 'Integrated access control, surveillance, and perimeter protection for intelligent buildings.',
    image: cld('solutions-security-systems-featured', { w: 1200 }),
    slug: 'security-systems',
  },
  {
    name: 'Solar Energy Systems',
    desc: 'Grid-tied and off-grid PV systems with battery storage for sustainable energy independence.',
    image: cld('solutions-solar-energy-featured', { w: 1200 }),
    slug: 'solar-energy',
  },
  {
    name: 'Industrial Plumbing Solutions',
    desc: 'Heavy-duty piping, pump stations, and water treatment solutions for industrial facilities.',
    image: cld('solutions-plumbing-featured', { w: 1200 }),
    slug: 'plumbing',
  },
];

const whyPoints = [
  { title: 'Premium Quality', desc: 'Every product in our catalogue is selected against rigorous quality and durability benchmarks before being offered to clients.' },
  { title: 'Certified Products', desc: 'We supply certified, standards-compliant products from manufacturers with proven international track records.' },
  { title: 'Trusted Suppliers', desc: 'Long-standing relationships with global brands give us access to competitive pricing and reliable stock availability.' },
  { title: 'Technical Guidance', desc: 'Our team of engineers and product specialists provide expert recommendations tailored to your project requirements.' },
  { title: 'Reliable Availability', desc: 'Coordinated procurement and logistics ensure materials arrive on site when your programme requires them.' },
  { title: 'Integrated Installation Support', desc: 'We connect clients with certified installation partners for complex systems, ensuring seamless project delivery.' },
];

const industries = [
  { name: 'Residential', image: cld('solutions-industries-residential', { w: 800 }), size: 'tall' },
  { name: 'Commercial', image: cld('solutions-industries-commercial', { w: 800 }), size: 'normal' },
  { name: 'Hospitality', image: cld('solutions-industries-hospitality', { w: 800 }), size: 'normal' },
  { name: 'Industrial', image: cld('solutions-industries-industrial', { w: 800 }), size: 'tall' },
  { name: 'Healthcare', image: cld('solutions-industries-healthcare', { w: 800 }), size: 'normal' },
  { name: 'Education', image: cld('solutions-industries-education', { w: 800 }), size: 'normal' },
  { name: 'Government', image: cld('solutions-industries-government', { w: 800 }), size: 'tall' },
  { name: 'Infrastructure', image: cld('solutions-industries-infrastructure', { w: 800 }), size: 'normal' },
];

const brandNames = [
  'Grohe', 'Roca', 'Schneider Electric', 'Daikin', 'Grundfos',
  'Legrand', 'Hager', 'Vaillant', 'Kohler', 'Bosch',
  'Siemens', 'ABB', 'Honeywell', 'Wilo', 'Armacell',
];

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'Discuss your project scope, requirements, and material specifications with our technical team.' },
  { num: '02', title: 'Product Selection', desc: 'We curate a tailored selection of products matched to your design intent and performance criteria.' },
  { num: '03', title: 'Quotation', desc: 'Receive a detailed, competitive commercial quotation with full product specifications.' },
  { num: '04', title: 'Delivery', desc: 'Coordinated logistics ensure materials reach your project site on schedule and in perfect condition.' },
  { num: '05', title: 'Installation Support', desc: 'Connect with our network of certified installers for complex systems and technical products.' },
];

const technicalServices = [
  'Material Recommendations',
  'Product Specifications',
  'Quantity Estimation',
  'Technical Consultation',
  'Installation Guidance',
];

const getSolutionHref = (slug: string) => {
  const materialRoutes: Record<string, string> = {
    'bathroom-sanitary': '/materials/bathroom-sanitary',
    'tiles-flooring': '/materials/tiles-flooring',
    electrical: '/materials/electrical',
    plumbing: '/materials/plumbing',
    'security-systems': '/materials/security-systems',
  };

  return materialRoutes[slug] ?? `/solutions/${slug}`;
};

const faqs = [
  {
    q: 'Do you supply materials for residential projects?',
    a: 'Yes. We supply a comprehensive range of building materials for residential projects of all scales — from single-family homes to large housing developments. Our team helps you select the right products based on your design requirements and budget.',
  },
  {
    q: 'Can you help estimate required quantities?',
    a: 'Absolutely. Our technical team provides quantity estimation services to help you plan procurement accurately, minimise waste, and avoid costly shortfalls during construction.',
  },
  {
    q: 'Do you provide installation services?',
    a: "While GEA is primarily a supplier of building products, we maintain a network of trusted installation partners and can recommend certified professionals for complex system installations such as HVAC, solar, and electrical.",
  },
  {
    q: 'Can businesses request bulk quotations?',
    a: 'Yes. We regularly supply contractors, developers, and businesses with bulk quantities. Submit a quotation request with your project specifications and our team will respond with a competitive commercial offer.',
  },
  {
    q: 'Which brands do you supply?',
    a: 'GEA sources from a curated network of globally recognised manufacturers including Grohe, Roca, Schneider Electric, Daikin, Grundfos, Legrand, Kohler, Bosch, and many more. We only partner with brands that meet our quality and performance standards.',
  },
  {
    q: 'Do you deliver materials to project sites?',
    a: 'Yes. We offer coordinated delivery to project sites across the region. Our logistics team ensures materials arrive on schedule and in perfect condition, aligned with your construction programme.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className={`h-[1px] w-6 ${dark ? 'bg-[#C8A45D]' : 'bg-[#10367D]'}`} />
      <span
        className={`text-[10px] font-[600] uppercase tracking-[0.25em] ${dark ? 'text-[#C8A45D]' : 'text-[#10367D]'}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {text}
      </span>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E6E6E6]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span
          className="text-[15px] font-[500] text-[#1F2937] group-hover:text-[#10367D] transition-colors duration-200 pr-8"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
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
            <p
              className="pb-6 text-[14px] leading-[1.85] font-[300] text-[#1F2937]/60 max-w-[680px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  const collectionsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main id="solutions-main" className="min-h-screen bg-white text-[#1F2937] overflow-hidden">

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <section
          id="solutions-hero"
          className="relative flex items-end bg-[#0D1B2A] text-white overflow-hidden"
          style={{ minHeight: 'calc(100vh - 88px)', marginTop: '88px' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.28 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              src={cld('heroes-solutions', { w: 2400 })}
              alt="Premium building materials and construction products"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#10367D]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
            {/* Structural lines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                backgroundSize: '120px 100%',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-32 lg:pb-28 lg:pt-40">
            <div className="max-w-[800px]">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Building Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-[38px] sm:text-[52px] md:text-[64px] lg:text-[80px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-8"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Everything Your Project{' '}
                <br className="hidden md:block" />
                <span className="font-[300] text-white/75">Needs.</span>{' '}
                <span className="text-[#C8A45D] font-[700]">From Foundation</span>
                <br className="hidden md:block" />
                <span className="text-white/75 font-[300]"> to Finishing.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15px] sm:text-[16px] leading-[1.85] font-[300] text-white/60 max-w-[580px] mb-10"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Global Engineering Agency supplies premium building materials, engineering equipment, and integrated technical solutions for residential, commercial, and industrial projects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <a
                  href="/quote"
                  id="hero-request-quote"
                  className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D] sm:px-8 sm:py-4"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="#solution-categories"
                  id="hero-browse-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-[999px] border border-white/20 bg-white/5 px-7 py-3.5 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-8 sm:py-4"
                >
                  <span>Browse Solutions</span>
                  <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </motion.div>
            </div>

            {/* Hero stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 lg:mt-28 flex flex-wrap gap-10 md:gap-20 border-t border-white/10 pt-10"
            >
              {[
                { val: '14', label: 'Solution Categories' },
                { val: '1,500+', label: 'Products Available' },
                { val: '30+', label: 'Trusted Brands' },
                { val: '120+', label: 'Projects Supplied' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-[36px] md:text-[44px] font-[700] text-white leading-none mb-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {stat.val}
                  </div>
                  <div
                    className="text-[11px] font-[500] uppercase tracking-[0.18em] text-white/40"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── INTRODUCTION ─────────────────────────────────────────────────── */}
        <section id="solutions-intro" className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

              {/* Left: Large image with inset */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative pb-16 pr-16"
              >
                <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-[#F8F8F8]">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    src={cld('solutions-showcase-premium-materials', { w: 1000 })}
                    alt="GEA premium building materials showcase"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 to-transparent" />
                </div>
                {/* Inset card */}
                <div
                  className="absolute bottom-0 right-0 w-[52%] aspect-[4/3] rounded-[18px] overflow-hidden border-[5px] border-white"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                >
                  <img
                    src={cld('solutions-tiles-flooring-showcase', { w: 600 })}
                    alt="Premium tiles and flooring"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionLabel text="Our Approach" />
                <h2
                  className="text-[36px] lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.08] mb-7"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  More Than Products —<br />
                  <span className="font-[300] text-[#10367D]">Complete Building Solutions.</span>
                </h2>
                <p
                  className="text-[15.5px] leading-[1.9] font-[300] text-[#1F2937]/60 mb-8"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Global Engineering Agency carefully sources and supplies reliable building products that integrate seamlessly with architecture, engineering, and construction projects. Every item in our catalogue has been selected for quality, durability, and long-term performance.
                </p>
                <p
                  className="text-[15.5px] leading-[1.9] font-[300] text-[#1F2937]/60 mb-12"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  We partner exclusively with trusted global brands and provide technical guidance to help clients choose the right products for every application — from residential finishes to industrial engineering systems.
                </p>

                {/* Pillars */}
                <div className="grid grid-cols-2 gap-0 border-t border-[#E6E6E6]">
                  {[
                    { label: 'Quality Assured', sub: 'Vetted, certified products.' },
                    { label: 'Trusted Brands', sub: 'Global manufacturer partners.' },
                    { label: 'Technical Expertise', sub: 'Engineer-led guidance.' },
                    { label: 'Project Support', sub: 'End-to-end supply chain.' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={[
                        'py-6 flex flex-col gap-1.5 border-b border-[#E6E6E6]',
                        i % 2 === 0 ? 'pr-6' : 'pl-6 border-l border-[#E6E6E6]',
                      ].join(' ')}
                    >
                      <span className="text-[13px] font-[700] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.label}</span>
                      <span className="text-[12px] font-[300] text-[#1F2937]/50" style={{ fontFamily: 'Inter, sans-serif' }}>{item.sub}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SOLUTION CATEGORIES ──────────────────────────────────────────── */}
        <section id="solution-categories" className="bg-[#F8F8F8] py-24 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-24"
            >
              <div className="max-w-[580px]">
                <SectionLabel text="What We Supply" />
                <h2
                  className="text-[38px] lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  14 Solution <span className="font-[300]">Categories.</span>
                </h2>
              </div>
              <p
                className="text-[14px] leading-[1.85] font-[300] text-[#1F2937]/60 max-w-[380px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                From foundation systems to smart building technology, every category is supplied with the same commitment to quality and technical precision.
              </p>
            </motion.div>

            {/* Editorial category list */}
            <div className="flex flex-col divide-y divide-[#E6E6E6] border-y border-[#E6E6E6]">
              {solutionCategories.map((cat, idx) => (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: (idx % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={getSolutionHref(cat.slug)}
                    id={`category-${cat.slug}`}
                    className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-8 lg:py-10 transition-all duration-300 hover:bg-white/60 px-4 -mx-4 rounded-[12px]"
                  >
                    {/* Number */}
                    <span
                      className="text-[11px] font-[700] tracking-[0.22em] text-[#10367D] shrink-0 w-8"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {cat.num}
                    </span>

                    {/* Image thumbnail */}
                    <div className="w-full md:w-[120px] lg:w-[160px] aspect-[16/9] md:aspect-square overflow-hidden rounded-[12px] shrink-0 bg-[#E6E6E6]">
                      <motion.img
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title + desc */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-[20px] lg:text-[24px] font-[700] text-[#1F2937] tracking-tight mb-2 group-hover:text-[#10367D] transition-colors duration-200"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className="text-[13.5px] leading-[1.8] font-[300] text-[#1F2937]/55 max-w-[520px]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {cat.desc}
                      </p>
                    </div>

                    {/* Product count */}
                    <div className="shrink-0 text-right hidden md:block">
                      <div
                        className="text-[28px] font-[700] text-[#10367D] leading-none"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {cat.productTypes}
                      </div>
                      <div
                        className="text-[10px] font-[500] uppercase tracking-[0.18em] text-[#1F2937]/40 mt-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Product types
                      </div>
                    </div>

                    {/* CTA arrow */}
                    <div className="shrink-0 flex items-center gap-3 text-[12px] font-[600] tracking-[0.04em] text-[#1F2937]/40 group-hover:text-[#10367D] transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span className="hidden md:block">Explore</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.5} />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED COLLECTIONS ─────────────────────────────────────────── */}
        <section id="featured-collections" className="bg-white py-24 lg:py-40 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20"
            >
              <div>
                <SectionLabel text="Featured Collections" />
                <h2
                  className="text-[38px] lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Curated for<span className="font-[300]"> Every Build.</span>
                </h2>
              </div>
              <button
                onClick={() => collectionsRef.current?.scrollBy({ left: 480, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 self-start md:self-auto mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" />
                <span className="group-hover:text-[#10367D] transition-colors">Browse All</span>
                <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} />
              </button>
            </motion.div>

            {/* Horizontal scroll track */}
            <div
              ref={collectionsRef}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredCollections.map((col, idx) => (
                <motion.a
                  key={col.slug + idx}
                  href={getSolutionHref(col.slug)}
                  id={`collection-${col.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex-none w-[340px] md:w-[420px] snap-start"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[20px] bg-[#E6E6E6]">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/75 via-transparent to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#10367D]/0 group-hover:bg-[#10367D]/10 transition-colors duration-500" />
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p
                      className="text-[10px] font-[600] uppercase tracking-[0.22em] text-[#C8A45D] mb-3"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Collection
                    </p>
                    <h3
                      className="text-[20px] font-[700] text-white tracking-tight leading-snug mb-2"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {col.name}
                    </h3>
                    <p
                      className="text-[13px] leading-[1.7] font-[300] text-white/65 mb-5"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {col.desc}
                    </p>
                    <div
                      className="inline-flex items-center gap-2.5 text-[12px] font-[600] tracking-[0.06em] text-white/70 group-hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Explore Collection
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY OUR SOLUTIONS ────────────────────────────────────────────── */}
        <section id="why-solutions" className="bg-[#0D1B2A] text-white py-24 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/5] overflow-hidden rounded-[28px]"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  src={cld('solutions-showcase-professional-products', { w: 1200 })}
                  alt="Professional building products and materials"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/30 to-transparent" />
                {/* Badge */}
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-[12px] px-5 py-4">
                  <div className="text-[28px] font-[700] text-white leading-none" style={{ fontFamily: 'Manrope, sans-serif' }}>30+</div>
                  <div className="text-[10px] font-[500] uppercase tracking-[0.18em] text-white/50 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Trusted Brands</div>
                </div>
              </motion.div>

              {/* Right: List */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SectionLabel text="Why Choose GEA" dark />
                  <h2
                    className="text-[36px] lg:text-[56px] font-[700] tracking-tight leading-[1.08] mb-6"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Why Professionals{' '}
                    <br />
                    <span className="font-[300] text-white/60">Choose Our Products.</span>
                  </h2>
                  <p
                    className="text-[15px] leading-[1.85] font-[300] text-white/50 mb-14"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Architects, contractors, and developers choose GEA because quality, reliability, and expert support are built into every product we supply.
                  </p>
                </motion.div>

                <div className="flex flex-col border-t border-white/10">
                  {whyPoints.map((pt, idx) => (
                    <motion.div
                      key={pt.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="group py-6 border-b border-white/10 flex flex-col gap-1.5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="h-[1px] w-4 bg-[#C8A45D] shrink-0" />
                        <h3
                          className="text-[16px] font-[600] text-white group-hover:text-[#C8A45D] transition-colors duration-250"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {pt.title}
                        </h3>
                      </div>
                      <p
                        className="text-[13.5px] leading-[1.75] font-[300] text-white/45 pl-8"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {pt.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INDUSTRIES WE SUPPLY ─────────────────────────────────────────── */}
        <section id="industries" className="bg-white py-24 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[620px] mb-16 lg:mb-20"
            >
              <SectionLabel text="Industries We Supply" />
              <h2
                className="text-[38px] lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Built for Every<span className="font-[300]"> Sector.</span>
              </h2>
            </motion.div>

            {/* Masonry grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {industries.map((ind, idx) => (
                <motion.a
                  key={ind.name}
                  href={`/solutions?industry=${ind.name.toLowerCase()}`}
                  id={`industry-${ind.name.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative block w-full overflow-hidden rounded-[16px] bg-[#E6E6E6] break-inside-avoid"
                  style={{ aspectRatio: ind.size === 'tall' ? '3/4' : '4/3' }}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    src={ind.image}
                    alt={`${ind.name} building solutions`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/75 via-[#0D1B2A]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                      className="text-[15px] font-[700] text-white tracking-tight"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {ind.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 text-[11px] font-[500] text-white/50 group-hover:text-[#C8A45D] transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                      View solutions
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED BRANDS ──────────────────────────────────────────────── */}
        <section id="brands" className="bg-[#F8F8F8] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-14"
            >
              <SectionLabel text="Trusted Brands" />
              <h2
                className="text-[32px] lg:text-[42px] font-[700] text-[#1F2937] tracking-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Globally Recognised. <span className="font-[300]">Locally Available.</span>
              </h2>
            </motion.div>

            {/* Brand marquee */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none" />

              <div className="flex gap-10 overflow-hidden">
                <div
                  className="flex gap-10 shrink-0"
                  style={{
                    animation: 'scroll-brands 32s linear infinite',
                  }}
                >
                  {[...brandNames, ...brandNames].map((brand, idx) => (
                    <div
                      key={brand + idx}
                      className="shrink-0 group flex items-center justify-center w-[160px] h-[72px] rounded-[12px] border border-[#E6E6E6] bg-white transition-all duration-300 hover:border-[#10367D]/30 hover:shadow-sm cursor-default"
                    >
                      <span
                        className="text-[13px] font-[600] text-[#1F2937]/30 group-hover:text-[#10367D] transition-colors duration-300 text-center px-4"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes scroll-brands {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </section>

        {/* ─── INQUIRY PROCESS ──────────────────────────────────────────────── */}
        <section id="inquiry-process" className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16 lg:mb-20"
            >
              <SectionLabel text="How It Works" />
              <h2
                className="text-[38px] lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                From Inquiry to<span className="font-[300]"> Delivery.</span>
              </h2>
            </motion.div>

            {/* Horizontal timeline */}
            <div className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#E6E6E6]" />

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center lg:items-start lg:text-left relative"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 w-14 h-14 rounded-full border border-[#E6E6E6] bg-white flex items-center justify-center mb-6 shrink-0">
                      <span
                        className="text-[11px] font-[700] tracking-[0.18em] text-[#10367D]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <h3
                      className="text-[16px] font-[700] text-[#1F2937] mb-3 tracking-tight"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[13px] leading-[1.8] font-[300] text-[#1F2937]/55"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECHNICAL SUPPORT ────────────────────────────────────────────── */}
        <section id="technical-support" className="bg-[#F8F8F8] py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center"
              >
                <SectionLabel text="Expert Support" />
                <h2
                  className="text-[36px] lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.08] mb-7"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Expert Advice Before{' '}
                  <span className="font-[300] text-[#10367D]">Every Purchase.</span>
                </h2>
                <p
                  className="text-[15.5px] leading-[1.9] font-[300] text-[#1F2937]/60 mb-12"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  GEA helps clients choose suitable materials and engineering systems based on project requirements, performance benchmarks, and budget constraints. Our team of engineers and product specialists are available to advise at every stage.
                </p>

                {/* Service list */}
                <div className="flex flex-col border-t border-[#E6E6E6]">
                  {technicalServices.map((svc, idx) => (
                    <motion.div
                      key={svc}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-5 py-5 border-b border-[#E6E6E6]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0" />
                      <span
                        className="text-[14px] font-[500] text-[#1F2937]"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {svc}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="/contact"
                    id="tech-support-cta"
                    className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#10367D] group transition-all duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="h-[1px] bg-[#10367D] w-8 transition-all duration-300 group-hover:w-14" />
                    Speak With Our Team
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>

              {/* Right: Large image */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/5] overflow-hidden rounded-[28px] bg-[#E6E6E6]"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  src={cld('solutions-showcase-technical-consultation', { w: 1200 })}
                  alt="Technical consultation for building materials"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/25 to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-[14px] p-6 border border-white/60">
                  <div
                    className="text-[12px] font-[600] uppercase tracking-[0.18em] text-[#10367D] mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Technical Expertise
                  </div>
                  <p
                    className="text-[13px] leading-[1.7] text-[#1F2937]/70 font-[300]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Our engineers review every specification to recommend the most suitable product for your project performance requirements.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="solutions-faq" className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionLabel text="Common Questions" />
                <h2
                  className="text-[36px] lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Frequently Asked<span className="font-[300]"> Questions.</span>
                </h2>
                <p
                  className="text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Have a question not listed here? Our team is ready to help — reach out directly and we'll respond promptly.
                </p>
                <div className="mt-10">
                  <a
                    href="/contact"
                    id="faq-contact-cta"
                    className="inline-flex items-center gap-3 rounded-[999px] border border-[#10367D] px-7 py-3.5 text-[13px] font-[600] tracking-[0.02em] text-[#10367D] transition-all duration-300 hover:bg-[#10367D] hover:text-white"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Contact Our Team
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-[#E6E6E6]"
              >
                {faqs.map((faq, idx) => (
                  <FAQItem key={idx} q={faq.q} a={faq.a} />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
        <section id="solutions-cta" className="relative bg-[#10367D] text-white py-28 lg:py-40 overflow-hidden">
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#10367D] via-[#10367D] to-[#0a2355]" />

          <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 mb-8 justify-center">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get Started Today
                </span>
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
              </div>

              <h2
                className="text-[38px] sm:text-[52px] lg:text-[68px] font-[700] tracking-[-0.025em] leading-[1.06] mb-7 max-w-[860px] mx-auto"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Build Better With{' '}
                <span className="font-[300] text-white/65">The Right Solutions.</span>
              </h2>

              <p
                className="text-[15px] sm:text-[16px] leading-[1.85] font-[300] text-white/55 max-w-[600px] mx-auto mb-12"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Whether you're building a home, office, commercial development, or industrial facility, Global Engineering Agency supplies reliable products backed by professional expertise.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/quote"
                  id="final-cta-quote"
                  className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="/contact"
                  id="final-cta-contact"
                  className="inline-flex items-center justify-center rounded-[999px] border border-white/25 bg-white/8 px-8 py-4 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/15"
                >
                  Contact Sales
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

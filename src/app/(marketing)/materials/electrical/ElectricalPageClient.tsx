'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const productCategories = [
  {
    title: 'Electrical Wiring',
    desc: 'High-quality wiring solutions designed for safe and efficient power distribution. Our range includes durable conductors engineered to resist heat, moisture, and mechanical stress, ensuring optimal performance for all load types.',
    applications: ['Residential', 'Commercial', 'Industrial'],
    attributes: [
      { label: 'Products', items: ['Single Core Cables', 'Multi-Core Cables', 'Flexible Cables', 'Armoured Cables', 'Control Cables'] },
      { label: 'Standards', items: ['Flame Retardant', 'Low Smoke Zero Halogen (LSZH)', 'High Conductivity'] },
    ],
    image: cld('solutions-electrical-cable-containment', { w: 1800 }),
  },
  {
    title: 'Switches & Sockets',
    desc: 'Modern switching solutions combining safety, durability, and contemporary design. Available in a wide array of premium finishes to blend seamlessly with any architectural style while providing reliable everyday operation.',
    applications: ['Homes', 'Hotels', 'Offices', 'Retail'],
    attributes: [
      { label: 'Products', items: ['Wall Switches', 'Power Sockets', 'USB Outlets', 'Smart Switches', 'Weatherproof Switches'] },
      { label: 'Finishes', items: ['Matte Black', 'Brushed Metal', 'Classic White', 'Satin Nickel'] },
    ],
    image: cld('solutions-electrical-smart-lighting-controls', { w: 1800 }),
  },
  {
    title: 'Distribution Boards',
    desc: 'Efficient power management systems designed for reliable electrical distribution. Engineered to protect circuits against overloads, short circuits, and earth leakage, ensuring maximum safety for the entire building.',
    applications: ['Substations', 'Main Panels', 'Consumer Units', 'Industrial Controls'],
    attributes: [
      { label: 'Products', items: ['Consumer Units', 'Distribution Boards', 'Circuit Breakers', 'RCCBs', 'Isolators'] },
      { label: 'Configuration', items: ['Single Phase', 'Three Phase', 'IP-Rated Enclosures'] },
    ],
    image: cld('solutions-electrical-distribution-boards-panels', { w: 1800 }),
  },
  {
    title: 'Lighting Solutions',
    desc: 'Lighting products that enhance comfort, efficiency, and architectural aesthetics. Our energy-efficient LED systems deliver optimal illumination levels, long operational lifespans, and excellent colour rendering.',
    applications: ['Interior Spaces', 'Façades', 'Landscapes', 'Street Lighting'],
    attributes: [
      { label: 'Products', items: ['LED Panels', 'Downlights', 'Surface Lights', 'Outdoor Lighting', 'Decorative Fixtures'] },
      { label: 'Features', items: ['Dimmable', 'Energy Star Rated', 'Low Heat Emission'] },
    ],
    image: cld('solutions-default-premium-range', { w: 1800 }),
  },
];

const projectTypes = [
  {
    id: 'residential',
    title: 'Residential',
    desc: 'Electrical systems for homes and apartments.',
    detail: 'Complete solutions for modern living, focusing on safety, energy efficiency, user convenience, and elegant user interfaces like smart switches and integrated USB power sockets.',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    desc: 'Reliable solutions for offices and retail developments.',
    detail: 'High-performance distribution networks and architectural lighting designed to handle continuous commercial loads while supporting structured cable management and flexible workspaces.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    desc: 'Energy-efficient systems for hotels and restaurants.',
    detail: 'Sophisticated lighting controls, smart room automation compatibility, and premium finished wall accessories that elevate guest comfort while optimizing facility operating costs.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    desc: 'Safe electrical solutions for hospitals and clinics.',
    detail: 'Specially engineered systems that guarantee power continuity and safety compliance in sensitive areas, featuring reliable distribution boards and medical-grade accessories.',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    desc: 'Heavy-duty systems for demanding environments.',
    detail: 'Robust armoured cabling, high-capacity circuit protection, industrial-grade plugs, and dust/waterproof distribution systems built to withstand harsh operating conditions.',
  },
];

const selectionGuideItems = [
  {
    title: 'Safety Standards',
    desc: 'Choose certified products that comply with local and international building regulations. Quality insulation materials and trusted circuit breakers prevent overloads and fire hazards.',
  },
  {
    title: 'Energy Efficiency',
    desc: 'Use modern products, such as LED illumination and smart controls, that reduce energy consumption and lower operational utility bills over the lifetime of the building.',
  },
  {
    title: 'Durability',
    desc: 'Select components suitable for continuous operation. Materials must resist temperature fluctuations, mechanical wear, and degradation from environmental exposure.',
  },
  {
    title: 'Future Expansion',
    desc: 'Plan systems that allow future upgrades. Running adequate conduit paths and choosing modular distribution boards makes additions and system scaling much easier.',
  },
];

const featuredProducts = [
  {
    name: 'LED Panel Light',
    application: 'Offices & Commercial Spaces',
    image: cld('solutions-default-premium-range', { w: 1200 }),
  },
  {
    name: 'Modern Switch Collection',
    application: 'Luxury Homes & Hotels',
    image: cld('solutions-electrical-smart-lighting-controls', { w: 1200 }),
  },
  {
    name: 'Distribution Board',
    application: 'Main Power Distribution',
    image: cld('solutions-electrical-distribution-boards-panels', { w: 1200 }),
  },
  {
    name: 'Circuit Breakers',
    application: 'System Safety Protection',
    image: cld('solutions-default-professional-series', { w: 1200 }),
  },
  {
    name: 'Industrial Cable',
    application: 'Heavy Duty Power Transmission',
    image: cld('solutions-electrical-cable-containment', { w: 1200 }),
  },
  {
    name: 'Outdoor Lighting Fixture',
    application: 'Gardens, Façades & Pathways',
    image: cld('solutions-default-standard-collection', { w: 1200 }),
  },
];

const inspirationProjects = [
  {
    title: 'Modern Office',
    desc: 'Integrated power distribution and smart lighting controls configured for open-plan productivity.',
    image: cld('solutions-industries-commercial', { w: 1400 }),
  },
  {
    title: 'Luxury Residence',
    desc: 'Bespoke switch plates and elegant recessed lighting enhancing clean residential lines.',
    image: cld('solutions-industries-residential', { w: 1400 }),
  },
  {
    title: 'Hotel Corridor',
    desc: 'Low-energy LED wall-washers and safety guide lights defining a welcoming pathway.',
    image: cld('solutions-industries-hospitality', { w: 1400 }),
  },
  {
    title: 'Retail Store',
    desc: 'High color-rendering track lights accentuating merchandise while maintaining energy standards.',
    image: cld('solutions-showcase-premium-materials', { w: 1400 }),
  },
  {
    title: 'Hospital Facility',
    desc: 'Uncompromised distribution safety layouts supporting critical critical-care zones.',
    image: cld('solutions-industries-healthcare', { w: 1400 }),
  },
  {
    title: 'Industrial Plant',
    desc: 'Heavy-duty wiring systems and distribution frames keeping production lines operating.',
    image: cld('solutions-industries-industrial', { w: 1400 }),
  },
];

const whyGEA = [
  {
    title: 'Quality Products',
    desc: 'Reliable materials from trusted manufacturers. All electrical supply lines are thoroughly certified, ensuring safe and trouble-free operations under design loads.',
  },
  {
    title: 'Professional Advice',
    desc: 'Support in selecting the right electrical components. Our engineers guide you in calculating sizing, compliance standards, and product options for your specific load types.',
  },
  {
    title: 'Integrated Solutions',
    desc: 'Materials coordinated with engineering and construction services. Enjoy end-to-end efficiency by sourcing materials designed to fit your project blueprints perfectly.',
  },
  {
    title: 'Reliable Supply',
    desc: 'Consistent availability for projects of all sizes. We maintain reliable stock levels and dependable delivery schedules to avoid timeline disruptions.',
  },
];

const relatedSolutions = [
  { label: 'Plumbing Systems', href: '/solutions/plumbing' },
  { label: 'HVAC Systems', href: '/solutions/hvac' },
  { label: 'Security Systems', href: '/solutions/security-systems' },
  { label: 'Solar Solutions', href: '/solutions/solar-energy' },
  { label: 'General Contracting', href: '/services/general-contracting' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

// ─── Shared primitives ────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as const;

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`text-[10px] font-[600] uppercase tracking-[0.25em] ${light ? 'text-[#C8A45D]' : 'text-[#10367D]'}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <div className={`inline-flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className={`h-[1px] w-6 ${light ? 'bg-[#C8A45D]' : 'bg-[#10367D]'}`} />
        <SectionLabel light={light}>{eyebrow}</SectionLabel>
      </div>
      <h2
        className={`mt-6 max-w-[820px] text-[32px] font-[700] leading-[1.1] tracking-tight lg:text-[46px] ${light ? 'text-white' : 'text-[#1F2937]'} ${centered ? 'mx-auto' : ''}`}
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-[760px] text-[15px] font-[300] leading-[1.9] ${light ? 'text-white/65' : 'text-[#1F2937]/60'} ${centered ? 'mx-auto' : ''}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProductRow({
  title,
  desc,
  applications,
  attributes,
  image,
  reverse = false,
}: {
  title: string;
  desc: string;
  applications: string[];
  attributes: { label: string; items: string[] }[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease }}
      className={`grid overflow-hidden rounded-[30px] border border-[#E6E6E6] bg-[#F8F8F8] lg:grid-cols-[1.02fr_0.98fr] ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
    >
      <div className="p-8 lg:p-12">
        <h3
          className="text-[28px] font-[700] leading-[1.1] text-[#1F2937]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="mt-4 max-w-[560px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/65"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {desc}
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/45">
              Applications
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-[#10367D]/20 bg-white px-4 py-1.5 text-[12px] font-[500] text-[#10367D]"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {attributes.map((attr) => (
            <div key={attr.label}>
              <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/45">
                {attr.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {attr.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#E6E6E6] bg-white px-4 py-1.5 text-[12px] font-[500] text-[#1F2937]/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[380px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function ElectricalPageClient() {
  const [activeApp, setActiveApp] = useState<string>('residential');
  const activeAppData = projectTypes.find((a) => a.id === activeApp)!;

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-[#1F2937]">

        {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
        <section
          className="relative flex items-center overflow-hidden bg-[#0D1B2A] text-white"
          style={{ minHeight: 'calc(86vh - 0px)', marginTop: '88px' }}
          aria-label="Hero"
        >
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.24 }}
              transition={{ duration: 1.5, ease }}
              src={cld('solutions-electrical-card', { w: 2400 })}
              alt="Electrical solutions"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/82 to-[#10367D]/24" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/88 via-transparent to-transparent" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                backgroundSize: '120px 100%',
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="absolute top-0 left-0 right-0 z-20 border-b border-white/8"
          >
            <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-8 py-3.5 lg:px-16">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[11px] font-[400] text-white/35 transition-colors duration-200 hover:text-white/65"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Home className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>Home</span>
              </Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0 text-white/20" strokeWidth={1.5} />
              <Link
                href="/solutions"
                className="text-[11px] font-[400] text-white/35 transition-colors duration-200 hover:text-white/65"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Materials &amp; Solutions
              </Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0 text-white/20" strokeWidth={1.5} />
              <span
                className="text-[11px] font-[500] text-white/70"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Electrical Systems
              </span>
            </div>
          </motion.div>

          <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-8 pb-20 pt-28 text-center lg:pb-28 lg:pt-36 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <SectionLabel light>Materials &amp; Solutions</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="mb-6 max-w-[850px] text-[40px] font-[800] leading-[1.05] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[72px]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Professional Electrical Solutions for Modern Buildings
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.14, ease }}
              className="mb-10 max-w-[720px] text-[16px] font-[300] leading-[1.9] text-white/68"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Discover reliable electrical products and systems designed for residential, commercial,
              industrial, and institutional projects. From power distribution to lighting and smart electrical
              accessories, GEA supplies dependable solutions built for performance and safety.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
              className="mb-12 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="#quote"
                id="hero-cta-quote"
                className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
              >
                <span>Request Material Quote</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="#categories"
                id="hero-cta-browse"
                className="inline-flex items-center gap-3 rounded-[999px] border border-white/20 bg-white/5 px-7 py-3.5 text-[13.5px] font-[500] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <span>Browse Electrical Products</span>
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            >
              {[
                'Power Distribution',
                'Wiring Systems',
                'Lighting Solutions',
                'Building Electrical Accessories',
              ].map((tag, i, arr) => (
                <span key={tag} className="flex items-center gap-6">
                  <span
                    className="text-[12px] font-[500] text-white/58"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {tag}
                  </span>
                  {i < arr.length - 1 && <span className="text-white/20 text-[10px]">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Section 2: Introduction ──────────────────────────────────────── */}
        <section className="border-y border-[#E6E6E6] bg-[#F8F8F8]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-16 lg:py-28">
            <div>
              <SectionHeading
                eyebrow="Introduction"
                title="Reliable Electrical Systems Start with Quality Materials"
                description="Electrical systems are the foundation of every modern building. They power lighting, equipment, communication systems, security devices, and essential daily operations. The installation of substandard wiring or components is a major safety hazard."
              />
              <p
                className="mt-6 max-w-[600px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Global Engineering Agency supplies carefully selected electrical products that meet
                professional construction standards while supporting safety, efficiency, and long-term
                performance. We partner with leading manufacturers to provide certified supplies that
                fully satisfy regulatory guidelines.
              </p>
            </div>

            <div className="grid gap-4 border-[#E6E6E6] lg:border-l lg:pl-10">
              {[
                'Residential Homes',
                'Apartments & Condominiums',
                'Commercial Buildings',
                'Hotels & Guest Facilities',
                'Hospitals & Clinics',
                'Schools & Universities',
                'Industrial Facilities & Plants',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease }}
                  className="border-b border-[#E6E6E6] pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="text-[11px] font-[600] uppercase tracking-[0.18em] text-[#10367D]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p
                    className="mt-2 text-[15px] font-[600] text-[#1F2937]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Product Categories ────────────────────────────────── */}
        <section id="categories" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Explore Product Categories"
              title="Our Electrical Product Lines"
              description="Browse our range of electrical products across crucial installation phases — from rough-in wiring to distribution networks and aesthetic finishing solutions."
            />
            <div className="mt-14 grid gap-8">
              {productCategories.map((cat, i) => (
                <ProductRow
                  key={cat.title}
                  title={cat.title}
                  desc={cat.desc}
                  applications={cat.applications}
                  attributes={cat.attributes}
                  image={cat.image}
                  reverse={i % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Solutions by Project Type ─────────────────────────── */}
        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Solutions by Project Type"
              title="Optimized Electrical Layouts for Key Verticals"
            />

            {/* Selector */}
            <div className="mt-12 flex flex-wrap gap-3">
              {projectTypes.map((app) => (
                <button
                  key={app.id}
                  id={`app-selector-${app.id}`}
                  onClick={() => setActiveApp(app.id)}
                  className={`rounded-[999px] border px-6 py-3 text-[13px] font-[600] transition-all duration-300 ${
                    activeApp === app.id
                      ? 'border-[#10367D] bg-[#10367D] text-white shadow-md shadow-[#10367D]/20'
                      : 'border-[#E6E6E6] bg-white text-[#1F2937]/70 hover:border-[#10367D]/30 hover:text-[#10367D]'
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {app.title}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <motion.div
              key={activeApp}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="mt-8 grid rounded-[28px] border border-[#E6E6E6] bg-white p-8 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16 lg:p-10"
            >
              <div>
                <p className="text-[10px] font-[600] uppercase tracking-[0.22em] text-[#10367D]">
                  {activeAppData.title}
                </p>
                <h3
                  className="mt-3 text-[26px] font-[700] leading-[1.15] text-[#1F2937]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {activeAppData.desc}
                </h3>
              </div>
              <p
                className="text-[15px] font-[300] leading-[1.9] text-[#1F2937]/62 lg:pt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {activeAppData.detail}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Section 5: Selection Guide ────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
            <div>
              <SectionHeading
                eyebrow="Selection Guide"
                title="Electrical Selection Guide"
              />
              <p
                className="mt-6 max-w-[500px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Engineering durable electrical grids requires careful attention to load levels, environmental safety, and thermal management. Our team is ready to assist you.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {selectionGuideItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: index * 0.07, ease }}
                  className="rounded-[24px] border border-[#E6E6E6] bg-[#F8F8F8] p-6"
                >
                  <h3
                    className="text-[17px] font-[700] text-[#1F2937]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-[14px] font-[300] leading-[1.8] text-[#1F2937]/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: Featured Electrical Products ──────────────────────── */}
        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Featured Products"
              title="Featured Electrical Products"
              description="A preview of architectural and engineering electrical lines sourced for high-end builds."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease }}
                  className="group overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#0D1B2A]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-[18px] font-[700] text-[#1F2937]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="mt-2 text-[13px] font-[300] leading-[1.7] text-[#1F2937]/55"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.application}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 7: Applications & Inspiration ────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Applications &amp; Inspiration"
              title="Electrical Projects &amp; Environments"
              description="See how integrated lighting design, safe distribution schemes, and refined accessory selections look in finished spaces."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {inspirationProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease }}
                  className="group overflow-hidden rounded-[24px] border border-[#E6E6E6]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0D1B2A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/55 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3
                        className="text-[18px] font-[700] leading-[1.2] text-white"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="bg-[#F8F8F8] p-5">
                    <p
                      className="text-[13px] font-[300] leading-[1.8] text-[#1F2937]/62"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: Why Choose GEA ─────────────────────────────────────── */}
        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Why Choose GEA"
              title="Why Source Electrical Materials from GEA"
              description="We deliver reliable procurement strategies to match detailed architectural drafts."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyGEA.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease }}
                  className="rounded-[24px] border border-[#E6E6E6] bg-white p-7"
                >
                  <div className="mb-5 h-[3px] w-8 rounded-full bg-[#10367D]" />
                  <h3
                    className="text-[18px] font-[700] text-[#1F2937]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-4 text-[14px] font-[300] leading-[1.85] text-[#1F2937]/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 9: Related Solutions ──────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Integrated Solutions"
              title="Complete Your Project With Related Solutions"
            />
            <div className="mt-10 flex flex-wrap gap-4">
              {relatedSolutions.map((solution) => (
                <Link
                  key={solution.label}
                  href={solution.href}
                  className="inline-flex items-center rounded-full border border-[#E6E6E6] bg-[#F8F8F8] px-5 py-3 text-[13px] font-[500] text-[#1F2937] transition-all duration-300 hover:border-[#10367D]/20 hover:bg-white hover:text-[#10367D]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {solution.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 10: Quote ─────────────────────────────────────────────── */}
        <section id="quote" className="border-t border-[#E6E6E6] bg-[#0D1B2A] text-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16 lg:py-28">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Request Quote
                </span>
              </div>
              <h2
                className="mt-6 max-w-[720px] text-[34px] font-[700] leading-[1.1] tracking-tight lg:text-[54px]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Need Reliable Electrical Materials for Your Project?
              </h2>
              <p
                className="mt-6 max-w-[520px] text-[15px] font-[300] leading-[1.9] text-white/65"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Share your project requirements and our specialists will recommend suitable electrical
                products and systems based on your building type, specifications, and budget.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  'Cable & Distribution Systems',
                  'Fittings, Sockets & Accessories',
                  'Circuit Protections & Safety Boards',
                  'LED Lighting Systems',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="h-[1px] w-5 bg-[#C8A45D]" />
                    <span
                      className="text-[13px] font-[400] text-white/55"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:p-8"
            >
              {[
                { label: 'Name', type: 'text', placeholder: 'Your name' },
                { label: 'Company', type: 'text', placeholder: 'Company name (optional)' },
                { label: 'Phone', type: 'tel', placeholder: '+250 7XX XXX XXX' },
                { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Project Type', type: 'text', placeholder: 'Residential, office, factory, infrastructure...' },
                { label: 'Required Materials', type: 'text', placeholder: 'Wiring, consumer units, lighting, sockets...' },
                { label: 'Quantity / Estimate', type: 'text', placeholder: 'Estimated quantity or note' },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span
                    className="mb-3 block text-[10px] font-[600] uppercase tracking-[0.2em] text-white/50"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border-b border-white/15 bg-transparent py-3 text-[14px] font-[300] text-white outline-none placeholder:text-white/30 focus:border-[#C8A45D] transition-colors duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </label>
              ))}
              <label className="block">
                <span
                  className="mb-3 block text-[10px] font-[600] uppercase tracking-[0.2em] text-white/50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message
                </span>
                <textarea
                  rows={5}
                  placeholder="Share details on your specifications, load distributions, layout drawings, or timelines..."
                  className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-[14px] font-[300] text-white outline-none placeholder:text-white/30 focus:border-[#C8A45D] transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </label>
              <button
                type="submit"
                id="quote-form-submit"
                className="mt-2 inline-flex w-fit items-center rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
              >
                Request Material Quote
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

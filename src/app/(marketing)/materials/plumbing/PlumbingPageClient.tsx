'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';

const productCategories = [
  {
    title: 'Pipes',
    desc: 'Durable piping systems engineered for reliable water supply, drainage, and infrastructure applications.',
    applications: ['Residential', 'Commercial', 'Industrial', 'Infrastructure'],
    attributes: [
      { label: 'Available Product Types', items: ['PPR Pipes', 'PVC Pipes', 'HDPE Pipes', 'uPVC Pipes', 'CPVC Pipes', 'GI Pipes'] },
    ],
    image: cld('solutions-plumbing-featured', { w: 1800 }),
  },
  {
    title: 'Pipe Fittings',
    desc: 'Precision fittings designed to create secure and leak-free plumbing connections.',
    applications: ['Water Supply', 'Drainage', 'Irrigation'],
    attributes: [
      { label: 'Available Product Types', items: ['Elbows', 'Tees', 'Couplings', 'Reducers', 'Unions', 'Adaptors', 'End Caps'] },
    ],
    image: cld('solutions-plumbing-card', { w: 1800 }),
  },
  {
    title: 'Valves',
    desc: 'Control and regulate water flow with dependable plumbing valve solutions.',
    applications: ['Residential', 'Commercial', 'Industrial'],
    attributes: [
      { label: 'Available Product Types', items: ['Ball Valves', 'Gate Valves', 'Check Valves', 'Angle Valves', 'Foot Valves', 'Float Valves'] },
    ],
    image: cld('solutions-water-pumps-card', { w: 1800 }),
  },
  {
    title: 'Drainage Systems',
    desc: 'Efficient drainage solutions designed to manage wastewater safely and effectively.',
    applications: ['Residential', 'Commercial', 'Hospitality', 'Infrastructure'],
    attributes: [
      { label: 'Available Product Types', items: ['Floor Drains', 'Channel Drains', 'Waste Pipes', 'Inspection Chambers', 'Traps', 'Drain Covers'] },
    ],
    image: cld('solutions-industries-commercial', { w: 1800 }),
  },
  {
    title: 'Plumbing Accessories',
    desc: 'Complete your plumbing installation with quality accessories and supporting components.',
    applications: ['Installation', 'Maintenance', 'New Builds', 'Upgrades'],
    attributes: [
      { label: 'Available Product Types', items: ['Pipe Clamps', 'Sealants', 'Thread Tapes', 'Flexible Connectors', 'Pipe Supports', 'Installation Accessories'] },
    ],
    image: cld('solutions-default-professional-series', { w: 1800 }),
  },
];

const projectTypes = [
  {
    id: 'residential',
    title: 'Residential',
    desc: 'Reliable plumbing systems for homes, apartments, and villas.',
    detail: 'Well-selected pipework, fittings, valves, and drainage materials support dependable water delivery, efficient wastewater removal, and long-term durability in modern residential developments.',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    desc: 'Water supply and drainage solutions for offices, retail spaces, and mixed-use developments.',
    detail: 'Commercial plumbing systems require dependable materials that support high daily usage, easy maintenance access, and efficient coordination with broader building services and architectural layouts.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    desc: 'Efficient plumbing systems designed for hotels, resorts, and restaurants.',
    detail: 'Hospitality projects benefit from plumbing materials that combine performance, cleanliness, and serviceability across guest rooms, kitchens, service zones, and back-of-house utility networks.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    desc: 'Hygienic plumbing solutions for hospitals and healthcare facilities.',
    detail: 'Healthcare environments demand plumbing systems that support strict hygiene standards, dependable water flow, and durable distribution materials suitable for critical service areas and specialist installations.',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    desc: 'Heavy-duty plumbing materials for factories and industrial environments.',
    detail: 'Industrial applications require robust pipe materials, secure fittings, and high-performance valves that can withstand demanding operational conditions, larger networks, and long service cycles.',
  },
];

const selectionGuideItems = [
  {
    title: 'Pipe Material',
    desc: 'Understand the differences between PPR, PVC, HDPE, CPVC, and GI pipes so each line is matched to the required application, installation method, and operating environment.',
  },
  {
    title: 'Pressure Rating',
    desc: 'Select materials suitable for your project\'s operating pressure. Correct pressure classes are essential for safety, reliability, and long-term plumbing performance.',
  },
  {
    title: 'Corrosion Resistance',
    desc: 'Choose materials designed for long-term durability in different environments, especially where moisture, chemicals, or aggressive water conditions can affect service life.',
  },
  {
    title: 'Maintenance',
    desc: 'Select plumbing systems that are easy to service and maintain, helping building teams reduce downtime and simplify future repairs or upgrades.',
  },
  {
    title: 'Compatibility',
    desc: 'Ensure pipes, fittings, and valves work together for reliable performance. Coordinated systems reduce installation issues and help maintain leak-free connections.',
  },
];

const featuredProducts = [
  {
    name: 'PPR Pipe System',
    application: 'Hot & Cold Water Distribution',
    image: cld('solutions-plumbing-featured', { w: 1200 }),
  },
  {
    name: 'PVC Drainage Pipes',
    application: 'Wastewater & Drainage Networks',
    image: cld('solutions-plumbing-card', { w: 1200 }),
  },
  {
    name: 'HDPE Water Pipes',
    application: 'Underground & Infrastructure Supply',
    image: cld('solutions-water-pumps-card', { w: 1200 }),
  },
  {
    name: 'Ball Valve',
    application: 'Flow Control & Isolation',
    image: cld('solutions-default-standard-collection', { w: 1200 }),
  },
  {
    name: 'Pipe Fittings Collection',
    application: 'Secure Plumbing Connections',
    image: cld('solutions-default-professional-series', { w: 1200 }),
  },
  {
    name: 'Floor Drain System',
    application: 'Bathrooms, Kitchens & Utility Areas',
    image: cld('solutions-industries-hospitality', { w: 1200 }),
  },
];

const inspirationProjects = [
  {
    title: 'Luxury Residential Villa',
    desc: 'Coordinated water supply and drainage materials supporting refined living spaces, utility rooms, and concealed service installations.',
    image: cld('solutions-industries-residential', { w: 1400 }),
  },
  {
    title: 'Apartment Development',
    desc: 'Efficient stacked plumbing networks designed for dependable performance across multiple residential units.',
    image: cld('solutions-showcase-premium-materials', { w: 1400 }),
  },
  {
    title: 'Modern Office Building',
    desc: 'Integrated plumbing and drainage materials selected to support washrooms, service cores, and commercial occupancy requirements.',
    image: cld('solutions-industries-commercial', { w: 1400 }),
  },
  {
    title: 'Hotel Plumbing Installation',
    desc: 'Professional-grade plumbing systems for guest rooms, kitchens, laundry areas, and high-use hospitality environments.',
    image: cld('solutions-industries-hospitality', { w: 1400 }),
  },
  {
    title: 'Hospital Water System',
    desc: 'Hygienic plumbing infrastructure supporting healthcare standards, critical water supply, and dependable facility operations.',
    image: cld('solutions-industries-healthcare', { w: 1400 }),
  },
  {
    title: 'Industrial Facility',
    desc: 'Heavy-duty plumbing materials and control components selected for large-scale service lines and industrial utility demands.',
    image: cld('solutions-industries-industrial', { w: 1400 }),
  },
];

const whyGEA = [
  {
    title: 'Quality Materials',
    desc: 'Reliable products selected for durability and performance across demanding plumbing applications, from domestic water systems to larger building infrastructure networks.',
  },
  {
    title: 'Professional Support',
    desc: 'Technical guidance for selecting suitable plumbing systems, helping teams choose the right pipe materials, fittings, valves, and drainage components for each project.',
  },
  {
    title: 'Integrated Project Solutions',
    desc: 'Materials supplied alongside engineering and construction services, supporting better coordination between procurement, design intent, and on-site installation requirements.',
  },
  {
    title: 'Reliable Supply',
    desc: 'Consistent availability for projects of all sizes, from residential developments to large-scale hospitality, healthcare, commercial, and industrial works.',
  },
];

const relatedSolutions = [
  { label: 'Bathroom & Sanitary', href: '/materials/bathroom-sanitary' },
  { label: 'Water Pumps', href: '/solutions/water-pumps' },
  { label: 'Water Heaters', href: '/solutions/water-heaters' },
  { label: 'General Contracting', href: '/services/general-contracting' },
  { label: 'MEP Engineering', href: '/services/mep-engineering' },
];

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

export default function PlumbingPageClient() {
  const [activeApp, setActiveApp] = useState<string>('residential');
  const activeAppData = projectTypes.find((a) => a.id === activeApp)!;

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-[#1F2937]">
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
              src={cld('solutions-plumbing-featured', { w: 2400 })}
              alt="Plumbing solutions"
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
                Plumbing
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
              Professional Plumbing Solutions for Every Building
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.14, ease }}
              className="mb-10 max-w-[760px] text-[16px] font-[300] leading-[1.9] text-white/68"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Discover reliable plumbing materials designed for residential, commercial, hospitality,
              healthcare, and industrial developments. Global Engineering Agency supplies high-quality
              pipes, fittings, valves, drainage systems, and plumbing accessories that ensure safe
              water distribution and long-term performance.
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
                <span>Browse Plumbing Products</span>
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
                'Water Supply Systems',
                'Drainage Solutions',
                'Pipes & Fittings',
                'Professional Installation Materials',
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

        <section className="border-y border-[#E6E6E6] bg-[#F8F8F8]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-16 lg:py-28">
            <div>
              <SectionHeading
                eyebrow="Introduction"
                title="Reliable Plumbing Systems Begin with Quality Materials"
                description="Plumbing systems are essential to every building, ensuring the safe delivery of clean water and the efficient removal of wastewater. Choosing the right materials improves durability, efficiency, and long-term building performance."
              />
              <p
                className="mt-6 max-w-[600px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                GEA supplies plumbing solutions suitable for homes, apartments, offices, hotels,
                hospitals, schools, industrial facilities, and large infrastructure projects.
              </p>
            </div>

            <div className="grid gap-4 border-[#E6E6E6] lg:border-l lg:pl-10">
              {[
                'Residential Homes & Villas',
                'Apartments & Multi-Unit Developments',
                'Commercial Buildings & Offices',
                'Hotels, Resorts & Restaurants',
                'Hospitals & Healthcare Facilities',
                'Schools & Institutional Buildings',
                'Industrial Facilities & Infrastructure',
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

        <section id="categories" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Explore Product Categories"
              title="Plumbing Materials for Distribution, Drainage & Control"
              description="Explore complete plumbing categories selected to support safe water distribution, efficient drainage, and dependable installation performance across a wide range of building types."
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

        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Solutions by Project Type"
              title="Plumbing Systems Matched to Project Requirements"
            />

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

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
            <div>
              <SectionHeading eyebrow="Selection Guide" title="Choosing the Right Plumbing Materials" />
              <p
                className="mt-6 max-w-[500px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                A well-designed plumbing system depends on selecting compatible materials that suit the
                application, pressure requirements, maintenance needs, and long-term performance goals
                of the project.
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

        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Featured Products"
              title="Featured Plumbing Products"
              description="A curated gallery of plumbing materials commonly specified for modern construction and infrastructure projects."
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

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Applications &amp; Inspiration"
              title="Completed Environments Using GEA Plumbing Materials"
              description="Explore project environments where dependable water supply and drainage systems support performance, hygiene, and long-term building reliability."
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

        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Why Choose GEA"
              title="Why Source Plumbing Materials from GEA"
              description="A specification-focused sourcing approach for plumbing systems across multiple building types."
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

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Related Solutions"
              title="Explore Complementary Building Solutions"
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
                Need Professional Plumbing Materials?
              </h2>
              <p
                className="mt-6 max-w-[520px] text-[15px] font-[300] leading-[1.9] text-white/65"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Share your project requirements and our team will recommend the most suitable plumbing
                materials and solutions based on your specifications, application, and project scale.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  'Water Supply Pipe Systems',
                  'Valves, Fittings & Connection Materials',
                  'Drainage Lines & Wastewater Components',
                  'Professional Plumbing Installation Accessories',
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
                { label: 'Project Type', type: 'text', placeholder: 'Residential, hotel, hospital, factory...' },
                { label: 'Required Materials', type: 'text', placeholder: 'Pipes, fittings, valves, drainage systems...' },
                { label: 'Quantity / Estimate', type: 'text', placeholder: 'Estimated quantity or project note' },
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
                  placeholder="Share details on your specifications, applications, drawings, quantities, or delivery timelines..."
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

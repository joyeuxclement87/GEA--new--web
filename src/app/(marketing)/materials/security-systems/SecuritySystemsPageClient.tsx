'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';


const productCategories = [
  {
    title: 'CCTV Surveillance Systems',
    desc: 'Professional video monitoring solutions designed for visibility, security management, and property protection.',
    applications: ['Residential Security', 'Commercial Buildings', 'Industrial Sites', 'Public Facilities'],
    attributes: [
      {
        label: 'Product Types',
        items: [
          'IP Cameras',
          'Dome Cameras',
          'Bullet Cameras',
          'PTZ Cameras',
          'Thermal Cameras',
          'Network Video Recorders (NVR)',
          'Digital Video Recorders (DVR)',
        ],
      },
    ],
    image: cld('solutions-security-systems-featured', { w: 1800 }),
  },
  {
    title: 'Access Control Systems',
    desc: 'Smart entry management solutions that control and monitor access to buildings and restricted areas.',
    applications: ['Offices', 'Hotels', 'Banks', 'Institutions', 'Secure Facilities'],
    attributes: [
      {
        label: 'Product Types',
        items: [
          'Fingerprint Readers',
          'Card Readers',
          'Biometric Systems',
          'Face Recognition Systems',
          'Door Controllers',
          'Electronic Locks',
        ],
      },
    ],
    image: cld('solutions-security-systems-card', { w: 1800 }),
  },
  {
    title: 'Video Intercom Systems',
    desc: 'Communication solutions that improve visitor management and building security.',
    applications: ['Apartments', 'Villas', 'Residential Complexes', 'Offices'],
    attributes: [
      {
        label: 'Product Types',
        items: ['Indoor Monitors', 'Outdoor Stations', 'Audio Intercoms', 'Video Door Phones'],
      },
    ],
    image: cld('solutions-industries-residential', { w: 1800 }),
  },
  {
    title: 'Security Accessories',
    desc: 'Supporting components required for complete security installations.',
    applications: ['Integrated Installations', 'Monitoring Rooms', 'Commercial Systems', 'Building Security Networks'],
    attributes: [
      {
        label: 'Product Types',
        items: [
          'Storage Devices',
          'Network Equipment',
          'Power Supplies',
          'Mounting Accessories',
          'Security Cables',
          'Monitoring Equipment',
        ],
      },
    ],
    image: cld('solutions-default-professional-series', { w: 1800 }),
  },
];

const propertyTypes = [
  {
    id: 'residential',
    title: 'Residential Security',
    desc: 'Protection, monitoring, and controlled access for homes, villas, apartments, and residential estates.',
    detail:
      'Residential systems combine surveillance, entry control, and visitor management to improve daily safety while supporting discreet integration with modern homes and shared developments.',
  },
  {
    id: 'commercial',
    title: 'Commercial Security',
    desc: 'Employee safety, visitor management, and asset protection for offices, retail spaces, and corporate buildings.',
    detail:
      'Commercial security solutions are selected to support controlled access, clear visibility, centralized monitoring, and dependable daily performance across professional and public-facing spaces.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality Security',
    desc: 'Guest safety and professional access management for hotels, resorts, and restaurants.',
    detail:
      'Hospitality environments benefit from integrated camera systems, access management, and intercom solutions that improve guest confidence while supporting smooth operations across service and private zones.',
  },
  {
    id: 'industrial',
    title: 'Industrial Security',
    desc: 'Large-scale monitoring and restricted access for factories, warehouses, and industrial sites.',
    detail:
      'Industrial facilities require durable surveillance systems, secure access control, and scalable monitoring infrastructure capable of covering larger perimeters and operationally sensitive areas.',
  },
];

const selectionGuideItems = [
  {
    title: 'Property Requirements',
    desc: 'Different buildings require different levels of security coverage. The right system depends on occupancy patterns, risk level, building size, and operational priorities.',
  },
  {
    title: 'Camera Selection',
    desc: 'Choose cameras based on location, lighting conditions, coverage area, and resolution requirements so the system captures clear, useful monitoring footage.',
  },
  {
    title: 'Storage Requirements',
    desc: 'Select appropriate recording and storage solutions based on monitoring duration, camera count, image quality, and how footage will be reviewed or archived.',
  },
  {
    title: 'Access Management',
    desc: 'Choose access systems based on users, security levels, and operational requirements, ensuring that entry control matches the needs of the building and its occupants.',
  },
  {
    title: 'Future Expansion',
    desc: 'Design systems that allow additional cameras and security upgrades so the installation can grow with changing security requirements over time.',
  },
];

const featuredProducts = [
  {
    name: 'IP Camera System',
    application: 'Continuous Video Surveillance',
    image: cld('solutions-security-systems-featured', { w: 1200 }),
  },
  {
    name: 'Access Control Reader',
    application: 'Managed Building Entry',
    image: cld('solutions-security-systems-card', { w: 1200 }),
  },
  {
    name: 'Video Intercom',
    application: 'Visitor Communication & Entry Verification',
    image: cld('solutions-industries-residential', { w: 1200 }),
  },
  {
    name: 'Security Monitoring Station',
    application: 'Centralized Security Oversight',
    image: cld('solutions-industries-commercial', { w: 1200 }),
  },
  {
    name: 'Network Video Recorder',
    application: 'Footage Recording & Review',
    image: cld('solutions-default-standard-collection', { w: 1200 }),
  },
  {
    name: 'Smart Door Access System',
    application: 'Controlled Access Management',
    image: cld('solutions-default-professional-series', { w: 1200 }),
  },
];

const inspirationProjects = [
  {
    title: 'Residential Estate Security',
    desc: 'Integrated perimeter monitoring and access management improving security confidence across modern residential communities.',
    image: cld('solutions-industries-residential', { w: 1400 }),
  },
  {
    title: 'Office Surveillance System',
    desc: 'Professional monitoring coverage supporting employee safety, visitor visibility, and secure daily business operations.',
    image: cld('solutions-industries-commercial', { w: 1400 }),
  },
  {
    title: 'Hotel Access Control',
    desc: 'Managed access solutions improving guest safety, staff coordination, and controlled movement through hospitality environments.',
    image: cld('solutions-industries-hospitality', { w: 1400 }),
  },
  {
    title: 'Industrial Monitoring',
    desc: 'Scalable surveillance and restricted-access systems supporting operational oversight across larger industrial sites.',
    image: cld('solutions-industries-industrial', { w: 1400 }),
  },
  {
    title: 'Commercial Building Protection',
    desc: 'Integrated security technologies reinforcing visibility, control, and long-term protection for high-traffic commercial properties.',
    image: cld('solutions-showcase-premium-materials', { w: 1400 }),
  },
  {
    title: 'Apartment Entry System',
    desc: 'Visitor communication and controlled-access systems designed to improve convenience and residential security performance.',
    image: cld('solutions-industries-government', { w: 1400 }),
  },
];

const whyGEA = [
  {
    title: 'Professional Product Selection',
    desc: 'Security equipment chosen according to project requirements, helping clients select suitable surveillance, access, and monitoring systems for each property type.',
  },
  {
    title: 'Integrated Installation Support',
    desc: 'Solutions designed to work with building systems, supporting coordinated implementation across electrical layouts, entrances, service spaces, and operational zones.',
  },
  {
    title: 'Complete Protection Approach',
    desc: 'Security combined with architecture, electrical, and engineering solutions to support a broader and more coordinated approach to building protection.',
  },
  {
    title: 'Reliable Technology',
    desc: 'Dependable systems suitable for long-term operation, selected to deliver consistent performance across residential, commercial, hospitality, and industrial environments.',
  },
];

const relatedSolutions = [
  { label: 'Electrical Systems', href: '/materials/electrical' },
  { label: 'Fire Protection', href: '/solutions/fire-safety' },
  { label: 'HVAC Systems', href: '/solutions/hvac' },
  { label: 'Solar Solutions', href: '/solutions/solar-energy' },
  { label: 'MEP Engineering', href: '/services/mep-engineering' },
  { label: 'General Contracting', href: '/services/general-contracting' },
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

export default function SecuritySystemsPageClient() {
  const [activeApp, setActiveApp] = useState<string>('residential');
  const activeAppData = propertyTypes.find((a) => a.id === activeApp)!;

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-[#1F2937]">
        <section
          className="relative overflow-hidden bg-white"
          style={{ minHeight: '80vh', marginTop: '88px' }}
          aria-label="Hero"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #10367D14 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(255,255,255,0.85) 100%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="absolute top-0 left-0 right-0 z-20 border-b border-[#E6E6E6]"
          >
            <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-8 py-3.5 lg:px-16">
              <Link
                href="/"
                className="text-[11px] font-[400] text-[#1F2937]/45 transition-colors duration-200 hover:text-[#10367D]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Home
              </Link>
              <span className="text-[#1F2937]/25 text-[10px]">·</span>
              <Link
                href="/solutions"
                className="text-[11px] font-[400] text-[#1F2937]/45 transition-colors duration-200 hover:text-[#10367D]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Materials &amp; Solutions
              </Link>
              <span className="text-[#1F2937]/25 text-[10px]">·</span>
              <span
                className="text-[11px] font-[500] text-[#1F2937]/75"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Security Systems
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
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <SectionLabel>Materials &amp; Solutions</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="mb-6 max-w-[900px] text-[40px] font-[800] leading-[1.05] tracking-[-0.03em] text-[#0D1B2A] sm:text-[58px] lg:text-[72px]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              CCTV &amp; Access Control Security Systems for Modern Buildings
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.14, ease }}
              className="mb-10 max-w-[760px] text-[16px] font-[300] leading-[1.9] text-[#1F2937]/65"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Global Engineering Agency supplies advanced security solutions including CCTV surveillance,
              access control systems, and monitoring technologies designed to protect residential,
              commercial, institutional, and industrial properties.
              <span className="mt-3 block">
                Our solutions combine reliable technology, professional integration, and long-term security performance.
              </span>
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
                className="inline-flex items-center gap-3 rounded-[999px] bg-[#10367D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-white transition-all duration-300 hover:bg-[#0a2560] hover:shadow-lg hover:shadow-[#10367D]/20"
              >
                Request Material Quote
              </Link>
              <Link
                href="#categories"
                id="hero-cta-browse"
                className="inline-flex items-center gap-3 rounded-[999px] border border-[#1F2937]/20 px-7 py-3.5 text-[13.5px] font-[500] text-[#1F2937]/70 transition-all duration-300 hover:border-[#10367D]/40 hover:text-[#10367D]"
              >
                Explore Security Solutions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            >
              {[
                'CCTV Surveillance',
                'Access Control',
                'Monitoring Systems',
                'Smart Security',
              ].map((tag, i, arr) => (
                <span key={tag} className="flex items-center gap-6">
                  <span
                    className="text-[12px] font-[500] text-[#1F2937]/55"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {tag}
                  </span>
                  {i < arr.length - 1 && <span className="text-[#1F2937]/25 text-[10px]">·</span>}
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
                title="Smart Security Solutions Designed Around Your Property"
                description="Modern buildings require reliable security systems that protect people, assets, and information."
              />
              <p
                className="mt-6 max-w-[600px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                GEA provides carefully selected security equipment and solutions suitable for different property types, from residential developments to large commercial and institutional facilities.
              </p>
            </div>

            <div className="grid gap-4 border-[#E6E6E6] lg:border-l lg:pl-10">
              {[
                'Homes',
                'Apartments',
                'Offices',
                'Hotels',
                'Schools',
                'Hospitals',
                'Industrial Facilities',
                'Commercial Buildings',
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
              eyebrow="Explore Security Categories"
              title="Integrated Security Systems for Visibility, Access & Protection"
              description="Browse security categories selected to support surveillance coverage, controlled building access, visitor management, and dependable long-term monitoring performance."
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
              eyebrow="Solutions By Property Type"
              title="Security Systems Matched to Building Use"
            />

            <div className="mt-12 flex flex-wrap gap-3">
              {propertyTypes.map((app) => (
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
              <SectionHeading eyebrow="Selection Guide" title="Choosing The Right Security Solution" />
              <p
                className="mt-6 max-w-[500px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Effective building protection depends on selecting systems that match coverage needs, access priorities, monitoring expectations, and future operational growth.
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
              title="Featured Security Products"
              description="A curated gallery of professional security systems and monitoring technologies suited to modern buildings and managed properties."
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
              eyebrow="Security Applications"
              title="Completed Environments Using Security Solutions"
              description="See how surveillance, access control, and monitoring technologies improve visibility, safety, and control across different property environments."
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
              title="Why Choose GEA Security Solutions"
              description="A coordinated security sourcing approach built around project requirements and building integration."
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
                Protect Your Property With Reliable Security Systems
              </h2>
              <p
                className="mt-6 max-w-[520px] text-[15px] font-[300] leading-[1.9] text-white/65"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Share your project requirements and our team will recommend suitable CCTV, access control, and security solutions based on your building type and protection needs.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  'CCTV Surveillance & Recording Systems',
                  'Controlled Access & Entry Management',
                  'Video Intercom & Visitor Management',
                  'Security Accessories & Monitoring Equipment',
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
                { label: 'Property Type', type: 'text', placeholder: 'Home, office, hotel, factory, institution...' },
                { label: 'Required Solutions', type: 'text', placeholder: 'CCTV, access control, intercom, monitoring...' },
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
                  placeholder="Share details on your building type, protection needs, layouts, quantities, or project timelines..."
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

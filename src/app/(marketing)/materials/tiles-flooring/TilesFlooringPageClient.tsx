'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';
import { ArrowRight, Layers, Building2, TreePine, Sparkles, ChevronRight, Home } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const productCategories = [
  {
    title: 'Ceramic Tiles',
    desc: 'A versatile and cost-effective solution suitable for everyday residential and light commercial spaces. Ceramic tiles offer a wide range of design options, making them a popular choice across kitchens, bathrooms, and living areas.',
    applications: ['Living rooms', 'Kitchens', 'Bathrooms', 'Offices'],
    attributes: [
      { label: 'Common Finishes', items: ['Matte', 'Glossy', 'Textured'] },
      { label: 'Available Sizes', items: ['30×30 cm', '40×40 cm', '60×60 cm', 'Custom formats'] },
    ],
    image: cld('solutions-tiles-flooring-ceramic-tiles', { w: 1800 }),
  },
  {
    title: 'Porcelain Tiles',
    desc: 'High-density, low-porosity tiles engineered for heavy traffic and demanding environments. Porcelain is exceptionally hard-wearing and suitable for both interior and exterior applications, including areas exposed to moisture and heavy footfall.',
    applications: ['Commercial buildings', 'Hotels', 'Shopping centres', 'Outdoor terraces'],
    attributes: [
      { label: 'Common Finishes', items: ['Matte', 'Polished', 'Stone effect', 'Concrete effect'] },
      { label: 'Available Sizes', items: ['60×60 cm', '60×120 cm', '80×80 cm', '120×120 cm'] },
    ],
    image: cld('solutions-tiles-flooring-large-format-porcelain', { w: 1800 }),
  },
  {
    title: 'Natural Stone',
    desc: 'Premium architectural surfaces with timeless character. Each piece is unique, offering natural variation in colour and texture that adds depth and authenticity to luxury residential and high-end commercial environments.',
    applications: ['Luxury residences', 'Hotels', 'Landscape features', 'Feature walls'],
    attributes: [
      { label: 'Types', items: ['Marble', 'Granite', 'Travertine', 'Slate'] },
      { label: 'Available Formats', items: ['Slabs', 'Cut-to-size tiles', 'Mosaic panels'] },
    ],
    image: cld('solutions-tiles-flooring-natural-stone-selection', { w: 1800 }),
  },
  {
    title: 'Outdoor Paving',
    desc: 'Durable flooring solutions specifically engineered for exterior environments. Designed to withstand climate variation, heavy foot traffic, and UV exposure while maintaining a clean, architectural appearance.',
    applications: ['Walkways', 'Gardens', 'Courtyards', 'Public spaces'],
    attributes: [
      { label: 'Common Finishes', items: ['Structured', 'Brushed', 'Anti-slip textured'] },
      { label: 'Available Sizes', items: ['40×80 cm', '60×90 cm', '80×80 cm', 'Large format'] },
    ],
    image: cld('solutions-tiles-flooring-outdoor-paving', { w: 1800 }),
  },
];

const applications = [
  {
    id: 'residential',
    title: 'Residential',
    desc: 'Warm finishes designed for modern homes.',
    detail: 'From living rooms and kitchens to bathrooms and outdoor terraces, our residential tile selection combines comfort with architectural refinement — available in ceramic, porcelain, and natural stone.',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    desc: 'Durable flooring for offices and retail environments.',
    detail: 'High-traffic commercial spaces demand materials that perform consistently over time. We supply large-format porcelain and textured finishes designed for offices, retail centres, and public buildings.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    desc: 'Luxury finishes for hotels and restaurants.',
    detail: 'Hotels, resorts, and restaurants require flooring that balances elegance with durability. Our hospitality range includes polished stone, large-format porcelain, and bespoke natural stone options.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    desc: 'Easy-to-clean hygienic flooring solutions.',
    detail: 'Healthcare environments require slip-resistant, easy-to-sanitise surfaces. We supply non-porous, anti-bacterial certified tiles and smooth-edge formats that support hygiene and safety standards.',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    desc: 'Heavy-duty flooring for demanding environments.',
    detail: 'Industrial flooring must resist heavy loads, chemical exposure, and constant mechanical stress. Our industrial range includes reinforced porcelain and structured paving with high slip-resistance ratings.',
  },
];

const selectionGuideItems = [
  {
    title: 'Material Type',
    desc: 'Ceramic tiles are cost-effective and suitable for light-use interiors. Porcelain offers superior density and durability for commercial and outdoor use. Natural stone provides premium aesthetics with unique surface variation — ideal for luxury projects.',
  },
  {
    title: 'Slip Resistance',
    desc: 'Anti-slip surfaces are recommended for wet areas such as bathrooms, pool surrounds, and outdoor walkways. Look for tiles with a structured or textured finish and a suitable R-rating or PEI classification for the intended application.',
  },
  {
    title: 'Finish',
    desc: 'Matte finishes conceal minor marks and are practical for high-use areas. Polished finishes create a reflective, premium appearance ideal for feature floors and reception areas. Textured surfaces add grip and visual depth.',
  },
  {
    title: 'Size & Format',
    desc: 'Large-format tiles create a seamless appearance with fewer grout lines — ideal for open spaces. Standard formats offer flexibility and cost efficiency. Mosaics are used for decorative accents, curved surfaces, and feature walls.',
  },
  {
    title: 'Maintenance',
    desc: 'Porcelain and glazed ceramic require minimal maintenance — regular cleaning with neutral detergent is sufficient. Natural stone may require periodic sealing to protect against staining. Grout selection also affects long-term cleanliness.',
  },
];

const collections = [
  {
    name: 'Carrara Marble Series',
    material: 'Natural Marble',
    application: 'Luxury Residences & Hospitality',
    image: cld('solutions-tiles-flooring-collection-marble', { w: 1200 }),
  },
  {
    name: 'Urban Concrete Effect',
    material: 'Porcelain',
    application: 'Commercial & Office Interiors',
    image: cld('solutions-tiles-flooring-large-format-porcelain', { w: 1200 }),
  },
  {
    name: 'Natural Wood Look',
    material: 'Ceramic & Porcelain',
    application: 'Residential & Hospitality',
    image: cld('solutions-tiles-flooring-wood-effect-ceramics', { w: 1200 }),
  },
  {
    name: 'Outdoor Stone Collection',
    material: 'Structured Porcelain',
    application: 'Terraces, Courtyards & Landscaping',
    image: cld('solutions-tiles-flooring-natural-stone-selection', { w: 1200 }),
  },
];

const inspirationProjects = [
  {
    title: 'Modern Residential Living Room',
    desc: 'Large-format porcelain in a warm grey tone creates a seamless, contemporary living space.',
    image: cld('solutions-tiles-flooring-inspiration-living-room', { w: 1400 }),
  },
  {
    title: 'Luxury Hotel Lobby',
    desc: 'Polished marble tiles with refined jointing deliver an arrival experience of lasting elegance.',
    image: cld('solutions-tiles-flooring-inspiration-hotel-lobby', { w: 1400 }),
  },
  {
    title: 'Restaurant Interior',
    desc: 'Wood-effect ceramic combined with decorative stone accents defines a warm hospitality atmosphere.',
    image: cld('solutions-tiles-flooring-inspiration-restaurant', { w: 1400 }),
  },
  {
    title: 'Office Reception',
    desc: 'A polished concrete-effect porcelain floor anchors a professional, high-performance workplace.',
    image: cld('solutions-tiles-flooring-inspiration-office', { w: 1400 }),
  },
  {
    title: 'Outdoor Courtyard',
    desc: 'Structured anti-slip paving extends living space outdoors with a considered architectural finish.',
    image: cld('solutions-tiles-flooring-inspiration-courtyard', { w: 1400 }),
  },
  {
    title: 'Retail Space',
    desc: 'Light-toned, large-format tiles create an expansive, clean retail environment that enhances merchandise display.',
    image: cld('solutions-tiles-flooring-inspiration-retail', { w: 1400 }),
  },
];

const whyGEA = [
  {
    title: 'Quality Materials',
    desc: 'Every product in our flooring range is selected for long-term performance, dimensional stability, and finish consistency. We work with reputable suppliers to ensure materials meet international quality standards.',
  },
  {
    title: 'Professional Guidance',
    desc: 'Our team provides material recommendations based on your specific project requirements — including application, traffic levels, environmental conditions, finish preferences, and budget.',
  },
  {
    title: 'Complete Project Support',
    desc: 'Flooring supply is integrated with our broader architecture, interior design, and construction services. This means your material specification fits seamlessly into the wider project delivery.',
  },
  {
    title: 'Reliable Supply',
    desc: 'We support projects of different scales — from single-residential renovations to large commercial developments — with reliable material availability and consistent batch matching.',
  },
];

const relatedSolutions = [
  { label: 'Bathroom & Sanitary', href: '/materials/bathroom-sanitary' },
  { label: 'Interior Design', href: '/services/interior-design' },
  { label: 'Architecture Drawings', href: '/services/architecture-drawings' },
  { label: 'General Contracting', href: '/services/general-contracting' },
  { label: 'Property Refurbishment', href: '/services/real-estate' },
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

export default function TilesFlooringPageClient() {
  const [activeApp, setActiveApp] = useState<string>('residential');
  const activeAppData = applications.find((a) => a.id === activeApp)!;

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-[#1F2937]">

        {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
        <section
          className="relative flex items-center overflow-hidden bg-[#0D1B2A] text-white"
          style={{ minHeight: 'calc(86vh - 0px)', marginTop: '88px' }}
          aria-label="Hero"
        >
          {/* Background image */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.28 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              src={cld('solutions-tiles-flooring-featured', { w: 2400 })}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Navy-left gradient — identical to landing page */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#10367D]/95 via-[#0D1B2A]/88 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
          </div>

          {/* Subtle vertical structural lines — identical to landing page */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '120px 100%',
            }}
          />

          {/* Breadcrumb — top of hero */}
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
                Tiles &amp; Flooring
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-8 py-20 pt-28 text-center lg:px-16 lg:py-28 lg:pt-36">
            <div className="max-w-[820px] space-y-8">

              {/* Gold category label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="inline-flex items-center gap-3"
              >
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Materials &amp; Solutions
                </span>
              </motion.div>

              {/* H1 — weight variation like landing page */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease }}
                className="text-[38px] font-[800] leading-[1.06] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[76px]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Premium Tiles &amp;{' '}
                <span className="font-[300] text-white/80">Flooring</span>{' '}
                <br className="hidden lg:block" />
                <span className="font-[700] text-[#C8A45D]">Solutions.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18, ease }}
                className="max-w-[600px] text-[15px] font-[300] leading-[1.9] text-white/68"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Explore high-quality ceramic, porcelain, natural stone, and specialty flooring solutions
                designed for residential, commercial, hospitality, healthcare, and industrial projects.
                Our carefully selected materials combine durability, functionality, and architectural elegance.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.26, ease }}
                className="flex flex-wrap items-center justify-center gap-4"
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
                  className="inline-flex items-center justify-center rounded-[999px] border border-white/20 bg-white/5 px-7 py-3.5 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  <span>Browse Collections</span>
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </motion.div>

              {/* Icon info row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.38, ease }}
                className="flex flex-wrap items-center justify-center gap-6 pt-2"
              >
                {[
                  { icon: Layers, label: 'Ceramic & Porcelain' },
                  { icon: Sparkles, label: 'Natural Stone' },
                  { icon: TreePine, label: 'Indoor & Outdoor' },
                  { icon: Building2, label: 'Commercial Grade' },
                ].map(({ icon: Icon, label }, i, arr) => (
                  <span key={label} className="flex items-center gap-5">
                    <span className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-[#C8A45D]" strokeWidth={1.5} />
                      <span
                        className="text-[12px] font-[500] text-white/55"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {label}
                      </span>
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-white/20 text-[10px]">·</span>
                    )}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Introduction ──────────────────────────────────────── */}
        <section className="border-y border-[#E6E6E6] bg-[#F8F8F8]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-16 lg:py-28">
            <div>
              <SectionHeading
                eyebrow="Introduction"
                title="Built for Performance. Designed for Every Space."
                description="Flooring is one of the most consequential decisions in any architectural project. It defines the character of a space, influences safety, shapes acoustic performance, and must withstand decades of use. The right flooring choice balances aesthetics with technical performance — and no two projects are exactly alike."
              />
              <p
                className="mt-6 max-w-[600px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Global Engineering Agency supplies flooring solutions suitable for projects of every
                scale — from private homes and apartments to hotels, offices, hospitals, shopping
                centres, and large commercial developments. Our range covers ceramic, porcelain,
                natural stone, and outdoor paving, all selected for architectural integrity and
                long-term reliability.
              </p>
            </div>

            <div className="grid gap-4 border-[#E6E6E6] lg:border-l lg:pl-10">
              {[
                'Residential Homes',
                'Apartments & Villas',
                'Hotels & Resorts',
                'Offices & Corporate Spaces',
                'Hospitals & Clinics',
                'Shopping Centres',
                'Commercial Developments',
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
              title="Our Flooring Categories"
              description="Each category serves distinct architectural and functional requirements. Explore the range to find the right solution for your project."
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

        {/* ── Section 4: Choose by Application ─────────────────────────────── */}
        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Choose by Application"
              title="Find the Right Solution for Your Project"
            />

            {/* Selector */}
            <div className="mt-12 flex flex-wrap gap-3">
              {applications.map((app) => (
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
                title="Selecting the Right Flooring for Your Project"
              />
              <p
                className="mt-6 max-w-[500px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Choosing the correct tile involves more than aesthetics. Our team helps clients
                evaluate material properties, environmental conditions, and long-term maintenance
                requirements to make an informed decision.
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

        {/* ── Section 6: Featured Collections ──────────────────────────────── */}
        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Featured Collections"
              title="Curated Flooring Collections"
              description="A selection of flooring collections available across different materials, finishes, and project types."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {collections.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease }}
                  className="group overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#0D1B2A]">
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
                      className="mt-1.5 text-[11px] font-[600] uppercase tracking-[0.18em] text-[#10367D]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.material}
                    </p>
                    <p
                      className="mt-3 text-[13px] font-[300] leading-[1.7] text-[#1F2937]/55"
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

        {/* ── Section 7: Project Inspiration ───────────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Project Inspiration"
              title="Flooring in Completed Spaces"
              description="Explore how different flooring solutions perform in real architectural environments — from private residences to large hospitality and commercial projects."
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
              title="The GEA Difference"
              description="We combine material expertise with integrated project services to provide flooring solutions that perform from specification through to installation."
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
              title="Complete Your Project With Integrated Services"
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
                Let's Find the Right Flooring Solution
              </h2>
              <p
                className="mt-6 max-w-[520px] text-[15px] font-[300] leading-[1.9] text-white/65"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Tell us about your project, and our specialists will recommend suitable flooring
                materials based on design, performance, budget, and application.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  'Ceramic & Porcelain Tiles',
                  'Natural Stone Surfaces',
                  'Outdoor Paving',
                  'Large Format Flooring',
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
                { label: 'Project Type', type: 'text', placeholder: 'Residential, hotel, office, commercial...' },
                { label: 'Required Materials', type: 'text', placeholder: 'Ceramic tiles, porcelain, natural stone...' },
                { label: 'Area (m²)', type: 'text', placeholder: 'Estimated area in square metres' },
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
                  placeholder="Share your project requirements, preferred finishes, budget range, or technical specifications..."
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

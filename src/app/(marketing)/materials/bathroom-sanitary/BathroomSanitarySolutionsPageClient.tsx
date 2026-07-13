'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { cld } from '@/lib/cloudinary';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '12+' },
  { label: 'Projects Supported', value: '150+' },
  { label: 'Product Categories', value: '3' },
];

const productCategories = [
  {
    title: 'Sanitary Ware',
    desc: 'Essential bathroom fixtures designed for modern residential and commercial spaces.',
    products: ['Toilets', 'Wash Basins', 'Urinals', 'Bidets', 'Concealed Cistern Systems'],
    image: cld('solutions-bathroom-sanitary-premium-vanity-collection', { w: 1800 }),
  },
  {
    title: 'Bathroom Fixtures',
    desc: 'Premium fixtures designed to improve comfort, usability, and bathroom aesthetics.',
    products: ['Faucets', 'Mixers', 'Shower Systems', 'Bathtubs', 'Bathroom Accessories'],
    image: cld('solutions-bathroom-sanitary-freestanding-bathtub-series', { w: 1800 }),
  },
  {
    title: 'Installation Solutions',
    desc: 'Reliable components that support long-lasting bathroom performance.',
    products: ['Pipes', 'Fittings', 'Valves', 'Drainage Systems', 'Installation Accessories'],
    image: cld('solutions-bathroom-sanitary-rainfall-shower-systems', { w: 1800 }),
  },
];

const sanitaryCollection = [
  {
    title: 'Wall Hung Toilets',
    desc: 'Modern space-saving solutions with concealed systems that create a clean and minimalist bathroom appearance.',
    applications: ['Apartments', 'Luxury homes', 'Hotels'],
    image: cld('solutions-bathroom-sanitary-featured', { w: 1600 }),
  },
  {
    title: 'Close Coupled Toilets',
    desc: 'A practical and reliable toilet design combining the cistern and bowl into one complete unit.',
    applications: ['Residential projects', 'Commercial buildings'],
    image: cld('solutions-bathroom-sanitary-premium-vanity-collection', { w: 1600 }),
  },
  {
    title: 'One Piece Toilets',
    desc: 'Premium seamless designs offering easy cleaning, durability, and contemporary aesthetics.',
    applications: ['Luxury residences', 'Hospitality projects'],
    image: cld('solutions-bathroom-sanitary-rainfall-shower-systems', { w: 1600 }),
  },
  {
    title: 'Smart Toilets',
    desc: 'Advanced bathroom technology providing improved hygiene, comfort, and modern user experiences.',
    applications: ['Luxury developments', 'Premium villas'],
    image: cld('solutions-bathroom-sanitary-freestanding-bathtub-series', { w: 1600 }),
  },
];

const fixturesShowcase = [
  {
    title: 'Faucets & Mixers',
    desc: 'Modern water control solutions available in different styles and finishes.',
    image: cld('solutions-bathroom-sanitary-featured', { w: 1600 }),
  },
  {
    title: 'Shower Systems',
    desc: 'Complete shower solutions including rain showers, hand showers, and modern bathroom systems.',
    image: cld('solutions-bathroom-sanitary-rainfall-shower-systems', { w: 1600 }),
  },
  {
    title: 'Bathtubs',
    desc: 'Premium bathing solutions designed for comfort and luxury spaces.',
    image: cld('solutions-bathroom-sanitary-freestanding-bathtub-series', { w: 1600 }),
  },
  {
    title: 'Bathroom Accessories',
    desc: 'Finishing details including mirrors, towel holders, shelves, and complementary accessories.',
    image: cld('solutions-bathroom-sanitary-premium-vanity-collection', { w: 1600 }),
  },
];

const buildingTypes = [
  {
    title: 'Residential',
    desc: ['Homes', 'Villas', 'Apartments'],
    image: cld('solutions-bathroom-sanitary-premium-vanity-collection', { w: 1400 }),
  },
  {
    title: 'Hospitality',
    desc: ['Hotels', 'Resorts', 'Guest facilities'],
    image: cld('solutions-bathroom-sanitary-featured', { w: 1400 }),
  },
  {
    title: 'Commercial',
    desc: ['Offices', 'Retail spaces', 'Public buildings'],
    image: cld('solutions-bathroom-sanitary-rainfall-shower-systems', { w: 1400 }),
  },
  {
    title: 'Healthcare',
    desc: ['Hospitals', 'Clinics', 'Specialized facilities'],
    image: cld('solutions-bathroom-sanitary-freestanding-bathtub-series', { w: 1400 }),
  },
];

const selectionGuide = [
  {
    title: 'Design & Style',
    desc: 'Choose products that match your architectural concept and interior design direction.',
  },
  {
    title: 'Durability',
    desc: 'Select reliable materials designed for long-term daily use.',
  },
  {
    title: 'Water Efficiency',
    desc: 'Modern sanitary products help reduce water consumption while maintaining performance.',
  },
  {
    title: 'Maintenance',
    desc: 'Choose solutions that are easy to clean, maintain, and replace when needed.',
  },
];

const gallery = [
  {
    name: 'Wall Hung Toilet',
    caption: 'Luxury Residential Bathroom',
    image: cld('solutions-bathroom-sanitary-premium-vanity-collection', { w: 1200 }),
  },
  {
    name: 'Designer Faucet Collection',
    caption: 'Modern Hospitality Project',
    image: cld('solutions-bathroom-sanitary-featured', { w: 1200 }),
  },
  {
    name: 'Rain Shower System',
    caption: 'Premium Villa',
    image: cld('solutions-bathroom-sanitary-rainfall-shower-systems', { w: 1200 }),
  },
  {
    name: 'Bathroom Interior Solution',
    caption: 'Commercial Development',
    image: cld('solutions-bathroom-sanitary-freestanding-bathtub-series', { w: 1200 }),
  },
];

const relatedSolutions = [
  { label: 'Interior Design', href: '/services/interior-design' },
  { label: 'Architecture Drawings', href: '/services/architecture-drawings' },
  { label: 'Plumbing Systems', href: '/solutions/plumbing' },
  { label: 'Property Refurbishment', href: '/services/property-refurbishment' },
  { label: 'General Contracting', href: '/services/general-contracting' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div>
      <div className="inline-flex items-center gap-3">
        <span className="h-[1px] w-6 bg-[#10367D]" />
        <SectionLabel>{eyebrow}</SectionLabel>
      </div>
      <h2 className="mt-6 max-w-[820px] text-[32px] font-[700] leading-[1.1] tracking-tight text-[#1F2937] lg:text-[46px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[760px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProductRow({ title, desc, products, image }: { title: string; desc: string; products: string[]; image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="grid overflow-hidden rounded-[30px] border border-[#E6E6E6] bg-[#F8F8F8] lg:grid-cols-[1.02fr_0.98fr]"
    >
      <div className="p-8 lg:p-10">
        <h3 className="text-[28px] font-[700] leading-[1.1] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {title}
        </h3>
        <p className="mt-4 max-w-[560px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/65" style={{ fontFamily: 'Inter, sans-serif' }}>
          {desc}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {products.map((product) => (
            <span key={product} className="rounded-full border border-[#E6E6E6] bg-white px-4 py-2 text-[12px] font-[500] text-[#1F2937]/75">
              {product}
            </span>
          ))}
        </div>
      </div>
      <div className="relative min-h-[320px] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

export default function BathroomSanitarySolutionsPageClient() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-[#1F2937]" style={{ marginTop: '88px' }}>
        <section className="relative flex items-center overflow-hidden bg-[#0D1B2A] text-white" style={{ minHeight: 'calc(86vh - 0px)' }}>
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.28 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              src={cld('heroes-solutions-bathroom-sanitary', { w: 2400 })}
              alt="Bathroom and sanitary solutions"
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 z-20 border-b border-white/8"
          >
            <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-8 py-3.5 lg:px-16">
              <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-[400] text-white/35 transition-colors duration-200 hover:text-white/65" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Home className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>Home</span>
              </Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0 text-white/20" strokeWidth={1.5} />
              <Link href="/solutions" className="text-[11px] font-[400] text-white/35 transition-colors duration-200 hover:text-white/65" style={{ fontFamily: 'Inter, sans-serif' }}>
                Materials &amp; Solutions
              </Link>
              <ChevronRight className="h-3 w-3 flex-shrink-0 text-white/20" strokeWidth={1.5} />
              <span className="text-[11px] font-[500] text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Bathroom &amp; Sanitary
              </span>
            </div>
          </motion.div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-8 pb-20 pt-28 text-center lg:px-16 lg:pb-28 lg:pt-36">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Materials &amp; Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 max-w-[920px] text-[38px] font-[800] leading-[1.05] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[72px]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Bathroom &amp; Sanitary Solutions for Modern Buildings
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-[760px] text-[16px] font-[300] leading-[1.9] text-white/72"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Global Engineering Agency supplies premium bathroom fixtures, sanitary ware, and complete bathroom solutions designed for residential, commercial, hospitality, and institutional projects.
              <span className="mt-3 block">
                Our solutions combine modern design, durability, functionality, and professional project support.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 flex flex-wrap items-center justify-center gap-4"
            >
              <Link href="#quote" className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
                <span>Request Material Quote</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link href="#products" className="inline-flex items-center gap-3 rounded-[999px] border border-white/20 bg-white/5 px-7 py-3.5 text-[13.5px] font-[500] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white hover:bg-white/10">
                <span>Explore Products</span>
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[#E6E6E6] bg-[#F8F8F8]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-18 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:px-16 lg:py-24">
            <div>
              <SectionHeading
                eyebrow="Introduction"
                title="Complete Bathroom Solutions For Every Project"
                description="Bathroom systems are an essential part of every building, combining comfort, hygiene, design, and functionality. GEA provides carefully selected bathroom and sanitary solutions suitable for residential developments, luxury villas, apartments, hotels, offices, commercial buildings, and public facilities."
              />
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[20px] border border-[#E6E6E6] bg-white p-5">
                    <div className="text-[26px] font-[700] leading-none text-[#10367D]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#1F2937]/45" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 border-l border-[#E6E6E6] lg:pl-10">
              {['Residential developments', 'Luxury villas', 'Apartments', 'Hotels', 'Offices', 'Commercial buildings', 'Public facilities'].map((item, index) => (
                <div key={item} className="border-b border-[#E6E6E6] pb-4 last:border-b-0 last:pb-0">
                  <p className="text-[11px] font-[600] uppercase tracking-[0.18em] text-[#10367D]">{String(index + 1).padStart(2, '0')}</p>
                  <p className="mt-2 text-[15px] font-[600] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading eyebrow="Product Categories" title="Main Product Categories" description="Each category is presented with a large image, a short explanation, and a clear product list." />

            <div className="mt-14 grid gap-8">
              {productCategories.map((category) => (
                <ProductRow key={category.title} title={category.title} desc={category.desc} products={category.products} image={category.image} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading
              eyebrow="Sanitary Ware Collection"
              title="Sanitary Ware Collection"
              description="Explore different sanitary solutions designed for different architectural styles, budgets, and project requirements."
            />

            <div className="mt-14 grid gap-8">
              {sanitaryCollection.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="grid overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white lg:grid-cols-[0.95fr_1.05fr]"
                >
                  <div className="p-8 lg:p-10">
                    <div className="text-[11px] font-[600] uppercase tracking-[0.2em] text-[#10367D]">{String(index + 1).padStart(2, '0')}</div>
                    <h3 className="mt-4 text-[28px] font-[700] leading-[1.1] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[560px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/65" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.desc}
                    </p>
                    <div className="mt-8">
                      <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/45">Applications</p>
                      <ul className="mt-4 space-y-3">
                        {item.applications.map((application) => (
                          <li key={application} className="text-[14px] font-[500] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative min-h-[320px] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/35 via-transparent to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading eyebrow="Bathroom Fixtures Showcase" title="Bathroom Fixtures &amp; Accessories" />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {fixturesShowcase.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-[#F8F8F8]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                  </div>
                  <div className="p-7 lg:p-8">
                    <h3 className="text-[24px] font-[700] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] font-[300] leading-[1.9] text-[#1F2937]/62" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading eyebrow="Solutions By Building Type" title="Solutions For Every Project" />

            <div className="mt-14 grid gap-5">
              {buildingTypes.map((type) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-5 rounded-[26px] border border-[#E6E6E6] bg-white p-6 lg:grid-cols-[200px_1fr_380px] lg:items-center lg:px-8 lg:py-7"
                >
                  <div>
                    <h3 className="text-[20px] font-[700] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {type.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-[14px] font-[300] leading-[1.8] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {type.desc.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden lg:block" />
                  <div className="relative overflow-hidden rounded-[20px]">
                    <img src={type.image} alt={type.title} className="h-[220px] w-full object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
            <div>
              <SectionHeading eyebrow="Selection Guide" title="Choosing The Right Bathroom Solution" />
              <p className="mt-6 max-w-[600px] text-[15px] font-[300] leading-[1.9] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                The best bathroom specification balances architecture, performance, durability, and long-term maintenance. Our team helps clients choose materials with the right technical and aesthetic fit.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {selectionGuide.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-[#E6E6E6] bg-[#F8F8F8] p-6">
                  <h3 className="text-[18px] font-[700] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-[300] leading-[1.8] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading eyebrow="Product Gallery" title="Premium Product Gallery" description="Large images and minimal captions to support inspiration, specification review, and project coordination." />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {gallery.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#F8F8F8]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#0D1B2A]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[17px] font-[700] text-[#1F2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[12px] font-[500] uppercase tracking-[0.14em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <SectionHeading eyebrow="Integrated Solutions" title="Complete Your Project With Integrated Solutions" />
            <div className="mt-10 flex flex-wrap gap-4">
              {relatedSolutions.map((solution) => (
                <Link
                  key={solution.label}
                  href={solution.href}
                  className="inline-flex items-center rounded-full border border-[#E6E6E6] bg-white px-5 py-3 text-[13px] font-[500] text-[#1F2937] transition-all duration-300 hover:border-[#10367D]/20 hover:text-[#10367D]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {solution.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="border-t border-[#E6E6E6] bg-[#1F2937] text-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Request Quote
                </span>
              </div>
              <h2 className="mt-6 max-w-[720px] text-[34px] font-[700] leading-[1.1] tracking-tight lg:text-[54px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Planning Your Bathroom Project?
              </h2>
              <p className="mt-6 max-w-[560px] text-[15px] font-[300] leading-[1.9] text-white/72" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our team can help you select the right products, quantities, and solutions according to your project requirements.
              </p>
            </div>

            <form onSubmit={(event) => event.preventDefault()} className="grid gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:p-8">
              {[
                { label: 'Name', type: 'text', placeholder: 'Your name' },
                { label: 'Company', type: 'text', placeholder: 'Company name' },
                { label: 'Phone', type: 'tel', placeholder: '+250 7XX XXX XXX' },
                { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Project Type', type: 'text', placeholder: 'Residential, hotel, office...' },
                { label: 'Required Materials', type: 'text', placeholder: 'Toilets, basins, showers...' },
                { label: 'Quantity', type: 'text', placeholder: 'Estimated quantity' },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-3 block text-[10px] font-[600] uppercase tracking-[0.2em] text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border-b border-white/15 bg-transparent py-3 text-[14px] font-[300] text-white outline-none placeholder:text-white/30 focus:border-[#C8A45D]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </label>
              ))}
              <label className="block">
                <span className="mb-3 block text-[10px] font-[600] uppercase tracking-[0.2em] text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Message
                </span>
                <textarea
                  rows={5}
                  placeholder="Share your project requirements, finishes, budget range, or technical notes..."
                  className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-[14px] font-[300] text-white outline-none placeholder:text-white/30 focus:border-[#C8A45D]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </label>
              <button
                type="submit"
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

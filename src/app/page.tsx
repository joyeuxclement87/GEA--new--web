'use client';

import { AnimatePresence, motion, useInView, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { cld } from '@/lib/cloudinary';

const backgroundImages = [
  'https://res.cloudinary.com/mcgv18nh/image/upload/v1783777750/can_enhance_logo_and_olace_202605090810_rrlcnv.jpg',
  cld('heroes-home-2', { w: 2000 }),
  cld('heroes-home-3', { w: 2000 }),
];

const featuredProjects = [
  {
    id: '01',
    title: 'The Horizon Commission',
    category: 'Structural Engineering & Architecture',
    location: 'Dubai, UAE',
    image: cld('projects-the-horizon-commission-cover', { w: 1600 })
  },
  {
    id: '02',
    title: 'Opus Residence',
    category: 'Interior Finishes & Supply',
    location: 'London, UK',
    image: cld('projects-opus-residence-cover', { w: 1600 })
  },
  {
    id: '03',
    title: 'Aura Technology Hub',
    category: 'Commercial Contracting',
    location: 'Berlin, Germany',
    image: cld('projects-aura-technology-hub-cover', { w: 1600 })
  }
];

const products = [
  {
    title: 'Premium Tiles & Stone',
    desc: 'Porcelain, ceramic, and natural stone from world-leading manufacturers.',
    image: cld('home-premium-tiles-stone', { w: 800 })
  },
  {
    title: 'Architectural Bathware',
    desc: 'High-performance sanitary ware and minimalist plumbing fixtures.',
    image: cld('home-architectural-bathware', { w: 800 })
  },
  {
    title: 'Specialist Hardware',
    desc: 'Precision-engineered fittings and bespoke finishing hardware.',
    image: cld('home-specialist-hardware', { w: 800 })
  }
];

const processSteps = [
  { num: '01', title: 'Discovery & Consultation', desc: 'Understanding your vision, technical requirements, and project constraints.' },
  { num: '02', title: 'Engineering & Design', desc: 'Developing precise blueprints, MEP plans, and architectural specifications.' },
  { num: '03', title: 'Procurement & Supply', desc: 'Sourcing premium materials through our established global network.' },
  { num: '04', title: 'Execution & Handover', desc: 'Rigorous construction management ensuring flawless, on-time delivery.' }
];

const testimonials = [
  {
    quote: "GEA's engineering precision and ability to source ultra-premium materials entirely transformed our commercial development. A truly integrated partner.",
    author: "Elena Rostova",
    role: "Director of Development, Horizon Group",
    avatar: cld('testimonials-elena-rostova', { w: 200 })
  },
  {
    quote: "From the initial structural blueprints to the final bathroom finishes, their attention to detail is unmatched in the industry.",
    author: "Marcus Chen",
    role: "Lead Architect, Studio Opus",
    avatar: cld('testimonials-marcus-chen', { w: 200 })
  },
  {
    quote: "They delivered our mixed-use tower on schedule and under budget — something we had not experienced with any previous contractor. Exceptional execution.",
    author: "Amara Diallo",
    role: "CEO, Meridian Properties",
    avatar: cld('testimonials-amara-diallo', { w: 200 })
  },
  {
    quote: "The procurement team sourced bespoke Italian stone finishes within two weeks. The quality and logistics coordination were world-class.",
    author: "Oliver Strauss",
    role: "Project Director, Strauss Developments",
    avatar: cld('testimonials-oliver-strauss', { w: 200 })
  },
  {
    quote: "GEA's real estate advisory helped us identify and secure three high-yield parcels in growth corridors we wouldn't have found on our own.",
    author: "Fatima Al-Rashidi",
    role: "Investment Manager, Gulf Capital Partners",
    avatar: cld('testimonials-fatima-al-rashidi', { w: 200 })
  },
  {
    quote: "Seamless communication, rigorous quality control, and a genuine commitment to sustainability. GEA is our go-to partner for every major build.",
    author: "James Okonkwo",
    role: "Managing Director, Apex Construct Ltd",
    avatar: cld('testimonials-james-okonkwo', { w: 200 })
  }
];

const insights = [
  {
    category: 'Engineering',
    date: 'Oct 12, 2024',
    title: 'The Future of Sustainable Structural Design',
    image: cld('insights-the-future-of-sustainable-structural-design', { w: 800 })
  },
  {
    category: 'Supply Chain',
    date: 'Sep 28, 2024',
    title: 'Navigating Global Material Sourcing in 2025',
    image: cld('insights-navigating-global-material-sourcing-in-2025', { w: 800 })
  },
  {
    category: 'Real Estate',
    date: 'Sep 15, 2024',
    title: 'Maximizing ROI on High-End Residential Developments',
    image: cld('insights-maximizing-roi-on-high-end-residential-developments', { w: 800 })
  }
];

function Counter({ from, to, suffix = '' }: { from: number; to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) ref.current.textContent = Math.round(value) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Testimonial Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const handleTestimonialScroll = () => {
    if (!testimonialsRef.current) return;
    const { scrollLeft, clientWidth } = testimonialsRef.current;
    // Calculate which card is most visible based on scroll position
    const newIndex = Math.round(scrollLeft / (clientWidth > 640 ? 400 : clientWidth * 0.85));
    setActiveTestimonial(newIndex);
  };

  const scrollToTestimonial = (index: number) => {
    if (!testimonialsRef.current) return;
    const cardWidth = window.innerWidth > 640 ? 424 : window.innerWidth * 0.85 + 24; // approx card + gap
    testimonialsRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveTestimonial(index);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <main id="home" className="min-h-screen bg-white text-[#1F2937] overflow-hidden">

      {/* ─── HERO SECTION ─── */}
      <section className="relative mt-[156px] flex min-h-[calc(100vh-156px)] items-center bg-[#1F2937] text-white">

        {/* Slideshow background */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={backgroundImages[currentImageIndex]}
              alt="Global Engineering Agency"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Blue/navy left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10367D]/95 via-[#1F2937]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/95 via-transparent to-transparent z-10" />
        </div>

        {/* Subtle vertical structural lines */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '120px 100%',
          }}
        />

        {/* Content + side arrows */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 py-14 md:py-16 lg:px-16">
          <div className="max-w-[780px] space-y-8 md:space-y-10">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3"
            >
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Building Excellence Since 2018
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[78px] font-[800] tracking-[-0.03em] text-white leading-[1.08]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Every Great Building <br />
              <span className="font-[300] text-white/80">Starts With The </span>
              <span className="font-[700] text-[#C8A45D]">Right Partner.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[580px] text-[15px] font-[300] leading-[1.8] text-white/70 sm:text-[16px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              At Global Engineering Agency, we transform ideas into reality through professional engineering services, quality construction, and trusted building materials.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 flex flex-wrap items-center gap-3 sm:mt-3 sm:gap-4 md:gap-5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D] sm:px-8 sm:py-4"
              >
                <span>Let's Build Together</span>
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-[999px] border border-white/20 bg-white/5 px-7 py-3.5 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-8 sm:py-4"
              >
                <span>View Our Products</span>
              </a>
            </motion.div>
          </div>

          {/* Side arrows */}
          <div className="hidden md:flex flex-col gap-4">
            <button
              onClick={prevImage}
              className="flex h-10 w-10 items-center justify-center rounded-[999px] border border-white/20 hover:border-white hover:bg-white/10 transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="flex h-10 w-10 items-center justify-center rounded-[999px] border border-white/20 hover:border-white hover:bg-white/10 transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slide dots — bottom left */}
        <div className="absolute bottom-10 left-8 lg:left-16 z-20 flex gap-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-[999px] transition-all duration-300 ${currentImageIndex === index ? 'w-6 bg-[#C8A45D]' : 'w-1.5 bg-white/40'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* ─── TRUST STATISTICS SECTION ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-white px-8 lg:px-16"
      >
        <div className="mx-auto max-w-[1200px] py-[120px]">

          <h2
            className="text-center text-3xl md:text-4xl lg:text-[42px] font-[300] tracking-tight text-[#1F2937] mb-20"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Trusted by homeowners, developers and businesses.
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start divide-y md:divide-y-0 md:divide-x divide-[#E6E6E6] border-y border-[#E6E6E6]">

            <div className="flex-1 w-full flex flex-col items-center text-center py-8 md:py-10">
              <span className="text-[64px] font-[700] text-[#10367D] leading-none mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <Counter from={0} to={120} suffix="+" />
              </span>
              <span className="text-[14px] uppercase tracking-[0.15em] text-[#6B7280]">
                Completed Projects
              </span>
            </div>

            <div className="flex-1 w-full flex flex-col items-center text-center py-8 md:py-10">
              <span className="text-[64px] font-[700] text-[#10367D] leading-none mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <Counter from={0} to={8} suffix="+" />
              </span>
              <span className="text-[14px] uppercase tracking-[0.15em] text-[#6B7280]">
                Years Experience
              </span>
            </div>

            <div className="flex-1 w-full flex flex-col items-center text-center py-8 md:py-10">
              <span className="text-[64px] font-[700] text-[#10367D] leading-none mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <Counter from={0} to={500} suffix="+" />
              </span>
              <span className="text-[14px] uppercase tracking-[0.15em] text-[#6B7280]">
                Building Products
              </span>
            </div>

            <div className="flex-1 w-full flex flex-col items-center text-center py-8 md:py-10">
              <span className="text-[64px] font-[700] text-[#10367D] leading-none mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <Counter from={0} to={98} suffix="%" />
              </span>
              <span className="text-[14px] uppercase tracking-[0.15em] text-[#6B7280]">
                Client Satisfaction
              </span>
            </div>

          </div>

          <div className="mt-20 mx-auto max-w-[650px] text-center">
            <p className="text-[16px] leading-[1.8] font-[300] text-[#1F2937]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
              We build our reputation on precision, transparency, and a relentless pursuit of quality. Every structure we engineer, build, or supply is a testament to our commitment to enduring excellence in the global real estate landscape.
            </p>
          </div>

        </div>
      </motion.section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="relative mx-auto max-w-[1440px] px-8 lg:px-16 py-20 lg:py-32 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left: Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative pb-20 pr-20"
          >
            {/* Large portrait image */}
            <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden">
              <img
                src={cld('engineers-on-site', { w: 1000 })}
                alt="GEA engineers on site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/20 to-transparent" />
            </div>

            {/* Smaller inset image */}
            <div
              className="absolute bottom-0 right-0 w-[50%] aspect-[4/3] rounded-[20px] overflow-hidden border-[6px] border-white"
              style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}
            >
              <img
                src={cld('home-premium-bathroom-products', { w: 600 })}
                alt="Premium bathroom products"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                About Global Engineering Agency
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl lg:text-[50px] font-[700] text-[#1F2937] tracking-tight leading-[1.08] mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Building Excellence<br />
              <span className="font-[300] text-[#10367D]">Since 2018.</span>
            </h2>

            {/* Body */}
            <p
              className="text-[15.5px] leading-[1.9] font-[300] text-[#1F2937]/60 mb-12"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Global Engineering Agency is a trusted engineering and construction company committed to delivering innovative, reliable, and sustainable solutions — helping individuals, businesses, and organisations bring ambitious projects to life.
            </p>

            {/* Numbered feature list — no icons, clean dividers */}
            <div className="grid grid-cols-2 gap-0 border-t border-[#E6E6E6] mb-12">
              {[
                { num: '01', title: 'Engineering', desc: 'Structural, MEP & civil design.' },
                { num: '02', title: 'Construction', desc: 'Residential & commercial builds.' },
                { num: '03', title: 'Materials Supply', desc: 'Tiles, bathware & hardware.' },
                { num: '04', title: 'Real Estate', desc: 'Development & investment advisory.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={[
                    'py-7 flex flex-col gap-2 border-b border-[#E6E6E6]',
                    idx % 2 === 0 ? 'pr-8' : 'pl-8 border-l border-[#E6E6E6]',
                  ].join(' ')}
                >
                  <span
                    className="text-[10px] font-[700] tracking-[0.2em] text-[#10367D]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.num}
                  </span>
                  <h4
                    className="text-[14px] font-[700] text-[#1F2937]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[12.5px] text-[#1F2937]/50 leading-relaxed font-[300]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Minimal text-link CTA */}
            <a
              href="#about"
              className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#10367D] group transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="h-[1px] bg-[#10367D] w-8 transition-all duration-300 group-hover:w-14" />
              Learn More About GEA
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── OUR EXPERTISE SECTION ─── */}
      <section id="expertise" className="bg-[#F9FAFB] py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[680px] mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                What We Do
              </span>
            </div>
            <h2
              className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Expertise That Builds
              <span className="font-[300]"> Confidence.</span>
            </h2>
            <p
              className="text-[15px] leading-[1.85] font-[300] text-[#1F2937]/60"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From planning and construction to supplying quality building materials, we deliver end-to-end solutions that support every stage of your project.
            </p>
          </motion.div>

          {/* 2x2 Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                num: '01',
                title: 'Engineering Services',
                desc: 'Professional engineering solutions tailored for residential, commercial, and infrastructure projects, ensuring quality, efficiency, and compliance.',
              },
              {
                num: '02',
                title: 'Construction Services',
                desc: 'We manage construction projects from foundation to completion with skilled workmanship, reliable planning, and attention to detail.',
              },
              {
                num: '03',
                title: 'Building Materials',
                desc: 'Discover premium tiles, sanitary ware, bathware, plumbing accessories, and hardware products selected for quality and durability.',
              },
              {
                num: '04',
                title: 'Real Estate',
                desc: 'Helping clients find, develop, and invest in properties with confidence through trusted real estate solutions.',
              },
            ].map((card, idx) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-[24px] p-8 lg:p-10 border border-[#E8E8E8] flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#10367D]/20"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}
              >
                <div>
                  {/* Orange accent bar */}
                  <div className="h-[3px] w-10 bg-[#C8A45D] rounded-full mb-8 transition-all duration-300 group-hover:w-16 group-hover:bg-[#10367D]" />

                  {/* Number */}
                  <span
                    className="text-[11px] font-[700] tracking-[0.2em] text-[#10367D] block mb-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {card.num}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-[20px] font-[700] text-[#1F2937] tracking-tight mb-4 leading-snug"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13.5px] leading-[1.8] font-[300] text-[#1F2937]/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Learn more link */}
                <div className="mt-8 flex items-center gap-3 text-[12px] font-[600] tracking-[0.04em] text-[#1F2937]/40 group-hover:text-[#10367D] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="h-[1px] w-5 bg-current" />
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FEATURED PROJECTS SECTION (Editorial Case Study Layout) ─── */}
      <section id="projects" className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-32"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Featured Projects
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Defining the <span className="font-[300]">skyline.</span>
              </h2>
            </div>
          </motion.div>

          {/* Project List */}
          <div className="flex flex-col gap-32 lg:gap-48">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Large Image */}
                  <div className="w-full lg:w-7/12">
                    <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#F8F8F8]">
                      <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Minimal Text Content */}
                  <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-[11px] font-[700] tracking-[0.2em] text-[#10367D]">{project.id}</span>
                      <span className="h-[1px] w-8 bg-[#E6E6E6]" />
                      <span className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/50">{project.category}</span>
                    </div>

                    <h3 className="text-3xl lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {project.title}
                    </h3>

                    <p className="text-[14px] leading-[1.8] text-[#1F2937]/50 font-[300] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Located in {project.location}. We provided comprehensive {project.category.toLowerCase()} services to deliver this landmark project, focusing on sustainability, precision, and architectural excellence.
                    </p>

                    <a
                      href="#case-study"
                      className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 w-fit"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" />
                      <span className="group-hover:text-[#10367D] transition-colors">View Case Study</span>
                      <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-24 lg:mt-32 pt-12 border-t border-[#E6E6E6] text-center">
            <a
              href="#all-projects"
              className="inline-flex items-center justify-center rounded-[999px] border border-[#E6E6E6] px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:border-[#10367D] hover:bg-[#10367D] hover:text-white"
            >
              View All Projects
            </a>
          </div>

        </div>
      </section>

      {/* ─── WHY CHOOSE US SECTION ─── */}
      <section className="bg-[#0D1B2A] text-white py-24 lg:py-40 border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Sticky Header area */}
            <div className="lg:sticky lg:top-40 h-fit">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="h-[1px] w-6 bg-[#C8A45D]" />
                  <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Why Choose GEA
                  </span>
                </div>
                <h2 className="text-4xl lg:text-[64px] font-[700] tracking-tight leading-[1.05] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  The blueprint <br />
                  <span className="font-[300] text-white/70">for certainty.</span>
                </h2>
                <p className="text-[15px] leading-[1.8] font-[300] text-white/50 max-w-[480px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  In an industry where precision is non-negotiable, we bring together elite engineering, integrated construction, and premium materials to remove risk and guarantee results.
                </p>

                {/* Editorial Image */}
                <div className="mt-16 w-full max-w-[480px] aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0D1B2A]/10 z-10 pointer-events-none" />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    src={cld('home-architectural-precision', { w: 1200 })}
                    alt="Architectural Precision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right: List of Advantages */}
            <div className="flex flex-col">
              {[
                { num: '01', title: 'Engineering Precision', desc: 'We merge technical rigor with innovative problem-solving to ensure every structure is mathematically sound and built to last.' },
                { num: '02', title: 'Single Point of Contact', desc: 'From initial design through to final material supply, we manage the entire project lifecycle, eliminating friction and delays.' },
                { num: '03', title: 'Premium Supply Chain', desc: 'Direct access to globally recognized building products and raw materials, ensuring uncompromised quality on every finish.' },
                { num: '04', title: 'Unwavering Reliability', desc: 'A proven track record of delivering complex commercial and residential projects on time and within budget since 2018.' },
              ].map((adv, idx) => (
                <motion.div
                  key={adv.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group py-10 lg:py-12 border-t border-white/10 first:border-t-0 lg:first:pt-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 mb-4">
                    <span className="text-[12px] font-[600] tracking-[0.2em] text-[#C8A45D] shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {adv.num}
                    </span>
                    <h3 className="text-2xl lg:text-[28px] font-[500] text-white tracking-tight group-hover:text-[#C8A45D] transition-colors duration-300" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {adv.title}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                    <div className="hidden sm:block w-[18px] shrink-0" /> {/* Spacer to align with text */}
                    <p className="text-[14px] leading-[1.8] font-[300] text-white/50 max-w-[480px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {adv.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── PRODUCTS SHOWCASE ─── */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-24">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Material Supply
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Uncompromised <span className="font-[300]">finishes.</span>
              </h2>
            </div>
            <a
              href="#products"
              className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" />
              <span className="group-hover:text-[#10367D] transition-colors">View Catalog</span>
              <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F8F8F8] mb-8">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-[600] text-[#1F2937] tracking-tight mb-3 group-hover:text-[#10367D] transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {product.title}
                </h3>
                <p className="text-[14px] leading-[1.8] font-[300] text-[#1F2937]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {product.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REAL ESTATE SECTION ─── */}
      <section className="bg-[#F8F8F8] py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Real Estate Division
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Strategic <br />
                <span className="font-[300]">acquisitions & development.</span>
              </h2>
              <p className="text-[15px] leading-[1.8] font-[300] text-[#1F2937]/60 max-w-[480px] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                Beyond engineering and construction, GEA provides high-level advisory for real estate development and investment. We leverage our deep technical expertise to accurately assess feasibility, manage risk, and maximize ROI on premium land and property assets.
              </p>
              <a
                href="#real-estate"
                className="inline-flex items-center justify-center rounded-[999px] border border-[#E6E6E6] bg-white px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:border-[#10367D] hover:text-[#10367D]"
              >
                Explore Real Estate
              </a>
            </div>

            <div className="order-1 lg:order-2 w-full aspect-square lg:aspect-[4/5] overflow-hidden relative">
              <img
                src={cld('home-luxury-real-estate', { w: 1200 })}
                alt="Luxury Real Estate"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROJECT PROCESS ─── */}
      <section className="bg-white py-24 lg:py-40 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[600px] mx-auto mb-20 lg:mb-32">
            <h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              How we <span className="font-[300]">work.</span>
            </h2>
            <p className="text-[15px] leading-[1.8] font-[300] text-[#1F2937]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
              A methodical, transparent approach ensuring complete alignment from the first sketch to the final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Connector line for desktop */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[18px] left-[50px] right-[-30px] h-[1px] bg-[#E6E6E6]" />
                )}
                <div className="text-[32px] font-[300] text-[#C8A45D] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {step.num}
                </div>
                <h3 className="text-[20px] font-[600] text-[#1F2937] tracking-tight mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.8] font-[300] text-[#1F2937]/50 pr-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#0D1B2A] text-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            {/* Header text */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Client Stories
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-[700] text-white tracking-tight leading-[1.1] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Trusted by <span className="font-[300] text-white/60">leaders.</span>
              </h2>
              <p className="text-[13px] font-[300] text-white/40 max-w-[280px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Over 500 clients across 4 continents trust GEA to deliver on time, on brief, and beyond expectation.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToTestimonial(Math.max(0, activeTestimonial - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#C8A45D] hover:text-[#C8A45D] hover:bg-white/[0.04]"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scrollToTestimonial(Math.min(testimonials.length - 1, activeTestimonial + 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#C8A45D] hover:text-[#C8A45D] hover:bg-white/[0.04]"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Cards container */}
          <div
            ref={testimonialsRef}
            onScroll={handleTestimonialScroll}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="w-[85vw] sm:w-[400px] lg:w-[420px] flex-shrink-0 snap-start flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 hover:border-[#C8A45D]/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Top: stars + quote mark */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-[#C8A45D]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[42px] font-[300] text-[#C8A45D]/40 leading-none" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</span>
                  </div>
                  <p className="text-[15px] leading-[1.75] font-[300] text-white/75 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {test.quote}
                  </p>
                </div>
                {/* Bottom: avatar + info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#C8A45D]/20"
                  />
                  <div>
                    <div className="text-[13px] font-[600] text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{test.author}</div>
                    <div className="text-[12px] font-[300] text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>{test.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToTestimonial(idx)}
                className={`h-[3px] rounded-full transition-all duration-300 ${activeTestimonial === idx
                    ? 'w-8 bg-[#C8A45D]'
                    : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS (BLOG/NEWS) ─── */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-24">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  News & Insights
                </span>
              </div>
              <h2 className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Industry <span className="font-[300]">perspectives.</span>
              </h2>
            </div>
            <a
              href="#journal"
              className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" />
              <span className="group-hover:text-[#10367D] transition-colors">View Journal</span>
              <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]" strokeWidth={1.5} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {insights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F8F8F8] mb-8">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4 text-[11px] font-[600] uppercase tracking-[0.15em] text-[#10367D]">
                  <span>{item.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#E6E6E6]" />
                  <span className="text-[#1F2937]/40">{item.date}</span>
                </div>
                <h3 className="text-xl font-[600] text-[#1F2937] tracking-tight leading-[1.4] mb-6 group-hover:text-[#10367D] transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section id="contact" className="relative overflow-hidden bg-[#0D1B2A] py-32 lg:py-44">
        {/* Architectural blueprint vertical lines */}
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-8 lg:px-16 opacity-[0.04]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-[1px] bg-white h-full" />
          ))}
        </div>
        {/* Gold top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16">
          {/* Centred header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C8A45D]" />
              <span className="text-[10px] font-[600] uppercase tracking-[0.3em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Partner with GEA
              </span>
              <span className="h-[1px] w-8 bg-[#C8A45D]" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[68px] font-[700] tracking-tight leading-[1.03] text-white mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to build something<br />
              <span className="text-[#C8A45D]">extraordinary?</span>
            </h2>
            <p className="mx-auto max-w-[580px] text-[16px] leading-[1.8] font-[300] text-white/55" style={{ fontFamily: 'Inter, sans-serif' }}>
              From engineering and construction to premium materials and real estate — our expert teams are ready to support your project at every stage.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:fulluchris@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              Let's Discuss Your Project
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0A1118] text-white border-t border-white/[0.06]">
        {/* Newsletter strip */}
        <div className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-[700] text-white mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Stay in the loop
              </h3>
              <p className="text-[14px] font-[300] text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                Project updates, industry insights, and company news — delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full max-w-[460px] rounded-[999px] bg-white/5 border border-white/10 overflow-hidden focus-within:border-[#C8A45D]/40 transition-colors">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-6 py-4 text-[13px] font-[300] text-white placeholder-white/30 outline-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button type="submit" className="bg-[#C8A45D] px-8 py-4 text-[13px] font-[600] text-[#1F2937] transition-all duration-300 hover:bg-white shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

            {/* Brand */}
            <div>
              <h3 className="text-[20px] font-[800] tracking-tight text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                GEA
              </h3>
              <p className="text-[13px] leading-[1.85] font-[300] text-white/45 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Global Engineering Agency delivers elite engineering, construction, and premium building materials for landmark projects worldwide.
              </p>
              {/* Social icons */}
              <div className="flex gap-2.5">
                {[
                  { icon: <Linkedin className="h-[15px] w-[15px]" strokeWidth={1.5} /> },
                  { icon: <Instagram className="h-[15px] w-[15px]" strokeWidth={1.5} /> },
                  { icon: <Facebook className="h-[15px] w-[15px]" strokeWidth={1.5} /> },
                  { icon: <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                  { icon: <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.43v-7.15a8.16 8.16 0 005.58 2.09V11.2a4.85 4.85 0 01-3.59-1.57 4.83 4.83 0 01-1.24-2.94h3.45V6.69z" /></svg> },
                ].map((s, i) => (
                  <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] text-white/40 hover:border-[#C8A45D] hover:text-[#C8A45D] transition-all duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-7">Services</h4>
              <ul className="space-y-3.5">
                {['Engineering', 'Construction', 'Architecture', 'Interior Design', 'Project Management', 'Consultation'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials & Real Estate */}
            <div>
              <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-7">Materials</h4>
              <ul className="space-y-3.5 mb-9">
                {['Tiles & Flooring', 'Bathware', 'Plumbing', 'Hardware', 'Paint & Finishes'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{link}</a>
                  </li>
                ))}
              </ul>
              <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-5">Real Estate</h4>
              <ul className="space-y-3.5">
                {['Buy Property', 'Rent Property', 'Investment'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + Contact */}
            <div>
              <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-7">Company</h4>
              <ul className="space-y-3.5 mb-9">
                {['About', 'Projects', 'News', 'Careers', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{link}</a>
                  </li>
                ))}
              </ul>
              <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-5">Contact</h4>
              <ul className="space-y-3.5 text-[13px] font-[300] text-white/55" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>KG 33 Avenue Road, Gakiriro Road<br />Umukindo House, 2nd Floor Front Wing<br /><span className="text-[12px] text-white/30">Kigali Gasabo, Rwanda</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#C8A45D] shrink-0" strokeWidth={1.5} />
                  <a href="mailto:fulluchris@gmail.com" className="hover:text-white transition-colors">fulluchris@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#C8A45D] shrink-0" strokeWidth={1.5} />
                  <a href="tel:+250788632620" className="hover:text-white transition-colors">+250 788 632 620</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8 border-t border-white/[0.06] text-[12px] font-[300] text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>© {new Date().getFullYear()} Global Engineering Agency. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/70 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}


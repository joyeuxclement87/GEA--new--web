"use client";

import { motion, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";

// ─── Shared animation variant ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// ─── Data ────────────────────────────────────────────────────────────────────

const disciplines = [
  { num: "01", title: "Engineering", desc: "Structural, MEP & civil design." },
  {
    num: "02",
    title: "Construction",
    desc: "Residential & commercial builds.",
  },
  { num: "03", title: "Materials Supply", desc: "Tiles, bathware & hardware." },
  {
    num: "04",
    title: "Real Estate",
    desc: "Development & investment advisory.",
  },
];

const timeline = [
  {
    num: "01",
    year: "2018",
    desc: "GEA was established with a vision of delivering reliable engineering and construction solutions in Rwanda.",
  },
  {
    num: "02",
    year: "2020",
    desc: "Expanded operations into supplying premium building materials, bridging the gap between supply and construction.",
  },
  {
    num: "03",
    year: "2022",
    desc: "Added professional real estate services, creating a truly integrated property solutions firm.",
  },
  {
    num: "04",
    year: "Today",
    desc: "Serving clients across Rwanda with an end-to-end suite of engineering, construction, and property expertise.",
  },
];

const values = [
  {
    num: "01",
    title: "Integrity",
    desc: "Doing what is right, even when no one is watching.",
  },
  {
    num: "02",
    title: "Excellence",
    desc: "Setting the standard in every project we deliver.",
  },
  {
    num: "03",
    title: "Innovation",
    desc: "Forward-thinking solutions to complex challenges.",
  },
  {
    num: "04",
    title: "Safety",
    desc: "Uncompromising standards on every site, every time.",
  },
  {
    num: "05",
    title: "Teamwork",
    desc: "Collaboration across every discipline and level.",
  },
  {
    num: "06",
    title: "Customer First",
    desc: "Your vision drives every decision we make.",
  },
];

const team = [
  {
    name: "Michael Okenwa",
    role: "Managing Director",
    bio: "Over 20 years leading complex engineering and architectural projects across Africa and the Middle East.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarah Al-Fayed",
    role: "Head of Architecture",
    bio: "Award-winning architect specialising in sustainable urban development and premium high-rise structures.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "David Chen",
    role: "Chief of Procurement",
    bio: "Ensures GEA always sources the highest-quality building materials from trusted global suppliers.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
];

const industries = [
  {
    num: "01",
    label: "Residential",
    desc: "Premium homes, estates, and housing developments.",
  },
  {
    num: "02",
    label: "Commercial",
    desc: "Office spaces, retail centres, and mixed-use buildings.",
  },
  {
    num: "03",
    label: "Industrial",
    desc: "Warehouses, factories, and logistics facilities.",
  },
  {
    num: "04",
    label: "Hospitality",
    desc: "Hotels, resorts, and high-end leisure spaces.",
  },
  {
    num: "05",
    label: "Government",
    desc: "Public sector buildings and civic infrastructure.",
  },
  {
    num: "06",
    label: "Infrastructure",
    desc: "Roads, bridges, and large-scale civil works.",
  },
];

const whyGea = [
  {
    num: "01",
    title: "7+ Years of Delivery",
    desc: "Since 2018 — a proven track record of complex projects delivered on time and on budget.",
  },
  {
    num: "02",
    title: "Certified Professionals",
    desc: "A qualified, experienced team held to rigorous engineering and safety standards.",
  },
  {
    num: "03",
    title: "Fully Integrated",
    desc: "Engineering, supply, and property advisory under a single accountable partner.",
  },
  {
    num: "04",
    title: "Reliable Delivery",
    desc: "Disciplined project management that keeps every build on schedule.",
  },
  {
    num: "05",
    title: "Uncompromising Quality",
    desc: "Every material, finish, and structure held to a premium standard.",
  },
  {
    num: "06",
    title: "Long-Term Partnerships",
    desc: "Clients return to GEA project after project — that is our real track record.",
  },
];

const partners = [
  "Horizon Group",
  "Studio Opus",
  "Meridian Properties",
  "Apex Construct",
  "Gulf Capital Partners",
  "Rwanda Development Board",
];

// ─── Animated counter (mirrors homepage stats) ───────────────────────────────

function Counter({
  from,
  to,
  suffix = "",
}: {
  from: number;
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) ref.current.textContent = Math.round(value) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, suffix]);

  return (
    <span ref={ref}>
      {from}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 7, suffix: "+", label: "Years of Excellence" },
  { to: 120, suffix: "+", label: "Completed Projects" },
  { to: 500, suffix: "+", label: "Building Products" },
  { to: 98, suffix: "%", label: "Client Satisfaction" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main
      id="about"
      className="min-h-screen bg-white text-[#1F2937] overflow-x-hidden"
    >
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] min-h-[560px] mt-[152px] flex items-center bg-[#1F2937] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
            alt="Global Engineering Agency"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10367D]/95 via-[#1F2937]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/95 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-8 lg:px-16 z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span
              className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              About Global Engineering Agency
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-[40px] sm:text-[54px] lg:text-[72px] font-[800] tracking-[-0.03em] text-white leading-[1.08] max-w-[820px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Building Rwanda&apos;s <br />
            <span className="font-[300] text-white/80">Future </span>
            <span className="font-[700] text-[#C8A45D]">Since 2018.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-6 text-[15px] sm:text-[16px] font-[300] leading-[1.8] text-white/70 max-w-[580px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Global Engineering Agency (GEA) is committed to delivering reliable
            engineering, construction, real estate, and building material
            solutions with professionalism, innovation, and integrity.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="mailto:fulluchris@gmail.com"
              className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-[999px] border border-white/20 bg-white/5 px-8 py-4 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              <span>Our Story</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST STATISTICS ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-white px-8 lg:px-16"
      >
        <div className="mx-auto max-w-[1200px] py-[100px] lg:py-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start divide-y md:divide-y-0 md:divide-x divide-[#E6E6E6] border-y border-[#E6E6E6]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 w-full flex flex-col items-center text-center py-8 md:py-10"
              >
                <span
                  className="text-[64px] font-[700] text-[#10367D] leading-none mb-3"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <Counter from={0} to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-[14px] uppercase tracking-[0.15em] text-[#6B7280]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── WHO WE ARE ─── */}
      <section className="relative bg-white py-24 lg:py-36 overflow-hidden">
        {/* Editorial statement intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[880px] px-8 lg:px-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-8 justify-center">
            <span className="h-[1px] w-6 bg-[#10367D]" />
            <span
              className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Who We Are
            </span>
            <span className="h-[1px] w-6 bg-[#10367D]" />
          </div>

          <h2
            className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.15] mb-8"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            We are more than a construction company —
            <span className="font-[300] text-[#10367D]">
              {" "}
              we are a partner in building Rwanda&apos;s future.
            </span>
          </h2>

          <p
            className="text-[16px] leading-[1.9] font-[300] text-[#1F2937]/60 max-w-[680px] mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Global Engineering Agency is a trusted engineering and construction
            company committed to delivering innovative, reliable, and
            sustainable solutions — helping individuals, businesses, and
            organisations bring ambitious projects to life.
          </p>
        </motion.div>

        {/* Full-bleed panoramic image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[1600px] px-8 lg:px-16 mt-16 lg:mt-24"
        >
          <div className="relative w-full aspect-[16/7] rounded-[28px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
              alt="GEA engineers on site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/70 via-[#1F2937]/10 to-transparent" />
            <div className="absolute bottom-8 left-8 lg:bottom-10 lg:left-12 flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span
                className="text-[12px] font-[600] uppercase tracking-[0.15em] text-white/90"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                On-site in Kigali, Rwanda
              </span>
            </div>
          </div>
        </motion.div>

        {/* Disciplines — hairline-divided grid */}
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E6E6E6] rounded-[20px] overflow-hidden">
            {disciplines.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white p-8 lg:p-10 flex flex-col gap-3 hover:bg-[#F8F8F8] transition-colors duration-300"
              >
                <span
                  className="text-[13px] font-[700] tracking-[0.15em] text-[#C8A45D]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.num}
                </span>
                <h4
                  className="text-[16px] font-[700] text-[#1F2937]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[13px] text-[#1F2937]/50 leading-relaxed font-[300]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#values"
              className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#10367D] group transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="h-[1px] bg-[#10367D] w-8 transition-all duration-300 group-hover:w-14" />
              What We Stand For
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY / TIMELINE ─── */}
      <section id="story" className="bg-[#F8F8F8] py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[600px] mx-auto mb-20 lg:mb-32">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span
                className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Story
              </span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2
              className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Our <span className="font-[300]">journey.</span>
            </h2>
            <p
              className="text-[15px] leading-[1.8] font-[300] text-[#1F2937]/50"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              From a single vision in 2018 to an integrated engineering,
              construction, and property group.
            </p>
          </div>

          <div className="relative max-w-[760px] mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#E6E6E6]" />

            <div className="flex flex-col gap-14 lg:gap-16">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex gap-8"
                >
                  {/* Node */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border-2 border-[#C8A45D]">
                    <span
                      className="text-[12px] font-[700] text-[#10367D]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1.5">
                    <h3
                      className="text-[26px] lg:text-[30px] font-[700] text-[#1F2937] tracking-tight mb-3"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {item.year}
                    </h3>
                    <p
                      className="text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60 max-w-[560px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="relative bg-[#0D1B2A] text-white py-24 lg:py-40 border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-[640px] mx-auto mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-8 justify-center">
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span
                className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Direction
              </span>
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
            </div>
            <h2
              className="text-4xl lg:text-[56px] font-[700] tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Purpose-built{" "}
              <span className="font-[300] text-white/70">for progress.</span>
            </h2>
            <p
              className="text-[15px] leading-[1.8] font-[300] text-white/50"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Everything we build is guided by a clear mission and a long-term
              vision for what Rwanda&apos;s built environment can become.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: "Our Mission",
                headline: "Deliver with integrity, every time.",
                desc: "To deliver reliable engineering, construction, and building material solutions with professionalism, innovation, and integrity — helping our clients bring ambitious projects to life, on time and on budget.",
              },
              {
                num: "02",
                title: "Our Vision",
                headline: "Rwanda\u2019s most trusted building partner.",
                desc: "To be Rwanda\u2019s most trusted, integrated engineering and construction partner — recognised across the region for quality, reliability, and long-term value creation.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-10 lg:p-14 transition-all duration-300 hover:bg-white/[0.05] hover:border-[#C8A45D]/30"
              >
                {/* Ghost numeral */}
                <span
                  className="pointer-events-none absolute -top-8 -right-4 text-[180px] font-[800] text-white/[0.04] leading-none select-none"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {item.num}
                </span>

                <span
                  className="relative block text-[11px] font-[700] tracking-[0.25em] text-[#C8A45D] uppercase mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.num} — {item.title}
                </span>
                <h3
                  className="relative text-[26px] lg:text-[32px] font-[600] text-white tracking-tight leading-[1.25] mb-6 max-w-[380px]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {item.headline}
                </h3>
                <p
                  className="relative text-[14.5px] leading-[1.85] font-[300] text-white/50 max-w-[420px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.desc}
                </p>
                <div className="relative mt-10 h-[2px] w-14 bg-[#C8A45D] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ─── */}
      <section id="values" className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[680px] mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span
                className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                What We Stand For
              </span>
            </div>
            <h2
              className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Our Values
            </h2>
            <p
              className="text-[15px] leading-[1.85] font-[300] text-[#1F2937]/60"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The principles that guide every decision, every site, and every
              client relationship.
            </p>
          </motion.div>

          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 border-t border-[#E6E6E6]">
            {values.map((v, idx) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 2) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-baseline gap-6 lg:gap-8 py-8 border-b border-[#E6E6E6]"
              >
                <span
                  className="w-[52px] shrink-0 text-[38px] lg:text-[44px] font-[300] text-[#C8A45D] leading-none transition-colors duration-300 group-hover:text-[#10367D]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {v.num}
                </span>
                <div>
                  <h3
                    className="text-[19px] font-[700] text-[#1F2937] tracking-tight mb-2 group-hover:text-[#10367D] transition-colors duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[13.5px] leading-[1.75] font-[300] text-[#1F2937]/55 max-w-[360px]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="bg-[#F8F8F8] py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Leadership
                </span>
              </div>
              <h2
                className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                The people <span className="font-[300]">behind GEA.</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white rounded-[24px] overflow-hidden border border-[#E6E6E6] transition-all duration-300 hover:-translate-y-[4px]"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start gap-3 p-5">
                    <a
                      href="#"
                      className="rounded-full border border-white/40 px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#1F2937]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="mailto:fulluchris@gmail.com"
                      className="rounded-full border border-white/40 px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#1F2937]"
                    >
                      Email
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <span
                    className="text-[10px] font-[700] tracking-[0.2em] text-[#10367D]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    0{idx + 1}
                  </span>
                  <h3
                    className="text-[22px] font-[800] text-[#1F2937] mt-3 mb-1"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[12px] font-[700] uppercase tracking-[0.12em] text-[#C8A45D] mb-4">
                    {member.role}
                  </p>
                  <p
                    className="text-[14px] leading-[1.75] text-[#1F2937]/60 font-[300]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
      <section className="bg-white py-24 lg:py-40 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[600px] mx-auto mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span
                className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Sectors
              </span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2
              className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Industries <span className="font-[300]">we serve.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#E6E6E6]">
            {industries.map((ind) => (
              <motion.div
                key={ind.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 lg:p-10 border-r border-b border-[#E6E6E6] transition-colors duration-300 hover:bg-[#F8F8F8]"
              >
                <span
                  className="text-[11px] font-[700] tracking-[0.2em] text-[#10367D] block mb-5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {ind.num}
                </span>
                <h3
                  className="text-[18px] font-[700] text-[#1F2937] mb-2 group-hover:text-[#10367D] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {ind.label}
                </h3>
                <p
                  className="text-[13.5px] text-[#1F2937]/50 leading-relaxed font-[300]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE GEA ─── */}
      <section className="bg-[#0D1B2A] text-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Why Choose GEA
                </span>
              </div>
              <h2
                className="text-4xl lg:text-[56px] font-[700] tracking-tight leading-[1.1]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                The blueprint{" "}
                <span className="font-[300] text-white/70">for certainty.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
            {whyGea.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: (idx % 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group py-10 border-t border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 mb-4">
                  <span
                    className="text-[12px] font-[600] tracking-[0.2em] text-[#C8A45D] shrink-0"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="text-xl lg:text-[24px] font-[500] text-white tracking-tight group-hover:text-[#C8A45D] transition-colors duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="hidden sm:block w-[18px] shrink-0" />
                  <p
                    className="text-[14px] leading-[1.8] font-[300] text-white/50 max-w-[440px]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS & CLIENTS ─── */}
      <section className="py-20 lg:py-24 border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
          <p className="text-[12px] font-[700] uppercase tracking-[0.25em] text-[#1F2937]/40 mb-14">
            Trusted By Leading Organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
            {partners.map((name) => (
              <div
                key={name}
                className="text-[20px] font-[800] text-[#1F2937] opacity-25 hover:opacity-80 transition-opacity duration-300 cursor-default"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative overflow-hidden bg-[#0D1B2A] py-32 lg:py-44">
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-8 lg:px-16 opacity-[0.04]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-[1px] bg-white h-full" />
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C8A45D]" />
              <span
                className="text-[10px] font-[600] uppercase tracking-[0.3em] text-[#C8A45D]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Partner with GEA
              </span>
              <span className="h-[1px] w-8 bg-[#C8A45D]" />
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-[68px] font-[700] tracking-tight leading-[1.03] text-white mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Let&apos;s build something
              <br />
              <span className="text-[#C8A45D]">remarkable together.</span>
            </h2>
            <p
              className="mx-auto max-w-[580px] text-[16px] leading-[1.8] font-[300] text-white/55"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Whether you&apos;re planning your next project or looking for a
              trusted engineering partner, Global Engineering Agency is ready to
              help.
            </p>
          </motion.div>

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
              Contact Us
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="tel:+250788632620"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white"
            >
              Request Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

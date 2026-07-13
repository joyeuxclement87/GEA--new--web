"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { cld } from "@/lib/cloudinary";

// ─── Shared animation variant ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// ─── Data ───────────────────────────────────────────────────────────

// Services with a dedicated detail page live at /services/[slug]
const servicesWithDetailPage = new Set(["architecture-drawings", "interior-design", "exterior-design", "landscaping", "general-contracting", "project-management", "boq-cost-estimation", "project-consultation", "mep", "fire-protection", "hvac", "solar-energy", "real-estate-services", "property-refurbishment", "property-demolition"]);

// Slugs whose detail page route differs from the listing slug.
const detailPageSlugOverrides: Record<string, string> = {
  mep: "mep-engineering",
  "fire-protection": "fire-protection-systems",
  hvac: "hvac-systems",
  "solar-energy": "solar-energy-solutions",
};

const services = [
  {
    num: "01",
    slug: "architecture-drawings",
    category: "Design & Documentation",
    title: "Architecture Drawings",
    desc: "Precise architectural drawings that translate ambition into buildable form — from early concept sketches to fully coordinated construction documentation.",
    deliverables: [
      "Concept & schematic design",
      "Construction drawing sets",
      "Permit & approval documentation",
      "3D visualisation & renders",
    ],
    image: cld("services-architecture-drawings-card", { w: 1400 }),
  },
  {
    num: "02",
    slug: "general-contracting",
    category: "Construction & Delivery",
    title: "General Contracting",
    desc: "Single point of accountability for the full construction process — coordinating trades, materials, and schedules to deliver a finished building without compromise.",
    deliverables: [
      "Site mobilisation & supervision",
      "Subcontractor coordination",
      "Quality control on every trade",
      "Handover & snagging",
    ],
    image: cld("services-general-contracting-card", { w: 1400 }),
  },
  {
    num: "03",
    slug: "project-management",
    category: "Construction & Delivery",
    title: "Project Management",
    desc: "Disciplined planning and oversight that keeps every stakeholder aligned, every milestone visible, and every project on time and on budget.",
    deliverables: [
      "Programme & schedule management",
      "Budget & cost control",
      "Risk & change management",
      "Stakeholder reporting",
    ],
    image: cld("services-project-management-card", { w: 1400 }),
  },
  {
    num: "04",
    slug: "boq-cost-estimation",
    category: "Planning & Costing",
    title: "BOQ & Cost Estimation",
    desc: "Detailed bills of quantities and cost plans that give clients clarity and confidence before a single foundation is poured.",
    deliverables: [
      "Quantity take-offs",
      "Material & labour costing",
      "Tender documentation",
      "Value engineering review",
    ],
    image: cld("services-boq-cost-estimation-card", { w: 1400 }),
  },
  {
    num: "05",
    slug: "project-consultation",
    category: "Planning & Costing",
    title: "Project Consultation",
    desc: "Independent, technically grounded advice at the earliest stage — helping clients test feasibility before committing capital to a project.",
    deliverables: [
      "Feasibility studies",
      "Site & regulatory assessment",
      "Technical due diligence",
      "Strategic project roadmap",
    ],
    image: cld("services-project-consultation-card", { w: 1400 }),
  },
  {
    num: "06",
    slug: "interior-design",
    category: "Design & Documentation",
    title: "Interior Design",
    desc: "Considered interiors that balance material honesty, spatial comfort, and lasting quality — tailored to how each space will actually be used.",
    deliverables: [
      "Space planning & layouts",
      "Material & finish specification",
      "Custom joinery & fit-out",
      "Furniture & lighting design",
    ],
    image: cld("services-interior-design-card", { w: 1400 }),
  },
  {
    num: "07",
    slug: "exterior-design",
    category: "Design & Documentation",
    title: "Exterior Design",
    desc: "Facades and envelopes engineered to perform in Rwanda\u2019s climate while giving every building a confident, enduring street presence.",
    deliverables: [
      "Facade concept & detailing",
      "Material selection",
      "Envelope performance review",
      "Elevation drawings",
    ],
    image: cld("services-exterior-design-card", { w: 1400 }),
  },
  {
    num: "08",
    slug: "landscaping",
    category: "Design & Documentation",
    title: "Landscaping",
    desc: "Outdoor environments designed as an extension of the building itself — from hardscaping to planting plans suited to the local terrain.",
    deliverables: [
      "Site & grading plans",
      "Hardscape & softscape design",
      "Irrigation planning",
      "Planting specification",
    ],
    image: cld("services-landscaping-card", { w: 1400 }),
  },
  {
    num: "09",
    slug: "mep",
    category: "Engineering Systems",
    title: "Mechanical, Electrical & Plumbing (MEP)",
    desc: "Fully coordinated MEP systems engineered for reliability and efficiency, integrated seamlessly into the architectural design from day one.",
    deliverables: [
      "MEP system design",
      "Load calculations",
      "Coordinated shop drawings",
      "Commissioning & testing",
    ],
    image: cld("services-mep-card", { w: 1400 }),
  },
  {
    num: "10",
    slug: "fire-protection",
    category: "Engineering Systems",
    title: "Fire Protection Systems",
    desc: "Life-safety systems designed and installed to code — protecting people and property with detection, suppression, and evacuation planning.",
    deliverables: [
      "Fire detection & alarm design",
      "Suppression system installation",
      "Emergency egress planning",
      "Compliance certification",
    ],
    image: cld("services-fire-protection-card", { w: 1400 }),
  },
  {
    num: "11",
    slug: "security-systems",
    category: "Engineering Systems",
    title: "Security Systems",
    desc: "Integrated access control, surveillance, and monitoring systems designed to protect residential, commercial, and institutional properties.",
    deliverables: [
      "CCTV & surveillance design",
      "Access control systems",
      "Perimeter security planning",
      "Monitoring integration",
    ],
    image: cld("services-security-systems-card", { w: 1400 }),
  },
  {
    num: "12",
    slug: "hvac",
    category: "Engineering Systems",
    title: "HVAC Systems",
    desc: "Climate control systems engineered for comfort and energy efficiency, sized correctly from the first calculation through to final installation.",
    deliverables: [
      "Heat load calculations",
      "System design & sizing",
      "Ductwork & equipment installation",
      "Performance commissioning",
    ],
    image: cld("services-hvac-card", { w: 1400 }),
  },
  {
    num: "13",
    slug: "solar-energy",
    category: "Engineering Systems",
    title: "Solar Energy Solutions",
    desc: "Solar power systems designed to reduce operating costs and improve energy resilience for homes, businesses, and developments.",
    deliverables: [
      "Solar feasibility assessment",
      "System design & sizing",
      "Installation & grid integration",
      "Performance monitoring",
    ],
    image: cld("services-solar-energy-card", { w: 1400 }),
  },
  {
    num: "14",
    slug: "real-estate-services",
    category: "Property & Investment",
    title: "Real Estate Services",
    desc: "Advisory grounded in real technical expertise — helping clients find, evaluate, and acquire property with genuine confidence.",
    deliverables: [
      "Property sourcing & advisory",
      "Investment feasibility analysis",
      "Acquisition support",
      "Portfolio strategy",
    ],
    image: cld("services-real-estate-services-card", { w: 1400 }),
  },
  {
    num: "15",
    slug: "property-refurbishment",
    category: "Property & Investment",
    title: "Property Refurbishment",
    desc: "Renovation and refurbishment that restores and elevates existing properties — extending their life and unlocking additional value.",
    deliverables: [
      "Condition assessment",
      "Refurbishment design",
      "Structural upgrades",
      "Full renovation delivery",
    ],
    image: cld("services-property-refurbishment-card", { w: 1400 }),
  },
  {
    num: "16",
    slug: "property-demolition",
    category: "Property & Investment",
    title: "Property Demolition",
    desc: "Safe, controlled demolition and site clearance carried out to regulatory standard — preparing sites for what comes next.",
    deliverables: [
      "Demolition planning & permits",
      "Safe dismantling & clearance",
      "Waste & material disposal",
      "Site preparation handover",
    ],
    image: cld("services-property-demolition-card", { w: 1400 }),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understanding your vision, requirements, and constraints from the outset.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "Feasibility, budgeting, and a clear project roadmap before design begins.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Architectural, structural, and MEP design developed in full coordination.",
  },
  {
    num: "04",
    title: "Execution",
    desc: "Disciplined construction management from groundbreaking to completion.",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Rigorous handover, snagging, and long-term support after completion.",
  },
];

const strengths = [
  {
    num: "01",
    title: "Experienced Professionals",
    desc: "A qualified, multidisciplinary team with two decades of combined delivery experience.",
  },
  {
    num: "02",
    title: "Integrated Solutions",
    desc: "Engineering, construction, materials, and property advisory under one accountable partner.",
  },
  {
    num: "03",
    title: "Premium Quality Standards",
    desc: "Every material, finish, and structure held to an uncompromising standard.",
  },
  {
    num: "04",
    title: "On-Time Delivery",
    desc: "Disciplined programme management that keeps every build on schedule.",
  },
  {
    num: "05",
    title: "Client-Focused Approach",
    desc: "Transparent communication and a genuine partnership from first sketch to handover.",
  },
  {
    num: "06",
    title: "End-to-End Project Support",
    desc: "From feasibility to final finish, support that never hands you off.",
  },
];

const industries = [
  {
    label: "Residential",
    image: cld("services-industries-residential", { w: 1000 }),
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    label: "Commercial",
    image: cld("services-industries-commercial", { w: 800 }),
    span: "",
  },
  {
    label: "Hospitality",
    image: cld("services-industries-hospitality", { w: 800 }),
    span: "",
  },
  {
    label: "Industrial",
    image: cld("services-industries-industrial", { w: 800 }),
    span: "",
  },
  {
    label: "Government",
    image: cld("services-industries-government", { w: 1000 }),
    span: "lg:col-span-2",
  },
  {
    label: "Education",
    image: cld("services-industries-education", { w: 800 }),
    span: "",
  },
  {
    label: "Healthcare",
    image: cld("services-industries-healthcare", { w: 800 }),
    span: "",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative h-[80vh] min-h-[620px] mt-[152px] flex items-center bg-[#1F2937] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={cld("heroes-services", { w: 2000 })}
            alt="Global Engineering Agency project site"
            loading="eager"
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
              Our Expertise
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-[38px] sm:text-[52px] lg:text-[68px] font-[800] tracking-[-0.03em] text-white leading-[1.1] max-w-[900px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Engineering Excellence Across{" "}
            <span className="font-[300] text-white/80">
              Every Stage of Your Project.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-6 text-[15px] sm:text-[16px] font-[300] leading-[1.8] text-white/70 max-w-[600px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From the first sketch to the final handover, GEA delivers
            multidisciplinary engineering, construction, and design services —
            engineered for modern construction and built to last.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/quote"
              className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              <span>Request Consultation</span>
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-[999px] border border-white/20 bg-white/5 px-8 py-4 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              <span>View Projects</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRODUCTION ─── */}
      <section className="bg-white py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[760px] px-8 lg:px-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-8 justify-center">
            <span className="h-[1px] w-6 bg-[#10367D]" />
            <span
              className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What We Do
            </span>
            <span className="h-[1px] w-6 bg-[#10367D]" />
          </div>
          <h2
            className="text-3xl lg:text-[42px] font-[700] text-[#1F2937] tracking-tight leading-[1.25] mb-8"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            A single, accountable partner for{" "}
            <span className="font-[300] text-[#10367D]">
              every stage of the built environment.
            </span>
          </h2>
          <p
            className="text-[16px] leading-[1.9] font-[300] text-[#1F2937]/60"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Global Engineering Agency is a multidisciplinary company delivering
            complete project solutions — from planning, design, and engineering
            through to construction, systems integration, and property advisory.
            Sixteen disciplines, one team, one point of accountability.
          </p>
        </motion.div>
      </section>

      {/* ─── SERVICES (alternating editorial rows) ─── */}
      <section
        id="services"
        className="bg-[#F8F8F8] py-24 lg:py-32 border-t border-[#E6E6E6]"
      >
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span
                className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Services
              </span>
            </div>
            <h2
              className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] max-w-[700px]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Sixteen disciplines.{" "}
              <span className="font-[300]">One integrated team.</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <motion.article
                key={service.slug}
                id={service.slug}
                aria-labelledby={`${service.slug}-heading`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-[1440px] w-full px-8 lg:px-16"
              >
                <div
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-6/12">
                    <div className="relative w-full aspect-[4/3] lg:aspect-[16/12] overflow-hidden rounded-[24px] bg-white">
                      <motion.img
                        whileHover={{ scale: 1.04 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        src={service.image}
                        alt={`${service.title} \u2014 Global Engineering Agency`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-6/12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="text-[13px] font-[700] tracking-[0.2em] text-[#C8A45D]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {service.num}
                      </span>
                      <span className="h-[1px] w-8 bg-[#E6E6E6]" />
                      <span
                        className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/50"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {service.category}
                      </span>
                    </div>

                    <h3
                      id={`${service.slug}-heading`}
                      className="text-3xl lg:text-[38px] font-[700] text-[#1F2937] tracking-tight leading-[1.15] mb-6"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-[15px] leading-[1.85] text-[#1F2937]/60 font-[300] mb-8 max-w-[520px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {service.desc}
                    </p>

                    <ul
                      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 max-w-[520px]"
                      aria-label={`${service.title} key deliverables`}
                    >
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 text-[13.5px] font-[300] text-[#1F2937]/70"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#C8A45D]" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={
                        servicesWithDetailPage.has(service.slug)
                          ? `/services/${detailPageSlugOverrides[service.slug] ?? service.slug}`
                          : `#${service.slug}`
                      }
                      className="inline-flex items-center gap-4 text-[13px] font-[600] tracking-[0.04em] text-[#1F2937] group transition-all duration-300 w-fit"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span className="h-[1px] bg-[#1F2937] w-6 transition-all duration-300 group-hover:w-12 group-hover:bg-[#10367D]" />
                      <span className="group-hover:text-[#10367D] transition-colors">
                        Learn More
                      </span>
                      <ArrowRight
                        className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#10367D]"
                        strokeWidth={1.5}
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ─── PROJECT PROCESS (horizontal timeline) ─── */}
      <section className="bg-white py-24 lg:py-40 border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-[600px] mx-auto mb-20 lg:mb-28">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="h-[1px] w-6 bg-[#10367D]" />
              <span
                className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                How We Work
              </span>
              <span className="h-[1px] w-6 bg-[#10367D]" />
            </div>
            <h2
              className="text-4xl lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Our project <span className="font-[300]">process.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[18px] left-[46px] right-[-24px] h-[1px] bg-[#E6E6E6]" />
                )}
                <div
                  className="text-[32px] font-[300] text-[#C8A45D] mb-6"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-[18px] font-[600] text-[#1F2937] tracking-tight mb-3"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.8] font-[300] text-[#1F2937]/50 pr-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (compact) ─── */}
      <section className="bg-[#0D1B2A] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14"
          >
            <div className="max-w-[560px]">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Why Choose Us
                </span>
              </div>
              <h2
                className="text-3xl lg:text-[42px] font-[700] tracking-tight leading-[1.2]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Why Clients Choose{" "}
                <span className="font-[300] text-white/70">
                  Global Engineering Agency.
                </span>
              </h2>
            </div>
            <p
              className="text-[13.5px] leading-[1.75] font-[300] text-white/45 max-w-[340px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Clients return to GEA project after project — that consistency is
              our real track record.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-start gap-4 py-6 lg:pr-8 border-b border-white/10"
              >
                <span
                  className="text-[12px] font-[600] tracking-[0.15em] text-[#C8A45D] shrink-0 pt-0.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.num}
                </span>
                <div>
                  <h3
                    className="text-[15px] font-[600] text-white tracking-tight mb-1.5 group-hover:text-[#C8A45D] transition-colors duration-300"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[12.5px] leading-[1.65] font-[300] text-white/45"
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

      {/* ─── INDUSTRIES WE SERVE (masonry grid) ─── */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span
                  className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Sectors
                </span>
              </div>
              <h2
                className="text-4xl lg:text-[56px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Industries <span className="font-[300]">we serve.</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-4 lg:gap-5">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative overflow-hidden rounded-[18px] cursor-default ${ind.span}`}
              >
                <img
                  src={ind.image}
                  alt={`${ind.label} sector`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1F2937]/45 group-hover:bg-[#10367D]/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-5 lg:p-7">
                  <div className="flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="h-[1px] w-5 bg-[#C8A45D] transition-all duration-300 group-hover:w-8" />
                    <span
                      className="text-[15px] lg:text-[18px] font-[600] text-white tracking-tight"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {ind.label}
                    </span>
                  </div>
                </div>
              </motion.div>
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
              <span className="text-[#C8A45D]">exceptional together.</span>
            </h2>
            <p
              className="mx-auto max-w-[580px] text-[16px] leading-[1.8] font-[300] text-white/55"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Whatever stage your project is at, our multidisciplinary team is
              ready to bring the engineering rigor and design sensibility it
              deserves.
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
              href="/quote"
              className="inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-12 py-5 text-[14px] font-[700] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-12 py-5 text-[14px] font-[500] tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[#C8A45D]/60 hover:text-white"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

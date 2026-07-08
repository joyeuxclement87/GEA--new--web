"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { expertiseLinks, projectCategories, projects } from "./projects-data";
import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function StatCounter({
  from,
  to,
  suffix = "",
}: {
  from: number;
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(from, to, {
      duration: 1.7,
      ease: "easeOut",
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(value)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [from, to, suffix, inView]);

  return (
    <span ref={ref}>
      {from}
      {suffix}
    </span>
  );
}

export default function ProjectsClientPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredProject = projects[0];

  const showcaseProjects = useMemo(() => {
    const rest = projects.slice(1);
    if (activeCategory === "All") return rest;
    return rest.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const testimonials = projects.map((project) => ({
    quote: project.testimonial.quote,
    name: project.testimonial.name,
    company: project.testimonial.company,
    projectType: project.testimonial.projectType,
    profileImage: project.testimonial.profileImage,
    slug: project.slug,
  }));

  const currentTestimonial = testimonials[activeTestimonial];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <section className="relative mt-[152px] flex h-[74vh] min-h-[580px] items-center overflow-hidden bg-[#1F2937] text-white">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=80"
          alt="Architectural project portfolio by Global Engineering Agency"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10367D]/86 via-[#1F2937]/72 to-[#1F2937]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/88 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-6 inline-flex w-fit items-center gap-3 text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]"
          >
            <span className="h-px w-7 bg-[#C8A45D]" />
            Our Portfolio
          </motion.p>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.08}
            className="max-w-[920px] text-[36px] font-[700] leading-[1.08] tracking-[-0.03em] sm:text-[52px] lg:text-[74px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Building Projects That Define Quality and Innovation.
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.16}
            className="mt-6 max-w-[760px] text-[15px] font-[300] leading-[1.85] text-white/85 sm:text-[16px]"
          >
            Showcase how Global Engineering Agency transforms ideas into
            successful residential, commercial, industrial, and infrastructure
            developments through architecture, engineering, construction, and
            integrated project delivery.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.24}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/quote"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#C8A45D] px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[13px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-24 lg:px-16 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="max-w-[700px]"
        >
          <h2
            className="text-[34px] font-[500] leading-[1.15] tracking-[-0.02em] text-[#1F2937] sm:text-[44px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Every Project Tells a Story.
          </h2>
          <p className="mt-7 text-[16px] font-[300] leading-[1.85] text-[#1F2937]/70">
            Every assignment reflects close collaboration, technical excellence,
            thoughtful design decisions, and long-term value creation. Our work
            is measured not only by completion, but by performance years after
            handover.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-24 lg:px-16 lg:pb-28">
        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="overflow-hidden border-y border-[#E6E6E6] py-14 lg:py-16"
        >
          <div className="mb-10 flex items-center justify-between gap-4">
            <p className="text-[11px] font-[600] uppercase tracking-[0.22em] text-[#C8A45D]">
              Featured Project
            </p>
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="inline-flex items-center gap-2 text-[12px] font-[600] tracking-[0.04em] text-[#10367D] transition-all duration-200 hover:gap-3 hover:text-[#C8A45D]"
            >
              View Case Study
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} project in ${featuredProject.location}`}
                className="h-full min-h-[380px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3
                  className="text-[34px] font-[600] leading-[1.1] tracking-[-0.02em] text-[#1F2937]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {featuredProject.title}
                </h3>

                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-[#E6E6E6] py-7">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/40">
                      Location
                    </dt>
                    <dd className="mt-1 text-[14px] font-[500] text-[#1F2937]">
                      {featuredProject.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/40">
                      Category
                    </dt>
                    <dd className="mt-1 text-[14px] font-[500] text-[#1F2937]">
                      {featuredProject.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/40">
                      Completion Year
                    </dt>
                    <dd className="mt-1 text-[14px] font-[500] text-[#1F2937]">
                      {featuredProject.completionYear}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/40">
                      Services
                    </dt>
                    <dd className="mt-1 text-[14px] font-[500] text-[#1F2937]">
                      {featuredProject.services.slice(0, 2).join(" + ")}
                    </dd>
                  </div>
                </dl>

                <p className="mt-7 text-[15px] leading-[1.85] text-[#1F2937]/72">
                  {featuredProject.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {featuredProject.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-[14px] text-[#1F2937]/75"
                    >
                      <span className="mt-[9px] h-px w-6 shrink-0 bg-[#C8A45D]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-12 lg:px-16">
        <nav
          className="overflow-x-auto border-b border-[#E6E6E6]"
          aria-label="Project categories"
        >
          <ul className="flex min-w-max items-center gap-8 pb-2">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`relative pb-2 text-[13px] font-[500] tracking-[0.05em] uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-[#10367D]"
                        : "text-[#1F2937]/45 hover:text-[#1F2937]"
                    }`}
                  >
                    {category}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C8A45D] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-24 lg:px-16 lg:pb-28">
        <div className="space-y-16 lg:space-y-24">
          {showcaseProjects.map((project, index) => {
            const reverse = index % 2 !== 0;
            return (
              <motion.article
                key={project.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                custom={0}
                className={`grid grid-cols-1 items-center gap-8 border-b border-[#E6E6E6] pb-16 lg:grid-cols-2 lg:gap-14 lg:pb-20 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-[24px]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} project in ${project.location}`}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-[430px]"
                  />
                </Link>

                <div>
                  <p className="text-[10px] font-[600] uppercase tracking-[0.18em] text-[#C8A45D]">
                    {project.category}
                  </p>
                  <h3
                    className="mt-3 text-[30px] font-[600] leading-[1.12] tracking-[-0.02em] text-[#1F2937]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[13px] uppercase tracking-[0.1em] text-[#1F2937]/45">
                    {project.location}
                  </p>

                  <dl className="mt-7 space-y-3 text-[14px] text-[#1F2937]/75">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <dt className="font-[600] text-[#1F2937]">Services Delivered:</dt>
                      <dd>{project.services.join(" • ")}</dd>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <dt className="font-[600] text-[#1F2937]">Completion Year:</dt>
                      <dd>{project.completionYear}</dd>
                    </div>
                  </dl>

                  <p className="mt-6 max-w-[560px] text-[15px] leading-[1.85] text-[#1F2937]/72">
                    {project.summary}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 text-[13px] font-[600] tracking-[0.04em] text-[#10367D] transition-all duration-200 hover:text-[#C8A45D]"
                  >
                    <span className="h-px w-8 bg-current transition-all duration-200 group-hover:w-12" />
                    Explore Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#E6E6E6] bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
          <h2
            className="text-[30px] font-[500] tracking-[-0.02em] text-[#1F2937] sm:text-[40px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Project Statistics
          </h2>

          <div className="mt-12 grid grid-cols-1 divide-y divide-[#E6E6E6] border-y border-[#E6E6E6] md:grid-cols-5 md:divide-x md:divide-y-0">
            <div className="px-5 py-9 text-center">
              <p className="text-[52px] font-[700] leading-none text-[#10367D]" style={{ fontFamily: "Manrope, sans-serif" }}>
                <StatCounter from={0} to={120} suffix="+" />
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-[#1F2937]/55">
                Projects Completed
              </p>
            </div>
            <div className="px-5 py-9 text-center">
              <p className="text-[52px] font-[700] leading-none text-[#10367D]" style={{ fontFamily: "Manrope, sans-serif" }}>
                <StatCounter from={0} to={8} suffix="+" />
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-[#1F2937]/55">
                Industries Served
              </p>
            </div>
            <div className="px-5 py-9 text-center">
              <p className="text-[52px] font-[700] leading-none text-[#10367D]" style={{ fontFamily: "Manrope, sans-serif" }}>
                <StatCounter from={0} to={340} suffix="k" />
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-[#1F2937]/55">
                Construction Area
              </p>
            </div>
            <div className="px-5 py-9 text-center">
              <p className="text-[52px] font-[700] leading-none text-[#10367D]" style={{ fontFamily: "Manrope, sans-serif" }}>
                <StatCounter from={0} to={98} suffix="%" />
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-[#1F2937]/55">
                Client Satisfaction
              </p>
            </div>
            <div className="px-5 py-9 text-center">
              <p className="text-[52px] font-[700] leading-none text-[#10367D]" style={{ fontFamily: "Manrope, sans-serif" }}>
                <StatCounter from={0} to={15} suffix="+" />
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-[#1F2937]/55">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
        <div className="max-w-[760px]">
          <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">
            Project Process
          </p>
          <h2
            className="mt-5 text-[30px] font-[500] tracking-[-0.02em] text-[#1F2937] sm:text-[40px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            A Clear Path From Brief to Delivery.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.85] text-[#1F2937]/70">
            Our process stays lean and coordinated: we shape the brief, resolve
            the technical path, refine the design intent, build with control,
            and deliver with accountability.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-0">
          {[
            "Consultation",
            "Planning",
            "Design",
            "Construction",
            "Project Delivery",
          ].map((step, index) => (
            <li
              key={step}
              className="group relative rounded-[20px] border border-[#E6E6E6] bg-white px-5 py-6 md:rounded-none md:border-0 md:border-l md:px-7 md:py-0 md:pl-7"
            >
              <div className="flex items-center gap-4 md:block">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8A45D] text-white text-[14px] font-[700] tracking-[0.14em] shadow-sm transition-colors duration-200 group-hover:bg-[#b8923f]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 md:mt-5">
                  <p
                    className="text-[18px] font-[500] tracking-[-0.02em] text-[#1F2937]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {step}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.75] text-[#1F2937]/55">
                    {[
                      "Define the brief and align on objectives.",
                      "Build the roadmap, scope, and sequence.",
                      "Translate ideas into coordinated design.",
                      "Execute with site control and quality checks.",
                      "Hand over a complete, ready-to-use project.",
                    ][index]}
                  </p>
                </div>
              </div>

              {index < 4 && (
                <>
                  <span className="hidden md:block absolute right-[-1px] top-[calc(100%+0.5rem)] h-px w-[calc(100%+2rem)] bg-[#E6E6E6]" />
                  <span className="hidden md:block absolute right-[-1px] top-[calc(100%+0.125rem)] h-3 w-3 rounded-full border border-[#E6E6E6] bg-white" />
                </>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section
        className="border-y border-[#E6E6E6]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(15, 23, 42, 0.95) 0%, rgba(16, 54, 125, 0.92) 42%, rgba(16, 54, 125, 0.78) 100%), url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]">
                Client Voice
              </p>
              <h2
                className="mt-4 text-[30px] font-[500] tracking-[-0.02em] text-white sm:text-[40px]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Voices shaped by trust, precision, and enduring impact.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-white/75">
                Each project is guided by a clear brief, a disciplined delivery
                rhythm, and a collaborative partnership that continues long after
                handover.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.slug}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "w-8 bg-[#C8A45D]" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              key={currentTestimonial.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-[30px] border border-white/20 bg-white/95 p-8 shadow-[0_24px_90px_-35px_rgba(16,54,125,0.28)] backdrop-blur md:p-10"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F5E9C8] px-3 py-1 text-[10px] font-[600] uppercase tracking-[0.2em] text-[#8A6A28]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />
                  Client Feedback
                </span>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#1F2937]/45">
                  Featured story
                </div>
              </div>

              <blockquote
                className="mt-8 text-[24px] leading-[1.45] tracking-[-0.02em] text-[#1F2937] sm:text-[32px]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                “{currentTestimonial.quote}”
              </blockquote>

              <div className="mt-8 flex flex-col gap-6 border-t border-[#E6E6E6] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[16px] font-[600] text-[#1F2937]">
                    {currentTestimonial.name}
                  </p>
                  <p className="mt-1 text-[13px] text-[#1F2937]/65">
                    {currentTestimonial.company}
                  </p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-[#1F2937]/45">
                    {currentTestimonial.projectType}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DADADA] bg-white text-[#1F2937]/70 transition-all duration-200 hover:border-[#10367D] hover:text-[#10367D]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DADADA] bg-white text-[#1F2937]/70 transition-all duration-200 hover:border-[#10367D] hover:text-[#10367D]"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="relative overflow-hidden rounded-[30px] border border-[#10367D]/10 bg-[#10284A] p-8 text-white shadow-[0_24px_90px_-35px_rgba(16,54,125,0.45)] md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,164,93,0.18),_transparent_40%)]" />
              <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[#C8A45D]/20 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="max-w-[240px]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[9px] font-[600] uppercase tracking-[0.18em] text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />
                      Verified Client
                    </div>
                    <p
                      className="mt-4 text-[28px] font-[600] leading-[1.08] tracking-[-0.03em] text-white"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {currentTestimonial.name}
                    </p>
                  </div>

                  <div className="relative shrink-0">
                    <div className="absolute -inset-2 rounded-full border border-[#C8A45D]/35" />
                    <div className="h-24 w-24 overflow-hidden rounded-full border-[3px] border-[#C8A45D]/80 bg-[#F8F8F8] p-1.5 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.65)] sm:h-28 sm:w-28">
                      <img
                        src={currentTestimonial.profileImage}
                        alt={`${currentTestimonial.name} portrait`}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-white/10 bg-white/10 p-4">
                    <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">
                      Project Type
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.6] text-white/80">
                      {currentTestimonial.projectType}
                    </p>
                  </div>
                  <div className="rounded-[20px] border border-[#C8A45D]/25 bg-[#C8A45D]/15 p-4">
                    <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#EEDAA4]">
                      Delivery Approach
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.6] text-white/80">
                      coordinated design, site control, and accountable execution.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <Link
                    href={`/projects/${currentTestimonial.slug}`}
                    className="inline-flex items-center gap-3 text-[12px] font-[600] tracking-[0.04em] text-[#C8A45D] transition-all duration-200 hover:gap-4 hover:text-[#EEDAA4]"
                  >
                    View Project
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                  <p className="text-right text-[11px] uppercase tracking-[0.14em] text-white/60">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
        <h2
          className="text-[30px] font-[500] tracking-[-0.02em] text-[#1F2937] sm:text-[40px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Related Expertise
        </h2>

        <nav className="mt-10 border-y border-[#E6E6E6]" aria-label="Related services">
          <ul>
            {expertiseLinks.map((link) => (
              <li key={link.label} className="border-b border-[#E6E6E6] last:border-b-0">
                <Link
                  href={link.href}
                  className="group flex items-center justify-between px-0 py-5 text-[18px] text-[#1F2937]/78 transition-colors duration-200 hover:text-[#10367D]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="border-t border-[#E6E6E6] bg-[#1F2937] text-white">
        <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
          <p className="text-[10px] font-[600] uppercase tracking-[0.22em] text-[#C8A45D]">
            Start A Conversation
          </p>
          <h2
            className="mt-6 max-w-[780px] text-[36px] font-[600] leading-[1.1] tracking-[-0.03em] sm:text-[50px] lg:text-[64px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Let&apos;s Build Your Next Landmark.
          </h2>
          <p className="mt-7 max-w-[760px] text-[16px] font-[300] leading-[1.85] text-white/75">
            Whether you&apos;re planning a home, commercial development,
            renovation, or infrastructure project, our multidisciplinary team is
            ready to bring your vision to life.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#C8A45D] px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[13px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/45 hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

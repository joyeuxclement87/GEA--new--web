"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import {
  articles,
  categories,
  featuredArticle,
  relatedServices,
  topics,
} from "./insights-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function InsightsPage() {
  const latestArticles = articles.slice(1);

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#1F2937]">
      <section className="relative mt-[152px] flex min-h-[650px] items-center overflow-hidden bg-[#1F2937] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={featuredArticle.image}
            alt="Editorial architectural insight imagery"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#10367D]/95 via-[#1F2937]/90 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1F2937]/95 via-transparent to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "120px 100%" }} />

        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-6 inline-flex w-fit items-center gap-3 text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]">
            <span className="h-px w-7 bg-[#C8A45D]" />
            Insights
          </motion.p>

          <motion.h1 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.08} className="max-w-[920px] text-[36px] font-[700] leading-[1.08] tracking-[-0.03em] sm:text-[52px] lg:text-[74px]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Ideas, Expertise & Industry Perspectives.
          </motion.h1>

          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.16} className="mt-6 max-w-[760px] text-[15px] font-[300] leading-[1.85] text-white/85 sm:text-[16px]">
            At Global Engineering Agency, we share practical knowledge, project experience, engineering insights, construction trends, and property guidance to support clients and collaborators at every stage.
          </motion.p>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0.24} className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#latest-articles" className="inline-flex items-center gap-2.5 rounded-full bg-[#C8A45D] px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
              Browse Articles
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[13px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10">
              Subscribe
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-24 lg:px-16 lg:py-28">
        <motion.article initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} custom={0} className="overflow-hidden border-y border-[#E6E6E6] py-14 lg:py-16">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[11px] font-[600] uppercase tracking-[0.22em] text-[#C8A45D]">Featured Article</p>
            <div className="text-[12px] font-[600] tracking-[0.04em] text-[#10367D]">{featuredArticle.date} • {featuredArticle.readTime}</div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[24px]">
              <img src={featuredArticle.image} alt={featuredArticle.imageAlt} className="h-full min-h-[380px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-[600] uppercase tracking-[0.18em] text-[#C8A45D]">{featuredArticle.category}</p>
                <h2 className="mt-3 text-[34px] font-[600] leading-[1.1] tracking-[-0.02em] text-[#1F2937]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {featuredArticle.title}
                </h2>
                <p className="mt-6 text-[15px] leading-[1.85] text-[#1F2937]/72">{featuredArticle.excerpt}</p>
                <div className="mt-7 flex items-center gap-4 border-t border-[#E6E6E6] pt-6 text-[13px] text-[#1F2937]/60">
                  <span>By {featuredArticle.author}</span>
                  <span className="h-1 w-1 rounded-full bg-[#1F2937]/35" />
                  <span>{featuredArticle.date}</span>
                </div>
              </div>
              <Link href={`/insights/${featuredArticle.slug}`} className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#10367D] px-7 py-3.5 text-[13px] font-[600] tracking-[0.02em] text-white transition-all duration-300 hover:bg-[#C8A45D] hover:text-[#1F2937]">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-12 lg:px-16">
        <nav className="overflow-x-auto border-b border-[#E6E6E6]" aria-label="Insights categories">
          <ul className="flex min-w-max items-center gap-8 pb-2">
            {categories.map((category) => (
              <li key={category}>
                <button type="button" className="relative pb-2 text-[13px] font-[500] tracking-[0.05em] uppercase text-[#1F2937]/45 transition-colors duration-200 hover:text-[#1F2937]">
                  {category}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C8A45D] transition-all duration-300 hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section id="latest-articles" className="mx-auto max-w-[1440px] px-8 pb-24 lg:px-16 lg:pb-28">
        <div className="space-y-16 lg:space-y-24">
          <motion.article initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} custom={0} className="grid grid-cols-1 gap-8 border-b border-[#E6E6E6] pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20">
            <Link href={`/insights/${latestArticles[0].slug}`} className="group block overflow-hidden rounded-[24px]">
              <img src={latestArticles[0].image} alt={latestArticles[0].imageAlt} className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-[430px]" />
            </Link>
            <div>
              <p className="text-[10px] font-[600] uppercase tracking-[0.18em] text-[#C8A45D]">{latestArticles[0].category}</p>
              <h3 className="mt-3 text-[30px] font-[600] leading-[1.12] tracking-[-0.02em] text-[#1F2937]" style={{ fontFamily: "Manrope, sans-serif" }}>{latestArticles[0].title}</h3>
              <p className="mt-4 text-[15px] leading-[1.85] text-[#1F2937]/72">{latestArticles[0].excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.14em] text-[#1F2937]/45">
                <span>By {latestArticles[0].author}</span>
                <span>{latestArticles[0].date}</span>
                <span>{latestArticles[0].readTime}</span>
              </div>
              <Link href={`/insights/${latestArticles[0].slug}`} className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#10367D]/15 bg-white px-6 py-3 text-[13px] font-[600] tracking-[0.02em] text-[#10367D] shadow-sm transition-all duration-300 hover:border-[#10367D] hover:bg-[#10367D] hover:text-white">
                Read More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </div>
          </motion.article>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            {latestArticles.slice(1, 3).map((article, index) => (
              <motion.article key={article.slug} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} custom={0.05 + index * 0.05} className="rounded-[24px] border border-[#E6E6E6] bg-white p-7 shadow-sm">
                <img src={article.image} alt={article.imageAlt} className="h-[240px] w-full rounded-[18px] object-cover" />
                <p className="mt-6 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#C8A45D]">{article.category}</p>
                <h3 className="mt-3 text-[24px] font-[600] leading-[1.2] tracking-[-0.02em] text-[#1F2937]" style={{ fontFamily: "Manrope, sans-serif" }}>{article.title}</h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-[#1F2937]/70">{article.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.14em] text-[#1F2937]/45">
                  <span>By {article.author}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <Link href={`/insights/${article.slug}`} className="group mt-8 inline-flex items-center gap-2.5 text-[13px] font-[600] tracking-[0.04em] text-[#10367D] transition-all duration-200 hover:text-[#C8A45D]">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.article initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} custom={0.1} className="overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <img src={latestArticles[3].image} alt={latestArticles[3].imageAlt} className="h-[320px] w-full object-cover lg:h-full" />
              <div className="p-8 lg:p-10">
                <p className="text-[10px] font-[600] uppercase tracking-[0.18em] text-[#C8A45D]">{latestArticles[3].category}</p>
                <h3 className="mt-3 text-[28px] font-[600] leading-[1.15] tracking-[-0.02em] text-[#1F2937]" style={{ fontFamily: "Manrope, sans-serif" }}>{latestArticles[3].title}</h3>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#1F2937]/72">{latestArticles[3].excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.14em] text-[#1F2937]/45">
                  <span>By {latestArticles[3].author}</span>
                  <span>{latestArticles[3].date}</span>
                  <span>{latestArticles[3].readTime}</span>
                </div>
                <Link href={`/insights/${latestArticles[3].slug}`} className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#10367D]/15 bg-white px-6 py-3 text-[13px] font-[600] tracking-[0.02em] text-[#10367D] shadow-sm transition-all duration-300 hover:border-[#10367D] hover:bg-[#10367D] hover:text-white">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-8 md:grid-cols-3">
            {latestArticles.slice(4).map((article, index) => (
              <motion.article key={article.slug} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} custom={0.12 + index * 0.04} className="rounded-[24px] border border-[#E6E6E6] bg-white p-6 shadow-sm">
                <img src={article.image} alt={article.imageAlt} className="h-[200px] w-full rounded-[18px] object-cover" />
                <p className="mt-5 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#C8A45D]">{article.category}</p>
                <h3 className="mt-3 text-[20px] font-[600] leading-[1.2] tracking-[-0.02em] text-[#1F2937]" style={{ fontFamily: "Manrope, sans-serif" }}>{article.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#1F2937]/70">{article.excerpt}</p>
                <Link href={`/insights/${article.slug}`} className="group mt-6 inline-flex items-center gap-2.5 text-[13px] font-[600] tracking-[0.04em] text-[#10367D] transition-all duration-200 hover:text-[#C8A45D]">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 lg:px-16 lg:pb-24">
        <div className="rounded-[28px] border border-[#E6E6E6] bg-white p-8 shadow-sm lg:p-10">
          <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]">
            <span className="h-px w-7 bg-[#C8A45D]" />
            Popular Topics
          </p>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link key={topic} href="/insights" className="group inline-flex items-center rounded-full border border-[#E6E6E6] px-4 py-2 text-[13px] text-[#1F2937]/70 transition-all duration-200 hover:border-[#10367D] hover:text-[#10367D]">
                <span className="transition-all duration-200 group-hover:translate-x-0.5">{topic}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 lg:px-16 lg:pb-24">
        <div className="rounded-[28px] border border-[#E6E6E6] bg-[#FAFAFA] p-8 lg:p-10">
          <div className="max-w-[760px]">
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]">
              <span className="h-px w-7 bg-[#C8A45D]" />
              Newsletter
            </p>
            <h2 className="text-[30px] font-[700] leading-[1.08] tracking-[-0.03em] text-[#1F2937] sm:text-[40px] lg:text-[48px]" style={{ fontFamily: "Manrope, sans-serif" }}>
              Stay Updated With Industry Insights.
            </h2>
            <p className="mt-6 text-[15px] font-[300] leading-[1.85] text-[#1F2937]/75 sm:text-[16px]">
              Receive architecture, engineering, and construction updates designed for professionals who value clarity and quality.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Email address" className="h-[52px] flex-1 rounded-full border border-[#E6E6E6] bg-white px-5 text-[14px] text-[#1F2937] outline-none ring-0" />
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-[#C8A45D] px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-[#10367D] hover:text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 lg:px-16 lg:pb-24">
        <div className="border-y border-[#E6E6E6] py-14">
          <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]">
            <span className="h-px w-7 bg-[#C8A45D]" />
            Related Services
          </p>
          <nav aria-label="Related services">
            <ul className="space-y-4">
              {relatedServices.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="group flex items-center justify-between border-b border-[#E6E6E6] pb-4 text-[18px] text-[#1F2937]/78 transition-colors duration-200 hover:text-[#10367D]" style={{ fontFamily: "Manrope, sans-serif" }}>
                    <span>{service.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="border-t border-[#E6E6E6] bg-[#1F2937] text-white">
        <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
          <p className="text-[10px] font-[600] uppercase tracking-[0.22em] text-[#C8A45D]">Start A Conversation</p>
          <h2 className="mt-6 max-w-[780px] text-[36px] font-[600] leading-[1.1] tracking-[-0.03em] sm:text-[50px] lg:text-[64px]" style={{ fontFamily: "Manrope, sans-serif" }}>
            Ready To Bring Your Vision To Life?
          </h2>
          <p className="mt-7 max-w-[760px] text-[16px] font-[300] leading-[1.85] text-white/75">
            Whether you&apos;re planning a new project or looking for professional guidance, our multidisciplinary team is here to help.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2.5 rounded-full bg-[#C8A45D] px-8 py-4 text-[13px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]">
              Request Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[13px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/45 hover:bg-white/10">
              Explore Our Expertise
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

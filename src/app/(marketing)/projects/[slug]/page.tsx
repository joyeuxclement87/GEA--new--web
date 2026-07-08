import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../projects-data";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Global Engineering Agency",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Projects | Global Engineering Agency`,
    description: `${project.summary} Located in ${project.location}, completed in ${project.completionYear}.`,
    keywords: project.keywords,
    openGraph: {
      title: `${project.title} | Global Engineering Agency`,
      description: project.summary,
      images: [{ url: project.heroImage, alt: project.title }],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    image: project.heroImage,
    keywords: project.keywords.join(", "),
    about: [project.industry, project.category],
    spatialCoverage: project.location,
    provider: {
      "@type": "Organization",
      name: "Global Engineering Agency",
      url: "https://globalengineeringagency.com",
    },
  };

  return (
    <main className="min-h-screen bg-white text-[#1F2937]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="relative mt-[156px] min-h-[62vh] overflow-hidden bg-[#1F2937] text-white">
        <img
          src={project.heroImage}
          alt={`${project.title} hero image`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10367D]/92 via-[#1F2937]/88 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/95 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1440px] px-8 py-24 lg:px-16 lg:py-28">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[12px] font-[500] uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[#C8A45D]"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            Back to Projects
          </Link>

          <p className="mt-9 text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">
            {project.category}
          </p>

          <h1
            className="mt-4 max-w-[920px] text-[36px] font-[700] leading-[1.08] tracking-[-0.03em] sm:text-[52px] lg:text-[72px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {project.title}
          </h1>

          <p className="mt-8 max-w-[760px] text-[16px] font-[300] leading-[1.85] text-white/78">
            {project.description}
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-[1.35fr_1fr] lg:px-16 lg:py-24">
        <article>
          <h2
            className="text-[30px] font-[500] tracking-[-0.02em] text-[#1F2937] sm:text-[38px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Overview
          </h2>
          <p className="mt-6 text-[16px] leading-[1.9] text-[#1F2937]/72">
            {project.summary}
          </p>

          <h3
            className="mt-12 text-[24px] font-[600] tracking-[-0.02em] text-[#1F2937]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Scope of Work
          </h3>
          <ul className="mt-5 space-y-3">
            {project.scopeOfWork.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-[#1F2937]/75">
                <span className="mt-[10px] h-px w-6 shrink-0 bg-[#C8A45D]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3
                className="text-[24px] font-[600] tracking-[-0.02em] text-[#1F2937]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Challenges
              </h3>
              <ul className="mt-5 space-y-3">
                {project.challenges.map((item) => (
                  <li key={item} className="text-[15px] leading-[1.75] text-[#1F2937]/72">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="text-[24px] font-[600] tracking-[-0.02em] text-[#1F2937]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Solutions
              </h3>
              <ul className="mt-5 space-y-3">
                {project.solutions.map((item) => (
                  <li key={item} className="text-[15px] leading-[1.75] text-[#1F2937]/72">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <aside className="border border-[#E6E6E6] p-7 lg:p-8">
          <h2
            className="text-[22px] font-[600] tracking-[-0.02em] text-[#1F2937]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Project Information
          </h2>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/45">
                Location
              </dt>
              <dd className="mt-1 text-[15px] font-[500] text-[#1F2937]">
                {project.location}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/45">
                Industry
              </dt>
              <dd className="mt-1 text-[15px] font-[500] text-[#1F2937]">
                {project.industry}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/45">
                Completion Year
              </dt>
              <dd className="mt-1 text-[15px] font-[500] text-[#1F2937]">
                {project.completionYear}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-[#1F2937]/45">
                Services
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#E6E6E6] px-3 py-1 text-[11px] text-[#1F2937]/68"
                  >
                    {service}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 lg:px-16 lg:pb-24">
        <h2
          className="text-[30px] font-[500] tracking-[-0.02em] text-[#1F2937] sm:text-[38px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Gallery
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {project.gallery.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt={`${project.title} gallery image ${index + 1}`}
                className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#E6E6E6] bg-[#F8F8F8]">
        <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
          <h2
            className="text-[30px] font-[500] tracking-[-0.02em] text-[#1F2937] sm:text-[38px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Client Testimonial
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-white px-3 py-1 text-[9px] font-[600] uppercase tracking-[0.18em] text-[#1F2937]/42">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />
                Verified Client
              </div>
              <blockquote
                className="mt-6 max-w-[980px] text-[28px] leading-[1.36] tracking-[-0.02em] text-[#1F2937] sm:text-[38px]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                “{project.testimonial.quote}”
              </blockquote>

              <div className="mt-8 border-l border-[#C8A45D] pl-5">
                <p className="text-[16px] font-[600] text-[#1F2937]">
                  {project.testimonial.name}
                </p>
                <p className="mt-1 text-[13px] text-[#1F2937]/65">
                  {project.testimonial.company}
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-[#1F2937]/45">
                  {project.testimonial.projectType}
                </p>
              </div>
            </div>

            <div className="relative justify-self-start overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white p-4 shadow-[0_18px_60px_-40px_rgba(16,54,125,0.35)] lg:justify-self-end">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,164,93,0.08),_transparent_50%)]" />
              <img
                src={project.testimonial.profileImage}
                alt={`${project.testimonial.name} portrait`}
                className="relative h-[240px] w-[220px] rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
        <h2
          className="text-[30px] font-[500] tracking-[-0.02em] text-[#1F2937] sm:text-[38px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Related Services
        </h2>

        <nav className="mt-8 border-y border-[#E6E6E6]" aria-label="Related services">
          <ul>
            {project.services.map((service) => (
              <li key={service} className="border-b border-[#E6E6E6] last:border-b-0">
                <Link
                  href="/services"
                  className="group flex items-center justify-between py-5 text-[18px] text-[#1F2937]/78 transition-colors duration-200 hover:text-[#10367D]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>{service}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="border-y border-[#E6E6E6] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group inline-flex items-center gap-3 text-[14px] font-[600] text-[#1F2937]/72 transition-colors duration-200 hover:text-[#10367D]"
          >
            <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.5} />
            Previous Project: {prevProject.title}
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-3 text-[14px] font-[600] text-[#1F2937]/72 transition-colors duration-200 hover:text-[#10367D]"
          >
            Next Project: {nextProject.title}
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="bg-[#1F2937] text-white">
        <div className="mx-auto max-w-[1440px] px-8 py-20 lg:px-16 lg:py-24">
          <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">
            Begin Your Project
          </p>
          <h2
            className="mt-6 max-w-[820px] text-[34px] font-[600] leading-[1.1] tracking-[-0.03em] sm:text-[48px] lg:text-[60px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Let&apos;s Build Your Next Landmark.
          </h2>
          <p className="mt-7 max-w-[760px] text-[16px] font-[300] leading-[1.85] text-white/75">
            Tell us about your ambition, timeline, and project type. Our team
            will shape a delivery strategy tailored to your goals.
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

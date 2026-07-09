import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug, relatedServices } from "../insights-data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found | Global Engineering Agency",
      description: "The requested insight article could not be found.",
    };
  }

  return {
    title: `${article.title} | Global Engineering Agency`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#1F2937]">
      <section className="relative mt-[152px] overflow-hidden bg-[#1F2937] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#10367D]/95 via-[#1F2937]/90 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1F2937]/95 via-transparent to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "120px 100%" }} />

        <div className="relative z-20 mx-auto flex min-h-[560px] w-full max-w-[1440px] items-end px-8 py-20 lg:px-16 lg:py-24">
          <div className="max-w-[920px]">
            <p className="mb-6 inline-flex items-center gap-3 text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]">
              <span className="h-px w-7 bg-[#C8A45D]" />
              {article.category}
            </p>
            <h1 className="text-[34px] font-[700] leading-[1.08] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[62px]" style={{ fontFamily: "Manrope, sans-serif" }}>
              {article.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-[13px] text-white/80">
              <span>By {article.author}</span>
              <span className="h-1 w-1 rounded-full bg-white/45" />
              <span>{article.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/45" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-8 py-20 lg:px-16 lg:py-24">
        <nav className="mb-10 text-[13px] text-[#1F2937]/55" aria-label="Breadcrumb">
          <Link href="/insights" className="transition-colors duration-200 hover:text-[#10367D]">
            Insights
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1F2937]">{article.category}</span>
        </nav>

        <article className="grid gap-12 lg:grid-cols-[1.75fr_0.95fr]">
          <div>
            <p className="text-[15px] leading-[1.9] text-[#1F2937]/75">{article.content[0]}</p>
            <p className="mt-6 text-[15px] leading-[1.9] text-[#1F2937]/75">{article.content[1]}</p>
            {article.pullQuote ? (
              <blockquote className="mt-10 border-l-2 border-[#C8A45D] pl-6 text-[24px] font-[500] leading-[1.45] tracking-[-0.02em] text-[#1F2937]" style={{ fontFamily: "Manrope, sans-serif" }}>
                “{article.pullQuote}”
              </blockquote>
            ) : null}
            {article.content[2] ? <p className="mt-10 text-[15px] leading-[1.9] text-[#1F2937]/75">{article.content[2]}</p> : null}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-[#E6E6E6] bg-white p-7 shadow-sm">
              <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">In This Article</p>
              <ul className="mt-5 space-y-3 text-[14px] text-[#1F2937]/70">
                {article.content.slice(0, 3).map((paragraph) => (
                  <li key={paragraph.slice(0, 20)} className="flex items-start gap-3">
                    <span className="mt-[9px] h-px w-6 shrink-0 bg-[#C8A45D]" />
                    <span>{paragraph.slice(0, 80)}...</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#E6E6E6] bg-[#FAFAFA] p-7">
              <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">Related Services</p>
              <ul className="mt-5 space-y-3">
                {relatedServices.slice(0, 4).map((service) => (
                  <li key={service.label}>
                    <Link href={service.href} className="group flex items-center justify-between text-[14px] text-[#1F2937]/80 transition-colors duration-200 hover:text-[#10367D]">
                      <span>{service.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </article>

        {article.gallery && article.gallery.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {article.gallery.map((image, index) => (
              <img key={image} src={image} alt={`${article.title} gallery ${index + 1}`} className="h-[280px] w-full rounded-[24px] object-cover" />
            ))}
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 lg:px-16 lg:pb-24">
        <div className="border-t border-[#E6E6E6] pt-16">
          <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-[600] uppercase tracking-[0.24em] text-[#C8A45D]">
            <span className="h-px w-7 bg-[#C8A45D]" />
            Related Insights
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedArticles.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="group overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(16,54,125,0.35)]">
                <img src={item.image} alt={item.imageAlt} className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="p-6">
                  <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">{item.category}</p>
                  <h3 className="mt-3 text-[20px] font-[600] leading-[1.2] tracking-[-0.02em] text-[#1F2937]" style={{ fontFamily: "Manrope, sans-serif" }}>{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#1F2937]/70">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
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

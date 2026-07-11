import { cld } from '@/lib/cloudinary';

export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string[];
  pullQuote?: string;
  gallery?: string[];
};

export const categories = [
  "All",
  "Architecture",
  "Construction",
  "Engineering",
  "Interior Design",
  "Building Solutions",
  "Real Estate",
  "Project Management",
  "Industry News",
];

export const featuredArticle: InsightArticle = {
  slug: "how-to-plan-a-commercial-building",
  category: "Project Management",
  title: "How to Plan a Commercial Building With Clarity and Control",
  excerpt:
    "A practical guide to aligning stakeholders, design intent, and delivery milestones from the earliest concept stage.",
  author: "Mina Clarke",
  date: "May 14, 2026",
  readTime: "8 min read",
  image: cld('insights-how-to-plan-a-commercial-building', { w: 1600 }),
  imageAlt: "Contemporary commercial building under development",
  content: [
    "Commercial projects succeed when the planning phase is structured around clear decision-making, realistic sequencing, and a shared understanding of value. In practice, that means translating ambition into a practical roadmap that controls cost, mitigates risk, and protects design intent.",
    "From the first briefing meeting, the right delivery partner should help define the project narrative: what success looks like, which constraints matter most, and how information will move between consultants, contractors, and operators.",
    "A disciplined planning process creates confidence long before construction starts. It clarifies approvals, procurement timing, and the milestones that shape the wider delivery journey."
  ],
  pullQuote:
    "The strongest buildings are not created by speed alone, but by disciplined planning that leaves room for quality.",
  gallery: [
    cld('insights-how-to-plan-a-commercial-building-gallery-1', { w: 1200 }),
    cld('insights-how-to-plan-a-commercial-building-gallery-2', { w: 1200 }),
  ],
};

export const articles: InsightArticle[] = [
  featuredArticle,
  {
    slug: "benefits-of-solar-energy",
    category: "Building Solutions",
    title: "The Benefits of Solar Energy for Modern Developments",
    excerpt:
      "Sustainability is no longer an afterthought; it is becoming an architectural and financial advantage.",
    author: "Darren Solis",
    date: "May 02, 2026",
    readTime: "6 min read",
    image: cld('insights-benefits-of-solar-energy', { w: 1200 }),
    imageAlt: "Solar panels on a contemporary building roof",
    content: [
      "Integrating solar energy into a development can improve both performance and long-term value. For commercial and residential projects alike, solar can reduce operational costs while supporting a healthier environmental profile.",
      "The most successful implementations begin early in design, where roof orientation, building massing, and energy demand can be considered together."
    ],
  },
  {
    slug: "modern-interior-design-trends",
    category: "Interior Design",
    title: "Modern Interior Design Trends That Feel Timeless",
    excerpt:
      "A closer look at material choices, spatial flow, and lighting strategies that continue to resonate beyond passing trends.",
    author: "Lina Haddad",
    date: "April 23, 2026",
    readTime: "5 min read",
    image: cld('insights-modern-interior-design-trends', { w: 1200 }),
    imageAlt: "Luxury interior with warm lighting and minimalist styling",
    content: [
      "The most enduring interior spaces balance texture, proportion, and practical comfort. Materials such as stone, oak, and brushed metal continue to perform beautifully because they age gracefully and support layered lighting strategies.",
      "Designers are increasingly using flexibility as a core principle, creating rooms that can adapt to work, leisure, and hospitality without losing character."
    ],
  },
  {
    slug: "property-investment-guide",
    category: "Real Estate",
    title: "A Practical Property Investment Guide for 2026",
    excerpt:
      "From demand forecasting to lifestyle positioning, the smartest acquisitions are driven by more than surface appeal.",
    author: "Elliot Brooks",
    date: "April 10, 2026",
    readTime: "7 min read",
    image: cld('insights-property-investment-guide', { w: 1200 }),
    imageAlt: "Contemporary residential property in an urban setting",
    content: [
      "Property investment decisions are increasingly shaped by a mix of macroeconomic awareness and micro-level design quality. Buyers and investors today are looking for places that perform functionally, socially, and commercially.",
      "The most resilient developments are those that combine connectivity, thoughtful amenities, and a clear identity."
    ],
  },
  {
    slug: "engineering-innovation-trends",
    category: "Engineering",
    title: "Engineering Innovation Trends Reshaping Complex Builds",
    excerpt:
      "Advanced materials, digital coordination, and precision logistics are changing how major projects are delivered.",
    author: "Rafael Torres",
    date: "March 29, 2026",
    readTime: "6 min read",
    image: cld('insights-engineering-innovation-trends', { w: 1200 }),
    imageAlt: "Engineering team reviewing a digital model",
    content: [
      "Innovation in engineering is rarely about novelty alone. It is about creating dependable performance at scale, whether that means stronger structural systems, more accurate coordination, or faster procurement cycles.",
      "The best firms use technology as an enabler of collaboration rather than as an isolated tool."
    ],
  },
  {
    slug: "future-of-architectural-design",
    category: "Architecture",
    title: "The Future of Architectural Design in a Changing Climate",
    excerpt:
      "Designing for performance, adaptability, and longevity requires a stronger link between climate awareness and place-making.",
    author: "Sarah Imani",
    date: "March 16, 2026",
    readTime: "9 min read",
    image: cld('insights-future-of-architectural-design', { w: 1200 }),
    imageAlt: "Modern architectural facade with sustainable design elements",
    content: [
      "Architecture today must do more than create form. It must support resilience, comfort, and long-term relevance in the face of environmental and social change.",
      "From passive solar strategies to careful facade design, the most successful projects are shaped by the realities of their climate and context."
    ],
  },
];

export const topics = [
  "Building Regulations",
  "Construction Tips",
  "Architectural Design",
  "Sustainable Construction",
  "Property Investment",
  "Interior Trends",
  "HVAC Systems",
  "Solar Energy",
  "Fire Protection",
  "Engineering Innovation",
];

export const relatedServices = [
  { label: "Architecture Drawings", href: "/services/architecture-drawings" },
  { label: "General Contracting", href: "/services" },
  { label: "Project Management", href: "/services" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Building Solutions", href: "/solutions" },
  { label: "Real Estate", href: "/about" },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

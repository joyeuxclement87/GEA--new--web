import { cld } from "@/lib/cloudinary";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Hospitality"
  | "Industrial"
  | "Government"
  | "Infrastructure"
  | "Interior Design"
  | "Renovation";

export type ProjectItem = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  industry: string;
  completionYear: string;
  services: string[];
  summary: string;
  description: string;
  image: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  scopeOfWork: string[];
  challenges: string[];
  solutions: string[];
  keywords: string[];
  testimonial: {
    quote: string;
    name: string;
    company: string;
    projectType: string;
    profileImage: string;
  };
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Industrial",
  "Government",
  "Infrastructure",
  "Interior Design",
  "Renovation",
];

export const projects: ProjectItem[] = [
  {
    slug: "kigali-residential-villas",
    title: "Kigali Residential Villas",
    location: "Kigali, Rwanda",
    category: "Residential",
    industry: "Luxury Housing",
    completionYear: "2025",
    services: [
      "Architecture Drawings",
      "Interior Design",
      "General Contracting",
      "Project Management",
    ],
    summary:
      "A gated community of contemporary villas designed for long-term value, climate comfort, and refined urban living.",
    description:
      "Global Engineering Agency delivered a complete design-and-build program for a multi-villa community in Kigali. The project combined architectural precision, coordinated engineering systems, and premium interior execution to create homes that feel calm, efficient, and durable.",
    image: cld('projects-kigali-residential-villas-cover', { w: 1800 }),
    heroImage: cld('projects-kigali-residential-villas-hero', { w: 2200 }),
    gallery: [
      cld('projects-kigali-residential-villas-gallery-1', { w: 1400 }),
      cld('projects-kigali-residential-villas-gallery-2', { w: 1400 }),
      cld('projects-kigali-residential-villas-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "24 private villas delivered across two phases",
      "Energy-efficient HVAC and water systems integrated from concept stage",
      "98% buyer satisfaction at handover",
    ],
    scopeOfWork: [
      "Architectural concept through construction documentation",
      "Full MEP coordination and site supervision",
      "Interior specification, fit-out, and final quality assurance",
    ],
    challenges: [
      "Balancing premium finishes with strict delivery milestones",
      "Managing utility integration across a phased development",
    ],
    solutions: [
      "Phased procurement plan with verified supplier framework",
      "Integrated project control dashboard for site and design teams",
    ],
    keywords: [
      "kigali villas",
      "residential construction rwanda",
      "luxury housing project",
      "architecture and interior design",
    ],
    testimonial: {
      quote:
        "GEA translated our residential vision into a community that feels elegant, practical, and future-ready. Their integrated delivery gave us complete confidence.",
      name: "Aline Mukamana",
      company: "Virunga Homes",
      projectType: "Residential Development",
      profileImage: cld('testimonials-aline-mukamana', { w: 900 }),
    },
  },
  {
    slug: "commercial-office-complex",
    title: "Commercial Office Complex",
    location: "Nairobi, Kenya",
    category: "Commercial",
    industry: "Corporate Real Estate",
    completionYear: "2024",
    services: [
      "Architecture Drawings",
      "HVAC Systems",
      "Fire Protection",
      "Project Management",
    ],
    summary:
      "A high-performance office campus with flexible floorplates, efficient cores, and robust life-safety systems.",
    description:
      "This mixed-tenant commercial complex was designed to support evolving workplace needs while maintaining operational efficiency. GEA coordinated architecture, MEP, and fire systems to reduce long-term operational risk and deliver a polished tenant experience.",
    image: cld('projects-commercial-office-complex-cover', { w: 1800 }),
    heroImage: cld('projects-commercial-office-complex-hero', { w: 2200 }),
    gallery: [
      cld('projects-commercial-office-complex-gallery-1', { w: 1400 }),
      cld('projects-commercial-office-complex-gallery-2', { w: 1400 }),
      cld('projects-commercial-office-complex-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "42,000 sqm office development completed",
      "Class A HVAC performance with reduced energy consumption",
      "Tenant-ready handover with phased occupancy planning",
    ],
    scopeOfWork: [
      "Design development and technical coordination",
      "MEP and fire protection implementation",
      "Construction sequencing and quality control",
    ],
    challenges: [
      "Coordinating multiple anchor tenants during fit-out",
      "Maintaining strict fire and occupancy compliance timelines",
    ],
    solutions: [
      "Two-track handover strategy for phased tenancy",
      "Dedicated compliance team for approvals and inspections",
    ],
    keywords: [
      "commercial office project",
      "corporate construction east africa",
      "office complex engineering",
      "MEP and fire protection",
    ],
    testimonial: {
      quote:
        "The project management discipline from GEA kept every stakeholder aligned. Delivery quality and speed exceeded our expectations.",
      name: "Daniel Otieno",
      company: "Apex Workspace Holdings",
      projectType: "Commercial Complex",
      profileImage: cld('testimonials-daniel-otieno', { w: 900 }),
    },
  },
  {
    slug: "luxury-apartment-development",
    title: "Luxury Apartment Development",
    location: "Kampala, Uganda",
    category: "Hospitality",
    industry: "Mixed Residential Hospitality",
    completionYear: "2026",
    services: [
      "Architecture Drawings",
      "General Contracting",
      "Interior Design",
      "Security Systems",
    ],
    summary:
      "A premium apartment tower with hospitality-grade amenities and high-end interior detailing.",
    description:
      "GEA led full project delivery for a branded apartment concept combining private residences with serviced-living standards. The result is a development that performs operationally while maintaining a distinct premium identity.",
    image: cld('projects-luxury-apartment-development-cover', { w: 1800 }),
    heroImage: cld('projects-luxury-apartment-development-hero', { w: 2200 }),
    gallery: [
      cld('projects-luxury-apartment-development-gallery-1', { w: 1400 }),
      cld('projects-luxury-apartment-development-gallery-2', { w: 1400 }),
      cld('projects-luxury-apartment-development-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "32 floors with integrated amenities and concierge areas",
      "Bespoke interior palettes for premium unit tiers",
      "Security and access control integrated by design",
    ],
    scopeOfWork: [
      "Architectural and interior concept development",
      "Construction management and supplier coordination",
      "Commissioning of vertical transportation and security systems",
    ],
    challenges: [
      "Tight city-center logistics and constrained site footprint",
      "Maintaining premium finish quality during accelerated schedule",
    ],
    solutions: [
      "Off-site prefabrication for repeatable components",
      "Layered QA checkpoints tied to handover milestones",
    ],
    keywords: [
      "luxury apartment development",
      "hospitality design",
      "premium residential tower",
      "interior fit-out project",
    ],
    testimonial: {
      quote:
        "GEA balanced architectural elegance and execution rigor. Their team protected quality from concept to final handover.",
      name: "Grace Namusoke",
      company: "Pearl Urban Developments",
      projectType: "Luxury Apartments",
      profileImage: cld('testimonials-grace-namusoke', { w: 900 }),
    },
  },
  {
    slug: "hospital-renovation",
    title: "Regional Hospital Renovation",
    location: "Musanze, Rwanda",
    category: "Renovation",
    industry: "Healthcare",
    completionYear: "2023",
    services: [
      "Project Consultation",
      "General Contracting",
      "HVAC Systems",
      "Fire Protection",
    ],
    summary:
      "A phased hospital modernization that improved patient flow, safety standards, and mechanical reliability.",
    description:
      "GEA executed a live-facility renovation program for a regional hospital, carefully sequencing works to avoid service interruptions. The project upgraded critical care zones, circulation, and building systems while maintaining operational continuity.",
    image: cld('projects-hospital-renovation-cover', { w: 1800 }),
    heroImage: cld('projects-hospital-renovation-hero', { w: 2200 }),
    gallery: [
      cld('projects-hospital-renovation-gallery-1', { w: 1400 }),
      cld('projects-hospital-renovation-gallery-2', { w: 1400 }),
      cld('projects-hospital-renovation-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "Renovation completed with no full ward shutdown",
      "Critical systems upgraded to modern compliance standards",
      "Improved circulation for patients and medical staff",
    ],
    scopeOfWork: [
      "Condition assessment and phased renovation planning",
      "Mechanical and fire system replacement",
      "Interior refurbishment and circulation upgrades",
    ],
    challenges: [
      "Maintaining uninterrupted healthcare operations",
      "Working within strict infection-control protocols",
    ],
    solutions: [
      "Night and weekend high-impact work windows",
      "Isolated construction zones with controlled access",
    ],
    keywords: [
      "hospital renovation",
      "healthcare construction",
      "phased refurbishment project",
      "fire and HVAC upgrade",
    ],
    testimonial: {
      quote:
        "Their phased approach protected patient operations while delivering a clear improvement in facility performance and safety.",
      name: "Dr. Jean Bosco Uwimana",
      company: "Northern Regional Health Board",
      projectType: "Healthcare Renovation",
      profileImage: cld('testimonials-jean-bosco-uwimana', { w: 900 }),
    },
  },
  {
    slug: "logistics-industrial-park",
    title: "Logistics Industrial Park",
    location: "Dar es Salaam, Tanzania",
    category: "Industrial",
    industry: "Supply Chain",
    completionYear: "2024",
    services: [
      "General Contracting",
      "Project Management",
      "Security Systems",
      "Solar Energy Solutions",
    ],
    summary:
      "A resilient logistics campus with warehousing, yard infrastructure, and energy-efficient support systems.",
    description:
      "This industrial park required robust planning for heavy movement, safety, and utility demands. GEA coordinated construction and systems integration to deliver a scalable logistics environment ready for regional operations.",
    image: cld('projects-logistics-industrial-park-cover', { w: 1800 }),
    heroImage: cld('projects-logistics-industrial-park-hero', { w: 2200 }),
    gallery: [
      cld('projects-logistics-industrial-park-gallery-1', { w: 1400 }),
      cld('projects-logistics-industrial-park-gallery-2', { w: 1400 }),
      cld('projects-logistics-industrial-park-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "75,000 sqm operational area",
      "Integrated perimeter security and access control",
      "Solar support systems reducing operational cost",
    ],
    scopeOfWork: [
      "Industrial site planning and core infrastructure",
      "Warehousing shell-and-core construction",
      "Energy and security systems implementation",
    ],
    challenges: [
      "Heavy-load pavement requirements under tight timeline",
      "Complex coordination between logistics operators",
    ],
    solutions: [
      "Parallel workstreams with package-based scheduling",
      "Data-led sequencing for utilities and access control",
    ],
    keywords: [
      "industrial park construction",
      "logistics warehouse project",
      "security systems industrial",
      "solar industrial infrastructure",
    ],
    testimonial: {
      quote:
        "GEA delivered an industrial environment that is both operationally robust and expansion-ready. Execution quality was consistent from start to finish.",
      name: "Ibrahim Mussa",
      company: "Coastal Freight Developments",
      projectType: "Industrial Infrastructure",
      profileImage: cld('testimonials-ibrahim-mussa', { w: 900 }),
    },
  },
  {
    slug: "civic-administration-center",
    title: "Civic Administration Center",
    location: "Kigali, Rwanda",
    category: "Government",
    industry: "Public Sector",
    completionYear: "2022",
    services: [
      "Architecture Drawings",
      "Project Management",
      "Fire Protection",
      "Security Systems",
    ],
    summary:
      "A public-facing government facility designed for transparency, accessibility, and operational efficiency.",
    description:
      "GEA partnered with public stakeholders to design and deliver a modern administration center that balances civic identity with practical daily use. The project emphasized accessibility, security, and durable public-space materials.",
    image: cld('projects-civic-administration-center-cover', { w: 1800 }),
    heroImage: cld('projects-civic-administration-center-hero', { w: 2200 }),
    gallery: [
      cld('projects-civic-administration-center-gallery-1', { w: 1400 }),
      cld('projects-civic-administration-center-gallery-2', { w: 1400 }),
      cld('projects-civic-administration-center-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "Universal accessibility integrated across all floors",
      "High-capacity public service counters and waiting zones",
      "Security and egress systems aligned with national standards",
    ],
    scopeOfWork: [
      "Public building design and technical documentation",
      "Construction supervision and authority coordination",
      "Life-safety and access-control integration",
    ],
    challenges: [
      "Complex stakeholder approvals and compliance reviews",
      "Need for durable high-traffic public interiors",
    ],
    solutions: [
      "Early regulatory engagement with staged submissions",
      "Material strategy focused on lifecycle performance",
    ],
    keywords: [
      "government building project",
      "civic center architecture",
      "public sector construction",
      "accessibility building design",
    ],
    testimonial: {
      quote:
        "The center now serves citizens more efficiently while projecting the professionalism we wanted from the beginning.",
      name: "Patrick Nkurunziza",
      company: "Rwanda Civic Infrastructure Unit",
      projectType: "Government Facility",
      profileImage: cld('testimonials-patrick-nkurunziza', { w: 900 }),
    },
  },
  {
    slug: "airport-terminal-infrastructure-upgrade",
    title: "Airport Terminal Infrastructure Upgrade",
    location: "Kigali, Rwanda",
    category: "Infrastructure",
    industry: "Transport",
    completionYear: "2025",
    services: [
      "Project Consultation",
      "General Contracting",
      "HVAC Systems",
      "Fire Protection",
    ],
    summary:
      "Terminal-side infrastructure upgrade focused on passenger flow, comfort systems, and operational resilience.",
    description:
      "For this transport infrastructure assignment, GEA delivered phased upgrades across key terminal zones. Work was carefully sequenced around continuous airport operations, with strict safety and compliance controls throughout.",
    image: cld('projects-airport-terminal-infrastructure-upgrade-cover', { w: 1800 }),
    heroImage: cld('projects-airport-terminal-infrastructure-upgrade-hero', { w: 2200 }),
    gallery: [
      cld('projects-airport-terminal-infrastructure-upgrade-gallery-1', { w: 1400 }),
      cld('projects-airport-terminal-infrastructure-upgrade-gallery-2', { w: 1400 }),
      cld('projects-airport-terminal-infrastructure-upgrade-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "Upgrades delivered without terminal shutdown",
      "Improved HVAC performance in high-density areas",
      "Safety systems modernized to current code requirements",
    ],
    scopeOfWork: [
      "Terminal infrastructure diagnostics and design support",
      "Mechanical and fire-protection system modernization",
      "Live-environment construction management",
    ],
    challenges: [
      "Strict operational windows in an active airport",
      "Complex coordination with security and aviation teams",
    ],
    solutions: [
      "Nighttime construction windows and silent-work protocols",
      "Daily coordination matrix across all airport stakeholders",
    ],
    keywords: [
      "airport infrastructure upgrade",
      "transport construction project",
      "terminal HVAC project",
      "live-environment construction",
    ],
    testimonial: {
      quote:
        "GEA handled a complex live-operational environment with exceptional discipline and clarity. The result is measurable and immediate.",
      name: "Claire Uwase",
      company: "Aviation Facilities Authority",
      projectType: "Infrastructure Upgrade",
      profileImage: cld('testimonials-claire-uwase', { w: 900 }),
    },
  },

  {
    slug: "executive-workplace-interiors",
    title: "Executive Workplace Interiors",
    location: "Dubai, UAE",
    category: "Interior Design",
    industry: "Corporate Interiors",
    completionYear: "2026",
    services: [
      "Interior Design",
      "Architecture Drawings",
      "Project Management",
      "HVAC Systems",
    ],
    summary:
      "A contemporary workplace interior program delivering premium executive suites and collaborative zones.",
    description:
      "GEA developed and delivered a full interior transformation for a multi-floor executive workplace. The design strategy emphasized acoustic comfort, material quality, and a spatial identity aligned with the client brand.",
    image: cld('projects-executive-workplace-interiors-cover', { w: 1800 }),
    heroImage: cld('projects-executive-workplace-interiors-hero', { w: 2200 }),
    gallery: [
      cld('projects-executive-workplace-interiors-gallery-1', { w: 1400 }),
      cld('projects-executive-workplace-interiors-gallery-2', { w: 1400 }),
      cld('projects-executive-workplace-interiors-gallery-3', { w: 1400 }),
    ],
    highlights: [
      "Complete interior fit-out across six executive floors",
      "Improved acoustic performance and thermal comfort",
      "Brand-aligned material and lighting strategy",
    ],
    scopeOfWork: [
      "Interior concept and spatial planning",
      "Technical documentation and construction detailing",
      "Fit-out supervision and vendor coordination",
    ],
    challenges: [
      "Aggressive fit-out schedule in occupied building",
      "Balancing executive privacy with collaborative zones",
    ],
    solutions: [
      "Phased floor-by-floor rollout with weekend transitions",
      "Acoustic zoning and modular partition strategies",
    ],
    keywords: [
      "executive office interior",
      "corporate fit-out",
      "workplace design",
      "premium interior project",
    ],
    testimonial: {
      quote:
        "The transformation feels both sophisticated and highly functional. GEA managed detail, quality, and timeline with precision.",
      name: "Nadia Al Mansoori",
      company: "Al Noor Capital",
      projectType: "Corporate Interior Design",
      profileImage: cld('testimonials-nadia-al-mansoori', { w: 900 }),
    },
  },
];

export const expertiseLinks = [
  { label: "Architecture Drawings", href: "/services/architecture-drawings" },
  { label: "General Contracting", href: "/services#general-contracting" },
  { label: "Project Management", href: "/services#project-management" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "HVAC Systems", href: "/services/hvac-systems" },
  { label: "Fire Protection", href: "/services#fire-protection" },
  { label: "Real Estate", href: "/services#real-estate-services" },
];

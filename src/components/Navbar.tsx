"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bath,
  ChevronDown,
  Clock,
  Cpu,
  Droplets,
  Flame,
  Layers,
  Menu,
  MessageCircle,
  Paintbrush,
  Phone,
  Search,
  Shield,
  Sun,
  Thermometer,
  Waves,
  Wind,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const expertiseColumns = [
      {
        heading: "Design & Documentation",
        items: [
          {
            label: "Architecture Drawings",
            href: "/services/architecture-drawings",
          },
          { label: "Interior Design", href: "/services/interior-design" },
          { label: "Exterior Design", href: "/services/exterior-design" },
          { label: "Landscaping", href: "/services#landscaping" },
        ],
      },
  {
    heading: "Construction & Planning",
    items: [
      { label: "General Contracting", href: "/services#general-contracting" },
      { label: "Project Management", href: "/services#project-management" },
      { label: "BOQ & Cost Estimation", href: "/services#boq-cost-estimation" },
      { label: "Project Consultation", href: "/services#project-consultation" },
    ],
  },
  {
    heading: "Engineering Systems",
    items: [
      { label: "Mechanical, Electrical & Plumbing", href: "/services#mep" },
      { label: "Fire Protection Systems", href: "/services#fire-protection" },
      { label: "Security Systems", href: "/services#security-systems" },
      { label: "HVAC Systems", href: "/services#hvac" },
      { label: "Solar Energy Solutions", href: "/services#solar-energy" },
    ],
  },
  {
    heading: "Property & Investment",
    items: [
      { label: "Real Estate Services", href: "/services#real-estate-services" },
      {
        label: "Property Refurbishment",
        href: "/services#property-refurbishment",
      },
      { label: "Property Demolition", href: "/services#property-demolition" },
    ],
  },
];

const productCategories = [
  {
    label: "Bathroom & Sanitary",
    desc: "Fixtures & sanitary ware",
    icon: Bath,
  },
  {
    label: "Tiles & Flooring",
    desc: "Ceramic, porcelain & stone",
    icon: Layers,
  },
  { label: "Electrical", desc: "Wiring, switches & panels", icon: Zap },
  { label: "Plumbing", desc: "Pipes, fittings & valves", icon: Droplets },
  { label: "HVAC", desc: "Cooling & ventilation systems", icon: Wind },
  { label: "Security Systems", desc: "CCTV & access control", icon: Shield },
  {
    label: "Solar Solutions",
    desc: "Panels, inverters & batteries",
    icon: Sun,
  },
  { label: "Water Pumps", desc: "Submersible & pressure pumps", icon: Waves },
  {
    label: "Water Heaters",
    desc: "Solar & electric heaters",
    icon: Thermometer,
  },
  { label: "Doors & Windows", desc: "Aluminium, uPVC & wood", icon: Cpu },
  {
    label: "Paint & Finishes",
    desc: "Interior & exterior coatings",
    icon: Paintbrush,
  },
  { label: "Fire Protection", desc: "Suppression & detection", icon: Flame },
];

const recentSearches = [
  "Architecture Design",
  "Solar Panels",
  "Interior Design",
];
const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Materials", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "News", href: "/insights" },
  { label: "Get a Quote", href: "/quote" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/services", mega: "expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Solutions", href: "/products", mega: "solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

type MegaKey = "expertise" | "solutions" | null;

// ─── Logo ─────────────────────────────────────────────────────────────────────

function GEALogo() {
  return (
    <div className="flex flex-col gap-1">
      <img
        src="/logos/GEA-logo.png"
        alt="Global Engineering Agency"
        width={150}
        height={48}
        className="h-12 w-auto object-contain transition-all duration-300"
      />
    </div>
  );
}

// ─── Expertise Mega Menu Panel ────────────────────────────────────────────────

function ExpertisePanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="w-full rounded-2xl border border-[#E6E6E6] bg-white overflow-hidden"
      style={{ boxShadow: "0 24px 64px -12px rgba(16,54,125,0.13)" }}
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_300px]">
        <div className="col-span-4 grid grid-cols-4 p-8 pb-6 gap-0">
          {expertiseColumns.map((col) => (
            <div key={col.heading} className="pr-8">
              <p
                className="mb-4 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#10367D]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group/item flex items-center gap-2 text-[13.5px] text-[#1F2937]/65 transition-all duration-200 hover:text-[#C8A45D] hover:translate-x-0.5"
                    >
                      <span className="h-px w-3 bg-current opacity-30 transition-all duration-200 group-hover/item:w-4 group-hover/item:opacity-70 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-l border-[#E6E6E6] flex flex-col">
          <div className="relative h-44 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=560&q=80"
              alt="Featured architectural project"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10367D]/60 to-transparent" />
            <span className="absolute bottom-3 left-4 text-[10px] font-[500] uppercase tracking-[0.14em] text-white/70">
              Featured Project
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-between p-4">
            <div>
              <p
                className="text-[13px] font-[600] text-[#1F2937] leading-snug"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Horizon Tower
                <br />
                Development
              </p>
              <p className="mt-1.5 text-[11.5px] text-[#1F2937]/50 leading-relaxed">
                Mixed-use high-rise with integrated structural engineering.
              </p>
            </div>
            <Link
              href="/projects"
              onClick={onClose}
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-[500] text-[#C8A45D] transition-all duration-200 hover:gap-3 group/feat"
            >
              View Project
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/feat:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E6E6E6] bg-[#F8F8F8] px-8 py-3 flex items-center justify-between">
        <p className="text-[11px] text-[#1F2937]/40 tracking-[0.04em]">
          150+ completed projects across 12 countries
        </p>
        <Link
          href="/services"
          onClick={onClose}
          className="text-[11px] font-[500] text-[#10367D] hover:text-[#C8A45D] transition-colors duration-200"
        >
          View all services →
        </Link>
      </div>
    </div>
  );
}

// ─── Products Mega Menu Panel ─────────────────────────────────────────────────

function ProductsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="flex-1 min-w-0 rounded-2xl border border-[#E6E6E6] bg-white overflow-hidden"
      style={{ boxShadow: "0 24px 64px -12px rgba(16,54,125,0.13)" }}
    >
      <div className="grid grid-cols-[1fr_240px]">
        <div className="p-6 border-r border-[#E6E6E6]">
          <p
            className="mb-4 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#10367D]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Product Categories
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {productCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  href="/products"
                  onClick={onClose}
                  className="group/card flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-[#E6E6E6] hover:bg-[#F8F8F8] hover:-translate-y-0.5"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#10367D]/6 text-[#10367D] transition-colors duration-200 group-hover/card:bg-[#C8A45D]/12 group-hover/card:text-[#C8A45D]">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-[500] text-[#1F2937] leading-tight">
                      {cat.label}
                    </p>
                    <p className="mt-0.5 text-[10.5px] text-[#1F2937]/40 leading-snug">
                      {cat.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=480&q=80"
              alt="Premium Bathroom Collection"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/70 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-[#F8F8F8] p-5">
            <div>
              <span className="text-[9px] font-[600] uppercase tracking-[0.2em] text-[#C8A45D]">
                Featured Collection
              </span>
              <p
                className="mt-1.5 text-[13px] font-[600] text-[#1F2937] leading-snug"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Premium Bathroom
                <br />
                Collection 2026
              </p>
              <p className="mt-1.5 text-[11px] text-[#1F2937]/50 leading-relaxed">
                Curated sanitary ware & fixtures for luxury interiors.
              </p>
            </div>
            <Link
              href="/products"
              onClick={onClose}
              className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-[500] text-[#10367D] transition-all duration-200 hover:gap-3 hover:text-[#C8A45D] group/coll"
            >
              Explore Collection
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/coll:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E6E6E6] bg-[#F8F8F8] px-6 py-3 flex items-center justify-between">
        <p className="text-[11px] text-[#1F2937]/40 tracking-[0.04em]">
          3,000+ building products from verified suppliers
        </p>
        <Link
          href="/products"
          onClick={onClose}
          className="text-[11px] font-[500] text-[#10367D] hover:text-[#C8A45D] transition-colors duration-200"
        >
          Browse all products →
        </Link>
      </div>
    </div>
  );
}

// ─── Search Overlay ───────────────────────────────────────────────────────────

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[100] bg-white/96 backdrop-blur-xl"
      aria-modal="true"
      role="dialog"
      aria-label="Search"
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 lg:px-16">
        <span className="text-[10px] font-[500] uppercase tracking-[0.22em] text-[#1F2937]/35">
          Search
        </span>
        <button
          onClick={onClose}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E6E6] text-[#1F2937]/50 transition-all duration-200 hover:border-[#10367D] hover:text-[#10367D]"
          aria-label="Close search"
        >
          <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
        </button>
      </div>

      <div className="mx-auto max-w-[720px] px-8 pt-10">
        <div className="relative">
          <Search
            className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1F2937]/25"
            strokeWidth={1.5}
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, products, projects…"
            className="w-full border-b-2 border-[#E6E6E6] bg-transparent py-4 pl-8 text-[22px] font-[300] text-[#1F2937] placeholder-[#1F2937]/20 outline-none transition-colors duration-200 focus:border-[#10367D]"
            style={{ fontFamily: "Manrope, sans-serif" }}
            aria-label="Search input"
          />
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="rounded-full border border-[#E6E6E6] px-4 py-2 text-[12px] font-[500] text-[#1F2937]/55 tracking-[0.04em] transition-all duration-200 hover:border-[#10367D] hover:bg-[#10367D] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <p className="mb-4 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#1F2937]/30">
            Recent Searches
          </p>
          <ul className="space-y-3">
            {recentSearches.map((term) => (
              <li key={term}>
                <button className="group flex w-full items-center gap-3 text-left">
                  <Clock
                    className="h-3.5 w-3.5 text-[#1F2937]/25 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-[14px] text-[#1F2937]/50 transition-colors group-hover:text-[#10367D]">
                    {term}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#1F2937]/30">
            Quick Links
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl border border-[#E6E6E6] px-4 py-3 transition-all duration-200 hover:border-[#10367D]/20 hover:bg-[#F8F8F8]"
              >
                <span className="text-[13px] font-[500] text-[#1F2937]/60 transition-colors group-hover:text-[#10367D]">
                  {link.label}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-[#1F2937]/20 transition-all group-hover:translate-x-0.5 group-hover:text-[#C8A45D]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed inset-0 z-[90] flex flex-col bg-white"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile navigation"
    >
      <div className="flex h-20 items-center justify-between border-b border-[#E6E6E6] px-6">
        <Link href="/" onClick={onClose} aria-label="Go to homepage">
          <GEALogo />
        </Link>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E6E6] text-[#1F2937]/55 transition-all duration-200 hover:border-[#10367D] hover:text-[#10367D]"
          aria-label="Close mobile menu"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <nav
        className="flex-1 overflow-y-auto px-6 py-4"
        aria-label="Mobile navigation links"
      >
        <ul className="space-y-0">
          {mainLinks.map((link) => {
            const hasMega = "mega" in link && link.mega;
            if (hasMega) {
              const megaKey = (link as any).mega as string;
              const isOpen = openSection === megaKey;
              return (
                <li key={link.label}>
                  <div className="flex w-full items-center justify-between py-4 border-b border-[#E6E6E6]/60">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex-1"
                    >
                      <span
                        className="text-[21px] font-[300] text-[#1F2937] tracking-[-0.01em]"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {link.label}
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setOpenSection(isOpen ? null : megaKey)}
                      className="ml-3 flex items-center justify-center p-2"
                      aria-expanded={isOpen}
                      aria-controls={megaKey}
                      aria-label={isOpen ? `Collapse ${link.label}` : `Expand ${link.label}`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 text-[#1F2937]/35 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={megaKey}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="py-3 pl-2 space-y-1">
                          {megaKey === "expertise" &&
                            expertiseColumns.map((col) => (
                              <div key={col.heading} className="mb-4">
                                <p className="mb-2 text-[10px] font-[600] uppercase tracking-[0.18em] text-[#10367D]">
                                  {col.heading}
                                </p>
                                {col.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={onClose}
                                    className="block py-2 text-[14px] text-[#1F2937]/60 hover:text-[#C8A45D] transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          {megaKey === "solutions" &&
                            productCategories.map((cat) => (
                              <Link
                                key={cat.label}
                                href="/products"
                                onClick={onClose}
                                className="flex items-center gap-2.5 py-2 text-[14px] text-[#1F2937]/60 hover:text-[#C8A45D] transition-colors"
                              >
                                <cat.icon
                                  className="h-3.5 w-3.5 shrink-0 opacity-50"
                                  strokeWidth={1.5}
                                />
                                {cat.label}
                              </Link>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex w-full items-center justify-between py-4 border-b border-[#E6E6E6]/60"
                >
                  <span
                    className="text-[21px] font-[300] text-[#1F2937] tracking-[-0.01em]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-[#E6E6E6] px-6 py-6 space-y-3">
        <Link
          href="/quote"
          onClick={onClose}
          className="flex items-center justify-center gap-2 rounded-full bg-[#10367D] px-6 py-4 text-[14px] font-[500] text-white tracking-[0.02em] transition-all duration-300 hover:bg-[#C8A45D] hover:text-[#1F2937]"
        >
          Get a Quote
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center gap-2 rounded-full border border-[#E6E6E6] px-4 py-3.5 text-[13px] font-[500] text-[#1F2937]/65 transition-colors hover:border-[#10367D] hover:text-[#10367D]"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            Call Now
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[#E6E6E6] px-4 py-3.5 text-[13px] font-[500] text-[#1F2937]/65 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
          >
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeMega, setActiveMega] = useState<MegaKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y < 60) {
        setVisible(true);
      } else if (y > lastScrollY.current + 4) {
        setVisible(false);
        setActiveMega(null);
      } else if (y < lastScrollY.current - 4) {
        setVisible(true);
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMega(null);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const openMega = useCallback((key: MegaKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(key);
  }, []);

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMega(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const navHeight = scrolled ? 96 : 120;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out translate-y-0"
        role="banner"
      >
        {/* Topbar: DESIGN • BUILD • SUPPLY • REAL ESTATE */}
        <div className="w-full bg-[#10367D] text-white py-2.5 px-8 lg:px-16 flex justify-center items-center border-b border-white/5 transition-all duration-300 z-50 relative">
          <span
            className="text-[9.5px] font-[500] tracking-[0.3em] uppercase text-white/90 select-none text-center"
            style={{ fontFamily: "Inter, sans-serif", wordSpacing: "0.15em" }}
          >
            DESIGN &bull; BUILD &bull; SUPPLY &bull; REAL ESTATE
          </span>
        </div>

        <div
          className={`transition-all duration-300 ease-out bg-white/95 backdrop-blur-[10px] border-b border-[#E6E6E6] ${
            scrolled ? "shadow-[0_1px_0_0_#E6E6E6]" : ""
          }`}
        >
          <nav
            className="mx-auto flex items-center justify-between px-8 lg:px-16"
            style={{
              maxWidth: "1440px",
              height: `${navHeight}px`,
              transition: "height 300ms cubic-bezier(0.4,0,0.2,1)",
            }}
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="shrink-0 z-10"
              aria-label="Global Engineering Agency – Home"
            >
              <GEALogo />
            </Link>

            <div className="hidden items-center gap-7 xl:flex" role="menubar">
              {mainLinks.map((link) => {
                const megaKey = ("mega" in link ? link.mega : undefined) as
                  MegaKey | undefined;
                const isMegaActive = megaKey ? activeMega === megaKey : false;
                const isRouteActive =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`) ||
                  (megaKey === "solutions" &&
                    pathname.startsWith("/real-estate"));
                const isActive = isMegaActive || isRouteActive;
                const textColor = "text-[#1F2937] hover:text-[#C8A45D]";

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() =>
                      megaKey ? openMega(megaKey) : undefined
                    }
                    onMouseLeave={() => (megaKey ? closeMega() : undefined)}
                  >
                    <Link
                      href={link.href}
                      className={`
                        relative flex items-center gap-0.5 py-1
                        font-sans text-[15px] font-[500] tracking-[0.02em]
                        transition-all duration-200
                        hover:-translate-y-px
                        nav-link-underline
                        ${textColor}
                        ${isActive ? "text-[#C8A45D] font-[600]" : ""}
                      `}
                      aria-haspopup={megaKey ? "true" : undefined}
                      aria-expanded={isActive ? "true" : undefined}
                    >
                      {link.label}
                      {megaKey && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 opacity-55 transition-transform duration-200 ${
                            isActive ? "rotate-180 opacity-80" : ""
                          }`}
                          strokeWidth={1.5}
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 z-10">
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden xl:flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 text-[#1F2937]/55 hover:bg-[#F8F8F8] hover:text-[#10367D]"
                aria-label="Open search (⌘K)"
                title="Search (⌘K)"
              >
                <Search className="h-[17px] w-[17px]" strokeWidth={1.5} />
              </button>

              <Link
                href="/quote"
                className="hidden xl:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13.5px] font-[500] tracking-[0.02em] transition-all duration-300 group/cta bg-[#10367D] text-white hover:bg-[#C8A45D] hover:text-[#1F2937]"
              >
                Get a Quote
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 xl:hidden border-[#E6E6E6] text-[#1F2937]/55 hover:border-[#10367D] hover:text-[#10367D]"
                aria-label="Open mobile menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>

        <AnimatePresence>
          {activeMega && (
            <motion.div
              key={activeMega}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 flex justify-center px-8 pt-2"
              onMouseEnter={cancelClose}
              onMouseLeave={closeMega}
              style={{ top: `${navHeight + 38}px` }}
            >
              <div
                className="w-full"
                style={{
                  maxWidth: "1440px",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <div className="flex w-full">
                  {activeMega === "expertise" && (
                    <ExpertisePanel onClose={() => setActiveMega(null)} />
                  )}
                  {activeMega === "solutions" && (
                    <ProductsPanel onClose={() => setActiveMega(null)} />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {activeMega && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]"
            onClick={() => setActiveMega(null)}
            style={{ top: `${navHeight + 38}px` }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

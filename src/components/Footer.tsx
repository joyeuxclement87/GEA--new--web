"use client";

import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerServices = [
  { label: "Architecture Drawings", href: "/services#architecture-drawings" },
  { label: "General Contracting", href: "/services#general-contracting" },
  { label: "Project Management", href: "/services#project-management" },
  { label: "Interior Design", href: "/services#interior-design" },
  { label: "HVAC Systems", href: "/services#hvac" },
  { label: "Solar Energy Solutions", href: "/services#solar-energy" },
];

const footerMaterials = [
  { label: "Tiles & Flooring", href: "/products" },
  { label: "Bathware", href: "/products" },
  { label: "Plumbing", href: "/products" },
  { label: "Hardware", href: "/products" },
  { label: "Paint & Finishes", href: "/products" },
];

const footerRealEstate = [
  { label: "Buy Property", href: "/real-estate" },
  { label: "Rent Property", href: "/real-estate" },
  { label: "Investment", href: "/real-estate" },
];

const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/insights" },
  { label: "Careers", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1118] text-white border-t border-white/[0.06]">
      {/* Newsletter strip */}
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-xl font-[700] text-white mb-1"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Stay in the loop
            </h3>
            <p
              className="text-[14px] font-[300] text-white/50"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Project updates, industry insights, and company news — delivered
              to your inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row w-full max-w-[460px] rounded-[12px] sm:rounded-[999px] bg-white/5 border border-white/10 overflow-hidden focus-within:border-[#C8A45D]/40 transition-colors">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-4 sm:px-6 py-3 sm:py-4 text-[13px] font-[300] text-white placeholder-white/30 outline-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              type="submit"
              className="bg-[#C8A45D] px-6 sm:px-8 py-3 sm:py-4 text-[13px] font-[600] text-[#1F2937] transition-all duration-300 hover:bg-white shrink-0 w-full sm:w-auto"
            >
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
            <h3
              className="text-[20px] font-[800] tracking-tight text-white mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              GEA
            </h3>
            <p
              className="text-[13px] leading-[1.85] font-[300] text-white/45 mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Global Engineering Agency delivers elite engineering,
              construction, and premium building materials for landmark projects
              worldwide.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                {
                  icon: (
                    <Linkedin className="h-[15px] w-[15px]" strokeWidth={1.5} />
                  ),
                },
                {
                  icon: (
                    <Instagram
                      className="h-[15px] w-[15px]"
                      strokeWidth={1.5}
                    />
                  ),
                },
                {
                  icon: (
                    <Facebook className="h-[15px] w-[15px]" strokeWidth={1.5} />
                  ),
                },
                {
                  icon: (
                    <svg
                      className="h-[15px] w-[15px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  icon: (
                    <svg
                      className="h-[15px] w-[15px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.43v-7.15a8.16 8.16 0 005.58 2.09V11.2a4.85 4.85 0 01-3.59-1.57 4.83 4.83 0 01-1.24-2.94h3.45V6.69z" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] text-white/40 hover:border-[#C8A45D] hover:text-[#C8A45D] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-7">
              Services
            </h4>
            <ul className="space-y-3.5">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials & Real Estate */}
          <div>
            <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-7">
              Materials
            </h4>
            <ul className="space-y-3.5 mb-9">
              {footerMaterials.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-5">
              Real Estate
            </h4>
            <ul className="space-y-3.5">
              {footerRealEstate.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-7">
              Company
            </h4>
            <ul className="space-y-3.5 mb-9">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-[300] text-white/55 hover:text-white transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[10px] font-[700] uppercase tracking-[0.22em] text-[#C8A45D] mb-5">
              Contact
            </h4>
            <ul
              className="space-y-3.5 text-[13px] font-[300] text-white/55"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li className="flex items-start gap-3">
                <MapPin
                  className="h-4 w-4 text-[#C8A45D] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span>
                  KG 33 Avenue Road, Gakiriro Road
                  <br />
                  Umukindo House, 2nd Floor Front Wing
                  <br />
                  <span className="text-[12px] text-white/30">
                    Kigali Gasabo, Rwanda
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 text-[#C8A45D] shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:fulluchris@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  fulluchris@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 text-[#C8A45D] shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="tel:+250788632620"
                  className="hover:text-white transition-colors"
                >
                  +250 788 632 620
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8 border-t border-white/[0.06] text-[12px] font-[300] text-white/30"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>
            © {new Date().getFullYear()} Global Engineering Agency. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

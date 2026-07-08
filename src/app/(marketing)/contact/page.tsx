'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle,
  Plus, Minus, CheckCircle, AlertCircle, X
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';

// ─── Animation helper ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactInfo = [
  {
    id: 'address',
    label: 'Office Address',
    value: 'KG 33 Avenue Road, Gakiriro Road\nUmukindo House, 2nd Floor Front Wing\nKigali Gasabo, Rwanda',
    action: { label: 'Open in Maps', href: 'https://maps.google.com/?q=Umukindo+House+Kigali+Rwanda' },
  },
  {
    id: 'phone',
    label: 'Phone Number',
    value: '+250 788 632 620',
    action: { label: 'Call Now', href: 'tel:+250788632620' },
  },
  {
    id: 'email',
    label: 'Email Address',
    value: 'fulluchris@gmail.com',
    action: { label: 'Send Email', href: 'mailto:fulluchris@gmail.com' },
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+250 788 632 620',
    action: { label: 'Chat on WhatsApp', href: 'https://wa.me/250788632620' },
  },
  {
    id: 'hours',
    label: 'Business Hours',
    value: 'Monday – Friday: 8:00 AM – 6:00 PM\nSaturday: 9:00 AM – 2:00 PM\nSunday: Closed',
    action: null,
  },
];

const whyPoints = [
  { title: 'Fast Response Times', desc: 'We respond to all inquiries within 24 business hours — usually much sooner.' },
  { title: 'Experienced Professionals', desc: 'Our team combines engineering rigour with decades of project delivery experience.' },
  { title: 'Integrated Services', desc: 'Design, build, supply, and investment — under one roof for complete continuity.' },
  { title: 'Transparent Communication', desc: 'Clear updates at every stage. No surprises, no hidden complexities.' },
  { title: 'Long-Term Partnerships', desc: 'We build relationships, not just structures. Many clients return for every new project.' },
];

const faqs = [
  { q: 'How quickly do you respond to inquiries?', a: 'We respond to all inquiries within 24 business hours. For urgent matters, please call us directly or reach out via WhatsApp for a faster response.' },
  { q: 'Can I request a quotation online?', a: 'Yes. You can submit an inquiry through our contact form or visit our dedicated Quote page. We\'ll follow up with a tailored quotation based on your project requirements.' },
  { q: 'Do you offer on-site consultations?', a: 'Absolutely. We offer on-site visits for architecture, construction, and engineering projects. Contact us to schedule a consultation at your project location.' },
  { q: 'Do you work on residential and commercial projects?', a: 'Yes. GEA works across residential, commercial, hospitality, industrial, and infrastructure projects. No project is too small or too large for our team.' },
  { q: 'Can I purchase building materials directly?', a: 'Yes. Our building solutions division supplies a comprehensive range of materials and equipment. Visit our Solutions page or submit an inquiry for a product quotation.' },
  { q: 'Do you provide nationwide services?', a: 'We are based in Kigali, Rwanda, and serve clients across the region and internationally for project design and supply. Contact us to discuss your project location.' },
  { q: 'Can I schedule a meeting with your team?', a: 'Yes. You can request a meeting through this form, by phone, or via WhatsApp. We offer both in-person visits at our Kigali office and virtual consultations.' },
];

const services = [
  'Architecture',
  'Construction',
  'Engineering Systems',
  'Interior Design',
  'Exterior Design',
  'Landscaping',
  'Building Materials',
  'Real Estate',
  'Property Refurbishment',
  'Property Demolition',
  'Other',
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E6E6E6]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-[15px] font-[500] text-[#1F2937] group-hover:text-[#10367D] transition-colors duration-200 pr-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-[#E6E6E6] flex items-center justify-center text-[#10367D] group-hover:border-[#10367D] transition-all duration-200">
          {open ? <Minus className="w-3.5 h-3.5" strokeWidth={2} /> : <Plus className="w-3.5 h-3.5" strokeWidth={2} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14px] leading-[1.85] font-[300] text-[#1F2937]/60 max-w-[640px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Inquiry Form ─────────────────────────────────────────────────────────────

function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: '', company: '', email: '', phone: '',
    service: '', location: '', budget: '', message: '',
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = 'Full name is required.';
    if (!values.email.trim() || !/\S+@\S+\.\S+/.test(values.email)) e.email = 'A valid email address is required.';
    if (!values.phone.trim()) e.phone = 'Phone number is required.';
    if (!values.service) e.service = 'Please select a service.';
    if (!values.message.trim()) e.message = 'Please describe your project.';
    if (!agreed) e.agreed = 'Please agree to the Privacy Policy.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1800);
  };

  const field = (id: string, label: string, required = false) => ({
    id,
    label: required ? label + ' *' : label,
    error: errors[id],
  });

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center text-center py-20 px-8"
      >
        <div className="w-16 h-16 rounded-full bg-[#10367D]/8 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#10367D]" strokeWidth={1.5} />
        </div>
        <h3 className="text-[24px] font-[700] text-[#1F2937] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Inquiry Received</h3>
        <p className="text-[14px] font-[300] text-[#1F2937]/60 max-w-[380px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Thank you for reaching out. A member of our team will review your inquiry and respond within 24 business hours.
        </p>
        <button
          onClick={() => { setStatus('idle'); setValues({ name: '', company: '', email: '', phone: '', service: '', location: '', budget: '', message: '' }); setAgreed(false); }}
          className="mt-8 inline-flex items-center gap-2 text-[13px] font-[600] tracking-[0.04em] text-[#10367D]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span className="h-[1px] w-4 bg-[#10367D]" /> Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  const inputClass = (id: string) =>
    `w-full bg-transparent border-b py-3 text-[14px] font-[300] text-[#1F2937] placeholder-[#1F2937]/35 outline-none transition-colors duration-200 focus:border-[#10367D] ${errors[id] ? 'border-red-400' : 'border-[#E6E6E6]'}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* Row 1: Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Full Name *</label>
          <input id="name" type="text" placeholder="Your full name" value={values.name} onChange={e => setValues(v => ({ ...v, name: e.target.value }))} className={inputClass('name')} style={{ fontFamily: 'Inter, sans-serif' }} />
          {errors.name && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Company Name</label>
          <input id="company" type="text" placeholder="Optional" value={values.company} onChange={e => setValues(v => ({ ...v, company: e.target.value }))} className={inputClass('company')} style={{ fontFamily: 'Inter, sans-serif' }} />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="email" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Email Address *</label>
          <input id="email" type="email" placeholder="your@email.com" value={values.email} onChange={e => setValues(v => ({ ...v, email: e.target.value }))} className={inputClass('email')} style={{ fontFamily: 'Inter, sans-serif' }} />
          {errors.email && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Phone Number *</label>
          <input id="phone" type="tel" placeholder="+250 7XX XXX XXX" value={values.phone} onChange={e => setValues(v => ({ ...v, phone: e.target.value }))} className={inputClass('phone')} style={{ fontFamily: 'Inter, sans-serif' }} />
          {errors.phone && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
        </div>
      </div>

      {/* Row 3: Service + Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="service" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Service Interested In *</label>
          <div className="relative">
            <select id="service" value={values.service} onChange={e => setValues(v => ({ ...v, service: e.target.value }))}
              className={`w-full bg-transparent border-b py-3 text-[14px] font-[300] outline-none appearance-none cursor-pointer transition-colors duration-200 focus:border-[#10367D] ${errors.service ? 'border-red-400 text-[#1F2937]' : 'border-[#E6E6E6]'} ${values.service ? 'text-[#1F2937]' : 'text-[#1F2937]/35'}`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <option value="" disabled>Select a service</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 1L6 6L11 1" stroke="#1F2937" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          {errors.service && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.service}</p>}
        </div>
        <div>
          <label htmlFor="location" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Project Location</label>
          <input id="location" type="text" placeholder="City / Country" value={values.location} onChange={e => setValues(v => ({ ...v, location: e.target.value }))} className={inputClass('location')} style={{ fontFamily: 'Inter, sans-serif' }} />
        </div>
      </div>

      {/* Row 4: Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="budget" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Estimated Budget</label>
          <input id="budget" type="text" placeholder="Optional — e.g. $50,000" value={values.budget} onChange={e => setValues(v => ({ ...v, budget: e.target.value }))} className={inputClass('budget')} style={{ fontFamily: 'Inter, sans-serif' }} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Project Description *</label>
        <textarea id="message" rows={5} placeholder="Tell us about your project — scope, timeline, specific requirements..." value={values.message} onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
          className={`w-full bg-transparent border-b py-3 text-[14px] font-[300] text-[#1F2937] placeholder-[#1F2937]/35 outline-none resize-none transition-colors duration-200 focus:border-[#10367D] ${errors.message ? 'border-red-400' : 'border-[#E6E6E6]'}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        />
        {errors.message && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
      </div>

      {/* Privacy checkbox */}
      <div>
        <label className="flex items-start gap-3.5 cursor-pointer group">
          <div className={`mt-0.5 w-4.5 h-4.5 shrink-0 rounded-[4px] border flex items-center justify-center transition-all duration-200 ${agreed ? 'bg-[#10367D] border-[#10367D]' : errors.agreed ? 'border-red-400' : 'border-[#E6E6E6] group-hover:border-[#10367D]/40'}`} style={{ width: 18, height: 18 }}>
            <input type="checkbox" className="sr-only" checked={agreed} onChange={e => setAgreed(e.target.checked)} id="privacy" />
            {agreed && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <span className="text-[13px] font-[300] text-[#1F2937]/60 leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
            I agree to the{' '}
            <a href="#" className="text-[#10367D] underline underline-offset-2 hover:text-[#C8A45D] transition-colors">Privacy Policy</a>
            {' '}and consent to GEA processing my inquiry.
          </span>
        </label>
        {errors.agreed && <p className="mt-2 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.agreed}</p>}
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          id="submit-inquiry"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-3 rounded-[999px] bg-[#10367D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-white transition-all duration-300 hover:bg-[#0a2355] disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {status === 'sending' ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              Sending…
            </>
          ) : (
            <>Send Inquiry <ArrowRight className="h-4 w-4" strokeWidth={1.5} /></>
          )}
        </button>
      </div>
    </form>
  );
}

// ─── Floating Contact Menu ────────────────────────────────────────────────────

function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const actions = [
    { label: 'Call', href: 'tel:+250788632620', icon: <Phone className="h-4 w-4" strokeWidth={1.5} /> },
    { label: 'WhatsApp', href: 'https://wa.me/250788632620', icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
    )},
    { label: 'Email', href: 'mailto:fulluchris@gmail.com', icon: <Mail className="h-4 w-4" strokeWidth={1.5} /> },
    { label: 'Quote', href: '/quote', icon: <ArrowRight className="h-4 w-4" strokeWidth={1.5} /> },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-6 bottom-8 z-50 flex flex-col items-end gap-2.5"
        >
          {/* Action items */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 items-end"
              >
                {actions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target={a.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white border border-[#E6E6E6] rounded-[999px] pl-4 pr-5 py-2.5 text-[12px] font-[600] text-[#1F2937] hover:border-[#10367D] hover:text-[#10367D] transition-all duration-200 shadow-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-[#10367D]">{a.icon}</span>
                    {a.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label="Contact options"
            className="w-12 h-12 rounded-full bg-[#10367D] text-white flex items-center justify-center shadow-lg hover:bg-[#0a2355] transition-all duration-300"
          >
            <motion.div animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.25 }}>
              {expanded ? <X className="h-5 w-5" strokeWidth={1.5} /> : <MessageCircle className="h-5 w-5" strokeWidth={1.5} />}
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <FloatingContact />
      <main id="contact-main" className="min-h-screen bg-white text-[#1F2937] overflow-hidden" style={{ marginTop: '88px' }}>

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <section id="contact-hero" className="relative flex items-end bg-[#0D1B2A] text-white overflow-hidden" style={{ minHeight: 'calc(85vh - 88px)' }}>
          {/* Background */}
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.25 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
              alt="Modern office with professionals in consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#10367D]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '120px 100%' }} />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-20 pt-24 lg:pb-28 lg:pt-36">
            <div className="max-w-[760px]">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-8">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-[38px] sm:text-[52px] md:text-[66px] lg:text-[80px] font-[800] tracking-[-0.03em] leading-[1.05] text-white mb-8"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Let's Start Building<br />
                <span className="text-[#C8A45D]">Something </span>
                <span className="font-[300] text-white/70">Exceptional.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15px] sm:text-[16px] leading-[1.85] font-[300] text-white/60 max-w-[560px] mb-10"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Whether you're planning a new development, renovating an existing property, sourcing building materials, or looking for professional engineering services — our team is ready to help.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap items-center gap-4">
                <a href="#inquiry-form" id="hero-consultation-cta"
                  className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-7 py-3.5 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D] sm:px-8 sm:py-4"
                >
                  Request a Consultation <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="tel:+250788632620" id="hero-call-cta"
                  className="inline-flex items-center gap-3 rounded-[999px] border border-white/20 bg-white/5 px-7 py-3.5 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-8 sm:py-4"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} /> Call Our Team
                </a>
              </motion.div>
            </div>

            {/* Quick contact strip */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-white/10 pt-10"
            >
              {[
                { label: 'Call Us', val: '+250 788 632 620', href: 'tel:+250788632620' },
                { label: 'Email Us', val: 'fulluchris@gmail.com', href: 'mailto:fulluchris@gmail.com' },
                { label: 'WhatsApp', val: 'Chat Now →', href: 'https://wa.me/250788632620' },
              ].map((item, i) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className={`group flex flex-col gap-1.5 py-6 sm:py-0 ${i > 0 ? 'sm:pl-10 sm:border-l border-white/10' : ''} ${i < 2 ? 'sm:pr-10 border-b sm:border-b-0 border-white/10' : ''}`}
                >
                  <span className="text-[10px] font-[600] uppercase tracking-[0.22em] text-white/35" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                  <span className="text-[14px] font-[500] text-white/80 group-hover:text-[#C8A45D] transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>{item.val}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── INTRODUCTION ─────────────────────────────────────────────────── */}
        <section id="contact-intro" className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-6 bg-[#10367D]" />
                  <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Getting Started</span>
                </div>
                <h2 className="text-[34px] lg:text-[52px] font-[700] text-[#1F2937] tracking-tight leading-[1.08] mb-7" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Every Great Project<br />
                  <span className="font-[300] text-[#10367D]">Begins With A Conversation.</span>
                </h2>
                <p className="text-[15.5px] leading-[1.9] font-[300] text-[#1F2937]/60 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Every successful project begins by understanding the client's vision, objectives, budget, and timeline. At GEA, our first conversation is less about selling and more about listening — learning what you need, and mapping the most efficient path to get there.
                </p>
                <p className="text-[15.5px] leading-[1.9] font-[300] text-[#1F2937]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Whether you have a fully developed brief or just an early idea, reach out. We'll help you define the scope, explore the options, and take the first step with confidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-[28px] bg-[#E6E6E6]"
              >
                <motion.img whileHover={{ scale: 1.03 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                  alt="GEA team in consultation with clients" className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT INFORMATION ──────────────────────────────────────────── */}
        <section id="contact-info" className="bg-[#F8F8F8] py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="max-w-[560px] mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact Information</span>
              </div>
              <h2 className="text-[36px] lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                How to<span className="font-[300]"> Reach Us.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col border-t border-[#E6E6E6]">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.65, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 py-9 border-b border-[#E6E6E6] group"
                >
                  {/* Label */}
                  <div className="shrink-0 w-full md:w-[200px]">
                    <span className="text-[10px] font-[600] uppercase tracking-[0.22em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                  </div>

                  {/* Value */}
                  <div className="flex-1">
                    <p className="text-[15px] font-[400] text-[#1F2937] leading-[1.75] whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif' }}>{item.value}</p>
                  </div>

                  {/* Action */}
                  {item.action && (
                    <div className="shrink-0">
                      <a href={item.action.href} target={item.action.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[12px] font-[600] tracking-[0.04em] text-[#1F2937]/50 group-hover:text-[#10367D] transition-colors duration-200"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span className="h-[1px] w-5 bg-current" />
                        {item.action.label}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INQUIRY FORM ─────────────────────────────────────────────────── */}
        <section id="inquiry-form" className="bg-white py-24 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">

              {/* Left: Context */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="lg:sticky lg:top-32 h-fit">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-6 bg-[#10367D]" />
                  <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Inquiry Form</span>
                </div>
                <h2 className="text-[32px] lg:text-[44px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Tell Us About<br />
                  <span className="font-[300] text-[#10367D]">Your Project.</span>
                </h2>
                <p className="text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60 mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Complete the form and a member of our team will respond within 24 business hours. For urgent matters, please call us directly.
                </p>

                <div className="flex flex-col gap-5 border-t border-[#E6E6E6] pt-8">
                  {[
                    { num: '01', text: 'Submit your inquiry with project details.' },
                    { num: '02', text: 'Our team reviews and responds within 24 hours.' },
                    { num: '03', text: 'We schedule a consultation at your convenience.' },
                    { num: '04', text: 'We begin scoping your project together.' },
                  ].map(step => (
                    <div key={step.num} className="flex items-start gap-5">
                      <span className="text-[11px] font-[700] tracking-[0.18em] text-[#10367D] shrink-0 mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{step.num}</span>
                      <p className="text-[13.5px] font-[300] text-[#1F2937]/60 leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>{step.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-[#E6E6E6]">
                  <p className="text-[12px] text-[#1F2937]/40 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Prefer to reach us directly?</p>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+250788632620" className="inline-flex items-center gap-3 text-[13px] font-[600] text-[#10367D] hover:text-[#C8A45D] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> +250 788 632 620
                    </a>
                    <a href="mailto:fulluchris@gmail.com" className="inline-flex items-center gap-3 text-[13px] font-[600] text-[#10367D] hover:text-[#C8A45D] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> fulluchris@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F8F8F8] rounded-[24px] p-8 lg:p-10 border border-[#E6E6E6]"
              >
                <InquiryForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── OFFICE MAP ───────────────────────────────────────────────────── */}
        <section id="office-location" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mb-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Our Location</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <h2 className="text-[34px] lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Visit Our<span className="font-[300]"> Office.</span>
                  </h2>
                  <p className="text-[14.5px] leading-[1.8] font-[300] text-[#1F2937]/60 max-w-[480px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    We welcome clients to visit our Kigali office. Please schedule a meeting in advance so our team is available to meet with you.
                  </p>
                </div>
                <a href="https://maps.google.com/?q=Umukindo+House+Kigali+Rwanda" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-[999px] border border-[#10367D] px-7 py-3.5 text-[13px] font-[600] text-[#10367D] transition-all duration-300 hover:bg-[#10367D] hover:text-white shrink-0"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MapPin className="h-4 w-4" strokeWidth={1.5} /> Get Directions
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map embed */}
          <div className="w-full h-[480px] lg:h-[560px] bg-[#E6E6E6] relative overflow-hidden">
            <iframe
              title="GEA Office Location — Kigali, Rwanda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4895694185627!2d30.08!3d-1.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42467f5e547%3A0x7f0f9b4e02da0fa5!2sKigali%2C+Rwanda!5e0!3m2!1sen!2sus!4v1000000000000"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Below map info */}
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-y border-[#E6E6E6]">
              {[
                { label: 'Address', val: 'KG 33 Avenue Road, Gakiriro Road, Umukindo House, 2nd Floor Front Wing, Kigali Gasabo, Rwanda' },
                { label: 'Parking', val: 'Parking available within the building compound. Security-managed entrance.' },
                { label: 'Accessibility', val: 'Lift access available. Ground floor wheelchair access via main entrance.' },
              ].map((item, i) => (
                <div key={item.label} className={`py-7 ${i > 0 ? 'sm:pl-10 sm:border-l border-[#E6E6E6]' : ''} ${i < 2 ? 'sm:pr-10 border-b sm:border-b-0 border-[#E6E6E6]' : ''}`}>
                  <p className="text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-2.5" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</p>
                  <p className="text-[13px] font-[300] text-[#1F2937]/60 leading-[1.75]" style={{ fontFamily: 'Inter, sans-serif' }}>{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CONTACT GEA ──────────────────────────────────────────────── */}
        <section id="why-gea" className="bg-[#0D1B2A] text-white py-24 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/5] overflow-hidden rounded-[28px]"
              >
                <motion.img whileHover={{ scale: 1.03 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                  alt="GEA professionals working on a project" className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/30 to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-[14px] px-5 py-4">
                  <div className="text-[28px] font-[700] text-white leading-none mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>24h</div>
                  <div className="text-[10px] font-[500] uppercase tracking-[0.18em] text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>Response Time</div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-6 bg-[#C8A45D]" />
                    <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Why GEA</span>
                  </div>
                  <h2 className="text-[34px] lg:text-[52px] font-[700] tracking-tight leading-[1.08] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    A Reliable Partner<br />
                    <span className="font-[300] text-white/60">From Concept To Completion.</span>
                  </h2>
                  <p className="text-[15px] leading-[1.85] font-[300] text-white/50 mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                    When you contact GEA, you're reaching a team of professionals committed to your project's success — from first call to final handover.
                  </p>
                </motion.div>

                <div className="flex flex-col border-t border-white/10">
                  {whyPoints.map((pt, idx) => (
                    <motion.div key={pt.title}
                      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className="group py-6 border-b border-white/10 flex flex-col gap-1.5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="h-[1px] w-4 bg-[#C8A45D] shrink-0" />
                        <h3 className="text-[15px] font-[600] text-white group-hover:text-[#C8A45D] transition-colors duration-250" style={{ fontFamily: 'Manrope, sans-serif' }}>{pt.title}</h3>
                      </div>
                      <p className="text-[13px] leading-[1.75] font-[300] text-white/45 pl-8" style={{ fontFamily: 'Inter, sans-serif' }}>{pt.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="contact-faq" className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-6 bg-[#10367D]" />
                  <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Common Questions</span>
                </div>
                <h2 className="text-[34px] lg:text-[48px] font-[700] text-[#1F2937] tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Frequently Asked<span className="font-[300]"> Questions.</span>
                </h2>
                <p className="text-[14.5px] leading-[1.85] font-[300] text-[#1F2937]/60 mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Still have a question? Reach out directly and our team will respond promptly.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+250788632620" className="inline-flex items-center gap-3 text-[13px] font-[600] text-[#10367D] hover:text-[#C8A45D] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> +250 788 632 620
                  </a>
                  <a href="mailto:fulluchris@gmail.com" className="inline-flex items-center gap-3 text-[13px] font-[600] text-[#10367D] hover:text-[#C8A45D] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> fulluchris@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-[#E6E6E6]"
              >
                {faqs.map((faq, idx) => <FAQItem key={idx} q={faq.q} a={faq.a} />)}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
        <section id="contact-cta" className="relative bg-[#10367D] text-white py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#10367D] via-[#10367D] to-[#0a2355]" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '80px 80px' }}
          />
          <div className="relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              <div className="inline-flex items-center gap-3 mb-8 justify-center">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Start Today</span>
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
              </div>
              <h2 className="text-[36px] sm:text-[52px] lg:text-[66px] font-[700] tracking-[-0.025em] leading-[1.06] mb-7 max-w-[800px] mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Ready To Discuss<span className="font-[300] text-white/65"> Your Project?</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.85] font-[300] text-white/55 max-w-[580px] mx-auto mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our team is ready to help you transform your ideas into successful projects through thoughtful design, quality construction, and reliable engineering solutions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="#inquiry-form" id="cta-schedule"
                  className="inline-flex items-center gap-3 rounded-[999px] bg-[#C8A45D] px-8 py-4 text-[13.5px] font-[600] tracking-[0.02em] text-[#1F2937] transition-all duration-300 hover:bg-white hover:text-[#10367D]"
                >
                  Schedule a Consultation <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a href="tel:+250788632620" id="cta-call"
                  className="inline-flex items-center gap-3 rounded-[999px] border border-white/25 bg-white/8 px-8 py-4 text-[13.5px] font-[500] tracking-[0.02em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} /> Call Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle, Clock, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

const services = [
  'Architecture Drawings',
  'General Contracting',
  'Project Management',
  'BOQ & Cost Estimation',
  'Project Consultation',
  'Interior Design',
  'Exterior Design',
  'Landscaping',
  'Mechanical, Electrical & Plumbing (MEP)',
  'Fire Protection Systems',
  'Security Systems',
  'HVAC Systems',
  'Solar Energy Solutions',
  'Real Estate Services',
  'Property Refurbishment',
  'Property Demolition',
  'Building Materials & Supply',
];

const reassurances = [
  { icon: Clock, title: 'Fast Response', desc: 'We respond to every quote request within 24 business hours.' },
  { icon: CheckCircle, title: 'No Obligation', desc: 'A clear, honest estimate — no pressure, no hidden costs.' },
  { icon: MessageCircle, title: 'Direct Access', desc: 'Speak directly with the team who will deliver your project.' },
];

function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: '', company: '', email: '', phone: '',
    service: '', location: '', budget: '', timeline: '', message: '',
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
    setTimeout(() => setStatus('success'), 1600);
  };

  const inputClass = (id: string) =>
    `w-full bg-transparent border-b py-3 text-[14px] font-[300] text-[#1F2937] placeholder-[#1F2937]/35 outline-none transition-colors duration-200 focus:border-[#10367D] ${errors[id] ? 'border-red-400' : 'border-[#E6E6E6]'}`;

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
        <h3 className="text-[24px] font-[700] text-[#1F2937] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Quote Request Received</h3>
        <p className="text-[14px] font-[300] text-[#1F2937]/60 max-w-[380px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Thank you for your request. A member of our team will review your project details and follow up with a tailored quote within 24 business hours.
        </p>
        <button
          onClick={() => { setStatus('idle'); setValues({ name: '', company: '', email: '', phone: '', service: '', location: '', budget: '', timeline: '', message: '' }); setAgreed(false); }}
          className="mt-8 inline-flex items-center gap-2 text-[13px] font-[600] tracking-[0.04em] text-[#10367D]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span className="h-[1px] w-4 bg-[#10367D]" /> Request Another Quote
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="service" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Service Needed *</label>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="budget" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Estimated Budget</label>
          <input id="budget" type="text" placeholder="Optional — e.g. $50,000" value={values.budget} onChange={e => setValues(v => ({ ...v, budget: e.target.value }))} className={inputClass('budget')} style={{ fontFamily: 'Inter, sans-serif' }} />
        </div>
        <div>
          <label htmlFor="timeline" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#1F2937]/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Preferred Timeline</label>
          <input id="timeline" type="text" placeholder="Optional — e.g. Q1 2026" value={values.timeline} onChange={e => setValues(v => ({ ...v, timeline: e.target.value }))} className={inputClass('timeline')} style={{ fontFamily: 'Inter, sans-serif' }} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-[#10367D] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Project Description *</label>
        <textarea id="message" rows={5} placeholder="Tell us about your project — scope, timeline, specific requirements..." value={values.message} onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
          className={`w-full bg-transparent border-b py-3 text-[14px] font-[300] text-[#1F2937] placeholder-[#1F2937]/35 outline-none resize-none transition-colors duration-200 focus:border-[#10367D] ${errors.message ? 'border-red-400' : 'border-[#E6E6E6]'}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        />
        {errors.message && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3.5 cursor-pointer group">
          <div className={`mt-0.5 w-4.5 h-4.5 shrink-0 rounded-[4px] border flex items-center justify-center transition-all duration-200 ${agreed ? 'bg-[#10367D] border-[#10367D]' : errors.agreed ? 'border-red-400' : 'border-[#E6E6E6] group-hover:border-[#10367D]/40'}`} style={{ width: 18, height: 18 }}>
            <input type="checkbox" className="sr-only" checked={agreed} onChange={e => setAgreed(e.target.checked)} id="privacy" />
            {agreed && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <span className="text-[13px] font-[300] text-[#1F2937]/60 leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>
            I agree to the{' '}
            <a href="#" className="text-[#10367D] underline underline-offset-2 hover:text-[#C8A45D] transition-colors">Privacy Policy</a>
            {' '}and consent to GEA processing my request.
          </span>
        </label>
        {errors.agreed && <p className="mt-2 text-[11px] text-red-500 flex items-center gap-1.5"><AlertCircle className="h-3 w-3" />{errors.agreed}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
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
            <>Request Quote <ArrowRight className="h-4 w-4" strokeWidth={1.5} /></>
          )}
        </button>
      </div>
    </form>
  );
}

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937] overflow-hidden" style={{ marginTop: '88px' }}>

      {/* HERO */}
      <section className="relative flex items-end bg-[#0D1B2A] text-white overflow-hidden" style={{ minHeight: '50vh' }}>
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.30 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
            alt="Request a Quote"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 lg:px-16 pb-16 pt-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-[10px] font-[600] uppercase tracking-[0.28em] text-[#C8A45D]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-[36px] sm:text-[48px] lg:text-[60px] font-[800] tracking-[-0.03em] leading-[1.06] text-white mb-5 max-w-[760px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Request a Quote for Your Next Project.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }} className="text-[15px] leading-[1.8] font-[300] text-white/55 max-w-[540px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tell us about your project and our team will follow up with a clear, tailored estimate — usually within 24 business hours.
          </motion.p>
        </div>
      </section>

      {/* FORM + REASSURANCE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 bg-[#F8F8F8] border border-[#E6E6E6] rounded-[24px] p-8 md:p-12">
              <QuoteForm />
            </div>

            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-6 bg-[#10367D]" />
                <span className="text-[10px] font-[600] uppercase tracking-[0.25em] text-[#10367D]" style={{ fontFamily: 'Inter, sans-serif' }}>Why Reach Out</span>
              </div>
              <h2 className="text-2xl lg:text-[34px] font-[700] text-[#1F2937] tracking-tight leading-[1.2] mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                A clear estimate, <span className="font-[300] text-[#10367D]">no guesswork.</span>
              </h2>

              <div className="flex flex-col gap-6 mb-10">
                {reassurances.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10367D]/6 text-[#10367D]">
                      <item.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-[600] text-[#1F2937] tracking-tight mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                      <p className="text-[13.5px] leading-[1.7] font-[300] text-[#1F2937]/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E6E6E6] pt-8 flex flex-col gap-3">
                <a href="tel:+250788632620" className="inline-flex items-center gap-2.5 text-[13.5px] font-[500] text-[#1F2937]/70 hover:text-[#10367D] transition-colors">
                  <Phone className="h-4 w-4" strokeWidth={1.5} /> +250 788 632 620
                </a>
                <a href="https://wa.me/250788632620" className="inline-flex items-center gap-2.5 text-[13.5px] font-[500] text-[#1F2937]/70 hover:text-[#10367D] transition-colors">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> Chat on WhatsApp
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2.5 text-[13.5px] font-[500] text-[#1F2937]/70 hover:text-[#10367D] transition-colors">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} /> Prefer to talk? Visit our Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

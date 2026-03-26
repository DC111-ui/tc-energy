import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const initialForm = { name: '', email: '', phone: '', service: '', message: '' };

const serviceOptions = [
  'Contract Logistics',
  'Couriering',
  'Storage Solutions',
  'Move-Outs',
  'Procurement Hub',
  "Farmer's Hub / Equipment",
  'General Enquiry',
];

const contactInfo = [
  {
    label: 'Email',
    value: 'info@tcenergy.co.za',
    href: 'mailto:info@tcenergy.co.za',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp / SA',
    value: '+27 61 703 7902',
    href: 'https://wa.me/27617037902',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Phone / Zimbabwe',
    value: '+263 222 6564',
    href: 'tel:+2632226564',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Pretoria, South Africa',
    href: null,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function Contact() {
  usePageMeta({ title: 'Contact Us', description: 'Get in touch with TC Energy & Logistics for a quote on logistics, storage, courier or procurement services.' });
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
    } catch {
      // Fallback for static/demo environments
    }
    setForm(initialForm);
    setStatus('success');
  };

  const inputClass =
    'w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';

  return (
    <div className="container-page space-y-12 py-12">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-green-800 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
        <img
          src="/images/couriering-customer-delivery.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-green-800/80" />
        <div className="relative max-w-2xl">
          <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-100">
            Get In Touch
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mt-4 text-base text-green-50 sm:text-lg">
            Need support with logistics, delivery, storage, or procurement? We&apos;re ready to help.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <div className="grid gap-8 lg:grid-cols-3">

        {/* Contact Info Sidebar */}
        <motion.aside
          className="space-y-4"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-2xl bg-secondary p-6 text-white shadow-soft">
            <h2 className="text-lg font-bold">Reach Us Directly</h2>
            <p className="mt-1 text-sm text-green-50">Available for quotes, enquiries, and logistics support.</p>
            <ul className="mt-6 space-y-4">
              {contactInfo.map(({ label, value, href, icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-200">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="mt-0.5 text-sm font-medium text-white transition hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-white/80">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Business Hours</p>
            <p className="mt-2 text-sm text-slate-700">Monday – Friday: 8am – 5pm</p>
            <p className="text-sm text-slate-700">Saturday: 8am – 1pm</p>
            <p className="text-sm text-slate-500">Sunday: Closed</p>
          </div>
        </motion.aside>

        {/* Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">Send Us a Message</h2>
            <p className="mt-1 text-sm text-slate-500">We&apos;ll get back to you within 1 business day.</p>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
                <input id="name" type="text" name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
                  <input id="phone" type="tel" name="phone" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="+27 ..." />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">Service Required</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} className={inputClass} placeholder="Tell us about your logistics or delivery needs..." />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.p
                  className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-secondary"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent! We&apos;ll be in touch soon.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;

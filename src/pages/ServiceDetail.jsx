import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { servicesBySlug } from '../data/servicesData';

function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = servicesBySlug[serviceSlug];

  if (!service) {
    return (
      <div className="container-page py-12">
        <h1 className="text-3xl font-bold text-secondary sm:text-4xl">Service Not Found</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          The service you are looking for does not exist. Please return to our services page.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page space-y-12 py-12">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl shadow-soft">
        <img
          src={service.image}
          alt={service.title}
          className="h-64 w-full object-cover sm:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-10">
          <Link
            to="/services"
            className="mb-4 inline-flex items-center gap-1 text-xs font-semibold text-white/70 transition hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">Service Details</p>
          <h1 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">{service.title}</h1>
        </div>
      </section>

      {/* Content */}
      <div className="grid gap-8 lg:grid-cols-3">

        {/* Description + Features */}
        <motion.div
          className="space-y-8 lg:col-span-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">About This Service</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{service.description}</p>
          </div>

          {service.features && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">What&apos;s Included</h2>
              <ul className="mt-5 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">✓</span>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Sidebar CTA */}
        <motion.aside
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="rounded-2xl bg-secondary p-6 text-white shadow-soft">
            <h3 className="text-lg font-bold">Request This Service</h3>
            <p className="mt-2 text-sm text-green-50">
              Get in touch and we&apos;ll tailor a solution for your exact needs.
            </p>
            <Link
              to="/contact"
              className="mt-5 block rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/27617037902"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Other Services</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="/services/contract-logistics" className="text-sm font-medium text-secondary hover:text-primary">Contract Logistics</Link></li>
              <li><Link to="/services/couriering" className="text-sm font-medium text-secondary hover:text-primary">Couriering</Link></li>
              <li><Link to="/services/storage-solutions" className="text-sm font-medium text-secondary hover:text-primary">Storage Solutions</Link></li>
              <li><Link to="/services/move-outs" className="text-sm font-medium text-secondary hover:text-primary">Move-Outs</Link></li>
              <li><Link to="/services/procurement-hub" className="text-sm font-medium text-secondary hover:text-primary">Procurement Hub</Link></li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

export default ServiceDetail;

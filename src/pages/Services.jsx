import { usePageMeta } from '../hooks/usePageMeta';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function Services() {
  usePageMeta({ title: 'Services', description: 'Contract logistics, couriering, storage, move-outs and procurement hub services across South Africa.' });
  return (
    <div className="container-page space-y-16 py-12 lg:space-y-20">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-green-800 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
        <img
          src="/images/aerial-highway.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-green-800/70" />
        <div className="relative max-w-3xl">
          <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-100">
            What We Offer
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Our Services</h1>
          <p className="mt-5 max-w-2xl text-base text-green-50 sm:text-lg">
            Practical logistics and procurement solutions built for businesses and individuals across South Africa.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section aria-labelledby="services-list-heading">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Full Catalogue</p>
          <h2 id="services-list-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Services Built for Growing Operations
          </h2>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-soft"
                aria-label={`View ${service.title} details`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-secondary">{service.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Learn more
                    <svg className="h-3.5 w-3.5 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        className="rounded-3xl bg-secondary px-6 py-14 text-center text-white shadow-soft sm:px-10"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Not Sure What You Need?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-green-50">
          Talk to our team and we&apos;ll recommend the right solution for your business or personal logistics needs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            Contact Us
          </Link>
          <a
            href="https://wa.me/27617037902"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            WhatsApp Us
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default Services;

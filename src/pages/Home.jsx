import { usePageMeta } from '../hooks/usePageMeta';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import HowItWorksSection from '../components/HowItWorksSection';
import ServicesSection from '../components/ServicesSection';
import StatsBar from '../components/StatsBar';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustedBySection from '../components/TrustedBySection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

function Home() {
  usePageMeta({ title: 'Home', description: 'TC Energy & Logistics — Pretoria based logistics company offering transport, storage, couriering and procurement across South Africa. Est. 2023.' });
  return (
    <div className="container-page space-y-16 py-12 lg:space-y-20">
      <section className="relative flex min-h-[calc(100vh-8rem)] items-end overflow-hidden rounded-3xl px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
        <img
          src="/images/truck-highway-sunset.webp"
          alt="TC Energy truck on the open road"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-slate-900/30" />

        <motion.div
          className="relative max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-100"
          >
            TC Energy & Logistics
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Premium Logistics That Keeps Business Moving Forward
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="mt-5 max-w-2xl text-base text-green-50 sm:text-lg"
          >
            Reliable transport, storage, procurement, and move-out operations managed with precision, safety, and
            clear communication at every stage.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
              <Link
                to="/contact"
                className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-xl hover:shadow-primary/40"
              >
                Request a Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
              <Link
                to="/services"
                className="inline-flex rounded-lg border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/20 hover:shadow-lg hover:shadow-black/20"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <StatsBar />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
        <ServicesSection />
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="grid gap-0 md:grid-cols-2">
          <img
            src="/images/brand-network.webp"
            alt="TC Energy & Logistics operations office"
            className="h-56 w-full object-cover md:h-full"
            loading="lazy"
          />
          <article className="p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About TC Energy</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Operational Confidence for Every Delivery</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We combine experienced teams, structured planning, and dependable fleet operations to support businesses,
              retailers, and households with consistent logistics outcomes.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
              <Link
                to="/about"
                className="mt-6 inline-flex rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-300"
              >
                Learn More
              </Link>
            </motion.div>
          </article>
        </div>
      </motion.section>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
        <TrustedBySection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
        <HowItWorksSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
        <WhyChooseUsSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
        <TestimonialsSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
        <CTASection />
      </motion.div>
    </div>
  );
}

export default Home;

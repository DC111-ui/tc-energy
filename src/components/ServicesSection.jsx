import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';

const icons = {
  'contract-logistics': '🚛',
  'couriering': '📦',
  'storage-solutions': '🏬',
  'move-outs': '🏠',
  'procurement-hub': '🔧',
};

function ServicesSection() {
  return (
    <section className="space-y-8" aria-labelledby="services-heading">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What We Offer</p>
        <h2 id="services-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Services Built for Growing Operations
        </h2>
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {services.map(({ slug, title, description, image }) => (
          <motion.div
            key={slug}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            whileHover={{ y: -8, scale: 1.015 }}
          >
            <Link
              to={`/services/${slug}`}
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-soft"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} service`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/25 to-transparent" />
                <motion.span
                  className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-lg shadow"
                  whileHover={{ rotate: -7, y: -2 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {icons[slug]}
                </motion.span>
              </div>
              <article className="p-5">
                <h3 className="text-lg font-semibold text-secondary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ServicesSection;

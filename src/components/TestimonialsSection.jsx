import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'TC Energy & Logistics handled our store replenishment runs with zero delays. Their communication throughout the process was excellent.',
    name: 'Arch 360 Branding',
    role: 'Partner Client',
  },
  {
    quote:
      'Reliable, professional, and always on time. We trust TC Energy with all our distribution needs across Pretoria.',
    name: 'Eurobath and Tile',
    role: 'Retail Partner',
  },
  {
    quote:
      'From pickup to delivery, everything was handled with care. Great team and very responsive service.',
    name: 'FRD Poultry and Farming',
    role: 'Supply Chain Client',
  },
];

function TestimonialsSection() {
  return (
    <motion.section
      className="space-y-8"
      aria-labelledby="testimonials-heading"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What Clients Say</p>
        <h2 id="testimonials-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Trusted by Businesses Across Pretoria
        </h2>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {testimonials.map(({ quote, name, role }) => (
          <motion.article
            key={name}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
          >
            <p className="text-sm leading-7 text-slate-600">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{name}</p>
                <p className="text-xs text-slate-500">{role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default TestimonialsSection;

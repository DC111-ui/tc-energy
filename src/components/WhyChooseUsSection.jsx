import { motion } from 'framer-motion';

const benefits = [
  { title: 'Reliable and on-time delivery', icon: '⏱️' },
  { title: 'Secure storage solutions', icon: '🔒' },
  { title: 'Flexible service options', icon: '🧩' },
  { title: 'Trusted by growing businesses', icon: '✅' },
];

function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl shadow-soft" aria-labelledby="why-choose-us-heading">
      <img
        src="/images/aerial-highway.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-secondary/85" />

      <div className="relative space-y-8 px-6 py-12 sm:px-10 sm:py-14">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Why Choose Us</p>
          <h2 id="why-choose-us-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Built on Service Quality and Operational Trust
          </h2>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {benefits.map(({ title, icon }) => (
            <motion.article
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-xl">
                {icon}
              </span>
              <p className="font-semibold text-white">{title}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

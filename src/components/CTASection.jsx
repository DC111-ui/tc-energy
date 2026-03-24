import { motion } from 'framer-motion';

function CTASection() {
  return (
    <section
      className="rounded-3xl bg-secondary px-6 py-14 text-center text-white shadow-soft sm:px-10"
      aria-labelledby="quote-heading"
    >
      <h2 id="quote-heading" className="text-3xl font-bold sm:text-4xl">
        Request a Quote
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-green-50">
        Get a fast and reliable quote for your logistics, storage, or delivery needs.
      </p>
      <motion.a
        href="mailto:info@tcenergy.co.za"
        className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-xl hover:shadow-primary/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        Request a Quote
      </motion.a>
    </section>
  );
}

export default CTASection;

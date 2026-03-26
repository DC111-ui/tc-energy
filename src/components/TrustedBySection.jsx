import { motion } from 'framer-motion';

const trustedCompanies = [
  { name: 'Arch 360 Branding',       logo: '/logos/arch-360.jfif' },
  { name: 'Eurobath and Tile',        logo: '/logos/euro.png' },
  { name: 'Eurotrend',                logo: '/logos/euro-trend.png' },
  { name: 'FRD Poultry and Farming',  logo: '/logos/frd.jpg' },
  { name: 'Gelmar',                   logo: '/logos/gelma.png' },
  { name: 'Lifestyle Ceramics',       logo: '/logos/life-style.png' },
  { name: 'Makro',                    logo: '/logos/makro.png' },
  { name: 'Builders',                 logo: '/logos/builders.jpg' },
  { name: 'Blue Skies Gas',           logo: '/logos/blue-skies.png' },
];

const trustPoints = ['Consistent delivery timelines', 'Careful cargo handling', 'Clear operational communication'];

function TrustedBySection() {
  return (
    <motion.section
      className="space-y-8"
      aria-labelledby="trusted-by-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Trusted By</p>
        <h2 id="trusted-by-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Businesses That Rely on TC Energy & Logistics
        </h2>
      </div>

      <motion.ul
        className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {trustPoints.map((point) => (
          <motion.li
            key={point}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {trustedCompanies.map(({ name, logo }) => (
          <article key={name} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-16 w-full items-center justify-center">
              {logo ? (
                <img
                  src={logo}
                  alt={name}
                  className="max-h-16 max-w-full object-contain"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                  {name.charAt(0)}
                </div>
              )}
            </div>
            <h3 className="text-sm font-semibold text-slate-700">{name}</h3>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default TrustedBySection;

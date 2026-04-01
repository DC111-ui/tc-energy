import { usePageMeta } from '../hooks/usePageMeta';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Layer Cage',
    variants: [
      { model: '96 Cage', price: '$365' },
      { model: '128 Cage', price: '$500' },
    ],
    description:
      'Durable poultry housing system designed for organised layer management and better space efficiency. Suitable for small to large-scale poultry operations.',
    specs: null,
    applicable: null,
    features: ['Organised layer management', 'Space-efficient design', 'Easy daily maintenance'],
    icon: '🐔',
  },
  {
    id: 2,
    name: 'Hammer Mill',
    variants: [{ model: 'HM2.2', price: '$1,500' }],
    description:
      'Reliable milling equipment for processing feed ingredients quickly and consistently. Handles a wide range of agricultural materials.',
    specs: [
      { label: 'Model', value: 'HM2.2 / HM-1700' },
      { label: 'Power', value: '2.20 kW (Electric) / 2.94 kW (Diesel)' },
      { label: 'Speed', value: '2,800 / 2,600 r/min' },
      { label: 'Productivity (Straw)', value: '600 / 800 kg/h' },
      { label: 'Productivity (Corn)', value: '600 / 800 kg/h' },
      { label: 'Sifter Aperture', value: '2.4 mm' },
      { label: 'Cutting Length', value: '20 mm' },
      { label: 'Weight', value: '70 kg' },
    ],
    applicable: 'Wheat, Corn, Soybeans, Straw, Vine, Green Fodder, Mugwort, Stevia',
    features: ['Removes straw & green feed', 'Cut-off function', 'Feed cattle, sheep, horse, pig'],
    icon: '⚙️',
  },
  {
    id: 3,
    name: 'Hand Push Planter',
    variants: [{ model: 'HPP-1F', price: '$350' }],
    description:
      'Manual sowing solution that improves planting speed and row consistency. Features 14 planting mouths with adjustable sowing rate.',
    specs: [
      { label: 'Model', value: 'HPP-1F' },
      { label: 'Planting Mouths', value: '14 pcs' },
      { label: 'Planting Space', value: '150 mm' },
      { label: 'Planting Depth', value: '50–90 mm' },
      { label: 'Seed Capacity', value: '2–3 kg' },
      { label: 'Fertilizer Capacity', value: '2–3.5 kg' },
      { label: 'Fertilizer Type', value: 'Powder or Solid' },
      { label: 'Sowing Rate', value: '1–2 Grains (Adjustable)' },
      { label: 'Weight', value: '10 kg' },
    ],
    applicable: 'Maize, Soybeans, Peanut, Cereal',
    features: ['Efficient sowing', 'Small and convenient', 'Diversified sowing', 'Adjustable depth'],
    icon: '🌱',
  },
  {
    id: 4,
    name: 'Hand Planter',
    variants: [{ model: 'HP-1', price: '$150' }],
    description:
      'Simple, lightweight planter for efficient seed placement in small-scale operations. Easy to use and highly portable.',
    specs: [
      { label: 'Model', value: 'HP-1' },
      { label: 'Sowing Depth', value: '35–78 mm' },
      { label: 'Capacity', value: '1.5–2 kg' },
      { label: 'Weight', value: '1.8 kg' },
    ],
    applicable: 'Maize, Soybeans, Peanut, Cereal',
    features: ['Small volume', 'Light weight', 'Easy operation'],
    icon: '🪴',
  },
  {
    id: 5,
    name: 'Pellet Mill',
    variants: [{ model: 'RYPM-150', price: '$2,100' }],
    description:
      'Compact feed pellet production unit delivering dependable output for on-farm use. Supports consistent pelleting with dual rollers.',
    specs: [
      { label: 'Model', value: 'RYPM-150' },
      { label: 'Matched Power', value: '120 kW' },
      { label: 'Capacity', value: '100–125 kg/h' },
      { label: 'Qty of Rollers', value: '2 pcs' },
      { label: 'Flat Die Aperture', value: '4.8 mm' },
      { label: 'Weight', value: '3 kg' },
    ],
    applicable: null,
    features: ['Compact design', 'Consistent pellet output', 'Dual roller system'],
    icon: '🏭',
  },
  {
    id: 6,
    name: 'Water Pump',
    variants: [{ model: '4-12', price: '$1,700' }],
    description:
      'High-flow pump designed to support irrigation and general farm water movement. High lift capacity with large inlet and outlet.',
    specs: [
      { label: 'Model', value: '4-12' },
      { label: 'Pump Lift', value: '21 m' },
      { label: 'Flux', value: '148 m³/h' },
      { label: 'Suction', value: '9.2 m' },
      { label: 'Inlet Size', value: '4 inch' },
      { label: 'Outlet Size', value: '4 inch' },
      { label: 'Rev', value: '3,600 r/min' },
    ],
    applicable: null,
    features: ['High-flow output', 'Wide inlet/outlet', 'Irrigation & general use'],
    icon: '💧',
  },
];

const audience = [
  'Farmers & smallholders',
  'Poultry & layer farms',
  'Livestock operations',
  'Agricultural businesses',
  'Feed producers',
  'Irrigation operations',
];

const reasons = [
  'Affordable, competitive pricing',
  'Reliable equipment sourcing',
  'Practical farming solutions',
  'Logistics & delivery support included',
  'SA & Zimbabwe coverage',
];

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function ProductCard({ product }) {
  return (
    <motion.article
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-slate-100 bg-secondary/5 px-5 py-4">
        <span className="text-3xl">{product.icon}</span>
        <div>
          <h3 className="text-lg font-bold text-secondary">{product.name}</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {product.variants.map(({ model, price }) => (
              <span key={model} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {model} — {price}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>

        {/* Spec table */}
        {product.specs && (
          <div className="overflow-hidden rounded-xl border border-slate-100">
            <table className="w-full text-xs">
              <tbody>
                {product.specs.map(({ label, value }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="w-2/5 px-3 py-2 font-semibold text-slate-700">{label}</td>
                    <td className="px-3 py-2 text-slate-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Applicable objects */}
        {product.applicable && (
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Applicable For</p>
            <p className="text-xs text-slate-600">{product.applicable}</p>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-1">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function FarmersHub() {
  usePageMeta({ title: "Farmer's Hub", description: 'Quality farming implements and equipment sourced and delivered by TC Energy & Logistics.' });
  return (
    <div className="container-page space-y-16 py-12 lg:space-y-20">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl px-6 py-20 text-white shadow-soft sm:px-10 lg:px-16">
        <img
          src="/images/farmers-hub-new.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/55 via-green-800/50 to-secondary/45" />
        <div className="relative max-w-3xl">
          <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-100">
            Additional Service
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Farmer's Hub
          </h1>
          <p className="mt-5 max-w-2xl text-base text-green-50 sm:text-lg">
            Quality farming implements and equipment — sourced, supplied, and delivered by TC Energy & Logistics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-green-100">
            <span className="flex items-center gap-1.5">📞 +(27) 61 703 7902</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1.5">📞 +(263) 222 6564</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1.5">✉️ info@tcenergy.co.za</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <motion.section
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionReveal}
      >
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
          TC Energy & Logistics extends its services into agricultural support through the <strong>Farmer's Hub</strong> — supplying
          essential farming implements for planting, milling, pelleting, poultry, and irrigation. All equipment is competitively
          priced and can be delivered as part of our logistics operations across South Africa and Zimbabwe.
        </p>
      </motion.section>

      {/* Equipment Catalogue */}
      <section aria-labelledby="products-heading">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What We Supply</p>
          <h2 id="products-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Equipment Catalogue
          </h2>
        </div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </section>

      {/* Who this is for + Why choose us */}
      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}
      >
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">Who This Is For</h2>
          <ul className="mt-5 space-y-3">
            {audience.map((group) => (
              <li key={group} className="flex items-center gap-3 text-slate-700">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm text-primary">✓</span>
                <span className="text-sm">{group}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">Why Choose Us</h2>
          <ul className="mt-5 space-y-3">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3 text-slate-700">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-secondary">★</span>
                <span className="text-sm">{reason}</span>
              </li>
            ))}
          </ul>
        </article>
      </motion.div>

      {/* CTA */}
      <motion.section
        className="rounded-3xl bg-secondary px-6 py-14 text-center text-white shadow-soft sm:px-10"
        aria-labelledby="equipment-cta-heading"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionReveal}
      >
        <h2 id="equipment-cta-heading" className="text-3xl font-bold sm:text-4xl">
          Enquire About Equipment
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-green-50">
          Contact us for current stock availability, pricing guidance, and delivery arrangements across South Africa and Zimbabwe.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@tcenergy.co.za"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@tcenergy.co.za
          </a>
          <a
            href="https://wa.me/27617037902"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            +(27) 61 703 7902
          </a>
          <a
            href="tel:+2632226564"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +(263) 222 6564
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default FarmersHub;

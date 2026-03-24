const products = [
  {
    name: 'Layer Cage (96 Cage)',
    price: '$365',
    description: 'Durable poultry housing system designed for organized layer management and better space efficiency.',
    image:
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Layer Cage (128 Cage)',
    price: '$500',
    description: 'Higher-capacity cage setup ideal for scaling poultry operations with practical daily maintenance.',
    image:
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Hammer Mill',
    price: '$1500',
    description: 'Reliable milling equipment for processing feed ingredients quickly and consistently.',
    image:
      'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Hand Push Planter',
    price: '$350',
    description: 'Manual sowing solution that improves planting speed and row consistency across fields.',
    image:
      'https://images.unsplash.com/photo-1592982537447-6f2a6a0f6e9d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Hand Planter',
    price: '$150',
    description: 'Simple, lightweight planter for efficient seed placement and small-scale operations.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Pellet Mill',
    price: '$2100',
    description: 'Compact feed pellet production unit that supports dependable output for farm use.',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Water Pump',
    price: '$1700',
    description: 'High-flow pump designed to support irrigation and general farm water movement needs.',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
];

const productSpecs = [
  {
    name: 'Hammer Mill',
    details: ['Productivity: 600–800 kg/h', 'Used for wheat, corn, soybeans', 'Feed processing'],
  },
  {
    name: 'Hand Push Planter',
    details: ['Planting depth: 50–90 mm', 'Capacity: 2–3kg', 'Efficient sowing'],
  },
  {
    name: 'Hand Planter',
    details: ['Lightweight', 'Easy operation'],
  },
  {
    name: 'Pellet Mill',
    details: ['Capacity: 100–125 kg/h'],
  },
  {
    name: 'Water Pump',
    details: ['Pump lift: 21m', 'Flow: 148 m³/h'],
  },
];

const audience = ['Farmers', 'Poultry farms', 'Livestock operations', 'Agricultural businesses'];

const reasons = ['Affordable equipment', 'Reliable sourcing', 'Practical solutions', 'Logistics support included'];

function FarmersHub() {
  return (
    <div className="container-page space-y-16 py-12 lg:space-y-20">
      <section className="relative overflow-hidden rounded-2xl px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=80"
          alt="Agricultural field with farming equipment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/75 to-green-900/70" />

        <div className="relative">
          <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-100">
            Additional Service
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Farmer’s Hub</h1>
          <p className="mt-5 max-w-2xl text-base text-green-50 sm:text-lg">
            Reliable farming equipment to support productivity and growth
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
          TC Energy & Logistics extends its services into agricultural support through the Farmer’s Hub, supplying
          essential farming equipment for planting, feeding, and operational efficiency.
        </p>
      </section>

      <section aria-labelledby="products-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="products-heading" className="text-2xl font-bold text-secondary sm:text-3xl">
            Equipment Catalogue
          </h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img src={product.image} alt={product.name} className="h-44 w-full object-cover" loading="lazy" />
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-secondary">{product.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>
                <p className="text-base font-bold text-primary">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" aria-labelledby="specs-heading">
        <h2 id="specs-heading" className="text-2xl font-bold text-secondary sm:text-3xl">
          Product Details
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {productSpecs.map((spec) => (
            <details
              key={spec.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-200"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-800">
                {spec.name}
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {spec.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">Who This Is For</h2>
          <ul className="mt-5 space-y-3">
            {audience.map((group) => (
              <li key={group} className="flex items-center gap-3 text-slate-700">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-primary">✓</span>
                <span>{group}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">Why Choose Us</h2>
          <ul className="mt-5 space-y-3">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3 text-slate-700">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-secondary">★</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-2xl bg-secondary px-6 py-14 text-center text-white shadow-soft sm:px-10" aria-labelledby="equipment-cta-heading">
        <h2 id="equipment-cta-heading" className="text-3xl font-bold sm:text-4xl">
          Enquire About Equipment
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-green-50">
          Speak with our team for current availability, guidance on suitable equipment, and delivery support.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:info@tcenergy.co.za"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/27617037902"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default FarmersHub;

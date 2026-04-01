import { usePageMeta } from '../hooks/usePageMeta';
const serviceItems = [
  {
    title: 'Contract logistics',
    description:
      'Dedicated transport coordination for recurring routes, supplier pickups, and store replenishment schedules.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h3l4 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: 'Courier services',
    description:
      'Responsive pickup-and-delivery support for urgent consignments, branch transfers, and customer drop-offs.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 8h12v9H5z" />
        <path d="M17 11h2l2 2v4h-4" />
        <path d="M8 4h4" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: 'Storage solutions',
    description:
      'Structured warehousing and stock-holding support to keep inventory organised, protected, and moving on time.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9 12 4l9 5-9 5-9-5Z" />
        <path d="M3 9v8l9 5 9-5V9" />
      </svg>
    ),
  },
  {
    title: 'Move-out assistance',
    description:
      'Practical logistics planning and transport handling for office shifts, student moves, and household relocations.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 11 12 5l8 6" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </svg>
    ),
  },
];

const valueCards = [
  {
    title: 'Efficiency',
    description: 'Streamlined logistics processes that save time and reduce costs.',
  },
  {
    title: 'Reliability',
    description: 'Consistent, dependable service and on-time delivery.',
  },
  {
    title: 'Scalability',
    description: 'Flexible solutions that grow with client needs.',
  },
];

const clientSegments = [
  { name: 'Furniture companies' },
  { name: 'Retail stores' },
  { name: 'Construction companies' },
  { name: 'Small businesses & e-commerce sellers' },
  { name: 'Importers & exporters' },
  { name: 'Student accommodations' },
  { name: 'Corporate offices' },
  { name: 'Individuals relocating' },
  { name: 'Individuals', description: 'Moving, deliveries, and personal logistics solutions.' },
];

const whyChooseUs = ['Efficiency', 'Reliability', 'Flexibility', 'Affordability', 'Quality', 'Accessibility'];

function About() {
  usePageMeta({ title: 'About Us', description: 'Learn about TC Energy & Logistics — a South African logistics company based in Pretoria, founded in 2023.' });
  return (
    <div className="container-page space-y-14 py-12 lg:space-y-20">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-green-800 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
        <img
          src="/images/truck-highway-sunset.webp"
          alt="TC Energy truck on South African highway"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/55 via-secondary/50 to-green-800/45" />

        <div className="relative max-w-3xl">
          <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-100">
            About Us
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">About TC Energy & Logistics</h1>
          <p className="mt-5 text-base text-green-50 sm:text-lg">
            Reliable logistics and distribution solutions built for growing businesses.
          </p>
        </div>
      </section>

      <section className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:p-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Who We Are</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              TC Energy & Logistics is a South African logistics company based in Pretoria, founded in 2023 with a
              clear commitment to delivering dependable, high quality service.
            </p>
            <p>
              We specialise in the movement of medium to large consignments, offering cost effective solutions without
              compromising on efficiency or professionalism.
            </p>
            <p>
              Our approach is rooted in reliability, attention to detail, and a deep understanding of client needs
              ensuring every delivery is handled with precision and care.
            </p>
            <p>
              At our core, we are driven by service providing tailored logistics solutions that businesses can trust
              across various sectors.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <img
            src="/images/brand-network.webp"
            alt="TC Energy warehouse team at work"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">What We Do</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We help businesses manage supply chains, improve delivery efficiency, and maintain consistent stock
            movement through practical logistics support.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <img
            src="/images/operations-office.webp"
            alt="TC Energy truck delivery at client premises"
            className="h-56 w-full object-cover sm:h-72"
            loading="lazy"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceItems.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-green-100 p-3 text-secondary">{service.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="grid md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="/images/brand-network.webp"
              alt="TC Energy & Logistics brand and network"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Our Mission</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              &ldquo;To streamline supply chain operations for our clients by offering innovative and efficient logistics
              solutions that enhance business productivity and customer satisfaction.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex items-start gap-3">
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 12 2 2 4-4" />
              <path d="M12 3 5 6v6c0 5 3.4 8.6 7 9 3.6-.4 7-4 7-9V6l-7-3Z" />
            </svg>
          </span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Registered & Trusted</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              TC Energy & Logistics is a registered South African company (CIPC), operating with full compliance and
              a commitment to reliable logistics services.
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-800 sm:text-base">Registration Number: 2023/000375/07</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img
          src="/images/aerial-highway.webp"
          alt="TC Energy truck being loaded at client warehouse"
          className="h-48 w-full object-cover sm:h-60"
          loading="lazy"
        />
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Our Vision & Value Proposition</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {valueCards.map((value) => (
            <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-secondary">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Who We Serve</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientSegments.map(({ name, description }) => (
            <article key={name} className="rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-700">{name}</p>
              {description && <p className="mt-1 text-xs text-slate-500">{description}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:p-12">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <img
            src="/images/delivery-warehouse.webp"
            alt="TC Energy residential delivery in progress"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Our Story</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>TC Energy & Logistics is a customer-driven and market-focused company.</p>
            <p>
              We are committed to delivering tailored solutions based on client needs, with fast turnaround times and
              strong value for money.
            </p>
            <p>
              Our experience in logistics, distribution, and procurement allows us to reduce unnecessary costs while
              maintaining high service quality.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Our Core Strengths</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-slate-800">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Why Choose Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="text-primary" aria-hidden="true">
                ✓
              </span>
              <span>Registered with CIPC</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary" aria-hidden="true">
                ✓
              </span>
              <span>Compliant South African business</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary" aria-hidden="true">
                ✓
              </span>
              <span>Operating since 2023</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-green-200 bg-green-50">
        <img
          src="/images/how-we-are-different-new.png"
          alt="TC Energy driver completing a customer delivery"
          className="h-56 w-full object-cover sm:h-64"
          loading="lazy"
        />
        <div className="p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">How We Are Different</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          Large logistics companies often fail smaller clients because of scale limitations, slow response cycles, and
          delayed decision-making. TC Energy & Logistics closes that gap with a more focused operating model.
        </p>
        <ul className="mt-5 space-y-3 text-sm font-medium text-slate-800 sm:text-base">
          <li>• Faster response times to urgent logistics needs</li>
          <li>• Better communication and direct client support</li>
          <li>• Practical service delivery for small-to-medium clients</li>
        </ul>
        </div>
      </section>

      <section className="rounded-3xl bg-secondary px-6 py-12 text-center text-white shadow-soft sm:px-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Work With Us</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-50 sm:text-base">
          Partner with a logistics company that understands your business needs.
        </p>
        <a
          href="mailto:info@tcenergy.co.za"
          className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Request a Quote
        </a>
        <p className="mt-4 text-xs uppercase tracking-wider text-green-100">Pretoria, South Africa • Established 2023</p>
      </section>
    </div>
  );
}

export default About;

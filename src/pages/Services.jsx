const services = [
  'Contract Logistics',
  'Couriering',
  'Storage Solutions',
  'Move-Outs',
  'Procurement Hub (Machinery, Electronics, Building Materials, Car Spares).',
];

function Services() {
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-secondary sm:text-4xl">Our Services</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        We offer practical logistics and procurement solutions for both businesses and individuals.
      </p>

      <ul className="mt-8 space-y-4">
        {services.map((service) => (
          <li key={service} className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-slate-800 shadow-sm">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;

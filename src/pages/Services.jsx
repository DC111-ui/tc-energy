import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';

function Services() {
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-secondary sm:text-4xl">Our Services</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        We offer practical logistics and procurement solutions for both businesses and individuals.
      </p>

      <ul className="mt-8 space-y-4">
        {services.map((service) => (
          <li key={service.slug} className="rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-soft">
            <Link
              to={`/services/${service.slug}`}
              className="block px-5 py-4 text-slate-800"
              aria-label={`View ${service.title} details`}
            >
              <h2 className="text-lg font-semibold text-secondary">{service.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{service.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;

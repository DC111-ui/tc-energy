import { Link, useParams } from 'react-router-dom';
import { servicesBySlug } from '../data/servicesData';

function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = servicesBySlug[serviceSlug];

  if (!service) {
    return (
      <section className="container-page py-12">
        <h1 className="text-3xl font-bold text-secondary sm:text-4xl">Service Not Found</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          The service you are looking for does not exist. Please return to our services page.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Back to Services
        </Link>
      </section>
    );
  }

  return (
    <section className="container-page py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Service Details</p>
      <h1 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">{service.title}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">{service.description}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <img
          src={service.image}
          alt={service.title}
          className="h-64 w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <div className="p-6">
          <p className="text-sm text-slate-600">
            Need this service? Reach out to our team and we&apos;ll tailor a solution for your exact logistics and
            procurement needs.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Request Service
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;

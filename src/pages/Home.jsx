import { Link } from 'react-router-dom';

const previews = ['Contract Logistics', 'Couriering', 'Storage', 'Move-Outs'];

function Home() {
  return (
    <div className="container-page space-y-14 py-12">
      <section className="rounded-3xl bg-gradient-to-br from-secondary to-green-800 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
        <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-100">
          TC Energy & Logistics
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          The Future of Logistics & Distribution
        </h1>
        <p className="mt-5 max-w-2xl text-base text-green-50 sm:text-lg">
          We deliver reliable storage, couriering, procurement, and move-out services designed to keep your
          business and home operations moving smoothly.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Contact Us
        </Link>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Service Previews</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previews.map((service) => (
            <article
              key={service}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <h3 className="text-lg font-semibold text-secondary">{service}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Professional {service.toLowerCase()} solutions focused on speed, safety, and dependable execution.
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

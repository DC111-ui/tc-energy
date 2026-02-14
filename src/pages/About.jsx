import aboutImage from '../assets/about.svg';

function About() {
  return (
    <div className="container-page space-y-14 py-12">
      <section className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            About Us
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            About TC Energy & Logistics
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">
            TC Energy & Logistics is a Gauteng-based logistics company focused on secure storage, reliable
            couriering, contract logistics, and procurement services across South Africa and Zimbabwe.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <img src={aboutImage} alt="TC Energy and Logistics operations" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-secondary">Our Mission</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            To deliver dependable logistics and procurement services that keep businesses and households moving with
            confidence, efficiency, and consistency.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-secondary">Our Values</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 sm:text-base">
            <li>• Reliability in every delivery and service touchpoint.</li>
            <li>• Safety-first handling of goods and cargo.</li>
            <li>• Integrity and transparency in client relationships.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-secondary">Who We Serve</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            We support SMEs, large enterprises, and households needing secure storage, fast couriering, contract
            logistics, move-outs, and procurement support across regional markets.
          </p>
        </article>
      </section>
    </div>
  );
}

export default About;

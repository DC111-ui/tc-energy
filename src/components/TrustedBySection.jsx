const trustedCompanies = [
  'Jena & Sons',
  'Thabie Luxury Furnishers',
  'Arch 360 Branding',
  'Blue Skies Gas',
  'Eurobath and Tile',
  'Eurotrend',
  'Gelmar',
  'FRD Poultry and Farming',
  'Lifestyle Ceramics',
];

function TrustedBySection() {
  return (
    <section className="space-y-8" aria-labelledby="trusted-by-heading">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Trusted By</p>
        <h2 id="trusted-by-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Businesses That Rely on TC Energy & Logistics
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {trustedCompanies.map((company) => (
          <article
            key={company}
            className="group rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
              Logo
            </div>
            <h3 className="text-sm font-semibold text-slate-700 transition group-hover:text-secondary">{company}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrustedBySection;

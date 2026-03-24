const benefits = [
  { title: 'Reliable and on-time delivery', icon: '⏱️' },
  { title: 'Secure storage solutions', icon: '🔒' },
  { title: 'Flexible service options', icon: '🧩' },
  { title: 'Trusted by growing businesses', icon: '✅' },
];

function WhyChooseUsSection() {
  return (
    <section className="space-y-8" aria-labelledby="why-choose-us-heading">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</p>
        <h2 id="why-choose-us-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Built on Service Quality and Operational Trust
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {benefits.map(({ title, icon }) => (
          <article
            key={title}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-primary/50 hover:shadow-soft"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl text-primary">
              {icon}
            </span>
            <p className="font-semibold text-slate-800">{title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

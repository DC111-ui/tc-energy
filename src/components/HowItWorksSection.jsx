const steps = [
  {
    title: 'Request a Quote',
    description: 'Share your transport, storage, or move-out needs with our team for a tailored estimate.',
    icon: '📝',
  },
  {
    title: 'We Plan & Confirm',
    description: 'We map the route, resources, and timeline, then confirm every operational detail with you.',
    icon: '📅',
  },
  {
    title: 'We Deliver',
    description: 'Our trained crew executes safely and on time with clear communication from start to finish.',
    icon: '🚚',
  },
];

function HowItWorksSection() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft sm:p-10" aria-labelledby="how-it-works-heading">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How It Works</p>
        <h2 id="how-it-works-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          A Simple 3-Step Process
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map(({ title, description, icon }, index) => (
          <article key={title} className="relative rounded-2xl border border-slate-200 p-6 text-center">
            <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
              {index + 1}
            </span>
            <div className="mx-auto mt-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-xl text-secondary">
              {icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-secondary">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;

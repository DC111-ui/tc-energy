function CTASection() {
  return (
    <section className="rounded-3xl bg-secondary px-6 py-14 text-center text-white shadow-soft sm:px-10" aria-labelledby="quote-heading">
      <h2 id="quote-heading" className="text-3xl font-bold sm:text-4xl">
        Request a Quote
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-green-50">
        Get a fast and reliable quote for your logistics, storage, or delivery needs.
      </p>
      <a
        href="mailto:info@tcenergy.co.za"
        className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
        Request a Quote
      </a>
    </section>
  );
}

export default CTASection;

import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import HowItWorksSection from '../components/HowItWorksSection';
import ServicesSection from '../components/ServicesSection';
import TrustedBySection from '../components/TrustedBySection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

function Home() {
  return (
    <div className="container-page space-y-16 py-12 lg:space-y-20">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-green-800 px-6 py-16 text-white shadow-soft sm:px-10 lg:px-16">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
          alt="Logistics trucks at distribution hub"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/70 to-green-800/75" />

        <div className="relative">
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
        </div>
      </section>

      <ServicesSection />

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1586528116493-2d5b58b0d28e?auto=format&fit=crop&w=1600&q=80"
          alt="Warehouse team handling inventory"
          className="h-44 w-full object-cover sm:h-56"
          loading="lazy"
        />
      </section>

      <TrustedBySection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}

export default Home;

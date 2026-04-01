import { usePageMeta } from '../hooks/usePageMeta';

function Privacy() {
  usePageMeta({ title: 'Privacy Policy', description: 'Privacy Policy for TC Energy & Logistics (Pty) Ltd — POPIA compliant.' });
  return (
    <div className="container-page py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">

          <section>
            <h2 className="text-lg font-semibold text-slate-900">1. Introduction</h2>
            <p className="mt-3">
              TC Energy & Logistics (Pty) Ltd ("we", "us", or "our") is committed to protecting your personal information
              in accordance with the Protection of Personal Information Act, 4 of 2013 (POPIA). This Privacy Policy explains
              how we collect, use, store, and protect your personal data when you interact with our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">2. Information We Collect</h2>
            <p className="mt-3">We may collect the following categories of personal information:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Full name and contact details (email, phone number)</li>
              <li>Business name and address</li>
              <li>Information submitted via our contact or enquiry forms</li>
              <li>Service usage and transaction records</li>
              <li>Technical data such as IP addresses and browser information (collected automatically)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-3">Your personal information is used to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Respond to your enquiries and provide requested services</li>
              <li>Process bookings, agreements, and payments</li>
              <li>Communicate service updates, quotations, or relevant information</li>
              <li>Comply with legal obligations</li>
              <li>Improve our website and service delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Legal Basis for Processing</h2>
            <p className="mt-3">
              We process your personal information based on your consent (where explicitly given), the performance of a
              contract, compliance with a legal obligation, or our legitimate business interests — as permitted under POPIA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">5. Sharing of Information</h2>
            <p className="mt-3">
              We do not sell or rent your personal information. We may share your information with trusted service providers
              who assist us in operating our business, strictly under confidentiality agreements. We may also disclose
              information when required by law or legal process.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">6. Data Retention</h2>
            <p className="mt-3">
              We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy,
              or as required by law. Once no longer needed, data is securely deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">7. Your Rights</h2>
            <p className="mt-3">Under POPIA, you have the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Object to the processing of your data</li>
              <li>Lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@tcenergy.co.za" className="text-primary hover:underline">info@tcenergy.co.za</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">8. Security</h2>
            <p className="mt-3">
              We implement appropriate technical and organisational measures to protect your personal information against
              unauthorised access, loss, or misuse. However, no method of transmission over the internet is entirely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">9. Cookies</h2>
            <p className="mt-3">
              Our website may use cookies to enhance user experience. You can control cookie settings through your browser.
              We do not use cookies for advertising or tracking purposes beyond standard analytics.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">10. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes will be published on this page with a revised
              date. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">11. Contact</h2>
            <p className="mt-3">
              For privacy-related queries, please contact our Information Officer at{' '}
              <a href="mailto:info@tcenergy.co.za" className="text-primary hover:underline">info@tcenergy.co.za</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Privacy;

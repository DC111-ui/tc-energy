import { usePageMeta } from '../hooks/usePageMeta';

function Disclaimer() {
  usePageMeta({ title: 'Disclaimer', description: 'Website and service disclaimer for TC Energy & Logistics (Pty) Ltd.' });
  return (
    <div className="container-page py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Disclaimer</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">

          <section>
            <h2 className="text-lg font-semibold text-slate-900">1. Website Information</h2>
            <p className="mt-3">
              The information provided on this website is for general informational purposes only. TC Energy & Logistics
              (Pty) Ltd makes no representations or warranties of any kind, express or implied, about the completeness,
              accuracy, reliability, or suitability of the information, services, or related content contained on this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">2. No Professional Advice</h2>
            <p className="mt-3">
              Nothing on this website constitutes legal, financial, or professional advice. Any reliance you place on
              information provided on this website is strictly at your own risk. For specific advice relevant to your
              situation, please contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">3. Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, TC Energy & Logistics shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your use of, or inability to use, this website
              or our services. This includes but is not limited to loss of data, revenue, or business opportunity.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Pricing and Availability</h2>
            <p className="mt-3">
              Prices, product availability, and service descriptions displayed on this website are subject to change
              without notice. All pricing shown (including equipment in the Farmer's Hub) is indicative and must be
              confirmed with us directly prior to any purchase or booking decision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">5. External Links</h2>
            <p className="mt-3">
              This website may contain links to external websites. TC Energy & Logistics has no control over the content
              of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use
              of them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">6. Images and Branding</h2>
            <p className="mt-3">
              Some images used on this website are for illustrative purposes and may not represent actual vehicles,
              facilities, or staff. All branding elements are the property of TC Energy & Logistics (Pty) Ltd.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">7. Governing Law</h2>
            <p className="mt-3">
              This disclaimer is governed by the laws of the Republic of South Africa. Any disputes shall be resolved
              under South African jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">8. Contact</h2>
            <p className="mt-3">
              If you have questions about this disclaimer, please contact us at{' '}
              <a href="mailto:info@tcenergy.co.za" className="text-primary hover:underline">info@tcenergy.co.za</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Disclaimer;

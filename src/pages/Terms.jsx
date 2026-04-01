import { usePageMeta } from '../hooks/usePageMeta';

function Terms() {
  usePageMeta({ title: 'Terms & Conditions', description: 'Terms and Conditions for TC Energy & Logistics (Pty) Ltd.' });
  return (
    <div className="container-page py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">

          <section>
            <h2 className="text-lg font-semibold text-slate-900">1. Introduction</h2>
            <p className="mt-3">
              These Terms and Conditions govern your use of the services provided by TC Energy & Logistics (Pty) Ltd
              ("the Company", "we", "us", or "our"), registered in South Africa (Reg No: 2023/000375/07), and headquartered
              in Pretoria, South Africa. By engaging our services or using our website, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">2. Services</h2>
            <p className="mt-3">
              TC Energy & Logistics provides logistics, courier, storage, move-out assistance, procurement, and agricultural
              equipment supply services. All services are subject to availability and may be amended at our discretion.
              Specific terms applicable to individual service engagements will be communicated at the point of booking or contract.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">3. Bookings and Agreements</h2>
            <p className="mt-3">
              A service engagement is only confirmed upon written acceptance by TC Energy & Logistics (via email or signed
              agreement). Verbal instructions or website enquiry submissions do not constitute a binding contract until
              formally confirmed by us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Payment Terms</h2>
            <p className="mt-3">
              Payment terms will be specified in the individual service agreement or quotation. Unless otherwise agreed in
              writing, payment is due prior to or upon completion of the service. We reserve the right to suspend services
              where payment obligations are not met.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">5. Liability</h2>
            <p className="mt-3">
              TC Energy & Logistics takes reasonable precautions in the handling and transportation of goods. However, we
              shall not be liable for loss or damage arising from circumstances beyond our control, including but not limited
              to force majeure events, incorrect packing by the client, or third-party interference. Clients are advised to
              insure high-value goods independently.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">6. Client Responsibilities</h2>
            <p className="mt-3">
              Clients are responsible for ensuring that goods tendered for transport are properly packaged, labelled, and
              compliant with all applicable laws and regulations. Any prohibited or hazardous materials must be declared
              prior to collection. TC Energy & Logistics reserves the right to refuse any consignment at its discretion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">7. Intellectual Property</h2>
            <p className="mt-3">
              All content on this website, including but not limited to text, images, logos, and design, is the property of
              TC Energy & Logistics. Unauthorised reproduction or use of any content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">8. Governing Law</h2>
            <p className="mt-3">
              These Terms and Conditions are governed by the laws of the Republic of South Africa. Any disputes arising
              shall be subject to the jurisdiction of the South African courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">9. Changes to Terms</h2>
            <p className="mt-3">
              We reserve the right to update these Terms and Conditions at any time. Continued use of our services
              following any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">10. Contact</h2>
            <p className="mt-3">
              For questions regarding these Terms, please contact us at{' '}
              <a href="mailto:info@tcenergy.co.za" className="text-primary hover:underline">info@tcenergy.co.za</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Terms;

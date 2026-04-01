import { usePageMeta } from '../hooks/usePageMeta';

function RefundPolicy() {
  usePageMeta({ title: 'Refund Policy', description: 'Refund and cancellation policy for TC Energy & Logistics (Pty) Ltd.' });
  return (
    <div className="container-page py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Refund Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">

          <section>
            <h2 className="text-lg font-semibold text-slate-900">1. Overview</h2>
            <p className="mt-3">
              TC Energy & Logistics (Pty) Ltd is committed to delivering quality service. This Refund Policy outlines
              the circumstances under which refunds or credits may be issued for our logistics, courier, storage, and
              equipment supply services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">2. Logistics & Courier Services</h2>
            <p className="mt-3">
              If a service is cancelled before commencement, a refund of any deposit paid will be considered on a
              case-by-case basis. Cancellations made less than 24 hours before a scheduled pickup may incur a
              cancellation fee. No refund is issued once a service has been fully rendered.
            </p>
            <p className="mt-3">
              In the event of a service failure attributable to TC Energy & Logistics (e.g. non-delivery, significant
              delay without notification), a partial or full credit may be offered at our discretion, subject to
              investigation and written notification within 48 hours of the incident.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">3. Storage Services</h2>
            <p className="mt-3">
              Storage fees are charged in advance per agreed billing period. Refunds for unused storage periods are
              not issued unless the termination is due to a failure on our part. Clients wishing to terminate storage
              agreements must provide written notice as specified in their individual storage agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Equipment Supply (Farmer's Hub)</h2>
            <p className="mt-3">
              Equipment orders are processed upon confirmation and payment. Once an order has been dispatched, it
              cannot be cancelled. For undelivered orders, cancellations must be requested in writing within 24 hours
              of order placement. Refunds for cancelled equipment orders will be processed within 7–10 business days,
              less any administrative fees.
            </p>
            <p className="mt-3">
              Equipment received in a damaged or incorrect condition must be reported within 48 hours of delivery,
              accompanied by photographic evidence. We will arrange a replacement or credit as appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">5. Non-Refundable Items</h2>
            <p className="mt-3">The following are non-refundable:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Services already rendered in full</li>
              <li>Custom or specially sourced equipment orders</li>
              <li>Fees incurred due to client error (incorrect address, missed collection, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">6. Refund Process</h2>
            <p className="mt-3">
              All refund requests must be submitted in writing to{' '}
              <a href="mailto:info@tcenergy.co.za" className="text-primary hover:underline">info@tcenergy.co.za</a>,
              including the service date, reference number (if applicable), and a description of the issue.
              Approved refunds will be processed to the original payment method within 7–14 business days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">7. Consumer Rights</h2>
            <p className="mt-3">
              This Refund Policy does not limit your rights under the Consumer Protection Act, 68 of 2008 (CPA) of
              South Africa. Where applicable, statutory rights take precedence over this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">8. Contact</h2>
            <p className="mt-3">
              For refund enquiries, contact us at{' '}
              <a href="mailto:info@tcenergy.co.za" className="text-primary hover:underline">info@tcenergy.co.za</a>{' '}
              or call{' '}
              <a href="tel:+27617037902" className="text-primary hover:underline">+27 61 703 7902</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;

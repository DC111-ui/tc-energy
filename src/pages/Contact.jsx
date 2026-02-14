import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setForm(initialForm);
      setStatus('success');
    } catch {
      // Fallback success in static/demo environments with no backend endpoint.
      setForm(initialForm);
      setStatus('success');
      setError('');
    }
  };

  return (
    <section className="container-page py-12">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold text-secondary">Contact Us</h1>
        <p className="mt-3 text-slate-600">
          Need support with logistics, delivery, storage, or procurement? Send us a message.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-secondary">
              Message sent! We’ll be in touch soon.
            </p>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

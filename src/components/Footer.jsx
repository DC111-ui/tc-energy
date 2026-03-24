import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.77-1.64 1.57V12h2.79l-.45 2.9h-2.34v6.98A10 10 0 0 0 22 12" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .13 5.36.14 11.95c0 2.1.55 4.16 1.6 5.99L0 24l6.21-1.62a11.86 11.86 0 0 0 5.84 1.49h.01c6.58 0 11.93-5.36 11.94-11.95a11.87 11.87 0 0 0-3.48-8.44m-8.46 18.4h-.01a9.89 9.89 0 0 1-5.04-1.38l-.36-.21-3.69.96.98-3.6-.24-.37a9.92 9.92 0 0 1-1.54-5.28c0-5.48 4.46-9.94 9.95-9.95 2.65 0 5.14 1.03 7.01 2.91a9.87 9.87 0 0 1 2.91 7c0 5.49-4.46 9.95-9.95 9.95m5.46-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.49a9.14 9.14 0 0 1-1.7-2.1c-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.07-.8.37-.28.3-1.06 1.03-1.06 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.21 5.1 4.5.7.3 1.25.49 1.68.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35" />
  </svg>
);

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'WhatsApp', href: '#', icon: WhatsAppIcon },
];

function Footer() {
  return (
    <footer className="border-t border-white/15 bg-secondary text-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left">
          <div className="space-y-4 md:pr-6">
            <img
              src={logo}
              alt="TC Energy & Logistics"
              className="mx-auto h-14 w-auto rounded-md bg-white p-1 md:mx-0"
            />
            <p className="text-sm leading-relaxed text-white/80">
              Reliable logistics, storage, and courier solutions across South Africa.
            </p>
          </div>

          <div className="space-y-4 md:border-x md:border-white/15 md:px-8">
            <h3 className="text-base font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors duration-300 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:pl-6">
            <h3 className="text-base font-semibold uppercase tracking-wide">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <a
                  href="mailto:info@tcenergy.co.za"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  info@tcenergy.co.za
                </a>
              </p>
              <p>
                <a href="https://wa.me/27617037902" className="transition-colors duration-300 hover:text-primary">
                  +27 61 703 7902
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="rounded-full bg-white/10 p-2 text-white transition duration-300 hover:scale-105 hover:bg-primary"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-4">
        <div className="container-page text-center text-xs text-white/70">
          <p>© 2026 TC Energy & Logistics</p>
          <p>Logistics • Storage • Courier Services</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

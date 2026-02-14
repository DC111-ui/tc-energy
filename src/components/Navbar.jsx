import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoTransparent from '../assets/logo-transparent.png';

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-orange-100 hover:text-primary'
  }`;

function Navbar() {
  const [useFallbackLogo, setUseFallbackLogo] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="container-page flex items-center justify-between gap-4 py-4">
        <NavLink to="/" className="inline-flex items-center" aria-label="TC Energy & Logistics Home">
          <img
            src={useFallbackLogo ? logo : logoTransparent}
            alt="TC Energy & Logistics"
            className="h-16 w-auto object-contain md:h-20"
            onError={() => setUseFallbackLogo(true)}
          />
        </NavLink>
        <div className="flex items-center gap-2 sm:gap-3">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

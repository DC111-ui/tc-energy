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
      <nav className="container-page flex min-h-[108px] items-center justify-between gap-4 py-3">
        <NavLink to="/" className="inline-flex items-center rounded-xl bg-white px-3 py-2" aria-label="TC Energy & Logistics Home">
          <picture>
            {/* Keeps room for future SVG source while preserving current PNG assets. */}
            <source srcSet={logoTransparent} type="image/png" />
            <img
              src={useFallbackLogo ? logo : logoTransparent}
              alt="TC Energy & Logistics"
              className="h-24 w-auto object-contain drop-shadow-sm md:h-28"
              onError={() => setUseFallbackLogo(true)}
            />
          </picture>
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
          <NavLink to="/farmers-hub" className={linkClass}>
            Farmer’s Hub
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

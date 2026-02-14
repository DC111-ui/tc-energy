import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-orange-100 hover:text-primary'
  }`;

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="container-page flex h-20 items-center justify-between">
        <NavLink to="/" className="text-lg font-bold text-secondary sm:text-xl">
          TC Energy & Logistics
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

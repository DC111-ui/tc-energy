import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="container-page flex flex-col items-center gap-3 text-center text-sm text-slate-600">
        <img src={logo} alt="TC Energy & Logistics" className="h-10 w-auto sm:h-12" />
        <p>© {new Date().getFullYear()} TC Energy & Logistics. Reliable logistics, storage, and procurement.</p>
      </div>
    </footer>
  );
}

export default Footer;

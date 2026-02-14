function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="container-page text-center text-sm text-slate-600">
        © {new Date().getFullYear()} TC Energy & Logistics. Reliable logistics, storage, and procurement.
      </div>
    </footer>
  );
}

export default Footer;

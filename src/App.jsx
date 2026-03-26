import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
import Contact from './pages/Contact';
import FarmersHub from './pages/FarmersHub';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/farmers-hub" element={<PageTransition><FarmersHub /></PageTransition>} />
            <Route path="/services/:serviceSlug" element={<PageTransition><ServiceDetail /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;

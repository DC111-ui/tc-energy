import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

function NotFound() {
  usePageMeta({ title: 'Page Not Found', description: 'The page you are looking for does not exist.' });

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-lg"
      >
        <p className="text-8xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-base text-slate-600">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;

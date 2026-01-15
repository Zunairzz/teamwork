import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background-light py-16 dark:bg-background-dark">
      <div className="max-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="text-6xl font-semibold text-slate-900 dark:text-slate-50">404</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

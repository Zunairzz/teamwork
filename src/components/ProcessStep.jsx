import { motion } from 'framer-motion';

export function ProcessStep({ index, title, description }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
      className="relative flex gap-4 rounded-2xl border border-slate-900/5 bg-surface-light/70 p-4 text-sm shadow-sm ring-1 ring-slate-900/5 dark:border-slate-800/80 dark:bg-surface-dark/70 dark:ring-slate-50/5"
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white shadow-sm dark:bg-slate-50 dark:text-slate-900">
        0{index + 1}
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </motion.li>
  );
}


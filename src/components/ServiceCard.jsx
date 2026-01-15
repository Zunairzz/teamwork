import { motion } from 'framer-motion';

export function ServiceCard({ title, description, points, icon }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="card flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-lg text-white shadow-soft dark:bg-slate-50 dark:text-slate-900">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
      {points?.length ? (
        <ul className="mt-1 space-y-1 text-xs text-slate-500 dark:text-slate-400">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
}


import { motion } from 'framer-motion';

export function PortfolioCard({ title, description, image, tags }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="card flex flex-col gap-4 overflow-hidden p-0"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="mt-1 text-xs text-slate-200 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 px-4 pb-4 pt-1">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-900/70 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}


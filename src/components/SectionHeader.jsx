import { motion } from 'framer-motion';

export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-2 ${alignClass}`}
    >
      {eyebrow && <span className="pill">{eyebrow}</span>}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}


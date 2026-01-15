import { motion } from 'framer-motion';

const iconMap = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  dribbble: 'Dribbble'
};

export function TeamCard({ name, role, description, avatar, socials }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="card flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 overflow-hidden rounded-2xl bg-slate-200/80 dark:bg-slate-800/60">
          <img
            src={avatar}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {name}
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {role}
          </p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-auto flex flex-wrap gap-2">
        {socials?.map((social) => (
          <a
            key={social.type}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{iconMap[social.type] ?? 'Profile'}</span>
          </a>
        ))}
      </div>
    </motion.article>
  );
}


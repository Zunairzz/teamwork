export function Footer() {
  return (
    <footer className="border-t border-slate-900/5 bg-surface-light/40 py-8 text-sm text-slate-500 backdrop-blur-sm dark:border-slate-800/80 dark:bg-surface-dark/40 dark:text-slate-400">
      <div className="max-width flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Nova Collective. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="transition hover:text-slate-900 dark:hover:text-slate-100"
          >
            Behance
          </a>
          <a
            href="#"
            className="transition hover:text-slate-900 dark:hover:text-slate-100"
          >
            Dribbble
          </a>
          <a
            href="#"
            className="transition hover:text-slate-900 dark:hover:text-slate-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}


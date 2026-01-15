import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Logo imports - Update these paths to match your logo files
// Option 1: If you have separate logos for light/dark mode, uncomment these:
// import logoLight from '../assets/logo.png';
// import logoDark from '../assets/logo-dark.png';

// Option 2: If you only have one logo, uncomment this and comment out Option 1:
// Replace 'logo.png' with your actual logo filename (can be .png, .jpg, or .jpeg)
import logo from '../assets/logo.png';

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/process', label: 'Process' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('nova-theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setDarkMode(initialDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('nova-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('nova-theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-40 border-b border-slate-900/5 bg-background-light/70 backdrop-blur-xl dark:border-slate-800/80 dark:bg-background-dark/70 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav className="max-width flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo Image - Add your logo file to src/assets/logo.png */}
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg">
            {/* Option 1: Single logo with auto-invert for dark mode (currently active) */}
            <img
              src={logo}
              alt="Logic Loop"
              className="h-full w-full object-contain transition-all"
            />
            
            {/* Option 2: Separate logos for light/dark mode - Uncomment if you have two logos */}
            {/* <img
              src={darkMode ? logoDark : logoLight}
              alt="Nova Collective Logo"
              className="h-full w-full object-contain"
            /> */}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Logic Loop
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Digital product & brand studio
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`nav-link ${location.pathname === item.href ? 'text-slate-900 dark:text-slate-50 font-semibold' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setDarkMode((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-surface-light/80 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900"
            >
              {darkMode ? (
                <span className="text-lg">☾</span>
              ) : (
                <span className="text-lg">☀︎</span>
              )}
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setDarkMode((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-surface-light/80 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900"
          >
            {darkMode ? <span className="text-lg">☾</span> : <span className="text-lg">☀︎</span>}
          </button>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-surface-light/80 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900"
          >
            <span className="sr-only">Open navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-900/5 bg-background-light/95 px-4 pb-4 pt-2 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-background-dark/95 md:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900/60"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-1">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-full bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Let&apos;s talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}

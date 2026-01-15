import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new window.FormData(form).entries());
    console.info('Contact submission (demo only):', data);
    setStatus('submitted');
    form.reset();
    window.setTimeout(() => setStatus(null), 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="card space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
            Name
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="How should we call you?"
            className="mt-1 w-full rounded-xl border border-slate-200/80 bg-surface-light px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 hover:border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-50 dark:placeholder:text-slate-500 dark:hover:border-slate-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
            Company
          </label>
          <input
            name="company"
            type="text"
            placeholder="Startup, studio, or brand name"
            className="mt-1 w-full rounded-xl border border-slate-200/80 bg-surface-light px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 hover:border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-50 dark:placeholder:text-slate-500 dark:hover:border-slate-500"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="you@company.com"
            className="mt-1 w-full rounded-xl border border-slate-200/80 bg-surface-light px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 hover:border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-50 dark:placeholder:text-slate-500 dark:hover:border-slate-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
            Budget range
          </label>
          <select
            name="budget"
            className="mt-1 w-full rounded-xl border border-slate-200/80 bg-surface-light px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition hover:border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-50 dark:hover:border-slate-500"
          >
            <option value="">Select a range</option>
            <option value="10-25k">$10k – $25k</option>
            <option value="25-50k">$25k – $50k</option>
            <option value="50-100k">$50k – $100k</option>
            <option value="100k+">$100k+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
          What are you building?
        </label>
        <textarea
          required
          name="project"
          rows={4}
          placeholder="Share a bit about your product, timeline, and where you need the most support."
          className="mt-1 w-full resize-none rounded-xl border border-slate-200/80 bg-surface-light px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 hover:border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-50 dark:placeholder:text-slate-500 dark:hover:border-slate-500"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-offset-background-dark"
        >
          Share your project
        </button>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Or email us directly:{' '}
          <a
            href="mailto:hello@novacollective.studio"
            className="font-medium text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
          >
            hello@novacollective.studio
          </a>
        </p>
      </div>

      {status === 'submitted' && (
        <p className="text-xs font-medium text-emerald-500">
          Thank you — your note is with the team. We&apos;ll get back to you shortly.
        </p>
      )}
    </motion.form>
  );
}


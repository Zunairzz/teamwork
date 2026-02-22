import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { PortfolioCard } from '../components/PortfolioCard.jsx';
import { portfolio } from '../data/index.js';

const portfolioStats = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '100%', label: 'On-Time Delivery' },
  { value: '15+', label: 'Industries Served' }
];

const caseStudyHighlights = [
  {
    metric: '300%',
    description: 'Increase in user engagement',
    project: 'Latitude OS Dashboard'
  },
  {
    metric: '2x',
    description: 'Faster page load times',
    project: 'Northline Marketing Site'
  },
  {
    metric: '50%',
    description: 'Reduction in bounce rate',
    project: 'Brightside Banking App'
  }
];

export function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-900/5 bg-gradient-to-b from-background-light via-background-light to-surface-light/40 py-20 dark:from-background-dark dark:via-background-dark dark:to-surface-dark/10">
        <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-soft-light dark:opacity-70">
          <div className="mx-auto h-full max-w-4xl bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.2),_transparent_60%)]" />
        </div>

        <div className="max-width relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="pill">Our Work</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              Products We're{' '}
              <span className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Proud Of
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              A mix of product, brand, and web work — each tailored to the team's stage and level of
              ambition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-900/5 bg-gradient-to-b from-surface-light/40 to-background-light py-12 dark:border-slate-800/80 dark:from-surface-dark/40 dark:to-background-dark">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-50">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm dark:text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="border-y border-slate-900/5 bg-surface-light/40 py-20 dark:border-slate-800/80 dark:bg-surface-dark/40">
        <div className="max-width space-y-12">
          <SectionHeader
            eyebrow="Selected Work"
            title="Recent launches from the studio."
            description="Each project represents our commitment to quality, innovation, and client success."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="pill">Results</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Measurable{' '}
              <span className="text-accent">Impact</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Our work doesn't just look good - it drives real business results for our clients.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudyHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.project}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <p className="text-4xl font-bold text-accent sm:text-5xl">{highlight.metric}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {highlight.description}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{highlight.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-y border-slate-900/5 bg-gradient-to-br from-accent via-purple-600 to-pink-600 py-20 dark:border-slate-800/80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="max-width relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Create Your{' '}
              <span className="text-yellow-200">Success Story?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              Let's discuss your project and see how we can help you achieve similar results.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Start Your Project</span>
                <span className="transition hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

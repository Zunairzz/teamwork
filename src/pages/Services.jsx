import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { ServiceCard } from '../components/ServiceCard.jsx';
import { services } from '../data/index.js';

const serviceStats = [
  { value: '100%', label: 'Client Satisfaction' },
  { value: '8-12', label: 'Week Delivery' },
  { value: '20+', label: 'Projects Completed' },
  { value: '24/7', label: 'Support Available' }
];

const whyChooseUs = [
  {
    icon: '🎯',
    title: 'Full-Stack Expertise',
    description: 'From design to deployment, we handle every aspect of your project.'
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Most projects ship in 8-12 weeks without compromising quality.'
  },
  {
    icon: '🤝',
    title: 'Collaborative Approach',
    description: 'We work as an extension of your team, not a separate vendor.'
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'Every detail matters - from pixel-perfect design to clean code.'
  }
];

export function Services() {
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
            <span className="pill">Our Services</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Build Success
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              From the first Figma frame to the production deploy, we stay involved across the entire
              lifecycle so nothing gets lost between hand‑offs.
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
            {serviceStats.map((stat, index) => (
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

      {/* Services Grid */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width space-y-12">
          <SectionHeader
            eyebrow="What We Offer"
            title="A single team across strategy, design, and engineering."
            description="From the first Figma frame to the production deploy, we stay involved across the entire lifecycle so nothing gets lost between hand‑offs."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-slate-900/5 bg-surface-light/40 py-20 dark:border-slate-800/80 dark:bg-surface-dark/40">
        <div className="max-width space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="pill">Why Choose Us</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              What Makes Our Services{' '}
              <span className="text-accent">Different</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              We don't just deliver services - we deliver results that move your business forward.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
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
              Ready to Get{' '}
              <span className="text-yellow-200">Started?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              Let's discuss your project and see how our services can help you achieve your goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Get a Free Quote</span>
                <span className="transition hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                See Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

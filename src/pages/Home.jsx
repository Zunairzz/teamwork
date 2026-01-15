import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard.jsx';
import { PortfolioCard } from '../components/PortfolioCard.jsx';
import { services, portfolio } from '../data/index.js';

const stats = [
  { value: '30+', label: 'Projects Launched' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '8-12', label: 'Week Delivery' },
  { value: '6', label: 'Expert Team Members' }
];

const testimonials = [
  {
    quote: 'Nova Collective transformed our product vision into a reality. Their attention to detail and collaborative approach made all the difference.',
    author: 'Sarah Chen',
    role: 'Founder, TechFlow',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    quote: 'Working with Nova was seamless. They understood our brand instantly and delivered beyond expectations. Highly recommend!',
    author: 'Michael Torres',
    role: 'CEO, InnovateLab',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    quote: 'The team\'s expertise in both design and development saved us months of back-and-forth. Worth every penny.',
    author: 'Emma Rodriguez',
    role: 'Product Lead, StartupXYZ',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden border-b border-slate-900/5 bg-gradient-to-b from-background-light via-background-light to-surface-light/40 dark:from-background-dark dark:via-background-dark dark:to-surface-dark/10">
        <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-soft-light dark:opacity-70">
          <div className="mx-auto h-full max-w-4xl bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.2),_transparent_60%)]" />
        </div>

        <div className="max-width relative flex min-h-[90vh] items-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-4 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-900/20 dark:text-emerald-400"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              <span>Taking on 1–2 new projects this quarter</span>
            </motion.div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl dark:text-slate-50">
              Transform Your Vision Into{' '}
              <span className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Premium Products
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
              We're a specialized team of designers and developers who help ambitious companies build
              exceptional digital experiences. From concept to launch, we're with you every step.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Start Your Project</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-surface-light px-6 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-900"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Transparent Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-900/5 bg-gradient-to-b from-surface-light/40 to-background-light py-12 dark:border-slate-800/80 dark:from-surface-dark/40 dark:to-background-dark">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
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

      {/* Services Preview */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="pill">What We Offer</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Everything You Need to Build{' '}
              <span className="text-accent">Exceptional Products</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              From initial strategy to final deployment, we provide end-to-end services that ensure nothing
              gets lost in translation.
            </p>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center pt-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-surface-light px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-900"
            >
              View All Services
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="border-y border-slate-900/5 bg-surface-light/40 py-20 dark:border-slate-800/80 dark:bg-surface-dark/40">
        <div className="max-width space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="pill">Our Work</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Products We're{' '}
              <span className="text-accent">Proud Of</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              See how we've helped companies transform their ideas into successful digital products.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {portfolio.slice(0, 3).map((item, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center pt-4"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-surface-light px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-surface-dark dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-900"
            >
              View Full Portfolio
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="pill">Client Stories</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Trusted by{' '}
              <span className="text-accent">Innovative Teams</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-4 flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
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
              Ready to Build Something{' '}
              <span className="text-yellow-200">Extraordinary?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              Let's discuss your project. We'll provide a free consultation and show you how we can help
              bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Get Started Today</span>
                <span className="transition hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Meet Our Team
              </Link>
            </div>
            <p className="mt-6 text-xs text-white/80">
              No commitment required · Free consultation · Response within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

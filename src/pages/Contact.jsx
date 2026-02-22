import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { ContactForm } from '../components/ContactForm.jsx';

const benefits = [
  {
    icon: '⚡',
    title: 'Fast Response',
    description: 'We respond to all inquiries within 24 hours, often sooner.'
  },
  {
    icon: '💬',
    title: 'Free Consultation',
    description: 'No obligation consultation to discuss your project needs.'
  },
  {
    icon: '📋',
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden fees or surprises.'
  },
  {
    icon: '🤝',
    title: 'No Long Contracts',
    description: 'Work with us project-by-project, no long-term commitments.'
  }
];

export function Contact() {
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
            <span className="pill">Get In Touch</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Share your project details and we'll get back to you within 24 hours with a personalized
              proposal and next steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-slate-900/5 bg-gradient-to-b from-surface-light/40 to-background-light py-12 dark:border-slate-800/80 dark:from-surface-dark/40 dark:to-background-dark">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-3xl">{benefit.icon}</div>
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-50 sm:text-sm">
                  {benefit.title}
                </p>
                <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-b from-background-light via-surface-light/40 to-background-light py-20 dark:from-background-dark dark:via-surface-dark/20 dark:to-background-dark">
        <div className="max-width grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Tell us about the product you're building."
              />
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Share a link to your product, Figma file, or deck. We'll respond within two business days
                with next steps, a rough timeline, and whether we're the right fit.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Why work with us?
                </h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {[
                    'Senior-level team with 15+ years combined experience',
                    'Direct access to designers and developers (no account managers)',
                    'Fast turnaround: most projects ship in 8-12 weeks',
                    'Transparent pricing with no hidden fees',
                    'Slack-first collaboration for seamless communication'
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-surface-light/80 p-6 dark:border-slate-700 dark:bg-surface-dark/80">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    ✉
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Email Us Directly</p>
                    <a
                      href="mailto:zamantariq09900@gmail.com"
                      className="text-sm text-accent underline-offset-4 hover:underline"
                    >
                      zamantariq09900@gmail.com
                    </a>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="pill">Slack‑first collaboration</span>
                  <span className="pill">Weekly demos</span>
                  <span className="pill">Figma & GitHub access</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-background-light py-16 dark:bg-background-dark">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl dark:bg-emerald-900/30">
                ⚡
              </div>
              <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                24-Hour Response
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                We guarantee a response to all inquiries within 24 hours, often much sooner.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-2xl dark:bg-blue-900/30">
                💬
              </div>
              <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                Free Consultation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                No obligation consultation call to discuss your project and see if we're a good fit.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-2xl dark:bg-purple-900/30">
                📋
              </div>
              <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                Transparent Process
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Clear timelines, transparent pricing, and regular updates throughout the project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

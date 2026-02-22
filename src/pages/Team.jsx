import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { TeamCard } from '../components/TeamCard.jsx';
import { team } from '../data/index.js';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import DiamondIcon from '@mui/icons-material/Diamond';
import ForumIcon from '@mui/icons-material/Forum';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutorenewIcon from '@mui/icons-material/Autorenew';
const teamStats = [
  { value: '15+', label: 'Years Combined Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '100%', label: 'Remote Team' },
  { value: '24/7', label: 'Global Coverage' }
];

const values = [
  {
    icon: <TrackChangesIcon fontSize="inherit" />,
    title: 'Results-Driven',
    description: 'We focus on outcomes, not just deliverables. Every project is measured by its impact.'
  },
  {
    icon: <HandshakeIcon fontSize="inherit" />,
    title: 'Collaborative',
    description: 'We work as an extension of your team, not a separate vendor. Your success is our success.'
  },
  {
    icon: <FlashOnIcon fontSize="inherit" />,
    title: 'Fast & Efficient',
    description: 'We move quickly without sacrificing quality. Most projects ship in 8-12 weeks.'
  },
  {
    icon: <DiamondIcon fontSize="inherit" />,
    title: 'Premium Quality',
    description: 'We don\'t cut corners. Every detail matters, from code quality to pixel-perfect design.'
  }
];

export function Team() {
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
            <span className="pill">Meet The Team</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              The Experts Behind{' '}
              <span className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Every Project
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              We're a tight-knit team of specialists who work directly with you. No account managers, no
              hand-offs—just the people doing the work, talking to you.
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
            {teamStats.map((stat, index) => (
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

      {/* Team Members */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width space-y-12">
          <SectionHeader
            eyebrow="Our Team"
            title="Six specialists, one integrated team."
            description="You work directly with the people doing the work — no hand‑offs through layers of account management."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-slate-900/5 bg-surface-light/40 py-20 dark:border-slate-800/80 dark:bg-surface-dark/40">
        <div className="max-width space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="pill">Our Values</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              What Makes Us{' '}
              <span className="text-accent">Different</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              These principles guide everything we do and ensure you get the best possible experience.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {value.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <span className="pill">Why Choose Us</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                Direct Access to{' '}
                <span className="text-accent">Senior Talent</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Unlike agencies with layers of account management, you work directly with our senior team.
                Every conversation, every decision, every line of code comes from experienced professionals.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  'No junior developers or interns on your project',
                  'Direct communication with the team doing the work',
                  'Senior-level expertise across design and development',
                  'Faster decision-making without bureaucracy'
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card flex flex-col justify-between gap-6"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  How We Work Together
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  We integrate seamlessly into your workflow. Whether you use Slack, Figma, GitHub, or
                  Notion, we adapt to your tools and processes. Weekly demos keep you in the loop, and
                  you'll always know exactly what's happening.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <ForumIcon fontSize="small" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-50">Slack Integration</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Real-time communication</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CalendarMonthIcon fontSize="small" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-50">Weekly Demos</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">See progress every week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <AutorenewIcon fontSize="small" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-50">Transparent Process</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">No surprises, ever</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
              Ready to Work With{' '}
              <span className="text-yellow-200">Our Team?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              Let's discuss your project and see how our team can help bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Start a Conversation</span>
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

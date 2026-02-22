import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader.jsx';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import DiamondIcon from '@mui/icons-material/Diamond';
import ForumIcon from '@mui/icons-material/Forum';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const aboutStats = [
  { value: '20+', label: 'Projects Launched' },
  { value: '6', label: 'Team Members' },
  { value: '15+', label: 'Years Experience' },
  { value: 'Global', label: 'Remote Team' }
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

const milestones = [
  {
    year: '2020',
    title: 'Founded',
    description: 'Started with a vision to bring together design and development expertise.'
  },
  {
    year: '2021',
    title: 'First 10 Projects',
    description: 'Delivered our first major projects and established our reputation.'
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Grew to a full team of 6 specialists across design and development.'
  },
  {
    year: '2024',
    title: '20+ Projects',
    description: 'Celebrated 20+ successful launches and 95% client satisfaction rate.'
  }
];

export function About() {
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
            <span className="pill">About Us</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              A Senior Collective Built to{' '}
              <span className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Feel Like Family
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              We started after years inside product and brand teams that moved quickly but struggled with
              depth — or had the opposite problem. Our aim is to bring both: thoughtful, opinionated design
              with the pace of a startup.
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
            {aboutStats.map((stat, index) => (
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

      {/* Main Content */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Our Story"
              title="Built to feel like an extension of your team."
            />
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              We started after years inside product and brand teams that moved quickly but struggled with
              depth — or had the opposite problem. Our aim is to bring both: thoughtful, opinionated design
              with the pace of a startup.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Every engagement pairs at least one designer with a frontend engineer so we can design with
              implementation in mind. That means fewer compromises, cleaner hand‑offs, and a UI that feels as
              good to build as it does to use.
            </p>
            <div className="grid gap-4 text-xs text-slate-500 sm:grid-cols-3 dark:text-slate-400">
              <div>
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">20+</p>
                <p>Product launches shipped with startups and in‑house teams.</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">6</p>
                <p>Specialists across product, design, engineering, and brand.</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Global</p>
                <p>Timezones covered across North America and Europe.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="card flex flex-col justify-between gap-6 text-sm"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                How we collaborate
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Most teams bring us in for 8–12 week sprints. We set a clear weekly cadence, share work often,
                and aren&apos;t precious about feedback. You&apos;ll see Figma files, prototypes, and live
                environments evolve together, not in isolation.
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
            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-100">
                Ready for a deeper dive?
              </p>
              <p>
                Share your deck, product demo, or current Figma file, and we&apos;ll respond with a short list
                of opportunities — even before we formally kick off.
              </p>
            </div>
          </motion.div>
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

      {/* Milestones */}
      <section className="bg-background-light py-20 dark:bg-background-dark">
        <div className="max-width space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="pill">Journey</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Our{' '}
              <span className="text-accent">Milestones</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              A look back at how we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card relative"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {milestone.year.slice(-2)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {milestone.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {milestone.description}
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
              Want to Work{' '}
              <span className="text-yellow-200">With Us?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Get In Touch</span>
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

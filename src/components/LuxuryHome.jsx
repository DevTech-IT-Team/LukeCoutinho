import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play, Sparkles } from 'lucide-react';
import heroPortrait from '../assets/neimg.jpg';
import teamImage from '../assets/team.avif';
import storyImage from '../assets/1st.webp';
import vitalityImage from '../assets/wellness.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const signaturePrograms = [
  {
    title: 'Private Wellness Advisory',
    index: '01',
    description: 'Deep diagnostics, ritual design, and one-on-one guidance for people rebuilding energy, resilience, and longevity.',
  },
  {
    title: 'Executive Vitality Residencies',
    index: '02',
    description: 'A discreet experience for founders and leaders who want elevated performance without sacrificing calm or health.',
  },
  {
    title: 'Immersive Learning Atelier',
    index: '03',
    description: 'Masterclasses, curated protocols, and guided education designed to make transformation feel precise and elegant.',
  },
];

const houseStandards = [
  'Clinical rigor paired with lived wisdom',
  'Quiet luxury interactions and low-friction journeys',
  'Tailored pathways instead of one-size-fits-all wellness',
  'Long-horizon health decisions with measurable clarity',
];

const editorialStats = [
  { value: '12+', label: 'years shaping transformative health journeys' },
  { value: '10k+', label: 'personal wellness stories influenced globally' },
  { value: '4.9/5', label: 'average client experience across flagship programs' },
];

function LuxuryHome() {
  return (
    <div className="bg-[var(--obsidian)] text-[var(--ivory)]">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,#3d3118_0%,#15120d_30%,#090909_72%)]">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(214,183,111,0.18),transparent)]" />

        <div className="relative mx-auto max-w-[1550px] px-6 pb-16 pt-36 md:px-10 lg:px-16 lg:pb-24 lg:pt-44">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="space-y-10">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.05}
                variants={fadeUp}
                className="inline-flex items-center gap-3 rounded-full border border-[color:var(--champagne)]/25 bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.34em] text-[var(--champagne)] backdrop-blur-md"
              >
                <Sparkles size={14} />
                Integrative Wellness House
              </motion.div>

              <motion.div initial="hidden" animate="visible" custom={0.12} variants={fadeUp} className="space-y-6">
                <p className="max-w-[10ch] font-display text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.86] tracking-[-0.05em] text-[var(--ivory)]">
                  Health,
                  <span className="block text-[var(--champagne)]">composed</span>
                  as a luxury.
                </p>
                <p className="max-w-2xl text-base leading-8 text-[var(--mist)] md:text-xl">
                  We redesigned the Luke Coutinho experience as an editorial destination: richer storytelling,
                  slower pacing, and premium pathways that make care feel intentional from the first scroll.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.2}
                variants={fadeUp}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="/book-consult"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--champagne)] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#15120d] transition duration-500 hover:-translate-y-0.5 hover:bg-[#e6cb8c]"
                >
                  Reserve A Consultation
                  <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                </a>
                <a
                  href="/Podcast/Podcast"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--ivory)] backdrop-blur-sm transition duration-500 hover:border-[var(--champagne)]/60 hover:bg-white/10"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  </span>
                  Enter The Journal
                </a>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.28}
                variants={fadeUp}
                className="grid gap-4 md:grid-cols-3"
              >
                {editorialStats.map((item) => (
                  <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                    <div className="font-display text-4xl text-[var(--champagne)] md:text-5xl">{item.value}</div>
                    <div className="mt-3 max-w-[20ch] text-sm leading-6 text-[var(--mist)]">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="relative flex min-h-[580px] items-end overflow-hidden rounded-[40px] border border-white/10 bg-[#0f0f0f] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            >
              <img src={heroPortrait} alt="Luke Coutinho portrait" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.7)_56%,rgba(0,0,0,0.92))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-[var(--champagne)] backdrop-blur-md">
                Curated For Modern India
              </div>
              <div className="relative z-10 w-full p-6 sm:p-8">
                <div className="mx-auto grid gap-4 rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-6 backdrop-blur-md sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--champagne)]">Flagship Experience</div>
                    <h2 className="mt-3 max-w-md font-display text-4xl leading-none text-[var(--ivory)] sm:text-5xl">
                      The new wellness concierge.
                    </h2>
                  </div>
                  <div className="text-sm leading-7 text-[var(--mist)] sm:max-w-[18rem]">
                    Private advisory, immersive learning, and elevated program discovery designed as one seamless journey.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-[1550px] gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--champagne)]">Signature Direction</p>
            <h2 className="mt-4 max-w-lg font-display text-5xl leading-[0.92] text-[var(--ivory)] md:text-6xl">
              A slower, richer digital arrival.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {houseStandards.map((item) => (
              <div key={item} className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:border-[var(--champagne)]/35 hover:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-5">
                  <p className="max-w-[18rem] text-lg leading-8 text-[var(--mist)]">{item}</p>
                  <ChevronRight className="mt-1 text-[var(--champagne)] transition duration-500 group-hover:translate-x-1" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#090909,#11100d)]">
        <div className="mx-auto max-w-[1550px] px-6 py-18 md:px-10 lg:px-16 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--champagne)]">Programs Reframed</p>
              <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.92] text-[var(--ivory)] md:text-6xl">
                Designed like a private members’ collection.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--mist)] md:text-lg">
              Each pathway is introduced with more confidence, less clutter, and enough breathing room to signal craftsmanship.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {signaturePrograms.map((program) => (
              <article key={program.title} className="group flex min-h-[320px] flex-col justify-between rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 transition duration-500 hover:-translate-y-1.5 hover:border-[var(--champagne)]/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--champagne)]">{program.index}</div>
                  <h3 className="mt-5 max-w-[14ch] font-display text-4xl leading-[0.96] text-[var(--ivory)]">{program.title}</h3>
                </div>
                <div>
                  <p className="max-w-[28ch] text-base leading-8 text-[var(--mist)]">{program.description}</p>
                  <a href="/book-consult" className="mt-7 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--champagne)]">
                    Explore Pathway
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0c0c0c]">
        <div className="mx-auto grid max-w-[1550px] gap-8 px-6 py-18 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-28">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10">
            <img src={storyImage} alt="Editorial wellness story" className="h-full min-h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--champagne)]">Editorial Storytelling</div>
              <p className="mt-4 max-w-sm font-display text-4xl leading-none text-[var(--ivory)]">
                Content that feels collected, not crowded.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-rows-[auto_1fr]">
            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--champagne)]">Why This Works</p>
              <p className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] text-[var(--ivory)] md:text-5xl">
                Luxury online is not excess. It is precision, confidence, and the removal of friction.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--mist)]">
                The new interface leans into cinematic contrast, serif-led hierarchy, and restrained motion.
                It lets programs, learning, and consultation pathways feel credible enough for a premium audience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-[36px] border border-white/10">
                <img src={teamImage} alt="Team and care experience" className="h-full min-h-[320px] w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(160deg,#1d1810,#0d0d0d)] p-8">
                <div className="text-[11px] uppercase tracking-[0.34em] text-[var(--champagne)]">Client Impression</div>
                <p className="mt-6 font-display text-3xl leading-[1.04] text-[var(--ivory)] md:text-4xl">
                  “It feels less like booking a service and more like entering a considered health house.”
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-[var(--mist)]">Sample luxury UX benchmark</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#090909]">
        <div className="mx-auto grid max-w-[1550px] gap-8 px-6 py-18 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-28">
          <div className="rounded-[38px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 sm:p-10">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[var(--champagne)]">Luxury Interaction Layer</div>
            <h2 className="mt-5 max-w-lg font-display text-5xl leading-[0.94] text-[var(--ivory)] md:text-6xl">
              The next iteration can carry this language across every route.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--mist)] md:text-lg">
              Programs, podcasts, learning hub, and contact flows can all inherit the same editorial system,
              premium call-to-actions, and calmer navigation patterns introduced here.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/resources" className="inline-flex items-center justify-center rounded-full border border-[var(--champagne)]/40 px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-[var(--champagne)] transition duration-500 hover:bg-[var(--champagne)] hover:text-[#15120d]">
                View Resources
              </a>
              <a href="/learn/learninghub/home" className="inline-flex items-center justify-center rounded-full bg-white/8 px-7 py-4 text-[11px] uppercase tracking-[0.32em] text-[var(--ivory)] transition duration-500 hover:bg-white/12">
                Enter Learning Hub
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[38px] border border-white/10">
            <img src={vitalityImage} alt="Luxury wellness setting" className="h-full min-h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.78))]" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <div className="rounded-[30px] border border-white/10 bg-black/30 p-6 backdrop-blur-md">
                <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--champagne)]">Private Invitation</div>
                <p className="mt-4 max-w-sm font-display text-4xl leading-none text-[var(--ivory)]">
                  Reserve your first conversation with the wellness concierge.
                </p>
                <a href="/book-consult" className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[var(--champagne)]">
                  Begin The Journey
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LuxuryHome;
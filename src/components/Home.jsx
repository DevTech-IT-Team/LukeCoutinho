import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import {
  Apple,
  Activity,
  Moon,
  HeartPulse,
  Sparkles,
  Stethoscope,
  GraduationCap,
  Compass,
  ArrowRight,
  Check,
  Star,
} from 'lucide-react';
import tileOne from '../assets/team.avif';
import tileTwo from '../assets/neimg.jpg';
import tileThree from '../assets/wp.avif';

/* ---------- Section 2: Trust ---------- */
const trustStats = [
  { value: '20,000+', label: 'Patients Healed' },
  { value: '15+', label: 'Hospital Partners' },
  { value: '50M+', label: 'Lives Reached' },
  { value: '180+', label: 'Countries' },
];

const mediaLogos = ['Forbes', 'Vogue', 'Times', 'CNBC', 'NDTV', 'Hindustan Times', 'Mint', 'Vogue India', 'ET Now', 'Femina', 'Harper\u2019s Bazaar', 'Conde Nast'];


/* ---------- Section 3: Pillars ---------- */
const pillars = [
  { icon: Apple, title: 'Nutrition', copy: 'Food as medicine — composed for your biology, not a trend.' },
  { icon: Activity, title: 'Movement', copy: 'Exercise prescribed for your body, not borrowed from anyone else\u2019s.' },
  { icon: Moon, title: 'Sleep', copy: 'Restorative rhythms that repair from the inside.' },
  { icon: HeartPulse, title: 'Emotional Health', copy: 'The unseen pillar — where most healing actually begins.' },
  { icon: Sparkles, title: 'Spirit', copy: 'Purpose, breath, stillness. The quiet architecture of wellbeing.' },
];

/* ---------- Section 4: Pathway split ---------- */
const pathways = [
  { icon: Stethoscope, title: 'Heal a Condition', copy: 'Begin with a 5-minute health assessment.', cta: 'Start Assessment', to: '/assessment' },
  { icon: HeartPulse, title: 'Work with Luke', copy: 'Bespoke programs with Luke and team.', cta: 'View Programs', to: '/programs/signature-wellness' },
  { icon: GraduationCap, title: 'Learn & Improve', copy: 'Self-paced courses by integrative experts.', cta: 'Explore Courses', to: '/learn/learninghub/home' },
  { icon: Compass, title: 'Understand Method', copy: 'The philosophy behind the practice.', cta: 'About Luke', to: '/about/approach' },
];

/* ---------- Section 5: Programs ---------- */
const programOptions = [
  {
    badge: 'Premium',
    title: 'With Luke',
    price: 'On request',
    copy: 'Direct mentorship and a fully bespoke wellness journey, composed by Luke and a senior team.',
    image: tileTwo,
    to: '/programs/signature-wellness',
  },
  {
    badge: 'Accessible',
    title: 'With Team',
    price: 'From ₹15,000 / mo',
    copy: 'Guided protocols delivered by Luke\u2019s integrative team — same method, broader access.',
    image: tileOne,
    to: '/programs/signature-wellness',
  },
];

const compareRows = [
  { feature: 'Personal sessions with Luke', luke: true, team: false },
  { feature: 'Integrative team support', luke: true, team: true },
  { feature: 'Custom nutrition protocol', luke: true, team: true },
  { feature: 'Lab analysis & medical review', luke: true, team: true },
  { feature: 'Priority access', luke: true, team: false },
  { feature: 'Group cohort option', luke: false, team: true },
];

/* ---------- Section 6: Courses ---------- */
const courses = [
  { title: 'Heal Your Gut', duration: '4 hrs', price: '₹2,499', rating: 4.9, image: tileOne },
  { title: 'Sleep, Reset', duration: '2.5 hrs', price: '₹1,499', rating: 4.8, image: tileTwo },
  { title: 'Emotional Detox', duration: '3 hrs', price: '₹1,999', rating: 4.9, image: tileThree },
  { title: 'Hormonal Balance', duration: '5 hrs', price: '₹2,999', rating: 4.7, image: tileOne },
];

/* ---------- Section 7: Transformations ---------- */
const transformations = [
  { name: 'Priya', condition: 'Reversed PCOS in 9 months', image: tileTwo },
  { name: 'Arjun', condition: 'Off insulin in 6 months', image: tileThree },
  { name: 'Maya', condition: 'Migraine-free for 2 years', image: tileOne },
];

const Home = () => {
  return (
    <>
      <Hero />

      {/* ============== SCREEN 2 — TRUST ============== */}
      <section className="bg-[#FDFAF5] text-[#1A1410] border-b border-[rgba(26,20,16,0.08)]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-20 pb-12 lg:pt-24 lg:pb-16">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-10 text-center">
            Trusted Worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mb-12">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(36px,4vw,56px)] leading-none text-[#1A1410]">
                  {s.value}
                </p>
                <p className="mt-3 font-[Arial] text-[10px] uppercase tracking-[0.3em] text-[rgba(26,20,16,0.55)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="lc-marquee">
            <div className="lc-marquee-fade lc-marquee-fade--left" aria-hidden="true" />
            <div className="lc-marquee-fade lc-marquee-fade--right" aria-hidden="true" />
            <div className="lc-marquee-track">
              {[...mediaLogos, ...mediaLogos].map((m, i) => (
                <span
                  key={`${m}-${i}`}
                  className="lc-marquee-item font-[Arial] text-[14px] tracking-[0.32em] uppercase text-[rgba(26,20,16,0.55)] hover:text-[#1A1410] transition-colors"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== SCREEN 3 — 5 PILLARS (EDITORIAL) ============== */}
      <section className="relative bg-[#FAF6EE] text-[#1A1410] overflow-hidden">
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-20 lg:py-28">
          {/* Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 mb-16 lg:mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="block w-10 h-px bg-[#E8640A]" />
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                  Foundational Medicine
                </p>
              </div>
              <h2 className="mt-8 font-['EB_Garamond',Georgia,serif] italic text-[clamp(44px,5.5vw,84px)] leading-[0.98] tracking-[0.005em]">
                The Five Pillars
                <br />
                <span className="text-[rgba(26,20,16,0.4)]">of Healing.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
              <p className="font-[Arial] text-[14px] md:text-[15px] leading-[1.9] text-[rgba(26,20,16,0.7)] max-w-[520px]">
                Every protocol — from gut care to cancer recovery — is quietly composed around five enduring foundations. Not a method. A philosophy of return.
              </p>
              <p className="mt-6 font-['EB_Garamond',Georgia,serif] italic text-[18px] text-[rgba(26,20,16,0.55)]">
                — Begin with what the body already knows.
              </p>
            </div>
          </div>

          {/* Pillars row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map(({ icon: Icon, title, copy }, i) => (
              <article
                key={title}
                className="lc-pillar group relative pt-8 pb-10 lg:pt-10 lg:pb-14 lg:px-6 cursor-default"
              >
                {/* Hairline top rule (animated) */}
                <span aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-[rgba(26,20,16,0.18)]" />
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px bg-[#E8640A] w-0 group-hover:w-full transition-[width] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                />

                {/* Vertical divider on lg screens (except last) */}
                {i < 4 && (
                  <span aria-hidden="true" className="hidden lg:block absolute top-10 bottom-10 right-0 w-px bg-[rgba(26,20,16,0.08)]" />
                )}

                {/* Index */}
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[rgba(26,20,16,0.45)] group-hover:text-[#E8640A] transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <Icon
                    size={16}
                    strokeWidth={1.25}
                    className="text-[rgba(26,20,16,0.35)] group-hover:text-[#E8640A] group-hover:-translate-y-0.5 transition-all duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(26px,2.4vw,34px)] leading-[1.05] mb-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  {title}.
                </h3>

                {/* Copy */}
                <p className="font-[Arial] text-[13px] leading-[1.8] text-[rgba(26,20,16,0.6)] max-w-[260px]">
                  {copy}
                </p>

                {/* Read more cue */}
                <span className="mt-8 inline-flex items-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[rgba(26,20,16,0.4)] group-hover:text-[#1A1410] transition-colors duration-500">
                  <span className="block w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
                  Discover
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SCREEN 4 — PATHWAY SPLIT ============== */}
      <section className="bg-[#FDFAF5] text-[#1A1410]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 lg:py-28">
          <div className="text-center max-w-[680px] mx-auto mb-16">
            <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-4">
              Choose Your Path
            </p>
            <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,4.5vw,64px)] leading-[1] tracking-[0.02em]">
              What do you need today?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map(({ icon: Icon, title, copy, cta, to }) => (
              <Link
                key={title}
                to={to}
                className="group block border border-[rgba(26,20,16,0.12)] p-8 hover:border-[#1A1410] hover:bg-[#1A1410] hover:text-white transition-all duration-500"
              >
                <Icon size={28} className="text-[#E8640A] mb-6" />
                <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[26px] mb-3 leading-[1.1]">
                  {title}
                </h3>
                <p className="font-[Arial] text-[13px] leading-[1.7] text-[rgba(26,20,16,0.65)] group-hover:text-white/70 transition-colors mb-8 min-h-[68px]">
                  {copy}
                </p>
                <span className="inline-flex items-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.3em] border-b border-current pb-2">
                  {cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SCREEN 5 — PROGRAMS (EDITORIAL TWO-WAY) ============== */}
      <section className="relative bg-[#1A1410] text-[#FDFAF5] overflow-hidden border-t border-white/[0.06]">
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-20 pb-24 lg:pt-24 lg:pb-32">
          {/* Masthead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 mb-16 lg:mb-20">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <span className="block w-10 h-px bg-[#E8640A]" />
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                  Wellness Programs
                </p>
              </div>
              <h2 className="mt-8 font-['EB_Garamond',Georgia,serif] italic text-[clamp(44px,5.5vw,84px)] leading-[0.98] tracking-[0.005em]">
                Two ways
                <br />
                <span className="text-white/55">to begin.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
              <p className="font-[Arial] text-[14px] md:text-[15px] leading-[1.9] text-white/65 max-w-[480px]">
                Two pathways. One philosophy. Choose the intimacy of working directly with Luke, or the same integrative method delivered by his senior team.
              </p>
            </div>
          </div>

          {/* Program cards — editorial split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-px bg-white/[0.06] mb-24">
            {programOptions.map((p, i) => (
              <Link
                key={p.title}
                to={p.to}
                className="lc-program group relative block bg-[#1A1410] cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[5/6] md:aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  {/* Bottom gradient */}
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0F0A06] via-[#0F0A06]/30 to-transparent" />
                  {/* Hover overlay */}
                  <span aria-hidden="true" className="absolute inset-0 bg-[#0F0A06]/0 group-hover:bg-[#0F0A06]/20 transition-colors duration-[900ms]" />

                  {/* Index */}
                  <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
                    <span className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-white/65">
                      0{i + 1} / 02
                    </span>
                    <span className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                      {p.badge}
                    </span>
                  </div>

                  {/* Bottom content over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,4.4vw,64px)] leading-[0.98] tracking-[0.005em] text-white transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                      {p.title}.
                    </h3>
                    <p className="mt-5 font-[Arial] text-[13px] leading-[1.85] text-white/75 max-w-[420px]">
                      {p.copy}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                      <span className="font-[Arial] text-[11px] tracking-[0.32em] uppercase text-white/85">
                        {p.price}
                      </span>
                      <span className="inline-flex items-center gap-3 font-[Arial] text-[10px] uppercase tracking-[0.4em] text-white">
                        <span className="block w-6 h-px bg-current transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12" />
                        Discover
                        <ArrowRight size={14} className="transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                  {/* Saffron top hairline reveal */}
                  <span aria-hidden="true" className="absolute top-0 left-0 h-px bg-[#E8640A] w-0 group-hover:w-full transition-[width] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </div>
              </Link>
            ))}
          </div>

          {/* Comparison */}
          <div className="max-w-[960px] mx-auto">
            <div className="flex items-center justify-center gap-6 mb-10">
              <span className="block w-10 h-px bg-white/25" />
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-white/55">
                A quiet comparison
              </p>
              <span className="block w-10 h-px bg-white/25" />
            </div>
            <div className="border-t border-b border-white/10">
              <div className="grid grid-cols-[1.6fr_1fr_1fr] py-5 px-6 font-[Arial] text-[10px] uppercase tracking-[0.4em] text-white/55 border-b border-white/10">
                <div>Feature</div>
                <div className="text-center">With Luke</div>
                <div className="text-center">With Team</div>
              </div>
              {compareRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[1.6fr_1fr_1fr] items-center py-5 px-6 border-b border-white/[0.06] last:border-b-0 transition-colors hover:bg-white/[0.025]"
                >
                  <div className="font-['EB_Garamond',Georgia,serif] italic text-[16px] text-white/90">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.luke ? <Check size={16} strokeWidth={1.5} className="text-[#E8640A]" /> : <span className="text-white/25 text-[14px]">—</span>}
                  </div>
                  <div className="flex justify-center">
                    {row.team ? <Check size={16} strokeWidth={1.5} className="text-[#E8640A]" /> : <span className="text-white/25 text-[14px]">—</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/book-consult"
                className="group inline-flex items-center gap-4 bg-[#E8640A] hover:bg-white hover:text-[#1A1410] text-white px-10 py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-all duration-500"
              >
                Book Consultation
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SCREEN 6 — COURSES ============== */}
      <section className="bg-[#FDFAF5] text-[#1A1410]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-4">
                Self-Paced Courses
              </p>
              <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,4.5vw,64px)] leading-[1] tracking-[0.02em]">
                Learn the method.
              </h2>
            </div>
            <Link
              to="/learn/learninghub/home"
              className="inline-flex items-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.3em] border-b border-[#1A1410] hover:border-[#E8640A] hover:text-[#E8640A] transition-colors pb-2 self-start md:self-end"
            >
              Browse All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <Link
                key={c.title}
                to="/learn/learninghub/home"
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#1A1410] relative">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex items-center gap-3 mb-2 text-[10px] uppercase tracking-[0.24em] text-white/80">
                      <span className="inline-flex items-center gap-1"><Star size={11} className="text-[#E8640A]" fill="#E8640A" />{c.rating}</span>
                      <span>·</span>
                      <span>{c.duration}</span>
                    </div>
                    <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[22px] leading-[1.1] mb-1">{c.title}</h3>
                    <p className="font-[Arial] text-[12px] tracking-[0.16em] uppercase text-[#E8640A]">{c.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SCREEN 7 — TRANSFORMATIONS ============== */}
      <section className="bg-[#FAF6EE] text-[#1A1410]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-24 lg:py-28">
          <div className="text-center max-w-[680px] mx-auto mb-16">
            <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-4">
              Transformations
            </p>
            <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,4.5vw,64px)] leading-[1] tracking-[0.02em]">
              Real people. Real healing.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {transformations.map((t) => (
              <article key={t.name} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-5">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.3em] text-[#E8640A] mb-2">Case Study</p>
                <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[26px] leading-[1.1] mb-2">{t.name}</h3>
                <p className="font-[Arial] text-[14px] text-[rgba(26,20,16,0.7)]">{t.condition}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SCREEN 8 — FINAL CTA ============== */}
      <section className="relative bg-[#1A1410] text-[#FDFAF5] overflow-hidden border-t border-white/10">
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
            {/* Headline column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="block w-10 h-px bg-[#E8640A]" />
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                  Begin Your Journey
                </p>
              </div>

              <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(36px,4.6vw,64px)] leading-[1.05] tracking-[0.005em]">
                Ready to begin
                <br />
                <span className="text-white/55">your healing journey?</span>
              </h2>
            </div>

            {/* Lede + CTAs column */}
            <div className="lg:col-span-5 lg:pb-2">
              <p className="font-[Arial] text-[14px] leading-[1.85] text-white/65 max-w-[460px] mb-8">
                Take the five-minute health assessment, or arrange a private consultation with our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/assessment"
                  className="group inline-flex items-center justify-between gap-6 bg-[#E8640A] hover:bg-[#FDFAF5] hover:text-[#1A1410] text-white px-7 py-4 font-[Arial] text-[11px] uppercase tracking-[0.32em] transition-all duration-500 flex-1"
                >
                  <span>Take Assessment</span>
                  <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/book-consult"
                  className="group inline-flex items-center justify-between gap-6 border border-white/25 hover:border-white text-white px-7 py-4 font-[Arial] text-[11px] uppercase tracking-[0.32em] transition-all duration-500 flex-1"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

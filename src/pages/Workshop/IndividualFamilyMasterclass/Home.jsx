import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import heroImage from '../../../assets/imluke.png';
import featureImage from '../../../assets/neimg.jpg';
import audienceImage from '../../../assets/team.avif';
import pastMasterclassImage from '../../../assets/1st.webp';
import heroPoster from '../../../assets/wellness.jpg';
import heroVideo from '../../../assets/heroclips/lukehero.mp4';
import audienceVideo from '../../../assets/heroclips/Lukehero3.mp4';
import lcLogo from '../../../assets/LClogoo.png';
import '../../../components/Hero.css';
import PastMasterclassesSection from './sections/PastMasterclassesSection';
import AboutLukeSection from './sections/AboutLukeSection';
import DisclaimerSection from './sections/DisclaimerSection';

const paymentLink = '/payment';

const upcomingHighlights = [
  {
    title: 'Live, expert-led knowledge',
    copy: 'Join sessions led by Luke and trusted experts who translate complex health ideas into grounded learning.',
    image: featureImage,
    tone: 'Editorial Session',
  },
  {
    title: 'Foundations-first guidance',
    copy: 'Every topic begins with the basics that shape better decisions before adding more layers.',
    image: audienceImage,
    tone: 'Foundational Lens',
  },
  {
    title: 'Action steps you can apply',
    copy: 'Leave with a small set of practical shifts that feel realistic enough to implement in everyday life.',
    image: pastMasterclassImage,
    tone: 'Practical Takeaways',
  },
  {
    title: 'Live Q&A for clarity',
    copy: 'Use the live format to clear confusion, ask better questions, and understand what matters next.',
    image: heroPoster,
    tone: 'Real-Time Access',
  },
];

const audienceCards = [
  {
    title: 'Clarity Seekers',
    copy: 'Cut through the noise.',
    icon: Compass,
  },
  {
    title: 'Busy Individuals',
    copy: 'Small shifts that fit your schedule.',
    icon: Layers3,
  },
  {
    title: 'Habit Builders',
    copy: 'Build habits you can repeat.',
    icon: HeartHandshake,
  },
  {
    title: 'Program Members',
    copy: 'Stay steady between consults.',
    icon: ShieldCheck,
  },
  {
    title: 'Lifelong Learners',
    copy: 'Stay proactive at every stage.',
    icon: GraduationCap,
  },
];

const navigationLinks = [
  { label: 'Heal from Within', to: '/about/approach' },
  { label: 'Wellness Programs', to: '/programs/signature-wellness' },
  { label: 'Masterclass', to: '/masterclass' },
  { label: 'Courses', to: '/learn/learninghub/home' },
  { label: 'Recipes', to: '/bharat/dish' },
  { label: 'Podcast', to: '/Podcast/Podcast' },
  { label: 'Consult', to: '/book-consult' },
];

function CtaLink({ children, variant = 'light', className = '' }) {
  const baseClassName =
    'group inline-flex items-center gap-3 font-[Arial] text-[10px] uppercase tracking-[0.34em] transition-all duration-500';

  const variantClassName =
    variant === 'dark'
      ? 'bg-[#E8640A] hover:bg-[#FDFAF5] hover:text-[#1A1410] text-white px-7 py-4'
      : 'border-b border-current pb-2 text-[#1A1410] hover:text-[#E8640A] hover:border-[#E8640A]';

  return (
    <Link to={paymentLink} className={`${baseClassName} ${variantClassName} ${className}`.trim()}>
      <span>{children}</span>
      <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [consultStatus, setConsultStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsConsultOpen(false);
      }
    };

    document.body.style.overflow = isMenuOpen || isConsultOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isConsultOpen]);

  const handleConsultSubmit = (event) => {
    event.preventDefault();
    setConsultStatus('sending');

    setTimeout(() => {
      setConsultStatus('sent');
      event.target.reset();
    }, 900);
  };

  return (
    <>
      <header
        className={`hero-nav${isScrolled ? ' is-scrolled' : ''}${
          isMenuOpen ? ' is-menu-open' : ''
        }`}
      >
        <button
          className="menu-trigger"
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="menu-label">Menu</span>
        </button>

        <Link to="/" className="nav-logo" aria-label="Luke Coutinho home">
          <img src={lcLogo} alt="Luke Coutinho" />
        </Link>

        <button
          type="button"
          className="nav-utility"
          onClick={() => setIsConsultOpen(true)}
          aria-haspopup="dialog"
          aria-controls="consult-drawer"
          aria-expanded={isConsultOpen}
        >
          <span className="nav-utility-dot" aria-hidden="true" />
          <span>Book Your Consultation</span>
        </button>
      </header>

      <div className="bg-[#FDFAF5] text-[#1A1410]">
      <section className="relative min-h-screen overflow-hidden bg-[#1A1410] text-[#FDFAF5]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.35),rgba(12,10,8,0.6)_48%,rgba(12,10,8,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_36%),radial-gradient(circle_at_center,rgba(232,100,10,0.16),transparent_54%)]" />
        <div className="absolute left-6 right-6 top-[96px] h-px bg-white/20 md:left-10 md:right-10 lg:left-16 lg:right-16" />

        <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center justify-center px-6 pb-20 pt-32 text-center md:px-10 lg:px-16">
          <div className="max-w-[900px]">
            <p className="font-[Arial] text-[11px] uppercase tracking-[0.42em] text-white/75">
              Live Masterclasses
            </p>

            <h1 className="mt-8 font-['EB_Garamond',Georgia,serif] italic text-[clamp(56px,9vw,122px)] leading-[0.88] tracking-[0.01em] text-white">
              Foundations You
              <br />
              Can Build On
            </h1>

            <p className="mx-auto mt-8 max-w-[720px] font-[Arial] text-[14px] md:text-[15px] leading-[1.9] tracking-[0.04em] uppercase text-white/78">
              One masterclass at a time. Live, educational, and practical sessions with Luke and Team Luke to help
              you learn clearly and apply calmly.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaLink variant="dark" className="justify-center">
                View Payment Plans
              </CtaLink>
              <Link
                to="/Workshop/IndividualFamilyMasterclass/PastMasterclass"
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 font-[Arial] text-[10px] uppercase tracking-[0.34em] text-white transition-all duration-500 hover:border-white hover:bg-white/10"
              >
                <span>Past Masterclasses</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-14 grid gap-4 border-t border-white/15 pt-6 font-[Arial] text-[10px] uppercase tracking-[0.34em] text-white/62 sm:grid-cols-3">
              <p>150+ years of collective expertise</p>
              <p>Live Q&amp;A and guided clarity</p>
              <p>Foundations-first wellness learning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(26,20,16,0.08)] bg-[#FDFAF5]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-24">
          <div>
            <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A]">A Smarter Way To Learn</p>
            <h2 className="mt-5 font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,5vw,68px)] leading-[0.96]">
              Less noise.
              <br />
              <span className="text-[rgba(26,20,16,0.45)]">More usable wisdom.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="max-w-[620px] font-[Arial] text-[14px] leading-[1.9] text-[rgba(26,20,16,0.7)]">
              These live sessions break down health topics into essentials you can understand, implement, and sustain without overwhelm.
            </p>
            <p className="max-w-[620px] font-[Arial] text-[14px] leading-[1.9] text-[rgba(26,20,16,0.7)]">
              They are not a substitute for personalised care or medical treatment, but they do help you make clearer,
              better-informed decisions.
            </p>
            <CtaLink>Choose A Payment Plan</CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF6EE]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="block h-px w-10 bg-[#E8640A]" />
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                  Upcoming Masterclasses
                </p>
              </div>
              <h2 className="mt-8 font-['EB_Garamond',Georgia,serif] italic text-[clamp(42px,5.4vw,82px)] leading-[0.95]">
                Inside your
                <br />
                learning experience.
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <p className="max-w-[460px] font-[Arial] text-[14px] leading-[1.9] text-[rgba(26,20,16,0.64)] lg:text-right">
                A more curated learning format designed with the quiet confidence of an editorial collection, not a
                crowded feature grid.
              </p>
              <CtaLink variant="dark">Reserve Through Payment</CtaLink>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {upcomingHighlights.map((item, index) => (
              <article
                key={item.title}
                className="group border-l border-[rgba(26,20,16,0.12)] pl-5 transition-transform duration-700 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE4DA]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.05),rgba(14,12,10,0.2)_55%,rgba(14,12,10,0.72))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-white/70">
                      {item.tone}
                    </p>
                  </div>
                </div>

                <div className="pt-5">
                  <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[rgba(26,20,16,0.42)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-[Arial] text-[18px] uppercase tracking-[0.12em] text-[#1A1410]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[27ch] font-[Arial] text-[13px] leading-[1.8] text-[rgba(26,20,16,0.62)]">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[rgba(26,20,16,0.08)] bg-[#0F0A06] text-[#FDFAF5]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src={audienceVideo}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.36),rgba(10,8,6,0.62)_38%,rgba(10,8,6,0.9))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_center,rgba(232,100,10,0.1),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A]">
                Who Will Benefit
              </p>
              <h2 className="mt-5 font-['EB_Garamond',Georgia,serif] italic text-[clamp(40px,5vw,68px)] leading-[0.96] text-white">
                Built for different
                <br />
                kinds of learners.
              </h2>
              <p className="mt-6 max-w-[420px] font-[Arial] text-[14px] leading-[1.9] text-white/68">
                A calmer learning format for people who want clarity, rhythm, and practical direction.
              </p>

              <div className="mt-8">
                <CtaLink variant="dark">See Payment Options</CtaLink>
              </div>
            </div>

            <div className="space-y-5">
              {audienceCards.map(({ title, copy, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 56 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-[30px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/[0.1] lg:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">
                        0{index + 1}
                      </p>
                      <h3 className="mt-5 font-['EB_Garamond',Georgia,serif] italic text-[32px] leading-[1] text-white">
                        {title}
                      </h3>
                      <p className="mt-3 font-[Arial] text-[13px] uppercase tracking-[0.18em] text-white/62">
                        {copy}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-black/20 text-[#E8640A]">
                      <Icon size={18} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PastMasterclassesSection />
      <AboutLukeSection CtaLink={CtaLink} />
      <DisclaimerSection CtaLink={CtaLink} />

      <section className="bg-[#1A1410] text-[#FDFAF5]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 text-center md:px-10 lg:px-16 lg:py-24">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.38em] text-[#E8640A]">Begin with clarity</p>
          <h2 className="mt-6 font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,5vw,70px)] leading-[0.98]">
            Ready for your next
            <br />
            masterclass?
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] font-[Arial] text-[14px] leading-[1.9] text-white/65">
            Choose your payment plan, secure your place, and join a live session built to strengthen your foundations.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <CtaLink variant="dark">View Payment Plans</CtaLink>
            <Link
              to="/Workshop/IndividualFamilyMasterclass/PastMasterclass"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 font-[Arial] text-[10px] uppercase tracking-[0.34em] text-white transition-all duration-500 hover:border-white hover:bg-white/5"
            >
              <span>Past Masterclasses</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      </div>

      <div
        id="primary-menu"
        className={`primary-menu${isMenuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={isMenuOpen ? 'false' : 'true'}
      >
        <button
          type="button"
          className="primary-menu-scrim"
          aria-label="Close menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside className="primary-menu-panel" aria-label="Site menu">
          <div className="primary-menu-backdrop" aria-hidden="true">
            <img src={heroPoster} alt="" />
            <div className="primary-menu-tint" />
          </div>

          <div className="primary-menu-head">
            <Link
              to="/"
              className="primary-menu-logo"
              aria-label="Luke Coutinho home"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={lcLogo} alt="Luke Coutinho" />
            </Link>

            <button
              className="primary-menu-close"
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="primary-menu-nav" aria-label="Primary navigation">
            <ul>
              {navigationLinks.map((link, index) => (
                <li
                  key={link.label}
                  style={{ '--menu-delay': `${120 + index * 70}ms` }}
                >
                  <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="primary-menu-foot">
            <p>Integrative Lifestyle &amp; Wellness · Mumbai · Worldwide</p>
          </div>
        </aside>
      </div>

      <div
        id="consult-drawer"
        className={`consult-drawer${isConsultOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={isConsultOpen ? 'false' : 'true'}
        aria-label="Book a consultation"
      >
        <button
          type="button"
          className="consult-scrim"
          aria-label="Close booking panel"
          tabIndex={isConsultOpen ? 0 : -1}
          onClick={() => setIsConsultOpen(false)}
        />

        <aside className="consult-panel">
          <header className="consult-head">
            <div>
              <p className="consult-eyebrow">Begin Your Journey</p>
              <h2 className="consult-title">Book a Consultation</h2>
            </div>
            <button
              type="button"
              className="consult-close"
              aria-label="Close"
              onClick={() => setIsConsultOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <p className="consult-lede">
            Share a few details and our team will reach out within 24 hours to compose a wellness journey around your
            goals.
          </p>

          {consultStatus === 'sent' ? (
            <div className="consult-success" role="status">
              <p className="consult-eyebrow">Thank you</p>
              <h3>We have received your request.</h3>
              <p>A wellness concierge will be in touch shortly at the contact details you shared.</p>
              <button
                type="button"
                className="consult-submit is-ghost"
                onClick={() => {
                  setConsultStatus('idle');
                  setIsConsultOpen(false);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <form className="consult-form" onSubmit={handleConsultSubmit}>
              <label className="consult-field">
                <span>Full Name</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>

              <div className="consult-row">
                <label className="consult-field">
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label className="consult-field">
                  <span>Phone</span>
                  <input type="tel" name="phone" required autoComplete="tel" />
                </label>
              </div>

              <div className="consult-row">
                <label className="consult-field">
                  <span>Country / Region</span>
                  <input type="text" name="country" required autoComplete="country-name" />
                </label>
                <label className="consult-field">
                  <span>Preferred Date</span>
                  <input type="date" name="date" />
                </label>
              </div>

              <label className="consult-field">
                <span>Area of Interest</span>
                <select name="program" defaultValue="">
                  <option value="" disabled>Select a programme</option>
                  <option value="masterclass">Masterclass</option>
                  <option value="signature">Signature Wellness</option>
                  <option value="cancer">Special Cancer Care</option>
                  <option value="gut">Gut Care</option>
                  <option value="pregnancy">Pregnancy Care</option>
                  <option value="other">Something else</option>
                </select>
              </label>

              <label className="consult-field">
                <span>Briefly, what brings you here?</span>
                <textarea name="message" rows="4" />
              </label>

              <button
                type="submit"
                className="consult-submit"
                disabled={consultStatus === 'sending'}
              >
                {consultStatus === 'sending' ? 'Submitting…' : 'Request Consultation'}
              </button>

              <p className="consult-fineprint">
                By submitting, you agree to be contacted by Luke Coutinho&apos;s team regarding your enquiry.
              </p>
            </form>
          )}
        </aside>
      </div>
    </>
  );
}

export default Home;

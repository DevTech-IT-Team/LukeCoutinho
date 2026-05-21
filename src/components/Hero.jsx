import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import lcLogo from '../assets/LClogoo.png';
import clip1 from '../assets/heroclips/lukehero.mp4';
import clip2 from '../assets/heroclips/Lukehero2.mp4';
import clip3 from '../assets/heroclips/Lukehero3.mp4';
import clip4 from '../assets/heroclips/Lukehero4.mp4';
import clip5 from '../assets/heroclips/Lukehero5.mp4';
import './Hero.css';

const allCourses = [
  {
    id: 'nutrition-mastery',
    title: 'Nutrition Mastery',
    subtitle: 'Cellular healing through nutrition',
    category: 'Nutrition',
    lessons: 12,
    duration: '8 Weeks',
    level: 'Beginner',
    price: '$99',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'advanced-nutrition',
    title: 'Advanced Nutrition',
    subtitle: 'Clinical nutrition protocols',
    category: 'Nutrition',
    lessons: 18,
    duration: '12 Weeks',
    level: 'Advanced',
    price: '$199',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'mindset-blueprint',
    title: 'Mindset Blueprint',
    subtitle: 'Mental resilience and emotional mastery',
    category: 'Mindset',
    lessons: 10,
    duration: '6 Weeks',
    level: 'Intermediate',
    price: '$120',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'focus-clarity',
    title: 'Focus & Clarity',
    subtitle: 'Peak performance and productivity',
    category: 'Mindset',
    lessons: 14,
    duration: '7 Weeks',
    level: 'Advanced',
    price: '$149',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    subtitle: 'Movement and strength optimization',
    category: 'Fitness',
    lessons: 15,
    duration: '10 Weeks',
    level: 'Advanced',
    price: '$149',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'body-reset',
    title: 'Body Reset Program',
    subtitle: 'Complete metabolic transformation',
    category: 'Fitness',
    lessons: 16,
    duration: '9 Weeks',
    level: 'Intermediate',
    price: '$179',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'deep-healing',
    title: 'Deep Healing',
    subtitle: 'Recovery and holistic transformation',
    category: 'Healing',
    lessons: 9,
    duration: '5 Weeks',
    level: 'Beginner',
    price: '$89',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'gut-healing',
    title: 'Gut Healing Protocol',
    subtitle: 'Restore digestion and immunity',
    category: 'Healing',
    lessons: 11,
    duration: '6 Weeks',
    level: 'Intermediate',
    price: '$110',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',
  },
];

const navigationLinks = [
  { label: 'Heal from Within', to: '/about/approach' },
  { label: 'Wellness Programs', to: '/programs/signature-wellness' },
  { label: 'Masterclass', to: '/masterclass' },
  { label: 'Courses', to: '/learn/learninghub/home' },
  { label: 'Blogs', to: '/Learn/Blogs/Home' },
  { label: 'Recipes', to: '/bharat/dish' },
  { label: 'eBooks', to: '/resources' },
  { label: 'Podcast', to: '/Podcast/Podcast' },
  { label: 'Consult', to: '/book-consult' },
];

const slides = [
  {
    eyebrow: 'The Approach',
    title: 'Heal the Root Cause',
    sub: 'Foundational Medicine Approach',
    cta: 'Become a Member',
    to: '/masterclass',
    video: clip5,
  },
  {
    eyebrow: 'Project',
    title: 'Heal from Within',
    sub: 'An Integrative Lifestyle Collection',
    cta: 'Discover More',
    to: '/programs/signature-wellness',
    video: clip1,
  },
  {
    eyebrow: 'A Collection',
    title: 'The Bharat Dish',
    sub: 'Ancient Wisdom on the Plate',
    cta: 'Discover Recipes',
    to: '/bharat/dish',
    video: clip2,
  },
  {
    eyebrow: 'An Introduction to Possibility',
    title: 'Wellness Programs',
    sub: 'Composed Around You',
    cta: 'Explore Programs',
    to: '/programs/signature-wellness',
    video: clip3,
  },
  {
    eyebrow: 'Conversations',
    title: 'The Podcast',
    sub: 'Modern Science · Lived Wisdom',
    cta: 'Listen Now',
    to: '/Podcast/Podcast',
    video: clip4,
  },
];

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [consultStatus, setConsultStatus] = useState('idle');
  const [searchQuery, setSearchQuery] = useState('');

  const wrapperRef = useRef(null);
  const videoRefs = useRef([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const threshold = wrapper
        ? wrapper.offsetTop + wrapper.offsetHeight - window.innerHeight - 40
        : 80;
      setIsScrolled(window.scrollY > threshold);
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
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    let rafId = null;
    const compute = () => {
      rafId = null;
      const rect = wrapper.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = wrapper.offsetHeight - viewport;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const fraction = total > 0 ? scrolled / total : 0;
      const slideFraction = fraction * slides.length;
      const idx = Math.min(slides.length - 1, Math.max(0, Math.floor(slideFraction)));
      const within = Math.min(1, Math.max(0, slideFraction - idx));
      setActiveIndex((prev) => (prev === idx ? prev : idx));
      setProgress(within);
    };
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', compute);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) video.play().catch(() => { });
      else video.pause();
    });
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsConsultOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.body.style.overflow = isMenuOpen || isConsultOpen || isSearchOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isConsultOpen, isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 120);
    }
    if (!isSearchOpen) setSearchQuery('');
  }, [isSearchOpen]);

  const searchResults = searchQuery.trim().length > 0
    ? allCourses.filter((c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  const scrollToSlide = (idx) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const total = wrapper.offsetHeight - window.innerHeight;
    const target =
      wrapper.getBoundingClientRect().top +
      window.scrollY +
      (total * idx) / slides.length +
      4;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

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
        className={`hero-nav${isScrolled ? ' is-scrolled' : ''}${isMenuOpen ? ' is-menu-open' : ''}`}
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

        <div className="nav-utilities">
          <Link to="/programs/signature-wellness" className="nav-utility sw">
            <span className="nav-utility-dot" aria-hidden="true" />
            <span>Signature Wellness Programs</span>
          </Link>
          <button
            type="button"
            className="nav-utility by"
            onClick={() => setIsConsultOpen(true)}
            aria-haspopup="dialog"
            aria-controls="consult-drawer"
            aria-expanded={isConsultOpen}
          >
            <span className="nav-utility-dot" aria-hidden="true" />
            <span>Book Your Consultation</span>
          </button>
          <button
            type="button"
            className="nav-search"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              width="15"
              height="15"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
        </div>
      </header>

      <section
        ref={wrapperRef}
        className="hero"
        style={{ height: `${slides.length * 100}vh` }}
        aria-label="Featured stories"
      >
        <div className="hero-stage">
          <div className="hero-media" aria-hidden="true">
            {slides.map((s, i) => (
              <video
                key={s.title}
                ref={(el) => { videoRefs.current[i] = el; }}
                className="hero-video"
                src={s.video}
                muted
                loop
                playsInline
                preload={i === 0 ? 'auto' : 'metadata'}
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transform: `scale(${i === activeIndex ? 1.0 + progress * 0.04 : 1.06})`,
                }}
              />
            ))}
          </div>

          <div className="hero-overlay" />
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-hairline" aria-hidden="true" />

          <ul className="hero-dots" aria-label="Slide navigation">
            {slides.map((s, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    className={`hero-dot${isActive ? ' is-active' : ''}`}
                    aria-label={`Go to ${s.title}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => scrollToSlide(i)}
                  >
                    <span className="hero-dot-ring" />
                    {isActive && (
                      <span
                        className="hero-dot-progress"
                        style={{
                          background: `conic-gradient(#FFFFFF ${progress * 360}deg, rgba(255,255,255,0) 0deg)`,
                        }}
                      />
                    )}
                    <span className="hero-dot-core" />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hero-content">
            {slides.map((s, i) => {
              const isActive = i === activeIndex;
              const offset = i === activeIndex ? 0 : i < activeIndex ? -32 : 32;
              return (
                <div
                  key={s.title}
                  className={`hero-slide${isActive ? ' is-active' : ''}`}
                  aria-hidden={!isActive}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `translateY(${offset}px)`,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <p className="hero-eyebrow">{s.eyebrow}</p>
                  <h1 className="hero-headline">{s.title}</h1>
                  <p className="hero-subline">{s.sub}</p>
                  <Link to="/masterclass" tabIndex={isActive ? 0 : -1} className="hero-cta">
                    Become a Member
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="hero-counter" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, '0')}{' '}
            <span>/ {String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>
      </section>

      {/* Primary menu */}
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
                <li key={link.label} style={{ '--menu-delay': `${120 + index * 70}ms` }}>
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

      {/* Consultation drawer */}
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
            Share a few details and our team will reach out within 24 hours to compose a wellness
            journey around your goals — integrative lifestyle, nutrition, emotional health and movement.
          </p>

          {consultStatus === 'sent' ? (
            <div className="consult-success" role="status">
              <p className="consult-eyebrow">Thank you</p>
              <h3>We have received your request.</h3>
              <p>A wellness concierge will be in touch shortly at the contact details you shared.</p>
              <button
                type="button"
                className="consult-submit is-ghost"
                onClick={() => { setConsultStatus('idle'); setIsConsultOpen(false); }}
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
                  <option value="signature">Signature Wellness</option>
                  <option value="cancer">Special Cancer Care</option>
                  <option value="gut">Gut Care</option>
                  <option value="pregnancy">Pregnancy Care</option>
                  <option value="corporate">Corporate Wellness</option>
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
                By submitting, you agree to be contacted by Luke Coutinho's team regarding your enquiry.
              </p>
            </form>
          )}
        </aside>
      </div>

      {/* Search overlay */}
      <div
        className={`search-overlay${isSearchOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={isSearchOpen ? 'false' : 'true'}
        aria-label="Search courses"
      >
        <button
          type="button"
          className="search-overlay-scrim"
          aria-label="Close search"
          tabIndex={isSearchOpen ? 0 : -1}
          onClick={() => setIsSearchOpen(false)}
        />

        <div className="search-overlay-panel">
          <div className="search-bar-wrap">
            <svg
              className="search-bar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <input
              ref={searchInputRef}
              type="search"
              className="search-bar-input"
              placeholder="Search courses, topics…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              tabIndex={isSearchOpen ? 0 : -1}
              autoComplete="off"
            />
            <button
              type="button"
              className="search-bar-close"
              aria-label="Close search"
              onClick={() => setIsSearchOpen(false)}
            >
              ×
            </button>
          </div>

          {searchQuery.trim().length > 0 ? (
            <div className="search-results">
              {searchResults.length === 0 ? (
                <p className="search-empty">No courses found for "{searchQuery}"</p>
              ) : (
                <ul className="search-result-list">
                  {searchResults.map((course) => (
                    <li key={course.id}>
                      <Link
                        to={`/course/${course.id}`}
                        className="search-result-item"
                        onClick={() => setIsSearchOpen(false)}
                        tabIndex={isSearchOpen ? 0 : -1}
                      >
                        <img
                          src={course.image}
                          alt={course.title}
                          className="search-result-thumb"
                        />
                        <div className="search-result-info">
                          <span className="search-result-category">{course.category}</span>
                          <p className="search-result-title">{course.title}</p>
                          <p className="search-result-sub">{course.subtitle}</p>
                        </div>
                        <div className="search-result-meta">
                          <span className="search-result-price">{course.price}</span>
                          <span className="search-result-dur">{course.duration}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="search-hints">
              <p className="search-hint-label">Popular</p>
              <div className="search-hint-tags">
                {['Nutrition', 'Mindset', 'Gut Healing', 'Fitness', 'Healing'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="search-hint-tag"
                    onClick={() => setSearchQuery(tag)}
                    tabIndex={isSearchOpen ? 0 : -1}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
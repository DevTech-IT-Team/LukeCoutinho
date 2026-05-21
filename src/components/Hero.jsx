import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lcLogo from '../assets/LClogoo.png';
import clip1 from '../assets/heroclips/lukehero.mp4';
import clip2 from '../assets/heroclips/Lukehero2.mp4';
import clip3 from '../assets/heroclips/Lukehero3.mp4';
import clip4 from '../assets/heroclips/Lukehero4.mp4';
import clip5 from '../assets/heroclips/Lukehero5.mp4';
import './Hero.css';

const navigationLinks = [
  { label: 'Heal from Within', to: '#' },
  { label: 'Wellness Programs', to: '#' },
  { label: 'Masterclass', to: '/masterclass' },
  { label: 'Courses', to: '/learn/learninghub/home' },
  { label: 'Blogs', to: '/learn/blogs' },

  { label: 'Recipes', to: '/bharat/dish' },
  { label: 'eBooks', to: '/resources' },
  { label: 'Podcast', to: '/Podcast/Podcast' },
  { label: 'Consult', to: '/book-consult' },
];

const slides = [
  {
    eyebrow: 'The First Step',
    title: 'Begin Your Journey',
    sub: 'Foundational Medicine Consultations',
    cta: 'Book a Consult',
    to: '/book-consult',
    video: clip5,
  },
  {
    eyebrow: 'Guided Care',
    title: 'Integrative Protocols',
    sub: 'Expert coaching tailored to your biology',
    cta: 'Discover Our Approach',
    to: '/about/approach',
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
    eyebrow: 'The Destination',
    title: 'Signature Programs',
    sub: 'Composed Around You Post-Consult',
    cta: 'Understand Programs',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const wrapperRef = useRef(null);
  const videoRefs = useRef([]);

  // Nav stays transparent across all hero slides; switches to frosted only after the hero stack ends
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

  // Scroll-driven slide progression
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

  // Play only the active video
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) video.play().catch(() => { });
      else video.pause();
    });
  }, [activeIndex]);

  // Menu open/close behaviour
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // ?book=1 on homepage → full booking flow
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('book') === '1') {
      navigate('/book-consult');
      params.delete('book');
      const next = `${window.location.pathname}${params.toString() ? `?${params}` : ''}`;
      window.history.replaceState({}, '', next);
    }
  }, [navigate]);

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

  return (
    <>
      <header
        className={`hero-nav${isScrolled ? ' is-scrolled' : ''}${isMenuOpen ? ' is-menu-open' : ''
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

        <div className="nav-utilities">
          <Link
            to="/programs/signature-wellness"
            className="nav-utility sw"
          >
            <span className="nav-utility-dot" aria-hidden="true" />
            <span>Signature Wellness Programs</span>
          </Link>
          <Link to="/book-consult" className="nav-utility by">
            <span className="nav-utility-dot" aria-hidden="true" />
            <span>Book Your Consultation</span>
          </Link>
        </div>
      </header>

      <section
        ref={wrapperRef}
        className="hero"
        style={{ height: `${slides.length * 100}vh` }}
        aria-label="Featured stories"
      >
        <div className="hero-stage">
          {/* Video stack */}
          <div className="hero-media" aria-hidden="true">
            {slides.map((s, i) => (
              <video
                key={s.title}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className="hero-video"
                src={s.video}
                muted
                loop
                playsInline
                preload={i === 0 ? 'auto' : 'metadata'}
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transform: `scale(${i === activeIndex ? 1.0 + progress * 0.04 : 1.06
                    })`,
                }}
              />
            ))}
          </div>

          <div className="hero-overlay" />
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-hairline" aria-hidden="true" />

          {/* Dot pagination with conic progress */}
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
                          background: `conic-gradient(#FFFFFF ${progress * 360
                            }deg, rgba(255,255,255,0) 0deg)`,
                        }}
                      />
                    )}
                    <span className="hero-dot-core" />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Stacked slide content */}
          <div className="hero-content">
            {slides.map((s, i) => {
              const isActive = i === activeIndex;
              const offset =
                i === activeIndex ? 0 : i < activeIndex ? -32 : 32;
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
                  <Link
                    to="/masterclass"
                    tabIndex={isActive ? 0 : -1}
                    className="hero-cta"
                  >
                    Become a Member
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Slide counter */}
          <div className="hero-counter" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, '0')}{' '}
            <span>/ {String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>
      </section>

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
                <li
                  key={link.label}
                  style={{ '--menu-delay': `${120 + index * 70}ms` }}
                >
                  {link.to.startsWith('/#') || link.to === '#' ? (
                    <a
                      href={link.to}
                      onClick={(e) => {
                        if (link.to === '#') e.preventDefault();
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="primary-menu-foot">
            <p>Integrative Lifestyle &amp; Wellness · Mumbai · Worldwide</p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Hero;


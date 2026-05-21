import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import lcLogo from '../assets/LClogoo.png';
import {
  searchCourses,
  getCoursesByCategory,
  resolveTopicCategory,
} from '../lib/courseCatalog';
import {
  SITE_NAVIGATION_LINKS,
  SEARCH_TOPICS,
  HOME_HERO_SLIDE_COUNT,
} from '../data/siteNavigation';
import './Hero.css';

function isOverlayHeaderRoute(pathname) {
  return (
    pathname === '/' ||
    pathname === '/masterclass' ||
    pathname.startsWith('/Workshop/IndividualFamilyMasterclass/Home')
  );
}

function useHeaderScrolled() {
  const { pathname } = useLocation();
  const overlay = isOverlayHeaderRoute(pathname);
  const [isScrolled, setIsScrolled] = useState(!overlay);

  useEffect(() => {
    if (!overlay) {
      setIsScrolled(true);
      return undefined;
    }

    const compute = () => {
      if (pathname === '/') {
        const threshold =
          HOME_HERO_SLIDE_COUNT * window.innerHeight - window.innerHeight - 40;
        setIsScrolled(window.scrollY > threshold);
        return;
      }
      setIsScrolled(window.scrollY > window.innerHeight - 120);
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [pathname, overlay]);

  return isScrolled;
}

const SiteHeader = () => {
  const { pathname } = useLocation();
  const overlayHeader = isOverlayHeaderRoute(pathname);
  const isScrolled = useHeaderScrolled();
  const showSolidBar = !overlayHeader || isScrolled;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [browseCategory, setBrowseCategory] = useState(null);
  const searchInputRef = useRef(null);

  const q = searchQuery.trim();
  const searchResults = q
    ? searchCourses(q)
    : browseCategory
      ? getCoursesByCategory(browseCategory)
      : [];

  const resultsLabel = q
    ? `${searchResults.length} course${searchResults.length === 1 ? '' : 's'}`
    : browseCategory
      ? `${browseCategory} · ${searchResults.length} course${searchResults.length === 1 ? '' : 's'}`
      : '';

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.body.style.overflow = isMenuOpen || isSearchOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    if (!isSearchOpen) {
      setSearchQuery('');
      setBrowseCategory(null);
    }
  }, [isSearchOpen]);

  const openCategoryBrowse = (topic) => {
    const category = resolveTopicCategory(topic) || topic;
    setBrowseCategory(category);
    setSearchQuery('');
  };

  return (
    <>
      <header
        className={`hero-nav${showSolidBar || isSearchOpen ? ' is-scrolled' : ''}${!overlayHeader ? ' hero-nav--solid' : ''}${isMenuOpen ? ' is-menu-open' : ''}${isSearchOpen ? ' is-search-active' : ''}`}
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
          <Link to="/book-consult" className="nav-utility by">
            <span className="nav-utility-dot" aria-hidden="true" />
            <span>Book Your Consultation</span>
          </Link>
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
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
        </div>
      </header>

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
              {SITE_NAVIGATION_LINKS.map((link, index) => (
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
          <div className="search-overlay-inner">
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.trim()) setBrowseCategory(null);
                }}
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

            {q.length > 0 || browseCategory ? (
              <div className="search-results">
                {resultsLabel && (
                  <p className="search-results-count">{resultsLabel}</p>
                )}
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
                          alt=""
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
                <Link
                  to="/learn/learninghub/home"
                  className="search-view-all"
                  onClick={() => setIsSearchOpen(false)}
                >
                  View all courses in Learning Hub
                </Link>
              </div>
            ) : (
              <div className="search-hints">
                <p className="search-hint-label">Browse by category</p>
                <div className="search-hint-tags">
                  {SEARCH_TOPICS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="search-hint-tag"
                      onClick={() => openCategoryBrowse(tag)}
                      tabIndex={isSearchOpen ? 0 : -1}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <p className="search-hint-label search-hint-label--sub">Or type a topic above</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;

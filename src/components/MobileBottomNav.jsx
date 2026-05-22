import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Layers,
  GraduationCap,
  User,
  MoreHorizontal,
  X,
  Mic,
  BookOpen,
  Stethoscope,
  Mail,
} from 'lucide-react';
import './mobile-bottom-nav.css';

const PRIMARY = [
  { id: 'home', label: 'Home', to: '/', icon: Home },
  { id: 'programs', label: 'Programs', to: '/programs/signature-wellness', icon: Layers },
  { id: 'learn', label: 'Learn', to: '/learn/learninghub/home', icon: GraduationCap },
  { id: 'luke', label: 'Luke', to: '/about/story', icon: User },
];

const MORE = [
  { label: 'Consult', to: '/book-consult', icon: Stethoscope },
  { label: 'Podcast', to: '/Podcast/Podcast', icon: Mic },
  { label: 'Blogs', to: '/learn/blogs', icon: BookOpen },
  { label: 'Contact', to: '/ContactUs/ContactUs', icon: Mail },
];

function isActive(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function MobileBottomNav() {
  const { pathname } = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      {moreOpen && (
        <button
          type="button"
          className="lc-bottom-nav__backdrop"
          aria-label="Close menu"
          onClick={() => setMoreOpen(false)}
        />
      )}
      <div className={`lc-bottom-nav__sheet${moreOpen ? ' is-open' : ''}`} aria-hidden={!moreOpen}>
        <div className="lc-bottom-nav__sheet-head">
          <span>More</span>
          <button type="button" aria-label="Close" onClick={() => setMoreOpen(false)}>
            <X size={18} />
          </button>
        </div>
        <nav className="lc-bottom-nav__sheet-links">
          {MORE.map(({ label, to, icon: Icon }) => (
            <Link key={to} to={to} onClick={() => setMoreOpen(false)}>
              <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <nav className="lc-bottom-nav" aria-label="Mobile navigation">
        {PRIMARY.map(({ id, label, to, icon: Icon }) => (
          <Link
            key={id}
            to={to}
            className={`lc-bottom-nav__item${isActive(pathname, to) ? ' is-active' : ''}`}
            aria-current={isActive(pathname, to) ? 'page' : undefined}
          >
            <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
            <span>{label}</span>
          </Link>
        ))}
        <button
          type="button"
          className={`lc-bottom-nav__item${moreOpen ? ' is-active' : ''}`}
          aria-expanded={moreOpen}
          onClick={() => setMoreOpen((o) => !o)}
        >
          <MoreHorizontal size={20} strokeWidth={1.5} aria-hidden="true" />
          <span>More</span>
        </button>
      </nav>
    </>
  );
}

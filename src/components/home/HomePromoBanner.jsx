import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { getActivePromoBanners } from '../../data/bdContent';

const STORAGE_KEY = 'lc-promo-banner-dismissed';

export default function HomePromoBanner() {
  const banners = getActivePromoBanners();
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  if (dismissed || banners.length === 0) return null;

  const banner = banners[index % banners.length];

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  const next = () => setIndex((i) => (i + 1) % banners.length);

  return (
    <aside className="lc-promo-banner" role="region" aria-label="Promotional announcement">
      <div className="lc-promo-banner__inner">
        <span className="lc-promo-banner__label">{banner.label}</span>
        <p className="lc-promo-banner__headline">{banner.headline}</p>
        <p className="lc-promo-banner__sub">{banner.subline}</p>
        <Link to={banner.to} className="lc-promo-banner__cta">
          {banner.cta}
          <ArrowRight size={14} aria-hidden />
        </Link>
        {banners.length > 1 && (
          <button type="button" className="lc-promo-banner__next" onClick={next} aria-label="Next announcement">
            Next
          </button>
        )}
      </div>
      <button type="button" className="lc-promo-banner__close" onClick={dismiss} aria-label="Dismiss banner">
        <X size={16} />
      </button>
    </aside>
  );
}

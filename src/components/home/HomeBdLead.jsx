import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { BD_SPEAKER, getActivePromoBanners } from '../../data/bdContent';

const STORAGE_KEY = 'lc-promo-banner-dismissed';

/** Compact BD strip — CTAs only (forms live on /resources) */
export default function HomeBdLead() {
  const banners = getActivePromoBanners();
  const [promoIndex, setPromoIndex] = useState(0);
  const [promoDismissed, setPromoDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  const promo = banners.length && !promoDismissed ? banners[promoIndex % banners.length] : null;

  const dismissPromo = () => {
    setPromoDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="lc-bd-lead" aria-labelledby="bd-lead-title">
      {promo && (
        <div className="lc-bd-lead__promo">
          <span className="lc-bd-lead__promo-tag">{promo.label}</span>
          <p className="lc-bd-lead__promo-text">{promo.headline}</p>
          <Link to={promo.to} className="lc-bd-lead__promo-link">
            {promo.cta}
            <ArrowRight size={12} aria-hidden />
          </Link>
          {banners.length > 1 && (
            <button
              type="button"
              className="lc-bd-lead__promo-next"
              onClick={() => setPromoIndex((i) => i + 1)}
            >
              ···
            </button>
          )}
          <button type="button" className="lc-bd-lead__promo-close" onClick={dismissPromo} aria-label="Dismiss">
            <X size={14} />
          </button>
        </div>
      )}

      <div className="lc-bd-lead__inner">
        <p className="lc-bd-lead__eyebrow">{BD_SPEAKER.eyebrow}</p>
        <h2 id="bd-lead-title">{BD_SPEAKER.title}</h2>
        <p className="lc-bd-lead__sub">{BD_SPEAKER.subtitle}</p>
        <div className="lc-bd-lead__actions">
          <Link to="/resources?intent=speaker#enquire" className="lc-bd-lead__btn lc-bd-lead__btn--primary">
            Book Luke as speaker
            <ArrowRight size={14} aria-hidden />
          </Link>
          <Link to="/resources#enquire" className="lc-bd-lead__btn lc-bd-lead__btn--ghost">
            Corporate enquiry
          </Link>
          <Link to="/partners" className="lc-bd-lead__link">
            Preferred partners
          </Link>
        </div>
      </div>
    </section>
  );
}

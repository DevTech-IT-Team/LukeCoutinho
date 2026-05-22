import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HOME_QOL_CTA } from '../../data/homeVisuals';

export default function HomeQolCta() {
  const { title, lede, primaryCta, secondaryCta } = HOME_QOL_CTA;

  return (
    <section className="lc-qol-cta" aria-labelledby="home-qol-cta-title">
      <div className="lc-qol-cta__inner">
        <div className="lc-qol-cta__copy">
          <h2 id="home-qol-cta-title">{title}</h2>
          <p className="lc-qol-cta__lede">{lede}</p>
        </div>
        <div className="lc-qol-cta__actions">
          <Link to={primaryCta.to} className="lc-qol-cta__btn lc-qol-cta__btn--primary">
            {primaryCta.label}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
          <Link to={secondaryCta.to} className="lc-qol-cta__btn lc-qol-cta__btn--secondary">
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

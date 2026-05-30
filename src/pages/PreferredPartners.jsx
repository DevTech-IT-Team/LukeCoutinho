import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PREFERRED_PARTNERS_EDITORIAL } from '../data/bdContent';
import { HOME_PARTNER_LOGOS } from '../data/homeVisuals';
import './partners.css';

export default function PreferredPartners() {
  const { eyebrow, title, lede, intro, partners } = PREFERRED_PARTNERS_EDITORIAL;

  return (
    <div className="partners-page">
      <header className="partners-page__hero">
        <div className="partners-page__hero-inner">
          <p className="partners-page__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="partners-page__lede">{lede}</p>
          <p className="partners-page__intro">{intro}</p>
        </div>
      </header>

      <section className="partners-page__logos" aria-label="Partner logos">
        <ul>
          {HOME_PARTNER_LOGOS.map((p) => (
            <li key={p.name}>
              <img src={p.src} alt={p.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      <section className="partners-page__stories" aria-labelledby="partner-stories">
        <h2 id="partner-stories">Partnership stories</h2>
        <div className="partners-page__grid">
          {partners.map((p) => (
            <article key={p.name} className="partners-page__card">
              <p className="partners-page__region">{p.region}</p>
              <h3>{p.name}</h3>
              <p>{p.narrative}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-page__cta">
        <p>Interested in a partnership conversation?</p>
        <Link to="/resources?intent=partnership#enquire" className="partners-page__cta-btn">
          Enquire as a preferred partner
          <ArrowRight size={14} aria-hidden />
        </Link>
      </section>
    </div>
  );
}

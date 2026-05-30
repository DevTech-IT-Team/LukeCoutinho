import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users } from 'lucide-react';
import BdLeadForm from '../components/forms/BdLeadForm';
import HomeBdCaseStudies from '../components/home/HomeBdCaseStudies';
import { BD_CORPORATE } from '../data/bdContent';
import { HOME_PARTNER_LOGOS } from '../data/homeVisuals';
import '../components/consult/book-consult-flow.css';
import './corporate-wellness.css';

export default function CorporateWellnessPage() {
  return (
    <div className="corp-page">
      <header className="corp-page__hero">
        <div className="corp-page__hero-inner">
          <p className="corp-page__eyebrow">{BD_CORPORATE.eyebrow}</p>
          <h1>{BD_CORPORATE.title}</h1>
          <p className="corp-page__lede">{BD_CORPORATE.subtitle}</p>
        </div>
      </header>

      <section className="corp-page__split" aria-label="Who is this for">
        <article className="corp-page__path corp-page__path--corp">
          <Building2 size={22} className="corp-page__path-icon" aria-hidden />
          <h2>For organisations</h2>
          <p>
            Talks, webinars, QoL assessments, leadership wellness, and bespoke programs — tell us your goals
            below.
          </p>
          <a href="#enquire" className="corp-page__path-cta">
            Corporate enquiry form
            <ArrowRight size={14} aria-hidden />
          </a>
        </article>
        <article className="corp-page__path corp-page__path--individual">
          <Users size={22} className="corp-page__path-icon" aria-hidden />
          <h2>For individuals &amp; families</h2>
          <p>Signature wellness programs and masterclasses — not corporate BD.</p>
          <div className="corp-page__path-links">
            <Link to={BD_CORPORATE.individualLink}>{BD_CORPORATE.individualLabel}</Link>
            <Link to={BD_CORPORATE.masterclassLink}>{BD_CORPORATE.masterclassLabel}</Link>
          </div>
        </article>
      </section>

      <section className="corp-page__logos" aria-label="Trusted by">
        <p className="corp-page__logos-label">Trusted by global brands</p>
        <ul className="corp-page__logos-grid">
          {HOME_PARTNER_LOGOS.map((p) => (
            <li key={p.name}>
              <img src={p.src} alt={p.name} loading="lazy" />
            </li>
          ))}
        </ul>
        <Link to="/partners" className="corp-page__partners-link">
          Read preferred partner stories
          <ArrowRight size={14} aria-hidden />
        </Link>
      </section>

      <HomeBdCaseStudies />

      <section className="corp-page__form" id="enquire">
        <div className="corp-page__form-inner">
          <h2>Start your enquiry</h2>
          <p>
            High-quality leads only — share your context and our BD team will design a tailored proposal within
            24–48 hours.
          </p>
          <BdLeadForm defaultType="corporate-wellness" />
        </div>
      </section>
    </div>
  );
}

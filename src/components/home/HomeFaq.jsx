import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_FAQ_INTRO } from '../../data/homeVisuals';
import FaqFlipbook from './faq-flipbook/FaqFlipbook';

export default function HomeFaq() {
  return (
    <section className="lc-faq" aria-labelledby="home-faq-title">
      <div className="lc-faq__inner">
        <header className="lc-faq__head">
          <p className="lc-faq__eyebrow">{HOME_FAQ_INTRO.eyebrow}</p>
          <h2 id="home-faq-title">{HOME_FAQ_INTRO.title}</h2>
          <p className="lc-faq__lede">{HOME_FAQ_INTRO.lede}</p>
        </header>

        <FaqFlipbook />

        <p className="lc-faq__cta">
          Still unsure?{' '}
          <Link to="/book-consult">Book a consult</Link> or explore{' '}
          <Link to="/programs/signature-wellness">wellness programs</Link>.
        </p>
      </div>
    </section>
  );
}

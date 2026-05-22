import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME_FAQ_INTRO, HOME_FAQ_ITEMS } from '../../data/homeVisuals';

export default function HomeFaq() {
  const [openId, setOpenId] = useState(HOME_FAQ_ITEMS[0]?.id ?? null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="lc-faq" aria-labelledby="home-faq-title">
      <div className="lc-faq__inner">
        <header className="lc-faq__head">
          <p className="lc-faq__eyebrow">{HOME_FAQ_INTRO.eyebrow}</p>
          <h2 id="home-faq-title">{HOME_FAQ_INTRO.title}</h2>
          <p className="lc-faq__lede">{HOME_FAQ_INTRO.lede}</p>
        </header>

        <div className="lc-faq__list" role="list">
          {HOME_FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <article key={item.id} className={`lc-faq__item${isOpen ? ' is-open' : ''}`}>
                <h3 className="lc-faq__question-wrap">
                  <button
                    type="button"
                    id={buttonId}
                    className="lc-faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                  >
                    <span className="lc-faq__question">{item.question}</span>
                    <span className="lc-faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="lc-faq__panel"
                  hidden={!isOpen}
                >
                  {item.answer ? (
                    <p className="lc-faq__answer">{item.answer}</p>
                  ) : null}
                  {item.points?.length ? (
                    <ul className="lc-faq__points">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <p className="lc-faq__cta">
          Still unsure?{' '}
          <Link to="/book-consult">Book a consult</Link> or explore{' '}
          <Link to="/programs/signature-wellness">wellness programs</Link>.
        </p>
      </div>
    </section>
  );
}

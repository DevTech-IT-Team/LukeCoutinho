import React, { useEffect, useRef, useState } from 'react';
import { HOME_TESTIMONIALS } from '../../data/homeVisuals';
import imgResultsBg from '../../assets/micimg.png';

const ROTATE_MS = 5500;

export default function RealResults() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const story = HOME_TESTIMONIALS[active];

  useEffect(() => {
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setActive((i) => (i + 1) % HOME_TESTIMONIALS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const selectStory = (index) => {
    setActive(index);
    pausedRef.current = true;
  };

  return (
    <section className="lc-results" aria-labelledby="home-results-title">
      <img
        src={imgResultsBg}
        alt=""
        className="lc-results__bg"
        loading="lazy"
        aria-hidden="true"
      />
      <span className="lc-results__overlay" aria-hidden="true" />
      <div className="lc-results__inner">
        <header className="lc-results__head">
          <p className="lc-results__eyebrow">Real results</p>
          <h2 id="home-results-title">Lives transformed</h2>
        </header>

        <div
          className="lc-results__shell"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <ul className="lc-results__list" role="tablist" aria-label="Client stories">
            {HOME_TESTIMONIALS.map((item, index) => {
              const isActive = active === index;
              return (
                <li key={item.name} className="lc-results__list-item">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`lc-results__pick${isActive ? ' is-active' : ''}`}
                    onClick={() => selectStory(index)}
                  >
                    <span className="lc-results__pick-num">{item.num}</span>
                    <span className="lc-results__pick-thumb">
                      <img src={item.image} alt="" loading="lazy" />
                    </span>
                    <span className="lc-results__pick-meta">
                      <span className="lc-results__pick-name">{item.name}</span>
                      <span className="lc-results__pick-loc">{item.location}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <article
            className="lc-results__stage"
            role="tabpanel"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="lc-results__visual">
              {HOME_TESTIMONIALS.map((item, index) => (
                <img
                  key={item.name}
                  src={item.image}
                  alt=""
                  className={`lc-results__visual-img${index === active ? ' is-visible' : ''}`}
                  loading="lazy"
                />
              ))}
            </div>

            <div className="lc-results__copy">
              <span className="lc-results__quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="lc-results__quote">{story.quote}</blockquote>
              <footer className="lc-results__cite">
                <strong>{story.name}</strong>
                <span>{story.location}</span>
              </footer>
            </div>

            <div className="lc-results__progress" aria-hidden="true">
              {HOME_TESTIMONIALS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  tabIndex={-1}
                  className={`lc-results__dot${index === active ? ' is-active' : ''}`}
                  onClick={() => selectStory(index)}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

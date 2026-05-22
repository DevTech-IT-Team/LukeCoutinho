import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  HOME_PATHWAYS,
  HOME_HUB_INTRO,
  HOME_CONSULT,
  HOME_HUB_PROGRAMS,
  HOME_HUB_LEARN,
  HOME_HUB_EXPLORE,
} from '../../data/homeVisuals';

function HubTile({ item }) {
  const className = `lc-hub-tile${item.size === 'wide' ? ' lc-hub-tile--wide' : ''}`;
  const inner = (
    <>
      <img src={item.image} alt="" className="lc-hub-tile__img" loading="lazy" />
      <span className="lc-hub-tile__shade" aria-hidden="true" />
      <div className="lc-hub-tile__body">
        {item.badge ? <span className="lc-hub-tile__badge">{item.badge}</span> : null}
        <h3>{item.title}</h3>
        {item.line ? <p>{item.line}</p> : null}
        <span className="lc-hub-tile__cta">
          {item.cta}
          <ArrowRight size={14} aria-hidden="true" />
        </span>
      </div>
    </>
  );

  if (item.external) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={item.to} className={className}>
      {inner}
    </Link>
  );
}

export default function PathwayHub({ activeId, onSelect }) {
  const hubIntro = HOME_HUB_INTRO;

  return (
    <section id="journey" className="lc-hub" aria-labelledby="home-hub-title">
      <header className="lc-hub__head">
        <p className="lc-hub__eyebrow">{hubIntro.eyebrow}</p>
        <h2 id="home-hub-title" className="lc-hub__title">
          {hubIntro.title}
        </h2>
        <p className="lc-hub__lede">{hubIntro.lede}</p>
      </header>

      <div className="lc-hub__shell">
        <div className="lc-hub__tabs" role="tablist">
          {HOME_PATHWAYS.map((path) => (
            <button
              key={path.id}
              type="button"
              role="tab"
              aria-selected={activeId === path.id}
              className={`lc-hub__tab${activeId === path.id ? ' is-active' : ''}`}
              onClick={() => onSelect(path.id)}
            >
              <span className="lc-hub__tab-num">{path.num}</span>
              <span className="lc-hub__tab-label">{path.label}</span>
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className={`lc-hub__panel${activeId === 'care' ? ' is-active' : ''}`}
          hidden={activeId !== 'care'}
        >
          <div className="lc-hub-tile-grid lc-hub-tile-grid--consult">
            {HOME_CONSULT.map((c) => (
              <Link
                key={c.id}
                to={c.to}
                className={`lc-hub-tile${c.id === 'luke' ? ' lc-hub-tile--luke' : ''}`}
              >
                <img src={c.image} alt="" className="lc-hub-tile__img" loading="lazy" />
                <span className="lc-hub-tile__shade" aria-hidden="true" />
                <div className="lc-hub-tile__body">
                  <span className="lc-hub-tile__badge">{c.step}</span>
                  <h3>{c.title}</h3>
                  <p>{c.line}</p>
                  <span className="lc-hub-tile__cta">
                    {c.cta}
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          className={`lc-hub__panel lc-hub__panel--dense${activeId === 'programs' ? ' is-active' : ''}`}
          hidden={activeId !== 'programs'}
        >
          <div className="lc-hub-tile-grid lc-hub-tile-grid--dense">
            {HOME_HUB_PROGRAMS.map((item) => (
              <HubTile key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          className={`lc-hub__panel${activeId === 'learn' ? ' is-active' : ''}`}
          hidden={activeId !== 'learn'}
        >
          <div className="lc-hub-tile-grid lc-hub-tile-grid--learn">
            {HOME_HUB_LEARN.map((item) => (
              <HubTile key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          className={`lc-hub__panel lc-hub__panel--dense${activeId === 'explore' ? ' is-active' : ''}`}
          hidden={activeId !== 'explore'}
        >
          <div className="lc-hub-tile-grid lc-hub-tile-grid--dense">
            {HOME_HUB_EXPLORE.map((item) => (
              <HubTile key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

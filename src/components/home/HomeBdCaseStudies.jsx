import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BD_CASE_STUDIES } from '../../data/bdContent';

export default function HomeBdCaseStudies() {
  const [activeId, setActiveId] = useState(BD_CASE_STUDIES[0]?.id);

  const active = BD_CASE_STUDIES.find((c) => c.id === activeId) || BD_CASE_STUDIES[0];

  return (
    <section className="lc-bd-cases" aria-labelledby="bd-cases-title">
      <div className="lc-bd-cases__head">
        <p className="lc-bd-cases__eyebrow">Corporate proof</p>
        <h2 id="bd-cases-title">Work with teams like yours</h2>
        <p className="lc-bd-cases__lede">
          Every client engagement is different — explore how we have partnered with global brands.
        </p>
      </div>

      <div className="lc-bd-cases__shell">
        <div className="lc-bd-cases__tabs" role="tablist">
          {BD_CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={activeId === c.id}
              className={`lc-bd-cases__tab${activeId === c.id ? ' is-active' : ''}`}
              onClick={() => setActiveId(c.id)}
            >
              {c.company}
            </button>
          ))}
        </div>

        <div className="lc-bd-cases__panel" role="tabpanel">
          <p className="lc-bd-cases__sector">{active.sector}</p>
          <h3>{active.headline}</h3>
          <p className="lc-bd-cases__summary">{active.summary}</p>
          {active.quote && (
            <blockquote className="lc-bd-cases__quote">
              <p>{active.quote}</p>
              <cite>{active.author}</cite>
            </blockquote>
          )}
          <ul className="lc-bd-cases__outcomes">
            {active.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lc-bd-cases__foot">
        <Link to="/partners" className="lc-bd-cases__more">
          View preferred partners
          <ArrowRight size={14} aria-hidden />
        </Link>
        <Link to="/resources#enquire" className="lc-bd-cases__cta">
          Start a corporate enquiry
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getCrossSellForStream } from '../../data/brandContent';
import { trackCtaClick } from '../../lib/analytics';

/** Contextual cross-flow links (design brief §1.3.6) */
export default function CrossSellRail({ currentStream, title = 'Continue your journey' }) {
  const links = getCrossSellForStream(currentStream);
  if (!links.length) return null;

  return (
    <nav className="lc-cross-sell" aria-label="Related next steps">
      <p className="lc-cross-sell__title">{title}</p>
      <ul className="lc-cross-sell__list">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="lc-cross-sell__link"
              onClick={() => trackCtaClick(item.stream, 'cross_sell', item.href, { label: item.label })}
            >
              <span className="lc-cross-sell__label">{item.label}</span>
              <span className="lc-cross-sell__desc">{item.description}</span>
              <ArrowRight size={14} className="lc-cross-sell__arrow" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

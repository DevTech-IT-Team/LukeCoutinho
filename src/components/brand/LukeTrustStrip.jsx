import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LUKE_TRUST } from '../../data/brandContent';
import lukePortrait from '../../assets/Lukequotenew.jpg';
import './luke-trust.css';

/** Luke as trust engine — reusable across pages (design brief §1.3.2) */
export default function LukeTrustStrip({ compact = false, className = '' }) {
  const content = LUKE_TRUST;

  return (
    <aside
      className={`lc-luke-trust${compact ? ' lc-luke-trust--compact' : ''} ${className}`.trim()}
      aria-label="About Luke Coutinho"
    >
      <div className="lc-luke-trust__media">
        <img src={lukePortrait} alt="Luke Coutinho" width={compact ? 72 : 120} height={compact ? 72 : 120} />
      </div>
      <div className="lc-luke-trust__copy">
        <p className="lc-luke-trust__eyebrow">{content.eyebrow}</p>
        <blockquote className="lc-luke-trust__quote">{content.quote}</blockquote>
        {!compact && <p className="lc-luke-trust__bio">{content.bio}</p>}
        <Link to={content.storyHref} className="lc-luke-trust__link">
          {content.cta}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}

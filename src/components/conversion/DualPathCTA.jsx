import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { trackCtaClick } from '../../lib/analytics';
import './dual-path.css';

/**
 * Dual-path conversion — self-serve purchase + human-assisted lead gen (design brief §1.3.1).
 */
export default function DualPathCTA({
  stream,
  primaryLabel = 'Enroll now',
  onPrimaryClick,
  primaryHref,
  secondaryLabel = 'Book a consultation',
  secondaryHref = '/book-consult',
  secondaryHint,
  className = '',
}) {
  const handlePrimary = () => {
    trackCtaClick(stream, 'self_serve', primaryHref || 'payment');
    onPrimaryClick?.();
  };

  const handleSecondary = () => {
    trackCtaClick(stream, 'human_assisted', secondaryHref);
  };

  return (
    <div className={`lc-dual-path ${className}`.trim()}>
      {onPrimaryClick ? (
        <button type="button" className="lc-dual-path__primary" onClick={handlePrimary}>
          <span>{primaryLabel}</span>
          <ArrowRight size={14} aria-hidden="true" />
        </button>
      ) : (
        <Link to={primaryHref} className="lc-dual-path__primary" onClick={handlePrimary}>
          <span>{primaryLabel}</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}

      <Link to={secondaryHref} className="lc-dual-path__secondary" onClick={handleSecondary}>
        <Phone size={14} aria-hidden="true" />
        <span>
          {secondaryLabel}
          {secondaryHint && <small>{secondaryHint}</small>}
        </span>
      </Link>
    </div>
  );
}

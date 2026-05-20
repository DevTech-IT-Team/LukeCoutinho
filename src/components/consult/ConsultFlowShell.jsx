import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './book-consult-flow.css';

const STEPS = [
  { id: 1, label: 'Choose option' },
  { id: 2, label: 'Select service' },
  { id: 3, label: 'Date & time' },
];

export default function ConsultFlowShell({
  step,
  title,
  subtitle,
  children,
  backTo,
  backLabel = 'Back',
  footer,
}) {
  return (
    <div className="bcf-page">
      <div className="bcf-top">
        <Link to="/" className="bcf-home-link">
          Luke Coutinho
        </Link>
      </div>

      <div className="bcf-container">
        <nav className="bcf-steps" aria-label="Booking progress">
          {STEPS.map((s) => {
            const done = s.id < step;
            const active = s.id === step;
            return (
              <div
                key={s.id}
                className={`bcf-step${active ? ' is-active' : ''}${done ? ' is-done' : ''}`}
              >
                <span className="bcf-step-num">{done ? '✓' : s.id}</span>
                <span className="bcf-step-label">{s.label}</span>
              </div>
            );
          })}
        </nav>

        <header className="bcf-header">
          <h1 className="bcf-title">{title}</h1>
          {subtitle && <p className="bcf-subtitle">{subtitle}</p>}
        </header>

        <div className="bcf-body">{children}</div>

        {footer && <footer className="bcf-footer">{footer}</footer>}
      </div>

      {backTo && (
        <div className="bcf-back-row">
          <Link to={backTo} className="bcf-back-btn">
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

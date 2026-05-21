import React from 'react';
import SectionEyebrow from './SectionEyebrow';

/**
 * Two-column editorial header: heading left, body copy right — aligned at top.
 */
export default function EditorialMasthead({
  eyebrow,
  title,
  titleAccent,
  light = false,
  children,
  className = '',
}) {
  return (
    <div className={`lc-masthead ${className}`.trim()}>
      <div className="lc-masthead-title-col">
        {eyebrow && <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>}
        <h2 className={`lc-masthead-title${light ? ' lc-masthead-title--light' : ''}`}>
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="lc-masthead-title-accent">{titleAccent}</span>
            </>
          )}
        </h2>
      </div>
      {children && <div className={`lc-masthead-body${light ? ' lc-masthead-body--light' : ''}`}>{children}</div>}
    </div>
  );
}

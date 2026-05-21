import React from 'react';

/** Consistent eyebrow line + label above section headings */
export default function SectionEyebrow({ children, light = false }) {
  return (
    <div className="lc-eyebrow">
      <span className={`lc-eyebrow-line${light ? ' lc-eyebrow-line--light' : ''}`} aria-hidden="true" />
      <p className={`lc-eyebrow-text${light ? ' lc-eyebrow-text--light' : ''}`}>{children}</p>
    </div>
  );
}

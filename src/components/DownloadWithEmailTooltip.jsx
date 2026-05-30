import React, { useState } from 'react';

const STORAGE_KEY = 'lc-download-email-dismissed';

/** Optional email capture on first PDF click — download is never blocked */
export default function DownloadWithEmailTooltip({ href, children, className = '', downloadLabel }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [email, setEmail] = useState('');

  const openDownload = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
    setShowTooltip(false);
  };

  const handleClick = (e) => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    e.preventDefault();
    setShowTooltip(true);
  };

  const dismissAndDownload = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    openDownload();
  };

  const submitEmail = (e) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, '1');
    openDownload();
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
        aria-label={downloadLabel}
      >
        {children}
      </a>

      {showTooltip && (
        <div
          className="lc-download-tooltip"
          role="dialog"
          aria-modal="true"
          aria-label="Optional email before download"
        >
          <button
            type="button"
            className="lc-download-tooltip__scrim"
            aria-label="Close"
            onClick={() => setShowTooltip(false)}
          />
          <div className="lc-download-tooltip__panel">
            <p className="lc-download-tooltip__eyebrow">Optional</p>
            <p className="lc-download-tooltip__title">Stay updated with free wellness guides?</p>
            <form onSubmit={submitEmail} className="lc-download-tooltip__form">
              <label className="sr-only" htmlFor="download-email">
                Email
              </label>
              <input
                id="download-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="lc-download-tooltip__primary">
                Download PDF
              </button>
            </form>
            <button type="button" className="lc-download-tooltip__skip" onClick={dismissAndDownload}>
              Skip — download now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

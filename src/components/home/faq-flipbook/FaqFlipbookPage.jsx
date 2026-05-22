import React, { forwardRef } from 'react';

export const FaqFlipbookPageShell = forwardRef(function FaqFlipbookPageShell(
  { children, className = '' },
  ref,
) {
  return (
    <div ref={ref} className={`faq-flipbook__page ${className}`.trim()}>
      <div className="faq-flipbook__page-inner">{children}</div>
    </div>
  );
});

export const FaqFlipbookCoverFront = forwardRef(function FaqFlipbookCoverFront(
  { intro },
  ref,
) {
  return (
    <FaqFlipbookPageShell ref={ref} className="faq-flipbook__page--cover-front">
      <div className="faq-flipbook__cover-brand">
        <span className="faq-flipbook__cover-mark">LC</span>
        <span className="faq-flipbook__cover-name">Luke Coutinho</span>
      </div>
      <p className="faq-flipbook__cover-eyebrow">{intro.eyebrow}</p>
      <h3 className="faq-flipbook__cover-title">{intro.title}</h3>
      <p className="faq-flipbook__cover-lede">{intro.lede}</p>
      <ul className="faq-flipbook__cover-stats">
        {intro.stats?.map((stat) => (
          <li key={stat.label}>
            <span className="faq-flipbook__cover-stat-value">{stat.value}</span>
            <span className="faq-flipbook__cover-stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>
      <p className="faq-flipbook__cover-hint">Open the book →</p>
    </FaqFlipbookPageShell>
  );
});

export const FaqFlipbookCoverBack = forwardRef(function FaqFlipbookCoverBack(
  { children },
  ref,
) {
  return (
    <FaqFlipbookPageShell ref={ref} className="faq-flipbook__page--cover-back">
      <p className="faq-flipbook__cover-eyebrow">Next step</p>
      <h3 className="faq-flipbook__cover-title">Ready to begin?</h3>
      <div className="faq-flipbook__cover-actions">{children}</div>
      <p className="faq-flipbook__cover-hint">← Flip back anytime</p>
    </FaqFlipbookPageShell>
  );
});

export const FaqFlipbookFaqPage = forwardRef(function FaqFlipbookFaqPage(
  { item, pageNumber, totalPages },
  ref,
) {
  const label = `${String(pageNumber).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;

  return (
    <FaqFlipbookPageShell ref={ref} className="faq-flipbook__page--faq">
      <header className="faq-flipbook__article-head">
        <span className="faq-flipbook__article-tag">FAQ</span>
        <span className="faq-flipbook__article-page">{label}</span>
      </header>
      <h3 className="faq-flipbook__question">{item.question}</h3>
      {item.answer ? <p className="faq-flipbook__answer">{item.answer}</p> : null}
      {item.points?.length ? (
        <ul className="faq-flipbook__points">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </FaqFlipbookPageShell>
  );
});

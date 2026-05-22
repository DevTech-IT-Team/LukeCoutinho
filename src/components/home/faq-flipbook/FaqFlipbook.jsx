import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Link } from 'react-router-dom';
import { HOME_FAQ_INTRO, HOME_FAQ_ITEMS } from '../../../data/homeVisuals';
import { FAQ_FLIPBOOK_HINT, FAQ_FLIPBOOK_STATS } from './constants';
import {
  FaqFlipbookCoverBack,
  FaqFlipbookCoverFront,
  FaqFlipbookFaqPage,
} from './FaqFlipbookPage';
import './faq-flipbook.css';

const FAQ_COUNT = HOME_FAQ_ITEMS.length;
const CONTENT_START_INDEX = 1;

function getBookDimensions(containerWidth) {
  const width = containerWidth || 900;
  const isPortrait = width < 720;

  if (isPortrait) {
    const pageWidth = Math.min(Math.max(width - 32, 260), 400);
    const pageHeight = Math.round(pageWidth * 1.38);
    return { pageWidth, pageHeight, isPortrait: true };
  }

  const pageWidth = Math.min(Math.max(Math.floor((width - 48) / 2), 280), 420);
  const pageHeight = Math.round(pageWidth * 1.34);
  return { pageWidth, pageHeight, isPortrait: false };
}

function getFaqIndexFromBookPage(pageIndex) {
  const faqIndex = pageIndex - CONTENT_START_INDEX;
  if (faqIndex < 0 || faqIndex >= FAQ_COUNT) return null;
  return faqIndex;
}

export default function FaqFlipbook() {
  const bookRef = useRef(null);
  const containerRef = useRef(null);
  const [dims, setDims] = useState(() => getBookDimensions(900));
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setPageCount] = useState(FAQ_COUNT + 2);
  const [bookState, setBookState] = useState('read');
  const [orientation, setOrientation] = useState('landscape');

  const faqIndex = getFaqIndexFromBookPage(pageIndex);
  const activeItem = faqIndex !== null ? HOME_FAQ_ITEMS[faqIndex] : null;

  const syncBookMeta = useCallback(() => {
    const api = bookRef.current?.pageFlip?.();
    if (!api) return;
    setPageCount(api.getPageCount());
    setPageIndex(api.getCurrentPageIndex());
    setOrientation(api.getOrientation());
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setDims(getBookDimensions(entry.contentRect.width));
    });

    observer.observe(node);
    setDims(getBookDimensions(node.offsetWidth));

    return () => observer.disconnect();
  }, []);

  const handleFlip = useCallback((event) => {
    setPageIndex(event.data);
  }, []);

  const handleInit = useCallback(() => {
    syncBookMeta();
  }, [syncBookMeta]);

  const handleOrientation = useCallback((event) => {
    setOrientation(event.data);
    syncBookMeta();
  }, [syncBookMeta]);

  const handleStateChange = useCallback((event) => {
    setBookState(event.data);
  }, []);

  const flipNext = useCallback(() => {
    bookRef.current?.pageFlip?.().flipNext('top');
  }, []);

  const flipPrev = useCallback(() => {
    bookRef.current?.pageFlip?.().flipPrev('top');
  }, []);

  const isBusy = bookState === 'flipping';
  const atStart = pageIndex <= 0;
  const atEnd = pageIndex >= pageCount - 1;

  const statusText = useMemo(() => {
    if (pageIndex === 0) return HOME_FAQ_INTRO.title;
    if (pageIndex >= pageCount - 1) return 'Book a consult or explore programs';
    return activeItem?.question ?? HOME_FAQ_INTRO.title;
  }, [activeItem, pageCount, pageIndex]);

  const coverIntro = useMemo(
    () => ({
      ...HOME_FAQ_INTRO,
      stats: FAQ_FLIPBOOK_STATS,
    }),
    [],
  );

  return (
    <div className="faq-flipbook" ref={containerRef} aria-live="polite">
      <div className="faq-flipbook__stage">
        <div className="faq-flipbook__hardcover" aria-hidden="true">
          <span className="faq-flipbook__hardcover-spine" />
        </div>

        <HTMLFlipBook
          ref={bookRef}
          className="faq-flipbook__canvas"
          width={dims.pageWidth}
          height={dims.pageHeight}
          size="stretch"
          minWidth={260}
          maxWidth={420}
          minHeight={340}
          maxHeight={600}
          showCover
          drawShadow
          maxShadowOpacity={0.62}
          flippingTime={780}
          usePortrait={dims.isPortrait}
          mobileScrollSupport
          swipeDistance={24}
          useMouseEvents
          autoSize
          clickEventForward
          onFlip={handleFlip}
          onInit={handleInit}
          onChangeOrientation={handleOrientation}
          onChangeState={handleStateChange}
        >
          <FaqFlipbookCoverFront intro={coverIntro} />
          {HOME_FAQ_ITEMS.map((item, index) => (
            <FaqFlipbookFaqPage
              key={item.id}
              item={item}
              pageNumber={index + 1}
              totalPages={FAQ_COUNT}
            />
          ))}
          <FaqFlipbookCoverBack>
            <Link to="/book-consult" className="faq-flipbook__link-btn">
              Book a consult
            </Link>
            <Link to="/programs/signature-wellness" className="faq-flipbook__link-btn faq-flipbook__link-btn--ghost">
              Wellness programs
            </Link>
          </FaqFlipbookCoverBack>
        </HTMLFlipBook>
      </div>

      <div className="faq-flipbook__controls">
        <button
          type="button"
          className="faq-flipbook__nav-btn"
          onClick={flipPrev}
          disabled={isBusy || atStart}
          aria-label="Previous page"
        >
          ← Prev
        </button>

        <div className="faq-flipbook__meta">
          <p className="faq-flipbook__status">
            <strong>{statusText}</strong>
          </p>
          <p className="faq-flipbook__hint">{FAQ_FLIPBOOK_HINT}</p>
          <p className="faq-flipbook__pager" aria-live="polite">
            Page {Math.min(pageIndex + 1, pageCount)} of {pageCount}
            {orientation === 'portrait' ? ' · Mobile view' : ' · Spread view'}
          </p>
        </div>

        <button
          type="button"
          className="faq-flipbook__nav-btn"
          onClick={flipNext}
          disabled={isBusy || atEnd}
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

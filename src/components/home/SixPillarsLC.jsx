import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import {
  HOME_LC_PILLARS,
  youtubeEmbedUrl,
  youtubeThumbnail,
} from '../../data/homeVisuals';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const PILLAR_COUNT = HOME_LC_PILLARS.length;

const PILLAR_SLIDES = [
  ...HOME_LC_PILLARS,
  ...HOME_LC_PILLARS,
  ...HOME_LC_PILLARS,
];

function PillarVideoModal({ pillar, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div
      className="lc-six-pillars__modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pillar-video-title"
    >
      <button
        type="button"
        className="lc-six-pillars__modal-scrim"
        aria-label="Close video"
        onClick={onClose}
      />
      <div
        className="lc-six-pillars__modal-panel"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className="lc-six-pillars__modal-inner">
          <button
            ref={closeRef}
            type="button"
            className="lc-six-pillars__modal-close"
            aria-label="Close video"
            onClick={onClose}
          >
            <X size={22} strokeWidth={2} aria-hidden="true" />
          </button>
          <div className="lc-six-pillars__modal-player">
            <iframe
              key={pillar.youtubeId}
              className="lc-six-pillars__modal-iframe"
              src={youtubeEmbedUrl(pillar.youtubeId)}
              title={`${pillar.title} — Luke Coutinho`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="lc-six-pillars__modal-meta">
            <p className="lc-six-pillars__modal-eyebrow">Foundational Medicine</p>
            <h3 id="pillar-video-title">{pillar.title}</h3>
            <p>{pillar.tagline}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function SixPillarsLC() {
  const swiperRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const startAutoplay = (swiper) => {
    if (swiper?.autoplay && !swiper.autoplay.running && !activeVideo) {
      swiper.autoplay.start();
    }
  };

  useEffect(() => {
    const onResize = () => swiperRef.current?.update();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;
    if (activeVideo) swiper.autoplay.stop();
    else if (!swiper.autoplay.running) swiper.autoplay.start();
  }, [activeVideo]);

  useEffect(() => {
    if (!activeVideo) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  const openVideo = (pillar) => {
    const source = HOME_LC_PILLARS.find((p) => p.id === pillar.id) ?? pillar;
    if (!source.youtubeId) return;
    setActiveVideo(source);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="lc-six-pillars" aria-labelledby="home-six-pillars-title">
      <div className="lc-six-pillars__inner">
        <header className="lc-six-pillars__head">
          <p className="lc-six-pillars__eyebrow">Foundational Medicine</p>
          <h2 id="home-six-pillars-title" className="lc-six-pillars__title">
            The Six Pillars{' '}
            <span className="lc-six-pillars__title-accent">of Healing.</span>
          </h2>
        </header>
      </div>

      <div className="lc-six-pillars__coverflow">
        <div className="lc-six-pillars__viewport">
          <Swiper
            className="lc-six-pillars__swiper"
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            loopAdditionalSlides={PILLAR_COUNT}
            loopPreventsSliding={false}
            watchSlidesProgress
            slidesPerView="auto"
            spaceBetween={0}
            slidesPerGroup={1}
            initialSlide={PILLAR_COUNT}
            speed={640}
            roundLengths
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              startAutoplay(swiper);
              requestAnimationFrame(() => swiper.update());
            }}
            onAutoplayStop={(swiper) => startAutoplay(swiper)}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
              stopOnLastSlide: false,
            }}
            coverflowEffect={{
              rotate: 22,
              stretch: -32,
              depth: 64,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {PILLAR_SLIDES.map((pillar, index) => (
              <SwiperSlide key={`${pillar.id}-${index}`}>
                <article className="lc-six-pillars__card">
                  <div className="lc-six-pillars__card-media">
                    <img
                      src={youtubeThumbnail(pillar.youtubeId)}
                      alt=""
                      className="lc-six-pillars__card-img"
                      loading="lazy"
                    />
                    <div className="lc-six-pillars__card-tint" aria-hidden="true" />
                    <button
                      type="button"
                      className="lc-six-pillars__play"
                      aria-label={`Play video: ${pillar.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        openVideo(pillar);
                      }}
                    >
                      <span className="lc-six-pillars__play-ring" aria-hidden="true" />
                      <Play size={26} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    </button>
                  </div>

                  <div className="lc-six-pillars__card-copy">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.tagline}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lc-six-pillars__controls">
          <button
            type="button"
            className="lc-six-pillars__ctrl lc-six-pillars__ctrl--prev"
            aria-label="Previous pillar"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={22} strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lc-six-pillars__ctrl lc-six-pillars__ctrl--next"
            aria-label="Next pillar"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={22} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      {activeVideo ? (
        <PillarVideoModal pillar={activeVideo} onClose={closeVideo} />
      ) : null}
    </section>
  );
}

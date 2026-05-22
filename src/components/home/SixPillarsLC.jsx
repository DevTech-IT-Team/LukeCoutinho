import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_LC_PILLARS } from '../../data/homeVisuals';
import PillarIcon from './PillarIcon';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const PILLAR_COUNT = HOME_LC_PILLARS.length;

/** Three copies give Swiper enough runway for seamless loop (5 visible + centered) */
const PILLAR_SLIDES = [
  ...HOME_LC_PILLARS,
  ...HOME_LC_PILLARS,
  ...HOME_LC_PILLARS,
];

export default function SixPillarsLC() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const onResize = () => swiperRef.current?.update();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const startAutoplay = (swiper) => {
    if (swiper?.autoplay && !swiper.autoplay.running) {
      swiper.autoplay.start();
    }
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
            slidesPerGroup={1}
            initialSlide={PILLAR_COUNT}
            speed={640}
            roundLengths
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              startAutoplay(swiper);
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
              rotate: 34,
              stretch: 4,
              depth: 96,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {PILLAR_SLIDES.map((pillar, index) => (
              <SwiperSlide key={`${pillar.id}-${index}`}>
                <article
                  className="lc-six-pillars__card"
                  style={{
                    '--pillar-color': pillar.color,
                    '--pillar-glow': pillar.glow,
                  }}
                >
                  <div className="lc-six-pillars__card-bg" aria-hidden="true" />
                  <div className="lc-six-pillars__card-shine" aria-hidden="true" />

                  <div className="lc-six-pillars__card-hero">
                    <div className="lc-six-pillars__orb">
                      <PillarIcon type={pillar.icon} />
                    </div>
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
    </section>
  );
}

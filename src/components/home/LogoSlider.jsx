import React from 'react';

/** Borderless logo strip — uses global .lc-marquee from index.css */
export default function LogoSlider({ items, speed = '48s' }) {
  const track = [...items, ...items];

  return (
    <div className="lc-slide" style={{ '--slide-speed': speed }}>
      <div className="lc-marquee lc-slide__marquee">
        <div className="lc-marquee-fade lc-marquee-fade--left" aria-hidden="true" />
        <div className="lc-marquee-fade lc-marquee-fade--right" aria-hidden="true" />
        <div className="lc-marquee-track lc-slide__track">
          {track.map((item, i) => (
            <span key={`${item.name}-${i}`} className="lc-marquee-item lc-slide__logo">
              <img src={item.src} alt={item.name} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

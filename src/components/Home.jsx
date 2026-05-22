import React, { useState } from 'react';
import Hero from './Hero';
import PathwayHub from './home/PathwayHub';
import SixPillarsLC from './home/SixPillarsLC';
import RealResults from './home/RealResults';
import HomeFaq from './home/HomeFaq';
import HomeQolCta from './home/HomeQolCta';
import { useReveal } from './home/useReveal';
import './home/home-sections.css';

function RevealSection({ children, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`lc-reveal${visible ? ' is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}

const Home = () => {
  const [activePath, setActivePath] = useState('care');

  const selectPath = (id) => {
    setActivePath(id);
  };

  return (
    <div className="lc-landing">
      <Hero />

      <RevealSection className="lc-reveal--pillars">
        <SixPillarsLC />
      </RevealSection>

      <div className="lc-hub-wrap lc-hub-wrap--first">
        <PathwayHub activeId={activePath} onSelect={selectPath} />
          </div>

      <RevealSection>
        <RealResults />
      </RevealSection>

      <RevealSection>
        <HomeFaq />
      </RevealSection>

      <HomeQolCta />
        </div>
  );
};

export default Home;

import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import SectionEyebrow from '../../../components/layout/SectionEyebrow';
import './blogs.css';

const BlogsHero = () => {
  return (
    <section className="blogs-hero" aria-labelledby="blogs-hero-title">
      <div className="blogs-hero__inner">
        <SectionEyebrow>Educational blogs</SectionEyebrow>

        <div className="blogs-hero__grid">
          <div>
            <h1 id="blogs-hero-title" className="blogs-hero__title">
              Luke&apos;s <span>Wellness</span> insights
            </h1>
          </div>

          <div className="blogs-hero__copy">
            <p className="blogs-hero__lede">
              Your destination for expert-driven content on health, deep cellular nutrition, movement, quality sleep,
              and lifestyle — written to empower, not alarm.
            </p>
            <p className="blogs-hero__meta">
              Through 13+ years of integrative experience, discover actionable advice to lead a balanced and fulfilling
              life.
            </p>
          </div>
        </div>

        <div className="blogs-hero__actions">
          <a href="#popular-picks" className="blogs-hero__cta">
            Explore articles
            <ArrowRight size={14} aria-hidden="true" />
          </a>

          <div className="blogs-hero__search-wrap">
            <label htmlFor="blogs-search" className="blogs-hero__search-label">
              Search articles
            </label>
            <div className="blogs-hero__search">
              <Search size={16} className="text-[rgba(26,20,16,0.35)] shrink-0" aria-hidden="true" />
              <input
                id="blogs-search"
                type="search"
                placeholder="Nutrition, sleep, emotional wellness…"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;

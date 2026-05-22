import React from 'react';

export default function CoursesPageHero() {
  return (
    <section className="lc-courses-hero" aria-labelledby="courses-page-title">
      <div className="lc-courses-hero__inner">
        <p className="lc-courses-hero__eyebrow">Learning Hub</p>
        <h1 id="courses-page-title" className="lc-courses-hero__title">
          Self-paced courses
        </h1>
        <p className="lc-courses-hero__lede">
          Expert-led modules from Luke Coutinho and Team Luke — filter by topic, compare pricing, and
          start learning in minutes.
        </p>
      </div>
    </section>
  );
}

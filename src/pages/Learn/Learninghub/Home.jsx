import React from 'react';
import Hero from './Hero';
import FeaturedCourses from './FeaturedCourses';
import './learninghub.css';

function Home() {
  return (
    <div className="lc-courses-page lc-landing">
      <Hero />
      <FeaturedCourses />
    </div>
  );
}

export default Home;

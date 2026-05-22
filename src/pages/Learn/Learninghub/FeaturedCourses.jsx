import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Star, Sparkles, Brain, HeartPulse, Leaf, Dumbbell, Search } from 'lucide-react';
import { COURSE_CATEGORIES, getCoursesByCategory, searchCourses } from '../../../lib/courseCatalog';

const FILTER_ICONS = {
  All: Sparkles,
  Nutrition: Leaf,
  Mindset: Brain,
  Fitness: Dumbbell,
  Healing: HeartPulse,
};

function filterBySearch(list, query) {
  const q = query.trim();
  if (!q) return list;
  const ids = new Set(searchCourses(q).map((c) => c.id));
  return list.filter((c) => ids.has(c.id));
}

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    const byCat = getCoursesByCategory(activeCategory);
    return filterBySearch(byCat, searchQuery);
  }, [activeCategory, searchQuery]);

  return (
    <section className="lc-courses-catalog" aria-label="Course catalogue">
      <div className="lc-courses-catalog__inner">
        <div className="lc-courses-toolbar">
          <label className="lc-courses-search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search courses…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search courses"
            />
          </label>
        </div>

        <div className="lc-courses-filters" role="tablist" aria-label="Filter by category">
          {COURSE_CATEGORIES.map((name) => {
            const Icon = FILTER_ICONS[name] || Sparkles;
            return (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={activeCategory === name}
                className={`lc-courses-filter${activeCategory === name ? ' is-active' : ''}`}
                onClick={() => setActiveCategory(name)}
              >
                <Icon size={14} aria-hidden="true" />
                {name}
              </button>
            );
          })}
        </div>

        <div className="lc-courses-grid">
          {filteredCourses.length === 0 ? (
            <p className="lc-courses-empty">No courses match your search. Try another category or keyword.</p>
          ) : (
            filteredCourses.map((course) => (
              <article key={course.id} className="lc-course-card">
                <div className="lc-course-card__media">
                  <img src={course.image} alt="" loading="lazy" />
                  <span className="lc-course-card__price">{course.price}</span>
                  <span className="lc-course-card__level">{course.level}</span>
                </div>
                <div className="lc-course-card__body">
                  <p className="lc-course-card__cat">{course.category}</p>
                  <h2 className="lc-course-card__title">{course.title}</h2>
                  <p className="lc-course-card__desc">{course.subtitle}</p>
                  <div className="lc-course-card__meta">
                    <span>
                      <Star size={12} fill="#ff8f00" aria-hidden="true" />
                      {course.rating}
                    </span>
                    <span>
                      <BookOpen size={12} aria-hidden="true" />
                      {course.lessons} modules
                    </span>
                    <span>
                      <Clock size={12} aria-hidden="true" />
                      {course.duration}
                    </span>
                  </div>
                  <Link to={`/course/${course.id}`} className="lc-course-card__btn">
                    View course
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Star, Sparkles, Brain, HeartPulse, Leaf, Dumbbell } from 'lucide-react';
import courses from '../../../data/courses';
import { getCoursesByCategory } from '../../../lib/courseCatalog';

const categories = [
  { name: 'All', icon: <Sparkles size={16} /> },
  { name: 'Nutrition', icon: <Leaf size={16} /> },
  { name: 'Mindset', icon: <Brain size={16} /> },
  { name: 'Fitness', icon: <Dumbbell size={16} /> },
  { name: 'Healing', icon: <HeartPulse size={16} /> },
];

const FeaturedCoursesOnly = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredCourses = getCoursesByCategory(activeCategory);

  return (
    <section className="bg-[#FDFAF5] border-t border-[rgba(26,20,16,0.06)] py-20 lg:py-28 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#E8640A]" />
              <span className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A]">
                Expert-led modules
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] text-[#1A1410] not-italic">
              Featured <span className="text-[#E8640A]">courses</span>
            </h2>
            <p className="mt-4 font-[Arial] text-[14px] leading-[1.85] text-[rgba(26,20,16,0.65)] max-w-2xl">
              Evidence-based protocols and lifestyle mastery — learn at your pace with clear pricing on every module.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <div className="px-6 py-4 bg-white border border-[rgba(26,20,16,0.08)] rounded-2xl">
              <p className="font-serif text-3xl text-[#1A1410] not-italic">{courses.length}+</p>
              <span className="font-[Arial] text-[10px] uppercase tracking-[0.28em] text-[rgba(26,20,16,0.5)]">Courses</span>
            </div>
            <div className="px-6 py-4 bg-white border border-[rgba(26,20,16,0.08)] rounded-2xl">
              <p className="font-serif text-3xl text-[#1A1410] not-italic">4.9</p>
              <span className="font-[Arial] text-[10px] uppercase tracking-[0.28em] text-[rgba(26,20,16,0.5)]">Avg rating</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-[Arial] text-[10px] uppercase tracking-[0.28em] transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-[#E8640A] text-white shadow-md'
                  : 'bg-white text-[#1A1410] border border-[rgba(26,20,16,0.1)] hover:border-[#E8640A] hover:text-[#E8640A]'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, idx) => (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="group flex flex-col bg-white border border-[rgba(26,20,16,0.08)] rounded-2xl overflow-hidden hover:border-[rgba(232,100,10,0.35)] hover:shadow-lg transition-all duration-400"
              >
                <div className="relative h-[220px] m-3 mb-0 rounded-xl overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={course.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 bg-[#E8640A] text-white font-[Arial] text-[10px] font-bold tracking-[0.12em] px-3 py-1.5 rounded-full">
                    {course.price}
                  </span>
                  <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-[#1A1410] font-[Arial] text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <div className="p-6 pt-5 flex flex-col flex-1">
                  <span className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[#E8640A] mb-2">
                    {course.category}
                  </span>
                  <h3 className="font-serif text-[1.5rem] leading-[1.15] text-[#1A1410] mb-2 not-italic group-hover:text-[#E8640A] transition-colors">
                    {course.title}
                  </h3>
                  <p className="font-[Arial] text-[13px] leading-[1.7] text-[rgba(26,20,16,0.6)] flex-1 mb-4">
                    {course.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.18em] text-[rgba(26,20,16,0.5)] border-t border-[rgba(26,20,16,0.08)] pt-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Star size={12} className="text-[#E8640A]" fill="#E8640A" />
                      {course.rating}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen size={12} className="text-[#E8640A]" />
                      {course.lessons} modules
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} className="text-[#E8640A]" />
                      {course.duration}
                    </span>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#1A1410] text-white font-[Arial] text-[10px] uppercase tracking-[0.28em] hover:bg-[#E8640A] transition-colors"
                  >
                    Enroll now
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedCoursesOnly;

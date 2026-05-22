import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Star, Clock, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import courses from '../../../data/courses';

const featuredIds = [
  'foundations-metabolic-health',
  'gut-health-acidity-constipation',
  'immunity-lymphatic-health',
  'metabolic-health-101',
  'lymphatic-reset',
];

const carouselCourses = courses.filter((course) => featuredIds.includes(course.id));

export default function CourseCarousel() {
  return (
    <section className="bg-[#F8F3EC] py-16 lg:py-24 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-[#E8640A]" />
              <span className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A]">
                Learning hub picks
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#1A1410] not-italic">
              Courses to explore now
            </h2>
            <p className="mt-4 font-[Arial] text-[14px] leading-[1.85] text-[rgba(26,20,16,0.7)] max-w-2xl">
              A spotlight of high-impact modules for metabolism, gut health, immunity and lymphatic support.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="course-carousel"
        >
          {carouselCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <article className="group flex flex-col h-full bg-white border border-[rgba(26,20,16,0.08)] rounded-[1.75rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[240px] overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 text-[#1A1410] font-[Arial] text-[10px] uppercase tracking-[0.24em] px-3 py-1.5 rounded-full">
                    {course.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-[#E8640A] text-white font-[Arial] text-[10px] uppercase tracking-[0.24em] px-3 py-1.5 rounded-full">
                    {course.price}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-[1.4rem] leading-[1.1] text-[#1A1410] mb-3 not-italic">
                    {course.title}
                  </h3>
                  <p className="font-[Arial] text-[13px] leading-[1.7] text-[rgba(26,20,16,0.65)] flex-1 mb-5">
                    {course.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[rgba(26,20,16,0.55)] border-t border-[rgba(26,20,16,0.08)] pt-4">
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} className="text-[#E8640A]" fill="#E8640A" />
                      {course.rating}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} className="text-[#E8640A]" />
                      {course.duration}
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

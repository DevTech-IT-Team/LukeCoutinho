import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Users, BookOpen, Star, ArrowRight } from 'lucide-react';
import c1 from '../../assets/podcastc1.png'
import c2 from '../../assets/podcastc2.jpg'
import c3 from '../../assets/podcastc3.jpg'
import { NavLink } from "react-router-dom";



const CourseSection = () => {
  const courses = [
    {
      title: "The Lymphatic Reset: A Holistic Approach to Immunity, Skin Health, and Cancer...",
      description: "Welcome to The Lymphatic Reset Blueprint: A Step-by-Step Guide to Cleanse Your Body's Filter, a comprehensive course designed t...",
      price: "₹799.00",
      students: 125,
      lessons: 20,
      level: "Intermediate Level",
      image: c1
    },
    {
      title: "How to Train Your Immune System",
      description: "Welcome! This course is on How to Train Your Immune System by Luke Coutinho. Description: This course will cover some [...]",
      price: "₹799.00",
      students: 182,
      lessons: 17,
      rating: "5 (1)",
      image: c2
    },
    {
      title: "Your Body's Intelligence: Lifestyle Keys for Cancer Support & Prevention",
      description: "Welcome! This course is on Your Body's Intelligence: Lifestyle Keys for Cancer Support & Prevention by Luke Coutinho....",
      price: "₹799.00",
      students: 83,
      lessons: 17,
      image: c3
    }
  ];

  return (
    <section className="py-15 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-12 bg-orange-500"></span>
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Education</span>
            <span className="h-[2px] w-12 bg-orange-500"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
            Your Space to <br />
            <span className="text-orange-400 italic  lowercase font-light text-6xl md:text-7xl">Learn, Heal, and Grow</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 font-medium leading-relaxed">
            Our pre-recorded courses are a great way to explore a wide range of topics across health and wellness. Designed for anyone eager to take charge of their health, these sessions help you better understand your mind and body, one step at a time.
          </p>
        </div>

        {/* --- COURSE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-500 group"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />

                {/* Featured Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  Featured
                </div>

                {/* Level Badge if exists */}
                {course.level && (
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-lg">
                    {course.level}
                  </div>
                )}

                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="text-white w-16 h-16 drop-shadow-2xl" strokeWidth={1} />
                </div> */}
              </div>

              {/* Content Block */}
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 text-[10px] font-bold">LC</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">Team Luke</span>
                  {course.rating && (
                    <div className="ml-auto flex items-center gap-1 text-orange-500">
                      <Star size={12} fill="currentColor" />
                      <span className="text-[10px] font-bold">{course.rating}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-tight min-h-[3.5rem] group-hover:text-orange-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                {/* Meta Data */}
                <div className="flex items-center gap-6 py-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={14} className="text-orange-500" />
                    <span className="text-[10px] font-bold uppercase">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <BookOpen size={14} className="text-orange-500" />
                    <span className="text-[10px] font-bold uppercase">{course.lessons}</span>
                  </div>
                  <div className="ml-auto text-xl font-black text-slate-900">
                    {course.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}

        <div className="mt-16 text-center">
          <NavLink to="/learn/Learninghub/Home">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-orange-500 transition-all shadow-xl shadow-gray-200"
            >
              Explore All Courses
            </motion.button>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default CourseSection;
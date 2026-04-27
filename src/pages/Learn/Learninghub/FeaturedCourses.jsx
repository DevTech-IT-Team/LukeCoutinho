import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Star } from "lucide-react";

const FeaturedCoursesOnly = () => {
  const allCourses = [
    {
      id: 1,
      title: "Parenting Begins Before Birth",
      subtitle: "Pregnancy Foundations for a Happy Child",
      level: "Intermediate",
      lessons: 6,
      duration: "4.5 Hours",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Redefining Menopause",
      subtitle: "Strength & Hormonal Harmony",
      level: "Intermediate",
      lessons: 30,
      duration: "12 Hours",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Break the Loop",
      subtitle: "Reprogram Negative Thought Patterns",
      level: "Intermediate",
      lessons: 31,
      duration: "8 Hours",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "21-Day Gut Reset",
      subtitle: "Total Microbiome Restoration",
      level: "Advanced",
      lessons: 25,
      duration: "21 Days",
      price: "₹6,999",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "The Lymphatic Reset",
      subtitle: "A Holistic Approach to Immunity",
      level: "Professional",
      lessons: 20,
      duration: "10 Hours",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Metabolic Health 101",
      subtitle: "Energy, Fat Loss, and Longevity",
      level: "Intermediate",
      lessons: 12,
      duration: "6 Hours",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="mx-auto px-6 lg:px-20 py-24 bg-white">
      {/* Header */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
            Expert-Led Modules
          </span>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none mb-6">
          Featured <span className="text-orange-500 italic font-light serif lowercase">Clinicals</span>
        </h2>
        <p className="text-slate-500 font-medium max-w-xl text-lg leading-relaxed">
          Evidence-based protocols and lifestyle mastery designed for cellular transformation.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allCourses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-[2rem] border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col h-full"
          >
            {/* Image Area */}
            <div className="relative h-[240px] m-4 overflow-hidden rounded-[1.5rem]">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-950 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                {course.level}
              </div>
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg">
                {course.price}
              </div>
            </div>
              
            {/* Content Area */}
            <div className="px-8 pb-8 pt-2 flex flex-col flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-950 uppercase tracking-tight group-hover:text-orange-600 transition-colors mb-2">
                  {course.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 italic">
                  {course.subtitle}
                </p>
              </div>

              {/* Specs */}
              <div className="flex items-center gap-6 mb-8 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-orange-500" />
                  <span className="text-[10px] font-bold text-slate-950 uppercase tracking-tighter">
                    {course.lessons} Modules
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-orange-500" />
                  <span className="text-[10px] font-bold text-slate-950 uppercase tracking-tighter">
                    {course.duration}
                  </span>
                </div>
              </div>

              <Link 
                to={`/course/${course.id}`}
                className="mt-auto w-full py-4 bg-slate-950 text-white rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10"
              >
                Enroll Now <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoursesOnly;
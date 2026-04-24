import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, ChevronRight, ChevronLeft, Star, Play, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const FeaturedCourses = () => {
  const allCourses = [
    {
      id: 1,
      title: "Parenting Begins Before Birth",
      subtitle: "Pregnancy Foundations for a Happy Child",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "Welcome to Parenting Begins Before Birth: Pregnancy Foundations for a Happy, Healthy Child...",
      students: 1200,
      lessons: 6,
      duration: "4.5 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Redefining Menopause",
      subtitle: "Strength & Hormonal Harmony",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "Welcome to Redefining Menopause: Your Guide to Rebuilding Strength & Hormonal Harmony...",
      students: 720,
      lessons: 30,
      duration: "12 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Break the Loop",
      subtitle: "Reprogram Negative Thought Patterns",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "Welcome to Break the Loop: How to Interrupt, Reframe, and Reprogram Negative Thoughts...",
      students: 2000,
      lessons: 31,
      duration: "8 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "21-Day Gut Reset",
      subtitle: "Total Microbiome Restoration",
      level: "Advanced",
      author: "Luke Coutinho",
      description: "Introducing Our 21-Day Gut Reset! Every aspect of your health circles back to your gut...",
      students: 7000,
      lessons: 25,
      duration: "21 Days",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "The Lymphatic Reset",
      subtitle: "A Holistic Approach to Immunity",
      level: "Professional",
      author: "Luke Coutinho",
      description: "Step-by-Step Guide to Cleanse Your Body from the inside out...",
      students: 1250,
      lessons: 20,
      duration: "10 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      demoLink: "/learn/scorm-player",
    },
    {
      id: 6,
      title: "Metabolic Health 101",
      subtitle: "Energy, Fat Loss, and Longevity",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "The Ultimate Guide to Energy, Fat Loss, and Longevity...",
      students: 820,
      lessons: 12,
      duration: "6 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allCourses.length / itemsPerPage);

  const currentCourses = allCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="featured-courses" className="py-40 bg-[#FDFBF7] overflow-hidden text-slate-950 relative">
      
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-500/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-orange-500/10 rounded-full text-orange-500"
            >
              <Star size={16} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Signature Curriculums</span>
            </motion.div>

            <h2 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase text-slate-900">
              Curated <br />
              <span className="text-orange-500 italic font-light not-uppercase">Knowledge.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 pb-4">
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-2">Navigation</p>
              <p className="text-sm font-black text-white uppercase tracking-tighter">Page {currentPage} of {totalPages}</p>
            </div>
            <div className="flex items-center gap-4 p-2 bg-white rounded-full shadow-sm border border-slate-100">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-100 hover:bg-blue-600 hover:text-white transition-all bg-slate-50 text-slate-400"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {currentPage} / {totalPages}
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-100 hover:bg-blue-600 hover:text-white transition-all bg-slate-50 text-slate-400"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {currentCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {course.level}
                  </span>
                </div>
                  
                  {/* Content Container */}
                  <div className="p-10 flex flex-col gap-6">
                    
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tighter mb-2 group-hover:text-orange-500 transition-colors uppercase">
                        {course.title}
                      </h3>
                      <p className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors">
                        {course.subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500"><BookOpen size={18} /></div>
                         <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Lessons</p>
                            <p className="text-xs font-bold text-white">{course.lessons} Modules</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500"><Clock size={18} /></div>
                         <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Duration</p>
                            <p className="text-xs font-bold text-white">{course.duration}</p>
                         </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <Link 
                        to={`/course/${course.id}`}
                        className="w-full py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                      >
                        Enroll Now <ArrowRight size={16} />
                      </Link>
                      
                      {course.demoLink && (
                        <button className="w-full py-3 bg-white border border-slate-200 rounded-full text-[10px] font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-slate-600">
                          Preview Curriculum
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center text-slate-950 shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                     <span className="text-[8px] font-black uppercase tracking-widest opacity-40">Only</span>
                     <span className="text-xs font-black">{course.price.split('.')[0]}</span>
                  </div>

                </motion.div>
              ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;


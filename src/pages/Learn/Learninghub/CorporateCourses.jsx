import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Briefcase, Sparkles, Clock, BookOpen } from "lucide-react";

const CorporateCourses = () => {
  const corpCourses = [
    {
      title: "Emotional Intelligence",
      chapters: "08 Chapters",
      duration: "1.2 Hours",
      price: "699/-",
      tag: "Leadership",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Sustainable Output",
      chapters: "12 Chapters",
      duration: "45 Mins",
      price: "699/-",
      tag: "Performance",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Stress Resilience",
      chapters: "15 Chapters",
      duration: "1.5 Hours",
      price: "699/-",
      tag: "Wellness",
      image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Biological Rituals",
      chapters: "06 Lessons",
      duration: "55 Mins",
      price: "699/-",
      tag: "Foundational",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#FFFEFC]">
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-1.5 bg-slate-950 rounded-full text-white flex items-center gap-3"
          >
            <Briefcase size={14} className="text-orange-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Catalogue 2024</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-none tracking-tighter uppercase">
            Curated for <br />
            <span className="text-orange-500 italic font-light serif lowercase">Institutions.</span>
          </h2>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corpCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-950 cursor-pointer"
            >
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-30 transition-all duration-[1.5s]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <span className="absolute top-8 left-8 bg-white/10 backdrop-blur-md text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                {course.tag}
              </span>

              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white leading-tight tracking-tight uppercase mb-4">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 mb-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <BookOpen size={12} className="text-orange-500" />
                    <span className="text-[9px] font-bold uppercase tracking-tighter">{course.chapters}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={12} className="text-orange-500" />
                    <span className="text-[9px] font-bold uppercase tracking-tighter">{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                   <div className="text-xl font-black text-white tracking-tighter">₹{course.price}</div>
                   <button className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all shadow-lg active:scale-95">
                      <ShoppingCart size={16} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Evolution Section */}
      {/* <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1600')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 backdrop-blur-xl">
                <Sparkles size={28} />
              </div>
            </div>

            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase">
              The Evolution <br /> 
              <span className="text-orange-500 italic font-light serif lowercase">continues.</span>
            </h2>

            <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl mx-auto">
              New masterclasses and clinical protocols added every lunar cycle. Stay ahead with curated health education.
            </p>

            <div className="flex items-center justify-center gap-4 pt-6">
              <div className="h-px w-12 bg-white/20" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-orange-500">
                Luke Coutinho Global
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default CorporateCourses;
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, Briefcase, Sparkles, Clock, BookOpen } from "lucide-react";

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
      duration: "45 Minutes",
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
      duration: "55 Minutes",
      price: "699/-",
      tag: "Foundational",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#FFFEFC]">
      <section className="py-40 max-w-[1440px] mx-auto px-8">
        
        <div className="flex flex-col items-center text-center space-y-8 mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 bg-slate-950 rounded-full text-white flex items-center gap-3"
            >
              <Briefcase size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Corporate Catalogue</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase">
              Curated for <br />
              <span className="text-orange-500 italic font-light not-uppercase">Institutions.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {corpCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
              className="relative group aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl bg-slate-950"
            >
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <span className="absolute top-10 left-10 bg-orange-500 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20">
                {course.tag}
              </span>

              <div className="absolute inset-0 p-10 flex flex-col justify-end gap-6 z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <h3 className="text-3xl font-black text-white leading-none tracking-tighter uppercase">
                  {course.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <BookOpen size={14} className="text-orange-500" />
                    <span className="text-[10px] font-black uppercase tracking-tight">{course.chapters}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock size={14} className="text-orange-500" />
                    <span className="text-[10px] font-black uppercase tracking-tight">{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                   <div className="text-2xl font-black text-white tracking-tighter">₹{course.price}</div>
                   <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-950 hover:bg-orange-500 hover:text-white transition-all shadow-xl active:scale-90">
                      <ShoppingCart size={20} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hero Visual Section - "Coming Soon" */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1600')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-950/90" />
        </div>
        
        {/* Artistic Glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 text-center px-8 w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center space-y-12">
               <motion.div 
                  initial={{ rotate: 180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="w-20 h-20 rounded-3xl border border-white/10 flex items-center justify-center text-orange-500 glass-dark"
               >
                  <Sparkles size={32} />
               </motion.div>

               <h2 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase whitespace-pre-line">
                  The Evolution <br /> 
                  <span className="text-orange-500 italic font-light not-uppercase">Continues.</span>
               </h2>

               <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  New masterclasses and clinical protocols added every lunar cycle. Stay ahead with curated health education.
               </p>

               <div className="flex items-center gap-6 pt-8">
                  <div className="h-px w-20 bg-white/10" />
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-orange-500">
                    Luke Coutinho Global
                  </span>
                  <div className="h-px w-20 bg-white/10" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateCourses;


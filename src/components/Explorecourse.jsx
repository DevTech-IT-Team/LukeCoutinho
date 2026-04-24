import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, PlayCircle, ShieldCheck, Users } from 'lucide-react';

const LearningHubCTA = () => {
  const bentoStats = [
    { 
      title: "Self-Paced Learning", 
      desc: "Expert-led courses designed for your schedule.", 
      icon: <PlayCircle size={24} />, 
      theme: "orange", 
      color: "bg-[#F97316]" 
    },
    { 
      title: "40+ Courses", 
      desc: "Deep clinical wisdom on complex health issues.", 
      icon: <BookOpen size={24} />, 
      theme: "light", 
      color: "bg-white" 
    },
    { 
      title: "100k+ Seekers", 
      desc: "Join a global community of wellness explorers.", 
      icon: <Users size={24} />, 
      theme: "dark", 
      color: "bg-slate-950" 
    },
    { 
      title: "Clinical Certification", 
      desc: "Validate your journey with expert standards.", 
      icon: <ShieldCheck size={24} />, 
      theme: "cream", 
      color: "bg-[#FFF7ED]" 
    }
  ];

  return (
    <section id="courses" className="py-40 bg-[#FCF9F5] relative overflow-hidden group">
      
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#FFF7ED] -skew-x-6 translate-x-[15%] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Narrative Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-12 bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Advanced Educational Hub</span>
            </motion.div>

            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-[5.5rem] font-bold text-slate-950 leading-[0.9] tracking-tighter uppercase"
              >
                Master Your <br />
                <span className="text-orange-500 italic font-light lowercase serif">Well-being.</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-slate-500 font-medium leading-relaxed max-w-xl"
              >
                Access premium, self-paced courses designed by Luke Coutinho to empower your health journey with science and simplicity.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-10"
            >
               <Link 
                 to="/learn/learninghub/home#courses"
                 className="px-12 py-6 bg-slate-950 text-white rounded-2xl shadow-2xl hover:bg-orange-500 transition-all uppercase tracking-widest text-xs flex items-center gap-4 group"
               >
                 Explore Ecosystem <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </Link>
               
               <button className="flex items-center gap-4 text-slate-400 hover:text-orange-500 transition-all group/play">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover/play:bg-orange-500 group-hover/play:text-white transition-all">
                    <PlayCircle size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Video Showcase</span>
               </button>
            </motion.div>
          </div>

          {/* Right Bento Grid Stats */}
          <div className="grid grid-cols-2 gap-8 relative">
            {bentoStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center space-y-6 border transition-all duration-500 ${
                  stat.theme === 'orange' ? 'bg-[#F97316] text-white border-transparent' : 
                  stat.theme === 'dark' ? 'bg-slate-950 text-white border-transparent' :
                  stat.theme === 'cream' ? 'bg-[#FFF7ED] text-orange-900 border-orange-100' :
                  'bg-white text-slate-950 border-slate-50'
                } ${idx % 2 === 0 ? 'translate-y-8' : '-translate-y-8'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  stat.theme === 'orange' || stat.theme === 'dark' ? 'bg-white/20 text-white' : 'bg-orange-50 text-[#F97316]'
                }`}>
                   {stat.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight uppercase leading-tight">{stat.title}</h3>
                  <p className={`text-xs font-medium leading-relaxed ${
                    stat.theme === 'orange' || stat.theme === 'dark' ? 'text-white/70' : 'text-slate-500'
                  }`}>
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningHubCTA;
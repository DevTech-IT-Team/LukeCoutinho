import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Users, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  const bentoStats = [
    { 
      title: "Self-Paced Learning", 
      desc: "Expert-led courses designed for your schedule.", 
      icon: <Zap size={24} />, 
      theme: "orange", 
      color: "bg-[#F97316]" 
    },
    { 
      title: "25+ Masterclasses", 
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
    <section className="relative min-h-screen w-full bg-[#FCF9F5] overflow-hidden flex items-center pt-24 pb-40">
      
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#FFF7ED] -skew-x-6 translate-x-[15%] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Narrative Panel */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-12 bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Why Choose Our Learning Hub</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-[5.5rem] font-bold text-slate-950 leading-[1.05] tracking-tight">
                Everything you need to <br /> 
                <span className="text-orange-500">Master Your Health.</span>
              </h1>
  
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Bite-sized, expert-led clinical wisdom from Luke Coutinho. Transition from education to lasting personal transformation through our structured ecosystems.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-10"
            >
               <button className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group">
                 <Play size={24} fill="currentColor" className="ml-1" />
               </button>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Video Showcase</span>
            </motion.div>
          </div>

          {/* Right Bento Grid Stats */}
          <div className="grid grid-cols-2 gap-8 relative">
            {bentoStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
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

export default Hero;

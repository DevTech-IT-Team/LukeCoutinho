import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Activity,
  ShieldCheck,
  Moon,
  Utensils,
  Users,
  Languages,
  Droplet,
  ArrowRight,
  Leaf,
  Info,
  CheckCircle2,
  Sparkles,
  Zap,
  Microscope,
  Stethoscope
} from "lucide-react";

const LearningIntro = () => {
  const categories = [
    { name: "Mental Wellness", icon: <Brain size={18} />, color: "bg-blue-50 text-blue-600" },
    { name: "Women's Health", icon: <Heart size={18} />, color: "bg-rose-50 text-rose-600" },
    { name: "Immunity", icon: <ShieldCheck size={18} />, color: "bg-teal-50 text-teal-600" },
    { name: "Digestion", icon: <Utensils size={18} />, color: "bg-orange-50 text-orange-600" },
    { name: "Cancer Care", icon: <Leaf size={18} />, color: "bg-emerald-50 text-emerald-600" },
    { name: "Sleep Rituals", icon: <Moon size={18} />, color: "bg-indigo-50 text-indigo-600" },
    { name: "Gut Microbiome", icon: <Zap size={18} />, color: "bg-amber-50 text-amber-600" },
    { name: "Hindi Courses", icon: <Languages size={18} />, color: "bg-slate-50 text-slate-600" },
  ];

  return (
    <section className="py-40 bg-[#F97316] relative overflow-hidden text-white">
      
      {/* Dynamic Background Textures */}
      <div className="absolute top-1/2 left-0 w-1/4 h-full bg-white/10 -skew-x-12 translate-x-[-20%] translate-y-[-50%] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          
          {/* Narrative Content */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-white/20 rounded-full text-white backdrop-blur-md"
            >
              <Sparkles size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Our Philosophy</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              Mastery over <br />
              <span className="text-black italic font-light">Confusion.</span>
            </motion.h2>

            <div className="space-y-8 text-2xl text-white/80 font-medium leading-relaxed max-w-xl">
              <p>
                We bridge the gap between complex clinical data and actionable lifestyle protocols. Bite-sized modules designed for the modern seeker.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-orange-500 shadow-xl">
                     <Microscope size={24} />
                  </div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tighter">Science-Backed</h4>
                  <p className="text-sm text-white/60 font-medium">Every module is validated by our clinical leadership.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-xl">
                     <Stethoscope size={24} />
                  </div>
                  <h4 className="text-lg font-black text-slate-950 uppercase tracking-tighter">Clinical Edge</h4>
                  <p className="text-sm text-slate-400 font-medium">Equip yourself with the right questions for your doctors.</p>
               </div>
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="p-10 glass rounded-[2.5rem] border border-orange-100 bg-gradient-to-br from-white to-orange-50/20 group cursor-pointer"
            >
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Next Step</p>
               <h4 className="text-2xl font-black text-slate-950 mb-6 tracking-tight">Need Targeted Guidance?</h4>
               <a href="/programs" className="inline-flex items-center gap-4 text-orange-600 font-black uppercase text-xs tracking-widest group-hover:gap-6 transition-all">
                  Explore 1-on-1 Pathways <ArrowRight size={18} />
               </a>
            </motion.div>
          </div>

          {/* Discovery Grid */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-5xl font-black text-slate-950 tracking-tighter uppercase">Curated Discovery</h3>
                  <p className="text-xl text-slate-400 font-medium max-w-sm">Select a clinical vertical to begin your journey.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {categories.map((cat, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group flex items-center gap-6 p-6 bg-slate-50/50 rounded-3xl border border-transparent hover:border-orange-500 hover:bg-white hover:shadow-2xl transition-all duration-500 text-left"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm ${cat.color} group-hover:bg-slate-950 group-hover:text-white`}>
                        {cat.icon}
                      </div>
                      <span className="text-xl font-black text-slate-900 tracking-tight">
                        {cat.name}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   <Info size={16} />
                   <span>Clinical Support Content &mdash; Not a Treatment Replacement</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningIntro;

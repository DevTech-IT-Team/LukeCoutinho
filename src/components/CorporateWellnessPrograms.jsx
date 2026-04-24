import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Target, Activity, Users, Zap } from 'lucide-react';

const CorporateWellness = () => {
  const programs = [
    {
      title: "Preventive Leadership",
      desc: "Cultivate a high-performance culture through proactive health strategies.",
      icon: <Target size={24} />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Integrative Diagnostics",
      desc: "Data-driven wellness insights tailored for the executive lifestyle.",
      icon: <Activity size={24} />,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Scalable Solutions",
      desc: "From startups to conglomerates, we customize wellness at scale.",
      icon: <Users size={24} />,
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      title: "Mental Fitness",
      desc: "Stress resilience and mindfulness training for modern teams.",
      icon: <Zap size={24} />,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      
      {/* Soft Peach Editorial Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFF7ED] skew-x-[12deg] translate-x-32 hidden lg:block pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-200/20 rounded-full blur-[120px]" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Strategic Narrative */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full shadow-sm border border-slate-100"
            >
              <ShieldCheck className="text-orange-500" size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Enterprise Solutions</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[5.5rem] font-bold text-slate-950 leading-[1] tracking-tighter"
            >
              The Next Era of <br />
              <span className="text-orange-500 italic font-light">Corporate Vitality.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-slate-500 font-medium leading-relaxed max-w-xl"
            >
              We partner with visionary organizations to build ecosystems of health, where every team member is empowered to thrive.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="px-10 py-6 bg-slate-950 text-white font-black rounded-2xl shadow-2xl hover:bg-orange-500 transition-all uppercase tracking-widest text-xs flex items-center gap-3">
                Partner with us <ArrowRight size={20} />
              </button>
              <button className="px-10 py-6 border-2 border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all uppercase tracking-widest text-xs">
                View Offerings
              </button>
            </motion.div>
          </div>

          {/* Right Side: Interactive Program Showcase (Dark Theme Side) */}
          <div className="grid gap-6">
            {programs.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 bg-white border border-orange-100 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(249,115,22,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(249,115,22,0.12)] transition-all duration-700"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-[1.2rem] bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm`}>
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-950 mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all">
                     <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default CorporateWellness;
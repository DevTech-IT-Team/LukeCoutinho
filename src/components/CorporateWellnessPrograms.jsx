import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, UserCheck, Activity, ArrowRight, Check, Target, Users, Zap } from 'lucide-react';

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
    <section className="py-40 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Layer */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 skew-x-[12deg] translate-x-32 hidden lg:block pointer-events-none" />

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
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              The Next Era of <br />
              <span className="text-orange-500 italic font-light font-sans">Corporate Vitality.</span>
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 glass rounded-[2.5rem] border border-white/10 hover:border-orange-500/50 transition-all duration-500 bg-white/5 backdrop-blur-3xl"
              >
                <div className="flex items-center gap-8">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 font-medium leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-orange-500 group-hover:text-orange-500 transition-all">
                    <Check size={20} />
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
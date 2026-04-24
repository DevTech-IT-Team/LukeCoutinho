import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Dumbbell, Moon, Heart, Sparkles, Wind, ArrowRight, Stars, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PillarsSection = () => {
  const pillars = [
    {
      id: "01",
      title: "Deep Cellular Nutrition",
      content: "Nutrient-dense, personalized eating plans designed to optimize cellular metabolism and fuel natural healing.",
      icon: <Leaf />,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: "02",
      title: "Adequate Exercise",
      content: "Intentional movement focusing on strength, flexibility, and cardiovascular health to energize the body and mind.",
      icon: <Dumbbell />,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "03",
      title: "Quality Sleep",
      content: "Restorative sleep strategies to balance circadian rhythms and activate the innate recovery mechanisms.",
      icon: <Moon />,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      id: "04",
      title: "Emotional Wellness",
      content: "Mindfulness and stress-management tools to foster inner resilience, gratitude, and mental clarity.",
      icon: <Heart />,
      color: "from-rose-400 to-rose-600"
    },
    {
      id: "05",
      title: "Reconnecting Spirit",
      content: "Spiritual and social connections that provide purpose, harmony, and a profound sense of well-being.",
      icon: <Sparkles />,
      color: "from-amber-400 to-amber-600"
    },
    {
      id: "06",
      title: "The Power of Breath",
      content: "Conscious breathing techniques to oxygenate cells, calm the nervous system, and restore balance.",
      icon: <Wind />,
      color: "from-teal-400 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "circOut" }
    }
  };

  return (
    <section className="relative py-40 bg-[#0f172a] text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center mb-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-orange-500"
          >
            <div className="h-px w-12 bg-current opacity-30" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">The Core Philosophy</span>
            <div className="h-px w-12 bg-current opacity-30" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            The 06 Pillars of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">Holistic Mastery.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium"
          >
            Our integrative approach harmonizes six vital life areas to unlock your body's innate potential for healing and performance.
          </motion.p>
        </div>

        {/* Interactive Experience Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full glass-dark p-10 rounded-[3rem] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0`}>
                      {React.cloneElement(pillar.icon, { size: 32 })}
                    </div>
                    <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                      {pillar.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
                    {pillar.content}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">Learn Mastery</span>
                    <ArrowRight size={20} className="text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 bg-white/5"
        >
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h4 className="text-3xl font-black text-white">The Blueprint for Your Evolution.</h4>
            <p className="text-slate-400 font-medium italic">"Health is not just the absence of disease, it is the presence of vitality."</p>
          </div>
          
          <Link 
            to="/about/approach"
            className="px-12 py-6 bg-orange-500 text-white font-black rounded-2xl shadow-2xl hover:bg-white hover:text-slate-950 transition-all uppercase tracking-widest text-sm active:scale-95 whitespace-nowrap"
          >
            Explore the Methodology
          </Link>
        </motion.div>
      </div>

      {/* Decorative SVG Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-slow-spin">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="4 2" />
        </svg>
      </div>
    </section>
  );
};

export default PillarsSection;
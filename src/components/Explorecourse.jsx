import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, PlayCircle, Trophy, Sparkles } from 'lucide-react';

const LearningHubCTA = () => {
  return (
    <section id="courses" className="py-40 bg-[#020617] relative overflow-hidden group">
      
      {/* Cinematic Background with Interaction */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
      >
        <img 
          src="file:///C:/Users/Cobuy/.gemini/antigravity/brain/65ce4c39-18c2-499f-8638-1dd0d35c6c02/learning_hub_bg_1773913327977.png" 
          alt="" 
          className="w-full h-full object-cover blur-[2px] group-hover:blur-0 transition-all duration-1000"
        />
      </motion.div>

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-950/80 to-[#020617]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020617] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-white/10"
            >
              <GraduationCap className="text-orange-500" size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Advanced Educational Hub</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              Master Your <br />
              <span className="text-orange-500 italic font-light">Well-being.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-xl"
            >
              Access premium, self-paced courses designed by Luke Coutinho to empower your health journey with science and simplicity.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              <Link 
                to="/learn/learninghub/home#courses"
                className="px-12 py-6 bg-orange-500 text-white font-black rounded-2xl shadow-2xl hover:bg-white hover:text-slate-950 transition-all uppercase tracking-widest text-xs flex items-center gap-4 group"
              >
                Start Learning <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <BookOpen />, label: "40+ Courses", desc: "Expert content" },
              { icon: <PlayCircle />, label: "Self-Paced", desc: "Learn your way" },
              { icon: <Trophy />, label: "Certification", desc: "Validation of skill" },
              { icon: <Sparkles />, label: "Exclusive", desc: "Pro protocols" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass rounded-[2.5rem] border-white/5 hover:border-orange-500/50 transition-all group/card"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-orange-500 group-hover/card:bg-orange-500 group-hover/card:text-white transition-all mb-6">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <div className="text-xl font-black text-white mb-1 tracking-tight">{item.label}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.desc}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default LearningHubCTA;
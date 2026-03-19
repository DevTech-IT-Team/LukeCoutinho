import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import phoneMockup from '../../assets/ssbg.png';

export default function CommunitySection() {
  const features = [
    { text: "Stay Motivated", emoji: "🚀" },
    { text: "Engage with Experts", emoji: "🤝" },
    { text: "Live Session Updates", emoji: "🎥" },
    { text: "Exclusive Content", emoji: "🔥" },
    { text: "Science-Backed Advice", emoji: "💡" },
    { text: "& more", emoji: "✨" },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto relative bg-orange-500 rounded-[4rem] overflow-hidden shadow-2xl">
        
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-slate-900/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 p-8 md:p-16 lg:p-20">
          
          {/* --- LEFT: INTERACTIVE PHONE MOCKUP --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            {/* Decorative Gray Ring behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/20 rounded-full scale-90" />
            
            <motion.div
            
              style={{ perspective: 1000 }}
              className="relative z-20"
            >
              <img
                src={phoneMockup}
                alt="Community Preview"
                className="w-[280px] md:w-[320px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </motion.div>

          {/* --- RIGHT: CONTENT & STAGGERED PILLS --- */}
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="uppercase font-black tracking-[0.3em] text-[10px] text-white/80">Exclusive Access</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase">
                Join Our <br />
                <span className="text-slate-900">Community</span>
              </h2>
              <p className="text-white/90 text-lg font-medium max-w-md mx-auto lg:mx-0">
                Get Luke's content first, straight to your fingertips.
              </p>
            </motion.div>

            {/* Interactive Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{backgroundColor: "#0f172a", color: "#ffffff" }}
                //   transition={{ delay: i * 0.1 }}
                  className="bg-white text-orange-600 px-5 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-lg cursor-default flex items-center gap-2 transition-colors"
                >
                  <span>{item.emoji}</span>
                  <span>{item.text}</span>
                </motion.span>
              ))}
            </div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button className="group relative bg-slate-900 text-white font-black px-12 py-5 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-2xl overflow-hidden transition-all">
                <span className="relative z-10 flex items-center gap-3">
                  Join our Community <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Hover Text Color Shift */}
                <style jsx>{`
                  button:hover span { color: #f97316; }
                `}</style>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Globe, Heart, Users, MessageSquare, Zap } from 'lucide-react';
import phoneMockup from '../assets/ssbg.png';

const CommunitySection = () => {
  const features = [
    { text: "Stay Motivated", emoji: "🚀" },
    { text: "Engage with Experts", emoji: "🤝" },
    { text: "Live Session Updates", emoji: "🎥" },
    { text: "Exclusive Content", emoji: "🔥" },
    { text: "Science-Backed Advice", emoji: "💡" },
    { text: "& more", emoji: "✨" },
  ];

  const socialGroups = [
    { name: "Intentions Sangha", icon: <Heart size={20} /> },
    { name: "Wellness Tribe", icon: <Users size={20} /> },
    { name: "Support Circle", icon: <MessageSquare size={20} /> },
    { name: "Healing Sangha", icon: <Zap size={20} /> },
    { name: "Lifestyle Hub", icon: <Globe size={20} /> },
  ];

  return (
    <section className="w-full py-40 bg-[#FCF9F5] px-4 md:px-10 overflow-hidden">
      
      {/* Editorial Header - Consistent with Home Page Hierarchy */}
      <div className="max-w-[1440px] mx-auto mb-20 text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="flex items-center justify-center lg:justify-start gap-6 mb-8"
        >
           <div className="h-[2px] w-12 bg-orange-500" />
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500">Global Ecosystem</span>
        </motion.div>
        <h2 className="text-6xl md:text-[6.5rem] font-bold text-slate-950 leading-[0.9] tracking-tighter uppercase whitespace-pre-line mb-8">
           The Wellness <br />
           <span className="text-orange-500 italic font-light lowercase serif">Connection.</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium max-w-xl">
           Join a global tribe of seekers dedicated to clinical transformation and holistic growth.
        </p>
      </div>

      {/* Reduced Container Size for a more refined look */}
      <div className="max-w-6xl mx-auto relative bg-[#F97316] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-20px\_rgba(249,115,22,0.25)] min-h-[500px] flex items-center">
        
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-slate-950/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16 p-10 md:p-16 lg:p-20">
          
          {/* --- LEFT: INTERACTIVE PHONE MOCKUP --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative invisible lg:visible h-0 lg:h-auto"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/10 rounded-full scale-90" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <img
                src={phoneMockup}
                alt="Community Preview"
                className="w-[280px] md:w-[320px] drop-shadow-[0_40px_40px_rgba(0,0,0,0.35)]"
              />
            </motion.div>
          </motion.div>

          {/* --- RIGHT: CONTENT & STAGGERED PILLS --- */}
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left text-white">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                 <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center"><Sparkles size={12} className="text-white" /></div>
                 <span className="uppercase font-bold tracking-[0.4em] text-[10px] text-white/90">Exclusive Digital Access</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tighter uppercase text-white">
                Join Our <br />
                <span className="text-slate-950">Vibrant Tribe.</span>
              </h2>
              <p className="text-white/80 text-xl font-medium max-w-md mx-auto lg:mx-0 leading-relaxed italic">
                &mdash; Get Luke's clinical wisdom first, straight to your fingertips.
              </p>
            </div>

            {/* Interactive Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white text-[#F97316] px-5 py-2.5 rounded-2xl text-[9px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-3 transition-transform hover:scale-105 cursor-default"
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.text}</span>
                </motion.span>
              ))}
            </div>

            {/* Premium CTA Button */}
            <div className="pt-4">
              <button className="group relative bg-slate-950 text-white font-bold px-12 py-5 rounded-[1.5rem] text-[10px] uppercase tracking-[0.2em] shadow-2xl transition-all hover:bg-white hover:text-[#F97316] overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                  Join our Community <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Groups Scroller */}
      <div className="mt-32 py-10 border-y border-orange-100 flex items-center justify-center overflow-hidden">
         <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-40">
           {socialGroups.map((group, idx) => (
             <div key={idx} className="flex items-center gap-4 text-slate-400">
               {group.icon}
               <span className="text-sm font-bold uppercase tracking-[0.3em] font-serif italic">{group.name}</span>
             </div>
           ))}
         </div>
      </div>

    </section>
  );
};

export default CommunitySection;

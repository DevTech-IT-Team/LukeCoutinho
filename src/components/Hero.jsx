import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, CheckCircle2, Search, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import heroimg from '../assets/neimg.jpg';
import bgimg from '../assets/wellness.jpg';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Grow", "Heal", "Thrive"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* Background Layer: Subtle Parallax Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={bgimg}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>

      {/* Decorative Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent z-[1]" />
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] animate-pulse z-0" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] z-0" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100"
            >
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Global Wellness Leader</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-8xl xl:text-9xl font-black text-slate-950 leading-[0.9] tracking-tighter"
            >
              We help <br />
              you <span className="relative inline-block min-w-[280px] lg:min-w-[400px]">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={currentWordIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="block text-orange-500 italic font-light drop-shadow-sm"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-2 bg-orange-200/40 rounded-full blur-[2px]" 
                />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium"
            >
              Experience a world-class holistic transformation. We blend ancient wisdom with <span className="text-slate-900 border-b-2 border-orange-300">clinical precision</span> to reshape your health and lineage.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <button className="px-10 py-6 bg-slate-950 text-white font-black rounded-2xl shadow-2xl hover:bg-orange-500 hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-sm">
                  Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button className="flex items-center gap-4 px-8 py-6 rounded-2xl border-2 border-slate-100 hover:bg-slate-50 transition-all font-bold group">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
                <span className="uppercase tracking-widest text-xs">Watch the Approach</span>
              </button>
            </motion.div>

            {/* Trust Marks */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-12 flex flex-wrap items-center gap-10 md:gap-16 grayscale opacity-30"
            >
              <div className="text-xl font-black">FORBES</div>
              <div className="text-xl font-serif italic">VOGUE</div>
              <div className="text-xl font-bold">TED<span className="text-orange-600">x</span></div>
              <div className="text-xl font-black tracking-widest uppercase">GQ</div>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group"
            >
              <img
                src={heroimg}
                alt="Luke Coutinho"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating Interactive Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 p-5 glass rounded-3xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status</div>
                  <div className="text-sm font-bold text-slate-900">Verified Professional</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 right-10 p-6 glass rounded-[2.5rem] shadow-2xl border border-white/50"
              >
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-[8px] text-white font-bold border-2 border-white">
                    +10k
                  </div>
                </div>
                <div className="flex items-center gap-1 text-orange-500">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <div className="mt-1 text-xs font-black uppercase tracking-widest">Global Trust</div>
              </motion.div>
            </motion.div>

            {/* Decorative Background Element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-orange-100 rounded-[5rem] rotate-3 blur-sm" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400"
      >
        <span>Discover</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CalendarDays, CheckCircle2, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import heroimg from '../assets/neimg.jpg';
import bgimg from '../assets/wellness.jpg';
import bgimg2 from '../assets/balancediet.jpg';
import bgimg3 from '../assets/nutrition.jpg';
import bgimg4 from '../assets/fitforever.jpg';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [coverImageIndex, setCoverImageIndex] = useState(0);
  const words = ['Recover', 'Balance', 'Thrive'];
  const coverImages = [bgimg, bgimg2, bgimg3, bgimg4];

  const highlights = [
    'Science-backed protocols',
    'Personalized care approach',
    'Root-cause healing plans',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoverImageIndex((prev) => (prev + 1) % coverImages.length);
    }, 3400);

    return () => clearInterval(interval);
  }, [coverImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#061a3a] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={coverImageIndex}
            src={coverImages[coverImageIndex]}
            alt="Wellness backdrop"
            initial={{ x: '101%' }}
            animate={{ x: 0 }}
            exit={{ x: '-101%' }}
            transition={{ duration: 1.15, ease: 'linear' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Deep blue overlay ensures text readability while preserving image depth. */}
      <div className="absolute inset-0 bg-[#04112a]/70" />
      <div className="absolute inset-0 bg-linear-to-br from-[#05204a]/72 via-[#051737]/58 to-[#06101f]/76" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-360 items-center gap-12 px-6 pb-16 pt-28 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:pt-36">
        <div className="space-y-8 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-200/10 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan-100">
              Integrative Wellness Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
          >
            Your health can
            <br />
            <span className="relative inline-block min-w-55 sm:min-w-75 md:min-w-90">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 26, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -26, opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="block bg-linear-to-r from-cyan-200 via-sky-100 to-orange-200 bg-clip-text text-transparent"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-linear-to-r from-cyan-300/60 to-orange-300/60"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-base leading-relaxed text-slate-200 md:text-xl"
          >
            Personalized programs that combine medical insight, ancient wisdom, and sustainable habits.
            Build long-term vitality with clear guidance from a trusted wellness ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="group inline-flex items-center gap-3 rounded-2xl bg-orange-400 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#1f1f1f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-300">
              Start Your Program
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="group inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-200/80 hover:bg-cyan-200/15">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-cyan-100">
                <Play size={15} fill="currentColor" className="ml-0.5" />
              </span>
              Watch How It Works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45 }}
            className="grid gap-3 pt-2 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-sm text-slate-100 backdrop-blur-sm"
              >
                <CheckCircle2 size={16} className="text-cyan-200" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center gap-8 pt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300"
          >
            <span>As Featured In</span>
            <div className="text-sm tracking-[0.22em] text-white/75">FORBES</div>
            <div className="text-sm tracking-[0.22em] text-white/75">VOGUE</div>
            <div className="text-sm tracking-[0.22em] text-white/75">TEDx</div>
            <div className="text-sm tracking-[0.22em] text-white/75">GQ</div>
          </motion.div>
        </div>

        <div className="relative order-first lg:order-last lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mx-auto aspect-4/5 w-full max-w-125 overflow-hidden rounded-[2.5rem] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          >
            <img src={heroimg} alt="Luke Coutinho" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#020b19]/85 via-[#020b19]/20 to-transparent" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-5 top-5 rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-cyan-100">
                <ShieldCheck size={14} />
                Trusted Mentor
              </div>
              <div className="mt-2 text-xl font-black text-white">12+ years</div>
              <div className="text-xs text-slate-200">Global wellness coaching</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-5 right-5 rounded-3xl border border-white/30 bg-white/15 p-4 backdrop-blur-md"
            >
              <div className="mb-2 flex items-center gap-1 text-orange-300">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={12} fill="currentColor" />
                ))}
              </div>
              <div className="text-sm font-bold text-white">4.9 Average Experience</div>
              <div className="text-xs text-slate-200">From 10,000+ wellness journeys</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-5 flex w-full max-w-125 items-center justify-between rounded-2xl border border-cyan-300/20 bg-[#031127]/70 px-5 py-4 backdrop-blur-md"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">Next Live Session</div>
              <div className="text-sm font-bold text-white">Metabolic Reset Masterclass</div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-cyan-200/15 px-3 py-2 text-xs font-semibold text-cyan-100">
              <CalendarDays size={14} />
              26 April
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300 sm:flex"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-linear-to-b from-cyan-200 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;


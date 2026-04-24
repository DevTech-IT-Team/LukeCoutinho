import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, ShieldCheck, Sparkle } from 'lucide-react';
import wellnessImg from '../assets/wellness.jpg';
import ExclusiveWellness from '../assets/ExclusiveWellness.jpg';
import Guthealth from '../assets/Guthealth.jpg';
import CancerCare from '../assets/CancerCare.jpg';
import PregnancyCare from '../assets/PregnancyCare.webp';
import balancediet from '../assets/balancediet.jpg';
import specialcancerp from '../assets/specialcancerp.jpg';

const Programs = () => {
    const programs = [
        { id: 1, title: "Wellness Program", desc: "A comprehensive solution for all life stages, guided by 150+ years of collective expertise to rebuild your health with clarity.", img: wellnessImg, link: "/programs/wellness", tag: "Most Popular" },
        { id: 2, title: "Exclusive Wellness", desc: "Direct partnership with Luke and our senior medical team for a meticulously tailored, high-touch healthcare experience.", img: ExclusiveWellness, link: "/programs/exclusive", tag: "Premium" },
        { id: 3, title: "Gut Care Program", desc: "Restore balance to your microbiome through targeted nutrition and lifestyle shifts to improve immunity and overall vitality.", img: Guthealth, link: "/programs/gut", tag: "Core Health" },
        { id: 4, title: "Cancer Care Program", desc: "Integrative support for all cancer stages, focusing on deep cellular nutrition and professional clinical guidance.", img: CancerCare, link: "/programs/cancer-care", tag: "Integrative" },
        { id: 5, title: "Pregnancy Care Program", desc: "Nurturing you through every trimester and postnatal stage with personalized nutritional and lifestyle support.", img: PregnancyCare, link: "/programs/pregnancy", tag: "Conscious Family" },
        { id: 6, title: "Nutrition for Children", desc: "Building sustainable healthy habits from an early age through integrative lifestyle coaching for your child's growth.", img: balancediet, link: "/programs/children", tag: "Growth" },
        { id: 7, title: "Special Cancer Care", desc: "Comprehensive support from diagnosis to rehabilitation, blending expert clinical nutrition with holistic coaching.", img: specialcancerp, link: "/programs/special-cancer", tag: "Specialized" },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  
    const nextSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % programs.length);
    }, [programs.length]);
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
    };
  
    useEffect(() => {
      if (!isPaused) {
        const timer = setInterval(nextSlide, 4500);
        return () => clearInterval(timer);
      }
    }, [nextSlide, isPaused]);

    return (
        <section className="py-24 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
                    <div className="max-w-4xl space-y-6">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="inline-flex items-center gap-4 px-6 py-2 bg-orange-100/50 border border-orange-100 rounded-full text-orange-600 backdrop-blur-sm"
                        >
                            <Sparkle size={14} fill="currentColor" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scientific Excellence</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-[5.5rem] font-bold text-slate-950 leading-[1] tracking-tight">
                            Elevate your well-being with <br />
                            <span className="text-orange-500 italic font-light">Clinical Mastery.</span>
                        </h2>
                    </div>
                </div>

                <div 
                  className="relative min-h-[500px]"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="grid lg:grid-cols-12 gap-16 items-center"
                        >
                            {/* Cinematic Layered Card */}
                            <div className="lg:col-span-6 relative">
                                <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -rotate-2 scale-95 opacity-50" />
                                <div className="absolute -inset-2 bg-slate-100 rounded-[3rem] rotate-1 scale-100 opacity-60" />
                                
                                <div className="relative h-[450px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group/img">
                                    <motion.img
                                        src={programs[currentIndex].img}
                                        alt={programs[currentIndex].title}
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                                    
                                    <div className="absolute top-8 left-8">
                                        <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl border border-white/20">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950 italic">Clinical Protocol 0{currentIndex + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Editorial Content Panel */}
                            <div className="lg:col-span-6 flex flex-col justify-center space-y-10">
                                <div className="space-y-8">
                                    {/* Progress Micro-Bar */}
                                    <div className="w-20 h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div 
                                          key={currentIndex}
                                          initial={{ width: 0 }}
                                          animate={{ width: "100%" }}
                                          transition={{ duration: 4.5, ease: "linear" }}
                                          className="h-full bg-orange-500"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <motion.span 
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]"
                                        >
                                            {programs[currentIndex].tag}
                                        </motion.span>
                                        <motion.h2 
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          className="text-6xl lg:text-[5rem] font-bold text-slate-950 leading-[0.85] tracking-tighter"
                                        >
                                            {programs[currentIndex].title.split(" ")[0]} <br />
                                            <span className="text-orange-500 italic font-light">{programs[currentIndex].title.split(" ").slice(1).join(" ")}</span>
                                        </motion.h2>
                                    </div>

                                    <p className="text-2xl text-slate-500/80 font-medium leading-tight max-w-xl">
                                        {programs[currentIndex].desc}
                                    </p>
                                </div>
  
                                <div className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 border-t border-slate-100 pt-10">
                                        {["Blood Analysis", "24/7 Support", "Personal Coaching", "Protocol Manual"].map(item => (
                                            <div key={item} className="flex items-center gap-4 group/li">
                                                <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover/li:bg-orange-500 group-hover/li:text-white transition-all">
                                                    <Sparkle size={10} fill="currentColor" />
                                                </div>
                                                <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{item}</span>
                                            </div>
                                        ))}
                                    </div>
  
                                    <motion.a
                                        href={programs[currentIndex].link}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-between px-10 py-7 bg-slate-950 text-white rounded-2xl w-full max-w-md group shadow-2xl hover:bg-orange-500 transition-all duration-500"
                                    >
                                        <span className="font-black uppercase tracking-[0.3em] text-[10px]">Begin Your Evolution</span>
                                        <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                 {/* Progress Indicator Dots */}
                 <div className="mt-16 flex justify-center">
                    <div className="flex gap-3">
                         {programs.map((_, idx) => (
                             <button
                                 key={idx}
                                 onClick={() => setCurrentIndex(idx)}
                                 className={`h-2 rounded-full transition-all duration-500 ${
                                     currentIndex === idx ? 'w-12 bg-orange-500 shadow-lg shadow-orange-500/20' : 'w-2 bg-slate-200 hover:bg-slate-300'
                                 }`}
                             />
                         ))}
                    </div>
                 </div>

            </div>
        </section>
    );
};

export default Programs;
;
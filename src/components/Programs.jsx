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

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % programs.length);
    }, [programs.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-40 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                    <div className="max-w-4xl space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Clinical Precision</span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                            Programs designed <br />
                            <span className="text-orange-500 italic font-light">for your evolution.</span>
                        </h2>
                        <p className="text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                            World-class clinical programs blended with holistic lifestyle protocols to ensure lasting transformation.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={prevSlide} className="w-16 h-16 rounded-2xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-950 hover:text-white transition-all shadow-xl shadow-slate-200/40 flex items-center justify-center group active:scale-90">
                            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button onClick={nextSlide} className="w-16 h-16 rounded-2xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-950 hover:text-white transition-all shadow-xl shadow-slate-200/40 flex items-center justify-center group active:scale-90">
                            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Immersive Showcase */}
                <div className="relative min-h-[700px] lg:min-h-[800px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="grid lg:grid-cols-12 gap-10 items-stretch"
                        >
                            {/* Cinematic Image Panel */}
                            <div className="lg:col-span-8 relative rounded-[4rem] overflow-hidden shadow-2xl h-[400px] lg:h-auto">
                                <img
                                    src={programs[currentIndex].img}
                                    alt={programs[currentIndex].title}
                                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                                
                                <div className="absolute top-12 left-12 flex flex-col gap-4">
                                    <span className="glass px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-slate-900">
                                        Step 0{currentIndex + 1}
                                    </span>
                                    <div className="p-4 glass rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl inline-flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Clinically Validated</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Panel */}
                            <div className="lg:col-span-4 flex flex-col justify-center space-y-10 lg:pl-10">
                                <div className="space-y-4">
                                    <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">
                                        {programs[currentIndex].tag}
                                    </span>
                                    <h3 className="text-5xl font-black text-slate-950 leading-none tracking-tighter uppercase">
                                        {programs[currentIndex].title}
                                    </h3>
                                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                        {programs[currentIndex].desc}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <ul className="space-y-4">
                                        {["Personalized Blood Work Analysis", "24/7 Clinical Support", "Integrative Lifestyle Blueprint"].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                                <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                                                    <Sparkle size={12} fill="currentColor" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={programs[currentIndex].link}
                                        className="group inline-flex items-center gap-6 px-10 py-6 bg-slate-950 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-orange-500 transition-all shadow-2xl active:scale-95"
                                    >
                                        Explore the Protocol
                                        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Precision Progress Indicator */}
                <div className="mt-24 flex justify-between items-center px-4">
                   <div className="flex gap-4">
                        {programs.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 transition-all duration-700 rounded-full ${
                                    currentIndex === idx 
                                    ? 'w-24 bg-orange-500' 
                                    : 'w-12 bg-slate-100 hover:bg-slate-200'
                                }`}
                            />
                        ))}
                   </div>
                   <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
                       Transforming Lives Globally
                   </div>
                </div>

            </div>
        </section>
    );
};

export default Programs;
;
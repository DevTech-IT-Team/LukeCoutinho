import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import wellnessImg from '../assets/wellness.jpg';
import ExclusiveWellness from '../assets/ExclusiveWellness.jpg';
import Guthealth from '../assets/Guthealth.jpg';
import CancerCare from '../assets/CancerCare.jpg';
import PregnancyCare from '../assets/PregnancyCare.webp';
import balancediet from '../assets/balancediet.jpg';
import specialcancerp from '../assets/specialcancerp.jpg';

const Programs = () => {
    const programs = [
        { id: 1, title: "Wellness Program", desc: "All your health goals. One solution. Guided by 150+ years of collective expertise across life stages. This adaptable master program is built around you—crafted to guide you through every stage with clarity and care.", img: wellnessImg, link: "/programs/wellness" },
        { id: 2, title: "Exclusive Wellness with Luke", desc: "Looking for an opportunity to work with Luke on your health goals? Experience a truly exclusive healthcare plan designed by Luke himself alongside our team of experts. Meticulously tailored to your needs.", img: ExclusiveWellness, link: "/programs/exclusive" },
        { id: 3, title: "Gut Care Program", desc: "Looking at rebuilding your gut? Our Gut Care Program is designed to work on creating harmony and balance in your gut microbiome through targeted nutrition and lifestyle modifications.", img: Guthealth, link: "/programs/gut" },
        { id: 4, title: "Cancer Care Program", desc: "Our Cancer Care Program is designed to offer personalized support for all types and stages of cancer. It taps into your body’s intelligent systems through deep cellular nutrition.", img: CancerCare, link: "/programs/cancer-care" },
        { id: 5, title: "Pregnancy Care Program", desc: "While you nurture a new life, we nurture you. You can join our program in any trimester and the plan will be modified as per the progress and body’s needs.", img: PregnancyCare, link: "/programs/pregnancy" },
        { id: 6, title: "Nutrition for Children", desc: "Discover sustainable ways for your child to eat healthy by understanding the right food choices and building an integrative lifestyle from an early age.", img: balancediet, link: "/programs/children" },
        { id: 7, title: "Special Cancer Care", desc: "From diagnosis to post-cancer rehabilitation, our personalized, holistic Cancer Care programs blend expert clinical nutrition with lifestyle coaching.", img: specialcancerp, link: "/programs/special-cancer" },
    ];

    const infinitePrograms = [...programs, ...programs, ...programs];
    const [currentIndex, setCurrentIndex] = useState(programs.length);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        if (currentIndex === programs.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(programs.length);
            }, 700);
        }
        if (currentIndex === programs.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(programs.length * 2 - 1);
            }, 700);
        }
    }, [currentIndex, programs.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-18 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-[2px] bg-orange-500"></div>
                            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Our Expertise</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Clinical Programs & <br />
                            <span className="text-orange-500">Holistic Journeys</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            Premium, results-driven wellness programs designed to help you rebuild your lifestyle with 360° clinical guidance.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={prevSlide} className="w-14 h-14 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center">
                            <ChevronLeft size={28} />
                        </button>
                        <button onClick={nextSlide} className="w-14 h-14 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center">
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {infinitePrograms.map((prog, idx) => (
                            <div key={`${prog.id}-${idx}`} className="min-w-full px-2">
                                <div className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col lg:flex-row h-auto lg:h-[550px] shadow-2xl shadow-slate-200/40">
                                    
                                    {/* Image Side */}
                                    <div className="lg:w-2/5 h-[300px] lg:h-full relative overflow-hidden group">
                                        <img
                                            src={prog.img}
                                            alt={prog.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute top-8 left-8 transition-transform group-hover:-translate-y-1">
                                            <span className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-slate-900 shadow-xl shadow-slate-200/20">
                                                0{(idx % programs.length) + 1} / Program
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-3/5 p-8 md:p-14 lg:p-20 flex flex-col bg-white">
                                        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                                            <div className="flex items-center gap-3 mb-4">
                                              <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-lg">Clinical Spotlight</span>
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                                {prog.title}
                                            </h3>
                                            <p className="text-lg text-slate-500 leading-relaxed mb-8 font-medium">
                                                {prog.desc}
                                            </p>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                                            <a
                                                href={prog.link}
                                                className="group flex items-center gap-6 text-sm font-black text-slate-900 uppercase tracking-[0.2em] hover:text-orange-500 transition-colors"
                                            >
                                                Explore Program Details
                                                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-slate-950 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                                                    <ArrowUpRight size={24} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modern Strip Indicator */}
                <div className="flex justify-center mt-16 gap-4">
                    {programs.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentIndex(idx + programs.length);
                            }}
                            className={`h-1.5 transition-all duration-500 rounded-full ${
                                (currentIndex % programs.length) === idx 
                                ? 'w-20 bg-orange-500' 
                                : 'w-8 bg-slate-200 hover:bg-slate-300'
                            }`}
                        />
                    ))}
                </div>

                {/* NEW SECTION BUTTONS (CENTERED AT BOTTOM) */}
                <div className="mt-10 mb-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-10 py-4 bg-orange-500 text-white font-bold rounded-full text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-orange-100">
                        Consult With Team Luke
                    </button>
                    <button className="px-10 py-4 border-2 border-slate-300 text-slate-500 font-bold rounded-full text-sm uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all">
                        Know More
                    </button>
                </div>

            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
            `}} />
        </section>
    );
};

export default Programs;
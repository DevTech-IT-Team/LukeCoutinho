import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState(0);

    const tabsData = [
        {
            title: "Foundational Medicine",
            tagline: "Root-Cause Resolution",
            desc: "Moving past temporary fixes. We address the underlying causes of your health concerns with sustainable, lifestyle-driven solutions tailored entirely to you.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "360° Holistic Approach",
            tagline: "Mind, Body & Spirit",
            desc: "True wellness doesn't happen in a vacuum. We seamlessly integrate mental, physical, and emotional health pillars to create a complete, balanced ecosystem.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Personalized Navigators",
            tagline: "Guided Expert Care",
            desc: "You don't have to navigate this path alone. Our expert team stands directly by your side as dedicated healthcare partners, guiding every step of your journey.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
        }
    ];

    return (
        <section className="relative bg-[#fafafa] py-28 lg:py-36 overflow-hidden antialiased">
            {/* Soft Ambient Textures */}
            <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-orange-200/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-12 right-10 w-[500px] h-[500px] bg-stone-200/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 lg:mb-28">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-700 bg-orange-50 border border-orange-100/50 px-4 py-2 rounded-full"
                        >
                            A New Paradigm of Care
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-5xl sm:text-6xl font-serif text-stone-900 tracking-tight font-normal leading-[1.1]"
                        >
                            How Holistic Health <br />
                            Changes <span className="italic text-orange-600 font-medium">Your Life</span>
                        </motion.h1>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md lg:mb-2 border-l border-stone-200 pl-6"
                    >
                        <p className="text-stone-600 leading-relaxed text-base sm:text-lg font-light">
                            If you're trapped in a frustrating cycle of recurring medical visits and temporary fixes, <span className="text-stone-950 font-medium">you aren't alone</span>. Discover a dedicated, root-cause roadmap back to complete vitality.
                        </p>
                    </motion.div>
                </div>

                {/* Main Interactive Layout Grid */}
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Interactive Tab Cards */}
                    <div className="lg:col-span-5 flex flex-col space-y-8 order-2 lg:order-1">
                        <div className="space-y-2">
                            {tabsData.map((tab, index) => {
                                const isSelected = activeTab === index;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className="group w-full text-left p-6 sm:p-8 rounded-[1.5rem] relative flex items-start gap-5 transition-all duration-300"
                                    >
                                        {/* Active Background Pillow Tracker */}
                                        {isSelected && (
                                            <motion.div 
                                                layoutId="activeTabPillow"
                                                className="absolute inset-0 bg-white border border-stone-200/60 shadow-[0_15px_35px_-10px_rgba(44,40,36,0.05)] rounded-[1.5rem]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}

                                        {/* Content container injected relative to live over the layoutId block */}
                                        <div className="relative z-10 flex items-start gap-5 w-full">
                                            <span className={`text-xs font-mono font-medium mt-0.5 transition-colors duration-300 ${isSelected ? 'text-orange-600' : 'text-stone-400'}`}>
                                                0{index + 1}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                <span className={`text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${isSelected ? 'text-orange-600' : 'text-stone-400'}`}>
                                                    {tab.tagline}
                                                </span>
                                                <h3 className="font-semibold text-xl mt-1 tracking-tight text-stone-900">
                                                    {tab.title}
                                                </h3>

                                                {/* Framer-Motion Dynamic Content Reveal */}
                                                <AnimatePresence initial={false}>
                                                    {isSelected && (
                                                        <motion.div 
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-stone-600 text-sm leading-relaxed mt-3 font-light">
                                                                {tab.desc}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Primary Action Button */}
                        <div className="pt-4">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group w-full sm:w-auto inline-flex items-center justify-center bg-stone-900 hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider px-8 py-5 rounded-xl transition-all duration-300 shadow-lg shadow-stone-900/10 hover:shadow-xl hover:shadow-orange-600/20"
                            >
                                <span>Explore Our Programs</span>
                                <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Right Column: High-End Media Frame */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="w-full aspect-[4/3] lg:aspect-[14/11] relative rounded-[2.5rem] overflow-hidden bg-stone-950 border-[6px] border-white shadow-[0_25px_60px_-15px_rgba(44,40,36,0.12)] group">

                            {/* Image Crossfade with hardware scaling shifts */}
                            <div className="absolute inset-0 z-0">
                                {tabsData.map((tab, index) => (
                                    <motion.img
                                        key={index}
                                        src={tab.image}
                                        alt={tab.title}
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ 
                                            opacity: activeTab === index ? 0.65 : 0, 
                                            scale: activeTab === index ? 1 : 1.04 
                                        }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
                                    />
                                ))}
                            </div>

                            {/* Luxury Dark Film Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-stone-950/10 z-10" />

                            {/* Top Floating Badge */}
                            <div className="absolute top-6 left-6 z-20 flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-medium tracking-wide">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                                </span>
                                Why Integrative Medicine Matters
                            </div>

                            {/* Magnetic Play Trigger Circle */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Watch Video Introduction"
                                    className="w-20 h-20 bg-white text-stone-950 rounded-full flex items-center justify-center shadow-3xl transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white"
                                >
                                    <Play size={24} className="ml-1 fill-current" />
                                </motion.button>
                            </div>

                            {/* Bottom Context Metadata Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between gap-4 text-white">
                                <div className="max-w-sm">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 mb-1.5">Video Insight</p>
                                    <h4 className="text-xl sm:text-2xl font-serif tracking-wide text-white">
                                        {tabsData[activeTab].title}
                                    </h4>
                                </div>
                                <span className="shrink-0 text-[10px] bg-black/40 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg text-stone-300 font-mono tracking-widest">
                                    02:45 MINS
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
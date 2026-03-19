import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Dna, 
  Activity, 
  Layers, 
  GitFork, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Zap,
  Microscope,
  RotateCcw
} from 'lucide-react';

// Assets
import angiogenesisImg from '../../assets/Approach/Angiogenesis.jpg';
import gutImg from '../../assets/Approach/GutMicrobiomeIllustration.jpg';
import immunityImg from '../../assets/Approach/ImmunityandInflamation.jpg';
import stemCellImg from '../../assets/Approach/StemCellRegenerationIllustration.jpg';
import dnaImg from '../../assets/Approach/DNARepairIllustration.jpg';
import approachSvg from '../../assets/Approach/Approach.svg';

const OurApproach = () => {
    const defenseMechanisms = [
        {
          id: "01",
          tag: "Angiogenesis / Anti-angiogenesis",
          title: "The Body’s Infrastructure",
          description: "Imagine tiny highways delivering vital supplies throughout your body. That's angiogenesis in action – the process of creating new blood vessels. This amazing system fuels growth and healing.",
          imbalance: "Excessive angiogenesis can lead to cancer or obesity, while inadequate levels cause hair fall and alopecia.",
          howWeHelp: "We use science-backed cellular nutrition and lifestyle practices to promote healthy angiogenesis and restore balance.",
          icon: <GitFork size={24} />,
          image: angiogenesisImg,
          bg: "bg-orange-500"
        },
        {
          id: "02",
          tag: "Gut Microbiome",
          title: "The Cornerstone of Wellness",
          description: "Your gut houses a powerful colony of microbes that impact your mood, stress levels, and even immunity. It's the central hub of your natural intelligence.",
          imbalance: "70% of your immune system lives here. Imbalance is linked to anxiety, depression, and inflammation.",
          howWeHelp: "Our program focuses on personalized nutrition and lifestyle changes to rebuild a healthy microbiome.",
          icon: <Activity size={24} />,
          image: gutImg,
          bg: "bg-slate-900"
        },
        {
          id: "03",
          tag: "Immunity and Inflammation",
          title: "Your Personal Army",
          description: "Your immune system is your first and last line of defense. It triggers inflammation – like a controlled fire – to clear debris and heal injuries.",
          imbalance: "Chronic, uncontrolled inflammation becomes a silent enemy, linked to cancer, diabetes, and heart disease.",
          howWeHelp: "We provide the support your immune system needs to thrive through our 6 pillars of lifestyle medicine.",
          icon: <ShieldCheck size={24} />,
          image: immunityImg,
          bg: "bg-orange-600"
        },
        {
          id: "04",
          tag: "Stem Cell Regeneration",
          title: "The Repair Crew",
          description: "Tiny building blocks called stem cells transform into any cell your body needs! They are the foundation of healing and growth.",
          imbalance: "Their effectiveness depends on quality. They need the right 'crew nutrition' to perform their repair work.",
          howWeHelp: "We focus on nourishing your stem cells through cellular nutrition and creating the perfect healing environment.",
          icon: <Layers size={24} />,
          image: stemCellImg,
          bg: "bg-slate-800"
        },
        {
          id: "05",
          tag: "DNA Repair",
          title: "The Biological Code",
          description: "Your DNA is the code that runs your body. When this code gets damaged, it can lead to premature aging and chronic disease.",
          imbalance: "Lifestyle choices act like a control panel (epigenetics), turning certain genes on or off regardless of your history.",
          howWeHelp: "We use targeted nutrition and modification to create a protective environment for your DNA at a cellular level.",
          icon: <Dna size={24} />,
          image: dnaImg,
          bg: "bg-orange-500"
        }
    ];

    return (
        <div className="bg-white pt-32 pb-24 font-sans overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* 1. Header Section - Consistent Style */}
                <div className="max-w-4xl mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 text-[10px] font-black uppercase tracking-widest text-orange-600">
                        <Microscope size={12} className="animate-pulse" />
                        Our Approach
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] lg:max-w-3xl">
                        Our Approach is Backed <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 drop-shadow-sm italic">
                            By Science
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-snug font-medium max-w-3xl tracking-tight">
                        Your body has built-in mechanisms to protect, prevent and heal. We coach you to harness their power through <span className="text-slate-950 font-bold underline decoration-orange-300 underline-offset-4">Lifestyle Medicine</span>.
                    </p>
                </div>

                {/* 2. Featured Image Section - Where Approach.svg shines */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Unlock Your Healing Intelligence</h2>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
                            <p>
                                These amazing <span className="text-orange-600 font-bold italic">5 Defense Mechanisms</span> are your body's natural genius. Our 6 Pillars of Lifestyle Medicine support each mechanism, working harmoniously to optimize your health.
                            </p>
                            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
                                <span className="absolute -top-10 -right-10 text-9xl font-black text-slate-200/20">?</span>
                                <span className="text-slate-950 font-black block mb-2 uppercase text-xs tracking-widest">The Secret</span>
                                <span className="text-lg">Understanding these mechanisms is about <span className="text-orange-600 font-bold">unlocking your full potential</span>. Crafting a personalized wellness plan that empowers you to thrive.</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Approach.svg as a prominent feature */}
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative group p-4 bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 overflow-hidden"
                        >
                            <img src={approachSvg} alt="Approach Illustration" className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
                        </motion.div>
                        <div className="absolute -z-10 -inset-10 bg-orange-100 blur-[80px] opacity-30 rounded-full"></div>
                    </div>
                </div>

                {/* 3. The Mechanisms - High-Interactivity Rows */}
                <div className="space-y-48 mb-40">
                    {defenseMechanisms.map((mech, index) => (
                        <div 
                            key={mech.id} 
                            className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visuals */}
                            <div className="w-full lg:w-1/2 relative">
                                <motion.div 
                                    whileInView={{ x: 0, opacity: 1 }}
                                    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative group cursor-none"
                                >
                                    <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                        <img src={mech.image} alt={mech.tag} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-[240px] hidden md:block">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-10 h-10 rounded-xl ${mech.bg} text-white flex items-center justify-center shadow-lg shadow-slate-200`}>
                                                {mech.icon}
                                            </div>
                                            <p className="text-xs font-black text-slate-400 tracking-widest uppercase leading-none">Status</p>
                                        </div>
                                        <p className="text-sm font-bold text-slate-900 leading-tight">Optimizing Defense Mechanism {mech.id}...</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2 space-y-10">
                                <div className="space-y-6">
                                    <div className="text-orange-500 font-black uppercase tracking-[0.3em] text-[11px] flex items-center gap-3">
                                        <div className="w-8 h-px bg-orange-500"></div>
                                        Mechanism {mech.id}
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">
                                        {mech.tag}
                                    </h3>
                                    <p className="text-xl text-slate-500 font-medium italic">{mech.title}</p>
                                </div>
                                <div className="space-y-8">
                                    <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                        {mech.description}
                                    </p>
                                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                            <RotateCcw size={14} className="text-orange-500" />
                                            Active Balancing
                                        </div>
                                        <p className="text-base text-slate-600">
                                            <span className="text-slate-950 font-bold block mb-1">Impact of Imbalance:</span> {mech.imbalance}
                                        </p>
                                        <p className="text-base text-slate-600">
                                            <span className="text-orange-600 font-bold block mb-1">Our Strategy:</span> {mech.howWeHelp}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Transformation CTA - Consistent Style */}
                <div className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden text-center space-y-8">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <Sparkles className="mx-auto w-12 h-12 text-white/40 animate-pulse" />
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none max-w-4xl mx-auto">
                        Ready to activate your natural healing intelligence?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto tracking-tight">
                        Dive deep into what these 5 defense mechanisms can do for your life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <button className="px-12 py-6 bg-white text-orange-600 font-black rounded-[2rem] shadow-2xl hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs">
                            Start Your Journey
                        </button>
                        <button className="flex items-center gap-3 text-white text-sm font-black uppercase tracking-widest hover:translate-x-2 transition-all">
                            Explore All Programs <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurApproach;

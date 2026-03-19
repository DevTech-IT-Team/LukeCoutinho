import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ArrowRight, 
    Heart, 
    Quote, 
    ShieldCheck, 
    Globe, 
    Sparkles,
    Wind,
    Moon,
    Smile,
    Compass,
    Zap,
    Users,
    Activity
} from 'lucide-react';

import heroimg from '../../assets/signature.jpg';
import teamImg from '../../assets/neimg.jpg';
import wellnessImg from '../../assets/wellness.jpg';
import exclusiveImg from '../../assets/ExclusiveWellness.jpg';

const SignatureWellness = () => {
    const [activePillar, setActivePillar] = useState(0);

    const pillars = [
        { 
            icon: <Zap className="text-orange-500" />, 
            title: "Food Science & Nutrient Synergy", 
            desc: "Foundational nourishment for recovery.",
            impact: "Biological Fuel",
            insight: "When we align food with your body's specific metabolic rhythm, digestion transforms into energy, and nutrients become the literal building blocks of repair. It's not just what you eat, but how your body utilizes it."
        },
        { 
            icon: <Wind className="text-blue-500" />, 
            title: "Adequate Holistic Movement", 
            desc: "Movement as joyful medicine.",
            impact: "Cellular Activation",
            insight: "Movement isn't about punishment; it's about circulation and lymphatic drainage. We focus on movement that strengthens the heart and calms the nervous system simultaneously."
        },
        { 
            icon: <Moon className="text-indigo-500" />, 
            title: "Deep Sleep", 
            desc: "The repair shop for body & mind.",
            impact: "System Recovery",
            insight: "Sleep is the non-negotiable phase where your DNA repair mechanisms activate. Without deep, restorative sleep, the best medical treatments can only achieve fraction of their potential."
        },
        { 
            icon: <Smile className="text-yellow-500" />, 
            title: "Emotional Wellness & Mental Health", 
            desc: "Nurturing the internal landscape.",
            impact: "Neurological Balance",
            insight: "Stress is a physiological event. By mastering emotional wellness, we lower cortisol and allow the parasympathetic nervous system (rest & digest) to take over the healing process."
        },
        { 
            icon: <Globe className="text-green-500" />, 
            title: "Nature: Internal & External Environment", 
            desc: "Harmonizing with the source.",
            impact: "Environmental Synergy",
            insight: "Aligning your internal clock (circadian rhythm) with nature’s light and dark cycles is the simplest yet most profound way to reset your hormones and immune system."
        },
        { 
            icon: <Wind className="text-cyan-500" />, 
            title: "Spirit & Breathwork", 
            desc: "Empowering the lifeforce.",
            impact: "Vital Energy",
            insight: "The breath is the only part of the autonomic nervous system we can control. Conscious breathing acts as a remote control to instantly settle inflammation and anxiety."
        }
    ];

    const steps = [
        { 
            step: "STEP 1", 
            title: "Expert Companionship", 
            desc: "Throughout your journey, you’ll have a dedicated wellness coach by your side, offering expert guidance, motivation, and unwavering support." 
        },
        { 
            step: "STEP 2", 
            title: "Holistic Assessment", 
            desc: "We assess your current lifestyle — your physical limitations, emotional well-being, and spiritual needs." 
        },
        { 
            step: "STEP 3", 
            title: "Personalized Mapping", 
            desc: "Based on this, we map out a personalized path, filled with tools and strategies specifically chosen to enhance your quality of life." 
        }
    ];

    const testimonials = [
        { name: "Satish", quote: "At 29, half my life was marked by Psoriasis. The program worked wonders, healing my skin, and within 3 months, I was 95% patch-free. While the program concluded, my journey is just beginning!" },
        { name: "Shashi Singh (USA)", quote: "Diagnosed with Ulcerative Colitis in March 2022, I joined the 3-month You Care Gut Health Program. At that point, I had lost 16 pounds, was unable to eat properly, and was in the worst phase. A recent colonoscopy revealed my colon fully healed, with no inflammation." },
        { name: "Viral Patel", quote: "During the program, I have lost 25+ Lbs, 14+ inches, self-doubt, and gained a better understanding of my gut and overall health. Also, I am slowly losing stubborn fat, which I never thought I could." },
        { name: "Divakar Shetty", quote: "My 76-year-old dad battled Stage 3 Non-Hodgkin’s Mantel Cell Lymphoma, enduring 5 chemo sessions and twice contracting COVID. Today, the oncologist declared him in remission, skipping the 6th cycle." }
    ];

    return (
        <div className="bg-white pt-24 font-sans overflow-x-hidden">
            {/* 1. HERO SECTION (Lightened) */}
            <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 transition-opacity duration-1000">
                    <img src={heroimg} alt="Signature Wellness" className="w-full h-full object-cover grayscale blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
                </div>
                
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 py-20">
                    <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
                            <Sparkles size={12} className="animate-pulse" />
                            Premium Care
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] lg:max-w-4xl">
                            Our Signature <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-sm">
                                Wellness Programs
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 leading-snug font-medium max-w-2xl tracking-tight italic">
                            Ever Wondered How Holistic Health Could Change Your Life? <br />
                            <span className="text-slate-900 font-black tracking-tighter">Check out our Signature Wellness Programs designed for sustainable healing.</span>
                        </p>
                        <div className="flex flex-wrap gap-6 pt-4">
                            <button className="px-10 py-5 bg-orange-500 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:bg-slate-950 transition-all uppercase tracking-widest text-xs">
                                Explore Programs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INTRO SECTION */}
            <section className="py-24 bg-white border-b border-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">
                            Feeling Stuck in a <br /><span className="text-orange-500">Medical Cycle?</span>
                        </h2>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
                            <p>
                                Many people crave a more comprehensive approach to health. That’s where foundational medicine and lifestyle with Team Luke comes in.
                            </p>
                            <p>
                                We take a <span className="text-slate-950 font-bold">360-degree approach</span> to your health – mind, body, and spirit, acting as your personalized health navigators.
                            </p>
                            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
                                <span className="absolute -top-10 -right-10 text-9xl font-black text-slate-200/20 transition-transform group-hover:scale-110 italic">?</span>
                                <h4 className="text-slate-950 font-black text-xs uppercase tracking-widest mb-4">Our Commitment</h4>
                                <p className="text-lg leading-relaxed">
                                    Our commitment to putting <span className="text-orange-600 font-bold">care back into healthcare</span> has enabled us to build a team of experts who go beyond research to guide you back to sustainable healing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] relative group bg-slate-50 ring-1 ring-slate-100">
                            <iframe 
                                className="w-full h-full transform transition-transform duration-700 group-hover:scale-[1.01]"
                                src="https://www.youtube.com/embed/jcjvaLy4tn0" 
                                title="Signature Wellness Program Intro" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOUNDATIONAL MEDICINE PILLARS - INTERACTIVE HUB (Lightened) */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-500/[0.02] blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mb-20 space-y-6">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">The Master Philosophy</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-slate-950">Holistic Mastery Engine</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                             Healing isn't a straight line—it’s a dynamic cycle. Select a pillar below to see how we rebuild your body's rhythm from the inside out.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        {/* Selection Area */}
                        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                            {pillars.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActivePillar(idx)}
                                    className={`cursor-pointer p-6 rounded-3xl border-2 transition-all duration-500 flex flex-col gap-4 ${
                                        activePillar === idx 
                                        ? 'bg-orange-600 border-orange-600 shadow-2xl shadow-orange-500/20 text-white' 
                                        : 'bg-white border-slate-100 hover:border-orange-200 text-slate-400'
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${
                                        activePillar === idx ? 'bg-white text-orange-600' : 'bg-slate-50'
                                    }`}>
                                        {pillar.icon}
                                    </div>
                                    <h3 className={`text-sm font-black leading-tight tracking-tight uppercase ${activePillar === idx ? 'text-white' : 'text-slate-900'}`}>
                                        {pillar.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>

                        {/* Insight Deep Dive Area */}
                        <div className="lg:col-span-7 h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePillar}
                                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.02, y: -10 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-full bg-slate-50 rounded-[4rem] p-10 md:p-16 border border-slate-200 relative overflow-hidden shadow-2xl shadow-slate-200/50"
                                >
                                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                        <Activity size={240} className="text-orange-500" />
                                    </div>
                                    
                                    <div className="relative z-10 space-y-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-3xl bg-orange-600 flex items-center justify-center text-3xl shadow-2xl shadow-orange-600/30">
                                                <div className="text-white">
                                                    {pillars[activePillar].icon}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] mb-1">Key Dynamic</p>
                                                <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-widest leading-none">
                                                    {pillars[activePillar].impact}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="text-xl font-black text-slate-950 flex items-center gap-2 uppercase tracking-tighter">
                                                Clinical Insight
                                                <div className="h-px flex-1 bg-slate-200" />
                                            </h4>
                                            <p className="text-xl md:text-2xl text-slate-600 font-bold leading-[1.6] tracking-tight">
                                                {pillars[activePillar].insight}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-6">
                                            <div className="px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Restores Rhythm</span>
                                            </div>
                                            <div className="px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Cellular Repair</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE 3-STEP JOURNEY */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">Caring For You, <br /><span className="text-orange-500 italic">Every Step</span></h2>
                        <p className="text-lg text-slate-500 font-semibold uppercase tracking-widest">We put CARE back in HealthCARE!</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group text-center px-6">
                                <div className="text-[12rem] font-black text-slate-200/50 absolute -top-24 left-1/2 -translate-x-1/2 -z-10 group-hover:text-orange-500/10 transition-colors pointer-events-none">{idx + 1}</div>
                                <div className="space-y-6 pt-10">
                                    <span className="text-orange-500 font-black text-xs uppercase tracking-widest">{step.step}</span>
                                    <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter">{step.title}</h3>
                                    <p className="text-slate-600 font-bold leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SIGNATURE PROGRAMS GRID */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">Explore Our Signatures</h2>
                            <p className="text-xl text-slate-500 font-bold italic">Find the right fit for your personalized health journey.</p>
                        </div>
                        <button className="px-10 py-5 border-4 border-slate-950 text-slate-950 font-black rounded-3xl hover:bg-slate-950 hover:text-white transition-all uppercase tracking-widest text-[11px]">View All Programs</button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="group rounded-[4rem] overflow-hidden border border-slate-100 shadow-3xl transition-all hover:-translate-y-4 bg-white">
                            <div className="aspect-video relative overflow-hidden">
                                <img src={wellnessImg} alt="Wellness Program" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute top-8 right-8">
                                    <span className="bg-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-lg border border-slate-100">Luke's Flagship</span>
                                </div>
                            </div>
                            <div className="p-12 space-y-6">
                                <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter font-bold font-sans tracking-tight">Wellness Program</h3>
                                <p className="text-slate-500 font-bold leading-relaxed opacity-80">
                                    All your health goals. One solution. Guided by 150+ years of collective expertise across life stages. Adaptable to every stage of your life.
                                </p>
                                <button className="flex items-center gap-3 text-sm font-black text-orange-600 uppercase tracking-widest group/btn">
                                    Explore Details <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <div className="group rounded-[4rem] overflow-hidden border border-slate-100 shadow-3xl transition-all hover:-translate-y-4 bg-white">
                            <div className="aspect-video relative overflow-hidden">
                                <img src={exclusiveImg} alt="Exclusive Wellness" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute top-8 right-8">
                                    <span className="bg-orange-500 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">Exclusive Only</span>
                                </div>
                            </div>
                            <div className="p-12 space-y-6">
                                <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Exclusive Wellness with Luke</h3>
                                <p className="text-slate-500 font-bold leading-relaxed opacity-80">
                                    A truly exclusive healthcare plan designed by Luke Coutinho himself. Each step is meticulously tailored to your individual bio-individuality.
                                </p>
                                <button className="flex items-center gap-3 text-sm font-black text-orange-600 uppercase tracking-widest group/btn">
                                    Apply Now <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS SLIDER SECTION (Light) */}
            <section className="py-24 bg-orange-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
                    <div className="text-center mb-16 space-y-2">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Voices of Success</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none">Results that Inspire</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-orange-950/[0.03] relative group hover:-translate-y-2 transition-transform border border-orange-100">
                                <Quote size={40} className="text-orange-500/10 absolute top-10 right-10" />
                                <div className="space-y-6">
                                    <p className="text-lg text-slate-700 font-bold leading-relaxed italic">"{test.quote}"</p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-orange-500 font-black text-sm border border-slate-100">
                                            {test.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-950 text-sm tracking-tight uppercase">{test.name}</p>
                                            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Verified Journey</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. LUKE'S FINAL QUOTE SECTION (White) */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center space-y-12">
                     <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-3xl border-4 border-white group rotate-3">
                        <img src={teamImg} alt="Luke Coutinho" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 font-bold" />
                     </div>
                     <div className="space-y-8">
                         <Quote size={80} className="mx-auto text-orange-500/5 mb-[-30px]" />
                         <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight italic px-4">
                            "Our bodies have a super intelligent way of communicating with us, giving us cues when something is wrong within. But we treat symptoms as the problem and try to suppress them with quick fixes. Instead of only popping a pill, try to address the root cause!"
                         </h2>
                         <div className="pt-10">
                            <p className="text-3xl font-black text-slate-950 tracking-tighter uppercase">Luke Coutinho</p>
                            <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mt-2">Founder & CEO</p>
                         </div>
                     </div>
                     
                     <div className="pt-16 border-t border-slate-100 max-w-3xl mx-auto px-6">
                        <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase tracking-[0.2em] mb-4">
                            Please Note: Our programs are NOT a replacement for your ongoing medical treatment. We work on supporting you with a holistic, foundational, and lifestyle approach respecting your bio-individuality.
                        </p>
                     </div>
                </div>
            </section>

            {/* 8. FINAL CTA (Lightened to White Card style) */}
            <section className="pb-32 px-6">
                <div className="max-w-6xl mx-auto p-16 md:p-24 bg-white border-8 border-orange-500 rounded-[5rem] text-center space-y-10 relative overflow-hidden shadow-3xl shadow-orange-200/50">
                    <div className="absolute inset-0 bg-orange-500/[0.01] blur-[100px]" />
                    <Sparkles className="mx-auto text-orange-500 w-16 h-16 animate-bounce" />
                    <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none uppercase">
                        Ready to Start Your <br /> <span className="text-orange-600">Personalized</span> Journey?
                    </h2>
                    <p className="text-slate-500 text-xl font-bold max-w-2xl mx-auto">
                        Connect with our experts today and discover the path to sustainable healing that respects your body’s unique intelligence.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 relative z-10">
                        <button className="px-14 py-7 bg-slate-950 text-white font-black rounded-full shadow-2xl hover:bg-orange-600 transition-all uppercase tracking-widest text-[11px]">
                            Start Your Consult
                        </button>
                        <button className="flex items-center gap-4 text-slate-950 text-[11px] font-black uppercase tracking-widest hover:translate-x-2 transition-all">
                            Know the Science <ArrowRight size={22} className="text-orange-500" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignatureWellness;

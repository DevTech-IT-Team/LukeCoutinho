import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    Activity,
    Plus,
    Minus,
    HelpCircle,
    ChevronDown,
    MapPin,
    Calendar,
    Award
} from 'lucide-react';

// Use the generated image path
import heroimg from '../../assets/signature.jpg'; // Placeholder, will update with real asset if possible
import gutImg from '../../assets/wellness.jpg'; // Using existing assets for now

const GutCare = () => {
    const [activePillar, setActivePillar] = useState(0);
    const [selectedTeam, setSelectedTeam] = useState("Luke's Team");
    const [selectedDuration, setSelectedDuration] = useState("3 months");
    const [openFaq, setOpenFaq] = useState(null);

    const basePrice = selectedTeam === "Luke's Senior Team" ? 95000 : 78000;
    const durationMultiplier = selectedDuration === "6 months" ? 1.8 : selectedDuration === "12 months" ? 3.2 : 1;
    const finalPrice = Math.round(basePrice * durationMultiplier).toLocaleString('en-IN');

    const pillars = [
        {
            icon: <Zap className="text-orange-500" />,
            title: "Food Science & Nutrient Synergy",
            impact: "Biological Fuel",
            insight: "When we align food with your body's specific metabolic rhythm, digestion transforms into energy, and nutrients become the literal building blocks of repair. It's not just what you eat, but how your body utilizes it."
        },
        {
            icon: <Wind className="text-blue-500" />,
            title: "Adequate Holistic Movement",
            impact: "Cellular Activation",
            insight: "Movement isn't about punishment; it's about circulation and lymphatic drainage. We focus on movement that strengthens the heart and calms the nervous system simultaneously."
        },
        {
            icon: <Moon className="text-indigo-500" />,
            title: "Deep Sleep",
            impact: "System Recovery",
            insight: "Sleep is the non-negotiable phase where your DNA repair mechanisms activate. Without deep, restorative sleep, the best medical treatments can only achieve fraction of their potential."
        },
        {
            icon: <Smile className="text-yellow-500" />,
            title: "Emotional Wellness & Mental Health",
            impact: "Neurological Balance",
            insight: "Stress is a physiological event. By mastering emotional wellness, we lower cortisol and allow the parasympathetic nervous system (rest & digest) to take over the healing process."
        },
        {
            icon: <Globe className="text-green-500" />,
            title: "Nature: Internal & External Environment",
            impact: "Environmental Synergy",
            insight: "Aligning your internal clock (circadian rhythm) with nature’s light and dark cycles is the simplest yet most profound way to reset your hormones and immune system."
        },
        {
            icon: <Activity className="text-cyan-500" />,
            title: "Spirit & Breathwork",
            impact: "Vital Energy",
            insight: "The breath is the only part of the autonomic nervous system we can control. Conscious breathing acts as a remote control to instantly settle inflammation and anxiety."
        }
    ];

    const faqs = [
        { q: "1. Who can sign up for the Gut Care Program?", a: "This program is specifically designed for anyone experiencing chronic gut issues, including acidity, bloating, IBS, IBD, ulcerative colitis, or anyone looking to optimize their gut-brain axis and overall digestive health." },
        { q: "2. How long will it take, and will I be fully cured?", a: "Healing is a process that depends on your body's bio-individuality and the severity of your condition. While many clients see shifts in energy and digestion within weeks, deep-rooted changes usually take 3 to 12 months." },
        { q: "3. Will I need to restrict certain foods?", a: "Our approach isn't about deprivation but about identifying 'triggers' using nutrient synergy. We might temporarily remove inflammatory foods and slowly reintroduce them as your gut lining heals." },
        { q: "4. Will I be recommended supplements?", a: "We prioritize Food Science & Nutrient Synergy. Supplements are only suggested if strictly necessary to bridge a clinical gap, and they are always complementary to your foundational diet." },
        { q: "5. Can pregnant women or children join this program?", a: "Yes, we have specialized protocols for pregnancy and pediatrics. We also have dedicated 'Pregnancy Care' and 'Nutrition for Children' programs for specialized needs." },
        { q: "6. Will I be able to return to my normal diet later?", a: "Our goal is to build 'Greater Food Tolerance'. By strengthening your gut membrane and microbial balance, you'll eventually be able to enjoy a wide variety of foods with resilience." }
    ];

    const testimonials = [
        { name: "Swikrati", quote: "Nutrition, yoga, breathwork and mindset transformed my gut health completely." },
        { name: "Kavita", quote: "My family and I are amazed by the results. I never thought such changes were possible so easily. My hyper acidity and constant headaches are finally under control." },
        { name: "Akhilesh", quote: "I was diagnosed with an ulcer and couldn’t tolerate the prescribed medications. Within days of reaching out to the team, I started noticing improvements." },
        { name: "Shashi", quote: "I joined the 3-month program for ulcerative colitis. A year later, my follow-up colonoscopy showed no inflammation, and I’ve been symptom-free since starting the program." }
    ];

    return (
        <div className="bg-white pt-24 font-sans overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent z-10" />
                <div className="absolute inset-0 z-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="Gut Health" className="w-full h-full object-cover grayscale blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 py-20">
                    {/* Breadcrumbs */}
                    {/* <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
                        <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <ChevronDown size={10} className="-rotate-90" />
                        <span>Programs</span>
                        <ChevronDown size={10} className="-rotate-90" />
                        <span>Wellness Programs</span>
                        <ChevronDown size={10} className="-rotate-90" />
                        <span className="text-orange-500">Gut Care Program</span>
                    </div> */}

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
                                <Activity size={12} className="animate-pulse" />
                                Microbiome Mastery
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9]">
                                Gut Care <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-sm">
                                    Program
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-snug font-medium max-w-2xl tracking-tight italic">
                                "Your gut does more than digest food. It regulates how you think, feel, and function." <br />
                                <span className="text-slate-900 font-black tracking-tighter not-italic">Restore balance at the root with a personalized gut–brain strategy.</span>
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <button className="px-10 py-5 bg-orange-500 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:bg-slate-950 transition-all uppercase tracking-widest text-xs flex items-center gap-3">
                                    Explore Program <ArrowRight size={18} />
                                </button>
                                <button className="px-10 py-5 border-2 border-slate-950 text-slate-950 font-black rounded-2xl hover:bg-slate-950 hover:text-white transition-all uppercase tracking-widest text-xs">
                                    Get a Call Back
                                </button>
                            </div>
                        </motion.div>

                        {/* Interactive Pricing Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-slate-100 shadow-3xl relative overflow-hidden ring-8 ring-slate-50"
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                <Zap size={180} className="text-orange-500" />
                            </div>
                            <div className="relative z-10 space-y-10">
                                <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Start Your Wellness Journey</h3>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Step 1: Choose your Foundational Team</p>
                                        <div className="flex gap-4">
                                            {["Luke's Team", "Luke's Senior Team"].map(team => (
                                                <button
                                                    key={team}
                                                    onClick={() => setSelectedTeam(team)}
                                                    className={`flex-1 py-4 px-6 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${selectedTeam === team ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                                >
                                                    {team}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Step 2: Choose your Program Duration</p>
                                        <div className="flex gap-4">
                                            {["3 months", "6 months", "12 months"].map(month => (
                                                <button
                                                    key={month}
                                                    onClick={() => setSelectedDuration(month)}
                                                    className={`flex-1 py-4 px-6 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${selectedDuration === month ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                                >
                                                    {month}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-slate-100 flex items-end justify-between">
                                    <div>
                                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Estimated Investment</p>
                                        <p className="text-5xl font-black text-slate-950 tracking-tighter">₹{finalPrice}</p>
                                    </div>
                                    <button className="h-16 w-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center hover:bg-orange-600 transition-all shadow-xl group">
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <p className="text-[9px] text-slate-400 font-medium leading-relaxed uppercase tracking-tighter">
                                    Disclaimer: Payments are accepted only in Indian Rupees (INR). International clients are requested to use credit cards. Standard bank conversion charges may apply.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. INTRO TEXT SECTION */}
            <section className="py-24 bg-white border-y border-slate-50">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                        True gut healing requires <br /> <span className="text-orange-500 italic">More Than Symptom Management.</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                        Rooted in Foundational Medicine, our approach supports the core systems that govern digestion, inflammation, and gut–brain communication — creating the internal stability required for lasting balance.
                    </p>
                </div>
            </section>

            {/* 3. FOUNDATIONAL MEDICINE PILLARS */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-500/[0.02] blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mb-20 space-y-6">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">The Philosophy</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-slate-950 uppercase">Foundational Medicine</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                            No protocol, treatment, or supplement can work at its full potential if the body’s foundations are weak. We focus on restoring natural balance through six non-negotiable pillars.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            {pillars.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setActivePillar(idx)}
                                    className={`cursor-pointer p-6 rounded-3xl border-2 transition-all duration-500 flex flex-col gap-4 ${activePillar === idx
                                            ? 'bg-orange-600 border-orange-600 shadow-2xl shadow-orange-500/20 text-white'
                                            : 'bg-white border-slate-100 hover:border-orange-200 text-slate-400'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${activePillar === idx ? 'bg-white text-orange-600' : 'bg-slate-50'
                                        }`}>
                                        {pillar.icon}
                                    </div>
                                    <h3 className={`text-[10px] font-black leading-tight tracking-tight uppercase ${activePillar === idx ? 'text-white' : 'text-slate-900'}`}>
                                        {pillar.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>

                        <div className="lg:col-span-7 h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePillar}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full bg-slate-50 rounded-[4rem] p-10 md:p-16 border border-slate-200 relative overflow-hidden shadow-3xl shadow-slate-200/50"
                                >
                                    <div className="relative z-10 space-y-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-3xl bg-orange-600 flex items-center justify-center text-3xl shadow-2xl shadow-orange-600/30">
                                                <div className="text-white">
                                                    {pillars[activePillar].icon}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] mb-1">Key Impact</p>
                                                <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-widest leading-none">
                                                    {pillars[activePillar].impact}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-xl md:text-2xl text-slate-600 font-bold leading-[1.6] tracking-tight">
                                            {pillars[activePillar].insight}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. STEP BY STEP JOURNEY */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Your Path To Vitality</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">A Journey That <span className="text-orange-500 italic">Begins With You.</span></h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Personalized. Science-Backed. Empathetic.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 pt-10">
                        {[
                            { step: "01", title: "Comprehensive Review", desc: "We study your medical history, PDMR forms, and lifestyle reports to understand your bio-individuality." },
                            { step: "02", title: "Personalized Protocol", desc: "Your dedicated expert crafts a nutrition and lifestyle strategy tailored to your specific gut triggers." },
                            { step: "03", title: "Continuous Guidance", desc: "Weekly tracking and adjustments ensure your gut–brain axis aligns for sustainable recovery." }
                        ].map((s, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl space-y-6 relative group hover:-translate-y-2 transition-transform">
                                <div className="text-6xl font-black text-orange-500/10 absolute top-8 right-8 group-hover:text-orange-500/20 transition-colors uppercase">{s.step}</div>
                                <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter pt-4">{s.title}</h3>
                                <p className="text-slate-500 font-bold leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">Everything You Want to Know</h2>
                        <p className="text-xl text-slate-500 font-bold italic tracking-tight uppercase">About Our Gut Care Program</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-slate-100 rounded-[2.5rem] overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full p-8 text-left bg-white flex justify-between items-center group transition-colors hover:bg-slate-50"
                                >
                                    <span className="text-lg font-black text-slate-900 pr-8 tracking-tighter leading-tight uppercase">{faq.q}</span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center transition-all ${openFaq === idx ? 'bg-slate-950 border-slate-950 rotate-90 text-white' : ''}`}>
                                        <ArrowRight size={18} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-8 pb-8 bg-slate-50/50"
                                        >
                                            <p className="text-slate-600 font-bold leading-relaxed pt-2">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. MEET LUKE SECTION */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[5rem] overflow-hidden border-8 border-white shadow-3xl group rotate-2">
                            <img src="https://www.lukecoutinho.com/blog/wp-content/uploads/2021/08/Luke-Coutinho-Founder.jpg" alt="Luke Coutinho" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 p-12 bg-orange-600 rounded-[3rem] shadow-2xl max-w-sm border-4 border-white">
                            <Quote size={40} className="text-white opacity-20 mb-4" />
                            <p className="text-white font-black text-lg italic leading-tight">
                                "The gut is the center of the universe within us. If it is dysregulated, everything else follows."
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Visionary Leadership</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none uppercase italic">Meet Luke Coutinho</h2>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Pioneer of Foundational Medicine | 14+ years experience</p>
                        </div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-bold">
                            <p>
                                Chosen by Hon. Prime Minister Narendra Modi to spearhead national missions on obesity and lifestyle, serving as a Wellness Champion for the Fit India Movement.
                            </p>
                            <p>
                                Luke’s mission remains clear: to address root causes of illness and make wellness accessible, practical, and sustainable for all.
                            </p>
                        </div>
                        <div className="flex gap-6 pt-6">
                            <button className="px-10 py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-orange-600 transition-all uppercase tracking-widest text-xs">Read Story</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TESTIMONIALS SLIDER SECTION */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
                    <div className="text-center mb-20 space-y-2">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Voices of Success</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none italic">Gut-First Transformations</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-slate-50 p-12 rounded-[4rem] shadow-xl relative group hover:-translate-y-2 transition-transform border border-slate-100">
                                <Quote size={40} className="text-orange-500/10 absolute top-10 right-10" />
                                <div className="space-y-6">
                                    <p className="text-xl text-slate-700 font-bold leading-relaxed italic tracking-tight">"{test.quote}"</p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-orange-500 font-black text-sm border border-slate-100 shadow-sm">
                                            {test.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-950 text-sm tracking-tight uppercase">{test.name}</p>
                                            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Verified Outcome</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="pb-32 px-6">
                <div className="max-w-6xl mx-auto p-16 md:p-24 bg-white border-8 border-orange-500 rounded-[5rem] text-center space-y-10 relative overflow-hidden shadow-3xl shadow-orange-200/50">
                    <div className="absolute inset-0 bg-orange-500/[0.01] blur-[100px]" />
                    <Sparkles className="mx-auto text-orange-500 w-16 h-16 animate-bounce" />
                    <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none uppercase italic">
                        Ready to Find <br /> <span className="text-orange-600">Your Way Through?</span>
                    </h2>
                    <p className="text-slate-500 text-xl font-bold max-w-2xl mx-auto uppercase tracking-tighter leading-tight">
                        Move from struggle to strength. Our Wellness Ambassadors are ready to connect with you personally.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 relative z-10">
                        <button className="px-14 py-7 bg-slate-950 text-white font-black rounded-full shadow-2xl hover:bg-orange-600 transition-all uppercase tracking-widest text-[11px]">
                            Get a Call Back
                        </button>
                        <button className="flex items-center gap-4 text-slate-950 text-[11px] font-black uppercase tracking-widest hover:translate-x-2 transition-all">
                            Explore All Programs <ArrowRight size={22} className="text-orange-500" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GutCare;

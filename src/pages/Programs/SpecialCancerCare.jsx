import React from 'react';
import { 
  Heart, 
  Shield, 
  Users, 
  Zap, 
  ArrowRight, 
  Quote, 
  Sparkles, 
  Activity, 
  Leaf, 
  Sun,
  Award,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const SpecialCancerCare = () => {
    const heroImg = "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80"; // Clinical serene background
    const cancer1 = "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"; // Hospital team
    const cancer2 = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"; // Microscopic/Research

    const highlights = [
        { icon: <Heart className="text-orange-500" />, title: "Compassionate Guidance", desc: "Walking with you through every emotional and clinical phase." },
        { icon: <Sparkles className="text-yellow-500" />, title: "Empowering Hope", desc: "Awakening the internal strength needed for deep healing." },
        { icon: <Users className="text-blue-500" />, title: "Empathetic Experts", desc: "A team that listens, understands, and cares beyond the diagnosis." },
        { icon: <Activity className="text-cyan-500" />, title: "Multifactorial Approach", desc: "Addressing the root causes, not just the cellular symptoms." }
    ];

    const programs = [
        {
            title: "Cancer Care Program with Luke's Senior Team",
            type: "Elite Individualized",
            desc: "Supportive, personalized care during treatment, remission, and beyond. This is a whole-person journey rooted in Foundational Medicine.",
            features: ["Personalized Nutrition", "Side-effect Management", "Emotional Coaching", "24/7 Expert Support"],
            btnText: "Join Senior Program"
        },
        {
            title: "Basic Cancer Care Program with Luke's Team",
            type: "Core Foundation",
            desc: "Empowering you to manage well-being through a holistic lens. Guided by foundational experts, we create a plan that suits your daily needs.",
            features: ["Holistic Meal Plans", "Guided Movement", "Restorative Sleep Protocols", "Monthly Check-ins"],
            btnText: "Start Basic Program"
        },
        {
            title: "Post-Cancer Care Program with Luke's Team",
            type: "Remission Support",
            desc: "Designed for those in remission. We help you overcome fear, minimize recurrence risk, and rebuild total body vitality.",
            features: ["Immunity Rebuild", "Detox Strategies", "Longevity Planning", "Fear Management"],
            btnText: "Build Your Vitality"
        }
    ];

    return (
        <div className="bg-white pt-24 font-sans overflow-x-hidden">
            {/* 1. HERO SECTION (Light & Airy) */}
            <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Cancer Care" className="w-full h-full object-cover opacity-10 grayscale blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </div>
                
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 py-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl space-y-8"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em]">13+ Years of Specialized Oncology Care</span>
                        </div>
                        
                        <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] drop-shadow-sm">
                            Special Cancer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-sm">
                                Care Program
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl italic tracking-tight">
                            "With You, Every Step: Personalized Cancer Care for Renewed Hope and Sustainable Healing." <br />
                            <span className="text-slate-900 font-black tracking-tighter not-italic">Discover a whole-person journey rooted in <span className="text-orange-600">Foundational Medicine.</span></span>
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                            <button className="w-full sm:w-auto px-12 py-6 bg-orange-600 text-white font-black rounded-3xl shadow-xl hover:shadow-orange-200 transition-all uppercase tracking-widest text-xs">
                                Begin Your Journey
                            </button>
                            <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                                <Users size={18} className="text-orange-500" /> 10,000+ Journeys Supported
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE HIGHLIGHTS GRID (Already light) */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {highlights.map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 hover:shadow-xl transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    {h.icon}
                                </div>
                                <h3 className="font-black text-slate-950 text-base leading-tight uppercase tracking-tight">{h.title}</h3>
                                <p className="text-slate-500 text-xs font-bold leading-relaxed">{h.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THE POWER OF HOPE - LIGHT THEME */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-orange-500/[0.03] blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">The Essence of Care</span>
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-slate-950">
                                HOPE. A simple word, <br />
                                with <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8 italic">Immense Power.</span>
                            </h2>
                        </div>
                        
                        <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-2xl shadow-slate-200/50 space-y-6">
                            <Quote size={40} className="text-orange-500 opacity-20" />
                            <p className="text-2xl font-black italic tracking-tight text-slate-900 leading-tight">
                                "Even a flicker of hope," she said, "would keep me going."
                            </p>
                            <p className="text-slate-500 font-bold leading-relaxed">
                                We were once contacted by a young woman diagnosed with stage 4 cancer. She confided that most people around her, including her doctors, had lost hope. In 13 years of coaching, we've realized patients don’t need empty promises—they just need to know they will be looked after. This is why when you are on your cancer journey with us, faith and hope form a critical part of our approach.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white shadow-3xl relative group">
                             <img src={cancer1} alt="Hope in Oncology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                             <div className="absolute inset-0 bg-orange-950/5 opacity-40" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 p-12 bg-orange-600 rounded-[3rem] shadow-2xl max-w-xs border-4 border-white">
                             <h4 className="text-3xl font-black text-white leading-none mb-2">Faith & Hope</h4>
                             <p className="text-orange-100 font-bold text-xs leading-relaxed uppercase tracking-wider">Beyond lifestyle changes, these form the core of our clinical philosophy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MULTIFACTORIAL APPROACH (Light) */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter mb-6 uppercase">How We Add Value to Your Journey</h2>
                    <p className="text-slate-500 font-bold max-w-3xl mx-auto text-lg leading-relaxed">
                        At our core, we specialize as Foundational Medicine and lifestyle experts who provide comprehensive support for a wide range of cancers.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12">
                    <div className="p-12 bg-white rounded-[4rem] space-y-6 flex flex-col justify-center border-4 border-orange-50 shadow-sm">
                        <Shield size={48} className="text-orange-600 mb-4" />
                        <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none">Managing Side Effects</h3>
                        <p className="text-slate-600 font-bold leading-relaxed">
                            Conventional therapies like chemo and radiation are crucial, but they impact healthy cells. We design personalized protocols to minimize fatigue, nausea, gut issues, and skin concerns, ensuring you stay stronger during treatment.
                        </p>
                    </div>
                    <div className="relative rounded-[4rem] overflow-hidden group shadow-2xl border-4 border-white">
                        <img src={cancer2} alt="Clinical Support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-orange-950/5" />
                        <div className="absolute bottom-10 left-10 text-slate-950 z-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 block text-orange-600">Multifactorial Logic</span>
                            <h4 className="text-2xl md:text-3xl font-black leading-none uppercase tracking-tighter">Science-Based <br /> Lifestyle Strategies</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INDIVIDUAL PROGRAMS GRID (Light) */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Select Your Path to Recovery</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase leading-[0.9]">Begin Your <br /> <span className="text-orange-600">Cancer Care</span> Journey</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                        {programs.map((p, i) => (
                            <div key={i} className="bg-white p-12 rounded-[4rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:-translate-y-4 transition-all duration-500">
                                <div className="space-y-6 flex-1">
                                    <div className="inline-block px-5 py-2 bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100">
                                        {p.type}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-tight group-hover:text-orange-600 transition-colors uppercase">
                                        {p.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-bold leading-relaxed">
                                        {p.desc}
                                    </p>
                                    <div className="space-y-4 pt-6">
                                        {p.features.map((f, fi) => (
                                            <div key={fi} className="flex items-center gap-4 text-slate-950 border-b border-slate-50 pb-2">
                                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                                <span className="text-[11px] font-black uppercase tracking-wider">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="mt-12 w-full py-6 bg-slate-950 text-white font-black rounded-3xl hover:bg-orange-600 transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 group/btn">
                                    {p.btnText} <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. AAP KE LIYE - LIGHT SOCIAL IMPACT */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-16">
                <div className="bg-white border-4 border-orange-600 rounded-[5rem] p-12 md:p-24 text-slate-950 grid lg:grid-cols-2 gap-20 items-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-5 blur-[100px]" />
                    <div className="space-y-10 relative z-10">
                        <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-200">
                            <Heart size={40} className="fill-white text-white" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                            Cancer Care <br /> <span className="text-orange-600 italic">Aap Ke Liye</span>
                        </h2>
                        <p className="text-slate-500 text-xl font-bold leading-relaxed">
                            Born out of passion, this is our FREE lifestyle support program for families facing economic constraints. We ensure no one is denied world-class care.
                        </p>
                        <button className="px-12 py-6 bg-orange-600 text-white font-black rounded-full uppercase tracking-[0.2em] text-[11px] hover:bg-slate-950 transition-all shadow-xl shadow-orange-200">
                            Apply for Support
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-6 relative z-10">
                        {[
                            { val: "200+", lab: "Families Supported" },
                            { val: "100%", lab: "Free Program" },
                            { val: "24/7", lab: "Support Grid" },
                            { val: "13Y", lab: "Clinical Legacy" }
                        ].map((stat, idx) => (
                            <div key={idx} className="aspect-square bg-orange-50 rounded-[3rem] border border-orange-100 flex flex-col items-center justify-center text-center p-8 space-y-2 hover:bg-orange-100 hover:scale-105 transition-all">
                                <p className="text-4xl font-black tracking-tighter text-orange-600">{stat.val}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-tight">{stat.lab}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. LUKE'S FINAL CANCER CARE QUOTE (Light) */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center space-y-12">
                     <div className="w-24 h-24 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-50 group rotate-6">
                        <img src="https://www.lukecoutinho.com/blog/wp-content/uploads/2021/08/Luke-Coutinho-Founder.jpg" alt="Luke Coutinho" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-all duration-700" />
                     </div>
                     <div className="space-y-8">
                         <Quote size={80} className="mx-auto text-orange-500/5 mb-[-40px]" />
                         <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight italic px-4">
                            "No one is God to decide when to give up, lose hope, or announce a death sentence. Miracles happen around us all the time. Hope is a powerful drug. Our fears and insecurities should never stop us from believing."
                         </h2>
                         <div className="pt-10">
                            <p className="text-3xl font-black text-slate-950 tracking-tight">Luke Coutinho</p>
                            <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mt-2">Holistic Nutrition – Foundational Medicine and Lifestyle</p>
                         </div>
                     </div>
                     
                     <div className="pt-20 border-t border-slate-100 max-w-4xl mx-auto">
                        <p className="text-[11px] text-slate-400 font-bold leading-relaxed uppercase tracking-[0.2em]">
                            Important Safety Note: Our programs are NOT a replacement for your ongoing medical treatment. We focus on science-based lifestyle strategies to empower your body’s natural potential in conjunction with your medical team.
                        </p>
                     </div>
                </div>
            </section>
        </div>
    );
};

export default SpecialCancerCare;

import React from 'react';
import {
    Sparkles,
    Target,
    Eye,
    Heart,
    ShieldCheck,
    Users,
    Globe,
    CheckCircle2,
    ArrowUpRight
} from 'lucide-react';

const Vision = () => {
    const missionFeatures = [
        {
            title: "Patient-Centric Magic",
            desc: "Your recovery and management take the spotlight. We integrate the best of science and lifestyle, ensuring you're at the heart of it all.",
            icon: <Target className="text-orange-500" />
        },
        {
            title: "Genuine Care",
            desc: "Embracing each moment with heart. We foster empathy across 22,000+ stories of transformation.",
            icon: <Heart className="text-pink-500" />
        },
        {
            title: "Empowering Millions",
            desc: "Bringing health and lifestyle wisdom to everyone. We are building a healthier, happier world together.",
            icon: <Globe className="text-blue-500" />
        }
    ];

    const values = [
        { title: "Luke's Vision", desc: "Our team fosters empathy in 22,000+ stories of transformation." },
        { title: "Personalized Healing", desc: "Immerse in genuine care with tailored wellness journeys." },
        { title: "Pillars of Transformation", desc: "We reshape lifestyles through our six fundamental pillars." },
        { title: "Uncover Root Causes", desc: "Seeking underlying causes rather than just addressing symptoms." },
        { title: "Integrative Support", desc: "110+ clinical experts providing holistic care and motivation." },
        { title: "Evolutionary Approach", desc: "13 years of experience integrating the latest science." }
    ];

    return (
        <div className="bg-[#FFFEFC] pt-32 pb-24 font-sans overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* Hero Section */}
                <div className="max-w-4xl mb-32 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <Sparkles size={12} className="text-orange-500" />
                        Vision & Mission
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
                        A Healthier You is a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Life-Changing Story
                        </span>
                    </h1>
                    <p className="text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                        Welcome to Team Luke — Where the essence of health care intertwines seamlessly with YOU.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mb-40 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-[4rem] bg-orange-100 flex items-center justify-center p-12 overflow-hidden relative">
                            <div className="absolute inset-0 bg-orange-500/5 animate-pulse" />
                            <div className="relative z-10 text-center space-y-6">
                                <div className="w-24 h-24 rounded-3xl bg-white shadow-2xl flex items-center justify-center mx-auto text-orange-500">
                                    <Target size={48} strokeWidth={2.5} />
                                </div>
                                <h2 className="text-4xl font-black text-slate-900">Our Mission</h2>
                                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                                    Our mission is simple – patient-centric magic. Your recovery and management take the spotlight, integrations the best of the world, ensuring you're at the heart of it all.
                                </p>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full blur-[80px] -z-10 opacity-60" />
                    </div>

                    <div className="space-y-12">
                        {missionFeatures.map((feature, idx) => (
                            <div key={idx} className="flex gap-8 group">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-xl border border-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{feature.title}</h3>
                                    <p className="text-lg text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision Pillars Grid */}
                <div className="mb-40 space-y-16">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                        <div className="max-w-2xl space-y-6">
                            <div className="flex items-center gap-3 text-orange-500 font-black tracking-widest text-[10px] uppercase">
                                <Eye size={16} /> Look Into The Future
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950">Nurturing Transformative Journeys</h2>
                        </div>
                        <p className="text-xl text-slate-500 font-medium max-w-sm leading-relaxed">
                            Blending genuine care and transformative science for a new era of well-being.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-100 flex flex-col justify-between hover:border-orange-200 transition-all hover:shadow-2xl hover:shadow-orange-100 group">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <span className="text-4xl font-black text-slate-100 group-hover:text-orange-100 transition-colors">0{idx + 1}</span>
                                        <ArrowUpRight className="text-slate-200 group-hover:text-orange-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">{val.title}</h3>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Section */}
                <div className="relative p-12 md:p-32 rounded-[5rem] bg-slate-950 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 blur-[150px]" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Positive <br /><span className="text-orange-500">Impact</span></h2>
                            <p className="text-2xl text-slate-400 font-medium leading-relaxed">
                                Luke’s mission? Empowering millions. Our team and proven methods bring health and lifestyle wisdom to everyone.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-16 h-16 rounded-full border-4 border-slate-950 bg-slate-800" />
                                    ))}
                                </div>
                                <p className="text-lg font-bold"><span className="text-orange-500">27k+</span> lives transformed</p>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 space-y-10">
                            <div className="space-y-2">
                                <p className="text-4xl font-black tracking-tight">13+ Years</p>
                                <p className="text-slate-400 uppercase tracking-widest text-xs font-black">Success in Transformative Care</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-4xl font-black tracking-tight">110+</p>
                                <p className="text-slate-400 uppercase tracking-widest text-xs font-black">Clinical Experts & Doctors</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-4xl font-black tracking-tight">5</p>
                                <p className="text-slate-400 uppercase tracking-widest text-xs font-black">National Bestselling Books</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Vision;

import React, { useState } from 'react';
import { Heart, UserCheck, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CorporateWellness() {
    const [activePillar, setActivePillar] = useState(0);

    const pillars = [
        {
            title: "Preventive Care",
            desc: "Proactive Risk Mitigation",
            longDesc: "Advanced screening strategies and stress mitigation protocols engineered to intercept burnout before it manifests clinically.",
            icon: ShieldCheck,
            bg: "bg-emerald-50 text-emerald-600 border-emerald-100",
            activeRing: "ring-emerald-500/30",
            features: ["Early Burnout Biomarkers", "Asymptomatic Risk Screening", "Autonomic Stress Mapping"]
        },
        {
            title: "Personalized Solutions",
            desc: "Data-Driven Optimization",
            longDesc: "Deep biological tracking and tailored corporate pathways built around an individual's metabolic and daily energy metrics.",
            icon: UserCheck,
            bg: "bg-orange-50 text-orange-600 border-orange-100",
            activeRing: "ring-orange-500/30",
            features: ["Metabolic Fingerprinting", "Custom Energy Architecture", "Wearable Stream Integration"]
        },
        {
            title: "Expert Guidance",
            desc: "Vetted Clinical Access",
            longDesc: "Direct, frictionless access to elite clinical nutritionists, behavioral experts, and performance coaches built for corporate tempos.",
            icon: Award,
            bg: "bg-blue-50 text-blue-600 border-blue-100",
            activeRing: "ring-blue-500/30",
            features: ["Dedicated Care Concierge", "Evidence-Based Coaching", "Executive Health Advisory"]
        },
        {
            title: "Condition Management",
            desc: "Targeted Clinical Reversal",
            longDesc: "Structured lifestyle interventions focused on optimizing markers for metabolic dysfunction, high blood pressure, and inflammation.",
            icon: Heart,
            bg: "bg-rose-50 text-rose-600 border-rose-100",
            activeRing: "ring-rose-500/30",
            features: ["Cardiometabolic Interventions", "Systemic Inflammation Tracking", "Therapeutic Lifestyle Protocols"]
        }
    ];

    return (
        <section className="relative bg-white py-24 lg:py-32 overflow-hidden antialiased text-gray-800">

            {/* Ambient Graphic Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/[0.03] to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-[300px] h-[300px] bg-gray-50 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Navigation Breadcrumb & Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
                    <nav className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span>Home</span>
                        <span className="text-gray-300">/</span>
                        <span className="text-orange-500">Corporate Wellness</span>
                    </nav>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.05]">
                        Corporate Wellness Programs
                    </h1>

                    <p className="text-gray-500 font-medium text-base sm:text-lg max-w-2xl mx-auto pt-2 tracking-tight">
                        Transforming workplace health from an operational cost into a high-performance foundation that fuels sustained execution.
                    </p>
                </div>

                {/* Interactive Matrix Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
                    {pillars.map((pillar, idx) => {
                        const IconComponent = pillar.icon;
                        const isActive = activePillar === idx;

                        return (
                            <button
                                key={idx}
                                onClick={() => setActivePillar(idx)}
                                className={`group relative text-left bg-white rounded-[2rem] p-8 border transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer outline-none ${isActive
                                    ? `border-gray-900 shadow-xl shadow-gray-900/[0.04] ring-4 ${pillar.activeRing} -translate-y-1`
                                    : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5"
                                    }`}
                            >
                                {/* Decorative Accent Mask */}
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-700 -z-10 pointer-events-none" />

                                <div className="space-y-6 w-full">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm transition-transform duration-500 ${pillar.bg} ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                                        <IconComponent size={24} strokeWidth={2} />
                                    </div>

                                    {/* Copy Block */}
                                    <div className="space-y-2">
                                        <h3 className={`text-xl font-black tracking-tight transition-colors duration-300 ${isActive ? 'text-orange-500' : 'text-gray-900 group-hover:text-orange-500'}`}>
                                            {pillar.title}
                                        </h3>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                            {pillar.desc}
                                        </p>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed tracking-tight pt-1">
                                            {pillar.longDesc}
                                        </p>
                                    </div>
                                </div>

                                {/* Active Indicator Button Action */}
                                <div className={`pt-6 flex items-center text-xs font-bold uppercase tracking-widest gap-2 transition-colors duration-300 ${isActive ? 'text-orange-500' : 'text-gray-400 group-hover:text-orange-500'}`}>
                                    <span>{isActive ? 'Active Framework' : 'View Protocol'}</span>
                                    <ArrowRight size={14} className={`transform transition-transform duration-300 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Dynamic Content Deep-Dive Panel */}
                <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-orange-100 shadow-lg shadow-gray-900/[0.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/10 -z-10" />

                    <div className="p-8 sm:p-12 lg:p-14 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                        <div className="space-y-4 max-w-md text-center md:text-left">
                            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em] bg-orange-500/5 px-3 py-1 rounded-full">
                                Focus Deployment
                            </span>
                            <h4 className="text-2xl font-black text-gray-900 tracking-tight">
                                {pillars[activePillar].title} Integration
                            </h4>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                Every pillar is fully custom-integrated into your workflow ecosystem to generate clear, executive-grade health returns without imposing friction on high-performance operational schedules.
                            </p>
                        </div>

                        {/* List Features Grid */}
                        <div className="w-full md:w-auto flex-1 max-w-sm bg-white p-6 rounded-2xl border border-gray-100 shadow-inner space-y-3.5 self-center">
                            {pillars[activePillar].features.map((feat, fIdx) => (
                                <div key={fIdx} className="flex items-center space-x-3 text-sm text-gray-700 font-semibold tracking-tight">
                                    <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
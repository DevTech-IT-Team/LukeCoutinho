import React from 'react';
import { Building2, Users, HeartHandshake, Globe } from 'lucide-react';

export default function TargetAudience() {
    const targets = [
        {
            icon: Building2,
            color: 'text-lime-600 bg-lime-500/10 border-lime-200/50',
            text: 'Corporates, communities and agencies seeking effective wellness initiatives'
        },
        {
            icon: Users,
            color: 'text-orange-600 bg-orange-500/10 border-orange-200/50',
            text: 'Executive CXOs, HRs and leaders looking for holistic health solutions'
        },
        {
            icon: HeartHandshake,
            color: 'text-teal-600 bg-teal-500/10 border-teal-200/50',
            text: 'Organizations aiming to enhance well-being, productivity and engagement'
        },
        {
            icon: Globe,
            color: 'text-emerald-700 bg-emerald-500/10 border-emerald-200/50',
            text: 'Accessible to individuals and teams worldwide with remote wellness support'
        }
    ];

    return (
        <section className="bg-[#f2efe9] py-20 px-6 lg:px-8 text-gray-800 antialiased relative overflow-hidden">
            {/* Subtle premium abstract background gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-16 relative z-10">

                {/* Header Block */}
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-gray-900 tracking-tight">
                        We’re here to guide you <span className="italic font-normal text-orange-600">every step</span> of the way.
                    </h2>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-gray-500 font-bold pt-1">
                        These programs are for you if you’re:
                    </p>
                </div>

                {/* 4-Column Grid Workspace */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {targets.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/40 shadow-sm flex flex-col items-center text-center space-y-5 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md group"
                            >
                                {/* Abstract organic-feeling icon boundary frame wrapper */}
                                <div className={`w-16 h-16 rounded-full border flex items-center justify-center ${item.color} transition-transform duration-300 group-hover:scale-105 shadow-inner`}>
                                    <IconComponent size={24} strokeWidth={1.75} />
                                </div>

                                <p className="text-gray-600 font-medium text-sm leading-relaxed tracking-tight">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
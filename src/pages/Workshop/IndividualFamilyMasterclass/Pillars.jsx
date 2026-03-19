import React from 'react';
import { Leaf, Dumbbell, Moon, Heart, Sparkles, Wind, ArrowRight } from 'lucide-react';

const PillarsRedesign = () => {
    const pillars = [
        {
            id: "01",
            title: "Deep Cellular Nutrition",
            content: "Nourish your body at the cellular level with whole, nutrient-dense foods. This approach fuels energy, supports regeneration, and promotes vitality from within.",
            icon: <Leaf size={28} />,
            color: "orange"
        },
        {
            id: "02",
            title: "Adequate Movement",
            content: "Movement isn’t about intensity—it’s about intention. From yoga to strength training, this pillar highlights how mindful movement enhances energy, flexibility, and overall resilience without overburdening your body.",
            icon: <Dumbbell size={28} />,
            color: "slate"
        },
        {
            id: "03",
            title: "Quality Sleep",
            content: "Quality sleep is the cornerstone of healing and recovery. Align with your natural rhythms to boost immunity, sharpen mental clarity, and recharge your body.",
            icon: <Moon size={28} />,
            color: "orange"
        },
        {
            id: "04",
            title: "Emotional Wellness",
            content: "Cultivate inner harmony with mindfulness, gratitude, and stress management. Emotional wellness strengthens mental clarity and enhances overall health.",
            icon: <Heart size={28} />,
            color: "slate"
        },
        {
            id: "05",
            title: "Reconnecting with Spirit",
            content: "Reconnect with your inner self and find purpose. Find purpose and meaning in your everyday life. Whether through meditation, introspection, or building meaningful relationships, this pillar nurtures inner peace and aligns your mind, body, and spirit.",
            icon: <Sparkles size={28} />,
            color: "orange"
        },
        {
            id: "06",
            title: "Breath",
            content: "Your breath is the most accessible tool for calming the mind and energizing the body. Learn simple, intentional techniques of conscious breathing that can calm the mind, reduce stress, and invigorate your body.",
            icon: <Wind size={28} />,
            color: "slate"
        }
    ];

    return (
        <section className="py-18 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Modern Header Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-12 bg-orange-500"></span>
                            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">The Foundation</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                            Why Our Integrative <br/> 
                            <span className="text-orange-500 italic">Approach Works</span>
                        </h2>
                        <p className="text-lg text-slate-600 font-medium max-w-xl">
                            The Six Pillars of Lifestyle that define integrative health and wellness, acting as the backbone for healing and long-term well-being.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="p-6 border-l-4 border-orange-500 bg-slate-50 rounded-r-2xl">
                            <p className="text-slate-400 text-sm italic">"Holistic health is not just the absence of disease, <br/> but the presence of vitality."</p>
                        </div>
                    </div>
                </div>

                {/* Asymmetrical Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <div 
                            key={pillar.id} 
                            className="group relative p-1 bg-white"
                        >
                            {/* Card Body */}
                            <div className="h-full relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 group-hover:-translate-y-2 overflow-hidden">
                                
                                {/* Background Watermark Icon */}
                                <div className="absolute -right-4 -bottom-4 text-slate-200 opacity-20 group-hover:text-orange-100 group-hover:opacity-100 transition-all duration-700 scale-150">
                                    {pillar.icon}
                                </div>

                                {/* Header with Phase and Icon */}
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:rotate-6 ${
                                        pillar.color === 'orange' ? 'bg-orange-500 text-white' : 'bg-slate-800 text-white'
                                    }`}>
                                        {pillar.icon}
                                    </div>
                                    <span className="text-xs font-black text-slate-300 tracking-widest uppercase">
                                        Phase {pillar.id}
                                    </span>
                                </div>

                                {/* Text Content */}
                                <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10 group-hover:text-orange-600 transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed font-medium relative z-10">
                                    {pillar.content}
                                </p>

                                {/* Decorative Progress Bar */}
                                <div className="mt-8 w-full h-1 bg-slate-200 rounded-full overflow-hidden relative z-10">
                                    <div className={`h-full transition-all duration-1000 group-hover:w-full ${
                                        pillar.color === 'orange' ? 'w-12 bg-orange-500' : 'w-12 bg-slate-400'
                                    }`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="h-px w-24 bg-slate-200 hidden md:block"></div>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                        A Complete Ecosystem for Healing & Prevention
                    </p>
                    <div className="h-px w-24 bg-slate-200 hidden md:block"></div>
                </div>
            </div>
        </section>
    );
};

export default PillarsRedesign;
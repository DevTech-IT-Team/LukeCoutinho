import React, { useState } from 'react';
import { Target, ChevronDown, ChevronUp } from 'lucide-react';

export default function WellnessLeadership() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="bg-white py-16 md:py-24 text-gray-800 antialiased">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content Block */}
                    <div className="md:col-span-7 order-2 md:order-1 space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-gray-900 leading-tight tracking-tight">
                            Wellness-Driven Leadership: <br />
                            <span className="text-orange-500 font-medium">How Lifestyle Changes Fuel Success and Growth</span>
                        </h2>

                        <div className="space-y-4 text-gray-600 font-medium text-sm sm:text-base leading-relaxed tracking-tight">
                            <p>
                                In today's corporate landscape, sustainable growth comes from more than just hitting targets—it's built on the foundation of healthy, motivated employees and empowered leaders.
                            </p>

                            <p>
                                When organizations invest in improving employee lifestyles, they create a ripple effect that enhances productivity, strengthens workplace culture, and supports mental health in the workplace.
                            </p>

                            {/* Collapsible Section for "Read More" data */}
                            <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <div className="space-y-4 pt-4 border-t border-orange-200/40 text-xs sm:text-sm">
                                    <p>
                                        What we need to understand is that a cookie-cutter approach does not work for everyone. Each employee faces unique challenges and motivators.
                                    </p>
                                    <p>
                                        Quick fixes may offer short-term relief—whether for managing stress, fatigue, or poor nutrition. But the deeper, more sustainable solution lies in adopting a personalized approach to wellness.
                                    </p>

                                    <div className="p-3 bg-white border border-orange-100 rounded-xl flex items-center gap-2.5 shadow-sm w-full">
                                        <Target size={16} className="text-orange-500 flex-shrink-0" />
                                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                                            Fostering sustainable high performance through tailored health strategies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Read More / Collapse Trigger Button */}
                            <div className="pt-2">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 uppercase tracking-widest hover:text-orange-500 transition-colors duration-200 focus:outline-none"
                                >
                                    <span>{isExpanded ? 'Collapse Insight' : 'Read More'}</span>
                                    {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image Block (Flipped Position) */}
                    <div className="md:col-span-5 order-1 md:order-2 relative">
                        <div className="absolute inset-0 bg-orange-500/5 rounded-2xl transform -translate-x-2 translate-y-2 -z-10" />
                        <div className="relative aspect-[4/3] md:aspect-[4/5]  overflow-hidden bg-gray-100 border border-orange-100 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                                alt="Wellness Driven Leadership and Corporate Growth"
                                className="w-full h-full object-cover grayscale-[5%]"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
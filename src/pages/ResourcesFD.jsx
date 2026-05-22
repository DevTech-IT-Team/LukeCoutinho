import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function FoundationalMedicine() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="bg-[#fdfbf7] py-16 md:py-24 text-gray-800 antialiased">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                <div className="grid md:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Image Block */}
                    <div className="md:col-span-5 relative">
                        <div className="absolute inset-0 bg-orange-500/5 rounded-2xl transform translate-x-2 translate-y-2 -z-10" />
                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 border border-orange-100 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
                                alt="Foundational Medicine Philosophy"
                                className="w-full h-full object-cover grayscale-[10%]"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content Block */}
                    <div className="md:col-span-7 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-gray-900 tracking-tight">
                            What Is <span className="text-orange-500 font-medium">Foundational Medicine</span>?
                        </h2>

                        <div className="space-y-4 text-gray-600 font-medium text-sm sm:text-base leading-relaxed tracking-tight">
                            <p>
                                Foundational Medicine is the core philosophy behind all our programs and our most successful outcomes. It is built not on complications, but on a simple truth:
                            </p>

                            <blockquote className="border-l-2 border-orange-500 pl-4 py-1 text-orange-600 font-bold bg-orange-500/[0.02]">
                                No protocol, treatment, supplement, or plan can work at its full potential if the body's foundations are weak.
                            </blockquote>

                            <p>
                                No matter which path you follow, whether Allopathy, Ayurveda, homeopathy, naturopathy, nutrition, or fitness, your results are shaped not just by what you do, <span className="text-orange-500 font-semibold">but by how well your body is prepared to respond.</span>
                            </p>

                            {/* Collapsible Section for "Read More" data */}
                            <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <div className="space-y-4 pt-4 border-t border-orange-200/40 text-xs sm:text-sm">
                                    <p>
                                        Chronic conditions and lifestyle diseases are not just problems to be fixed, but signals of lost rhythm, dis-ease, and homeostasis. Foundational Medicine focuses on restoring this natural balance by strengthening the body's daily fundamentals, so it can heal, adapt, and thrive.
                                    </p>

                                    <div className="p-3 bg-white border border-orange-100 rounded-xl flex items-center gap-2.5 shadow-sm">
                                        <ShieldCheck size={16} className="text-orange-500 flex-shrink-0" />
                                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                                            Relies on six non-negotiable lifestyle pillars for prevention and recovery.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Read More / Collapse Scope Button */}
                            <div className="pt-2">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 uppercase tracking-widest hover:text-orange-500 transition-colors duration-200 focus:outline-none"
                                >
                                    <span>{isExpanded ? 'Collapse Scope' : 'Read More'}</span>
                                    {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
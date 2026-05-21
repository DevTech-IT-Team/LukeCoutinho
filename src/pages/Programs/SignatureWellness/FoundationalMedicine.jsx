import React from 'react';

export default function FoundationalMedicine() {
    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden antialiased text-stone-800">
            {/* Subtle design element to tie back to the hero section */}
            <div className="absolute top-12 left-0 w-24 h-[1px] bg-orange-600/30 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image Frame with Editorial Border styling */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-stone-900/5 aspect-[4/5] bg-stone-100 group border border-stone-200/60">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
                                alt="Individual practicing mindfulness and breathing by a rustic window"
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Soft warm vignette layer */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column: Copywriting & Content */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">

                        {/* Heading */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight leading-tight">
                                What Is <span className="text-orange-600 font-medium">Foundational Medicine</span>?
                            </h2>
                            <div className="mt-4 h-1 w-12 bg-orange-600 rounded-full" />
                        </div>

                        {/* Body Narrative */}
                        <div className="space-y-6 text-stone-600 text-base sm:text-lg leading-relaxed font-sans">
                            <p className="text-stone-900 font-medium text-lg sm:text-xl font-serif italic">
                                Foundational Medicine is the core philosophy behind all our programs and our most successful outcomes. It is built not on complications, but on a simple truth:
                            </p>

                            {/* Core Philosophy Callout */}
                            <div className="bg-orange-50/50 border-l-2 border-orange-500 p-5 rounded-r-xl my-6">
                                <p className="text-orange-950 font-semibold text-base sm:text-lg leading-snug">
                                    No protocol, treatment, supplement, or plan can work at its full potential if the body’s foundations are weak.
                                </p>
                            </div>

                            <p>
                                No matter which path you follow, whether Allopathy, Ayurveda, homeopathy, naturopathy, nutrition, or fitness, your results are shaped not just by what you do, <span className="text-orange-600 font-semibold">but by how well your body is prepared to respond.</span>
                            </p>

                            <p>
                                Chronic conditions and lifestyle diseases are not just problems to be fixed, but signals of lost rhythm, dis-ease, and homeostasis. Foundational Medicine focuses on restoring this natural balance by strengthening the body’s daily fundamentals, so it can heal, adapt, and thrive.
                            </p>

                            <p className="text-stone-400 font-medium text-sm sm:text-base tracking-wide">
                                Foundational Medicine relies on six non-negotiable lifestyle pillars for prevention and recovery.
                            </p>
                        </div>

                        {/* Interactive Text Action */}
                        <div className="pt-2">
                            <a
                                href="#read-more"
                                className="inline-flex items-center text-stone-900 hover:text-orange-600 font-semibold tracking-wide border-b border-stone-900 hover:border-orange-600 pb-1 transition-all duration-300 group text-sm uppercase font-mono"
                            >
                                <span>Read More</span>
                                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
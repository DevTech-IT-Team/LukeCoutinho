import React, { useState } from 'react';
import { Search, Download, CheckCircle2, Sparkles } from 'lucide-react';

const LandingPage = () => {
    const searchTags = [
        "Cancer Care", "Signature Wellness", "Hormonal Imbalance",
        "Recipe Corner", "About Luke", "Corporate Wellness",
        "Wellness", "Talks & Webinars", "Downloads"
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">

            {/* 2. REDESIGNED MODERN SEARCH SECTION */}
            <section className="pt-24 pb-12 px-6">
                <div className="max-w-6xl mx-auto bg-slate-200 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
                    <div className="text-center max-w-3xl mx-auto mb-12">

                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            Looking for something <span className="text-orange-500  font-light">specific?</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium">
                            We're here to help.
                        </p>
                    </div>

                    {/* Main Search Bar */}
                    <div className="relative max-w-4xl mx-auto mb-12 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-200 rounded-3xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search health concerns, programs..."
                                className="w-full pl-8 pr-24 py-7 rounded-2xl border-2 border-transparent bg-white shadow-xl focus:ring-0 focus:border-orange-500 outline-none transition-all text-xl text-slate-700 placeholder:text-slate-400"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 p-4 rounded-xl text-white hover:bg-slate-900 transition-all shadow-lg active:scale-95">
                                <Search size={28} />
                            </button>
                        </div>
                    </div>

                    {/* Interactive Heading Tags */}
                    <div className="space-y-6 text-center">
                        <div className="flex flex-wrap justify-center gap-3">
                            {searchTags.map((tag) => (
                                <button
                                    key={tag}
                                    className="px-6 py-3 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:border-orange-500 hover:text-orange-500 hover:shadow-md transition-all active:scale-95"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. REDESIGNED CONTENT CARDS (Style Kept Exactly Same) */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* Card 1: The Blueprint */}
                    <div className="group relative grid lg:grid-cols-12 items-center gap-12">
                        <div className="lg:col-span-7 overflow-hidden rounded-[3rem] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2070"
                                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Healthy Food"
                            />
                        </div>

                        <div className="lg:col-span-5 space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-lg text-xs font-bold uppercase tracking-widest">
                                Exclusive Resource
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Back-to-Basics <br />
                                <span className="text-slate-400 font-light ">Blueprint</span>
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                A complete holistic diet & lifestyle plan designed for the Indian body, genome, and way of life.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Balanced Macros", "High-Protein", "Breathwork", "Emotional Tools"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                                        <CheckCircle2 size={20} className="text-orange-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <button className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-orange-500 transition-all shadow-2xl group/btn">
                                <Download size={20} className="group-hover/btn:translate-y-1 transition-transform" />
                                GET THE BLUEPRINT
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Bharat School Menu */}
                    <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl border border-slate-800">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 md:p-20 flex flex-col justify-center order-2 lg:order-1">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[2px] w-12 bg-orange-500"></div>
                                    <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">National Initiative</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    THE BHARAT <br /> SCHOOL MENU
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Aligned with our Hon. Prime Minister's vision for a healthier nation. Available in <span className="text-white font-bold">English & Hindi</span>.
                                </p>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-10">
                                    <p className="text-orange-400 font-bold mb-1">Impact Goal</p>
                                    <p className="text-slate-300 italic">"A healthier Bharat starts in the classroom."</p>
                                </div>
                                <button className="w-full md:w-max px-10 py-5 bg-orange-500 text-white font-bold rounded-2xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3">
                                    <Download size={20} /> FREE DOWNLOAD
                                </button>
                            </div>

                            <div className="relative h-full min-h-[400px] order-1 lg:order-2">
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900 z-10 hidden lg:block" />
                                <img
                                    src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2071"
                                    className="w-full h-full object-cover"
                                    alt="Bharat School Menu"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default LandingPage;
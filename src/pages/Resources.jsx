import React from 'react';
import { Download, BookOpen, Search, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Resources = () => {
    const downloads = [
        {
            title: "Back-to-Basics Blueprint",
            desc: "A complete holistic diet & lifestyle plan tailored for the Indian body and lifestyle. Build your wellness foundation with clinical accuracy.",
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2070",
            tag: "LIFESTYLE",
            link: "#"
        },
        {
            title: "The Bharat School Menu",
            desc: "Aligned with national health visions. A classroom-to-kitchen guide for kids' nutrition, available in English & Hindi.",
            img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2071",
            tag: "KIDS NUTRITION",
            link: "#"
        }
    ];

    const recipes = [
        {
            title: "Recipe of the Season",
            desc: "Simple, nourishing flavors designed to harmonize nutrition and taste.",
            img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400"
        },
        {
            title: "Wellness Insights",
            desc: "Clinical wisdom and lifestyle inspiration to keep you informed.",
            img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-full bg-orange-500/10 blur-[120px] -z-0" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-xs mb-6 block">The Resource Vault</span>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                        Knowledge for <br />
                        <span className="text-orange-500 italic">Self-Healing.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-400 text-xl font-medium leading-relaxed">
                        Access our curated collection of clinical blueprints, nutritional guides, and seasonal wisdom to empower your health journey.
                    </p>
                </div>
            </section>

            {/* Downloads Section */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-16">
                        <Download className="text-orange-500" />
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Essential Downloads</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {downloads.map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/95 backdrop-blur rounded-full text-[10px] font-black tracking-widest text-orange-600 uppercase">
                                        {item.tag}
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-3xl font-black text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-8">{item.desc}</p>
                                    <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/10 active:scale-95 group/btn">
                                        <Download size={18} className="group-hover/btn:translate-y-1 transition-transform" />
                                        GET THE GUIDE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recipes & Insights */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-16">
                        <BookOpen className="text-orange-500" />
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Seasonal Wisdom</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {recipes.map((item, idx) => (
                            <div key={idx} className="group relative aspect-[16/9] lg:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-slate-900">
                                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-12 flex flex-col justify-end">
                                    <h3 className="text-4xl font-black text-white mb-4">{item.title}</h3>
                                    <p className="text-slate-300 text-xl font-medium mb-8 max-w-sm">{item.desc}</p>
                                    <button className="flex items-center gap-3 text-orange-500 font-black tracking-widest text-sm hover:text-white transition-colors group/link uppercase">
                                        Explore More <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-orange-500">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Need a Personalized Approach?</h2>
                    <p className="text-orange-950/80 text-xl font-medium mb-12">While resources empower you, personalized coaching transforms you. Let's build your lifestyle together.</p>
                    <button className="px-12 py-6 bg-slate-950 text-white font-black rounded-3xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl active:scale-95 text-lg">
                        BOOK A CLINICAL CONSULT
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Resources;

import React from 'react';
import {
    ArrowRight,
    Sparkles,
    Heart,
    ShieldCheck,
    Zap,
    Moon,
    Smile,
    Compass,
    Wind,
    Globe,
    Star,
    Users,
    Play,
    BookOpen,
    Award,
    CheckCircle2
} from 'lucide-react';

import heroimg from '../../assets/neimg.jpg';
import corporateimg from '../../assets/Corporate.jpg';
import gut from '../../assets/Gut.jpg';
import insights from '../../assets/insight.jpg';
import win from '../../assets/win.jpg';
import cancer from '../../assets/Cancer.jpg';
import book from '../../assets/book.jpg';
import signature from '../../assets/signature.jpg';
import nutrition from '../../assets/nutrition.jpg';
import education from '../../assets/education.jpg';
import care from '../../assets/care.jpg';
import recipe from '../../assets/recipe.jpg';
import team from '../../assets/team.avif';

const OurStory = () => {
    const cards = [
        {
            title: "Insights and Inspiration",
            image: insights,
            category: "Community",
            color: "bg-green-500"
        },
        {
            title: "Gut Care",
            image: gut,
            category: "Health",
            color: "bg-orange-500"
        },
        {
            title: "Corporate Wellness",
            image: corporateimg,
            category: "Focus",
            color: "bg-purple-500"
        },
        {
            title: "Small Win Packages",
            image: win,
            category: "Nutrition",
            color: "bg-yellow-500"
        },
        {
            title: "Recipes of the seasons",
            image: recipe,
            category: "Nutrition",
            color: "bg-orange-400"
        },
        {
            title: "Team of Nutrition Experts",
            image: nutrition,
            category: "Experts",
            color: "bg-blue-500"
        },
        {
            title: "You Care Community",
            image: care,
            category: "Social",
            color: "bg-pink-500"
        },
        {
            title: "Educational Courses",
            image: education,
            category: "Learn",
            color: "bg-indigo-500"
        },
        {
            title: "Luke's Bestsellers",
            image: book,
            category: "Books",
            color: "bg-red-500"
        },
        {
            title: "Signature Wellness",
            image: signature,
            category: "Premium",
            color: "bg-amber-600"
        },
        {
            title: "Special Cancer Care",
            image: cancer,
            category: "Specialized",
            color: "bg-teal-600"
        }
    ];

    const pillars = [
        { icon: <Zap className="text-orange-500" />, title: "Cellular Nutrition", desc: "Fueling your body at the most fundamental level." },
        { icon: <Wind className="text-blue-500" />, title: "Adequate Movement", desc: "Movement as a form of medicine and joy." },
        { icon: <Moon className="text-indigo-500" />, title: "Quality Sleep", desc: "The foundation of repair and rejuvenation." },
        { icon: <Smile className="text-yellow-500" />, title: "Emotional Wellness", desc: "Nurturing the mind-body connection." },
        { icon: <Compass className="text-purple-500" />, title: "Spirit Reconnection", desc: "Finding purpose and inner peace." },
        { icon: <Wind className="text-cyan-500" />, title: "Breath Work", desc: "The bridge between life and energy." }
    ];

    return (
        <div className="bg-white pt-32 pb-24 font-sans overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* 1. Header Section */}
                <div className="max-w-4xl mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 text-[10px] font-black uppercase tracking-widest text-orange-600">
                        <Sparkles size={12} className="animate-pulse" />
                        Our Story
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] lg:max-w-3xl">
                        Elevating Wellness Through <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 drop-shadow-sm">
                            Personalized Care
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-snug font-medium max-w-3xl tracking-tight">
                        We’re on a mission led by our founder, <span className="text-slate-950 font-bold">Luke Coutinho</span>, to redefine your health journey with love, genuine care, and over 13+ years of expertise.
                    </p>
                </div>

                {/* 2. Team Luke Intro Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">We are Team Luke</h2>
                        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
                            <p>
                                We’re all about putting the <span className="text-orange-500 italic">‘care’</span> back into health care. Our approach delves into your body’s intelligent defense systems, like Angiogenesis, the Gut Microbiome, DNA Repair, and Stem Cell Regeneration.
                            </p>
                            <p className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
                                <span className="absolute -top-10 -right-10 text-9xl font-black text-slate-200/20 transition-transform group-hover:scale-110">?</span>
                                <span className="text-slate-900 font-bold block mb-2">What's our secret?</span>
                                <span className="text-lg">Integrative and Lifestyle Medicine is our <span className="text-orange-600 font-bold">secret sauce</span>. We don't replace medicine; we enhance it through personalized lifestyle blends created just for you.</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative perspective-1000">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-orange-500/10 rounded-[4rem] blur-[80px] -z-10 group-hover:bg-orange-500/20 transition-colors" />
                            <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white group-hover:scale-[1.02] transition-transform duration-700">
                                <img src={team} alt="Luke Coutinho" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 p-8 bg-white rounded-3xl shadow-2xl border border-slate-50 animate-float max-w-xs transition-transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center">
                                        <Heart fill="currentColor" size={20} />
                                    </div>
                                    <p className="text-3xl font-black text-slate-950 tracking-tighter">27k+</p>
                                </div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Lives Transformed and Counting...</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Slider Section */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tiht">Nurturing Journeys</h2>
                            <p className="text-lg text-slate-500 font-medium max-w-xl">Explore the core principles and specialized programs behind our holistic approach.</p>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 cursor-not-allowed"><ArrowRight size={20} className="rotate-180 opacity-30" /></div>
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer"><ArrowRight size={20} /></div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="flex overflow-x-auto gap-8 pb-12 px-2 -mx-2 snap-x scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="group/card relative min-w-[280px] md:min-w-[320px] h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-100/50 transition-all duration-500 hover:scale-[1.02] snap-center hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
                                >
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" />
                                    <div className={`absolute bottom-0 left-0 w-full h-1.5 ${card.color}`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover/card:opacity-90 transition-opacity" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 space-y-3 transform translate-y-2 group-hover/card:translate-y-0 transition-transform">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.3em] text-white/80 border border-white/20">
                                            {card.category}
                                        </span>
                                        <h3 className="text-xl font-black text-white leading-tight">
                                            {card.title}
                                        </h3>
                                        <div className="pt-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-4 group-hover/card:translate-y-0">
                                            <button className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.1em] group/btn">
                                                Discover More
                                                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover/btn:bg-orange-500 group-hover/btn:translate-x-2">
                                                    <ArrowRight size={12} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. The 6 Pillars Section */}
                <div className="mb-32 p-12 md:p-20 bg-slate-950 rounded-[4rem] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 blur-[120px] -z-10" />
                    <div className="max-w-3xl mb-16 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Pillars of Transformation</h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed">We reshape lifestyles through six core pillars that address the heart of your well-being.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {pillars.map((pillar, idx) => (
                            <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Who is Luke Profile */}
                <div className="mb-32 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative group">
                            <img src={heroimg} alt="Luke Coutinho Profile" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-10 inset-x-10">
                                <p className="text-orange-500 font-black uppercase tracking-[0.2em] text-xs mb-2">Wellness Champion</p>
                                <h3 className="text-3xl font-black text-white tracking-tight leading-none">Luke Coutinho</h3>
                            </div>
                        </div>
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full -z-10 blur-2xl opacity-60" />
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">Who is <br /><span className="text-orange-500">Luke Coutinho?</span></h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                            <p>
                                Luke Coutinho, the <span className="text-slate-900 font-bold">Wellness Champion</span> at the forefront of Prime Minister Narendra Modi’s Fit India Movement, practices integrative and lifestyle medicine.
                            </p>
                            <p>
                                A thought leader in India’s wellness movement, his transformative You Care Wellness Program over the last 13 years has had remarkable success in treating conditions ranging from cancer and diabetes to autoimmune disorders.
                            </p>
                            <p>
                                Luke has authored five national bestsellers, including the latest gem – <span className="text-orange-600 font-bold italic underline decoration-orange-200 decoration-2 underline-offset-4 pointer-events-none">Small Wins Every Day</span>.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                                    <Play size={20} fill="currentColor" className="ml-1" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Watch Video</p>
                                    <p className="text-xs uppercase font-black tracking-widest text-slate-900 group-hover:text-orange-500 transition-colors">Learn More About Luke</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 6. Ecosystem Section (LSI & YCL) */}
                <div className="mb-32 space-y-20">
                    <div className="text-center space-y-6 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950">Our Ecosystem</h2>
                        <p className="text-lg text-slate-500 font-medium">From empowering future leaders to building a sustainable wellness platform.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* LSI */}
                        <div className="group p-10 lg:p-14 rounded-[4rem] bg-indigo-50 border border-indigo-100 hover:bg-slate-950 hover:text-white transition-all duration-500 hover:-translate-y-4">
                            <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">
                                <BookOpen size={40} className="text-indigo-600" />
                            </div>
                            <h3 className="text-3xl font-black mb-6 tracking-tight">Lifeness Science Institute (LSI)</h3>
                            <p className="text-lg opacity-70 leading-relaxed font-medium mb-10">
                                Specialized education in Integrative Nutrition and Dietetics. Shaping passionate minds with hands-on experience in collaboration with prestigious Mumbai colleges.
                            </p>
                            <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-indigo-600 group-hover:text-white">
                                Explore Institute <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        {/* YCL */}
                        <div className="group p-10 lg:p-14 rounded-[4rem] bg-orange-50 border border-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-500 hover:-translate-y-4">
                            <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">
                                <ShieldCheck size={40} className="text-orange-600" />
                            </div>
                            <h3 className="text-3xl font-black mb-6 tracking-tight">You Care Lifestyle (YCL)</h3>
                            <p className="text-lg opacity-70 leading-relaxed font-medium mb-10">
                                Delivering certified, clean, and safe products. Our verified claims ensure a confident shopping experience for organic, chemical-free wellness aspirations.
                            </p>
                            <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-orange-600 group-hover:text-white">
                                Shop Ethical Wellness <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 7. Community CTA */}
                <div className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden text-center space-y-8">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <Sparkles className="mx-auto w-12 h-12 text-white/40 animate-pulse" />
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none max-w-4xl mx-auto">
                        Welcome to Team Luke — Where health care meets heart.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto tracking-tight">
                        Because a healthier you? That’s a life-changing story in the making!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <button className="px-12 py-6 bg-white text-orange-600 font-black rounded-[2rem] shadow-2xl hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs">
                            Join Our Community
                        </button>
                        <button className="flex items-center gap-3 text-white text-sm font-black uppercase tracking-widest hover:translate-x-2 transition-all">
                            Explore Mission <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurStory;

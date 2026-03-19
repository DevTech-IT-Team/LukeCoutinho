import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    ArrowRight,
    Heart,
    Quote,
    ShieldCheck,
    Globe,
    Sparkles,
    Wind,
    Moon,
    Smile,
    Compass,
    Zap,
    Users,
    Activity,
    Plus,
    Minus,
    HelpCircle,
    ChevronDown,
    MapPin,
    Calendar,
    Award,
    Baby
} from 'lucide-react';

const PregnancyCare = () => {
    const [activePillar, setActivePillar] = useState(0);
    const [selectedTeam, setSelectedTeam] = useState("Luke's Team");
    const [selectedDuration, setSelectedDuration] = useState("3 months");
    const [openFaq, setOpenFaq] = useState(null);

    const basePrice = selectedTeam === "Luke's Senior Team" ? 110000 : 85000;
    const durationMultiplier = selectedDuration === "6 months" ? 1.8 : selectedDuration === "9 months" ? 2.5 : selectedDuration === "12 months" ? 3.2 : 1;
    const finalPrice = Math.round(basePrice * durationMultiplier).toLocaleString('en-IN');

    const pillars = [
        {
            icon: <Zap className="text-orange-500" />,
            title: "Trimester-Wise Nutrition",
            impact: "Fetal Development",
            insight: "Each trimester requires a shift in nutrient synergy. From folic acid in the first to calcium and iron in the third, we align your food intake with your baby's specific developmental milestones."
        },
        {
            icon: <Wind className="text-blue-500" />,
            title: "Gentle Holistic Movement",
            impact: "Pelvic Health",
            insight: "Movement during pregnancy isn't just about fitness; it's about preparing the body for labor and maintaining circulation. We focus on gentle, science-backed activity that respects your changing body."
        },
        {
            icon: <Moon className="text-indigo-500" />,
            title: "Restorative Sleep",
            impact: "Physical Recovery",
            insight: "As your body grows, sleep can become a challenge. We provide protocols to manage discomfort, anxiety, and hormonal shifts, ensuring you get the restorative rest both you and your baby need."
        },
        {
            icon: <Smile className="text-yellow-500" />,
            title: "Emotional Wellness",
            impact: "Neurological Harmony",
            insight: "A mother's emotional state directly impacts the baby's internal environment. We offer coaching to navigate mood swings, prenatal anxiety, and the big emotional shifts of pregnancy."
        },
        {
            icon: <Globe className="text-green-500" />,
            title: "The Maternal Environment",
            impact: "Epigenetic Health",
            insight: "Everything from local light exposure to your internal gut health shapes your baby's start. We optimize your immediate environment to support a robust immune system from the womb."
        },
        {
            icon: <Activity className="text-cyan-500" />,
            title: "Conscious Breathing",
            impact: "Labor Preparation",
            insight: "Breathwork is your most powerful tool during pregnancy and delivery. It settles the nervous system, manages cravings, and prepares you for the physical intensity of birth."
        }
    ];

    const faqs = [
        { q: "1. From which month can an expecting mother join this program?", a: "An expecting mother can join at any stage—from the day of conception to any week of her pregnancy. We also offer pre-conception and postnatal support." },
        { q: "2. Does the food plan change in each trimester?", a: "Yes. Your body's requirements and your baby's development change every three months. We adjust your nutrition, movement, and sleep protocols accordingly." },
        { q: "3. Will the program guide me on food restrictions and cravings?", a: "We help you manage cravings using nutrient synergy and identify any actual deficiencies behind them. We also provide clear guidance on foods to avoid for medical safety." },
        { q: "4. Can this program replace my doctor’s treatment?", a: "No. Our Pregnancy Care Program is a foundational and lifestyle support program that works in conjunction with your OB-GYN's treatment plan." },
        { q: "5. Will the program help manage medical conditions like GDM or thyroid issues?", a: "Yes. We have specialized lifestyle strategies to help manage gestational diabetes, hypertension, and thyroid imbalances through clinical nutrition and lifestyle shifts." },
        { q: "6. If I deliver during the program, will I get postnatal support?", a: "Absolutely. We guide you through the 4th trimester (postnatal phase), including lactation support, postpartum recovery, and your baby's initial nutrition." }
    ];

    const testimonials = [
        { name: "Gayatri", quote: "My prenatal and postnatal journey with Paarmi and Dr. Manisha was incredible. Their guidance made breastfeeding smooth, and I’m still exclusively feeding my baby five months later. Truly grateful." },
        { name: "Chinmayi", quote: "Even in my second pregnancy, Jesal’s care made a huge difference. From nausea to tests and lactation guidance, she supported me every step. The team’s presence made this journey special." },
        { name: "Abhinaya", quote: "This program kept me on track throughout my first pregnancy. The team’s constant guidance and quick responses gave me peace of mind and confidence, right from pregnancy to post-delivery." },
        { name: "Aadhya", quote: "Four months into Luke’s Pregnancy Plan, my journey feels smooth and joyful. Nidhi’s constant monitoring eased my acidity, nausea, and confusion, helping me focus on health, balance, and well-being." }
    ];

    return (
        <div className="bg-white pt-24 font-sans overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80" alt="Pregnancy Care" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 py-20">
                    {/* Breadcrumbs */}
                    {/* <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
                        <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
                        <ChevronDown size={10} className="-rotate-90" />
                        <span>Programs</span>
                        <ChevronDown size={10} className="-rotate-90" />
                        <span>Wellness Programs</span>
                        <ChevronDown size={10} className="-rotate-90" />
                        <span className="text-orange-500">Pregnancy Care Program</span>
                    </div> */}

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
                                <Baby size={12} className="animate-pulse" />
                                Conscious Parenting
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9]">
                                Pregnancy <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-sm">
                                    Care Program
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-snug font-medium max-w-2xl tracking-tight italic">
                                "Nurturing two lives with one personalized plan." <br />
                                <span className="text-slate-900 font-black tracking-tighter not-italic">Personalized care that strengthens your foundations from conception through postnatal care.</span>
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <button className="px-10 py-5 bg-orange-500 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:bg-slate-950 transition-all uppercase tracking-widest text-xs flex items-center gap-3">
                                    Explore Program <ArrowRight size={18} />
                                </button>
                                <button className="px-10 py-5 border-2 border-slate-950 text-slate-950 font-black rounded-2xl hover:bg-slate-950 hover:text-white transition-all uppercase tracking-widest text-xs">
                                    Get a Call Back
                                </button>
                            </div>
                        </motion.div>

                        {/* Interactive Pricing Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-slate-100 shadow-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                <Baby size={180} className="text-orange-500" />
                            </div>
                            <div className="relative z-10 space-y-10">
                                <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Start Your Wellness Journey</h3>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Step 1: Choose your Foundational Team</p>
                                        <div className="flex gap-4">
                                            {["Luke's Team", "Luke's Senior Team"].map(team => (
                                                <button
                                                    key={team}
                                                    onClick={() => setSelectedTeam(team)}
                                                    className={`flex-1 py-4 px-6 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${selectedTeam === team ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                                >
                                                    {team}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Step 2: Choose your Program Duration</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {["3 months", "6 months", "9 months", "12 months"].map(month => (
                                                <button
                                                    key={month}
                                                    onClick={() => setSelectedDuration(month)}
                                                    className={`py-4 px-6 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${selectedDuration === month ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                                >
                                                    {month}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-slate-100 flex items-end justify-between">
                                    <div>
                                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Estimated Investment</p>
                                        <p className="text-5xl font-black text-slate-950 tracking-tighter">₹{finalPrice}</p>
                                    </div>
                                    <button className="h-16 w-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center hover:bg-orange-600 transition-all shadow-xl group">
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <p className="text-[9px] text-slate-400 font-medium leading-relaxed uppercase tracking-tighter">
                                    Disclaimer: Payments are accepted only in Indian Rupees (INR). International clients are requested to use credit cards.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. INTRO TEXT SECTION */}
            <section className="py-24 bg-white border-y border-slate-50">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                        We believe pregnancy care goes <br /> <span className="text-orange-500 italic">Beyond Nutritional Plans Alone.</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                        Your prenatal labs. Your medical history. Your pregnancy symptoms and lifestyle. We look at the full picture before shaping a personalized care plan for you.
                    </p>
                </div>
            </section>

            {/* 3. FOUNDATIONAL MEDICINE PILLARS */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-500/[0.02] blur-[120px]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mb-20 space-y-6">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">A Holistic Foundation</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-slate-950 uppercase">Pregnancy Pillars</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                            Supporting you through every trimester and beyond with science-backed lifestyle strategies for a smooth, joyful journey.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {pillars.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setActivePillar(idx)}
                                    className={`cursor-pointer p-8 rounded-[3rem] border-2 transition-all duration-500 flex flex-col gap-6 ${activePillar === idx
                                            ? 'bg-orange-600 border-orange-600 shadow-2xl shadow-orange-500/20 text-white'
                                            : 'bg-white border-slate-100 hover:border-orange-200 text-slate-400'
                                        }`}
                                >
                                    <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-colors shadow-sm ${activePillar === idx ? 'bg-white text-orange-600' : 'bg-slate-50'
                                        }`}>
                                        {pillar.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className={`text-base font-black leading-tight tracking-tight uppercase ${activePillar === idx ? 'text-white' : 'text-slate-900'}`}>
                                            {pillar.title}
                                        </h3>
                                        <p className={`text-xs font-bold ${activePillar === idx ? 'text-orange-100' : 'text-slate-400'}`}>
                                            {pillar.insight.substring(0, 80)}...
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. STEP BY STEP JOURNEY */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Your Trimester-Wise Experience</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none italic">Conception to <span className="text-orange-500 underline decoration-orange-500/20">Postnatal Care.</span></h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Designed with comfort, confidence, and care.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 pt-10">
                        {[
                            { step: "01", title: "Trimester 1: Foundations", desc: "Focusing on hormone balance, nausea management, and core fetal development through synergy of diet and rest." },
                            { step: "02", title: "Trimester 2 & 3: Growth", desc: "Optimizing growth parameters, managing physical shifts, and preparing the body for labor with targeted movement." },
                            { step: "03", title: "Trimester 4: Recovery", desc: "Dedicated postnatal support, lactation guidance, and helping you rebuild vitality after childbirth." }
                        ].map((s, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl space-y-6 relative group hover:-translate-y-2 transition-transform">
                                <div className="text-6xl font-black text-orange-500/10 absolute top-8 right-8 group-hover:text-orange-500/20 transition-colors uppercase">{s.step}</div>
                                <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter pt-4">{s.title}</h3>
                                <p className="text-slate-500 font-bold leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pt-20 border-t border-slate-100 max-w-4xl mx-auto">
                        <p className="text-[11px] text-slate-400 font-bold leading-relaxed uppercase tracking-[0.2em]">
                            Please Note: This program is specifically designed to support expectant and new mothers. For other health needs, explore our specialized programs, including Signature Wellness, Gut Care Program, Cancer Care, and Balanced Nutrition for Children.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">Frequently Asked Questions</h2>
                        <p className="text-xl text-slate-500 font-bold italic tracking-tight uppercase">Everything You Want to Know About Our Pregnancy Care Program</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-slate-100 rounded-[2.5rem] overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full p-8 text-left bg-white flex justify-between items-center group transition-colors hover:bg-slate-50"
                                >
                                    <span className="text-lg font-black text-slate-900 pr-8 tracking-tighter leading-tight uppercase">{faq.q}</span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center transition-all ${openFaq === idx ? 'bg-slate-950 border-slate-950 rotate-90 text-white' : ''}`}>
                                        <ArrowRight size={18} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-8 pb-8 bg-slate-50/50"
                                        >
                                            <p className="text-slate-600 font-bold leading-relaxed pt-2">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. MEET LUKE SECTION */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/5] rounded-[5rem] overflow-hidden border-8 border-white shadow-3xl group -rotate-2">
                            <img src="https://www.lukecoutinho.com/blog/wp-content/uploads/2021/08/Luke-Coutinho-Founder.jpg" alt="Luke Coutinho" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                        </div>
                    </div>
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Visionary Leadership</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none uppercase italic">Meet Luke Coutinho</h2>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Integrative and Lifestyle Medicine Pioneer</p>
                        </div>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-bold">
                            <p>
                                With over 14 years of experience, Luke leads one of India’s most trusted voices in holistic wellness. From being appointed as the Wellness and Lifestyle Champion for the PM’s Fit India Movement to shaping national health missions, his work impacts millions.
                            </p>
                            <p>
                                Luke’s mission is simple: make sustainable health accessible to all—through root-cause healing, lifestyle changes, and compassion.
                            </p>
                        </div>
                        <div className="flex gap-6 pt-6">
                            <button className="px-10 py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-orange-600 transition-all uppercase tracking-widest text-xs">Explore Vision</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TESTIMONIALS SLIDER SECTION */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
                    <div className="text-center mb-20 space-y-2">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Journeys of Joy</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none italic">Prenatal & Postnatal success</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-slate-50 p-12 rounded-[4rem] shadow-xl relative group hover:-translate-y-2 transition-transform border border-slate-100">
                                <Quote size={40} className="text-orange-500/10 absolute top-10 right-10" />
                                <div className="space-y-6">
                                    <p className="text-xl text-slate-700 font-bold leading-relaxed italic">"{test.quote}"</p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-orange-500 font-black text-sm border border-slate-100 shadow-sm">
                                            {test.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-950 text-sm tracking-tight uppercase">{test.name}</p>
                                            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Verified Journey</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="pb-32 px-6">
                <div className="max-w-6xl mx-auto p-16 md:p-24 bg-white border-8 border-orange-500 rounded-[5rem] text-center space-y-10 relative overflow-hidden shadow-3xl shadow-orange-200/50">
                    <div className="absolute inset-0 bg-orange-500/[0.01] blur-[100px]" />
                    <Sparkles className="mx-auto text-orange-500 w-16 h-16 animate-bounce" />
                    <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none uppercase italic">
                        Move from <br /> <span className="text-orange-600">Struggle to Strength.</span>
                    </h2>
                    <p className="text-slate-500 text-xl font-bold max-w-2xl mx-auto uppercase tracking-tighter leading-tight">
                        We help you find a way. Connect with our Wellness Ambassadors today for personally guided care.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 relative z-10">
                        <button className="px-14 py-7 bg-slate-950 text-white font-black rounded-full shadow-2xl hover:bg-orange-600 transition-all uppercase tracking-widest text-[11px]">
                            Get a Call Back
                        </button>
                        <button className="flex items-center gap-4 text-slate-950 text-[11px] font-black uppercase tracking-widest hover:translate-x-2 transition-all">
                            About Our Science <ArrowRight size={22} className="text-orange-500" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PregnancyCare;

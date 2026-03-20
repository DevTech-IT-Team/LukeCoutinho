import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Leaf, 
  Sun, 
  Moon, 
  Heart, 
  Quote, 
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const BharatDish = () => {
    
    // Download links with actual cover images
    const downloads = [
        { 
            language: "English", 
            link: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Bharat-Dish-And-Lifestyle-Tips-English.pdf",
            cover: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/English.jpg"
        },
        { 
            language: "Hindi", 
            link: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/The-Bharat-Dish-and-Lifestyle-HINDI-08.04.2025.pdf",
            cover: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Hindi.jpg"
        },
        { 
            language: "Gujarati", 
            link: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/The-Bharat-Dish-and-Lifestyle-GUJARATI-08.04.2025.pdf",
            cover: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Gujarati.jpg"
        },
        { 
            language: "Marathi", 
            link: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/The-Bharat-Dish-and-Lifestyle-MARATHI-7.4.2025.pdf",
            cover: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Marathi.jpg"
        }
    ];

    const lifestyleTips = [
        { icon: <Leaf />, title: "Superfoods", desc: "Wholesome, seasonal, and regional staples rooted in our land." },
        { icon: <Sun />, title: "Sunlight", desc: "Syncing with nature's rhythm for hormonal and immune reset." },
        { icon: <Moon />, title: "Deep Sleep", desc: "The non-negotiable repair phase for DNA and cellular vitality." },
        { icon: <Heart />, title: "Spiritual Grounding", desc: "Mind-body connection through timeless Indian tools for health." }
    ];

    const insideBooklet = [
        "The Bharat Dish Philosophy",
        "6 Shakti Bhojan (Lunch) Options",
        "6 Swasthic Supper (Dinner) Options",
        "100+ Nutrient-Dense Recipes",
        "Actionable Lifestyle Protocols",
        "Regional Seasonal Calendars"
    ];

    const galleryMoments = [
        { url: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Img02.jpg", title: "Meeting Hon'ble PM Narendra Modi" },
        { url: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Img04.jpg", title: "With Hon'ble Vice President of India" },
        { url: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Img01.jpg", title: "At Anganwadi Centre Engagement" },
        { url: "https://www.lukecoutinho.com/wp-content/uploads/2025/04/Img03.jpg", title: "NXT Global Conclave Address" }
    ];

    return (
        <div className="bg-white pt-20 font-sans selection:bg-orange-500/10 selection:text-orange-600">
            
            {/* 1. HERO SECTION: THE PM'S RESPONSIBILITY */}
            <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
                {/* Background Image of Bharat Dish */}
                <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 opacity-20 lg:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent z-10 hidden lg:block" />
                    <img 
                        src="https://www.lukecoutinho.com/wp-content/uploads/2025/04/Bharat-Dish.jpg" 
                        alt="The Bharat Dish" 
                        className="w-full h-full object-cover grayscale-[20%]"
                    />
                </div>
                
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20 py-24">
                    <div className="max-w-3xl space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600 shadow-sm"
                        >
                            <Sparkles size={12} className="animate-pulse" />
                            A National Initiative
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] uppercase"
                        >
                            The Bharat Dish <br />
                            <span className="text-orange-500 font-light italic lowercase font-serif">And Lifestyle Tips</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-500 font-medium leading-tight max-w-2xl tracking-tight"
                        >
                            "When the Prime Minister hands you a responsibility, <br/>
                            <span className="text-slate-950 font-bold">you do it with love and passion."</span>
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-6 pt-6"
                        >
                            <a 
                                href="#downloads"
                                className="px-12 py-7 bg-orange-600 text-white font-black rounded-3xl shadow-2xl shadow-orange-500/20 hover:bg-slate-950 transition-all uppercase tracking-widest text-[11px] flex items-center gap-3 active:scale-95 no-underline"
                            >
                                Get the Free Guide <ChevronDown size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. STORY SECTION: INDIA ON A PLATE */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">The Vision</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-slate-950 tracking-tighter leading-none uppercase">India on a Plate</h2>
                        </div>
                        
                        <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
                            <p>
                                It was an evening that began with a deep sense of purpose. When Hon’ble Prime Minister Narendra Modi spoke about the importance of mindful eating and prioritizing "Ghar ka khana," the mission was clear.
                            </p>
                            <Quote size={80} className="text-orange-500/10 mb-[-60px] ml-[-20px]" />
                            <div className="p-12 bg-orange-50 rounded-[4rem] border border-orange-100 relative group overflow-hidden">
                                <p className="text-2xl font-bold text-slate-900 leading-tight italic tracking-tight">
                                    "Eat mindfully. Prioritize home-cooked meals—meaning food made with love and local wisdom."
                                </p>
                                <p className="mt-4 text-xs font-black uppercase tracking-widest text-orange-600">— Luke Coutinho</p>
                            </div>
                            <p>
                                The Bharat Dish isn't just a recipe booklet; it’s a movement to return to our roots. It’s about vocal for local and reclaiming the health of our nation, one plate at a time.
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative group">
                        <div className="aspect-[4/5] rounded-[5rem] overflow-hidden border-8 border-white shadow-3xl bg-slate-50">
                             <img 
                                src="https://www.lukecoutinho.com/wp-content/uploads/2025/04/Img02.jpg" 
                                alt="Luke with Hon'ble PM Modi" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                             />
                        </div>
                        {/* Legend Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 max-w-[240px] hidden md:block">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">The Meeting</p>
                            <p className="text-sm font-bold text-slate-900 leading-snug">Inspiring a sustainable health revolution across India.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. LIFESTYLE TIPS: BEYOND THE PLATE */}
            <section className="relative py-32 bg-slate-900 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://www.lukecoutinho.com/wp-content/uploads/2025/04/Lifestyle-Tips.jpg" 
                        alt="Lifestyle Background" 
                        className="w-full h-full object-cover opacity-30 grayscale-[30%]"
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-white">
                    <div className="max-w-4xl mb-24 space-y-6">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">A Holistic Revival</span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">Beyond the Plate</h2>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                             Ancient wisdom meets modern science. The Bharat Lifestyle Tips are timeless Indian tools for longevity—drawn from our own land.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {lifestyleTips.map((tip, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[3.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white mb-8 shadow-2xl group-hover:rotate-6 transition-transform">
                                    {tip.icon}
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 group-hover:text-orange-500 transition-colors">{tip.title}</h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">{tip.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MOMENTS GALLERY (New Section) */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-24">
                    <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Legacy & Impact</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-950 tracking-tighter leading-none uppercase">Moments That Made History</h2>
                </div>
                
                <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {galleryMoments.map((moment, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl"
                        >
                            <img 
                                src={moment.url} 
                                alt={moment.title} 
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-10 left-10 right-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                <p className="text-white text-lg font-bold leading-tight uppercase tracking-tight">{moment.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. BOOKLET CONTENT: WHAT'S INSIDE */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} className="rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 rotate-[-2deg]">
                                <img src="https://www.lukecoutinho.com/wp-content/uploads/2025/04/English.jpg" alt="Booklet Cover" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 rotate-[2deg] translate-y-20">
                                <img src="https://www.lukecoutinho.com/wp-content/uploads/2025/04/3-Lunch-Menu-Options.jpg" alt="Lunch Menu Options" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 rotate-[1deg] -translate-y-10">
                                <img src="https://www.lukecoutinho.com/wp-content/uploads/2025/04/3-Dinner-Menu-Options.jpg" alt="Dinner Menu Options" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 rotate-[-1deg] translate-y-10">
                                <img src="https://www.lukecoutinho.com/wp-content/uploads/2025/04/100-Recipes-with-Nutritional-Information.jpg" alt="100+ Recipes" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-6xl font-bold text-slate-950 tracking-tighter leading-none uppercase">Inside the <br/> <span className="text-orange-600 italic">Booklet</span></h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                Curated options for Shakti Bhojan and Swasthic Supper, based on wholesome, seasonal staples.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            {insideBooklet.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 py-4 border-b border-slate-100 group">
                                    <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:bg-white" />
                                    </div>
                                    <span className="text-lg font-bold text-slate-900 uppercase tracking-tighter">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. DOWNLOADS: CHOOSE YOUR LANGUAGE */}
            <section id="downloads" className="py-32 bg-orange-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
                    <div className="max-w-3xl mx-auto mb-24 space-y-6">
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Access Local Wisdom</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-950 tracking-tighter leading-none uppercase">Download the Guide</h2>
                        <p className="text-xl text-slate-500 font-medium opacity-80 italic">Choose your preferred language and download with just one click.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {downloads.map((item, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-orange-100 flex flex-col items-center gap-8 group no-underline"
                            >
                                <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md border border-slate-100">
                                    <img src={item.cover} alt={`${item.language} Cover`} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tighter">{item.language}</h3>
                                    <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-600">
                                        Download PDF <ExternalLink size={12} />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-24 pt-12 border-t border-orange-200/50 max-w-4xl mx-auto">
                        <p className="text-[10px] text-slate-400 font-bold max-w-2xl mx-auto uppercase tracking-wider leading-relaxed">
                            Disclaimer: This content is for personal use only. Not for commercial reproduction. Always consult your healthcare provider before significant dietary changes. Diets are one part of a holistic lifestyle approach including movement, sleep, and emotional wellness.
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. CALL TO ACTION: BEYOND STRUGGLE */}
            <section className="py-24 px-6 mb-20">
                <div className="max-w-6xl mx-auto p-16 md:p-24 bg-white border-8 border-slate-950 rounded-[5rem] text-center space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-orange-600 opacity-[0.01] blur-[100px]" />
                    <Sparkles className="mx-auto text-orange-500 w-16 h-16 animate-bounce" />
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none uppercase">
                        Master the <br /> <span className="text-orange-600 italic">Bharat Dish</span>
                    </h2>
                    <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
                        Join our mission to move from struggle to strength. Sign up for our newsletter and receive mindful lifestyle insights directly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <button className="px-14 py-7 bg-slate-950 text-white font-bold rounded-full shadow-2xl hover:bg-orange-600 transition-all uppercase tracking-widest text-[11px] active:scale-95">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BharatDish;

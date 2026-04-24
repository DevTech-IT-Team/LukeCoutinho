import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Activity,
  ShieldCheck,
  Moon,
  Utensils,
  Users,
  Languages,
  Droplet,
  ArrowRight,
  Leaf,
  Info,
  CheckCircle2,
  Sparkles,
  Zap,
  Microscope,
  Stethoscope
} from "lucide-react";

const LearningIntro = () => {
  const categories = [
    { name: "Mental Wellness", icon: <Brain size={18} />, color: "bg-blue-50 text-blue-600" },
    { name: "Women's Health", icon: <Heart size={18} />, color: "bg-rose-50 text-rose-600" },
    { name: "Immunity", icon: <ShieldCheck size={18} />, color: "bg-teal-50 text-teal-600" },
    { name: "Digestion", icon: <Utensils size={18} />, color: "bg-orange-50 text-orange-600" },
    { name: "Cancer Care", icon: <Leaf size={18} />, color: "bg-emerald-50 text-emerald-600" },
    { name: "Sleep Rituals", icon: <Moon size={18} />, color: "bg-indigo-50 text-indigo-600" },
    { name: "Gut Microbiome", icon: <Zap size={18} />, color: "bg-amber-50 text-amber-600" },
    { name: "Hindi Courses", icon: <Languages size={18} />, color: "bg-slate-50 text-slate-600" },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      
      <div className="grid lg:grid-cols-12 min-h-[900px]">
        
        {/* Left Side: Immersive Visual with Floating Glass Title */}
        <div className="lg:col-span-6 relative bg-[#2D5A43] overflow-hidden flex items-center justify-center p-12 lg:p-24">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img 
               src="https://images.unsplash.com/photo-1545231027-63b65f4c7ba8?auto=format&fit=crop&q=80" 
               className="w-full h-full object-cover" 
               alt="Nature" 
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 p-16 lg:p-24 bg-white/10 backdrop-blur-3xl border border-white/20 shadow-[0_100px_150px_-50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 border-8 border-white/5 m-4" />
            <h2 className="text-6xl md:text-[6.5rem] font-bold text-white leading-[0.9] tracking-tighter uppercase">
              Mastery <br />
              <span className="italic font-light lowercase">over</span> <br />
              Confusion
            </h2>
          </motion.div>
        </div>

        {/* Right Side: Editorial Narrative & Discovery */}
        <div className="lg:col-span-6 flex flex-col justify-center p-12 lg:p-24 xl:p-32 space-y-16">
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-12 bg-[#2D5A43]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2D5A43]">Nature Perfected Clinicals</span>
            </div>
            <p className="text-3xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Cultivating medicinal logic in controlled, science-backed environments. Combining traditional lifestyle knowledge with modern clinical precision.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {categories.slice(0, 4).map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center transition-all group-hover:bg-slate-950 group-hover:text-white`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-950 tracking-tighter uppercase">{cat.name}</h3>
                <p className="text-sm text-slate-400 font-medium leading-snug">Expert-led modules for deep clinical understanding.</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-slate-100">
            <button className="px-12 py-6 bg-[#2D5A43] text-white font-bold uppercase tracking-widest text-xs shadow-2xl hover:bg-slate-950 transition-all">
              Explore Ecosystem
            </button>
            <button className="px-12 py-6 border-2 border-slate-200 text-slate-950 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
              Clinical Manual
            </button>
          </div>

          <p className="text-sm italic text-slate-300 font-light translate-y-10">
            "Clean. Consistent. Integrative."
          </p>
        </div>

      </div>
    </section>
  );
};

export default LearningIntro;

import React from "react";
import { motion } from "framer-motion";
import { Brain, Heart, ShieldCheck, Utensils, ArrowRight } from "lucide-react";

const LearningIntro = () => {
  const categories = [
    { name: "Mental Wellness", icon: <Brain size={20} /> },
    { name: "Women's Health", icon: <Heart size={20} /> },
    { name: "Immunity", icon: <ShieldCheck size={20} /> },
    { name: "Digestion", icon: <Utensils size={20} /> },
  ];

  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 min-h-[700px] items-stretch">
        
        {/* Left Side: Impact Image */}
        <div className="relative bg-slate-900 hidden lg:block">
          {/* <img 
            src="https://images.unsplash.com/photo-1545231027-63b65f4c7ba8?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-60" 
            alt="Clinical Wisdom" 
          /> */}
          <div className="absolute inset-0 flex items-center justify-center p-20">
            <h2 className="text-7xl font-bold text-white tracking-tighter uppercase leading-none">
              Mastery <br />
              <span className="text-orange-500 italic">over</span> <br />
              Confusion
            </h2>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">The Philosophy</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-950 leading-tight tracking-tight">
              Clinical precision meets <br /> traditional lifestyle logic.
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              We translate complex medical science into simple, actionable daily protocols designed for your reality.
            </p>
          </div>

          {/* Simple Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <span className="font-bold text-slate-900 uppercase text-xs tracking-wider">{cat.name}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-slate-950 text-white font-bold uppercase tracking-widest text-[10px] rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-3">
              Explore All <ArrowRight size={14} />
            </button>
            <button className="px-8 py-4 border border-slate-200 text-slate-950 font-bold uppercase tracking-widest text-[10px] rounded-lg hover:bg-white hover:border-slate-950 transition-all">
              Clinical Manual
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningIntro;
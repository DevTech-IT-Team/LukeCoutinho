import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Clock, Users, Calendar, 
  ArrowRight, Activity, Flame, Heart, 
  Apple, Brain, Timer, CheckCircle2
} from 'lucide-react';
import img from '../../../assets/4th.png'; // Path consistent with your assets

const MetabolicHealthView = () => {
  const [isHovered, setIsHovered] = useState(false);

  const courseStats = [
    { icon: <Users size={18} />, label: "112 Students enrolled", detail: "Community driven" },
    { icon: <Clock size={18} />, label: "60-90 Minutes", detail: "Comprehensive module" },
    { icon: <Calendar size={18} />, label: "Last Updated", detail: "January 21, 2026" }
  ];

  const curriculumHighlights = [
    { 
      icon: <Flame />, 
      title: "Foundational Metabolism", 
      desc: "Understand the role of metabolism in maintaining energy levels, weight, and overall health." 
    },
    { 
      icon: <Apple />, 
      title: "Lifestyle Factors", 
      desc: "Learn to identify key factors that support balance, including nutrition, movement, and sleep." 
    },
    { 
      icon: <Brain />, 
      title: "Disease Prevention", 
      desc: "Know how metabolic health influences chronic disease prevention and long-term vitality." 
    },
    { 
      icon: <Timer />, 
      title: "Personalized Strategies", 
      desc: "Develop small, consistent changes for sustainable improvements in your metabolic health." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          src={img}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl shadow-orange-500/20">
              Intermediate Level
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-5xl leading-[0.9]">
              Metabolic Health 101: <br/>
              <span className="text-orange-500 italic font-light">The Ultimate Guide</span> to Energy & Fat Loss
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Summary Intro */}
          <section className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-3">
              <Activity className="text-orange-500" /> Principles of Metabolism
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg italic">
              "By uncovering how metabolism influences weight, energy levels, and disease prevention, 
              you'll gain the tools to make informed choices for a healthier life and uncover how 
              everyday choices can optimize or disrupt this delicate system."
            </p>
          </section>

          {/* Interactive Bento Grid for Curriculum */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-orange-500"></span>
              <h2 className="text-[10px] font-black uppercase tracking-widest text-orange-600">What You Will Learn</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {curriculumHighlights.map((item, i) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={i} 
                  className="bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl mb-4 flex items-center justify-center shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Targeted Audience */}
          <section className="bg-slate-900 p-12 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tighter mb-8 italic text-orange-500">Who is this for?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Individuals looking to improve metabolism, fat loss, and energy",
                  "Those interested in adopting sustainable lifestyle habits",
                  "People aiming to manage chronic conditions through awareness",
                  "Health enthusiasts seeking the science behind everyday wellness"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <p className="text-sm font-medium text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <Heart className="absolute -bottom-10 -right-10 text-white opacity-5 w-64 h-64" />
          </section>

          {/* Guidelines & Disclaimer */}
          <section className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden">
            <div className="p-10 space-y-6">
              <h3 className="font-bold text-xl text-slate-800">Learning Requirements</h3>
              <div className="space-y-3">
                <p className="text-sm text-slate-500 flex gap-2"><CheckCircle2 size={16} className="text-orange-500" /> No prior knowledge of metabolic health or scientific concepts is required.</p>
                <p className="text-sm text-slate-500 flex gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Suitable for beginners and open to all age groups.</p>
                <p className="text-sm text-slate-500 flex gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Self-paced pre-recorded modules (60-90 mins).</p>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed pt-6 border-t border-slate-50 italic">
                Disclaimer: This course is intended for educational purposes only and should not be used as a replacement for professional medical, nutritional, or psychological advice.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar Checkout */}
        <aside className="lg:col-span-4 sticky top-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">One-Time Payment</span>
                <h4 className="text-4xl font-black text-slate-900 tracking-tighter">₹699.00</h4>
              </div>
              <div className="text-right">
                 <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded-md">Tax Included</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {courseStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-200 transition-colors">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-800">{stat.label}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tight">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-200 hover:shadow-orange-100 flex items-center justify-center gap-3 active:scale-95"
            >
              Enroll Now <motion.div animate={{ x: isHovered ? 5 : 0 }}><ArrowRight size={18} /></motion.div>
            </button>
            
            <div className="mt-8 flex flex-col items-center gap-3 opacity-40">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase tracking-widest">Team Luke Secure Payment</span>
              </div>
            </div>
          </motion.div>
        </aside>

      </div>
    </div>
  );
};

export default MetabolicHealthView;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Clock, Users, Calendar, 
  ArrowRight, Activity, Droplets, Sparkles, 
  Stethoscope, Microscope, HeartPulse, CheckCircle2 
} from 'lucide-react';
import img from '../../../assets/3rd.png'; 

const LymphaticResetView = () => {
  const [isHovered, setIsHovered] = useState(false);

  const courseStats = [
    { icon: <Users size={18} />, label: "125 Students enrolled", detail: "Active community" },
    { icon: <Clock size={18} />, label: "60-90 Minutes", detail: "Comprehensive module" },
    { icon: <Calendar size={18} />, label: "Last Updated", detail: "January 21, 2026" }
  ];

  const curriculumHighlights = [
    { 
      icon: <Droplets />, 
      title: "Filtration Science", 
      desc: "Understand how lymphatic fluid transports waste, toxins, and immune cells throughout the body." 
    },
    { 
      icon: <Microscope />, 
      title: "The Detox Network", 
      desc: "Deep dive into the major lymphatic organs—including the spleen and thymus." 
    },
    { 
      icon: <Sparkles />, 
      title: "Skin & Glow", 
      desc: "Understand how lymphatic drainage impacts skin health, reducing puffiness and promoting a natural glow." 
    },
    { 
      icon: <HeartPulse />, 
      title: "Holistic Immunity", 
      desc: "Identify common symptoms of congestion and learn ways to prevent or reverse stagnation." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[75vh] overflow-hidden bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={img}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* White Gradient overlay to blend into the content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-slate-900/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-orange-500/30">
              Immunity & Prevention
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-5xl leading-[0.95]">
              The Lymphatic Reset: <br/>
              <span className="text-orange-500 italic font-light underline decoration-1 underline-offset-8">A Holistic Approach</span> to Immunity
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Summary Intro */}
          <section className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full opacity-50" />
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-3">
              <Stethoscope className="text-orange-500" /> The Silent Workhorse
            </h2>
            <p className="text-slate-600 leading-relaxed text-xl font-medium italic">
              "Often overlooked, the lymphatic system is a silent workhorse responsible for filtration, immune defense, and skin health. 
              This course empowers you with the knowledge to optimize your body's self-cleansing mechanisms."
            </p>
          </section>

          {/* Curriculum Bento Grid */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <span className="h-[2px] w-12 bg-orange-500"></span>
              <h2 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">Course Curriculum</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculumHighlights.map((item, i) => (
                <motion.div 
                  whileHover={{ y: -8 }}
                  key={i} 
                  className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Targeted Audience - Dark/Gray Mode for Contrast */}
          <section className="bg-slate-900 p-16 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl font-black tracking-tighter mb-10 italic">
                Who is <span className="text-orange-500">this for?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {[
                  "Individuals with a history of cancer or lymphedema",
                  "Those experiencing bloating, fatigue, or poor drainage",
                  "Anyone curious about body cleansing and longevity",
                  "Wellness enthusiasts seeking natural skin health"
                ].map((text, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <CheckCircle2 size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-md font-medium text-slate-300 leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <Activity className="absolute -bottom-10 -right-10 text-orange-500 opacity-10 w-80 h-80" />
          </section>

          {/* Guidelines & Disclaimer */}
          <section className="bg-white border border-slate-100 rounded-[2.5rem] p-12">
            <h3 className="font-bold text-xl text-slate-800 mb-8 underline decoration-orange-500 decoration-2 underline-offset-4">Learning Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <p className="text-sm text-slate-500 flex gap-3 items-center bg-slate-50 p-4 rounded-xl font-medium"><Activity size={16} className="text-orange-500" /> No prior knowledge required</p>
              <p className="text-sm text-slate-500 flex gap-3 items-center bg-slate-50 p-4 rounded-xl font-medium"><Activity size={16} className="text-orange-500" /> Age groups 14 and above</p>
              <p className="text-sm text-slate-500 flex gap-3 items-center bg-slate-50 p-4 rounded-xl font-medium"><Activity size={16} className="text-orange-500" /> Self-paced digital modules</p>
              <p className="text-sm text-slate-500 flex gap-3 items-center bg-slate-50 p-4 rounded-xl font-medium"><Activity size={16} className="text-orange-500" /> Lifetime community access</p>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed pt-8 border-t border-slate-100 italic">
              Disclaimer: This course is intended for educational purposes only and should not be used as a replacement for professional medical, nutritional, or psychological advice.
            </p>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar Checkout */}
        <aside className="lg:col-span-4 sticky top-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/60"
          >
            <div className="mb-10 text-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-2">Total Investment</span>
                <h4 className="text-5xl font-black text-slate-900 tracking-tighter">₹699.00</h4>
                <span className="inline-block mt-3 text-[10px] text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full uppercase tracking-tighter">Limited Time Offer</span>
            </div>

            <div className="space-y-4 mb-10">
              {courseStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all duration-300">
                  <div className="text-orange-500">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-800 uppercase tracking-wide">{stat.label}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-medium">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full bg-orange-500 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.25em] hover:bg-slate-900 transition-all shadow-xl shadow-orange-500/20 hover:shadow-slate-900/20 flex items-center justify-center gap-3 active:scale-95"
            >
              Secure Access <motion.div animate={{ x: isHovered ? 5 : 0 }}><ArrowRight size={20} /></motion.div>
            </button>
            
            <div className="mt-8 pt-8 border-t border-slate-50 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-orange-500" />
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Team Luke Secure Payment</span>
              </div>
              <p className="text-[9px] text-slate-400 text-center font-medium leading-relaxed">
                By enrolling, you agree to the terms of service and our holistic health guidelines.
              </p>
            </div>
          </motion.div>
        </aside>

      </div>
    </div>
  );
};

export default LymphaticResetView;
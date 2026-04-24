import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Clock, Users } from "lucide-react";
import heroBg from "../../../assets/learning-hub/hero/learning-hub-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full bg-[#FFFEFC] overflow-hidden flex items-center pt-20">
      
      {/* Thinkific Inspired Soft Background */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F4F7FB] -skew-x-6 translate-x-[15%] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600">Global Wellness Academy</span>
                <div className="h-px w-12 bg-blue-100" />
              </motion.div>
  
              <h1 className="text-6xl md:text-[5.5rem] font-bold text-slate-950 leading-[1.05] tracking-tight mb-4">
                Everything you need to <br /> 
                <span className="text-orange-500">Master Your Health.</span>
              </h1>
  
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                Bite-sized, expert-led clinical wisdom from Luke Coutinho. Transition from education to lasting personal transformation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-6">
              <button className="px-10 py-5 bg-[#2A5BD7] text-white rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-4">
                Get Started for Free <ArrowRight size={18} />
              </button>
              
              <button className="px-10 py-5 bg-white text-slate-950 border border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-4">
                Explore Courses
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 pt-16 mt-16 border-t border-slate-100 max-w-2xl">
               <div className="space-y-2">
                  <div className="text-3xl font-black text-slate-900">25+</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Masterclasses</div>
               </div>
               <div className="space-y-2">
                  <div className="text-3xl font-black text-slate-900">100k+</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enrolled Seekers</div>
               </div>
               <div className="space-y-2 hidden lg:block">
                  <div className="text-3xl font-black text-slate-900">98%</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Success Rate</div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;


import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, User, ShieldCheck } from "lucide-react";
import aboutLukeImage from "../../../assets/learning-hub/about-profile.png";

export const AboutLukeSection = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative z-10"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200">
               <img
                 src={aboutLukeImage}
                 alt="Luke Coutinho"
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            
            {/* Artistic Floating Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500 rounded-[3rem] -z-10 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:-ml-24 relative z-20"
          >
            <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 space-y-12">
               
               <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-5 py-2 bg-orange-100 rounded-full text-orange-600"
                  >
                    <User size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Visionary</span>
                  </motion.div>

                  <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase whitespace-pre-line">
                    A Different <br />
                    Conversation.
                  </h2>

                  <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-xl">
                    With Luke, the focus is on <span className="text-slate-950 font-black">YOU.</span> Beyond clinical data, we explore your story and everyday reality.
                  </p>
               </div>

               <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <ShieldCheck className="text-orange-500" size={24} />
                     <h4 className="text-lg font-black text-slate-950 tracking-tight uppercase leading-none">Foundations First</h4>
                     <p className="text-sm text-slate-400 font-medium">Evidence-based protocols that respect your medical journey.</p>
                  </div>
                  <div className="space-y-4">
                     <Sparkles className="text-orange-500" size={24} />
                     <h4 className="text-lg font-black text-slate-950 tracking-tight uppercase leading-none">Human-Centric</h4>
                     <p className="text-sm text-slate-400 font-medium">Designed to make you feel heard and understood.</p>
                  </div>
               </div>

               <div className="pt-8">
                  <button className="px-12 py-6 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-6 hover:bg-orange-500 transition-all group">
                     The Narrative <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


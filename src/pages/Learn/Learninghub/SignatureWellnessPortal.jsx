import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const SignatureWellnessPortal = () => {
  return (
    <section className="py-40 bg-[#FFFEFC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 text-center">

        <div className="relative p-16 md:p-32 rounded-[4rem] border border-orange-100 bg-gradient-to-b from-white to-orange-50/20 overflow-hidden group shadow-2xl shadow-orange-100/50">
          
          {/* Background Text Texture */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-slate-100/30 select-none -z-10 whitespace-nowrap tracking-tighter uppercase">
            Signature
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center space-y-6">
               <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center text-orange-500 shadow-2xl"
               >
                  <Star size={32} fill="currentColor" />
               </motion.div>
               <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] uppercase">
                  Beyond <br />
                  <span className="text-orange-500 italic font-light not-uppercase">Knowledge.</span>
               </h2>
            </div>
            
            <p className="text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
               Transition from education to implementation. Our <span className="text-slate-950 font-black">Signature Wellness Protocols</span> bring Luke’s philosophy into a structured, daily 1:1 mentorship with an assigned clinical expert.
            </p>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto py-12 border-t border-slate-100">
               <div className="space-y-4">
                  <ShieldCheck className="text-orange-500 mx-auto" size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-950">Expert Mentorship</h4>
               </div>
               <div className="space-y-4">
                  <Zap className="text-orange-500 mx-auto" size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-950">Protocol Driven</h4>
               </div>
               <div className="space-y-4">
                  <Star className="text-orange-500 mx-auto" size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-950">Outcome Focused</h4>
               </div>
            </div>

            <button className="px-16 py-8 bg-orange-500 text-white rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-orange-500/30 hover:scale-105 transition-all group flex items-center gap-6 mx-auto">
               Institutional Access <ArrowRight className="group-hover:translate-x-3 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
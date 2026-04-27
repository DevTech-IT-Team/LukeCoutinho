import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const SignatureWellnessPortal = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative p-8 md:p-16 rounded-[2.5rem] bg-slate-950 overflow-hidden text-center">
          
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-6"
          >
            <div className="flex justify-center">
              <Star size={20} className="text-orange-500 fill-orange-500" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Beyond <span className="text-orange-500 italic font-light serif lowercase">knowledge.</span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Experience 1:1 clinical mentorship with our Signature Protocols. 
              Evolution through implementation.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
              <span>• Expert Mentorship</span>
              <span>• Protocol Driven</span>
              <span>• Outcome Focused</span>
            </div>

            <div className="pt-4">
              <button className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all group">
                Apply for Access
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, User, ShieldCheck } from "lucide-react";
import aboutLukeImage from "../../../assets/learning-hub/about-profile.png";

export const AboutLukeSection = () => {
  return (
    <section className="py-24 bg-[#FCF9F5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl">
               <img
                 src={aboutLukeImage}
                 alt="Luke Coutinho"
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-[2.5rem] -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 rounded-full text-orange-600 text-[10px] font-black uppercase tracking-widest">
                <User size={14} /> The Visionary
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase">
                A Different <br /> Conversation.
              </h2>

              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                Focusing on <span className="text-slate-950 font-bold">YOU.</span> We move beyond clinical data to understand your story and daily reality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <ShieldCheck className="text-orange-500" size={20} />
                <h4 className="font-black text-slate-950 uppercase text-sm">Foundations First</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Evidence-based protocols for your medical journey.</p>
              </div>
              <div className="space-y-2">
                <Sparkles className="text-orange-500" size={20} />
                <h4 className="font-black text-slate-950 uppercase text-sm">Human-Centric</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Designed to ensure you feel heard and understood.</p>
              </div>
            </div>

            <button className="px-10 py-5 bg-slate-950 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-orange-500 transition-all group">
              Read The Narrative <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
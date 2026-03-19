import React from "react";
import { motion } from "framer-motion";

export const SignatureWellnessPortal = () => {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="relative p-12 md:p-24 rounded-[4rem] border border-slate-200 bg-linear-to-b from-slate-50 to-white overflow-hidden">
          
  
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[12rem] font-black text-slate-100/50 select-none -z-10 whitespace-nowrap">
            WELLNESS
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-8">
              Go Deeper with Luke's <br />
              <span className="text-orange-500">Signature Wellness</span> Programs
            </h2>
            
            <p className="text-slate-500 text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              If you’re looking for more than a one-time consult, our signature wellness programs 
              bring Luke’s foundations-first philosophy into a structured, 1:1, day-to-day experience. 
              You work closely with an <span className="text-[#1a1a1a] font-bold">assigned expert from Team Luke</span>.
            </p>

            <button className="bg-orange-500 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:shadow-none hover:bg-[#1a1a1a] transition-all transform hover:-translate-y-1">
              Know More About The Wellness Program
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
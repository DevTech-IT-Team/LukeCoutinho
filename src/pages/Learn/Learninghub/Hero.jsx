import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroBg from "../../../assets/learning-hub/hero/learning-hub-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#1a1a1a] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luke Coutinho"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-0.5 w-10 bg-orange-500"></span>
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[11px]">
              Welcome to the Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8">
            Luke’s <br />
            <span className="text-orange-500">Learning</span> Hub
          </h1>
          <p className="text-slate-200 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
            Your journey to better health begins with the right knowledge.
            Explore science-backed, lifestyle-first education designed for your
            everyday reality.
          </p>
          <div className="flex">
            <button
              onClick={() =>
                document
                  .getElementById("programs-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-orange-500 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-white hover:text-[#1a1a1a] transition-all transform hover:-translate-y-1 flex items-center gap-3 group"
            >
              Explore Courses
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

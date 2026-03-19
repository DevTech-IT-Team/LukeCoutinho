import React from "react";
import { motion } from "framer-motion";
import aboutLukeImage from "../../../assets/learning-hub/about-profile.png";

export const AboutLukeSection = () => {
  return (
    <section className="py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 relative z-10"
          >
            <div className="border-12 border-white/5 rounded-[3rem] p-4">
              <img
                src={aboutLukeImage}
                alt="Luke Coutinho"
                className="rounded-[2.5rem] w-full h-125 object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-3/5 lg:-ml-20 mt-12 lg:mt-0 bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl z-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
              A Different Conversation <br />
              About Your Health, With <br />
              <span className="text-orange-500">Luke Coutinho</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              With Luke, the focus is on **YOU**: your story, and your everyday
              reality. Explore how a foundations-first approach and your medical
              treatment can work together, so you feel heard, understood, and
              better equipped for the journey ahead.
            </p>

            <button className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-500 transition-all transform hover:scale-105">
              Know More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

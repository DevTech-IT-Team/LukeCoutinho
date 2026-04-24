import React from 'react';
import { motion } from 'framer-motion';
import lcVideo from '../assets/lc.mp4';

const PillarsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] py-32 text-slate-950 md:py-36">
      <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-16">
        <div className="mb-16 space-y-6 text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-orange-500"
          >
            <div className="h-px w-12 bg-current opacity-30" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">The Core Philosophy</span>
            <div className="h-px w-12 bg-current opacity-30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl font-black tracking-tighter text-slate-950 md:text-7xl"
          >
            The 06 Pillars of <br />
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Holistic Mastery.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-3xl text-lg font-medium text-slate-600 md:text-2xl"
          >
            Our integrative approach harmonizes six vital life areas to unlock your body's innate potential for healing and performance.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto w-full max-w-6xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
        >
          <video
            src={lcVideo}
            className="h-auto max-h-[75vh] w-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;

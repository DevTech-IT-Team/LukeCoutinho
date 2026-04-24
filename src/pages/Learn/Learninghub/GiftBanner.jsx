import React from "react";
import { motion } from "framer-motion";
import { Gift, ArrowRight, Sparkles } from "lucide-react";

const GiftBanner = () => {
  return (
    <section className="relative h-[450px] flex items-center overflow-hidden bg-[#2A5BD7]">
      
      {/* Dynamic Background with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80')` }}
      />
      
      {/* Sophisticated Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-12 items-center gap-16">
          
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 glass-dark rounded-full text-orange-500"
            >
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Gift of Well-being</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase"
            >
              Empower Someone <br />
              <span className="italic font-light not-uppercase opacity-60">Special.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white/70 font-medium leading-relaxed max-w-2xl"
            >
              A nudge toward clarity can change a life. Gift a science-backed curriculum to someone you care about today.
            </motion.p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-orange-500 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl flex items-center gap-4 group"
            >
              Purchase Gift Card <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

        </div>
      </div>
      
      {/* Artistic Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

    </section>
  );
};

export default GiftBanner;
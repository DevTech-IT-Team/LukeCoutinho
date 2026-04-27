import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Globe } from "lucide-react";

const TeamsWorkplaces = () => {
  return (
    <section className="py-24 bg-[#FCF9F5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Scale Your Impact</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter uppercase">
              Corporate & <br />
              <span className="text-orange-500 italic font-light serif lowercase">communities.</span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
            Clinical empowerment for organizations. Tailored protocols designed for collective evolution.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Light Card: Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-10 lg:p-16 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col justify-between min-h-[450px] transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50"
          >
            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-slate-950 tracking-tight uppercase">Team & Workplaces</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Equip leadership and staff with medicinal logic. Protocols for stress, sleep, and peak performance built for the professional environment.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-3 text-slate-950 font-black uppercase tracking-widest text-[10px] group-hover:text-orange-600 transition-colors pt-8">
              Institutional Enquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Dark Card: Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-10 lg:p-16 bg-slate-950 rounded-[2.5rem] flex flex-col justify-between min-h-[450px] transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/40"
          >
            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Globe size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white tracking-tight uppercase">Our Communities</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                  From patient support groups to wellness clubs, we provide the curriculum to scale clinical knowledge across your entire ecosystem.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] group-hover:text-orange-400 transition-colors pt-8">
              Community Partnership <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TeamsWorkplaces;
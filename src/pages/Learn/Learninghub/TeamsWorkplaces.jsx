import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Briefcase, Sparkles, Building2, Globe } from "lucide-react";

const TeamsWorkplaces = () => {
  return (
    <section className="py-40 bg-[#FCF9F5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-12 bg-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500 underline underline-offset-8 decoration-1">Scale Your Impact</span>
            </motion.div>

            <h2 className="text-6xl md:text-[6.5rem] font-bold text-slate-950 leading-[0.9] tracking-tighter uppercase">
              Corporate & <br />
              <span className="text-orange-500 italic font-light lowercase serif">Communities.</span>
            </h2>
          </div>
          
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-sm pb-2">
            Clinical empowerment for organizations of all sizes. Protocols tailored for group evolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Card 1: For Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="group p-12 lg:p-20 bg-white rounded-[3rem] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between space-y-12 transition-all duration-700 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/[0.03] rounded-full blur-3xl -z-0" />
            
            <div className="space-y-8 relative z-10">
              <div className="w-16 h-16 rounded-[1.5rem] bg-orange-50 flex items-center justify-center text-orange-500">
                <Briefcase size={28} />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-slate-950 tracking-tight">Team & Workplaces</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Equip your leadership and staff with medicinal logic. Protocols for stress, sleep, and peak performance designed for the workplace.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-4 text-slate-950 font-bold uppercase tracking-widest text-[10px] group-hover:text-orange-500 transition-all relative z-10">
              Institutional Enquiry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Card 2: Our Communities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group p-12 lg:p-20 bg-slate-950 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col justify-between space-y-12 transition-all duration-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl" />

            <div className="space-y-8 relative z-10">
              <div className="w-16 h-16 rounded-[1.5rem] bg-orange-500 flex items-center justify-center text-white">
                <Globe size={28} />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-white tracking-tight">Our Communities</h3>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">
                  From patient support groups to wellness clubs, we provide the curriculum to scale clinical knowledge across your ecosystem.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-[10px] group-hover:text-orange-500 transition-all relative z-10">
               Community Partnership <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default TeamsWorkplaces;
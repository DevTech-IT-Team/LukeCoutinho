import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Briefcase, Sparkles } from "lucide-react";

const TeamsWorkplaces = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Narrative content - Switched sides for rhythm */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-slate-950 rounded-full text-white"
            >
              <Briefcase size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Corporate Wellness</span>
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase">
              Wellness for <br />
              <span className="text-orange-500 italic font-light not-uppercase">High-Performance.</span>
            </h2>
            
            <div className="space-y-8 text-2xl text-slate-400 font-medium leading-relaxed max-w-xl">
              <p>
                Equip your teams with the science of well-being. Protocols for sleep, stress, and clinical performance that transform how your people live and work.
              </p>
            </div>

            <div className="p-10 border-l-4 border-orange-500 bg-orange-50/30 rounded-r-[2.5rem]">
              <p className="text-sm text-slate-600 font-medium italic leading-relaxed">
                "Not just educational, but transformational. These courses have become an integral part of our leadership onboarding."
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-6">
               <button className="px-12 py-6 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-orange-500/20 flex items-center gap-4 hover:scale-105 transition-all group">
                  Institutional Enquiry <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
               <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Sparkles size={16} />
                  <span>Bulk Access Available</span>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200 relative group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Teams and Workplaces" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              
              <div className="absolute top-12 right-12 w-32 h-32 glass rounded-full flex flex-col items-center justify-center text-slate-950 shadow-2xl border border-white/20">
                 <p className="text-2xl font-black">500+</p>
                 <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Enterprises</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TeamsWorkplaces;
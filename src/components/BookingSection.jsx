import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles, Phone, Clock, Globe, ChevronRight } from 'lucide-react';

const BookingSection = () => {
  const [activeTab, setActiveTab] = useState('clinical');

  const consultationTypes = {
    clinical: {
      title: "Clinical",
      desc: "Deep health audits & diagnostics.",
      features: ["Diagnostic Review", "Cellular Nutrition"],
      color: "bg-orange-500"
    },
    preventive: {
      title: "Bio-Opt",
      desc: "Longevity & performance strategy.",
      features: ["Energy Blueprint", "Sleep Science"],
      color: "bg-slate-950"
    }
  };

  const availability = [
    { day: "Mon", status: "Open" },
    { day: "Tue", status: "Full" },
    { day: "Wed", status: "Open" },
    { day: "Thu", status: "Open" },
    { day: "Fri", status: "Open" },
  ];

  return (
    <section className="py-40 bg-[#FCF9F5] overflow-hidden relative">
      
      {/* Editorial Header */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 mb-20 text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="flex items-center justify-center lg:justify-start gap-6 mb-8"
        >
           <div className="h-[2px] w-12 bg-orange-500" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Instant Clinical Access</span>
        </motion.div>
        <h2 className="text-6xl md:text-8xl font-bold text-slate-950 leading-[0.9] tracking-tighter uppercase">
           The Booking <br />
           <span className="text-orange-500 italic font-light lowercase serif">Connection.</span>
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        
        {/* Tri-Bento Layout for high-contrast visibility on "Same Face" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          
          {/* 1. SERVICE CARD (Double Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[4rem] p-10 lg:p-14 border border-slate-100 shadow-2xl shadow-slate-900/5 flex flex-col justify-between"
          >
             <div className="space-y-10">
                <div className="flex bg-slate-50 p-1.5 rounded-2xl w-fit">
                  {Object.keys(consultationTypes).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveTab(type)}
                      className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === type ? 'bg-slate-950 text-white' : 'text-slate-400'}`}
                    >
                      {consultationTypes[type].title}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                   <h3 className="text-4xl font-bold tracking-tighter uppercase leading-none text-slate-950">
                      {consultationTypes[activeTab].title} <br />
                      <span className="text-orange-500">Mapping.</span>
                   </h3>
                   <p className="text-sm text-slate-400 font-medium leading-relaxed italic">{consultationTypes[activeTab].desc}</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                   {consultationTypes[activeTab].features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-950">{f}</span>
                      </div>
                   ))}
                </div>
             </div>

             <div className="mt-10 pt-8 flex items-center justify-between border-t border-slate-50">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />)}
                </div>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Advisors Live</span>
             </div>
          </motion.div>

          {/* 2. THE CONFIRMATION CARD (Deep Dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 bg-slate-950 rounded-[4rem] p-10 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10"><Sparkles size={60} className="text-orange-500" /></div>
             
             <div className="space-y-8 relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Action</h4>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 text-white/30">
                      <Clock size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">45 Min Session</span>
                   </div>
                   <div className="flex items-center gap-4 text-white/30">
                      <Globe size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Video Connect</span>
                   </div>
                </div>
             </div>

             <div className="relative z-10 space-y-6">
                <button className="w-full py-6 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-orange-500 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                   Schedule <ArrowRight size={14} className="inline ml-2" />
                </button>
                <div className="grid grid-cols-5 gap-1 pt-6 border-t border-white/5">
                   {availability.map((a, i) => (
                     <div key={i} className={`h-1 rounded-full ${a.status === 'Open' ? 'bg-orange-500' : 'bg-white/5'}`} />
                   ))}
                </div>
             </div>
          </motion.div>

          {/* 3. THE HOTLINE CARD (Vibrant Orange) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 bg-orange-500 rounded-[4rem] p-10 lg:p-14 text-white flex flex-col justify-between group cursor-pointer border border-orange-400"
          >
             <div className="space-y-8">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Phone size={18} /></div>
                <div className="space-y-4">
                   <h4 className="text-sm font-black uppercase tracking-[0.2em] leading-tight">Instant Clinical Hotline</h4>
                   <p className="text-xs font-medium text-white/70">Immediate clinical guidance from our expert team.</p>
                </div>
             </div>

             <div className="space-y-4">
                <div className="text-2xl font-black tracking-tighter">1800 102 0253</div>
                <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest border-t border-white/20 pt-6 group-hover:gap-6 transition-all">
                   Call Now <ArrowRight size={14} />
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;

import React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Star, Heart, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Select",
      desc: "Identify the clinical vertical or lifestyle goal that aligns with your needs.",
      icon: <Search size={20} />,
    },
    {
      id: "02",
      title: "Master",
      desc: "Engage with science-backed modules and clinical protocols.",
      icon: <BookOpen size={20} />,
    },
    {
      id: "03",
      title: "Validate",
      desc: "Complete assessments to unlock your digital empowerment certificate.",
      icon: <Star size={20} />,
    },
    {
      id: "04",
      title: "Realize",
      desc: "Apply actionable insights to transform clinical outcomes.",
      icon: <Heart size={20} />,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">The Path</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter uppercase">
            Your <br />
            <span className="text-orange-500 italic font-light serif lowercase">process.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-slate-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-950 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-500 shadow-sm">
                    {step.icon}
                  </div>
                  {/* <span className="absolute -top-2 -right-2 text-[10px] font-black bg-slate-950 text-white w-6 h-6 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    {step.id}
                  </span> */}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-slate-50"
        >
          <button className="flex items-center gap-4 text-slate-950 font-black uppercase tracking-widest text-[10px] hover:text-orange-600 transition-colors group">
            Begin Transformation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
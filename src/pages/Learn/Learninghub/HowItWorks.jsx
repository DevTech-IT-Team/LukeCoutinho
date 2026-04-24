import React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Star, Heart, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Select Curriculum",
      desc: "Identify the clinical vertical or lifestyle goal that aligns with your current needs.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      id: "02",
      title: "Interactive Mastery",
      desc: "Engage with science-backed modules, branching scenarios, and clinical protocols.",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      id: "03",
      title: "Validate Learning",
      desc: "Complete comprehensive assessments and unlock your digital empowerment certificate.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      id: "04",
      title: "Realize Potential",
      desc: "Apply actionable insights to transform your energy, longevity, and clinical outcomes.",
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-40 bg-white overflow-hidden text-slate-950 relative">
      
      {/* Editorial Grid Design */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#FCF9F5] -skew-x-6 translate-x-[15%] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-12 bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">The Path to Mastery</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-[6.5rem] font-bold text-slate-950 leading-[0.9] tracking-tighter uppercase whitespace-pre-line">
              Your <br />
              <span className="text-orange-500 italic font-light lowercase serif">Process.</span>
            </h2>
          </div>
          <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-sm">
             A four-step clinical protocol designed to ensure knowledge retention and lifestyle transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col"
            >
               <div className="bg-[#FCF9F5] p-10 rounded-[3rem] border border-orange-50 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 transition-all hover:bg-white hover:shadow-2xl hover:shadow-orange-500/5 group-hover:-translate-y-4 duration-500">
                  <div className="relative">
                     <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-orange-500 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 shadow-sm border border-orange-50">
                        {step.icon}
                     </div>
                     <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-[8px] font-black text-white">
                        {step.id}
                     </div>
                  </div>

                  <div className="space-y-4">
                     <h3 className="text-2xl font-bold tracking-tight text-slate-950 uppercase">
                        {step.title}
                     </h3>
                     <p className="text-sm text-slate-400 font-medium leading-relaxed">
                        {step.desc}
                     </p>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center mt-32"
        >
            <button className="px-16 py-6 bg-slate-950 text-white font-bold uppercase tracking-widest text-xs flex items-center gap-6 hover:bg-orange-500 transition-all group shadow-2xl">
                Begin Transformation <ArrowRight className="group-hover:translate-x-3 transition-transform" />
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

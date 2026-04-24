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
    <section className="py-40 bg-[#0A0A0A] overflow-hidden text-white relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center space-y-8 mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em]"
            >
              The Learning Protocol
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase italic">
              Simple. <br />
              <span className="text-orange-500 font-light not-italic">Powerful.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
               {/* Progress Line */}
               {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-white/10 z-0">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        className="h-full bg-orange-500" 
                     />
                  </div>
               )}

               <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                  <div className="relative">
                     <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                        {step.icon}
                     </div>
                     <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-[10px] font-black text-orange-500">
                        {step.id}
                     </div>
                  </div>

                  <div className="space-y-4">
                     <h3 className="text-2xl font-black tracking-tight group-hover:text-orange-500 transition-all uppercase">
                        {step.title}
                     </h3>
                     <p className="text-slate-400 font-medium leading-relaxed max-w-xs group-hover:text-slate-300 transition-colors">
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
            <button className="px-16 py-6 glass-dark rounded-2xl text-white font-black uppercase tracking-widest text-xs flex items-center gap-6 hover:bg-white/10 transition-all group">
                Begin Transformation <ArrowRight className="group-hover:translate-x-3 transition-transform" />
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;


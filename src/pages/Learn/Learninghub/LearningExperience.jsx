import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Lightbulb,
  ShieldCheck,
  BookOpen,
  HandHeart,
  Zap,
  Target,
  ArrowRight
} from "lucide-react";
// Assuming experienceImg is handled via your build tool
import experienceImg from "../../../assets/learning-hub/learning-experience.jpg";

const LearningExperience = () => {
  const features = [
    { icon: <Layers size={18} />, text: "Expert-Guided", desc: "Curated clinical specialist paths." },
    { icon: <Lightbulb size={18} />, text: "Self-Paced", desc: "Learn on your own timeline." },
    { icon: <ShieldCheck size={18} />, text: "Lifetime Access", desc: "Your knowledge vault, forever." },
    { icon: <BookOpen size={18} />, text: "Structured Levels", desc: "Foundational to advanced protocols." },
  ];

  return (
    <section className="py-24 bg-[#FCF9F5]  overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Visual: Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
              <img
                src={experienceImg}
                alt="Immersive Learning"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-orange-400">Distraction Free</p>
                 <h4 className="text-2xl font-bold leading-tight">Deep Learning <br/> Platform Architecture</h4>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-10 blur-2xl opacity-60" />
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-orange-600">
                <Target size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Experience</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase">
                Inside Your <br />
                <span className="text-orange-500 italic font-light serif lowercase">evolution.</span>
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                We designed an ecosystem that bridges the gap between clinical accuracy and the human experience, making mastery accessible.
              </p>
            </div>

            {/* Simplified Feature List */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-black text-slate-950 uppercase tracking-tight">{item.text}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed border-l-2 border-slate-100 pl-4 group-hover:border-orange-500 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <button className="flex items-center gap-3 text-[10px] font-black text-slate-950 hover:text-orange-500 transition-all uppercase tracking-widest group">
                Explore the platform <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningExperience;
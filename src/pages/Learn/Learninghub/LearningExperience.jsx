import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Lightbulb,
  CheckCircle2,
  BookOpen,
  HandHeart,
  Atom,
  FileText,
  Target,
  Users,
  ShieldCheck,
  Zap,
  Sparkles
} from "lucide-react";
import experienceImg from "../../../assets/learning-hub/learning-experience.jpg";

const LearningExperience = () => {
  const features = [
    { icon: <Layers size={22} />, text: "Expert-Guided Learning", desc: "Curated paths by clinical specialists." },
    { icon: <Lightbulb size={22} />, text: "Self-Paced Courses", desc: "Learn on your own timeline, anywhere." },
    { icon: <ShieldCheck size={22} />, text: "Lifetime Access", desc: "Your knowledge vault, available forever." },
    { icon: <BookOpen size={22} />, text: "Structured Levels", desc: "From foundational to advanced protocols." },
    { icon: <HandHeart size={22} />, text: "Real-Life Tools", desc: "Actionable frameworks for daily living." },
    { icon: <Zap size={22} />, text: "Simplified Mastery", desc: "Complex science made incredibly simple." },
  ];

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200 relative group">
              <img
                src={experienceImg}
                alt="Immersive Learning"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-12 left-12 p-8 glass rounded-[2.5rem] border border-white/20 shadow-2xl space-y-2 max-w-xs transition-all group-hover:translate-y-[-10px]">
                 <Sparkles className="text-orange-500 mb-4" size={24} />
                 <p className="text-xl font-black text-slate-950 leading-tight">Interactive Platform Experience</p>
                 <p className="text-xs text-slate-500 font-medium tracking-tight leading-relaxed">Built for distraction-free deep learning and knowledge retention.</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-16">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-slate-950 rounded-full text-white"
              >
                <Target size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Platform Architecture</span>
              </motion.div>

              <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter">
                Inside Your <br />
                <span className="text-orange-500 italic font-light text-7xl md:text-9xl">Evolution.</span>
              </h2>
              
              <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-xl">
                We designed an ecosystem that prioritizes clinical accuracy and human experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-950 uppercase tracking-tighter mb-2 group-hover:text-orange-500 transition-colors">{item.text}</h4>
                    <p className="text-sm text-slate-400 font-medium group-hover:text-slate-600 transition-colors leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningExperience;


import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Target, Lightbulb, Activity, UserCheck } from "lucide-react";

const WhoWillBenefit = () => {
  const benefits = [
    {
      title: "All Generations",
      desc: "Individuals of all ages seeking science-backed insights for lifelong vitality.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Self-Care Advocates",
      desc: "Those focused on preventive health and building sustainable daily rituals.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Clinical Seekers",
      desc: "Anyone aiming to manage conditions through powerful lifestyle transformations.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Wellness Beginners",
      desc: "Individuals wanting clarity and actionable steps to start their health journey.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Enthusiasts",
      desc: "Lifelong learners looking to decode the latest in holistic and integrative medicine.",
      icon: <Activity className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-40 bg-[#FFFEFC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="flex flex-col items-center text-center space-y-8 mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 bg-orange-100 rounded-full text-orange-600 flex items-center gap-3"
            >
              <UserCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Target Audience</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase">
              Who is this <br />
              <span className="text-orange-500 italic font-light not-uppercase">Designed For?</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center group transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-950 group-hover:text-orange-500 transition-all duration-500 shadow-sm mb-10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tighter uppercase leading-none">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWillBenefit;
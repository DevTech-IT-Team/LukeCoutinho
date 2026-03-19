import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Target, Lightbulb, Activity } from "lucide-react";

const WhoWillBenefit = () => {
  const benefits = [
    {
      title: "All ages",
      desc: "All ages interested in lifelong health insights.",
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Self-care advocates",
      desc: "Self-care advocates focus on balanced, preventive health.",
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Anyone aiming for better health",
      desc: "Anyone aiming for better health through practical lifestyle changes.",
      icon: <Target className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Beginner",
      desc: "Beginners wanting simple, actionable wellness steps.",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Wellness Enthusiast",
      desc: "Wellness enthusiasts looking to expand holistic knowledge.",
      icon: <Activity className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16">
          Who Will <span className="text-orange-500">Benefit</span> from These Courses?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-2xl bg-orange-100 group-hover:bg-orange-300 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-[1.2rem] font-black text-slate-800 mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-[0.9rem] font-medium leading-relaxed">
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
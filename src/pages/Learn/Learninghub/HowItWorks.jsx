import React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Star, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Browse & Enroll",
      desc: "Anyone aiming for better health through practical lifestyle changes.",
      icon: <Search className="w-8 h-8 text-orange-600" />,
      color: "border-orange-600",
      bg: "bg-orange-500",
    },
    {
      id: "02",
      title: "Start Learning",
      desc: "Follow bite-sized lessons, watch videos, engage with branching scenarios, and apply the tools.",
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      color: "border-orange-600",
      bg: "bg-orange-500",
    },
    {
      id: "03",
      title: "Earn & Celebrate",
      desc: "Complete quizzes, track your progress, and unlock achievements. Share your learning journey with others.",
      icon: <Star className="w-8 h-8 text-orange-500" />,
      color: "border-orange-500",
      bg: "bg-orange-500",
    },
    {
      id: "04",
      title: "Live Better",
      desc: "Use actionable insights to make choices that support your health, energy, and purpose — every single day.",
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      color: "border-orange-600",
      bg: "bg-orange-600",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center text-slate-900 mb-16">
          How It <span className="text-orange-600">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 pt-12 border-2 ${step.color} rounded-4xl text-center flex flex-col items-center h-full hover:shadow-xl transition-all duration-300`}
            >

              <div
                className={`absolute -top-5 left-1/2 -translate-x-1/2 ${step.bg} text-white px-4 py-1 rounded-lg flex flex-col items-center shadow-lg`}
              >
                <span className="text-[10px] uppercase font-bold tracking-tighter leading-none">
                  Step
                </span>
                <span className="text-xl font-black leading-none">
                  {step.id}
                </span>
              </div>

              <div className="mb-6 opacity-80">{step.icon}</div>
              <h3 className="text-[1.5rem] font-black text-slate-800 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm  font-bold leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

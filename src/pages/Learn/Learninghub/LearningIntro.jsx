import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Activity,
  ShieldCheck,
  Moon,
  Utensils,
  Users,
  Languages,
  Droplet,
  ArrowRight,
  Leaf,
  Info,
  CheckCircle2,
} from "lucide-react";

const LearningIntro = () => {
  const categories = [
    { name: "Mental Wellness", icon: <Brain size={18} /> },
    { name: "Women's Health", icon: <Heart size={18} /> },
    { name: "Men's Health", icon: <Activity size={18} /> },
    { name: "Digestion", icon: <Utensils size={18} /> },
    { name: "Immunity", icon: <ShieldCheck size={18} /> },
    { name: "Diabetes", icon: <Droplet size={18} /> },
    { name: "Cancer Care", icon: <Leaf size={18} /> },
    { name: "Sleep", icon: <Moon size={18} /> },
    { name: "Nutrition", icon: <Utensils size={18} /> },
    { name: "Gut Health", icon: <Activity size={18} /> },
    { name: "Family Health", icon: <Users size={18} /> },
    { name: "Hindi Courses", icon: <Languages size={18} /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0"></div>

      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-2xl">
                Our Philosophy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Knowledge is the <br />
              <span className="text-orange-600">First Step to Healing.</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                Confusion is the enemy of recovery. We bridge the gap between
                complex medical jargon and actionable lifestyle changes.
              </p>
              <p>
                Our bite-sized modules are designed to empower you with the
                right questions for your doctor and simple, science-backed steps
                for your daily routine.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <CheckCircle2
                  className="text-teal-500 shrink-0 mt-1"
                  size={20}
                />
                <span>Self-paced learning structure</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <CheckCircle2
                  className="text-teal-500 shrink-0 mt-1"
                  size={20}
                />
                <span>Holistic & Integrative approach</span>
              </li>
            </ul>

            <div className="p-5 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl">
              <p className="text-[1rem] text-slate-700 font-medium mb-2">
                Need personalized guidance?
              </p>
              <a
                href="/programs"
                className="group inline-flex items-center gap-2 text-orange-600 font-bold uppercase text-[1.5rem] tracking-wider hover:text-orange-800 transition-colors"
              >
                Explore 1-on-1 Coaching{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-400 flex gap-2 items-start">
              <Info size={14} className="shrink-0 mt-0.5" />
              These courses are educational and support—not replace—your medical
              treatment.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <div className="bg-slate-100 rounded-[2.5rem] p-8 md:p-12 relative">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h3 className="text-4xl font-black text-slate-900">
                    Explore Our Courses
                  </h3>
                  <p className="text-slate-500 mt-2 text-[1.2rem]">
                    Select a category to begin learning
                  </p>
                </div>

                <div className="hidden sm:block text-slate-200">
                  <Brain size={48} strokeWidth={1.5} />
                </div>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {categories.map((cat, index) => (
                  <motion.button
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 px-5 py-4 bg-white rounded-2xl shadow-sm border border-transparent hover:border-orange-500 hover:shadow-md transition-all duration-300 text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                      {cat.icon}
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-slate-900">
                      {cat.name}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LearningIntro;

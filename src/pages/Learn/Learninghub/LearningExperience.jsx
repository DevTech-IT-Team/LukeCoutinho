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
} from "lucide-react";
import experienceImg from "../../../assets/learning-hub/learning-experience.jpg";

const LearningExperience = () => {
  const features = [
    { icon: <Layers size={22} />, text: "Expert-Guided Learning" },
    { icon: <Lightbulb size={22} />, text: "Self-Paced Courses" },
    { icon: <CheckCircle2 size={22} />, text: "Lifetime Access" },
    { icon: <BookOpen size={22} />, text: "Structured Learning Levels" },
    { icon: <HandHeart size={22} />, text: "Real-Life Tools" },
    { icon: <Atom size={22} />, text: "Wellness Mastery, Simplified" },
    { icon: <FileText size={22} />, text: "Bite-sized Lessons" },
    { icon: <Target size={22} />, text: "Expert-Led Content" },
    { icon: <Users size={22} />, text: "Inclusive Learning" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Inside Your{" "}
            <span className="text-orange-600">Learning Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 relative"
          >
            <img
              src={experienceImg}
              alt="Man learning on laptop with headphones"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            className="space-y-6 pl-4 lg:pl-0"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-5 group"
              >
                <div className="text-slate-400 group-hover:text-teal-500 transition-colors duration-300">
                  {item.icon}
                </div>
                <p className="text-xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;

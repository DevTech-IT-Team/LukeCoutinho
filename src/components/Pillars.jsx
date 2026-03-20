import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Dumbbell, Moon, Heart, Sparkles, Wind, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PillarsSection = () => {
  const pillars = [
    {
      id: "01",
      title: "Deep Cellular Nutrition",
      content: "Nutrient-dense, personalized eating plans designed to optimize cellular metabolism and fuel natural healing.",
      icon: <Leaf />,
      delay: 0.1
    },
    {
      id: "02",
      title: "Adequate Exercise",
      content: "Intentional movement focusing on strength, flexibility, and cardiovascular health to energize the body and mind.",
      icon: <Dumbbell />,
      delay: 0.2
    },
    {
      id: "03",
      title: "Quality Sleep",
      content: "Restorative sleep strategies to balance circadian rhythms and activate the innate recovery mechanisms.",
      icon: <Moon />,
      delay: 0.3
    },
    {
      id: "04",
      title: "Emotional Wellness",
      content: "Mindfulness and stress-management tools to foster inner resilience, gratitude, and mental clarity.",
      icon: <Heart />,
      delay: 0.4
    },
    {
      id: "05",
      title: "Reconnecting Spirit",
      content: "Spiritual and social connections that provide purpose, harmony, and a profound sense of well-being.",
      icon: <Sparkles />,
      delay: 0.5
    },
    {
      id: "06",
      title: "The Power of Breath",
      content: "Conscious breathing techniques to oxygenate cells, calm the nervous system, and restore balance.",
      icon: <Wind />,
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-50/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Unified Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-orange-500"></div>
            <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm">
              The 06 Pillars
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight"
          >
            Foundations of a <br />
            <span className="text-orange-500 font-light italic">Holistic Life.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-medium leading-relaxed"
          >
            Our core philosophy integrates these six essential areas to build a lifestyle that fosters natural healing, resilience, and lasting vitality.
          </motion.p>
        </div>

        {/* Interactive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={cardVariants}
              className="group cursor-default relative"
            >
              <div className="relative pt-12 px-8 pb-10 rounded-[3rem] transition-all duration-500 hover:bg-slate-50/50 hover:shadow-2xl hover:shadow-orange-500/5 group">
                {/* Large Background Number (Moderated) */}
                <span className="absolute top-4 left-6 text-6xl font-bold text-slate-100 group-hover:text-orange-100/50 transition-colors duration-500 select-none">
                  {pillar.id}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with persistent floating (Lightened) */}
                  <div className="mb-8">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: pillar.delay }}
                      className="w-16 h-16 rounded-[1.5rem] bg-orange-50 text-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6 border border-orange-100"
                    >
                      {React.cloneElement(pillar.icon, { size: 28 })}
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-4 flex items-center gap-2 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                    {pillar.title}
                    <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </h3>

                  <p className="text-slate-500 font-medium leading-relaxed pr-2">
                    {pillar.content}
                  </p>
                </div>

                {/* Corner Decorative Element */}
                <div className="absolute top-10 right-10 w-2 h-2 bg-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-all group-hover:scale-[3] blur-[1px]"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h4 className="text-3xl font-black text-slate-900 mb-2">Ready to transform?</h4>
            <p className="text-slate-500 font-medium">Explore our comprehensive blueprint for a healthier you.</p>
          </div>
          
          <Link 
            to="/about/approach"
            className="group relative px-10 py-5 bg-orange-500 text-white font-black rounded-full overflow-hidden shadow-2xl shadow-orange-500/30 hover:shadow-orange-600/40 transition-all active:scale-95 inline-block text-center"
          >
            <span className="relative z-10 flex items-center gap-3">
              VIEW THE FULL BLUEPRINT
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, BookOpen, Heart, Shield, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

const CoreValues = () => {
  const [index, setIndex] = useState(0);

  const values = [
    {
      title: "Teamwork and Accountability",
      desc: "Success is shared, and we work together to achieve our common goals.",
      icon: <Users size={32} />
    },
    {
      title: "Global Perspective with Local Roots",
      desc: "While we are proudly based in India, our work impacts lives around the world.",
      icon: <Globe size={32} />
    },
    {
      title: "Continuous Learning",
      desc: "We encourage ongoing personal and professional development, fostering an environment of growth and innovation.",
      icon: <BookOpen size={32} />
    },
    {
      title: "Holistic Growth",
      desc: "We believe in nurturing the body, mind, and spirit, focusing on long-term well-being.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Integrity and Excellence",
      desc: "We lead with transparency, honesty, and an unwavering commitment to quality, constantly raising the bar in everything we do.",
      icon: <Shield size={32} />
    },
    {
      title: "Compassion",
      desc: "We deeply care about the people we serve, helping them lead healthier lives.",
      icon: <Heart size={32} />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [values.length]);

  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-orange-500" />
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Culture</span>
            </div>
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Our Core <br/>
              <span className="text-gray-300   lowercase font-light">Values</span>
            </h2>
          </div>
          
          <div className="hidden md:block max-w-sm text-right">
            <p className="text-gray-500 font-medium leading-relaxed italic">
              "Making a meaningful impact requires a shared vision and a commitment to these pillars."
            </p>
          </div>
        </div>

        {/* --- INTERACTIVE CAROUSEL --- */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Large Icon Box */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-gray-50 rounded-[4rem] flex items-center justify-center relative overflow-hidden">
              {/* Decorative Background Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <span className="text-[15rem] font-black uppercase">Luke</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.2, opacity: 0, rotate: 10 }}
                  className="w-32 h-32 bg-orange-500 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-orange-200 z-10"
                >
                  {values[index].icon}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <span className="inline-block px-5 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Value 0{index + 1}
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  {values[index].title}
                </h3>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                  {values[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex gap-3">
                <button 
                  onClick={() => setIndex((prev) => (prev - 1 + values.length) % values.length)}
                  className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={() => setIndex((prev) => (prev + 1) % values.length)}
                  className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              
              {/* Counter Dots */}
              <div className="flex gap-2">
                {values.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      i === index ? "w-8 bg-orange-500" : "w-2 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

import img1 from '../../assets/s_cancer.jpg'; 
const InsightsSection = () => {
  const articles = [
    {
      date: "23 January, 2026",
      title: "Stomach Cancer at 60: Atul's Journey from Liquid Diet to Full Remission",
      image: img1,
      size: "large"
    },
    {
      date: "22 January, 2026",
      title: "Low Progesterone Isn't Random. Here's What's Really Happening",
      image: "/path-to-progesterone.jpg", // From image_b62afd.jpg
      size: "small"
    },
    {
      date: "21 January, 2026",
      title: "The Pollution Inside You: How Everyday Air Is Rewriting Your DNA",
      image: "/path-to-pollution.jpg", // From image_b62afd.jpg
      size: "small"
    }
  ];

  return (
    <section className="py-18 bg-orange-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
            Insights <span className="text-orange-500">&</span> Stories <br/>
            <span className="text-orange-400 italic  lowercase font-light text-6xl md:text-7xl">From Our Practice</span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-500 font-medium leading-relaxed">
            With over 14 years of experience, Luke and his team share experiences and case studies that have changed the lives of many. From nutrition and movement to emotional wellness, these blogs unveil rich insights.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[700px]">
          
          {/* Main Feature (Atul's Journey) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl shadow-gray-200"
          >
            <img src={articles[0].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Story" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 p-12 space-y-4">
              <span className="text-orange-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                <Clock size={14} /> {articles[0].date}
              </span>
              <h3 className="text-3xl font-black text-white leading-tight group-hover:text-orange-400 transition-colors">
                {articles[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="relative flex-1 rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl shadow-gray-100"
              >
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Article" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-orange-600/20 transition-colors duration-500" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-orange-400 font-black uppercase tracking-widest text-[10px] mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- GLOBAL CALL TO ACTION --- */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-orange-500 transition-all">
            Explore All Insights <ArrowRight size={16} className="text-orange-500 group-hover:text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;
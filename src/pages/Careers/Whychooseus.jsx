import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import img from '../../assets/Whychooseus.jpg';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: "01",
      title: "A Platform for Real Change",
      content: "As a member of our team, you will witness the direct impact of your efforts on people’s health and lives."
    },
    {
      id: "02",
      title: "Supportive and Collaborative Environment",
      content: "You’ll work alongside some of the most experienced and respected professionals in the health and wellness industry, including opportunities to collaborate with Luke Coutinho himself."
    },
    {
      id: "03",
      title: "Regular Upskilling",
      content: "Our nutrition and holistic lifestyle experts undergo re-certification regularly, ensuring their skills and knowledge stay at the forefront of the industry."
    },
    {
      id: "04",
      title: "Endless Growth Opportunities",
      content: "Here continuous learning and development are embedded into our culture, ensuring that every team member is constantly evolving."
    },
    {
      id: "05",
      title: "Work-Life Integration",
      content: "Our flexible work environment encourages you to maintain a healthy work-life integration, giving you the space to thrive in both areas."
    },
    {
      id: "06",
      title: "Global Impact, Local Focus",
      content: "Our team members contribute to a worldwide movement, making a difference in holistic healthcare across the globe."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Excellence</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
              Why <br/>
              <span className="text-orange-500  lowercase font-light">Choose Us?</span>
            </h2>
          </div>
          <p className="text-gray-400 font-medium max-w-xs text-sm uppercase tracking-widest leading-relaxed">
            Be part of something bigger. <br/> Transform lives with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: DYNAMIC IMAGE CARD --- */}
          <div className="lg:col-span-5 relative group">
            <div className="sticky top-12 h-[600px] w-full rounded-[4rem] overflow-hidden">
              <img 
                src={img} 
                alt="Culture" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-slate-900/60" />
              
              {/* Floating Badge */}
              {/* <div className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full flex items-center justify-center p-2 shadow-xl animate-spin-slow">
                 <div className="w-full h-full border-2 border-dashed border-orange-200 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="text-orange-500" size={32} />
                 </div>
              </div> */}

              <div className="absolute bottom-12 left-12 right-12">
                <h4 className="text-white text-3xl font-black leading-tight uppercase tracking-tighter">
                  Our <span className="text-orange-400 italic font-serif lowercase font-light">Culture</span> <br/> defines us.
                </h4>
              </div>
            </div>
          </div>

          {/* --- RIGHT: MINIMALIST ACCORDION --- */}
          <div className="lg:col-span-7 flex flex-col">
            {features.map((feature, idx) => (
              <div 
                key={feature.id}
                className="group border-b border-gray-100 last:border-0"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  className="w-full py-8 flex items-start gap-8 text-left transition-all group-hover:bg-gray-50/50 px-4 rounded-3xl"
                >
                  <span className={`text-xs font-black pt-2 transition-colors duration-300 ${
                    activeIndex === idx ? "text-orange-500" : "text-gray-300"
                  }`}>
                    {feature.id}
                  </span>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-black uppercase tracking-tight transition-all duration-300 ${
                      activeIndex === idx ? "text-slate-900" : "text-gray-400 group-hover:text-slate-600"
                    }`}>
                      {feature.title}
                    </h3>

                    <AnimatePresence>
                      {activeIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <p className="text-gray-500 font-medium text-lg leading-relaxed pt-6 max-w-xl">
                            {feature.content}
                          </p>
                          <div className="flex gap-2 pt-6">
                             <div className="h-1 w-12 bg-orange-500 rounded-full" />
                             <div className="h-1 w-2 bg-orange-200 rounded-full" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className={`mt-2 p-2 rounded-full border transition-all duration-500 ${
                    activeIndex === idx 
                    ? "bg-slate-900 border-slate-900 text-white rotate-180" 
                    : "border-gray-200 text-gray-400"
                  }`}>
                    {activeIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Mic, BookOpen, ArrowRight } from 'lucide-react';

const AssetsShowcase = () => {
  const assets = [
    {
      title: "SCORM Interactive",
      desc: "Enterprise-grade modules with branching scenarios and clinical tracking.",
      features: ["LMS Compatible", "Interactive"],
      icon: <Layers size={22} />,
      theme: "bg-slate-950 text-white"
    },
    {
      title: "Mindful Podcasts",
      desc: "Conversations with global authorities in integrative lifestyle medicine.",
      features: ["Expert Guests", "Auditory"],
      icon: <Mic size={22} />,
      theme: "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
    },
    {
      title: "Deep-Dive E-books",
      desc: "Curated lifestyle frameworks and cellular healing protocols.",
      features: ["Downloadable", "Science-Backed"],
      icon: <BookOpen size={22} />,
      theme: "bg-orange-50 text-orange-600 border border-orange-100"
    }
  ];

  return (
    <section className="py-24 bg-[#FCF9F5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-4 text-orange-500 font-black uppercase tracking-[0.3em] text-[10px]">
              <div className="h-[1px] w-8 bg-orange-500" /> Media Ecosystem
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter uppercase text-slate-950">
              Multi-Format <br /> <span className="text-orange-500 italic font-light serif lowercase">Intelligence.</span>
            </h2>
          </motion.div>
          <p className="text-lg text-slate-400 font-medium max-w-md pb-2">
            Transformative education delivered via interactive modules and immersive audio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {assets.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${asset.theme}`}>
                {asset.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-950 mb-3">{asset.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{asset.desc}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {asset.features.map((f, i) => (
                    <span key={i} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-50 text-slate-400 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <button className="flex items-center gap-2 text-[10px] font-black text-slate-950 hover:text-orange-500 transition-colors uppercase tracking-widest group/btn">
                Access Media <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetsShowcase;
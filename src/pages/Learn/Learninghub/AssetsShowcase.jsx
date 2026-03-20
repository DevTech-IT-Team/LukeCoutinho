import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Mic, BookOpen, CheckCircle2, Zap, PlayCircle } from 'lucide-react';

const AssetsShowcase = () => {
  const assets = [
    {
      title: "SCORM Interactive Courses",
      subtitle: "High-Engagement E-Learning",
      desc: "Our courses are built on SCORM standards, offering interactive branching scenarios, real-time progress tracking, and professional certifications.",
      features: ["LMS Compatible", "Interactive Scenarios", "Progress Retention"],
      icon: <Layers className="w-8 h-8 text-orange-600" />,
      tag: "SCORM Compliant",
      bgColor: "bg-orange-50",
      accentColor: "text-orange-600"
    },
    {
      title: "Mindful Podcasts",
      subtitle: "Audio Wisdom on the Go",
      desc: "Exclusive audio insights and deep-dive conversations with global authorities in integrative medicine, available across all digital platforms.",
      features: ["Expert Guest Speakers", "Clinical Insights", "On-Demand Access"],
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      tag: "Audio Learning",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600"
    },
    {
      title: "Educational E-books",
      subtitle: "Comprehensive Digital Guides",
      desc: "Curated lifestyle protocols and deep-dive cellular healing guides in PDF and EPUB formats, designed for deep study and reference.",
      features: ["Downloadable Guides", "Lifestyle Protocols", "Searchable Content"],
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      tag: "Deep Dive",
      bgColor: "bg-teal-50",
      accentColor: "text-teal-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-px bg-orange-500" />
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">What we provide</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none mb-8"
          >
            Multi-Format <br />
            <span className="text-orange-500 font-light italic">Digital Learning.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-slate-500 font-medium leading-relaxed"
          >
            As a global leader in integrative lifestyle medicine, we deliver transformative education through state-of-the-art SCORM modules, immersive podcasts, and research-backed ebooks.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {assets.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-10 rounded-[3.5rem] bg-white border border-slate-100 hover:border-orange-500/30 hover:shadow-3xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl ${asset.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {asset.icon}
                </div>
                
                <div className="flex-1">
                  <div className={`text-[10px] font-black uppercase tracking-widest ${asset.accentColor} mb-2`}>{asset.tag}</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{asset.title}</h3>
                  <p className="text-sm font-bold text-slate-400 mb-6 italic">{asset.subtitle}</p>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">{asset.desc}</p>
                  
                  <div className="space-y-3">
                    {asset.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className={asset.accentColor} />
                        <span className="text-xs font-black text-slate-700 uppercase tracking-tighter">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Explore Content</span>
                  <Zap size={18} className="text-orange-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetsShowcase;

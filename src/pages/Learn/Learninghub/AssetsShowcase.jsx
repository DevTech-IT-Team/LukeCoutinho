import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Mic, BookOpen, CheckCircle2, Zap, ArrowRight, Sparkles } from 'lucide-react';

const AssetsShowcase = () => {
  const assets = [
    {
      title: "SCORM Interactive",
      subtitle: "Enterprise Grade E-Learning",
      desc: "State-of-the-art interactive modules with branching scenarios and real-time clinical tracking.",
      features: ["LMS Compatible", "Interactive Scenarios", "Real-time Tracking"],
      icon: <Layers size={24} />,
      tag: "Advanced",
      theme: "blue"
    },
    {
      title: "Mindful Podcasts",
      subtitle: "Auditory Wisdom",
      desc: "Deep-hive conversations with global authorities in integrative lifestyle medicine.",
      features: ["Expert Guests", "Clinical Logs", "Global Platform Access"],
      icon: <Mic size={24} />,
      tag: "Auditory",
      theme: "cyan"
    },
    {
      title: "Deep-Dive E-books",
      subtitle: "Digital Protocols",
      desc: "Curated lifestyle frameworks and cellular healing guides for profound personal study.",
      features: ["Downloadable Guides", "Lifestyle Mapping", "Searchable Science"],
      icon: <BookOpen size={24} />,
      tag: "Knowledge Base",
      theme: "orange"
    }
  ];

  return (
    <section className="py-40 bg-[#FFFEFC] overflow-hidden text-slate-950">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -z-10" />
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="grid lg:grid-cols-12 gap-24 items-end mb-32">
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 px-6 py-2 bg-slate-50 border border-slate-100 rounded-full text-orange-500"
            >
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Media Ecosystem</span>
            </motion.div>
            
            <h2 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase whitespace-pre-line">
              Multi-Format <br />
              <span className="text-orange-500 italic font-light not-uppercase">Intelligence.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-4 pb-4">
             <p className="text-2xl text-slate-400 font-medium leading-relaxed">
               Transformative education delivered through state-of-the-art interactive modules and immersive auditory experiences.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {assets.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full p-12 rounded-[4rem] bg-white text-slate-950 flex flex-col space-y-10 border border-slate-100 shadow-2xl shadow-slate-200/50 transition-all duration-700 hover:translate-y-[-20px] group-hover:rotate-[1deg]">
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                   asset.theme === 'blue' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 
                   asset.theme === 'cyan' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 
                   'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                }`}>
                  {asset.icon}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#2A5BD7] mb-2 block">{asset.tag}</span>
                    <h3 className="text-3xl font-bold tracking-tight leading-tight text-slate-950">{asset.title}</h3>
                  </div>
                  
                  <p className="text-lg text-slate-400 font-medium leading-relaxed italic">{asset.subtitle}</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{asset.desc}</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100 flex-1">
                   {asset.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-950 opacity-60">{feature}</span>
                      </div>
                   ))}
                </div>

                <button className="flex items-center gap-3 text-xs font-bold text-blue-600 hover:text-blue-700 transition-all uppercase tracking-widest mt-auto">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetsShowcase;


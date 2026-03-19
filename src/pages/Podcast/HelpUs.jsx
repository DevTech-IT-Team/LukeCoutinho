import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Music, Radio, Mic2, Phone, Mail, Send } from 'lucide-react';
import img from '../../assets/micimg.png';

const PodcastHero = () => {
  const platforms = [
    { name: "Spotify", icon: <Music size={14} /> },
    { name: "YouTube", icon: <Youtube size={14} /> },
    { name: "Apple", icon: <Radio size={14} /> },
    { name: "Google", icon: <Mic2 size={14} /> }
  ];

  return (
    <section className="relative bg-white min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 py-20 px-5">
      
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-12 gap-4">
          
          {/* --- MAIN CONTENT --- */}
          <div className="col-span-12 lg:col-span-10 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-orange-500 font-black text-xs tracking-[0.6em] uppercase">-The Podcast</span>
              </div>

              <h1 className="text-[14vw] lg:text-[9rem] font-black text-slate-900 leading-[0.7] tracking-tighter uppercase">
                BEYOND <br />
                <span className="text-orange-400 italic font-serif lowercase font-light">wellness</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl space-y-12"
            >
              <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-lg">
                Exploring what truly transforms lives—from nutrition and movement to the nuances of breath and belief.
              </p>

              {/* --- NEWSLETTER & ACTION BUTTONS --- */}
              <div className="space-y-8">
                <div className="relative max-w-md group">
                  <input 
                    type="email" 
                    placeholder="Enter your email to stay aligned"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-orange-500 transition-all pr-16"
                  />
                  <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-xl hover:bg-orange-500 transition-colors">
                    <Send size={18} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-all shadow-lg shadow-slate-900/10">
                    <Phone size={14} className="text-orange-500" />
                    Call Us
                  </button>
                  <button className="flex items-center gap-3 bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-50 transition-all">
                    <Mail size={14} className="text-orange-500" />
                    Email Us
                  </button>
                </div>
              </div>

              {/* Platform Links */}
              <div className="flex flex-wrap gap-8 border-t border-gray-100 pt-10">
                {platforms.map((p) => (
                  <div key={p.name} className="flex items-center gap-2 group cursor-pointer">
                    <span className="w-7 h-7 rounded-full bg-gray-100 text-slate-900 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                      {p.icon}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{p.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- SMALL IMAGE AT RIGHT BOTTOM (UPDATED SIZE) --- */}
        <div className="absolute bottom-0 right-0 w-[180px] md:w-[220px] lg:w-[260px] z-30 pointer-events-none">
          <img 
            src={img} 
            alt="Luke" 
            className="w-full h-auto object-contain drop-shadow-[-20px_-10px_30px_rgba(0,0,0,0.1)]"
          />
        </div>

      </div>
    </section>
  );
};

export default PodcastHero;

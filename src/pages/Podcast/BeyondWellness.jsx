import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowUpRight, Mic2, Quote } from 'lucide-react';
import img from '../../assets/podcastcircle.jpg'

const PodcastIntro = () => {
  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: BEYOND WELLNESS --- */}
        <div className="text-center mb-24 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">The Podcast</span>
              <span className="h-[1px] w-8 bg-orange-500"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Beyond Wellness: <br/>
              <span className="text-orange-200 italic  font-light">Conversations that inspire change</span>
            </h2>
          </motion.div>

          <p className="max-w-3xl mx-auto text-xl text-gray-500 font-medium leading-relaxed">
            Join Luke Coutinho as he explores what truly transforms lives—from food and movement to breath and belief. 
            Alongside industry experts and real stories, each episode offers tools for conscious, root-cause healing. 
            <span className="block mt-4 text-slate-900 font-bold uppercase tracking-widest text-xs">Science-backed. Soul-led.</span>
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-4 mx-auto hover:bg-orange-500 transition-all shadow-xl shadow-gray-200"
          >
            Check Out The Episodes <PlayCircle size={18} />
          </motion.button>
        </div>

        {/* --- BOTTOM SECTION: MEET YOUR HOST --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative bg-gray-50 rounded-[4rem] p-10 md:p-20 border border-gray-100 flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Decorative Elements */}
          <Quote className="absolute top-10 right-10 text-gray-200" size={120} />
          
          {/* Host Image Block */}
          <div className="relative w-full lg:w-1/3 aspect-square max-w-[400px]">
            <div className="absolute inset-0 border-[15px] border-white rounded-[3.5rem] transform rotate-6 shadow-sm"></div>
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl bg-orange-500">
              <img 
                src={img}
                alt="Luke Coutinho" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg">
                <Mic2 className="text-orange-500" size={24} />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:w-2/3 relative z-10 space-y-8">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">Meet Your Host</h3>
              <h4 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                The Voice of <br/>
                <span className="text-gray-300 italic font-serif lowercase font-light">Integrative Healing</span>
              </h4>
            </div>

            <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
              <p>
                Luke Coutinho is a global voice in integrative and lifestyle medicine, and the Founder of You Care—India’s pioneering holistic wellness program. 
                Backed by over 14 years of transformative work, his approach has empowered thousands across the world.
              </p>
              <p className="border-l-4 border-orange-500 pl-6 italic bg-white py-4 rounded-r-2xl shadow-sm">
                As the Wellness Champion appointed under the Hon’ble Prime Minister Narendra Modi’s Fit India Movement, Luke brings credibility, compassion, and clarity to every conversation.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="flex items-center gap-2 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:text-orange-500 transition-colors">
                Full Biography <ArrowUpRight size={14} />
              </a>
              <div className="h-[1px] w-24 bg-gray-200"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PodcastIntro;
import React from 'react';
import { motion } from 'framer-motion';
import { Play, SkipBack, SkipForward, List, Share2, Info, Headphones } from 'lucide-react';
import img from '../../assets/podcastHero.png'

const LatestPodcast = () => {
  return (
    <section className="py-15 bg-slate-900 px-6 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <Headphones className="text-orange-500" size={20} />
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">New Release</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Explore the Latest <br />
            <span className="text-orange-500 italic  lowercase font-light">From the Podcast</span>
          </h2>

          <p className="text-gray-400 font-medium tracking-wide">
            Never miss an episode. Listen anytime, on the go.
          </p>
        </div>

        {/* --- CUSTOM PLAYER CARD --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] p-4 md:p-8 shadow-2xl shadow-orange-950/20 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Cover Art */}
          <div className="relative group w-full md:w-64 aspect-square shrink-0">
            <img
              src={img}
              alt="The Luke Coutinho Show"
              className="w-full h-full object-cover rounded-[2rem] shadow-lg"
            />
            <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] flex items-center justify-center">
              <Play fill="white" className="text-white" size={48} />
            </div>
          </div>

          {/* Controls & Waveform */}
          <div className="flex-1 w-full space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                The Luke Coutinho Show - Reimagine Your Lifestyle
              </h3>
              <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mt-1">
                Episode 142 • Integrative Health
              </p>
            </div>

            {/* Simulated Waveform derived from original image */}
            <div className="relative h-16 w-full flex items-end gap-[3px]">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [15, Math.random() * 40 + 10, 15] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                  className="flex-1 bg-gray-200 rounded-full"
                  style={{ backgroundColor: i < 15 ? '#f97316' : '#e5e7eb' }}
                />
              ))}
              <span className="absolute right-0 -bottom-6 text-[10px] font-bold text-gray-400">00:00 | 50:01</span>
            </div>

            {/* Player Interface Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
              <div className="flex items-center gap-6 text-slate-900">
                <SkipBack size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
                <button className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-slate-900 transition-all shadow-lg shadow-orange-200">
                  <Play fill="currentColor" size={24} />
                </button>
                <SkipForward size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
              </div>

              <div className="flex items-center gap-6 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <List size={16} /> More Info
                </button>
                <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-10 text-center">
          <motion.a
            href="https://open.spotify.com/show/4svZdJowSdS4Go4Ei5zYcw?si=7AhYTfpUSlKbTJuO5OepGA&nd=1&dlsi=790c7c86b2d846ae" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-5 rounded-full border-2 border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all"
          >
            Listen On Spotify
            <div className="w-2 h-2 rounded-full bg-orange-500" />
          </motion.a>
        </div>


      </div>
    </section>
  );
};

export default LatestPodcast;
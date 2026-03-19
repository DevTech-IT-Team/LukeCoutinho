import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ArrowRight, Calendar, Mic2 } from 'lucide-react';

import DrRajivBhatt from '../../assets/Podcast/DrRajivBhatt.jpg';
import DrWilliam from '../../assets/Podcast/DrWilliam.jpg';
import DrSonalika from '../../assets/Podcast/DrSonalika.jpg';
import AshwinBhadri from '../../assets/Podcast/AshwinBhadri.jpg';
import DhruvGupta from '../../assets/Podcast/DhruvGupta.jpg';
import DrNozerSherier from '../../assets/Podcast/DrNozerSherier.jpg';
import Sister from '../../assets/Podcast/Sister.png';
import DrAnil from '../../assets/Podcast/DrAnil.png';
import William from '../../assets/Podcast/william.png';



const EpisodeGrid = () => {
  const [activeSeason, setActiveSeason] = useState('All');

  const episodes = [

    //season 1
    { title: "The Conscious Shift - Mastering the Mind: In Control or Under Control?", guest: "Sister BK Shivani / 6 June, 2025", season: "Season 1", link: "https://youtu.be/40VTUMsZ5Uc", image: Sister },
    { title: "Analyzing the Roots of Head and Neck Cancers: Causes and Lifestyle-Based Preventive Measures", guest: "Dr. Anil D’Cruz / 6 June, 2025", season: "Season 1", link: "https://www.youtube.com/watch?v=vP2gEY8lPH4", image: DrAnil },
    { title: "Wellness Blueprint: Navigating Immunity, DNA Resilience, Stem Cells, Microbiome & Angiogenesis", guest: "Dr. William Li / 6 June, 2025", season: "Season 1", link: "https://www.youtube.com/watch?v=OQ2H0WCuRdc", image: William },


    //seasone 2
    { title: "Breast Cancer Biology: Epigenetics, Screening, & Prevention", guest: "Dr. Rajiv Bhatt / 9 October, 2025", season: "Season 2", link: "https://www.youtube.com/watch?v=AOwxKUFOo7w&t=0s", image: DrRajivBhatt },
    { title: "Healing through Food and Science", guest: "Dr. William Li / 9 October, 2025", season: "Season 2", link: "https://www.youtube.com/watch?v=4DU39FPJ3L4&t=0s", image: DrWilliam },
    { title: "Unlocking the Secrets of Skin, Hair, and Aging", guest: "Dr. Sonali Kohli / 9 October, 2025", season: "Season 2", link: "https://www.youtube.com/watch?v=u2uRG47Yv7E&t=0s", image: DrSonalika },
    { title: "Building an Honest Food Chain through Label Transparency", guest: "Ashwin Bhadri / 9 October, 2025", season: "Season 2", link: "https://www.youtube.com/watch?v=QV_mbsMKbtY", image: AshwinBhadri },
    { title: "Are Your Lab Reports Reliable? Insights from Dhruv Gupta", guest: "Dhruv Gupta / 9 October, 2025", season: "Season 2", link: "https://www.youtube.com/watch?v=9a7nthEgV5s&t=0s", image: DhruvGupta },
    { title: "Contraceptives, Early Puberty, Safe Sex & Cancer Prevention", guest: "Dr. Nozer Sherier / 9 October, 2025", season: "Season 2", link: "https://www.youtube.com/watch?v=74iWEQfpaCs&t=0s", image: DrNozerSherier },


  ];

  const filteredEpisodes = activeSeason === 'All'
    ? episodes
    : episodes.filter(ep => ep.season === activeSeason);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* --- DYNAMIC HEADER --- */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <Mic2 size={16} className="text-orange-500" />
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">The Archive</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.8]">
            Explore <br />
            <span className="text-orange-300 italic lowercase font-light text-8xl md:text-9xl">Our Podcast</span>
          </h2>

          {/* --- CLASSIFIED FILTER TABS --- */}
          <div className="flex flex-wrap gap-6 pt-12 border-b border-gray-100 pb-6">
            {['All', 'Season 1', 'Season 2'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSeason(tab)}
                className={`relative px-6 py-2 font-black uppercase tracking-widest text-[10px] transition-all duration-300 ${activeSeason === tab ? 'text-slate-900' : 'text-gray-300 hover:text-orange-500'
                  }`}
              >
                {tab}
                {activeSeason === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-[-26px] left-0 right-0 h-1 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID WITH ANIMATION --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredEpisodes.map((episode, idx) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                href={episode.link}
                target="_blank"
                rel="noopener noreferrer"
                key={episode.title}
                className="group bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/40 block"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden bg-slate-200">
                  {/* Image Rendering */}
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 scale-90 group-hover:scale-100">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <PlayCircle size={32} fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-10 space-y-4">
                  <div className="flex items-center gap-2 text-orange-600 font-black uppercase tracking-widest text-[10px]">
                    <Calendar size={12} /> {episode.season}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
                    {episode.title}
                  </h3>
                  <p className="text-gray-400 font-serif italic text-lg leading-none lowercase">
                    {episode.guest}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-[10px] group-hover:text-orange-500 transition-colors">
                      Watch On YouTube <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-20 text-center">
          <a
            href="https://www.youtube.com/@LukeCoutinho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-orange-500 transition-all shadow-2xl"
          >
            See All Episodes on YouTube 
          </a>
        </div>


      </div>
    </section>
  );
};

export default EpisodeGrid;
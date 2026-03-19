import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, Calendar } from 'lucide-react';
import img1 from '../../assets/HealingThroughFood.jpg'
import img2 from '../../assets/UnlockingTheSecretsofSkin.jpg'
import img3 from '../../assets/BuildingAnHonest.jpg'
import { NavLink } from "react-router-dom";


const EpisodeGrid = () => {
  const episodes = [
    {
      title: "Healing Through Food and Science",
      guest: "With Dr. William Li",
      season: "Season 2",
      image: img1
    },
    {
      title: "Unlocking The Secrets of Skin, Hair & Aging",
      guest: "With Dr. Sonali Kohli",
      season: "Season 2",
      image: img2
    },
    {
      title: "Building An Honest Food Chain",
      guest: "With Ashwin Bhadri",
      season: "Season 2",
      image: img3
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-orange-500"></span>
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">The Archive</span>
            <span className="h-[1px] w-8 bg-orange-500"></span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Every Episode, <br />
            <span className="text-orange-200 italic  lowercase font-light text-7xl">Every Season</span>
          </h2>

          {/* Season Selector - Replacing the teal underline from image_a6c63e.png */}
          <div className="flex justify-center gap-8 pt-8">
            <button className="text-slate-900 font-black uppercase tracking-widest text-[10px] border-b-2 border-orange-500 pb-2">Season 1</button>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {episodes.map((episode, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="group bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/40"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <PlayCircle size={32} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-10 space-y-4">
                <div className="flex items-center gap-2 text-orange-600 font-black uppercase tracking-widest text-[10px]">
                  <Calendar size={12} /> {episode.season}
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-orange-500 transition-colors">
                  {episode.title}
                </h3>
                <p className="text-gray-400 font-serif italic text-lg leading-none lowercase">
                  {episode.guest}
                </p>

                <div className="pt-4">
                  <button className="flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-[10px] group/btn">
                    Watch Now <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-20 text-center">
          <NavLink to="/Podcast/Podcast/PodcastVideos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-500 transition-all shadow-2xl shadow-gray-900/10"
            >
              View All Episodes
            </motion.button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default EpisodeGrid;
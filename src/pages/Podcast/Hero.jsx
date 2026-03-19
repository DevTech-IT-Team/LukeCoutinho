import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/podcastHero.png'
import google from '../../assets/google-podcasts.png'


const PodcastSectionMinimal = () => {
  const platforms = [
    { name: "YouTube", src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
    { name: "Google Podcasts", src: google },
    { name: "Apple Podcasts", src: "https://www.pngmart.com/files/23/Apple-Podcast-Logo-PNG-Clipart.png" },
    { name: "Spotify", src: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" }

  ];

  return (
    <section className="bg-white">
      {/* --- FULL WIDTH BANNER --- */}
      <div className="w-full pt-13">
        <img 
          src={img}
          alt="The Luke Coutinho Show"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* --- LOGO STRIP --- */}
      <div className="py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 ">
          {platforms.map((logo) => (
            <motion.div 
              key={logo.name}
              className="transition-all duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-7 md:h-10 w-auto object-contain grayscale hover:grayscale-0" // High contrast logos
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSectionMinimal;
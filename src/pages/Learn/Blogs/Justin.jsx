import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';

const JustInInfinite = () => {
  // Content accurately extracted from your provided images
  const articles = [
    {
      id: 1,
      date: "19 January, 2026",
      title: "Cold Outside? These 4 Healthy Indian Winter Recipes Have You Covered",
      img: "https://images.unsplash.com/photo-1585932231552-0540058286bc?q=80&w=800", // Winter recipes
    },
    {
      id: 2,
      date: "17 January, 2026",
      title: "The 'Never Enough' Feeling Has a Name: Dopamine Detox",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800", // Dopamine detox/phone
    },
    {
      id: 3,
      date: "16 January, 2026",
      title: "Sleep Hygiene Secrets: 11 Nightly Habits Sleep Experts Swear By",
      img: "https://images.unsplash.com/photo-1541781713364-70163351336b?q=80&w=800", // Sleeping woman
    },
    {
      id: 4,
      date: "14 January, 2026",
      title: "From Samosa to Pizza: The Shocking Number of Steps Your Junk Food Demands",
      img: "https://images.unsplash.com/photo-1601050638917-3d0663052bc4?q=80&w=800", // Junk food collage
    },
    {
      id: 5,
      date: "13 January, 2026",
      title: "Why a Warm Bowl Still Works: 5 Best Soups for Cold, Cough, Sore Throat & Fever",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800", // Bowls of soup
    },
    {
      id: 6,
      date: "22 January, 2026",
      title: "Low Progesterone Isn't Random. Here's What's Really Happening",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", // Pink background / Hormones
    },
    {
      id: 7,
      date: "20 January, 2026",
      title: "Talk to Your Cells to Heal Faster: The Science of Mind-Body Connection",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800", // Woman in mirror
    }
  ];

  const controls = useAnimationControls();
  const duplicatedArticles = [...articles, ...articles]; // Double for seamless loop

  useEffect(() => {
    controls.start({
      x: [0, -2800], // Adjust based on total width (400px per card * 7 cards)
      transition: {
        duration: 35,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section className="py-24 bg-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-5xl font-black text-gray-800 tracking-tighter">
            Just <span className="text-orange-500 italic">In_</span>
          </h2>
          <p className="text-gray-400 font-medium mt-2">The latest from Luke's Wellness Blog.</p>
        </div>
        <div className="flex gap-2 mb-2">
           {[...Array(4)].map((_, i) => (
             <div key={i} className={`h-1.5 rounded-full ${i === 0 ? 'w-8 bg-orange-500' : 'w-2 bg-gray-200'}`} />
           ))}
        </div>
      </div>

      <div className="relative">
        <motion.div 
          className="flex gap-8"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => controls.start({
            x: -2800,
            transition: { duration: 35, ease: "linear", repeat: Infinity }
          })}
        >
          {duplicatedArticles.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[380px] bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              {/* Image Area */}
              <div className="h-52 w-full overflow-hidden relative">
                <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase italic shadow-lg">
                  New Update
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.date}</span>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold">
                    <Clock size={12} /> 6 MIN READ
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-orange-500 transition-colors h-14 overflow-hidden">
                  {item.title}
                </h3>
                <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-gray-800">Explore Insight</span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JustInInfinite;
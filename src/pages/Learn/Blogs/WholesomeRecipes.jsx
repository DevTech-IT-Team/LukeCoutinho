import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WholesomeRecipesSection = () => {
  const [viewIndex, setViewIndex] = useState(0);

  const recipes = [
    {
      date: "13 July, 2022",
      title: "Tomato Soup – Taste the Magic of Lycopene",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800",
      category: "NUTRITION"
    },
    {
      date: "19 October, 2019",
      title: "Broccoli Sweet Potato Tikki",
      img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800",
      category: "RECIPES"
    },
    {
      date: "10 January, 2026",
      title: "Skincare in Winter: 5 Recipes By Our Skin Experts to Get You Started",
      img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=800",
      category: "SKINCARE"
    },
    {
      date: "19 December, 2025",
      title: "Seasoned with Care: A Healthy Guilt-Free Christmas Cookbook",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800",
      category: "WELLNESS"
    },
    {
      date: "4 December, 2025",
      title: "Love Holiday Food? Try Luke’s 5 Food Swaps to Make It Even Better",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800",
      category: "LIFESTYLE"
    },
    {
      date: "31 October, 2025",
      title: "Tired of Half-Eaten Lunch Boxes? Try These Meal Ideas Kids Finish!",
      img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=800",
      category: "KIDS HEALTH"
    }
  ];

  // Auto-cycle for the featured spot
  useEffect(() => {
    const timer = setInterval(() => {
      setViewIndex((prev) => (prev + 1) % recipes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [recipes.length]);

  return (
    <section className="py-15 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500"></span>
              <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Wellness Kitchen</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 tracking-tighter">
              Wholesome <span className="text-orange-500 font-normal text-4xl md:text-5xl">Recipes</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setViewIndex(prev => prev === 0 ? recipes.length - 1 : prev - 1)} 
              className="p-4 rounded-full border border-gray-100 text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setViewIndex(prev => (prev + 1) % recipes.length)} 
              className="p-4 rounded-full border border-gray-100 text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Recipe Card (Left) */}
          <div className="lg:col-span-7 group cursor-pointer relative">
            <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl shadow-orange-100">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={viewIndex}
                  src={recipes[viewIndex].img} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </AnimatePresence>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-12 left-10 right-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={`text-${viewIndex}`}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-orange-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">
                    {recipes[viewIndex].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                    {recipes[viewIndex].title}
                  </h3>
                  <button className="text-white border-b-2 border-orange-500 pb-1 font-bold text-sm hover:text-orange-400 transition-colors uppercase tracking-widest">
                    View Full Recipe
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* List Feed (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-4 max-h-[550px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-50">
            {recipes.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setViewIndex(idx)}
                className={`flex gap-5 p-5 rounded-3xl transition-all duration-300 cursor-pointer group border-2 ${
                  viewIndex === idx 
                    ? 'bg-white border-orange-500 shadow-lg scale-[1.02]' 
                    : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 shadow-none'
                }`}
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                    viewIndex === idx ? 'text-orange-500' : 'text-gray-400'
                  }`}>
                    {item.date}
                  </p>
                  <h4 className={`text-sm font-bold leading-snug transition-colors ${
                    viewIndex === idx ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WholesomeRecipesSection;
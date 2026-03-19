import React, { useEffect, useRef } from 'react';
import { 
  Trophy, Wind, Heart, Dumbbell, Lightbulb, Activity, 
  BookOpen, Grid, Leaf, Utensils, FlaskConical, Moon, Sparkles 
} from 'lucide-react';

const DiscoverCategories = () => {
  const scrollRef = useRef(null);

  const categories = [
    { name: "Success Stories", posts: 53, icon: <Trophy />, color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
    { name: "Breath", posts: 13, icon: <Wind />, color: "text-blue-400", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "Emotional Wellness", posts: 136, icon: <Heart />, color: "text-pink-400", bg: "bg-pink-50", border: "border-pink-100" },
    { name: "Exercise", posts: 51, icon: <Dumbbell />, color: "text-green-600", bg: "bg-green-50", border: "border-green-600", active: true },
    { name: "Expert Speak", posts: 22, icon: <Lightbulb />, color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-100" },
    { name: "Health Condition", posts: 211, icon: <Activity />, color: "text-red-400", bg: "bg-red-50", border: "border-red-100" },
    { name: "Luke's Learnings", posts: 17, icon: <BookOpen />, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
    { name: "Miscellaneous", posts: 173, icon: <Grid />, color: "text-gray-400", bg: "bg-gray-50", border: "border-gray-200" },
    { name: "Nutrition", posts: 89, icon: <Leaf />, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
    { name: "Recipe", posts: 45, icon: <Utensils />, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
    { name: "Remedies", posts: 32, icon: <FlaskConical />, color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-100" },
    { name: "Sleep", posts: 64, icon: <Moon />, color: "text-indigo-400", bg: "bg-indigo-50", border: "border-indigo-100" },
    { name: "Spirit", posts: 28, icon: <Sparkles />, color: "text-purple-400", bg: "bg-purple-50", border: "border-purple-100" },
  ];

  const allCategories = [...categories, ...categories];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
        if (scrollLeft + offsetWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
        } else {
          scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">
          Discover Wellness by <span className="text-orange-500">Category</span>
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-10 px-10 scrollbar-hide py-10 items-end transition-all"
        style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {allCategories.map((cat, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            style={{ width: '180px' }}
          >
            {/* Circular Card */}
            <div className={`
              w-36 h-36 md:w-44 md:h-44 rounded-full border flex flex-col items-center justify-center
              transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-white
              ${cat.bg} ${cat.border} ${cat.active ? 'ring-2 ring-green-500 ring-offset-4 scale-110 shadow-lg' : 'shadow-sm'}
            `}>
              <div className={`w-10 h-10 md:w-12 md:h-12 ${cat.color} group-hover:text-orange-500 transition-colors duration-300`}>
                {React.cloneElement(cat.icon, { size: "100%", strokeWidth: 1.5 })}
              </div>
            </div>

            {/* Label Content */}
            <div className="mt-8 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                {cat.posts} Posts
              </p>
              <h3 className={`
                text-sm md:text-base font-bold mt-2 transition-all duration-300
                ${cat.active ? 'text-gray-900 border-b-2 border-green-500 pb-1' : 'text-gray-500 group-hover:text-orange-500'}
              `}>
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default DiscoverCategories;
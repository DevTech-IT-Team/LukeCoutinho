import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Main Hero Container */}
      <div className="relative flex flex-col lg:flex-row min-h-[85vh]">
        
        {/* Left Side: Content Branding */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-20 z-10 bg-white">
          <div className="max-w-xl">
            {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase text-orange-600 bg-orange-50 rounded-full">
              Global Speaker & Mentor
            </span> */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Talks & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                Events with Luke
              </span>
            </h1>
            <div className="w-20 h-1.5 mt-8 bg-orange-500 rounded-full"></div>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-md">
              Empowering organizations and individuals through data-driven insights and transformative learning experiences.
            </p>
          </div>
        </div>

        {/* Right Side: Image with Geometric Accents */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-full">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070')` 
            }}
          >
            {/* Gradient Overlay for a sleek transition */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden"></div>
          </div>
          
          {/* Decorative Orange Element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-tl-full border-t border-l border-orange-500/20"></div>
        </div>
      </div>

      {/* Stats Section: Floating Glass Card */}
      <div className="relative -mt-24 lg:-mt-16 pb-20 px-4 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              
              {/* Stat 1 */}
              <div className="p-8 text-center hover:bg-orange-50/30 transition-colors">
                <span className="block text-4xl font-black text-lime-500 mb-1">250+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Talks Done</span>
              </div>

              {/* Stat 2 */}
              <div className="p-8 text-center hover:bg-orange-50/30 transition-colors">
                <span className="block text-4xl font-black text-teal-500 mb-1">10k+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Learning Mins</span>
              </div>

              {/* Stat 3 */}
              <div className="p-8 text-center bg-orange-500/5 lg:bg-transparent">
                <span className="block text-4xl font-black text-orange-600 mb-1">30+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Partners</span>
              </div>

              {/* Stat 4 */}
              <div className="p-8 text-center hover:bg-orange-50/30 transition-colors">
                <span className="block text-4xl font-black text-teal-800 mb-1">8+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Countries</span>
              </div>

              {/* Stat 5 */}
              <div className="p-8 text-center hover:bg-orange-50/30 transition-colors">
                <span className="block text-5xl font-black text-teal-600 leading-none mb-1">∞</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Impacted</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
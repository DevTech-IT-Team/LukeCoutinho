import React from 'react';

const RedesignedHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[750px] flex items-center">
      {/* Background Layer: Subtle Gray Split */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-slate-50/50 hidden md:block"></div>
      </div>

      {/* Decorative SVG Leaf (Top Right) */}
      <div className="absolute -top-10 -right-10 md:top-0 md:right-0 opacity-40 z-0">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-200">
          <path d="M100 20C100 20 130 60 100 120C70 180 30 180 30 180" stroke="currentColor" strokeWidth="0.5" />
          <path d="M100 20C100 20 70 60 100 120C130 180 170 180 170 180" stroke="currentColor" strokeWidth="0.5" />
          <path d="M100 20V180" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full py-10  pb-15">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side: Brand & CTA */}
          <div className="w-full md:w-1/2 space-y-10">
            <h1 className="text-6xl md:text-8xl font-black text-gray-800 tracking-tighter leading-[0.9]">
              Luke's <br />
              <span className="text-orange-500">Wellness</span> <br />
              <span className="text-gray-300">Blog_</span>
            </h1>
            
            <div className="flex items-center gap-4">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-2xl shadow-xl shadow-orange-200 transition-all duration-300 flex items-center gap-3">
                View All Blogs
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Copy & Decorative Card */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-orange-400 rounded-3xl mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            
            <div className="relative border-l-4 border-orange-500 pl-8 py-2">
              <p className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed italic">
                "Your one-stop destination for free expert-driven content on health, nutrition, movement, sleep, lifestyle and more."
              </p>
            </div>

            <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-md">
              Access <span className="text-gray-800 font-bold">13+ years</span> of global experience to discover valuable insights and actionable advice to lead a balanced, healthier, and more fulfilling life.
            </p>

            <div className="mt-10 h-1 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR: Positioned at the bottom horizontal center */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-20">
        <div className="flex items-center bg-white border border-gray-100 p-2 rounded-2xl shadow-2xl focus-within:ring-2 focus-within:ring-orange-100 transition-all">
          <div className="pl-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for blogs, posts, and recipes" 
            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-700 placeholder:text-gray-400 px-4 py-3 text-sm"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all active:scale-95 text-sm shadow-md shadow-orange-100">
            Search
          </button>
        </div>
      </div>

      {/* Aesthetic Side Accents */}
      <div className="absolute bottom-10 left-12 hidden lg:flex items-center gap-4">
         <div className="w-12 h-px bg-gray-300"></div>
         <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold rotate-90 origin-left ml-2">Scroll To Explore</span>
      </div>
    </section>
  );
};

export default RedesignedHero;
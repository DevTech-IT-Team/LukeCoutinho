import React from 'react';

const GlobalShiftCTA = () => {
  return (
    <section className="bg-white py-15 px-6 relative overflow-hidden">
      {/* Background Decorative Element: Large faded 'Global' text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-gray-50 leading-none">GLOBAL</span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Subtle Tagline */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-8 h-px bg-orange-400"></span>
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs">The Movement</span>
          <span className="w-8 h-px bg-orange-400"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-8">
          Be Part of a <span className="text-orange-500">Global Shift</span> <br className="hidden md:block"/> 
          Toward Health and Well-being
        </h2>

        {/* Supporting Text */}
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Join thousands of leaders and communities worldwide who are redefining 
          what it means to live a holistic, energized, and purposeful life.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-4xl shadow-xl shadow-orange-200 transition-all hover:-translate-y-1 active:scale-95 text-lg">
            Get Started Today
          </button>
          
          
        </div>

    
      </div>
    </section>
  );
};

export default GlobalShiftCTA;
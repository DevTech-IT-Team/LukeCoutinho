import React from "react";
import { Gift } from "lucide-react";

const GiftBanner = () => {
  return (
    <section className="relative h-[300px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support a <span className="text-orange-600">Loved One's</span> Journey. Gift Clarity. Gift Better Health.
            </h2>
            <p className="text-slate-300 text-lg">
              A course gift can be the nudge they need to feel seen, informed, and ready to take charge of their own wellbeing.
            </p>
          </div>

          <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-2xl shrink-0">
            <Gift size={18} />
            Gift A Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftBanner;
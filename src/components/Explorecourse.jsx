import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LearningHubCTA = () => {
  return (
    <section id="courses" className="py-28 px-6 relative overflow-hidden bg-slate-900 group">
      {/* Cinematic Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-1000 opacity-60"
        style={{ 
          backgroundImage: `url('file:///C:/Users/Cobuy/.gemini/antigravity/brain/65ce4c39-18c2-499f-8638-1dd0d35c6c02/learning_hub_bg_1773913327977.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px) grayscale(20%)'
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-orange-950/40 z-[1]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Accent Tag */}
        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block">
          Educational Excellence
        </span>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
          Luke’s <span className="text-orange-500 font-light ">Learning Hub</span>
        </h2>

        {/* Paragraph */}
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
          Invest in your well-being with self-paced educational courses designed 
          to help you make informed choices — <span className="text-slate-200">anytime, anywhere.</span>
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link 
            to="/learn/Learninghub/Home#courses"
            className="flex items-center gap-4 px-12 py-6 bg-orange-500 text-white font-black rounded-2xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-orange-500/20 active:scale-95 group no-underline"
          >
            <span className="uppercase tracking-widest">Explore Courses</span>
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningHubCTA;
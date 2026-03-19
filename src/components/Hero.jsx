import React, { useState, useEffect } from 'react';
import { Play, Calendar, CheckCircle2, Search, Globe } from 'lucide-react';
import heroimg from '../assets/neimg.jpg';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["grow", "heal", "thrive"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#FFFEFC] min-h-[95vh] flex items-center overflow-hidden font-sans">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-[60%] h-full bg-slate-50 opacity-40 skew-x-[15deg] -translate-x-32 pointer-events-none transition-all duration-1000" />
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-orange-100/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-blue-50/30 rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full pt-24 lg:pt-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content: Dynamic & Impactful */}
          <div className="flex-1 text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/60 mb-10 transition-all hover:border-orange-200 hover:bg-orange-50/30 group">
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] group-hover:animate-ping" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-700">Holistic Integrative Medicine</span>
            </div>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-10">
              We help <br />
              you <span className="relative inline-block lg:min-w-[280px]">
                <span key={currentWordIndex} className="animate-in fade-in slide-in-from-bottom-8 duration-700 block text-orange-500 drop-shadow-sm">
                  {words[currentWordIndex]}
                </span>
                <div className="absolute bottom-4 left-0 w-full h-4 bg-orange-200/30 -z-10 rounded-full blur-[2px]" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-snug max-w-xl mb-14 mx-auto lg:mx-0 font-medium tracking-tight">
              Our holistic approach goes beyond the<span className="text-slate-900 font-bold underline decoration-orange-300 underline-offset-4"> ordinary to empower </span>individuals to reshape their lifestyles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-20">
              <button className="w-full sm:w-auto px-12 py-6 bg-orange-500 text-white font-black rounded-3xl shadow-[0_20px_40px_-10px_rgba(249,115,22,0.3)] hover:bg-slate-950 hover:scale-[1.02] transition-all duration-500 uppercase tracking-widest text-sm flex items-center justify-center gap-4 group active:scale-95">
                <Search size={18} className="group-hover:rotate-12 transition-transform" />
                Explore Our Shop
              </button>

              <button className="w-full sm:w-auto group flex items-center justify-center gap-5 px-6 py-4 bg-transparent text-slate-900 font-black transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center shadow-xl group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:scale-110">
                  <Play size={22} fill="currentColor" className="ml-1" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-none mb-1">Luke's Philosophy</p>
                  <span className="text-xs uppercase tracking-[0.2em] font-black">Learn the Approach</span>
                </div>
              </button>
            </div>

            {/* Premium Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 mb-16 opacity-80">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Global Wellness Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Clinical Assurance</span>
              </div>
            </div>

            {/* Premium Trust Section */}
            <div className="pt-10 border-t border-slate-100">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-opacity duration-500 cursor-default">
                <div className="text-2xl font-black tracking-tighter text-slate-900">FORBES</div>
                <div className="text-2xl font-serif font-black text-slate-900 italic tracking-tight">VOGUE</div>
                <div className="text-2xl font-bold tracking-tight text-slate-900">TED<span className="text-orange-600 italic font-black">x</span></div>
                <div className="text-2xl font-black text-slate-900 uppercase tracking-[0.2em]">GQ</div>
              </div>
            </div>
          </div>

          {/* Right Visual: The "Wow" Portrait */}
          <div className="flex-1 relative w-full lg:min-h-[750px] order-2 perspective-1000">
            <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] group">
              <img
                src={heroimg}
                alt="Luke Coutinho"
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Artistic Light & Shadow Overlays Adjusted for Right side */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent lg:hidden" />
              <div className="absolute left-0 inset-y-0 w-1/2 bg-gradient-to-r from-[#FFFEFC] via-[#FFFEFC]/30 to-transparent hidden lg:block" />

              {/* Floating Verification Badge */}
              <div className="absolute top-10 left-10 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Verified Professional</span>
                </div>
              </div>

              {/* Stats Overlay Bottom */}
              <div className="absolute bottom-12 right-12 p-8 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl space-y-2 border border-white/50 transform transition-transform group-hover:-translate-y-2">
                <div className="flex -space-x-3 mb-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="client" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">
                    +10k
                  </div>
                </div>
                <p className="text-sm font-black text-slate-900 leading-tight tracking-tight text-right">Community Trust</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Global Reach</p>
              </div>
            </div>

            {/* Abstract Decorative Shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-50 rounded-full blur-[70px] -z-10" />
          </div>

        </div>
      </div>

      {/* Background Text Element Swapped to Left */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 pointer-events-none select-none opacity-60">
        <span className="text-[12rem] font-black text-slate-100/40 uppercase tracking-[0.1em]">LIFESTYLE</span>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Award, Star } from 'lucide-react';
import heroimg from '../../../assets/imluke.png';

const StatCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/,/g, ''));
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    let start = 0;
    const duration = 500;
    const increment = Math.ceil(numericValue / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="relative group p-6 rounded-3xl transition-all duration-500 hover:bg-slate-50 border border-transparent hover:border-slate-100">
      <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2 transition-transform group-hover:-translate-y-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-slate-500 text-xs md:text-sm font-bold leading-snug tracking-tight">
        {label}
      </p>
      {/* Decorative dot that appears on hover */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

const MasterclassSection = () => {
  const stats = [
    { value: "110+", label: "Masterclasses conducted so far" },
    { value: "53,000+", label: "Registrations from across the globe" },
    { value: "8,27,000+", label: "Hours of pure learning and empowerment" },
    { value: "25,000+", label: "Active Participants" },
  ];

  return (
    <section className="py-26 px-6 bg-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100">
          
         

          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left Side: Image with Interactive Elements */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-t-[3.5rem] lg:rounded-l-[3.5rem] lg:rounded-tr-none min-h-[500px]">
              <img 
                src={heroimg} 
                alt="Luke Masterclass" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 "
              />
              
             

              {/* Bottom Image Label */}
              <div className="absolute bottom-8 left-8 right-8 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <Award size={20} />
                  </div>
                  <div className="text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Chief Mentor</p>
                    <p className="text-sm font-bold uppercase tracking-widest">Luke Coutinho</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Content & Interactive Stats */}
            <div className="lg:col-span-7 p-8 md:p-16 lg:p-12 flex flex-col justify-center">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-12 h-[2px] bg-orange-500"></span>
                  <span className="text-orange-600 text-xs font-black uppercase tracking-[0.4em]">Exclusive Access</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-slate-800 leading-[1.1] mb-8">
                  Exclusive <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">Masterclasses</span> by Luke
                </h2>

                <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-black text-slate-400 tracking-[0.3em] uppercase mb-12">
                  <span className="hover:text-orange-500 transition-colors cursor-default">Learn</span>
                  <span className="text-orange-200">•</span>
                  <span className="hover:text-orange-500 transition-colors cursor-default">Empower</span>
                  <span className="text-orange-200">•</span>
                  <span className="hover:text-orange-500 transition-colors cursor-default">Reflect</span>
                  <span className="text-orange-200">•</span>
                  <span className="hover:text-orange-500 transition-colors cursor-default">Action</span>
                </div>

                {/* Interactive Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {stats.map((stat, idx) => (
                    <StatCounter key={idx} value={stat.value} label={stat.label} />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-slate-100">
                  <button className="group relative overflow-hidden flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl transition-all shadow-2xl hover:bg-orange-600 hover:shadow-orange-500/20 active:scale-95 w-full sm:w-auto justify-center">
                    <span className="relative z-10 uppercase tracking-widest text-sm">Reserve Your Spot</span>
                    <ArrowUpRight size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  <p className="text-slate-400 text-xs font-bold italic text-center sm:text-left">
                    Limited slots available <br className="hidden sm:block" /> for upcoming cohort
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
import React from 'react';
import { Heart, ShieldCheck, UserCheck, Activity, ArrowRight, Check } from 'lucide-react';

const CorporateWellness = () => {
  const programs = [
    {
      title: "Preventive Care",
      desc: "Prioritizing health before issues arise",
      icon: <Heart size={24} />,
      accent: "border-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Personalized Solutions",
      desc: "Tailored plans for individual needs",
      icon: <UserCheck size={24} />,
      accent: "border-slate-300",
      bg: "bg-slate-50"
    },
    {
      title: "Expert Guidance",
      desc: "Trusted insights for professionals",
      icon: <ShieldCheck size={24} />,
      accent: "border-slate-300",
      bg: "bg-slate-50"
    },
    {
      title: "Condition Management",
      desc: "Effective tools for chronic conditions",
      icon: <Activity size={24} />,
      accent: "border-slate-300",
      bg: "bg-slate-50"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & Action */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-xs font-black uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Corporate Partnership
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-8">
              Corporate Wellness <br />
              <span className="text-orange-500  font-light">Programs</span>
            </h2>
            
            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-10 max-w-xl">
              Designed for leaders committed to building a workplace where health isn't a cost, 
              but a foundation that drives creativity, productivity, and satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-orange-500 transition-all shadow-xl group">
                LEARN MORE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all">
                BOOK A CALL
              </button>
            </div>
          </div>

          {/* Right Side: Interactive Program Stack */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl -z-10" />
            
            <div className="grid gap-4">
              {programs.map((item, index) => (
                <div 
                  key={index} 
                  className={`group relative p-8 rounded-[2rem] border-2 transition-all duration-500 hover:scale-[1.02] ${
                    index === 0 
                      ? "bg-white border-orange-500 shadow-2xl shadow-orange-500/10" 
                      : "bg-white border-slate-100 hover:border-orange-200 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                        index === 0 ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-500"
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 font-medium text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Checkmark indicator */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      index === 0 ? "bg-orange-500 text-white" : "bg-slate-100 text-transparent group-hover:text-slate-300"
                    }`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateWellness;
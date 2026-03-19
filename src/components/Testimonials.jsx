import React, { useState, useEffect } from 'react';
import { Quote, Star, ArrowRight, ArrowLeft, ArrowRightIcon } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Shashi Singh (USA)",
      role: "Signature Wellness Member",
      initials: "SS",
      content: "Diagnosed with Ulcerative Colitis in March 2022, I joined the 3-month You Care Gut Health Program. At that point, I had lost 16 pounds, was unable to eat properly, and was in the worst phase. A recent colonoscopy revealed my colon fully healed, with no inflammation.",
    },
    {
      id: 2,
      name: "Satish",
      role: "Corporate Program Participant",
      initials: "S",
      content: "At 29, half my life was marked by Psoriasis. The program worked wonders, healing my skin, and within 3 months, I was 95% patch-free. While the program concluded, my journey is just beginning!",
    },
    {
      id: 3,
      name: "Viral Patel",
      role: "Hormonal Health Program",
      initials: "VP",
      content: "During the program, I have lost 25+ Lbs, 14+ inches, self-doubt, and gained a better understanding of my gut and overall health. Also, I am slowly losing stubborn fat, which I never thought I could.",
    },
    {
      id: 4,
      name: "Divakar Shetty",
      role: "Cancer Care Support",
      initials: "DS",
      content: "My 76-year-old dad battled Stage 3 Non-Hodgkin’s Mantel Cell Lymphoma, enduring 5 chemo sessions and twice contracting COVID. Today, the oncologist declared him in remission, skipping the 6th cycle.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Static Branding & Navigation */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Quote size={14} fill="currentColor" /> Community Voices
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Real Stories, <br />
                <span className="text-orange-500 font-light ">Real Results</span>
              </h2>
            </div>

            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">
              Impactful journeys of healing and recovery shared by our global community.
            </p>

            {/* Navigation & Counter */}
            <div className="flex items-center gap-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      current === i ? "w-8 bg-orange-500" : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-slate-400 font-black text-sm tracking-widest">
                0{current + 1} / 0{testimonials.length}
              </span>
            </div>

            <button className="hidden lg:flex items-center gap-3 text-slate-900 font-black hover:text-orange-500 transition-colors group">
              VIEW ALL SUCCESS STORIES 
              <ArrowRightIcon size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Side: Sliding Magazine Cards */}
          <div className="lg:col-span-7 relative">
            {/* Artistic Quote Mark Background */}
            <div className="absolute -top-20 -right-10 text-slate-100 -z-0">
               <Quote size={300} fill="currentColor" />
            </div>

            <div className="relative z-10 h-[500px] md:h-[450px]">
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    index === current 
                      ? "opacity-100 translate-x-0 scale-100 z-20" 
                      : index < current 
                        ? "opacity-0 -translate-x-full scale-90 z-0" 
                        : "opacity-0 translate-x-full scale-90 z-0"
                  }`}
                >
                  <div className="bg-white h-full p-10 md:p-14 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between">
                    
                    <div className="space-y-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="text-orange-500" fill="currentColor" />
                        ))}
                      </div>
                      
                      <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed line-clamp-6 md:line-clamp-none">
                        “{t.content}”
                      </p>
                    </div>

                    <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-slate-900/20">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900">{t.name}</h4>
                        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <button className="lg:hidden mt-12 w-full flex items-center justify-center gap-3 py-5 bg-slate-900 text-white font-black rounded-2xl">
              VIEW ALL SUCCESS STORIES
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
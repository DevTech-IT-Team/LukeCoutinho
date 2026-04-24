import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowRight, ArrowLeft } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Shashi Singh (USA)",
      role: "Signature Wellness",
      initials: "SS",
      content: "Diagnosed with Ulcerative Colitis, I joined the Gut Health Program. My recent colonoscopy revealed my colon fully healed, with no inflammation.",
    },
    {
      id: 2,
      name: "Satish",
      role: "Corporate Executive",
      initials: "S",
      content: "At 29, half my life was marked by Psoriasis. The program worked wonders, and within 3 months, I was 95% patch-free.",
    },
    {
      id: 3,
      name: "Viral Patel",
      role: "Hormonal Balance",
      initials: "VP",
      content: "I lost 25+ lbs and gained a profound understanding of my overall health. Stubborn fat is finally disappearing.",
    },
    {
      id: 4,
      name: "Divakar Shetty",
      role: "Cancer Support",
      initials: "DS",
      content: "My 76-year-old dad battled Stage 3 Lymphoma. Today, he is in remission, skipping his final chemo cycle.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-40 px-6 bg-[#FFFEFC] overflow-hidden relative">
      
      {/* Artistic Overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          
          {/* Header & Nav */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-orange-100/50 rounded-full text-orange-600"
            >
              <Quote size={18} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Community Impact</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              Voices of <br />
              <span className="text-orange-500 italic font-light">Transformation.</span>
            </motion.h2>

            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-sm">
              Real stories from our global family, showcasing the power of integrative healing.
            </p>

            <div className="flex items-center gap-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrent(i)}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      current === i ? "w-12 bg-orange-500" : "w-4 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-slate-300 font-black text-sm tracking-widest">
                0{current + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Cards Showcase */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white h-full p-12 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col justify-between group">
                  
                  <div className="space-y-8">
                    <div className="flex gap-1.5 text-orange-500">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    
                    <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight italic">
                      “{testimonials[current].content}”
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-12 border-t border-slate-50">
                    <div className="w-20 h-20 rounded-3xl bg-slate-950 flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:bg-orange-500 transition-colors">
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900">{testimonials[current].name}</h4>
                      <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]">{testimonials[current].role}</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
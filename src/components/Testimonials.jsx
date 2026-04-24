import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shashi Singh",
      meta: "USA | Signature Wellness",
      content: "Diagnosed with Ulcerative Colitis, I joined the Gut Health Program. My recent colonoscopy revealed my colon fully healed.",
      pos: "top-0 right-[15%]",
      delay: 0.1
    },
    {
      id: 2,
      name: "Satish",
      meta: "Corporate Executive",
      content: "At 29, half my life was marked by Psoriasis. The program worked wonders, and within 3 months, I was 95% patch-free.",
      pos: "top-[25%] right-[40%]",
      delay: 0.3
    },
    {
      id: 3,
      name: "Viral Patel",
      meta: "Hormonal Balance",
      content: "I lost 25+ lbs and gained a profound understanding of my overall health. Stubborn fat is finally disappearing.",
      pos: "bottom-[5%] right-[25%]",
      delay: 0.5
    },
    {
      id: 4,
      name: "Divakar Shetty",
      meta: "Cancer Support",
      content: "My 76-year-old dad battled Stage 3 Lymphoma. Today, he is in remission, skipping his final chemo cycle.",
      pos: "bottom-[20%] right-0",
      delay: 0.7
    }
  ];

  return (
    <section className="py-40 bg-white overflow-hidden relative min-h-[900px]">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#F97316_0%,_transparent_70%)] blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10 h-full">
        <div className="grid lg:grid-cols-12 gap-24 h-full items-center">
          
          {/* Left Panel: Narrative */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                 <div className="h-[2px] w-12 bg-orange-500" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Universal Success</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[1] tracking-tighter">
                 Hundreds of <br />
                 <span className="text-orange-500 font-light italic lowercase serif">Happy Seekers.</span>
              </h2>

              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-sm">
                Several of them we asked how satisfied they are with our clinical modules. Here are their statement of transformation...
              </p>
            </div>

            <button className="px-12 py-5 border-2 border-orange-500 text-orange-600 font-black rounded-full hover:bg-orange-500 hover:text-white transition-all uppercase tracking-widest text-[10px] flex items-center gap-4 group">
               Want to become our next success story? <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Panel: Scattered Floating Cards */}
          <div className="lg:col-span-7 relative h-[700px] hidden lg:block">
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 1 }}
                whileHover={{ y: -5, zIndex: 50, scale: 1.05 }}
                className={`absolute ${item.pos} w-[340px] bg-white p-8 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-slate-50 transition-all cursor-pointer`}
              >
                {/* Quote Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
                   <Quote size={20} fill="currentColor" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 leading-none">{item.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium tracking-tight mt-1">{item.meta}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {item.content}
                </p>

                <div className="flex gap-1 text-orange-400 mt-6">
                   {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel fallback would go here or just stack them */}
          <div className="lg:hidden grid grid-cols-1 gap-8">
             {testimonials.map((item) => (
               <div key={item.id} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
                  <p className="text-lg text-slate-600 font-medium italic">"{item.content}"</p>
                  <div className="mt-6 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white font-black">{item.name.charAt(0)}</div>
                     <span className="text-sm font-bold">{item.name}</span>
                  </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
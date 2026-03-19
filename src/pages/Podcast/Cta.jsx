import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import img from '../../assets/cta.png'

const NewsletterCTA = () => {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-orange-50/50 rounded-[4rem] overflow-hidden border-4 border-orange-100 flex flex-col md:flex-row items-center">
          
          {/* Content Side */}
          <div className="p-12 md:p-20 md:w-2/3 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Stay Connected. <br/>
                <span className="text-orange-500   lowercase font-light text-6xl">Stay Aligned.</span>
              </h2>
              <p className="text-gray-500 font-medium max-w-md leading-relaxed">
                Be the first to receive Luke's latest guidance on wellness, healing, and conscious living—straight to your inbox. Thoughtfully written. Never overwhelming. Always rooted in purpose.
              </p>
            </div>

            <form className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-white border border-gray-200 rounded-2xl py-5 px-8 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-8 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-500 transition-all flex items-center gap-2">
                Subscribe <Send size={14} />
              </button>
            </form>
          </div>

          {/* Image Side - Luke Portrait */}
          <div className="md:w-1/3 h-full self-end relative pt-12 md:pt-0">
             <img 
               src={img}
               alt="Luke" 
               className="w-full h-auto object-contain brightness-110 "
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
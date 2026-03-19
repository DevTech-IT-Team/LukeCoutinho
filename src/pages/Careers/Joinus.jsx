import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';

const JoinTeamLuke = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- MAIN CTA CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gray-50 rounded-[3.5rem] p-10 md:p-20 overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50"
        >
          {/* Subtle Orange Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-400/80 rounded-full blur-[200px]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-500/50 rounded-full blur-[200px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                If You’re Driven to Excel, <br/>
                <span className="text-orange-500  lowercase font-light">We’re Ready for You.</span>
              </h2>
              
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                Be part of something extraordinary—a team handpicked to bring out the best in each other and those we serve. 
                This is a journey of growth, impact, and purpose that only comes once in a lifetime.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <button className="group bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-orange-600 transition-all shadow-lg shadow-gray-900/10">
                  Join Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center gap-3 text-slate-900 font-bold group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:text-orange-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">info@lukecoutinho.com</span>
                </div>
              </div>
            </div>

            {/* Side Branding Box */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="w-full aspect-square max-w-[280px] bg-white rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center p-8 text-center gap-4">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-2">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-black text-slate-900 uppercase tracking-tighter text-lg leading-tight">
                  A Safe & <br/>Inclusive Space
                </h4>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">
                  Proudly POSH Act <br/> Compliant
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- POSH FOOTER NOTE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-medium text-sm">
            Join our team and grow in a safe, inclusive environment—proudly compliant with the 
            <span className="text-slate-900 font-bold mx-1">Prevention of Sexual Harassment (POSH) Act, 2013.</span>
            <a href="#" className="text-orange-500 border-b border-orange-200 hover:border-orange-500 transition-all ml-1">Learn more here.</a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default JoinTeamLuke;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Heart, Globe, Target, Sparkles, 
  ArrowUpRight, Quote, ShieldCheck, Users,
  Gem, Compass, Leaf
} from 'lucide-react';
import heroImg from '../../assets/Lukequotecareer.png'; 
import philosophyImg from '../../assets/career1.jpg'; 
import teamLukeImg from '../../assets/imluke.png'; 

const CareerOpportunities = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.8 }}
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-[#F8F9FA]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <span className="inline-block bg-orange-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-2xl">
              Global Movement in Wellness
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] uppercase">
              Join Team <br/>
              <span className="text-orange-500 italic font-light lowercase">Luke</span>
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              A Journey Towards Growth, Wellness, and Purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: OUR PHILOSOPHY (Text Left, Image Right) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange-500"></span>
              <h2 className="text-[10px] font-black uppercase tracking-widest text-orange-600">Our Philosophy</h2>
            </div>
            <h3 className="text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              A Career is <span className="text-orange-600 italic font-serif">More</span> Than a Role.
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our work extends far beyond job titles, leading a movement in holistic healthcare and well-being that impacts lives worldwide. This is a rare opportunity for those driven to make a meaningful difference.
            </p>
            <div className="bg-slate-100 p-8 rounded-[2.5rem] border-l-4 border-orange-500">
              <p className="text-slate-700 font-bold leading-relaxed italic">
                "Finding the right fit is a two-way street. Instead of listing positions, we’d like to get to know you."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-orange-200 rounded-[3rem] rotate-3 -z-10" />
            <img 
              src={philosophyImg} 
              alt="Luke Coutinho Philosophy" 
              className="rounded-[3rem] shadow-2xl w-full object-cover h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: WHAT IT MEANS (Image Left, Text Right) --- */}
      <section className="py-14 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src={teamLukeImg} 
                alt="Part of Team Luke" 
                className="rounded-[3rem] shadow-2xl w-full object-cover h-[600px]"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                What It Means to Be <br/>
                <span className="text-orange-500">Part of Team Luke?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Being part of Team Luke means stepping into a role with purpose. Luke handpicks his team, selecting the best minds and hearts united by a commitment to integrative healthcare.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Gem size={18}/>, text: "Culture of Empathy & Integrity" },
                  { icon: <Compass size={18}/>, text: "Global Mission of Healing" },
                  { icon: <Leaf size={18}/>, text: "Excellence in Integrative Healthcare" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-orange-500">{item.icon}</div>
                    <span className="text-sm font-bold text-slate-800 uppercase tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP VOICES (Redesigned with Signature Style) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Leadership Voices</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Luke's Card */}
          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
            <Quote className="absolute top-8 right-8 text-orange-500/10 group-hover:text-orange-500/20 transition-colors" size={120} />
            <p className="text-slate-600 text-xl leading-relaxed italic relative z-10 mb-8">
              “Every member of our team is a vital part of our mission to inspire health and wellness; we are deeply committed to extending the ripple effect of care.”
            </p>
            <div>
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-lg">Luke Coutinho</h4>
              <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">Founder</p>
            </div>
          </div>

          {/* Natashya's Card */}
          <div className="bg-slate-900 p-12 rounded-[4rem] shadow-xl relative overflow-hidden group">
            <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors" size={120} />
            <p className="text-slate-300 text-xl leading-relaxed italic relative z-10 mb-8">
              "We’re not just colleagues—we’re a family. We support one another, champion each other's successes, and embrace challenges together with kindness."
            </p>
            <div>
              <h4 className="font-black text-white uppercase tracking-widest text-lg">Natashya Phillips</h4>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">Leadership Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      {/* <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-orange-600 rounded-[4rem] p-10 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-200">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Start Your Journey <br/>With Us
            </h2>
            <p className="text-orange-100 text-lg opacity-90 max-w-xl mx-auto">
              Write to us and tell us about your passion. We’ll get back to you at the earliest.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:talent@lukecoutinho.com" 
              className="inline-flex items-center gap-4 bg-white text-orange-600 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-slate-900 hover:text-white transition-all"
            >
              talent@lukecoutinho.com <ArrowUpRight size={20} />
            </motion.a>
          </div>
          <Globe className="absolute -bottom-20 -right-20 text-white opacity-10 w-[400px] h-[400px]" />
        </div>
      </section> */}

    </div>
  );
};

export default CareerOpportunities;
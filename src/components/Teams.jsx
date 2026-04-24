import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Info, ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';
import img1 from '../assets/KrutiJain.jpg';
import img2 from '../assets/PurnimaPatil.jpg';
import img3 from '../assets/SushmithaReddy.jpg';
import img4 from '../assets/KrutiRathore.jpg';
import img5 from '../assets/wp.avif';

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { name: "Kruti Jain", role: "Senior Nutritionist", image: img1 },
    { name: "Purnima Patil", role: "Senior Nutritionist", image: img2 },
    { name: "Sushmitha S Reddy", role: "Nutritionist", image: img3 },
    { name: "Kruti Rathore", role: "Nutritionist", image: img4 },
    { name: "Palak Beriwala", role: "Senior Nutritionist", image: img5 },
    { name: "Neha Morche", role: "Senior Nutritionist", image: img5 },
    { name: "Sakina Sanchawala", role: "Senior Nutritionist", image: img5 },
    { name: "Charmi Gala", role: "Head Nutritionist", image: img5 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= teamMembers.length / 4 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? Math.ceil(teamMembers.length / 4) - 1 : prev - 1));
  };

  return (
    <section className="py-40 bg-white overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-slate-50 rounded-full border border-slate-100"
            >
              <Users size={18} className="text-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Clinical Leadership</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              The Experts behind <br />
              <span className="text-orange-500 italic font-light">Every Success.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl"
            >
              A multidisciplinary team of dedicated practitioners committed to your evolution through integrative nutritional science.
            </motion.p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-16 h-16 rounded-2xl border border-slate-200 text-slate-400 hover:border-slate-950 hover:text-slate-950 transition-all flex items-center justify-center active:scale-95 group"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-16 h-16 rounded-2xl bg-slate-950 text-white hover:bg-orange-500 transition-all shadow-2xl flex items-center justify-center active:scale-95 group"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Sliding Grid Container */}
        <div className="relative overflow-hidden mb-24">
          <motion.div 
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex"
          >
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-w-full">
                {teamMembers.slice(groupIndex * 4, groupIndex * 4 + 4).map((member, i) => (
                  <TeamCard key={i} member={member} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Action Blocks */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 glass rounded-[3rem] border border-orange-100/50 bg-gradient-to-br from-white to-orange-50/20 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
               <UserPlus size={32} />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tighter">Strategic Consultation</h4>
              <p className="text-slate-500 font-medium">Personalized guidance with our clinical experts to map your journey.</p>
              <button className="text-orange-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
                Book Assignment <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 glass rounded-[3rem] border border-slate-100/50 bg-gradient-to-br from-white to-slate-50/50 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center text-white shrink-0">
               <Info size={32} />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tighter">Clinical Excellence</h4>
              <p className="text-slate-500 font-medium">Learn more about our rigorous standards and integrative approach.</p>
              <button className="text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
                Our Methodology <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative"
  >
    <div className="overflow-hidden rounded-[3.5rem] bg-slate-100 aspect-[4/5] relative shadow-2xl shadow-slate-200/50">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-110"
      />
      
      {/* Glass Content Overlay */}
      <div className="absolute inset-x-4 bottom-4 p-8 glass-dark rounded-[2.5rem] backdrop-blur-2xl border border-white/10 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
        <h4 className="text-white text-2xl font-black tracking-tight leading-none mb-2">{member.name}</h4>
        <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
        
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/50 group-hover:text-white transition-colors">
          <span className="text-[10px] font-black uppercase tracking-widest">Available</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default TeamSection;
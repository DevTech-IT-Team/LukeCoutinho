import React, { useState } from 'react';
import { Users, UserPlus, Info, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import img1 from '../assets/KrutiJain.jpg';
import img2 from '../assets/PurnimaPatil.jpg';
import img3 from '../assets/SushmithaReddy.jpg';
import img4 from '../assets/KrutiRathore.jpg';
import img5 from '../assets/wp.avif';

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { name: "Kruti Jain", role: "Senior Nutritionist & Lifestyle Expert", image:img1 },

    { name: "Purnima Patil", role: "Senior Nutritionist & Lifestyle Expert", image:img2 },


    { name: "Sushmitha S Reddy", role: "Nutritionist & Lifestyle Expert", image:img3 },


    { name: "Kruti Rathore", role: "Nutritionist and Lifestyle Expert", image:img4 },


    { name: "Palak Beriwala", role: "Senior Nutritionist & Lifestyle Expert", image: img5 },


    { name: "Neha Morche", role: "Senior Nutritionist", image: img5 },

    { name: "Sakina Sanchawala", role: "Senior Nutritionist & Lifestyle Expert", image:img5 },

     { name: "Charmi Gala", role: "Head Nutritionist & Lifestyle Expert Vertical Head-Pregnancy, Sattvik, Rejuvenation & Cleanse", image: img5},
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= teamMembers.length / 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? Math.ceil(teamMembers.length / 2) - 1 : prev - 1));
  };

  return (
    <section className="py-18 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-orange-500 mb-6">
              <Users size={20} />
              <span className="text-sm font-black uppercase tracking-[0.3em]">Our Experts</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Meet Our Dedicated <br />
              <span className="text-orange-500 font-light ">Nutrition Experts</span>
            </h2>
            <p className="mt-6 text-slate-500 text-lg leading-relaxed">
              Our team is committed to a simple mission – improving lives through nutrition. With expertise and a passion for well-being, we aim to positively impact your health journey. Join us as we guide you towards a healthier, happier life through nutritional support for you.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-2xl border-2 border-slate-100 text-slate-400 hover:border-slate-900 hover:text-slate-900 transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-2xl bg-slate-900 text-white hover:bg-orange-500 transition-all shadow-xl active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Sliding Grid Container */}
        <div className="relative overflow-hidden mb-20">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* The 8 members split into groups of 4 on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0">
              {teamMembers.slice(0, 4).map((member, i) => <TeamCard key={i} member={member} />)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0">
              {teamMembers.slice(4, 8).map((member, i) => <TeamCard key={i} member={member} />)}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-max flex items-center justify-center gap-3 px-12 py-6 bg-slate-900 text-white font-black rounded-2xl hover:bg-orange-500 transition-all shadow-[0_20px_40px_rgba(15,23,42,0.2)] active:scale-95 group">
            <UserPlus size={20} />
            CONSULT WITH TEAM
          </button>
          <button className="w-full sm:w-max flex items-center justify-center gap-3 px-12 py-6 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-2xl hover:border-slate-900 transition-all active:scale-95">
            <Info size={20} />
            KNOW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

/* Individual Team Card Component */
const TeamCard = ({ member }) => (
  <div className="group relative">
    <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/5] relative shadow-lg">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
      />
      {/* Name Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
        <h4 className="text-white text-xl font-black">{member.name}</h4>
        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
        
        <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-white text-[10px] font-black tracking-tighter opacity-0 group-hover:opacity-100 transition-all">
          BOOK A CONSULTATION <ArrowRight size={12} />
        </div>
      </div>
    </div>
  </div>
);

export default TeamSection;
import React from 'react';
import lukeimg from '../../../assets/Lukequote.png';

const AboutLukeRedesign = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          
          {/* Left Side: Content Block */}
          <div className="w-full lg:w-3/5 bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-slate-100 flex flex-col justify-center">
            {/* Minimalist Accent */}
            <div className="w-16 h-1.5 bg-orange-500 mb-8 rounded-full" />
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">
              About <span className="text-orange-500">Luke</span> Coutinho
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p className="font-bold text-slate-800 text-xl">
                Meet Luke Coutinho. A Wellness Champion for Prime Minister Narendra Modi's Fit India Movement, Luke practices integrative and lifestyle medicine.
              </p>

              <p>
                Over the last 13 years, his You Care Wellness Program has had great success in handling conditions from cancer to diabetes, Alzheimer's, fat loss, hormonal imbalances, cardiovascular, autoimmune disorders, and other rare metabolic syndromes.
              </p>

              <p>
                His unique and holistic approach helps people transform their lifestyles by working with their medical teams, going beyond the symptoms to address the root causes and improving the quality of life moving forward.
              </p>

              <p>
                A recipient of numerous national and international awards, Luke has authored five bestsellers, including the latest gem – <span className="text-slate-900 font-bold italic">Small Wins Every Day</span>.
                Luke continues to train, learn, and travel the world, meeting patients and speaking at events to empower people to build their most extraordinary lives.
              </p>
            </div>
          </div>

          {/* Right Side: Image Block */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
              {/* Image with subtle overlay */}
              <img 
                src={lukeimg}
                alt="Luke Coutinho" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Dynamic Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-100">
                <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">Impact focus</p>
                <p className="text-slate-900 font-bold leading-tight">Empowering lives through integrative health.</p>
              </div>
            </div>
            
            {/* Small Footer Card */}
            <div className="bg-orange-500 p-8 rounded-[2.5rem] text-white flex items-center justify-between">
              <div>
                <p className="text-3xl font-black">13+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Experience</p>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <p className="text-3xl font-black">5</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Bestselling Books</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutLukeRedesign;
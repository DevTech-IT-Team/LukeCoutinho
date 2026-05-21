import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import wellness from '../../../assets/wellness.jpg'
import lukeImg from '../../../assets/Lukequotenew.jpg'
import ExclusiveWellness from '../../../assets/ExclusiveWellness.jpg'


export default function ProgramSelector() {
  return (
    <section className="relative bg-[#fafafa] py-24 lg:py-32 overflow-hidden antialiased text-gray-800">

      {/* Ambient Background Glow Layer matching corporate orange/gray palette */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-gray-200/50 rounded-full blur-[110px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header Text Area */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-orange-500 rounded-full"></span>
            <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">
              Take Action Today
            </span>
            <span className="w-8 h-[2px] bg-orange-500 rounded-full"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.05]">
            Ready to unlock the potential of personalized care <br />
            and expert guidance from Luke <span className="text-orange-500 italic">and our team?</span>
          </h2>
          <p className="text-gray-500 font-medium text-base sm:text-lg max-w-2xl mx-auto pt-2 tracking-tight">
            Explore our Signature Wellness Programs and find the right fit for your long-term health trajectory.
          </p>
        </div>

        {/* Offerings Two-Column Card Grid Stack */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Card 1: Standard Signature Wellness Program */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-900/[0.04] transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1.5">
            <div>
              {/* Card Image Area with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                  src={wellness}
                  alt="Unified wellness balancing tracking"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200/60 text-[10px] font-bold uppercase tracking-widest text-gray-700 shadow-sm">
                  Signature Pathway
                </div>
              </div>

              {/* Card Narrative Content Area */}
              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  Explore Program
                </h3>
                <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed tracking-tight">
                  All your health goals. One solution. Guided by 150+ years of collective expertise across life stages. This adaptable master program is built around you—whether it’s weight management, hormone stabilization, or systemic metabolic correction.
                </p>
              </div>
            </div>

            {/* Action Container Floor */}
            <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-2">
              <Link
                to="/programs/signature-wellness/standard"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gray-950 hover:bg-orange-500 text-white hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-gray-950/10"
              >
                <span className="text-white">Explore Program</span>
                <ArrowUpRight size={14} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Card 2: Exclusive Premium Program with Luke */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-900/[0.04] transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1.5">
            <div>
              {/* Card Image Area with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                  src={ExclusiveWellness}
                  alt="Premium one on one movement lifestyle guidance"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 bg-orange-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm flex items-center gap-1.5">
                  <Sparkles size={10} strokeWidth={3} />
                  <span>Elite 1-on-1 Guidance</span>
                </div>
              </div>

              {/* Card Narrative Content Area */}
              <div className="p-8 sm:p-10 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  Exclusive Program with Luke
                </h3>
                <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed tracking-tight">
                  Looking for an opportunity to work with Luke directly on your health goals? Experience a truly premium healthcare plan designed by Luke Coutinho himself alongside our specialized team of clinical experts. Each protocol is uniquely tuned to your biological realities.
                </p>
              </div>
            </div>

            {/* Action Container Floor */}
            <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-2">
              <Link
  to="/programs/signature-wellness/exclusive"
  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gray-950 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-gray-950/10"
>
  <span className="text-white">Explore Program</span>
  <ArrowUpRight size={14} className="text-white" />
</Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
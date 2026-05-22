import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import DualPathCTA from '../../../components/conversion/DualPathCTA';
import { REVENUE_STREAMS } from '../../../config/revenueStreams';
import wellness from '../../../assets/wellness.jpg'
import lukeImg from '../../../assets/Lukequotenew.jpg'
import ExclusiveWellness from '../../../assets/ExclusiveWellness.jpg'


const enrollProgram = (navigate, program) => {
  navigate('/payment', {
    state: {
      consult: {
        serviceId: program.id,
        serviceTitle: program.title,
        optionTitle: program.subtitle,
        label: program.title,
        price: program.price,
        priceValue: program.priceValue,
        mode: 'Program',
        duration: 'Ongoing',
      },
    },
  });
};

export default function iProgramSelector() {
  const navigate = useNavigate();

  const teamProgram = {
    id: 'signature-team',
    title: 'Signature Wellness — With Team',
    subtitle: 'Guided by Luke\'s integrative team',
    price: 'Upon consultation',
    priceValue: null,
  };

  const lukeProgram = {
    id: 'signature-luke',
    title: 'Signature Wellness — With Luke',
    subtitle: 'Exclusive program with Luke',
    price: 'Upon consultation',
    priceValue: null,
  };

  return (
    <section className="relative bg-[#fafafa] py-24 lg:py-32 overflow-hidden antialiased text-gray-800">

      {/* Ambient Background Glow Layer matching corporate orange/gray palette */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-gray-200/50 rounded-full blur-[110px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header Text Area (condensed + interactive CTA) */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-orange-500 rounded-full"></span>
            <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">
              Take Action Today
            </span>
            <span className="w-8 h-[2px] bg-orange-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Unlock personalized, long-term health with Luke and our team
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base max-w-2xl mx-auto pt-1 tracking-tight">
            Explore the Signature Wellness paths tailored to your goals — concise, actionable, and rooted in outcomes.
          </p>

          {/* Prominent, interactive dual-path CTA placed near the top after 1 section */}
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="lc-dual-path__pulse-dot" aria-hidden="true" />
              <span className="text-sm font-bold text-orange-500">Featured — Start here</span>
            </div>

            <div className="flex justify-center">
              <DualPathCTA
                stream={REVENUE_STREAMS.programs}
                primaryHref="/programs/signature-wellness/standard"
                primaryLabel="Explore programs"
                secondaryHref="/book-consult"
                secondaryLabel="Book a consultation"
                className="lc-dual-path--prominent mx-auto w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

        {/* Offerings Two-Column Card Grid Stack */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Card 1: Standard Signature Wellness Program */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-900/[0.04] transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1.5">
            <div>
              {/* Card Image Area with Zoom Effect */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-50 border-b border-gray-100">
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
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  Explore Program
                </h3>
                <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed tracking-tight">
                  All your health goals. One solution. Guided by 150+ years of collective expertise across life stages. This adaptable master program is built around you—whether it’s weight management, hormone stabilization, or systemic metabolic correction.
                </p>
              </div>
            </div>

            {/* Action Container Floor */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex flex-col gap-3">
              <DualPathCTA
                stream={REVENUE_STREAMS.programs}
                primaryLabel="Enroll now"
                onPrimaryClick={() => enrollProgram(navigate, teamProgram)}
                className="lc-dual-path--card"
                secondaryLabel="Talk to our team"
                secondaryHref="/book-consult?path=expert"
                secondaryHint="Human-assisted · 24–48h callback"
              />
              <Link
                to="/programs/signature-wellness/standard"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-gray-200 text-gray-700 hover:border-orange-500 font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                Explore details
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2: Exclusive Premium Program with Luke */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-900/[0.04] transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1.5">
            <div>
              {/* Card Image Area with Zoom Effect */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-50 border-b border-gray-100">
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
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  Exclusive Program with Luke
                </h3>
                <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed tracking-tight">
                  Looking for an opportunity to work with Luke directly on your health goals? Experience a truly premium healthcare plan designed by Luke Coutinho himself alongside our specialized team of clinical experts. Each protocol is uniquely tuned to your biological realities.
                </p>
              </div>
            </div>

            {/* Action Container Floor */}
            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex flex-col gap-3">
              <DualPathCTA
                stream={REVENUE_STREAMS.programs}
                primaryLabel="Enroll now"
                onPrimaryClick={() => enrollProgram(navigate, lukeProgram)}
                className="lc-dual-path--card"
                secondaryLabel="Join Luke's waitlist"
                secondaryHref="/book-consult?path=waitlist"
                secondaryHint="Personal consultation with Luke"
              />
              <Link
                to="/programs/signature-wellness/exclusive"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-gray-200 text-gray-700 hover:border-orange-500 font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                Explore details
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
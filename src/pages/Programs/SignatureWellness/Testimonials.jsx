import React, { useState } from 'react';
import { Quote, MessageSquare } from 'lucide-react';
// Import your local image asset from your project directory
import lukeImg from '../../../assets/Lukequotenew.jpg'

export default function TestimonialAndInsight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "During the program, I have lost 25+ Lbs, 14+ inches, self-doubt, and gained a better understanding of my gut and overall health. Also, I am slowly losing stubborn fat, which I never thought I could.",
      author: "Viral Patel"
    },
    {
      quote: "This holistic approach completely rewired my sleep cycles and energy levels. The focus on everyday foundational changes made it sustainable rather than feeling like a restrictive diet.",
      author: "Ananya Sharma"
    },
    {
      quote: "Addressing the root causes rather than just chasing and suppressing symptoms changed my entire perspective on medical recovery. Truly invaluable coaching.",
      author: "Marcus Vance"
    },
    {
      quote: "The constant structural guidance from my assigned wellness coach gave me my confidence back. My biomarkers have dropped significantly over the past 12 weeks.",
      author: "Rohan Malhotra"
    }
  ];

  return (
    <section className="relative bg-white py-24 lg:py-18 overflow-hidden antialiased text-gray-800">
      
      {/* Soft Ambient Background Elements aligned with the gray/orange system */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/[0.04] rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gray-50 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* PART 1: Testimonial of the Week Slider Component */}
        <div className="text-center max-w-3xl mx-auto space-y-10 min-h-[340px] flex flex-col justify-between mb-10 lg:mb-36">
          
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-orange-500 rounded-full"></span>
              <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">
                Transformation Spotlight
              </span>
              <span className="w-6 h-[2px] bg-orange-500 rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              Testimonial of the Week
            </h2>
          </div>

          {/* Active Sliding Text Frame Container */}
          <div className="relative px-4 sm:px-12 transition-all duration-500 ease-in-out">
            <p className="text-gray-600 font-medium text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto tracking-tight">
              "{testimonials[currentSlide].quote}"
            </p>
            <h4 className="mt-6 text-gray-950 font-bold tracking-wider text-xs sm:text-sm uppercase flex items-center justify-center gap-2">
              <span className="w-3 h-px bg-gray-300"></span>
              {testimonials[currentSlide].author}
              <span className="w-3 h-px bg-gray-300"></span>
            </h4>
          </div>

          {/* Interactive Slider Pagination Dots */}
          <div className="flex items-center justify-center space-x-3 pt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all duration-500 rounded-full focus:outline-none ${
                  currentSlide === idx 
                    ? "w-10 bg-orange-500" 
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Secondary Global Action Trigger Callout */}
          <div className="pt-2">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-orange-500 text-gray-800 hover:text-white bg-transparent hover:bg-orange-500 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm">
              <MessageSquare size={14} />
              <span>View More Success Stories</span>
            </button>
          </div>

        </div>

        {/* PART 2: Luxury Founder Insight Quote Banner Block */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-900/[0.02]">
          
          {/* Beautiful crisp-hued minimal fluid layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 -z-10" />
          
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
            
            {/* Quote Body Narrative Content Block */}
            <div className="md:col-span-8 space-y-4 relative">
              <Quote size={40} className="text-orange-500/20 absolute -top-6 -left-2 pointer-events-none" strokeWidth={1.5} />
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium tracking-tight pt-4">
                "Our bodies have a super intelligent way of communicating with us, giving us cues when something is wrong within. But we treat symptoms as the problem and try to suppress them with quick fixes. Instead of only popping a pill, try to address the root cause!"
              </p>
              
              <div className="pt-2">
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.15em]">
                  — Clinical Philosophy Guidance
                </span>
              </div>
            </div>

            {/* Founder Identification Card Avatar Column Group */}
            <div className="md:col-span-4 flex flex-row md:flex-col items-center justify-start md:justify-center text-left md:text-center border-t md:border-t-0 md:border-l border-gray-200/70 pt-6 md:pt-0 md:pl-8 space-x-4 md:space-x-0">
              
              {/* Premium Rounded Corporate Avatar Shadow System */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md shadow-gray-900/5 border-2 border-white bg-gray-100 flex-shrink-0 md:mb-4">
                <img 
                  src={lukeImg} 
                  alt="Luke Coutinho portrait" 
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>
              
              <div className="space-y-0.5">
                <h3 className="text-lg font-black text-gray-900 tracking-tight">
                  Luke Coutinho
                </h3>
                <p className="text-[10px] font-bold tracking-widest text-orange-500 uppercase">
                  Founder & CEO
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
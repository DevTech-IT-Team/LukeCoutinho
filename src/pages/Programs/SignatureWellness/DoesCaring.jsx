import React from 'react';
import { UserCheck, Compass, FileText, ArrowRight } from 'lucide-react';

export default function DoesCaring() {
  return (
    <section className="relative bg-white py-24 lg:py-24 overflow-hidden antialiased text-gray-800">
      
      {/* Ambient Background Accents adhering to the gray/orange palette */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gray-100/70 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* PART 1: Intro Split Layer */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-14 lg:mb-40">
          
          {/* Left Column: Copywriting Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-orange-500 rounded-full"></span>
                <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">Value Creation</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.05]">
                How Does Our Signature <br />
                Wellness Program Add Value <br />
                to <span className="text-orange-500 italic">Your Journey?</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-500 text-base sm:text-lg leading-relaxed font-medium max-w-2xl">
              <p>
                Unlike generic plans, our programs are meticulously crafted with the utmost care. The personalized tracks provided to you are curated exclusively after analyzing your complete medical timeline and metabolic history.
              </p>

              {/* Refined Highlighted Strip */}
              <div className="border-l-4 border-orange-500 bg-gray-50 p-6 rounded-r-3xl my-6">
                <p className="text-gray-900 font-bold text-lg sm:text-xl leading-snug">
                  A signature wellness program isn’t a promise of a temporary cure but a structural <span className="text-orange-500">investment in yourself</span>.
                </p>
              </div>

              <p>
                It’s a commitment to making the most of each day, finding strength within, and creating an internal ecosystem of well-being. By the end, you'll emerge with a newfound sense of resilience and tools to keep exploring and thriving, one step at a time.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Layered Overlapping Image Gallery */}
          <div className="lg:col-span-5 relative h-[400px] sm:h-[480px] mt-8 lg:mt-0">
            {/* Background Image Card (Older/Mature Vitality) */}
            <div className="absolute right-4 top-0 w-2/3 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-700 z-0 bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" 
                alt="Tranquil wellness reflection" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground Image Card (Nutrition/Coaching Focus) */}
            <div className="absolute left-0 bottom-0 w-2/3 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-700 z-10 bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Personalized clinical assessment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent" />
            </div>
          </div>

        </div>

        {/* PART 2: 3-Step Process Flow */}
        <div className="border-t border-gray-100 pt-10 lg:pt-14">
          
          {/* Process Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28 space-y-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
              What Does <span className="text-orange-500 italic underline decoration-gray-200 decoration-2 underline-offset-4">Caring for You</span> Every Step <br className="hidden sm:inline" /> of the Way Look Like?
            </h3>
            <p className="text-gray-400 font-medium text-sm sm:text-base">Our structured onboarding workflow built for sustainable health transformations.</p>
          </div>

          {/* Process Grid Cards with Desktop Connection Line */}
          <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Horizontal Line Connector for Desktop */}
            <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 -z-10" />

            {/* Step 1 Card */}
            <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100/80 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start text-left">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:text-orange-500 transition-all duration-300 mb-6">
                <UserCheck size={26} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase mb-2">Step 01</span>
              <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">
                Dedicated Wellness Coach
              </h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Throughout your journey, you’ll have a dedicated wellness coach by your side, offering expert guidance, motivation, and unwavering behavioral support.
              </p>
            </div>

            {/* Step 2 Card */}
            <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100/80 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start text-left">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:text-orange-500 transition-all duration-300 mb-6">
                <Compass size={26} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase mb-2">Step 02</span>
              <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">
                360° Lifestyle Assessment
              </h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                We comprehensively assess your current lifestyle—analyzing physical limits, emotional well-being, biological markers, and spiritual needs.
              </p>
            </div>

            {/* Step 3 Card */}
            <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100/80 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start text-left">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:text-orange-500 transition-all duration-300 mb-6">
                <FileText size={26} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase mb-2">Step 03</span>
              <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">
                Personalized Roadmap
              </h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Based on diagnostic data, we map out a personalized path filled with custom tools and strategies chosen to immediately elevate your overall quality of life.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
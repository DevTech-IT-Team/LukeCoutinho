import React from 'react';
// Replace with your actual image path
import audienceImg from '../../../assets/EmpowerPeople.jpg'; 

const EmpowerSection = () => {
  return (
    <section className="bg-slate-50 py-18 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content Branding */}
          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-orange-500"></span>
              <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm">
                Inspiration & Growth
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-8">
              Empower People, <br />
              <span className="text-gray-400">Drive Results</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg border-l-2 border-gray-200 pl-8">
              <p>
                In times when it's easier for <span className="text-gray-900 font-bold">health to take a backseat</span>, Luke Coutinho's talks, webinars and holistic wellness workshops <span className="text-orange-600 font-semibold">make wellness both accessible and actionable.</span>
              </p>
              
              <p>
                With each tailored session—whether for a corporate team, community gathering, or as a panelist—Luke delivers <span className="text-gray-900 font-semibold underline decoration-orange-500 decoration-2 underline-offset-4">science-backed insights and practical tools</span> designed to inspire, educate, and empower audiences.
              </p>

              <blockquote className="text-xl font-medium text-gray-800 italic py-4">
                "These sessions are about achieving small, manageable wins that can change your lifestyle."
              </blockquote>

              <p>
                Organizations alike are recognizing the importance of <span className="text-gray-900 font-semibold">supporting their people’s well-being</span> in driving success. With Luke’s guidance, you’ll receive the right tools to make simple, empowering steps.
              </p>
            </div>

            <div className="mt-12">
              <button className="group relative px-8 py-4 bg-gray-900 text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-orange-600">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Side: Structured Image Layout */}
          <div className="flex-1 relative w-full">
            {/* Background Decorative Gray Box */}
            <div className="absolute top-10 -left-10 w-full h-full bg-gray-200 rounded-2xl hidden lg:block"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[20px_20px_0px_0px_rgba(249,115,22,1)]">
              <img 
                src={audienceImg} 
                alt="Empowerment Session" 
                className="w-full h-[550px] object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Orange Label */}
              <div className="absolute bottom-6 right-6 bg-white py-4 px-6 shadow-xl rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Global Reach</p>
                <p className="text-gray-900 font-black text-xl">10k+ Attendees</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
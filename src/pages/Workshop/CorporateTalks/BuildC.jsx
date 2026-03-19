import React from 'react';
import communityImg from '../../../assets/buildc.jpg'; 

const CommunitySection = () => {
  return (
    <section className="bg-orange-100 py-15 px-6 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/40 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/50 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side - Full aspect ratio, no cropping */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative group p-4 bg-white/50 rounded-[2.5rem] shadow-sm">
              {/* Outer soft glow */}
              <div className="absolute inset-0 bg-white/80 rounded-[2.5rem] -z-10 scale-105 blur-lg transition-transform duration-500 group-hover:scale-110"></div>
              
              <img 
                src={communityImg} 
                alt="Build a Community That Thrives" 
                className="w-full h-auto max-h-[600px] object-contain rounded-2xl shadow-xl transition-all duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-orange-100 hidden md:block ">
                <p className="text-orange-500 font-black text-xl leading-none">100+</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Partnerships</p>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs">Collective Wellness</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-[1.1]">
                Build a <span className="text-orange-500 underline decoration-orange-200 underline-offset-4">Community</span> <br/> That Thrives
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed md:pr-10">
                In every organization and community, the journey to well-being is a collective one. 
                Our workshops empower everyone—from global leadership to team members—to prioritize 
                health through a culture of care.
              </p>
              
              <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 space-y-4">
                <p className="text-gray-600 leading-relaxed italic border-l-4 border-orange-400 pl-4">
                  "By participating in these sessions, you foster an environment where individuals feel 
                  valued and supported, ultimately boosting morale and nurturing a thriving culture."
                </p>
                <p className="font-bold text-gray-700 text-sm">
                  — Beyond Corporates: For Communities Cultivating Wellness.
                </p>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
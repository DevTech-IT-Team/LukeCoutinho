import React from "react";
import { motion } from "framer-motion";

const TeamsWorkplaces = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image with rounded corners */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Teams and Workplaces" 
                className="rounded-[3rem] shadow-2xl w-full object-cover h-125"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-50 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-[1.1]">
              <span className="text-orange-500">Wellness Courses</span> for <br />
              Teams and Workplaces
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <p className="text-[0.9rem] font-medium leading-relaxed">
                Bring structured, science-backed health education to your people with ready-to-use learning paths on sleep, stress, nutrition, and lifestyle. Use them for your wellness journey, onboarding, wellness weeks, or leadership retreats, so your teams don't just work better but live better too.
              </p>
              
              <p className="text-[15px] font-medium text-orange-500 italic border-l-2 border-orange-500 pl-4">
                These courses are educational and self-paced – not personalised medical advice – and are designed to complement, not replace, the care your employees receive from their doctors.
              </p>

              <div className="pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Looking for bulk sign-ups?
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-black text-sm transition-all transform hover:scale-105 shadow-lg shadow-teal-100">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamsWorkplaces;
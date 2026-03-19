import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Clock, Users, Calendar, 
  ChevronDown, PlayCircle, ShieldCheck, ArrowRight 
} from 'lucide-react';
import img from '../../../assets/1st.webp';

const CourseDetailView = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseStats = [
    { icon: <Users size={18} />, label: "20 Students enrolled", detail: "Join a growing community" },
    { icon: <Clock size={18} />, label: "60-75 Minutes", detail: "Self-paced learning" },
    { icon: <Calendar size={18} />, label: "Last Updated", detail: "January 21, 2026" }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-gray-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={img}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl shadow-orange-500/20">
              Intermediate Level
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-4xl leading-[0.9]">
              Break the Loop: <br/>
              <span className="text-orange-500 italic font-light">Reprogram</span> Your Mind
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Summary Intro */}
          <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">The Invisible Patterns</h2>
            <p className="text-gray-500 leading-relaxed text-lg italic">
              "Our minds can often become echo chambers of past conditioning, fears, and limiting beliefs. 
              Thoughts like 'I'm not good enough' may feel real, but they aren't permanent. They're patterns. 
              And patterns can be rewired."
            </p>
          </section>

          {/* Interactive Bento Grid for "What You Will Learn" */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-orange-500"></span>
              <h2 className="text-[10px] font-black uppercase tracking-widest text-orange-500">Curriculum Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Neuroscience", desc: "Learn the science behind neuroplasticity and how to rewire limiting beliefs." },
                { title: "Emotional Loops", desc: "Identify recurring negative thought patterns like self-doubt and overthinking." },
                { title: "Subconscious Retraining", desc: "Build resilience through reframing techniques and retraining." },
                { title: "Self-Regulation", desc: "Master emotional control, even in high-pressure or triggering environments." }
              ].map((item, i) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={i} 
                  className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl mb-4 flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Targeted Audience (Shortened) */}
          <section className="bg-orange-500 p-12 rounded-[3rem] text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tighter mb-6 italic">Who is this for?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
                <div className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-white mt-2 flex-shrink-0" />
                  <p className="text-sm font-medium">Individuals feeling stuck in thought loops or emotional burnout.</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-white mt-2 flex-shrink-0" />
                  <p className="text-sm font-medium">Anyone wanting to develop self-awareness and empathy.</p>
                </div>
              </div>
            </div>
            {/* Background design element */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Users size={200} />
            </div>
          </section>

          {/* Requirements Expandable */}
          <section className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden">
            <button className="w-full p-8 flex justify-between items-center hover:bg-gray-50 transition-colors">
              <h3 className="font-bold text-xl">Requirements & Guidelines</h3>
              <ChevronDown className="text-gray-300" />
            </button>
            <div className="p-8 pt-0 text-gray-500 text-sm space-y-4">
              <p>• No prior knowledge of psychology or neuroscience is required.</p>
              <p>• Open to individuals aged 14 and above.</p>
              <p className="text-orange-600 font-bold italic">Note: This course is intended for educational purposes and is not a replacement for professional medical advice.</p>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar Checkout */}
        <aside className="lg:col-span-4 sticky top-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-orange-100/50"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Lifetime Access</span>
                <h4 className="text-4xl font-black text-gray-800 tracking-tighter">₹699.00</h4>
              </div>
              <div className="text-right">
                 <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md">Save 40%</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {courseStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-orange-200 transition-colors">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-800">{stat.label}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-tight">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-gray-200 hover:shadow-orange-200 flex items-center justify-center gap-3">
              Enroll Now <ArrowRight size={18} />
            </button>
            
            <p className="text-center text-[10px] text-gray-400 mt-6 flex items-center justify-center gap-2">
              <ShieldCheck size={12} /> Secure Checkout Guarantee
            </p>
          </motion.div>
        </aside>

      </div>
    </div>
  );
};

export default CourseDetailView;
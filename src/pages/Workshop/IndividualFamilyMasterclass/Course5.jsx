import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Clock, Users, Calendar, 
  ArrowRight, Heart, Wind, Eye, 
  Brain, Anchor, Compass, CheckCircle2,
  MessageSquareQuote
} from 'lucide-react';
import img from '../../../assets/5th.jpg'; // Path consistent with your naming

const FearToFaithView = () => {
  const [isHovered, setIsHovered] = useState(false);

  const courseStats = [
    { icon: <Users size={18} />, label: "26 Students enrolled", detail: "Focused group" },
    { icon: <Clock size={18} />, label: "Flexible Timing", detail: "5 Detailed Modules" },
    { icon: <Calendar size={18} />, label: "Last Updated", detail: "January 21, 2026" }
  ];

  const modules = [
    { 
      icon: <Brain />, 
      title: "Module 1: Understanding Fear", 
      desc: "Explore what fear truly is and how perception shapes it. Change how you respond to its roots." 
    },
    { 
      icon: <Anchor />, 
      title: "Module 2: Getting to the Root", 
      desc: "Dive into triggers, beliefs, and past experiences that wire us to live in constant threat." 
    },
    { 
      icon: <Compass />, 
      title: "Module 3: Power of Inspiration", 
      desc: "Reflect on how finding daily inspiration shifts mindset and fuels consistent action." 
    },
    { 
      icon: <Wind />, 
      title: "Module 4: Tools to Overcome", 
      desc: "Learn how the nervous system plays a role and practical tools to move through fear consciously." 
    }
  ];

  const testimonials = [
    { name: "Pooja M.", location: "Bangalore", text: "This course helped me look at anxiety with more compassion and less panic." },
    { name: "Jason L.", location: "London", text: "I felt like I was guided, rather than just being handed a prescription. I feel lighter." }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          src={img}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl shadow-orange-500/20">
              Emotional Wellness
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-5xl leading-[0.9]">
              Breaking Free: <br/>
              <span className="text-orange-500 italic font-light">Transform Fear</span> into Faith
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Why Address Fear */}
          <section className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-3">
              <Heart className="text-orange-500" /> Why Must We Address Fear?
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Fear disrupts more than just the mind. It drains energy, clouds clarity, weakens digestion, and impairs sleep. 
              This course provides useful strategies for taking back control of your physical and emotional health in a challenging environment.
            </p>
          </section>

          {/* Module Breakdown */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-orange-500"></span>
              <h2 className="text-[10px] font-black uppercase tracking-widest text-orange-600">Course Curriculum Overview</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((item, i) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={i} 
                  className="bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-white transition-all group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl mb-4 flex items-center justify-center shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-slate-900 p-12 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tighter mb-8 italic text-orange-500">Real Experiences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                  <div key={i} className="space-y-4">
                    <MessageSquareQuote className="text-orange-500 opacity-50" size={32} />
                    <p className="text-slate-300 italic text-sm">"{t.text}"</p>
                    <p className="text-xs font-black uppercase tracking-widest text-white">— {t.name}, {t.location}</p>
                  </div>
                ))}
              </div>
            </div>
            <Eye className="absolute -bottom-10 -right-10 text-white opacity-5 w-64 h-64" />
          </section>

          {/* Requirements */}
          <section className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden">
            <div className="p-10 space-y-6">
              <h3 className="font-bold text-xl text-slate-800">Learning Requirements</h3>
              <div className="space-y-3">
                <p className="text-sm text-slate-500 flex gap-2"><CheckCircle2 size={16} className="text-orange-500" /> No prior knowledge of psychology or neuroscience required.</p>
                <p className="text-sm text-slate-500 flex gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Suitable for age groups 14 and above.</p>
                <p className="text-sm text-slate-500 flex gap-2"><CheckCircle2 size={16} className="text-orange-500" /> Accessible via pre-recorded videos to view at your own pace.</p>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed pt-6 border-t border-slate-50 italic">
                Disclaimer: This course is intended for educational purposes only and should not be used as a replacement for professional medical, nutritional, or psychological advice.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar Checkout */}
        <aside className="lg:col-span-4 sticky top-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Lifetime Access</span>
                <h4 className="text-4xl font-black text-slate-900 tracking-tighter">₹699.00</h4>
              </div>
              <div className="text-right">
                 <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded-md">Secure</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {courseStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-200 transition-colors">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-800">{stat.label}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tight">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-200 hover:shadow-orange-100 flex items-center justify-center gap-3 active:scale-95"
            >
              Enroll Now <motion.div animate={{ x: isHovered ? 5 : 0 }}><ArrowRight size={18} /></motion.div>
            </button>
            
            <div className="mt-8 flex flex-col items-center gap-3 opacity-40">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase tracking-widest">Team Luke PCI Secure</span>
              </div>
            </div>
          </motion.div>
        </aside>

      </div>
    </div>
  );
};

export default FearToFaithView;
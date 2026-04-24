import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, ChevronRight, ChevronLeft, Star, PlayCircle, Clock, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

const FeaturedCourses = () => {
  const allCourses = [
    {
      id: 1,
      title: "Parenting Begins Before Birth",
      subtitle: "Pregnancy Foundations for a Happy Child",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "Welcome to Parenting Begins Before Birth: Pregnancy Foundations for a Happy, Healthy Child...",
      students: 1200,
      lessons: 6,
      duration: "4.5 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Redefining Menopause",
      subtitle: "Strength & Hormonal Harmony",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "Welcome to Redefining Menopause: Your Guide to Rebuilding Strength & Hormonal Harmony...",
      students: 720,
      lessons: 30,
      duration: "12 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Break the Loop",
      subtitle: "Reprogram Negative Thought Patterns",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "Welcome to Break the Loop: How to Interrupt, Reframe, and Reprogram Negative Thoughts...",
      students: 2000,
      lessons: 31,
      duration: "8 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "21-Day Gut Reset",
      subtitle: "Total Microbiome Restoration",
      level: "Advanced",
      author: "Luke Coutinho",
      description: "Introducing Our 21-Day Gut Reset! Every aspect of your health circles back to your gut...",
      students: 7000,
      lessons: 25,
      duration: "21 Days",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "The Lymphatic Reset",
      subtitle: "A Holistic Approach to Immunity",
      level: "Professional",
      author: "Luke Coutinho",
      description: "Step-by-Step Guide to Cleanse Your Body from the inside out...",
      students: 1250,
      lessons: 20,
      duration: "10 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      demoLink: "/learn/scorm-player",
    },
    {
      id: 6,
      title: "Metabolic Health 101",
      subtitle: "Energy, Fat Loss, and Longevity",
      level: "Intermediate",
      author: "Luke Coutinho",
      description: "The Ultimate Guide to Energy, Fat Loss, and Longevity...",
      students: 820,
      lessons: 12,
      duration: "6 Hours",
      price: "₹699.00",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const bentoStats = [
    { title: "40+ Courses", desc: "Expert content", icon: <BookOpen size={24} />, theme: "orange" },
    { title: "Self-Paced", desc: "Learn your way", icon: <PlayCircle size={24} />, theme: "light" },
    { title: "100k+ Seekers", desc: "Global reach", icon: <Users size={24} />, theme: "dark" },
    { title: "Exclusive", desc: "Pro protocols", icon: <Sparkles size={24} />, theme: "cream" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allCourses.length / itemsPerPage);

  const currentCourses = allCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="featured-courses" className="py-40 bg-[#FCF9F5] overflow-hidden text-slate-950 relative">
      
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#FFF7ED] -skew-x-6 translate-x-[15%] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        
        {/* Bento Inspiration Header */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-12 bg-[#F97316]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F97316]">Curated Masterclasses</span>
            </motion.div>

            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase"
              >
                Master Your <br />
                <span className="text-[#F97316] italic font-light lowercase serif">Courses.</span>
              </motion.h2>

              <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
                 Bite-sized, expert-led clinical wisdom from Luke Coutinho. Select a clinical vertical to begin your journey.
              </p>
            </div>
          </div>

          {/* Right Bento Grid Stats */}
          <div className="grid grid-cols-2 gap-6 relative">
            {bentoStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center space-y-4 border transition-all duration-500 ${
                  stat.theme === 'orange' ? 'bg-[#F97316] text-white border-transparent' : 
                  stat.theme === 'dark' ? 'bg-slate-950 text-white border-transparent' :
                  stat.theme === 'cream' ? 'bg-[#FFF7ED] text-orange-900 border-orange-100' :
                  'bg-white text-slate-950 border-slate-50'
                } ${idx % 2 === 0 ? 'translate-y-6' : '-translate-y-6'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.theme === 'orange' || stat.theme === 'dark' ? 'bg-white/20 text-white' : 'bg-orange-50 text-[#F97316]'
                }`}>
                   {stat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold tracking-tight uppercase leading-tight">{stat.title}</h3>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${
                    stat.theme === 'orange' || stat.theme === 'dark' ? 'text-white/60' : 'text-slate-400'
                  }`}>
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="flex justify-between items-end gap-12 mb-16 px-4">
          <div className="space-y-4">
             <h3 className="text-3xl font-black text-slate-950 tracking-tighter uppercase underline decoration-orange-500 decoration-4 underline-offset-8">Signature Curriculums</h3>
             <p className="text-slate-400 font-medium">Equip yourself with the right clinical knowledge.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 p-2 bg-white rounded-full shadow-sm border border-slate-100">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-100 hover:bg-orange-500 hover:text-white transition-all bg-slate-50 text-slate-400"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {currentPage} / {totalPages}
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-100 hover:bg-orange-500 hover:text-white transition-all bg-slate-50 text-slate-400"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {currentCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <span className="absolute top-6 left-6 bg-[#F97316] text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                    {course.level}
                  </span>
                </div>
                  
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-950 leading-tight tracking-tight uppercase group-hover:text-orange-500 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-400 line-clamp-1 italic">
                      &mdash; {course.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-y border-slate-50 py-6">
                    <div className="flex items-center gap-3">
                       <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500"><BookOpen size={16} /></div>
                       <div className="space-y-0.5">
                          <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Lessons</p>
                          <p className="text-[10px] font-bold text-slate-950">{course.lessons} Modules</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500"><Clock size={16} /></div>
                       <div className="space-y-0.5">
                          <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Duration</p>
                          <p className="text-[10px] font-bold text-slate-950">{course.duration}</p>
                       </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link 
                      to={`/course/${course.id}`}
                      className="w-full py-5 bg-slate-950 text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#F97316] transition-all shadow-xl"
                    >
                      Enroll in Course <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-slate-950 shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                   <span className="text-[7px] font-black uppercase tracking-widest opacity-40 leading-none">Price</span>
                   <span className="text-xs font-black">{course.price.split('.')[0]}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

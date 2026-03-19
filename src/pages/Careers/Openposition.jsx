import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Briefcase, ChevronDown, ArrowRight, SearchX, Sparkles } from 'lucide-react';

const OpenPositions = () => {
  const [dept, setDept] = useState('All Department');
  const [loc, setLoc] = useState('All Location');
  const [type, setType] = useState('All Type');

  const jobs = [
    {
      title: "Wellness Consultant with Sales Background",
      location: "Mumbai",
      type: "Full Time",
      experience: "4+ Years",
      dept: "Sales"
    },
    {
      title: "Digital Marketing Manager",
      location: "Remote/Work From Home",
      type: "Full Time",
      experience: "5+ Years",
      dept: "Marketing"
    },
    {
      title: "Guest Relations Executive / Manager",
      location: "Mumbai",
      type: "Full Time",
      experience: "5+ Years",
      dept: "Sales"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchDept = dept === 'All Department' || job.dept === dept;
    const matchLoc = loc === 'All Location' || job.location === loc;
    const matchType = type === 'All Type' || job.type === type;
    return matchDept && matchLoc && matchType;
  });

  return (
    <section className="py-15 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- STYLISED HEADER --- */}
        <div className="relative mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Current Openings</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              FIND YOUR <br/>
              <span className="text-orange-500 italic font-light lowercase font-serif">Purpose.</span>
            </h2>
          </motion.div>
          <div className="absolute top-0 right-0 hidden lg:block opacity-10">
            <Sparkles size={200} className="text-slate-400 rotate-12" />
          </div>
        </div>

        {/* --- MODERN DASHBOARD FILTERS --- */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-white border border-slate-200 p-2 md:p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 flex flex-wrap gap-2 mb-20 relative z-20"
        >
          {/* Dept Dropdown */}
          <div className="flex-1 min-w-[200px] relative group px-2">
            <label className="absolute top-3 left-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Department</label>
            <select 
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="w-full appearance-none bg-transparent text-slate-800 pt-7 pb-3 px-6 rounded-xl focus:outline-none font-bold cursor-pointer"
            >
              <option>All Department</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-orange-500 transition-colors" size={16} />
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-100 self-center" />

          {/* Location Dropdown */}
          <div className="flex-1 min-w-[200px] relative group px-2">
            <label className="absolute top-3 left-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Location</label>
            <select 
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="w-full appearance-none bg-transparent text-slate-800 pt-7 pb-3 px-6 rounded-xl focus:outline-none font-bold cursor-pointer"
            >
              <option>All Location</option>
              <option>Mumbai</option>
              <option>Remote/Work From Home</option>
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-orange-500 transition-colors" size={16} />
          </div>

          <div className="hidden md:block w-px h-12 bg-slate-100 self-center" />

          {/* Type Dropdown */}
          <div className="flex-1 min-w-[200px] relative group px-2">
            <label className="absolute top-3 left-8 text-[9px] font-black uppercase tracking-widest text-slate-400">Commitment</label>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full appearance-none bg-transparent text-slate-800 pt-7 pb-3 px-6 rounded-xl focus:outline-none font-bold cursor-pointer"
            >
              <option>All Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-orange-500 transition-colors" size={16} />
          </div>
        </motion.div>

        {/* --- DYNAMIC JOB GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredJobs.map((job, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={job.title}
                className="group relative bg-white border border-slate-100 p-12 rounded-[4rem] hover:shadow-[0_40px_80px_-20px_rgba(255,100,0,0.15)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Accent Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/0 group-hover:bg-orange-500/5 rounded-bl-[100%] transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-600 bg-orange-50 px-5 py-2 rounded-full border border-orange-100">
                      {job.dept}
                    </span>
                    <Briefcase size={20} className="text-slate-200 group-hover:text-orange-200 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-10 group-hover:text-orange-600 transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                      <MapPin size={16} className="text-orange-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                      <Clock size={16} className="text-orange-500" />
                      {job.type}
                    </div>
                  </div>
                </div>

                <div className="mt-14 relative z-10">
                  <button className="group/btn w-full bg-slate-900 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-orange-600">
                    <span className="relative z-10">View Role</span>
                    <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- EMPTY STATE --- */}
        {filteredJobs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-[2rem] shadow-xl mb-8">
              <SearchX size={40} className="text-slate-200" />
            </div>
            <h3 className="text-3xl font-black text-slate-800 mb-4">No Matching Roles</h3>
            <p className="text-slate-400 max-w-sm mx-auto font-medium">We couldn't find any positions matching your current filters. Try resetting them!</p>
            <button 
              onClick={() => {setDept('All Department'); setLoc('All Location'); setType('All Type');}}
              className="mt-10 bg-orange-100 text-orange-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 hover:text-white transition-all"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
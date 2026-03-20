import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2, Pause, RotateCcw, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

/**
 * ScormPlayer Component
 * 
 * How to use:
 * 1. Unzip your SCORM package into a public folder (e.g., /public/courses/my-scorm-course/)
 * 2. Note the path to the main HTML file (usually index.html or story_html5.html)
 * 3. Pass that URL to the 'src' prop of this component.
 */
const ScormPlayer = ({ src = "/scorms/lymphatic/scormcontent/index.html", title = "The Lymphatic System & Root-Cause Healing" }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-orange-600 w-fit">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">SCORM 1.2 / 2004 Certified</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-slate-500 font-bold text-sm uppercase tracking-tighter">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-orange-500" />
                <span>Completion Time: 45 Mins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-500" />
                <span>Certificate Available</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
             <button className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-widest text-[10px] shadow-sm">
                <RotateCcw size={16} /> Reset Progress
             </button>
             <button className="flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:bg-slate-950 transition-all uppercase tracking-widest text-[10px]">
                <Maximize2 size={16} /> Fullscreen
             </button>
          </div>
        </div>

        {/* Player Container */}
        <div className="relative aspect-video rounded-[4rem] overflow-hidden bg-slate-900 shadow-3xl ring-8 ring-white">
          {!isStarted ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-12 bg-slate-950/40 backdrop-blur-3xl group">
               {/* Decorative background image for the placeholder could go here */}
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className="space-y-10"
               >
                 <div className="w-32 h-32 rounded-full border-4 border-orange-500 flex items-center justify-center text-white mx-auto relative cursor-pointer hover:bg-orange-500 transition-all group-hover:scale-110 duration-500 active:scale-95"
                      onClick={() => setIsStarted(true)}
                 >
                    <Play size={40} fill="currentColor" className="ml-2" />
                    <div className="absolute inset-[-10px] rounded-full border border-orange-500/30 animate-ping" />
                 </div>
                 <div className="space-y-4">
                   <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Ready to Begin?</h3>
                   <p className="text-slate-400 font-medium max-w-sm mx-auto">Your progress will be tracked via the SCORM protocol. Please do not refresh the page during the lesson.</p>
                 </div>
               </motion.div>
            </div>
          ) : (
            /* THE ACTUAL SCORM IFRAME */
            <iframe 
               src={src} 
               className="w-full h-full border-none"
               title="SCORM Lesson"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            />
          )}

          {/* Floating Controls Overlay (Subtle) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
             <Pause size={18} className="cursor-pointer hover:text-orange-400" />
             <div className="h-6 w-px bg-white/20" />
             <span className="text-[10px] font-black uppercase tracking-widest">Live Module Tracking</span>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 font-black text-2xl">
                 LC
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Instructor</p>
                <h4 className="text-xl font-black text-slate-950 uppercase tracking-tighter">Luke Coutinho Team</h4>
              </div>
           </div>
           
           <div className="flex items-center gap-8">
              <p className="text-sm font-bold text-slate-500 italic max-w-xs text-right">
                 Join 10,000+ students who have completed this clinical certification.
              </p>
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-md">
                     <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="student" className="w-full h-full rounded-full object-cover" />
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ScormPlayer;

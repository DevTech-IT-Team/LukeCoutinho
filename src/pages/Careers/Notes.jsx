import React from 'react';
import { motion } from 'framer-motion';
import { Info, Clock, AlertCircle } from 'lucide-react';

const ApplicationNote = () => {
  return (
    <section className="py-16 bg-orange-400 px-6 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-orange-900/5 relative overflow-hidden"
      >
        {/* Subtle Decorative Gray Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-0" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
              <Info size={24} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Please <span className="text-orange-500 italic font-serif lowercase font-light">Note</span>
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed font-bold tracking-tight">
              Due to the high volume of applications, our review process takes time, 
              and we kindly ask for your patience. Rest assured, we respond to all 
              applicants, whether selected or not.
            </p>

            <div className="h-px w-full bg-gray-100" />

            <p className="text-gray-500 leading-relaxed font-medium">
              To maintain a smooth process, please avoid messaging Luke or the team 
              for updates. We appreciate your understanding and look forward to 
              connecting with each of you in due course.
            </p>
          </div>

          {/* Minimalist Status Indicator */}
          <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <Clock size={12} />
            <span>Process: Active Review</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ApplicationNote;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Do I receive a certificate after completing the course?",
      answer:
        "Yes, after passing the final assessment, you receive a Certificate of Empowerment. It is not an accredited qualification but serves as a reminder of your personal progress.",
    },
    {
      id: 2,
      question: "Can the course certificate be used for professional purposes?",
      answer:
        "No, the Certificate of Empowerment is solely for personal learning and is not a professional license or accredited credential.",
    },
    {
      id: 3,
      question: "Are the courses self-paced?",
      answer:
        "Absolutely. All courses offer lifetime access, allowing you to pause and return to the material whenever it suits your schedule.",
    },
    {
      id: 4,
      question: "Can these courses help me treat a medical condition?",
      answer:
        "These courses are designed for education and management support. They do not replace professional medical diagnosis, treatment, or clinical guidance.",
    },
  ];

  return (
    <section className="py-24 bg-[#FFFEFC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Sidebar Content */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 bg-orange-100 rounded-full text-orange-600"
            >
              <HelpCircle size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Support Desk</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase">
              Common <br />
              <span className="text-orange-500 italic font-light lowercase serif">Questions.</span>
            </h2>

            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Clarity is the first step toward transformation. Find answers to our most frequent inquiries.
            </p>

            {/* Support Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-950 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden group shadow-2xl"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors" />
               <MessageCircle className="text-orange-500" size={28} />
               <div>
                  <h4 className="text-lg font-bold tracking-tight mb-1">Still seeking answers?</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">Our support team is available to guide your clinical journey.</p>
               </div>
               <button className="w-full py-4 bg-orange-500 rounded-xl font-bold uppercase tracking-widest text-[9px] hover:bg-white hover:text-slate-950 transition-all">
                  Contact Support
               </button>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                    activeId === faq.id 
                    ? 'bg-white border-orange-200 shadow-xl shadow-slate-100' 
                    : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                    className="w-full px-8 py-8 flex items-center justify-between text-left"
                  >
                    <span className={`text-xl font-bold tracking-tight transition-colors ${
                      activeId === faq.id ? 'text-orange-500' : 'text-slate-900 group-hover:text-orange-600'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeId === faq.id ? 'bg-orange-500 text-white' : 'bg-slate-50 text-slate-400'
                    }`}>
                      {activeId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8">
                           <div className="h-px w-full bg-slate-50 mb-6" />
                           <p className="text-base text-slate-500 font-medium leading-relaxed max-w-3xl">
                             {faq.answer}
                           </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
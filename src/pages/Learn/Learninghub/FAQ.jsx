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
        "Yes, after passing the final assessment, you receive a Certificate of Empowerment. It is not an accredited qualification but serves as a reminder of your personal progress and empowerment.",
    },
    {
      id: 2,
      question: "Can the course certificate be used for professional purposes?",
      answer:
        "No, the Certificate of Empowerment is solely for personal learning and cannot be used professionally.",
    },
    {
      id: 3,
      question: "Are the courses self-paced?",
      answer:
        "Yes, all courses are self-paced. You can take them at your own convenience, with lifetime access to course material. You can pause the course at any time and return to it when you’re ready.",
    },
    {
      id: 4,
      question: "How long do the courses take to complete?",
      answer:
        "The duration varies by course, but since they are self-paced, you can complete them according to your own schedule.",
    },
    {
      id: 9,
      question: "Can these courses help me treat a medical condition?",
      answer:
        "There are several courses on health conditions that can help you learn to manage them better. However, they don’t replace medical guidance or personalized coaching. They’re meant to support your knowledge and understanding and are not intended to diagnose, treat, or cure medical conditions.",
    },
  ];

  return (
    <section className="py-40 bg-[#FFFEFC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* Header Content */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-orange-100 rounded-full text-orange-600"
            >
              <HelpCircle size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Knowledge Base</span>
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter">
              Common <br />
              <span className="text-orange-500 italic font-light">Questions.</span>
            </h2>

            <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-sm">
              Clarity is essential for transformation. We've compiled the most frequent inquiries for you.
            </p>

            <div className="p-10 bg-slate-950 rounded-[3rem] text-white space-y-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
               <MessageCircle className="text-orange-500" size={32} />
               <div>
                  <h4 className="text-xl font-black tracking-tight mb-2">Still Have Queries?</h4>
                  <p className="text-sm text-slate-400 font-medium">Our clinical support team is ready to guide you.</p>
               </div>
               <button className="w-full py-5 bg-orange-500 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-950 transition-all shadow-xl">
                  Message Support
               </button>
            </div>
          </div>

          {/* Accordion Sidebar */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                    activeId === faq.id 
                    ? 'bg-white border-orange-500 shadow-2xl shadow-slate-200' 
                    : 'bg-slate-50/50 border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                    className="w-full px-10 py-10 flex items-center justify-between text-left"
                  >
                    <span className={`text-[22px] font-black tracking-tight transition-colors duration-500 ${
                      activeId === faq.id ? 'text-orange-500' : 'text-slate-900 group-hover:text-orange-500'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeId === faq.id ? 'bg-orange-500 text-white rotate-180' : 'bg-white text-slate-400 group-hover:bg-slate-950 group-hover:text-white'
                    }`}>
                      <Plus size={20} className={activeId === faq.id ? 'hidden' : 'block'} />
                      <Minus size={20} className={activeId === faq.id ? 'block' : 'hidden'} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-10 pb-10">
                           <div className="h-px w-full bg-slate-100 mb-8" />
                           <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
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

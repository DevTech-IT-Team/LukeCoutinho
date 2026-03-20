import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      heading: "Consultation Eligibility",
      question: "Who can take a consult?",
      intro: "A consult with Team Luke can be taken by:",
      points: [
        "Individuals seeking advice on health, inquiring about medical conditions, or aiming to enhance their lifestyle.",
        "Those interested in exploring and comprehending the potential underlying causes of their health concerns.",
        "People looking to identify the most suitable program to address their specific health issues.",
        "Anyone seeking a supportive and guiding hand to embark on a holistic health journey."
      ]
    },
    {
      heading: "The Consultation Experience",
      question: "What can you expect from a consult?",
      intro: "You can expect the following from a consult:",
      points: [
        "Science-based approach and advice from registered dietitians and clinical experts with years of experience.",
        "Post-consult summary notes and personalized recommendations to help you achieve your health care goals.",
        "Exploration of the root cause of your condition, allowing for a more targeted and effective approach to addressing it.",
        "Expert tips and insights on managing clinical conditions through lifestyle adjustments, tailored to your specific needs."
      ]
    },
    {
      heading: "Program Selection Guide",
      question: "Which program would be the most suitable for me?",
      intro: "Here’s what to expect:",
      points: [
        "Each of our programs is meticulously crafted to deliver effective results while aligning with your unique goals and needs.",
        "The program you choose is based on the level of involvement you desire from Luke and his integrative team.",
        "Our dedicated team of program advisors understand your goals and recommend the best-fit program.",
        "Check out user testimonials to see real-world transformations from our programs."
      ]
    },
    {
      heading: "Value & Investment",
      question: "Why are the programs priced so high?",
      intro: "Our perspective on pricing:",
      points: [
        "We firmly believe your health is an investment, not a cost. Each program is a long-term lifestyle asset.",
        "Personalized care requires deep expertise and focused time from our clinical team.",
        "Our experts boast extensive experience, ensuring top-notch guidance and science-backed protocols.",
        "The sustainable shifts you make will provide lifelong value beyond the duration of the program."
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Header & Context */}
          <div className="lg:col-span-5">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-orange-100"
            >
              <HelpCircle size={14} className="text-orange-500" /> FAQ Support
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-slate-950 leading-[1.1] tracking-tighter mb-8"
            >
              Common <br />
              <span className="text-orange-500 font-light ">Questions</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-xl font-medium leading-relaxed mb-12 max-w-sm"
            >
              Honest answers to help you navigate your journey with clarity and confidence.
            </motion.p>
            
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 relative group overflow-hidden hidden lg:block">
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">Need more clarity?</h4>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">Our dedicated team of advisors is here to guide you to the right program.</p>
                <button className="flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-black rounded-2xl hover:bg-slate-950 transition-all shadow-xl shadow-orange-500/10 uppercase tracking-widest text-xs">
                  Speak to an expert <ArrowRight size={16} />
                </button>
              </div>
              <HelpCircle size={150} className="absolute -bottom-10 -right-10 text-slate-200/50 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>

          {/* Right Side: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group border rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                  openIndex === index 
                  ? "bg-slate-50 border-orange-500 shadow-2xl shadow-orange-500/5" 
                  : "bg-white border-slate-100 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left px-8 py-10 flex items-center justify-between gap-6 outline-none"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest block">{faq.heading}</span>
                    <span className="text-xl md:text-2xl font-black text-slate-950 tracking-tight leading-tight group-hover:text-orange-600 transition-colors uppercase">{faq.question}</span>
                  </div>
                  <div className={`shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? "bg-orange-500 border-orange-500 text-white rotate-180" : "bg-white border-slate-200 text-slate-400 group-hover:border-slate-900 group-hover:text-slate-900"
                  }`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-10 py-10 space-y-8">
                        <p className="text-slate-950 font-black text-lg uppercase tracking-tight leading-tight">{faq.intro}</p>
                        <div className="grid gap-6">
                          {faq.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex gap-5 group/item">
                              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-300">
                                 <CheckCircle2 size={12} />
                              </div>
                              <span className="text-slate-600 text-lg font-medium leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            
            {/* Mobile CTA (Lightened) */}
            <div className="lg:hidden p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] mt-12 text-center">
               <h4 className="text-2xl font-bold text-slate-950 mb-4 uppercase tracking-tighter">Still have questions?</h4>
               <button className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-orange-500 text-white font-bold rounded-2xl hover:bg-slate-950 transition-all shadow-xl uppercase tracking-widest text-xs">
                  Speak to an expert <ArrowRight size={16} />
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQSection;
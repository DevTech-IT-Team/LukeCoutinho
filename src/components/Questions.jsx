import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight, CheckCircle2, MessageCircleQuestion } from 'lucide-react';

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
    <section className="py-40 px-6 bg-white overflow-hidden relative">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-100/20 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/20 rounded-full blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Strategic Insight */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full shadow-sm border border-slate-100"
            >
              <MessageCircleQuestion size={18} className="text-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Knowledge Base</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter"
            >
              Clarity is the <br />
              <span className="text-orange-500 italic font-light">First Step.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-slate-500 font-medium leading-relaxed max-w-sm"
            >
              Building trust through transparency. Find answers to the most common inquiries about our methodology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 glass rounded-[3rem] border border-orange-100/50 bg-gradient-to-br from-white to-orange-50/30 relative group overflow-hidden hidden lg:block"
            >
              <div className="relative z-10 space-y-6">
                <h4 className="text-3xl font-black text-slate-950 tracking-tight leading-none uppercase">Need Program Guidance?</h4>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">Our advisors are standing by to help you choose the perfect fit for your evolution.</p>
                <button className="flex items-center gap-4 px-10 py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-orange-500 transition-all shadow-2xl uppercase tracking-widest text-xs group/btn">
                  Consult an Expert <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Immersive Accordion */}
          <div className="lg:col-span-7 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group border-2 rounded-[3rem] transition-all duration-700 ${
                  openIndex === index 
                  ? "bg-white border-orange-500 shadow-[0_40px_80px_-30px_rgba(249,115,22,0.15)]" 
                  : "bg-slate-50/50 border-transparent hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left px-10 py-12 flex items-center justify-between gap-8 outline-none"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] block">{faq.heading}</span>
                    <span className="text-2xl md:text-3xl font-black text-slate-950 tracking-tighter leading-none group-hover:text-orange-500 transition-colors uppercase">{faq.question}</span>
                  </div>
                  <div className={`shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
                    openIndex === index ? "bg-orange-500 border-orange-500 text-white rotate-180 shadow-lg shadow-orange-500/30" : "bg-white border-slate-100 text-slate-400 group-hover:border-slate-950 group-hover:text-slate-950"
                  }`}>
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-12 pb-12 pt-0 space-y-10">
                        <div className="h-px bg-slate-100 w-full" />
                        <div className="space-y-8">
                          <p className="text-slate-900 font-black text-xl uppercase tracking-tighter leading-tight">{faq.intro}</p>
                          <div className="grid gap-6">
                            {faq.points.map((point, pIdx) => (
                              <motion.div 
                                key={pIdx} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: pIdx * 0.1 }}
                                className="flex gap-6 group/item"
                              >
                                <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-500">
                                   <CheckCircle2 size={12} />
                                </div>
                                <span className="text-slate-500 text-lg font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">{point}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQSection;
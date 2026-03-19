import React, { useState } from 'react';
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
        "ExpExpert tips and insights on managing clinical conditions through lifestyle adjustments, tailored to your specific needs and requirements."
      ]
    },
    {
      heading: "Program Selection Guide",
      question: "Which program would be the most suitable for me?",
      intro: "Here’s what to expect:",
      points: [
        "Each of our programs is meticulously crafted to deliver effective results while aligning with your unique goals and needs.",
        "The program you choose is based on the level of involvement you desire from Luke and his integrative team.",
        "Our dedicated team of program advisors understand your goals and recommend the best-fit program for your individual needs.",
        "Check out the transformative journeys shared by individuals who have experienced our programs firsthand at: https://www.lukecoutinho.com/testimonials."
      ]
    },
    {
      heading: "Value & Investment",
      question: "Why are the programs priced so high?",
      intro: "Here’s what to expect from the programs:",
      points: [
        "We firmly believe your health is an investment, not a cost.",
        "Each program is personalized to meet your unique needs.",
        "Our experts boast extensive experience, ensuring top-notch guidance.",
        "Changes made serve as a sustainable roadmap for your future well-being."
      ]
    },
    {
      heading: "Chronic Disease Management",
      question: "How will your program benefit my chronic health issues?",
      intro: "Here’s what to expect from the program:",
      points: [
        "Recognizing individuality, we ensure no two clients or plans are alike, focusing on helping you establish the foundational elements.",
        "Our programs meticulously assess your past and current lifestyle, crafting a personalized plan tailored to your unique condition and needs.",
        "Our prevention, disease management, and recovery protocol targets key factors such as immunity, angiogenesis, gut microbiome, and more.",
        "Leveraging years of coaching experience handling a diverse range of 40+ conditions, we help you make sustainable, lifelong changes."
      ]
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Header */}
          <div className="lg:col-span-5">
            {/* Sticky disabled on mobile for better scrolling, enabled on lg screens */}
            <div className="lg:sticky lg:top-24 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-500 mb-4 lg:mb-6">
                <HelpCircle size={20} />
                <span className="text-xs lg:text-sm font-black uppercase tracking-[0.3em]">Support Center</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 lg:mb-8">
                Frequently Asked <br className="hidden lg:block" />
                <span className="text-orange-500 font-light ">Questions</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
                Unlock the path to a healthier you through our FAQ section, providing insights tailored to guide you on your wellness journey.
              </p>
              <button className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-orange-500 transition-all shadow-xl group">
                READ ALL DOCS 
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Accordion Tabs */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group rounded-[1.5rem] lg:rounded-[2.5rem] border transition-all duration-500 ${
                  openIndex === index 
                  ? "bg-white border-orange-200 shadow-xl lg:shadow-2xl lg:shadow-orange-500/10" 
                  : "bg-white/50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 md:p-8 lg:p-10 text-left"
                >
                  <div className="flex items-center justify-between mb-2 lg:mb-3">
                    <span className="text-orange-500 text-[10px] lg:text-xs font-black uppercase tracking-widest">
                      {faq.heading}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openIndex === index ? "bg-orange-500 text-white rotate-180" : "bg-slate-200 text-slate-500"
                    }`}>
                      {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                  <span className={`text-lg md:text-xl lg:text-2xl font-black transition-colors duration-300 block pr-4 ${
                    openIndex === index ? "text-slate-900" : "text-slate-700"
                  }`}>
                    {faq.question}
                  </span>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 lg:px-10 pb-8 lg:pb-10 pt-0">
                    <div className="h-[2px] w-10 lg:w-12 bg-orange-500 mb-6 lg:mb-8 opacity-50"></div>
                    
                    <p className="text-slate-400 font-bold mb-4 lg:mb-6 italic text-sm lg:text-base">
                      {faq.intro}
                    </p>
                    
                    <div className="grid gap-4 lg:gap-5">
                      {faq.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 lg:gap-4 group/point">
                          <div className="mt-1 flex-shrink-0">
                            <CheckCircle2 size={18} className="text-orange-500 opacity-70 group-hover/point:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

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
      id: 5,
      question: "What extra resources are provided?",
      answer:
        "You’ll get access to additional blogs and videos from Luke Coutinho related to the course topic for further learning.",
    },
    {
      id: 6,
      question: "What is the structure of the courses?",
      answer:
        "The courses are organized into modules, each containing topic-specific video content and a questionnaire to assess your understanding.",
    },
    {
      id: 7,
      question: "How do I log on to the course after purchase?",
      answer: `To access your course, follow these simple steps:

1. Click on the Login icon in the website header.
2. Enter your credentials on the Login Page and sign in.
3. Once logged in, click on the user icon in the header again—this will take you to your My Account Dashboard.
4. Scroll down and find the Education Corner button. Click on it.
5. You will be redirected to your Courses Dashboard, where you can explore all your enrolled courses, access certificates, and review quiz attempts.

If you have trouble logging in, try resetting your password or contact our support team for assistance at support@staging.lukecoutinho.com.`,
    },
    {
      id: 8,
      question: "Are these courses available to download?",
      answer:
        "The courses are not available to be downloaded. However, you can access your course on the portal anytime.",
    },
    {
      id: 9,
      question:
        "Can these courses help me treat or manage a medical condition?",
      answer:
        "There are several courses on health conditions that can help you learn to manage them better. However, they don’t replace medical guidance or personalized coaching. They’re meant to support your knowledge and understanding and are not intended to diagnose, treat, or cure medical conditions. For personalized guidance around your medical condition, we recommend joining our comprehensive programs or booking a consultation with our Integrative Experts.",
    },
    {
      id: 10,
      question:
        "Are these courses a replacement for one of Team Luke's programs or consultations?",
      answer:
        "No, these courses are not a substitute for Luke’s tailored programs. While the courses provide valuable general wellness education, Luke’s programs are personalized to each client’s unique health needs and offer in-depth, hands-on support. Through one-on-one guidance, these programs focus on a holistic and highly individualized approach.",
    },
  ];

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-black text-slate-800 leading-tight">
              Frequently Asked <br />
              <span className="text-orange-600">Questions</span>
            </h2>
          </div>

          <div className="lg:w-2/3 border-t lg:border-t-0 border-slate-100 pt-8 lg:pt-0">
            <div className="divide-y divide-slate-100">
              {faqs.map((faq) => (
                <div key={faq.id} className="py-4">
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span
                      className={`text-[16px] font-bold transition-colors ${
                        activeId === faq.id
                          ? "text-orange-600"
                          : "text-slate-600 group-hover:text-slate-900"
                      }`}
                    >
                      {faq.id}. {faq.question}
                    </span>
                    {activeId === faq.id ? (
                      <ChevronDown size={18} className="text-orange-600" />
                    ) : (
                      <ChevronRight size={18} className="text-slate-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeId === faq.id && faq.answer && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-slate-500 text-[1rem] leading-relaxed pr-8 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

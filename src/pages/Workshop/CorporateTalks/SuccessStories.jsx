import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORIES = [
  {
    id: 1,
    quote: "“We had almost 100 colleagues join in person, and about 700 joined virtually to hear Luke. The session was highly appreciated by one and all. The solutions offered by Luke were practical and uncomplicated to lead a better lifestyle and avoid illness in future. Authentic, realistic, and simple lifestyle changes, which are easy to adopt and sustain, are the essence of Luke's talk. Thanks to all the teams involved and to Luke for a great session.",
    author: "Dr. Rajeev Agarwal, Marsh McLennan",
    organization: "Marsh McLennan"
  },
  {
    id: 2,
    quote: "TWe, from Dr Reddy’s, have been working with Luke Coutinho for the last 1.5 years. Luke is a primary collaborator on our wellbeing program, which we run for our employees. Luke’s contributions through knowledge, perspectives, insights, and advice have been invaluable! His authenticity, genuineness, and living of everything he preaches have inspired people and encouraged them to make sustainable lifestyle changes that lead to greater wellbeing in their lives! We wish to continue our association with Luke and the team for many years to come!",
    author: "Nithya Venkatraman, Dr. Reddy’s Laboratories",
    organization: "Tech Solutions Corp"
  },
  {
    id: 3,
    quote: "It was a very informative session covering so many aspects of holistic nutrition and lifestyle. We learned how to nurture our body with Nutrition from the earth, Exercise to create fire to burn calories, meditate to be in the best mental space, drink water to keep us hydrated, sleep well to help reset our gut, and breathe clean air for oxygen so that our brain performs better.",
    author: "Bhawana Agarwal, Ladies Study Group – President",
    organization: "Global Finance Hub"
  },
  {
    id: 4,
    quote: "The whole concept of holistic nutrition and lifestyle is very individualistic. I have been following Luke for almost five years now. He made certain changes to my general diet and exercise regime, which was very useful for me, and I think today’s event is a reminder of what we should be following in our everyday life.",
    author: "Mr. Vishal Agarwal, Vice Chairman & MD, VISA Group",
    organization: "Creative Synergy Inc"
  }
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % STORIES.length);
  };

  return (
    <section className="bg-slate-50/80 py-18 px-6 relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl -mr-48 -mb-48"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Success <span className="text-orange-500">Stories</span>
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-lg border border-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center relative"
            >
              {/* Quote Icon Accent */}
              <span className="absolute top-8 left-10 text-8xl text-orange-100 font-serif leading-none select-none">“</span>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed italic mb-10">
                  {STORIES[currentIndex].quote}
                </p>
                
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-orange-500">
                    — {STORIES[currentIndex].author}
                  </h4>
                  {/* <p className="text-orange-500 font-medium uppercase tracking-widest text-sm">
                    {STORIES[currentIndex].organization}
                  </p> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length)}
            className="absolute left-0 -ml-4 md:-ml-12 p-3 rounded-full bg-white shadow-lg text-gray-400 hover:text-orange-500 transition-colors hidden md:block"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 -mr-4 md:-mr-12 p-3 rounded-full bg-white shadow-lg text-gray-400 hover:text-orange-500 transition-colors hidden md:block"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {STORIES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                currentIndex === index ? "w-8 bg-orange-500" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
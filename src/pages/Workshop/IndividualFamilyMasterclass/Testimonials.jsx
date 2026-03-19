import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const reviews = [
    {
      stars: 5,
      text: "Thank you so much Luke for bringing hope in our life. During your session I have realized that I have a lot of repressed and suppressed anger since childhood and even in my marriage. I don't know how to constructively express my anger, I realize I have had many bursts out in the past few years now.",
    },
    {
      stars: 4.5,
      text: "Thanks for answering my question. Luke you are amazing and this session is the best eye opener and tools you mentioned are easy to practice. Thank you so much. If you ever come to Australia, it will be good to listen to you in person.",
    },
    {
      stars: 4,
      text: "This session is life altering..thanks a lot !!",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Healthier, Happier Lives: <br />
              <span className="text-orange-500">Real Experiences</span> From Our Masterclass Community
            </h2>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl  flex flex-col items-center min-w-[200px]">
            <span className="text-6xl font-black text-gray-800 tracking-tighter">4.9+</span>
            <div className="flex text-orange-500 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Average rating on 234 reviews
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-100 p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-orange-100"
            >
              {/* Quote Icon Accent */}
              <Quote className="absolute top-6 right-8 text-orange-300 group-hover:text-orange-500 transition-colors duration-300 opacity-30" size={32} />
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(review.stars) ? "#f97316" : "transparent"} 
                    className={i < Math.floor(review.stars) ? "text-orange-500" : "text-gray-300"} 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed italic">
                "{review.text}"
              </p>
              
              {/* Bottom Decoration */}
              <div className="mt-6 w-12 h-1 bg-orange-300 group-hover:w-24 group-hover:bg-orange-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
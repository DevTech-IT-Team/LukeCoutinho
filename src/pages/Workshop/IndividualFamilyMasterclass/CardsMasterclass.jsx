import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Microscope, Target, BookOpen, HeartPulse, ArrowRight } from 'lucide-react';

const MasterclassModernSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [

    {
      title: "Actionable Knowledge",
      highlight: "Root cause addressal",
      description: "Gain simple, practical steps to address the root causes of illness while improving inflammatory markers and longevity via simple long-term lifestyle habits.",
      icon: <Target />,
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Diverse Wellness Topics",
      highlight: "Adaptable practices",
      description: "Explore a wide range of subjects, from managing chronic conditions like diabetes and inflammation to boosting immunity, improving sleep, and optimizing nutrition.",
      icon: <HeartPulse />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    
    {
      title: "360-Degree Approach to Health",
      highlight: "Adaptable practices",
      description: "Gain insights into holistic health that integrate physical, emotional, and spiritual well-being for sustainable results.",
      icon: <HeartPulse />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Tailored Strategies for Real-Life Impact",
      highlight: "Adaptable practices",
      description: "Adapt wellness practices: Understand how to customize these practices to fit your unique lifestyle, work routine, and personal health goals.",
      icon: <HeartPulse />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Comprehensive Topics",
      highlight: "Adaptable practices",
      description: "Masterclass coverage: These sessions cover everything from strengthening immunity and managing stress to improving sleep and understanding nutrition.",
      icon: <HeartPulse />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
        {
      title: "In-Depth Expertise",
      highlight: "Years of experience",
      description: "Benefit from Luke's years of experience in integrative and lifestyle medicine, providing evidence-based tools and tips to achieve long-term wellness.",
      icon: <Microscope />,
      image: "https://images.unsplash.com/photo-1579154273821-196883c411c9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Empowerment Through Knowledge",
      highlight: "Small consistent actions",
      description: "Discover how small, consistent actions can help you prevent disease, manage existing conditions, and enhance overall quality of life.",
      icon: <BookOpen />,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 4000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isHovered]);

  return (
    <section className="bg-orange-50/50 py-18 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
              What Does Luke's Masterclass <br />
              <span className="text-orange-500 ">Bring to the Table?</span>
            </h2>
          </div>
          <div className="flex gap-4 mb-2">
            <button onClick={prevSlide} className="p-4 rounded-full border border-gray-200 text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full bg-gray-900 text-white hover:bg-orange-500 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Cinematic Slider Container */}
        <div 
          className="relative h-[600px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col md:flex-row ${
                currentIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
              }`}
            >
              {/* Image Side with Parallax Effect */}
              <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className={`w-full h-full object-cover transition-transform duration-[4000ms] ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/10 md:to-transparent" />
              </div>

              {/* Text Side (The "Gray" Area) */}
              <div className="w-full md:w-2/5 h-1/2 md:h-full bg-gray-50 p-8 md:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 hidden md:block" />
                
                {/* <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                  {slide.highlight}
                </span> */}

                <div className="mb-6 text-gray-300">
                  {React.cloneElement(slide.icon, { size: 40, className: "text-gray-400" })}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {slide.title}
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {slide.description}
                </p>

                <div className="flex items-center gap-2 text-gray-900 font-bold group/btn cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-orange-500" />
                </div>
              </div>
            </div>
          ))}

          {/* Progress Bar (4s Visualizer) */}
          <div className="absolute bottom-0 left-0 h-1.5 bg-gray-200 w-full z-20">
            <div 
              className="h-full bg-orange-500 transition-all duration-[4000ms] ease-linear"
              style={{ width: isHovered ? '0%' : '100%', key: currentIndex }}
            />
          </div>
        </div>

        {/* Minimal Dot Indicators */}
        <div className="flex justify-center gap-4 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative py-4`}
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${
                currentIndex === index ? 'w-12 bg-orange-500' : 'w-6 bg-gray-200 group-hover:bg-gray-300'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterclassModernSlider;
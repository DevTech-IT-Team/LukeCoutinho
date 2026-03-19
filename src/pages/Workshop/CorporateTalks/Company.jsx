import React, { useRef, useEffect } from 'react';
import img1 from '../../../assets/Dr.Reddy_logo.jpg';
import img3 from '../../../assets/ibm.png';
import img2 from '../../../assets/fitforever.jpg';
import img4 from '../../../assets/IMAbg.png';
import img5 from '../../../assets/MetLifebg.png';
import img6 from '../../../assets/Tata.png';
import img7 from '../../../assets/Uber.png';
import img8 from '../../../assets/Wipro.png';
import img9 from '../../../assets/WNSbg.png';

const ClientCarousel = () => {
  const scrollContainerRef = useRef(null);

  // Data Array
  const originalLogos = [
    { name: "Client 1", src: img1 },
    { name: "Client 2", src: img2 },
    { name: "Client 3", src: img3 },
    { name: "Client 4", src: img4 },
    { name: "Client 5", src: img5 },
    { name: "Client 7", src: img6 },
    { name: "Client 8", src: img7 },
    { name: "Client 9", src: img8 },
    { name: "Client 9", src: img9 },
  ];

  // Infinite Loop: Duplicate the array
  const logos = [...originalLogos, ...originalLogos];

  // Auto-scroll logic (Every 3 seconds)
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    if (scrollContainer) {
      scrollInterval = setInterval(() => {
        const maxScrollLeft = scrollContainer.scrollWidth / 2;
        const cardWidth = 280; // w-64 (256px) + gap-6 (24px) = 280px

        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          // Silent reset
          scrollContainer.scrollLeft = 0; 
          scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }, 2000);
    }

    return () => clearInterval(scrollInterval);
  }, []);

  // Manual Scroll Buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 280;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full bg-slate-100 py-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
              Real Impact. <span className="text-orange-500">Real Workplaces.</span>
            </h2>
            <div className="h-3 w-full bg-orange-100 absolute bottom-2 left-0 -z-0 skew-x-12 opacity-60"></div>
          </div>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mt-4">
            A glimpse into the wellness sessions, expert talks, and lifestyle programs we’ve delivered for leading organizations across India.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full group">
          
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 bg-white text-orange-500 p-3 rounded-full shadow-lg border border-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300 hidden md:flex items-center justify-center focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Slider Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 py-4 px-2 snap-x snap-mandatory scrollbar-hide scroll-smooth items-center"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center"
              >
                {/* Pure Image Container 
                   Removed: bg-white, shadow, border
                   Kept: w-64 h-40 to maintain grid spacing
                */}
                <div className="w-64 h-40 flex items-center justify-center p-2">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 bg-white text-orange-500 p-3 rounded-full shadow-lg border border-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300 hidden md:flex items-center justify-center focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
            <div className="h-1 w-2 bg-orange-200 rounded-full"></div>
            <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
            <div className="h-1 w-2 bg-orange-200 rounded-full"></div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;
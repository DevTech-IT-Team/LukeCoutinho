import React from 'react';
import img1 from '../../../assets/FitIndia.png'
import img2 from '../../../assets/GQ.png'
import img3 from '../../../assets/CeleberatedDoctors.png'
import img4 from '../../../assets/VOGUE.png'
import img5 from '../../../assets/Healthcareleadership.png'

const LeadingTheWay = () => {
  const awards = [
    { src: img1, alt: "Fit India Movement" },
    { src: img2, alt: "GQ 50 Most Influential" },
    { src: img3, alt: "50 Celebrated Doctors 2021" },
    { src: img4, alt: "Vogue Best in the Industry" },
    { src: img5, alt: "Middle East Healthcare Leadership Award" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-34">
        
        {/* Exact Heading Style */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-orange-600 font-sans">
            Leading the way
          </h2>
        </div>

        {/* Side-by-Side Awards Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[150px] max-w-[220px] flex justify-center transition-transform duration-300 "
            >
              <img 
                src={award.src} 
                alt={award.alt} 
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadingTheWay;
import React, { useState, useEffect } from 'react';
import { Calendar, Laptop, ClipboardCheck, Clock, Users, AlertCircle } from 'lucide-react';

const MasterclassPage = () => {
  // Stats data
  const stats = [
    { id: 1, label: "Masterclasses conducted so far", value: 50, suffix: "+", icon: <Laptop className="w-8 h-8" /> },
    { id: 2, label: "Registrations from across the globe", value: 53000, suffix: "+", icon: <ClipboardCheck className="w-8 h-8" /> },
    { id: 3, label: "Hours of pure learning & empowerment", value: 827000, suffix: "+", icon: <Clock className="w-8 h-8" /> },
    { id: 4, label: "Participants", value: 25000, suffix: "+", icon: <Users className="w-8 h-8" /> },
  ];

  return (
    <div className=" bg-white font-sans text-gray-800  pt-15 pb-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-700 mb-6">
            Masterclass <span className="text-orange-500">Of The Month</span>
          </h1>
          
          {/* Cancellation Notice */}
          <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 p-4 rounded-lg shadow-sm">
            <Calendar className="text-orange-500 w-5 h-5" />
            <p className="text-gray-600 text-sm md:text-base">
              We're sorry, this month's masterclass has been cancelled. 
              <span className="font-semibold text-orange-600"> A new date is coming soon</span>, and we will keep you posted here.
            </p>
          </div>
        </header>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>

    
      </div>
    </div>
  );
};

// Sub-component for individual stat cards with count-up effect
const StatCard = ({ stat }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 1000; // 2 seconds animation
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    },);

    return () => clearInterval(timer);
  }, [stat.value]);

  return (
    <div className="p-8 flex flex-col items-center text-center group hover:bg-orange-50 transition-colors duration-300">
      <div className="mb-4 p-4 rounded-full bg-gray-100 text-gray-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-inner">
        {stat.icon}
      </div>
      <h3 className="text-3xl font-extrabold text-gray-800 mb-2">
        {count.toLocaleString()}{stat.suffix}
      </h3>
      <p className="text-sm text-gray-500 font-medium leading-tight px-4">
        {stat.label}
      </p>
    </div>
  );
};

export default MasterclassPage;
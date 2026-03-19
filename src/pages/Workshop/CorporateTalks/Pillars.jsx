import React from 'react';

// Note: Replace these with your actual local asset paths
const ASSETS = {
  heroBg: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070',
  empowerImg: '/assets/EmpowerPeople.jpg',
  awards: [
    '/assets/FitIndia.png',
    '/assets/GQ.png',
    '/assets/CeleberatedDoctors.png',
    '/assets/VOGUE.png',
    '/assets/Healthcareleadership.png'
  ],
  pillars: [
    { id: 1, title: 'Deep Cellular Nutrition', color: 'text-lime-500' },
    { id: 2, title: 'Adequate Movement', color: 'text-teal-700' },
    { id: 3, title: 'Quality Sleep', color: 'text-orange-500' },
    { id: 4, title: 'Emotional Wellness', color: 'text-teal-500' },
    { id: 5, title: 'Reconnecting with the spirit', color: 'text-orange-600' },
    { id: 6, title: 'Breath', color: 'text-rose-400' }
  ]
};

const HolisticPage = () => {
  return (
    <div className="bg-orange-100 font-sans text-gray-900">
     

      {/* 4. THE SIX PILLARS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900">The Six Pillars of a <span className="text-orange-500">Holistic Lifestyle</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-dashed bg-gray-200 z-0 border-t border-dashed"></div>
            
            {ASSETS.pillars.map((p) => (
              <div key={p.id} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 border-2 border-transparent group-hover:border-orange-500 transition-all">
                  <span className={`text-3xl font-bold ${p.color}`}>{p.id}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-tighter leading-tight px-2">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HolisticPage;
import React from 'react';

const PopularPicks = () => {
  const articles = [
    {
      id: 1,
      title: "From Samosa to Pizza: The Shocking Number of Steps Your Junk Food Demands",
      date: "14 January, 2026",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1601050638917-3d0663052bc4?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Why a Warm Bowl Still Works: 5 Best Soups for Cold, Cough, Sore Throat & Fever",
      date: "13 January, 2026",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 3,
      title: "From Stage 3 Blood Cancer to Remission: How Nora Found Balance at 47",
      date: "12 January, 2026",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      featured: false
    }
  ];

  return (
    <section className="w-full bg-orange-50 py-15 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Curated Content</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mt-2">Popular Picks</h2>
          </div>
          <div className="h-1 flex-1 bg-gray-200 mx-8 hidden md:block mb-4"></div>
          <button className="text-gray-500 font-bold hover:text-orange-500 transition-colors flex items-center gap-2">
            View Magazine <span className="text-xl">→</span>
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Featured Card (Left Side) */}
          <div 
            onClick={() => console.log("Navigate to article 1")}
            className="col-span-12 lg:col-span-7 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-orange-100">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase italic">Featured</span>
                  <span className="text-gray-400 text-sm font-medium">{articles[0].date}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors leading-tight">
                  {articles[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side Stack */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
            {articles.slice(1).map((article) => (
              <div 
                key={article.id}
                onClick={() => console.log(`Maps to ${article.id}`)}
                className="group flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden rounded-2xl">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-orange-500 text-xs font-bold uppercase mb-2">{article.category}</span>
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 text-xs mt-3 font-medium">{article.date}</p>
                </div>
              </div>
            ))}

            {/* Gray Promo Box */}
            <div className="flex-1 bg-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
              <h4 className="text-white text-xl font-bold relative z-10">Want more wellness tips?</h4>
              <p className="text-gray-400 mt-2 relative z-10">Subscribe to our weekly newsletter.</p>
              <button className="mt-4 text-orange-500 font-bold flex items-center gap-2 hover:gap-4 transition-all relative z-10">
                Sign Up Now <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularPicks;
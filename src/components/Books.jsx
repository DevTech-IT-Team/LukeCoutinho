import React, { useState } from 'react';
import { BookOpen, ArrowRight, Bookmark, Plus, HelpCircle, CheckCircle2, Minus } from 'lucide-react';

const LukeHealthPlatform = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // --- DATA SECTIONS ---
  const verticalBooks = [
    { id: 1, title: "Insights, and Inspiration", para: "Dive into a wellness journey on our blog, where insights meet inspiration, guiding you to a healthier you.", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400" },

    { id: 2, title: "Recipe of the Season", para: "Discover culinary delights in our recipe section, harmonizing flavors, nutrition, and simplicity for a healthier you.", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400" },

    { id: 3, title: "Luke's Learning Hub", para: "Step into a world of education and self-discovery with our short courses in Lifestyle Medicine and Holistic Nutrition.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400" },

    { id: 4, title: "Masterclasses for You", para: "Get access to 13+ years of top learnings in bite-sized actionable steps with these power-packed online masterclasses by Luke.", img: "https://images.unsplash.com/photo-1532012197367-6309011b7d4d?q=80&w=400" },
  ];

  const squareHighlights = [
    { title: "Reimagine Your Lifestyle", para: "Step into a world of wisdom where experts in health, wellness, and lifestyle share life transformation insights.", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400" },
    { title: "Books", para: "Explore transformative reads by Luke Coutinho. Bestsellers like ‘Back to the Roots’ with Tamannaah Bhatia and more here.", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400" },
  ];

  const bottomRedesignedCards = [
    { 
      date: "25 April, 2022", 
      tag: "NUTRITION", 
      title: "Download Your FREE Copy of Our You Care Lifestyle Flow Designed by Luke Coutinho Today", 
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400" 
    },
    { 
      date: "6 September, 2022", 
      tag: "EXERCISE", 
      title: "Try These 10 Bodyweight Exercises to Build Lean Muscle and Improve Strength", 
      img: "https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=400" 
    },
    { 
      date: "13 June, 2025", 
      tag: "NUTRITION", 
      title: "11 Surprising Health Benefits of Raisins: Why You Should Eat 6 Soaked Black Raisins Daily", 
      img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400" 
    },
    { 
      date: "13 June, 2025", 
      tag: "REMEDIES", 
      title: "How to Use Castor Oil in the Belly Button: Benefits for Digestion, Skin, and Pain Relief", 
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400" 
    },
  ];

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
          "Expert tips and insights on managing clinical conditions through lifestyle adjustments, tailored to your specific needs and requirements."
        ]
      },
  ];

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-900">
      
      {/* --- SECTION 1: BOOKS & HIGHLIGHTS --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-orange-500 mb-6">
              <BookOpen size={20} />
              <span className="text-sm font-black uppercase tracking-widest text-orange-600">The Library</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Wellness Resources for <span className="text-orange-500  font-light">Your Journey</span>
            </h2>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 border-l-2 border-slate-200 pl-8 h-fit">
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">16+</div>
              <p className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">Categories</p>
              <p className="text-slate-500 text-xs leading-relaxed">Explore endless possibilities with 16+ categories at your fingertips.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">8k+</div>
              <p className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-2">Resources</p>
              <p className="text-slate-500 text-xs leading-relaxed">Discover a rich spectrum of resources curated just for you.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {verticalBooks.map((book) => (
            <div key={book.id} className="group bg-white rounded-[2.5rem] p-4 border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col mb-9">
              <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] mb-6">
                <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"><Plus size={18} /></button>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-orange-500 transition-colors">{book.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">{book.para}</p>
              </div>
            </div>
          ))}

          {squareHighlights.map((card, i) => (
            <div key={i} className="lg:col-span-2 relative aspect-square lg:aspect-auto lg:h-[450px] overflow-hidden rounded-[3rem] bg-slate-900 group">
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-4xl font-black text-white mb-3">{card.title}</h3>
                <p className="text-slate-300 text-base max-w-sm mb-6 leading-relaxed">{card.para}</p>
                <button className="flex items-center gap-2 text-orange-500 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">Read Full Story <ArrowRight size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: REDESIGNED BOTTOM CARDS (TOP READS) --- */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h3 className="text-4xl font-black text-slate-800 tracking-tight">Don't Miss Out: Our Top Reads</h3>
                <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bottomRedesignedCards.map((item, idx) => (
                    <div key={idx} className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                        {/* Image Container with Tag */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded text-[10px] font-black tracking-widest text-slate-600 shadow-sm uppercase">
                                {item.tag}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-slate-400 text-xs font-bold mb-3">{item.date}</span>
                            <h4 className="text-lg font-black text-slate-800 leading-snug mb-6 flex-grow group-hover:text-orange-600 transition-colors">
                                {item.title}
                            </h4>
                            <button className="text-slate-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-orange-500 transition-colors">
                                Read More <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-15 mb-8 flex justify-center">
                <button className="group flex items-center gap-4 px-12 py-5 bg-slate-900 text-white font-black rounded-full hover:bg-orange-500 transition-all shadow-2xl">
                    <span className="uppercase tracking-[0.2em] text-sm">View All Blogs</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
        </div>
      </section>

     
    </div>
  );
};

export default LukeHealthPlatform;
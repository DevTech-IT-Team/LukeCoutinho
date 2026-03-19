import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Youtube, Instagram, Facebook, ArrowRight, Share2, Plus } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ChannelSection = () => {
  const channels = [
    { name: "Luke Coutinho - Youtube Channel", icon: <Youtube className="text-[#FF0000]" size={28} />, link: "https://www.youtube.com/channel/UCbtHchJ3oGeVZTlp2RlHzXw/join" },
    { name: "Luke Coutinho Integrative Medicine", icon: <Instagram className="text-[#E4405F]" size={28} />, link: "https://www.instagram.com/luke_coutinho_lifestyle?igsh=MWowZDAzbzl1ZGRpbA%3D%3D&utm_source=qr" },
    { name: "Struggle to Strength Broadcast", icon: <Instagram className="text-[#E4405F]" size={28} />, link: "https://www.instagram.com/j/AbZC3D-oIvE-L6ZL/" },
    { name: "Luke's Wellness Tribe", icon: <Facebook className="text-[#1877F2]" size={28} />, link: "https://www.facebook.com/groups/lukeswellnesstribe" },
    { name: "Holistic Healing Sangha", icon: <Facebook className="text-[#1877F2]" size={28} />, link: "https://www.facebook.com/groups/512379149121734" },
    { name: "Reflections & Gratitude Sangha", icon: <Facebook className="text-[#1877F2]" size={28} />, link: "https://www.facebook.com/groups/598105777265409" }
  ];

  return (
    <section className="py-18 bg-orange-50 relative overflow-hidden">
      {/* --- BACKGROUND DESIGN ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-200/50 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
          <div className="text-center lg:text-left space-y-4">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <Plus size={14} className="text-orange-500" />
              <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Connect with us</span>
            </div> */}
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Our Digital <br/>
              <span className="text-orange-500">Ecosystem</span>
            </h2>
          </div>
          <p className="text-slate-400 font-medium text-lg max-w-sm text-center lg:text-right leading-relaxed">
            Free high-impact health resources and community support available 24/7 across all platforms.
          </p>
        </div>

        {/* --- SLIDER --- */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {channels.map((channel, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[3rem] p-10 h-[380px] flex flex-col items-center justify-between text-center border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] group transition-all duration-500 hover:shadow-[0_40px_80px_rgba(249,115,22,0.12)] hover:-translate-y-3">
                
                <div className="space-y-8 w-full">
                  {/* Icon Container */}
                  <div className="relative mx-auto w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-500">
                    <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-[2rem] animate-[spin_10s_linear_infinite] group-hover:border-orange-200" />
                    <div className="relative z-10 group-hover:scale-110 transition-transform">
                      {channel.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Free Access</span>
                    <h3 className="text-xl font-bold text-slate-900 leading-[1.2] px-2 line-clamp-2">
                      {channel.name}
                    </h3>
                  </div>
                </div>

                <a 
                  href={channel.link}
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-orange-500 transition-all shadow-lg shadow-slate-900/10 active:scale-95"
                >
                  Join Channel <ArrowRight size={16} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- CUSTOM PAGINATION --- */}
        <div className="custom-pagination flex justify-center gap-3 mt-16" />
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #f97316;
          width: 40px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default ChannelSection;
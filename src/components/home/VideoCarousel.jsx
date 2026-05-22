import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const VIDEO_IDS = [
  '7axXI22GWos',
  'K5QonsRqgx4',
  'KK7mEuzCdBo',
  'Vqyvn1JHCGE',
  'EAf-MfFJxf0',
];

export default function VideoCarousel() {
  return (
    <section className="bg-[#F8F3EC] py-16 lg:py-24 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#E8640A]" />
            <span className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A]">
              Learning hub picks
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#1A1410] not-italic">
            Videos to Explore
          </h2>
          <p className="mt-3 font-[Arial] text-[14px] leading-[1.85] text-[rgba(26,20,16,0.7)] max-w-2xl">
            A spotlight of high-impact modules — video previews and highlights.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {VIDEO_IDS.map((id) => (
            <SwiperSlide key={id}>
              <div className="rounded-2xl overflow-hidden bg-black/5 shadow-sm">
                <div className="w-full aspect-[16/9] bg-black">
                  <iframe
                    title={`video-${id}`}
                    src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[1.25rem] text-[#1A1410] mb-2">Video preview</h3>
                  <p className="font-[Arial] text-[13px] leading-[1.7] text-[rgba(26,20,16,0.65)]">Short preview from the course playlist.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

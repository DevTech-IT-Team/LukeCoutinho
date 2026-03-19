import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/menimg2.avif';

const FeaturedPioneersInfinite = () => {
  const pioneers = [
    { name: "Dr. Ashish Contractor", role: "Interventional Cardiologist", desc: "A preventive cardiologist with over two decades of experience, Dr. Ashish Contractor is currently heading Rehab and Sports Medicine at H.N. Reliance Foundation Hospital. He is best known for designing Prime Minister Narendra Modi’s cardiac rehab program.", img: img },

    
    { name: "Dr. Maulik Parekh", role: "Interventional Cardiologist", desc: "An interventional cardiologist with 16+ years in the field, Dr. Maulik Parekh specializes in advanced heart procedures like TAVR. He is also recognized for performing over 800 complex cardiac interventions with precision and success.", img: img },

    
    { name: "Dr. Sachin Trivedi", role: "Interventional Cardiologist", desc: "A medical oncologist with over 20 years of clinical experience, Dr. Sachin Trivedi is currently Director of Medical Oncology at HCG ICS Khubchandani Cancer Centre. He is renowned for his integrative approach to cancer care, blending precision medicine with chemotherapy and immunotherapy.", img: img },

    
    { name: "Dr. Amit Maydeo", role: "Interventional Cardiologist", desc: "A gastroenterologist and pioneer in therapeutic endoscopy with over 35 years of practice, Dr. Amit Maydeo is a recipient of the Padma Shri in 2013 for transforming gastrointestinal treatment and medical training in India.", img: img },

    
    { name: "Anders Olsson", role: "Interventional Cardiologist", desc: "A breathing expert with over a decade of experience in respiratory wellness, Anders Olsson is the founder of Conscious Breathing. He is best known for his science-backed techniques that enhance health, performance, and mental clarity.", img: img },

    
    { name: "Shalini Jatia", role: "Interventional Cardiologist", desc: "A pediatric care leader with over 15 years in cancer care management, Shalini Jatia is currently serving at Tata Memorial Centre’s ImPaCCT Foundation. Best known for reducing pediatric treatment abandonment rates from 25% to just 2%.", img: img },

    
    { name: "Dr. Anil D’Cruz", role: "Interventional Cardiologist", desc: "An internationally acclaimed oncologist, Dr. Anil D’Cruz has over 35 years in cancer care and research. He is also the former Director of Tata Memorial Hospital, known for shaping global head and neck cancer treatment guidelines.", img: img },

    
    
    { name: "Dr. Hansaji Yogendra", role: "Interventional Cardiologist", desc: "A yoga authority with over four decades of experience, Hansaji Yogendra is the president of the Indian Yoga Association and director of The Yoga Institute. Known for training over 1 lakh teachers and authoring 100+ wellness books.", img: img },

    
    { name: "Dan Buettner", role: "Interventional Cardiologist", desc: "A longevity researcher with more than 20 years in health exploration, Dan Buettner is the founder of Blue Zones and a National Geographic Fellow. He is widely known for uncovering lifestyle secrets of the world’s longest-living communities.", img: img },

    
    { name: "Dr. Steven Geanopulos", role: "Interventional Cardiologist", desc: "A chiropractic neurologist with over 25 years in functional and integrative medicine, Steven Geanopulos is recognized as one of America’s leading experts in lifelong optimized living and brain-based wellness.", img: img },

    
    { name: "Sister BK Shivani", role: "Interventional Cardiologist", desc: "A spiritual mentor with over 20 years of experience, Sister BK Shivani is widely respected for her teachings on self-transformation, emotional resilience, and conscious living as part of the Brahma Kumaris movement. She is best known for making spiritual wisdom accessible to the modern world.", img: img },

    
  ];

  // Duplicate the array to create the infinite loop effect
  const duplicatedPioneers = [...pioneers, ...pioneers];

  return (
    <section className="py-24 bg-orange-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">The Experts</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              Featured <span className="text-orange-500  font-light">Pioneers</span> <br/>
              <span className="text-gray-400">In Healing & Science</span>
            </h2>
          </div>
        </div>
      </div>

      {/* --- INFINITE SLIDER TRACK --- */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-8"
          animate={{
            x: [0, -11 * 412], // Calculates movement based on 11 cards (card width + gap)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 90, // Adjust speed here (higher = slower)
              ease: "linear",
            },
          }}
        >
          {duplicatedPioneers.map((pioneer, index) => (
            <div 
              key={index}
              className="min-w-[320px] md:min-w-[380px] group"
            >
              {/* Image Card with Grayscale effect */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-orange-900/5">
                <img 
                  src={pioneer.img} 
                  alt={pioneer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="space-y-3 px-2">
                <h4 className="text-orange-600 font-black uppercase tracking-widest text-[10px]">
                  {pioneer.role}
                </h4>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {pioneer.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-4">
                  {pioneer.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slider Visual Track */}
      <div className="mt-20 flex justify-center">
        <div className="h-1 w-64 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: [-256, 256] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="h-full w-1/3 bg-orange-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPioneersInfinite;
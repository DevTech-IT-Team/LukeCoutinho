import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";

const CorporateCourses = () => {
  const corpCourses = [
    {
      title: "Emotional Wellness 101",
      chapters: "08 Chapters",
      duration: "1.2 Hours",
      price: "699/-",
      tag: "Expert",

      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500",
    },

    {
      title: "Break the Loop",
      chapters: "12 Chapters",
      duration: "45 Minutes",
      price: "699/-",
      tag: "Best Seller",

      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Chronic Stress",
      chapters: "15 Chapters",
      duration: "1.5 Hours",
      price: "699/-",
      tag: "New",

      image:
        "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Circadian Rhythm",
      chapters: "06 Lessons",
      duration: "55 Minutes",
      price: "699/-",
      tag: "Beginner",

      image:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-24 max-w-360 mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 text-[#1a1a1a]">
          Explore Featured Courses for{" "}
          <span className="text-orange-500">Corporates</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corpCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group h-125 overflow-hidden rounded-[2.5rem] shadow-xl bg-[#1a1a1a]"
            >
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />

              <span className="absolute top-6 left-6 bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20">
                {course.tag}
              </span>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                  {course.title}
                </h3>

                <div className="flex items-center gap-3 text-slate-300 text-[0.9rem] font-bold mb-6">
                  <span>{course.chapters}</span>
                  <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                  <span>{course.duration}</span>
                  <span className="ml-auto text-orange-500 text-[1.2rem] font-black">
                    {course.price}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-center gap-2 bg-white text-[#1a1a1a] py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all duration-300">
                    <ShoppingCart size={16} /> Add to cart
                  </button>
                  <button className="flex items-center justify-center border border-white/20 text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    Know More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1600')`,
          }}
        >
          <div className="absolute inset-0 bg-[#1a1a1a]/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              <span className="text-orange-500">Coming Soon:</span> <br />
              New Learning Experiences <br />
              <span className="text-white/50 italic font-medium">
                Every Month
              </span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Your wellness journey is about to get even more exciting. We’re
              building a steady flow of fresh and deeply transformative courses
              designed to help you grow at your own pace.
            </p>

            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-0.5 w-12 bg-orange-500"></div>
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px]">
                Luke Coutinho
              </span>
              <div className="h-0.5 w-12 bg-orange-500"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateCourses;

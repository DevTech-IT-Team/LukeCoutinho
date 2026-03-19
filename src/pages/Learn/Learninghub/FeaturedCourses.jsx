import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";

const FeaturedCourses = () => {
  const allCourses = [
    {
      id: 1,
      title:
        "Parenting Begins Before Birth: Pregnancy Foundations for a Happy, Healthy Child",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Parenting Begins Before Birth: Pregnancy Foundations for a Happy, Healthy Child...",
      students: 1,
      lessons: 6,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title:
        "Redefining Menopause: Your Guide to Rebuilding Strength & Hormonal Harmony",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Redefining Menopause: Your Guide to Rebuilding Strength & Hormonal Harmony...",
      students: 72,
      lessons: 30,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title:
        "Break the Loop: How to Interrupt, Reframe, and Reprogram Negative Thoughts",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Break the Loop: How to Interrupt, Reframe, and Reprogram Negative Thoughts...",
      students: 20,
      lessons: 31,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "21-Day Gut Reset",
      level: "Advanced Level",
      author: "Team Luke",
      description:
        "Introducing Our 21-Day Gut Reset! Every aspect of your health circles back to your gut...",
      students: 70,
      lessons: 25,
      price: "₹6,999.00",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title:
        "The Lymphatic Reset: A Holistic Approach to Immunity, Skin Health, and Cancer Prevention",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Description: Welcome to The Lymphatic Reset Blueprint: A Step-by-Step Guide to Cleanse Your Body...",
      students: 125,
      lessons: 20,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title:
        "Metabolic Health 101: The Ultimate Guide to Energy, Fat Loss, and Longevity",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome to Metabolic Health 101: The Ultimate Guide to Energy, Fat Loss, and Longevity...",
      students: 82,
      lessons: 12,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Decoding the Science Behind Stubborn Fat and How to Burn It",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Welcome! This course is on Decoding the Science Behind Stubborn Fat and How to Burn It...",
      students: 313,
      lessons: 19,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      title:
        "Inflammation: The Root Cause of All Chronic Diseases and How to Fight Back",
      level: "Intermediate Level",
      author: "Team Luke",
      description:
        "Do you ever feel like your health is out of your control, grappling with chronic conditions...",
      students: 247,
      lessons: 32,
      price: "₹699.00",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(allCourses.length / itemsPerPage);

  const paginate = (newPage) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const currentCourses = allCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="courses" className="py-24 bg-white overflow-hidden">
      <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-black text-slate-900">
            Featured <span className="text-orange-600">Courses</span>
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                currentPage === 1
                  ? "border-slate-100 text-slate-20"
                  : "border-slate-900 text-slate-600 hover:bg-orange-600 hover:text-white hover:border-teal-500"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                currentPage === totalPages
                  ? "border-slate-100 text-slate-200"
                  : "border-slate-200 text-slate-600 hover:bg-orange-600 hover:text-white hover:border-teal-500"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative min-h-137.5">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {currentCourses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-4xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-0 bg-orange-600 text-white text-[9px] font-bold px-2.5 py-1 rounded-l-md uppercase tracking-wider">
                      Featured
                    </div>

                    <div className="absolute bottom-3 left-0 w-full flex justify-center">
                      <span
                        className={`px-4 py-1.5 rounded-lg text-[9px] font-black text-white uppercase shadow-md border border-white/20 ${
                          course.level.includes("Advanced")
                            ? "bg-teal-600"
                            : "bg-orange-500"
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 pt-6 grow flex flex-col">
                    <h3 className="text-[0.95rem] font-black text-slate-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <Users size={12} />
                      </div>
                      <span className="text-[12px] text-slate-500 font-bold">
                        {course.author}
                      </span>
                    </div>

                    <p className="text-slate-500 text-[13px] leading-relaxed mb-6 line-clamp-3 font-medium">
                      {course.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-slate-400">
                        <div className="flex items-center gap-1">
                          <Users color="orange" size={19} />
                          <span className="text-[12px] font-bold text-orange-600">
                            {course.students}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen color="orange" size={19} />
                          <span className="text-[12px] font-bold text-orange-600">
                            {course.lessons}
                          </span>
                        </div>
                      </div>
                      <span className="text-slate-900 font-black text-sm">
                        {course.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-1.5 mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === i + 1 ? "w-6 bg-teal-500" : "w-1.5 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

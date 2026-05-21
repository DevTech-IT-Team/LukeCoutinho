import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Star,
  Sparkles,
  Brain,
  HeartPulse,
  Leaf,
  Dumbbell,
} from "lucide-react";

/* =========================
   COURSES DATA
========================= */

const allCourses = [
  {
    id: "nutrition-mastery",
    title: "Nutrition Mastery",
    subtitle: "Cellular healing through nutrition",
    category: "Nutrition",
    lessons: 12,
    duration: "8 Weeks",
    level: "Beginner",
    price: "$99",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "advanced-nutrition",
    title: "Advanced Nutrition",
    subtitle: "Clinical nutrition protocols",
    category: "Nutrition",
    lessons: 18,
    duration: "12 Weeks",
    level: "Advanced",
    price: "$199",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "mindset-blueprint",
    title: "Mindset Blueprint",
    subtitle: "Mental resilience and emotional mastery",
    category: "Mindset",
    lessons: 10,
    duration: "6 Weeks",
    level: "Intermediate",
    price: "$120",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "focus-clarity",
    title: "Focus & Clarity",
    subtitle: "Peak performance and productivity",
    category: "Mindset",
    lessons: 14,
    duration: "7 Weeks",
    level: "Advanced",
    price: "$149",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "functional-fitness",
    title: "Functional Fitness",
    subtitle: "Movement and strength optimization",
    category: "Fitness",
    lessons: 15,
    duration: "10 Weeks",
    level: "Advanced",
    price: "$149",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "body-reset",
    title: "Body Reset Program",
    subtitle: "Complete metabolic transformation",
    category: "Fitness",
    lessons: 16,
    duration: "9 Weeks",
    level: "Intermediate",
    price: "$179",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "deep-healing",
    title: "Deep Healing",
    subtitle: "Recovery and holistic transformation",
    category: "Healing",
    lessons: 9,
    duration: "5 Weeks",
    level: "Beginner",
    price: "$89",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "gut-healing",
    title: "Gut Healing Protocol",
    subtitle: "Restore digestion and immunity",
    category: "Healing",
    lessons: 11,
    duration: "6 Weeks",
    level: "Intermediate",
    price: "$110",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================
   CATEGORIES
========================= */

const categories = [
  {
    name: "All",
    icon: <Sparkles size={16} />,
  },
  {
    name: "Nutrition",
    icon: <Leaf size={16} />,
  },
  {
    name: "Mindset",
    icon: <Brain size={16} />,
  },
  {
    name: "Fitness",
    icon: <Dumbbell size={16} />,
  },
  {
    name: "Healing",
    icon: <HeartPulse size={16} />,
  },
];

/* =========================
   COMPONENT
========================= */

const FeaturedCoursesOnly = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? allCourses
      : allCourses.filter(
        (course) => course.category === activeCategory
      );

  return (
    <section className="mx-auto px-6 lg:px-20 py-24 bg-white overflow-hidden">

      {/* HEADER */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-orange-500" />

          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
            Expert-Led Modules
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none mb-6">
              Featured{" "}
              <span className="text-orange-500 italic font-light lowercase">
                Clinicals
              </span>
            </h2>

            <p className="text-slate-500 font-medium max-w-2xl text-lg leading-relaxed">
              Evidence-based protocols, cellular healing systems,
              holistic nutrition and lifestyle mastery designed to
              elevate human performance naturally.
            </p>
          </div>

          {/* STATS */}
          <div className="flex items-center gap-6">

            <div className="bg-orange-50 rounded-2xl px-6 py-4 border border-orange-100">
              <p className="text-3xl font-black text-slate-950">
                {allCourses.length}+
              </p>

              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                Courses
              </span>
            </div>

            <div className="bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100">
              <p className="text-3xl font-black text-slate-950">
                12K+
              </p>

              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                Students
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-300 ${activeCategory === category.name
                ? "bg-orange-500 text-white shadow-xl shadow-orange-500/20"
                : "bg-slate-50 text-slate-700 border border-slate-100 hover:bg-slate-950 hover:text-white"
              }`}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>

      {/* COURSES GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative bg-white rounded-[2rem] border border-slate-100 hover:border-orange-200 transition-all duration-500 hover:shadow-[0_25px_80px_rgba(15,23,42,0.08)] flex flex-col h-full overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-[250px] m-4 overflow-hidden rounded-[1.6rem]">

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* LEVEL */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-950 text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                  {course.level}
                </div>

                {/* PRICE */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg">
                  {course.price}
                </div>

                {/* RATING */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2">
                  <Star
                    size={14}
                    className="fill-orange-500 text-orange-500"
                  />

                  <span className="text-[11px] font-black text-slate-950">
                    {course.rating}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative px-8 pb-8 pt-2 flex flex-col flex-1">

                {/* CATEGORY */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-black">
                    {course.category}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-tight group-hover:text-orange-600 transition-colors duration-300 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {course.subtitle}
                  </p>
                </div>

                {/* SPECS */}
                <div className="flex items-center gap-6 mb-8 pt-5 border-t border-slate-100">

                  <div className="flex items-center gap-2">
                    <BookOpen size={15} className="text-orange-500" />

                    <span className="text-[10px] font-black text-slate-950 uppercase tracking-[0.15em]">
                      {course.lessons} Modules
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={15} className="text-orange-500" />

                    <span className="text-[10px] font-black text-slate-950 uppercase tracking-[0.15em]">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  to={`/course/${course.id}`}
                  className="group/btn mt-auto w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all duration-500 shadow-xl shadow-slate-900/10"
                >
                  Enroll Now

                  <ArrowRight
                    size={15}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default FeaturedCoursesOnly;
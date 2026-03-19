import React from "react";
import { motion } from "framer-motion";
import { User, BookOpen, ArrowUpRight, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

// Keeping your exact imports
import img1 from "../../../assets/1st.webp";
import img2 from "../../../assets/2nd.jpg";
import img3 from "../../../assets/3rd.png";
import img4 from "../../../assets/4th.png";
import img5 from "../../../assets/5th.jpg";
import img6 from "../../../assets/6th.webp";
import img7 from "../../../assets/7th.jpg";
import img8 from "../../../assets/8th.jpg";
import img9 from "../../../assets/9th.jpg";
import img10 from "../../../assets/10.jpg";
import img11 from "../../../assets/11.jpg";
import img12 from "../../../assets/12.jpeg";
import img13 from "../../../assets/13.jpg";
import img14 from "../../../assets/14.jpg";
import img15 from "../../../assets/15.jpg";

/* ------------------ Re-designed Course Card ------------------ */
const CourseCard = ({
    title,
    description,
    image,
    price,
    lessons,
    students,
    badgeText,
    badgeType,
    courseId,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full"
        >
            {/* Main Visual Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Actions */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white rounded-full backdrop-blur-md shadow-lg ${badgeType === "updated" ? "bg-gray-800/80" : "bg-orange-500/90"
                        }`}>
                        {badgeText}
                    </span>
                    {/* <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                        <Plus size={20} />
                    </button> */}
                </div>

                {/* Bottom Content (Overlayed) */}
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white leading-tight mb-4 group-hover:text-orange-400 transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center gap-1.5">
                            <User size={14} className="text-orange-500" />
                            <span className="text-xs font-bold uppercase tracking-tighter">{students}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <BookOpen size={14} className="text-orange-500" />
                            <span className="text-xs font-bold uppercase tracking-tighter">{lessons} Lessons</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Floating Card */}
            <div className="mt-4 px-4 flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-sm font-bold uppercase">₹</span>
                    <span className="text-3xl font-black text-gray-800 tracking-tighter">{price}</span>
                </div>
                <NavLink
                    to={`/Workshop/IndividualFamilyMasterclass/Course${courseId}`}
                    className="flex items-center gap-2 text-gray-900 font-black text-[11px] uppercase tracking-widest border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors"
                >
                    Enroll Now <ArrowUpRight size={14} />
                </NavLink>
            </div>

            {/* Hover Tooltip / Description */}
            <div className="mt-4 px-4">
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

/* ------------------ Masterclass Section ------------------ */
export default function MasterclassSection() {
    // Exact same content array as requested
    const courses = [
        {
            title: "Break the Loop: How to Interrupt Negative Thoughts",
            description: "Welcome to Break the Loop: How to Interrupt, Reframe, and Reprogram Negative Thoughts, a course designed to help anyone break […]",
            image: img1, price: "699.00", lessons: 31, students: 19, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Circadian Rhythm: A New Way of Living",
            description: "Are your mornings a struggle to get out of bed? Can’t shake that foggy feeling during the day? Or maybe […]",
            image: img2, price: "699.00", lessons: 20, students: 38, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "The Lymphatic Reset Blueprint: Step-by-Step",
            description: "Welcome to The Lymphatic Reset Blueprint: A Step-by-Step Guide to Cleanse Your Body’s Filter, a comprehensive course designed to […]",
            image: img3, price: "699.00", lessons: 20, students: 125, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Metabolic Health 101: The Ultimate Guide to Energy, Fat Loss, and Longevity",
            description: "Welcome to Metabolic Health 101: The Ultimate Guide to Energy, Fat Loss, and Longevity, a comprehensive course that provides an […]",
            image: img4, price: "699.00", lessons: 12, students: 82, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Breaking Free: A 101 Guide to Transform Fear into Faith",
            description: "Why Must We Address Fear In today’s fast-paced, hyper-connected world, many of us are silently carrying the weight of chronic […]",
            image: img5, price: "699.00", lessons: 14, students: 26, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Using the Power of the Mind and Visualization",
            description: "Welcome! This course is on Using the Power of Mind and Visualization by Luke Coutinho. Description: This course covers aspects […]",
            image: img8, price: "699.00", lessons: 20, students: 98, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Inflammation: The Root Cause of All Chronic Diseases and How to Fight Back",
            description: "Do you ever feel like your health is out of your control, grappling with chronic conditions, or nagging symptoms that […]",
            image: img6, price: "699.00", lessons: 32, students: 247, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Prioritising Heart Health - Lifestyle Approaches",
            description: "Imagine reclaiming control of your heart health, not through an endless cycle of medications, but by embracing the power of […]",
            image: img7, price: "699.00", lessons: 20, students: 62, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Life Lessons for Adults",
            description: "Welcome to the course, Life Lessons for Adults, which offers a roadmap to personal and emotional well-being through real-world insights[…]",
            image: img8, price: "699.00", lessons: 28, students: 5, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Harnessing the Power of Mental Vitamins",
            description: "Welcome to Harnessing the Power of Mental Vitamins: Silence and Intention for Overall Well-being, a comprehensive course designed to equip[…]",
            image: img9, price: "699.00", lessons: 17, students: 23, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Testosterone Boost: A Key to Improving Hormonal Health",
            description: "Welcome to Testosterone Boost: A Key to Improving Hormonal Health, Libido, and Fertility, a comprehensive course designed to equip you[…]",
            image: img10, price: "699.00", lessons: 19, students: 27, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Luke’s Guide to Forgiveness for Teens and Adults",
            description: "Welcome to Luke’s Guide to Forgiveness for Teens and Adults, a comprehensive course designed to guide you on a transformative[…]",
            image: img11, price: "699.00", lessons: 19, students: 23, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Children’s Wellness 101: Luke’s Guide",
            description: "Hey there, parents and young learners!  Have you ever wondered how small everyday choices can shape a lifetime of well-being? […]",
            image: img12, price: "699.00", lessons: 20, students: 222, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Conquering Illness Anxiety Disorder",
            description: "Do you often find yourself worrying about your health? Do you spend hours on the internet researching symptoms, convinced you […]",
            image: img13, price: "699.00", lessons: 17, students: 18, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Luke’s Guide to Overcoming Trauma",
            description: "In today’s fast-paced world, many of us carry invisible wounds—unhealed trauma, suppressed feelings, and repressed emotions that silently[…]",
            image: img14, price: "699.00", lessons: 22, students: 17, badgeText: "Featured", badgeType: "featured",
        },
        {
            title: "Anxiety Survival Guide: Luke's Techniques",
            description: "Have you ever felt your chest tighten for no obvious reason? Or struggled with restless nights, snapping at loved ones[…]",
            image: img15, price: "699.00", lessons: 19, students: 23, badgeText: "Featured", badgeType: "featured",
        },
       
    ];

    return (
        <section className="py-32 bg-[#FAFAFA] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Modern Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-orange-500"></span>
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">
                                Excellence In Wellness
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.85]">
                            Master <span className="text-orange-500 font-normal">Classes.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-lg font-medium max-w-sm border-l-2 border-gray-200 pl-8">
                        Luke's previous masterclasses now accessible as
                        <span className="text-gray-900"> self-paced learning </span>
                        modules for your evolution.
                    </p>
                </div>

                {/* Course Grid - Using a 4/5 aspect ratio grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} courseId={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
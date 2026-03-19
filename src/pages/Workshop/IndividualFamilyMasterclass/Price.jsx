import React from 'react';
import { User, BookOpen } from 'lucide-react';
import img1 from '../../../assets/1st.webp'
import img2 from '../../../assets/2nd.jpg'
import img3 from '../../../assets/3rd.png'
import { NavLink } from "react-router-dom";



const CourseCard = ({ title, description, image, price, lessons, students, badgeText, badgeType, courseId }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Modern Badge - Using Orange and Gray */}
        <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] tracking-widest font-black text-white rounded-full shadow-lg ${badgeType === 'updated' ? 'bg-gray-600' : 'bg-orange-500'
          }`}>
          {badgeText.toUpperCase()}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col bg-white">
        <h3 className="text-xl font-bold text-gray-800 leading-snug mb-3 group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-6 mt-auto border-t border-gray-100 pt-5">
          <div className="flex items-center gap-2">
            <User size={16} className="text-orange-500" />
            <span className="text-gray-600 text-xs font-semibold">{students} Students</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-orange-500" />
            <span className="text-gray-600 text-xs font-semibold">{lessons} Lessons</span>
          </div>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Price</span>
          <div className="text-2xl font-black text-gray-800">
            <span className="text-orange-500 text-lg mr-0.5">₹</span>{price}
          </div>
        </div>
        <NavLink
          to={`/Workshop/IndividualFamilyMasterclass/Course${courseId}`}
          className="bg-orange-500 hover:bg-gray-800 text-white px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-md shadow-orange-100 hover:shadow-gray-200"
        >
          Enroll Now
        </NavLink>
      </div>
    </div>
  );
};

export default function MasterclassSection() {
  const courses = [
    {
      title: "Break the Loop: How to Interrupt Negative Thoughts",
      description: "Welcome to Break the Loop: How to Interrupt, Reframe, and Reprogram Negative Thoughts, a course designed to help anyone break […]",
      image: img1,
      price: "699.00",
      lessons: 31,
      students: 19,
      badgeText: "Featured",
      badgeType: "featured"
    },
    {
      title: "Circadian Rhythm: A New Way of Living",
      description: "Are your mornings a struggle to get out of bed? Can’t shake that foggy feeling during the day? Or maybe […]",
      image: img2,
      price: "699.00",
      lessons: 20,
      students: 38,
      badgeText: "Featured",
      badgeType: "featured"
    },
    {
      title: "The Lymphatic Reset Blueprint: Step-by-Step",
      description: "Description: Welcome to The Lymphatic Reset Blueprint: A Step-by-Step Guide to Cleanse Your Body’s Filter, a comprehensive course designed to […]",
      image: img3,
      price: "699.00",
      lessons: 20,
      students: 125,
      badgeText: "Featured",
      badgeType: "featured"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-100 pb-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-10 bg-orange-500 rounded-full"></div>
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">Learning Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Our Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Masterclasses</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Luke's previous masterclasses now accessible as self-paced learning modules.
            </p>
          </div>
          <NavLink
            to="/Workshop/IndividualFamilyMasterclass/PastMasterclass"
            className="hidden md:block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 text-center"
          >
            Explore All
          </NavLink>

        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} courseId={index + 1} />
          ))}
        </div>

        {/* Mobile View Button */}
        <div className="mt-12 text-center md:hidden">
          <NavLink
            to="/Workshop/IndividualFamilyMasterclass/PastMasterclass"
            className="inline-block w-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-4 rounded-xl font-bold transition-all duration-300"
          >
            Explore More Courses
          </NavLink>
        </div>
      </div>
    </section>
  );
}
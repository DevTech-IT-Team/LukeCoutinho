// src/pages/Learn/Learninghub/BuyCourse.jsx
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getCourseById } from '../../../data/courses';

const BuyCourse = () => {
  const { id } = useParams();
  const course = getCourseById(id);
  const location = useLocation();

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl py-24 text-center">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <p className="mt-4 text-gray-600">We couldn't locate the course you are trying to purchase.</p>
        <Link to="/" className="mt-6 inline-block text-orange-500 hover:underline">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="mb-6 text-4xl font-bold text-slate-900">{course.title}</h1>
      <p className="mb-4 text-lg text-slate-700">{course.subtitle}</p>
      <img src={course.image} alt={course.title} className="mb-6 w-full max-h-96 object-cover rounded-xl" />
      <div className="flex items-center gap-6 text-xl font-semibold">
        <span className="text-orange-600">{course.price}</span>
        <span className="text-gray-500">Rating: {course.rating}</span>
      </div>
      <p className="mt-6 text-gray-600">{course.summary || ''}</p>
      <Link
        to="/payment"
        state={{ course }}
        className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-4 text-white font-black hover:bg-orange-600 transition"
      >
        Proceed to Checkout
      </Link>
    </section>
  );
};

export default BuyCourse;

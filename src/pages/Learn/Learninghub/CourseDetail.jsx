import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Star, Check, PlayCircle, ShieldCheck, Sparkles } from 'lucide-react';
import courses, { getCourseById } from '../../../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(id);

  if (!course) {
    return (
      <section className="bg-[#FDFAF5] min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-[420px] px-6">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-4">
            Not Found
          </p>
          <h1 className="font-['EB_Garamond',Georgia,serif] italic text-[40px] leading-[1.05] text-[#1A1410] mb-6">
            We couldn't find that course.
          </h1>
          <Link
            to="/learn/learninghub/home"
            className="inline-flex items-center gap-3 font-[Arial] text-[10px] uppercase tracking-[0.4em] border-b border-[#1A1410] pb-2 hover:text-[#E8640A] hover:border-[#E8640A] transition-colors"
          >
            Browse all courses <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    );
  }

  const related = courses.filter((c) => c.id !== course.id).slice(0, 3);

  const handleEnroll = () => {
    navigate('/payment', { state: { course } });
  };

  return (
    <div className="bg-[#FDFAF5] text-[#1A1410]">
      {/* ============== HERO ============== */}
      <section className="relative bg-[#1A1410] text-[#FDFAF5] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={course.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1410] via-[#1A1410]/80 to-[#1A1410]/40" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 pt-28 lg:pt-32 pb-16 lg:pb-20">
          <Link
            to="/learn/learninghub/home"
            className="inline-flex items-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.4em] text-white/65 hover:text-[#E8640A] transition-colors mb-10"
          >
            <ArrowLeft size={14} /> All Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-5">
                <span className="block w-8 h-px bg-[#E8640A]" />
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                  Self-Paced Course · {course.level}
                </p>
              </div>

              <h1 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(40px,5vw,72px)] leading-[1] tracking-[0.005em]">
                {course.title}
                <span className="text-white/55">.</span>
              </h1>

              <p className="mt-5 font-['EB_Garamond',Georgia,serif] italic text-[20px] md:text-[22px] text-white/70 max-w-[640px]">
                {course.subtitle}
              </p>

              <p className="mt-7 font-[Arial] text-[14px] leading-[1.85] text-white/65 max-w-[560px]">
                {course.summary}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 font-[Arial] text-[11px] uppercase tracking-[0.32em] text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Star size={14} className="text-[#E8640A]" fill="#E8640A" /> {course.rating}
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen size={14} className="text-[#E8640A]" /> {course.lessons} Modules
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={14} className="text-[#E8640A]" /> {course.duration}
                </span>
              </div>
            </div>

            {/* Sticky enroll card */}
            <aside className="lg:col-span-5">
              <div className="bg-[#FDFAF5] text-[#1A1410] p-7 lg:p-8 border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-3">
                  Lifetime Access
                </p>
                <p className="font-['EB_Garamond',Georgia,serif] italic text-[44px] leading-none mb-1">
                  {course.price}
                </p>
                <p className="font-[Arial] text-[11px] tracking-[0.18em] uppercase text-[rgba(26,20,16,0.55)] mb-7">
                  One-time · GST included
                </p>

                <button
                  type="button"
                  onClick={handleEnroll}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-[#E8640A] hover:bg-[#1A1410] text-white py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-all duration-500"
                >
                  Enroll & Pay
                  <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                </button>

                <Link
                  to="/book-consult"
                  className="mt-3 w-full inline-flex items-center justify-center gap-3 border border-[#1A1410]/15 hover:border-[#1A1410] text-[#1A1410] py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-all duration-500"
                >
                  Talk to a Counsellor
                </Link>

                <ul className="mt-7 pt-6 border-t border-[rgba(26,20,16,0.08)] space-y-3 font-[Arial] text-[12px] text-[rgba(26,20,16,0.7)]">
                  <li className="flex items-center gap-3"><Check size={14} className="text-[#E8640A] shrink-0" strokeWidth={2} /> Lifetime access on web & mobile</li>
                  <li className="flex items-center gap-3"><Check size={14} className="text-[#E8640A] shrink-0" strokeWidth={2} /> Downloadable workbook & rituals</li>
                  <li className="flex items-center gap-3"><Check size={14} className="text-[#E8640A] shrink-0" strokeWidth={2} /> Certificate of completion</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============== ABOUT + WHAT YOU'LL LEARN ============== */}
      <section className="border-b border-[rgba(26,20,16,0.08)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-5">
                <span className="block w-8 h-px bg-[#E8640A]" />
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                  About this course
                </p>
              </div>
              <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[0.005em]">
                A measured path,
                <br />
                <span className="text-[#1A1410]/55">held by science.</span>
              </h2>
              <p className="mt-6 font-[Arial] text-[14px] leading-[1.85] text-[rgba(26,20,16,0.7)] max-w-[440px]">
                Every module is short enough to hold, slow enough to absorb. Watch in your own rhythm — return as often as you need.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 font-[Arial] text-[11px] uppercase tracking-[0.32em] text-[#1A1410]/85">
                <span className="block w-8 h-px bg-[#E8640A]" />
                Taught by {course.instructor}
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-6">
                What you'll learn
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {course.learn.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-[Arial] text-[14px] leading-[1.7] text-[#1A1410]/85">
                    <span className="mt-[7px] shrink-0">
                      <Check size={14} className="text-[#E8640A]" strokeWidth={2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CURRICULUM ============== */}
      <section className="bg-[#FAF6EE] border-b border-[rgba(26,20,16,0.08)]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-20 lg:py-24">
          <div className="text-center mb-12">
            <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-4">
              Curriculum
            </p>
            <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[0.005em]">
              {course.curriculum.length} modules · {course.duration}
            </h2>
          </div>

          <ol className="border-t border-[rgba(26,20,16,0.1)]">
            {course.curriculum.map((m, i) => (
              <li
                key={m.title}
                className="group grid grid-cols-[auto_1fr_auto_auto] items-center gap-5 py-5 px-2 md:px-4 border-b border-[rgba(26,20,16,0.08)] hover:bg-white/60 transition-colors"
              >
                <span className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[rgba(26,20,16,0.45)] w-8">
                  0{i + 1}
                </span>
                <span className="font-['EB_Garamond',Georgia,serif] italic text-[18px] md:text-[20px] text-[#1A1410]">
                  {m.title}
                </span>
                <span className="hidden md:inline font-[Arial] text-[11px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)]">
                  {m.length}
                </span>
                <PlayCircle size={18} className="text-[#1A1410]/35 group-hover:text-[#E8640A] transition-colors" strokeWidth={1.25} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============== INCLUDED / GUARANTEE STRIP ============== */}
      <section className="bg-[#FDFAF5]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { icon: Sparkles, title: 'Practical, not theoretical', copy: 'Daily rituals you can actually keep — food, breath, movement, sleep.' },
              { icon: ShieldCheck, title: 'Clinically grounded', copy: 'Built on the same integrative protocols used in our consultations.' },
              { icon: PlayCircle, title: 'Yours, forever', copy: 'Lifetime access on every device, including downloadable workbooks.' },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="border-t border-[rgba(26,20,16,0.12)] pt-6">
                <Icon size={20} className="text-[#E8640A] mb-4" strokeWidth={1.25} />
                <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[22px] leading-[1.15] text-[#1A1410] mb-2">
                  {title}
                </h3>
                <p className="font-[Arial] text-[13px] leading-[1.8] text-[rgba(26,20,16,0.65)] max-w-[320px]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ENROLL CTA ============== */}
      <section className="bg-[#1A1410] text-[#FDFAF5]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-20 lg:py-24 text-center">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-5">
            Begin
          </p>
          <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(36px,4.2vw,60px)] leading-[1.05] max-w-[820px] mx-auto">
            Step into <span className="text-white/55">{course.title}.</span>
          </h2>
          <p className="mt-6 font-[Arial] text-[14px] leading-[1.85] text-white/65 max-w-[460px] mx-auto">
            One-time payment of <span className="text-white">{course.price}</span> · lifetime access.
          </p>
          <button
            type="button"
            onClick={handleEnroll}
            className="group mt-10 inline-flex items-center gap-4 bg-[#E8640A] hover:bg-white hover:text-[#1A1410] text-white px-10 py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-all duration-500"
          >
            Enroll & Pay
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* ============== RELATED ============== */}
      <section className="bg-[#FDFAF5]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 py-20 lg:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-4">
                Continue Exploring
              </p>
              <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(30px,3.4vw,44px)] leading-[1.05]">
                Other courses.
              </h2>
            </div>
            <Link
              to="/learn/learninghub/home"
              className="inline-flex items-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.3em] border-b border-[#1A1410] hover:border-[#E8640A] hover:text-[#E8640A] transition-colors pb-2 self-start md:self-end"
            >
              Browse All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((c) => (
              <Link key={c.id} to={`/course/${c.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-[#1A1410] relative">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex items-center gap-3 mb-2 text-[10px] uppercase tracking-[0.24em] text-white/80">
                      <span className="inline-flex items-center gap-1"><Star size={11} className="text-[#E8640A]" fill="#E8640A" />{c.rating}</span>
                      <span>·</span>
                      <span>{c.duration}</span>
                    </div>
                    <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[22px] leading-[1.1] mb-1">{c.title}</h3>
                    <p className="font-[Arial] text-[12px] tracking-[0.16em] uppercase text-[#E8640A]">{c.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

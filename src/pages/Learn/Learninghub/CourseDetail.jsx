import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Star,
  Check,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import courses, { getCourseById } from '../../../data/courses';
import LukeTrustStrip from '../../../components/brand/LukeTrustStrip';
import './course-detail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(id);
  const [imgError, setImgError] = useState(false);

  if (!course) {
    return (
      <section className="course-page min-h-[70vh] flex items-center justify-center pt-28">
        <div className="text-center max-w-md px-6">
          <p className="course-section-eyebrow justify-center">Not found</p>
          <h1 className="course-title">We couldn&apos;t find that course.</h1>
          <Link to="/learn/learninghub/home" className="course-btn-primary mt-8 max-w-xs mx-auto">
            Browse all courses
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    );
  }

  const related = courses.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 3);
  const relatedFallback = related.length
    ? related
    : courses.filter((c) => c.id !== course.id).slice(0, 3);

  const includes = course.includes || [
    'Lifetime access on all devices',
    'Downloadable workbooks & protocols',
    'Private student community',
    'Certificate of completion',
  ];

  const handleEnroll = () => {
    navigate('/payment', { state: { course } });
  };

  return (
    <div className="course-page">
      <header className="course-hero">
        <div className="course-hero-inner">
          <Link to="/learn/learninghub/home" className="course-back">
            <ArrowLeft size={14} />
            All courses
          </Link>

          <div className="course-hero-grid">
            <div>
              <p className="course-category">
                {course.category} · {course.level}
              </p>
              <h1 className="course-title">{course.title}</h1>
              <p className="course-subtitle">{course.subtitle}</p>
              <p className="course-summary">{course.summary}</p>

              <div className="course-meta">
                <span>
                  <Star size={14} fill="#E8640A" />
                  {course.rating} rating
                </span>
                <span>
                  <BookOpen size={14} />
                  {course.lessons} modules
                </span>
                <span>
                  <Clock size={14} />
                  {course.duration}
                </span>
                <span>
                  <GraduationCap size={14} />
                  {course.instructor}
                </span>
              </div>

              <div className="course-hero-visual mt-8">
                {!imgError ? (
                  <img src={course.image} alt="" onError={() => setImgError(true)} />
                ) : (
                  <div className="w-full h-full min-h-[220px] bg-[#FAF6EE]" />
                )}
                <span className="course-hero-badge">Self-paced · {course.level}</span>
              </div>
            </div>

            <aside>
              <div className="course-enroll-card">
                <p className="course-section-eyebrow" style={{ marginBottom: '0.75rem' }}>
                  Enroll today
                </p>
                <p className="course-price">{course.price}</p>
                <p className="course-price-note">One-time · Lifetime access · GST included</p>

                <button type="button" className="course-btn-primary" onClick={handleEnroll}>
                  Proceed to checkout
                  <ArrowRight size={14} />
                </button>
                <Link to="/book-consult" className="course-btn-secondary">
                  Talk to a counsellor first
                </Link>

                <ul className="course-enroll-includes">
                  {includes.slice(0, 4).map((item) => (
                    <li key={item}>
                      <Check size={14} className="text-[#E8640A] shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <section className="course-section">
        <div className="course-two-col">
          <div>
            <p className="course-section-eyebrow">About this course</p>
            <h2 className="course-section-title">
              Built for clarity,
              <br />
              <span style={{ color: 'rgba(26,20,16,0.5)' }}>not overwhelm.</span>
            </h2>
            <p className="font-[Arial] text-[14px] leading-[1.85] text-[rgba(26,20,16,0.68)] max-w-md">
              Every module is short enough to hold and practical enough to apply. Learn in your own rhythm
              — revisit lessons whenever you need a reset.
            </p>
          </div>
          <div>
            <p className="course-section-eyebrow">What you&apos;ll learn</p>
            <ul className="course-learn-grid">
              {course.learn.map((item) => (
                <li key={item}>
                  <Check size={14} className="text-[#E8640A] shrink-0 mt-1" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="course-section course-section--alt">
        <p className="course-section-eyebrow">Curriculum</p>
        <h2 className="course-section-title">
          {course.curriculum.length} modules · {course.duration}
        </h2>
        <ol className="course-curriculum">
          {course.curriculum.map((m, i) => (
            <li key={m.title}>
              <span className="course-curriculum-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="course-curriculum-title">{m.title}</span>
              <span className="course-curriculum-length">{m.length}</span>
              <PlayCircle size={18} className="text-[rgba(26,20,16,0.35)]" strokeWidth={1.25} />
            </li>
          ))}
        </ol>
      </section>

      <section className="course-section">
        <p className="course-section-eyebrow">What&apos;s included</p>
        <ul className="course-includes-grid mb-12">
          {includes.map((item) => (
            <li key={item}>
              <Check size={16} className="text-[#E8640A] shrink-0 mt-0.5" strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>

        <div className="course-features">
          {[
            {
              icon: Sparkles,
              title: 'Practical, not theoretical',
              copy: 'Daily rituals you can keep — food, breath, movement, and sleep.',
            },
            {
              icon: ShieldCheck,
              title: 'Clinically grounded',
              copy: 'Aligned with the same integrative protocols used in consultations.',
            },
            {
              icon: PlayCircle,
              title: 'Yours, forever',
              copy: 'Lifetime access on every device, including downloadable workbooks.',
            },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="course-feature-card">
              <Icon size={20} className="text-[#E8640A]" strokeWidth={1.25} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="course-section pt-0">
        <LukeTrustStrip compact />
      </section>

      <section className="course-cta-band">
        <p className="course-section-eyebrow justify-center">Ready to begin</p>
        <h2>Start {course.title} today.</h2>
        <p>
          One-time payment of <strong>{course.price}</strong> — full lifetime access, no subscription.
        </p>
        <button type="button" className="course-btn-primary max-w-sm mx-auto" onClick={handleEnroll}>
          Enroll &amp; pay
          <ArrowRight size={14} />
        </button>
        <p className="mt-4 font-[Arial] text-[10px] uppercase tracking-[0.2em] text-[rgba(26,20,16,0.4)]">
          30-day satisfaction guarantee
        </p>
      </section>

      <section className="course-section course-section--alt">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="course-section-eyebrow">Continue exploring</p>
            <h2 className="course-section-title mb-0">Related courses</h2>
          </div>
          <Link
            to="/learn/learninghub/home"
            className="course-back mb-0"
            style={{ marginBottom: 0 }}
          >
            Browse all
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="course-related-grid">
          {relatedFallback.map((c) => (
            <Link key={c.id} to={`/course/${c.id}`} className="course-related-card">
              <img src={c.image} alt="" />
              <div className="course-related-card-body">
                <span className="course-category" style={{ marginBottom: 0, fontSize: '9px' }}>
                  {c.category}
                </span>
                <h3>{c.title}</h3>
                <span className="price">{c.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

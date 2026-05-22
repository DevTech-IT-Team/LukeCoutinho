import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Heart,
} from 'lucide-react';
import {
  SIX_PILLARS,
  FIVE_DEFENSE_SYSTEMS,
  LUKE_TRUST,
  BRAND_DISCLAIMER,
} from '../../data/brandContent';
import lukePortrait from '../../assets/Lukequotenew.jpg';
import team from '../../assets/team.avif';
import gut from '../../assets/Gut.jpg';
import signature from '../../assets/signature.jpg';
import cancer from '../../assets/Cancer.jpg';
import education from '../../assets/education.jpg';
import recipe from '../../assets/recipe.jpg';
import book from '../../assets/book.jpg';
import corporate from '../../assets/Corporate.jpg';
import './our-story.css';

const PROGRAMS = [
  { title: 'Signature Wellness', tag: 'Programs', image: signature, href: '/programs/signature-wellness' },
  { title: 'Gut Care', tag: 'Specialised', image: gut, href: '/programs/gut' },
  { title: 'Special Cancer Care', tag: 'Specialised', image: cancer, href: '/programs/cancer-care' },
  { title: 'Learning Hub', tag: 'Courses', image: education, href: '/learn/learninghub/home' },
  { title: 'Bharat Dish Recipes', tag: 'Nutrition', image: recipe, href: '/bharat/dish' },
  { title: 'Corporate Wellness', tag: 'Teams', image: corporate, href: '/Workshop/CorporateTalks/Home' },
  { title: 'Books & Resources', tag: 'Read', image: book, href: '/resources' },
];

const OurStory = () => (
  <div className="story-page">
    <header className="story-hero">
      <div className="story-wrap">
        <Link to="/" className="story-back">
          <ArrowLeft size={14} />
          Home
        </Link>

        <p className="story-eyebrow">Our story</p>
        <h1 className="story-h1">Luke Coutinho</h1>
        <p className="story-lede">
          Integrative lifestyle medicine — thirteen years of putting care back into health care.
        </p>

        <div className="story-hero-grid">
          <div className="story-hero-copy">
            <p>
              We&apos;re on a mission led by <strong>Luke Coutinho</strong> to redefine your health
              journey with love, genuine care, and evidence-informed lifestyle protocols — not
              trends, but foundations you can keep.
            </p>
            <p>
              From prevention to complex conditions, the same six-pillar method you see across this
              site guides every consultation, program, and course.
            </p>
            <blockquote className="story-quote">{LUKE_TRUST.quote}</blockquote>
          </div>

          <div className="story-portrait-wrap">
            <img src={lukePortrait} alt="Luke Coutinho" />
            <div className="story-stat">
              <strong>27k+</strong>
              <span>Lives guided · Team Luke worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="story-section">
      <div className="story-wrap story-two-col">
        <div>
          <p className="story-eyebrow">Team Luke</p>
          <h2 className="story-h2">
            We put the <span className="story-h2-accent">&lsquo;care&rsquo;</span> back in health care.
          </h2>
          <p className="story-section-intro" style={{ marginBottom: '1.25rem' }}>
            Our approach works with your body&apos;s intelligent defense systems — not against them.
            Integrative and lifestyle medicine is our foundation: we don&apos;t replace medicine; we
            enhance it through personalised blends created for you.
          </p>
          <div className="story-callout">
            <strong>What we believe</strong>
            Healing is not a pill or a protocol alone — it is how you eat, move, sleep, breathe, and
            hold your emotional world together.
          </div>
        </div>
        <div className="story-team-img">
          <img src={team} alt="Team Luke" />
        </div>
      </div>
    </section>

    <section className="story-section story-section--alt">
      <div className="story-wrap">
        <p className="story-eyebrow">Science we honour</p>
        <h2 className="story-h2">Your body&apos;s five defense systems</h2>
        <p className="story-section-intro">
          We educate and coach around the systems that protect, repair, and renew you — so every
          lifestyle shift has a clear purpose.
        </p>
        <ul className="story-defense-grid">
          {FIVE_DEFENSE_SYSTEMS.map((item) => (
            <li key={item.id} className="story-defense-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="story-section">
      <div className="story-wrap">
        <p className="story-eyebrow">The method</p>
        <h2 className="story-h2">Six pillars of transformation</h2>
        <p className="story-section-intro">
          The same pillars on our homepage — nutrition, movement, sleep, emotional wellness, spirit,
          and breath — shape every program and consultation.
        </p>
        <ol className="story-pillars">
          {SIX_PILLARS.map((pillar, i) => (
            <li key={pillar.id} className="story-pillar">
              <span className="story-pillar-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="story-section story-section--alt">
      <div className="story-wrap story-two-col">
        <div className="story-portrait-wrap" style={{ maxHeight: '480px' }}>
          <img src={lukePortrait} alt="" />
        </div>
        <div>
          <p className="story-eyebrow">Wellness champion</p>
          <h2 className="story-h2">Who is Luke Coutinho?</h2>
          <p className="story-section-intro">
            Thought leader in India&apos;s wellness movement and champion of the Fit India Movement.
          </p>
          <p style={{ fontFamily: 'Arial,sans-serif', fontSize: '15px', lineHeight: 1.85, color: 'rgba(26,20,16,0.68)', margin: '0 0 1rem' }}>
            Luke practices integrative and lifestyle medicine. The You Care Wellness Program has
            supported people facing cancer, diabetes, autoimmune conditions, and everyday
            prevention — with lifestyle as the through-line.
          </p>
          <p style={{ fontFamily: 'Arial,sans-serif', fontSize: '15px', lineHeight: 1.85, color: 'rgba(26,20,16,0.68)', margin: '0 0 1.5rem' }}>
            He has authored five national bestsellers, including{' '}
            <em style={{ color: '#1a1410' }}>Small Wins Every Day</em> — practical rituals, not
            perfection.
          </p>
          <div className="story-milestones">
            <div className="story-milestone">
              <strong>13+</strong>
              <span>Years in practice</span>
            </div>
            <div className="story-milestone">
              <strong>5</strong>
              <span>Bestselling books</span>
            </div>
            <div className="story-milestone">
              <strong>Fit India</strong>
              <span>Movement champion</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="story-section">
      <div className="story-wrap">
        <p className="story-eyebrow">Explore</p>
        <h2 className="story-h2">Where your journey can go next</h2>
        <p className="story-section-intro">
          Programs, courses, recipes, and resources — each path applies the same integrative lens.
        </p>
        <div className="story-programs">
          {PROGRAMS.map((program) => (
            <Link key={program.href} to={program.href} className="story-program-card">
              <img src={program.image} alt="" />
              <div className="story-program-card-body">
                <span className="story-program-tag">{program.tag}</span>
                <h3>{program.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="story-section story-section--alt">
      <div className="story-wrap">
        <p className="story-eyebrow">Ecosystem</p>
        <h2 className="story-h2">Beyond consultations</h2>
        <p className="story-section-intro">
          Education and ethical products that extend the same standards of care.
        </p>
        <div className="story-eco-grid">
          <div className="story-eco-card">
            <BookOpen size={28} className="text-[#E8640A]" strokeWidth={1.25} />
            <h3>Lifeness Science Institute (LSI)</h3>
            <p>
              Specialized education in integrative nutrition and dietetics — shaping passionate minds
              with hands-on experience alongside leading institutions in Mumbai.
            </p>
            <span className="story-link">
              Learn more <ArrowRight size={14} />
            </span>
          </div>
          <div className="story-eco-card">
            <ShieldCheck size={28} className="text-[#E8640A]" strokeWidth={1.25} />
            <h3>You Care Lifestyle (YCL)</h3>
            <p>
              Certified, clean, and safe wellness products — verified claims and organic,
              chemical-free choices for everyday living.
            </p>
            <Link to="/resources" className="story-link">
              View resources <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="story-cta">
      <div className="story-wrap">
        <Heart size={24} className="text-[#E8640A] mx-auto mb-4" strokeWidth={1.25} />
        <h2>Welcome to Team Luke</h2>
        <p>
          Where health care meets heart. Start with a conversation, a course, or a program — at your
          pace.
        </p>
        <div className="story-cta-actions">
          <Link to="/book-consult" className="story-btn-primary">
            Book a consultation
            <ArrowRight size={14} />
          </Link>
          <Link to="/learn/learninghub/home" className="story-btn-secondary">
            Browse courses
          </Link>
          <Link to="/about/approach" className="story-btn-secondary">
            Our approach
          </Link>
        </div>
        <p
          style={{
            marginTop: '2.5rem',
            maxWidth: '40rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'Arial,sans-serif',
            fontSize: '11px',
            lineHeight: 1.7,
            color: 'rgba(26,20,16,0.45)',
          }}
        >
          {BRAND_DISCLAIMER.educational}
        </p>
      </div>
    </section>
  </div>
);

export default OurStory;

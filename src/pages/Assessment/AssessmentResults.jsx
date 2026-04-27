import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const PILLAR_KEYS = ['Nutrition', 'Movement', 'Sleep', 'Emotional Health', 'Spirit'];

// Quick deterministic scoring based on selected answers
const score = (answers) => {
  // baseline 60-70 + modifiers per answer
  const base = { Nutrition: 65, Movement: 65, Sleep: 65, 'Emotional Health': 65, Spirit: 65 };

  if (answers.lifestyle === 'sedentary') base.Movement -= 25;
  if (answers.lifestyle === 'active') base.Movement += 15;
  if (answers.lifestyle === 'irregular') { base.Sleep -= 10; base.Movement -= 10; }

  if (answers.symptoms === 'fatigue') { base.Sleep -= 15; base['Emotional Health'] -= 8; }
  if (answers.symptoms === 'gut') base.Nutrition -= 18;
  if (answers.symptoms === 'sleep') base.Sleep -= 25;
  if (answers.symptoms === 'hormones') base.Nutrition -= 8;
  if (answers.symptoms === 'weight') { base.Nutrition -= 12; base.Movement -= 10; }

  if (answers.habits === 'home') base.Nutrition += 15;
  if (answers.habits === 'processed') base.Nutrition -= 22;
  if (answers.habits === 'restrictive') base.Nutrition -= 10;

  if (answers.emotional === 'calm') base['Emotional Health'] += 15;
  if (answers.emotional === 'stressed') base['Emotional Health'] -= 10;
  if (answers.emotional === 'anxious') { base['Emotional Health'] -= 20; base.Spirit -= 10; }
  if (answers.emotional === 'low') { base['Emotional Health'] -= 25; base.Spirit -= 15; }

  if (answers.goals === 'longevity') base.Spirit += 8;

  Object.keys(base).forEach((k) => {
    base[k] = Math.max(20, Math.min(95, base[k]));
  });

  const overall = Math.round(
    Object.values(base).reduce((a, b) => a + b, 0) / Object.keys(base).length
  );

  return { breakdown: base, overall };
};

const recommend = (overall, answers) => {
  if (overall < 55) {
    return {
      program: 'With Luke — Premium',
      headline: 'A bespoke programme with Luke and senior team.',
      copy: 'Your responses suggest deeper support. We recommend a 1:1 protocol with Luke.',
      to: '/programs/signature-wellness',
    };
  }
  if (answers.symptoms === 'gut') {
    return {
      program: 'Gut Care Programme',
      headline: 'A focused gut healing protocol.',
      copy: 'A targeted programme to rebuild your digestive foundation.',
      to: '/programs/gut',
    };
  }
  return {
    program: 'Signature Wellness',
    headline: 'A guided wellness journey with our integrative team.',
    copy: 'A balanced programme for sustainable energy and resilience.',
    to: '/programs/signature-wellness',
  };
};

const AssessmentResults = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('lc_assessment');
    if (!stored) {
      navigate('/assessment');
      return;
    }
    setAnswers(JSON.parse(stored));
  }, [navigate]);

  const { breakdown, overall } = useMemo(() => (answers ? score(answers) : { breakdown: {}, overall: 0 }), [answers]);
  const recommendation = useMemo(() => (answers ? recommend(overall, answers) : null), [answers, overall]);

  if (!answers) return null;

  return (
    <div className="min-h-screen bg-[#FDFAF5] text-[#1A1410]">
      <header className="border-b border-[rgba(26,20,16,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl">
            Luke <span className="text-[#E8640A]">Coutinho</span>
          </Link>
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)]">
            Your Health Snapshot
          </p>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 lg:py-24">
        {/* Score */}
        <section className="text-center mb-20">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-4">
            Your Composite Score
          </p>
          <div className="relative inline-flex items-center justify-center w-[220px] h-[220px] mb-6">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(26,20,16,0.1)" strokeWidth="6" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#E8640A"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${(overall / 100) * (2 * Math.PI * 52)} ${2 * Math.PI * 52}`}
                style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.22,1,0.36,1)' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-['EB_Garamond',Georgia,serif] italic text-[64px] leading-none">{overall}</span>
              <span className="mt-1 font-[Arial] text-[10px] uppercase tracking-[0.3em] text-[rgba(26,20,16,0.55)]">/ 100</span>
            </div>
          </div>
          <h1 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(34px,4vw,52px)] leading-[1.05] mb-3">
            {overall >= 75 ? 'A strong foundation.' : overall >= 55 ? 'Room to recompose.' : 'A clear opportunity to heal.'}
          </h1>
          <p className="max-w-[34rem] mx-auto font-[Arial] text-[15px] leading-8 text-[rgba(26,20,16,0.7)]">
            Built from your answers across the five pillars of foundational medicine.
          </p>
        </section>

        {/* Pillar breakdown */}
        <section className="mb-20">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[#E8640A] mb-6 text-center">
            Pillar Breakdown
          </p>
          <div className="space-y-5 max-w-[760px] mx-auto">
            {PILLAR_KEYS.map((p) => (
              <div key={p}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-[Arial] text-[14px]">{p}</span>
                  <span className="font-[Arial] text-[12px] tracking-[0.18em] text-[rgba(26,20,16,0.6)]">{breakdown[p]} / 100</span>
                </div>
                <div className="h-[6px] bg-[rgba(26,20,16,0.08)] overflow-hidden">
                  <div
                    className="h-full bg-[#1A1410]"
                    style={{
                      width: `${breakdown[p]}%`,
                      transition: 'width 1.2s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendation */}
        <section className="bg-[#1A1410] text-white p-10 md:p-14">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-5">
            Recommended for you
          </p>
          <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(28px,3.4vw,44px)] leading-[1.1] mb-4">
            {recommendation.headline}
          </h2>
          <p className="font-[Arial] text-[15px] leading-8 text-white/70 max-w-[36rem] mb-8">
            {recommendation.copy}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book-consult"
              className="inline-flex items-center justify-center gap-3 bg-[#E8640A] hover:bg-white hover:text-[#1A1410] text-white px-10 py-4 font-[Arial] text-[11px] uppercase tracking-[0.32em] transition-all"
            >
              Book Consultation <ArrowRight size={14} />
            </Link>
            <Link
              to={recommendation.to}
              className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-white text-white px-10 py-4 font-[Arial] text-[11px] uppercase tracking-[0.32em] transition-all"
            >
              View {recommendation.program} <ChevronRight size={14} />
            </Link>
          </div>
        </section>

        <p className="mt-10 text-center font-[Arial] text-[11px] tracking-[0.22em] uppercase text-[rgba(26,20,16,0.4)]">
          This is a directional snapshot — not a clinical diagnosis.
        </p>
      </main>
    </div>
  );
};

export default AssessmentResults;

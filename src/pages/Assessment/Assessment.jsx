import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const steps = [
  {
    key: 'lifestyle',
    title: 'Lifestyle',
    question: 'How would you describe your typical day?',
    options: [
      { value: 'sedentary', label: 'Mostly sedentary, desk-bound' },
      { value: 'mixed', label: 'A mix of sitting and movement' },
      { value: 'active', label: 'Highly active throughout the day' },
      { value: 'irregular', label: 'Irregular — varies wildly' },
    ],
  },
  {
    key: 'symptoms',
    title: 'Symptoms',
    question: 'What concerns you most right now?',
    options: [
      { value: 'fatigue', label: 'Persistent fatigue or low energy' },
      { value: 'gut', label: 'Digestive or gut issues' },
      { value: 'weight', label: 'Weight or metabolic concerns' },
      { value: 'hormones', label: 'Hormonal imbalance' },
      { value: 'sleep', label: 'Poor sleep or insomnia' },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    key: 'habits',
    title: 'Habits',
    question: 'How is your nutrition on most days?',
    options: [
      { value: 'home', label: 'Mostly home-cooked, balanced' },
      { value: 'mixed-eat', label: 'Mixed — eat out a few times a week' },
      { value: 'processed', label: 'A lot of processed or packaged food' },
      { value: 'restrictive', label: 'Restrictive or following a strict diet' },
    ],
  },
  {
    key: 'emotional',
    title: 'Emotional Health',
    question: 'How would you describe your emotional state lately?',
    options: [
      { value: 'calm', label: 'Mostly calm and grounded' },
      { value: 'stressed', label: 'Stressed, but managing' },
      { value: 'anxious', label: 'Anxious or overwhelmed' },
      { value: 'low', label: 'Low mood or feeling stuck' },
    ],
  },
  {
    key: 'goals',
    title: 'Goals',
    question: 'What outcome would feel like a win?',
    options: [
      { value: 'reverse', label: 'Reverse a specific condition' },
      { value: 'energy', label: 'Sustainable energy and resilience' },
      { value: 'composition', label: 'Body composition / metabolic health' },
      { value: 'longevity', label: 'Longevity and prevention' },
    ],
  },
];

const Assessment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const handleSelect = (value) => {
    const next = { ...answers, [current.key]: value };
    setAnswers(next);
    setTimeout(() => {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        sessionStorage.setItem('lc_assessment', JSON.stringify(next));
        navigate('/assessment/results');
      }
    }, 220);
  };

  const handleBack = () => step > 0 && setStep(step - 1);

  return (
    <div className="min-h-screen bg-[#FDFAF5] text-[#1A1410] flex flex-col">
      {/* Top bar */}
      <header className="border-b border-[rgba(26,20,16,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="inline-flex items-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.3em] text-[rgba(26,20,16,0.65)] hover:text-[#1A1410] disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ArrowLeft size={14} /> Back
          </button>
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.6)]">
            Step {step + 1} / {steps.length} · {current.title}
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="font-[Arial] text-[10px] uppercase tracking-[0.3em] text-[rgba(26,20,16,0.65)] hover:text-[#1A1410] transition"
          >
            Save & Exit
          </button>
        </div>
        <div className="h-[2px] bg-[rgba(26,20,16,0.08)]">
          <div
            className="h-full bg-[#E8640A] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Question */}
      <main className="flex-grow flex items-center">
        <div className="max-w-[760px] w-full mx-auto px-6 md:px-10 py-16">
          <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-5">
            Question {step + 1}
          </p>
          <h1 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(34px,4.4vw,56px)] leading-[1.05] tracking-[0.02em] mb-12">
            {current.question}
          </h1>

          <div className="space-y-3">
            {current.options.map((opt) => {
              const isSelected = answers[current.key] === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left p-5 md:p-6 border transition-all duration-300 group ${
                    isSelected
                      ? 'border-[#E8640A] bg-[#E8640A] text-white'
                      : 'border-[rgba(26,20,16,0.18)] hover:border-[#1A1410] hover:bg-[#1A1410] hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-[Arial] text-[15px] tracking-[0.02em]">{opt.label}</span>
                    <ArrowRight
                      size={16}
                      className="opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-10 font-[Arial] text-[11px] tracking-[0.2em] uppercase text-[rgba(26,20,16,0.45)]">
            One question at a time. No overwhelm.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Assessment;

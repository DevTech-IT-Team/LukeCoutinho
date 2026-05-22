import React from 'react';

/** Original LC six-pillars diagram icons */
export default function PillarIcon({ type }) {
  const icons = {
    movement: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M8 28c4-6 8-10 12-12 4 2 8 6 12 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M10 32c3-4 7-6 11-6 4 0 8 2 11 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M12 36c2-3 5-4 8-4 3 0 6 1 8 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    ),
    spirit: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 10c-4 6-8 14-8 20a8 8 0 1016 0c0-6-4-14-8-20z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    nutrition: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 14v18M24 14c-4 0-7 3-7 7 0 2 1 3 3 4M24 14c4 0 7 3 7 7 0 2-1 3-3 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M22 10c0-2 1-3 2-3s2 1 2 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    sleep: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M14 26a12 12 0 0120-4 10 10 0 11-14 8 12 12 0 01-6-4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M34 14l1 2 2 1-2 1-1 2-1-2-2-1z" fill="currentColor" />
        <path d="M38 22l0.8 1.5 1.5 0.8-1.5 0.8-0.8 1.5-0.8-1.5-1.5-0.8z" fill="currentColor" />
      </svg>
    ),
    emotional: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 34c-6 0-11-4-11-9 0-4 3-7 7-8-1-5 2-9 7-9s8 4 7 9c4 1 7 4 7 8 0 5-5 9-11 9z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M16 22h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    nature: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 12c-2 8-6 14-10 18M24 12c2 8 6 14 10 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M14 34h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="24" cy="34" rx="10" ry="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  };

  return <span className="lc-pillar-icon">{icons[type] ?? icons.movement}</span>;
}

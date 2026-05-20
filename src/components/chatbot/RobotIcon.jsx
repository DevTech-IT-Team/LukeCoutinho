import React from 'react';

/**
 * RobotHeadIcon renders a premium white robot head with dark headphones and orange glowing face elements.
 */
export function RobotHeadIcon({ size = 36, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Robot white face container */}
      <rect x="19" y="22" width="42" height="34" rx="14" fill="white" />
      
      {/* Robot screen (face plate) */}
      <rect x="23" y="26" width="34" height="26" rx="9" fill="#0F172A" />
      
      {/* Glowing orange eyes */}
      <circle cx="33" cy="37" r="3.5" fill="#F97316" />
      <circle cx="47" cy="37" r="3.5" fill="#F97316" />
      
      {/* Glowing orange smile */}
      <path 
        d="M36 44C36 46 38 47 40 47C42 47 44 46 44 44" 
        stroke="#F97316" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      
      {/* Headset band */}
      <path 
        d="M20 30C20 19 29 16 40 16C51 16 60 19 60 30" 
        stroke="#1E293B" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
      />
      
      {/* Ear cups */}
      <rect x="14" y="27" width="6" height="18" rx="3" fill="#1E293B" />
      <rect x="60" y="27" width="6" height="18" rx="3" fill="#1E293B" />
      
      {/* Microphone stem */}
      <path 
        d="M20 42C22 48 30 50 32 50" 
        stroke="#1E293B" 
        strokeWidth="2.5" 
        fill="none" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

/**
 * RobotBubbleIcon renders a complete speech bubble containing the robot.
 */
export function RobotBubbleIcon({ size = 48, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Speech bubble tail and circle in Orange */}
      <path 
        d="M50 12C29.01 12 12 29.01 12 50C12 61.48 17.11 71.78 25.18 78.7L21.36 89.64C20.9 90.96 22.18 92.1 23.44 91.52L35.24 86.1C39.79 87.97 44.78 89 50 89C70.99 89 88 71.99 88 50C88 29.01 70.99 12 50 12Z" 
        fill="#F97316" 
      />
      
      {/* Robot white face container */}
      <rect x="29" y="32" width="42" height="34" rx="14" fill="white" />
      
      {/* Robot screen (face plate) */}
      <rect x="33" y="36" width="34" height="26" rx="9" fill="#0F172A" />
      
      {/* Glowing orange eyes */}
      <circle cx="43" cy="47" r="3.5" fill="#F97316" />
      <circle cx="57" cy="47" r="3.5" fill="#F97316" />
      
      {/* Glowing orange smile */}
      <path 
        d="M46 54C46 56 48 57 50 57C52 57 54 56 54 54" 
        stroke="#F97316" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      
      {/* Headset band */}
      <path 
        d="M30 40C30 29 39 26 50 26C61 26 70 29 70 40" 
        stroke="#1E293B" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
      />
      
      {/* Ear cups */}
      <rect x="24" y="37" width="6" height="18" rx="3" fill="#1E293B" />
      <rect x="70" y="37" width="6" height="18" rx="3" fill="#1E293B" />
      
      {/* Microphone stem */}
      <path 
        d="M30 52C32 58 40 60 42 60" 
        stroke="#1E293B" 
        strokeWidth="2.5" 
        fill="none" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

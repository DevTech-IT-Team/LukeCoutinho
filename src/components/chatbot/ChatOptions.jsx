import React from 'react';

export default function ChatOptions({ options, onSelect, disabled }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          disabled={disabled}
          className="rounded-3xl border border-slate-200 bg-white px-3 py-2.5 text-left text-[12px] font-semibold leading-snug text-slate-900 transition hover:border-orange-300 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

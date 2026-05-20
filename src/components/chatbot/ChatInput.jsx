import React from 'react';
import { Send } from 'lucide-react';

export default function ChatInput({ value, onChange, onSend, disabled }) {
  return (
    <div className="mt-4 flex items-center gap-3 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            onSend();
          }
        }}
        placeholder="Type your own answer or ask something..."
        disabled={disabled}
        className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
      />
      <button
        type="button"
        onClick={onSend}
        disabled={disabled || !value.trim()}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600 disabled:opacity-60"
      >
        <Send size={18} />
      </button>
    </div>
  );
}

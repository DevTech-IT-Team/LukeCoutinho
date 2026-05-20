import React from 'react';
import { Bot, User } from 'lucide-react';

export default function ChatMessage({ message }) {
  const isBot = message.type === 'bot';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start gap-3`}> 
      {isBot && (
        <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-orange-50 text-orange-600 shadow-sm">
          <Bot size={18} />
        </div>
      )}
      <div className={`max-w-[84%] rounded-[2rem] border p-3 text-[13px] leading-5 shadow-sm ${
        isBot
          ? 'bg-white border-slate-200 text-slate-900 rounded-br-[2rem]'
          : 'bg-orange-500 border-orange-500 text-white rounded-bl-[2rem]'
      }`}>
        <p>{message.text}</p>
        <div className={`mt-2 text-[9px] opacity-70 ${isBot ? 'text-slate-500' : 'text-orange-100'}`}>
          {message.timestamp}
        </div>
      </div>
      {!isBot && (
        <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-orange-500 text-white shadow-sm">
          <User size={18} />
        </div>
      )}
    </div>
  );
}

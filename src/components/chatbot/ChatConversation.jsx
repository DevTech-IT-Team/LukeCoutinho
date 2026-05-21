import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChatMessage from './ChatMessage';
import ChatOptions from './ChatOptions';
import ChatInput from './ChatInput';
import LeadCaptureForm from './LeadCaptureForm';
import styles from '../../styles/chatbot/chatbot.module.css';

export default function ChatConversation({
  messages,
  currentQuestion,
  submitAnswer,
  isTyping,
  showForm,
  onUpdateMessage,
  formData,
  handleFormChange,
  submitForm,
  isSubmitting,
  success,
}) {
  const [typedValue, setTypedValue] = useState('');
  const scrollRef = useRef(null);
  const touchStartY = useRef(0);
  const endRef = useRef(null);

  const handleWheel = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const delta = e.deltaY;

    if (delta < 0 && scrollTop <= 0) {
      e.preventDefault();
      e.stopPropagation();
    } else if (delta > 0 && scrollTop + clientHeight >= scrollHeight) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    const currentY = e.touches[0].clientY;
    const delta = touchStartY.current - currentY;
    const { scrollTop, scrollHeight, clientHeight } = el;

    if (delta < 0 && scrollTop <= 0) {
      e.preventDefault();
      e.stopPropagation();
    } else if (delta > 0 && scrollTop + clientHeight >= scrollHeight) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    const scrollToBottom = () => {
      const el = scrollRef.current;
      if (el) {
        el.scrollTo({
          top: el.scrollHeight,
          behavior: 'smooth'
        });
      }
    };

    scrollToBottom();
    const timer = setTimeout(scrollToBottom, 150);
    return () => clearTimeout(timer);
  }, [messages, isTyping, showForm, success]);

  const handleSend = () => {
    if (!typedValue.trim()) return;
    onUpdateMessage(typedValue.trim());
    setTypedValue('');
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-sm">
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`${styles.chatScroll} flex-1 min-h-0 pr-0 pb-3`}
      >
        <div className="space-y-3">
          {messages
            .filter((m) => {
              if (!currentQuestion) return true;
              // hide the bot message that duplicates the current question text
              if (m.type === 'bot' && String(m.text).trim() === String(currentQuestion.label).trim()) return false;
              return true;
            })
            .map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-orange-50 text-orange-600 shadow-sm">
                <span className="block h-3 w-3 rounded-full bg-orange-500 animate-pulse" />
              </div>
              <div className="rounded-[2rem] bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400 animate-bounce" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400 animate-bounce delay-150" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400 animate-bounce delay-300" />
                </div>
              </div>
            </motion.div>
          )}

          {!showForm && !success && currentQuestion && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 space-y-2"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400 px-1">{currentQuestion.label}</p>
              <ChatOptions options={currentQuestion.options} onSelect={submitAnswer} disabled={isTyping} />
            </motion.div>
          )}

          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2"
            >
              <LeadCaptureForm
                formData={formData}
                onChange={handleFormChange}
                onSubmit={submitForm}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5 text-sm text-slate-900 shadow-sm"
            >
              <p className="font-black text-emerald-800">Thank you.</p>
              <p className="mt-2 text-emerald-700">A Team Luke wellness advisor will contact you shortly.</p>
            </motion.div>
          )}

          <div ref={endRef} />
        </div>
      </div>

      {!showForm && !success && (
        <div className="mt-4 w-full bg-transparent">
          <ChatInput
            value={typedValue}
            onChange={setTypedValue}
            onSend={handleSend}
            disabled={isTyping}
          />
        </div>
      )}
    </div>
  );
}

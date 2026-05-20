import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, RefreshCcw } from 'lucide-react';
import IntroVideoPlayer from './IntroVideoPlayer';
import ChatConversation from './ChatConversation';
import { RobotHeadIcon } from './RobotIcon';
import styles from '../../styles/chatbot/chatbot.module.css';

export default function ChatbotModal({
  closeChat,
  videoStatus,
  setVideoStatus,
  messages,
  currentQuestion,
  submitAnswer,
  isTyping,
  showForm,
  formData,
  handleFormChange,
  submitForm,
  isSubmitting,
  success,
  buffering,
  setBuffering,
  progressLabel,
  replayIntro
}) {
  const showVideo = videoStatus !== 'ended';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.94 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className={`${styles.chatbotCard} relative flex flex-col bg-white`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 bg-gradient-to-r from-slate-950 via-slate-900 to-orange-600 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 shadow-lg backdrop-blur-sm">
              <RobotHeadIcon size={28} />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] text-orange-200">AI Wellness Guide</p>
              <h2 className="mt-1 text-sm font-black tracking-[-0.02em]">Welcome to Team Luke Wellness</h2>
              <p className="mt-1 text-[10px] text-orange-100/85">Intro video first, then your guided wellness flow.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {videoStatus === 'ended' && (
              <button
                type="button"
                onClick={replayIntro}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[12px] font-semibold transition hover:bg-white/20"
              >
                <RefreshCcw size={14} /> Replay
              </button>
            )}
            <button
              type="button"
              onClick={closeChat}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-hidden bg-slate-50 px-4 pb-4 pt-4 min-h-0">
          <div className="mb-3 px-1">
            <div className="rounded-full bg-slate-900/10 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-slate-700 shadow-sm">
              {progressLabel}
            </div>
          </div>

          <div className="flex-1 min-h-0">
            <AnimatePresence mode="wait">
              {showVideo ? (
                <motion.div
                  key="video"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.26 }}
                  className="h-full min-h-[320px]"
                >
                  <IntroVideoPlayer
                    videoStatus={videoStatus}
                    setVideoStatus={setVideoStatus}
                    buffering={buffering}
                    setBuffering={setBuffering}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.26 }}
                  className="flex h-full min-h-[320px] flex-col"
                >
                  <ChatConversation
                    messages={messages}
                    currentQuestion={currentQuestion}
                    submitAnswer={submitAnswer}
                    isTyping={isTyping}
                    showForm={showForm}
                    onUpdateMessage={submitAnswer}
                    formData={formData}
                    handleFormChange={handleFormChange}
                    submitForm={submitForm}
                    isSubmitting={isSubmitting}
                    success={success}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

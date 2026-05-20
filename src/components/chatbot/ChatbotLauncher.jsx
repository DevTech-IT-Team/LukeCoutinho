import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { RobotBubbleIcon } from './RobotIcon';
import styles from '../../styles/chatbot/chatbot.module.css';

export default function ChatbotLauncher({ isOpen, onToggle }) {
  const style = {
    transform: isOpen ? 'translateY(64px)' : undefined,
    transition: 'transform 280ms ease',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onToggle}
      aria-label={isOpen ? 'Close wellness chatbot' : 'Open wellness chatbot'}
      className={`${styles.chatbotFloatingButton} relative flex items-center justify-center focus:outline-none`}
      style={style}
    >
      {!isOpen && <span className={styles.chatbotPulse} aria-hidden="true" />}
      {isOpen ? (
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/20">
          <X size={26} />
        </div>
      ) : (
        <RobotBubbleIcon size={72} />
      )}
      {!isOpen && (
        <span className="absolute top-1 right-1 inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
      )}
    </motion.button>
  );
}

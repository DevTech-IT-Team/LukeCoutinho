import React from 'react';
import ChatbotModal from './ChatbotModal';
import ChatbotLauncher from './ChatbotLauncher';

export default function ChatFlowManager(props) {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end md:bottom-7 md:right-7">
      {props.isOpen && <ChatbotModal {...props} />}
      {!props.isOpen && <ChatbotLauncher isOpen={props.isOpen} onToggle={props.toggleChat} />}
    </div>
  );
}

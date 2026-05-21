import React from 'react';
import ChatFlowManager from './ChatFlowManager';
import { useChatbotFlow } from '../../hooks/chatbot/useChatbotFlow';

export default function ChatbotOverlay() {
  const flow = useChatbotFlow();
  return <ChatFlowManager {...flow} />;
}

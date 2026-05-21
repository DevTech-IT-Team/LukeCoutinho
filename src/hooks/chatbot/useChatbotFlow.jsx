import { useEffect, useMemo, useState } from 'react';
import { questions, welcomeMessage, successMessage, sessionKey } from '../../data/chatbot/flowData';
import { submitLead } from '../../services/chatbot/leadService';

const createMessage = (type, text) => ({
  id: `${type}-${Date.now()}-${Math.random()}`,
  type,
  text,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
});

export function useChatbotFlow() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoStatus, setVideoStatus] = useState('idle');
  const [messages, setMessages] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', callbackTime: '' });
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = window.sessionStorage.getItem(sessionKey);
      if (!saved) return;
      const payload = JSON.parse(saved);
      setIsOpen(payload.isOpen ?? false);
      setVideoStatus(payload.videoStatus ?? 'idle');
      setMessages(payload.messages ?? []);
      setStepIndex(payload.stepIndex ?? 0);
      setAnswers(payload.answers ?? Array(questions.length).fill(''));
      setShowForm(payload.showForm ?? false);
      setFormData(payload.formData ?? { fullName: '', email: '', phone: '', callbackTime: '' });
      setSuccess(payload.success ?? false);
      setConversationStarted(payload.conversationStarted ?? false);
    } catch (error) {
      console.warn('Failed to restore chatbot session', error);
    }
  }, []);

  useEffect(() => {
    if (conversationStarted || videoStatus !== 'ended') return;
    startConversation();
  }, [conversationStarted, videoStatus]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const payload = {
      isOpen,
      videoStatus,
      messages,
      stepIndex,
      answers,
      showForm,
      formData,
      isSubmitting,
      success,
      conversationStarted
    };
    window.sessionStorage.setItem(sessionKey, JSON.stringify(payload));
  }, [isOpen, videoStatus, messages, stepIndex, answers, showForm, formData, isSubmitting, success, conversationStarted]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow || '';
    }
    return () => {
      document.body.style.overflow = previousOverflow || '';
    };
  }, [isOpen]);

  const queueBotReply = (text, callback) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, createMessage('bot', text)]);
      setIsTyping(false);
      callback?.();
    }, 950);
  };

  const startConversation = () => {
    if (conversationStarted) return;
    setConversationStarted(true);
    setIsTyping(true);
    const first = createMessage('bot', welcomeMessage);
    const second = createMessage('bot', questions[0].label);
    setTimeout(() => {
      setMessages([first, second]);
      setIsTyping(false);
    }, 850);
  };

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const submitAnswer = (value) => {
    if (isTyping || success || videoStatus !== 'ended' || showForm) return;
    const text = String(value).trim();
    if (!text) return;
    const userMessage = createMessage('user', text);
    setMessages((prev) => [...prev, userMessage]);
    setAnswers((prev) => {
      const next = [...prev];
      next[stepIndex] = text;
      return next;
    });

    const nextStep = stepIndex + 1;
    if (nextStep < questions.length) {
      queueBotReply(questions[nextStep].label, () => setStepIndex(nextStep));
    } else {
      queueBotReply('Thank you. One last step — please share your contact details so a Team Luke advisor can reach out.', () => setShowForm(true));
    }
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (isSubmitting || success) return;
    setIsSubmitting(true);
    const payload = {
      answers: questions.reduce((acc, question, index) => ({
        ...acc,
        [question.label]: answers[index] || ''
      }), {}),
      contact: { ...formData },
      submittedAt: new Date().toISOString()
    };

    await submitLead(payload);
    setIsSubmitting(false);
    setSuccess(true);
    setShowForm(false);
    setMessages((prev) => [...prev, createMessage('bot', successMessage)]);
  };

  const replayIntro = () => {
    setVideoStatus('idle');
    setMessages([]);
    setStepIndex(0);
    setAnswers(Array(questions.length).fill(''));
    setShowForm(false);
    setFormData({ fullName: '', email: '', phone: '', callbackTime: '' });
    setSuccess(false);
    setIsTyping(false);
    setConversationStarted(false);
  };

  const currentQuestion = useMemo(() => questions[stepIndex] ?? null, [stepIndex]);

  const progressLabel = showForm
    ? 'Contact Form'
    : `Step ${Math.min(stepIndex + 1, questions.length)} of ${questions.length}`;

  return {
    isOpen,
    openChat,
    closeChat,
    toggleChat,
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
  };
}

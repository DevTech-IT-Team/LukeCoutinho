import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Users,
  ExternalLink,
  Heart,
  Shield,
  Zap
} from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: "Namaste! I'm your Wellness Path Assistant. How can I guide you toward vibrant health today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const quickOptions = [
    { label: "My Body's 5 Defenses", icon: <Shield size={14} /> },
    { label: "6 Pillars of Lifestyle", icon: <Zap size={14} /> },
    { label: "Join the Global Tribe", icon: <Users size={14} /> },
    { label: "Book a Consultation", icon: <Heart size={14} /> }
  ];

  const botResponses = {
    "My Body's 5 Defenses": "Your body has 5 powerful defense mechanisms: Angiogenesis, Regeneration, Microbiome, DNA Protection, and Immunity. We coach you to harness their power through lifestyle medicine!",
    "6 Pillars of Lifestyle": "Our 6 Pillars are: Deep Cellular Nutrition, Adequate Exercise, Quality Sleep, Emotional Wellness, Reconnecting with Spirit, and the Breath. Which one would you like to explore?",
    "Join the Global Tribe": "We'd love to have you! You can join our 724k+ members on our official WhatsApp Channel or follow Luke on Instagram for daily wisdom.",
    "Book a Consultation": "To begin your personalized wellness journey, you can visit our programs page or reach out to our clinical team directly. Ready to thrive?"
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: option,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponses[option] || "I'm still learning about that! Would you like to explore our 5 Defense Mechanisms instead?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[380px] h-[580px] max-h-[calc(100vh-120px)] bg-white rounded-[2rem] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden flex flex-col relative origin-bottom-right"
          >
            {/* Header - Premium Orange/Slate Design */}
            <div className="p-5 bg-slate-950 text-white flex items-center justify-between relative shrink-0">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-950"></div>
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest text-orange-500">Wellness Bot</h3>
                  <p className="text-[11px] font-black text-slate-400">Trusted Insights</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-white"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'} items-end gap-3`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100 shadow-sm">
                      <Bot size={18} />
                    </div>
                  )}
                  <div className={`max-w-[85%] p-5 rounded-3xl text-sm font-bold leading-relaxed shadow-sm ${
                    msg.type === 'bot' 
                      ? 'bg-slate-50 text-slate-800 rounded-bl-none border border-slate-100' 
                      : 'bg-orange-500 text-white rounded-br-none'
                  }`}>
                    {msg.text}
                    <div className={`text-[10px] mt-2 opacity-60 ${msg.type === 'bot' ? 'text-slate-500' : 'text-orange-50'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center animate-pulse border border-slate-100">
                    <Bot size={16} />
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-bl-none flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}

              {/* Quick Options - Integrated into flow */}
              {!isTyping && (
                <div className="pt-6 space-y-3">
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest pl-4">Suggested Steps</div>
                  <div className="grid grid-cols-2 gap-3 pr-2">
                    {quickOptions.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleOptionClick(opt.label)}
                        className="p-4 rounded-2xl border border-slate-200 bg-white text-[10px] font-black text-slate-600 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all flex flex-col items-center gap-3 shadow-sm text-center"
                      >
                        <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                          {opt.icon}
                        </div>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area - Pure Messaging */}
            <div className="p-6 bg-white border-t border-slate-100 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-50 rounded-2xl px-5 py-3.5 flex items-center gap-3 group focus-within:bg-white transition-all border border-slate-200 focus-within:border-orange-300 shadow-inner">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="bg-transparent border-none outline-none text-sm font-bold text-slate-900 placeholder:text-slate-400 w-full"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.target.value) {
                        handleOptionClick(e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                </div>
                <button className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center hover:bg-slate-950 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Toggle Button - Premium Glow Style */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(249,115,22,0.4)] transition-all relative group ${
          isOpen 
            ? 'bg-slate-950 text-white rotate-90' 
            : 'bg-orange-500 text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
              <div className="relative">
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" fill="white" />
                <Sparkles size={10} className="absolute -top-1 -right-3 text-white animate-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Activity Indicator (Ping) */}
        {!isOpen && (
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white border-2 border-orange-500 animate-ping"></div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import { getGeminiRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I can help you find the perfect AI tool from our directory. What are you looking to do today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getGeminiRecommendation(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-skin-surface w-full max-w-lg rounded-2xl border border-skin-border shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-skin-border flex justify-between items-center bg-skin-surface">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-skin-primary rounded-lg">
               <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-skin-base">AI Assistant</h3>
              <p className="text-xs text-skin-primary">Powered by Gemini</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-skin-fill rounded-full text-skin-muted hover:text-skin-base transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-skin-fill/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'model' ? 'bg-skin-primary' : 'bg-skin-border-highlight'
              }`}>
                {msg.role === 'model' ? <Bot size={16} className="text-white" /> : <User size={16} className="text-skin-base" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'model' 
                  ? 'bg-skin-card text-skin-base rounded-tl-none border border-skin-border' 
                  : 'bg-skin-primary text-white rounded-tr-none shadow-lg shadow-skin-primary/10'
              }`}>
                <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-skin-primary flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-skin-card rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                <span className="w-2 h-2 bg-skin-muted rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-skin-muted rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-skin-muted rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-skin-surface border-t border-skin-border">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask for a recommendation..."
              className="w-full bg-skin-fill text-skin-base placeholder-skin-dim rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-skin-primary border border-skin-border"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-skin-primary hover:bg-skin-primary-hover text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-xs text-skin-dim text-center mt-2">
            AI can make mistakes. Please verify important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiAssistantModal;
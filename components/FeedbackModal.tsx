import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquarePlus, Mail, AlertTriangle, MessageCircle } from 'lucide-react';
import { Language, FeedbackSubmission, FeedbackType } from '../types';
import { translations } from '../i18n/locales';
import { submitFeedback, generateEmailLink } from '../services/feedbackService';

interface FeedbackModalProps {
  isOpen: boolean;
  initialType?: FeedbackType;
  initialToolName?: string;
  onClose: () => void;
  currentLang: Language;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ 
  isOpen, 
  initialType = 'suggestion', 
  initialToolName = '', 
  onClose, 
  currentLang 
}) => {
  const [activeTab, setActiveTab] = useState<FeedbackType>(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // State for form fields
  const [toolName, setToolName] = useState(initialToolName);
  const [toolUrl, setToolUrl] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  
  // Store the last submitted data for the email fallback
  const [lastSubmission, setLastSubmission] = useState<FeedbackSubmission | null>(null);

  const t = translations[currentLang];
  const ft = t.feedback;

  // Reset form when modal opens or initial values change
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialType);
      setToolName(initialToolName || '');
      setToolUrl('');
      setDescription('');
      setContact('');
      setIsSuccess(false);
    }
  }, [isOpen, initialType, initialToolName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submissionData: FeedbackSubmission = {
      type: activeTab,
      toolName: activeTab !== 'general' ? toolName : undefined,
      toolUrl: activeTab === 'suggestion' ? toolUrl : undefined,
      description,
      contact,
      timestamp: Date.now()
    };
    
    // Call the service
    await submitFeedback(submissionData);
    
    setLastSubmission(submissionData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Auto close after delay
    setTimeout(() => {
      if (isOpen) {
         onClose();
         setTimeout(() => setIsSuccess(false), 300); 
      }
    }, 4000);
  };

  const handleManualClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  if (!isOpen) return null;

  const renderContent = () => {
    if (activeTab === 'suggestion') {
      return {
        icon: <MessageSquarePlus size={24} />,
        title: ft.suggestion.title,
        subtitle: ft.suggestion.subtitle,
        color: "text-skin-primary",
        bg: "bg-skin-primary/10"
      };
    } else if (activeTab === 'report') {
      return {
        icon: <AlertTriangle size={24} />,
        title: ft.report.title,
        subtitle: ft.report.subtitle,
        color: "text-red-500",
        bg: "bg-red-500/10"
      };
    } else {
      return {
        icon: <MessageCircle size={24} />,
        title: ft.general.title,
        subtitle: ft.general.subtitle,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
      };
    }
  };

  const content = renderContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-skin-surface w-full max-w-lg rounded-2xl border border-skin-border shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        
        <button 
          onClick={handleManualClose}
          className="absolute right-4 top-4 p-2 hover:bg-skin-fill rounded-full text-skin-muted hover:text-skin-base transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Tabs Header */}
        <div className="flex border-b border-skin-border bg-skin-fill/30">
          {(['suggestion', 'report', 'general'] as FeedbackType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-all ${
                activeTab === type 
                  ? 'border-skin-primary text-skin-base bg-skin-surface' 
                  : 'border-transparent text-skin-muted hover:text-skin-base hover:bg-skin-fill'
              }`}
            >
              {ft.tabs[type]}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 overflow-y-auto scrollbar-thin">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-10 animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-skin-base mb-2">{ft.success}</h3>
              
              {lastSubmission && (
                <a 
                  href={generateEmailLink(lastSubmission)}
                  className="mt-6 flex items-center gap-2 px-4 py-2 bg-skin-fill border border-skin-border rounded-lg text-sm text-skin-muted hover:text-skin-primary hover:border-skin-primary transition-all"
                >
                  <Mail size={14} />
                  <span>{ft.emailFallback}</span>
                </a>
              )}
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className={`w-12 h-12 ${content.bg} ${content.color} rounded-xl flex items-center justify-center mb-4`}>
                  {content.icon}
                </div>
                <h3 className="text-2xl font-bold text-skin-base mb-2">{content.title}</h3>
                <p className="text-skin-muted text-sm leading-relaxed">
                  {content.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Tool Name - Show for Suggestion & Report */}
                {activeTab !== 'general' && (
                  <div>
                    <label className="block text-xs font-medium text-skin-muted mb-1.5 ml-1">
                      {ft.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      value={toolName}
                      onChange={(e) => setToolName(e.target.value)}
                      className="w-full bg-skin-fill border border-skin-border rounded-xl px-4 py-2.5 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim"
                      placeholder={activeTab === 'suggestion' ? "e.g. Awesome AI" : "Tool name"}
                    />
                  </div>
                )}

                {/* URL - Show only for Suggestion */}
                {activeTab === 'suggestion' && (
                  <div>
                    <label className="block text-xs font-medium text-skin-muted mb-1.5 ml-1">
                      {ft.urlLabel}
                    </label>
                    <input
                      type="url"
                      value={toolUrl}
                      onChange={(e) => setToolUrl(e.target.value)}
                      className="w-full bg-skin-fill border border-skin-border rounded-xl px-4 py-2.5 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim"
                      placeholder="https://..."
                    />
                  </div>
                )}

                {/* Description / Issue / Message */}
                <div>
                  <label className="block text-xs font-medium text-skin-muted mb-1.5 ml-1">
                    {activeTab === 'suggestion' ? ft.descLabel : activeTab === 'report' ? ft.issueLabel : ft.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-skin-fill border border-skin-border rounded-xl px-4 py-2.5 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim resize-none"
                    placeholder="..."
                  />
                </div>

                {/* Contact - Optional for all */}
                <div>
                  <label className="block text-xs font-medium text-skin-muted mb-1.5 ml-1">
                    {ft.contactLabel}
                  </label>
                  <input
                    type="email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-skin-fill border border-skin-border rounded-xl px-4 py-2.5 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim"
                    placeholder="name@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-skin-primary hover:bg-skin-primary-hover text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>{ft.submit}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
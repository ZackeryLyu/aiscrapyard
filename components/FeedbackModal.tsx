import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquarePlus, Mail } from 'lucide-react';
import { Language, FeedbackSubmission } from '../types';
import { translations } from '../i18n/locales';
import { submitFeedback, generateEmailLink } from '../services/feedbackService';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // State for form fields
  const [toolName, setToolName] = useState('');
  const [toolUrl, setToolUrl] = useState('');
  const [description, setDescription] = useState('');
  
  // Store the last submitted data for the email fallback
  const [lastSubmission, setLastSubmission] = useState<FeedbackSubmission | null>(null);

  const t = translations[currentLang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submissionData: FeedbackSubmission = {
      toolName,
      toolUrl,
      description,
      timestamp: Date.now()
    };
    
    // Call the service (currently simulates network request)
    await submitFeedback(submissionData);
    
    setLastSubmission(submissionData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form fields
    setToolName('');
    setToolUrl('');
    setDescription('');
      
    // Close modal after showing success message (delayed)
    // Increased delay slightly so user has time to click "Send Email" if they want
    setTimeout(() => {
      // Only close if user hasn't interacted or if we want auto-close behavior
      // For now, let's keep auto-close but it's a bit longer (4s)
      if (isOpen) {
         onClose();
         // Reset success state after closing animation
         setTimeout(() => setIsSuccess(false), 300); 
      }
    }, 4000);
  };

  const handleManualClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setToolName('');
      setToolUrl('');
      setDescription('');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-skin-surface w-full max-w-md rounded-2xl border border-skin-border shadow-2xl relative overflow-hidden">
        
        <button 
          onClick={handleManualClose}
          className="absolute right-4 top-4 p-2 hover:bg-skin-fill rounded-full text-skin-muted hover:text-skin-base transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-6 animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-skin-base mb-2">{t.feedback.success}</h3>
              
              {/* Fallback Email Button */}
              {lastSubmission && (
                <a 
                  href={generateEmailLink(lastSubmission)}
                  className="mt-6 flex items-center gap-2 px-4 py-2 bg-skin-fill border border-skin-border rounded-lg text-sm text-skin-muted hover:text-skin-primary hover:border-skin-primary transition-all"
                >
                  <Mail size={14} />
                  <span>{t.feedback.emailFallback}</span>
                </a>
              )}
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="w-12 h-12 bg-skin-primary/10 text-skin-primary rounded-xl flex items-center justify-center mb-4">
                  <MessageSquarePlus size={24} />
                </div>
                <h3 className="text-2xl font-bold text-skin-base mb-2">{t.feedback.title}</h3>
                <p className="text-skin-muted text-sm leading-relaxed">
                  {t.feedback.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-skin-muted mb-1.5 ml-1">
                    {t.feedback.nameLabel}
                  </label>
                  <input
                    required
                    type="text"
                    value={toolName}
                    onChange={(e) => setToolName(e.target.value)}
                    className="w-full bg-skin-fill border border-skin-border rounded-xl px-4 py-2.5 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim"
                    placeholder="e.g. Awesome AI"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-skin-muted mb-1.5 ml-1">
                    {t.feedback.urlLabel}
                  </label>
                  <input
                    type="url"
                    value={toolUrl}
                    onChange={(e) => setToolUrl(e.target.value)}
                    className="w-full bg-skin-fill border border-skin-border rounded-xl px-4 py-2.5 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-skin-muted mb-1.5 ml-1">
                    {t.feedback.descLabel}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-skin-fill border border-skin-border rounded-xl px-4 py-2.5 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim resize-none"
                    placeholder="..."
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
                      <span>{t.feedback.submit}</span>
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
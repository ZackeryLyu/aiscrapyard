import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Language, LANGUAGE_LABELS } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-skin-surface border border-skin-border-highlight hover:border-skin-primary/50 text-skin-muted hover:text-skin-base px-3 py-2 rounded-lg transition-all text-xs font-medium"
      >
        <Globe size={14} />
        <span>{LANGUAGE_LABELS[currentLang]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-skin-surface border border-skin-border-highlight rounded-xl shadow-xl shadow-black/20 overflow-hidden z-50 max-h-80 overflow-y-auto scrollbar-thin">
          <div className="py-1">
            {(Object.entries(LANGUAGE_LABELS) as [Language, string][]).map(([code, label]) => (
              <button
                key={code}
                onClick={() => {
                  onLanguageChange(code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs hover:bg-skin-fill transition-colors ${
                  currentLang === code ? 'text-skin-primary font-bold bg-skin-fill/50' : 'text-skin-muted'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
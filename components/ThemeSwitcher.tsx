import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, CloudMoon } from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../i18n/locales';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  currentLang: Language;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange, currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[currentLang];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (theme: Theme) => {
    switch (theme) {
      case 'dark': return <Moon size={14} />;
      case 'light': return <Sun size={14} />;
      case 'midnight': return <CloudMoon size={14} />;
    }
  };

  const themes: Theme[] = ['dark', 'light', 'midnight'];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-skin-surface border border-skin-border-highlight hover:border-skin-primary/50 text-skin-muted hover:text-skin-base px-3 py-2 rounded-lg transition-all text-xs font-medium"
        aria-label="Switch Theme"
      >
        {getIcon(currentTheme)}
        <span className="hidden sm:inline">{t.themes[currentTheme]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-skin-surface border border-skin-border-highlight rounded-xl shadow-xl shadow-black/20 overflow-hidden z-50">
          <div className="py-1">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => {
                  onThemeChange(theme);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 hover:bg-skin-fill transition-colors ${
                  currentTheme === theme ? 'text-skin-primary font-bold bg-skin-fill/50' : 'text-skin-muted'
                }`}
              >
                {getIcon(theme)}
                {t.themes[theme]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
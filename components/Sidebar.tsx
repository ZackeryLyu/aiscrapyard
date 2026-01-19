import React from 'react';
import { ToolCategory, Language } from '../types';
import { translations } from '../i18n/locales';
import { MessageSquare, Image, Video, Code, Mic, Briefcase, Search, LayoutGrid, BarChart3, Palette, PlusCircle } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
  currentLang: Language;
  onOpenFeedback: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, isOpen, onCloseMobile, currentLang, onOpenFeedback }) => {
  
  const t = translations[currentLang];

  const categories = [
    { id: 'All', label: t.categories['All'], icon: LayoutGrid },
    { id: ToolCategory.CHATBOT, label: t.categories[ToolCategory.CHATBOT], icon: MessageSquare },
    { id: ToolCategory.PRODUCTIVITY, label: t.categories[ToolCategory.PRODUCTIVITY], icon: Briefcase },
    { id: ToolCategory.IMAGE, label: t.categories[ToolCategory.IMAGE], icon: Image },
    { id: ToolCategory.DESIGN, label: t.categories[ToolCategory.DESIGN], icon: Palette },
    { id: ToolCategory.VIDEO, label: t.categories[ToolCategory.VIDEO], icon: Video },
    { id: ToolCategory.AUDIO, label: t.categories[ToolCategory.AUDIO], icon: Mic },
    { id: ToolCategory.CODING, label: t.categories[ToolCategory.CODING], icon: Code },
    { id: ToolCategory.DATA, label: t.categories[ToolCategory.DATA], icon: BarChart3 },
    { id: ToolCategory.SEARCH, label: t.categories[ToolCategory.SEARCH], icon: Search },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 bottom-0 w-64 bg-skin-surface border-r border-skin-border z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col transition-colors duration-300
      `}>
        <div className="p-6 flex-1 overflow-y-auto scrollbar-thin">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-skin-primary to-purple-600 flex items-center justify-center shadow-lg shadow-skin-primary/20">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-skin-base to-skin-muted">
              {t.appTitle}
            </h1>
          </div>

          <nav className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onCloseMobile();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  activeCategory === cat.id
                    ? 'bg-skin-primary text-white shadow-lg shadow-skin-primary/20'
                    : 'text-skin-muted hover:bg-skin-fill hover:text-skin-base'
                }`}
              >
                <cat.icon size={18} />
                <span>{cat.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-skin-border bg-skin-surface">
           <button
             onClick={() => {
               onOpenFeedback();
               onCloseMobile();
             }}
             className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-skin-border-highlight bg-skin-fill/50 text-skin-base hover:bg-skin-fill hover:border-skin-primary/50 transition-all group"
           >
             <PlusCircle size={18} className="text-skin-primary group-hover:text-skin-primary-hover" />
             <span className="text-sm font-medium">{t.feedback.button}</span>
           </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
import React from 'react';
import { ToolCategory, Language } from '../types';
import { translations } from '../i18n/locales';
import { 
  Brain, Search, Code, PenTool, Image, Video, Mic, 
  Briefcase, Book, Languages, Building, GraduationCap, 
  HeartPulse, Gamepad2, Layout, Server, Cpu, Sprout, 
  PlusCircle, LayoutGrid 
} from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
  currentLang: Language;
  onOpenFeedback: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeCategory, 
  onSelectCategory, 
  isOpen, 
  onCloseMobile, 
  currentLang, 
  onOpenFeedback 
}) => {
  
  const t = translations[currentLang];

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    onCloseMobile();
  };

  const MENU_STRUCTURE = [
    { id: ToolCategory.FOUNDATION, icon: Brain },
    { id: ToolCategory.SEARCH, icon: Search },
    { id: ToolCategory.CODING, icon: Code },
    { id: ToolCategory.WRITING, icon: PenTool },
    { id: ToolCategory.IMAGE, icon: Image },
    { id: ToolCategory.VIDEO, icon: Video },
    { id: ToolCategory.AUDIO, icon: Mic },
    { id: ToolCategory.PRODUCTIVITY, icon: Briefcase },
    { id: ToolCategory.KNOWLEDGE, icon: Book },
    { id: ToolCategory.TRANSLATION, icon: Languages },
    { id: ToolCategory.BUSINESS, icon: Building },
    { id: ToolCategory.EDUCATION, icon: GraduationCap },
    { id: ToolCategory.HEALTH, icon: HeartPulse },
    { id: ToolCategory.SOCIAL, icon: Gamepad2 },
    { id: ToolCategory.UI_UX, icon: Layout },
    { id: ToolCategory.INFRA, icon: Server },
    { id: ToolCategory.HARDWARE, icon: Cpu },
    { id: ToolCategory.NICHE, icon: Sprout },
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
        fixed top-0 left-0 bottom-0 w-72 bg-skin-surface border-r border-skin-border z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col transition-colors duration-300
      `}>
        <div className="p-6 flex-1 overflow-y-auto scrollbar-thin">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-skin-primary to-purple-600 flex items-center justify-center shadow-lg shadow-skin-primary/20">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-skin-base to-skin-muted">
              {t.appTitle}
            </h1>
          </div>

          <nav className="space-y-1">
            {/* All Tools Button */}
            <button
              onClick={() => handleCategoryClick('All')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                activeCategory === 'All'
                  ? 'bg-skin-primary text-white shadow-lg shadow-skin-primary/20'
                  : 'text-skin-muted hover:bg-skin-fill hover:text-skin-base'
              }`}
            >
              <LayoutGrid size={18} />
              <span>{t.categories['All']}</span>
            </button>

            <div className="h-4"></div>

            {/* Main Categories */}
            {MENU_STRUCTURE.map((cat) => {
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium group ${
                    isActive
                      ? 'bg-skin-fill text-skin-primary'
                      : 'text-skin-muted hover:bg-skin-fill hover:text-skin-base'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <cat.icon size={18} className={isActive ? 'text-skin-primary' : ''} />
                    <span>{t.categories[cat.id] || cat.id}</span>
                  </div>
                </button>
              );
            })}
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
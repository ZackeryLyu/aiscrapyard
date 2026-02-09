import React from 'react';
import { ToolCategory, Language } from '../types';
import { translations } from '../i18n/locales';
import { 
  Brain, Search, Code, PenTool, Image, Video, Mic, 
  Briefcase, Book, Languages, Building, GraduationCap, 
  HeartPulse, Gamepad2, Layout, Server, Cpu, Sprout, 
  PlusCircle, LayoutGrid, Sparkles 
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

  const CATEGORY_ICONS: Record<string, React.ElementType> = {
    [ToolCategory.FOUNDATION]: Brain,
    [ToolCategory.SEARCH]: Search,
    [ToolCategory.CODING]: Code,
    [ToolCategory.WRITING]: PenTool,
    [ToolCategory.IMAGE]: Image,
    [ToolCategory.VIDEO]: Video,
    [ToolCategory.AUDIO]: Mic,
    [ToolCategory.PRODUCTIVITY]: Briefcase,
    [ToolCategory.KNOWLEDGE]: Book,
    [ToolCategory.TRANSLATION]: Languages,
    [ToolCategory.BUSINESS]: Building,
    [ToolCategory.EDUCATION]: GraduationCap,
    [ToolCategory.HEALTH]: HeartPulse,
    [ToolCategory.SOCIAL]: Gamepad2,
    [ToolCategory.UI_UX]: Layout,
    [ToolCategory.INFRA]: Server,
    [ToolCategory.HARDWARE]: Cpu,
    [ToolCategory.NICHE]: Sprout,
  };

  // Grouped Menu Structure for better UX
  const MENU_GROUPS = [
    {
      title: t.menuGroups.core,
      items: [ToolCategory.FOUNDATION, ToolCategory.SEARCH]
    },
    {
      title: t.menuGroups.creative,
      items: [ToolCategory.IMAGE, ToolCategory.VIDEO, ToolCategory.AUDIO, ToolCategory.WRITING, ToolCategory.UI_UX]
    },
    {
      title: t.menuGroups.dev,
      items: [ToolCategory.CODING, ToolCategory.INFRA, ToolCategory.HARDWARE]
    },
    {
      title: t.menuGroups.work,
      items: [ToolCategory.PRODUCTIVITY, ToolCategory.BUSINESS, ToolCategory.TRANSLATION, ToolCategory.KNOWLEDGE]
    },
    {
      title: t.menuGroups.life,
      items: [ToolCategory.EDUCATION, ToolCategory.HEALTH, ToolCategory.SOCIAL, ToolCategory.NICHE]
    }
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
        fixed inset-y-0 left-0 w-72 bg-skin-surface border-r border-skin-border z-50 
        transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col h-full
      `}>
        {/* Brand Header - Fixed at top of Sidebar */}
        <div className="p-6 pb-2 shrink-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-skin-primary to-purple-600 flex items-center justify-center shadow-lg shadow-skin-primary/20 ring-1 ring-white/10">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-skin-base to-skin-muted leading-tight">
                {t.appTitle}
              </h1>
              <p className="text-[10px] text-skin-dim uppercase tracking-wider font-semibold">{t.directory}</p>
            </div>
          </div>

          {/* All Tools Button */}
          <button
            onClick={() => handleCategoryClick('All')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-bold border ${
              activeCategory === 'All'
                ? 'bg-skin-primary text-white border-skin-primary shadow-lg shadow-skin-primary/25'
                : 'bg-skin-fill border-skin-border text-skin-muted hover:border-skin-primary/30 hover:text-skin-base'
            }`}
          >
            <LayoutGrid size={18} />
            <span>{t.categories['All']}</span>
          </button>
        </div>

        {/* Scrollable Menu Area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-4 pb-4">
          <div className="space-y-6 mt-2">
            {MENU_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h3 className="px-3 mb-2 text-[10px] font-bold text-skin-dim uppercase tracking-widest">
                  {group.title}
                </h3>
                <div className="space-y-0.5">
                  {group.items.map((catId) => {
                    const isActive = activeCategory === catId;
                    const Icon = CATEGORY_ICONS[catId] || Brain;
                    
                    return (
                      <button
                        key={catId}
                        onClick={() => handleCategoryClick(catId)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium group relative ${
                          isActive
                            ? 'bg-skin-primary/10 text-skin-primary'
                            : 'text-skin-muted hover:bg-skin-fill hover:text-skin-base'
                        }`}
                      >
                        <div className="flex items-center gap-3 z-10">
                          <Icon size={16} className={`transition-colors ${isActive ? 'text-skin-primary' : 'text-skin-dim group-hover:text-skin-base'}`} />
                          <span>{t.categories[catId] || catId}</span>
                        </div>
                        {isActive && (
                          <div className="w-1 h-4 rounded-full bg-skin-primary absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-0 lg:left-auto lg:right-2"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions - Fixed at bottom of Sidebar */}
        <div className="p-4 border-t border-skin-border bg-skin-surface shrink-0">
           <button
             onClick={() => {
               onOpenFeedback();
               onCloseMobile();
             }}
             className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-skin-border-highlight bg-skin-fill/30 text-skin-muted hover:bg-skin-fill hover:text-skin-primary hover:border-skin-primary/50 transition-all group"
           >
             <PlusCircle size={16} className="text-skin-dim group-hover:text-skin-primary" />
             <span className="text-xs font-semibold">{t.feedback.button}</span>
           </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
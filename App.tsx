import React, { useState, useMemo, useEffect } from 'react';
import { Menu, Search, PlusCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import FeedbackModal from './components/FeedbackModal';
import { toolsData } from './data/tools';
import { Region, AiTool, Language, Theme, FeedbackType } from './types';
import { translations } from './i18n/locales';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const [searchQuery, setSearchQuery] = useState('');
  
  // Default to 'ALL' for International Version
  const [regionFilter, setRegionFilter] = useState<'ALL' | Region>('ALL');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Feedback Modal State
  const [feedbackState, setFeedbackState] = useState<{
    isOpen: boolean;
    type: FeedbackType;
    toolName?: string;
  }>({ isOpen: false, type: 'suggestion' });

  // Default to 'en' (English) for International Version
  const [currentLang, setCurrentLang] = useState<Language>('en');
  // Default to 'dark' (Cosmic) theme for International Version
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');

  const t = translations[currentLang];

  // Apply theme to body/root
  useEffect(() => {
    // Reset classes
    document.body.classList.remove('theme-light', 'theme-midnight');
    
    // Apply new theme class if not default (dark is default in :root)
    if (currentTheme !== 'dark') {
      document.body.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  const handleOpenFeedback = (type: FeedbackType = 'suggestion') => {
    setFeedbackState({ isOpen: true, type });
  };

  const handleReportTool = (tool: AiTool) => {
    setFeedbackState({ 
      isOpen: true, 
      type: 'report',
      toolName: tool.translations?.[currentLang]?.name || tool.name
    });
  };

  // Filter Logic
  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    return toolsData.filter(tool => {
      // 1. Check Base Fields (Name, Description, Tags)
      const matchesBase = 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query));

      // 2. Check ALL Available Translations (Global Search)
      const matchesTranslations = tool.translations
        ? Object.values(tool.translations).some(trans => 
            (trans.name && trans.name.toLowerCase().includes(query)) ||
            (trans.description && trans.description.toLowerCase().includes(query))
          )
        : false;
      
      const matchesSearch = matchesBase || matchesTranslations;
      
      // Category Match
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      
      const matchesRegion = regionFilter === 'ALL' || tool.region === regionFilter;

      return matchesCategory && matchesSearch && matchesRegion;
    });
  }, [activeCategory, searchQuery, regionFilter]);

  // Group by category if 'All' is selected for a sectioned view
  const displayGroups = useMemo<Record<string, AiTool[]>>(() => {
    if (activeCategory === 'All') {
        // Group by Main Category
        const groups: Record<string, AiTool[]> = {};
        filteredTools.forEach(tool => {
            if (!groups[tool.category]) groups[tool.category] = [];
            groups[tool.category].push(tool);
        });
        return groups;
    } else {
        // Single Category View - no sub grouping needed
        return { [activeCategory]: filteredTools };
    }
  }, [activeCategory, filteredTools]);

  return (
    <div className="flex min-h-screen bg-skin-fill text-skin-base font-sans selection:bg-skin-primary/30 transition-colors duration-300">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
        currentLang={currentLang}
        onOpenFeedback={() => handleOpenFeedback('suggestion')}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 border-b border-skin-border bg-skin-surface/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6 lg:px-10 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-skin-fill rounded-lg text-skin-muted hover:text-skin-base transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="lg:hidden font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-skin-base to-skin-muted">
              {t.appTitle}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-skin-dim group-focus-within:text-skin-primary transition-colors" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-skin-fill border border-skin-border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-skin-primary/50 focus:border-skin-primary transition-all placeholder-skin-dim text-skin-base"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             {/* Region Filter */}
             <div className="hidden sm:flex bg-skin-surface rounded-lg p-1 border border-skin-border-highlight">
                <button 
                  onClick={() => setRegionFilter('ALL')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${regionFilter === 'ALL' ? 'bg-skin-fill text-skin-base shadow' : 'text-skin-muted hover:text-skin-base'}`}
                >
                  {t.regionAll}
                </button>
                <button 
                  onClick={() => setRegionFilter(Region.CN)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${regionFilter === Region.CN ? 'bg-red-500/10 text-red-500 shadow' : 'text-skin-muted hover:text-skin-base'}`}
                >
                  {t.regionCN}
                </button>
                <button 
                  onClick={() => setRegionFilter(Region.GLOBAL)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${regionFilter === Region.GLOBAL ? 'bg-blue-500/10 text-blue-500 shadow' : 'text-skin-muted hover:text-skin-base'}`}
                >
                  {t.regionGlobal}
                </button>
             </div>

             {/* Theme Switcher */}
             <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setCurrentTheme} currentLang={currentLang} />

             {/* Language Switcher */}
             <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
          </div>
        </header>

        {/* Mobile Search Bar (Below Header) */}
        <div className="md:hidden px-6 py-4 border-b border-skin-border bg-skin-fill">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-skin-dim" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-skin-surface border border-skin-border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-skin-primary/50 text-skin-base"
            />
          </div>
          {/* Mobile Region Filter */}
          <div className="flex mt-3 bg-skin-surface rounded-lg p-1 border border-skin-border">
            <button 
              onClick={() => setRegionFilter('ALL')}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${regionFilter === 'ALL' ? 'bg-skin-fill text-skin-base shadow' : 'text-skin-muted'}`}
            >
              {t.regionAll}
            </button>
            <button 
              onClick={() => setRegionFilter(Region.CN)}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${regionFilter === Region.CN ? 'bg-red-500/10 text-red-500 shadow' : 'text-skin-muted'}`}
            >
              {t.regionCN}
            </button>
            <button 
              onClick={() => setRegionFilter(Region.GLOBAL)}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${regionFilter === Region.GLOBAL ? 'bg-blue-500/10 text-blue-500 shadow' : 'text-skin-muted'}`}
            >
              {t.regionGlobal}
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-thin">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header Text for Context */}
            {activeCategory !== 'All' && (
              <div className="mb-4">
                 <h2 className="text-3xl font-bold text-skin-base">{(t.categories as any)[activeCategory]}</h2>
              </div>
            )}

            {/* Results Grid */}
            {Object.keys(displayGroups).length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-skin-surface rounded-full flex items-center justify-center mx-auto mb-4 border border-skin-border">
                  <Search className="text-skin-dim" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-skin-base">{t.noTools}</h3>
                <p className="text-skin-muted mt-2">{t.tryAdjusting}</p>
                
                <button 
                  onClick={() => handleOpenFeedback('suggestion')}
                  className="mt-6 px-6 py-2.5 bg-skin-primary hover:bg-skin-primary-hover text-white rounded-xl font-medium transition-colors inline-flex items-center gap-2"
                >
                  <PlusCircle size={18} />
                  <span>{t.feedback.button}</span>
                </button>
              </div>
            ) : (
              <>
                {(Object.entries(displayGroups) as [string, AiTool[]][]).map(([groupKey, tools]) => {
                  let label = (t.categories as any)[groupKey] || groupKey;
                  
                  return (
                    <section key={groupKey} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-xl font-bold text-skin-base">{label}</h2>
                        <div className="h-px bg-skin-border flex-1 ml-4"></div>
                        <span className="text-xs text-skin-muted font-mono bg-skin-surface px-2 py-1 rounded border border-skin-border">
                          {tools.length}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {tools.map(tool => (
                          <ToolCard 
                            key={tool.id} 
                            tool={tool} 
                            currentLang={currentLang} 
                            onReport={handleReportTool}
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}

                {/* Bottom CTA for feedback when results are present */}
                <div className="py-8 text-center border-t border-skin-border/50 mt-12">
                  <p className="text-skin-muted text-sm mb-4">{t.feedback.suggestion.subtitle}</p>
                  <button 
                    onClick={() => handleOpenFeedback('suggestion')}
                    className="text-skin-primary hover:text-skin-primary-hover text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>{t.feedback.button}</span>
                    <PlusCircle size={14} />
                  </button>
                </div>
              </>
            )}

            {/* Footer */}
            <div className="pt-6 pb-8 border-t border-skin-border text-center text-skin-muted text-sm flex flex-col gap-2">
              <p>&copy; {new Date().getFullYear()} {t.footer}</p>
              {currentLang === 'zh-CN' && (
                <div>
                  <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-skin-base transition-colors">备案号：</a>
                  <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-skin-base transition-colors">晋ICP备2026000851号</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Feedback Modal */}
      <FeedbackModal 
        isOpen={feedbackState.isOpen} 
        initialType={feedbackState.type}
        initialToolName={feedbackState.toolName}
        onClose={() => setFeedbackState(prev => ({ ...prev, isOpen: false }))} 
        currentLang={currentLang}
      />
    </div>
  );
};

export default App;
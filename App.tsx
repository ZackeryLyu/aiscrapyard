import React, { useState, useMemo, useEffect } from 'react';
import { Menu, Search, Scale, Sparkles, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import FeedbackModal from './components/FeedbackModal';
import ComparisonModal from './components/ComparisonModal';
import AiAssistantModal from './components/AiAssistantModal';
import { toolsData } from './data/tools';
import { Region, AiTool, Language, Theme, FeedbackType, ToolCategory } from './types';
import { translations } from './i18n/locales';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Default to 'ALL' to show all tools (Chinese + Global) as requested
  const [regionFilter, setRegionFilter] = useState<'ALL' | Region>('ALL');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Comparison State
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [comparisonCategory, setComparisonCategory] = useState<ToolCategory | null>(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Feedback Modal State
  const [feedbackState, setFeedbackState] = useState<{
    isOpen: boolean;
    type: FeedbackType;
    toolName?: string;
  }>({ isOpen: false, type: 'suggestion' });

  // AI Assistant State
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  // Default to 'en' for English
  const [currentLang, setCurrentLang] = useState<Language>('en');
  // Default to 'dark' (Cosmic) theme
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');

  const t = translations[currentLang];

  // Apply theme to body/root
  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-midnight');
    
    // Apply new theme class if not default (dark is default in :root)
    if (currentTheme !== 'dark') {
      document.body.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  // Filter Tools
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      // 1. Category Filter
      if (activeCategory !== 'All' && tool.category !== activeCategory) {
        return false;
      }

      // 2. Region Filter
      if (regionFilter !== 'ALL' && tool.region !== regionFilter) {
        return false;
      }

      // 3. Search Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        // Search in current language or default
        const name = tool.translations?.[currentLang]?.name || tool.name;
        const desc = tool.translations?.[currentLang]?.description || tool.description;
        const tags = tool.tags.join(' ');
        
        return (
          name.toLowerCase().includes(query) ||
          desc.toLowerCase().includes(query) ||
          tags.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [activeCategory, searchQuery, regionFilter, currentLang]);

  // Group tools by category for display
  const toolsByCategory = useMemo(() => {
    const groups: Partial<Record<ToolCategory, AiTool[]>> = {};
    
    filteredTools.forEach(tool => {
      if (!groups[tool.category]) {
        groups[tool.category] = [];
      }
      groups[tool.category]!.push(tool);
    });
    
    return groups;
  }, [filteredTools]);

  // Define category order (using the enum definition order for consistency)
  const categoryOrder = Object.values(ToolCategory);

  // Comparison Logic
  const handleToggleCompare = (tool: AiTool) => {
    if (selectedTools.includes(tool.id)) {
      const newSelection = selectedTools.filter(id => id !== tool.id);
      setSelectedTools(newSelection);
      if (newSelection.length === 0) {
        setComparisonCategory(null);
      }
    } else {
      if (selectedTools.length >= 3) {
        alert(t.comparison.maxLimit);
        return;
      }
      if (comparisonCategory && tool.category !== comparisonCategory) {
        alert(t.comparison.sameCategoryError);
        return;
      }
      setSelectedTools([...selectedTools, tool.id]);
      setComparisonCategory(tool.category);
    }
  };

  const selectedToolObjects = toolsData.filter(t => selectedTools.includes(t.id));

  return (
    // Changed: min-h-screen -> h-screen overflow-hidden to fix scrolling issues
    <div className="flex h-screen overflow-hidden bg-skin-fill text-skin-base transition-colors duration-300 font-sans selection:bg-skin-primary/30">
      
      {/* Sidebar */}
      <Sidebar 
        activeCategory={activeCategory} 
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          // Removed window.scrollTo since we now scroll the container
          const container = document.getElementById('tools-container');
          if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
        currentLang={currentLang}
        onOpenFeedback={() => setFeedbackState({ isOpen: true, type: 'general' })}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
        
        {/* Header */}
        <header className="h-16 border-b border-skin-border bg-skin-surface/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 z-30 shrink-0">
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-skin-muted hover:text-skin-base"
            >
              <Menu size={24} />
            </button>
            <span className="font-bold text-lg text-skin-base">{t.appTitle}</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-auto hidden lg:block relative">
            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-skin-fill border border-skin-border rounded-xl py-2 pl-10 pr-4 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50 transition-all placeholder-skin-dim group-hover:border-skin-border-highlight"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-skin-dim group-hover:text-skin-muted transition-colors" size={16} />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-skin-dim hover:text-skin-base"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Region Toggle removed as requested to show all data by default */}

            <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setCurrentTheme} currentLang={currentLang} />
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
            
            {/* AI Assistant Button */}
            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="hidden sm:flex items-center justify-center p-2 rounded-lg bg-skin-primary/10 text-skin-primary hover:bg-skin-primary hover:text-white transition-all border border-skin-primary/20"
              title="AI Assistant"
            >
              <Sparkles size={18} />
            </button>
          </div>
        </header>

        {/* Mobile Search Bar (Visible only on mobile below header) */}
        <div className="lg:hidden p-4 pb-0 bg-skin-fill shrink-0">
           <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-skin-surface border border-skin-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-skin-base focus:outline-none focus:ring-2 focus:ring-skin-primary/50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-skin-dim" size={16} />
           </div>
        </div>

        {/* Tool Grid Content - ID added for scrolling */}
        <div id="tools-container" className="flex-1 overflow-y-auto scrollbar-thin p-4 lg:p-8">
          
          {/* Comparison Floating Bar */}
          {selectedTools.length > 0 && (
            <div className="fixed bottom-6 left-1/2 lg:left-[calc(50%+9rem)] -translate-x-1/2 z-40 flex items-center gap-4 bg-skin-surface/90 backdrop-blur-md border border-skin-primary/30 shadow-2xl shadow-skin-primary/10 px-6 py-3 rounded-2xl animate-in slide-in-from-bottom-10 fade-in duration-300">
              <div className="flex items-center gap-2 text-sm font-medium text-skin-base">
                <Scale size={18} className="text-skin-primary" />
                <span>{selectedTools.length} {t.comparison.selected}</span>
              </div>
              <div className="h-4 w-px bg-skin-border"></div>
              <button 
                onClick={() => setIsComparisonOpen(true)}
                disabled={selectedTools.length < 2}
                className="text-sm font-bold text-skin-primary hover:text-skin-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.comparison.compare}
              </button>
              <button 
                onClick={() => {
                  setSelectedTools([]);
                  setComparisonCategory(null);
                }}
                className="p-1 hover:bg-skin-fill rounded-full text-skin-muted hover:text-red-500 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {filteredTools.length > 0 ? (
            <div className="pb-20 space-y-10">
              {categoryOrder.map(cat => {
                const catTools = toolsByCategory[cat];
                if (!catTools || catTools.length === 0) return null;

                return (
                  <div key={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                     {/* Category Header */}
                     <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-xl font-bold text-skin-base flex items-center gap-3">
                            {t.categories[cat]}
                            <span className="text-xs font-semibold text-skin-muted bg-skin-surface border border-skin-border px-2.5 py-0.5 rounded-full shadow-sm">
                                {catTools.length}
                            </span>
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-skin-border via-skin-border/50 to-transparent"></div>
                     </div>
                     
                     {/* Tools Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {catTools.map(tool => (
                            <ToolCard 
                              key={tool.id} 
                              tool={tool} 
                              currentLang={currentLang}
                              onReport={() => setFeedbackState({ isOpen: true, type: 'report', toolName: tool.name })}
                              isSelected={selectedTools.includes(tool.id)}
                              onToggleCompare={handleToggleCompare}
                              isComparisonDisabled={comparisonCategory !== null && tool.category !== comparisonCategory}
                            />
                        ))}
                     </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center">
              <div className="w-20 h-20 bg-skin-surface border border-skin-border rounded-full flex items-center justify-center mb-4">
                <Search size={32} className="text-skin-dim" />
              </div>
              <h3 className="text-xl font-bold text-skin-base mb-2">{t.noTools}</h3>
              <p className="text-skin-muted">{t.tryAdjusting}</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setRegionFilter('ALL');
                  setActiveCategory('All');
                }}
                className="mt-6 text-skin-primary font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-12 pt-8 pb-8 border-t border-skin-border/50 text-center">
            <p className="text-skin-muted text-sm mb-4">{t.footer}</p>
          </footer>
        </div>
      </main>

      {/* Modals */}
      <FeedbackModal 
        isOpen={feedbackState.isOpen} 
        onClose={() => setFeedbackState({ ...feedbackState, isOpen: false })}
        initialType={feedbackState.type}
        initialToolName={feedbackState.toolName}
        currentLang={currentLang}
      />

      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        tools={selectedToolObjects}
        currentLang={currentLang}
        onRemoveTool={(id) => {
          const newSelection = selectedTools.filter(tid => tid !== id);
          setSelectedTools(newSelection);
          if (newSelection.length === 0) setComparisonCategory(null);
        }}
      />

      <AiAssistantModal 
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />
    </div>
  );
};

export default App;
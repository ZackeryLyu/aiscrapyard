import React from 'react';
import { X, ExternalLink, Globe, MapPin, Building2, Smartphone, DollarSign, FileText, Check, Minus, Sparkles } from 'lucide-react';
import { AiTool, Language, Region, PricingModel, ToolCategory } from '../types';
import { translations } from '../i18n/locales';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  tools: AiTool[];
  currentLang: Language;
  onRemoveTool: (id: string) => void;
}

// Configuration maps tool categories to specific comparison feature keys
const CATEGORY_DIMENSIONS: Partial<Record<ToolCategory, string[]>> = {
  [ToolCategory.FOUNDATION]: ['score', 'strengths', 'limitations', 'best_for', 'review', 'context_window', 'multimodal'],
  [ToolCategory.SEARCH]: ['score', 'strengths', 'limitations', 'best_for', 'review', 'citation', 'academic_focus', 'internet_access'],
  [ToolCategory.CODING]: ['score', 'strengths', 'limitations', 'best_for', 'review', 'ide_support', 'codebase_aware', 'deployment'],
  [ToolCategory.WRITING]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.IMAGE]: ['score', 'strengths', 'limitations', 'best_for', 'review', 'image_resolution', 'text_rendering', 'editing_tools'],
  [ToolCategory.VIDEO]: ['score', 'strengths', 'limitations', 'best_for', 'review', 'video_duration', 'frame_rate', 'image_resolution'],
  [ToolCategory.AUDIO]: ['score', 'strengths', 'limitations', 'best_for', 'review', 'voice_cloning', 'expressiveness'],
  [ToolCategory.PRODUCTIVITY]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.KNOWLEDGE]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.TRANSLATION]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.BUSINESS]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.EDUCATION]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.HEALTH]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.SOCIAL]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.UI_UX]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.INFRA]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.HARDWARE]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
  [ToolCategory.NICHE]: ['score', 'strengths', 'limitations', 'best_for', 'review'],
};

const ComparisonModal: React.FC<ComparisonModalProps> = ({ 
  isOpen, 
  onClose, 
  tools, 
  currentLang,
  onRemoveTool
}) => {
  const t = translations[currentLang];

  if (!isOpen) return null;

  const primaryCategory = tools.length > 0 ? tools[0].category : null;
  const dynamicKeys = primaryCategory ? CATEGORY_DIMENSIONS[primaryCategory] || [] : [];

  const getFeatureValue = (tool: AiTool, key: string) => {
    const localizedFeatures = tool.translations?.[currentLang]?.features;
    if (localizedFeatures && localizedFeatures[key] !== undefined) {
      return localizedFeatures[key];
    }
    return tool.features?.[key];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-skin-surface w-full max-w-7xl h-[85vh] rounded-2xl border border-skin-border shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-skin-border bg-skin-surface/90 backdrop-blur shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-skin-base">{t.comparison.title}</h2>
            <p className="text-skin-muted text-sm mt-1">{tools.length} / 3 {t.comparison.selected}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-skin-fill rounded-full text-skin-muted hover:text-skin-base transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content - Single Grid for perfect row alignment */}
        <div className="flex-1 overflow-y-auto scrollbar-thin p-6">
          {tools.length === 0 ? (
            <div className="flex h-full items-center justify-center text-skin-muted">
              {t.comparison.empty}
            </div>
          ) : (
            <div 
              className="grid gap-x-4 md:gap-x-8 gap-y-0 text-sm"
              style={{ 
                // First column fixed width, remaining columns split equally
                gridTemplateColumns: `140px repeat(${tools.length}, minmax(0, 1fr))` 
              }}
            >
              {/* --- Tool Header Row --- */}
              <div className="p-4 flex items-end pb-2 font-semibold text-skin-muted/50 uppercase tracking-wider text-xs">
                {/* Empty corner cell */}
              </div>
              {tools.map((tool) => {
                const localizedName = tool.translations?.[currentLang]?.name || tool.name;
                return (
                  <div key={tool.id} className="p-4 flex flex-col gap-3 relative border-b border-skin-border/30">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-skin-surface border border-skin-border shadow-sm shrink-0">
                        <img src={tool.iconUrl} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <button 
                        onClick={() => onRemoveTool(tool.id)}
                        className="p-1 text-skin-muted hover:text-red-500 rounded-full hover:bg-red-500/10 transition-colors"
                        title={t.comparison.remove}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-skin-base leading-tight break-words">{localizedName}</h3>
                      <a 
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-skin-primary hover:underline mt-1"
                      >
                        {t.visitWebsite} <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* --- Developer --- */}
              <div className="p-4 flex items-center text-skin-muted font-medium border-b border-skin-border/30">
                <Building2 size={16} className="mr-2 shrink-0" /> {t.comparison.dimensions.developer}
              </div>
              {tools.map(tool => (
                <div key={`${tool.id}-dev`} className="p-4 flex items-center text-skin-base border-b border-skin-border/30 break-words">
                  {tool.developer || "—"}
                </div>
              ))}

              {/* --- Platforms --- */}
              <div className="p-4 flex items-center text-skin-muted font-medium border-b border-skin-border/30">
                <Smartphone size={16} className="mr-2 shrink-0" /> {t.comparison.dimensions.platforms}
              </div>
              {tools.map(tool => (
                <div key={`${tool.id}-platform`} className="p-4 flex flex-wrap gap-1.5 items-center border-b border-skin-border/30">
                  {tool.platforms?.map(p => (
                    <span key={p} className="text-xs bg-skin-surface px-2 py-1 rounded text-skin-muted border border-skin-border whitespace-nowrap">
                      {p}
                    </span>
                  )) || "—"}
                </div>
              ))}

              {/* --- Pricing --- */}
              <div className="p-4 flex items-center text-skin-muted font-medium border-b border-skin-border/30">
                <DollarSign size={16} className="mr-2 shrink-0" /> {t.comparison.dimensions.pricing}
              </div>
              {tools.map(tool => (
                <div key={`${tool.id}-pricing`} className="p-4 flex flex-wrap gap-1 items-center border-b border-skin-border/30">
                  {tool.pricing?.map((p, idx) => (
                    <span key={idx} className={`text-xs font-bold px-2 py-1 rounded-full border whitespace-nowrap ${
                      p === PricingModel.FREE ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                      p === PricingModel.PAID ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                      p === PricingModel.CONTACT ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
                      'bg-blue-500/10 text-blue-500 border-blue-500/20'
                    }`}>
                      {t.pricing[p]}
                    </span>
                  ))}
                </div>
              ))}

              {/* --- Region --- */}
              <div className="p-4 flex items-center text-skin-muted font-medium border-b border-skin-border/30">
                <Globe size={16} className="mr-2 shrink-0" /> {t.comparison.dimensions.region}
              </div>
              {tools.map(tool => (
                <div key={`${tool.id}-region`} className="p-4 flex items-center border-b border-skin-border/30">
                  <span className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${
                    tool.region === Region.CN ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'
                  }`}>
                    {tool.region === Region.CN ? <MapPin size={12} /> : <Globe size={12} />}
                    {tool.region === Region.CN ? t.regionCN : t.regionGlobal}
                  </span>
                </div>
              ))}

              {/* --- Dynamic Dimensions Loop --- */}
              {dynamicKeys.map(key => (
                <React.Fragment key={key}>
                  <div className="p-4 flex items-center text-skin-primary font-medium border-b border-skin-border/30">
                    <Sparkles size={14} className="mr-2 shrink-0" /> 
                    {(t.comparison.dimensions as any)[key] || key}
                  </div>
                  {tools.map(tool => {
                    const val = getFeatureValue(tool, key) ?? "—";
                    
                    // Special styling for score
                    if (key === 'score' && typeof val === 'number') {
                      return (
                        <div key={`${tool.id}-${key}`} className="p-4 flex items-center border-b border-skin-border/30">
                          <span className={`font-bold px-2 py-0.5 rounded text-sm ${
                            val >= 9.0 ? 'bg-green-500/20 text-green-500' :
                            val >= 8.0 ? 'bg-blue-500/20 text-blue-500' :
                            'bg-skin-surface text-skin-muted'
                          }`}>
                            {val}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <div key={`${tool.id}-${key}`} className="p-4 flex items-center text-skin-base border-b border-skin-border/30 leading-relaxed">
                        {typeof val === 'boolean' ? (
                          val ? <Check size={18} className="text-green-500" /> : <Minus size={18} className="text-skin-dim" />
                        ) : (
                          // Allow text wrapping naturally
                          <span className="whitespace-normal break-words">{val}</span>
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}

              {/* --- Description (Last Row) --- */}
              <div className="p-4 flex items-start pt-4 text-skin-muted font-medium">
                <FileText size={16} className="mr-2 shrink-0 mt-0.5" /> {t.comparison.dimensions.description}
              </div>
              {tools.map(tool => {
                const localizedDesc = tool.translations?.[currentLang]?.description || tool.description;
                return (
                  <div key={`${tool.id}-desc`} className="p-4 text-sm text-skin-muted leading-relaxed break-words">
                    {localizedDesc}
                  </div>
                );
              })}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
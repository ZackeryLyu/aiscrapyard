import React from 'react';
import { AiTool, Region, Language, PricingModel } from '../types';
import { translations } from '../i18n/locales';
import { ExternalLink, Globe, MapPin, Flag, CheckSquare, Square } from 'lucide-react';

interface ToolCardProps {
  tool: AiTool;
  currentLang: Language;
  onReport?: (tool: AiTool) => void;
  isSelected?: boolean;
  onToggleCompare?: (tool: AiTool) => void;
  isComparisonDisabled?: boolean; // Prop to disable comparison selection
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  tool, 
  currentLang, 
  onReport,
  isSelected = false,
  onToggleCompare,
  isComparisonDisabled = false
}) => {
  const t = translations[currentLang];

  // Resolve localized content
  const localizedName = tool.translations?.[currentLang]?.name || tool.name;
  const localizedDesc = tool.translations?.[currentLang]?.description || tool.description;

  // Primary pricing model (display just the first one for the badge if multiple)
  const primaryPricing = tool.pricing?.[0] || PricingModel.FREEMIUM;

  return (
    <div className={`group relative flex flex-col h-full bg-skin-card backdrop-blur-sm border rounded-2xl p-5 hover:bg-skin-card-hover hover:border-skin-primary/50 hover:shadow-lg hover:shadow-skin-primary/10 transition-all duration-300 ${isSelected ? 'border-skin-primary ring-1 ring-skin-primary shadow-lg shadow-skin-primary/10' : 'border-skin-border'} ${isComparisonDisabled ? 'opacity-60 grayscale-[0.5]' : ''}`}>
      
      {/* Selection Overlay (Top Right) */}
      {onToggleCompare && (
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!isComparisonDisabled) {
              onToggleCompare(tool);
            }
          }}
          disabled={isComparisonDisabled}
          className={`absolute top-4 right-4 z-10 p-1.5 rounded-lg transition-all ${
            isSelected 
              ? 'bg-skin-primary text-white shadow-lg' 
              : isComparisonDisabled 
                ? 'bg-skin-fill text-skin-muted cursor-not-allowed border border-skin-border/50'
                : 'bg-skin-surface text-skin-muted hover:text-skin-primary border border-skin-border'
          }`}
          title={isComparisonDisabled ? t.comparison.sameCategoryError : t.comparison.selectToCompare}
        >
          {isSelected ? <CheckSquare size={18} /> : <Square size={18} />}
        </button>
      )}

      {/* Header: Icon & Region Badge */}
      <div className="flex justify-between items-start mb-4 pr-10">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-skin-surface border border-skin-border shadow-sm">
          <img 
            src={tool.iconUrl} 
            alt={localizedName} 
            className={`w-full h-full object-cover transition-transform duration-500 ${!isComparisonDisabled ? 'group-hover:scale-110' : ''}`} 
            loading="lazy"
          />
        </div>
      </div>

      {/* Badges Row */}
      <div className="flex flex-wrap gap-2 mb-3">
        {/* Region */}
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 w-fit ${
            tool.region === Region.CN 
              ? 'bg-red-500/10 text-red-500 border-red-500/20' 
              : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
          }`}>
            {tool.region === Region.CN ? <MapPin size={10} /> : <Globe size={10} />}
            {tool.region === Region.CN ? t.regionCN : t.regionGlobal}
        </span>

        {/* Pricing */}
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border w-fit ${
           primaryPricing === PricingModel.FREE ? 'bg-green-500/10 text-green-500 border-green-500/20' :
           primaryPricing === PricingModel.PAID ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
           primaryPricing === PricingModel.CONTACT ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
           'bg-blue-500/10 text-blue-500 border-blue-500/20'
        }`}>
          {t.pricing[primaryPricing]}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-skin-base group-hover:text-skin-primary transition-colors">
          {localizedName}
        </h3>
        <p className="text-sm text-skin-muted mt-2 leading-relaxed line-clamp-3">
          {localizedDesc}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tool.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider text-skin-dim bg-skin-fill px-2 py-1 rounded-md border border-skin-border">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Area */}
      <div className="mt-5 flex items-center gap-2">
         {/* Report Button (Icon only) */}
         {onReport && (
             <button 
               onClick={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
                 onReport(tool);
               }}
               className="p-2 rounded-lg border border-transparent hover:border-skin-border hover:bg-skin-fill text-skin-muted hover:text-red-500 transition-colors"
               title={t.feedback.tabs.report}
             >
               <Flag size={16} />
             </button>
          )}

          {/* Visit Button (Full Width) */}
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 py-2 flex items-center justify-center gap-2 bg-skin-surface hover:bg-skin-primary border border-skin-border hover:border-skin-primary text-skin-base hover:text-white rounded-lg transition-all text-sm font-medium"
          >
            <span>{t.visitWebsite}</span>
            <ExternalLink size={14} />
          </a>
      </div>
    </div>
  );
};

export default ToolCard;
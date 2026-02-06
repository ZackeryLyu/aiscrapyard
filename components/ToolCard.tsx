import React from 'react';
import { AiTool, Region, Language } from '../types';
import { translations } from '../i18n/locales';
import { ExternalLink, Globe, MapPin, Flag } from 'lucide-react';

interface ToolCardProps {
  tool: AiTool;
  currentLang: Language;
  onReport?: (tool: AiTool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, currentLang, onReport }) => {
  const t = translations[currentLang];

  // Resolve localized content
  const localizedName = tool.translations?.[currentLang]?.name || tool.name;
  const localizedDesc = tool.translations?.[currentLang]?.description || tool.description;

  return (
    <div className="group relative flex flex-col h-full bg-skin-card backdrop-blur-sm border border-skin-border rounded-2xl p-5 hover:bg-skin-card-hover hover:border-skin-primary/50 hover:shadow-lg hover:shadow-skin-primary/10 transition-all duration-300">
      
      {/* Header: Icon & Region Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-skin-surface border border-skin-border shadow-sm">
          <img 
            src={tool.iconUrl} 
            alt={localizedName} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            loading="lazy"
          />
        </div>
        <div className="flex items-center gap-2">
          {/* Report Button */}
          {onReport && (
             <button 
               onClick={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
                 onReport(tool);
               }}
               className="p-1.5 rounded-full text-skin-muted hover:text-red-500 hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100"
               title={t.feedback.tabs.report}
             >
               <Flag size={14} />
             </button>
          )}
          <span className={`text-xs font-semibold px-2 py-1 rounded-full border flex items-center gap-1 ${
            tool.region === Region.CN 
              ? 'bg-red-500/10 text-red-500 border-red-500/20' 
              : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
          }`}>
            {tool.region === Region.CN ? <MapPin size={10} /> : <Globe size={10} />}
            {tool.region === Region.CN ? 'CN' : 'Global'}
          </span>
        </div>
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

      {/* Action Button */}
      <a 
        href={tool.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-5 w-full py-2 flex items-center justify-center gap-2 bg-skin-surface hover:bg-skin-primary border border-skin-border hover:border-skin-primary text-skin-base hover:text-white rounded-lg transition-all text-sm font-medium"
      >
        <span>{t.visitWebsite}</span>
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default ToolCard;
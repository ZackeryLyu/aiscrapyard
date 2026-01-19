export enum ToolCategory {
  CHATBOT = "Chat / LLMs",
  IMAGE = "Image Generation",
  VIDEO = "Video Creation",
  CODING = "Coding Assistants",
  AUDIO = "Audio & Speech",
  PRODUCTIVITY = "Productivity & Writing",
  SEARCH = "Search & Research",
  DATA = "Data & Analytics",
  DESIGN = "Design & Creative"
}

export enum Region {
  GLOBAL = "Global",
  CN = "China"
}

export interface AiTool {
  id: string;
  name: string;
  description: string; // Default (English)
  url: string;
  iconUrl: string;
  category: ToolCategory;
  region: Region;
  tags: string[];
  isPopular?: boolean;
  translations?: Partial<Record<Language, {
    name?: string;
    description?: string;
  }>>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FeedbackSubmission {
  toolName: string;
  toolUrl?: string;
  description: string;
  timestamp: number;
}

export type Language = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'it';
export type Theme = 'dark' | 'light' | 'midnight';

export const LANGUAGE_LABELS: Record<Language, string> = {
  'en': 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano'
};
export enum ToolCategory {
  FOUNDATION = "foundation",
  SEARCH = "search",
  CODING = "coding",
  WRITING = "writing",
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
  PRODUCTIVITY = "productivity",
  KNOWLEDGE = "knowledge",
  TRANSLATION = "translation",
  BUSINESS = "business",
  EDUCATION = "education",
  HEALTH = "health",
  SOCIAL = "social",
  UI_UX = "ui_ux",
  INFRA = "infra",
  HARDWARE = "hardware",
  NICHE = "niche"
}

export enum Region {
  GLOBAL = "Global",
  CN = "China"
}

export enum PricingModel {
  FREE = "Free",
  FREEMIUM = "Freemium", // Free tier available but paid for upgrades
  PAID = "Paid",         // Paid only
  TRIAL = "Free Trial",  // Time-limited trial
  CONTACT = "Contact"    // Enterprise/Contact Sales
}

export interface AiTool {
  id: string;
  name: string;
  description: string; // Used as base description (Default English)
  url: string;
  iconUrl: string;
  category: ToolCategory;
  region: Region;
  pricing: PricingModel[];
  developer?: string; // New field for comparison
  platforms?: string[]; // New field: "Web", "iOS", "Android", "API", "Mac", "Windows"
  features?: Record<string, string | boolean | number>; // Dynamic category-specific comparison data (Default English)
  tags: string[];
  isPopular?: boolean;
  translations?: Partial<Record<Language, {
    name?: string;
    description?: string;
    features?: Record<string, string | boolean | number>; // Localized features
  }>>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type FeedbackType = 'suggestion' | 'report' | 'general';

export interface FeedbackSubmission {
  type: FeedbackType;
  toolName?: string;
  toolUrl?: string;
  description: string;
  contact?: string;
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
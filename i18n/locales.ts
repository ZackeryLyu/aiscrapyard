import { ToolCategory } from '../types';

export const translations = {
  'en': {
    appTitle: "AI Scrapyard",
    searchPlaceholder: "Search for tools (e.g., 'video', 'chat')...",
    regionAll: "All",
    regionCN: "China",
    regionGlobal: "Global",
    visitWebsite: "Visit Website",
    noTools: "No tools found",
    tryAdjusting: "Try adjusting your filters or search terms.",
    footer: "AI Scrapyard. Built with React & Tailwind.",
    themes: {
      dark: "Cosmic",
      light: "Daylight",
      midnight: "Midnight"
    },
    categories: {
      'All': 'All Tools',
      [ToolCategory.CHATBOT]: 'Chat & LLMs',
      [ToolCategory.IMAGE]: 'Image Gen',
      [ToolCategory.VIDEO]: 'Video',
      [ToolCategory.CODING]: 'Coding',
      [ToolCategory.AUDIO]: 'Audio',
      [ToolCategory.PRODUCTIVITY]: 'Productivity',
      [ToolCategory.SEARCH]: 'Search',
      [ToolCategory.DATA]: 'Data & Analytics',
      [ToolCategory.DESIGN]: 'Design & Creative'
    },
    feedback: {
      button: "Suggest a Tool",
      title: "Suggest a New Tool",
      subtitle: "Can't find what you're looking for? Tell us about it!",
      nameLabel: "Tool Name",
      urlLabel: "Website URL (Optional)",
      descLabel: "Description / Category",
      submit: "Submit Suggestion",
      success: "Thank you! We've received your suggestion.",
      emailFallback: "Send via Email (Backup)"
    }
  },
  'zh-CN': {
    appTitle: "AI 废品收购站",
    searchPlaceholder: "搜索工具（例如：'视频', '聊天'）...",
    regionAll: "全部",
    regionCN: "中国",
    regionGlobal: "全球",
    visitWebsite: "访问网站",
    noTools: "未找到相关工具",
    tryAdjusting: "尝试调整筛选条件或搜索关键词。",
    footer: "AI 废品收购站。基于 React & Tailwind 构建。",
    themes: {
      dark: "深空灰",
      light: "极简白",
      midnight: "午夜蓝"
    },
    categories: {
      'All': '所有工具',
      [ToolCategory.CHATBOT]: '聊天 / 大模型',
      [ToolCategory.IMAGE]: '图像生成',
      [ToolCategory.VIDEO]: '视频创作',
      [ToolCategory.CODING]: '编程助手',
      [ToolCategory.AUDIO]: '音频 & 语音',
      [ToolCategory.PRODUCTIVITY]: '效率 & 写作',
      [ToolCategory.SEARCH]: '搜索 & 研究',
      [ToolCategory.DATA]: '数据 & 分析',
      [ToolCategory.DESIGN]: '设计 & 创意'
    },
    feedback: {
      button: "推荐新工具",
      title: "推荐未收录的工具",
      subtitle: "如果没有你常用的 AI 工具和分类，请告诉我们！",
      nameLabel: "工具名称",
      urlLabel: "工具网址 (选填)",
      descLabel: "描述 / 分类建议",
      submit: "提交建议",
      success: "感谢您的反馈！我们已收到您的建议。",
      emailFallback: "通过邮件发送 (备份)"
    }
  },
  'zh-TW': {
    appTitle: "AI 廢品收購站",
    searchPlaceholder: "搜尋工具（例如：'視頻', '聊天'）...",
    regionAll: "全部",
    regionCN: "中國",
    regionGlobal: "全球",
    visitWebsite: "訪問網站",
    noTools: "未找到相關工具",
    tryAdjusting: "嘗試調整篩選條件或搜尋關鍵詞。",
    footer: "AI 廢品收購站。基於 React & Tailwind 構建。",
    themes: {
      dark: "深空灰",
      light: "極簡白",
      midnight: "午夜藍"
    },
    categories: {
      'All': '所有工具',
      [ToolCategory.CHATBOT]: '聊天 / 大模型',
      [ToolCategory.IMAGE]: '圖像生成',
      [ToolCategory.VIDEO]: '視頻創作',
      [ToolCategory.CODING]: '編程助手',
      [ToolCategory.AUDIO]: '音頻 & 語音',
      [ToolCategory.PRODUCTIVITY]: '效率 & 寫作',
      [ToolCategory.SEARCH]: '搜尋 & 研究',
      [ToolCategory.DATA]: '數據 & 分析',
      [ToolCategory.DESIGN]: '設計 & 創意'
    },
    feedback: {
      button: "推薦新工具",
      title: "推薦未收錄的工具",
      subtitle: "如果沒有你常用的 AI 工具和分類，請告訴我們！",
      nameLabel: "工具名稱",
      urlLabel: "工具網址 (選填)",
      descLabel: "描述 / 分類建議",
      submit: "提交建議",
      success: "感謝您的反饋！我們已收到您的建議。",
      emailFallback: "通過郵件發送 (備份)"
    }
  },
  'ja': {
    appTitle: "AI スクラップヤード",
    searchPlaceholder: "ツールを検索（例：'動画', 'チャット'）...",
    regionAll: "すべて",
    regionCN: "中国",
    regionGlobal: "グローバル",
    visitWebsite: "サイトへ",
    noTools: "ツールが見つかりません",
    tryAdjusting: "フィルターや検索キーワードを調整してください。",
    footer: "AI スクラップヤード。React & Tailwindで構築。",
    themes: {
      dark: "コズミック",
      light: "デイライト",
      midnight: "ミッドナイト"
    },
    categories: {
      'All': 'すべてのツール',
      [ToolCategory.CHATBOT]: 'チャット / LLM',
      [ToolCategory.IMAGE]: '画像生成',
      [ToolCategory.VIDEO]: '動画作成',
      [ToolCategory.CODING]: 'コーディング',
      [ToolCategory.AUDIO]: '音声 & スピーチ',
      [ToolCategory.PRODUCTIVITY]: '生産性',
      [ToolCategory.SEARCH]: '検索 & 調査',
      [ToolCategory.DATA]: 'データ & 分析',
      [ToolCategory.DESIGN]: 'デザイン & 創造'
    },
    feedback: {
      button: "ツールを提案",
      title: "新しいツールを提案",
      subtitle: "お気に入りのツールが見つかりませんか？教えてください！",
      nameLabel: "ツール名",
      urlLabel: "ウェブサイトURL (任意)",
      descLabel: "説明 / カテゴリ",
      submit: "提案を送信",
      success: "ありがとうございます！提案を受け付けました。",
      emailFallback: "メールで送信 (バックアップ)"
    }
  },
  'ko': {
    appTitle: "AI 스크랩 야드",
    searchPlaceholder: "도구 검색 (예: '비디오', '채팅')...",
    regionAll: "전체",
    regionCN: "중국",
    regionGlobal: "글로벌",
    visitWebsite: "웹사이트 방문",
    noTools: "도구를 찾을 수 없습니다",
    tryAdjusting: "필터나 검색어를 조정해보세요.",
    footer: "AI 스크랩 야드. React & Tailwind로 제작.",
    themes: {
      dark: "코스믹",
      light: "데이라이트",
      midnight: "미드나이트"
    },
    categories: {
      'All': '모든 도구',
      [ToolCategory.CHATBOT]: '채팅 / LLM',
      [ToolCategory.IMAGE]: '이미지 생성',
      [ToolCategory.VIDEO]: '비디오 제작',
      [ToolCategory.CODING]: '코딩 도우미',
      [ToolCategory.AUDIO]: '오디오 & 음성',
      [ToolCategory.PRODUCTIVITY]: '생산성',
      [ToolCategory.SEARCH]: '검색 & 연구',
      [ToolCategory.DATA]: '데이터 & 분석',
      [ToolCategory.DESIGN]: '디자인 & 크리에이티브'
    },
    feedback: {
      button: "도구 제안",
      title: "새로운 도구 제안",
      subtitle: "원하는 도구를 찾을 수 없나요? 저희에게 알려주세요!",
      nameLabel: "도구 이름",
      urlLabel: "웹사이트 URL (선택 사항)",
      descLabel: "설명 / 카테고리",
      submit: "제안 제출",
      success: "감사합니다! 제안이 접수되었습니다.",
      emailFallback: "이메일로 보내기 (백업)"
    }
  },
  'es': {
    appTitle: "AI Scrapyard",
    searchPlaceholder: "Buscar herramientas (ej. 'video', 'chat')...",
    regionAll: "Todo",
    regionCN: "China",
    regionGlobal: "Global",
    visitWebsite: "Visitar Sitio",
    noTools: "No se encontraron herramientas",
    tryAdjusting: "Intenta ajustar tus filtros o términos de búsqueda.",
    footer: "AI Scrapyard. Creado con React y Tailwind.",
    themes: {
      dark: "Cósmico",
      light: "Diurno",
      midnight: "Medianoche"
    },
    categories: {
      'All': 'Todas',
      [ToolCategory.CHATBOT]: 'Chat / LLMs',
      [ToolCategory.IMAGE]: 'Generación de Imagen',
      [ToolCategory.VIDEO]: 'Video',
      [ToolCategory.CODING]: 'Código',
      [ToolCategory.AUDIO]: 'Audio',
      [ToolCategory.PRODUCTIVITY]: 'Productividad',
      [ToolCategory.SEARCH]: 'Búsqueda',
      [ToolCategory.DATA]: 'Datos & Análisis',
      [ToolCategory.DESIGN]: 'Diseño & Creatividad'
    },
    feedback: {
      button: "Sugerir herramienta",
      title: "Sugerir una nueva herramienta",
      subtitle: "¿No encuentras lo que buscas? ¡Cuéntanos!",
      nameLabel: "Nombre de la herramienta",
      urlLabel: "URL del sitio (Opcional)",
      descLabel: "Descripción / Categoría",
      submit: "Enviar sugerencia",
      success: "¡Gracias! Hemos recibido tu sugerencia.",
      emailFallback: "Enviar por correo (Respaldo)"
    }
  },
  'fr': {
    appTitle: "AI Scrapyard",
    searchPlaceholder: "Rechercher des outils (ex: 'vidéo', 'chat')...",
    regionAll: "Tout",
    regionCN: "Chine",
    regionGlobal: "Global",
    visitWebsite: "Visiter le site",
    noTools: "Aucun outil trouvé",
    tryAdjusting: "Essayez d'ajuster vos filtres ou termes de recherche.",
    footer: "AI Scrapyard. Construit avec React & Tailwind.",
    themes: {
      dark: "Cosmique",
      light: "Clair",
      midnight: "Minuit"
    },
    categories: {
      'All': 'Tous les outils',
      [ToolCategory.CHATBOT]: 'Chat / LLMs',
      [ToolCategory.IMAGE]: 'Génération d\'images',
      [ToolCategory.VIDEO]: 'Vidéo',
      [ToolCategory.CODING]: 'Codage',
      [ToolCategory.AUDIO]: 'Audio',
      [ToolCategory.PRODUCTIVITY]: 'Productivité',
      [ToolCategory.SEARCH]: 'Recherche',
      [ToolCategory.DATA]: 'Données & Analyse',
      [ToolCategory.DESIGN]: 'Design & Création'
    },
    feedback: {
      button: "Suggérer un outil",
      title: "Suggérer un nouvel outil",
      subtitle: "Vous ne trouvez pas ce que vous cherchez ? Dites-le nous !",
      nameLabel: "Nom de l'outil",
      urlLabel: "URL du site (Optionnel)",
      descLabel: "Description / Catégorie",
      submit: "Envoyer la suggestion",
      success: "Merci ! Nous avons bien reçu votre suggestion.",
      emailFallback: "Envoyer par email (Secours)"
    }
  },
  'de': {
    appTitle: "AI Scrapyard",
    searchPlaceholder: "Tools suchen (z.B. 'Video', 'Chat')...",
    regionAll: "Alle",
    regionCN: "China",
    regionGlobal: "Global",
    visitWebsite: "Webseite besuchen",
    noTools: "Keine Tools gefunden",
    tryAdjusting: "Versuchen Sie, Ihre Filter oder Suchbegriffe anzupassen.",
    footer: "AI Scrapyard. Erstellt mit React & Tailwind.",
    themes: {
      dark: "Kosmisch",
      light: "Tag",
      midnight: "Mitternacht"
    },
    categories: {
      'All': 'Alle Tools',
      [ToolCategory.CHATBOT]: 'Chat / LLMs',
      [ToolCategory.IMAGE]: 'Bildgenerierung',
      [ToolCategory.VIDEO]: 'Video',
      [ToolCategory.CODING]: 'Coding',
      [ToolCategory.AUDIO]: 'Audio',
      [ToolCategory.PRODUCTIVITY]: 'Produktivität',
      [ToolCategory.SEARCH]: 'Suche',
      [ToolCategory.DATA]: 'Daten & Analyse',
      [ToolCategory.DESIGN]: 'Design & Kreativität'
    },
    feedback: {
      button: "Tool vorschlagen",
      title: "Neues Tool vorschlagen",
      subtitle: "Finden Sie nicht, wonach Sie suchen? Erzählen Sie uns davon!",
      nameLabel: "Tool Name",
      urlLabel: "Webseite URL (Optional)",
      descLabel: "Beschreibung / Kategorie",
      submit: "Vorschlag senden",
      success: "Danke! Wir haben Ihren Vorschlag erhalten.",
      emailFallback: "Per E-Mail senden (Backup)"
    }
  },
  'it': {
    appTitle: "AI Scrapyard",
    searchPlaceholder: "Cerca strumenti (es. 'video', 'chat')...",
    regionAll: "Tutti",
    regionCN: "Cina",
    regionGlobal: "Globale",
    visitWebsite: "Visita Sito",
    noTools: "Nessuno strumento trovato",
    tryAdjusting: "Prova a modificare i filtri o i termini di ricerca.",
    footer: "AI Scrapyard. Costruito con React & Tailwind.",
    themes: {
      dark: "Cosmico",
      light: "Giorno",
      midnight: "Mezzanotte"
    },
    categories: {
      'All': 'Tutti gli strumenti',
      [ToolCategory.CHATBOT]: 'Chat / LLM',
      [ToolCategory.IMAGE]: 'Generazione Immagini',
      [ToolCategory.VIDEO]: 'Video',
      [ToolCategory.CODING]: 'Coding',
      [ToolCategory.AUDIO]: 'Audio',
      [ToolCategory.PRODUCTIVITY]: 'Produttività',
      [ToolCategory.SEARCH]: 'Ricerca',
      [ToolCategory.DATA]: 'Dati & Analisi',
      [ToolCategory.DESIGN]: 'Design & Creatività'
    },
    feedback: {
      button: "Suggerisci strumento",
      title: "Suggerisci un nuovo strumento",
      subtitle: "Non trovi quello che cerchi? Faccelo sapere!",
      nameLabel: "Nome strumento",
      urlLabel: "URL sito web (Opzionale)",
      descLabel: "Descrizione / Categoria",
      submit: "Invia suggerimento",
      success: "Grazie! Abbiamo ricevuto il tuo suggerimento.",
      emailFallback: "Invia tramite email (Backup)"
    }
  }
};
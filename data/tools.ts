import { AiTool, Region, ToolCategory } from "../types";

export const toolsData: AiTool[] = [
  // Chat / LLMs
  {
    id: "gpt4",
    name: "ChatGPT (OpenAI)",
    description: "The leading conversational AI model capable of complex reasoning and content generation.",
    url: "https://chat.openai.com",
    iconUrl: "https://picsum.photos/seed/chatgpt/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.GLOBAL,
    tags: ["LLM", "Chat", "Reasoning"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "领先的对话式 AI 模型，具备复杂的推理和内容生成能力。"
      }
    }
  },
  {
    id: "claude",
    name: "Claude (Anthropic)",
    description: "Known for high safety standards, large context windows, and nuanced writing.",
    url: "https://claude.ai",
    iconUrl: "https://picsum.photos/seed/claude/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.GLOBAL,
    tags: ["LLM", "Long Context", "Writing"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "以高安全标准、大上下文窗口和细腻的写作能力著称。"
      }
    }
  },
  {
    id: "tongyi",
    name: "通义千问 (Tongyi)",
    description: "Alibaba's super-scale language model, comprehensive and suitable for various Chinese tasks.",
    url: "https://tongyi.aliyun.com/qianwen/",
    iconUrl: "https://picsum.photos/seed/tongyi/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.CN,
    tags: ["Alibaba", "Productivity", "Chat"],
    isPopular: true,
    translations: {
      'zh-CN': {
        name: "通义千问",
        description: "阿里云推出的超大规模语言模型，功能全面，适合各种中文任务。"
      }
    }
  },
  {
    id: "chatglm",
    name: "智谱清言 (ChatGLM)",
    description: "Zhipu AI's 4th generation foundation model with excellent Chinese understanding.",
    url: "https://chatglm.cn",
    iconUrl: "https://picsum.photos/seed/chatglm/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.CN,
    tags: ["GLM-4", "Coding", "Analysis"],
    isPopular: true,
    translations: {
      'zh-CN': {
        name: "智谱清言",
        description: "智谱AI打造的第四代千亿参数基座模型，中文理解能力卓越。"
      }
    }
  },
  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google's most capable multimodal model, integrating seamlessly with Google Workspace.",
    url: "https://gemini.google.com",
    iconUrl: "https://picsum.photos/seed/gemini/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.GLOBAL,
    tags: ["Multimodal", "Google", "Search"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "Google 最强大的多模态模型，与 Google Workspace 无缝集成。"
      }
    }
  },
  {
    id: "ernie",
    name: "文心一言 (Ernie Bot)",
    description: "Baidu's new generation knowledge-enhanced LLM, understanding Chinese and you better.",
    url: "https://yiyan.baidu.com",
    iconUrl: "https://picsum.photos/seed/ernie/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.CN,
    tags: ["Baidu", "Chinese LLM"],
    isPopular: true,
    translations: {
      'zh-CN': {
        name: "文心一言",
        description: "百度推出的新一代知识增强大语言模型，懂中文更懂你。"
      }
    }
  },
  {
    id: "kimi",
    name: "Kimi 智能助手",
    description: "Supports ultra-long lossless context, reads 200k words at once, and analyzes financial reports.",
    url: "https://kimi.moonshot.cn",
    iconUrl: "https://picsum.photos/seed/kimi/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.CN,
    tags: ["Long Context", "Document Analysis"],
    isPopular: true,
    translations: {
      'zh-CN': {
        name: "Kimi 智能助手",
        description: "支持超长无损上下文，一口气读完二十万字小说，分析专业财报。"
      }
    }
  },
  {
    id: "hailuo",
    name: "海螺 AI (MiniMax)",
    description: "MiniMax's general AI assistant with an excellent voice interaction experience.",
    url: "https://hailuoai.com",
    iconUrl: "https://picsum.photos/seed/hailuo/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.CN,
    tags: ["Voice", "Chat", "MiniMax"],
    isPopular: true,
    translations: {
      'zh-CN': {
        name: "海螺 AI",
        description: "MiniMax 推出的通用人工智能助手，语音交互体验极佳。"
      }
    }
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "Open-weights models focused on coding and math, highly performant.",
    url: "https://chat.deepseek.com",
    iconUrl: "https://picsum.photos/seed/deepseek/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.CN,
    tags: ["Coding", "Math", "Open Source"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "专注于代码和数学的开源权重模型，性能极佳。"
      }
    }
  },
  {
    id: "doubao",
    name: "豆包 (Doubao)",
    description: "ByteDance's AI assistant, natural voice, feature-rich personal intelligent companion.",
    url: "https://www.doubao.com",
    iconUrl: "https://picsum.photos/seed/doubao/200/200",
    category: ToolCategory.CHATBOT,
    region: Region.CN,
    tags: ["Chat", "Mobile", "ByteDance"],
    translations: {
      'zh-CN': {
        name: "豆包",
        description: "字节跳动出品的 AI 助手，语音自然，功能丰富的个人智能伙伴。"
      }
    }
  },

  // Productivity
  {
    id: "jasper",
    name: "Jasper",
    description: "AI copywriter for marketing teams to generate high-quality content faster.",
    url: "https://www.jasper.ai",
    iconUrl: "https://picsum.photos/seed/jasper/200/200",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Marketing", "Copywriting"],
    translations: {
      'zh-CN': {
        description: "专为营销团队设计的 AI 撰稿人，可更快速地生成高质量内容。"
      }
    }
  },
  {
    id: "notion",
    name: "Notion AI",
    description: "Integrated AI assistant inside Notion for writing, summarizing, and brainstorming.",
    url: "https://www.notion.so",
    iconUrl: "https://picsum.photos/seed/notion/200/200",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Docs", "Notes"],
    translations: {
      'zh-CN': {
        description: "集成在 Notion 中的 AI 助手，用于写作、总结和头脑风暴。"
      }
    }
  },
  {
    id: "feishu",
    name: "飞书智能伙伴 (Feishu)",
    description: "ByteDance's enterprise collaboration platform with deep AI integration.",
    url: "https://www.feishu.cn",
    iconUrl: "https://picsum.photos/seed/feishu/200/200",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.CN,
    tags: ["Office", "Collaboration", "ByteDance"],
    translations: {
      'zh-CN': {
        name: "飞书智能伙伴",
        description: "字节跳动旗下企业协作平台，AI 深度集成，提升办公效率。"
      }
    }
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    description: "AI assistant integrated into Microsoft 365 apps like Word, Excel, and PowerPoint.",
    url: "https://copilot.microsoft.com",
    iconUrl: "https://picsum.photos/seed/mscopilot/200/200",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Office", "Productivity"],
    translations: {
      'zh-CN': {
        description: "集成到 Word、Excel 和 PowerPoint 等 Microsoft 365 应用中的 AI 助手。"
      }
    }
  },
  {
    id: "wpsai",
    name: "WPS AI",
    description: "Intelligent office assistant with LLM capabilities by Kingsoft Office.",
    url: "https://ai.wps.cn",
    iconUrl: "https://picsum.photos/seed/wpsai/200/200",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.CN,
    tags: ["Office", "Writing", "China"],
    translations: {
      'zh-CN': {
        description: "金山办公推出的具备大语言模型能力的智能办公助手。"
      }
    }
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "Generate presentations, documents, and websites in seconds.",
    url: "https://gamma.app",
    iconUrl: "https://picsum.photos/seed/gamma/200/200",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Slides", "Web Design"],
    translations: {
      'zh-CN': {
        description: "在几秒钟内生成演示文稿、文档和网站。"
      }
    }
  },

  // Image Generation
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Produces artistic, high-fidelity images via Discord prompting.",
    url: "https://www.midjourney.com",
    iconUrl: "https://picsum.photos/seed/midjourney/200/200",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Art", "Discord", "High Quality"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "通过 Discord 提示生成艺术感强、高保真的图像。"
      }
    }
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Powerful open-source image generation model by Stability AI.",
    url: "https://stability.ai",
    iconUrl: "https://picsum.photos/seed/stability/200/200",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Open Source", "Art"],
    translations: {
      'zh-CN': {
        description: "Stability AI 推出的强大开源图像生成模型。"
      }
    }
  },
  {
    id: "flux",
    name: "Flux.1",
    description: "State-of-the-art open model for realistic image synthesis.",
    url: "https://blackforestlabs.ai",
    iconUrl: "https://picsum.photos/seed/flux/200/200",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Realistic", "Open Source"],
    translations: {
      'zh-CN': {
        description: "用于逼真图像合成的最先进开源模型。"
      }
    }
  },
  {
    id: "liblib",
    name: "Liblib AI (哩布哩布)",
    description: "China's leading AI art model sharing community and online platform.",
    url: "https://www.liblib.art",
    iconUrl: "https://picsum.photos/seed/liblib/200/200",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    tags: ["Stable Diffusion", "Community"],
    translations: {
      'zh-CN': {
        name: "哩布哩布 (Liblib)",
        description: "中国领先的 AI 绘画模型分享社区和在线运行平台。"
      }
    }
  },
  {
    id: "wanxiang",
    name: "通义万相 (Wanxiang)",
    description: "Alibaba's evolutionary AI art generation model.",
    url: "https://wanxiang.aliyun.com",
    iconUrl: "https://picsum.photos/seed/wanxiang/200/200",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    tags: ["Art", "Alibaba"],
    translations: {
      'zh-CN': {
        name: "通义万相",
        description: "阿里云推出的进化式 AI 绘画模型。"
      }
    }
  },
  {
    id: "meitu",
    name: "美图设计室 (Meitu)",
    description: "AI art and design tools integrated into the popular Meitu suite.",
    url: "https://design.meitu.com",
    iconUrl: "https://picsum.photos/seed/meitu/200/200",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    tags: ["Design", "Retouching"],
    translations: {
      'zh-CN': {
        name: "美图设计室",
        description: "集成在美图秀秀中的 AI 艺术和设计工具。"
      }
    }
  },

  // Design
  {
    id: "canva",
    name: "Canva Magic Studio",
    description: "A suite of AI tools for design, including Magic Write, Magic Edit, and more.",
    url: "https://www.canva.com",
    iconUrl: "https://picsum.photos/seed/canva/200/200",
    category: ToolCategory.DESIGN,
    region: Region.GLOBAL,
    tags: ["Design", "Social Media"],
    translations: {
      'zh-CN': {
        description: "一套用于设计的 AI 工具，包括 Magic Write、Magic Edit 等。"
      }
    }
  },
  {
    id: "jishie",
    name: "即时设计 (JsDesign)",
    description: "Professional cloud UI design tool supporting AI-generated UI designs.",
    url: "https://js.design",
    iconUrl: "https://picsum.photos/seed/jishie/200/200",
    category: ToolCategory.DESIGN,
    region: Region.CN,
    tags: ["UI/UX", "Figma Alternative"],
    translations: {
      'zh-CN': {
        name: "即时设计",
        description: "支持 AI 生成 UI 设计稿的专业级云端 UI 设计工具。"
      }
    }
  },
  {
    id: "figma",
    name: "Figma AI",
    description: "AI features for generating designs, layers, and content inside Figma.",
    url: "https://www.figma.com",
    iconUrl: "https://picsum.photos/seed/figma/200/200",
    category: ToolCategory.DESIGN,
    region: Region.GLOBAL,
    tags: ["UI/UX", "Prototyping"],
    translations: {
      'zh-CN': {
        description: "Figma 内部用于生成设计、图层和内容的 AI 功能。"
      }
    }
  },

  // Video
  {
    id: "runway",
    name: "Runway Gen-3",
    description: "Advanced text-to-video generation for cinematic content.",
    url: "https://runwayml.com",
    iconUrl: "https://picsum.photos/seed/runway/200/200",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    tags: ["Cinematic", "Editor"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "用于生成电影级内容的高级文生视频工具。"
      }
    }
  },
  {
    id: "kling",
    name: "可灵 AI (Kling)",
    description: "Kuaishou's high-quality video generation model with stunning effects.",
    url: "https://klingai.kuaishou.com",
    iconUrl: "https://picsum.photos/seed/kling/200/200",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    tags: ["Realistic", "Long Video"],
    isPopular: true,
    translations: {
      'zh-CN': {
        name: "可灵 AI",
        description: "快手推出的高品质视频生成大模型，生成效果惊艳。"
      }
    }
  },
  {
    id: "vidu",
    name: "Vidu",
    description: "Video model by ShengShu & Tsinghua, generating HD videos in one click.",
    url: "https://www.vidu.studio",
    iconUrl: "https://picsum.photos/seed/vidu/200/200",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    tags: ["Motion", "Creative"],
    translations: {
      'zh-CN': {
        description: "生数科技联合清华大学发布的视频大模型，一键生成高清视频。"
      }
    }
  },
  {
    id: "hunyuan-video",
    name: "腾讯混元 (Hunyuan)",
    description: "Tencent's multimodal model supporting text-to-image and text-to-video.",
    url: "https://hunyuan.tencent.com",
    iconUrl: "https://picsum.photos/seed/hunyuan/200/200",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    tags: ["Tencent", "Multimodal"],
    translations: {
      'zh-CN': {
        name: "腾讯混元",
        description: "腾讯推出的多模态大模型，支持文生图、文生视频。"
      }
    }
  },

  // Audio
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "The most realistic AI voice generator and text-to-speech software.",
    url: "https://elevenlabs.io",
    iconUrl: "https://picsum.photos/seed/elevenlabs/200/200",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    tags: ["Voice", "TTS"],
    translations: {
      'zh-CN': {
        description: "最逼真的 AI 语音生成器和文字转语音软件。"
      }
    }
  },
  {
    id: "moyin",
    name: "魔音工坊",
    description: "China's leading dubbing tool providing massive realistic AI voices.",
    url: "https://www.moyin.com",
    iconUrl: "https://picsum.photos/seed/moyin/200/200",
    category: ToolCategory.AUDIO,
    region: Region.CN,
    tags: ["Voice", "TTS", "Dubbing"],
    translations: {
      'zh-CN': {
        description: "国内领先的配音神器，提供大量逼真的 AI 语音。"
      }
    }
  },

  // Coding
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code as you type.",
    url: "https://github.com/features/copilot",
    iconUrl: "https://picsum.photos/seed/copilot/200/200",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["IDE", "Autocomplete"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "AI 结对程序员，在你输入时提供代码建议。"
      }
    }
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "An AI-first code editor built for efficiency and context-aware coding.",
    url: "https://cursor.sh",
    iconUrl: "https://picsum.photos/seed/cursor/200/200",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["Editor", "Agent"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "专为效率和上下文感知编程打造的 AI 原生代码编辑器。"
      }
    }
  },
  {
    id: "comate",
    name: "百度 Comate",
    description: "Intelligent coding assistant based on Ernie Bot, understanding code and Chinese devs.",
    url: "https://comate.baidu.com",
    iconUrl: "https://picsum.photos/seed/comate/200/200",
    category: ToolCategory.CODING,
    region: Region.CN,
    tags: ["Enterprise", "Baidu"],
    translations: {
      'zh-CN': {
        name: "百度 Comate",
        description: "基于文心大模型的智能代码助手，懂代码更懂中文开发者。"
      }
    }
  },
  {
    id: "tongyi-lingma",
    name: "通义灵码 (Lingma)",
    description: "Alibaba's intelligent coding assistant, free and powerful.",
    url: "https://tongyi.aliyun.com/lingma",
    iconUrl: "https://picsum.photos/seed/lingma/200/200",
    category: ToolCategory.CODING,
    region: Region.CN,
    tags: ["Alibaba", "Free"],
    translations: {
      'zh-CN': {
        name: "通义灵码",
        description: "阿里云推出的智能编码助手，免费、功能强大。"
      }
    }
  },

  // Search
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "Conversational search engine that provides cited answers.",
    url: "https://www.perplexity.ai",
    iconUrl: "https://picsum.photos/seed/perplexity/200/200",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    tags: ["Search", "Citations"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "提供引用答案的对话式搜索引擎。"
      }
    }
  },
  {
    id: "360ai",
    name: "360 AI 搜索",
    description: "360's new generation AI search engine delivering precise answers.",
    url: "https://www.sou.com",
    iconUrl: "https://picsum.photos/seed/360ai/200/200",
    category: ToolCategory.SEARCH,
    region: Region.CN,
    tags: ["Search", "China"],
    translations: {
      'zh-CN': {
        description: "360 推出的新一代 AI 搜索引擎，给出精准答案。"
      }
    }
  },
  {
    id: "tiangong",
    name: "天工 AI 搜索",
    description: "Kunlun Tech's double-hundred-billion parameter LLM search engine.",
    url: "https://www.tiangong.cn",
    iconUrl: "https://picsum.photos/seed/tiangong/200/200",
    category: ToolCategory.SEARCH,
    region: Region.CN,
    tags: ["Search", "Chat"],
    translations: {
      'zh-CN': {
        name: "天工 AI 搜索",
        description: "昆仑万维推出的双千亿级大语言模型搜索引擎。"
      }
    }
  },

  // Data & Analytics
  {
    id: "tableau-ai",
    name: "Tableau AI",
    description: "Generative AI integrated into Tableau for smarter data analysis and visualization.",
    url: "https://www.tableau.com/products/tableau-ai",
    iconUrl: "https://picsum.photos/seed/tableau/200/200",
    category: ToolCategory.DATA,
    region: Region.GLOBAL,
    tags: ["BI", "Analytics", "Salesforce"],
    translations: {
      'zh-CN': {
        description: "集成到 Tableau 中的生成式 AI，用于更智能的数据分析和可视化。"
      }
    }
  },
  {
    id: "powerbi-copilot",
    name: "Power BI Copilot",
    description: "Use natural language to create reports and get insights in Power BI.",
    url: "https://powerbi.microsoft.com",
    iconUrl: "https://picsum.photos/seed/powerbi/200/200",
    category: ToolCategory.DATA,
    region: Region.GLOBAL,
    tags: ["BI", "Microsoft", "Visualization"],
    isPopular: true,
    translations: {
      'zh-CN': {
        description: "在 Power BI 中使用自然语言创建报告并获取见解。"
      }
    }
  },
  {
    id: "datarobot",
    name: "DataRobot",
    description: "Value-driven AI platform to accelerate machine learning model building and deployment.",
    url: "https://www.datarobot.com",
    iconUrl: "https://picsum.photos/seed/datarobot/200/200",
    category: ToolCategory.DATA,
    region: Region.GLOBAL,
    tags: ["AutoML", "Enterprise", "MLOps"],
    translations: {
      'zh-CN': {
        description: "价值驱动的 AI 平台，加速机器学习模型的构建和部署。"
      }
    }
  },
  {
    id: "obviously-ai",
    name: "Obviously AI",
    description: "No-code AI tool to turn data into predictions in minutes without writing code.",
    url: "https://www.obviously.ai",
    iconUrl: "https://picsum.photos/seed/obviously/200/200",
    category: ToolCategory.DATA,
    region: Region.GLOBAL,
    tags: ["No-Code", "Prediction", "Data Science"],
    translations: {
      'zh-CN': {
        description: "无代码 AI 工具，无需编写代码即可在几分钟内将数据转化为预测结果。"
      }
    }
  },
];

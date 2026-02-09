import { AiTool, Region, ToolCategory, PricingModel } from "../types";

export const toolsData: AiTool[] = [
  // ==========================================
  // 1. Foundation Models (核心大模型)
  // ==========================================
  {
    id: "claude",
    name: "Claude 3.5",
    description: "The ceiling of logic and writing.",
    url: "https://claude.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Anthropic",
    platforms: ["Web", "iOS", "API"],
    features: {
      score: 9.8,
      strengths: "Most human-like writing; Rigorous logic; Powerful Artifacts preview.",
      limitations: "Strict account risk control; Fragmented free limits.",
      best_for: "Advanced coding, creative writing, complex reasoning.",
      review: "Most human-like writing style, Artifacts enables real-time code preview.",
      context_window: "200K",
      internet_access: false,
      multimodal: true
    },
    tags: ["LLM", "Coding", "Writing"],
    isPopular: true,
    translations: {
      'zh-CN': { description: "逻辑与写作天花板", features: { strengths: "文笔最接近真人；逻辑推导极严密；Artifacts 预览极其强大。", limitations: "账号风控相对严格；免费额度限制较碎。", best_for: "高级编程、创意写作、代码审计、复杂逻辑推导。", review: "文笔最像真人，Artifacts 功能代码实时预览。" } }
    }
  },
  {
    id: "deepseek",
    name: "DeepSeek R1",
    description: "Reasoning king, cost-performance disruptor.",
    url: "https://www.deepseek.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "DeepSeek",
    platforms: ["Web", "API"],
    features: {
      score: 9.6,
      strengths: "Extremely strong reasoning logic; API is incredibly cheap; Rivals top private models.",
      limitations: "Web search breadth slightly weaker in non-Chinese contexts.",
      best_for: "Backend API, Hardcore Math, Coding.",
      review: "Reasoning capability rivals top-tier models, API pricing disrupts the globe.",
      context_window: "128K",
      internet_access: true,
      multimodal: false
    },
    tags: ["Reasoning", "Math", "Dev"],
    isPopular: true,
    translations: {
      'zh-CN': { description: "理科逻辑与性价比之王", features: { strengths: "推理模型逻辑极强；API 极其便宜且性能直逼顶级私有模型。", limitations: "联网搜索广度在特定非中文语境下略显单薄。", best_for: "开发者后端 API、硬核数学、程序员代码生成。", review: "推理能力直逼顶尖模型，API 价格颠覆全球。" } }
    }
  },
  {
    id: "chatgpt",
    name: "ChatGPT-4o",
    description: "Global pioneer, multimodal interaction ceiling.",
    url: "https://chatgpt.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "OpenAI",
    platforms: ["Web", "App", "API"],
    features: {
      score: 9.5,
      strengths: "Multimodal ceiling; Extremely natural voice; Widest ecosystem.",
      limitations: "Factuality occasionally questionable; Free tier has lower priority.",
      best_for: "Personal assistant, Consultation, Multimodal search.",
      review: "Voice conversation is extremely natural, ecosystem integration is most complete.",
      context_window: "128K",
      internet_access: true,
      multimodal: true
    },
    tags: ["LLM", "Chat", "Leader"],
    isPopular: true,
    translations: {
      'zh-CN': { description: "全球全能先锋", features: { strengths: "多模态交互天花板；语音模式极自然；生态集成与插件最广。", limitations: "事实性偶尔存疑；免费版资源分配优先级较低。", best_for: "个人全能助理、日常咨询、多模态搜索。", review: "语音对话极度自然，生态集成最完善。" } }
    }
  },
  {
    id: "gemini",
    name: "Gemini 1.5 Pro",
    description: "Long context expert.",
    url: "https://gemini.google.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Google",
    platforms: ["Web", "Android", "API"],
    features: {
      score: 9.3,
      strengths: "Supports 2M+ Tokens; Can process whole books.",
      limitations: "Search results occasionally redundant; Complex interaction logic.",
      best_for: "Massive data analysis, Long video analysis.",
      review: "2M+ Token throughput, reading a whole book is effortless.",
      context_window: "2M+",
      internet_access: true,
      multimodal: true
    },
    tags: ["Long Context", "Google"],
    translations: {
      'zh-CN': { description: "超长上下文专家", features: { strengths: "支持 2M+ Token；能一次性处理整本书或巨型项目库。", limitations: "联网搜索结果偶尔冗余；交互逻辑略显复杂。", best_for: "海量资料整理、长视频内容分析、文档库总结。", review: "2M+ Token 吞吐量，读整本书不费力。" } }
    }
  },
  {
    id: "grok",
    name: "Grok 3",
    description: "Real-time news pioneer.",
    url: "https://x.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "xAI",
    platforms: ["Web", "X App"],
    features: {
      score: 9.0,
      strengths: "Deep X (Twitter) integration; Fastest real-time response.",
      limitations: "Opinions can be biased; Requires X Premium.",
      best_for: "Real-time news, Social trends, Sarcastic chat.",
      review: "The only model capable of real-time analysis of X (Twitter) massive data.",
      context_window: "128K",
      internet_access: true,
      multimodal: true
    },
    tags: ["Real-time", "Social"],
    translations: {
      'zh-CN': { description: "实时资讯先锋", features: { strengths: "深度整合 X (Twitter)；具备全球最快的实时热点响应。", limitations: "观点偶尔带个人色彩；需 X Premium 订阅。", best_for: "实时新闻追踪、社交媒体趋势分析、反讽创作。", review: "唯一能实时分析 X (Twitter) 海量数据的模型。" } }
    }
  },
  {
    id: "qwen",
    name: "Qwen 2.5",
    description: "All-around productivity expert.",
    url: "https://tongyi.aliyun.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "Alibaba Cloud",
    platforms: ["Web", "App", "API"],
    features: {
      score: 8.9,
      strengths: "Strong in office/document summaries; Robust logic; Multilingual.",
      limitations: "International brand presence is weaker than OpenAI.",
      best_for: "Meeting summaries, Translation, Enterprise office.",
      review: "Extremely robust performance in workplace office and document summary.",
      context_window: "128K",
      internet_access: true,
      multimodal: true
    },
    tags: ["Productivity", "Office"],
    translations: {
      'zh-CN': { name: "通义千问 2.5", description: "全能生产力专家", features: { strengths: "办公/文档/视频总结极强；逻辑稳健且多语言基准极高。", limitations: "品牌国际感相较于 OpenAI 略弱。", best_for: "会议总结、多语言翻译、企业级全能办公。", review: "职场办公、文档总结表现极其稳健。" } }
    }
  },
  {
    id: "kimi",
    name: "Kimi K2.5",
    description: "Long text efficiency king.",
    url: "https://kimi.moonshot.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=kimi.moonshot.cn&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "Moonshot AI",
    platforms: ["Web", "App"],
    features: {
      score: 8.8,
      strengths: "Rapid long doc analysis; Excellent retrieval accuracy.",
      limitations: "Creative writing is average; Multimodal is weaker.",
      best_for: "Paper reading, Financial reports, Long meeting minutes.",
      review: "Long document retrieval speed and accuracy are in the first tier.",
      context_window: "200K (2M beta)",
      internet_access: true,
      multimodal: false
    },
    tags: ["Long Context", "Analysis"],
    translations: {
      'zh-CN': { description: "长文本效率王", features: { strengths: "极速解析长文档；长文本检索准确度与速度非常出色。", limitations: "创意写作灵活性一般；多模态生成能力较弱。", best_for: "论文阅读笔记、财报分析、超长会议记录。", review: "长文档检索速度与准确度均属于第一梯队。" } }
    }
  },
  {
    id: "llama",
    name: "Llama 3.3",
    description: "The 'Android' of Open Source.",
    url: "https://llama.meta.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Meta",
    platforms: ["Local", "Cloud"],
    features: {
      score: 8.7,
      strengths: "Strongest open ecosystem; Private deployment; Infinite customization.",
      limitations: "Requires hardware; Limited native app experience.",
      best_for: "Private AI apps, Sensitive data, Geeks.",
      review: "Strongest global open source ecosystem, first choice for privacy.",
      context_window: "128K",
      internet_access: false,
      multimodal: true
    },
    tags: ["Open Source", "Privacy"],
    translations: {
      'zh-CN': { description: "开源界“安卓”", features: { strengths: "全球最强开源生态；支持私有化部署；定制空间无限。", limitations: "需硬件支撑或第三方 API；官方原生 App 体验有限。", best_for: "私有 AI 应用开发、数据敏感型企业、极客。", review: "全球最强开源生态，隐私敏感型用户首选。" } }
    }
  },
  {
    id: "chatglm",
    name: "ChatGLM",
    description: "Agent center.",
    url: "https://chatglm.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=chatglm.cn&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "Zhipu AI",
    platforms: ["Web", "App"],
    features: {
      score: 8.5,
      strengths: "Mature agent ecosystem in China; Good at specific tasks.",
      limitations: "Web UI has many modules; Learning curve for beginners.",
      best_for: "Industry agents, Automated workflows.",
      review: "Has the most mature AI agent ecosystem in China.",
      context_window: "128K",
      internet_access: true,
      multimodal: true
    },
    tags: ["Agent", "Workflow"],
    translations: {
      'zh-CN': { name: "智谱清言", description: "Agent 智能体中心", features: { strengths: "拥有国内最成熟的 AI 智能体生态；擅长处理具体细分任务。", limitations: "网页端功能模块较多；初学者需时间熟悉。", best_for: "使用特定行业智能体、自动化工作流。", review: "拥有国内最成熟的 AI 智能体生态。" } }
    }
  },
  {
    id: "hailuo",
    name: "Hailuo AI",
    description: "Extreme response pioneer.",
    url: "https://hailuoai.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=hailuoai.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "MiniMax",
    platforms: ["Web", "App"],
    features: {
      score: 8.3,
      strengths: "Extremely fast voice response; Almost zero delay.",
      limitations: "Slightly weak on complex reasoning.",
      best_for: "Voice companion, Quick info check.",
      review: "Voice conversation with zero delay, high emotional value.",
      context_window: "32K",
      internet_access: true,
      multimodal: true
    },
    tags: ["Voice", "Fast"],
    translations: {
      'zh-CN': { name: "海螺 AI", description: "极致响应先锋", features: { strengths: "语音实时响应极快；对话流畅度几乎无延迟。", limitations: "处理极复杂的多步推理任务时略显疲态。", best_for: "沉浸式语音伴侣、快速信息确认。", review: "语音对话零延迟，情绪价值与流畅度极高。" } }
    }
  },
  {
    id: "mistral",
    name: "Mistral Large 2",
    description: "European multilingual light.",
    url: "https://mistral.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Mistral",
    platforms: ["API", "Web"],
    features: {
      score: 8.2,
      strengths: "Balanced EN/FR/DE/ES; Efficient; EU privacy compliant.",
      limitations: "Knowledge breadth slightly behind GPT-4o.",
      best_for: "Cross-border creation, Speed.",
      review: "Pursuing speed, local deployment, and multilingual creation.",
      context_window: "128K",
      internet_access: false,
      multimodal: false
    },
    tags: ["Europe", "Multilingual"],
    translations: {
      'zh-CN': { description: "欧洲多语言之光", features: { strengths: "法/西/德/英多语种平衡；精简高效；符合欧盟隐私直觉。", limitations: "综合博学程度对比 GPT-4o 略有差距。", best_for: "跨境多语言创作、追求极致响应速度。", review: "追求极速响应、本地化部署、多语言创作。" } }
    }
  },
  {
    id: "doubao",
    name: "Doubao",
    description: "Mass encyclopedia assistant.",
    url: "https://www.doubao.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=doubao.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "ByteDance",
    platforms: ["App", "Web"],
    features: {
      score: 8.0,
      strengths: "Lowest threshold; Simple; Fast response.",
      limitations: "Not for deep academic or long docs.",
      best_for: "Daily life, Quick ideas, Q&A.",
      review: "Produced by ByteDance, lowest threshold, fastest for life consultation.",
      context_window: "128K",
      internet_access: true,
      multimodal: true
    },
    tags: ["Mobile", "Lifestyle"],
    translations: {
      'zh-CN': { name: "豆包", description: "大众化百科助手", features: { strengths: "字节出品；门槛最低；交互简单；响应速度极快。", limitations: "深度学术或极长文档处理能力非其强项。", best_for: "快速生活咨询、碎片化创意闪现、百科问答。", review: "字节出品，门槛最低，生活咨询最快。" } }
    }
  },
  {
    id: "ernie",
    name: "Ernie Bot",
    description: "Search-enhanced veteran AI.",
    url: "https://yiyan.baidu.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=baidu.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "Baidu",
    platforms: ["Web", "App"],
    features: {
      score: 7.8,
      strengths: "Backed by Baidu ecosystem; Detailed local historical data.",
      limitations: "Complex code instruction understanding varies.",
      best_for: "Baidu ecosystem, Local info, Policy.",
      review: "Relies on Baidu ecosystem, extremely detailed local history retrieval.",
      context_window: "32K",
      internet_access: true,
      multimodal: true
    },
    tags: ["Search", "Local"],
    translations: {
      'zh-CN': { name: "文心一言", description: "搜索增强老牌 AI", features: { strengths: "依托百度生态；对本土互联网历史数据检索极细。", limitations: "对复杂代码指令的理解深度偶尔不稳定。", best_for: "百度生态整合、本土信息检索、政策咨询。", review: "依托百度生态，对本土历史数据检索极细。" } }
    }
  },
  // ==========================================
  // 2. Search (AI 搜索)
  // ==========================================
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI search originator.",
    url: "https://www.perplexity.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Perplexity",
    platforms: ["Web", "App"],
    features: {
      score: 9.7,
      strengths: "Real-time global sources; Precise citations; Focus modes.",
      limitations: "Limited Pro searches in free tier.",
      best_for: "Deep research, Fact checking, Global trends.",
      review: "The 'Wikipedia + Google' of AI search, industry benchmark.",
      citation: true,
      academic_focus: true,
      internet_access: true
    },
    tags: ["Search", "Research"],
    translations: {
      'zh-CN': { description: "AI 搜索鼻祖", features: { strengths: "实时抓取全球信源；引用标注极其精准；Focus 模式可切换搜索范围（学术/YouTube等）。", limitations: "免费版每日 Pro 搜索次数有限；对极深度的逻辑推导略逊于纯 LLM。", best_for: "深度调研、日常百科验证、查阅最新全球动态。", review: "AI 搜索界的“维基百科+谷歌”，行业标杆。" } }
    }
  },
  {
    id: "searchgpt",
    name: "SearchGPT",
    description: "OpenAI official search.",
    url: "https://chatgpt.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "OpenAI",
    platforms: ["Web"],
    features: {
      score: 9.5,
      strengths: "Deep integration with GPT-5; Fluid interaction; Handles complex follow-ups.",
      limitations: "Still integrating; Academic depth less than specialized tools.",
      best_for: "Complex daily queries, Shopping advice, Travel planning.",
      review: "Search is no longer finding links, but talking to omniscient GPT.",
      citation: true,
      academic_focus: false,
      internet_access: true
    },
    tags: ["Search", "OpenAI"],
    translations: {
      'zh-CN': { description: "OpenAI 官方搜索", features: { strengths: "深度整合 GPT-5 系列模型；交互极其流畅；擅长处理复杂的连续追问。", limitations: "目前仍处于功能集成阶段；在学术搜索的垂直深度上不如专业工具。", best_for: "日常复杂咨询、寻找购买建议、旅行规划。", review: "搜索不再是找链接，而是直接与“全知全能”的 GPT 对话。" } }
    }
  },
  {
    id: "genspark",
    name: "Genspark",
    description: "Custom encyclopedia generation.",
    url: "https://www.genspark.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=genspark.ai&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Genspark",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "Generates custom Sparkpages; Side-by-side comparison.",
      limitations: "Generation takes time; Occasional lag on breaking news.",
      best_for: "Shopping comparison, Learning new fields.",
      review: "Search results are no longer webpages, but a custom encyclopedia.",
      citation: true,
      academic_focus: false,
      internet_access: true
    },
    tags: ["Wiki", "Comparison"],
    translations: {
      'zh-CN': { description: "定制化百科生成", features: { strengths: "自动生成定制化的 Sparkpage（百科页面）；支持并排对比商品和观点。", limitations: "页面生成时间略长；对于瞬时爆发的新闻抓取偶尔滞后。", best_for: "购物对比、初识新领域的系统性学习、旅行攻略。", review: "搜索结果不再是网页，而是为你量身定制的“精美百科全书”。" } }
    }
  },
  {
    id: "consensus",
    name: "Consensus",
    description: "Academic search engine.",
    url: "https://consensus.app",
    iconUrl: "https://www.google.com/s2/favicons?domain=consensus.app&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Consensus",
    platforms: ["Web"],
    features: {
      score: 9.0,
      strengths: "Peer-reviewed papers only; Consensus percentage (Yes/No ratio).",
      limitations: "Science only; Cannot answer daily life questions.",
      best_for: "Academic research, Evidence checking, Theses.",
      review: "The 'Judge' of science, speaks only with data.",
      citation: true,
      academic_focus: true,
      internet_access: true
    },
    tags: ["Academic", "Science"],
    translations: {
      'zh-CN': { description: "学术搜索引擎", features: { strengths: "只搜索经过同行评审的科研论文；提供“共识度”百分比（Yes/No 比例）。", limitations: "仅限于科学研究领域；对生活常识和非学术问题无法回答。", best_for: "科研论文搜索、医学与科学证据查证、写毕业论文。", review: "科学界的“判官”，只用真正的科研数据说话。" } }
    }
  },
  {
    id: "phind",
    name: "Phind",
    description: "Programming search engine.",
    url: "https://www.phind.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=phind.com&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Phind",
    platforms: ["Web"],
    features: {
      score: 8.9,
      strengths: "Optimized for devs; Runs code; Github search.",
      limitations: "Average on non-coding topics.",
      best_for: "Debugging, Documentation, Code snippets.",
      review: "The 'Stack Overflow' killer for programmers.",
      citation: true,
      academic_focus: false,
      internet_access: true
    },
    tags: ["Dev", "Code"],
    translations: {
      'zh-CN': { description: "编程专属搜索引擎", features: { strengths: "专为开发者优化；完美集成代码运行环境；能够直接搜索 GitHub 库。", limitations: "对非编程相关的搜索结果处理一般；中文语境理解深度逊于国产工具。", best_for: "程序员 Debug、新技术文档查阅、代码片段搜索。", review: "程序员的“Stack Overflow”终结者，能写能搜能运行。" } }
    }
  },
  {
    id: "elicit",
    name: "Elicit",
    description: "Automated research assistant.",
    url: "https://elicit.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=elicit.com&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Elicit",
    platforms: ["Web"],
    features: {
      score: 8.8,
      strengths: "Automated literature review; Data extraction from PDFs.",
      limitations: "Steep learning curve; Chinese coverage needs improvement.",
      best_for: "Batch paper data extraction, Lit review.",
      review: "Super brain for the lab, organizes papers in seconds.",
      citation: true,
      academic_focus: true,
      internet_access: true
    },
    tags: ["Research", "Academic"],
    translations: {
      'zh-CN': { description: "自动化研究助手", features: { strengths: "擅长自动化文献综述；能从上百篇 PDF 中提取特定数据并列成表格。", limitations: "学习门槛相对较高；对中文学术库的覆盖率有待提升。", best_for: "批量提取论文数据、自动化文献综述、科研数据挖掘。", review: "实验室里的“超级大脑”，把繁琐的论文整理变成一秒搞定。" } }
    }
  },
  {
    id: "tiangong",
    name: "Tiangong AI",
    description: "Dual-100B model search.",
    url: "https://search.tiangong.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=tiangong.cn&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "Kunlun Tech",
    platforms: ["Web", "App"],
    features: {
      score: 8.7,
      strengths: "Chinese context understanding; Deep search mode.",
      limitations: "Global source depth behind Perplexity.",
      best_for: "Chinese depth research, Policy/Social analysis.",
      review: "The deep search tool that understands Chinese context best.",
      citation: true,
      academic_focus: true,
      internet_access: true
    },
    tags: ["Search", "Chinese"],
    translations: {
      'zh-CN': { name: "天工 AI 搜索", description: "双千亿大模型搜索", features: { strengths: "国产 AI 搜索先驱；中文语境理解极深；“深度搜索”模式分析极其透彻。", limitations: "国际化信源的覆盖深度对比 Perplexity 略有差距。", best_for: "中文深度调研、国内政策/社会热点分析。", review: "中文语境下最懂你的深度搜索工具。" } }
    }
  },
  {
    id: "360ai",
    name: "360 AI Search",
    description: "Next-gen intelligent engine.",
    url: "https://so.360.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=360.com&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "360",
    platforms: ["Web"],
    features: {
      score: 8.4,
      strengths: "Backed by 360 security/search; Concise answers.",
      limitations: "Average on academic/vertical professional fields.",
      best_for: "Quick info, Encyclopedic queries, Ad-free search.",
      review: "Goodbye ads, hello clean answers.",
      citation: true,
      academic_focus: false,
      internet_access: true
    },
    tags: ["Search", "Clean"],
    translations: {
      'zh-CN': { name: "360 AI 搜索", description: "新一代智能引擎", features: { strengths: "依托 360 强大的安全与搜索基因；提供精准、简洁的归纳式答案。", limitations: "在学术搜索和极度垂直的专业领域表现中规中矩。", best_for: "快速查资料、日常百科查询、规避垃圾信息搜索。", review: "告别广告，直接给你最想要的纯净答案。" } }
    }
  },
  // ==========================================
  // 3. Coding (编程)
  // ==========================================
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-native editor.",
    url: "https://cursor.sh",
    iconUrl: "https://www.google.com/s2/favicons?domain=cursor.sh&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Cursor",
    platforms: ["Desktop"],
    features: {
      score: 9.8,
      strengths: "Best AI IDE; Deep indexing; Agent refactoring.",
      limitations: "Migration from VS Code; Paid subscription.",
      best_for: "Pro devs, Refactoring, Full stack.",
      review: "The ceiling of AI coding, evolving coders to architects.",
      ide_support: "VS Code Fork",
      codebase_aware: true,
      deployment: false
    },
    tags: ["IDE", "Agent"],
    isPopular: true,
    translations: {
      'zh-CN': { description: "AI 原生编辑器", features: { strengths: "全球公认最强 AI IDE；代码库深度索引；Agent 模式可自主完成多文件重构与报错修复。", limitations: "需从 VS Code 迁移（虽然无缝）；Pro 版订阅费相对较高。", best_for: "专业开发者、中大型项目重构、追求极致效率的全栈开发。", review: "目前 AI 编程界的天花板，让开发者从“码农”进化为“架构师”。" } }
    }
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description: "Next-gen Agent IDE.",
    url: "https://codeium.com/windsurf",
    iconUrl: "https://www.google.com/s2/favicons?domain=codeium.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Codeium",
    platforms: ["Desktop"],
    features: {
      score: 9.6,
      strengths: "Cascade technology; Smooth collaboration; Generous free tier.",
      limitations: "Brand awareness lower than Cursor; Extensions catching up.",
      best_for: "Speed, Startups, Budget-conscious.",
      review: "Cursor's strongest rival, extremely smooth flow.",
      ide_support: "VS Code Fork",
      codebase_aware: true,
      deployment: false
    },
    tags: ["IDE", "Free"],
    translations: {
      'zh-CN': { description: "新一代 Agent IDE", features: { strengths: "自研 Cascade (级联) 技术，人机协作流畅度极高；上下文感应极其灵敏；免费额度非常慷慨。", limitations: "品牌知名度略逊于 Cursor；生态插件丰富度尚在追赶中。", best_for: "追求极速响应的个人开发者、初创团队、预算敏感型专家。", review: "Cursor 最强劲的对手，上下文理解与协作流异常顺滑。" } }
    }
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "Conversational full-stack dev.",
    url: "https://lovable.dev",
    iconUrl: "https://www.google.com/s2/favicons?domain=lovable.dev&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Lovable",
    platforms: ["Web"],
    features: {
      score: 9.5,
      strengths: "Generates full apps with backend (Supabase); High design quality.",
      limitations: "Web apps only; High encapsulation limits deep custom logic.",
      best_for: "MVPs, Founders, Frontend-driven SaaS.",
      review: "2026 dark horse, shortens app dev from weeks to hours.",
      ide_support: "Web Editor",
      codebase_aware: true,
      deployment: true
    },
    tags: ["No-Code", "Full-Stack"],
    translations: {
      'zh-CN': { description: "对话式全栈开发", features: { strengths: "“言出法随”，只需描述需求即可生成带后端（Supabase）的完整全栈 App；设计感极强。", limitations: "主要针对 Web 应用；由于封装度高，极深度的自定义逻辑需手动干预。", best_for: "创业者快速出 MVP、非技术创始人、前端驱动的 SaaS 开发。", review: "2026 年最强黑马，把开发一个 App 的时间从数周缩短到数小时。" } }
    }
  },
  {
    id: "v0-dev",
    name: "v0.dev",
    description: "Frontend UI expert.",
    url: "https://v0.dev",
    iconUrl: "https://www.google.com/s2/favicons?domain=v0.dev&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Vercel",
    platforms: ["Web"],
    features: {
      score: 9.4,
      strengths: "Vercel native; Best React/Tailwind code; shadcn/ui support.",
      limitations: "UI only, no backend logic.",
      best_for: "Frontend devs, Designers, Next.js.",
      review: "Magic paintbrush for frontend, production-ready code.",
      ide_support: "Web Editor",
      codebase_aware: false,
      deployment: true
    },
    tags: ["UI", "Frontend"],
    translations: {
      'zh-CN': { description: "前端 UI 专家", features: { strengths: "Vercel 原生支持；生成的 React/Tailwind 代码质量全网第一；完美适配 shadcn/ui。", limitations: "侧重于前端 UI 组件，不提供完整的后端逻辑与数据库闭环。", best_for: "前端工程师、UI/UX 设计师、Next.js 项目快速构建。", review: "前端开发的“神笔马良”，生成的代码可以直接用于生产环境。" } }
    }
  },
  {
    id: "replit",
    name: "Replit Agent",
    description: "Cloud automated dev.",
    url: "https://replit.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=replit.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Replit",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "Automates coding, env setup, db, deployment; Browser-based.",
      limitations: "Cloud performance limits large projects.",
      best_for: "Beginners, Prototyping, Lightweight web apps.",
      review: "True cloud AI programmer, deploy complex apps easily.",
      ide_support: "Cloud IDE",
      codebase_aware: true,
      deployment: true
    },
    tags: ["Cloud", "Agent"],
    translations: {
      'zh-CN': { description: "云端全自动开发", features: { strengths: "从代码编写到环境配置、数据库挂载、一键部署全部自动化；完全在浏览器运行。", limitations: "受限于云端环境性能，处理极大型本地项目不如原生 IDE。", best_for: "编程初学者、快速原型验证、轻量级 Web 服务。", review: "真正意义上的“云端 AI 程序员”，小白也能上线复杂应用。" } }
    }
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    description: "Full-stack web container.",
    url: "https://bolt.new",
    iconUrl: "https://www.google.com/s2/favicons?domain=bolt.new&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "StackBlitz",
    platforms: ["Web"],
    features: {
      score: 9.1,
      strengths: "WebContainer tech; Full Node.js in browser; One-click run.",
      limitations: "Network dependent; Persistence issues for large projects.",
      best_for: "Prototyping, Demos, Quick tasks.",
      review: "Full stack weapon in browser, kills environment setup.",
      ide_support: "Web IDE",
      codebase_aware: true,
      deployment: true
    },
    tags: ["WebContainer", "Full-Stack"],
    translations: {
      'zh-CN': { description: "全栈 Web 容器", features: { strengths: "基于 WebContainer 技术，在浏览器内拥有完整的 Node.js 环境；一键生成并运行全栈应用。", limitations: "严重依赖网络环境；复杂大型项目的持久化开发体验稍逊。", best_for: "快速原型开发、全栈 Web 应用演示、临时开发任务。", review: "浏览器里的“全栈核武器”，让开发环境配置彻底成为历史。" } }
    }
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "Industry standard assistant.",
    url: "https://github.com/features/copilot",
    iconUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Microsoft",
    platforms: ["VSCode", "JetBrains"],
    features: {
      score: 8.9,
      strengths: "GitHub integration; Robust completion; Enterprise security.",
      limitations: "Plugin form factor; Refactoring weaker than Cursor.",
      best_for: "Enterprise, Specific IDE users.",
      review: "Old standard, stable and reassuring copilot.",
      ide_support: "Plugin",
      codebase_aware: true,
      deployment: false
    },
    tags: ["Microsoft", "Standard"],
    translations: {
      'zh-CN': { description: "行业标准助手", features: { strengths: "与 GitHub 生态完美融合；代码补全最稳健；企业级安全合规首选。", limitations: "依然以“插件”形式存在，在跨文件全局重构能力上逊于 Cursor。", best_for: "企业内开发、对 IDE 有特定偏好（如 JetBrains/Vim）的用户。", review: "AI 编程的老牌标杆，稳定且令人安心的“副驾驶”。" } }
    }
  },
  {
    id: "tongyi-lingma",
    name: "Tongyi Lingma",
    description: "Domestic smart assistant.",
    url: "https://tongyi.aliyun.com/lingma",
    iconUrl: "https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "Alibaba",
    platforms: ["VSCode", "JetBrains"],
    features: {
      score: 8.8,
      strengths: "Deep Chinese understanding; Free; AliCloud integration.",
      limitations: "English context slightly weaker than Claude.",
      best_for: "Chinese devs, Students, AliCloud users.",
      review: "Light of domestic coding assistants, free and powerful.",
      ide_support: "Plugin",
      codebase_aware: true,
      deployment: false
    },
    tags: ["Chinese", "Free"],
    translations: {
      'zh-CN': { name: "通义灵码", description: "国产智能助手", features: { strengths: "对中文注释和需求理解极深；完全免费且深度集成阿里云生态。", limitations: "国际化项目（全英文环境）的语境理解偶尔略逊于 Claude。", best_for: "国内开发者、阿里云用户、追求免费高性能工具的学生。", review: "国产编程助手之光，免费好用的生产力加速器。" } }
    }
  },
  {
    id: "aider",
    name: "Aider",
    description: "Terminal AI coding.",
    url: "https://aider.chat",
    iconUrl: "https://www.google.com/s2/favicons?domain=aider.chat&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Aider",
    platforms: ["Terminal"],
    features: {
      score: 8.7,
      strengths: "Fast CLI; Deep Git support; For hackers.",
      limitations: "CLI only, steep curve.",
      best_for: "Heavy terminal users, Hackers.",
      review: "Coding ghost in the shell, concise and lethal.",
      ide_support: "CLI",
      codebase_aware: true,
      deployment: false
    },
    tags: ["CLI", "Git"],
    translations: {
      'zh-CN': { description: "终端 AI 编程", features: { strengths: "命令行操作极速；对 Git 工作流深度支持；适合硬核黑客。", limitations: "纯命令行界面，对习惯图形化 UI 的用户有较高学习门槛。", best_for: "重度终端用户、黑客、追求极简工作流的开发者。", review: "命令行里的“编程幽灵”，简洁、高效、致命。" } }
    }
  },
  {
    id: "baidu-comate",
    name: "Baidu Comate",
    description: "Enterprise coding assistant.",
    url: "https://comate.baidu.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=baidu.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.CN,
    pricing: [PricingModel.PAID],
    developer: "Baidu",
    platforms: ["VSCode"],
    features: {
      score: 8.4,
      strengths: "Chinese context; Enterprise customization.",
      limitations: "Intelligence behind top models like Claude 3.5.",
      best_for: "Chinese enterprises, Baidu ecosystem.",
      review: "Understands Chinese devs, stable for enterprise.",
      ide_support: "Plugin",
      codebase_aware: true,
      deployment: false
    },
    tags: ["Enterprise", "Chinese"],
    translations: {
      'zh-CN': { name: "百度 Comate", description: "企业级代码助手", features: { strengths: "懂中文语境；针对企业私有代码库的定制化能力较强。", limitations: "综合智能水平与顶尖模型（如 Claude 3.5）相比仍有追赶空间。", best_for: "国内企业客户、百度生态开发者。", review: "懂代码更懂中文开发者，企业落地的稳健选择。" } }
    }
  },
  // ==========================================
  // 4. Writing & Marketing (写作)
  // ==========================================
  {
    id: "jasper",
    name: "Jasper",
    description: "Enterprise marketing hub.",
    url: "https://www.jasper.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=jasper.ai&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Jasper",
    platforms: ["Web"],
    features: {
      score: 9.7,
      strengths: "Marketing Agent; Brand Voice control; SEO integration.",
      limitations: "Highest price; Overkill for individuals.",
      best_for: "Large marketing teams, Brand consistency.",
      review: "2026 digital director, executing strategy not just writing."
    },
    tags: ["Marketing", "Enterprise"],
    translations: {
      'zh-CN': { description: "企业级营销中枢", features: { strengths: "核心营销 Agent：能自主执行市场调研与分发；品牌语调（Brand Voice）控制全网最强；深度集成 SEO 优化。", limitations: "价格是同类最高；对于个人博主来说功能过于繁重。", best_for: "中大型企业营销团队、需要多渠道保持品牌一致性的品牌方。", review: "2026 年营销界的“数字总监”，不再只是写字，而是在执行策略。" } }
    }
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "Automated marketing workflows.",
    url: "https://www.copy.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=copy.ai&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Copy.ai",
    platforms: ["Web"],
    features: {
      score: 9.5,
      strengths: "Workflows connect research/writing/SEO; Mass generation.",
      limitations: "Focus on automation, less depth in long-form.",
      best_for: "Sales (GTM), Content agencies, Bulk generation.",
      review: "Marketing automation nuke, 1 month work in 1 minute."
    },
    tags: ["Automation", "Workflow"],
    translations: {
      'zh-CN': { description: "自动化营销工作流", features: { strengths: "Workflows (工作流)：能像搭积木一样串联调查、写作、SEO 和分发；极其擅长大规模生成销售线索和个性化邮件。", limitations: "侧重于流程自动化，在长篇深度文章的叙事性上略逊于 Jasper。", best_for: "销售团队（GTM）、内容分发机构、需要批量生产营销物料的团队。", review: "营销自动化领域的“核武器”，把一个月的营销活儿缩短到一分钟。" } }
    }
  },
  {
    id: "writesonic",
    name: "WriteSonic",
    description: "SEO & Blog expert.",
    url: "https://writesonic.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=writesonic.com&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "WriteSonic",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "AI Article Writer 6.0; SEO structure; Competitive pricing.",
      limitations: "Brand voice customization weaker than Jasper; Cluttered UI.",
      best_for: "SEO pros, Bloggers, SMBs.",
      review: "SEO traffic king, great loop of generation and optimization."
    },
    tags: ["SEO", "Blog"],
    translations: {
      'zh-CN': { description: "SEO 与博客专家", features: { strengths: "AI Article Writer 6.0：生成的长文章极具深度且自带 SEO 结构；价格极具竞争力；集成 ChatSonic 实时联网。", limitations: "品牌语调深度定制能力略逊于 Jasper；UI 相对紧凑，功能分散。", best_for: "SEO 专业人士、个人博主、预算有限的中小企业。", review: "追求 SEO 流量的“性价比之王”，文章生成与优化的闭环做得极好。" } }
    }
  },
  {
    id: "grammarly",
    name: "Grammarly AI",
    description: "Global writing optimizer.",
    url: "https://grammarly.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=grammarly.com&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Grammarly",
    platforms: ["Web", "Extension"],
    features: {
      score: 9.0,
      strengths: "Correction & Polishing king; Tone adjustment; Ubiquitous.",
      limitations: "Cannot generate long strategy; Focus on improvement.",
      best_for: "Everyone, Professionals, Students.",
      review: "Personal editor for everyone, levels up professionalism."
    },
    tags: ["Grammar", "Editor"],
    translations: {
      'zh-CN': { description: "全球写作优化标杆", features: { strengths: "纠错与润色之王：不仅是纠错，AI 助手能根据目标读者修改语气；无处不在的浏览器与 Office 插件。", limitations: "无法一键生成长篇营销策略；主要针对现有内容的改进而非从零创造。", best_for: "所有人、职场精英、学生、学术写作、需要确保表达地道的跨境卖家。", review: "每个人的“随身私人编辑”，让你的专业感提升一个台阶。" } }
    }
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "Simple value assistant.",
    url: "https://rytr.me",
    iconUrl: "https://www.google.com/s2/favicons?domain=rytr.me&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Rytr",
    platforms: ["Web"],
    features: {
      score: 8.5,
      strengths: "Simple & Fast; Low price; Free tier.",
      limitations: "Fixed templates; Weak on complex workflows.",
      best_for: "Social media, Students, Beginners.",
      review: "Compact portable writer, best first stop for AI writing."
    },
    tags: ["Simple", "Budget"],
    translations: {
      'zh-CN': { description: "极简高性价比助手", features: { strengths: "简单好用：界面极简，响应极快；价格极低且拥有永久免费额度。", limitations: "模板相对固定，处理复杂营销工作流的能力较弱。", best_for: "社交媒体运营、学生党、需要快速产出短文案的初学者。", review: "小巧玲珑的“随身笔杆子”，是入门 AI 写作的最佳第一站。" } }
    }
  },
  // ==========================================
  // 5. Image (图像)
  // ==========================================
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Art creation ceiling.",
    url: "https://midjourney.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Midjourney",
    platforms: ["Discord", "Web"],
    features: {
      score: 9.8,
      strengths: "Top aesthetics; V7 photorealism; Inpainting.",
      limitations: "Discord/Web only; Prompt adherence sometimes below DALL-E.",
      best_for: "Art, Movies, High-end material.",
      review: "Aesthetic peak of AI art, cover-ready images.",
      image_resolution: "2048x2048",
      text_rendering: "Improved",
      editing_tools: "Vary, Zoom, Pan"
    },
    tags: ["Art", "Creative"],
    isPopular: true,
    translations: {
      'zh-CN': { description: "艺术创作天花板", features: { strengths: "审美水平行业第一；V7版本光影质感极度写实；支持细腻的局部重绘。", limitations: "必须在 Discord 或其独立 Web 使用；提示词语境理解偶尔不如 DALL-E 3。", best_for: "艺术插画、电影概念图、高质感摄影素材生成。", review: "AI 绘画界的“审美巅峰”，每一张图都能直接做封面。" } }
    }
  },
  {
    id: "flux",
    name: "Flux.1",
    description: "New open source king.",
    url: "https://blackforestlabs.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Black Forest Labs",
    platforms: ["Local", "Web"],
    features: {
      score: 9.7,
      strengths: "Perfect text; Realism rivals MJ; Open source.",
      limitations: "High VRAM req; Needs LoRA for styles.",
      best_for: "Posters, Developers, Visuals with text.",
      review: "2026 open source masterpiece, solves text generation.",
      image_resolution: "2.0MP+",
      text_rendering: "Excellent",
      editing_tools: "Inpainting (Pro)"
    },
    tags: ["Open Source", "Text"],
    translations: {
      'zh-CN': { description: "开源绘图新霸主", features: { strengths: "文字渲染完美；写实程度直逼 MJ；开源生态，支持高度定制。", limitations: "对显存要求极高（本地跑）；原生版对艺术风格的调教需额外 LoRA。", best_for: "海报设计、带文字的创意视觉、开发者二次开发。", review: "2026 年开源界的神作，彻底解决了 AI 乱画文字的百年难题。" } }
    }
  },
  {
    id: "dall-e",
    name: "DALL-E 3",
    description: "Semantic understanding expert.",
    url: "https://openai.com/dall-e-3",
    iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "OpenAI",
    platforms: ["Web"],
    features: {
      score: 9.5,
      strengths: "ChatGPT integration; Conversational editing; Accurate prompt following.",
      limitations: "Plastic look; Conservative style.",
      best_for: "Quick ideas, Beginners, Simple posters.",
      review: "Most obedient, draws exactly what you ask.",
      image_resolution: "1024x1024",
      text_rendering: "Good",
      editing_tools: "Conversational Edit"
    },
    tags: ["Easy", "Prompt"],
    translations: {
      'zh-CN': { description: "语义理解专家", features: { strengths: "完美集成在 ChatGPT 中；对话式改图极其方便；对复杂长指令理解最准。", limitations: "画面偶尔有“AI 塑料感”；艺术张力相对保守，风格较固定。", best_for: "快速创意构思、简单海报草稿、小白用户首选。", review: "听话程度第一名，你敢想它就敢画，且绝对不跑题。" } }
    }
  },
  {
    id: "magnific",
    name: "Magnific AI",
    description: "Upscaling & Detail god.",
    url: "https://magnific.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=magnific.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Magnific",
    platforms: ["Web"],
    features: {
      score: 9.4,
      strengths: "Hallucinates details; Amazing realism enhancement.",
      limitations: "Expensive; Slow.",
      best_for: "Restoration, CG enhancement, High-end visuals.",
      review: "Injects soul into images, turns blurry to blockbuster.",
      image_resolution: "10K+",
      text_rendering: "N/A",
      editing_tools: "Upscale, Enhance"
    },
    tags: ["Upscale", "Detail"],
    translations: {
      'zh-CN': { description: "重绘与超分之神", features: { strengths: "细节创造力：不仅仅是放大，而是为图片增加惊人的真实细节。", limitations: "价格极其昂贵；处理速度相对较慢。", best_for: "旧图高清修复、CG 渲染图细节增强、极致视觉海报。", review: "给图片注入“灵魂”的神器，让模糊图像瞬间变大片。" } }
    }
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    description: "Commercial safety choice.",
    url: "https://firefly.adobe.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Adobe",
    platforms: ["Web", "Photoshop"],
    features: {
      score: 9.2,
      strengths: "PS integration; Copyright safe; Generative Fill.",
      limitations: "Creative boundaries limited by copyright safety.",
      best_for: "Commercial design, Retouching, UI assets.",
      review: "Designer's cheat code, copyright safe productivity.",
      image_resolution: "2048x2048",
      text_rendering: "Moderate",
      editing_tools: "Generative Fill"
    },
    tags: ["Commercial", "Safe"],
    translations: {
      'zh-CN': { description: "商用版权安全首选", features: { strengths: "与 PS/AI 无缝集成；训练数据合法合规；“生成式填充”极其自然。", limitations: "创意边界受版权库限制；艺术爆发力弱于 Midjourney。", best_for: "商业广告设计、影楼后期、UI 界面素材补充。", review: "设计师的“正规军”外挂，版权无忧，生产力倍增。" } }
    }
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    description: "All-in-one creative canvas.",
    url: "https://leonardo.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=leonardo.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Leonardo",
    platforms: ["Web"],
    features: {
      score: 9.1,
      strengths: "Comprehensive features; Real-time canvas; Rich community models.",
      limitations: "Complex UI; High token usage.",
      best_for: "Game assets, Characters, Style experiments.",
      review: "Swiss Army Knife of AI art.",
      image_resolution: "1536x1536",
      text_rendering: "Good",
      editing_tools: "Canvas, Inpaint"
    },
    tags: ["Game", "Assets"],
    translations: {
      'zh-CN': { description: "全能创作画布", features: { strengths: "功能极其全面（实时画布、多种模型切换）；社区模型生态极其丰富。", limitations: "功能多导致 UI 略显复杂；高级功能消耗代币较快。", best_for: "游戏资产设计、角色建模、多风格尝试。", review: "AI 绘画界的“瑞士军刀”，功能多到让你停不下来。" } }
    }
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "King of freedom.",
    url: "https://stability.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=stability.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Stability AI",
    platforms: ["Local"],
    features: {
      score: 9.0,
      strengths: "ControlNet; Extreme control; Free.",
      limitations: "Steep learning curve; Hardware requirements.",
      best_for: "Pros, Developers, Local content.",
      review: "The most powerful tool if you know how to use it.",
      image_resolution: "Unlimited",
      text_rendering: "Model dependent",
      editing_tools: "ControlNet, Inpaint"
    },
    tags: ["Open Source", "Control"],
    translations: {
      'zh-CN': { description: "自由度之王", features: { strengths: "插件生态（ControlNet等）支持极致的姿势和结构控制；完全免费。", limitations: "学习门槛极高；需要高性能显卡支持。", best_for: "专业原画师、追求极致控制的开发者、本地化内容生产。", review: "只要你会调教，它就是这个世界上最强大的绘图工具。" } }
    }
  },
  {
    id: "liblib",
    name: "Liblib AI",
    description: "China's top model community.",
    url: "https://www.liblib.art",
    iconUrl: "https://www.google.com/s2/favicons?domain=liblib.art&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "Liblib",
    platforms: ["Web"],
    features: {
      score: 8.9,
      strengths: "SD/Flux integration; Massive Chinese models; Fast cloud training.",
      limitations: "International models catching up; Paid advanced features.",
      best_for: "Chinese style, E-commerce, Local design.",
      review: "China's Civitai, ammo depot for Chinese devs.",
      image_resolution: "High",
      text_rendering: "Good",
      editing_tools: "WebUI, ComfyUI"
    },
    tags: ["Community", "Chinese"],
    translations: {
      'zh-CN': { description: "中国最强模型社区", features: { strengths: "深度整合 SD 和 Flux 生态；海量中文特色模型；在线云端训练极快。", limitations: "国际化模型覆盖度尚在追赶；部分高阶功能需付费。", best_for: "国风创作、电商模特、本土化视觉设计。", review: "中国版的 Civitai，中文开发者的“模型弹药库”。" } }
    }
  },
  {
    id: "canva",
    name: "Canva Magic",
    description: "Design for everyone.",
    url: "https://www.canva.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=canva.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Canva",
    platforms: ["Web", "App"],
    features: {
      score: 8.7,
      strengths: "Seamless workflow integration; One-click remove bg/expand.",
      limitations: "Artistic depth limited; Commercial layout focus.",
      best_for: "Social media, Non-designers.",
      review: "Democratizes design, makes pros out of beginners.",
      image_resolution: "High",
      text_rendering: "Excellent",
      editing_tools: "Magic Edit/Eraser"
    },
    tags: ["Easy", "Layout"],
    translations: {
      'zh-CN': { description: "小白设计全家桶", features: { strengths: "将 AI 完美融入排版工作流；一键去背、一键扩图、一键生成 PPT。", limitations: "生成的图像艺术深度有限，偏向商业排版而非艺术创作。", best_for: "自媒体排版、社交媒体发帖、非专业设计师。", review: "让设计平民化，让“不会画图”的人也能做出大厂设计。" } }
    }
  },
  {
    id: "tongyi-wanxiang",
    name: "Tongyi Wanxiang",
    description: "Evolutionary painting model.",
    url: "https://tongyi.aliyun.com/wanxiang",
    iconUrl: "https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "Alibaba",
    platforms: ["Web"],
    features: {
      score: 8.5,
      strengths: "Chinese semantic understanding; Ink/Ancient styles.",
      limitations: "Gap in photorealism vs top models.",
      best_for: "E-commerce, Chinese style, AliCloud users.",
      review: "Best AI for Chinese culture and style.",
      image_resolution: "1024x1024",
      text_rendering: "Average",
      editing_tools: "Style Transfer"
    },
    tags: ["Chinese", "Style"],
    translations: {
      'zh-CN': { name: "通义万相", description: "进化式绘画模型", features: { strengths: "中文语义理解极佳；擅长水墨、古风等中式审美风格。", limitations: "在极度写实和复杂纹理上与顶级模型仍有小幅差距。", best_for: "电商海报、中式风格创作、阿里云生态用户。", review: "最懂中国文化的绘图 AI，古风创作一绝。" } }
    }
  },
  {
    id: "meitu",
    name: "Meitu Design",
    description: "E-commerce retouching god.",
    url: "https://design.meitu.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=meitu.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "Meitu",
    platforms: ["Web", "App"],
    features: {
      score: 8.3,
      strengths: "Optimized for e-commerce (AI models, Try-on); Portrait retouching.",
      limitations: "Narrow focus on portraits/e-commerce.",
      best_for: "Sellers, Personal retouching, Social media.",
      review: "Money saver for sellers, one-click pro photos.",
      image_resolution: "High",
      text_rendering: "N/A",
      editing_tools: "Retouch, BG Remove"
    },
    tags: ["E-commerce", "Retouch"],
    translations: {
      'zh-CN': { name: "美图设计室", description: "电商与修图神器", features: { strengths: "针对电商场景深度优化（AI 模特、AI 试衣）；人像修图极致细腻。", limitations: "场景较窄，主要局限在人像和电商领域。", best_for: "网店卖家、个人修图、社交媒体人像美化。", review: "电商卖家的“省钱神器”，一键生成专业商拍。" } }
    }
  },
  // ==========================================
  // 6. Video (视频)
  // ==========================================
  {
    id: "sora",
    name: "Sora",
    description: "Cinematic narrative benchmark.",
    url: "https://openai.com/sora",
    iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    pricing: [PricingModel.CONTACT],
    developer: "OpenAI",
    platforms: ["Waitlist"],
    features: {
      score: 9.8,
      strengths: "60s+ duration; Realistic physics; Native SFX sync.",
      limitations: "Invite only; Slow generation; High cost.",
      best_for: "High-end ads, Movie concepts, Long shots.",
      review: "Video AI ceiling, imagination to 4K film.",
      video_duration: "60s+",
      frame_rate: "30/60 fps",
      image_resolution: "1920x1080"
    },
    tags: ["Cinematic", "Physics"],
    translations: {
      'zh-CN': { description: "电影级叙事标杆", features: { strengths: "视频长度（可达60s+）；物理引擎极其真实；原生支持 SFX（环境音与对白）同步。", limitations: "目前仍属于邀请制或高价值用户，生成时间较慢；成本较高。", best_for: "高端广告片、电影概念设计、需要长镜头表现的场景。", review: "视频 AI 界的“天花板”，让想象力直接转化为 4K 电影胶片。" } }
    }
  },
  {
    id: "kling",
    name: "Kling AI",
    description: "Physics & Long video expert.",
    url: "https://klingai.kuaishou.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=klingai.kuaishou.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "Kuaishou",
    platforms: ["Web"],
    features: {
      score: 9.6,
      strengths: "Strong coherence (10-20s); Accurate anatomy; Large motion.",
      limitations: "Global sub expensive; Occasional artifacts.",
      best_for: "Creative shorts, Action close-ups, Viral content.",
      review: "World-class card from China, pressure on Hollywood.",
      video_duration: "3m (Extendable)",
      frame_rate: "30 fps",
      image_resolution: "1080p"
    },
    tags: ["Realistic", "Long Video"],
    isPopular: true,
    translations: {
      'zh-CN': { name: "可灵 AI (Kling)", description: "物理规律与长视频专家", features: { strengths: "连贯性极强（支持10-20s复杂动作）；人体解剖结构极其准确；3D 运动幅度极大。", limitations: "国际版订阅稍贵；在极高速运动下画面偶尔会有边缘伪影。", best_for: "创意短视频、人物动作细节特写、社交媒体爆款内容。", review: "国产视频 AI 的世界级名片，动作连贯性让好莱坞都感到压力。" } }
    }
  },
  {
    id: "runway",
    name: "Runway Gen-3",
    description: "Pro director tool.",
    url: "https://runwayml.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Runway",
    platforms: ["Web"],
    features: {
      score: 9.5,
      strengths: "Extreme control (Motion Brush); Director Mode.",
      limitations: "Short generation (5-10s); High prompt skill needed.",
      best_for: "VFX, Commercials, Precise control.",
      review: "Creator's virtual studio, control is the ace.",
      video_duration: "10s (40s extend)",
      frame_rate: "24/30 fps",
      image_resolution: "4K"
    },
    tags: ["Control", "Pro"],
    translations: {
      'zh-CN': { description: "专业级导演工具", features: { strengths: "极致的控制力：Motion Brush（运动笔刷）可精准控制局部；支持多镜头导演模式（Director Mode）。", limitations: "侧重于短片生成（5-10s）；对提示词的专业度要求较高。", best_for: "视觉特效（VFX）、商业短片后期、需要精确构图控制的导演。", review: "视频创作者最爱的“虚拟影棚”，控制力是它无可撼动的王牌。" } }
    }
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    description: "Fast realism engine.",
    url: "https://lumalabs.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Luma Labs",
    platforms: ["Web"],
    features: {
      score: 9.4,
      strengths: "Fast generation; Natural keyframing; Generous free tier.",
      limitations: "Physics crash on complex collisions.",
      best_for: "Prototyping, Animating photos, Social media.",
      review: "Ferrari of video AI, speed and quality.",
      video_duration: "5s (Extendable)",
      frame_rate: "24/30 fps",
      image_resolution: "720p/1080p"
    },
    tags: ["Fast", "Physics"],
    translations: {
      'zh-CN': { description: "极速真实感引擎", features: { strengths: "生成速度极快（120秒出120帧）；首末帧插值（Keyframing）极其自然；免费额度较大。", limitations: "在处理极其复杂的物理碰撞（如液体泼溅）时偶尔会崩坏。", best_for: "快速原型制作、老照片动起来、高效率自媒体创作。", review: "视频 AI 界的“法拉利”，兼顾速度与惊艳画质。" } }
    }
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "Avatar & Translation king.",
    url: "https://www.heygen.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=heygen.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "HeyGen",
    platforms: ["Web"],
    features: {
      score: 9.3,
      strengths: "Lipsync & Multilingual dubbing; Voice cloning; Natural avatars.",
      limitations: "Static shots only; No complex scenes.",
      best_for: "Video translation, AI lecturers, Marketing.",
      review: "Avatar nuke, makes video translation as easy as email.",
      video_duration: "Unlimited",
      frame_rate: "30/60 fps",
      image_resolution: "1080p/4K"
    },
    tags: ["Avatar", "Translation"],
    translations: {
      'zh-CN': { description: "数字人与翻译王者", features: { strengths: "**口型同步（Lipsync）**与多语言配音全网最强；支持克隆原声；数字人自然度第一。", limitations: "仅限固定镜头的数字人播报；无法生成电影级的复杂场景切换。", best_for: "视频翻译出海、AI 讲师、企业虚拟代言人、营销视频。", review: "数字人领域的“核武器”，让视频翻译和出海变得像发邮件一样简单。" } }
    }
  },
  {
    id: "opusclip",
    name: "OpusClip",
    description: "Short video viral slicer.",
    url: "https://www.opus.pro",
    iconUrl: "https://www.google.com/s2/favicons?domain=opus.pro&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Opus",
    platforms: ["Web"],
    features: {
      score: 9.1,
      strengths: "Auto-editing; Identifies viral clips; Auto captions/zoom.",
      limitations: "Repurposing tool, not generation.",
      best_for: "Podcasters, Multi-platform, Viral clips.",
      review: "Virtual editor for creators, turns long video to followers.",
      video_duration: "N/A (Clipper)",
      frame_rate: "Source FPS",
      image_resolution: "1080p"
    },
    tags: ["Editing", "Viral"],
    translations: {
      'zh-CN': { description: "短视频流量切片神器", features: { strengths: "AI 自动化剪辑：自动识别长视频金句并切成短视频；自动加字幕和镜头缩放。", limitations: "属于“再创作”工具，不具备从零生成视觉素材的能力。", best_for: "YouTube/播客博主、多平台分发运营、寻找爆款片段。", review: "每个自媒体人的“虚拟剪辑助理”，把长视频变成涨粉机器。" } }
    }
  },
  {
    id: "vidu",
    name: "Vidu",
    description: "HD Creative generation.",
    url: "https://www.vidu.studio",
    iconUrl: "https://www.google.com/s2/favicons?domain=vidu.studio&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "ShengShu",
    platforms: ["Web"],
    features: {
      score: 8.9,
      strengths: "High clarity; Oriental aesthetics; One-click HD.",
      limitations: "Global themes narrower than Sora.",
      best_for: "Creative ads, Concept art, Chinese aesthetics.",
      review: "Tsinghua background, solid tech, perfect HD creativity.",
      video_duration: "4s/8s",
      frame_rate: "24 fps",
      image_resolution: "1080p"
    },
    tags: ["HD", "Chinese"],
    translations: {
      'zh-CN': { description: "高清创意生成", features: { strengths: "画面清晰度极高；对东方审美和中国元素的理解极其到位；支持一键生成高清。", limitations: "在全球化题材的广度上相比 Sora 略窄。", best_for: "创意广告、高清概念插画视频、中式美学视频。", review: "清华系背景，技术底座扎实，高清与创意的完美结合。" } }
    }
  },
  {
    id: "pika",
    name: "Pika",
    description: "Animation & Inpainting expert.",
    url: "https://pika.art",
    iconUrl: "https://www.google.com/s2/favicons?domain=pika.art&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Pika Labs",
    platforms: ["Web", "Discord"],
    features: {
      score: 8.8,
      strengths: "Anime style; SFX; Modify Region.",
      limitations: "Realism lower than Sora/Kling.",
      best_for: "Anime, Fun effects, Element modification.",
      review: "Most fun video AI, animator's helper.",
      video_duration: "3s (Extendable)",
      frame_rate: "24 fps",
      image_resolution: "1080p"
    },
    tags: ["Anime", "Fun"],
    translations: {
      'zh-CN': { description: "动画与重绘专家", features: { strengths: "擅长二次元、动画风格；Sound Effects 自动配音；局部重绘（Modify Region）极其好用。", limitations: "写实风格的画质上限略逊于 Sora 和 Kling。", best_for: "创意二次元视频、趣味特效转换、局部元素修改。", review: "最好玩、最具趣味性的视频 AI，动画师的绝佳帮手。" } }
    }
  },
  {
    id: "hunyuan",
    name: "Tencent Hunyuan",
    description: "Multimodal integration platform.",
    url: "https://hunyuan.tencent.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=tencent.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    pricing: [PricingModel.FREE],
    developer: "Tencent",
    platforms: ["Web"],
    features: {
      score: 8.6,
      strengths: "Tencent ecosystem; Smooth I2V; Chinese prompt understanding.",
      limitations: "Uniqueness chasing top tier.",
      best_for: "Domestic users, Social marketing, I2V.",
      review: "Stable big tech product, good for stable output.",
      video_duration: "4-10s",
      frame_rate: "24 fps",
      image_resolution: "720p"
    },
    tags: ["Tencent", "Stable"],
    translations: {
      'zh-CN': { name: "腾讯混元", description: "多模态集成平台", features: { strengths: "依托腾讯生态，文生图转视频非常丝滑；中文提示词理解精准。", limitations: "视频生成的独特性特征尚在追赶头部梯队（如 Kling）。", best_for: "国内生态用户、社交媒体营销、快速图生视频。", review: "稳扎稳打的“大厂出品”，适合寻求稳定产出的用户。" } }
    }
  },
  // ==========================================
  // 7. Audio (音频)
  // ==========================================
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI Voice Cloning benchmark.",
    url: "https://elevenlabs.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "ElevenLabs",
    platforms: ["Web", "API"],
    features: {
      score: 9.8,
      strengths: "No.1 Emotion; 29+ Languages; Instant cloning.",
      limitations: "Cost scales fast; Long text breaks.",
      best_for: "Audiobooks, Games, Narration.",
      review: "Oscar-level voice actor, soul in the voice.",
      voice_cloning: true,
      expressiveness: "Extremely High"
    },
    tags: ["Voice", "Cloning"],
    translations: {
      'zh-CN': { description: "AI 语音克隆标杆", features: { strengths: "情感表现力第一；支持29+语言极其自然地切换；专业克隆只需极短音频样本。", limitations: "订阅成本随使用量增加较快；长文本处理偶尔有语气断点。", best_for: "有声书录制、游戏角色配音、高端视频旁白。", review: "语音 AI 界的“奥斯卡级”配音员，声音里真的有“灵魂”。" } }
    }
  },
  {
    id: "suno",
    name: "Suno v4.5",
    description: "Pop music creation king.",
    url: "https://suno.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=suno.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Suno",
    platforms: ["Web"],
    features: {
      score: 9.7,
      strengths: "Lyrics & Melody blend; 8 min songs; Rich vocals.",
      limitations: "Details weak in experimental electronic.",
      best_for: "Viral songs, BGM, Gifts.",
      review: "Everyone is a hit maker, catchy melodies.",
      voice_cloning: false,
      expressiveness: "High"
    },
    tags: ["Music", "Pop"],
    translations: {
      'zh-CN': { description: "流行音乐创作之王", features: { strengths: "歌词与旋律的完美融合；支持长达8分钟的整曲生成；V4.5 显著提升了人声的厚度。", limitations: "在极其前卫或实验性的电子乐领域细节略逊。", best_for: "社交媒体神曲创作、视频背景音乐、给朋友写首歌。", review: "让每个人都能成为“金曲制作人”，旋律抓耳程度令人惊叹。" } }
    }
  },
  {
    id: "udio",
    name: "Udio v1.5",
    description: "High-fidelity Art Music.",
    url: "https://www.udio.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=udio.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Udio",
    platforms: ["Web"],
    features: {
      score: 9.5,
      strengths: "Audio fidelity ceiling; Real instruments; Creative.",
      limitations: "Steep curve; Slow generation.",
      best_for: "Producers, High quality demos, Hardcore fans.",
      review: "Studio-level master, real instruments fool pros.",
      voice_cloning: false,
      expressiveness: "Studio Quality"
    },
    tags: ["Music", "Hi-Fi"],
    translations: {
      'zh-CN': { description: "高保真艺术音乐", features: { strengths: "音质天花板（48kHz/320kbps）；擅长爵士、蓝调、摇滚等真实乐器质感；创意编曲极具灵气。", limitations: "学习门槛稍高，需要更精准的 Prompt 引导；生成速度略慢。", best_for: "音乐制作人、高质量 Demo、硬核乐迷创作。", review: "音乐 AI 界的“录音室级”大师，乐器质感真实到能骗过专业耳朵。" } }
    }
  },
  {
    id: "rask",
    name: "Rask.ai",
    description: "Auto dubbing & translation.",
    url: "https://www.rask.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=rask.ai&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Rask",
    platforms: ["Web"],
    features: {
      score: 9.4,
      strengths: "Dubbing loop; Translation + Clone; Lipsync.",
      limitations: "Enterprise pricing; Artistic audio translation average.",
      best_for: "Video Localization, Marketing, Content Creators.",
      review: "Professional video localization tool that preserves the original voice.",
      voice_cloning: true,
      expressiveness: "High"
    },
    tags: ["Dubbing", "Translation"],
    translations: {
      'zh-CN': { description: "自动配音与翻译", features: { strengths: "配音闭环；翻译+克隆；口型同步。", limitations: "企业级定价；艺术性音频翻译表现一般。", best_for: "视频本地化、营销、内容创作者。", review: "专业的视频本地化工具，能够保留原始声音特色。" } }
    }
  },
  {
    id: "adobe-podcast",
    name: "Adobe Podcast",
    description: "Audio restoration god.",
    url: "https://podcast.adobe.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Adobe",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "Enhance Speech: Studio quality from cheap mics.",
      limitations: "Vertical feature, no generation.",
      best_for: "Podcasters, Interviews, Bad audio.",
      review: "Studio alternative for workers, save bad audio.",
      voice_cloning: false,
      expressiveness: "Restoration"
    },
    tags: ["Restoration", "Podcast"],
    translations: {
      'zh-CN': { description: "音频修复神器", features: { strengths: "Enhance Speech：即便用几十块钱的麦克风，也能修出数万元录音室的效果。", limitations: "功能相对垂直，不具备创作类（生成音乐/语音）的功能。", best_for: "播客博主、户外采访录音修复、简陋环境下的视频收音。", review: "打工人的“录音棚平替”，烂设备也能出大片级音质。" } }
    }
  },
  {
    id: "moyin",
    name: "Moyin",
    description: "Domestic dubbing king.",
    url: "https://www.moyin.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=moyin.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.CN,
    pricing: [PricingModel.PAID],
    developer: "Moyin",
    platforms: ["Web", "App"],
    features: {
      score: 8.8,
      strengths: "Localized tone; TikTok styles; Multi-person dialogue.",
      limitations: "English/Niche languages less natural than ElevenLabs.",
      best_for: "Short videos, Ads, Audio drama.",
      review: "Standard voice for Chinese creators.",
      voice_cloning: true,
      expressiveness: "High (Chinese)"
    },
    tags: ["Chinese", "Dubbing"],
    translations: {
      'zh-CN': { name: "魔音工坊", description: "国产配音全能王", features: { strengths: "本土化语气极佳：拥有海量针对抖音、视频号风格的配音员；支持细腻的多人对话编排。", limitations: "在英文或其他小语种的自然度上对比 ElevenLabs 有差距。", best_for: "自媒体视频配音、广告旁白、有声短剧创作。", review: "国产短视频创作者的“御用嗓子”，地道、亲切、好用。" } }
    }
  },
  // ==========================================
  // 8. Productivity (生产力)
  // ==========================================
  {
    id: "copilot-m365",
    name: "Microsoft Copilot",
    description: "Office intelligence hub.",
    url: "https://copilot.microsoft.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Microsoft",
    platforms: ["Web", "Desktop"],
    features: {
      score: 9.7,
      strengths: "Native Agent; Embedded in Office; Work IQ memory.",
      limitations: "Depends on Microsoft ecosystem; Expensive.",
      best_for: "Enterprise, Excel analysis, PPT.",
      review: "Digital twin for workers, software works for you."
    },
    tags: ["Office", "Enterprise"],
    translations: {
      'zh-CN': { description: "全家桶级智能中枢", features: { strengths: "原生 Agent 模式：深度嵌入 Word/Excel/PPT，支持跨应用执行（如：把邮件转为 PPT）。", limitations: "必须深度依赖微软生态；对于非 M365 用户门槛高；资费较贵。", best_for: "企业全员办公、重度 Excel 数据分析、PPT 快速产出。", review: "2026 年职场人的“数字双胞胎”，让软件反过来为你打工。" } }
    }
  },
  {
    id: "notion",
    name: "Notion AI",
    description: "Knowledge & Second Brain.",
    url: "https://notion.so",
    iconUrl: "https://www.google.com/s2/favicons?domain=notion.so&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Notion",
    platforms: ["Web", "App"],
    features: {
      score: 9.5,
      strengths: "Q&A with notes; Auto-continue; Knowledge linking.",
      limitations: "PPT/Complex tables weaker than dedicated tools.",
      best_for: "Knowledge base, Startups, Creators.",
      review: "Super brain, turns dormant notes into wisdom."
    },
    tags: ["Docs", "Notes"],
    translations: {
      'zh-CN': { description: "知识管理与第二大脑", features: { strengths: "Q&A 与笔记联动：能基于你整个知识库进行问答；2026 版支持“自主续写”与智能关联。", limitations: "针对 PPT 或复杂表格的处理能力不如专门工具。", best_for: "个人知识库搭建、初创团队文档中心、内容创作者。", review: "每个人的“超级大脑”，让沉睡的笔记变成随时可调用的智慧。" } }
    }
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "Presentation disruptor.",
    url: "https://gamma.app",
    iconUrl: "https://www.google.com/s2/favicons?domain=gamma.app&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Gamma",
    platforms: ["Web"],
    features: {
      score: 9.3,
      strengths: "Chat to Deck; Web-like slides; High aesthetics.",
      limitations: "Export to PPT sometimes messy; Templates limit freedom.",
      best_for: "Demos, Pitch decks, Teaching.",
      review: "PPT dimension reduction, time for thinking."
    },
    tags: ["Slides", "Design"],
    translations: {
      'zh-CN': { description: "演示文稿颠覆者", features: { strengths: "“对话即生成”：1分钟生成精美网页级 PPT；打破传统幻灯片限制，支持卡片式平滑切换，审美极高。", limitations: "导出为传统 PPT 格式时偶尔有布局错乱；深度定制的自由度受限于模板。", best_for: "快速产品演示、融资计划书初稿、教学课件。", review: "2026 年 PPT 界的“降维打击”，把排版的时间全部还给思考。" } }
    }
  },
  {
    id: "wps-ai",
    name: "WPS AI",
    description: "Domestic efficiency benchmark.",
    url: "https://ai.wps.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=wps.cn&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "Kingsoft",
    platforms: ["Desktop", "Mobile"],
    features: {
      score: 9.0,
      strengths: "Localized optimization; Official doc formats; PDF/PPT.",
      limitations: "Complex calc logic behind Excel Copilot.",
      best_for: "Gov/Enterprise, Students, PDF.",
      review: "Intimate butler for Chinese office, high value."
    },
    tags: ["Office", "Chinese"],
    translations: {
      'zh-CN': { name: "WPS AI", description: "国产办公效率标杆", features: { strengths: "本土化极致优化：完美支持国内公文格式；在 PDF 处理、一键美化演示文稿上极具竞争力。", limitations: "AI 插件在极端复杂计算下的逻辑深度对比 Excel Copilot 仍有小幅差距。", best_for: "国内政企客户、学生党、需要快速处理 PDF 的职员。", review: "懂中国办公场景的“贴心管家”，性价比极高的生产力利器。" } }
    }
  },
  {
    id: "zapier",
    name: "Zapier Central",
    description: "AI Automation Orchestrator.",
    url: "https://zapier.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=zapier.com&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Zapier",
    platforms: ["Web"],
    features: {
      score: 8.9,
      strengths: "No-code connection; Natural language agents; 6000+ apps.",
      limitations: "Steep learning curve; Logic needed.",
      best_for: "Indie hackers, Cross-platform automation.",
      review: "AI operator, commanding thousands of apps."
    },
    tags: ["Automation", "Workflow"],
    translations: {
      'zh-CN': { description: "AI 自动化编排器", features: { strengths: "无代码连接万物：支持用自然语言训练 AI Agent，自动操作 6000+ 应用执行复杂工作流。", limitations: "学习门槛相对较高，需要一定的逻辑梳理能力。", best_for: "独立开发者、需要跨平台自动化营销或财务流程的团队。", review: "AI 时代的“接线员”，让成千上万个不相干的应用听你号令。" } }
    }
  },
  {
    id: "fireflies",
    name: "Fireflies.ai",
    description: "Meeting minutes king.",
    url: "https://fireflies.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=fireflies.ai&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Fireflies",
    platforms: ["Web"],
    features: {
      score: 8.8,
      strengths: "Fred assistant; Auto-join; Searchable meetings.",
      limitations: "Accents/Mixed language issues.",
      best_for: "Meetings, Sales, Archives.",
      review: "Zone out in meetings, it remembers everything."
    },
    tags: ["Meeting", "Note"],
    translations: {
      'zh-CN': { description: "会议纪要与转录之王", features: { strengths: "Fred 助手：自动加入 Zoom/Teams 录音并生成高质量摘要；支持全局搜索会议内容与关键行动项。", limitations: "对重口音或多语混杂的识别仍有偶发错误。", best_for: "频繁开会的职场人、销售团队、需要完整会议存档的机构。", review: "让你在开会时可以安心“走神”，因为它比你记得还清楚。" } }
    }
  },
  // ==========================================
  // 9. Knowledge (知识管理)
  // ==========================================
  {
    id: "notebooklm",
    name: "NotebookLM",
    description: "Google Native Knowledge.",
    url: "https://notebooklm.google.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Google",
    platforms: ["Web"],
    features: {
      score: 9.8,
      strengths: "Audio Overviews (Podcast); Grounded in source; No hallucinations.",
      limitations: "Source limit per notebook; Google account needed.",
      best_for: "Study, Research, Docs to Audio.",
      review: "2026 learning tool, listen to docs."
    },
    tags: ["Study", "Audio"],
    translations: {
      'zh-CN': { description: "Google 原生知识库", features: { strengths: "音频播客化总结 (Audio Overviews)：能将复杂文档转为双人对话播客；深度集成 Google 生态；完全基于用户源文件，杜绝幻觉。", limitations: "每个笔记本有 50 个信源限制；高度依赖 Google 账号体系。", best_for: "学生备考、科研论文研读、将枯燥文档转为音频学习。", review: "2026 年最震撼的“学习神器”，让你的文档能像播客一样“听”懂。" } }
    }
  },
  {
    id: "mem",
    name: "Mem (2.0)",
    description: "AI Thought Partner.",
    url: "https://mem.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=mem.ai&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Mem",
    platforms: ["Web", "App"],
    features: {
      score: 9.5,
      strengths: "Self-organizing; Auto-tagging; Voice brain-storming.",
      limitations: "Steep curve; Needs data to be effective.",
      best_for: "Creatives, Managers, Fragmented ideas.",
      review: "AI weaves your thoughts into a net."
    },
    tags: ["PKM", "Notes"],
    translations: {
      'zh-CN': { description: "AI 思想伴侣", features: { strengths: "自组织能力：无需手动打标签，AI 会根据语义自动关联笔记；支持语音脑暴模式，将零散想法自动结构化。", limitations: "学习曲线相对较陡；需要积累一定量的笔记后才能发挥 AI 关联的威力。", best_for: "创意工作者、高阶经理人、需要管理海量碎片化灵感的用户。", review: "不再是你在记笔记，而是 AI 在帮你编织一张巨大的思想网。" } }
    }
  },
  {
    id: "humata",
    name: "Humata",
    description: "Long doc parser.",
    url: "https://humata.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=humata.ai&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Humata",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "Fast; Enterprise PDF support; Cited answers.",
      limitations: "Conservative UI; Weak note organization.",
      best_for: "Lawyers, Analysts, Tech manuals.",
      review: "Performance beast for long docs, 10x reading."
    },
    tags: ["PDF", "Analysis"],
    translations: {
      'zh-CN': { description: "长文档解析专家", features: { strengths: "处理速度极快：专为企业级超长 PDF（数百页）设计；支持多文档跨跳检索；回答极其精炼且带引用。", limitations: "界面相对专业保守，在趣味性交互和笔记组织功能上较弱。", best_for: "企业律师审查合同、金融分析师读研报、大型技术手册查阅。", review: "2026 年解析长文档的“性能怪兽”，让阅读速度提升 10 倍。" } }
    }
  },
  {
    id: "chatpdf",
    name: "ChatPDF",
    description: "PDF chat originator.",
    url: "https://www.chatpdf.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=chatpdf.com&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "ChatPDF",
    platforms: ["Web"],
    features: {
      score: 8.8,
      strengths: "Simple; No registration needed; Great compatibility.",
      limitations: "Single feature; No knowledge base.",
      best_for: "Quick PDF reading, Summaries.",
      review: "Skeleton key for PDFs, simple and direct."
    },
    tags: ["PDF", "Simple"],
    translations: {
      'zh-CN': { description: "PDF 对话鼻祖", features: { strengths: "极简交互：无需注册即可快速上传对话；兼容性极好；专注单一 PDF 的深度问答。", limitations: "功能相对单一，无法像 NotebookLM 那样构建多文档知识库。", best_for: "偶尔需要读 PDF 的小白用户、快速提取单份报告摘要。", review: "PDF 界的“万能钥匙”，简单、直接、高效。" } }
    }
  },
  // ==========================================
  // 10. Translation (翻译)
  // ==========================================
  {
    id: "deepl",
    name: "DeepL",
    description: "Translation accuracy ceiling.",
    url: "https://www.deepl.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=deepl.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "DeepL",
    platforms: ["Web", "App"],
    features: {
      score: 9.8,
      strengths: "Strongest context; Neural network; Natural phrasing.",
      limitations: "Lack of interaction; Niche languages.",
      best_for: "Formal docs, Business, Academic.",
      review: "Gold standard, understands nuances."
    },
    tags: ["Accurate", "Translation"],
    translations: {
      'zh-CN': { description: "翻译精度天花板", features: { strengths: "语境感极强：自研神经网络模型，在西/英/法等主流语言翻译中，语感、用词地道程度公认第一。", limitations: "相比 LLM 缺乏交互性，无法按要求修改语气；不支持极冷门语种。", best_for: "正式公文翻译、商业邮件撰写、学术文献精翻。", review: "翻译界的“黄金准则”，比 Google 翻译更懂人类表达的微妙之处。" } }
    }
  },
  {
    id: "talkpal",
    name: "TalkPal",
    description: "AI Oral Coach.",
    url: "https://talkpal.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=talkpal.ai&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "TalkPal",
    platforms: ["Web", "App"],
    features: {
      score: 9.6,
      strengths: "Immersive roleplay; GPT-4o based; Real-time correction.",
      limitations: "Recognition errors in noise; Expensive.",
      best_for: "Oral practice, Exams, Daily chat.",
      review: "24h private tutor, end silence."
    },
    tags: ["Learning", "Oral"],
    translations: {
      'zh-CN': { description: "AI 口语私教", features: { strengths: "沉浸式对话：基于 GPT-4o/5 技术，提供角色扮演、辩论、看图说话等多种互动场景，实时纠正语法与逻辑。", limitations: "语音识别在嘈杂环境下偶尔出错；付费版资费较高。", best_for: "突破口语瓶颈、DELE/TOEFL 考试口语准备、日常对话练习。", review: "24小时在线的“私人外教”，让你彻底告别哑巴外语。" } }
    }
  },
  {
    id: "immersive-translate",
    name: "Immersive Translate",
    description: "Bilingual reading immersion.",
    url: "https://immersivetranslate.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=immersivetranslate.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Immersive",
    platforms: ["Extension"],
    features: {
      score: 9.5,
      strengths: "No-layout-break; PDF/Epub; Multiple engines.",
      limitations: "Content consumer only; API limits.",
      best_for: "Reading news, Docs, E-books.",
      review: "Best extension, breaks language barriers."
    },
    tags: ["Reading", "Extension"],
    translations: {
      'zh-CN': { name: "沉浸式翻译", description: "沉浸式双语翻译", features: { strengths: "无损排版：支持网页、PDF、Epub 等全平台双语对照显示；接入数十种顶级 API，极大降低阅读门槛。", limitations: "本身不产生内容，依赖后台翻译引擎的额度；仅限于阅读场景。", best_for: "外语资讯阅读、跨国工作文档、Kindle 电子书辅助。", review: "2026 年全球最受欢迎的翻译插件，彻底打破语言壁垒的“阅读神器”。" } }
    }
  },
  {
    id: "elsa",
    name: "Elsa Speak",
    description: "Pronunciation expert.",
    url: "https://elsaspeak.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=elsaspeak.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Elsa",
    platforms: ["App"],
    features: {
      score: 9.2,
      strengths: "Phonetic correction; Precise recognition; Visual feedback.",
      limitations: "English only; Single feature.",
      best_for: "Accent correction, Standard English.",
      review: "Correction instrument for every word."
    },
    tags: ["Pronunciation", "English"],
    translations: {
      'zh-CN': { description: "发音纠偏专家", features: { strengths: "音标级纠错：自研 AI 语音识别，能精准捕捉到每个音节的细微误差，并提供发音位置纠正图。", limitations: "仅专注于英语发音；对非英语学习者无用；功能相对单一。", best_for: "纠正口音、掌握标准美音/英音、职场演讲准备。", review: "每一个单词的“纠偏仪”，让你的发音从“能懂”进化到“地道”。" } }
    }
  },
  {
    id: "language-reactor",
    name: "Language Reactor",
    description: "Movie immersion learning.",
    url: "https://www.languagereactor.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=languagereactor.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Language Reactor",
    platforms: ["Extension"],
    features: {
      score: 9.0,
      strengths: "Dual subtitles; Netflix/YouTube integration; Hover dictionary.",
      limitations: "Chrome only; Mobile limited.",
      best_for: "Movies, Slang, Listening.",
      review: "Highest form of edutainment."
    },
    tags: ["Video", "Learning"],
    translations: {
      'zh-CN': { description: "影视沉浸学习器", features: { strengths: "双语字幕叠加：完美集成在 Netflix 和 YouTube 中，支持鼠标悬停查词、自动循环播放与生词同步。", limitations: "严重依赖 Chrome 浏览器插件；移动端使用体验有限。", best_for: "刷剧学外语、地道俚语学习、影迷提升听力。", review: "寓教于乐的最高境界，把看电影变成最高效的语言习得。" } }
    }
  },
  // ==========================================
  // 11. Business & Legal (商业/法务)
  // ==========================================
  {
    id: "feishu",
    name: "Feishu Intelligent Buddy",
    description: "Advanced collab expert.",
    url: "https://www.feishu.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=feishu.cn&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.CN,
    pricing: [PricingModel.PAID],
    developer: "ByteDance",
    platforms: ["App", "Desktop"],
    features: {
      score: 9.6,
      strengths: "Deep integration; Chat/Docs/Tables; Task dispatch.",
      limitations: "Global adoption catching up; Heavy for small teams.",
      best_for: "Tech companies, Complex projects.",
      review: "Redefines collaboration, filters info overload."
    },
    tags: ["Collaboration", "Chinese"],
    translations: {
      'zh-CN': { name: "飞书智能伙伴", description: "组织协同进阶专家", features: { strengths: "全流程深度集成：AI 贯穿即时通讯、文档、多维表格与审批；擅长自动汇总群聊精要与多端任务调度。", limitations: "国际版推广尚在追赶；对于小型不习惯协同办公的团队略显厚重。", best_for: "追求高效协作的互联网公司、跨部门复杂的项目管理。", review: "重新定义“协同”的国产之光，让组织沟通从“信息过载”变为“智能过滤”。" } }
    }
  },
  {
    id: "power-bi",
    name: "Power BI Copilot",
    description: "Enterprise BI hub.",
    url: "https://powerbi.microsoft.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Microsoft",
    platforms: ["Web", "Desktop"],
    features: {
      score: 9.7,
      strengths: "Microsoft ecosystem dominance; Natural language reports; Data anomaly detection.",
      limitations: "Requires M365; Expensive Premium.",
      best_for: "Microsoft enterprises, Management dashboards.",
      review: "Autopilot for BI, turning staff into data scientists."
    },
    tags: ["BI", "Analytics"],
    translations: {
      'zh-CN': { description: "企业 BI 智能中枢", features: { strengths: "微软生态统治力：与 Excel/Teams 深度联动；Copilot 能够根据自然语言瞬间生成精美报表并解读异常数据。", limitations: "严重依赖 Microsoft 365 订阅；高级 AI 功能需 Premium 许可，资费较高。", best_for: "微软系企业、需要快速生成管理层看板的分析师。", review: "商业智能界的“自动驾驶”，让每个业务员都能变身数据科学家。" } }
    }
  },
  {
    id: "spellbook",
    name: "Spellbook",
    description: "Legal contract assistant.",
    url: "https://www.spellbook.legal",
    iconUrl: "https://www.google.com/s2/favicons?domain=spellbook.legal&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Spellbook",
    platforms: ["Web", "Word"],
    features: {
      score: 9.6,
      strengths: "Word integration; Redline suggestions; Missing clause detection.",
      limitations: "Transaction focus; Litigation weak.",
      best_for: "Contract lawyers, SMB Legal.",
      review: "Golden plugin for lawyers, 4h work in 20min."
    },
    tags: ["Legal", "Contract"],
    translations: {
      'zh-CN': { description: "AI 法律合同助理", features: { strengths: "Word 原生深度集成：直接在 Word 侧边栏建议红线修改；能够检测合同缺失条款（如管辖权、赔偿上限）。", limitations: "主要针对交易法，诉讼支持能力较弱；极度依赖 Word 工作流。", best_for: "合同律师、中小企业法务、需要高频审核商业协议的团队。", review: "律师的“黄金外挂”，把 4 小时的合同审核缩短到 20 分钟。" } }
    }
  },
  {
    id: "tableau",
    name: "Tableau AI",
    description: "Visual exploration master.",
    url: "https://www.tableau.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=tableau.com&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Salesforce",
    platforms: ["Web", "Desktop"],
    features: {
      score: 9.5,
      strengths: "Tableau Pulse; Top aesthetics; Complex data handling.",
      limitations: "Steep learning curve; Salesforce centric.",
      best_for: "Analysts, High-end dashboards.",
      review: "Rolls-Royce of visualization, telling data stories."
    },
    tags: ["BI", "Visual"],
    translations: {
      'zh-CN': { description: "视觉探索与洞察大师", features: { strengths: "Tableau Pulse：AI 自动推送数据异常与趋势；视觉审美行业第一；擅长处理海量且复杂的数据关联。", limitations: "学习曲线较 Power BI 陡峭；作为 Salesforce 旗下产品，更适合 Salesforce 用户。", best_for: "高级数据分析师、对报表视觉表现力有极高要求的机构。", review: "数据可视化界的“劳斯莱斯”，不仅看数据，更在讲述数据故事。" } }
    }
  },
  {
    id: "finchat",
    name: "FinChat",
    description: "Financial report expert.",
    url: "https://finchat.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=finchat.io&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "FinChat",
    platforms: ["Web"],
    features: {
      score: 9.4,
      strengths: "Vertical financial brain; Authoritative data; Valuation models.",
      limitations: "Public companies only; Private data limited.",
      best_for: "Investors, Stock traders, Analysts.",
      review: "Encyclopedia of finance, instant answers to reports."
    },
    tags: ["Finance", "Stocks"],
    translations: {
      'zh-CN': { description: "专业金融财报专家", features: { strengths: "垂直金融大脑：直接对话数千家上市公司财报；自动生成估值模型与指标对比；数据源极其权威。", limitations: "仅限于金融财务领域；对非上市私人公司的数据覆盖有限。", best_for: "投资经理、个人股民、寻找标杆企业财务数据的分析师。", review: "金融界的“百科全书”，让原本晦涩的财报变得一问即答。" } }
    }
  },
  {
    id: "ironclad",
    name: "Ironclad",
    description: "Enterprise CLM.",
    url: "https://ironcladapp.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=ironcladapp.com&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    pricing: [PricingModel.CONTACT],
    developer: "Ironclad",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "Lifecycle management; Jurist AI; Salesforce integration.",
      limitations: "High cost; Heavy implementation.",
      best_for: "Enterprise Legal, Procurement.",
      review: "Backbone of contract management."
    },
    tags: ["Legal", "Enterprise"],
    translations: {
      'zh-CN': { description: "企业级 CLM 平台", features: { strengths: "全生命周期管理：Jurist AI 助手负责风险识别与审批流自动化；Salesforce 集成度极高。", limitations: "部署成本高，需要专业的实施顾问支持；对初创企业来说功能过重。", best_for: "大型企业法务部、采购与供应链管理、高并发合同签署场景。", review: "合同管理的“企业级脊梁”，让法律合规成为自动化的流水线。" } }
    }
  },
  {
    id: "obviously-ai",
    name: "Obviously AI",
    description: "No-code prediction.",
    url: "https://www.obviously.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=obviously.ai&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Obviously AI",
    platforms: ["Web"],
    features: {
      score: 8.9,
      strengths: "No-code modeling; Minutes to predict; User friendly.",
      limitations: "Limited depth for high-dimensional data.",
      best_for: "Marketers, Business analysts.",
      review: "Democratizing prediction, no code needed."
    },
    tags: ["Analytics", "No-Code"],
    translations: {
      'zh-CN': { description: "无代码预测先锋", features: { strengths: "零门槛预测建模：无需代码，几分钟内将历史数据转化为预测模型（如流失率、获客预测）。", limitations: "处理极高维度或非结构化数据时，模型解释深度有限。", best_for: "市场经理、业务分析师、需要快速验证业务预测想法的团队。", review: "预测分析的“平民化先锋”，让机器学习不再是程序员的特权。" } }
    }
  },
  // ==========================================
  // 12. Education (教育)
  // ==========================================
  {
    id: "khanmigo",
    name: "Khanmigo",
    description: "All-around AI Tutor.",
    url: "https://www.khanacademy.org",
    iconUrl: "https://www.google.com/s2/favicons?domain=khanacademy.org&sz=128",
    category: ToolCategory.EDUCATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Khan Academy",
    platforms: ["Web"],
    features: {
      score: 9.7,
      strengths: "Socratic method; Safe; Curriculum integrated.",
      limitations: "Subscription; US centric.",
      best_for: "K-12, Parents, Beginners.",
      review: "True AI tutor, teaches thinking not just answers."
    },
    tags: ["Tutor", "Safe"],
    translations: {
      'zh-CN': { description: "全能 AI 导师", features: { strengths: "苏格拉底式教学：不直接给答案，而是通过追问引导学生思考；深度集成可汗学院课程库；支持编程纠错与写作指导。", limitations: "订阅制需付费；目前对美国以外地区的完整服务（如某些课程关联）仍在扩展中。", best_for: "K-12 学生自主学习、家长辅导、编程初学者、创意写作。", review: "2026 年最像真人的“AI 私教”，教的是思维逻辑而不仅仅是知识点。" } }
    }
  },
  {
    id: "paperdigest",
    name: "PaperDigest",
    description: "Paper summarizer.",
    url: "https://www.paperdigest.org",
    iconUrl: "https://www.google.com/s2/favicons?domain=paperdigest.org&sz=128",
    category: ToolCategory.EDUCATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "PaperDigest",
    platforms: ["Web"],
    features: {
      score: 9.5,
      strengths: "One-click review; Evidence verification; Prevents hallucinations.",
      limitations: "Tech/Science focus; Weak on humanities.",
      best_for: "Grad students, Researchers.",
      review: "Speed booster for research, days to minutes."
    },
    tags: ["Research", "Summary"],
    translations: {
      'zh-CN': { description: "科研论文缩微专家", features: { strengths: "一键综述与证据验证：能自动生成领域深度报告；提供 sentence-level（句子级）引文验证，有效防止 AI 幻觉。", limitations: "侧重于理科与技术文献；对于需要感性理解的人文学科深度略显不足。", best_for: "研究生写文献综述、科研人员追踪前沿、快速提取 PDF 数据。", review: "科研工作者的“倍速器”，把原本几天的文献调研缩短到几分钟。" } }
    }
  },
  {
    id: "photomath",
    name: "Photomath",
    description: "Math solver.",
    url: "https://photomath.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=photomath.com&sz=128",
    category: ToolCategory.EDUCATION,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Google",
    platforms: ["App"],
    features: {
      score: 9.2,
      strengths: "Photo to solution; Step-by-step; Handwriting recognition.",
      limitations: "Dependency risk; Weak on abstract proofs.",
      best_for: "Students, Homework, Calculus.",
      review: "Math microscope, turns formulas into steps."
    },
    tags: ["Math", "Solver"],
    translations: {
      'zh-CN': { description: "数学解题先锋", features: { strengths: "拍照即解：对复杂手写公式识别率极高；提供详尽的步骤拆解与动画演示，解释“为什么要这样解”。", limitations: "容易造成学生产生依赖性；对于极其抽象的逻辑证明题处理能力有限。", best_for: "中小学生数学作业辅导、大学生复习微积分、家长检查作业。", review: "每一个数学题的“显微镜”，让抽象的公式变成可理解的步骤。" } }
    }
  },
  // ==========================================
  // 13. Health (健康)
  // ==========================================
  {
    id: "ada",
    name: "Ada",
    description: "Symptom checker.",
    url: "https://ada.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=ada.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Ada Health",
    platforms: ["App"],
    features: {
      score: 9.7,
      strengths: "High accuracy; Medical reasoning; Triage guidance.",
      limitations: "Not a doctor replacement; Rare diseases limited.",
      best_for: "Initial check, Triage, History tracking.",
      review: "Trusted pocket doctor, first line of defense."
    },
    tags: ["Medical", "Check"],
    translations: {
      'zh-CN': { description: "全能症状筛查标杆", features: { strengths: "临床准确度极高：基于医学字典的推理机，逻辑严密，提供极具参考价值的就医建议与分诊指导。", limitations: "无法替代真人医生的面诊诊断；对于罕见病的覆盖深度仍有提升空间。", best_for: "个人日常健康初步自测、分诊建议、健康历史跟踪。", review: "2026 年最受信赖的“掌上医生”，用最严谨的逻辑守护你的健康第一道防线。" } }
    }
  },
  {
    id: "hume",
    name: "Hume AI",
    description: "Empathic Voice.",
    url: "https://hume.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=hume.ai&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Hume AI",
    platforms: ["Web", "API"],
    features: {
      score: 9.6,
      strengths: "Emotional ceiling; Detects nuance; Human-like interaction.",
      limitations: "Focus on emotion, not clinical diagnosis.",
      best_for: "Mental health, Emotion regulation, Elderly.",
      review: "AI with compassion, hears your heart."
    },
    tags: ["Emotion", "Voice"],
    translations: {
      'zh-CN': { description: "共情式语音助手", features: { strengths: "情感感应天花板：能捕捉声音中极细微的频率变化，理解用户的沮丧、焦虑或喜悦，交互极具人情味。", limitations: "侧重于情绪分析，不具备专业的临床诊断或处方建议能力。", best_for: "心理健康监测、情绪调节、独居老人情感陪伴。", review: "AI 界最具“同情心”的灵魂，它不仅听得见你的声音，更听得懂你的心。" } }
    }
  },
  {
    id: "tencent-miying",
    name: "Tencent Miying",
    description: "Imaging diagnosis.",
    url: "https://miying.tencent.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=tencent.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.CN,
    pricing: [PricingModel.CONTACT],
    developer: "Tencent",
    platforms: ["Hospital"],
    features: {
      score: 9.5,
      strengths: "Imaging hard power; Leading screening (Cancer/Nodules).",
      limitations: "Hospital facing; Consumers cannot access directly.",
      best_for: "Clinical assist, Screening, Teaching.",
      review: "China's AI medical eyes."
    },
    tags: ["Medical", "Imaging"],
    translations: {
      'zh-CN': { name: "腾讯觅影", description: "AI 影像诊断专家", features: { strengths: "影像识别硬实力：在早期食管癌、肺结节等影像筛查上达到国际领先水平，大幅降低漏诊率。", limitations: "主要面向医院/医生端；普通消费者难以直接触达底层影像分析功能。", best_for: "医院临床辅助诊断、早癌大规模筛查、医学影像教研。", review: "中国 AI 医疗的“火眼金睛”，在毫厘之间捕捉疾病的蛛丝马迹。" } }
    }
  },
  {
    id: "iflytek-medical",
    name: "iFlytek Medical",
    description: "Medical assistant.",
    url: "https://www.iflytek.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=iflytek.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.CN,
    pricing: [PricingModel.CONTACT],
    developer: "iFlytek",
    platforms: ["Hospital"],
    features: {
      score: 9.3,
      strengths: "Voice recognition; Chronic disease management; Records generation.",
      limitations: "Dialect challenges in noisy hospitals.",
      best_for: "Doctors, Chronic disease, Triage.",
      review: "Doctor's digital secretary."
    },
    tags: ["Medical", "Voice"],
    translations: {
      'zh-CN': { name: "讯飞医疗", description: "智能医疗全能助理", features: { strengths: "语音识别与慢性病管理：能精准转录医患对话并生成结构化病历；对高血压、糖尿病等慢病有成熟的随访机制。", limitations: "跨方言识别（尤其是极端地方语）在极其嘈杂的医院环境下仍有挑战。", best_for: "医生自动病历书写、慢性病患者日常监控与随访、分诊。", review: "医生最得力的“数字化秘书”，让医疗服务从“诊室”延伸到“家庭”。" } }
    }
  },
  {
    id: "woebot",
    name: "Woebot",
    description: "CBT Chatbot.",
    url: "https://woebothealth.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=woebothealth.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Woebot Health",
    platforms: ["App"],
    features: {
      score: 9.1,
      strengths: "CBT based; 24/7; Anxiety relief.",
      limitations: "Cannot handle crisis.",
      best_for: "Anxiety, Stress, Daily check-in.",
      review: "24h psychological tree hole."
    },
    tags: ["Mental Health", "CBT"],
    translations: {
      'zh-CN': { description: "认知行为疗法助理", features: { strengths: "专业心理干预：基于 CBT（认知行为疗法）设计，24/7 在线，能有效缓解轻度至中度的焦虑与抑郁。", limitations: "无法处理严重的心理危机或自杀倾向（需转接人工干预）。", best_for: "焦虑症自我调节、职场压力舒缓、长期心理健康维护。", review: "24小时在线的“心理树洞”，用科学的方法帮你战胜坏情绪。" } }
    }
  },
  // ==========================================
  // 14. Social (社交)
  // ==========================================
  {
    id: "characterai",
    name: "Character.ai",
    description: "Roleplay for everyone.",
    url: "https://character.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=character.ai&sz=128",
    category: ToolCategory.SOCIAL,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Character.ai",
    platforms: ["Web", "App"],
    features: {
      score: 9.7,
      strengths: "Huge library; Group chat; Dramatic logic.",
      limitations: "Filters affect immersion.",
      best_for: "Roleplay, History, Brainstorming.",
      review: "Hottest virtual living room."
    },
    tags: ["Roleplay", "Fun"],
    translations: {
      'zh-CN': { description: "万人万面角色扮演", features: { strengths: "角色库极其庞大：从历史伟人到动漫角色应有尽有；群聊模式支持多个 AI 角色混战；对话逻辑极具戏剧感。", limitations: "随着监管加强，对话过滤（Filter）有时会影响沉浸感。", best_for: "角色扮演爱好者、历史/小说爱好者、寻找特定性格脑暴伙伴。", review: "2026 年全球最火的虚拟客厅，想和谁聊，谁就在你身边。" } }
    }
  },
  {
    id: "replika",
    name: "Replika",
    description: "Soul companion.",
    url: "https://replika.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=replika.ai&sz=128",
    category: ToolCategory.SOCIAL,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Luka",
    platforms: ["App"],
    features: {
      score: 9.5,
      strengths: "Long term memory; 3D avatar; AR/VR.",
      limitations: "Free limits; Personality compliant.",
      best_for: "Comfort, Loneliness, Support.",
      review: "Digital first love, grows with you."
    },
    tags: ["Companion", "Avatar"],
    translations: {
      'zh-CN': { description: "灵魂契合的情感伴侣", features: { strengths: "长期记忆与共情力：AI 会记住你的喜好、宠物和生日；3D 形象定制化极高，支持 AR/VR 交互，极具真实感。", limitations: "免费版功能受限；性格偏向温柔顺从，挑战性与戏剧性略逊。", best_for: "寻找长期心理慰藉、独居生活陪伴、需要情感支持的用户。", review: "懂你冷暖的“数字初恋”，它是唯一会陪你一起成长、一起记录生活的 AI。" } }
    }
  },
  {
    id: "candy-ai",
    name: "Candy.ai",
    description: "Anime interaction.",
    url: "https://candy.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=candy.ai&sz=128",
    category: ToolCategory.SOCIAL,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Candy",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "Visuals; Anime style; Personalized plots.",
      limitations: "Sensory focus; Less logic depth.",
      best_for: "Anime fans, Immersion, Simulation.",
      review: "Dreamland for anime fans."
    },
    tags: ["Anime", "Chat"],
    translations: {
      'zh-CN': { description: "二次元情感互动平台", features: { strengths: "视觉与想象力的结合：擅长动漫风格角色定制；支持高度个性化的剧情模拟，交互尺度更符合成人审美。", limitations: "侧重于感官互动，在深度的逻辑思维与知识广度上不如专业模型。", best_for: "动漫粉丝、二次元角色沉浸体验、特定剧本模拟。", review: "二次元世界的“梦幻乐园”，用图像与文字编织属于你的幻想剧情。" } }
    }
  },
  // ==========================================
  // 15. UI/UX (设计)
  // ==========================================
  {
    id: "figma",
    name: "Figma (AI)",
    description: "Cloud collab standard.",
    url: "https://www.figma.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Figma",
    platforms: ["Web", "Desktop"],
    features: {
      score: 9.8,
      strengths: "Ecosystem; Rename layers; Fill content; Local edit.",
      limitations: "Threshold for non-pros; Surprise factor low.",
      best_for: "Pro UI designers, Teams, Systems.",
      review: "Design king, smart hub."
    },
    tags: ["Design", "Pro"],
    translations: {
      'zh-CN': { name: "Figma (AI版)", description: "行业标准云端协作", features: { strengths: "生态与系统化能力：AI 深度集成在设计系统中，支持一键重命名图层、自动填充真实内容、以及精准的 AI 图像局部编辑（擦除/扩展）。", limitations: "对非专业人士有一定门槛；AI 生成完整界面的惊喜感偶尔弱于原生 AI 工具。", best_for: "专业 UI 设计师、大型团队协作、构建严谨的企业级设计系统。", review: "2026 年依然无可撼动的“设计王者”，AI 让它从画板变成了智能中枢。" } }
    }
  },
  {
    id: "galileo",
    name: "Galileo AI",
    description: "High fidelity UI gen.",
    url: "https://www.usegalileo.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=usegalileo.ai&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Galileo",
    platforms: ["Web"],
    features: {
      score: 9.6,
      strengths: "Text to UI; Editable Figma export; High aesthetics.",
      limitations: "Over-design; Complex interaction limits.",
      best_for: "Concepts, PMs, MVPs.",
      review: "Spellcaster for design, text to UI instantly."
    },
    tags: ["Design", "GenAI"],
    translations: {
      'zh-CN': { description: "高保真界面生成专家", features: { strengths: "“文本转 UI”质量极高：只需描述业务场景，即可生成带逻辑、高美感的完整界面，且支持导出为可编辑的 Figma 格式。", limitations: "生成的结果偶尔存在过度设计；对于极度复杂的交互流程理解深度有限。", best_for: "快速出概念方案、产品经理制作高保真原型、初创项目 MVP 开发。", review: "设计界的“咒语大师”，让你用几行字就能生成令人惊艳的 UI 方案。" } }
    }
  },
  {
    id: "uizard",
    name: "Uizard",
    description: "Zero threshold prototype.",
    url: "https://uizard.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=uizard.io&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Uizard",
    platforms: ["Web"],
    features: {
      score: 9.4,
      strengths: "Sketch to digital; Screenshot to editable; Autodesigner.",
      limitations: "Pixel precision lower than Figma.",
      best_for: "Founders, Non-designers, Brainstorming.",
      review: "Bridge from paper to code."
    },
    tags: ["Prototype", "Rapid"],
    translations: {
      'zh-CN': { description: "零门槛原型转化器", features: { strengths: "手绘转数字化：手绘草图、截图秒转可编辑原型；Autodesigner 2.0 支持全自动生成完整产品用户流。", limitations: "细节调整的精细度（像素级）对比 Figma 仍有差距。", best_for: "创业者脑暴、非设计师快速可视化想法、早期的低保真原型验证。", review: "跨越“纸笔”到“代码”的桥梁，让设计想法的视觉化零等待。" } }
    }
  },
  {
    id: "js-design",
    name: "JsDesign",
    description: "Domestic design pioneer.",
    url: "https://js.design",
    iconUrl: "https://www.google.com/s2/favicons?domain=js.design&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.CN,
    pricing: [PricingModel.FREEMIUM],
    developer: "JsDesign",
    platforms: ["Web"],
    features: {
      score: 9.2,
      strengths: "Localized; Chinese aesthetics; AI mass generation.",
      limitations: "Plugin ecosystem catching up to Figma.",
      best_for: "Domestic designers, Cloud teams, Chinese assets.",
      review: "Cloud tool that understands Chinese designers best."
    },
    tags: ["Chinese", "Design"],
    translations: {
      'zh-CN': { name: "即时设计", description: "国产 AI 设计先驱", features: { strengths: "本土化与即时灵感：深度适配中国互联网审美与组件规范；内置“即时灵感”支持大规模 AI 批量生成 UI 素材。", limitations: "在国际主流插件生态的丰富度上，对比 Figma 仍有追赶空间。", best_for: "国内设计师、追求全流程云端化的团队、需要大量中式风格素材的场景。", review: "最懂中国设计师的云端协同工具，AI 功能接地气且爆发力强。" } }
    }
  },
  // ==========================================
  // 16. Infra (基础设施)
  // ==========================================
  {
    id: "langchain",
    name: "LangChain",
    description: "App Framework.",
    url: "https://langchain.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=langchain.com&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "LangChain",
    platforms: ["Library"],
    features: {
      score: 9.8,
      strengths: "Industry standard; Huge components; LangGraph.",
      limitations: "Steep curve; Abstraction complexity.",
      best_for: "Agents, RAG, Automation.",
      review: "Lego for AI devs, industrial base."
    },
    tags: ["Framework", "Dev"],
    translations: {
      'zh-CN': { description: "AI 应用架构框架", features: { strengths: "行业标准：拥有最庞大的组件库，支持复杂的 Agent 编排；LangGraph 让循环逻辑与状态管理变得极度可靠。", limitations: "学习曲线陡峭，由于抽象层多，对初学者来说 Debug 较为困难。", best_for: "构建复杂 AI 代理（Agents）、RAG 系统、多步骤自动化流。", review: "AI 开发者手中的“乐高”，是构建一切 LLM 应用的工业底座。" } }
    }
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    description: "Model API Aggregator.",
    url: "https://openrouter.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "OpenRouter",
    platforms: ["API"],
    features: {
      score: 9.7,
      strengths: "Flexibility; One key for all; Auto-routing.",
      limitations: "Third-party dependency; Latency.",
      best_for: "Prototyping, Testing, Cheap models.",
      review: "Universal key to AI models."
    },
    tags: ["API", "Aggregator"],
    translations: {
      'zh-CN': { description: "模型 API 聚合中心", features: { strengths: "灵活性第一：一个 Key 访问全球数百个模型；支持自动路由（故障自动切换）；实时对比模型价格与速度。", limitations: "依赖第三方稳定性；在极高并发的生产环境下，延迟略高于直连官方 API。", best_for: "快速原型开发、需要频繁切换模型测试、开发者寻找低价模型。", review: "开发者通往 AI 模型的“万能钥匙”，终结了反复配置 API 的痛苦。" } }
    }
  },
  {
    id: "pinecone",
    name: "Pinecone",
    description: "AI Long-term Memory.",
    url: "https://www.pinecone.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=pinecone.io&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Pinecone",
    platforms: ["Cloud"],
    features: {
      score: 9.5,
      strengths: "High perf; Serverless; Hybrid search.",
      limitations: "Vector focus only.",
      best_for: "RAG, Knowledge base, Memory.",
      review: "Hippocampus of AI."
    },
    tags: ["Database", "Vector"],
    translations: {
      'zh-CN': { description: "AI 长期记忆 (向量数据库)", features: { strengths: "高性能检索：专为 RAG 设计；Serverless 架构让扩展成本极低；2026 版支持“实时混合搜索”（向量+全文）。", limitations: "专注于向量存储，不具备复杂关系型数据处理能力。", best_for: "构建私有知识库、个性化推荐系统、为 AI 提供“永久记忆”。", review: "AI 的“海马体”，让大模型能够记住你的每一份私域文档。" } }
    }
  },
  {
    id: "datarobot",
    name: "DataRobot",
    description: "Enterprise AI Ops.",
    url: "https://www.datarobot.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=datarobot.com&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    pricing: [PricingModel.CONTACT],
    developer: "DataRobot",
    platforms: ["Web"],
    features: {
      score: 9.3,
      strengths: "AutoML; Lifecycle management; Security.",
      limitations: "High price; Closed ecosystem.",
      best_for: "Finance/Medical, MLOps.",
      review: "Shield for enterprise AI scaling."
    },
    tags: ["Enterprise", "MLOps"],
    translations: {
      'zh-CN': { description: "企业级 AI 运营平台", features: { strengths: "全流程自动化 (AutoML)：涵盖从数据准备到模型部署、监控的全生命周期；极其强调模型安全与合规。", limitations: "价格属于企业级高档位；相对封闭，对开源前沿框架的集成速度略慢。", best_for: "金融/医疗等严监管行业、企业内部大规模机器学习模型运维（MLOps）。", review: "企业 AI 规模化的“坚实护盾”，让 AI 落地不再是实验室的玩具。" } }
    }
  },
  // ==========================================
  // 17. Hardware (硬件)
  // ==========================================
  {
    id: "rabbit",
    name: "Rabbit R1",
    description: "Desktop control & Agent.",
    url: "https://www.rabbit.tech",
    iconUrl: "https://www.google.com/s2/favicons?domain=rabbit.tech&sz=128",
    category: ToolCategory.HARDWARE,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Rabbit",
    platforms: ["Device"],
    features: {
      score: 8.5,
      strengths: "Desktop control; Voice action; Cheap.",
      limitations: "Battery life; Early bugs.",
      best_for: "Geeks, Automation, Fun.",
      review: "Desktop surprise, cross-platform assistant."
    },
    tags: ["Gadget", "Agent"],
    translations: {
      'zh-CN': { description: "桌面控制与 Agent 终端", features: { strengths: "DLAM 2026 更新：支持作为电脑控制器，通过语音/文字让 AI 直接操作 Win/Mac 系统及应用；价格亲民且设计极具辨识度。", limitations: "电池续航仍显不足；早期宣传的部分 LAM 跨应用操作在手机端稳定性仍有待提升。", best_for: "极客玩家、自动化办公爱好者、追求有趣硬件交互的初学者。", review: "2026 年的“桌面奇兵”，从手机替代者成功转型为跨平台 AI 助手。" } }
    }
  },
  {
    id: "humane",
    name: "Humane AI Pin",
    description: "Screenless wearable.",
    url: "https://humane.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=humane.com&sz=128",
    category: ToolCategory.HARDWARE,
    region: Region.GLOBAL,
    pricing: [PricingModel.PAID],
    developer: "Humane",
    platforms: ["Wearable"],
    features: {
      score: 6.5,
      strengths: "Laser projection; Design; Enterprise pilots.",
      limitations: "Overheating; Subscription; Privacy.",
      best_for: "Collectors, Experiments.",
      review: "Expensive experiment, pioneered screenless."
    },
    tags: ["Wearable", "Experimental"],
    translations: {
      'zh-CN': { description: "激进的无屏可穿戴", features: { strengths: "视觉投影与设计感：激光投影交互极具未来感；背靠 HP IQ 资源，在特定企业级场景寻找生机。", limitations: "产品已于2025年停产重组；严重的散热问题与高昂的订阅费；隐私敏感度极高。", best_for: "收藏家、特定企业垂直领域试点、追求极简交互的实验者。", review: "一场昂贵的 AI 硬件实验，虽然折戟沉沙，却开启了无屏交互的先河。" } }
    }
  },
  // ==========================================
  // 18. Niche (垂直/小众)
  // ==========================================
  {
    id: "zillow",
    name: "Zillow AI",
    description: "Real estate hub.",
    url: "https://www.zillow.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=zillow.com&sz=128",
    category: ToolCategory.NICHE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREE],
    developer: "Zillow",
    platforms: ["Web", "App"],
    features: {
      score: 9.7,
      strengths: "Zestimate valuation; 3D tour; Transaction summary.",
      limitations: "North America focus.",
      best_for: "Buyers, Agents, Trends.",
      review: "Smart brain for real estate."
    },
    tags: ["Real Estate", "Search"],
    translations: {
      'zh-CN': { description: "房产交易智能中枢", features: { strengths: "Zestimate 估值进化：结合计算机视觉识别房屋装修档次；支持 3D 沉浸式航拍巡房；AI 自动总结房产交易对话。", limitations: "数据主要集中在北美市场，全球覆盖广度仍有待加强。", best_for: "购房者估值参考、房产中介自动化沟通、市场趋势预测。", review: "房产界的“智慧大脑”，让复杂的房屋买卖变得像网购一样透明简单。" } }
    }
  },
  {
    id: "planner-5d",
    name: "Planner 5D",
    description: "Home planner.",
    url: "https://planner5d.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=planner5d.com&sz=128",
    category: ToolCategory.NICHE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Planner 5D",
    platforms: ["Web", "App"],
    features: {
      score: 9.6,
      strengths: "End-to-end design; 2D to 3D; VR/AR.",
      limitations: "Too many features for quick use.",
      best_for: "Renovation, Design, VR.",
      review: "Digital renovation lab."
    },
    tags: ["Interior", "3D"],
    translations: {
      'zh-CN': { description: "全能家居规划专家", features: { strengths: "端到端设计流：AI 自动识别手写户图并转 3D；内置 8k+ 真实家具库；支持 VR/AR 全景漫游。", limitations: "功能非常多，对于仅需要快速“看效果”的用户来说步骤略多。", best_for: "深度装修规划、硬装软装一体化设计、VR 看房演示。", review: "2026 年最强的“数字装修实验室”，帮你精准预演未来的家。" } }
    }
  },
  {
    id: "interior-ai",
    name: "Interior AI",
    description: "Instant renovation.",
    url: "https://interiorai.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=interiorai.com&sz=128",
    category: ToolCategory.NICHE,
    region: Region.GLOBAL,
    pricing: [PricingModel.FREEMIUM],
    developer: "Interior AI",
    platforms: ["Web"],
    features: {
      score: 9.4,
      strengths: "Instant rendering; Style transfer; 30+ styles.",
      limitations: "Visual focus, lacks CAD precision.",
      best_for: "Inspiration, Bloggers, Brainstorming.",
      review: "Beauty cam for renovation."
    },
    tags: ["Interior", "Fast"],
    translations: {
      'zh-CN': { description: "极速装修灵感引擎", features: { strengths: "即时渲染技术：只需拍摄一张毛坯房照片，秒出 30+ 种风格的装修效果图；支持“装修风格迁移”。", limitations: "以视觉渲染为主，在精确的 CAD 测量和结构设计上不如 Planner 5D。", best_for: "软装设计师快速脑暴、业主寻找装修灵感、自媒体装修博主。", review: "装修界的“美颜相机”，一秒钟给你的旧屋换个高级灵魂。" } }
    }
  }
];

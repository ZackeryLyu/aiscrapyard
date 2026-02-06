import { AiTool, Region, ToolCategory } from "../types";

export const toolsData: AiTool[] = [
  // 1. 核心大模型 (Foundation Models)
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "全球领先的全能AI，支持多模态对话。",
    url: "https://chatgpt.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    tags: ["LLM", "Chat"],
    isPopular: true
  },
  {
    id: "claude",
    name: "Claude",
    description: "逻辑严密、文笔细腻，开发者最爱。",
    url: "https://claude.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    tags: ["LLM", "Coding"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "国产推理模型之光，性价比极高。",
    url: "https://www.deepseek.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    tags: ["LLM", "Reasoning"],
    isPopular: true
  },
  {
    id: "tongyi",
    name: "通义千问",
    description: "阿里云推出的超大规模语言模型，功能全面，适合各种中文任务。",
    url: "https://tongyi.aliyun.com/qianwen/",
    iconUrl: "https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    tags: ["Alibaba", "Chat"],
    isPopular: true
  },
  {
    id: "chatglm",
    name: "智谱清言",
    description: "智谱AI打造的第四代千亿参数基座模型，中文理解能力卓越。",
    url: "https://chatglm.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=chatglm.cn&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    tags: ["GLM-4", "Coding"]
  },
  {
    id: "ernie",
    name: "文心一言",
    description: "百度推出的新一代知识增强大语言模型，懂中文更懂你。",
    url: "https://yiyan.baidu.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=yiyan.baidu.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    tags: ["Baidu", "Knowledge"]
  },
  {
    id: "doubao",
    name: "豆包",
    description: "字节跳动出品的 AI 助手，语音自然，功能丰富的个人智能伙伴。",
    url: "https://www.doubao.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=doubao.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    tags: ["ByteDance", "Mobile"]
  },
  {
    id: "hailuo",
    name: "海螺 AI",
    description: "MiniMax 推出的通用人工智能助手，语音交互体验极佳。",
    url: "https://hailuoai.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=hailuoai.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    tags: ["Voice", "MiniMax"]
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "谷歌全家桶集成，超长上下文处理。",
    url: "https://gemini.google.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    tags: ["LLM", "Google"]
  },
  {
    id: "grok",
    name: "Grok",
    description: "实时访问X平台，风格幽默犀利。",
    url: "https://x.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    tags: ["LLM", "Social"]
  },
  {
    id: "mistral",
    name: "Mistral",
    description: "欧洲最强开源模型，西语支持佳。",
    url: "https://mistral.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    tags: ["LLM", "Open Source"]
  },
  {
    id: "kimi",
    name: "Kimi",
    description: "擅长长文档分析与超长搜索。",
    url: "https://kimi.moonshot.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=kimi.moonshot.cn&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.CN,
    tags: ["LLM", "Long Context"],
    isPopular: true
  },
  {
    id: "llama3",
    name: "Llama 3",
    description: "Meta出品的最强开源模型系列。",
    url: "https://llama.meta.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=llama.meta.com&sz=128",
    category: ToolCategory.FOUNDATION,
    region: Region.GLOBAL,
    tags: ["LLM", "Open Source"]
  },

  // 2. AI 搜索与研究 (Search & Research)
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI搜索鼻祖，实时抓取网页信源。",
    url: "https://www.perplexity.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    tags: ["Search", "Research"],
    isPopular: true
  },
  {
    id: "searchgpt",
    name: "SearchGPT",
    description: "OpenAI原生的实时搜索功能。",
    url: "https://openai.com/index/searchgpt/",
    iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    tags: ["Search", "OpenAI"]
  },
  {
    id: "tiangong",
    name: "天工 AI 搜索",
    description: "昆仑万维推出的双千亿级大语言模型搜索引擎。",
    url: "https://www.tiangong.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=tiangong.cn&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.CN,
    tags: ["Search", "Chat"]
  },
  {
    id: "360ai",
    name: "360 AI 搜索",
    description: "360 推出的新一代 AI 搜索引擎，给出精准答案。",
    url: "https://www.sou.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=sou.com&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.CN,
    tags: ["Search", "China"]
  },
  {
    id: "genspark",
    name: "Genspark",
    description: "自动生成定制化搜索结果百科。",
    url: "https://www.genspark.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=genspark.ai&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    tags: ["Search", "Wiki"]
  },
  {
    id: "consensus",
    name: "Consensus",
    description: "基于科研论文的AI学术搜索引擎。",
    url: "https://consensus.app",
    iconUrl: "https://www.google.com/s2/favicons?domain=consensus.app&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    tags: ["Academic", "Science"]
  },
  {
    id: "phind",
    name: "Phind",
    description: "专为开发者设计的编程搜索引擎。",
    url: "https://www.phind.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=phind.com&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    tags: ["Coding", "Search"]
  },
  {
    id: "elicit",
    name: "Elicit",
    description: "自动化文献综述与科研数据提取。",
    url: "https://elicit.org",
    iconUrl: "https://www.google.com/s2/favicons?domain=elicit.org&sz=128",
    category: ToolCategory.SEARCH,
    region: Region.GLOBAL,
    tags: ["Research", "Data"]
  },

  // 3. 编程与全栈开发 (Coding & Dev)
  {
    id: "cursor",
    name: "Cursor",
    description: "2026年最强AI代码编辑器IDE。",
    url: "https://cursor.sh",
    iconUrl: "https://www.google.com/s2/favicons?domain=cursor.sh&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["IDE", "Editor"],
    isPopular: true
  },
  {
    id: "tongyi-lingma",
    name: "通义灵码",
    description: "阿里云推出的智能编码助手，免费、功能强大。",
    url: "https://tongyi.aliyun.com/lingma",
    iconUrl: "https://www.google.com/s2/favicons?domain=tongyi.aliyun.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.CN,
    tags: ["Alibaba", "Free"]
  },
  {
    id: "comate",
    name: "百度 Comate",
    description: "基于文心大模型的智能代码助手，懂代码更懂中文开发者。",
    url: "https://comate.baidu.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=comate.baidu.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.CN,
    tags: ["Baidu", "Enterprise"]
  },
  {
    id: "v0",
    name: "v0.dev",
    description: "根据对话生成React/Tailwind前端组件。",
    url: "https://v0.dev",
    iconUrl: "https://www.google.com/s2/favicons?domain=v0.dev&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["UI", "React"]
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "对话式全栈App开发平台。",
    url: "https://lovable.dev",
    iconUrl: "https://www.google.com/s2/favicons?domain=lovable.dev&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["Fullstack", "App"]
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "最普及的AI结对编程助手。",
    url: "https://github.com/features/copilot",
    iconUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["Completion", "Microsoft"]
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description: "新一代智能代理IDE。",
    url: "https://codeium.com/windsurf",
    iconUrl: "https://www.google.com/s2/favicons?domain=codeium.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["IDE", "Agent"]
  },
  {
    id: "replit",
    name: "Replit Agent",
    description: "全自动完成从代码到部署的Agent。",
    url: "https://replit.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=replit.com&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["Cloud", "IDE"]
  },
  {
    id: "aider",
    name: "Aider",
    description: "基于终端的高效AI编程工具。",
    url: "https://aider.chat",
    iconUrl: "https://www.google.com/s2/favicons?domain=aider.chat&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["CLI", "Terminal"]
  },
  {
    id: "bolt",
    name: "Bolt.new",
    description: "一键生成并运行全栈StackBlitz应用。",
    url: "https://bolt.new",
    iconUrl: "https://www.google.com/s2/favicons?domain=bolt.new&sz=128",
    category: ToolCategory.CODING,
    region: Region.GLOBAL,
    tags: ["WebContainer", "StackBlitz"]
  },

  // 4. 写作与营销 (Writing & Marketing)
  {
    id: "jasper",
    name: "Jasper",
    description: "企业级营销文案与SEO创作。",
    url: "https://www.jasper.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=jasper.ai&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    tags: ["Marketing", "SEO"]
  },
  {
    id: "copyai",
    name: "Copy.ai",
    description: "自动化销售与营销文案生成。",
    url: "https://www.copy.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=copy.ai&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    tags: ["Sales", "Copy"]
  },
  {
    id: "grammarly",
    name: "Grammarly AI",
    description: "全球最流行的语法检查与内容优化。",
    url: "https://www.grammarly.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=grammarly.com&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    tags: ["Grammar", "Editing"]
  },
  {
    id: "writesonic",
    name: "WriteSonic",
    description: "多场景AI写作与SEO优化工具。",
    url: "https://writesonic.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=writesonic.com&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    tags: ["SEO", "Blog"]
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "轻量级、高性价比的写作助手。",
    url: "https://rytr.me",
    iconUrl: "https://www.google.com/s2/favicons?domain=rytr.me&sz=128",
    category: ToolCategory.WRITING,
    region: Region.GLOBAL,
    tags: ["Writing", "Affordable"]
  },

  // 5. 图像生成与设计 (Image & Design)
  {
    id: "midjourney",
    name: "Midjourney",
    description: "艺术创作表现力最强的绘图AI。",
    url: "https://www.midjourney.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Art", "Discord"],
    isPopular: true
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Stability AI 推出的强大开源图像生成模型。",
    url: "https://stability.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=stability.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Open Source", "Art"]
  },
  {
    id: "flux",
    name: "Flux.1",
    description: "开源最强绘图，支持完美文字渲染。",
    url: "https://blackforestlabs.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Open Source", "Text"]
  },
  {
    id: "liblib",
    name: "Liblib AI (哩布哩布)",
    description: "中国领先的 AI 绘画模型分享社区和在线运行平台。",
    url: "https://www.liblib.art",
    iconUrl: "https://www.google.com/s2/favicons?domain=liblib.art&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    tags: ["Community", "Stable Diffusion"]
  },
  {
    id: "wanxiang",
    name: "通义万相",
    description: "阿里云推出的进化式 AI 绘画模型。",
    url: "https://wanxiang.aliyun.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=wanxiang.aliyun.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    tags: ["Alibaba", "Art"]
  },
  {
    id: "meitu",
    name: "美图设计室",
    description: "集成在美图秀秀中的 AI 艺术和设计工具。",
    url: "https://design.meitu.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=design.meitu.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.CN,
    tags: ["Design", "Retouching"]
  },
  {
    id: "dalle3",
    name: "DALL-E 3",
    description: "语义理解最精准的绘图AI。",
    url: "https://openai.com/dall-e-3",
    iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["OpenAI", "Easy"]
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    description: "功能丰富的AI画布与创作社区。",
    url: "https://leonardo.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=leonardo.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Game Assets", "Canvas"]
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    description: "Adobe生态原生图像生成。",
    url: "https://www.adobe.com/firefly",
    iconUrl: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Adobe", "Commercial Safe"]
  },
  {
    id: "canva",
    name: "Canva Magic Studio",
    description: "小白级AI排版与平面设计。",
    url: "https://www.canva.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=canva.com&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Design", "Layout"]
  },
  {
    id: "magnific",
    name: "Magnific AI",
    description: "最强图像超分辨率增强与重绘。",
    url: "https://magnific.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=magnific.ai&sz=128",
    category: ToolCategory.IMAGE,
    region: Region.GLOBAL,
    tags: ["Upscale", "Enhance"]
  },

  // 6. 视频制作与动效 (Video & Motion)
  {
    id: "sora",
    name: "Sora",
    description: "OpenAI引领行业的视频生成模型。",
    url: "https://openai.com/sora",
    iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    tags: ["Cinematic", "OpenAI"]
  },
  {
    id: "kling",
    name: "可灵 AI",
    description: "快手出品，动作极其连贯的视频AI。",
    url: "https://klingai.kuaishou.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=klingai.kuaishou.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    tags: ["Realistic", "Long Video"],
    isPopular: true
  },
  {
    id: "vidu",
    name: "Vidu",
    description: "生数科技联合清华大学发布的视频大模型，一键生成高清视频。",
    url: "https://www.vidu.studio",
    iconUrl: "https://www.google.com/s2/favicons?domain=vidu.studio&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    tags: ["Motion", "Creative"]
  },
  {
    id: "hunyuan-video",
    name: "腾讯混元",
    description: "腾讯推出的多模态大模型，支持文生图、文生视频。",
    url: "https://hunyuan.tencent.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=hunyuan.tencent.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.CN,
    tags: ["Tencent", "Multimodal"]
  },
  {
    id: "runway",
    name: "Runway Gen-3",
    description: "专业电影级视频控制与生成。",
    url: "https://runwayml.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    tags: ["Professional", "Control"]
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    description: "极速生成高物理真实感的视频。",
    url: "https://lumalabs.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    tags: ["Fast", "3D"]
  },
  {
    id: "pika",
    name: "Pika",
    description: "擅长动画效果与局部重绘视频。",
    url: "https://pika.art",
    iconUrl: "https://www.google.com/s2/favicons?domain=pika.art&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    tags: ["Animation", "Inpainting"]
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "顶级AI数字人与口型翻译。",
    url: "https://www.heygen.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=heygen.com&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    tags: ["Avatar", "Translation"]
  },
  {
    id: "opusclip",
    name: "OpusClip",
    description: "长视频自动切片成短视频神器。",
    url: "https://www.opus.pro",
    iconUrl: "https://www.google.com/s2/favicons?domain=opus.pro&sz=128",
    category: ToolCategory.VIDEO,
    region: Region.GLOBAL,
    tags: ["Shorts", "Editing"]
  },

  // 7. 音频与音乐 (Audio & Music)
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "全球最逼真的AI语音克隆。",
    url: "https://elevenlabs.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    tags: ["Voice", "TTS"],
    isPopular: true
  },
  {
    id: "moyin",
    name: "魔音工坊",
    description: "国内领先的配音神器，提供大量逼真的 AI 语音。",
    url: "https://www.moyin.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=moyin.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.CN,
    tags: ["Dubbing", "TTS"]
  },
  {
    id: "suno",
    name: "Suno",
    description: "一键生成带歌词的完整流行歌。",
    url: "https://suno.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=suno.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    tags: ["Music", "Song"]
  },
  {
    id: "udio",
    name: "Udio",
    description: "音质惊艳、极具艺术感的音乐生成。",
    url: "https://www.udio.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=udio.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    tags: ["Music", "High Quality"]
  },
  {
    id: "adobepodcast",
    name: "Adobe Podcast",
    description: "AI人声增强，烂设备出大片音质。",
    url: "https://podcast.adobe.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=podcast.adobe.com&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    tags: ["Enhance", "Voice"]
  },
  {
    id: "rask",
    name: "Rask.ai",
    description: "全自动视频配音翻译与原声克隆。",
    url: "https://rask.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=rask.ai&sz=128",
    category: ToolCategory.AUDIO,
    region: Region.GLOBAL,
    tags: ["Dubbing", "Translation"]
  },

  // 8. 办公效率 (Productivity)
  {
    id: "feishu",
    name: "飞书智能伙伴",
    description: "字节跳动旗下企业协作平台，AI 深度集成，提升办公效率。",
    url: "https://www.feishu.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=feishu.cn&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.CN,
    tags: ["Office", "Collaboration"]
  },
  {
    id: "wpsai",
    name: "WPS AI",
    description: "金山办公推出的具备大语言模型能力的智能办公助手。",
    url: "https://ai.wps.cn",
    iconUrl: "https://www.google.com/s2/favicons?domain=ai.wps.cn&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.CN,
    tags: ["Office", "Writing"]
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "1分钟生成精美PPT、网页。",
    url: "https://gamma.app",
    iconUrl: "https://www.google.com/s2/favicons?domain=gamma.app&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["PPT", "Web"]
  },
  {
    id: "notion",
    name: "Notion AI",
    description: "笔记文档全自动总结与续写。",
    url: "https://www.notion.so",
    iconUrl: "https://www.google.com/s2/favicons?domain=notion.so&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Docs", "Notes"]
  },
  {
    id: "mscopilot",
    name: "Microsoft Copilot",
    description: "Office全家桶的原生AI增强。",
    url: "https://copilot.microsoft.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Office", "Microsoft"]
  },
  {
    id: "fireflies",
    name: "Fireflies.ai",
    description: "全自动会议录音转录与摘要。",
    url: "https://fireflies.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=fireflies.ai&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Meeting", "Transcribe"]
  },
  {
    id: "zapier",
    name: "Zapier Central",
    description: "让AI控制数千个应用自动化。",
    url: "https://zapier.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=zapier.com&sz=128",
    category: ToolCategory.PRODUCTIVITY,
    region: Region.GLOBAL,
    tags: ["Automation", "Workflow"]
  },

  // 9. 知识管理 (Knowledge)
  {
    id: "notebooklm",
    name: "NotebookLM",
    description: "谷歌出品，基于个人文档的AI笔记本。",
    url: "https://notebooklm.google.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    tags: ["Google", "Notes"]
  },
  {
    id: "chatpdf",
    name: "ChatPDF",
    description: "最经典的PDF对话工具。",
    url: "https://www.chatpdf.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=chatpdf.com&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    tags: ["PDF", "Reading"]
  },
  {
    id: "mem",
    name: "Mem",
    description: "基于AI的自组织个人笔记系统。",
    url: "https://mem.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=mem.ai&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    tags: ["Organize", "Notes"]
  },
  {
    id: "humata",
    name: "Humata",
    description: "超快处理超长文档的AI助理。",
    url: "https://www.humata.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=humata.ai&sz=128",
    category: ToolCategory.KNOWLEDGE,
    region: Region.GLOBAL,
    tags: ["Long Docs", "Analysis"]
  },

  // 10. 语言与翻译 (Language & Translation)
  {
    id: "deepl",
    name: "DeepL",
    description: "翻译界天花板，极其懂语境。",
    url: "https://www.deepl.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=deepl.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    tags: ["Translation", "Accurate"]
  },
  {
    id: "talkpal",
    name: "TalkPal",
    description: "基于GPT的个性化语言学习伙伴。",
    url: "https://talkpal.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=talkpal.ai&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    tags: ["Learning", "Speaking"]
  },
  {
    id: "elsa",
    name: "Elsa Speak",
    description: "AI纠正英语发音与语调。",
    url: "https://elsaspeak.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=elsaspeak.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    tags: ["Pronunciation", "English"]
  },
  {
    id: "langreactor",
    name: "Language Reactor",
    description: "看剧学外语的最佳插件。",
    url: "https://www.languagereactor.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=languagereactor.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    tags: ["Netflix", "Learning"]
  },
  {
    id: "immersivetranslate",
    name: "Immersive Translate",
    description: "沉浸式双语翻译插件。",
    url: "https://immersivetranslate.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=immersivetranslate.com&sz=128",
    category: ToolCategory.TRANSLATION,
    region: Region.GLOBAL,
    tags: ["Extension", "Bilingual"]
  },

  // 11. 商业与法律 (Business & Legal)
  {
    id: "tableau-ai",
    name: "Tableau AI",
    description: "集成到 Tableau 中的生成式 AI，用于更智能的数据分析和可视化。",
    url: "https://www.tableau.com/products/tableau-ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=tableau.com&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    tags: ["BI", "Analytics"]
  },
  {
    id: "powerbi-copilot",
    name: "Power BI Copilot",
    description: "在 Power BI 中使用自然语言创建报告并获取见解。",
    url: "https://powerbi.microsoft.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=powerbi.microsoft.com&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    tags: ["BI", "Microsoft"]
  },
  {
    id: "obviously-ai",
    name: "Obviously AI",
    description: "无代码 AI 工具，无需编写代码即可在几分钟内将数据转化为预测结果。",
    url: "https://www.obviously.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=obviously.ai&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    tags: ["No-Code", "Prediction"]
  },
  {
    id: "spellbook",
    name: "Spellbook",
    description: "AI合同审核专家。",
    url: "https://www.spellbook.legal",
    iconUrl: "https://www.google.com/s2/favicons?domain=spellbook.legal&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    tags: ["Legal", "Contracts"]
  },
  {
    id: "ironclad",
    name: "Ironclad",
    description: "企业级法律合规与合同管理。",
    url: "https://ironcladapp.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=ironcladapp.com&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    tags: ["Legal", "Enterprise"]
  },
  {
    id: "finchat",
    name: "FinChat",
    description: "专业的上市公司财报AI分析师。",
    url: "https://finchat.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=finchat.io&sz=128",
    category: ToolCategory.BUSINESS,
    region: Region.GLOBAL,
    tags: ["Finance", "Stocks"]
  },

  // 12. 教育与科研 (Education & Science)
  {
    id: "khanmigo",
    name: "Khanmigo",
    description: "可汗学院推出的AI导师。",
    url: "https://www.khanacademy.org",
    iconUrl: "https://www.google.com/s2/favicons?domain=khanacademy.org&sz=128",
    category: ToolCategory.EDUCATION,
    region: Region.GLOBAL,
    tags: ["Tutor", "Learning"]
  },
  {
    id: "photomath",
    name: "Photomath",
    description: "拍照秒解数学题。",
    url: "https://photomath.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=photomath.com&sz=128",
    category: ToolCategory.EDUCATION,
    region: Region.GLOBAL,
    tags: ["Math", "Solver"]
  },
  {
    id: "paperdigest",
    name: "PaperDigest",
    description: "科研论文一键精简与总结。",
    url: "https://www.paperdigest.org",
    iconUrl: "https://www.google.com/s2/favicons?domain=paperdigest.org&sz=128",
    category: ToolCategory.EDUCATION,
    region: Region.GLOBAL,
    tags: ["Research", "Summary"]
  },

  // 13. 医疗与健康 (Health & Medical)
  {
    id: "tencent-aimis",
    name: "腾讯觅影",
    description: "腾讯推出的 AI 医学影像和辅助诊断系统。",
    url: "https://aimis.qq.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=aimis.qq.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.CN,
    tags: ["Medical", "Tencent"]
  },
  {
    id: "iflyhealth",
    name: "讯飞医疗",
    description: "利用语音 AI 技术提供智能医疗助理和慢病管理服务。",
    url: "https://www.iflyhealth.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=iflyhealth.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.CN,
    tags: ["Voice", "Medical"]
  },
  {
    id: "ada",
    name: "Ada",
    description: "AI症状检查与健康管理。",
    url: "https://ada.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=ada.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.GLOBAL,
    tags: ["Medical", "Diagnosis"]
  },
  {
    id: "hume",
    name: "Hume AI",
    description: "具备共情能力的语音情感助手。",
    url: "https://www.hume.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=hume.ai&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.GLOBAL,
    tags: ["Emotion", "Voice"]
  },
  {
    id: "woebot",
    name: "Woebot",
    description: "基于AI的心理健康咨询。",
    url: "https://woebothealth.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=woebothealth.com&sz=128",
    category: ToolCategory.HEALTH,
    region: Region.GLOBAL,
    tags: ["Therapy", "Chat"]
  },

  // 14. 社交与趣味 (Social & Fun)
  {
    id: "characterai",
    name: "Character.ai",
    description: "与虚拟角色沉浸式对话。",
    url: "https://character.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=character.ai&sz=128",
    category: ToolCategory.SOCIAL,
    region: Region.GLOBAL,
    tags: ["Roleplay", "Chat"]
  },
  {
    id: "candyai",
    name: "Candy.ai",
    description: "情感陪伴与角色扮演平台。",
    url: "https://candy.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=candy.ai&sz=128",
    category: ToolCategory.SOCIAL,
    region: Region.GLOBAL,
    tags: ["Companion", "Anime"]
  },
  {
    id: "replika",
    name: "Replika",
    description: "AI虚拟好友、情感伴侣。",
    url: "https://replika.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=replika.ai&sz=128",
    category: ToolCategory.SOCIAL,
    region: Region.GLOBAL,
    tags: ["Friend", "Avatar"]
  },

  // 15. UI/UX 设计 (UI/UX)
  {
    id: "jishie",
    name: "即时设计",
    description: "支持 AI 生成 UI 设计稿的专业级云端 UI 设计工具。",
    url: "https://js.design",
    iconUrl: "https://www.google.com/s2/favicons?domain=js.design&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.CN,
    tags: ["UI", "Figma Alternative"]
  },
  {
    id: "galileo",
    name: "Galileo AI",
    description: "描述需求生成高保真UI界面。",
    url: "https://www.usegalileo.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=usegalileo.ai&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.GLOBAL,
    tags: ["UI", "Design"]
  },
  {
    id: "uizard",
    name: "Uizard",
    description: "手绘草图秒转数字化设计原型。",
    url: "https://uizard.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=uizard.io&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.GLOBAL,
    tags: ["Prototype", "Sketch"]
  },
  {
    id: "figma",
    name: "Figma AI",
    description: "设计巨头内置的AI智能功能。",
    url: "https://www.figma.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
    category: ToolCategory.UI_UX,
    region: Region.GLOBAL,
    tags: ["Design", "Tool"]
  },

  // 16. AI 运维与底层 (Infra)
  {
    id: "datarobot",
    name: "DataRobot",
    description: "价值驱动的 AI 平台，加速机器学习模型的构建和部署。",
    url: "https://www.datarobot.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=datarobot.com&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    tags: ["MLOps", "AutoML"]
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    description: "开发者必备的模型API聚合。",
    url: "https://openrouter.ai",
    iconUrl: "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    tags: ["API", "Aggregator"]
  },
  {
    id: "langchain",
    name: "LangChain",
    description: "构建LLM应用的行业标准框架。",
    url: "https://langchain.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=langchain.com&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    tags: ["Framework", "Dev"]
  },
  {
    id: "pinecone",
    name: "Pinecone",
    description: "AI记忆底层：向量数据库。",
    url: "https://www.pinecone.io",
    iconUrl: "https://www.google.com/s2/favicons?domain=pinecone.io&sz=128",
    category: ToolCategory.INFRA,
    region: Region.GLOBAL,
    tags: ["Database", "Vector"]
  },

  // 17. 硬件交互 (Hardware)
  {
    id: "humane",
    name: "Humane",
    description: "AI Pin 硬件中心。",
    url: "https://humane.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=humane.com&sz=128",
    category: ToolCategory.HARDWARE,
    region: Region.GLOBAL,
    tags: ["Wearable", "Pin"]
  },
  {
    id: "rabbit",
    name: "Rabbit",
    description: "LAM大动作模型硬件。",
    url: "https://www.rabbit.tech",
    iconUrl: "https://www.google.com/s2/favicons?domain=rabbit.tech&sz=128",
    category: ToolCategory.HARDWARE,
    region: Region.GLOBAL,
    tags: ["Device", "Assistant"]
  },

  // 18. 垂直行业 (Niche)
  {
    id: "interiorai",
    name: "Interior AI",
    description: "AI室内装修设计。",
    url: "https://interiorai.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=interiorai.com&sz=128",
    category: ToolCategory.NICHE,
    region: Region.GLOBAL,
    tags: ["Design", "Home"]
  },
  {
    id: "planner5d",
    name: "Planner 5D",
    description: "集成了AI的家居规划工具。",
    url: "https://planner5d.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=planner5d.com&sz=128",
    category: ToolCategory.NICHE,
    region: Region.GLOBAL,
    tags: ["Architecture", "Planning"]
  },
  {
    id: "zillow",
    name: "Zillow AI",
    description: "房产搜索与估值AI。",
    url: "https://zillow.com",
    iconUrl: "https://www.google.com/s2/favicons?domain=zillow.com&sz=128",
    category: ToolCategory.NICHE,
    region: Region.GLOBAL,
    tags: ["Real Estate", "Data"]
  }
];
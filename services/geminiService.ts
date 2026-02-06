import { GoogleGenAI } from "@google/genai";
import { toolsData } from "../data/tools";

export const getGeminiRecommendation = async (userQuery: string): Promise<string> => {
  // Check if API Key exists in the environment
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return "⚠️ **No API Key Detected**\n\nTo use this AI Assistant, create a `.env` file in the project root with:\n`API_KEY=your_gemini_key`\n\nYou can get a free key at [Google AI Studio](https://aistudio.google.com/).\n\n**You can still browse and search the tool directory without a key!**";
  }

  try {
    // Initialize Gemini only when needed to verify key
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // We provide a summarized version of the tools to the model context to save tokens
    const toolsContext = toolsData.map(t => `- ${t.name} (${t.region}): ${t.description}`).join('\n');

    const prompt = `
    You are an expert AI software consultant for a website called "AI 小破村" (AI Xiao Po Cun).
    
    The user is asking: "${userQuery}"

    Here is the database of tools available in our directory:
    ${toolsContext}

    Please recommend the best tool(s) from this list for their specific need. 
    If the perfect tool isn't in the list, you can mention a famous one, but prioritize the list.
    
    IMPORTANT: Answer in the same language that the user used in their query. 
    - If the user asks in English, answer in English. 
    - If they ask in Chinese, answer in Chinese.
    - If unsure, default to English.
    
    Keep the answer concise, friendly, and formatted in Markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Sorry, I couldn't generate a recommendation right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "There was an issue connecting to the AI service. Please check your network connection or API Key.";
  }
};
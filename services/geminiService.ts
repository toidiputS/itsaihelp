import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables. AI features may not work.");
    // In a real app, handle this gracefully. For this demo, we proceed.
  }
  return new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });
};

export const generateBizIdea = async (niche: string): Promise<string> => {
  try {
    const ai = getClient();
    const model = 'gemini-2.5-flash';
    
    const prompt = `You are a business coach specializing in AI side hustles. 
    The user is interested in the "${niche}" niche. 
    Give them one specific, actionable, low-code AI business idea they can start today. 
    Keep it under 50 words. Be enthusiastic.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Could not generate an idea. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Demo mode: Connect your API Key to see real AI magic! (Simulated result: Sell custom pet portraits using AI art generators).";
  }
};

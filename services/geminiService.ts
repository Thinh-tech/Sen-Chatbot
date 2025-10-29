
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const chatSession: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: SYSTEM_INSTRUCTION,
    temperature: 0.7,
    topP: 0.9,
    topK: 40,
  },
});

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const result = await chatSession.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Xin lỗi, Sen đang gặp sự cố nhỏ. Vui lòng thử lại sau giây lát nhé.";
  }
};


import { GoogleGenAI, Type } from "@google/genai";
import type { TrendAnalysis } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("Змінна середовища API_KEY не встановлена.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const trendAnalysisSchema = {
  type: Type.OBJECT,
  properties: {
    explanation: {
      type: Type.STRING,
      description: "Просте, в один абзац, пояснення суті тренду, уникаючи надмірного сленгу. Поясніть його основну привабливість для батьків.",
    },
    key_elements: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
      },
      description: "Масив з 3-5 рядків, що перераховують ключові візуальні елементи, предмети або дії, пов'язані з трендом.",
    },
    gift_ideas: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: "Назва ідеї подарунка."
          },
          description: {
            type: Type.STRING,
            description: "Коротке речення, що пояснює, чому це хороший подарунок для цього тренду."
          },
        },
        required: ["name", "description"],
      },
      description: "Масив з 3 ідей подарунків, пов'язаних із цим трендом.",
    },
  },
  required: ["explanation", "key_elements", "gift_ideas"],
};


export const analyzeTrend = async (trend: string): Promise<TrendAnalysis | null> => {
  if (!trend.trim()) {
    return null;
  }

  try {
    const prompt = `Ви - "TrendyKid Навігатор", експерт з трендів покоління Z, який допомагає розгубленим батькам. Один з батьків запитав про тренд: "${trend}". Ваше завдання — надати відповідь у чіткому, зрозумілому для батьків форматі JSON на основі наданої схеми. Уся відповідь має бути єдиним, валідним об'єктом JSON і нічим іншим.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: trendAnalysisSchema,
      },
    });

    const text = response.text;
    if (!text) {
        throw new Error("Немає тексту у відповіді");
    }
    
    // The response text should already be a valid JSON string
    return JSON.parse(text) as TrendAnalysis;

  } catch (error) {
    console.error("Error analyzing trend with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Не вдалося проаналізувати тренд: ${error.message}`);
    }
    throw new Error("Під час аналізу тренду сталася невідома помилка.");
  }
};

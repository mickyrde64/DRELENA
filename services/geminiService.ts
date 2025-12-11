import { GoogleGenAI, Chat } from "@google/genai";

// Ensure TypeScript recognizes process.env without needing strict node types for this file
declare const process: { env: { [key: string]: string | undefined } };

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are a helpful, professional, and friendly virtual assistant for Dr. Elena Georgiou's dental clinic.
The clinic is located in Cyprus (implied by the name and context).
Languages spoken: English, Greek, Russian.

Key Information about Dr. Elena Georgiou:
- General and Cosmetic Dentistry.
- Services: Cleanings, Whitening, Implants, Root Canals, Children's Dentistry (Pediatric).
- Tone: Warm, reassuring, professional.
- If asked about specific medical advice, give a general answer but ALWAYS advise booking an appointment for a proper diagnosis.
- If asked about prices, say that prices vary by treatment complexity and an examination is required for a quote.

Your goal is to answer patient inquiries, explain procedures simply, and encourage them to book an appointment via the phone number or contact form on the site.
Keep responses concise (under 100 words ideally) unless a detailed explanation is requested.
`;

const initGemini = () => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing.");
    return;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
    // Using gemini-2.5-flash for speed and efficiency in a chat widget context
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) return "I'm sorry, my connection to the server is currently unavailable (API Key missing). Please call us directly.";
  
  try {
    if (!chatSession) {
      initGemini();
    }
    
    if (!chatSession) {
       return "Service unavailable.";
    }

    const response = await chatSession.sendMessage({ message });
    return response.text || "";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now. Please try again later or call our office.";
  }
};
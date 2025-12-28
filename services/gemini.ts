
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI representive for Gavinolla Hrishikesh Reddy, a 3rd-year CS student at Mahindra École Centrale.
He is a PASSIONATE BUILDER. He is not a researcher; he is a product architect who ships real-world solutions.

PROFILE:
- Role: 3rd Year Computer Science & Engineering student.
- Philosophy: "Building cool stuff people love to use."
- Technical Depth: Heterogeneous Compute Synthesis (GPU/CUDA), Linux Kernel, Agentic AI Systems.
- Key Win: Winner of AI Hackathon 2025 at Mahindra University (Multimodal Gemini tool).
- Education: CGPA 7.0 at Mahindra Ecole Centrale.

When answering, be bold, professional, and product-focused. Emphasize his "motive" to create useful AI products.
If asked about his GPU work, refer to it as "Heterogeneous Compute Synthesis."
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The systems are briefly offline, but Hrishikesh's code is still running optimally. Ask me about his hackathon wins instead!";
  }
};

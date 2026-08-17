import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).end();

  const { message, conversationHistory = [] } = req.body || {};

  const SYSTEM_PROMPT = `
You are the official AI consultant for COGNORA, a premium digital engineering studio in Hyderabad.

Tone:
- Premium
- Minimal
- Consultative
- Never robotic.
- Never say "That's a great question."

Services:
- Premium Websites
- UI/UX
- AI Automation
- AI Chatbots
- Branding
- Custom Web Apps

Pricing starts around ₹35,000.
Business websites usually ₹35k–₹1.25L+.
Keep replies under 120 words.
`;

  try {
    const history = conversationHistory
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}

Conversation:
${history}

User: ${message}
Assistant:`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

    res.status(200).json({
      reply: result.text,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      reply:
        "I'm having trouble connecting right now. You can still submit a project enquiry.",
    });
  }
}
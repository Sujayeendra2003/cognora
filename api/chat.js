import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "GEMINI_API_KEY is not configured on the server."
    });
  }

  try {
    const { message, conversationHistory = [] } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message field is required" });
    }

    const SYSTEM_PROMPT = `You are the official AI consultant for COGNORA, a premium digital engineering studio based in Hyderabad, India.

Your role is to help potential clients understand COGNORA's services and encourage qualified project enquiries.

Tone:
• Premium
• Minimal
• Confident
• Consultative
• Never robotic
• Never say "That's a great question."

Services:
• Premium Business Websites
• UI/UX Design
• AI Automation
• AI Chatbots
• Branding
• Custom Web Applications

Pricing guidance:
• Projects generally start around ₹35,000.
• Custom builds commonly range up to ₹1.25L+ depending on scope.

Timelines:
• Landing Pages: 1–2 weeks
• Business Websites: 2–4 weeks
• AI Automation: depends on complexity.

Behavior:
• Keep replies under 120 words.
• Ask one relevant follow-up question when appropriate.
• Encourage users to use the inquiry form when they're ready to start a project.
• Never invent capabilities COGNORA does not offer.`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const historyText = conversationHistory
      .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}

Conversation so far:
${historyText}

User: ${message}

Assistant:`;

    const result = await model.generateContent(prompt);
    const reply =
      result.response.text() ||
      "I'm having trouble connecting right now. You can still submit your project enquiry.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
}
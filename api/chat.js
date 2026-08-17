import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { message, conversationHistory = [] } = req.body || {};

  const SYSTEM_PROMPT = `You are the official AI consultant for COGNORA, a premium digital engineering studio based in Hyderabad.

Tone:
- Premium
- Minimal
- Consultative
- Never robotic
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

Keep replies under 120 words and ask one relevant follow-up question when appropriate.`;

  try {
    const history = conversationHistory
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}

Conversation:
${history}

User: ${message}
Assistant:`;

    const completion = await client.chatCompletion({
      provider: "nebius",
      model: "Qwen/Qwen3-32B",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 250,
      temperature: 0.7,
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("HF Error:", err);
    return res.status(500).json({
      reply: "I'm having trouble connecting right now.",
    });
  }
}
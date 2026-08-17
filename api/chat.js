export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;

  if (!HF_TOKEN) {
    return res.status(500).json({ error: "Missing HUGGINGFACE_API_KEY" });
  }

  const { message, conversationHistory = [] } = req.body || {};

  const SYSTEM_PROMPT = `
You are the official AI consultant for COGNORA, a premium digital engineering studio in Hyderabad.

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

Pricing:
- Starts around ₹35,000
- Business websites usually ₹35k–₹1.25L+

Keep replies under 120 words and ask one follow-up question when appropriate.
`;

  const history = conversationHistory
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n");

  const prompt = `${SYSTEM_PROMPT}

Conversation:
${history}

User: ${message}
Assistant:`;

  try {
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "Qwen/Qwen2.5-72B-Instruct",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 200,
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return res.status(response.status).json({
        error: data.error || "Hugging Face request failed",
      });
    }

    res.status(200).json({
      reply:
        data.choices?.[0]?.message?.content ||
        "I'm having trouble connecting right now.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
}
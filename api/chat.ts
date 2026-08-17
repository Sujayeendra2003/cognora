import type { VercelRequest, VercelResponse } from '@vercel/node';

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
• AI Automation: depends on complexity

Behavior:
• Answer naturally.
• Keep replies under 120 words.
• Ask one relevant follow-up question when appropriate.
• If someone wants to start a project, encourage them to use the inquiry form.
• Never invent capabilities COGNORA does not offer.`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'OPENAI_API_KEY is not configured on the server.'
    });
  }

  try {
    const { message, conversationHistory = [] } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message field is required' });
    }

    // Format chat history for OpenAI API
    const formattedHistory = Array.isArray(conversationHistory)
      ? conversationHistory.map((msg: { role: string; content: string }) => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: String(msg.content)
        }))
      : [];

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...formattedHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 250,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI API Error:', errorData);
      return res.status(response.status).json({
        error: errorData?.error?.message || 'OpenAI API request failed'
      });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "I'm having trouble connecting right now. You can still submit your project enquiry.";

    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error('API Chat Exception:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      details: error?.message
    });
  }
}

# COGNORA AI Consultant — Vercel Serverless Integration & Setup

This guide documents how the COGNORA AI Consultant chatbot connects to an LLM via Vercel Serverless Functions (`/api/chat`).

---

## 🛠️ Architecture Overview

- **Frontend**: React + TypeScript + Vite + TailwindCSS (`src/components/AiAssistantDemo.jsx`).
- **Serverless API Route**: Vercel Serverless Node Function (`api/chat.js` / `api/chat.ts`).
- **LLM Engine**: OpenAI Chat Completions API (`gpt-4o-mini` / `gpt-4o`).
- **Security**: The `OPENAI_API_KEY` is kept 100% server-side and never exposed to client browsers.

---

## 🔐 Environment Variables

Add the following environment variable to your project:

```env
OPENAI_API_KEY=your_actual_openai_api_key_here
```

### Adding Environment Variables on Vercel Dashboard

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Select your **COGNORA** project.
3. Click **Settings** → **Environment Variables**.
4. Add:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: `sk-proj-...` (your OpenAI API secret key)
   - **Environment**: Select `Production`, `Preview`, and `Development`.
5. Click **Save** and trigger a redeployment.

---

## 💻 Local Development Options

### Option 1: Vercel CLI (Recommended for testing `/api/chat` locally)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Run local development with Vercel Serverless Function runner
vercel dev
```

### Option 2: Vite Local Server
```bash
npm run dev
```
*Note: In local Vite dev server without Vercel CLI active, the frontend automatically falls back to intelligent consultative responses if `/api/chat` returns an offline state.*

---

## ⚙️ System Prompt Customization

The system prompt is defined in `api/chat.js`. It enforces:
- **Role**: Official AI consultant for COGNORA (Hyderabad, India).
- **Tone**: Premium, minimal, confident, consultative. Never says *"That's a great question."*
- **Pricing & Timelines**: Projects start at ₹35,000 up to ₹1.25L+. Landing pages (1-2 wks), Websites (2-4 wks).
- **Concise Responses**: Answers are kept under 120 words with one relevant follow-up.

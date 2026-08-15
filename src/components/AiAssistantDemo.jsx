import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, MessageSquare, ArrowRight } from 'lucide-react';

export default function AiAssistantDemo({ onOpenInquiry }) {
  const initialMessages = [
    {
      sender: 'bot',
      text: 'Greetings. I am Cognora’s AI Concierge. I can answer questions about our design methodology, AI integration capabilities, or help you schedule a founder call. What would you like to explore?'
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const presetPrompts = [
    "What is your typical project timeline?",
    "How does the AI Website Assistant work?",
    "Do you offer custom Figma design tokens?",
    "How do I start a project with Cognora?"
  ];

  const knowledgeBase = {
    timeline: "Our standard website redesigns take 3 to 6 weeks. For enterprise AI platforms, delivery ranges between 6 to 10 weeks depending on custom vector ingestion and API scope.",
    assistant: "We fine-tune custom AI agents trained on your proprietary brand documentation, service offerings, and FAQs. The agent runs 24/7 on your website to answer visitor inquiries and auto-qualify leads.",
    figma: "Yes! Every design project includes complete Figma design system tokens, typography scales, component libraries, and developer handoff specs.",
    start: "Starting a project is simple. Click the 'Start a Project' button below or use our interactive cost estimator. We schedule a 30-minute founder call within 24 hours to align on your scope."
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let botResponse = "That's a great question! At Cognora, we custom-engineer every digital experience and AI assistant from scratch to deliver sub-second performance and measurable growth for your brand.";
      const lower = text.toLowerCase();

      if (lower.includes('timeline') || lower.includes('time') || lower.includes('weeks')) {
        botResponse = knowledgeBase.timeline;
      } else if (lower.includes('assistant') || lower.includes('agent') || lower.includes('ai')) {
        botResponse = knowledgeBase.assistant;
      } else if (lower.includes('figma') || lower.includes('design') || lower.includes('token')) {
        botResponse = knowledgeBase.figma;
      } else if (lower.includes('start') || lower.includes('inquire') || lower.includes('book') || lower.includes('cost')) {
        botResponse = knowledgeBase.start;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="ai-demo" className="section ai-demo-section">
      <div className="container">
        <div className="ai-demo-grid">
          {/* Left Description Column */}
          <div className="ai-demo-left fade-up">
            <div className="section-tag">
              <span className="dot"></span>
              <span>Live AI Capability Showcase</span>
            </div>
            <h2 className="section-title">
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Experience</span> an <span className="editorial">AI Website Assistant</span> in real-time.
            </h2>
            <p className="section-subtitle">
              This interactive widget demonstrates the exact AI concierge experience we build for client websites. Test it now to see how an intelligent assistant answers technical questions and converts visitors 24/7.
            </p>

            <div className="ai-features-list">
              <div className="ai-feature-item">
                <Sparkles size={18} className="feat-icon" />
                <div>
                  <strong>Trained on Custom Domain Knowledge</strong>
                  <p>Informs visitors accurately using your proprietary brand docs.</p>
                </div>
              </div>
              <div className="ai-feature-item">
                <Bot size={18} className="feat-icon" />
                <div>
                  <strong>Automated Lead Qualification</strong>
                  <p>Pre-qualifies project budget and schedules consultation calls.</p>
                </div>
              </div>
            </div>

            <button onClick={onOpenInquiry} className="btn btn-primary w-full-mobile">
              <span>Build an AI Assistant For Your Site</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Live Interactive Chat Column */}
          <div className="ai-demo-right fade-up delay-2">
            <div className="chat-window-card">
              <div className="chat-window-header">
                <div className="bot-status-group">
                  <div className="bot-avatar-box">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h4 className="bot-name">Cognora AI Assistant</h4>
                    <span className="bot-status">● Live Demo • Ready</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMessages(initialMessages)} 
                  className="reset-chat-btn"
                  title="Reset conversation"
                >
                  <RefreshCw size={14} />
                </button>
              </div>

              {/* Chat Stream */}
              <div className="chat-stream-body">
                {messages.map((msg, index) => (
                  <div key={index} className={`stream-msg ${msg.sender}-msg`}>
                    <div className="avatar-icon">
                      {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                    </div>
                    <div className="msg-bubble">
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="stream-msg bot-msg">
                    <div className="avatar-icon">
                      <Bot size={14} />
                    </div>
                    <div className="msg-bubble typing-bubble">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Preset Prompts Pills */}
              <div className="preset-prompts-bar">
                <span className="preset-label">Try asking:</span>
                <div className="pills-scroll">
                  {presetPrompts.map((promptText, i) => (
                    <button
                      key={i}
                      className="prompt-pill-btn"
                      onClick={() => handleSendMessage(promptText)}
                    >
                      {promptText}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input Bar */}
              <form 
                className="chat-input-bar"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
              >
                <input
                  type="text"
                  placeholder="Ask a question about our services..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
                <button type="submit" className="send-btn" disabled={!inputVal.trim()}>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ai-demo-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-light);
        }

        .ai-demo-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
        }

        @media (min-width: 992px) {
          .ai-demo-grid {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 64px;
          }
        }

        .ai-features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0;
        }

        @media (min-width: 768px) {
          .ai-features-list {
            gap: 20px;
            margin: 32px 0;
          }
        }

        .ai-feature-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .ai-feature-item .feat-icon {
          color: var(--text-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ai-feature-item strong {
          font-family: var(--font-display);
          font-size: 0.875rem;
          color: var(--text-primary);
          display: block;
          margin-bottom: 2px;
        }

        .ai-feature-item p {
          font-size: 0.8125rem;
          color: var(--text-secondary);
        }

        @media (max-width: 576px) {
          .w-full-mobile {
            width: 100%;
          }
        }

        /* Chat Window Card */
        .chat-window-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 20px 60px var(--accent-shadow);
          display: flex;
          flex-direction: column;
          height: 440px;
        }

        @media (min-width: 768px) {
          .chat-window-card {
            border-radius: var(--radius-lg);
            height: 520px;
          }
        }

        .chat-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
        }

        @media (min-width: 768px) {
          .chat-window-header {
            padding: 16px 20px;
          }
        }

        .bot-status-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bot-avatar-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bot-name {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .bot-status {
          font-size: 0.6875rem;
          color: #10b981;
          font-family: var(--font-display);
          font-weight: 600;
        }

        .reset-chat-btn {
          padding: 6px;
          border-radius: 50%;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .chat-stream-body {
          flex: 1;
          padding: 14px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          -webkit-overflow-scrolling: touch;
        }

        @media (min-width: 768px) {
          .chat-stream-body {
            padding: 20px;
            gap: 14px;
          }
        }

        .stream-msg {
          display: flex;
          gap: 8px;
          max-width: 94%;
        }

        .stream-msg.bot-msg {
          align-self: flex-start;
        }

        .stream-msg.user-msg {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .stream-msg .avatar-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--text-primary);
        }

        .stream-msg.user-msg .avatar-icon {
          background: var(--bg-dark);
          color: #ffffff;
          border: none;
        }

        .msg-bubble {
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 0.8125rem;
          line-height: 1.45;
        }

        .bot-msg .msg-bubble {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          border-top-left-radius: 2px;
        }

        .user-msg .msg-bubble {
          background: var(--bg-dark);
          color: #ffffff;
          border-top-right-radius: 2px;
        }

        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
        }

        .typing-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--text-muted);
          animation: typingBlink 1.4s infinite fill-mode: both;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingBlink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }

        /* Preset Prompts */
        .preset-prompts-bar {
          padding: 8px 12px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .preset-label {
          font-size: 0.6875rem;
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--text-muted);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .pills-scroll {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .pills-scroll::-webkit-scrollbar {
          display: none;
        }

        .prompt-pill-btn {
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 500;
          white-space: nowrap;
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 4px 8px;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .prompt-pill-btn:hover {
          border-color: var(--border-strong);
          color: var(--text-primary);
        }

        /* Input Bar */
        .chat-input-bar {
          display: flex;
          align-items: center;
          padding: 10px 12px;
          background: #ffffff;
          border-top: 1px solid var(--border-light);
          gap: 8px;
        }

        .chat-input-bar input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.8125rem;
          color: var(--text-primary);
        }

        .send-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--bg-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity var(--transition-fast);
          flex-shrink: 0;
        }

        .send-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

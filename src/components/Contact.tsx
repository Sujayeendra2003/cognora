"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const servicesList = [
  "Next.js Web App",
  "Brand & Visual Identity",
  "UI/UX Design System",
  "Speed & Core Web Vitals",
  "Full Package Sprint",
];

const budgetRanges = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string>("Next.js Web App");
  const [selectedBudget, setSelectedBudget] = useState<string>("$10k - $25k");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", brief: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Celebration Effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ffffff", "#a1a1aa", "#52525b"],
        });
      } catch (err) {
        console.log("Confetti trigger:", err);
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Initiate Contact
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 leading-tight">
              LET’S BUILD SOMETHING EXTRAORDINARY.
            </h2>
            <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
              Have an upcoming project or vision? Fill out our brief estimator or email us directly. We respond to all qualified inquiries within 2 hours.
            </p>

            <div className="mt-10 space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
                <div>
                  <span className="text-zinc-500 block text-[10px]">DIRECT INQUIRIES</span>
                  <a href="mailto:hello@cognorastudio.com" className="text-white hover:underline font-bold text-sm">
                    hello@cognorastudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                <Clock className="w-5 h-5 text-zinc-400 shrink-0" />
                <div>
                  <span className="text-zinc-500 block text-[10px]">AVG RESPONSE TIME</span>
                  <span className="text-emerald-400 font-bold">Sub-2 Hours (Mon–Fri)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0" />
                <div>
                  <span className="text-zinc-500 block text-[10px]">GLOBAL PRESENCE</span>
                  <span className="text-zinc-300">San Francisco • London • Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Estimator Form */}
          <div className="lg:col-span-7 bg-zinc-900/50 p-6 sm:p-10 rounded-3xl border border-zinc-800/80 backdrop-blur-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  PROJECT BRIEF RECEIVED!
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name || "Founder"}</span>. Our lead architect will review your brief for <span className="text-white">{selectedService}</span> and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", brief: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs text-white font-medium transition-colors"
                >
                  Submit Another Brief
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    01 // SELECT SERVICE SCOPE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                          selectedService === service
                            ? "bg-white text-black font-semibold shadow-md"
                            : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    02 // ESTIMATED BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`py-2 rounded-xl text-xs font-mono transition-all text-center ${
                          selectedBudget === b
                            ? "bg-zinc-800 text-white font-bold border border-zinc-600"
                            : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    COMPANY / WEBSITE (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourcompany.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    PROJECT BRIEF & GOALS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your product vision, timeline, and key requirements..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-all shadow-xl active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span className="font-mono animate-pulse">TRANSMITTING BRIEF...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"sprint" | "retainer">("sprint");

  return (
    <section id="pricing" className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header & Toggle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
            Investment Tiers
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
            TRANSPARENT, FLAT PRICING.
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            No surprise hourly billing. High-impact deliverables scoped with precision.
          </p>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium">
            <button
              onClick={() => setBillingCycle("sprint")}
              className={`px-5 py-2 rounded-full transition-all ${
                billingCycle === "sprint"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Fixed Project Sprints
            </button>
            <button
              onClick={() => setBillingCycle("retainer")}
              className={`px-5 py-2 rounded-full transition-all ${
                billingCycle === "retainer"
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Dedicated Monthly Retainer
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1: Sprint Launch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                FOR EARLY STAGE
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">Sprint Launch</h3>
              <p className="text-xs text-zinc-400 mt-1">
                2-Week intensive build for landing pages & MVP products.
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold font-mono text-white">
                  {billingCycle === "sprint" ? "$7,500" : "$6,500"}
                </span>
                <span className="text-xs text-zinc-400 font-mono ml-2">
                  {billingCycle === "sprint" ? "one-off" : "/month"}
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-800/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>5 Custom Next.js Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Tailwind CSS Styling System</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Framer Motion Transitions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Full Mobile Responsiveness</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Vercel Edge Deployment</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs border border-zinc-700 transition-colors"
            >
              <span>Book Sprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Tier 2: Full Product Scale (HIGHLIGHTED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-3xl bg-zinc-900/90 border-2 border-white backdrop-blur-2xl flex flex-col justify-between shadow-2xl shadow-white/5 scale-[1.02]"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
              ★ MOST POPULAR CHOICE
            </div>

            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                FLAGSHIP EXPERIENCE
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">Full Product Scale</h3>
              <p className="text-xs text-zinc-300 mt-1">
                Complete web app, design system & conversion engine.
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold font-mono text-white">
                  {billingCycle === "sprint" ? "$14,500" : "$12,500"}
                </span>
                <span className="text-xs text-zinc-300 font-mono ml-2">
                  {billingCycle === "sprint" ? "one-off" : "/month"}
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-700/60 text-xs text-zinc-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span className="font-semibold text-white">Unlimited Page Scoping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Bespoke Figma Design Tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Advanced Framer Motion Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>CMS & Dynamic Database Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>100/100 Core Web Vitals Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>30-Day Dedicated Support & Audits</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-colors shadow-lg"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Tier 3: Enterprise Retainer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                PARTNERSHIP
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">Enterprise Retainer</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Fractional Lead Designer & Senior Next.js Developer.
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold font-mono text-white">
                  $9,500
                </span>
                <span className="text-xs text-zinc-400 font-mono ml-2">/month</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-800/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Dedicated Weekly Development Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Continuous Design & Feature Iteration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Priority Slack / Teams Channel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>A/B Testing & CRO Experiments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Pause or Cancel Anytime</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs border border-zinc-700 transition-colors"
            >
              <span>Schedule Partnership Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

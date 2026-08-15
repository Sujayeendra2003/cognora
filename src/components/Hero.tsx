"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ShieldCheck, Sparkles, Terminal, Code2, Zap, Layers, ChevronRight } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "$48M+", label: "Capital Raised by Clients" },
  { value: "99.8%", label: "On-Time Delivery Rate" },
  { value: "2.4x", label: "Avg Conversion Increase" },
  { value: "<15ms", label: "Core Web Vitals Speed" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"code" | "design" | "metrics">("design");

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-zinc-400/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md text-xs text-zinc-300 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-zinc-100" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              NEXT.JS • TAILWIND CSS • BESPOKE UI/UX
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            WE ENGINEER DIGITAL PRODUCTS THAT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
              COMMAND ATTENTION.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Combining Apple-grade visual precision with Linear-style execution. We partner with visionary founders to design & build high-converting websites and web applications.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/5 active:scale-95 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all duration-200 backdrop-blur-md"
          >
            <span>View Case Studies</span>
            <ArrowDownRight className="w-4 h-4 text-zinc-500" />
          </a>
        </motion.div>

        {/* Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/60 backdrop-blur-xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/30 hover:border-zinc-700/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 mt-1 text-center font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Linear Mock Browser Window */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl shadow-black overflow-hidden backdrop-blur-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700/80" />
              <div className="w-3 h-3 rounded-full bg-zinc-700/80" />
              <div className="w-3 h-3 rounded-full bg-zinc-700/80" />
              <span className="ml-3 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                kronos.studio/preview
              </span>
            </div>

            {/* Window Tabs */}
            <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs font-mono">
              <button
                onClick={() => setActiveTab("design")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "design"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Design System
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "code"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab("metrics")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "metrics"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Vitals Score
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 md:p-8 min-h-[320px] flex flex-col justify-center">
            {activeTab === "design" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Monochromatic Tokens</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Strict contrast ratios, dark obsidian scales & glassmorphic surfaces.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Fluid Motion Engine</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Spring dynamics, layout transitions & micro-interactions built on Framer Motion.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Responsive Precision</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Flawless viewing experience from 375px mobile screens up to 4K displays.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "code" && (
              <div className="font-mono text-xs text-zinc-300 space-y-2 bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 overflow-x-auto">
                <p className="text-zinc-500">// KRONOS Next.js App Router Architecture</p>
                <p>
                  <span className="text-zinc-500">import</span> &#123; motion &#125; <span className="text-zinc-500">from</span> <span className="text-white">&quot;framer-motion&quot;</span>;
                </p>
                <p>
                  <span className="text-zinc-500">export default async function</span> <span className="text-white">ProductPage</span>() &#123;
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">const</span> data = <span className="text-zinc-500">await</span> fetchAgencyMetrics();
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">return</span> (
                </p>
                <p className="pl-8 text-zinc-400">
                  &lt;<span className="text-white">MotionCanvas</span> performance=&#123;100&#125; monochromatic=&#123;<span className="text-white">true</span>&#125;&gt;
                </p>
                <p className="pl-12 text-zinc-400">&lt;<span className="text-white">HeroSection</span> data=&#123;data&#125; /&gt;</p>
                <p className="pl-8 text-zinc-400">&lt;/<span className="text-white">MotionCanvas</span>&gt;</p>
                <p className="pl-4">);</p>
                <p>&#125;</p>
              </div>
            )}

            {activeTab === "metrics" && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>LCP (Largest Contentful Paint)</span>
                    <span className="text-emerald-400 font-bold">0.8s (Optimal)</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-white w-[95%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>INP (Interaction to Next Paint)</span>
                    <span className="text-emerald-400 font-bold">12ms (Instant)</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-zinc-300 w-[98%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>CLS (Cumulative Layout Shift)</span>
                    <span className="text-emerald-400 font-bold">0.000 (Zero Shift)</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-zinc-400 w-[100%] rounded-full" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

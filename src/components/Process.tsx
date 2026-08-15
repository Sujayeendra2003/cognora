"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Terminal, Rocket, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery & Blueprint",
    timeframe: "Days 1–3",
    description: "We analyze your business objectives, target audience, and competitive matrix to define a high-conversion product blueprint.",
    deliverables: ["Product Architecture", "User Journey Maps", "Tech Stack Definition"],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Interactive Design Sprint",
    timeframe: "Weeks 1–2",
    description: "Crafting pixel-perfect Figma designs, custom monochromatic visual tokens, micro-animations, and responsive prototypes.",
    deliverables: ["High-Fidelity Wireframes", "Design Token Library", "Motion Specs"],
  },
  {
    number: "03",
    icon: Terminal,
    title: "Precision Engineering",
    timeframe: "Weeks 3–4",
    description: "Translating approved designs into production-ready Next.js 15 code with clean TypeScript, Framer Motion, and zero technical debt.",
    deliverables: ["Next.js App Router Build", "Core Web Vitals Optimization", "Accessibility Tests"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Growth Acceleration",
    timeframe: "Week 5",
    description: "Deployment to Vercel global edge network, SEO indexation, analytics integration, and 30-day dedicated post-launch support.",
    deliverables: ["Global Edge Deployment", "SEO Meta & Schema Setup", "30-Day Growth Support"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
            The Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
            FROM CONCEPT TO DEPLOYMENT.
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Our battle-tested 4-step framework guarantees on-time delivery without compromising on craft.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-zinc-600">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full mb-2">
                    {step.timeframe}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 space-y-1.5">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code, Palette, Layout, Gauge, Component, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Next.js Web Applications",
    description: "Bespoke full-stack web applications built with Next.js App Router, TypeScript, and serverless backend integrations.",
    tag: "ENGINEERING",
    highlight: "Zero-latency SSR & Edge deployment",
    size: "col-span-1 md:col-span-2",
  },
  {
    icon: Palette,
    title: "Brand & Visual Identity",
    description: "Distinctive monochromatic visual systems, typography guidelines, motion rules, and 3D brand assets.",
    tag: "BRANDING",
    highlight: "Apple-level craft & minimalism",
    size: "col-span-1",
  },
  {
    icon: Layout,
    title: "UI/UX Product Strategy",
    description: "High-fidelity Figma prototypes, intuitive user flows, and wireframes engineered to maximize customer retention.",
    tag: "PRODUCT DESIGN",
    highlight: "Figma design token architectures",
    size: "col-span-1",
  },
  {
    icon: Gauge,
    title: "Performance & Vitals Audit",
    description: "Sub-second load times, 100/100 Lighthouse scores, and core web vitals optimization for search dominance.",
    tag: "OPTIMIZATION",
    highlight: "Under 20ms interaction delay",
    size: "col-span-1 md:col-span-2",
  },
  {
    icon: Component,
    title: "Design Systems & UI Kits",
    description: "Scalable React & Tailwind CSS component libraries built for design-to-code alignment across engineering teams.",
    tag: "INFRASTRUCTURE",
    highlight: "Standardized accessibility (a11y)",
    size: "col-span-1",
  },
  {
    icon: Sparkles,
    title: "Motion & Micro-interactions",
    description: "Fluid page transitions, hover interactions, scroll-driven reveals, and subtle Canvas/WebGL animations.",
    tag: "INTERACTIVE",
    highlight: "Powered by Framer Motion",
    size: "col-span-1 md:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
              SERVICES ENGINEERED FOR SCALE.
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
            We don’t use generic templates. Every line of code and pixel of design is custom-crafted to elevate your brand authority.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-600 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between ${service.size}`}
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800/80">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:translate-x-1 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-mono">{service.highlight}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

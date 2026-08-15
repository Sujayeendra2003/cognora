"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Filter } from "lucide-react";
import ProjectModal, { Project } from "./ProjectModal";

const projectsData: Project[] = [
  {
    id: "hyperion-ai",
    title: "HYPERION AI",
    category: "Web Applications",
    client: "Hyperion Systems Inc.",
    year: "2026",
    description: "Next-generation AI copilot platform engineered for enterprise developers.",
    fullStory:
      "Hyperion approached us to replace their fragmented dashboard with a unified, lightning-fast web application. We architected a Next.js 15 App Router interface featuring custom canvas data visualizers, keyboard command menus, and real-time WebSocket state management.",
    impact: [
      "+340% User onboarding completion",
      "$18M Series A funding secured",
      "Sub-10ms UI interaction latency",
      "100/100 Core Web Vitals score",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebSockets"],
    imageGradient: "bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-800",
    stats: [
      { label: "Conversion Lift", value: "+340%" },
      { label: "LCP Load Time", value: "0.7s" },
      { label: "Active Users", value: "85K+" },
    ],
  },
  {
    id: "nexus-labs",
    title: "NEXUS INFRASTRUCTURE",
    category: "Brand Systems",
    client: "Nexus Financial",
    year: "2025",
    description: "Monochromatic design system & digital interface for high-frequency liquidity networks.",
    fullStory:
      "We developed a complete brand identity and design token library for Nexus, establishing a high-contrast visual language that exudes trust, security, and algorithmic precision across all customer touchpoints.",
    impact: [
      "$2.4B Monthly Volume Processed",
      "Unified design system across 4 products",
      "Featured in Awwwards Site of the Day",
      "Reduced dev onboarding by 60%",
    ],
    techStack: ["Figma Design Tokens", "React", "Tailwind CSS", "Framer Motion"],
    imageGradient: "bg-gradient-to-br from-zinc-900 via-black to-zinc-950",
    stats: [
      { label: "Volume Handled", value: "$2.4B" },
      { label: "Components Built", value: "140+" },
      { label: "Design Awards", value: "4x" },
    ],
  },
  {
    id: "veloce-automotive",
    title: "VELOCE EV CONFIGURATOR",
    category: "E-Commerce",
    client: "Veloce Motors",
    year: "2026",
    description: "Bespoke 3D WebGL car configurator & direct-to-consumer storefront.",
    fullStory:
      "Built for a luxury electric vehicle manufacturer, this web application lets prospective buyers customize color trims, wheel dynamics, and interior finishes in real-time before reserving their vehicle online.",
    impact: [
      "4.8x Increase in pre-order reservations",
      "Average session duration increased to 7m 40s",
      "Seamless mobile touch gestures & 3D rendering",
      "Integrated instant Stripe checkout",
    ],
    techStack: ["Next.js", "Three.js / WebGL", "Tailwind CSS", "Stripe API"],
    imageGradient: "bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900",
    stats: [
      { label: "Pre-Orders", value: "4.8x" },
      { label: "Avg Session", value: "7m 40s" },
      { label: "Mobile FPS", value: "60 FPS" },
    ],
  },
  {
    id: "synapse-os",
    title: "SYNAPSE DEVELOPER OS",
    category: "SaaS Platforms",
    client: "Synapse Technologies",
    year: "2025",
    description: "Minimalist productivity dashboard & workflow orchestration suite.",
    fullStory:
      "A Linear-inspired workspace designed for software engineers. We delivered a zero-distraction dark mode UI, customizable grid widgets, and seamless GitHub/Linear API integrations.",
    impact: [
      "120,000+ Active Developer Workspaces",
      "99.99% Uptime with serverless edge caching",
      "Adopted by Y Combinator & Techstars teams",
      "Sub-15ms page navigation time",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Zustand", "Framer Motion"],
    imageGradient: "bg-gradient-to-tl from-black via-zinc-900 to-zinc-800",
    stats: [
      { label: "Active Devs", value: "120K+" },
      { label: "User Rating", value: "4.9/5" },
      { label: "Nav Speed", value: "12ms" },
    ],
  },
];

const categories = ["All", "Web Applications", "Brand Systems", "E-Commerce", "SaaS Platforms"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
              CRAFTED WITH PRECISION.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-500 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Project Card Image Banner */}
              <div
                className={`w-full h-64 sm:h-72 ${project.imageGradient} p-8 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="font-mono text-[11px] text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-700/60">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    Client: {project.client} • {project.year}
                  </p>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 flex items-center justify-between border-t border-zinc-800/60">
                <p className="text-xs text-zinc-400 font-normal line-clamp-1 max-w-[75%]">
                  {project.description}
                </p>
                <span className="text-xs font-semibold text-white group-hover:underline flex items-center gap-1">
                  Case Study &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

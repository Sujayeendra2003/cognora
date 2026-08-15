"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight, CheckCircle2, Star, Layers, Calendar, User } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  fullStory: string;
  impact: string[];
  techStack: string[];
  imageGradient: string;
  stats: { label: string; value: string }[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-zinc-800 pb-6">
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-zinc-400 mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-zinc-500" /> {project.client}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" /> {project.year}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Showcase Banner */}
          <div
            className={`my-6 w-full h-56 sm:h-64 rounded-2xl ${project.imageGradient} flex items-center justify-center p-8 border border-zinc-800 relative overflow-hidden`}
          >
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white/90">
                {project.title}
              </div>
              <div className="mt-2 text-xs font-mono text-zinc-300">
                CASE STUDY EXPLORER
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="text-xl font-bold font-mono text-white">{stat.value}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description & Impact */}
          <div className="mt-6 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Project Brief & Challenge
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.fullStory}
            </p>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono pt-2">
              Key Deliverables & Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {project.impact.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                Technologies Employed
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white font-medium"
            >
              Close Drawer
            </button>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              <span>Build Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

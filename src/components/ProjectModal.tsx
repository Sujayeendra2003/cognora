"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Calendar,
  User,
} from "lucide-react";

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

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Outer Fixed Overlay Container */}
      <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 pointer-events-none">
        {/* Fixed Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
        />

        {/* Scrollable Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-auto relative z-10 w-full max-w-3xl my-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:p-8 shadow-2xl max-h-[90vh] max-h-[90dvh] overflow-y-scroll overscroll-contain touch-pan-y custom-project-modal-scrollbar"
        >
          {/* Sticky Header */}
          <div className="sticky -top-5 sm:-top-8 z-30 bg-zinc-950/95 backdrop-blur-md flex items-start justify-between border-b border-zinc-800 pb-5 pt-1 -mx-5 sm:-mx-8 px-5 sm:px-8 mb-2">
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                {project.category}
              </span>

              <h3 className="text-2xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
                {project.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-zinc-500" />
                  {project.client}
                </span>

                <span className="hidden sm:block">•</span>

                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {project.year}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-2.5 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors flex-shrink-0 ml-4"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Showcase Banner */}
          <div
            className={`my-6 w-full h-52 sm:h-64 rounded-2xl ${project.imageGradient} flex items-center justify-center p-8 border border-zinc-800 relative overflow-hidden`}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-white/90">
                {project.title}
              </div>

              <div className="mt-2 text-xs font-mono text-zinc-300 tracking-widest">
                CASE STUDY EXPLORER
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="text-xl font-bold font-mono text-white">
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="mt-6 space-y-5">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                Project Brief &amp; Challenge
              </h4>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.fullStory}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-3">
                Key Deliverables &amp; Results
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.impact.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-zinc-900/40 p-3 rounded-xl border border-zinc-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-3">
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

          {/* Footer CTA */}
          <div className="mt-8 pt-6 pb-2 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-sm text-zinc-400 hover:text-white font-medium"
            >
              Close Drawer
            </button>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors w-full sm:w-auto justify-center"
            >
              <span>Build Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Visible Custom Scrollbar Styles */}
      <style>{`
        .custom-project-modal-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-project-modal-scrollbar::-webkit-scrollbar-track {
          background: rgba(24, 24, 27, 0.6);
          border-radius: 9999px;
        }

        .custom-project-modal-scrollbar::-webkit-scrollbar-thumb {
          background: #52525b;
          border-radius: 9999px;
        }

        .custom-project-modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a1a1aa;
        }
      `}</style>
    </AnimatePresence>
  );
}

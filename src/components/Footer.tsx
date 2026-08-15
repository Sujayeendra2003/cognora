"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 py-16 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">
                K
              </div>
              <span className="font-semibold text-white tracking-tight text-base">
                KRONOS<span className="text-zinc-500 font-normal ml-1">/STUDIO</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Engineering world-class web applications, bespoke design token systems, and fluid interactive products for ambitious brands.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>EST LOCAL TIME: {timeString || "14:45 UTC"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities & Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Case Studies & Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  4-Step Workflow
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing & Sprints
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Proof
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-4">
              Network
            </h4>
            <div className="flex items-center gap-3">
              {/* GitHub SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* X / Twitter SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Dribbble SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                aria-label="Dribbble"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.119 11.238c-.378-.073-3.149-.576-6.195-.126-.145-.316-.296-.642-.455-.976 3.639-1.517 5.088-3.567 5.234-3.784.898 1.341 1.416 2.955 1.416 4.886 0 .001 0 .001 0 0zm-2.885-6.223c-.152.21-1.464 1.996-4.945 3.429-1.597-2.923-3.33-5.362-3.541-5.66 1.157-.396 2.404-.61 3.702-.61 1.737 0 3.35.539 4.784 1.488zm-9.988-1.09c.221.311 1.936 2.73 3.528 5.617-4.148 1.139-8.17 1.132-8.58 1.129.566-2.809 2.417-5.155 5.052-6.746zm-7.246 8.075c.348.002 3.844.022 7.844-1.002.164.338.322.673.473 1.005-4.444 1.332-6.21 4.743-6.377 5.076-1.196-1.442-1.92-3.28-1.94-5.079zm3.037 6.452c.162-.317 1.637-3.084 5.922-4.453.968 2.502 1.666 5.127 1.839 5.823-3.087.973-6.184-.047-7.761-1.37zm9.645 1.258c-.144-.576-.804-3.109-1.74-5.549 2.825-.436 5.378.021 5.727.089-.508 2.29-1.938 4.218-3.987 5.46z"/>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-zinc-400 text-[11px] font-mono">
              hello@kronos.studio
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} KRONOS Studio. All rights reserved. Monochromatic Web Architecture.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

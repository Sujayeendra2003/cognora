"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const clientLogos = [
  "KINETIX AI",
  "NEXUS FINANCIAL",
  "VELOCE EV",
  "HYPERION LABS",
  "SYNAPSE OS",
  "PRISM PROTOCOL",
  "VALENCE BIOTECH",
  "QUANTUM MATRIX",
];

const testimonials = [
  {
    quote:
      "KRONOS delivered our Next.js web app in less than 3 weeks. The attention to typography, micro-interactions, and speed was beyond anything we experienced with previous agencies.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Hyperion AI",
    rating: 5,
    highlight: "340% Conversion Spike",
  },
  {
    quote:
      "The design language felt like Apple designed our platform. Clean, dark, precise, and blisteringly fast. Our Series A investors specifically praised our web design.",
    author: "Marcus Thorne",
    role: "Founder & CEO",
    company: "Nexus Labs",
    rating: 5,
    highlight: "$18M Capital Raised",
  },
  {
    quote:
      "Working with KRONOS is like hiring a fractional Design Director and Senior Staff Frontend Engineer simultaneously. Unmatched execution quality.",
    author: "Sophia Chen",
    role: "Head of Marketing",
    company: "Veloce Automotive",
    rating: 5,
    highlight: "4.8x Pre-order Growth",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
            Client Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
            TRUSTED BY VISIONARIES.
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Here is what tech leaders say about building their digital flagship with KRONOS.
          </p>
        </div>

        {/* Monochromatic Logo Marquee Strip */}
        <div className="mb-16 py-6 border-y border-zinc-900 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-12 text-zinc-600 font-mono font-bold text-sm sm:text-base tracking-widest uppercase items-center">
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <span key={index} className="hover:text-zinc-200 transition-colors cursor-default whitespace-nowrap">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-white">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {item.highlight}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 italic leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    {item.author}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">
                    {item.role}, {item.company}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs text-white">
                  {item.author.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

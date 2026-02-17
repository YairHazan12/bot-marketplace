"use client";

import { Upload, Search, Play, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Sellers Upload Their Bot",
    description:
      "Package your AI agent as a Docker container or drop a config file. Set your pricing, write a description, and publish to the marketplace in minutes.",
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(34,211,238,0.2)",
    tags: ["Docker", "Config file", "Custom pricing"],
    side: "seller",
  },
  {
    icon: Search,
    number: "02",
    title: "Buyers Browse & Discover",
    description:
      "Search by skill, category, or use case. Filter by ratings, price, and capabilities. Preview demos before you buy.",
    color: "from-blue-400 to-purple-500",
    glowColor: "rgba(59,130,246,0.2)",
    tags: ["Search & filter", "Ratings", "Demo preview"],
    side: "buyer",
  },
  {
    icon: Play,
    number: "03",
    title: "Click & Run — Instantly",
    description:
      "One click deploys your bot in a secure container. No setup, no API keys, no config. It's running in seconds. Pay per use or subscribe.",
    color: "from-purple-400 to-pink-500",
    glowColor: "rgba(139,92,246,0.2)",
    tags: ["1-click deploy", "Sandboxed", "Pay-per-use"],
    side: "both",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Simple as 1, 2, 3
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From bot upload to instant deployment — the whole flow takes minutes.
            No engineering team required.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[calc(66%-120px)] h-px bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 150}>
                  <div className="relative group h-full">
                    {/* Card */}
                    <div className="glass-card gradient-border rounded-2xl p-8 h-full hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                      style={{
                        boxShadow: `0 0 0 0 ${step.glowColor}`,
                      }}
                    >
                      {/* Number badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          style={{ boxShadow: `0 8px 24px ${step.glowColor}` }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <span className={`text-5xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 leading-none`}>
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-6">{step.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${step.color} bg-opacity-10 text-slate-300 border border-white/5`}
                            style={{ background: `linear-gradient(135deg, ${step.glowColor}, transparent)` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#0F172A] border border-slate-700 items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

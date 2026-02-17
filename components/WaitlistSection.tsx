"use client";

import { useState } from "react";
import { Rocket, Bell, Users } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import ScrollReveal from "./ScrollReveal";

interface WaitlistSectionProps {
  initialCount: number;
}

export default function WaitlistSection({ initialCount }: WaitlistSectionProps) {
  const [count, setCount] = useState(initialCount);

  const perks = [
    "First access when we launch",
    "Founder pricing — locked in for life",
    "Influence the roadmap directly",
    "Private Discord community",
  ];

  return (
    <section id="waitlist" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-8 shadow-xl shadow-cyan-500/25 animate-float">
            <Rocket className="w-8 h-8 text-white" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Bell className="w-3.5 h-3.5" />
            <span>Limited early access spots</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Be First in the Door
          </h2>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building the future of AI automation. Join the waitlist and get
            early access, founder pricing, and a seat at the table.
          </p>

          {/* Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left max-w-lg mx-auto">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2.5 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {perk}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto mb-6">
            <WaitlistForm
              size="large"
              placeholder="your@email.com"
              onSuccess={(newCount) => setCount(newCount)}
            />
          </div>

          {/* Counter */}
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <Users className="w-4 h-4 text-cyan-400" />
            <span>
              <span className="text-white font-semibold">{count}</span> people already signed up
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

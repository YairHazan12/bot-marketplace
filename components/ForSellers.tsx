"use client";

import { DollarSign, Server, BarChart3, Zap, Package, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: DollarSign,
    title: "Set Your Own Pricing",
    description:
      "Charge per run, per minute, or set monthly subscriptions. You control the economics. We take a small platform fee.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Server,
    title: "We Handle Everything",
    description:
      "Hosting, scaling, billing, and delivery — all managed. You focus on building great bots, we handle the infrastructure.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track runs, revenue, ratings, and user behavior. See which features drive engagement. (Launching soon.)",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Zap,
    title: "Instant Distribution",
    description:
      "Publish once, reach thousands of buyers instantly. No marketing budget needed — we surface your bot to the right people.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Package,
    title: "Flexible Packaging",
    description:
      "Docker containers, config files, or API wrappers. Bring your existing AI agent in whatever format works for you.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Sell to buyers worldwide. Multi-currency, multi-region support. Your bot earns while you sleep.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];

const earningStats = [
  { label: "Avg monthly earnings", value: "$2,400", sub: "top sellers" },
  { label: "Platform fee", value: "15%", sub: "industry lowest" },
  { label: "Payout frequency", value: "Weekly", sub: "auto transfer" },
];

export default function ForSellers() {
  return (
    <section id="for-sellers" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 dot-pattern opacity-25" />

      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                For Sellers
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Monetize Your
                <br />
                <span className="gradient-text">AI Expertise</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                You built the AI — we built the marketplace. Turn your bots into a
                recurring revenue stream. Thousands of buyers are waiting.
              </p>
            </ScrollReveal>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollReveal key={feature.title} delay={index * 80}>
                    <div className="flex gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200 hover:-translate-y-0.5 group">
                      <div className={`w-9 h-9 rounded-lg ${feature.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className={`w-4 h-4 ${feature.color}`} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl text-white font-semibold"
              >
                Apply as a Seller
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Stats card */}
          <ScrollReveal delay={200} className="lg:flex lg:justify-center">
            <div className="max-w-sm w-full">
              {/* Earnings card */}
              <div className="glass-card gradient-border rounded-2xl p-8 glow-cyan mb-6">
                <div className="text-center mb-8">
                  <p className="text-sm text-slate-400 mb-2">Your estimated earnings</p>
                  <div className="text-5xl font-black gradient-text-cyan mb-1">$8,200</div>
                  <p className="text-sm text-slate-500">per month · 3,400 runs</p>
                </div>

                <div className="space-y-4 mb-8">
                  {earningStats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between py-3 border-b border-slate-700/30 last:border-0">
                      <div>
                        <p className="text-sm text-slate-400">{stat.label}</p>
                        <p className="text-xs text-slate-600">{stat.sub}</p>
                      </div>
                      <span className="text-lg font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Mini chart bars */}
                <div>
                  <p className="text-xs text-slate-500 mb-3">Revenue last 7 days</p>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 65, 45, 80, 60, 90, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-500/40 to-cyan-400/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Seller quote */}
              <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl p-5">
                <p className="text-sm text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;I packaged my GPT-4 code reviewer on a weekend. It made $1,200 in the first month with zero marketing.&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                    M
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Marcus T.</p>
                    <p className="text-xs text-slate-500">ML Engineer · Top Seller</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

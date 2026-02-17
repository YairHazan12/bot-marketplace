"use client";

import {
  TrendingUp,
  Code2,
  Search,
  FileText,
  Database,
  PenTool,
  MessageCircle,
  BarChart2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const useCases = [
  {
    icon: TrendingUp,
    name: "Business Analysis Bot",
    description: "Upload financials and get deep strategic advice, KPIs, forecasts, and executive summaries in seconds.",
    tags: ["Finance", "Strategy"],
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,0.15)",
    price: "from $0.08/run",
    rating: 4.9,
    runs: "12.4k",
  },
  {
    icon: Code2,
    name: "Code Review Bot",
    description: "Paste a PR or repo link. Get a thorough review with bugs, security issues, and improvement suggestions.",
    tags: ["Dev Tools", "Security"],
    color: "from-blue-400 to-cyan-500",
    glow: "rgba(59,130,246,0.15)",
    price: "from $0.05/run",
    rating: 4.8,
    runs: "28.1k",
  },
  {
    icon: Search,
    name: "SEO Audit Bot",
    description: "Enter any URL and receive a full SEO audit — backlinks, page speed, content gaps, and ranked fixes.",
    tags: ["Marketing", "SEO"],
    color: "from-orange-400 to-rose-500",
    glow: "rgba(251,146,60,0.15)",
    price: "from $0.06/run",
    rating: 4.7,
    runs: "9.8k",
  },
  {
    icon: FileText,
    name: "Legal Document Bot",
    description: "Upload any contract and get a plain-English summary, risk flags, and clause-by-clause breakdown.",
    tags: ["Legal", "Compliance"],
    color: "from-purple-400 to-indigo-500",
    glow: "rgba(167,139,250,0.15)",
    price: "from $0.10/run",
    rating: 4.9,
    runs: "6.2k",
  },
  {
    icon: Database,
    name: "Data Cleaning Bot",
    description: "Upload any CSV or spreadsheet. Get it cleaned, normalized, and ready for analysis. Handles duplicates, nulls, and outliers.",
    tags: ["Data", "Analytics"],
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.15)",
    price: "from $0.04/run",
    rating: 4.8,
    runs: "15.7k",
  },
  {
    icon: PenTool,
    name: "Writing Coach Bot",
    description: "Paste any draft — blog post, email, report. Get professional editing with tone, clarity, and engagement improvements.",
    tags: ["Writing", "Content"],
    color: "from-pink-400 to-rose-500",
    glow: "rgba(244,114,182,0.15)",
    price: "from $0.03/run",
    rating: 4.7,
    runs: "21.3k",
  },
  {
    icon: MessageCircle,
    name: "Customer Support Bot",
    description: "Plug into your website or Slack. Handles FAQs, tickets, and escalations. Trained on your docs in minutes.",
    tags: ["Support", "Automation"],
    color: "from-teal-400 to-emerald-500",
    glow: "rgba(45,212,191,0.15)",
    price: "from $29/mo",
    rating: 4.6,
    runs: "8.9k",
  },
  {
    icon: BarChart2,
    name: "Market Research Bot",
    description: "Describe your product or market. Get competitor analysis, positioning insights, TAM estimates, and go-to-market ideas.",
    tags: ["Research", "Strategy"],
    color: "from-yellow-400 to-orange-500",
    glow: "rgba(251,191,36,0.15)",
    price: "from $0.12/run",
    rating: 4.8,
    runs: "5.4k",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.floor(rating) ? "text-yellow-400" : "text-slate-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-slate-400 ml-1">{rating}</span>
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            Use Cases
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            A Bot for Every Task
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From business analysis to code review — browse hundreds of specialized AI agents.
            Each one is purpose-built, tested, and ready to run.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <ScrollReveal key={useCase.name} delay={index * 75}>
                <div
                  className="group relative glass-card rounded-2xl p-6 h-full cursor-pointer hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover glow background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${useCase.glow}, transparent 70%)`,
                    }}
                  />

                  {/* Card shine */}
                  <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 6px 20px ${useCase.glow}` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Name */}
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                      {useCase.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {useCase.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-700/50 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                      <StarRating rating={useCase.rating} />
                      <span className="text-xs text-slate-500">{useCase.runs} runs</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xs font-semibold text-cyan-400">{useCase.price}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            + hundreds more bots across every category
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl text-white font-semibold"
          >
            Get Early Access
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

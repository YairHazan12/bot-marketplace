"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  onSuccess?: (count: number) => void;
  size?: "default" | "large";
  placeholder?: string;
}

export default function WaitlistForm({
  onSuccess,
  size = "default",
  placeholder = "Enter your email address",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok || res.status === 200) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        if (data.count && onSuccess) {
          onSuccess(data.count);
        }
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  const isLarge = size === "large";

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 ${isLarge ? "py-4" : "py-3"} px-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400`}>
        <CheckCircle className={`${isLarge ? "w-6 h-6" : "w-5 h-5"} shrink-0`} />
        <span className={`${isLarge ? "text-base" : "text-sm"} font-medium`}>{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex gap-2 ${isLarge ? "flex-col sm:flex-row" : "flex-row"}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={status === "loading"}
          className={`
            flex-1 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100
            placeholder:text-slate-500 input-glow transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed
            ${isLarge ? "px-5 py-4 text-base" : "px-4 py-3 text-sm"}
          `}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email.trim()}
          className={`
            btn-primary rounded-xl font-semibold text-white shrink-0
            flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed
            disabled:transform-none disabled:shadow-none
            ${isLarge ? "px-8 py-4 text-base" : "px-5 py-3 text-sm"}
          `}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-2 text-sm text-red-400 flex items-center gap-1.5">
          <span>⚠️</span>
          <span>{message}</span>
        </p>
      )}
    </form>
  );
}

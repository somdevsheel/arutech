"use client";

import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const heroRef = useScrollReveal();
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Free Analysis Request",
          email,
          message: `Free Business Analysis requested for: ${website}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setWebsite("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-slow" />
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">
              AI · Cloud · Web · Mobile
            </span>
          </div>

          <h1 className="animate-on-scroll delay-100 font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Build Smarter.
            <br />
            <span className="gradient-text">Grow Faster.</span>
            <br />
            Scale Further.
          </h1>

          <p className="animate-on-scroll delay-200 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Get a <strong className="text-gray-900 font-semibold">free analysis</strong> of your
            business's digital presence — we'll identify exactly where you're leaving growth on the table.
          </p>

          {/* Lead capture form */}
          {status === "success" ? (
            <div className="animate-on-scroll delay-300 max-w-xl mx-auto p-5 bg-green-50 border border-green-200 rounded-2xl">
              <div className="flex items-center justify-center gap-3 text-green-700">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-semibold text-sm">Received! We'll send your free analysis within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-on-scroll delay-300 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-0 bg-white border-2 border-gray-200 rounded-2xl p-1.5 shadow-xl shadow-orange-100/60 focus-within:border-orange-300 transition-colors">
                {/* Website input */}
                <div className="flex items-center gap-3 flex-1 px-4 py-2.5">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <input
                    type="text"
                    placeholder="yourwebsite.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                    className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                  />
                </div>
                <div className="hidden sm:block w-px bg-gray-200 my-2" />
                {/* Email input */}
                <div className="flex items-center gap-3 flex-1 px-4 py-2.5">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                  />
                </div>
                {/* CTA */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200 hover:shadow-orange-300 text-sm flex-shrink-0 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Free Analysis
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-3 text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
              )}
              <p className="mt-3 text-xs text-gray-400 text-center">
                No commitment · 100% free · Results delivered within 24 hours
              </p>
            </form>
          )}

          {/* Stats */}
          <div className="animate-on-scroll delay-400 grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-100 max-w-md mx-auto">
            {[
              { value: "50+",  label: "Projects Delivered" },
              { value: "99%",  label: "Client Satisfaction" },
              { value: "4+",   label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="animate-on-scroll delay-500 mt-12 flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium">Scroll to explore</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

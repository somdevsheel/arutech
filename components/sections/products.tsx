"use client";

import { useEffect, useRef } from "react";

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-900/40">
      <div className="absolute inset-0 line-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-5">
            <span className="text-xs font-mono text-teal-400 tracking-wide">OUR PRODUCTS</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Tools We&apos;ve{" "}
            <span className="gradient-text">Shipped</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-slate-400 text-lg leading-relaxed">
            Beyond client work, we build and launch our own products — from free utilities to full-scale social platforms.
          </p>
        </div>

        {/* Top row: Instachat (featured, wide) + Freenoo */}
        <div className="grid lg:grid-cols-5 gap-6 mb-6">

          {/* Instachat — FEATURED */}
          <div className="animate-on-scroll delay-100 lg:col-span-3 card-hover group relative rounded-2xl p-7 overflow-hidden border border-pink-500/30 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-navy-800/60">
            {/* Glow orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 border border-pink-500/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/25 rounded-full">
                  ● IN DEVELOPMENT
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold text-white mb-1">Instachat</h3>
              <p className="text-pink-300/60 text-xs font-mono mb-3 tracking-wide">by Arutech</p>

              <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-md">
                A full-featured social platform built from the ground up — real-time chat, short-form reels, photo posts, stories, and more. Everything you expect from a modern social media app, in one place.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { icon: "💬", label: "Real-time Chat" },
                  { icon: "🎬", label: "Reels" },
                  { icon: "🖼️", label: "Posts & Feed" },
                  { icon: "⭕", label: "Stories" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8"
                  >
                    <span className="text-sm">{f.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{f.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-pink-500/10 text-pink-300/60 text-sm font-medium rounded-xl border border-pink-500/15 cursor-default select-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Coming Soon
                </div>
                <span className="text-xs text-slate-600">Built with React Native + Node.js</span>
              </div>
            </div>
          </div>

          {/* Freenoo — LIVE */}
          <div className="animate-on-scroll delay-200 lg:col-span-2 card-hover group relative rounded-2xl p-7 bg-gradient-to-br from-accent-500/15 to-navy-800/60 border border-accent-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-teal-400/15 text-teal-400 border border-teal-400/30 rounded-full">
                  ● LIVE
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">Freenoo</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                A free, browser-based PDF toolkit. Merge documents, compress file sizes, and work with PDFs — no subscriptions, no sign-ups.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["PDF Merge", "PDF Compress", "No Sign-up", "Free Forever"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://freenoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:-translate-y-0.5"
              >
                Open Freenoo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: Moneto + Future AI */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Moneto AI — COMING SOON */}
          <div className="animate-on-scroll delay-300 card-hover group relative rounded-2xl p-7 bg-navy-800/40 border border-slate-700/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full">
                  COMING SOON
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">Moneto AI Terminal</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                An AI-native financial intelligence platform. Designed for individuals and teams who need clarity in complex financial data — coming soon.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Financial AI", "Terminal Interface", "Intelligence Layer"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs text-slate-500 bg-white/3 border border-white/5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 text-slate-500 text-sm font-medium rounded-xl border border-white/5 cursor-default select-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Notify Me
              </div>
            </div>
          </div>

          {/* Future AI Platform */}
          <div className="animate-on-scroll delay-400 card-hover group relative rounded-2xl p-7 bg-navy-800/30 border border-slate-700/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="rgba(45,212,191,0.2)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hex)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-slate-500/10 text-slate-500 border border-slate-600/20 rounded-full">
                  IN DEVELOPMENT
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-300 mb-2">Future AI Platform</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Something new is being built. A platform that rethinks how teams interact with AI infrastructure. Details will be shared when the time is right.
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Stay tuned
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

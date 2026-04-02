"use client";

import { useEffect, useRef } from "react";

export default function Vision() {
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
    <section id="vision" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="absolute inset-0 line-grid opacity-20" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          <span className="text-xs font-mono text-teal-400 tracking-wide">OUR VISION</span>
        </div>

        <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          Software that{" "}
          <span className="gradient-text">thinks ahead</span>
          <br />
          of the problem.
        </h2>

        <p className="animate-on-scroll delay-200 text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          We believe the best software isn't just functional — it anticipates. From the products we build in-house to the systems we create for clients, our goal is to build things that remain valuable long after they're launched.
        </p>

        {/* Vision pillars */}
        <div className="animate-on-scroll delay-300 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "◈", label: "AI-First Architecture", desc: "Embedding intelligence at the infrastructure level" },
            { icon: "◎", label: "Open Tooling", desc: "Building utilities that empower without friction" },
            { icon: "◉", label: "Long-term Craft", desc: "Quality that holds up across years, not releases" },
          ].map((p) => (
            <div key={p.label} className="p-5 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-sm">
              <div className="text-2xl text-accent-400 mb-3 font-mono">{p.icon}</div>
              <p className="font-display text-sm font-semibold text-white mb-1.5">{p.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5"
          >
            Work With Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#products"
            className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
          >
            Explore our products →
          </a>
        </div>
      </div>
    </section>
  );
}

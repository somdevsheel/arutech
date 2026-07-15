"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Vision() {
  const sectionRef = useScrollReveal();

  return (
    <section id="vision" ref={sectionRef} className="relative py-14 lg:py-20 overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />
      <div className="absolute inset-0 line-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">Our Vision</span>
        </div>

        <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          Building Unthinkable,{" "}
          <span className="gradient-text">Thinkable!</span>
        </h2>

        <p className="animate-on-scroll delay-200 text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          We help businesses transform ambitious ideas into intelligent digital products — through custom software, AI solutions, web and mobile development, workflow automation, and digital transformation.
          <span className="block mt-3">Our mission is to build scalable technology that solves today&apos;s challenges while preparing organizations for tomorrow&apos;s opportunities.</span>
        </p>

        {/* Vision pillars */}
        <div className="animate-on-scroll delay-300 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "◈", label: "AI-First Architecture", desc: "Embedding intelligence at the infrastructure level" },
            { icon: "◎", label: "Open Tooling", desc: "Building utilities that empower without friction" },
            { icon: "◉", label: "Long-term Craft", desc: "Quality that holds up across years, not releases" },
          ].map((p) => (
            <div key={p.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl text-orange-400 mb-3 font-mono">{p.icon}</div>
              <p className="font-display text-sm font-semibold text-white mb-1.5">{p.label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            Work With Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
          >
            Explore our products →
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 line-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-accent-500/8 via-transparent to-transparent" style={{ backgroundPosition: "60% 40%" }} />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-slow" />
              <span className="text-xs font-mono text-accent-400 tracking-wide">
                AI • CLOUD • WEB • MOBILE
              </span>
            </div>

            <h1 className="animate-on-scroll delay-100 font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Build Smarter.
              <br />
              <span className="gradient-text text-glow">Deploy Faster.</span>
              <br />
              Scale Further.
            </h1>

            <p className="animate-on-scroll delay-200 text-lg text-slate-400 leading-relaxed max-w-lg mb-8 font-body">
              Arutech designs and delivers high-performance software systems — from AI-powered pipelines and cloud infrastructure to production-grade web and mobile applications.
            </p>

            <div className="animate-on-scroll delay-300 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-xl border border-white/10 transition-all"
              >
                View Services
              </a>
            </div>

            {/* Stats row */}
            <div className="animate-on-scroll delay-400 grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-slate-800/60">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "4+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mock */}
          <div className="animate-on-scroll delay-200 relative flex justify-center lg:justify-end">
            <div className="animate-[float_6s_ease-in-out_infinite] w-full max-w-[560px]">
              <DashboardMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-navy-950/80 glow-blue">
      {/* Window chrome */}
      <div className="bg-navy-800/90 backdrop-blur px-4 py-3 border-b border-slate-700/50 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <div className="ml-auto flex items-center gap-2 text-xs text-slate-500 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          arutech.io/dashboard
        </div>
      </div>

      {/* Dashboard body */}
      <div className="bg-navy-900/95 p-5 space-y-4">
        {/* Top stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Active Pipelines", value: "12", change: "+3", color: "text-teal-400" },
            { label: "API Requests", value: "98.2K", change: "+12%", color: "text-accent-400" },
            { label: "Uptime", value: "99.9%", change: "30d", color: "text-green-400" },
          ].map((s) => (
            <div key={s.label} className="bg-navy-800/60 rounded-xl p-3 border border-slate-700/30">
              <p className="text-[10px] text-slate-500 mb-1">{s.label}</p>
              <p className={`font-display text-lg font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[10px] text-slate-600 mt-0.5">{s.change}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-navy-800/40 rounded-xl p-4 border border-slate-700/30">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-300">Deployment Activity</p>
            <span className="text-[10px] text-slate-500 font-mono">Last 7 days</span>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 45, 80, 55, 90, 72].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div
                  className="rounded-sm bg-gradient-to-t from-accent-600 to-accent-400 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["M","T","W","T","F","S","S"].map((d, i) => (
              <span key={i} className="flex-1 text-center text-[9px] text-slate-600">{d}</span>
            ))}
          </div>
        </div>

        {/* Pipeline list */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-400 mb-2">Active Services</p>
          {[
            { name: "ML Inference API", status: "Running", ping: "42ms", dot: "bg-teal-400" },
            { name: "Cloud Deployment CI", status: "Building", ping: "—", dot: "bg-yellow-400" },
            { name: "React Web App", status: "Live", ping: "18ms", dot: "bg-teal-400" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-navy-800/40 rounded-lg px-3 py-2.5 border border-slate-700/20"
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                <span className="text-xs text-slate-300">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500 font-mono">{item.ping}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-400">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We start with a structured consultation to understand your goals, constraints, and success criteria. No templates — just honest problem framing.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "System architecture, data flow diagrams, and UI wireframes are finalized before a single line of production code is written.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Development in focused sprints with regular check-ins. You stay informed. We stay aligned. Changes are handled — not avoided.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deploy & Maintain",
    description:
      "Production deployment with monitoring, documentation, and optional long-term support. We don't disappear after launch.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
];

export default function Process() {
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
    <section id="process" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-5">
            <span className="text-xs font-mono text-accent-400 tracking-wide">HOW WE WORK</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            A Process That{" "}
            <span className="gradient-text">Delivers</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-slate-400 text-lg leading-relaxed">
            Every project follows a structured workflow designed to minimize surprises and maximize outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`animate-on-scroll delay-${(i + 1) * 100} relative`}
              >
                {/* Step number + icon */}
                <div className="flex lg:justify-center mb-5 lg:mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-navy-800/80 border border-slate-700/50 flex items-center justify-center text-accent-400">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-500 text-white text-[10px] font-mono font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <div className="lg:text-center">
                  <div className="font-mono text-xs text-accent-400/60 mb-1">{step.number}</div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

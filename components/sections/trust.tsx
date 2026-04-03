"use client";

import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast by Design",
    description: "Performance is baked in from the start — not optimized later. Our architectures are benchmarked before they're deployed.",
    color: "text-accent-400",
    bg: "bg-accent-500/10",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Built to Scale",
    description: "Whether you're serving 100 users or 100,000, our cloud setups grow with you without requiring a full rebuild.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Production-Grade Code",
    description: "Every deliverable is documented, tested, and structured for handoff. You own the code and can maintain it independently.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dedicated Team",
    description: "Small, senior team — you work directly with the people building your product. No juniors pushed onto client work.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

const testimonials = [
  {
    // quote:
    //   "Arutech took our rough product idea and turned it into a fully deployed web application in six weeks. The code quality was a cut above what we expected.",
    // name: "Sandeep Yadav",
    // role: "Founder, DigitalNest",
    // initials: "SY",
    // color: "bg-accent-500",
  },
  {
    // quote:
    //   "Their cloud setup saved us significant overhead costs. Auto-scaling alone paid for the engagement in three months. Clear communication throughout.",
    // name: "Kamaldeep Singh",
    // role: "Founder, Shri Anandam sweets & restaurant",
    // initials: "KS",
    // color: "bg-teal-500",
  },
  {
    // quote:
    //   "We needed an ML integration under a tight deadline. They delivered on time, explained every decision, and gave us a codebase we could actually work with.",
    // name: "Arjun Patel",
    // role: "Head of Product, DataAxis",
    // initials: "AP",
    // color: "bg-violet-500",
  },
];

export default function Trust() {
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
    <section id="trust" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-5">
            <span className="text-xs font-mono text-accent-400 tracking-wide">WHY ARUTECH</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Built on{" "}
            <span className="gradient-text">Outcomes</span>
            , Not Hours
          </h2>
          <p className="animate-on-scroll delay-200 text-slate-400 text-lg leading-relaxed">
            We measure success by what you ship and what stays running — not by the size of our invoice.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover p-6 rounded-2xl bg-navy-800/40 border border-slate-700/30`}
            >
              <div className={`inline-flex p-2.5 rounded-xl ${h.bg} ${h.color} mb-4`}>
                {h.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-white mb-2">{h.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`animate-on-scroll delay-${(i + 1) * 100} p-6 rounded-2xl bg-navy-800/30 border border-slate-700/30 card-hover`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold font-display`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

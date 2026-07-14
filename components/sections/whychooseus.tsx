"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  "Custom-built solutions",
  "AI-first development approach",
  "Data-driven marketing strategies",
  "Agile project management",
  "Transparent communication",
  "Dedicated support",
  "Scalable architecture",
  "ROI-focused execution",
];

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Software Engineering",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Artificial Intelligence",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    label: "Automation",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    label: "UX Design",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    label: "Performance Marketing",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative py-14 lg:py-20 bg-gray-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 line-grid opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">Why Choose Us</span>
            </div>

            <h2 className="animate-on-scroll delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 tracking-tight">
              Trusted Technology{" "}
              <span className="gradient-text">Partner for Growth</span>
            </h2>

            <p className="animate-on-scroll delay-200 text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Our multidisciplinary team combines software engineering, artificial intelligence, automation, UX design, and performance marketing to create complete digital ecosystems that generate measurable business growth.
            </p>

            {/* Discipline pills */}
            <div className="animate-on-scroll delay-300 flex flex-wrap gap-2 mb-10">
              {pillars.map((p) => (
                <div key={p.label} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 ${p.color}`}>
                  {p.icon && <span className="w-4 h-4">{p.icon}</span>}
                  <span className="text-xs font-medium text-gray-300">{p.label}</span>
                </div>
              ))}
            </div>

            <a
              href="/"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="animate-on-scroll delay-400 inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — benefits grid */}
          <div className="animate-on-scroll delay-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit}
                  className={`animate-on-scroll delay-${(i % 4 + 1) * 100} flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all group`}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/25 transition-colors">
                    <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3 mt-6 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              {[
                { value: "21+", label: "Projects Delivered" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "3+",  label: "Years of Expertise" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-xl sm:text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

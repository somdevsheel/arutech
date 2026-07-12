"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your business goals, audience, and challenges.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy",
    description: "Develop a customized roadmap aligned with your objectives.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Create intuitive digital products using modern technologies and best practices.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "Ensure flawless performance through rigorous quality assurance and continuous optimization.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Launch & Growth",
    description: "Deploy, monitor, market, and continuously improve your digital solution.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useScrollReveal();

  return (
    <section id="process" ref={sectionRef} className="relative py-14 lg:py-20 bg-gray-50">
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Our Approach</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            A Process That{" "}
            <span className="gradient-text">Delivers</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed">
            Every project follows a structured workflow designed to minimise surprises and maximise outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className={`animate-on-scroll delay-${(i + 1) * 100} relative`}>
                {/* Icon */}
                <div className="flex lg:justify-center mb-5 lg:mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-mono font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <div className="lg:text-center">
                  <div className="font-mono text-xs text-orange-400 font-semibold mb-1">{step.number}</div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

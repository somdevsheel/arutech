"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI & Machine Learning",
    description:
      "We design and deploy custom ML pipelines tailored to your data and objectives — from model development to production integration.",
    tags: ["Model Training", "API Integration", "Data Pipelines"],
    accent: "from-accent-500/20 to-accent-500/5",
    border: "border-accent-500/20",
    iconBg: "bg-accent-500/10 text-accent-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Deployment",
    description:
      "End-to-end cloud infrastructure setup, CI/CD pipelines, auto-scaling, and monitoring for applications that need to stay online and fast.",
    tags: ["AWS / GCP / Azure", "Docker & K8s", "CI/CD Pipelines"],
    accent: "from-teal-400/20 to-teal-400/5",
    border: "border-teal-400/20",
    iconBg: "bg-teal-400/10 text-teal-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Application Development",
    description:
      "React-based web applications built with performance, accessibility, and maintainability as first principles — not afterthoughts.",
    tags: ["Next.js", "TypeScript", "REST & GraphQL"],
    accent: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native — one codebase, native performance, iOS and Android from day one.",
    tags: ["React Native", "Expo", "App Store Ready"],
    accent: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-5">
            <span className="text-xs font-mono text-accent-400 tracking-wide">WHAT WE BUILD</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Services Built for{" "}
            <span className="gradient-text">Production</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-slate-400 text-lg leading-relaxed">
            We work across the full stack — from AI model integration to mobile deployment. Each engagement is scoped for real-world performance and long-term maintainability.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover group relative rounded-2xl p-7 bg-navy-800/40 border ${service.border} backdrop-blur-sm overflow-hidden`}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl ${service.iconBg} mb-5`}>
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-white/5 border border-white/10 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

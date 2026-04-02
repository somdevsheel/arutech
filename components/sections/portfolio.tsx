"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    category: "Web App · Live",
    title: "Shri Anandam Sweets & Restaurant",
    description:
      "Full website for a premium sweets and restaurant brand — showcasing their product catalogue, restaurant menu, and brand story with a clean, inviting design.",
    tags: ["React", "Next.js", "Tailwind CSS", "Responsive"],
    gradient: "from-amber-500/20 via-amber-400/5 to-transparent",
    dotColor: "bg-amber-400",
    live: "https://www.shrianandamsweets.in/",
    highlight: true,
  },
  {
    category: "AI / ML",
    title: "Predictive Analytics Dashboard",
    description:
      "Real-time forecasting interface for an e-commerce client. ML pipeline reduces inventory waste by surfacing demand signals before they materialize.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL"],
    gradient: "from-accent-500/20 via-accent-500/5 to-transparent",
    dotColor: "bg-accent-400",
    live: null,
    highlight: false,
  },
  {
    category: "Cloud Deployment",
    title: "Multi-Tenant SaaS Infrastructure",
    description:
      "Containerized cloud setup with Kubernetes orchestration. Handles 100K+ daily requests with auto-scaling and zero-downtime deploys.",
    tags: ["AWS", "Docker", "K8s", "Terraform"],
    gradient: "from-teal-400/20 via-teal-400/5 to-transparent",
    dotColor: "bg-teal-400",
    live: null,
    highlight: false,
  },
  {
    category: "Mobile App",
    title: "Field Service Mobile Platform",
    description:
      "React Native app for field technicians — offline-capable, GPS-integrated, and synced with a central dispatch system.",
    tags: ["React Native", "Expo", "SQLite", "REST API"],
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
    dotColor: "bg-orange-400",
    live: null,
    highlight: false,
  },
];

export default function Portfolio() {
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
    <section id="portfolio" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-900/30">
      <div className="absolute inset-0 line-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-5">
              <span className="text-xs font-mono text-teal-400 tracking-wide">SELECTED WORK</span>
            </div>
            <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              Projects We&apos;re{" "}
              <span className="gradient-text">Proud Of</span>
            </h2>
            <p className="animate-on-scroll delay-200 text-slate-400 leading-relaxed">
              A selection of client engagements across industries and technology stacks.
            </p>
          </div>
          <div className="animate-on-scroll delay-300">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 font-medium transition-colors group"
            >
              Start your project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover group relative rounded-2xl overflow-hidden ${
                project.highlight
                  ? "bg-gradient-to-br from-amber-500/10 via-navy-800/60 to-navy-800/40 border border-amber-500/30"
                  : "bg-navy-800/40 border border-slate-700/30"
              }`}
            >
              {/* Preview area */}
              <div className="relative h-44 overflow-hidden bg-navy-900/60">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                {project.highlight ? (
                  /* Sweets-themed mock UI */
                  <div className="absolute inset-4 rounded-xl border border-amber-500/20 bg-navy-950/50 backdrop-blur-sm p-3 overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded bg-amber-400/40" />
                        <div className="h-1.5 w-14 bg-amber-400/30 rounded-full" />
                      </div>
                      <div className="flex gap-1.5">
                        <div className="h-1.5 w-8 bg-white/10 rounded-full" />
                        <div className="h-1.5 w-8 bg-white/10 rounded-full" />
                        <div className="h-1.5 w-8 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    <div className="h-12 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-500/15 flex items-center px-3 mb-2">
                      <div className="space-y-1">
                        <div className="h-1.5 w-20 bg-amber-400/50 rounded-full" />
                        <div className="h-1 w-14 bg-white/20 rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["bg-amber-400/20", "bg-orange-400/15", "bg-yellow-400/15"].map((bg, j) => (
                        <div key={j} className={`rounded-lg ${bg} border border-white/5 h-8 flex items-end p-1`}>
                          <div className="h-1 w-full bg-white/10 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Generic mock UI */
                  <div className="absolute inset-4 rounded-xl border border-white/5 bg-navy-950/40 backdrop-blur-sm p-3">
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className={`w-2 h-2 rounded-full ${project.dotColor}`} />
                      <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                      <div className="ml-auto h-1.5 w-8 bg-white/5 rounded-full" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-white/8 rounded w-full" />
                      <div className="h-2 bg-white/5 rounded w-4/5" />
                      <div className="h-2 bg-white/8 rounded w-3/5 mt-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[70, 45, 85].map((h, j) => (
                        <div key={j} className="rounded bg-white/5 overflow-hidden h-10 flex items-end p-1">
                          <div
                            className={`w-full rounded-sm ${project.dotColor} opacity-40`}
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 text-[10px] font-mono font-medium rounded-md border ${
                      project.highlight
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/20"
                        : "bg-navy-950/70 text-slate-400 border-white/10"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs text-slate-500 bg-white/4 border border-white/8 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/25 rounded-lg transition-all hover:-translate-y-0.5 flex-shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      View Live Site
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

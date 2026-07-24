"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md group-hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono truncate">
          {url}
        </div>
      </div>
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

function MetricsFrame({ metrics }: { metrics: { label: string; value: string }[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono">
          meta ads · campaign results
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-100/60 to-white h-36 p-3">
        <div className="grid grid-cols-2 gap-2 h-full">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white/80 rounded-lg border border-blue-100 flex flex-col items-center justify-center p-2">
              <span className="font-bold text-blue-600 text-sm leading-tight">{m.value}</span>
              <span className="text-[9px] text-gray-400 font-mono uppercase tracking-wide mt-0.5">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockFrame({ dotColor, gradient }: { dotColor: string; gradient: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono">
          client project
        </div>
      </div>
      <div className={`relative h-36 ${gradient} overflow-hidden`}>
        <div className="absolute inset-3 rounded-lg border border-white/60 bg-white/50 backdrop-blur-sm p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className={`w-2 h-2 rounded-full ${dotColor}`} />
            <div className="h-1.5 w-14 bg-gray-200 rounded-full" />
            <div className="ml-auto h-1.5 w-8 bg-gray-100 rounded-full" />
          </div>
          <div className="space-y-1.5 mb-3">
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-100 rounded w-4/5" />
            <div className="h-1.5 bg-gray-200 rounded w-3/5" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[65, 40, 80].map((h, j) => (
              <div key={j} className="rounded bg-gray-100 overflow-hidden h-8 flex items-end p-1">
                <div className={`w-full rounded-sm ${dotColor} opacity-60`} style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    category: "Web App · Delivered",
    title: "Shri Anandam Sweets & Restaurant",
    description: "A premium restaurant website with full menu showcase, image gallery, and conversion-focused CTAs — built for a pure-vegetarian Indian cuisine brand.",
    tags: ["Next.js", "Tailwind CSS", "Responsive", "SEO Optimised"],
    live: "https://www.shrianandamsweets.in/",
    screenshot: "/images/shrianandam-screenshot.png",
    screenshotUrl: "shrianandamsweets.in",
    highlight: true,
    borderClass: "border-amber-200",
    bgClass: "from-amber-50 to-white",
    badgeClass: "bg-amber-100 text-amber-700",
    dotColor: null,
    gradient: null,
  },
  {
    category: "AI / ML",
    title: "Predictive Analytics Dashboard",
    description: "Real-time forecasting for an e-commerce client. ML pipeline surfaces demand signals, reducing inventory waste significantly.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL"],
    live: null,
    screenshot: null,
    screenshotUrl: null,
    highlight: false,
    borderClass: "border-orange-200",
    bgClass: "from-orange-50 to-white",
    badgeClass: "bg-orange-100 text-orange-700",
    dotColor: "bg-orange-400",
    gradient: "bg-gradient-to-br from-orange-100/60 to-white",
  },
  {
    category: "Cloud Deployment",
    title: "Multi-Tenant SaaS Infrastructure",
    description: "Containerised cloud setup with Kubernetes. Handles 100K+ daily requests with auto-scaling and zero-downtime deploys.",
    tags: ["AWS", "Docker", "K8s", "Terraform"],
    live: null,
    screenshot: null,
    screenshotUrl: null,
    highlight: false,
    borderClass: "border-sky-200",
    bgClass: "from-sky-50 to-white",
    badgeClass: "bg-sky-100 text-sky-700",
    dotColor: "bg-sky-400",
    gradient: "bg-gradient-to-br from-sky-100/60 to-white",
  },
  {
    category: "Mobile App",
    title: "Field Service Mobile Platform",
    description: "React Native app for field technicians — offline-capable, GPS-integrated, synced with a central dispatch system.",
    tags: ["React Native", "Expo", "SQLite", "REST API"],
    live: null,
    screenshot: null,
    screenshotUrl: null,
    highlight: false,
    borderClass: "border-emerald-200",
    bgClass: "from-emerald-50 to-white",
    badgeClass: "bg-emerald-100 text-emerald-700",
    dotColor: "bg-emerald-400",
    gradient: "bg-gradient-to-br from-emerald-100/60 to-white",
  },
  {
    category: "Meta Ads · Performance Marketing",
    title: "E-Commerce Meta Ads Campaign",
    description: "Managed 4 sales campaigns delivering 1,180 purchases at just $0.15 cost per purchase — generating $61,269 in purchase conversion value from $180 ad spend.",
    tags: ["Meta Ads", "Facebook & Instagram", "Retargeting", "App Installs"],
    live: null,
    screenshot: null,
    screenshotUrl: null,
    highlight: false,
    borderClass: "border-blue-200",
    bgClass: "from-blue-50 to-white",
    badgeClass: "bg-blue-100 text-blue-700",
    dotColor: "bg-blue-400",
    gradient: "bg-gradient-to-br from-blue-100/60 to-white",
    metrics: [
      { label: "Purchases", value: "1,180" },
      { label: "Cost/Purchase", value: "$0.15" },
      { label: "Conv. Value", value: "$61K" },
      { label: "ROAS", value: "340×" },
    ],
  },
];

export default function Portfolio() {
  const sectionRef = useScrollReveal();

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-14 lg:py-20 bg-gray-50">
      <div className="absolute inset-0 line-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
              <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Selected Work</span>
            </div>
            <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Projects We&apos;re{" "}
              <span className="gradient-text">Proud Of</span>
            </h2>
            <p className="animate-on-scroll delay-200 text-gray-600 leading-relaxed">
              Real work delivered to real clients — across industries and technology stacks.
            </p>
          </div>
          <div className="animate-on-scroll delay-300">
            <a href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 font-semibold transition-colors group">
              Start your project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured: Shri Anandam */}
        <div className="animate-on-scroll delay-100 card-hover group relative rounded-2xl overflow-hidden border border-amber-200 bg-gradient-to-br from-amber-50 to-white mb-5 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full mb-5">
                ● Web App · Delivered
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Shri Anandam Sweets & Restaurant
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-sm">
                A premium restaurant website with full menu showcase, image gallery, and conversion-focused CTAs — built for a pure-vegetarian Indian cuisine brand.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "Tailwind CSS", "Responsive", "SEO Optimised"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs text-gray-500 bg-gray-100 rounded-lg">{tag}</span>
                ))}
              </div>
              <a
                href="https://www.shrianandamsweets.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-amber-100 hover:bg-amber-200 text-amber-700 border border-amber-200 rounded-xl transition-all hover:-translate-y-0.5 w-fit"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                View Live Site
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="p-6 lg:p-8 flex items-center">
              <div className="w-full">
                <BrowserFrame
                  src="/images/shrianandam-screenshot.png"
                  alt="Shri Anandam Sweets & Restaurant website"
                  url="shrianandamsweets.in"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.filter((p) => !p.highlight).map((project, i) => (
            <div
              key={project.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover group relative rounded-2xl bg-gradient-to-br ${project.bgClass} border ${project.borderClass} overflow-hidden shadow-sm hover:shadow-md transition-all`}
            >
              <div className="p-4 pb-0">
                {"metrics" in project && project.metrics
                  ? <MetricsFrame metrics={project.metrics} />
                  : <MockFrame dotColor={project.dotColor!} gradient={project.gradient!} />
                }
              </div>
              <div className="p-5">
                <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full border mb-2 ${project.badgeClass}`}>
                  {project.category}
                </span>
                <h3 className="font-display text-base font-bold text-gray-900 mb-1.5">{project.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] text-gray-500 bg-gray-100 border border-gray-200 rounded-md">{tag}</span>
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

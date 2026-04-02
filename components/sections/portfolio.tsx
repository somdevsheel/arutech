// "use client";

// import { useEffect, useRef } from "react";

// const projects = [
//   {
//     category: "Web App · Live",
//     title: "Shri Anandam Sweets & Restaurant",
//     description:
//       "Full website for a premium sweets and restaurant brand — showcasing their product catalogue, restaurant menu, and brand story with a clean, inviting design.",
//     tags: ["React", "Next.js", "Tailwind CSS", "Responsive"],
//     gradient: "from-amber-500/20 via-amber-400/5 to-transparent",
//     dotColor: "bg-amber-400",
//     live: "https://www.shrianandamsweets.in/",
//     highlight: true,
//   },
//   {
//     category: "AI / ML",
//     title: "Predictive Analytics Dashboard",
//     description:
//       "Real-time forecasting interface for an e-commerce client. ML pipeline reduces inventory waste by surfacing demand signals before they materialize.",
//     tags: ["Python", "FastAPI", "React", "PostgreSQL"],
//     gradient: "from-accent-500/20 via-accent-500/5 to-transparent",
//     dotColor: "bg-accent-400",
//     live: null,
//     highlight: false,
//   },
//   {
//     category: "Cloud Deployment",
//     title: "Multi-Tenant SaaS Infrastructure",
//     description:
//       "Containerized cloud setup with Kubernetes orchestration. Handles 100K+ daily requests with auto-scaling and zero-downtime deploys.",
//     tags: ["AWS", "Docker", "K8s", "Terraform"],
//     gradient: "from-teal-400/20 via-teal-400/5 to-transparent",
//     dotColor: "bg-teal-400",
//     live: null,
//     highlight: false,
//   },
//   {
//     category: "Mobile App",
//     title: "Field Service Mobile Platform",
//     description:
//       "React Native app for field technicians — offline-capable, GPS-integrated, and synced with a central dispatch system.",
//     tags: ["React Native", "Expo", "SQLite", "REST API"],
//     gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
//     dotColor: "bg-orange-400",
//     live: null,
//     highlight: false,
//   },
// ];

// export default function Portfolio() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
//       { threshold: 0.1 }
//     );
//     sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="portfolio" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-900/30">
//       <div className="absolute inset-0 line-grid opacity-20" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
//           <div className="max-w-xl">
//             <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-5">
//               <span className="text-xs font-mono text-teal-400 tracking-wide">SELECTED WORK</span>
//             </div>
//             <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
//               Projects We&apos;re{" "}
//               <span className="gradient-text">Proud Of</span>
//             </h2>
//             <p className="animate-on-scroll delay-200 text-slate-400 leading-relaxed">
//               A selection of client engagements across industries and technology stacks.
//             </p>
//           </div>
//           <div className="animate-on-scroll delay-300">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 font-medium transition-colors group"
//             >
//               Start your project
//               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Project grid */}
//         <div className="grid md:grid-cols-2 gap-5">
//           {projects.map((project, i) => (
//             <div
//               key={project.title}
//               className={`animate-on-scroll delay-${(i + 1) * 100} card-hover group relative rounded-2xl overflow-hidden ${
//                 project.highlight
//                   ? "bg-gradient-to-br from-amber-500/10 via-navy-800/60 to-navy-800/40 border border-amber-500/30"
//                   : "bg-navy-800/40 border border-slate-700/30"
//               }`}
//             >
//               {/* Preview area */}
//               <div className="relative h-44 overflow-hidden bg-navy-900/60">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

//                 {project.highlight ? (
//                   /* Sweets-themed mock UI */
//                   <div className="absolute inset-4 rounded-xl border border-amber-500/20 bg-navy-950/50 backdrop-blur-sm p-3 overflow-hidden">
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center gap-1.5">
//                         <div className="w-4 h-4 rounded bg-amber-400/40" />
//                         <div className="h-1.5 w-14 bg-amber-400/30 rounded-full" />
//                       </div>
//                       <div className="flex gap-1.5">
//                         <div className="h-1.5 w-8 bg-white/10 rounded-full" />
//                         <div className="h-1.5 w-8 bg-white/10 rounded-full" />
//                         <div className="h-1.5 w-8 bg-white/10 rounded-full" />
//                       </div>
//                     </div>
//                     <div className="h-12 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-500/15 flex items-center px-3 mb-2">
//                       <div className="space-y-1">
//                         <div className="h-1.5 w-20 bg-amber-400/50 rounded-full" />
//                         <div className="h-1 w-14 bg-white/20 rounded-full" />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-3 gap-1.5">
//                       {["bg-amber-400/20", "bg-orange-400/15", "bg-yellow-400/15"].map((bg, j) => (
//                         <div key={j} className={`rounded-lg ${bg} border border-white/5 h-8 flex items-end p-1`}>
//                           <div className="h-1 w-full bg-white/10 rounded-full" />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   /* Generic mock UI */
//                   <div className="absolute inset-4 rounded-xl border border-white/5 bg-navy-950/40 backdrop-blur-sm p-3">
//                     <div className="flex items-center gap-1.5 mb-3">
//                       <div className={`w-2 h-2 rounded-full ${project.dotColor}`} />
//                       <div className="h-1.5 w-16 bg-white/10 rounded-full" />
//                       <div className="ml-auto h-1.5 w-8 bg-white/5 rounded-full" />
//                     </div>
//                     <div className="space-y-1.5">
//                       <div className="h-2 bg-white/8 rounded w-full" />
//                       <div className="h-2 bg-white/5 rounded w-4/5" />
//                       <div className="h-2 bg-white/8 rounded w-3/5 mt-2" />
//                     </div>
//                     <div className="grid grid-cols-3 gap-2 mt-4">
//                       {[70, 45, 85].map((h, j) => (
//                         <div key={j} className="rounded bg-white/5 overflow-hidden h-10 flex items-end p-1">
//                           <div
//                             className={`w-full rounded-sm ${project.dotColor} opacity-40`}
//                             style={{ height: `${h}%` }}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Category badge */}
//                 <div className="absolute top-3 right-3">
//                   <span
//                     className={`px-2 py-1 text-[10px] font-mono font-medium rounded-md border ${
//                       project.highlight
//                         ? "bg-amber-500/20 text-amber-300 border-amber-500/20"
//                         : "bg-navy-950/70 text-slate-400 border-white/10"
//                     }`}
//                   >
//                     {project.category}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="font-display text-lg font-semibold text-white mb-2">{project.title}</h3>
//                 <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

//                 <div className="flex flex-wrap items-center justify-between gap-3">
//                   <div className="flex flex-wrap gap-1.5">
//                     {project.tags.map((tag) => (
//                       <span key={tag} className="px-2.5 py-1 text-xs text-slate-500 bg-white/4 border border-white/8 rounded-lg">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/25 rounded-lg transition-all hover:-translate-y-0.5 flex-shrink-0"
//                     >
//                       <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
//                       View Live Site
//                       <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                       </svg>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ─── Browser Frame ─────────────────────────────────────────── */
function BrowserFrame({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl group-hover:shadow-2xl transition-shadow">
      <div className="flex items-center gap-2 px-3 py-2 bg-navy-950/90 border-b border-white/8">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[10px] text-slate-500 font-mono truncate">
          {url}
        </div>
      </div>
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-950">
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

/* ─── Placeholder frame for non-screenshot cards ─────────────── */
function MockFrame({
  dotColor,
  gradient,
}: {
  dotColor: string;
  gradient: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/8">
      <div className="flex items-center gap-2 px-3 py-2 bg-navy-950/80 border-b border-white/8">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <span className="w-2 h-2 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[10px] text-slate-600 font-mono">
          client project
        </div>
      </div>
      <div className={`relative h-36 ${gradient} overflow-hidden`}>
        <div className="absolute inset-3 rounded-lg border border-white/5 bg-navy-950/40 backdrop-blur-sm p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className={`w-2 h-2 rounded-full ${dotColor}`} />
            <div className="h-1.5 w-14 bg-white/10 rounded-full" />
            <div className="ml-auto h-1.5 w-8 bg-white/5 rounded-full" />
          </div>
          <div className="space-y-1.5 mb-3">
            <div className="h-1.5 bg-white/8 rounded w-full" />
            <div className="h-1.5 bg-white/5 rounded w-4/5" />
            <div className="h-1.5 bg-white/6 rounded w-3/5" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[65, 40, 80].map((h, j) => (
              <div key={j} className="rounded bg-white/5 overflow-hidden h-8 flex items-end p-1">
                <div className={`w-full rounded-sm ${dotColor} opacity-40`} style={{ height: `${h}%` }} />
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
    description:
      "A premium restaurant website with full menu showcase, gallery, and call-to-action flows. Built for a pure-vegetarian brand serving authentic Indian cuisine.",
    tags: ["Next.js", "Tailwind CSS", "Responsive", "SEO Optimised"],
    live: "https://www.shrianandamsweets.in/",
    screenshot: "/images/shrianandam-screenshot.png",
    screenshotUrl: "shrianandamsweets.in",
    highlight: true,
    borderClass: "border-amber-500/30",
    bgClass: "from-amber-500/10 via-navy-800/60 to-navy-800/40",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/25",
    liveClass: "bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/25",
    dotColor: null,
    gradient: null,
  },
  {
    category: "AI / ML",
    title: "Predictive Analytics Dashboard",
    description:
      "Real-time forecasting interface for an e-commerce client. ML pipeline surfaces demand signals before they materialize, reducing inventory waste significantly.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL"],
    live: null,
    screenshot: null,
    screenshotUrl: null,
    highlight: false,
    borderClass: "border-slate-700/30",
    bgClass: "from-navy-800/40 to-navy-800/30",
    badgeClass: "bg-navy-950/70 text-slate-400 border-white/10",
    liveClass: null,
    dotColor: "bg-accent-400",
    gradient: "bg-gradient-to-br from-accent-500/15 to-navy-900/60",
  },
  {
    category: "Cloud Deployment",
    title: "Multi-Tenant SaaS Infrastructure",
    description:
      "Containerised cloud setup with Kubernetes orchestration. Handles 100K+ daily requests with auto-scaling and zero-downtime deploys.",
    tags: ["AWS", "Docker", "K8s", "Terraform"],
    live: null,
    screenshot: null,
    screenshotUrl: null,
    highlight: false,
    borderClass: "border-slate-700/30",
    bgClass: "from-navy-800/40 to-navy-800/30",
    badgeClass: "bg-navy-950/70 text-slate-400 border-white/10",
    liveClass: null,
    dotColor: "bg-teal-400",
    gradient: "bg-gradient-to-br from-teal-400/15 to-navy-900/60",
  },
  {
    category: "Mobile App",
    title: "Field Service Mobile Platform",
    description:
      "React Native app for field technicians — offline-capable, GPS-integrated, and synced with a central dispatch system in real time.",
    tags: ["React Native", "Expo", "SQLite", "REST API"],
    live: null,
    screenshot: null,
    screenshotUrl: null,
    highlight: false,
    borderClass: "border-slate-700/30",
    bgClass: "from-navy-800/40 to-navy-800/30",
    badgeClass: "bg-navy-950/70 text-slate-400 border-white/10",
    liveClass: null,
    dotColor: "bg-orange-400",
    gradient: "bg-gradient-to-br from-orange-500/15 to-navy-900/60",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy-900/30"
    >
      <div className="absolute inset-0 line-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-5">
              <span className="text-xs font-mono text-teal-400 tracking-wide">
                SELECTED WORK
              </span>
            </div>
            <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              Projects We&apos;re{" "}
              <span className="gradient-text">Proud Of</span>
            </h2>
            <p className="animate-on-scroll delay-200 text-slate-400 leading-relaxed">
              Real work delivered to real clients — across industries and
              technology stacks.
            </p>
          </div>
          <div className="animate-on-scroll delay-300">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 font-medium transition-colors group"
            >
              Start your project
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Featured: Shri Anandam (full-width) ── */}
        <div className="animate-on-scroll delay-100 card-hover group relative rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-navy-800/60 to-navy-800/40 mb-5">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-5">
                <span className="px-2.5 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/25 rounded-full">
                  ● Web App · Delivered
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                Shri Anandam Sweets & Restaurant
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
                A premium restaurant website with full menu showcase, image
                gallery, and conversion-focused CTAs — built for a
                pure-vegetarian Indian cuisine brand established in 2026.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "Tailwind CSS", "Responsive", "SEO Optimised"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://www.shrianandamsweets.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/25 rounded-xl transition-all hover:-translate-y-0.5 w-fit"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                View Live Site
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Screenshot */}
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

        {/* ── Other projects grid ── */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects
            .filter((p) => !p.highlight)
            .map((project, i) => (
              <div
                key={project.title}
                className={`animate-on-scroll delay-${(i + 1) * 100} card-hover group relative rounded-2xl bg-gradient-to-br ${project.bgClass} border ${project.borderClass} overflow-hidden`}
              >
                {/* Preview */}
                <div className="p-4 pb-0">
                  <MockFrame
                    dotColor={project.dotColor!}
                    gradient={project.gradient!}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-mono rounded-md border mb-2 ${project.badgeClass}`}>
                    {project.category}
                  </span>
                  <h3 className="font-display text-base font-semibold text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] text-slate-500 bg-white/4 border border-white/8 rounded-md"
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
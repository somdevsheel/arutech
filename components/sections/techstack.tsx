"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stackCategories = [
  {
    label: "Frontend",
    color: "bg-violet-50 border-violet-100",
    items: [
      { name: "React",       icon: "⚛️" },
      { name: "Next.js",     icon: "▲" },
      { name: "TypeScript",  icon: "TS" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
  },
  {
    label: "Backend",
    color: "bg-sky-50 border-sky-100",
    items: [
      { name: "Node.js",     icon: "🟢" },
      { name: "Python",      icon: "🐍" },
      { name: "FastAPI",     icon: "⚡" },
      { name: "GraphQL",     icon: "◈" },
    ],
  },
  {
    label: "Database",
    color: "bg-emerald-50 border-emerald-100",
    items: [
      { name: "MongoDB",     icon: "🍃" },
      { name: "PostgreSQL",  icon: "🐘" },
      { name: "Redis",       icon: "🔴" },
      { name: "Supabase",    icon: "⚡" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "bg-amber-50 border-amber-100",
    items: [
      { name: "AWS",         icon: "☁️" },
      { name: "GCP",         icon: "🌐" },
      { name: "Docker",      icon: "🐳" },
      { name: "Kubernetes",  icon: "⎈" },
    ],
  },
  {
    label: "AI & ML",
    color: "bg-orange-50 border-orange-100",
    items: [
      { name: "TensorFlow",  icon: "🧠" },
      { name: "PyTorch",     icon: "🔥" },
      { name: "OpenAI API",  icon: "🤖" },
      { name: "LangChain",   icon: "🔗" },
    ],
  },
  {
    label: "Mobile",
    color: "bg-rose-50 border-rose-100",
    items: [
      { name: "React Native", icon: "📱" },
      { name: "Expo",         icon: "🚀" },
      { name: "Android",      icon: "🤖" },
      { name: "Play Store",   icon: "▶️" },
    ],
  },
];

export default function TechStack() {
  const sectionRef = useScrollReveal();

  return (
    <section id="tech-stack" ref={sectionRef} className="relative py-14 lg:py-20 bg-white">
      <div className="absolute inset-0 line-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Technology Stack</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Tools We{" "}
            <span className="gradient-text">Build With</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed">
            Production-grade technologies chosen for performance, reliability, and long-term maintainability.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, i) => (
            <div
              key={cat.label}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover rounded-2xl border ${cat.color} p-6`}
            >
              <h3 className="font-display text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-white rounded-xl px-3 py-2.5 border border-gray-100 shadow-sm"
                  >
                    <span className="text-lg w-6 text-center flex-shrink-0 font-mono">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="animate-on-scroll delay-400 text-center text-sm text-gray-500 mt-10">
          Not seeing your stack? We adapt to your existing infrastructure.{" "}
          <a href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="text-orange-500 font-semibold hover:underline">
            Let's talk →
          </a>
        </p>
      </div>
    </section>
  );
}

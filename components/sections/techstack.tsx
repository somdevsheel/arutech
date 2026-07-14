"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const techCategories = [
  {
    label: "Frontend",
    color: "bg-violet-50 border-violet-100",
    labelColor: "text-violet-600",
    items: [
      { name: "React",        icon: "⚛️" },
      { name: "Next.js",      icon: "▲" },
      { name: "TypeScript",   icon: "TS" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
  },
  {
    label: "Backend",
    color: "bg-sky-50 border-sky-100",
    labelColor: "text-sky-600",
    items: [
      { name: "Node.js",   icon: "🟢" },
      { name: "Python",    icon: "🐍" },
      { name: "FastAPI",   icon: "⚡" },
      { name: "GraphQL",   icon: "◈" },
    ],
  },
  {
    label: "Database",
    color: "bg-emerald-50 border-emerald-100",
    labelColor: "text-emerald-600",
    items: [
      { name: "MongoDB",    icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis",      icon: "🔴" },
      { name: "Supabase",   icon: "⚡" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "bg-amber-50 border-amber-100",
    labelColor: "text-amber-600",
    items: [
      { name: "AWS",        icon: "☁️" },
      { name: "GCP",        icon: "🌐" },
      { name: "Docker",     icon: "🐳" },
      { name: "Kubernetes", icon: "⎈" },
    ],
  },
  {
    label: "AI & ML",
    color: "bg-orange-50 border-orange-100",
    labelColor: "text-orange-600",
    items: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch",    icon: "🔥" },
      { name: "OpenAI API", icon: "🤖" },
      { name: "LangChain",  icon: "🔗" },
    ],
  },
  {
    label: "Mobile",
    color: "bg-rose-50 border-rose-100",
    labelColor: "text-rose-600",
    items: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter",      icon: "💙" },
      { name: "Android",      icon: "🤖" },
      { name: "Expo",         icon: "🚀" },
    ],
  },
];

const dmCategories = [
  {
    label: "Paid Advertising",
    color: "bg-orange-50 border-orange-100",
    labelColor: "text-orange-600",
    items: [
      { name: "Google Ads",   icon: "🎯" },
      { name: "Meta Ads",     icon: "📘" },
      { name: "YouTube Ads",  icon: "▶️" },
      { name: "LinkedIn Ads", icon: "💼" },
    ],
  },
  {
    label: "SEO & Content",
    color: "bg-emerald-50 border-emerald-100",
    labelColor: "text-emerald-600",
    items: [
      { name: "Ahrefs",        icon: "📊" },
      { name: "SEMrush",       icon: "🔍" },
      { name: "Screaming Frog", icon: "🐸" },
      { name: "Google Search Console", icon: "🔎" },
    ],
  },
  {
    label: "Analytics",
    color: "bg-sky-50 border-sky-100",
    labelColor: "text-sky-600",
    items: [
      { name: "Google Analytics", icon: "📈" },
      { name: "GA4",              icon: "📉" },
      { name: "Hotjar",           icon: "🔥" },
      { name: "Looker Studio",    icon: "📋" },
    ],
  },
  {
    label: "Social Media",
    color: "bg-violet-50 border-violet-100",
    labelColor: "text-violet-600",
    items: [
      { name: "Instagram",  icon: "📸" },
      { name: "Facebook",   icon: "👍" },
      { name: "LinkedIn",   icon: "🔗" },
      { name: "X / Twitter", icon: "🐦" },
    ],
  },
  {
    label: "Email & CRM",
    color: "bg-rose-50 border-rose-100",
    labelColor: "text-rose-600",
    items: [
      { name: "Mailchimp",    icon: "🐒" },
      { name: "HubSpot",      icon: "🟠" },
      { name: "Klaviyo",      icon: "📧" },
      { name: "ActiveCampaign", icon: "⚡" },
    ],
  },
  {
    label: "Automation",
    color: "bg-amber-50 border-amber-100",
    labelColor: "text-amber-600",
    items: [
      { name: "n8n",     icon: "⚙️" },
      { name: "Zapier",  icon: "⚡" },
      { name: "Make",    icon: "🔄" },
      { name: "Buffer",  icon: "📅" },
    ],
  },
];

function StackSection({
  badge,
  title,
  highlight,
  subtitle,
  categories,
  bg,
  note,
}: {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  categories: typeof techCategories;
  bg: string;
  note?: React.ReactNode;
}) {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className={`relative py-14 lg:py-20 ${bg} overflow-hidden`}>
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">{badge}</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {title}{" "}
            <span className="gradient-text">{highlight}</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-base sm:text-lg leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`animate-on-scroll delay-${(i + 1) * 100} rounded-2xl border ${cat.color} p-5`}
            >
              <h3 className={`font-display text-xs font-bold uppercase tracking-widest mb-4 ${cat.labelColor}`}>
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {cat.items.map((item, j) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 border border-gray-100 shadow-sm"
                    style={{
                      animation: `popIn 0.4s ease both`,
                      animationDelay: `${(i * 4 + j) * 60 + 300}ms`,
                    }}
                  >
                    <span className="text-base w-5 text-center flex-shrink-0 font-mono">{item.icon}</span>
                    <span className="text-xs font-medium text-gray-700 leading-tight">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {note && (
          <p className="animate-on-scroll delay-400 text-center text-sm text-gray-500 mt-8">{note}</p>
        )}
      </div>

      <style jsx>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default function TechStack() {
  return (
    <>
      <StackSection
        badge="Tools & Technology"
        title="Tools We"
        highlight="Build With"
        subtitle="Production-grade technologies chosen for performance, reliability, and long-term maintainability."
        categories={techCategories}
        bg="bg-white"
        note={
          <>
            Not seeing your stack? We adapt to your existing infrastructure.{" "}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="text-orange-500 font-semibold hover:underline"
            >
              Let&apos;s talk →
            </a>
          </>
        }
      />
      <StackSection
        badge="Digital Marketing"
        title="Platforms We"
        highlight="Market On"
        subtitle="Data-driven tools and platforms we use to grow your brand, generate leads, and maximise ROI."
        categories={dmCategories}
        bg="bg-gray-50"
      />
    </>
  );
}

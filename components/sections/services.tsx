"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI & Machine Learning",
    description: "Custom ML pipelines, model training, and production-ready AI integration tailored to your business data and objectives.",
    tags: ["Model Training", "API Integration", "Data Pipelines"],
    cta: "Explore AI Solutions",
    color: "text-orange-500",
    bg: "bg-orange-50",
    hoverBorder: "hover:border-orange-200",
    hoverShadow: "hover:shadow-orange-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Deployment",
    description: "End-to-end cloud infrastructure, CI/CD pipelines, auto-scaling, and 24/7 monitoring for applications that need to stay fast.",
    tags: ["AWS / GCP / Azure", "Docker & K8s", "CI/CD"],
    cta: "Get Cloud Quote",
    color: "text-sky-500",
    bg: "bg-sky-50",
    hoverBorder: "hover:border-sky-200",
    hoverShadow: "hover:shadow-sky-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web App Development",
    description: "React-based web applications built with performance, accessibility, and maintainability as first principles — not afterthoughts.",
    tags: ["Next.js", "TypeScript", "REST & GraphQL"],
    cta: "Build My Website",
    color: "text-violet-500",
    bg: "bg-violet-50",
    hoverBorder: "hover:border-violet-200",
    hoverShadow: "hover:shadow-violet-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Cross-platform Android & iOS apps using React Native — one codebase, native performance, shipped to both stores.",
    tags: ["React Native", "Expo", "Play Store Ready"],
    cta: "Build My App",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-200",
    hoverShadow: "hover:shadow-emerald-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Digital Marketing",
    description: "SEO, paid ads, content strategy, and conversion optimisation to grow your organic traffic and turn visitors into clients.",
    tags: ["SEO", "Google Ads", "Analytics"],
    cta: "Grow My Traffic",
    color: "text-rose-500",
    bg: "bg-rose-50",
    hoverBorder: "hover:border-rose-200",
    hoverShadow: "hover:shadow-rose-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Business Analytics",
    description: "Dashboards, data pipelines, and reporting tools that turn your raw business data into actionable insights you can act on today.",
    tags: ["Dashboards", "Data Pipelines", "KPI Reporting"],
    cta: "Analyse My Business",
    color: "text-amber-500",
    bg: "bg-amber-50",
    hoverBorder: "hover:border-amber-200",
    hoverShadow: "hover:shadow-amber-50",
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 bg-gray-50">
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Who We Can Help</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Services Built for{" "}
            <span className="gradient-text">Results</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed">
            We work across the full digital stack. Every engagement is scoped for real-world outcomes and long-term growth.
          </p>
        </div>

        {/* 3×2 service card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover group bg-white rounded-2xl p-7 border border-gray-100 ${service.hoverBorder} shadow-sm hover:shadow-lg ${service.hoverShadow} transition-all`}
            >
              <div className={`inline-flex p-3 rounded-xl ${service.bg} ${service.color} mb-5`}>
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.color} hover:underline transition-all group-hover:gap-2.5`}
              >
                {service.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Featured CTA banner */}
        <div className="animate-on-scroll delay-400 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-10 lg:p-14 text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
            Get Your Free Business Analysis
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us your website — we'll identify your biggest growth opportunities and deliver a custom plan, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-md"
            >
              Get Free Analysis
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/30 transition-all"
            >
              Customise Your Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

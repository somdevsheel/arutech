"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: "Pay Per Click / Google Ads",
    description: "ROI-focused Google Ads campaigns — from keyword research and ad copy to bid strategy and conversion tracking that drives real results.",
    tags: ["Google Ads", "Search Campaigns", "Conversion Tracking"],
    cta: "Launch My Ads",
    color: "text-orange-500",
    bg: "bg-orange-50",
    hoverBorder: "hover:border-orange-200",
    hoverShadow: "hover:shadow-orange-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Social Media Marketing",
    description: "Strategic content, paid social campaigns, and community management across Instagram, Facebook, LinkedIn, and more to grow your brand.",
    tags: ["Meta Ads", "Content Strategy", "Engagement"],
    cta: "Grow My Social",
    color: "text-sky-500",
    bg: "bg-sky-50",
    hoverBorder: "hover:border-sky-200",
    hoverShadow: "hover:shadow-sky-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Digital Marketing",
    description: "End-to-end digital strategy covering SEO, email marketing, analytics, and content that compounds over time to grow organic reach.",
    tags: ["SEO", "Email Marketing", "Analytics"],
    cta: "Grow My Traffic",
    color: "text-rose-500",
    bg: "bg-rose-50",
    hoverBorder: "hover:border-rose-200",
    hoverShadow: "hover:shadow-rose-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Design & Development",
    description: "Conversion-optimised websites and web apps — designed for brand impact and built on modern tech for speed, SEO, and scalability.",
    tags: ["Next.js", "UI/UX Design", "SEO-Ready"],
    cta: "Build My Website",
    color: "text-violet-500",
    bg: "bg-violet-50",
    hoverBorder: "hover:border-violet-200",
    hoverShadow: "hover:shadow-violet-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "AI Automation & Workflows",
    description: "Automate repetitive tasks, connect your tools, and build intelligent workflows that save hours every week and reduce human error.",
    tags: ["n8n / Zapier", "API Integrations", "Process Automation"],
    cta: "Automate My Business",
    color: "text-amber-500",
    bg: "bg-amber-50",
    hoverBorder: "hover:border-amber-200",
    hoverShadow: "hover:shadow-amber-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "App Development",
    description: "Cross-platform Android & iOS apps using React Native — one codebase, native performance, shipped to both stores.",
    tags: ["React Native", "Android & iOS", "Play Store Ready"],
    cta: "Build My App",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-200",
    hoverShadow: "hover:shadow-emerald-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Gen AI",
    description: "Build custom AI-powered products — chatbots, content generators, intelligent search, and LLM integrations tailored to your business.",
    tags: ["LLM Integration", "RAG & Embeddings", "Custom AI Agents"],
    cta: "Explore Gen AI",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-200",
    hoverShadow: "hover:shadow-indigo-50",
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

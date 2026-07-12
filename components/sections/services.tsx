"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Develop powerful Android, iOS, Flutter, and React Native applications focused on your business objectives. We build intuitive, scalable, and secure mobile experiences that drive engagement and long-term growth.",
    tags: ["Android & iOS", "Flutter", "React Native"],
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
    title: "AI & Generative AI Development",
    description: "Leverage the power of Generative AI, AI Agents, Chatbots, Retrieval-Augmented Generation (RAG), and custom LLM solutions to automate operations, enhance customer experiences, and unlock smarter business decisions.",
    tags: ["LLM & RAG", "AI Agents", "Custom Chatbots"],
    cta: "Explore Gen AI",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-200",
    hoverShadow: "hover:shadow-indigo-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Automation & Workflow Solutions",
    description: "Automate repetitive processes with intelligent workflows using n8n, Zapier, APIs, CRM integrations, and AI-powered business automation that improves productivity while reducing operational costs.",
    tags: ["n8n / Zapier", "CRM Integrations", "AI Automation"],
    cta: "Automate My Business",
    color: "text-amber-500",
    bg: "bg-amber-50",
    hoverBorder: "hover:border-amber-200",
    hoverShadow: "hover:shadow-amber-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Website Design & Development",
    description: "Create fast, SEO-friendly websites with modern UI/UX and responsive design. From business websites to enterprise platforms, we develop digital experiences that convert visitors into customers.",
    tags: ["UI/UX Design", "SEO-Ready", "Responsive"],
    cta: "Build My Website",
    color: "text-violet-500",
    bg: "bg-violet-50",
    hoverBorder: "hover:border-violet-200",
    hoverShadow: "hover:shadow-violet-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: "Google Ads & PPC Management",
    description: "Maximize every advertising dollar with expertly managed Google Ads campaigns, conversion tracking, search advertising, display campaigns, and performance-focused PPC strategies.",
    tags: ["Google Ads", "Search & Display", "Conversion Tracking"],
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
    description: "Build meaningful customer relationships through strategic content creation, community management, paid advertising, and platform-specific campaigns across Facebook, Instagram, LinkedIn, and more.",
    tags: ["Meta Ads", "Content Creation", "Community Management"],
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
    title: "Digital Marketing & SEO",
    description: "Increase visibility, generate qualified leads, and grow your online presence through consumer focused SEO, content marketing, local SEO, technical optimization, and integrated digital marketing strategies.",
    tags: ["SEO & Local SEO", "Content Marketing", "Lead Generation"],
    cta: "Grow My Traffic",
    color: "text-rose-500",
    bg: "bg-rose-50",
    hoverBorder: "hover:border-rose-200",
    hoverShadow: "hover:shadow-rose-50",
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" ref={sectionRef} className="relative py-14 lg:py-20 bg-gray-50">
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Who We Can Help</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Build Smarter Digital Experiences with{" "}
            <span className="gradient-text">AI, Apps & Performance Marketing</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed">
            <strong className="text-gray-800">Let&apos;s Build Your Next Big Idea!</strong> Transform your ideas into scalable digital solutions with a team that combines cutting-edge technology and data-driven marketing. From custom mobile applications and AI-powered automation to high-converting websites, Google Ads, SEO, and social media marketing, we help businesses launch, grow, and outperform the competition.
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
            Ready to Build, Automate &amp; Grow?
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a custom mobile application, an AI-powered business solution, a high-performing website, or a marketing strategy that delivers measurable ROI, our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-md"
            >
              Let&apos;s Build it Together!
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

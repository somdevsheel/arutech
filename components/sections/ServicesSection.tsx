"use client";
import Link from "next/link";
import { Code2, Globe, Smartphone, Cloud, Brain, ArrowRight, ExternalLink } from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Software & Platform Development",
    description: "End-to-end custom software engineering - scalable backends, robust APIs, and product platforms designed to grow with your business.",
    tags: ["APIs", "Microservices", "SaaS Platforms", "System Design"],
    href: "/services#software",
    accentColor: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Globe,
    number: "02",
    title: "Web Application Development",
    description: "Performant, accessible web apps with React and Next.js. From MVPs to enterprise portals - beautiful and fast.",
    tags: ["React", "Next.js", "PWA", "E-commerce"],
    href: "/services#web",
    accentColor: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50 dark:bg-violet-950/20",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Mobile Application Development",
    description: "Cross-platform mobile experiences for iOS and Android using React Native - native quality, efficient delivery.",
    tags: ["React Native", "iOS", "Android", "Offline-first"],
    href: "/services#mobile",
    accentColor: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50 dark:bg-emerald-950/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Cloud,
    number: "04",
    title: "Cloud Solutions & Infrastructure",
    description: "AWS-powered cloud architecture with DevOps pipelines, containerization, and IaC for reliable, scalable deployments.",
    tags: ["AWS", "Docker", "CI/CD", "Terraform"],
    href: "/services#cloud",
    accentColor: "from-sky-500 to-sky-600",
    lightBg: "bg-sky-50 dark:bg-sky-950/20",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: Brain,
    number: "05",
    title: "Artificial Intelligence & ML",
    description: "Practical AI - LLM integrations, RAG systems, and custom ML models that bring real intelligence to your products.",
    tags: ["LLMs", "RAG", "NLP", "Computer Vision"],
    href: "/services#ai",
    accentColor: "from-orange-500 to-orange-600",
    lightBg: "bg-orange-50 dark:bg-orange-950/20",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

type Service = typeof services[0];

function FeaturedCard({ svc }: { svc: Service }) {
  const Icon = svc.icon;
  return (
    <div className="lg:col-span-5 card-enterprise p-8 group relative overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${svc.accentColor}`} />
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-gray-300 dark:text-gray-600">{svc.number}</span>
        <div className={`w-12 h-12 rounded-2xl ${svc.lightBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 ${svc.iconColor}`} />
        </div>
      </div>
      <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3 leading-tight">
        {svc.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
        {svc.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {svc.tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <Link
        href={svc.href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 group/link"
      >
        Learn more{" "}
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

function SmallCard({ svc }: { svc: Service }) {
  const Icon = svc.icon;
  return (
    <div className="card-enterprise p-6 group relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${svc.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}
      />
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-gray-300 dark:text-gray-600">{svc.number}</span>
        <div className={`w-10 h-10 rounded-xl ${svc.lightBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className={`w-5 h-5 ${svc.iconColor}`} />
        </div>
      </div>
      <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2 leading-tight">
        {svc.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
        {svc.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {svc.tags.slice(0, 2).map((t) => (
          <span
            key={t}
            className="text-[11px] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-400 px-2 py-0.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <Link
        href={svc.href}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 group/link"
      >
        Explore{" "}
        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

export function ServicesSection() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px] pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label mb-4 inline-flex">Our Capabilities</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight">
              What We
              <br />
              <span className="text-gradient-brand">Build For You</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs text-sm leading-relaxed">
            Comprehensive technology services designed to accelerate your vision - from concept to production.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <FeaturedCard svc={featured} />
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.map((svc) => (
              <SmallCard key={svc.title} svc={svc} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/40">
          <div>
            <p className="font-display font-semibold text-gray-900 dark:text-white">
              Have a unique project in mind?
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              We love solving complex engineering challenges.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 btn-primary text-sm"
          >
            Discuss Project <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

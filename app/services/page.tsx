import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Globe, Smartphone, Cloud, Brain, CheckCircle, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive technology services from Arutech: software development, web & mobile apps, cloud solutions, and AI/ML.",
};

const services = [
  {
    id: "software",
    icon: Code2,
    number: "01",
    title: "Software & Platform Development",
    subtitle: "Custom software engineering, from idea to production.",
    description: "We design and build full-stack software systems  -  robust backends, clean APIs, and scalable platform architecture. Whether it is a greenfield SaaS product or a complex enterprise system, we deliver with precision and care.",
    capabilities: ["Custom software architecture & design", "RESTful and GraphQL API development", "Microservices & event-driven systems", "Database architecture & optimization", "Third-party service integrations", "Technical audits & code reviews", "Legacy system modernization"],
    useCases: ["SaaS product platforms", "Enterprise business software", "Data pipeline systems", "API-first platforms", "Multi-tenant applications"],
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "web",
    icon: Globe,
    number: "02",
    title: "Web Application Development",
    subtitle: "Modern, performant web applications that users love.",
    description: "We build cutting-edge web applications using React and Next.js  -  optimized for performance, accessibility, and SEO. From consumer-facing portals to complex B2B dashboards, we deliver experiences that are as beautiful as they are functional.",
    capabilities: ["React & Next.js development", "Progressive Web Apps (PWA)", "Real-time features with WebSockets", "SEO-optimized architecture", "Headless CMS integration", "E-commerce & payments", "Admin dashboards & analytics", "Accessibility (WCAG 2.1)"],
    useCases: ["Customer portals", "SaaS web apps", "E-commerce platforms", "Analytics dashboards", "Marketing websites", "Government digital services"],
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    id: "mobile",
    icon: Smartphone,
    number: "03",
    title: "Mobile Application Development",
    subtitle: "Native-quality mobile experiences on every device.",
    description: "We build cross-platform mobile applications using React Native  -  delivering the full native experience on both iOS and Android from a single codebase. Fast, reliable, and ready for the App Store and Google Play.",
    capabilities: ["React Native development", "iOS & Android deployment", "Offline-first architecture", "Push notifications & deep links", "Device hardware integration", "App Store optimization", "Performance profiling", "Mobile UI/UX design"],
    useCases: ["Consumer mobile apps", "Enterprise field tools", "Healthcare applications", "Fintech apps", "Logistics & delivery", "Social platforms"],
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "cloud",
    icon: Cloud,
    number: "04",
    title: "Cloud Solutions & Infrastructure",
    subtitle: "Reliable, scalable cloud infrastructure that just works.",
    description: "We design cloud-native infrastructure on AWS built for reliability, security, and cost efficiency. From initial setup to full DevOps automation, we ensure your systems are observable, scalable, and production-ready from day one.",
    capabilities: ["AWS architecture design", "Docker & Kubernetes orchestration", "CI/CD pipeline automation", "Infrastructure as Code (Terraform)", "Security hardening & compliance", "Cost optimization", "Monitoring & observability", "Disaster recovery planning"],
    useCases: ["Cloud migration projects", "Startup cloud setup", "DevOps modernization", "High-availability systems", "Regulated industry workloads", "Multi-region deployments"],
    gradient: "from-sky-500 to-sky-600",
    bg: "bg-sky-50 dark:bg-sky-950/20",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    id: "ai",
    icon: Brain,
    number: "05",
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Practical AI that solves real business challenges.",
    description: "We build AI-powered features and systems that deliver genuine business value  -  not AI for the sake of AI. From LLM integrations and RAG-based document systems to custom ML pipelines, we help you harness intelligence responsibly.",
    capabilities: ["LLM integration & fine-tuning", "RAG (Retrieval-Augmented Generation)", "Natural language processing", "Document intelligence", "Recommendation systems", "AI chatbot development", "Vector database management", "AI pipeline optimization"],
    useCases: ["Enterprise AI assistants", "Document Q&A systems", "Smart search & discovery", "Predictive analytics", "Content moderation", "Customer support automation"],
    gradient: "from-orange-500 to-orange-600",
    bg: "bg-orange-50 dark:bg-orange-950/20",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto pt-12">
          <div className="max-w-3xl">
            <span className="section-label mb-5 inline-flex">Our Services</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.0]">
              What We<br />
              <span className="text-gradient-brand">Build For You</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              Five core service pillars covering the full spectrum of modern technology  -  from product engineering to AI and cloud infrastructure.
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400 hover:border-brand-300 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400 transition-all bg-white dark:bg-white/[0.03]">
                <span className="font-mono text-xs text-gray-300 dark:text-gray-600">{s.number}</span>
                {s.title.split("&")[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} id={svc.id}
                className="bg-white dark:bg-neutral-900/60 border border-gray-100 dark:border-white/[0.06] rounded-3xl overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${svc.gradient}`} />
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${svc.bg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${svc.iconColor}`} />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-gray-300 dark:text-gray-600">{svc.number}</span>
                        <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white leading-tight">{svc.title}</h2>
                      </div>
                    </div>
                    <p className="text-brand-600 dark:text-brand-400 font-semibold text-base mb-3">{svc.subtitle}</p>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-sm">{svc.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.useCases.map(uc => (
                        <span key={uc} className="text-xs bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full">{uc}</span>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className={`${i % 2 !== 0 ? "lg:[direction:ltr]" : ""} p-8 lg:p-12 bg-gray-50/50 dark:bg-white/[0.02] border-t lg:border-t-0 ${i % 2 !== 0 ? "lg:border-r" : "lg:border-l"} border-gray-100 dark:border-white/[0.04]`}>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-5">Capabilities</h4>
                    <ul className="space-y-3">
                      {svc.capabilities.map(cap => (
                        <li key={cap} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-brand-600 dark:text-brand-400 group">
                      Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}

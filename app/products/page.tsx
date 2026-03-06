import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Bot, CheckCircle, Clock, ArrowRight, Rocket } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description: "Discover Arutech products: InstaChat social platform and Arutech AI conversational assistant.",
};

const products = [
  {
    icon: MessageCircle,
    name: "InstaChat",
    category: "Social Media Platform",
    version: "v2.0",
    status: "Live",
    statusBg: "bg-emerald-500",
    tagline: "The social platform built for modern India.",
    pitch: "InstaChat reimagines social media for Indian communities  -  with a focus on performance, privacy, and genuine connection. Built from the ground up with our own stack, not a clone.",
    description: "A comprehensive social media platform featuring algorithmic content feeds, real-time messaging infrastructure, ephemeral stories, rich media sharing, and sophisticated user profiles. Designed for high-concurrency and mobile-first usage.",
    features: [
      { name: "Dynamic Social Feed", desc: "Algorithm-powered discovery of relevant content" },
      { name: "Real-time Messaging", desc: "WebSocket-powered chat with delivery receipts" },
      { name: "Stories", desc: "24-hour ephemeral content with media support" },
      { name: "User Profiles", desc: "Rich profiles with media galleries and followers" },
      { name: "Media Sharing", desc: "Photos, videos, reels, and file sharing" },
      { name: "Notifications", desc: "Real-time push and in-app notification system" },
    ],
    tech: ["React Native", "Node.js", "Redis", "AWS", "WebSockets", "FFmpeg"],
    gradient: "from-brand-500 via-blue-600 to-violet-600",
    textAccent: "text-brand-600 dark:text-brand-400",
    bgAccent: "bg-brand-50 dark:bg-brand-950/20",
  },
  {
    icon: Bot,
    name: "Arutech AI",
    category: "Enterprise AI Assistant",
    version: "v1.5",
    status: "Active",
    statusBg: "bg-blue-500",
    tagline: "Document intelligence, powered by RAG.",
    pitch: "Arutech AI brings enterprise-grade conversational intelligence to Indian businesses  -  capable of reasoning over your documents, answering questions with citations, and handling complex knowledge work at scale.",
    description: "A sophisticated AI assistant combining state-of-the-art language models with Retrieval-Augmented Generation architecture. It can ingest documents, build contextual understanding, and answer questions with grounded, cited responses.",
    features: [
      { name: "Conversational AI", desc: "Natural, multi-turn dialogue with context retention" },
      { name: "Document Q&A", desc: "Upload PDFs, spreadsheets, docs and query them" },
      { name: "RAG Architecture", desc: "Retrieval-augmented answers with source citations" },
      { name: "Context Memory", desc: "Maintains conversation history and references" },
      { name: "Multi-format Support", desc: "PDFs, Word, Excel, CSV, and plain text" },
      { name: "Fast Inference", desc: "Optimized pipeline for sub-second responses" },
    ],
    tech: ["Python", "LangChain", "OpenAI GPT-4", "Pinecone", "FastAPI", "React"],
    gradient: "from-gold-500 via-orange-500 to-red-500",
    textAccent: "text-orange-600 dark:text-orange-400",
    bgAccent: "bg-orange-50 dark:bg-orange-950/20",
  },
];

const upcoming = [
  { name: "Arutech Analytics", desc: "Real-time business intelligence and data visualization platform for enterprise teams.", icon: "📊", eta: "Q2 2025", tag: "Data" },
  { name: "Arutech CMS", desc: "Headless content management system for modern digital experiences and multi-channel publishing.", icon: "📝", eta: "Q3 2025", tag: "Content" },
  { name: "Arutech Pay", desc: "Fintech infrastructure and payment platform purpose-built for Indian businesses.", icon: "💳", eta: "Q4 2025", tag: "Fintech" },
  { name: "Arutech HRM", desc: "Human resource management and workforce automation for growing companies.", icon: "👥", eta: "2026", tag: "Enterprise" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto pt-12 text-center">
          <span className="section-label mb-5 inline-flex">Our Products</span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-gray-900 dark:text-white tracking-tight mb-6">
            Built In-House,<br />
            <span className="text-gradient-brand">Used in Production</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We eat our own cooking. Every product we ship demonstrates exactly what we build for our clients.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto space-y-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div key={product.name} className="bg-white dark:bg-neutral-900/60 border border-gray-100 dark:border-white/[0.06] rounded-3xl overflow-hidden shadow-xl shadow-gray-100/50 dark:shadow-none">
                <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Main content */}
                  <div className={`lg:col-span-7 p-10 lg:p-14 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white">{product.name}</h2>
                            <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${product.statusBg}`}>{product.status}</span>
                            <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-full">{product.version}</span>
                          </div>
                          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mt-0.5">{product.category}</p>
                        </div>
                      </div>
                    </div>

                    <p className={`font-display font-semibold text-xl mb-3 leading-snug ${product.textAccent}`}>{product.tagline}</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-3 leading-relaxed">{product.pitch}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.tech.map(t => (
                        <span key={t} className="text-xs font-mono bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm">
                        Request Demo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Features */}
                  <div className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""} p-10 lg:p-12 bg-gray-50/80 dark:bg-white/[0.02] border-t lg:border-t-0 ${i % 2 !== 0 ? "lg:border-r" : "lg:border-l"} border-gray-100 dark:border-white/[0.04]`}>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">Core Features</h4>
                    <ul className="space-y-4">
                      {product.features.map(f => (
                        <li key={f.name} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{f.name}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{f.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">
                <Clock className="w-3.5 h-3.5" /> Product Roadmap
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white">Coming Soon</h2>
            </div>
            <Rocket className="w-8 h-8 text-brand-200 dark:text-brand-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcoming.map(u => (
              <div key={u.name} className="p-6 border-2 border-dashed border-gray-100 dark:border-white/[0.06] rounded-2xl hover:border-brand-200 dark:hover:border-brand-800/50 transition-colors group">
                <div className="text-2xl mb-4">{u.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{u.name}</h3>
                  <span className="text-[10px] font-mono text-gray-400 flex-shrink-0">{u.eta}</span>
                </div>
                <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-brand-500 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2 py-0.5 rounded-full mb-3">{u.tag}</span>
                <p className="text-xs text-gray-400 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

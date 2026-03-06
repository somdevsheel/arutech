"use client";
import Link from "next/link";
import { MessageCircle, Bot, Zap, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

const products = [
  {
    icon: MessageCircle,
    name: "InstaChat",
    category: "Social Platform",
    tagline: "The next-generation social media platform for modern communities.",
    description: "A full-featured social media platform with dynamic feeds, real-time messaging, stories, and rich media sharing  -  built for scale and engagement.",
    highlights: [
      "Real-time chat with delivery receipts",
      "Algorithmic content feed",
      "Stories & ephemeral content",
      "Rich media sharing & galleries",
      "User profiles & discovery",
      "Push notifications",
    ],
    gradient: "from-[#0052CC] via-[#0066ff] to-[#4a9eff]",
    darkGlow: "shadow-blue-500/20",
    badge: "Live",
    badgeStyle: "bg-emerald-500",
    screen: "📱",
  },
  {
    icon: Bot,
    name: "Arutech AI",
    category: "AI Assistant",
    tagline: "Conversational intelligence powered by retrieval-augmented generation.",
    description: "An enterprise-grade AI assistant that combines powerful language models with RAG architecture  -  answer questions, analyze documents, and automate knowledge work.",
    highlights: [
      "Natural conversation interface",
      "Document Q&A with citations",
      "RAG-powered precise answers",
      "Multi-format file support",
      "Context-aware memory",
      "Fast inference pipeline",
    ],
    gradient: "from-[#F5A623] via-[#ff6b35] to-[#ff4500]",
    darkGlow: "shadow-orange-500/20",
    badge: "Active",
    badgeStyle: "bg-blue-500",
    screen: "🤖",
  },
];

export function ProductsShowcase() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef2ff 100%)" }}>
      <div className="dark:hidden absolute inset-0" style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef2ff 100%)" }} />
      <div className="hidden dark:block absolute inset-0" style={{ background: "linear-gradient(180deg, #060810 0%, #0a0d1a 100%)" }} />

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 dark:via-brand-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 dark:via-brand-500/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-label mb-5 inline-flex">Built In-House</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tight mb-4">
            Our Flagship Products
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Proprietary platforms we built to demonstrate our capabilities  -  and to serve real users across India.
          </p>
        </div>

        {/* Product cards */}
        <div className="space-y-12">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div key={product.name}
                className={`relative bg-white dark:bg-neutral-900/60 border border-gray-100 dark:border-white/[0.06] rounded-3xl overflow-hidden shadow-2xl ${product.darkGlow} dark:shadow-xl`}>

                {/* Top gradient band */}
                <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Content */}
                  <div className={`p-10 lg:p-14 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">{product.name}</h3>
                          <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${product.badgeStyle}`}>{product.badge}</span>
                        </div>
                        <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mt-0.5">{product.category}</p>
                      </div>
                    </div>

                    <p className="font-display font-semibold text-xl text-gray-800 dark:text-gray-200 mb-4 leading-snug">{product.tagline}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">{product.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                      {product.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4">
                      <Link href="/products"
                        className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm font-semibold">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                        Request Demo <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual panel */}
                  <div className={`relative hidden lg:flex items-center justify-center p-14 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}
                    style={{ background: i % 2 === 0
                      ? "linear-gradient(135deg, rgba(0,82,204,0.04) 0%, rgba(0,82,204,0.02) 100%)"
                      : "linear-gradient(135deg, rgba(245,166,35,0.04) 0%, rgba(245,166,35,0.02) 100%)"
                    }}>
                    {/* Abstract product visualization */}
                    <div className="relative w-64 h-64">
                      {/* Rings */}
                      <div className={`absolute inset-0 rounded-full border-2 border-dashed opacity-10 animate-spin-slow`}
                        style={{ borderColor: i === 0 ? "#0052CC" : "#F5A623" }} />
                      <div className={`absolute inset-8 rounded-full border opacity-15 animate-spin-slow`}
                        style={{ borderColor: i === 0 ? "#0052CC" : "#F5A623", animationDirection: "reverse", animationDuration: "15s" }} />

                      {/* Center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-2xl animate-float`}>
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Floating feature chips */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-white/10 rounded-xl px-3 py-2 shadow-lg text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <Zap className="w-3 h-3 inline mr-1 text-brand-500" />
                        {product.highlights[0]}
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-white/10 rounded-xl px-3 py-2 shadow-lg text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <Zap className="w-3 h-3 inline mr-1 text-gold-500" />
                        {product.highlights[2]}
                      </div>
                      <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-white/10 rounded-xl px-3 py-2 shadow-lg text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <Zap className="w-3 h-3 inline mr-1 text-emerald-500" />
                        {product.highlights[4]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:gap-3 transition-all">
            View All Products & Roadmap <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

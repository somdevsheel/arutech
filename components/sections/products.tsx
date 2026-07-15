"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono truncate">
          {url}
        </div>
      </div>
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-50">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useScrollReveal();

  return (
    <section id="products" ref={sectionRef} className="relative py-14 lg:py-20 bg-white">
      <div className="absolute inset-0 line-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Our Products</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Tools We&apos;ve{" "}
            <span className="gradient-text">Shipped</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed">
            Beyond client work, we build and launch our own products — from free utilities to full-scale social platforms.
          </p>
        </div>

        {/* Freenoo — LIVE */}
        <div className="animate-on-scroll delay-100 card-hover group relative rounded-2xl overflow-hidden border border-orange-200 bg-gradient-to-br from-orange-50 to-white mb-6 shadow-sm hover:shadow-md transition-all">
          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full">
                  ● LIVE
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-2">Freenoo</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-sm">
                25+ professional PDF tools — completely free. Convert, edit, compress, merge, and e-sign PDFs without registration, watermarks, or usage limits.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["PDF Merge", "PDF Compress", "E-Sign", "Convert", "No Sign-up", "Free Forever"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs text-gray-500 bg-gray-100 rounded-lg">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://freenoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5 w-fit"
                >
                  Open Freenoo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 hover:underline transition-all"
                >
                  Know more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 lg:p-8 flex items-center">
              <div className="w-full">
                <BrowserFrame src="/images/freenoo-screenshot.png" alt="Freenoo PDF tools" url="freenoo.com" />
              </div>
            </div>
          </div>
        </div>

        {/* Know more — scroll to portfolio section on same page */}
        <div className="animate-on-scroll delay-100 flex items-center justify-between mb-6 px-1">
          <p className="text-gray-500 text-sm">Explore the client projects we&apos;ve delivered.</p>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-sm flex-shrink-0"
          >
            Know more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Instachat + coming soon row */}
        <div className="grid lg:grid-cols-5 gap-6 mb-6">
          {/* Instachat */}
          <div className="animate-on-scroll delay-200 lg:col-span-3 card-hover group relative rounded-2xl overflow-hidden border border-pink-200 bg-gradient-to-br from-pink-50 via-purple-50/30 to-white shadow-sm hover:shadow-md transition-all">
            <div className="relative z-10 p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900">Instachat</h3>
                    <p className="text-pink-400 text-[10px] font-mono tracking-wide">by Arutech</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-pink-100 text-pink-600 border border-pink-200 rounded-full flex-shrink-0">
                  ● IN DEVELOPMENT
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                A native Android social media app — real-time chat, short-form reels, photo posts, stories, and more. A full Instagram-like experience built from scratch.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {[
                  { icon: "💬", label: "Real-time Chat" },
                  { icon: "🎬", label: "Reels" },
                  { icon: "🖼️", label: "Posts & Feed" },
                  { icon: "⭕", label: "Stories" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-gray-100">
                    <span className="text-sm">{f.icon}</span>
                    <span className="text-xs text-gray-600 font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-5">
                <span className="px-2.5 py-1 bg-gray-100 rounded-lg">React Native</span>
                <span className="px-2.5 py-1 bg-gray-100 rounded-lg">Node.js</span>
                <span className="px-2.5 py-1 bg-gray-100 rounded-lg">Android</span>
              </div>
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 hover:text-pink-600 hover:underline transition-all"
              >
                Know more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Moneto + Future AI */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="animate-on-scroll delay-300 card-hover flex-1 relative rounded-2xl p-6 bg-white border border-violet-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="px-2 py-1 text-[10px] font-semibold bg-violet-100 text-violet-600 border border-violet-200 rounded-full">COMING SOON</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-1.5">Moneto AI Terminal</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                AI-native financial intelligence platform for individuals and teams who need clarity in complex financial data.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Financial AI", "Terminal UI", "Intelligence"].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-[10px] text-gray-500 bg-gray-100 rounded-lg">{tag}</span>
                ))}
              </div>
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-500 hover:text-violet-600 hover:underline transition-all"
              >
                Know more
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="animate-on-scroll delay-400 card-hover flex-1 relative rounded-2xl p-6 bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="px-2 py-1 text-[10px] font-semibold bg-gray-200 text-gray-500 border border-gray-300 rounded-full">IN DEVELOPMENT</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-700 mb-1.5">Future AI Platform</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                A platform that rethinks how teams interact with AI infrastructure. Details shared when the time is right.
              </p>
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-600 hover:underline transition-all"
              >
                Know more
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

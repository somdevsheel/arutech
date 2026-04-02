// "use client";

// import { useEffect, useRef } from "react";

// export default function Products() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
//       { threshold: 0.1 }
//     );
//     sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="products" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-900/40">
//       <div className="absolute inset-0 line-grid opacity-30" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="max-w-2xl mb-16">
//           <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-5">
//             <span className="text-xs font-mono text-teal-400 tracking-wide">OUR PRODUCTS</span>
//           </div>
//           <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
//             Tools We&apos;ve{" "}
//             <span className="gradient-text">Shipped</span>
//           </h2>
//           <p className="animate-on-scroll delay-200 text-slate-400 text-lg leading-relaxed">
//             Beyond client work, we build and launch our own products — from free utilities to full-scale social platforms.
//           </p>
//         </div>

//         {/* Top row: Instachat (featured, wide) + Freenoo */}
//         <div className="grid lg:grid-cols-5 gap-6 mb-6">

//           {/* Instachat — FEATURED */}
//           <div className="animate-on-scroll delay-100 lg:col-span-3 card-hover group relative rounded-2xl p-7 overflow-hidden border border-pink-500/30 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-navy-800/60">
//             {/* Glow orbs */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

//             <div className="relative z-10">
//               <div className="flex items-start justify-between mb-5">
//                 {/* Icon */}
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 border border-pink-500/30 flex items-center justify-center">
//                   <svg className="w-7 h-7 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                   </svg>
//                 </div>
//                 <span className="px-2.5 py-1 text-xs font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/25 rounded-full">
//                   ● IN DEVELOPMENT
//                 </span>
//               </div>

//               <h3 className="font-display text-3xl font-bold text-white mb-1">Instachat</h3>
//               <p className="text-pink-300/60 text-xs font-mono mb-3 tracking-wide">by Arutech</p>

//               <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-md">
//                 A full-featured social platform built from the ground up — real-time chat, short-form reels, photo posts, stories, and more. Everything you expect from a modern social media app, in one place.
//               </p>

//               {/* Feature grid */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
//                 {[
//                   { icon: "💬", label: "Real-time Chat" },
//                   { icon: "🎬", label: "Reels" },
//                   { icon: "🖼️", label: "Posts & Feed" },
//                   { icon: "⭕", label: "Stories" },
//                 ].map((f) => (
//                   <div
//                     key={f.label}
//                     className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8"
//                   >
//                     <span className="text-sm">{f.icon}</span>
//                     <span className="text-xs text-slate-400 font-medium">{f.label}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-pink-500/10 text-pink-300/60 text-sm font-medium rounded-xl border border-pink-500/15 cursor-default select-none">
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Coming Soon
//                 </div>
//                 <span className="text-xs text-slate-600">Built with React Native + Node.js</span>
//               </div>
//             </div>
//           </div>

//           {/* Freenoo — LIVE */}
//           <div className="animate-on-scroll delay-200 lg:col-span-2 card-hover group relative rounded-2xl p-7 bg-gradient-to-br from-accent-500/15 to-navy-800/60 border border-accent-500/30 overflow-hidden">
//             <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl pointer-events-none" />

//             <div className="relative z-10">
//               <div className="flex items-start justify-between mb-5">
//                 <div className="w-12 h-12 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//                 <span className="px-2.5 py-1 text-xs font-semibold bg-teal-400/15 text-teal-400 border border-teal-400/30 rounded-full">
//                   ● LIVE
//                 </span>
//               </div>

//               <h3 className="font-display text-2xl font-bold text-white mb-2">Freenoo</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-5">
//                 A free, browser-based PDF toolkit. Merge documents, compress file sizes, and work with PDFs — no subscriptions, no sign-ups.
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {["PDF Merge", "PDF Compress", "No Sign-up", "Free Forever"].map((tag) => (
//                   <span key={tag} className="px-2.5 py-1 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg">
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <a
//                 href="https://freenoo.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:-translate-y-0.5"
//               >
//                 Open Freenoo
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom row: Moneto + Future AI */}
//         <div className="grid lg:grid-cols-2 gap-6">

//           {/* Moneto AI — COMING SOON */}
//           <div className="animate-on-scroll delay-300 card-hover group relative rounded-2xl p-7 bg-navy-800/40 border border-slate-700/40 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//             <div className="relative z-10">
//               <div className="flex items-start justify-between mb-5">
//                 <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                 </div>
//                 <span className="px-2.5 py-1 text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full">
//                   COMING SOON
//                 </span>
//               </div>

//               <h3 className="font-display text-2xl font-bold text-white mb-2">Moneto AI Terminal</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-5">
//                 An AI-native financial intelligence platform. Designed for individuals and teams who need clarity in complex financial data — coming soon.
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {["Financial AI", "Terminal Interface", "Intelligence Layer"].map((tag) => (
//                   <span key={tag} className="px-2.5 py-1 text-xs text-slate-500 bg-white/3 border border-white/5 rounded-lg">
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 text-slate-500 text-sm font-medium rounded-xl border border-white/5 cursor-default select-none">
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//                 Notify Me
//               </div>
//             </div>
//           </div>

//           {/* Future AI Platform */}
//           <div className="animate-on-scroll delay-400 card-hover group relative rounded-2xl p-7 bg-navy-800/30 border border-slate-700/30 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//             <div className="absolute inset-0 opacity-20">
//               <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <pattern id="hex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//                     <circle cx="10" cy="10" r="1" fill="rgba(45,212,191,0.2)" />
//                   </pattern>
//                 </defs>
//                 <rect width="100%" height="100%" fill="url(#hex)" />
//               </svg>
//             </div>

//             <div className="relative z-10">
//               <div className="flex items-start justify-between mb-5">
//                 <div className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
//                   <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <span className="px-2.5 py-1 text-xs font-semibold bg-slate-500/10 text-slate-500 border border-slate-600/20 rounded-full">
//                   IN DEVELOPMENT
//                 </span>
//               </div>

//               <h3 className="font-display text-2xl font-bold text-slate-300 mb-2">Future AI Platform</h3>
//               <p className="text-slate-500 text-sm leading-relaxed mb-5">
//                 Something new is being built. A platform that rethinks how teams interact with AI infrastructure. Details will be shared when the time is right.
//               </p>

//               <div className="flex items-center gap-2 text-xs text-slate-600">
//                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 Stay tuned
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ─── Browser Frame wrapper ─────────────────────────────────── */
function BrowserFrame({
  src,
  alt,
  url,
  accentClass = "bg-slate-700",
}: {
  src: string;
  alt: string;
  url: string;
  accentClass?: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-navy-950/90 border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[10px] text-slate-500 font-mono truncate">
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-950">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

/* ─── Placeholder frame for products without screenshot yet ─── */
function PlaceholderFrame({
  label,
  iconClass,
  gradientClass,
}: {
  label: string;
  iconClass: string;
  gradientClass: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center gap-2 px-3 py-2 bg-navy-950/90 border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[10px] text-slate-500 font-mono">
          coming soon...
        </div>
      </div>
      <div className={`relative w-full aspect-[16/9] ${gradientClass} flex items-center justify-center`}>
        <div className="text-center">
          <div className={`text-4xl mb-2 ${iconClass}`}>🔒</div>
          <p className="text-xs text-slate-500 font-mono">{label}</p>
        </div>
        {/* decorative grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy-900/40"
    >
      <div className="absolute inset-0 line-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-5">
            <span className="text-xs font-mono text-teal-400 tracking-wide">
              OUR PRODUCTS
            </span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Tools We&apos;ve{" "}
            <span className="gradient-text">Shipped</span>
          </h2>
          <p className="animate-on-scroll delay-200 text-slate-400 text-lg leading-relaxed">
            Beyond client work, we build and launch our own products — from free
            utilities to full-scale social platforms.
          </p>
        </div>

        {/* ── Freenoo — LIVE (full-width featured) ── */}
        <div className="animate-on-scroll delay-100 card-hover group relative rounded-2xl overflow-hidden border border-accent-500/30 bg-gradient-to-br from-accent-500/10 via-navy-800/60 to-navy-800/40 mb-6">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            {/* Left: info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-teal-400/15 text-teal-400 border border-teal-400/30 rounded-full">
                  ● LIVE
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold text-white mb-2">
                Freenoo
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
                25+ professional PDF tools — completely free. Convert, edit,
                compress, merge, and e-sign PDFs without registration,
                watermarks, or usage limits.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["PDF Merge", "PDF Compress", "E-Sign", "Convert", "No Sign-up", "Free Forever"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <a
                href="https://freenoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-accent-500/20 hover:shadow-accent-500/35 hover:-translate-y-0.5 w-fit"
              >
                Open Freenoo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Right: real screenshot */}
            <div className="p-6 lg:p-8 flex items-center">
              <div className="w-full">
                <BrowserFrame
                  src="/images/freenoo-screenshot.png"
                  alt="Freenoo PDF tools platform"
                  url="freenoo.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Instachat (featured wide) + coming soon row ── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-6">
          {/* Instachat */}
          <div className="animate-on-scroll delay-200 lg:col-span-3 card-hover group relative rounded-2xl overflow-hidden border border-pink-500/30 bg-gradient-to-br from-pink-500/12 via-purple-500/8 to-navy-800/60">
            <div className="absolute top-0 right-0 w-56 h-56 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 border border-pink-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Instachat</h3>
                    <p className="text-pink-300/50 text-[10px] font-mono tracking-wide">by Arutech</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/25 rounded-full flex-shrink-0">
                  ● IN DEVELOPMENT
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                A native Android social media app — real-time chat, short-form
                reels, photo posts, stories, and more. A full Instagram-like
                experience built from scratch for Android.
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {[
                  { icon: "💬", label: "Real-time Chat" },
                  { icon: "🎬", label: "Reels" },
                  { icon: "🖼️", label: "Posts & Feed" },
                  { icon: "⭕", label: "Stories" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8">
                    <span className="text-sm">{f.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Android phone mockup placeholder */}
              <div className="flex items-center gap-4">
                {/* Phone frame */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-40 rounded-2xl border-2 border-pink-500/30 bg-gradient-to-b from-pink-950/60 to-purple-950/60 flex flex-col overflow-hidden shadow-xl">
                    {/* Notch */}
                    <div className="flex justify-center pt-1.5 pb-1">
                      <div className="w-8 h-1 bg-pink-500/30 rounded-full" />
                    </div>
                    {/* Screen content placeholder */}
                    <div className="flex-1 mx-1.5 mb-1.5 rounded-xl bg-navy-950/60 flex flex-col p-1.5 gap-1">
                      <div className="h-1.5 w-10 bg-pink-400/30 rounded-full" />
                      <div className="flex-1 rounded-lg bg-pink-500/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-300/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="flex justify-around pt-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-3 h-3 rounded-full bg-white/10" />
                        ))}
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="flex justify-center pb-1.5">
                      <div className="w-6 h-0.5 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  {/* Android badge */}
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.341a1 1 0 01-1.732 1l-1.268-2.196a6.98 6.98 0 01-4.046 0L9.21 16.341a1 1 0 01-1.732-1l1.27-2.199A7.015 7.015 0 017 9h10a7.015 7.015 0 01-1.748 4.142l1.271 2.199zM8.5 6a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2zM6 3.694L4.586 2.28a1 1 0 00-1.414 1.414L4.72 5.24A8.964 8.964 0 003 9h18a8.964 8.964 0 00-1.72-3.76l1.548-1.546a1 1 0 00-1.414-1.414L17.999 3.694A8.946 8.946 0 0012 2a8.946 8.946 0 00-6 1.694z"/>
                    </svg>
                  </div>
                </div>

                {/* Stats / info */}
                <div className="flex flex-col gap-2">
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/8">
                    <p className="text-[10px] text-slate-500 mb-0.5">Platform</p>
                    <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      Android (APK)
                    </p>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/8">
                    <p className="text-[10px] text-slate-500 mb-0.5">Status</p>
                    <p className="text-xs font-semibold text-pink-300">In Development</p>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/8">
                    <p className="text-[10px] text-slate-500 mb-0.5">Stack</p>
                    <p className="text-xs text-slate-400">React Native · Node.js</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 text-pink-300/60 text-xs font-medium rounded-xl border border-pink-500/15 cursor-default select-none">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Coming Soon on Play Store
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Moneto + Future AI stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Moneto */}
            <div className="animate-on-scroll delay-300 card-hover group flex-1 relative rounded-2xl p-6 bg-navy-800/40 border border-slate-700/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full">
                    COMING SOON
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1.5">Moneto AI Terminal</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  AI-native financial intelligence platform for individuals and teams who need clarity in complex financial data.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Financial AI", "Terminal UI", "Intelligence"].map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] text-slate-500 bg-white/3 border border-white/5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Future AI */}
            <div className="animate-on-scroll delay-400 card-hover group flex-1 relative rounded-2xl p-6 bg-navy-800/30 border border-slate-700/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 dot-grid opacity-15" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-semibold bg-slate-500/10 text-slate-500 border border-slate-600/20 rounded-full">
                    IN DEVELOPMENT
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-300 mb-1.5">Future AI Platform</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  A platform that rethinks how teams interact with AI infrastructure. Details will be shared when the time is right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, Shield, Star, ChevronDown } from "lucide-react";

const stats = [
  { value: "5+", label: "Core Services", suffix: "" },
  { value: "2", label: "Live Products", suffix: "" },
  { value: "100%", label: "Client Focus", suffix: "" },
  { value: "∞", label: "Innovation", suffix: "" },
];

const trustedBy = ["Digital India", "AWS Partner", "DPIIT Recognized", "ISO Standards", "Secure by Design"];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      setTimeout(() => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, i * 120);
    });
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-112px)] flex flex-col overflow-hidden hero-bg">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Animated orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-30 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(0,82,204,0.3) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 left-[5%] w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-20 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.25) 0%, transparent 70%)", animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, rgba(0,82,204,0.4) 0%, transparent 60%)" }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-[15%] w-16 h-16 border-2 border-brand-200/40 dark:border-brand-500/20 rounded-2xl rotate-12 animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-48 right-[25%] w-8 h-8 bg-gold-400/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-48 right-[8%] w-12 h-12 border border-brand-300/30 dark:border-brand-400/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-64 left-[8%] w-6 h-6 bg-brand-500/15 rounded-full animate-float" style={{ animationDelay: "0.8s" }} />

      <div ref={ref} className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-5xl">

          {/* Badge */}
          <div className="hero-animate opacity-0 translate-y-8 transition-all duration-700 mb-8">
            <div className="inline-flex items-center gap-3">
              <span className="section-label">
                <Shield className="w-3 h-3" />
                DPIIT Recognized Startup
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Actively Building
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="hero-animate opacity-0 translate-y-8 transition-all duration-700 font-display mb-6">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-[0.95] tracking-tight">
              Engineering
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mt-1">
              <span className="text-gradient-brand">Tomorrow's</span>
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-[0.95] tracking-tight mt-1">
              India
            </span>
          </h1>

          {/* Tagline */}
          <div className="hero-animate opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-brand-500 to-transparent" />
              <p className="font-body text-gold-500 dark:text-gold-400 font-semibold text-base sm:text-lg tracking-wide">
                Building Technology for a Self-Sufficient India
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="hero-animate opacity-0 translate-y-8 transition-all duration-700 text-gray-500 dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 font-body">
            We build scalable digital platforms, cloud-native infrastructure, and AI-powered applications
             -  helping businesses and organizations across India grow faster with technology.
          </p>

          {/* CTAs */}
          <div className="hero-animate opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap items-center gap-4 mb-16">
            <Link href="/services"
              className="group inline-flex items-center gap-2.5 px-7 py-4 btn-primary text-base font-semibold">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/products"
              className="group inline-flex items-center gap-2.5 px-7 py-4 btn-outline text-base font-semibold dark:text-blue-400 dark:border-blue-500/40 dark:hover:bg-blue-950/30">
              <Play className="w-4 h-4 fill-current" />
              Our Products
            </Link>
            <Link href="/contact"
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors underline underline-offset-4">
              Talk to us →
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-animate opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="stat-number text-3xl sm:text-4xl font-bold mb-1">{value}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-body uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-gray-100 dark:border-white/[0.04] bg-white/60 dark:bg-neutral-950/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-300 dark:text-gray-600 whitespace-nowrap">
              Recognized By
            </span>
            {trustedBy.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap">
                <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 dark:opacity-30 animate-bounce hidden md:flex">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Scroll</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </section>
  );
}

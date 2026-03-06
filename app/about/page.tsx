import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Lightbulb, Heart, MapPin, Zap, Award, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "About Arutech Consultancy Services LLP  -  a DPIIT-recognized startup building digital platforms and AI applications from Uttarakhand, India.",
};

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every product and service we build contributes to the vision of a technologically self-reliant India.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20" },
  { icon: Lightbulb, title: "Innovation First", desc: "We stay at the forefront  -  constantly exploring new tools, frameworks, and methodologies to deliver modern solutions.", color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-950/20" },
  { icon: Heart, title: "Client-Centric", desc: "We treat our clients challenges as our own. Long-term partnerships built on trust, transparency, and results.", color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-950/20" },
  { icon: Shield, title: "Quality & Reliability", desc: "Production-grade code, robust architecture, and systems designed to perform reliably at scale from day one.", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/20" },
];

const milestones = [
  { label: "Company Founded", detail: "Arutech Consultancy Services LLP established in Uttarakhand, India  -  with a bold vision for building technology that matters.", icon: "🚀" },
  { label: "DPIIT Recognition", detail: "Recognized by India's Department for Promotion of Industry and Internal Trade  -  validating our innovation and startup credentials.", icon: "🏛️" },
  { label: "InstaChat Launch", detail: "Shipped InstaChat  -  a full-featured social media platform with real-time chat, feeds, and media sharing.", icon: "💬" },
  { label: "Arutech AI Launch", detail: "Launched Arutech AI with RAG-powered document intelligence, enabling businesses to query knowledge with conversational AI.", icon: "🤖" },
  { label: "Growing & Scaling", detail: "Expanding our services, building new products, and partnering with more businesses across India.", icon: "📈" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto pt-12">
          <div className="max-w-4xl">
            <span className="section-label mb-5 inline-flex">About Arutech</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.0]">
              Building With<br />
              <span className="text-gradient-brand">Purpose & Precision</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              A technology company born in India with one clear mission  -  to build the digital infrastructure that powers a self-sufficient nation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-5 inline-flex">Our Mission</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6 tracking-tight">
                Technology That Serves a Greater Purpose
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                Arutech Consultancy Services LLP is focused on building scalable digital platforms and intelligent applications while contributing to technological self-reliance in India.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                We believe India has the talent, the market, and the ambition to build world-class technology  -  and we are here to help make that happen. From cloud-native platforms to AI-powered tools, we build technology that empowers businesses and communities.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                As a <span className="font-semibold text-brand-600 dark:text-brand-400">DPIIT recognized startup</span>, we are part of India growing innovation ecosystem  -  committed to quality, sustainability, and long-term impact.
              </p>

              {/* DPIIT badge */}
              <div className="flex items-center gap-4 p-5 bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/40 rounded-2xl">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-500/20">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-gray-900 dark:text-white">DPIIT Recognized Startup</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Department for Promotion of Industry and Internal Trade, Government of India</div>
                </div>
                <Award className="w-6 h-6 text-brand-400 flex-shrink-0 ml-auto" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Technology Services", sub: "Core capabilities" },
                { value: "2", label: "Live Products", sub: "In active use" },
                { value: "100%", label: "Client Focus", sub: "Partnership-driven" },
                { value: "🇮🇳", label: "Made in India", sub: "Uttarakhand" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="card-enterprise p-6 text-center">
                  <div className="stat-number text-4xl font-bold mb-1">{value}</div>
                  <div className="font-semibold text-sm text-gray-800 dark:text-gray-200">{label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Our Values</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">How We Operate</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="card-enterprise p-7 text-center group">
                <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Our Journey</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-transparent dark:from-brand-800 dark:via-brand-700" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-7 group">
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-brand-100 dark:border-brand-900/60 flex items-center justify-center text-xl z-10 shadow-sm group-hover:border-brand-300 dark:group-hover:border-brand-700 transition-colors">
                    {m.icon}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-1">{m.label}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-neutral-900/40 border-t border-gray-100 dark:border-white/[0.04]">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 text-brand-500" />
            <span className="font-medium">Headquartered in Uttarakhand, India 🇮🇳</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Serving clients across India and globally</p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:gap-3 transition-all group">
            Work with us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}

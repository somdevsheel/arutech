import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dark gradient BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-[#001a4d]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />

      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-400/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-brand-200 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-brand-500/30 bg-white/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Ready to Build?
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight mb-6">
          Partner With Us to Build
          <br />
          <span className="text-gradient-gold">Scalable, Intelligent</span>
          <br />
          Digital Systems
        </h2>

        <p className="text-brand-200 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Whether you are a startup launching your MVP or an enterprise modernizing legacy systems  - 
          we bring engineering excellence, AI expertise, and a commitment to your success.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-700 font-bold text-base rounded-2xl hover:bg-brand-50 transition-all shadow-2xl shadow-brand-900/50 hover:-translate-y-1 hover:shadow-brand-900/70">
            <Mail className="w-5 h-5" />
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold text-base rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1">
            View Services
          </Link>
        </div>

        {/* Contact options */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="mailto:support@arutechconsultancy.com"
            className="flex items-center gap-2 text-brand-200 hover:text-white transition-colors text-sm group">
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            support@arutechconsultancy.com
          </a>
          <span className="w-px h-4 bg-brand-600 hidden sm:block" />
          <span className="flex items-center gap-2 text-brand-300 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Responding within 24 hours
          </span>
        </div>
      </div>
    </section>
  );
}

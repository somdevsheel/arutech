import Link from "next/link";
import { Zap, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

const services = ["Software Development", "Web Applications", "Mobile Apps", "Cloud Solutions", "AI & Machine Learning"];
const company = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#02040d] text-gray-400 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      {/* BG orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gold-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand  -  wide col */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white">Arutech</div>
                <div className="text-[10px] text-gray-500 font-body tracking-wide">Consultancy Services LLP</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 mb-5 max-w-xs">
              Building Technology for a{" "}
              <span className="text-gold-400 font-medium">Self-Sufficient India.</span>{" "}
              A DPIIT-recognized startup from Uttarakhand.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-3 py-2 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DPIIT Recognized Startup
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Uttarakhand, India 🇮🇳</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@arutechconsultancy.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                  support@arutechconsultancy.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <a href="https://www.arutechconsultancy.com" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  arutechconsultancy.com
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.04]" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Arutech Consultancy Services LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</Link>
            <span className="text-xs text-gray-600">Crafted with pride in 🇮🇳 India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

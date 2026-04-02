"use client";

import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "AI & Machine Learning", href: "#services" },
    { label: "Cloud Deployment", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
  ],
  Products: [
    { label: "Freenoo", href: "https://freenoo.com", external: true },
    { label: "Moneto AI Terminal", href: "#products" },
    { label: "Future AI Platform", href: "#products" },
  ],
  Company: [
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/60 bg-navy-950">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-5 group w-fit">
              <Image
                src="/images/logo.png"
                alt="Arutech Consultancy"
                width={140}
                height={48}
                className="h-10 w-auto object-contain mix-blend-screen brightness-110"
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Arutech Consultancy Services LLP — building intelligent software systems for businesses that need to move fast and stay reliable.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/arutech-consultancy",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "https://github.com/somdevsheel?tab=repositories",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "https://x.com/arutech_consult",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-accent-500/15 border border-white/8 hover:border-accent-500/30 text-slate-500 hover:text-accent-400 flex items-center justify-center transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display text-xs font-semibold text-slate-300 tracking-wider uppercase mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {year} Arutech Consultancy Services LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

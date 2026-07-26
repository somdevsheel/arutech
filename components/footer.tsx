"use client";

import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "AI & Machine Learning", href: "/services/ai-development" },
    { label: "Cloud Deployment", href: "/services/cloud-deployment" },
    { label: "Web Development", href: "/services/website-development" },
    { label: "Mobile Apps", href: "/services/mobile-app-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing-seo" },
    { label: "Business Analytics", href: "/services/business-analytics" },
  ],
  Products: [
    { label: "Freenoo", href: "https://freenoo.com", external: true },
    { label: "Instachat", href: "#products" },
    { label: "Moneto AI Terminal", href: "#products" },
  ],
  Company: [
    { label: "About Us", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    // { label: "Learning", href: "/learning" }, // hidden — enable when ready
    { label: "Contact", href: "#contact" },
  ],
};

const keywords = [
  "AI consulting India", "machine learning solutions", "cloud deployment services",
  "React web development", "React Native app development", "Next.js development company",
  "software consultancy India", "digital marketing agency", "business analytics",
  "free business analysis", "web app development India", "IT consultancy services",
  "AI Development Company", "Custom Software Development", "Web Development Company",
  "Mobile App Development", "AI Automation Services", "SEO Services",
  "Google Ads Management", "Social Media Marketing", "Workflow Automation",
  "Custom Web Applications", "AI Chatbot Development", "Business Process Automation",
  "Software Development Company", "Web Application Development", "Mobile App Development Company",
  "Digital Marketing Company", "SEO Agency", "Google Ads Agency",
  "Social Media Marketing Agency", "Business Automation Solutions", "Cloud Software Development",
  "Enterprise AI Solutions", "React Development Company", "Custom AI Solutions",
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/arutech-consultancy", color: "hover:bg-blue-700/20 hover:border-blue-500/40 hover:text-blue-400", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
  { label: "Twitter", href: "https://x.com/arutech_consult", color: "hover:bg-gray-600/20 hover:border-gray-500/40 hover:text-gray-300", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
  { label: "Instagram", href: "https://www.instagram.com/arutech_consultancy", color: "hover:bg-pink-600/20 hover:border-pink-500/40 hover:text-pink-400", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
  { label: "YouTube", href: "https://www.youtube.com/@ArutechConsultancy", color: "hover:bg-red-600/20 hover:border-red-500/40 hover:text-red-400", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Keywords strip */}
      <div className="border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-gray-600 mb-3 font-mono uppercase tracking-widest text-center sm:text-left">What we're known for</p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {keywords.map((kw) => (
              <span key={kw} className="px-3 py-1 text-xs text-gray-500 bg-white/5 border border-white/8 rounded-full hover:text-gray-300 hover:border-white/20 transition-colors cursor-default">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-10 lg:py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center mb-5 w-fit">
              <Image
                src="/images/logo.png"
                alt="Arutech Consultancy"
                width={130}
                height={44}
                className="h-9 w-auto object-contain mix-blend-screen brightness-110"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Arutech Consultancy Services LLP is an India-based digital consultancy specialising in AI, Mobile Apps, Web Development, Automation, Google Ads, SEO and Social Media Marketing — built to deliver measurable business results.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-lg bg-white/5 border border-white/8 text-gray-500 flex items-center justify-center transition-all ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1 group"
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
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {year} Arutech Consultancy Services LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy-policy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="/cookie-policy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookie Policy</a>
            <a href="/terms-of-service" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

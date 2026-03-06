"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ChevronDown, Zap, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    dropdown: [
      { href: "/services#software", label: "Software Development", desc: "Custom platforms & APIs" },
      { href: "/services#web", label: "Web Applications", desc: "React & Next.js apps" },
      { href: "/services#mobile", label: "Mobile Apps", desc: "iOS & Android" },
      { href: "/services#cloud", label: "Cloud Solutions", desc: "AWS infrastructure" },
      { href: "/services#ai", label: "AI & Machine Learning", desc: "LLMs & RAG systems" },
    ],
  },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-brand-500 dark:bg-brand-900 text-white text-xs py-2 px-4 text-center font-body">
        <span className="opacity-90">🇮🇳 DPIIT Recognized Startup  -  Building Technology for a Self-Sufficient India</span>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl shadow-lg shadow-brand-500/5 border-b border-gray-100 dark:border-white/[0.05]"
          : "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-transparent"
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-all group-hover:scale-105">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gold-400 rounded-full border-2 border-white dark:border-neutral-950" />
            </div>
            <div>
              <div className="font-display font-bold text-[15px] text-gray-900 dark:text-white leading-none tracking-tight">
                Arutech
              </div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-body tracking-wide mt-0.5 hidden sm:block">
                Consultancy Services LLP
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((item) => {
              if ("dropdown" in item && item.dropdown) {
                return (
                  <li key={item.label} className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition-all">
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                        <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl shadow-brand-500/10 overflow-hidden p-1.5">
                          {item.dropdown.map((d) => (
                            <Link key={d.href} href={d.href}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-950/40 group/item transition-colors">
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-colors">{d.label}</div>
                                <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{d.desc}</div>
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover/item:text-brand-500 transition-colors mt-1 flex-shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              }
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href!}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      active ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40" : "text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/60 dark:hover:bg-brand-950/30"
                    }`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={toggleDark} aria-label="Toggle theme"
              className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 btn-primary text-sm">
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button className="lg:hidden p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[600px]" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 space-y-1 bg-white dark:bg-neutral-950 border-t border-gray-100 dark:border-white/[0.05]">
            {navLinks.map((item) => {
              if ("dropdown" in item && item.dropdown) {
                return (
                  <div key={item.label}>
                    <div className="px-3 py-2 text-xs font-mono uppercase tracking-widest text-gray-400">{item.label}</div>
                    {item.dropdown.map((d) => (
                      <Link key={d.href} href={d.href} onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition-colors ml-2">
                        {d.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link key={item.href} href={item.href!} onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-brand-600 bg-brand-50 dark:bg-brand-950/40" : "text-gray-700 dark:text-gray-300"
                  }`}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setOpen(false)}
              className="block px-4 py-3 btn-primary text-sm text-center mt-2">
              Get Started →
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

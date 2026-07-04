"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { useTheme } from "./theme-provider";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = theme === "light";

  const navBg = scrolled
    ? isLight
      ? "bg-white/92 backdrop-blur-md border-b border-slate-200/80 py-3"
      : theme === "normal"
      ? "bg-slate-900/92 backdrop-blur-md border-b border-slate-700/60 py-3"
      : "bg-navy-950/90 backdrop-blur-md border-b border-slate-800/60 py-3"
    : "bg-transparent py-5";

  const linkClass = isLight
    ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
    : "text-slate-400 hover:text-white hover:bg-white/5";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Arutech Consultancy"
            width={140}
            height={48}
            className={cn(
              "h-10 w-auto object-contain brightness-110",
              !isLight && "mix-blend-screen"
            )}
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  linkClass
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://freenoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-sm font-medium transition-colors",
              isLight ? "text-accent-600 hover:text-accent-500" : "text-accent-400 hover:text-accent-300"
            )}
          >
            Try Freenoo →
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold bg-accent-500 hover:bg-accent-400 text-white rounded-lg transition-colors shadow-lg shadow-accent-500/20"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className={cn(
              "p-2 transition-colors",
              isLight ? "text-slate-500 hover:text-slate-800" : "text-slate-400 hover:text-white"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={cn(
            "md:hidden backdrop-blur-md border-b px-6 py-4",
            isLight ? "bg-white/98 border-slate-200" : "bg-navy-900/98 border-slate-800/60"
          )}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                    isLight
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-800 mt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-semibold text-center bg-accent-500 text-white rounded-lg"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

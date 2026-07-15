"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "/",          section: "services",  label: "Services" },
  { href: "/",          section: "products",  label: "Products" },
  { href: "/",          section: "products",  label: "Projects" },
  // { href: "/learning",  section: null,        label: "Learning" },  // hidden — enable when ready
  { href: "/about-us",  section: null,        label: "About Us" },
  // { href: "/blog",      section: null,        label: "Blog" },       // hidden — enable when ready
  { href: "/",          section: "contact",   label: "Contact" },
];

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    // On a different page — store target, navigate to homepage
    sessionStorage.setItem("scrollTo", sectionId);
    window.location.href = "/";
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On homepage load, scroll to any pending section from cross-page nav
  useEffect(() => {
    if (pathname !== "/") return;
    const target = sessionStorage.getItem("scrollTo");
    if (!target) return;
    sessionStorage.removeItem("scrollTo");
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Arutech Consultancy"
            width={150}
            height={50}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={link.section ? (e) => { e.preventDefault(); scrollToSection(link.section!); } : undefined}
                className="px-3.5 py-2 text-sm text-gray-600 hover:text-orange-500 font-medium rounded-lg hover:bg-orange-50 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <a
            href="https://freenoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Try Freenoo →
          </a>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            className="px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all shadow-md shadow-orange-200 hover:shadow-orange-300"
          >
            Get Free Analysis
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
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
        <div className="lg:hidden bg-white/98 border-b border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={link.section ? (e) => { e.preventDefault(); setMenuOpen(false); scrollToSection(link.section!); } : () => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100 mt-2">
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection("contact"); }}
                className="block px-4 py-2.5 text-sm font-semibold text-center bg-orange-500 text-white rounded-xl"
              >
                Get Free Analysis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { products, statusLabel, statusClasses } from "@/lib/products";

const navLinks: { href: string; section: string | null; label: string; dropdown?: boolean }[] = [
  { href: "/",          section: "services",  label: "Services" },
  { href: "/products",  section: null,        label: "Products", dropdown: true },
  { href: "/",          section: "portfolio",  label: "Projects" },
  // { href: "/learning",  section: null,        label: "Learning" },  // hidden — enable when ready
  { href: "/about-us",  section: null,        label: "About Us" },
  { href: "/blog",      section: null,        label: "Blog" },
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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative group">
                <a
                  href={link.href}
                  aria-haspopup="true"
                  className={cn(
                    "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg hover:text-orange-500 hover:bg-orange-50 transition-colors",
                    pathname.startsWith("/products") ? "text-orange-500" : "text-gray-600"
                  )}
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {/* pt-2 bridges the gap so the menu stays open while the pointer moves down */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-80 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-150">
                  <div className="rounded-2xl bg-white border border-gray-200 shadow-xl p-2">
                    {products.map((p) => (
                      <div key={p.slug} className="rounded-xl hover:bg-orange-50 transition-colors">
                        <a href={`/products/${p.slug}`} className="block px-3 pt-3 pb-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-gray-900">{p.name}</span>
                            <span className={cn("px-2 py-0.5 text-[10px] font-semibold border rounded-full", statusClasses[p.status])}>
                              {statusLabel[p.status]}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 leading-snug">{p.tagline}</p>
                        </a>
                        <div className="px-3 pb-3 pt-1">
                          {p.privacyPolicy ? (
                            <a href={`/products/${p.slug}/privacy-policy`} className="text-[11px] font-medium text-orange-500 hover:underline">
                              Privacy Policy
                            </a>
                          ) : (
                            <span className="text-[11px] text-gray-400">Privacy policy at launch</span>
                          )}
                        </div>
                      </div>
                    ))}
                    <a href="/products" className="block mt-1 px-3 py-2.5 text-xs font-semibold text-gray-600 hover:text-orange-500 border-t border-gray-100">
                      View all products →
                    </a>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={link.section ? (e) => { e.preventDefault(); scrollToSection(link.section!); } : undefined}
                  className="px-3.5 py-2 text-sm text-gray-600 hover:text-orange-500 font-medium rounded-lg hover:bg-orange-50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
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
            {navLinks.map((link) => link.dropdown ? (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  aria-expanded={mobileProductsOpen}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                  <svg className={cn("w-4 h-4 transition-transform", mobileProductsOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileProductsOpen && (
                  <ul className="ml-4 mt-1 mb-2 pl-3 border-l border-gray-200 flex flex-col gap-0.5">
                    {products.map((p) => (
                      <li key={p.slug} className="py-1">
                        <a href={`/products/${p.slug}`} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:text-orange-500 font-medium">
                          {p.name}
                          <span className={cn("px-1.5 py-0.5 text-[9px] font-semibold border rounded-full", statusClasses[p.status])}>{statusLabel[p.status]}</span>
                        </a>
                        {p.privacyPolicy && (
                          <a href={`/products/${p.slug}/privacy-policy`} onClick={() => setMenuOpen(false)} className="block px-3 text-xs text-orange-500 hover:underline">
                            Privacy Policy
                          </a>
                        )}
                      </li>
                    ))}
                    <li>
                      <a href="/products" onClick={() => setMenuOpen(false)} className="block px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-orange-500">
                        View all products →
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
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

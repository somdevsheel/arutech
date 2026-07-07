"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "./theme-provider";

type Theme = "dark" | "light" | "normal";

const themes: { value: Theme; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    value: "dark",
    label: "Dark",
    desc: "Deep navy",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    value: "light",
    label: "Light",
    desc: "Bright white",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    value: "normal",
    label: "Normal",
    desc: "Soft slate",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
      </svg>
    ),
  },
];

const activeColors: Record<Theme, string> = {
  dark:   "bg-gray-100 border border-orange-400/40 text-orange-500",
  light:  "bg-orange-50 border border-orange-400/60 text-orange-600",
  normal: "bg-gray-100 border border-orange-400/40 text-orange-500",
};

const triggerColors: Record<Theme, string> = {
  dark:   "bg-slate-700 border-slate-600 text-slate-200 hover:border-orange-400/50 hover:text-orange-400",
  light:  "bg-white border-gray-300 text-gray-600 hover:border-orange-400/60 hover:text-orange-500",
  normal: "bg-slate-700 border-slate-600 text-slate-200 hover:border-orange-400/50 hover:text-orange-400",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = themes.find((t) => t.value === theme)!;

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all backdrop-blur-sm ${triggerColors[theme]}`}
        aria-label="Toggle theme"
      >
        {current.icon}
        <span className="hidden sm:inline text-xs">{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-gray-200 bg-white backdrop-blur-md shadow-xl overflow-hidden z-50">
          <div className="p-1.5">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => { setTheme(t.value); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all text-sm
                  ${theme === t.value
                    ? activeColors[t.value]
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
              >
                <span className="flex-shrink-0">{t.icon}</span>
                <div>
                  <p className="font-medium text-xs leading-none mb-0.5">{t.label}</p>
                  <p className="text-[10px] opacity-60">{t.desc}</p>
                </div>
                {theme === t.value && (
                  <svg className="w-3.5 h-3.5 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
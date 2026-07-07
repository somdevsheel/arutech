"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "arutech_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) setVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-[fadeUp_0.4s_ease_forwards]">
      <div className="bg-white border-t border-gray-200 shadow-xl shadow-gray-200/80">
        {/* Top accent line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

          {!showDetails ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon + text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-900">We use cookies</span>{" "}
                    to remember your preferences and improve your experience. See our{" "}
                    <Link href="/privacy-policy" className="text-orange-500 hover:text-orange-600 underline underline-offset-2 transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/cookie-policy" className="text-orange-500 hover:text-orange-600 underline underline-offset-2 transition-colors">
                      Cookie Policy
                    </Link>.
                  </p>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors mt-1 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Manage preferences
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-all"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all shadow-md shadow-orange-200"
                >
                  Accept All
                </button>
              </div>
            </div>

          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <h3 className="font-display font-semibold text-gray-900 text-sm">Cookie Preferences</h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Collapse"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {[
                  { name: "Essential Cookies", desc: "Required for the site to function. Cannot be disabled.", badge: "Always Active", badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                  { name: "Functional Cookies", desc: "Remember your settings and personalise your experience.", badge: "Always Active", badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                  { name: "Analytics Cookies", desc: "Help us understand how visitors use our website (Vercel Analytics, anonymous).", badge: "Optional", badgeClass: "bg-gray-100 text-gray-500 border-gray-200" },
                ].map((c) => (
                  <div key={c.name} className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-xs font-semibold text-gray-900">{c.name}</p>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border flex-shrink-0 ${c.badgeClass}`}>{c.badge}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-gray-100">
                <p className="text-[11px] text-gray-400">
                  We do not use advertising or tracking cookies.{" "}
                  <Link href="/cookie-policy" className="text-orange-500 hover:text-orange-600 underline underline-offset-2">Full Cookie Policy →</Link>
                </p>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={handleDecline} className="px-4 py-2 text-xs font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-all">Decline Optional</button>
                  <button onClick={handleAccept} className="px-5 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all shadow-md shadow-orange-200">Accept All</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

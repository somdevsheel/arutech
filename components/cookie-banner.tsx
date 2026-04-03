// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// type ConsentStatus = "accepted" | "declined" | null;

// const COOKIE_KEY = "arutech_cookie_consent";

// export default function CookieBanner() {
//   const [status, setStatus] = useState<ConsentStatus>(null);
//   const [visible, setVisible] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     // Small delay so it doesn't flash on load
//     const timer = setTimeout(() => {
//       const stored = localStorage.getItem(COOKIE_KEY) as ConsentStatus;
//       if (!stored) setVisible(true);
//       else setStatus(stored);
//     }, 800);
//     return () => clearTimeout(timer);
//   }, []);

//   function handleAccept() {
//     localStorage.setItem(COOKIE_KEY, "accepted");
//     setStatus("accepted");
//     setVisible(false);
//   }

//   function handleDecline() {
//     localStorage.setItem(COOKIE_KEY, "declined");
//     setStatus("declined");
//     setVisible(false);
//   }

//   if (!visible) return null;

//   return (
//     <>
//       {/* Backdrop blur on mobile */}
//       <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[90] md:hidden" />

//       {/* Banner */}
//       <div
//         className="fixed bottom-0 left-0 right-0 z-[100] md:bottom-5 md:left-5 md:right-auto md:max-w-md
//         animate-[fadeUp_0.4s_ease_forwards]"
//       >
//         <div className="bg-navy-900/98 backdrop-blur-md border border-slate-700/60 md:rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
//           {/* Top accent line */}
//           <div className="h-0.5 bg-gradient-to-r from-accent-500 via-teal-400 to-transparent" />

//           <div className="p-5">
//             {/* Header */}
//             <div className="flex items-start gap-3 mb-3">
//               <div className="w-9 h-9 rounded-xl bg-accent-500/15 border border-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                 <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//                     d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="font-display font-semibold text-white text-sm">We use cookies</h3>
//                 <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
//                   We use cookies to remember your preferences and improve your experience on our site.
//                 </p>
//               </div>
//             </div>

//             {/* Expandable details */}
//             <button
//               onClick={() => setShowDetails(!showDetails)}
//               className="flex items-center gap-1 text-xs text-accent-400 hover:text-accent-300 transition-colors mb-3"
//             >
//               <svg
//                 className={`w-3 h-3 transition-transform ${showDetails ? "rotate-180" : ""}`}
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//               {showDetails ? "Hide details" : "What cookies do we use?"}
//             </button>

//             {showDetails && (
//               <div className="mb-4 space-y-2 bg-navy-800/50 rounded-xl p-3 border border-slate-700/30">
//                 {[
//                   {
//                     name: "Theme preference",
//                     desc: "Saves your dark/light/normal mode choice",
//                     type: "Essential",
//                     color: "text-teal-400 bg-teal-400/10",
//                   },
//                   {
//                     name: "Cookie consent",
//                     desc: "Remembers that you've seen this banner",
//                     type: "Essential",
//                     color: "text-teal-400 bg-teal-400/10",
//                   },
//                 ].map((cookie) => (
//                   <div key={cookie.name} className="flex items-start gap-2.5">
//                     <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md flex-shrink-0 mt-0.5 ${cookie.color}`}>
//                       {cookie.type}
//                     </span>
//                     <div>
//                       <p className="text-xs font-medium text-slate-300">{cookie.name}</p>
//                       <p className="text-[10px] text-slate-500">{cookie.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//                 <p className="text-[10px] text-slate-600 pt-1 border-t border-slate-700/30">
//                   We do not use tracking, advertising, or analytics cookies.
//                 </p>
//               </div>
//             )}

//             {/* Actions */}
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={handleAccept}
//                 className="flex-1 py-2.5 bg-accent-500 hover:bg-accent-400 text-white text-xs font-semibold rounded-xl transition-all shadow-lg shadow-accent-500/20 hover:-translate-y-0.5"
//               >
//                 Accept All
//               </button>
//               <button
//                 onClick={handleDecline}
//                 className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium rounded-xl border border-white/10 transition-all"
//               >
//                 Decline
//               </button>
//             </div>

//             {/* Privacy link */}
//             <p className="text-[10px] text-slate-600 text-center mt-3">
//               Learn more in our{" "}
//               <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-400 underline underline-offset-2">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


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
      {/* Top accent border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />

      <div className="bg-navy-950/98 backdrop-blur-md border-t border-slate-800/80 shadow-2xl shadow-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

          {/* ── Collapsed (default) ── */}
          {!showDetails ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon + text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-accent-500/15 border border-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-200 text-sm leading-relaxed">
                    <span className="font-semibold text-white">We use cookies</span>{" "}
                    to remember your preferences and improve your experience.
                    See our{" "}
                    <Link href="/privacy-policy" className="text-accent-400 hover:text-accent-300 underline underline-offset-2 transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/cookie-policy" className="text-accent-400 hover:text-accent-300 underline underline-offset-2 transition-colors">
                      Cookie Policy
                    </Link>{" "}
                    for details.
                  </p>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-xs text-slate-500 hover:text-slate-400 transition-colors mt-0.5 flex items-center gap-1"
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
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-white bg-accent-500 hover:bg-accent-400 rounded-lg transition-all shadow-lg shadow-accent-500/20"
                >
                  Accept All
                </button>
              </div>
            </div>

          ) : (
            /* ── Expanded (manage preferences) ── */
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <h3 className="font-display font-semibold text-white text-sm">Cookie Preferences</h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label="Collapse"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>

              {/* Cookie types grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {[
                  {
                    name: "Essential Cookies",
                    desc: "Required for the site to function. Cannot be disabled.",
                    examples: "Theme preference, cookie consent",
                    required: true,
                    badge: "Always Active",
                    badgeClass: "bg-teal-400/15 text-teal-400 border-teal-400/20",
                  },
                  {
                    name: "Functional Cookies",
                    desc: "Remember your settings and personalise your experience.",
                    examples: "Language, display preferences",
                    required: true,
                    badge: "Always Active",
                    badgeClass: "bg-teal-400/15 text-teal-400 border-teal-400/20",
                  },
                  {
                    name: "Analytics Cookies",
                    desc: "Help us understand how visitors use our website.",
                    examples: "Vercel Analytics (anonymous)",
                    required: false,
                    badge: "Optional",
                    badgeClass: "bg-slate-500/15 text-slate-400 border-slate-600/30",
                  },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex flex-col gap-2 p-3 rounded-xl bg-navy-800/50 border border-slate-700/30"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-white">{c.name}</p>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border flex-shrink-0 ${c.badgeClass}`}>
                        {c.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{c.desc}</p>
                    <p className="text-[10px] text-slate-600 font-mono">{c.examples}</p>
                  </div>
                ))}
              </div>

              {/* Note + actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/60">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We do not use advertising or tracking cookies.{" "}
                  <Link href="/cookie-policy" className="text-accent-400 hover:text-accent-300 underline underline-offset-2">
                    Full Cookie Policy →
                  </Link>
                </p>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                  >
                    Decline Optional
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2 text-xs font-semibold text-white bg-accent-500 hover:bg-accent-400 rounded-lg transition-all shadow-lg shadow-accent-500/20"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface DBReview {
  _id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast by Design",
    description: "Performance is baked in from the start — not optimised later. Our architectures are benchmarked before deployment.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Built to Scale",
    description: "Whether you're serving 100 users or 100,000, our cloud setups grow with you without requiring a full rebuild.",
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Production-Grade",
    description: "Every deliverable is documented, tested, and structured for handoff. You own the code and can maintain it independently.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dedicated Team",
    description: "Small, senior team — you work directly with the people building your product. No juniors pushed onto client work.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

const testimonials = [
  {
    quote: "Arutech built our restaurant website exactly how we imagined it. The design is beautiful, loads fast, and our customers love using it. Highly recommend their work.",
    name: "Kamaldeep Singh",
    role: "Owner",
    company: "Shri Anandam Sweets & Restaurant",
    initials: "KS",
    gradient: "from-amber-400 to-orange-500",
    avatar: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#g1)" />
        <defs>
          <radialGradient id="g1" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F97316" />
          </radialGradient>
        </defs>
        {/* Head */}
        <circle cx="40" cy="30" r="13" fill="#FDDCB5" />
        {/* Hair / turban */}
        <path d="M27 26 Q28 14 40 13 Q52 14 53 26 Q48 20 40 20 Q32 20 27 26Z" fill="#1E40AF" />
        <ellipse cx="40" cy="13" rx="8" ry="4" fill="#2563EB" />
        {/* Eyes */}
        <ellipse cx="35" cy="29" rx="2" ry="2.5" fill="#1E293B" />
        <ellipse cx="45" cy="29" rx="2" ry="2.5" fill="#1E293B" />
        {/* Smile */}
        <path d="M35 35 Q40 39 45 35" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Beard */}
        <path d="M32 38 Q40 44 48 38 Q46 46 40 47 Q34 46 32 38Z" fill="#92400E" opacity="0.4" />
        {/* Shoulders */}
        <path d="M20 68 Q25 55 40 53 Q55 55 60 68Z" fill="#1E40AF" />
      </svg>
    ),
    rating: 5,
  },
  {
    quote: "I was honestly nervous handing over my portfolio — as an animator, it's everything. But Arutech just got it. The site feels creative, personal, and professional all at once. My clients keep complimenting it before they even see my actual work!",
    name: "Faleesha",
    role: "Content Creator & Animator",
    company: "Animax Agency",
    initials: "FL",
    gradient: "from-violet-400 to-purple-600",
    avatar: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#gf)" />
        <defs>
          <radialGradient id="gf" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#7C3AED" />
          </radialGradient>
        </defs>
        {/* Long hair back layer */}
        <path d="M25 28 Q22 42 24 60 Q30 66 40 67 Q50 66 56 60 Q58 42 55 28 Q50 18 40 17 Q30 18 25 28Z" fill="#3B1D8A" />
        {/* Head */}
        <circle cx="40" cy="31" r="13" fill="#FDDCB5" />
        {/* Hair top */}
        <path d="M27 27 Q28 14 40 13 Q52 14 53 27 Q49 19 40 19 Q31 19 27 27Z" fill="#3B1D8A" />
        {/* Side swept hair left */}
        <path d="M27 27 Q23 31 24 38 Q26 35 28 33Z" fill="#3B1D8A" />
        {/* Side swept hair right */}
        <path d="M53 27 Q57 31 56 38 Q54 35 52 33Z" fill="#3B1D8A" />
        {/* Eyelashes left */}
        <path d="M33 27 Q33.5 25.5 35 26" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Eyes */}
        <ellipse cx="35" cy="29" rx="2.2" ry="2.2" fill="#1E293B" />
        <ellipse cx="45" cy="29" rx="2.2" ry="2.2" fill="#1E293B" />
        <circle cx="35.8" cy="28.2" r="0.7" fill="white" />
        <circle cx="45.8" cy="28.2" r="0.7" fill="white" />
        {/* Eyelashes right */}
        <path d="M47 27 Q47.5 25.5 45 26" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Nose */}
        <path d="M39 32 Q40 34 41 32" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Lips */}
        <path d="M36.5 36.5 Q40 38.5 43.5 36.5" stroke="#E07070" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M36.5 36.5 Q40 35.5 43.5 36.5" stroke="#E07070" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Top — purple top/blouse */}
        <path d="M22 68 Q26 54 40 52 Q54 54 58 68Z" fill="#6D28D9" />
        {/* Collar detail */}
        <path d="M36 52 Q40 55 44 52" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Small earrings */}
        <circle cx="27" cy="33" r="1.5" fill="#C4B5FD" />
        <circle cx="53" cy="33" r="1.5" fill="#C4B5FD" />
      </svg>
    ),
    rating: 5,
  },
  {
    quote: "Working with Arutech was seamless from start to finish. They understood our vision for Digilab quickly and delivered a product we are proud to show clients.",
    name: "Sandeep Yadav",
    role: "Founder",
    company: "Digilab",
    initials: "SY",
    gradient: "from-orange-400 to-rose-500",
    avatar: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#g3)" />
        <defs>
          <radialGradient id="g3" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#E11D48" />
          </radialGradient>
        </defs>
        {/* Head */}
        <circle cx="40" cy="30" r="13" fill="#FDDCB5" />
        {/* Short hair */}
        <path d="M27 26 Q27 15 40 14 Q53 15 53 26 Q50 18 40 18 Q30 18 27 26Z" fill="#1E293B" />
        {/* Eyes */}
        <ellipse cx="35" cy="29" rx="2" ry="2.5" fill="#1E293B" />
        <ellipse cx="45" cy="29" rx="2" ry="2.5" fill="#1E293B" />
        {/* Glasses */}
        <rect x="31" y="26" width="8" height="6" rx="3" stroke="#475569" strokeWidth="1.5" fill="none" />
        <rect x="41" y="26" width="8" height="6" rx="3" stroke="#475569" strokeWidth="1.5" fill="none" />
        <line x1="39" y1="29" x2="41" y2="29" stroke="#475569" strokeWidth="1.5" />
        {/* Smile */}
        <path d="M35 36 Q40 40 45 36" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Suit / shirt */}
        <path d="M20 68 Q25 54 40 52 Q55 54 60 68Z" fill="#1E293B" />
        <path d="M37 52 L40 58 L43 52" fill="white" />
        <line x1="40" y1="58" x2="40" y2="65" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Trust() {
  const sectionRef = useScrollReveal();
  const [dbReviews, setDbReviews] = useState<DBReview[] | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then(r => r.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setDbReviews(data); })
      .catch(() => {});
  }, []);

  const extraReviews = (dbReviews || []).map(r => ({
    quote: r.quote,
    name: r.name,
    role: r.role,
    company: r.company,
    initials: r.initials,
    gradient: "from-gray-400 to-gray-600",
    avatar: null,
    rating: r.rating,
  }));

  return (
    <section id="trust" ref={sectionRef} className="relative py-14 lg:py-20 bg-white">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Client Feedback</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Built on{" "}
            <span className="gradient-text">Outcomes</span>
            , Not Hours
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-base sm:text-lg leading-relaxed">
            We measure success by what you ship and what stays running — not by the size of our invoice.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all`}
            >
              <div className={`inline-flex p-2.5 rounded-xl ${h.bg} ${h.color} mb-3`}>
                {h.icon}
              </div>
              <h3 className="font-display text-sm font-semibold text-gray-900 mb-1.5">{h.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials — 3-column grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`animate-on-scroll delay-${(i + 1) * 100} group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all overflow-hidden`}
            >
              {/* Subtle gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} rounded-t-2xl`} />

              {/* Quote icon */}
              <svg className="w-6 h-6 text-orange-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5 text-justify">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-md ring-2 ring-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}{t.company ? `, ${t.company}` : ""}</p>
                </div>
              </div>
            </div>
          ))}

          {/* DB reviews — same card style with initial avatar */}
          {extraReviews.map((t, i) => (
            <div
              key={t.name + i}
              className={`animate-on-scroll delay-${(i + 4) * 100} group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-2xl" />
              <svg className="w-6 h-6 text-orange-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <StarRating rating={t.rating || 5} />
              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5 text-justify">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex-shrink-0 shadow-md ring-2 ring-white bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}{t.company ? `, ${t.company}` : ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

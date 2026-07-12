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
    role: "Owner, Shri Anandam Sweets & Restaurant",
    initials: "KS",
    color: "bg-amber-500",
  },
  {
    quote: "Working with Arutech was seamless from start to finish. They understood our vision for Digilab quickly and delivered a product we are proud to show clients.",
    name: "Sandeep Yadav",
    role: "Founder, Digilab",
    initials: "SY",
    color: "bg-orange-500",
  },
  {
    quote: "They built my animation portfolio website with a level of creativity and attention to detail I did not expect. It perfectly represents my work as a content creator.",
    name: "Sandeep Tamta",
    role: "Content Creator & Animator",
    initials: "ST",
    color: "bg-violet-500",
  },
];

export default function Trust() {
  const sectionRef = useScrollReveal();
  const [dbReviews, setDbReviews] = useState<DBReview[] | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then(r => r.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setDbReviews(data); })
      .catch(() => {});
  }, []);

  const activeTestimonials = [
    ...testimonials.map(t => ({ ...t, rating: 5 })),
    ...(dbReviews || []).map(r => ({
      quote: r.quote,
      name: r.name,
      role: [r.role, r.company].filter(Boolean).join(", "),
      initials: r.initials,
      color: r.avatarColor,
      rating: r.rating,
    })),
  ];

  const len = activeTestimonials.length;

  // Clamp index if list shrinks (e.g. DB reviews unload)
  useEffect(() => {
    setActiveIdx(i => (i >= len ? 0 : i));
  }, [len]);

  useEffect(() => {
    if (paused || len <= 1) return;
    const timer = setInterval(() => setActiveIdx(i => (i + 1) % len), 5000);
    return () => clearInterval(timer);
  }, [paused, len]);

  function prev() { setActiveIdx(i => (i - 1 + len) % len); }
  function next() { setActiveIdx(i => (i + 1) % len); }

  return (
    <section id="trust" ref={sectionRef} className="relative py-14 lg:py-20 bg-white">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Client Feedback</span>
          </div>
          <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Built on{" "}
            <span className="gradient-text">Outcomes</span>
            , Not Hours
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed">
            We measure success by what you ship and what stays running — not by the size of our invoice.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-hover p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all`}
            >
              <div className={`inline-flex p-2.5 rounded-xl ${h.bg} ${h.color} mb-4`}>
                {h.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-gray-900 mb-2">{h.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slide track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${len * 100}%`,
                transform: `translateX(-${activeIdx * (100 / len)}%)`,
              }}
            >
              {activeTestimonials.map((t, i) => (
                <div key={t.name + i} style={{ width: `${100 / len}%` }}>
                  <div className="p-8 md:p-10 bg-gray-50 border border-gray-100">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className={`w-5 h-5 ${j < (t.rating || 5) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`} viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote mark */}
                    <svg className="w-8 h-8 text-orange-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                      {t.quote}
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold font-display flex-shrink-0`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows */}
          {len > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-200 transition-colors z-10"
                aria-label="Previous review"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-200 transition-colors z-10"
                aria-label="Next review"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators + progress */}
          {len > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {activeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === activeIdx ? "w-7 bg-orange-500" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

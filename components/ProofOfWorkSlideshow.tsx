"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/proof-work-1.jpeg",
    alt: "App Promotion AOS Campaign Results - May 2026",
    caption: "App Promotion AOS Campaigns",
    detail: "3 campaigns · 164 App Installs · 34,316 Reach · $0.96 Cost per Result",
    badge: "App Campaigns · AOS",
  },
  {
    src: "/images/proof-work-2.jpeg",
    alt: "App Promotion iOS Campaign Results - May 2026",
    caption: "App Promotion iOS Campaigns",
    detail: "4 campaigns · 122 App Installs · 28,402 Reach · $0.90 Cost per Result",
    badge: "App Campaigns · iOS",
  },
  {
    src: "/images/proof-work-3.jpeg",
    alt: "Meta Sales Campaign Purchases & Conversion Value",
    caption: "Sales Campaigns — Purchases & ROAS",
    detail: "1,180 Purchases · $0.15 Cost/Purchase · $61,269 Conv. Value · 340× ROAS",
    badge: "Sales Campaigns · Meta Ads",
  },
  {
    src: "/images/proof-work-4.jpeg",
    alt: "Meta Sales Campaign Reach & Impressions",
    caption: "Sales Campaigns — Reach & Impressions",
    detail: "5,853 Reach · 82,198 Impressions · $180.17 Total Spend",
    badge: "Sales Campaigns · Meta Ads",
  },
];

export default function ProofOfWorkSlideshow() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 200);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [playing, next]);

  return (
    <section className="py-16 lg:py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold">Proof of Work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Real Campaign Results</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Actual campaign data from real client accounts — from app install campaigns to e-commerce sales — showing the performance we consistently deliver for our clients.
          </p>
        </div>

        {/* Slideshow card */}
        <div className="relative bg-gray-50 rounded-2xl border border-violet-100 overflow-hidden shadow-lg">

          {/* Image area */}
          <div className="relative w-full bg-white" style={{ aspectRatio: "16/9" }}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  i === current && !transitioning ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain object-center p-2"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Prev / Next arrow buttons */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-violet-50 hover:border-violet-200 transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-violet-50 hover:border-violet-200 transition-all"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-semibold tracking-wide shadow">
                {slides[current].badge}
              </span>
            </div>

            {/* Slide counter */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 rounded-full bg-black/30 text-white text-[10px] font-mono">
                {current + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* Caption bar */}
          <div className="px-6 py-4 bg-white border-t border-gray-100">
            <p className="font-display font-semibold text-gray-900 text-sm">{slides[current].caption}</p>
            <p className="text-gray-500 text-xs mt-0.5">{slides[current].detail}</p>
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-center gap-5 mt-5">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-violet-500 w-6 h-2"
                    : "bg-gray-300 hover:bg-violet-300 w-2 h-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => setPlaying((p) => !p)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold hover:bg-violet-100 transition-all"
          >
            {playing ? (
              <>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

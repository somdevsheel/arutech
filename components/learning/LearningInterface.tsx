"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Lesson {
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  isFree?: boolean;
  type?: "video" | "article";
}

interface Course {
  _id: string;
  title: string;
  instructor: string;
  lessons: Lesson[];
  isCertified?: boolean;
}

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  if (url.includes("youtube.com/embed/")) return url;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?dnt=1`;
  return null;
}

const STORAGE_KEY = (id: string) => `arutech_lms_${id}`;

export default function LearningInterface({ course }: { course: Course }) {
  const lessons = course.lessons || [];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY(course._id));
      if (saved) {
        const { completedArr, lastIdx } = JSON.parse(saved);
        if (Array.isArray(completedArr)) setCompleted(new Set(completedArr));
        if (typeof lastIdx === "number") setCurrentIdx(lastIdx);
      }
    } catch {}
  }, [course._id]);

  // Save progress
  const saveProgress = useCallback((completedSet: Set<number>, idx: number) => {
    try {
      localStorage.setItem(STORAGE_KEY(course._id), JSON.stringify({
        completedArr: Array.from(completedSet),
        lastIdx: idx,
      }));
    } catch {}
  }, [course._id]);

  function markComplete(idx: number) {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(idx);
      saveProgress(next, idx);
      return next;
    });
    if (idx < lessons.length - 1) goTo(idx + 1);
  }

  function goTo(idx: number) {
    setCurrentIdx(idx);
    setSidebarOpen(false);
    saveProgress(completed, idx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const lesson = lessons[currentIdx];
  const embedUrl = lesson?.videoUrl ? getEmbedUrl(lesson.videoUrl) : null;
  const progress = lessons.length > 0 ? Math.round((completed.size / lessons.length) * 100) : 0;
  const allDone = completed.size === lessons.length && lessons.length > 0;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 h-14 flex items-center px-4 gap-4">
        <Link
          href={`/learning/${course._id}`}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Course</span>
        </Link>

        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">{course.title}</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden sm:block w-28 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-400 font-mono">{completed.size}/{lessons.length}</span>
        </div>

        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className="flex flex-1 pt-14">
        {/* Sidebar — desktop fixed, mobile overlay */}
        <aside className={`
          fixed lg:sticky top-14 left-0 h-[calc(100vh-3.5rem)] w-72 bg-gray-900 border-r border-gray-800
          flex flex-col z-40 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="p-4 border-b border-gray-800 flex-shrink-0">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Course Content</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <span className="text-xs text-orange-400 font-mono font-bold">{progress}%</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-2">
            {lessons.map((l, i) => {
              const isActive = i === currentIdx;
              const isDone = completed.has(i);
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-all ${
                    isActive ? "bg-orange-500/10 border-r-2 border-orange-500" : "hover:bg-white/5"
                  }`}
                >
                  {/* Status icon */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                    isDone
                      ? "bg-emerald-500 border-emerald-500"
                      : isActive
                      ? "border-orange-500 bg-orange-500/20"
                      : "border-gray-600 bg-gray-800"
                  }`}>
                    {isDone ? (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-400">{i + 1}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm leading-snug ${isActive ? "text-orange-400 font-semibold" : isDone ? "text-gray-400" : "text-gray-300"} truncate`}>
                      {l.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {l.type === "article" ? (
                        <span className="text-[10px] text-gray-600">📄 Article</span>
                      ) : (
                        <span className="text-[10px] text-gray-600">▶ Video</span>
                      )}
                      {l.duration && <span className="text-[10px] text-gray-600">{l.duration}</span>}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Certificate CTA */}
          {allDone && course.isCertified && (
            <div className="p-4 border-t border-gray-800 flex-shrink-0">
              <Link
                href={`/learning/${course._id}/certificate`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-xl transition-all"
              >
                🏆 Get Certificate
              </Link>
            </div>
          )}
        </aside>

        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/60 z-30 top-14" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 lg:ml-0">
          {lesson ? (
            <>
              {/* Video / Content */}
              {embedUrl ? (
                <div className="w-full bg-black">
                  <div className="max-w-5xl mx-auto">
                    <div className="aspect-video">
                      <iframe
                        src={embedUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ) : lesson.videoUrl ? (
                <div className="w-full bg-black">
                  <div className="max-w-5xl mx-auto">
                    <div className="aspect-video">
                      <video src={lesson.videoUrl} controls className="w-full h-full" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full bg-gray-900 flex items-center justify-center" style={{ minHeight: "320px" }}>
                  <div className="text-center text-gray-600 p-10">
                    <div className="text-5xl mb-3">📄</div>
                    <p className="text-sm">Article / Reading lesson</p>
                  </div>
                </div>
              )}

              {/* Lesson info */}
              <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Nav pills + complete button */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <button
                    onClick={() => goTo(currentIdx - 1)}
                    disabled={currentIdx === 0}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-gray-300 text-sm rounded-xl transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  <button
                    onClick={() => goTo(currentIdx + 1)}
                    disabled={currentIdx === lessons.length - 1}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-gray-300 text-sm rounded-xl transition-all"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="ml-auto">
                    {completed.has(currentIdx) ? (
                      <span className="flex items-center gap-2 px-4 py-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-semibold rounded-xl">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Completed
                      </span>
                    ) : (
                      <button
                        onClick={() => markComplete(currentIdx)}
                        className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-orange-500/20"
                      >
                        Mark as Complete
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Lesson heading */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-gray-600">Lesson {currentIdx + 1} of {lessons.length}</span>
                    {lesson.duration && <span className="text-xs text-gray-600">· {lesson.duration}</span>}
                  </div>
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">{lesson.title}</h1>
                </div>

                {/* Description */}
                {lesson.description && (
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 sm:p-6">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Lesson Notes</h2>
                    <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">{lesson.description}</div>
                  </div>
                )}

                {/* Course complete banner */}
                {allDone && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl text-center">
                    <div className="text-4xl mb-3">🏆</div>
                    <h2 className="font-display text-xl font-bold text-white mb-1">Course Complete!</h2>
                    <p className="text-gray-400 text-sm mb-4">You've finished all {lessons.length} lessons.</p>
                    {course.isCertified && (
                      <Link
                        href={`/learning/${course._id}/certificate`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all"
                      >
                        🏆 Download Certificate
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-96 text-gray-600">
              <p>No lessons available.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

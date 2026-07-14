"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  thumbnail: string;
  instructor: string;
  lessons: { title: string; duration: string }[];
  rating: number;
  enrollCount: number;
  totalDuration: string;
  createdAt: string;
  isCertified: boolean;
}

const LEVEL_COLORS: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-700 border-emerald-200",
  intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  advanced: "bg-red-100 text-red-700 border-red-200",
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function CourseCatalog({ courses, categories }: { courses: Course[]; categories: string[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    return courses
      .filter((c) => {
        const q = search.toLowerCase();
        const matchSearch =
          !search ||
          c.title.toLowerCase().includes(q) ||
          (c.description || "").toLowerCase().includes(q) ||
          (c.instructor || "").toLowerCase().includes(q);
        const matchCat = activeCategory === "All" || c.category === activeCategory;
        const matchLevel = activeLevel === "All" || c.level === activeLevel;
        return matchSearch && matchCat && matchLevel;
      })
      .sort((a, b) => {
        if (sort === "newest") return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        if (sort === "price-low") return (a.price || 0) - (b.price || 0);
        if (sort === "price-high") return (b.price || 0) - (a.price || 0);
        if (sort === "rating") return (b.rating || 0) - (a.rating || 0);
        return 0;
      });
  }, [courses, search, activeCategory, activeLevel, sort]);

  const allCategories = ["All", ...categories];

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-6">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search courses, topics, instructors…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 shadow-sm"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex gap-2 flex-wrap flex-1">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <select
            value={activeLevel}
            onChange={(e) => setActiveLevel(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            <option value="All">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500 mb-5">
        {filtered.length} {filtered.length === 1 ? "course" : "courses"} found
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🔍</div>
          <h3 className="font-display text-xl font-bold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-500 text-sm mb-4">Try adjusting your search or filters</p>
          <button
            onClick={() => { setSearch(""); setActiveCategory("All"); setActiveLevel("All"); }}
            className="text-sm text-orange-500 font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <Link
              key={course._id}
              href={`/learning/${course._id}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-50 relative overflow-hidden flex-shrink-0">
                {course.thumbnail ? (
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">🎓</div>
                )}
                {/* Badges */}
                {!course.price && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-lg shadow">FREE</span>
                )}
                {course.isCertified && (
                  <span className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-white/90 text-amber-600 text-[10px] font-bold rounded-lg shadow border border-amber-200">
                    🏆 Certificate
                  </span>
                )}
                {course.level && (
                  <span className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold rounded-lg capitalize border ${LEVEL_COLORS[course.level] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                    {course.level}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                {course.category && (
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{course.category}</span>
                )}
                <h3 className="font-display text-sm font-bold text-gray-900 mt-1 mb-1.5 line-clamp-2 group-hover:text-orange-600 transition-colors leading-snug">
                  {course.title}
                </h3>
                {course.description && (
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{course.description}</p>
                )}

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-400 mb-3">
                  {course.instructor && <span className="flex items-center gap-1">👤 {course.instructor}</span>}
                  {(course.lessons || []).length > 0 && <span>📚 {course.lessons.length} lessons</span>}
                  {course.totalDuration && <span>⏱ {course.totalDuration}</span>}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {course.rating ? (
                      <>
                        <StarRow rating={course.rating} />
                        <span className="text-xs font-bold text-amber-600">{course.rating.toFixed(1)}</span>
                      </>
                    ) : null}
                    {course.enrollCount ? (
                      <span className="text-[11px] text-gray-400">({course.enrollCount.toLocaleString()})</span>
                    ) : null}
                  </div>
                  <span className="text-sm font-bold text-orange-600">
                    {course.price ? `₹${course.price.toLocaleString()}` : "Free"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

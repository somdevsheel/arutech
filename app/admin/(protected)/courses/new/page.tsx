"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Lesson {
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  isFree: boolean;
  type: "video" | "article";
}

export default function NewCourse() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    thumbnail: "",
    instructor: "",
    instructorBio: "",
    level: "beginner",
    language: "English",
    totalDuration: "",
    status: "draft",
    isCertified: false,
    rating: "",
    enrollCount: "",
  });
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [whatYouLearn, setWhatYouLearn] = useState<string[]>([""]);
  const [requirements, setRequirements] = useState<string[]>([""]);

  function setField(k: string, v: string | boolean) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function addLesson() {
    setLessons((l) => [...l, { title: "", duration: "", videoUrl: "", description: "", isFree: false, type: "video" }]);
  }

  function updateLesson(i: number, k: keyof Lesson, v: string | boolean) {
    setLessons((l) => l.map((lesson, idx) => idx === i ? { ...lesson, [k]: v } : lesson));
  }

  function removeLesson(i: number) {
    setLessons((l) => l.filter((_, idx) => idx !== i));
  }

  function updateListItem(setter: React.Dispatch<React.SetStateAction<string[]>>, idx: number, val: string) {
    setter((prev) => prev.map((v, i) => (i === idx ? val : v)));
  }

  function addListItem(setter: React.Dispatch<React.SetStateAction<string[]>>) {
    setter((prev) => [...prev, ""]);
  }

  function removeListItem(setter: React.Dispatch<React.SetStateAction<string[]>>, idx: number) {
    setter((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      price: Number(form.price) || 0,
      rating: form.rating ? Number(form.rating) : undefined,
      enrollCount: form.enrollCount ? Number(form.enrollCount) : undefined,
      lessons,
      whatYouLearn: whatYouLearn.filter(Boolean),
      requirements: requirements.filter(Boolean),
    };
    const res = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/admin/courses");
    } else {
      alert("Failed to create course");
      setSaving(false);
    }
  }

  const inputCls = "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";
  const labelCls = "block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest";

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/courses" className="text-gray-500 hover:text-white transition-colors text-sm">← Courses</Link>
        <h1 className="text-2xl font-bold text-white">New Course</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic details */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Course Details</h2>

          <div>
            <label className={labelCls}>Title *</label>
            <input required value={form.title} onChange={(e) => setField("title", e.target.value)} placeholder="e.g. Complete AI Development Bootcamp" className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>Description</label>
            <textarea rows={4} value={form.description} onChange={(e) => setField("description", e.target.value)} placeholder="What students will learn..." className={inputCls + " resize-none"} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Category</label>
              <input value={form.category} onChange={(e) => setField("category", e.target.value)} placeholder="e.g. AI & Machine Learning" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Price (₹) — 0 for Free</label>
              <input type="number" min={0} value={form.price} onChange={(e) => setField("price", e.target.value)} placeholder="0" className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Level</label>
              <select value={form.level} onChange={(e) => setField("level", e.target.value)} className={inputCls}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Language</label>
              <input value={form.language} onChange={(e) => setField("language", e.target.value)} placeholder="e.g. English" className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Total Duration</label>
              <input value={form.totalDuration} onChange={(e) => setField("totalDuration", e.target.value)} placeholder="e.g. 4h 30m" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Thumbnail URL</label>
              <input value={form.thumbnail} onChange={(e) => setField("thumbnail", e.target.value)} placeholder="https://..." className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Rating (1–5)</label>
              <input type="number" min={1} max={5} step={0.1} value={form.rating} onChange={(e) => setField("rating", e.target.value)} placeholder="4.5" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Enrollment Count</label>
              <input type="number" min={0} value={form.enrollCount} onChange={(e) => setField("enrollCount", e.target.value)} placeholder="0" className={inputCls} />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <label className={labelCls}>Status</label>
              <select value={form.status} onChange={(e) => setField("status", e.target.value)} className={inputCls}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <label className="flex items-center gap-3 cursor-pointer mt-5">
              <div
                onClick={() => setField("isCertified", !form.isCertified)}
                className={`w-10 h-5 rounded-full transition-colors ${form.isCertified ? "bg-orange-500" : "bg-gray-700"} relative`}
              >
                <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${form.isCertified ? "translate-x-5" : ""}`} />
              </div>
              <span className="text-sm text-gray-300">Certificate Included</span>
            </label>
          </div>
        </div>

        {/* Instructor */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Instructor</h2>
          <div>
            <label className={labelCls}>Instructor Name</label>
            <input value={form.instructor} onChange={(e) => setField("instructor", e.target.value)} placeholder="Full name" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Instructor Bio</label>
            <textarea rows={3} value={form.instructorBio} onChange={(e) => setField("instructorBio", e.target.value)} placeholder="Short bio about the instructor..." className={inputCls + " resize-none"} />
          </div>
        </div>

        {/* What you'll learn */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">What You'll Learn</h2>
            <button type="button" onClick={() => addListItem(setWhatYouLearn)} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-xs rounded-xl transition-all">+ Add</button>
          </div>
          {whatYouLearn.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={item}
                onChange={(e) => updateListItem(setWhatYouLearn, i, e.target.value)}
                placeholder={`Learning outcome ${i + 1}`}
                className={inputCls + " flex-1"}
              />
              {whatYouLearn.length > 1 && (
                <button type="button" onClick={() => removeListItem(setWhatYouLearn, i)} className="text-red-400 hover:text-red-300 px-2 text-sm">✕</button>
              )}
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Requirements</h2>
            <button type="button" onClick={() => addListItem(setRequirements)} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-xs rounded-xl transition-all">+ Add</button>
          </div>
          {requirements.map((req, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={req}
                onChange={(e) => updateListItem(setRequirements, i, e.target.value)}
                placeholder={`Requirement ${i + 1}`}
                className={inputCls + " flex-1"}
              />
              {requirements.length > 1 && (
                <button type="button" onClick={() => removeListItem(setRequirements, i)} className="text-red-400 hover:text-red-300 px-2 text-sm">✕</button>
              )}
            </div>
          ))}
        </div>

        {/* Lessons */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Lessons ({lessons.length})</h2>
            <button type="button" onClick={addLesson} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 text-xs rounded-xl transition-all">+ Add Lesson</button>
          </div>

          {lessons.length === 0 && (
            <p className="text-gray-600 text-sm text-center py-6">No lessons yet. Click "Add Lesson" to start.</p>
          )}

          <div className="space-y-4">
            {lessons.map((lesson, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-4 space-y-3 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">Lesson {i + 1}</span>
                  <button type="button" onClick={() => removeLesson(i)} className="text-red-400 hover:text-red-300 text-xs">Remove</button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>Title</label>
                    <input value={lesson.title} onChange={(e) => updateLesson(i, "title", e.target.value)} placeholder="e.g. Introduction to AI" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Duration</label>
                    <input value={lesson.duration} onChange={(e) => updateLesson(i, "duration", e.target.value)} placeholder="e.g. 12:30" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>Type</label>
                    <select value={lesson.type} onChange={(e) => updateLesson(i, "type", e.target.value)} className={inputCls}>
                      <option value="video">Video</option>
                      <option value="article">Article</option>
                    </select>
                  </div>
                  <div className="flex items-end pb-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={lesson.isFree} onChange={(e) => updateLesson(i, "isFree", e.target.checked)} className="w-4 h-4 accent-orange-500" />
                      <span className="text-xs text-gray-400">Free Preview</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Video URL</label>
                  <input value={lesson.videoUrl} onChange={(e) => updateLesson(i, "videoUrl", e.target.value)} placeholder="YouTube or video URL" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Notes / Description</label>
                  <textarea rows={2} value={lesson.description} onChange={(e) => updateLesson(i, "description", e.target.value)} placeholder="Lesson notes..." className={inputCls + " resize-none"} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={saving} className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-xl transition-all">
            {saving ? "Saving..." : "Create Course"}
          </button>
          <Link href="/admin/courses" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold rounded-xl transition-all text-center">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Course {
  _id: string;
  title: string;
  status: "draft" | "published";
  category: string;
  price: number;
  lessons: unknown[];
  createdAt: string;
}

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const res = await fetch("/api/courses?admin=true");
    const data = await res.json();
    setCourses(data.courses || []);
    setLoading(false);
  }

  async function toggleStatus(id: string, current: string) {
    await fetch(`/api/courses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: current === "published" ? "draft" : "published" }),
    });
    load();
  }

  async function deleteCourse(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await fetch(`/api/courses/${id}`, { method: "DELETE" });
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Courses</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your LMS courses</p>
        </div>
        <Link href="/admin/courses/new" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all">
          + Add Course
        </Link>
      </div>

      {loading ? (
        <div className="text-gray-500 text-sm py-20 text-center">Loading...</div>
      ) : courses.length === 0 ? (
        <div className="text-gray-500 text-sm py-20 text-center">No courses yet. Create your first one!</div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Title</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Category</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Price</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Lessons</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Status</th>
                <th className="text-right text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={c._id} className={`border-b border-gray-800/50 hover:bg-white/2 transition-colors ${i === courses.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-6 py-4 text-white font-medium max-w-xs truncate">{c.title}</td>
                  <td className="px-6 py-4 text-gray-400">{c.category || "—"}</td>
                  <td className="px-6 py-4 text-gray-400">{c.price ? `₹${c.price}` : "Free"}</td>
                  <td className="px-6 py-4 text-gray-400">{(c.lessons || []).length}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(c._id, c.status)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        c.status === "published"
                          ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                          : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                      }`}
                    >
                      {c.status === "published" ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link href={`/admin/courses/${c._id}`} className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-all">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteCourse(c._id, c.title)}
                      className="px-3 py-1.5 text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  category: string;
  author: string;
  createdAt: string;
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const res = await fetch("/api/blog?admin=true");
    const data = await res.json();
    setPosts(data.posts || []);
    setLoading(false);
  }

  async function toggleStatus(id: string, current: string) {
    await fetch(`/api/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: current === "published" ? "draft" : "published" }),
    });
    load();
  }

  async function deletePost(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return;
    await fetch(`/api/blog/${id}`, { method: "DELETE" });
    load();
  }

  useEffect(() => { load(); }, []);

  function formatDate(s: string) {
    return new Date(s).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your blog content</p>
        </div>
        <Link href="/admin/blog/new" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all">
          + New Post
        </Link>
      </div>

      {loading ? (
        <div className="text-gray-500 text-sm py-20 text-center">Loading...</div>
      ) : posts.length === 0 ? (
        <div className="text-gray-500 text-sm py-20 text-center">No posts yet. Write your first blog post!</div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Title</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Category</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Author</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Date</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Status</th>
                <th className="text-right text-xs text-gray-500 uppercase tracking-widest px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p, i) => (
                <tr key={p._id} className={`border-b border-gray-800/50 hover:bg-white/2 transition-colors ${i === posts.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-6 py-4 text-white font-medium max-w-xs truncate">{p.title}</td>
                  <td className="px-6 py-4 text-gray-400">{p.category || "—"}</td>
                  <td className="px-6 py-4 text-gray-400">{p.author || "—"}</td>
                  <td className="px-6 py-4 text-gray-500 text-xs">{p.createdAt ? formatDate(p.createdAt) : "—"}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(p._id, p.status)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        p.status === "published"
                          ? "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"
                          : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                      }`}
                    >
                      {p.status === "published" ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    {p.status === "published" && (
                      <Link href={`/blog/${p.slug}`} target="_blank" className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-gray-400 rounded-lg transition-all">
                        View
                      </Link>
                    )}
                    <Link href={`/admin/blog/${p._id}`} className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-all">
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePost(p._id, p.title)}
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

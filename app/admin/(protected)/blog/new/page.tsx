"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBlogPost() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "",
    author: "Arutech Team",
    thumbnail: "",
    tags: "",
    status: "draft",
  });

  function setField(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
    };
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/admin/blog");
    } else {
      alert("Failed to create post");
      setSaving(false);
    }
  }

  const inputCls = "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";
  const labelCls = "block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest";

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blog" className="text-gray-500 hover:text-white transition-colors text-sm">← Blog Posts</Link>
        <h1 className="text-2xl font-bold text-white">New Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Post Details</h2>

          <div>
            <label className={labelCls}>Title *</label>
            <input required value={form.title} onChange={(e) => setField("title", e.target.value)} placeholder="e.g. How AI is Transforming Business in 2025" className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>Excerpt (short summary)</label>
            <textarea rows={2} value={form.excerpt} onChange={(e) => setField("excerpt", e.target.value)} placeholder="A brief summary shown on the blog listing page..." className={inputCls + " resize-none"} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={labelCls + " mb-0"}>Content</label>
              <span className="text-xs text-gray-600 font-mono">Markdown supported — **bold**, # heading, - list, `code`, &gt; quote</span>
            </div>
            <textarea rows={16} value={form.content} onChange={(e) => setField("content", e.target.value)} placeholder={`## Introduction\n\nWrite your post in **Markdown**...\n\n- Bullet point\n- Another point\n\n\`\`\`js\nconsole.log('code block')\n\`\`\``} className={inputCls + " resize-y font-mono text-xs leading-relaxed"} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Category</label>
              <input value={form.category} onChange={(e) => setField("category", e.target.value)} placeholder="e.g. AI & Technology" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Author</label>
              <input value={form.author} onChange={(e) => setField("author", e.target.value)} className={inputCls} />
            </div>
          </div>

          <div>
            <label className={labelCls}>Thumbnail URL</label>
            <input value={form.thumbnail} onChange={(e) => setField("thumbnail", e.target.value)} placeholder="https://..." className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>Tags (comma separated)</label>
            <input value={form.tags} onChange={(e) => setField("tags", e.target.value)} placeholder="AI, automation, digital marketing" className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>Status</label>
            <select value={form.status} onChange={(e) => setField("status", e.target.value)} className={inputCls}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={saving} className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-xl transition-all">
            {saving ? "Publishing..." : "Create Post"}
          </button>
          <Link href="/admin/blog" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold rounded-xl transition-all text-center">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

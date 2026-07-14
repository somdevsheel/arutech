import clientPromise from "@/lib/mongodb";

const DB = process.env.MONGODB_DB || "arutechdata";

async function getStats() {
  const client = await clientPromise.get();
  const db = client.db(DB);
  const [courses, published_courses, blog, published_blog, reviews] = await Promise.all([
    db.collection("courses").countDocuments(),
    db.collection("courses").countDocuments({ status: "published" }),
    db.collection("blog_posts").countDocuments(),
    db.collection("blog_posts").countDocuments({ status: "published" }),
    db.collection("reviews").countDocuments(),
  ]);
  return { courses, published_courses, blog, published_blog, reviews };
}

export default async function Dashboard() {
  const stats = await getStats();

  const cards = [
    { label: "Total Courses",     value: stats.courses,           sub: `${stats.published_courses} published`, icon: "🎓", color: "border-orange-500/30 bg-orange-500/5" },
    { label: "Blog Posts",        value: stats.blog,              sub: `${stats.published_blog} published`,    icon: "✍️", color: "border-sky-500/30 bg-sky-500/5" },
    { label: "Client Reviews",    value: stats.reviews,           sub: "total submitted",                      icon: "⭐", color: "border-emerald-500/30 bg-emerald-500/5" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back to Arutech Admin</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {cards.map((c) => (
          <div key={c.label} className={`rounded-2xl border ${c.color} p-6`}>
            <div className="text-2xl mb-2">{c.icon}</div>
            <p className="text-3xl font-bold text-white">{c.value}</p>
            <p className="text-sm font-medium text-gray-300 mt-1">{c.label}</p>
            <p className="text-xs text-gray-600 mt-0.5">{c.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {[
              { href: "/admin/courses/new", label: "Add New Course", icon: "➕" },
              { href: "/admin/blog/new",    label: "Write Blog Post", icon: "✍️" },
              { href: "/admin/courses",     label: "Manage Courses",  icon: "🎓" },
              { href: "/admin/blog",        label: "Manage Blog",     icon: "📝" },
            ].map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm transition-all"
              >
                <span>{a.icon}</span> {a.label}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Admin Credentials</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-500">URL</span>
              <span className="text-gray-300 font-mono">/admin</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-500">Password</span>
              <span className="text-gray-300 font-mono">••••••••••••</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Session</span>
              <span className="text-emerald-400 font-mono">Active ✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

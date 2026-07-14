import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import clientPromise from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Blog | Arutech Consultancy Services",
  description: "Insights on AI, web development, mobile apps, digital marketing, and business strategy from the Arutech team.",
  alternates: { canonical: "https://arutechconsultancy.com/blog" },
};

const DB = process.env.MONGODB_DB || "arutechdata";

async function getPosts(): Promise<Record<string, any>[]> {
  try {
    const client = await clientPromise.get();
    const db = client.db(DB);
    const posts = await db
      .collection("blog_posts")
      .find({ status: "published" })
      .sort({ createdAt: -1 })
      .toArray();
    return posts.map((p) => ({ ...p, _id: p._id.toString() })) as Record<string, any>[];
  } catch {
    return [];
  }
}

function formatDate(s: string) {
  return new Date(s).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-14 px-6 bg-gradient-to-br from-orange-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Blog</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            Insights from the{" "}
            <span className="text-orange-500">Arutech Team</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Practical writing on AI, cloud, web development, and digital growth — from a team that builds for production.
          </p>
        </div>
      </section>

      {posts.length > 0 ? (
        <section className="py-14 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                >
                  {post.thumbnail ? (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center">
                      <span className="text-5xl">✍️</span>
                    </div>
                  )}
                  <div className="p-5">
                    {post.category && (
                      <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">{post.category}</span>
                    )}
                    <h2 className="font-display text-base font-bold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.author || "Arutech Team"}</span>
                      {post.createdAt && <span>{formatDate(post.createdAt)}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">✍️</div>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Articles are on their way</h2>
            <p className="text-gray-600">We&apos;re writing practical content on AI, apps, and digital growth. Check back soon!</p>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

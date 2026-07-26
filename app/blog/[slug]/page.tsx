import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

marked.setOptions({ gfm: true, breaks: true });

const DB = process.env.MONGODB_DB || "arutechdata";

async function getPost(slug: string): Promise<Record<string, any> | null> {
  try {
    const client = await clientPromise.get();
    const db = client.db(DB);
    const filter = ObjectId.isValid(slug)
      ? { $or: [{ slug }, { _id: new ObjectId(slug) }], status: "published" }
      : { slug, status: "published" };
    const post = await db.collection("blog_posts").findOne(filter);
    if (!post) return null;
    return { ...post, _id: post._id.toString() } as Record<string, any>;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Arutech Blog`,
    description: post.excerpt || post.title,
    openGraph: post.thumbnail ? { images: [post.thumbnail] } : undefined,
  };
}

function formatDate(s: string) {
  return new Date(s).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const renderedContent = post.content ? await marked(post.content) : "";

  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Header */}
      <section className="pt-32 pb-10 px-6 bg-gradient-to-br from-orange-50 via-white to-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-600 transition-colors mb-6">
            ← Back to Blog
          </Link>

          {post.category && (
            <div className="mb-3">
              <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">{post.category}</span>
            </div>
          )}

          <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{post.author || "Arutech Team"}</span>
            {post.createdAt && <span>{formatDate(post.createdAt)}</span>}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="px-2.5 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-medium border border-orange-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="max-w-3xl mx-auto px-6 mt-8">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {renderedContent ? (
            <div
              className="prose prose-gray prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-orange-400 prose-blockquote:text-gray-600 prose-li:text-gray-700 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />
          ) : (
            <p className="text-gray-400 text-center py-10">Content coming soon.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Want to work with Arutech?</h2>
          <p className="text-gray-500 mb-6">We build AI, apps, and digital marketing strategies that drive real results.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-100">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

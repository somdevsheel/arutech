import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";

export const metadata: Metadata = {
  title: "Blog | Arutech Consultancy Services LLP",
  description: "Insights on AI, cloud infrastructure, web development, digital marketing, and software engineering from the Arutech team.",
  alternates: { canonical: "https://arutechconsultancy.com/blog" },
};

const upcoming = [
  { title: "How We Build AI Pipelines That Actually Work in Production", tag: "AI / ML" },
  { title: "React Native vs Flutter in 2026: Our Honest Take After 10+ Projects", tag: "Mobile" },
  { title: "The 5-Stage Marketing Funnel We Build for Every Client", tag: "Marketing" },
  { title: "Cloud Cost Optimisation: What We Learned From 20 Deployments", tag: "Cloud" },
  { title: "Next.js App Router for Agencies: When It Shines, When It Doesn't", tag: "Web Dev" },
  { title: "Free Business Analysis: What We Look For in Your Digital Presence", tag: "Strategy" },
];

export default function Blog() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 via-white to-white">
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

      {/* Coming soon */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full border border-amber-200 text-xs font-semibold font-mono uppercase tracking-widest mb-4">
            ● Coming Soon
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Articles in the pipeline</h2>
          <p className="text-gray-500">We&apos;re writing. Be the first to read it — subscribe below.</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {upcoming.map((post) => (
            <div key={post.title} className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-orange-300 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{post.title}</p>
              </div>
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full flex-shrink-0">
                {post.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Subscribe */}
        <div className="max-w-md mx-auto mt-12 text-center">
          <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Get notified when we publish</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400"
            />
            <button className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-orange-100">
              Notify Me
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
